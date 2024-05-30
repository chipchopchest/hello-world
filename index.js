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
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1]);
};
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const openTab = (url) => {
  window.open(url, "_blank");
};
let reversedStr = str.split("").reverse().join("");
let isValueInArray = arr.includes(value);
console.log(localStorage.getItem('username'));
let uniqueArr = [...new Set(arr)];
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
const uniqueNums = [...new Set(nums)];
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
let randomNum = Math.floor(Math.random() * maxNum);
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const currentUrl = window.location.href;
let isValueInArray = arr.includes(value);
let reversedStr = str.split("").reverse().join("");
function reverseString(str) {
  return str.split("").reverse().join("");
}
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const uniqueNums = [...new Set(nums)];
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
