"use strict";
/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * https://en.wikipedia.org/wiki/Merge_sort
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mergeSort;
const tslib_1 = require("tslib");
const exceptions_1 = require("@tsdotnet/exceptions");
const array_init_1 = tslib_1.__importDefault(require("@tsdotnet/array-init"));
function mergeSort(target) {
    if (!target)
        throw new exceptions_1.ArgumentNullException('target');
    const len = target.length;
    return len < 2 ? target : sort(target, 0, len, (0, array_init_1.default)(len));
}
function sort(target, start, end, temp) {
    if (end - start > 1) {
        const middle = Math.floor((start + end) / 2);
        sort(target, start, middle, temp);
        sort(target, middle, end, temp);
        for (let x = 0, len = target.length; x < len; x++) {
            temp[x] = target[x];
        }
        let k = start, i = start, j = middle;
        while (i < middle && j < end) {
            target[k++] = temp[i] > temp[j] ? temp[j++] : temp[i++];
        }
        while (i < middle) {
            target[k++] = temp[i++];
        }
    }
    return target;
}
//# sourceMappingURL=mergeSort.js.map