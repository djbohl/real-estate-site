/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dequal@2.0.3";
exports.ids = ["vendor-chunks/dequal@2.0.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var has = Object.prototype.hasOwnProperty;\nfunction find(iter, tar, key) {\n    for (key of iter.keys()){\n        if (dequal(key, tar)) return key;\n    }\n}\nfunction dequal(foo, bar) {\n    var ctor, len, tmp;\n    if (foo === bar) return true;\n    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {\n        if (ctor === Date) return foo.getTime() === bar.getTime();\n        if (ctor === RegExp) return foo.toString() === bar.toString();\n        if (ctor === Array) {\n            if ((len = foo.length) === bar.length) {\n                while(len-- && dequal(foo[len], bar[len]));\n            }\n            return len === -1;\n        }\n        if (ctor === Set) {\n            if (foo.size !== bar.size) {\n                return false;\n            }\n            for (len of foo){\n                tmp = len;\n                if (tmp && typeof tmp === \"object\") {\n                    tmp = find(bar, tmp);\n                    if (!tmp) return false;\n                }\n                if (!bar.has(tmp)) return false;\n            }\n            return true;\n        }\n        if (ctor === Map) {\n            if (foo.size !== bar.size) {\n                return false;\n            }\n            for (len of foo){\n                tmp = len[0];\n                if (tmp && typeof tmp === \"object\") {\n                    tmp = find(bar, tmp);\n                    if (!tmp) return false;\n                }\n                if (!dequal(len[1], bar.get(tmp))) {\n                    return false;\n                }\n            }\n            return true;\n        }\n        if (ctor === ArrayBuffer) {\n            foo = new Uint8Array(foo);\n            bar = new Uint8Array(bar);\n        } else if (ctor === DataView) {\n            if ((len = foo.byteLength) === bar.byteLength) {\n                while(len-- && foo.getInt8(len) === bar.getInt8(len));\n            }\n            return len === -1;\n        }\n        if (ArrayBuffer.isView(foo)) {\n            if ((len = foo.byteLength) === bar.byteLength) {\n                while(len-- && foo[len] === bar[len]);\n            }\n            return len === -1;\n        }\n        if (!ctor || typeof foo === \"object\") {\n            len = 0;\n            for(ctor in foo){\n                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;\n                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;\n            }\n            return Object.keys(bar).length === len;\n        }\n    }\n    return foo !== foo && bar !== bar;\n}\nexports.dequal = dequal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZGVxdWFsQDIuMC4zL25vZGVfbW9kdWxlcy9kZXF1YWwvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNQyxPQUFPQyxTQUFTLENBQUNDLGNBQWM7QUFFekMsU0FBU0MsS0FBS0MsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEdBQUc7SUFDM0IsS0FBS0EsT0FBT0YsS0FBS0csSUFBSSxHQUFJO1FBQ3hCLElBQUlDLE9BQU9GLEtBQUtELE1BQU0sT0FBT0M7SUFDOUI7QUFDRDtBQUVBLFNBQVNFLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN2QixJQUFJQyxNQUFNQyxLQUFLQztJQUNmLElBQUlKLFFBQVFDLEtBQUssT0FBTztJQUV4QixJQUFJRCxPQUFPQyxPQUFPLENBQUNDLE9BQUtGLElBQUlLLFdBQVcsTUFBTUosSUFBSUksV0FBVyxFQUFFO1FBQzdELElBQUlILFNBQVNJLE1BQU0sT0FBT04sSUFBSU8sT0FBTyxPQUFPTixJQUFJTSxPQUFPO1FBQ3ZELElBQUlMLFNBQVNNLFFBQVEsT0FBT1IsSUFBSVMsUUFBUSxPQUFPUixJQUFJUSxRQUFRO1FBRTNELElBQUlQLFNBQVNRLE9BQU87WUFDbkIsSUFBSSxDQUFDUCxNQUFJSCxJQUFJVyxNQUFNLE1BQU1WLElBQUlVLE1BQU0sRUFBRTtnQkFDcEMsTUFBT1IsU0FBU0osT0FBT0MsR0FBRyxDQUFDRyxJQUFJLEVBQUVGLEdBQUcsQ0FBQ0UsSUFBSTtZQUMxQztZQUNBLE9BQU9BLFFBQVEsQ0FBQztRQUNqQjtRQUVBLElBQUlELFNBQVNVLEtBQUs7WUFDakIsSUFBSVosSUFBSWEsSUFBSSxLQUFLWixJQUFJWSxJQUFJLEVBQUU7Z0JBQzFCLE9BQU87WUFDUjtZQUNBLEtBQUtWLE9BQU9ILElBQUs7Z0JBQ2hCSSxNQUFNRDtnQkFDTixJQUFJQyxPQUFPLE9BQU9BLFFBQVEsVUFBVTtvQkFDbkNBLE1BQU1WLEtBQUtPLEtBQUtHO29CQUNoQixJQUFJLENBQUNBLEtBQUssT0FBTztnQkFDbEI7Z0JBQ0EsSUFBSSxDQUFDSCxJQUFJWCxHQUFHLENBQUNjLE1BQU0sT0FBTztZQUMzQjtZQUNBLE9BQU87UUFDUjtRQUVBLElBQUlGLFNBQVNZLEtBQUs7WUFDakIsSUFBSWQsSUFBSWEsSUFBSSxLQUFLWixJQUFJWSxJQUFJLEVBQUU7Z0JBQzFCLE9BQU87WUFDUjtZQUNBLEtBQUtWLE9BQU9ILElBQUs7Z0JBQ2hCSSxNQUFNRCxHQUFHLENBQUMsRUFBRTtnQkFDWixJQUFJQyxPQUFPLE9BQU9BLFFBQVEsVUFBVTtvQkFDbkNBLE1BQU1WLEtBQUtPLEtBQUtHO29CQUNoQixJQUFJLENBQUNBLEtBQUssT0FBTztnQkFDbEI7Z0JBQ0EsSUFBSSxDQUFDTCxPQUFPSSxHQUFHLENBQUMsRUFBRSxFQUFFRixJQUFJYyxHQUFHLENBQUNYLE9BQU87b0JBQ2xDLE9BQU87Z0JBQ1I7WUFDRDtZQUNBLE9BQU87UUFDUjtRQUVBLElBQUlGLFNBQVNjLGFBQWE7WUFDekJoQixNQUFNLElBQUlpQixXQUFXakI7WUFDckJDLE1BQU0sSUFBSWdCLFdBQVdoQjtRQUN0QixPQUFPLElBQUlDLFNBQVNnQixVQUFVO1lBQzdCLElBQUksQ0FBQ2YsTUFBSUgsSUFBSW1CLFVBQVUsTUFBTWxCLElBQUlrQixVQUFVLEVBQUU7Z0JBQzVDLE1BQU9oQixTQUFTSCxJQUFJb0IsT0FBTyxDQUFDakIsU0FBU0YsSUFBSW1CLE9BQU8sQ0FBQ2pCO1lBQ2xEO1lBQ0EsT0FBT0EsUUFBUSxDQUFDO1FBQ2pCO1FBRUEsSUFBSWEsWUFBWUssTUFBTSxDQUFDckIsTUFBTTtZQUM1QixJQUFJLENBQUNHLE1BQUlILElBQUltQixVQUFVLE1BQU1sQixJQUFJa0IsVUFBVSxFQUFFO2dCQUM1QyxNQUFPaEIsU0FBU0gsR0FBRyxDQUFDRyxJQUFJLEtBQUtGLEdBQUcsQ0FBQ0UsSUFBSTtZQUN0QztZQUNBLE9BQU9BLFFBQVEsQ0FBQztRQUNqQjtRQUVBLElBQUksQ0FBQ0QsUUFBUSxPQUFPRixRQUFRLFVBQVU7WUFDckNHLE1BQU07WUFDTixJQUFLRCxRQUFRRixJQUFLO2dCQUNqQixJQUFJVixJQUFJZ0MsSUFBSSxDQUFDdEIsS0FBS0UsU0FBUyxFQUFFQyxPQUFPLENBQUNiLElBQUlnQyxJQUFJLENBQUNyQixLQUFLQyxPQUFPLE9BQU87Z0JBQ2pFLElBQUksQ0FBRUEsQ0FBQUEsUUFBUUQsR0FBRSxLQUFNLENBQUNGLE9BQU9DLEdBQUcsQ0FBQ0UsS0FBSyxFQUFFRCxHQUFHLENBQUNDLEtBQUssR0FBRyxPQUFPO1lBQzdEO1lBQ0EsT0FBT1gsT0FBT08sSUFBSSxDQUFDRyxLQUFLVSxNQUFNLEtBQUtSO1FBQ3BDO0lBQ0Q7SUFFQSxPQUFPSCxRQUFRQSxPQUFPQyxRQUFRQTtBQUMvQjtBQUVBc0IsY0FBYyxHQUFHeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlcXVhbEAyLjAuMy9ub2RlX21vZHVsZXMvZGVxdWFsL2Rpc3QvaW5kZXguanM/YzA2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZmluZChpdGVyLCB0YXIsIGtleSkge1xuXHRmb3IgKGtleSBvZiBpdGVyLmtleXMoKSkge1xuXHRcdGlmIChkZXF1YWwoa2V5LCB0YXIpKSByZXR1cm4ga2V5O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuLCB0bXA7XG5cdGlmIChmb28gPT09IGJhcikgcmV0dXJuIHRydWU7XG5cblx0aWYgKGZvbyAmJiBiYXIgJiYgKGN0b3I9Zm9vLmNvbnN0cnVjdG9yKSA9PT0gYmFyLmNvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKGN0b3IgPT09IERhdGUpIHJldHVybiBmb28uZ2V0VGltZSgpID09PSBiYXIuZ2V0VGltZSgpO1xuXHRcdGlmIChjdG9yID09PSBSZWdFeHApIHJldHVybiBmb28udG9TdHJpbmcoKSA9PT0gYmFyLnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoY3RvciA9PT0gQXJyYXkpIHtcblx0XHRcdGlmICgobGVuPWZvby5sZW5ndGgpID09PSBiYXIubGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBkZXF1YWwoZm9vW2xlbl0sIGJhcltsZW5dKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGVuID09PSAtMTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gU2V0KSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW47XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYmFyLmhhcyh0bXApKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gTWFwKSB7XG5cdFx0XHRpZiAoZm9vLnNpemUgIT09IGJhci5zaXplKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGVuIG9mIGZvbykge1xuXHRcdFx0XHR0bXAgPSBsZW5bMF07XG5cdFx0XHRcdGlmICh0bXAgJiYgdHlwZW9mIHRtcCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0bXAgPSBmaW5kKGJhciwgdG1wKTtcblx0XHRcdFx0XHRpZiAoIXRtcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGVxdWFsKGxlblsxXSwgYmFyLmdldCh0bXApKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5QnVmZmVyKSB7XG5cdFx0XHRmb28gPSBuZXcgVWludDhBcnJheShmb28pO1xuXHRcdFx0YmFyID0gbmV3IFVpbnQ4QXJyYXkoYmFyKTtcblx0XHR9IGVsc2UgaWYgKGN0b3IgPT09IERhdGFWaWV3KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28uYnl0ZUxlbmd0aCkgPT09IGJhci5ieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdHdoaWxlIChsZW4tLSAmJiBmb28uZ2V0SW50OChsZW4pID09PSBiYXIuZ2V0SW50OChsZW4pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZm9vKSkge1xuXHRcdFx0aWYgKChsZW49Zm9vLmJ5dGVMZW5ndGgpID09PSBiYXIuYnl0ZUxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZm9vW2xlbl0gPT09IGJhcltsZW5dKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsZW4gPT09IC0xO1xuXHRcdH1cblxuXHRcdGlmICghY3RvciB8fCB0eXBlb2YgZm9vID09PSAnb2JqZWN0Jykge1xuXHRcdFx0bGVuID0gMDtcblx0XHRcdGZvciAoY3RvciBpbiBmb28pIHtcblx0XHRcdFx0aWYgKGhhcy5jYWxsKGZvbywgY3RvcikgJiYgKytsZW4gJiYgIWhhcy5jYWxsKGJhciwgY3RvcikpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKCEoY3RvciBpbiBiYXIpIHx8ICFkZXF1YWwoZm9vW2N0b3JdLCBiYXJbY3Rvcl0pKSByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoYmFyKS5sZW5ndGggPT09IGxlbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9vICE9PSBmb28gJiYgYmFyICE9PSBiYXI7XG59XG5cbmV4cG9ydHMuZGVxdWFsID0gZGVxdWFsOyJdLCJuYW1lcyI6WyJoYXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImZpbmQiLCJpdGVyIiwidGFyIiwia2V5Iiwia2V5cyIsImRlcXVhbCIsImZvbyIsImJhciIsImN0b3IiLCJsZW4iLCJ0bXAiLCJjb25zdHJ1Y3RvciIsIkRhdGUiLCJnZXRUaW1lIiwiUmVnRXhwIiwidG9TdHJpbmciLCJBcnJheSIsImxlbmd0aCIsIlNldCIsInNpemUiLCJNYXAiLCJnZXQiLCJBcnJheUJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJEYXRhVmlldyIsImJ5dGVMZW5ndGgiLCJnZXRJbnQ4IiwiaXNWaWV3IiwiY2FsbCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.js\n");

/***/ })

};
;