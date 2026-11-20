(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsdotnet/exceptions'), require('@tsdotnet/array-init')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsdotnet/exceptions', '@tsdotnet/array-init'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.arraySort = global.tsdotnet.arraySort || {}), global.tsdotnet.exceptions, global.tsdotnet.arrayInit));
})(this, (function (exports, exceptions, arrayInit) { 'use strict';

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    function insertionSort(target) {
        if (!target)
            throw new exceptions.ArgumentNullException('target');
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

    /*!
     * @author Sebastian Belmar / https://github.com/sebabelmar/
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * https://en.wikipedia.org/wiki/Merge_sort
     */
    function mergeSort(target) {
        if (!target)
            throw new exceptions.ArgumentNullException('target');
        const len = target.length;
        return len < 2 ? target : sort$1(target, 0, len, arrayInit(len));
    }
    function sort$1(target, start, end, temp) {
        if (end - start > 1) {
            const middle = Math.floor((start + end) / 2);
            sort$1(target, start, middle, temp);
            sort$1(target, middle, end, temp);
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

    /*!
     * @author Sebastian Belmar / https://github.com/sebabelmar/
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    function quickSort(target) {
        if (!target)
            throw new exceptions.ArgumentNullException('target');
        const len = target.length;
        return target.length < 2 ? target : sort(target, 0, len - 1);
    }
    function sort(target, low, high) {
        if (low < high) {
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

    exports.insertionSort = insertionSort;
    exports.mergeSort = mergeSort;
    exports.quickSort = quickSort;

}));
//# sourceMappingURL=array-sort.js.map
