export default function regexSplitString(str) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(str)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}
