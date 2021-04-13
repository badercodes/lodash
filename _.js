const _ = {
  // ideating - first check if number is withing range - if so return it - done
  // otherwise number is NOT withing range - so if its above highest bound return - highest bound
  // else return lowest bound
  clamp(arg, lower, higher) {
    if (arg <= higher && arg >= lower) return arg;

    if (arg > higher) return higher;
    else return lower;
  },
};

// Do not write or modify code below this line.
module.exports = _;
