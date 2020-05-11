/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Primitive, Selector} from '@tsdotnet/common-interfaces';
import * as sorting from './sorting/index';
import Order from '@tsdotnet/compare/dist/Order';
import createComparer from './createComparer';

export {
	sorting,
	createComparer
};

export namespace arraySort
{
	export const quick = sorting.quickSort;

	export function using<TSource, TSelect extends Primitive> (
		target: TSource[],
		selector: Selector<TSource, TSelect | TSelect[]>,
		order: Order | Order[] = Order.Ascending,
		equivalentToNaN: any   = NaN
	): TSource[]
	{
		return target.sort(createComparer(selector, order, equivalentToNaN));
	}
}
