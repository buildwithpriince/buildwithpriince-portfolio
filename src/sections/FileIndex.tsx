import { LinkValue, Value } from '../components/Value'
import { fileNumber, files, type FileRecord } from '../content/files'

/*
 * 02 INDEX (SPEC §7). A list, not cards. Rows are real links so they are
 * keyboard reachable (§10). Hover preview and the full-screen file-open are
 * step 3; until then a row jumps to its record below.
 */
export function FileIndex() {
  return (
    <section id="index">
      <h2>Index</h2>
      <ol>
        {files.map((file, index) => (
          <li key={file.slug}>
            <a href={`#file-${fileNumber(index)}`}>
              FILE {fileNumber(index)} · {file.name} · <Value field={file.year} /> ·{' '}
              <Value field={file.domain} /> · <Value field={file.status} />
            </a>
          </li>
        ))}
      </ol>

      {files.map((file, index) => (
        <FileRecordView key={file.slug} file={file} number={fileNumber(index)} />
      ))}
    </section>
  )
}

function FileRecordView({ file, number }: { file: FileRecord; number: string }) {
  return (
    <article id={`file-${number}`}>
      <h3>
        FILE {number} — {file.name}
      </h3>
      <p>
        <Value field={file.description} />
      </p>
      <dl>
        <dt>Year</dt>
        <dd>
          <Value field={file.year} />
        </dd>
        <dt>Domain</dt>
        <dd>
          <Value field={file.domain} />
        </dd>
        <dt>Status</dt>
        <dd>
          <Value field={file.status} />
        </dd>
        <dt>Stack</dt>
        <dd>
          <Value field={file.stack} />
        </dd>
        <dt>Specified</dt>
        <dd>
          <Value field={file.attribution.specified} />
        </dd>
        <dt>Implementation</dt>
        <dd>
          <Value field={file.attribution.implementation} />
        </dd>
        <dt>Duration</dt>
        <dd>
          <Value field={file.attribution.duration} />
        </dd>
        {file.commits && (
          <>
            <dt>Commits</dt>
            <dd>
              <Value field={file.commits} />
            </dd>
          </>
        )}
        {file.outcome && (
          <>
            <dt>Outcome</dt>
            <dd>
              <Value field={file.outcome} />
            </dd>
          </>
        )}
        <dt>Repo</dt>
        <dd>
          <LinkValue field={file.repo} />
        </dd>
        <dt>Live</dt>
        <dd>
          <LinkValue field={file.live} />
        </dd>
      </dl>
    </article>
  )
}
