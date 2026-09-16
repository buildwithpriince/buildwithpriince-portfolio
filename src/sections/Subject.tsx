import { Record, RecordField } from '../components/Record'
import { Section } from '../components/Section'
import { Value } from '../components/Value'
import { todo } from '../content/todo'
import s from './Subject.module.css'

/*
 * 04 SUBJECT (SPEC §5). A personnel file: the portrait plate beside the
 * record, not a photo with prose wrapped around it.
 *
 * The childhood-photo hover §5 asks for is NOT built here. It needs the
 * second image loaded, and §10 caps all images on the site at 400 KB total
 * against the 3 MB currently sitting in public/. Building the hover before
 * that conversion means shipping the regression the conversion exists to
 * prevent, so it waits for the performance pass.
 */
export function Subject() {
  return (
    <Section id="subject" title="Subject">
      <div className={s.layout}>
        <figure className={s.plate}>
          <img
            className={s.portrait}
            src="/prince-portrait.jpeg"
            alt="Prince Agrawal"
            loading="lazy"
            decoding="async"
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
