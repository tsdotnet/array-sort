/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
export default function insertionSort(target) {
    if (!target)
        throw new ArgumentNullException('target');
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