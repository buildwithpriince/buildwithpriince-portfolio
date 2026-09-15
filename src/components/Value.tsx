import { isTodo, type Field } from '../content/todo'

/* Renders a content field, or a visible TODO marker when it is undecided. */
export function Value({ field }: { field: Field }) {
  if (isTodo(field)) return <span data-todo>TODO: {field.todo}</span>
  return <>{field}</>
}

/* A field that is a URL when known. */
export function LinkValue({ field }: { field: Field }) {
  if (isTodo(field)) return <Value field={field} />
  return <a href={field}>{field}</a>
}
