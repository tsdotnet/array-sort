/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * https://en.wikipedia.org/wiki/Merge_sort
 */
import { ArrayLikeWritable, Primitive } from '@tsdotnet/common-interfaces';
/**
 * Merge internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {number[]}
 */
export default function mergeSort<T extends Primitive, TArray extends ArrayLikeWritable<T>>(target: TArray): TArray;
