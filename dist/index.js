"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sorting = tslib_1.__importStar(require("./sorting/index"));
exports.sorting = sorting;
const createComparer_1 = tslib_1.__importDefault(require("./createComparer"));
exports.createComparer = createComparer_1.default;
var arraySort;
(function (arraySort) {
    arraySort.quick = sorting.quickSort;
    function using(target, selector, order = 1 /* Ascending */, equivalentToNaN = NaN) {
        return target.sort(createComparer_1.default(selector, order, equivalentToNaN));
    }
    arraySort.using = using;
})(arraySort = exports.arraySort || (exports.arraySort = {}));
//# sourceMappingURL=index.js.map