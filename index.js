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
let randomNum = Math.floor(Math.random() * maxNum);
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const openTab = (url) => {
  window.open(url, "_blank");
};
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
let uniqueArr = [...new Set(arr)];
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
let reversedStr = str.split("").reverse().join("");
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
let uniqueArr = [...new Set(arr)];
const openTab = (url) => {
  window.open(url, "_blank");
};
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1]);
};
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const currentUrl = window.location.href;
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
console.log(localStorage.getItem('username'));
let uniqueArr = [...new Set(arr)];
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
let reversedStr = str.split("").reverse().join("");
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
let isValueInArray = arr.includes(value);
let randomNum = Math.floor(Math.random() * maxNum);
setTimeout(() => location.href = "https://codeshack.io", 10000);
class Orange extends Fruit {

    constructor() {
        super('Orange', 'Orange');
    }

    throw() {
        console.log('You threw the ' + this.name + '.');
    }

}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
setTimeout(() => location.href = "https://codeshack.io", 10000);
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const array = [...Array(10).keys()].map(i => i + 1);
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
console.log(localStorage.getItem('username'));
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
let isValueInArray = arr.includes(value);
class Orange extends Fruit {

    constructor() {
        super('Orange', 'Orange');
    }

    throw() {
        console.log('You threw the ' + this.name + '.');
    }

}
setTimeout(() => location.href = "https://codeshack.io", 10000);
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
let uniqueArr = [...new Set(arr)];
const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
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
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const uniqueNums = [...new Set(nums)];
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
setTimeout(() => location.href = "https://codeshack.io", 10000);
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const array = [...Array(10).keys()].map(i => i + 1);
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
let reversedStr = str.split("").reverse().join("");
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
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
let randomNum = Math.floor(Math.random() * maxNum);
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
setTimeout(() => location.href = "https://codeshack.io", 10000);
let isValueInArray = arr.includes(value);
let isValueInArray = arr.includes(value);
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
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
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
const uniqueNums = [...new Set(nums)];
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
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
class Orange extends Fruit {

    constructor() {
        super('Orange', 'Orange');
    }

    throw() {
        console.log('You threw the ' + this.name + '.');
    }

}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
let reversedStr = str.split("").reverse().join("");
setTimeout(() => location.href = "https://codeshack.io", 10000);
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
let randomNum = Math.floor(Math.random() * maxNum);
