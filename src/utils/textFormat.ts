/**
 * Utility functions for text formatting
 */

/**
 * Converts markdown bold syntax (**text**) to HTML strong tags
 * @param text - Text with markdown bold syntax
 * @returns HTML string with <strong> tags
 */
export const markdownToHtml = (text: string): string => {
  // Replace **text** with <strong>text</strong>
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
};

/**
 * Sanitizes and formats text for safe HTML rendering
 * @param text - Raw text that may contain markdown
 * @returns Sanitized HTML string
 */
export const formatText = (text: string): string => {
  return markdownToHtml(text);
};

/**
 * Parses markdown text and returns an array of React-renderable segments
 * @param text - Text with markdown bold syntax
 * @returns Array of strings and objects representing bold text
 */
export const parseMarkdown = (text: string): Array<string | { bold: string }> => {
  const parts: Array<string | { bold: string }> = [];
  let lastIndex = 0;
  const regex = /\*\*(.+?)\*\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add the bold text
    parts.push({ bold: match[1] });
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};
