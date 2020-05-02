/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import * as sorting from './sorting/index';
import createComparer from './createComparer';
export { sorting, createComparer };
export var arraySort;
(function (arraySort) {
    arraySort.quick = sorting.quickSort;
    function using(target, selector, order = 1 /* Ascending */, equivalentToNaN = NaN) {
        return target.sort(createComparer(selector, order, equivalentToNaN));
    }
    arraySort.using = using;
})(arraySort || (arraySort = {}));
//# sourceMappingURL=index.js.map