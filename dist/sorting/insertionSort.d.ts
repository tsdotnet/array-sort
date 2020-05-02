/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
declare type Primitive = string | number | boolean;
interface ArrayLikeWritable<T> {
    length: number;
    [n: number]: T;
}
/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
export default function insertionSort<T extends Primitive, TArray extends ArrayLikeWritable<T>>(target: TArray): TArray;
export {};
