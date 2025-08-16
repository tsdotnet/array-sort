"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = insertionSort;
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
function insertionSort(target) {
    if (!target)
        throw new exceptions_1.ArgumentNullException('target');
    const len = target.length;
    for (let i = 1; i < len; i++) {
        let j = i, j1;
        while (j > 0 && target[(j1 = j - 1)] > target[j]) {
            const swap = target[j];
            target[j] = target[j1];
            target[j1] = swap;
            j--;
        }
    }
    return target;
}
//# sourceMappingURL=insertionSort.js.map