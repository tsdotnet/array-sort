/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Selector} from '@tsdotnet/common-interfaces';
import {Comparison} from '@tsdotnet/compare/dist/Comparison';
import {compare} from '@tsdotnet/compare/dist/compare';
import CompareResult from '@tsdotnet/compare/dist/CompareResult';
import type from '@tsdotnet/compare/dist/type';
import Order from '@tsdotnet/compare/dist/Order';

function ensureArray<T> (value: T | T[]): T[]
{
	return value instanceof Array ? (value as T[]) : [value as T];
}

/**
 * A factory function that creates a comparer to be used in multi-dimensional sorting.
 *
 * <h4>Example</h4>
 * ```typescript
 * var myArray = [{a:1:b:2},{a:3,b:4},{a:1,b:3}];
 *
 * // First sort by a, then by b.
 * myArray.sort(
 *   createComparer(
 *     (e)=> [e.a, e.b],
 *     [Order.Ascending, Order.Descending]
 *   )
 * );
 *
 * // result: [{a:1,b:3},{a:1:b:2},{a:3,b:4}]
 * ```
 *
 * @param selector
 * @param order
 * @param equivalentToNaN
 * @returns {(a:TSource, b:TSource)=>CompareResult}
 */
export default function createComparer<TSource, TSelect extends type.Primitive> (
	selector: Selector<TSource, TSelect | TSelect[]>,
	order: Order | Order[] = Order.Ascending,
	equivalentToNaN: any   = NaN
): Comparison<TSource> {
	const nanHasEquivalent = !type.isTrueNaN(equivalentToNaN);

	return (a: TSource, b: TSource): CompareResult => {
		// Use an array always to ensure a single code path.
		const aValue = ensureArray(selector(a));
		const bValue = ensureArray(selector(b));
		const len = Math.min(aValue.length, bValue.length);

		const oArray = order instanceof Array ? order : null;
		for(let i = 0; i<len; i++)
		{
			let vA = aValue[i],
				vB = bValue[i];
			const o = oArray ? (i<oArray.length ? oArray[i] : Order.Ascending) : (order as Order);

			if(nanHasEquivalent)
			{
				if(type.isTrueNaN(vA)) vA = equivalentToNaN;
				if(type.isTrueNaN(vB)) vB = equivalentToNaN;
			}

			const r = compare(vA, vB);
			if(r!==CompareResult.Equal) return o*r;
		}

		return 0;
	};
}
