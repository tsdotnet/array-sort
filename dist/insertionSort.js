"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
function insertionSort(target) {
    if (!target)
        throw new ArgumentNullException_1.default('target');
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
exports.default = insertionSort;
//# sourceMappingURL=insertionSort.js.map