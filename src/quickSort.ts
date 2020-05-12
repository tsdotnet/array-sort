/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {ArrayLikeWritable, Primitive} from '@tsdotnet/common-interfaces';

/**
 * Quick internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {[]}
 */
export default function quickSort<T extends Primitive, TArray extends ArrayLikeWritable<T>> (target: TArray): TArray {
	if(!target) throw new ArgumentNullException('target');
	const len = target.length;
	return target.length<2 ? target : sort(target, 0, len - 1);
}

function sort<T extends Primitive, TArray extends ArrayLikeWritable<T>> (
	target: TArray,
	low: number,
	high: number
): TArray
{
	if(low<high)
	{
		// Partition first...
		let swap: T;
		const pivotIndex = Math.floor((low + high)/2);

		swap = target[pivotIndex];
		target[pivotIndex] = target[high];
		target[high] = swap;

		let i = low;
		for(let j = low; j<high; j++)
		{
			if(target[j]<target[high])
			{
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
