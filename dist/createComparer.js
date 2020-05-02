"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare/dist/compare");
const type_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/type"));
function ensureArray(value) {
    return value instanceof Array ? value : [value];
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
function createComparer(selector, order = 1 /* Ascending */, equivalentToNaN = NaN) {
    const nanHasEquivalent = !type_1.default.isTrueNaN(equivalentToNaN);
    return (a, b) => {
        // Use an array always to ensure a single code path.
        const aValue = ensureArray(selector(a));
        const bValue = ensureArray(selector(b));
        const len = Math.min(aValue.length, bValue.length);
        const oArray = order instanceof Array ? order : null;
        for (let i = 0; i < len; i++) {
            let vA = aValue[i], vB = bValue[i];
            const o = oArray ? (i < oArray.length ? oArray[i] : 1 /* Ascending */) : order;
            if (nanHasEquivalent) {
                if (type_1.default.isTrueNaN(vA))
                    vA = equivalentToNaN;
                if (type_1.default.isTrueNaN(vB))
                    vB = equivalentToNaN;
            }
            const r = compare_1.compare(vA, vB);
            if (r !== 0 /* Equal */)
                return o * r;
        }
        return 0;
    };
}
exports.default = createComparer;
//# sourceMappingURL=createComparer.js.map