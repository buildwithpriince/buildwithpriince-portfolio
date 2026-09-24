import { Picture } from '../components/Picture'
import { Record, RecordField } from '../components/Record'
import { Section } from '../components/Section'
import { Value } from '../components/Value'
import { images } from '../content/images'
import { todo } from '../content/todo'
import s from './Subject.module.css'

/*
 * 04 SUBJECT (SPEC §5). A personnel file: the portrait plate beside the
 * record, not a photo with prose wrapped around it.
 *
 * The childhood-photo hover (SPEC-EXPERIENCE §5.6) is not built here yet; it
 * belongs to E7. Its image is already converted (content/images.ts).
 */
export function Subject() {
  return (
    <Section id="subject" label="subject">
      <div className={s.layout}>
        <figure className={s.plate}>
          {/* sizes matches .plate's max-width. */}
          <Picture
            className={s.portrait}
            image={images.portrait}
            alt="Prince Agrawal"
            sizes="(min-width: 18rem) 18rem, 100vw"
          />
          <figcaption className={s.plateLabel}>Agrawal, P.</figcaption>
        </figure>

        <div className={s.body}>
          <p className={s.opening}>
            <Value field={todo('opening, two or three sentences (SPEC §9)')} />
          </p>

          <Record>
            <RecordField label="Name">Prince Agrawal</RecordField>
            <RecordField label="Location">Vadodara</RecordField>
            <RecordField label="Study">Second-year CSE, MSU Baroda</RecordField>
            <RecordField label="Storefront">
              Builds and runs the online store for Agrawal Matching Centre, the family’s
              women’s clothing and fabric shop
            </RecordField>
            {/*
             * §5 requires this stated plainly, as a fact: people choosing to
             * build with him again is a signal no solo project carries.
             */}
            <RecordField label="Recurring team">Fivestack — Jeet, Vihan, Harshiv, Tanmay</RecordField>
            <RecordField label="SIH 2026">Team of six</RecordField>
          </Record>
        </div>
      </div>
    </Section>
  )
}
