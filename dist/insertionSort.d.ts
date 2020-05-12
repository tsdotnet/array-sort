/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable, Primitive } from '@tsdotnet/common-interfaces';
/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
export default function insertionSort<T extends Primitive, TArray extends ArrayLikeWritable<T>>(target: TArray): TArray;
