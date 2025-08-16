/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@tsdotnet/exceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = quickSort;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Quick internalSort O(n log (n))
     * Warning: Uses recursion.
     * @param target
     * @returns {[]}
     */
    function quickSort(target) {
        if (!target)
            throw new exceptions_1.ArgumentNullException('target');
        const len = target.length;
        return target.length < 2 ? target : sort(target, 0, len - 1);
    }
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
});
//# sourceMappingURL=quickSort.js.map