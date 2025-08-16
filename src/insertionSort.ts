/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {ArgumentNullException} from '@tsdotnet/exceptions';
import {ArrayLikeWritable, Primitive} from '@tsdotnet/common-interfaces';

/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 * @param target
 * @returns {[]}
 */
export default function insertionSort<T extends Primitive, TArray extends ArrayLikeWritable<T>> (
	target: TArray
): TArray {
	if(!target) throw new ArgumentNullException('target');
	const len = target.length;

	for(let i = 1; i<len; i++)
	{
		let j = i,
			j1: number;

		while(j>0 && target[(j1 = j - 1)]>target[j])
		{
			const swap = target[j];
			target[j] = target[j1];
			target[j1] = swap;
			j--;
		}
	}

	return target;
}
