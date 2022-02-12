"use strict";
/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Quick internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {[]}
 */
function quickSort(target) {
    if (!target)
        throw new ArgumentNullException_1.default('target');
    const len = target.length;
    return target.length < 2 ? target : sort(target, 0, len - 1);
}
exports.default = quickSort;
function sort(target, low, high) {
    if (low < high) {
        // Partition first...
        let swap;
        const pivotIndex = Math.floor((low + high) / 2);
        swap = target[pivotIndex];
        target[pivotIndex] = target[high];
        target[high] = swap;
        let i = low;
        for (let j = low; j < high; j++) {
            if (target[j] < target[high]) {
                swap = target[i];
                target[i] = target[j];
                target[j] = swap;
                i++;
            }
        }
        swap = target[i];
        target[i] = target[high];
        target[high] = swap;
        sort(target, low, i - 1);
        sort(target, i + 1, high);
    }
    return target;
}
//# sourceMappingURL=quickSort.js.map