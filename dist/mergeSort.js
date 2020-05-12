"use strict";
/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * https://en.wikipedia.org/wiki/Merge_sort
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const array_init_1 = tslib_1.__importDefault(require("@tsdotnet/array-init"));
/**
 * Merge internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {number[]}
 */
function mergeSort(target) {
    if (!target)
        throw new ArgumentNullException_1.default('target');
    const len = target.length;
    return len < 2 ? target : sort(target, 0, len, array_init_1.default(len));
}
exports.default = mergeSort;
function sort(target, start, end, temp) {
    if (end - start > 1) {
        // Step 1: Sort the left and right parts.
        const middle = Math.floor((start + end) / 2);
        sort(target, start, middle, temp);
        sort(target, middle, end, temp);
        // Step 2: Copy the original array
        for (let x = 0, len = target.length; x < len; x++) {
            temp[x] = target[x];
        }
        // Step 3: Create variables to traverse
        let k = start, i = start, j = middle;
        // Step 4: Merge: Move from the temp to target integers in order
        while (i < middle && j < end) {
            target[k++] = temp[i] > temp[j] ? temp[j++] : temp[i++];
        }
        // Step 5: Finalize merging in case right side of the array is bigger.
        while (i < middle) {
            target[k++] = temp[i++];
        }
    }
    return target;
}
//# sourceMappingURL=mergeSort.js.map