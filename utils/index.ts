function encodeMarkdownForJSON(markdown: string) {
  // Encode special characters
  let encoded = markdown
    .replace(/\\/g, '\\\\')   // Escape backslashes
    .replace(/"/g, '\\"')     // Escape double quotes
    .replace(/\n/g, '\\n');   // Escape line breaks

  return encoded;
}

function decodeMarkdownFromJSON(encodedMarkdown: string) {
  // Decode special characters
  let decoded = encodedMarkdown
    .replace(/\\\\/g, '\\')   // Unescape backslashes
    .replace(/\\"/g, '"')     // Unescape double quotes
    .replace(/\\n/g, '\n');   // Unescape line breaks

  return decoded;
}

export {
  encodeMarkdownForJSON,
  decodeMarkdownFromJSON
}