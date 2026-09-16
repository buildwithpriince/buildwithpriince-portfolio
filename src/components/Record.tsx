import type { ReactNode } from 'react'
import { LinkValue, Value } from './Value'
import type { Field } from '../content/todo'
import s from './Record.module.css'

/*
 * The record (SPEC §5): a label column and a value column, ruled between
 * rows — structured, mono, dense.
 *
 * Every structured block on the site uses this one component: the file-open,
 * the subject. The rules live here rather than being re-derived per section,
 * which is the drift §11 is a post-mortem of.
 */
export function Record({ children }: { children: ReactNode }) {
  return <dl className={s.record}>{children}</dl>
}

/*
 * Either a content field, which knows how to render itself as a TODO marker
 * when undecided, or arbitrary children for values the content layer does not
 * own. Not both.
 */
type RecordFieldProps =
  | { label: string; field: Field; link?: boolean; children?: never }
  | { label: string; children: ReactNode; field?: never; link?: never }

export function RecordField(props: RecordFieldProps) {
  /* Narrowed on the object, not on destructured names — a union does not
     survive destructuring. */
  return (
    <div className={s.field}>
      <dt className={s.label}>{props.label}</dt>
      <dd className={s.value}>
        {props.field === undefined ? (
          props.children
        ) : props.link ? (
          <LinkValue field={props.field} />
        ) : (
          <Value field={props.field} />
        )}
      </dd>
    </div>
  )
}
