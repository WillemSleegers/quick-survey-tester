"use client"

type TextFormatGuideProps = {
  sampleText: string
}

export function TextFormatGuide({ sampleText }: TextFormatGuideProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Text Format Guide</h3>
      <div className="bg-muted p-4 rounded-lg text-sm font-mono whitespace-pre-wrap">
        {sampleText}
      </div>
      <div className="text-sm space-y-2">
        <p>
          <strong>Key features:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code># Section</code> - Creates new pages
          </li>
          <li>
            <code>## Subsection</code> - Headers within the same page
          </li>
          <li>
            <code>Q1: Question text?</code> - Questions
          </li>
          <li>
            <code>&lt;Additional description&gt;</code> - Optional clarifying
            text below the question (shown in muted color)
          </li>
          <li>
            <code>- Option text</code> - Multiple choice options (no letters
            needed)
          </li>
          <li>
            <code>TEXT</code> / <code>NUMBER</code> - Input types
          </li>
          <li>
            <code>VARIABLE: name</code> - Store response (optional)
          </li>
          <li>
            <code>{`{variable}`}</code> - Simple variable replacement
          </li>
          <li>
            <code>{`{{condition|true_text|false_text}}`}</code> - Conditional
            text based on responses
          </li>
          <li>
            <code>SHOW_IF: condition</code> - Conditional display
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>After questions: Hide individual questions</li>
              <li>After section headers: Skip entire pages</li>
              <li>
                Example: <code># Advanced Topics</code> →{" "}
                <code>SHOW_IF: experience != "Beginner"</code>
              </li>
              <li>Sections with only titles are automatically hidden</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
