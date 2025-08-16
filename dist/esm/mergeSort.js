/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * https://en.wikipedia.org/wiki/Merge_sort
 */
import { ArgumentNullException } from '@tsdotnet/exceptions';
import arrayInit from '@tsdotnet/array-init';
/**
 * Merge internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {number[]}
 */
export default function mergeSort(target) {
    if (!target)
        throw new ArgumentNullException('target');
    const len = target.length;
    return len < 2 ? target : sort(target, 0, len, arrayInit(len));
}
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