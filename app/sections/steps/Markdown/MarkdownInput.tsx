"use client";
import Markdown from "react-markdown";
import { decodeMarkdownFromJSON, encodeMarkdownForJSON } from "@/utils";
import { useState } from "react";

const MarkdownInput = ({}: {}) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const encodedMarkdownCheatSheet =
    '# Markdown Cheat Sheet\\n\\n## Text Formatting\\n\\n- **Bold**: `**Bold Text**` or `__Bold Text__`\\n- *Italic*: `*Italic Text*` or `_Italic Text_`\\n- ~~Strikethrough~~: `~~Strikethrough Text~~`\\n\\n## Headings\\n\\n``\\n# H1 Heading\\n## H2 Heading\\n### H3 Heading\\n#### H4 Heading\\n##### H5 Heading\\n###### H6 Heading\\n``\\n\\n## Lists\\n\\n### Unordered List\\n\\n``\\n- Item 1\\n- Item 2\\n  - Subitem 1\\n  - Subitem 2\\n``\\n\\n### Ordered List\\n\\n``\\n1. First Item\\n2. Second Item\\n   1. Subitem 1\\n   2. Subitem 2\\n``\\n\\n## Links and Images\\n\\n- **Links**: `[Link Text](URL)`\\n- **Images**: `![Alt Text](Image URL)`\\n\\n## Code Blocks\\n\\nInline code: `` `Inline Code` ``\\n\\nCode block:\\n``\\nfunction greet(name) {\\n  return `Hello, ${name}!`;\\n}\\n``\\n\\n## Blockquotes\\n\\n``\\n> This is a blockquote.\\n> It can span multiple lines.\\n``\\n\\n## Horizontal Line\\n\\n``\\n---\\n``\\n\\n## Tables\\n\\n``\\n| Header 1 | Header 2 |\\n|----------|----------|\\n| Cell 1   | Cell 2   |\\n| Cell 3   | Cell 4   |\\n``\\n\\n## Conclusion\\n\\nThis cheat sheet provides a quick reference to common Markdown syntax and formatting options. By familiarizing yourself with these elements, you can quickly and effectively create structured and formatted documents using Markdown."';

  return (
    <div className="flex h-full overflow-x-hidden">
      <div className="w-1/2 flex p-8">
        <div
          className={`fixed text-xl ml-8 mb-8 left-0 bottom-0 ${
            markdown.length < 100 || markdown.length > 10000
              ? "text-red-500"
              : "text-green-500"
          }`}>
          {markdown.length}
        </div>
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="# Start with the Title"
          name="markdown"
          className="w-full h-full outline-none"
        />
      </div>
      <div className="divider divider-horizontal "></div>
      <div className="p-8 w-1/2 relative">
        <button
          onClick={() => setIsPreview((current) => !current)}
          className="fixed btn btn-secondary mr-8 mt-8 right-0 top-0">
          {isPreview ? "Switch to Cheat Sheet" : "Switch to Preview"}
        </button>

        {isPreview ? (
          <Markdown className="prose mb-12 px-4 lg:px-0">{markdown}</Markdown>
        ) : (
          <p className="mb-12 px-4 lg:px-0">
            <MarkdownCheatSheet />
          </p>
        )}

        <button
          onClick={() => setIsPreview((current) => !current)}
          className={`fixed btn btn-secondary mb-8 mr-8 bottom-0 right-0 ${
            (markdown.length < 100 || markdown.length > 10000) && "btn-disabled"
          }`}>
          Done
        </button>
      </div>
    </div>
  );
};

const MarkdownCheatSheet = () => (
  <div className="prose">
    <h1>Markdown Cheat Sheet</h1>
    <h2>Text Formatting</h2>
    <ul>
      <li>
        <strong>Bold</strong>:{" "}
        <pre>
          {"**"}Bold Text{"**"}
        </pre>
      </li>
      <li>
        <em>Italic</em>:{" "}
        <pre>
          {"*"}Italic Text{"*"}
        </pre>
      </li>
      <li>
        <strike>Strikethrough</strike>:{" "}
        <pre>
          {"~~"}Strikethrough Text{"~~"}
        </pre>
      </li>
    </ul>
    <h2>Headings</h2>
    <h1>Heading 1</h1>
    <pre># Heading 1</pre>
    <h2>Heading 2</h2>
    <pre># Heading 2</pre>
    <h3>Heading 3</h3>
    <pre># Heading 3</pre>
    <h4>Heading 4</h4>
    <pre># Heading 4</pre>
    <h5>Heading 5</h5>
    <pre># Heading 5</pre>

    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <pre>- Item 1 - Item 2 - Subitem 1 - Subitem 2</pre>
    <h3>Ordered List</h3>
    <pre>1. First Item 2. Second Item 1. Subitem 1 2. Subitem 2</pre>
    <h2>Links and Images</h2>
    <ul>
      <li>
        <strong>Links</strong>: <pre>{"[Link Text](URL)"}</pre>
      </li>
      <a href="#">Link</a>
      <li>
        <strong>Images</strong>: <pre>{"![Alt Text](Image URL)"}</pre>
      </li>
      <img
        src="https://images.unsplash.com/photo-1702893574757-e3b26e142b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNDI4NzkwNQ&ixlib=rb-4.0.3&q=80&w=1080"
        alt="example image"
        className="w-90 aspect-auto"
      />
    </ul>
    <h2>Blockquotes</h2>
    <pre>{">"} This is a blockquote.</pre>
    <pre>{">"} It can span multiple lines.</pre>
    <p className="pl-4 border-l-4 border-gray-400 italic">
      This is a blockquote.
    </p>
    <p className="pl-4 border-l-4 border-gray-400 italic">
      It can span multiple lines.
    </p>
    <h2>Horizontal Line</h2>
    <pre>---</pre>
    <div className="w-full h-[1px] bg-gray-400"></div>
    <h2>Tables</h2>
    <pre>
      {`| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        | `}
    </pre>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </tr>
        <tr>
          <td>Cell 3</td>
          <td>Cell 4</td>
        </tr>
      </tbody>
    </table>
    <h2>Conclusion</h2>
    <p>
      This cheat sheet provides a quick reference to common Markdown syntax and
      formatting options. By familiarizing yourself with these elements, you can
      quickly and effectively create structured and formatted documents using
      Markdown.
    </p>
  </div>
);

export default MarkdownInput;
