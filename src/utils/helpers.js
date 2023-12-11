/**
 * Generates an array of numbers within a specified range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - An array of numbers within the specified range.
 */
export const numberRange = (start, end) => {
  return new Array(end - start).fill().map((d, i) => i + start);
}