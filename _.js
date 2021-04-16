const _ = {
  clamp(arg, lower, higher) {
    // ideating - first check if number is withing range - if so return it - done
    // otherwise number is NOT withing range - so if its above highest bound return - highest bound
    // else return lowest bound

    // my solution
    if (arg <= higher && arg >= lower) return arg;

    if (arg > higher) return higher;
    else return lower;

    // solution suggested by codecademy
    // let lowerClampedValue = Math.max(arg, lower);
    // return Math.min(lowerClampedValue, higher);
  },
  inRange(number, start, end) {
    // ideating - first check if end is supplied - if so do operations
    // pertaining to end existing -
    // if end doesn't exist - different code block that uses 0 as start
    // and "start" as end
    // In both cases - I need to take account negative range and swap start/end

    // my solution
    // assuming end was supplied and therefore start exists as well
    if (end) {
      if (end > start) return number >= start && number < end;
      // below for assuming that end > start (negative number range)
      else return number >= end && number < start;
    }

    // here we assume end is NOT supplied
    if (start >= 0) return number >= 0 && number < start;
    // assuming start provided is NEGATIVE
    else return number < 0 && number >= start;
  },
  words(str) {
    // my solution without using helper or built in JS funcs
    let temp = "";
    const returnArr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") temp += str[i];
      else {
        returnArr.push(temp);
        temp = "";
      }
    }
    // // last word will be in temp and loop won't run again
    if (temp.length > 0) returnArr.push(temp);
    return returnArr;

    // codecademy solution
    // return str.split(" ");
  },
  pad(str, num) {
    let returnStr = "";

    let numOfSpaces = num - str.length;

    if (numOfSpaces <= 0) return str;
    let spaces;
    let isOdd = numOfSpaces % 2;
    if (isOdd) {
      spaces = Math.floor(numOfSpaces / 2);
      for (let i = 0; i < spaces; i++) {
        returnStr += " ";
      }
      returnStr += str;
      for (let i = 0; i < spaces + 1; i++) {
        returnStr += " ";
      }
    } else {
      let spaces = numOfSpaces / 2;
      for (let i = 0; i < spaces; i++) {
        returnStr += " ";
      }
      returnStr += str;
      for (let i = 0; i < spaces; i++) {
        returnStr += " ";
      }
    }
    return returnStr;

    // codecademy solution
    // if (str.length >= num) return str;
    // let leadingSpaces = Math.floor((num - str.length) / 2);
    // let endingSpaces = num - leadingSpaces - str.length;
    // let space = " ";
    // let returnString = space.repeat(leadingSpaces);
    // returnString += str;
    // returnString += space.repeat(endingSpaces);
    // return returnString;
  },
  has(obj, key) {
    // ideating - check if there's a value at obj[key]
    // if has then return true - otherwise return false
    // can do implicit truthy/falsy return due to possibility
    // of returning undefined.
    if (obj[key]) return true;
    else return false;
  },
  invert(obj) {
    // ideating - will utilize an Objects method to destructure
    // object then reverse the values to key and keys to values
    // then I will delete original keys.
    let returnObj = {};
    for (const [key, value] of Object.entries(obj)) {
      returnObj[value] = key;
    }
    return returnObj;
  },
  findKey(obj, func) {
    // ideating - grab the names of the keys using Object.keys
    // pass object with the key to function passed
    // return truth if truthy or falsy otherwise

    // my solution
    // let found;
    // for (const item of Object.keys(obj)) {
    //   if (func(obj[item])) return item;
    // }
    // return found;

    // codecademy solution
    for (const item in obj) {
      console.log(item);
      if (func(obj[item])) return item;
    }
    return undefined;
  },
  drop(arr, num) {
    // ideating - check if num doesnt exist then slice 1 and return
    // if num exists - check if its  bigger than or === arr length
    // in that case return empty array - otherwise slice array by num

    if (!num) return arr.slice(1);

    return arr.slice(num);
  },
  dropWhile(arr, func) {
    // ideating - run a classic for loop through each element of array
    // keep running predicate and passing it the 3 required parameters
    // once predicate function retruns falsey - get out of the loop
    // use index of loop to slice the array and return it
    // slice doesn't mutate so I can return arr.slice(x);
    let i;
    for (i = 0; i < arr.length; i++) {
      if (!func(arr[i], i, arr)) break;
    }
    return arr.slice(i);
  },
  chunk(arr, size) {
    // ideating - first check size if doesn't exist - set it to 1
    // instead of using Modulus - I'll use what they used previously
    // by invoking Math.floor() on division to get integer division and use
    // length - (chunks * lengthOfChunk) to get remainder chunk
    // Then I need to run a nested loop structure to iterate through main array
    // then sub-iterate through smaller chunk array and push it to main array
    // this thereby creates an array of arrays
    // lastly, I need to handle the extra's due to uneven division

    if (!size) size = 1;
    let chunkLength = Math.floor(arr.length / size);
    let subTotal = chunkLength * size;
    let remainder = arr.length - subTotal;
    let temp = [];
    let returnArr = [];
    let i = 0;
    let j;

    while (i < subTotal) {
      for (j = 0; j < chunkLength; j++) {
        temp.push(arr[i]);
        i++;
      }
      returnArr.push(temp);
      temp = [];
    } //close while

    if (remainder > 0) {
      while (i < arr.length) {
        temp.push(arr[i]);
        i++;
      }
      returnArr.push(temp);
    }
    return returnArr;
  },
};

// Do not write or modify code below this line.
module.exports = _;
