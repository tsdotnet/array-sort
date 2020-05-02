/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
declare type Primitive = string | number | boolean;
interface ArrayLikeWritable<T> {
    length: number;
    [n: number]: T;
}
/**
 * Quick internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {[]}
 */
export default function quickSort<T extends Primitive, TArray extends ArrayLikeWritable<T>>(target: TArray): TArray;
export {};
