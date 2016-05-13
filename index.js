/**
 * Step thru a range of numbers inclusively.
 *
 * @param {number} start Starting element
 * @param {number} end Ending element
 * @param {number} step Element used to step thru
 * @returns {array} arr Returns an array of elements
 *
 */

module.exports = function (start, end, step) {
  var arr = [];
  while(start <= end) {
    arr.push(start);
    step ? start += step : start += 1;
  }
  return arr;
};
