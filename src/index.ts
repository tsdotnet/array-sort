/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import * as sorting from './sorting/index';
import Order from '@tsdotnet/compare/dist/Order';
import createComparer from './createComparer';

type Primitive = string | number | boolean;
type Selector<TSource, TSelect> = (e: TSource) => TSelect;

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
