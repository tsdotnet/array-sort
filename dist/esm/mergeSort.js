import { ArgumentNullException } from '@tsdotnet/exceptions';
import arrayInit from '@tsdotnet/array-init';

/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * https://en.wikipedia.org/wiki/Merge_sort
 */
function mergeSort(target) {
    if (!target)
        throw new ArgumentNullException('target');
    const len = target.length;
    return len < 2 ? target : sort(target, 0, len, arrayInit(len));
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

export { mergeSort as default };
//# sourceMappingURL=mergeSort.js.map
