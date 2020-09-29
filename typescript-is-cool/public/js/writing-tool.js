let i = 0;

const writtingTool = (word, target) => {
  if (word instanceof Array) {
    word.forEach(w => {
      writtingTool(w, target)
      target.innerHTML = '';
      i = 0
    })
  } else {
    if (i < word.length) {
      target.innerHTML += word.charAt(i);
      i++;
      setTimeout(() => writtingTool(word, target), 100);
    }
  }
};
export default writtingTool;
