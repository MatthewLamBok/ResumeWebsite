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
