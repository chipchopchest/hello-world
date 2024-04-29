const string = 'Hello world'
// comment
console.log(string)

alert(string)
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
function reverseString(str) {
  return str.split("").reverse().join("");
}
