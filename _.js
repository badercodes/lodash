const _ = {
  clamp(arg, lower, higher) {
    // ideating - first check if number is withing range - if so return it - done
    // otherwise number is NOT withing range - so if its above highest bound return - highest bound
    // else return lowest bound

    // my solution
    // if (arg <= higher && arg >= lower) return arg;

    // if (arg > higher) return higher;
    // else return lower;

    // solution suggested by codecademy
    let lowerClampedValue = Math.max(arg, lower);
    return Math.min(lowerClampedValue, higher);
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
};

console.log(_.inRange(3, 7, 2));

// Do not write or modify code below this line.
module.exports = _;
