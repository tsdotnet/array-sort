/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import * as sorting from './sorting/index';
import Order from '@tsdotnet/compare/dist/Order';
import createComparer from './createComparer';
declare type Primitive = string | number | boolean;
declare type Selector<TSource, TSelect> = (e: TSource) => TSelect;
export { sorting, createComparer };
export declare namespace arraySort {
    const quick: typeof sorting.quickSort;
    function using<TSource, TSelect extends Primitive>(target: TSource[], selector: Selector<TSource, TSelect | TSelect[]>, order?: Order | Order[], equivalentToNaN?: any): TSource[];
}