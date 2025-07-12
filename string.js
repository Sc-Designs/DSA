function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  let letters = new Set();

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    if (ch >= "a" && ch <= "z") {
      letters.add(ch);
    }
  }
  return letters.size === 26;
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));