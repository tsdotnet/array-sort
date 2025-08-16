(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./insertionSort", "./mergeSort", "./quickSort"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.quickSort = exports.mergeSort = exports.insertionSort = void 0;
    const tslib_1 = require("tslib");
    const insertionSort_1 = tslib_1.__importDefault(require("./insertionSort"));
    exports.insertionSort = insertionSort_1.default;
    const mergeSort_1 = tslib_1.__importDefault(require("./mergeSort"));
    exports.mergeSort = mergeSort_1.default;
    const quickSort_1 = tslib_1.__importDefault(require("./quickSort"));
    exports.quickSort = quickSort_1.default;
});
//# sourceMappingURL=index.js.map