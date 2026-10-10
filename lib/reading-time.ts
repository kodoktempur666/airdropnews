export function calculateReadingTime(text: string): number {
  if (!text) return 1;
  // Remove markdown formatting
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/!\[.*?\]\(.*?\)/g, '') // images
    .replace(/\[.*?\]\(.*?\)/g, '$1') // links
    .replace(/[#*`_~>-]/g, '') // markdown tokens
    .trim();

  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}
