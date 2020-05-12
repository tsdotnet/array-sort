/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable, Primitive } from '@tsdotnet/common-interfaces';
/**
 * Quick internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {[]}
 */
export default function quickSort<T extends Primitive, TArray extends ArrayLikeWritable<T>>(target: TArray): TArray;
