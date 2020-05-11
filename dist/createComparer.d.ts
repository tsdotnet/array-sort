/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Selector } from '@tsdotnet/common-interfaces';
import { Comparison } from '@tsdotnet/compare/dist/Comparison';
import type from '@tsdotnet/compare/dist/type';
import Order from '@tsdotnet/compare/dist/Order';
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
export default function createComparer<TSource, TSelect extends type.Primitive>(selector: Selector<TSource, TSelect | TSelect[]>, order?: Order | Order[], equivalentToNaN?: any): Comparison<TSource>;
