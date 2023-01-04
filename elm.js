(function (scope) {
    "use strict";
    function $$Record1(b, c, d, e, f) {
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }
    $$Record1.prototype
        .$c = function () {
        return new $$Record1(this.b, this.c, this.d, this.e, this.f);
    };
    function $$Record2(g, h) {
        this.
            g = g;
        this.h = h;
    }
    $$Record2.prototype.$c = function () {
        return new $$Record2(this.g, this.h);
    };
    function $$Record3(p, q, r) {
        this.p = p;
        this.q = q;
        this.r = r;
    }
    $$Record3.prototype.$c = function () {
        return new $$Record3(this.p, this.q, this
            .r);
    };
    function $$Record4(e, u, a) {
        this.e = e;
        this.u = u;
        this.a = a;
    }
    $$Record4.prototype.$c = function () {
        return new $$Record4(this.e, this.u, this.a);
    };
    function $$Record5(f, u, a) {
        this.f = f;
        this.u = u;
        this.a = a;
    }
    $$Record5.prototype.$c = function () {
        return new $$Record5(this.f, this.u, this.a);
    };
    function $$Record6(f, o) {
        this.f = f;
        this.o = o;
    }
    $$Record6.prototype.$c = function () {
        return new $$Record6(this.f, this.o);
    };
    function $$Record7(j, p) {
        this.j
            = j;
        this.p = p;
    }
    $$Record7.prototype.$c = function () {
        return new $$Record7(this.j, this.p);
    };
    function $$Record8(w, x, y) {
        this.w = w;
        this.x = x;
        this.y = y;
    }
    $$Record8.prototype.$c = function () {
        return new $$Record8(this.w, this.x, this.y);
    };
    function $$Record9(c, z, r, s) {
        this.c =
            c;
        this.z = z;
        this.r = r;
        this.s = s;
    }
    $$Record9.prototype.$c
        = function () {
            return new $$Record9(this.c, this.z, this.r, this.s);
        };
    function $$Record10(r, A) {
        this.r = r;
        this
            .A = A;
    }
    $$Record10.prototype.$c = function () {
        return new $$Record10(this.r, this.A);
    };
    function $$Record11(r, f, B) {
        this.r = r;
        this.f = f;
        this
            .B = B;
    }
    $$Record11.prototype.$c = function () {
        return new $$Record11(this.r, this.f, this.
            B);
    };
    function $$Record12(C, m, a, l, g, T, K, E, x, p, H, q, z) {
        this.C
            = C;
        this.m = m;
        this.a = a;
        this.l = l;
        this.g = g;
        this.T = T;
        this.K = K;
        this.E = E;
        this.x = x;
        this.p = p;
        this.H = H;
        this.q = q;
        this.z = z;
    }
    $$Record12.prototype.$c = function () {
        return new $$Record12(this.C, this.m, this.a, this.l, this.g, this.T, this.K, this.E, this.x, this.p, this.H, this.q, this.z);
    };
    function $$update__f(obj, f) {
        var $r = obj.$c();
        $r.f = f;
        return $r;
    }
    function $$update__a(obj, a) {
        var $r = obj.$c();
        $r.a = a;
        return $r;
    }
    function $$update__g(obj, g) {
        var $r = obj.$c();
        $r.g = g;
        return $r;
    }
    function $$update__x(obj, x) {
        var $r = obj.$c();
        $r.x = x;
        return $r;
    }
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        var curried = function (a) {
            return function (b) {
                return fun(a, b);
            };
        };
        curried.a2 = fun;
        return curried;
    }
    function F3(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return fun(a, b, c);
                };
            };
        };
        curried.a3 =
            fun;
        return curried;
    }
    function F4(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        };
        curried.a4 = fun;
        return curried;
    }
    function F5(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        };
        curried.a5 = fun;
        return curried;
    }
    function F6(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        };
        curried.a6 = fun;
        return curried;
    }
    function F7(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        };
        curried.
            a7 = fun;
        return curried;
    }
    function F8(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried.a8 = fun;
        return curried;
    }
    function F9(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried
            .a9 = fun;
        return curried;
    }
    function A2(fun, a, b) {
        return fun.a2 ? fun.a2(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a5 ? fun.a5(a, b, c, d, e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize_fn = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_fn);
    var _JsArray_initializeFromList_fn = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_fn);
    var _JsArray_unsafeGet_fn = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_fn);
    var _JsArray_unsafeSet_fn = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_fn);
    var _JsArray_push_fn = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_fn);
    var _JsArray_foldl_fn = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl_fn_unwrapped = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_fn);
    var _JsArray_foldr_fn = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr_fn_unwrapped = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_fn);
    var _JsArray_map_fn = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_fn);
    var _JsArray_indexedMap_fn = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap_fn_unwrapped = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_fn);
    var _JsArray_slice_fn = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_fn);
    var _JsArray_appendN_fn = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_fn);
    var _Debug_log_fn = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_fn);
    var _Debug_log_UNUSED_fn = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_fn);
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region._.O === region.ae.O) {
            return "on line " + region._.O;
        }
        return "on lines " + region._.O + " through " + region.ae.O;
    }
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        if (x.$ < 0) {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_fn = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_fn);
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1;
        }
        if (typeof x.$ === "undefined") {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
    }
    var _Utils_lt_fn = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_fn);
    var _Utils_le_fn = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_fn);
    var _Utils_gt_fn = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_fn);
    var _Utils_ge_fn = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_fn);
    var _Utils_compare_fn = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_fn);
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    }
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
            return xs + ys;
        }
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_fn = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2_fn_unwrapped = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(f(xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_fn);
    var _List_map3_fn = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3_fn_unwrapped = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_fn);
    var _List_map4_fn = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4_fn_unwrapped = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_fn);
    var _List_map5_fn = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5_fn_unwrapped = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_fn);
    var _List_sortBy_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_fn);
    var _List_sortWith_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith_fn_unwrapped = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = f(a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_fn);
    var _Basics_add_fn = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_fn);
    var _Basics_sub_fn = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_fn);
    var _Basics_mul_fn = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_fn);
    var _Basics_fdiv_fn = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_fn);
    var _Basics_idiv_fn = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_fn);
    var _Basics_pow_fn = Math.pow, _Basics_pow = F2(_Basics_pow_fn);
    var _Basics_remainderBy_fn = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_fn);
    var _Basics_modBy_fn = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_fn);
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2_fn = Math.atan2, _Basics_atan2 = F2(_Basics_atan2_fn);
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_fn = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_fn);
    var _Basics_or_fn = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_fn);
    var _Basics_xor_fn = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_fn);
    var _String_cons_fn = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_fn);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_fn = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_fn);
    function _String_length(str) {
        return str.length;
    }
    var _String_map_fn = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_fn);
    var _String_filter_fn = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_fn);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_fn = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl_fn_unwrapped = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_fn);
    var _String_foldr_fn = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr_fn_unwrapped = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_fn);
    var _String_split_fn = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_fn);
    var _String_join_fn = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_fn);
    var _String_slice_fn = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_fn);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_fn);
    var _String_all_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_fn);
    var _String_contains_fn = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_fn);
    var _String_startsWith_fn = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_fn);
    var _String_endsWith_fn = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_fn);
    var _String_indexes_fn = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_fn);
    function _String_fromNumber(number) {
        return number + "";
    }
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_fn = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_fn);
    var _Json_decodeIndex_fn = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_fn);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_fn = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_fn);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    var _Json_map1_fn = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_fn);
    var _Json_map2_fn = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_fn);
    var _Json_map3_fn = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_fn);
    var _Json_map4_fn = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_fn);
    var _Json_map5_fn = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_fn);
    var _Json_map6_fn = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_fn);
    var _Json_map7_fn = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_fn);
    var _Json_map8_fn = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_fn);
    var _Json_runOnString_fn = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_fn);
    var _Json_run_fn = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_fn);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_fn(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("Expecting " + type, _Json_wrap(value)));
    }
    function _Json_equality(x, y) {
        if (x === y) {
            return true;
        }
        if (x.$ !== y.$) {
            return false;
        }
        switch (x.$) {
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    var _Json_encode_fn = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_fn);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_fn = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_fn);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_fn = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_fn);
    var _Scheduler_onError_fn = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_fn);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_fn = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_fn);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i;
                }
                if (!proc.g) {
                    return;
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    var _Platform_worker_fn = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.aI, impl.aQ, impl.aO, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_fn);
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return (new $$Record1(init, onEffects, onSelfMsg, cmdMap, subMap));
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = (new $$Record2(sendToApp, undefined));
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_fn(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_fn(loop, info.b));
    }
    var _Platform_sendToApp_fn = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_fn);
    var _Platform_sendToSelf_fn = function (router, msg) {
        return _Scheduler_send_fn(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_fn);
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_fn = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_fn);
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push((new $$Record3(managers, cmdBag, subBag)));
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = (new $$Record4(_Platform_outgoingPortMap, converter, _Platform_setupOutgoingPort));
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_fn = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_fn);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1);
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = (new $$Record5(_Platform_incomingPortMap, converter, _Platform_setupIncomingPort));
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_fn = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_fn);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        function send(incomingValue) {
            var result = _Json_run_fn(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init_fn = function (virtualNode, flagDecoder, debugMetadata, args) {
        var node = args["node"];
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function () { }), node);
        return {};
    }, _VirtualDom_init = F4(_VirtualDom_init_fn);
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    var _VirtualDom_nodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_fn);
    var _VirtualDom_node_a0 = undefined, _VirtualDom_node = _VirtualDom_nodeNS(_VirtualDom_node_a0);
    var _VirtualDom_keyedNodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_fn);
    var _VirtualDom_keyedNode_a0 = undefined, _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(_VirtualDom_keyedNode_a0);
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    var _VirtualDom_map_fn = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_fn);
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy_fn = function (func, a) {
        return _VirtualDom_thunk([func, a], function () {
            return func(a);
        });
    }, _VirtualDom_lazy = F2(_VirtualDom_lazy_fn);
    var _VirtualDom_lazy2_fn = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return A2(func, a, b);
        });
    }, _VirtualDom_lazy2_fn_unwrapped = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return func(a, b);
        });
    }, _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_fn);
    var _VirtualDom_lazy3_fn = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return A3(func, a, b, c);
        });
    }, _VirtualDom_lazy3_fn_unwrapped = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return func(a, b, c);
        });
    }, _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_fn);
    var _VirtualDom_lazy4_fn = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return A4(func, a, b, c, d);
        });
    }, _VirtualDom_lazy4_fn_unwrapped = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return func(a, b, c, d);
        });
    }, _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_fn);
    var _VirtualDom_lazy5_fn = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return A5(func, a, b, c, d, e);
        });
    }, _VirtualDom_lazy5_fn_unwrapped = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return func(a, b, c, d, e);
        });
    }, _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_fn);
    var _VirtualDom_lazy6_fn = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return A6(func, a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6_fn_unwrapped = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return func(a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_fn);
    var _VirtualDom_lazy7_fn = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return A7(func, a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7_fn_unwrapped = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return func(a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_fn);
    var _VirtualDom_lazy8_fn = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8_fn_unwrapped = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return func(a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_fn);
    var _VirtualDom_on_fn = function (key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    }, _VirtualDom_on = F2(_VirtualDom_on_fn);
    var _VirtualDom_style_fn = function (key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    }, _VirtualDom_style = F2(_VirtualDom_style_fn);
    var _VirtualDom_property_fn = function (key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    }, _VirtualDom_property = F2(_VirtualDom_property_fn);
    var _VirtualDom_attribute_fn = function (key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    }, _VirtualDom_attribute = F2(_VirtualDom_attribute_fn);
    var _VirtualDom_attributeNS_fn = function (namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: (new $$Record6(namespace, value))
        };
    }, _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_fn);
    var _VirtualDom_RE_script = /^script$/i;
    var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
    var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
    var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
    function _VirtualDom_noScript(tag) {
        return _VirtualDom_RE_script.test(tag) ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return _VirtualDom_RE_js.test(value)
            ? ""
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return _VirtualDom_RE_js_html.test(value)
            ? ""
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlJson(value) {
        return (typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
            ? _Json_wrap("") : value;
    }
    var _VirtualDom_mapAttribute_fn = function (func, attr) {
        return (attr.$ === "a0")
            ? _VirtualDom_on_fn(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    }, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_fn);
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        return {
            $: handler.$,
            a: !tag
                ? _Json_map1_fn(func, handler.a) : _Json_map2_fn(tag < 3
                ? _VirtualDom_mapEventTuple
                : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple_fn = function (func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    }, _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_fn);
    var _VirtualDom_mapEventRecord_fn = function (func, record) {
        return {
            w: func(record.w),
            aa: record.aa,
            X: record.X
        };
    }, _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_fn);
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                (key === "className")
                    ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
                    : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            (tag === "a3" && key === "class")
                ? _VirtualDom_addClass(subFacts, key, value)
                : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object"
                    ? tagger = [tagger, subNode.j]
                    : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = (new $$Record7(tagger, eventNode));
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        var domNode = vNode.f
            ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
            : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        }
        return domNode;
    }
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1"
                ? _VirtualDom_applyStyles(domNode, value)
                :
                    key === "a0"
                        ? _VirtualDom_applyEvents(domNode, eventNode, value)
                        :
                            key === "a3"
                                ? _VirtualDom_applyAttrs(domNode, value)
                                :
                                    key === "a4"
                                        ? _VirtualDom_applyAttrsNS(domNode, value)
                                        :
                                            ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key];
        }
    }
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined"
                ? domNode.setAttribute(key, value)
                : domNode.removeAttribute(key);
        }
    }
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined"
                ? domNode.setAttributeNS(namespace, key, value)
                : domNode.removeAttributeNS(namespace, key);
        }
    }
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported
                && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 });
            allCallbacks[key] = oldCallback;
        }
    }
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function () { _VirtualDom_passiveSupported = true; }
        }));
    }
    catch (e) { }
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
                return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.w;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aa;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.X) && event.preventDefault(),
                eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message);
                }
                else {
                    for (var i = tagger.length; i--;) {
                        message = tagger[i](message);
                    }
                }
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation);
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return;
        }
        var xType = x.$;
        var yType = y.$;
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            }
            else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        switch (yType) {
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while (same && i--) {
                    same = xRefs[i] === yRefs[i];
                }
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while (xSubNode.$ === 4) {
                    nesting = true;
                    typeof xTaggers !== "object"
                        ? xTaggers = [xTaggers, xSubNode.j]
                        : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while (ySubNode.$ === 4) {
                    nesting = true;
                    typeof yTaggers !== "object"
                        ? yTaggers = [yTaggers, ySubNode.j]
                        : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                    _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                }
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) {
                    _VirtualDom_pushPatch(patches, 3, index, y.a);
                }
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false;
            }
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] =
                    !category
                        ? (typeof x[xKey] === "string" ? "" : null)
                        :
                            (category === "a1")
                                ? ""
                                :
                                    (category === "a0" || category === "a3")
                                        ? undefined
                                        : (new $$Record6(x[xKey].f, undefined));
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            if (xValue === yValue && xKey !== "value" && xKey !== "checked"
                || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
        }
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey];
            }
        }
        return diff;
    }
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            });
        }
        else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            });
        }
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {};
        var inserts = [];
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, (new $$Record8(localPatches, inserts, endInserts)));
        }
    }
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        if (!entry) {
            entry = (new $$Record9(0, vnode, yIndex, undefined));
            inserts.push((new $$Record10(yIndex, entry)));
            changes[key] = entry;
            return;
        }
        if (entry.c === 1) {
            inserts.push((new $$Record10(yIndex, entry)));
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = (new $$Record9(1, vnode, index, patch));
            return;
        }
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            }
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            }
            else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                    }
                }
            }
            else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i;
            }
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
                subNode = subNode.k;
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i;
                }
            }
            low = nextLow;
        }
        return i;
    }
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode;
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode;
            }
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) {
                    domNode.elm_event_node_ref.j = patch.s;
                }
                else {
                    domNode.elm_event_node_ref = (new $$Record7(patch.s, patch.u));
                }
                return domNode;
            case 6:
                var data = patch.s;
                for (var i = 0; i < data.i; i++) {
                    domNode.removeChild(domNode.childNodes[data.v]);
                }
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for (; i < kids.length; i++) {
                    domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                }
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== "undefined") {
                    domNode.parentNode.removeChild(domNode);
                }
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10);
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        if (frag) {
            _VirtualDom_appendChild(domNode, frag);
        }
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return;
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
        }
        if (node.nodeType !== 1) {
            return _VirtualDom_text("");
        }
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--;) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(_VirtualDom_attribute_fn(name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--;) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        }
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b;
        }
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.aI, impl.aQ, impl.aO, function (sendToApp, initialModel) {
            var view = impl.aR;
            var domNode = args["node"];
            var currNode = _VirtualDom_virtualize(domNode);
            return _Browser_makeAnimator(initialModel, function (model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
            });
        });
    });
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.aI, impl.aQ, impl.aO, function (sendToApp, initialModel) {
            var divertHrefToApp = impl.Z && impl.Z(sendToApp);
            var view = impl.aR;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function (model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "body")(_List_Nil)(doc.aB);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                (title !== doc.aP) && (_VirtualDom_doc.title = title = doc.aP);
            });
        });
    });
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined"
        ? cancelAnimationFrame
        : function (id) { clearTimeout(id); };
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined"
        ? requestAnimationFrame
        : function (callback) { return setTimeout(callback, 1000 / 60); };
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1
                ? 0
                : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
        }
        return function (nextModel, isSync) {
            model = nextModel;
            isSync
                ? (draw(model),
                    state === 2 && (state = 1))
                : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
                    state = 2);
        };
    }
    function _Browser_application(impl) {
        var onUrlChange = impl.aK;
        var onUrlRequest = impl.aL;
        var key = function () { key.a(onUrlChange(_Browser_getUrl())); };
        return _Browser_document({
            Z: function (sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener("popstate", key);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
                return F2(function (domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = $elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest((next
                            && curr.ap === next.ap
                            && curr.ah === next.ah
                            && curr.am.a === next.am.a)
                            ? $elm$browser$Browser$Internal(next)
                            : $elm$browser$Browser$External(href)));
                    }
                });
            },
            aI: function (flags) {
                return A3(impl.aI, flags, _Browser_getUrl(), key);
            },
            aR: impl.aR,
            aQ: impl.aQ,
            aO: impl.aO
        });
    }
    function _Browser_getUrl() {
        return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
    }
    var _Browser_go_fn = function (key, n) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            n && history.go(n);
            key();
        }));
    }, _Browser_go = F2(_Browser_go_fn);
    var _Browser_pushUrl_fn = function (key, url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            history.pushState({}, "", url);
            key();
        }));
    }, _Browser_pushUrl = F2(_Browser_pushUrl_fn);
    var _Browser_replaceUrl_fn = function (key, url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function () {
            history.replaceState({}, "", url);
            key();
        }));
    }, _Browser_replaceUrl = F2(_Browser_replaceUrl_fn);
    var _Browser_fakeNode = { addEventListener: function () { }, removeEventListener: function () { } };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on_fn = function (node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function (callback) {
            function handler(event) { _Scheduler_rawSpawn(sendToSelf(event)); }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
            return function () { node.removeEventListener(eventName, handler); };
        }));
    }, _Browser_on = F3(_Browser_on_fn);
    var _Browser_decodeEvent_fn = function (decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    }, _Browser_decodeEvent = F2(_Browser_decodeEvent_fn);
    function _Browser_visibilityInfo() {
        return (typeof _VirtualDom_doc.hidden !== "undefined")
            ? { aG: "hidden", aC: "visibilitychange" }
            :
                (typeof _VirtualDom_doc.mozHidden !== "undefined")
                    ? { aG: "mozHidden", aC: "mozvisibilitychange" }
                    :
                        (typeof _VirtualDom_doc.msHidden !== "undefined")
                            ? { aG: "msHidden", aC: "msvisibilitychange" }
                            :
                                (typeof _VirtualDom_doc.webkitHidden !== "undefined")
                                    ? { aG: "webkitHidden", aC: "webkitvisibilitychange" }
                                    : { aG: "hidden", aC: "visibilitychange" };
    }
    function _Browser_rAF() {
        return _Scheduler_binding(function (callback) {
            var id = _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(Date.now()));
            });
            return function () {
                _Browser_cancelAnimationFrame(id);
            };
        });
    }
    function _Browser_now() {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(Date.now()));
        });
    }
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                var node = document.getElementById(id);
                callback(node
                    ? _Scheduler_succeed(doStuff(node))
                    : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
            });
        });
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function (callback) {
            _Browser_requestAnimationFrame(function () {
                callback(_Scheduler_succeed(doStuff()));
            });
        });
    }
    var _Browser_call_fn = function (functionName, id) {
        return _Browser_withNode(id, function (node) {
            node[functionName]();
            return _Utils_Tuple0;
        });
    }, _Browser_call = F2(_Browser_call_fn);
    function _Browser_getViewport() {
        return {
            at: _Browser_getScene(),
            aw: {
                ax: _Browser_window.pageXOffset,
                ay: _Browser_window.pageYOffset,
                u: _Browser_doc.documentElement.clientWidth,
                s: _Browser_doc.documentElement.clientHeight
            }
        };
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            u: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            s: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        };
    }
    var _Browser_setViewport_fn = function (x, y) {
        return _Browser_withWindow(function () {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
        });
    }, _Browser_setViewport = F2(_Browser_setViewport_fn);
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function (node) {
            return {
                at: {
                    u: node.scrollWidth,
                    s: node.scrollHeight
                },
                aw: {
                    ax: node.scrollLeft,
                    ay: node.scrollTop,
                    u: node.clientWidth,
                    s: node.clientHeight
                }
            };
        });
    }
    var _Browser_setViewportOf_fn = function (id, x, y) {
        return _Browser_withNode(id, function (node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
        });
    }, _Browser_setViewportOf = F3(_Browser_setViewportOf_fn);
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function (node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                at: _Browser_getScene(),
                aw: {
                    ax: x,
                    ay: y,
                    u: _Browser_doc.documentElement.clientWidth,
                    s: _Browser_doc.documentElement.clientHeight
                },
                aE: {
                    ax: x + rect.left,
                    ay: y + rect.top,
                    u: rect.width,
                    s: rect.height
                }
            };
        });
    }
    function _Browser_reload(skipCache) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            _VirtualDom_doc.location.reload(skipCache);
        }));
    }
    function _Browser_load(url) {
        return $elm$core$Task$perform_fn($elm$core$Basics$never, _Scheduler_binding(function (callback) {
            try {
                _Browser_window.location = url;
            }
            catch (err) {
                _VirtualDom_doc.location.reload(false);
            }
        }));
    }
    var _Bitwise_and_fn = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_fn);
    var _Bitwise_or_fn = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_fn);
    var _Bitwise_xor_fn = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_fn);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_fn = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_fn);
    var _Bitwise_shiftRightBy_fn = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_fn);
    var _Bitwise_shiftRightZfBy_fn = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_fn);
    function _Time_now(millisToPosix) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(millisToPosix(Date.now())));
        });
    }
    var _Time_setInterval_fn = function (interval, task) {
        return _Scheduler_binding(function (callback) {
            var id = setInterval(function () { _Scheduler_rawSpawn(task); }, interval);
            return function () { clearInterval(id); };
        });
    }, _Time_setInterval = F2(_Time_setInterval_fn);
    function _Time_here() {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed($elm$time$Time$Zone_fn(-(new Date().getTimezoneOffset()), _List_Nil)));
        });
    }
    function _Time_getZoneName() {
        return _Scheduler_binding(function (callback) {
            try {
                var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
            }
            catch (e) {
                var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
            }
            callback(_Scheduler_succeed(name));
        });
    }
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_fn(func, acc, values);
            }
        });
        return _JsArray_foldr_fn(helper, _JsArray_foldr_fn(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_fn);
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_fn($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr_fn = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_fn(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr_fn_unwrapped = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldr_fn_unwrapped(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_fn);
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }, _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }, _List_Nil, dict);
    };
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_fn);
    var $elm$json$Json$Decode$Field_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_fn);
    var $elm$json$Json$Decode$Index_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_fn);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a: a }; };
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_fn = function (sep, chunks) {
        return _String_join_fn(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_fn);
    var $elm$core$String$split_fn = function (sep, string) {
        return _List_fromArray(_String_split_fn(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_fn);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_fn("\n    ", $elm$core$String$split_fn("\n", str));
    };
    var $elm$core$List$foldl_fn = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl_fn_unwrapped = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_fn);
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, i) {
            return i + 1;
        }, 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp_fn = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_fn);
    var $elm$core$List$range_fn = function (lo, hi) {
        return $elm$core$List$rangeHelp_fn(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_fn);
    var $elm$core$List$indexedMap_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap_fn_unwrapped = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(f(i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_fn);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_fn = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_fn);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_fn(error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp_fn = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_fn($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_fn("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_fn($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_fn("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_fn(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_fn);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_fn);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_fn = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_fn);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_fn = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_fn);
    var $elm$core$Basics$apR_fn = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_fn);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_fn = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_fn);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
            }
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_fn);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_fn);
    var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
        if (!builder.b) {
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.d), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.d);
        }
        else {
            var treeLen = builder.b * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.e) : builder.e;
            var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.b);
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.d) + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.d);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_fn);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_fn = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_fn(false, { e: nodeList, b: (len / $elm$core$Array$branchFactor) | 0, d: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_fn($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_fn);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_fn = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_fn(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_fn(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_fn);
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
        switch (handler.$) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return 3;
        }
    };
    var $elm$browser$Browser$External = function (a) {
        return { $: 1, a: a };
    };
    var $elm$browser$Browser$Internal = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Https = 1;
    var $elm$url$Url$Url_fn = function (protocol, host, port_, path, query, fragment) {
        return { ag: fragment, ah: host, ak: path, am: port_, ap: protocol, aq: query };
    }, $elm$url$Url$Url = F6($elm$url$Url$Url_fn);
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_fn);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$core$String$left_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_fn);
    var $elm$core$String$toInt = _String_toInt;
    var $elm$url$Url$chompBeforePath_fn = function (protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || _String_contains_fn("@", str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn(":", str);
            if (!_v0.b) {
                return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            }
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt($elm$core$String$dropLeft_fn(i + 1, str));
                    if (_v1.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, $elm$core$String$left_fn(i, str), port_, path, params, frag));
                    }
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    }, $elm$url$Url$chompBeforePath = F5($elm$url$Url$chompBeforePath_fn);
    var $elm$url$Url$chompBeforeQuery_fn = function (protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("/", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforePath_fn(protocol, "/", params, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforePath_fn(protocol, $elm$core$String$dropLeft_fn(i, str), params, frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeQuery = F4($elm$url$Url$chompBeforeQuery_fn);
    var $elm$url$Url$chompBeforeFragment_fn = function (protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("?", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Nothing, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeFragment = F3($elm$url$Url$chompBeforeFragment_fn);
    var $elm$url$Url$chompAfterProtocol_fn = function (protocol, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("#", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Nothing, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompAfterProtocol = F2($elm$url$Url$chompAfterProtocol_fn);
    var $elm$core$String$startsWith = _String_startsWith;
    var $elm$url$Url$fromString = function (str) {
        return _String_startsWith_fn("http://", str) ? $elm$url$Url$chompAfterProtocol_fn(0, $elm$core$String$dropLeft_fn(7, str)) : (_String_startsWith_fn("https://", str) ? $elm$url$Url$chompAfterProtocol_fn(1, $elm$core$String$dropLeft_fn(8, str)) : $elm$core$Maybe$Nothing);
    };
    var $elm$core$Basics$never = function (_v0) {
        never: while (true) {
            var nvr = _v0;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Task$Perform = $elm$core$Basics$identity;
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$List$foldrHelper_fn = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper_fn_unwrapped = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return fn(a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return fn(a, fn(b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return fn(a, fn(b, fn(c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn_unwrapped(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn_unwrapped(fn, acc, ctr + 1, r4);
                        return fn(a, fn(b, fn(c, fn(d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_fn);
    var $elm$core$List$foldr_fn = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_fn(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_fn);
    var $elm$core$List$map_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs
            = xs.b) {
            var next = _List_Cons(f(xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$map = F2($elm$core$List$map_fn);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_fn = function (func, taskA) {
        return _Scheduler_andThen_fn(function (a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    }, $elm$core$Task$map = F2($elm$core$Task$map_fn);
    var $elm$core$Task$map2_fn = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2_fn_unwrapped = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(func(a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2 = F3($elm$core$Task$map2_fn);
    var $elm$core$Task$sequence = function (tasks) {
        return $elm$core$List$foldr_fn($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_fn = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_fn($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_fn);
    var $elm$core$Task$onEffects_fn = function (router, commands, state) {
        return $elm$core$Task$map_fn(function (_v0) {
            return 0;
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Task$spawnCmd(router), commands)));
    }, $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_fn);
    var $elm$core$Task$onSelfMsg_fn = function (_v0, _v1, _v2) {
        return $elm$core$Task$succeed(0);
    }, $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_fn);
    var $elm$core$Task$cmdMap_fn = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_fn(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_fn);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_fn = function (toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$map_fn(toMessage, task));
    }, $elm$core$Task$perform = F2($elm$core$Task$perform_fn);
    var $elm$browser$Browser$document = _Browser_document;
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$array = _Json_decodeArray;
    var $elm$json$Json$Decode$bool = _Json_decodeBool;
    var $author$project$Main$GraphEntry = $elm$core$Basics$identity;
    var $author$project$Main$Note_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Main$Note = F2($author$project$Main$Note_fn);
    var $author$project$Main$C = 0;
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $author$project$Main$A = 9;
    var $author$project$Main$ASharp = 10;
    var $author$project$Main$B = 11;
    var $author$project$Main$CSharp = 1;
    var $author$project$Main$D = 2;
    var $author$project$Main$DSharp = 3;
    var $author$project$Main$E = 4;
    var $author$project$Main$F = 5;
    var $author$project$Main$FSharp = 6;
    var $author$project$Main$G = 7;
    var $author$project$Main$GSharp = 8;
    var $author$project$Main$stringToPitchclass = function (p) {
        switch (p) {
            case "C":
                return $elm$core$Maybe$Just(0);
            case "C#":
                return $elm$core$Maybe$Just(1);
            case "D":
                return $elm$core$Maybe$Just(2);
            case "D#":
                return $elm$core$Maybe$Just(3);
            case "E":
                return $elm$core$Maybe$Just(4);
            case "F":
                return $elm$core$Maybe$Just(5);
            case "F#":
                return $elm$core$Maybe$Just(6);
            case "G":
                return $elm$core$Maybe$Just(7);
            case "G#":
                return $elm$core$Maybe$Just(8);
            case "A":
                return $elm$core$Maybe$Just(9);
            case "A#":
                return $elm$core$Maybe$Just(10);
            case "B":
                return $elm$core$Maybe$Just(11);
            default:
                return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$Maybe$withDefault_fn = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_fn);
    var $author$project$Main$decodePitchClass = _Json_map1_fn(function (str) {
        return $elm$core$Maybe$withDefault_fn(0, $author$project$Main$stringToPitchclass(str));
    }, $elm$json$Json$Decode$string);
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $author$project$Main$decodeNote = _Json_map2_fn($author$project$Main$Note, _Json_decodeField_fn("octave", $elm$json$Json$Decode$int), _Json_decodeField_fn("pitch", $author$project$Main$decodePitchClass));
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $author$project$Main$decodeGraphEntry = _Json_map3_fn(F3(function (arr, v, n) {
        return (new $$Record11(arr, n, v));
    }), _Json_decodeField_fn("array", $elm$json$Json$Decode$array($elm$json$Json$Decode$int)), _Json_decodeField_fn("value", $elm$json$Json$Decode$string), _Json_decodeField_fn("note", $author$project$Main$decodeNote));
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $elm$core$Tuple$pair_fn = function (a, b) {
        return _Utils_Tuple2(a, b);
    }, $elm$core$Tuple$pair = F2($elm$core$Tuple$pair_fn);
    var $author$project$Main$decodeIndex = _Json_map2_fn($elm$core$Tuple$pair, _Json_decodeField_fn("first", $elm$json$Json$Decode$int), _Json_decodeField_fn("reset", $elm$json$Json$Decode$list($elm$json$Json$Decode$int)));
    var $elm$random$Random$Seed_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$random$Random$Seed = F2($elm$random$Random$Seed_fn);
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$random$Random$next = function (_v0) {
        var state0 = _v0.a;
        var incr = _v0.b;
        return $elm$random$Random$Seed_fn(((state0 * 1664525) + incr) >>> 0, incr);
    };
    var $elm$random$Random$initialSeed = function (x) {
        var _v0 = $elm$random$Random$next($elm$random$Random$Seed_fn(0, 1013904223));
        var state1 = _v0.a;
        var incr = _v0.b;
        var state2 = (state1 + x) >>> 0;
        return $elm$random$Random$next($elm$random$Random$Seed_fn(state2, incr));
    };
    var $author$project$Main$decodeRandomSeed = _Json_map1_fn($elm$random$Random$initialSeed, $elm$json$Json$Decode$int);
    var $author$project$Main$ScreenSize_fn = function (width, height) {
        return { s: height, u: width };
    }, $author$project$Main$ScreenSize = F2($author$project$Main$ScreenSize_fn);
    var $author$project$Main$decodeScreensize = _Json_map2_fn($author$project$Main$ScreenSize, _Json_decodeField_fn("width", $elm$json$Json$Decode$int), _Json_decodeField_fn("height", $elm$json$Json$Decode$int));
    var $author$project$Main$mkModel = function (current) {
        return function (history) {
            return function (graph) {
                return function (screenSize) {
                    return function (rndSeed) {
                        return function (scalePreset) {
                            return function (playing) {
                                return function (index) {
                                    return function (showControls) {
                                        return function (currentVoice) {
                                            return function (offset) {
                                                return function (numberOfVoice) {
                                                    return (new $$Record12(current, currentVoice, graph, history, index, $elm$core$Maybe$Nothing, numberOfVoice, offset, playing, rndSeed, scalePreset, screenSize, showControls));
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0 = $elm$core$Basics$apR, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn = function (key, valDecoder, decoder) {
        return _Json_map2_fn($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0, _Json_decodeField_fn(key, valDecoder), decoder);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn);
    var $author$project$Main$decodeModel = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("numberOfVoice", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("offset", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("currentVoice", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("showControls", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("index", $author$project$Main$decodeIndex, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("playing", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("scalePreset", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("rndSeed", $author$project$Main$decodeRandomSeed, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("screenSize", $author$project$Main$decodeScreensize, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("graph", $elm$json$Json$Decode$array($author$project$Main$decodeGraphEntry), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("history", $elm$json$Json$Decode$array($elm$json$Json$Decode$int), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("current", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Main$mkModel)))))))))))));
    var $elm$json$Json$Decode$decodeString = _Json_runOnString;
    var $author$project$Main$blockSize = 25;
    var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
    var $elm$core$Elm$JsArray$slice = _JsArray_slice;
    var $elm$core$Array$appendHelpBuilder_fn = function (tail, builder) {
        var tailLen = $elm$core$Elm$JsArray$length(tail);
        var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.d)) - tailLen;
        var appended = _JsArray_appendN_fn($elm$core$Array$branchFactor, builder.d, tail);
        return (notAppended < 0) ? {
            e: _List_Cons($elm$core$Array$Leaf(appended), builder.e),
            b: builder.b + 1,
            d: _JsArray_slice_fn(notAppended, tailLen, tail)
        } : ((!notAppended) ? {
            e: _List_Cons($elm$core$Array$Leaf(appended), builder.e),
            b: builder.b + 1,
            d: $elm$core$Elm$JsArray$empty
        } : { e: builder.e, b: builder.b, d: appended });
    }, $elm$core$Array$appendHelpBuilder = F2($elm$core$Array$appendHelpBuilder_fn);
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Elm$JsArray$push = _JsArray_push;
    var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
    var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
    var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
    var $elm$core$Array$insertTailInTree_fn = function (shift, index, tail, tree) {
        var pos = $elm$core$Array$bitMask & (index >>> shift);
        if (_Utils_cmp(pos, $elm$core$Elm$JsArray$length(tree)) > -1) {
            if (shift === 5) {
                return _JsArray_push_fn($elm$core$Array$Leaf(tail), tree);
            }
            else {
                var newSub = $elm$core$Array$SubTree($elm$core$Array$insertTailInTree_fn(shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
                return _JsArray_push_fn(newSub, tree);
            }
        }
        else {
            var value = _JsArray_unsafeGet_fn(pos, tree);
            if (!value.$) {
                var subTree = value.a;
                var newSub = $elm$core$Array$SubTree($elm$core$Array$insertTailInTree_fn(shift - $elm$core$Array$shiftStep, index, tail, subTree));
                return _JsArray_unsafeSet_fn(pos, newSub, tree);
            }
            else {
                var newSub = $elm$core$Array$SubTree($elm$core$Array$insertTailInTree_fn(shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$singleton(value)));
                return _JsArray_unsafeSet_fn(pos, newSub, tree);
            }
        }
    }, $elm$core$Array$insertTailInTree = F4($elm$core$Array$insertTailInTree_fn);
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Array$unsafeReplaceTail_fn = function (newTail, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        var originalTailLen = $elm$core$Elm$JsArray$length(tail);
        var newTailLen = $elm$core$Elm$JsArray$length(newTail);
        var newArrayLen = len + (newTailLen - originalTailLen);
        if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
            var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
            if (overflow) {
                var newShift = startShift + $elm$core$Array$shiftStep;
                var newTree = $elm$core$Array$insertTailInTree_fn(newShift, len, newTail, $elm$core$Elm$JsArray$singleton($elm$core$Array$SubTree(tree)));
                return $elm$core$Array$Array_elm_builtin_fn(newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
            }
            else {
                return $elm$core$Array$Array_elm_builtin_fn(newArrayLen, startShift, $elm$core$Array$insertTailInTree_fn(startShift, len, newTail, tree), $elm$core$Elm$JsArray$empty);
            }
        }
        else {
            return $elm$core$Array$Array_elm_builtin_fn(newArrayLen, startShift, tree, newTail);
        }
    }, $elm$core$Array$unsafeReplaceTail = F2($elm$core$Array$unsafeReplaceTail_fn);
    var $elm$core$Array$appendHelpTree_fn = function (toAppend, array) {
        var len = array.a;
        var tree = array.c;
        var tail = array.d;
        var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
        var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
        var appended = _JsArray_appendN_fn($elm$core$Array$branchFactor, tail, toAppend);
        var newArray = $elm$core$Array$unsafeReplaceTail_fn(appended, array);
        if (notAppended < 0) {
            var nextTail = _JsArray_slice_fn(notAppended, itemsToAppend, toAppend);
            return $elm$core$Array$unsafeReplaceTail_fn(nextTail, newArray);
        }
        else {
            return newArray;
        }
    }, $elm$core$Array$appendHelpTree = F2($elm$core$Array$appendHelpTree_fn);
    var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
    var $elm$core$Array$builderFromArray = function (_v0) {
        var len = _v0.a;
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldl_fn(helper, acc, subTree);
            }
            else {
                return _List_Cons(node, acc);
            }
        });
        return {
            e: _JsArray_foldl_fn(helper, _List_Nil, tree),
            b: (len / $elm$core$Array$branchFactor) | 0,
            d: tail
        };
    };
    var $elm$core$Array$append_fn = function (a, _v0) {
        var aTail = a.d;
        var bLen = _v0.a;
        var bTree = _v0.c;
        var bTail = _v0.d;
        if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
            var foldHelper = F2(function (node, array) {
                if (!node.$) {
                    var tree = node.a;
                    return _JsArray_foldl_fn(foldHelper, array, tree);
                }
                else {
                    var leaf = node.a;
                    return $elm$core$Array$appendHelpTree_fn(leaf, array);
                }
            });
            return $elm$core$Array$appendHelpTree_fn(bTail, _JsArray_foldl_fn(foldHelper, a, bTree));
        }
        else {
            var foldHelper = F2(function (node, builder) {
                if (!node.$) {
                    var tree = node.a;
                    return _JsArray_foldl_fn(foldHelper, builder, tree);
                }
                else {
                    var leaf = node.a;
                    return $elm$core$Array$appendHelpBuilder_fn(leaf, builder);
                }
            });
            return $elm$core$Array$builderToArray_fn(true, $elm$core$Array$appendHelpBuilder_fn(bTail, _JsArray_foldl_fn(foldHelper, $elm$core$Array$builderFromArray(a), bTree)));
        }
    }, $elm$core$Array$append = F2($elm$core$Array$append_fn);
    var $elm$core$Array$fromListHelp_fn = function (list, nodeList, nodeListSize) {
        fromListHelp: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, list);
            var jsArray = _v0.a;
            var remainingItems = _v0.b;
            if (_Utils_cmp($elm$core$Elm$JsArray$length(jsArray), $elm$core$Array$branchFactor) < 0) {
                return $elm$core$Array$builderToArray_fn(true, { e: nodeList, b: nodeListSize, d: jsArray });
            }
            else {
                var $temp$list = remainingItems, $temp$nodeList = _List_Cons($elm$core$Array$Leaf(jsArray), nodeList), $temp$nodeListSize = nodeListSize + 1;
                list = $temp$list;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue fromListHelp;
            }
        }
    }, $elm$core$Array$fromListHelp = F3($elm$core$Array$fromListHelp_fn);
    var $elm$core$Array$fromList = function (list) {
        if (!list.b) {
            return $elm$core$Array$empty;
        }
        else {
            return $elm$core$Array$fromListHelp_fn(list, _List_Nil, 0);
        }
    };
    var $elm$random$Random$Generator = $elm$core$Basics$identity;
    var $elm$random$Random$constant = function (value) {
        return function (seed) {
            return _Utils_Tuple2(value, seed);
        };
    };
    var $elm$core$Array$getHelp_fn = function (shift, index, tree) {
        getHelp: while (true) {
            var pos = $elm$core$Array$bitMask & (index >>> shift);
            var _v0 = _JsArray_unsafeGet_fn(pos, tree);
            if (!_v0.$) {
                var subTree = _v0.a;
                var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$index = index, $temp$tree = subTree;
                shift = $temp$shift;
                index = $temp$index;
                tree = $temp$tree;
                continue getHelp;
            }
            else {
                var values = _v0.a;
                return _JsArray_unsafeGet_fn($elm$core$Array$bitMask & index, values);
            }
        }
    }, $elm$core$Array$getHelp = F3($elm$core$Array$getHelp_fn);
    var $elm$core$Array$tailIndex = function (len) {
        return (len >>> 5) << 5;
    };
    var $elm$core$Array$get_fn = function (index, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(_JsArray_unsafeGet_fn($elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just($elm$core$Array$getHelp_fn(startShift, index, tree)));
    }, $elm$core$Array$get = F2($elm$core$Array$get_fn);
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $elm$random$Random$peel = function (_v0) {
        var state = _v0.a;
        var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
        return ((word >>> 22) ^ word) >>> 0;
    };
    var $elm$random$Random$int_fn = function (a, b) {
        return function (seed0) {
            var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
            var lo = _v0.a;
            var hi = _v0.b;
            var range = (hi - lo) + 1;
            if (!((range - 1) & range)) {
                return _Utils_Tuple2((((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo, $elm$random$Random$next(seed0));
            }
            else {
                var threshhold = (((-range) >>> 0) % range) >>> 0;
                var accountForBias = function (seed) {
                    accountForBias: while (true) {
                        var x = $elm$random$Random$peel(seed);
                        var seedN = $elm$random$Random$next(seed);
                        if (_Utils_cmp(x, threshhold) < 0) {
                            var $temp$seed = seedN;
                            seed = $temp$seed;
                            continue accountForBias;
                        }
                        else {
                            return _Utils_Tuple2((x % range) + lo, seedN);
                        }
                    }
                };
                return accountForBias(seed0);
            }
        };
    }, $elm$random$Random$int = F2($elm$random$Random$int_fn);
    var $elm$core$Array$length = function (_v0) {
        var len = _v0.a;
        return len;
    };
    var $elm$random$Random$map_fn = function (func, _v0) {
        var genA = _v0;
        return function (seed0) {
            var _v1 = genA(seed0);
            var a = _v1.a;
            var seed1 = _v1.b;
            return _Utils_Tuple2(func(a), seed1);
        };
    }, $elm$random$Random$map = F2($elm$random$Random$map_fn);
    var $author$project$Main$generateNext = function (possible) {
        var n = $elm$core$Array$length(possible);
        if (!n) {
            return $elm$random$Random$constant(-1);
        }
        else {
            var nonZero = n;
            return $elm$random$Random$map_fn(function (idx) {
                return $elm$core$Maybe$withDefault_fn(-1, $elm$core$Array$get_fn(idx, possible));
            }, $elm$random$Random$int_fn(0, nonZero - 1));
        }
    };
    var $elm$random$Random$step_fn = function (_v0, seed) {
        var generator = _v0;
        return generator(seed);
    }, $elm$random$Random$step = F2($elm$random$Random$step_fn);
    var $author$project$Main$handleTick = function (model) {
        var mOptions = $elm$core$Array$get_fn(model.C, model.a);
        if (mOptions.$ === 1) {
            return function () {
                var $r = model.$c();
                $r.C = 0;
                return $r;
            }();
        }
        else {
            var g = mOptions.a;
            var _v1 = $elm$random$Random$step_fn($author$project$Main$generateNext(g.r), model.p);
            var next = _v1.a;
            var nxtSeed = _v1.b;
            return function () {
                var $r = model.$c();
                $r.C = next;
                $r.l = $elm$core$Array$append_fn(model.l, $elm$core$Array$fromList(_List_fromArray([next])));
                $r.p = nxtSeed;
                return $r;
            }();
        }
    };
    var $author$project$Background$numOfBlocks_fn = function (w, h, blocksize) {
        return ((w / blocksize) | 0) * ((h / blocksize) | 0);
    }, $author$project$Background$numOfBlocks = F3($author$project$Background$numOfBlocks_fn);
    var $elm$core$List$repeatHelp_fn = function (result, n, value) {
        repeatHelp: while (true) {
            if (n <= 0) {
                return result;
            }
            else {
                var $temp$result = _List_Cons(value, result), $temp$n = n - 1, $temp$value = value;
                result = $temp$result;
                n = $temp$n;
                value = $temp$value;
                continue repeatHelp;
            }
        }
    }, $elm$core$List$repeatHelp = F3($elm$core$List$repeatHelp_fn);
    var $elm$core$List$repeat_fn = function (n, value) {
        return $elm$core$List$repeatHelp_fn(_List_Nil, n, value);
    }, $elm$core$List$repeat = F2($elm$core$List$repeat_fn);
    var $author$project$Main$sequenceUpdates_fn = function (lst, model) {
        return $elm$core$List$foldr_fn(F2(function (f, x) {
            return f(x);
        }), model, lst);
    }, $author$project$Main$sequenceUpdates = F2($author$project$Main$sequenceUpdates_fn);
    var $author$project$Main$generateAll = function (model) {
        var num = $author$project$Background$numOfBlocks_fn(model.q.u, model.q.s, $author$project$Main$blockSize);
        return $author$project$Main$sequenceUpdates_fn($elm$core$List$repeat_fn(num, $author$project$Main$handleTick), function () {
            var $r = model.$c();
            $r.l = $elm$core$Array$empty;
            return $r;
        }());
    };
    var $author$project$Main$graphSize = 16;
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $author$project$Main$initGraph = function () {
        var fromIndex = function (idx) {
            var nextSlot = _Basics_modBy_fn($author$project$Main$graphSize, idx + 1);
            return (new $$Record11($elm$core$Array$fromList(_List_fromArray([nextSlot])), $author$project$Main$Note_fn(3, 0), $elm$core$String$fromInt(nextSlot)));
        };
        return $elm$core$Array$initialize_fn($author$project$Main$graphSize, fromIndex);
    }();
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$random$Random$listHelp_fn = function (revList, n, gen, seed) {
        listHelp: while (true) {
            if (n < 1) {
                return _Utils_Tuple2(revList, seed);
            }
            else {
                var _v0 = gen(seed);
                var value = _v0.a;
                var newSeed = _v0.b;
                var $temp$revList = _List_Cons(value, revList), $temp$n = n - 1, $temp$gen = gen, $temp$seed = newSeed;
                revList = $temp$revList;
                n = $temp$n;
                gen = $temp$gen;
                seed = $temp$seed;
                continue listHelp;
            }
        }
    }, $elm$random$Random$listHelp = F4($elm$random$Random$listHelp_fn);
    var $elm$random$Random$list_fn = function (n, _v0) {
        var gen = _v0;
        return function (seed) {
            return $elm$random$Random$listHelp_fn(_List_Nil, n, gen, seed);
        };
    }, $elm$random$Random$list = F2($elm$random$Random$list_fn);
    var $author$project$Main$allPitchClasses = _List_fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    var $author$project$Main$majorScale = _List_fromArray([0, 2, 4, 5, 7, 9, 11, 0, 2, 4, 5, 7, 9, 11]);
    var $elm$random$Random$map2_fn = function (func, _v0, _v1) {
        var genA = _v0;
        var genB = _v1;
        return function (seed0) {
            var _v2 = genA(seed0);
            var a = _v2.a;
            var seed1 = _v2.b;
            var _v3 = genB(seed1);
            var b = _v3.a;
            var seed2 = _v3.b;
            return _Utils_Tuple2(A2(func, a, b), seed2);
        };
    }, $elm$random$Random$map2_fn_unwrapped = function (func, _v0, _v1) {
        var genA = _v0;
        var genB = _v1;
        return function (seed0) {
            var _v2 = genA(seed0);
            var a = _v2.a;
            var seed1 = _v2.b;
            var _v3 = genB(seed1);
            var b = _v3.a;
            var seed2 = _v3.b;
            return _Utils_Tuple2(func(a, b), seed2);
        };
    }, $elm$random$Random$map2 = F3($elm$random$Random$map2_fn);
    var $author$project$Main$pentaTonic = _List_fromArray([0, 2, 5, 7, 9, 0, 2, 5, 7, 9, 0, 2, 5, 7, 9]);
    var $elm$core$Basics$abs = function (n) {
        return (n < 0) ? (-n) : n;
    };
    var $elm$random$Random$float_fn = function (a, b) {
        return function (seed0) {
            var seed1 = $elm$random$Random$next(seed0);
            var range = $elm$core$Basics$abs(b - a);
            var n1 = $elm$random$Random$peel(seed1);
            var n0 = $elm$random$Random$peel(seed0);
            var lo = (134217727 & n1) * 1;
            var hi = (67108863 & n0) * 1;
            var val = ((hi * 134217728) + lo) / 9007199254740992;
            var scaled = (val * range) + a;
            return _Utils_Tuple2(scaled, $elm$random$Random$next(seed1));
        };
    }, $elm$random$Random$float = F2($elm$random$Random$float_fn);
    var $elm$random$Random$getByWeight_fn = function (_v0, others, countdown) {
        getByWeight: while (true) {
            var weight = _v0.a;
            var value = _v0.b;
            if (!others.b) {
                return value;
            }
            else {
                var second = others.a;
                var otherOthers = others.b;
                if (_Utils_cmp(countdown, $elm$core$Basics$abs(weight)) < 1) {
                    return value;
                }
                else {
                    var $temp$_v0 = second, $temp$others = otherOthers, $temp$countdown = countdown - $elm$core$Basics$abs(weight);
                    _v0 = $temp$_v0;
                    others = $temp$others;
                    countdown = $temp$countdown;
                    continue getByWeight;
                }
            }
        }
    }, $elm$random$Random$getByWeight = F3($elm$random$Random$getByWeight_fn);
    var $elm$core$List$sum = function (numbers) {
        return $elm$core$List$foldl_fn($elm$core$Basics$add, 0, numbers);
    };
    var $elm$random$Random$weighted_fn = function (first, others) {
        var normalize = function (_v0) {
            var weight = _v0.a;
            return $elm$core$Basics$abs(weight);
        };
        var total = normalize(first) + $elm$core$List$sum($elm$core$List$map_fn(normalize, others));
        return $elm$random$Random$map_fn(A2($elm$random$Random$getByWeight, first, others), $elm$random$Random$float_fn(0, total));
    }, $elm$random$Random$weighted = F2($elm$random$Random$weighted_fn);
    var $author$project$Main$randomNoteOfClass = function (str) {
        var oct = $elm$random$Random$weighted_fn(_Utils_Tuple2(1, 3), _List_fromArray([
            _Utils_Tuple2(0.25, 2),
            _Utils_Tuple2(0.25, 4)
        ]));
        var _class = function () {
            switch (str) {
                case "pentatonic":
                    return $author$project$Main$pentaTonic;
                case "chromatic":
                    return $author$project$Main$allPitchClasses;
                case "major":
                    return $author$project$Main$majorScale;
                default:
                    return $author$project$Main$pentaTonic;
            }
        }();
        var randClass = $elm$random$Random$map_fn(function (idx) {
            return $elm$core$Maybe$withDefault_fn(0, $elm$core$Array$get_fn(idx, $elm$core$Array$fromList(_class)));
        }, $elm$random$Random$int_fn(0, $elm$core$List$length(_class)));
        return $elm$random$Random$map2_fn($author$project$Main$Note, oct, randClass);
    };
    var $author$project$Main$randomizeAllNotes = function (model) {
        var updateNotes = F2(function (_v1, newNote) {
            var g = _v1;
            return $$update__f(g, newNote);
        });
        var entryLst = $elm$core$Array$toList(model.a);
        var _v0 = $elm$random$Random$step_fn($elm$random$Random$list_fn($elm$core$List$length(entryLst), $author$project$Main$randomNoteOfClass(model.H)), model.p);
        var randomNotes = _v0.a;
        var newSeed = _v0.b;
        var newGraph = $elm$core$Array$fromList(_List_map2_fn(updateNotes, entryLst, randomNotes));
        return function () {
            var $r = model.$c();
            $r.a = newGraph;
            $r.p = newSeed;
            return $r;
        }();
    };
    var $elm$random$Random$andThen_fn = function (callback, _v0) {
        var genA = _v0;
        return function (seed) {
            var _v1 = genA(seed);
            var result = _v1.a;
            var newSeed = _v1.b;
            var _v2 = callback(result);
            var genB = _v2;
            return genB(newSeed);
        };
    }, $elm$random$Random$andThen = F2($elm$random$Random$andThen_fn);
    var $elm$core$List$drop_fn = function (n, list) {
        drop: while (true) {
            if (n <= 0) {
                return list;
            }
            else {
                if (!list.b) {
                    return list;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    }, $elm$core$List$drop = F2($elm$core$List$drop_fn);
    var $elm$core$List$head = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $author$project$Main$get_fn = function (nth, list) {
        return $elm$core$List$head($elm$core$List$drop_fn(nth - 1, list));
    }, $author$project$Main$get = F2($author$project$Main$get_fn);
    var $author$project$Main$randomChoice_fn = function (first, rest) {
        return $elm$random$Random$map_fn(function (idx) {
            if (!idx) {
                return first;
            }
            else {
                var n = idx;
                return $elm$core$Maybe$withDefault_fn(first, $author$project$Main$get_fn(n, _List_Cons(first, rest)));
            }
        }, $elm$random$Random$int_fn(0, $elm$core$List$length(rest)));
    }, $author$project$Main$randomChoice = F2($author$project$Main$randomChoice_fn);
    var $author$project$Main$intArrayToString = function (arr) {
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn($elm$core$String$fromInt, $elm$core$Array$toList(arr)));
    };
    var $elm$core$Array$setHelp_fn = function (shift, index, value, tree) {
        var pos = $elm$core$Array$bitMask & (index >>> shift);
        var _v0 = _JsArray_unsafeGet_fn(pos, tree);
        if (!_v0.$) {
            var subTree = _v0.a;
            var newSub = $elm$core$Array$setHelp_fn(shift - $elm$core$Array$shiftStep, index, value, subTree);
            return _JsArray_unsafeSet_fn(pos, $elm$core$Array$SubTree(newSub), tree);
        }
        else {
            var values = _v0.a;
            var newLeaf = _JsArray_unsafeSet_fn($elm$core$Array$bitMask & index, value, values);
            return _JsArray_unsafeSet_fn(pos, $elm$core$Array$Leaf(newLeaf), tree);
        }
    }, $elm$core$Array$setHelp = F4($elm$core$Array$setHelp_fn);
    var $elm$core$Array$set_fn = function (index, value, array) {
        var len = array.a;
        var startShift = array.b;
        var tree = array.c;
        var tail = array.d;
        return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Array$Array_elm_builtin_fn(len, startShift, tree, _JsArray_unsafeSet_fn($elm$core$Array$bitMask & index, value, tail)) : $elm$core$Array$Array_elm_builtin_fn(len, startShift, $elm$core$Array$setHelp_fn(startShift, index, value, tree), tail));
    }, $elm$core$Array$set = F3($elm$core$Array$set_fn);
    var $author$project$Main$setOptions_fn = function (idx, opts, model) {
        var mEntry = $elm$core$Array$get_fn(idx, model.a);
        if (!mEntry.$) {
            var g = mEntry.a;
            var newGraph = $elm$core$Array$set_fn(idx, function () {
                var $r = g.$c();
                $r.B = $author$project$Main$intArrayToString(opts);
                $r.r = opts;
                return $r;
            }(), model.a);
            return $$update__a(model, newGraph);
        }
        else {
            return model;
        }
    }, $author$project$Main$setOptions = F3($author$project$Main$setOptions_fn);
    var $elm$core$Basics$composeL_fn = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_fn);
    var $author$project$Main$sequence_a0 = $elm$random$Random$map2($elm$core$List$cons), $author$project$Main$sequence_a1 = $elm$random$Random$constant(_List_Nil), $author$project$Main$sequence = A2($elm$core$List$foldr, $author$project$Main$sequence_a0, $author$project$Main$sequence_a1);
    var $author$project$Main$traverse = function (f) {
        return A2($elm$core$Basics$composeL, $author$project$Main$sequence, $elm$core$List$map(f));
    };
    var $author$project$Main$randomizeOpts = function (model) {
        var maxIndex = $elm$core$Array$length(model.a);
        var fromChoice = F2(function (idx, choice) {
            return $elm$random$Random$map_fn(function (rlst) {
                return $elm$core$Array$fromList(_List_Cons(_Basics_modBy_fn(maxIndex, idx + 1), rlst));
            }, $elm$random$Random$list_fn(choice, $elm$random$Random$int_fn(0, maxIndex)));
        });
        var generator = A2($author$project$Main$traverse, function (idx) {
            return $elm$random$Random$map_fn(function (opts) {
                return A2($author$project$Main$setOptions, idx, opts);
            }, $elm$random$Random$andThen_fn(fromChoice(idx), $author$project$Main$randomChoice_fn(0, _List_fromArray([0, 1, 1, 2, 2, 5]))));
        }, $elm$core$List$range_fn(0, maxIndex));
        var _v0 = $elm$random$Random$step_fn(generator, model.p);
        var updates = _v0.a;
        var newSeed = _v0.b;
        var newModel = $author$project$Main$sequenceUpdates_fn(updates, model);
        return function () {
            var $r = newModel.$c();
            $r.p = newSeed;
            return $r;
        }();
    };
    var $author$project$Main$init = function (flags) {
        var _default = _Utils_Tuple2($author$project$Main$generateAll($author$project$Main$randomizeAllNotes($author$project$Main$randomizeOpts((new $$Record12(0, 0, $author$project$Main$initGraph, $elm$core$Array$empty, _Utils_Tuple2(0, _List_fromArray([6, 12])), $elm$core$Maybe$Nothing, "3", "6", true, $elm$random$Random$initialSeed(flags.Y), "pentatonic", { s: flags.s, u: flags.u }, false))))), $elm$core$Platform$Cmd$none);
        var _v0 = flags.U;
        if (_v0 === "") {
            return _default;
        }
        else {
            var data = _v0;
            var _v1 = _Json_runOnString_fn($author$project$Main$decodeModel, data);
            if (!_v1.$) {
                var model = _v1.a;
                return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
            }
            else {
                var err = _v1.a;
                return function (_v2) {
                    var model = _v2.a;
                    var c = _v2.b;
                    return _Utils_Tuple2(function () {
                        var $r = model.$c();
                        $r.T = $elm$core$Maybe$Just("sorry no json");
                        return $r;
                    }(), c);
                }(_default);
            }
        }
    };
    var $author$project$Main$Tick = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$time$Time$Every_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$time$Time$Every = F2($elm$time$Time$Every_fn);
    var $elm$time$Time$State_fn = function (taggers, processes) {
        return { ao: processes, av: taggers };
    }, $elm$time$Time$State = F2($elm$time$Time$State_fn);
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$time$Time$init = $elm$core$Task$succeed($elm$time$Time$State_fn($elm$core$Dict$empty, $elm$core$Dict$empty));
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$get_fn = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_fn(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_fn);
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_fn = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_fn);
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_fn = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBNode_elm_builtin_fn(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_fn);
    var $elm$core$Dict$insertHelp_fn = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_fn(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$insertHelp_fn(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_fn(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_fn(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_fn);
    var $elm$core$Dict$insert_fn = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_fn(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_fn);
    var $elm$time$Time$addMySub_fn = function (_v0, state) {
        var interval = _v0.a;
        var tagger = _v0.b;
        var _v1 = $elm$core$Dict$get_fn(interval, state);
        if (_v1.$ === 1) {
            return $elm$core$Dict$insert_fn(interval, _List_fromArray([tagger]), state);
        }
        else {
            var taggers = _v1.a;
            return $elm$core$Dict$insert_fn(interval, _List_Cons(tagger, taggers), state);
        }
    }, $elm$time$Time$addMySub = F2($elm$time$Time$addMySub_fn);
    var $elm$core$Process$kill = _Scheduler_kill;
    var $elm$core$Dict$foldl_fn = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_fn(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl_fn_unwrapped = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldl_fn_unwrapped(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_fn);
    var $elm$core$Dict$merge_fn = function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
        var stepState = F3(function (rKey, rValue, _v0) {
            stepState: while (true) {
                var list = _v0.a;
                var result = _v0.b;
                if (!list.b) {
                    return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                }
                else {
                    var _v2 = list.a;
                    var lKey = _v2.a;
                    var lValue = _v2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _v0 = $temp$_v0;
                        continue stepState;
                    }
                    else {
                        if (_Utils_cmp(lKey, rKey) > 0) {
                            return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
                        }
                        else {
                            return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result));
                        }
                    }
                }
            }
        });
        var _v3 = $elm$core$Dict$foldl_fn(stepState, _Utils_Tuple2($elm$core$Dict$toList(leftDict), initialResult), rightDict);
        var leftovers = _v3.a;
        var intermediateResult = _v3.b;
        return $elm$core$List$foldl_fn_unwrapped(function (_v4, result) {
            var k = _v4.a;
            var v = _v4.b;
            return A3(leftStep, k, v, result);
        }, intermediateResult, leftovers);
    }, $elm$core$Dict$merge = F6($elm$core$Dict$merge_fn);
    var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
    var $elm$time$Time$Name = function (a) {
        return { $: 0, a: a };
    };
    var $elm$time$Time$Offset = function (a) {
        return { $: 1, a: a };
    };
    var $elm$time$Time$Zone_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$time$Time$Zone = F2($elm$time$Time$Zone_fn);
    var $elm$time$Time$customZone = $elm$time$Time$Zone;
    var $elm$time$Time$setInterval = _Time_setInterval;
    var $elm$core$Process$spawn = _Scheduler_spawn;
    var $elm$time$Time$spawnHelp_fn = function (router, intervals, processes) {
        if (!intervals.b) {
            return $elm$core$Task$succeed(processes);
        }
        else {
            var interval = intervals.a;
            var rest = intervals.b;
            var spawnTimer = $elm$core$Process$spawn(_Time_setInterval_fn(interval, _Platform_sendToSelf_fn(router, interval)));
            var spawnRest = function (id) {
                return $elm$time$Time$spawnHelp_fn(router, rest, $elm$core$Dict$insert_fn(interval, id, processes));
            };
            return _Scheduler_andThen_fn(spawnRest, spawnTimer);
        }
    }, $elm$time$Time$spawnHelp = F3($elm$time$Time$spawnHelp_fn);
    var $elm$time$Time$onEffects_fn = function (router, subs, _v0) {
        var processes = _v0.ao;
        var rightStep = F3(function (_v6, id, _v7) {
            var spawns = _v7.a;
            var existing = _v7.b;
            var kills = _v7.c;
            return _Utils_Tuple3(spawns, existing, _Scheduler_andThen_fn(function (_v5) {
                return kills;
            }, $elm$core$Process$kill(id)));
        });
        var newTaggers = $elm$core$List$foldl_fn($elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
        var leftStep = F3(function (interval, taggers, _v4) {
            var spawns = _v4.a;
            var existing = _v4.b;
            var kills = _v4.c;
            return _Utils_Tuple3(_List_Cons(interval, spawns), existing, kills);
        });
        var bothStep = F4(function (interval, taggers, id, _v3) {
            var spawns = _v3.a;
            var existing = _v3.b;
            var kills = _v3.c;
            return _Utils_Tuple3(spawns, $elm$core$Dict$insert_fn(interval, id, existing), kills);
        });
        var _v1 = $elm$core$Dict$merge_fn(leftStep, bothStep, rightStep, newTaggers, processes, _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, $elm$core$Task$succeed(0)));
        var spawnList = _v1.a;
        var existingDict = _v1.b;
        var killTask = _v1.c;
        return _Scheduler_andThen_fn(function (newProcesses) {
            return $elm$core$Task$succeed($elm$time$Time$State_fn(newTaggers, newProcesses));
        }, _Scheduler_andThen_fn(function (_v2) {
            return $elm$time$Time$spawnHelp_fn(router, spawnList, existingDict);
        }, killTask));
    }, $elm$time$Time$onEffects = F3($elm$time$Time$onEffects_fn);
    var $elm$time$Time$Posix = $elm$core$Basics$identity;
    var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
    var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
    var $elm$time$Time$onSelfMsg_fn = function (router, interval, state) {
        var _v0 = $elm$core$Dict$get_fn(interval, state.av);
        if (_v0.$ === 1) {
            return $elm$core$Task$succeed(state);
        }
        else {
            var taggers = _v0.a;
            var tellTaggers = function (time) {
                return $elm$core$Task$sequence($elm$core$List$map_fn(function (tagger) {
                    return _Platform_sendToApp_fn(router, tagger(time));
                }, taggers));
            };
            return _Scheduler_andThen_fn(function (_v1) {
                return $elm$core$Task$succeed(state);
            }, _Scheduler_andThen_fn(tellTaggers, $elm$time$Time$now));
        }
    }, $elm$time$Time$onSelfMsg = F3($elm$time$Time$onSelfMsg_fn);
    var $elm$time$Time$subMap_fn = function (f, _v0) {
        var interval = _v0.a;
        var tagger = _v0.b;
        return $elm$time$Time$Every_fn(interval, A2($elm$core$Basics$composeL, f, tagger));
    }, $elm$time$Time$subMap = F2($elm$time$Time$subMap_fn);
    _Platform_effectManagers["Time"] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
    var $elm$time$Time$subscription = _Platform_leaf("Time");
    var $elm$time$Time$every_fn = function (interval, tagger) {
        return $elm$time$Time$subscription($elm$time$Time$Every_fn(interval, tagger));
    }, $elm$time$Time$every = F2($elm$time$Time$every_fn);
    var $author$project$Main$subscriptions = function (model) {
        return $elm$core$Platform$Sub$batch(model.x ? _List_fromArray([
            $elm$time$Time$every_fn(250, $author$project$Main$Tick)
        ]) : _List_Nil);
    };
    var $author$project$Main$SetNote_fn = function (a, b) {
        return { $: 6, a: a, b: b };
    }, $author$project$Main$SetNote = F2($author$project$Main$SetNote_fn);
    var $author$project$Main$changeNumberOfVoice_fn = function (n, model) {
        var newModel = function () {
            var _v0 = $elm$core$String$toInt(n);
            if (!_v0.$) {
                switch (_v0.a) {
                    case 0:
                        return model;
                    case 1:
                        return $$update__g(model, _Utils_Tuple2(0, _List_Nil));
                    default:
                        var moreThanOne = _v0.a;
                        var offset = $elm$core$Maybe$withDefault_fn(0, $elm$core$String$toInt(model.E));
                        return $$update__g(model, _Utils_Tuple2(0, $elm$core$List$map_fn(function (x) {
                            return x * offset;
                        }, $elm$core$List$range_fn(1, moreThanOne - 1))));
                }
            }
            else {
                return model;
            }
        }();
        return function () {
            var $r = newModel.$c();
            $r.K = n;
            return $r;
        }();
    }, $author$project$Main$changeNumberOfVoice = F2($author$project$Main$changeNumberOfVoice_fn);
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Main$copyJSON = _Platform_outgoingPort("copyJSON", $elm$json$Json$Encode$string);
    var $elm$random$Random$Generate = $elm$core$Basics$identity;
    var $elm$time$Time$posixToMillis = function (_v0) {
        var millis = _v0;
        return millis;
    };
    var $elm$random$Random$init = _Scheduler_andThen_fn(function (time) {
        return $elm$core$Task$succeed($elm$random$Random$initialSeed($elm$time$Time$posixToMillis(time)));
    }, $elm$time$Time$now);
    var $elm$random$Random$onEffects_fn = function (router, commands, seed) {
        if (!commands.b) {
            return $elm$core$Task$succeed(seed);
        }
        else {
            var generator = commands.a;
            var rest = commands.b;
            var _v1 = $elm$random$Random$step_fn(generator, seed);
            var value = _v1.a;
            var newSeed = _v1.b;
            return _Scheduler_andThen_fn(function (_v2) {
                return $elm$random$Random$onEffects_fn(router, rest, newSeed);
            }, _Platform_sendToApp_fn(router, value));
        }
    }, $elm$random$Random$onEffects = F3($elm$random$Random$onEffects_fn);
    var $elm$random$Random$onSelfMsg_fn = function (_v0, _v1, seed) {
        return $elm$core$Task$succeed(seed);
    }, $elm$random$Random$onSelfMsg = F3($elm$random$Random$onSelfMsg_fn);
    var $elm$random$Random$cmdMap_fn = function (func, _v0) {
        var generator = _v0;
        return $elm$random$Random$map_fn(func, generator);
    }, $elm$random$Random$cmdMap = F2($elm$random$Random$cmdMap_fn);
    _Platform_effectManagers["Random"] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
    var $elm$random$Random$command = _Platform_leaf("Random");
    var $elm$random$Random$generate_fn = function (tagger, generator) {
        return $elm$random$Random$command($elm$random$Random$map_fn(tagger, generator));
    }, $elm$random$Random$generate = F2($elm$random$Random$generate_fn);
    var $elm$core$Maybe$map_fn = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_fn);
    var $author$project$Main$handleChangedInput_fn = function (idx, str, model) {
        var parseInts = $elm$core$List$foldr_fn(F2(function (x, acc) {
            if (!x.$) {
                var xx = x.a;
                return _List_Cons(xx, acc);
            }
            else {
                return acc;
            }
        }), _List_Nil, $elm$core$List$map_fn($elm$core$String$toInt, $elm$core$String$split_fn(" ", str)));
        var entry = (new $$Record11($elm$core$Array$fromList(parseInts), $elm$core$Maybe$withDefault_fn($author$project$Main$Note_fn(3, 0), $elm$core$Maybe$map_fn(function (_v0) {
            var g = _v0;
            return g.f;
        }, $elm$core$Array$get_fn(idx, model.a))), str));
        return $$update__a(model, $elm$core$Array$set_fn(idx, entry, model.a));
    }, $author$project$Main$handleChangedInput = F3($author$project$Main$handleChangedInput_fn);
    var $elm$core$Array$foldl_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldl_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldl_fn(func, acc, values);
            }
        });
        return _JsArray_foldl_fn(func, _JsArray_foldl_fn(helper, baseCase, tree), tail);
    }, $elm$core$Array$foldl = F3($elm$core$Array$foldl_fn);
    var $elm$json$Json$Encode$array_fn = function (func, entries) {
        return _Json_wrap($elm$core$Array$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$array = F2($elm$json$Json$Encode$array_fn);
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $elm$json$Json$Encode$object = function (pairs) {
        return _Json_wrap($elm$core$List$foldl_fn_unwrapped(function (_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return _Json_addField_fn(k, v, obj);
        }, _Json_emptyObject(0), pairs));
    };
    var $author$project$Main$pAsString = function (p) {
        switch (p) {
            case 0:
                return "C";
            case 1:
                return "C#";
            case 2:
                return "D";
            case 3:
                return "D#";
            case 4:
                return "E";
            case 5:
                return "F";
            case 6:
                return "F#";
            case 7:
                return "G";
            case 8:
                return "G#";
            case 9:
                return "A";
            case 10:
                return "A#";
            default:
                return "B";
        }
    };
    var $author$project$Main$encodeNote = function (_v0) {
        var o = _v0.a;
        var p = _v0.b;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("pitch", $elm$json$Json$Encode$string($author$project$Main$pAsString(p))),
            _Utils_Tuple2("octave", $elm$json$Json$Encode$int(o))
        ]));
    };
    var $author$project$Main$encodeGraphEntry = function (_v0) {
        var g = _v0;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("array", $elm$json$Json$Encode$array_fn($elm$json$Json$Encode$int, g.r)),
            _Utils_Tuple2("value", $elm$json$Json$Encode$string(g.B)),
            _Utils_Tuple2("note", $author$project$Main$encodeNote(g.f))
        ]));
    };
    var $elm$json$Json$Encode$list_fn = function (func, entries) {
        return _Json_wrap($elm$core$List$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_fn);
    var $author$project$Main$encodeIndex = function (_v0) {
        var first = _v0.a;
        var rest = _v0.b;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("first", $elm$json$Json$Encode$int(first)),
            _Utils_Tuple2("rest", $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$int, rest))
        ]));
    };
    var $elm$random$Random$maxInt = 2147483647;
    var $author$project$Main$encodeRandomSeed = function (seed) {
        var _v0 = $elm$random$Random$step_fn($elm$random$Random$int_fn(0, $elm$random$Random$maxInt), seed);
        var x = _v0.a;
        return $elm$json$Json$Encode$int(x);
    };
    var $author$project$Main$encodeScreensize = function (scrSize) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("width", $elm$json$Json$Encode$int(scrSize.u)),
            _Utils_Tuple2("height", $elm$json$Json$Encode$int(scrSize.s))
        ]));
    };
    var $author$project$Main$encodeModel = function (model) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("current", $elm$json$Json$Encode$int(model.C)),
            _Utils_Tuple2("history", $elm$json$Json$Encode$array_fn($elm$json$Json$Encode$int, model.l)),
            _Utils_Tuple2("graph", $elm$json$Json$Encode$array_fn($author$project$Main$encodeGraphEntry, model.a)),
            _Utils_Tuple2("screenSize", $author$project$Main$encodeScreensize(model.q)),
            _Utils_Tuple2("rndSeed", $author$project$Main$encodeRandomSeed(model.p)),
            _Utils_Tuple2("scalePreset", $elm$json$Json$Encode$string(model.H)),
            _Utils_Tuple2("playing", $elm$json$Json$Encode$bool(model.x)),
            _Utils_Tuple2("index", $author$project$Main$encodeIndex(model.g)),
            _Utils_Tuple2("showControls", $elm$json$Json$Encode$bool(model.z)),
            _Utils_Tuple2("currentVoice", $elm$json$Json$Encode$int(model.m)),
            _Utils_Tuple2("offset", $elm$json$Json$Encode$string(model.E)),
            _Utils_Tuple2("numberOfVoice", $elm$json$Json$Encode$string(model.K))
        ]));
    };
    var $author$project$Main$modelAsJSON = function (model) {
        return _Json_encode_fn(4, $author$project$Main$encodeModel(model));
    };
    var $elm$core$Basics$not = _Basics_not;
    var $author$project$Main$getCurrentVoiceIndex = function (model) {
        var _v0 = _Utils_Tuple2(model.g, model.m);
        if (!_v0.a.b.b) {
            var _v1 = _v0.a;
            var idx = _v1.a;
            return idx;
        }
        else {
            var _v2 = _v0.a;
            var idx = _v2.a;
            var rest = _v2.b;
            var voiceIndex = _v0.b;
            var arr = $elm$core$Array$fromList(_List_Cons(idx, rest));
            return $elm$core$Maybe$withDefault_fn(0, $elm$core$Array$get_fn(_Basics_modBy_fn($elm$core$Array$length(arr), voiceIndex), arr));
        }
    };
    var $elm$core$Maybe$andThen_fn = function (callback, maybeValue) {
        if (!maybeValue.$) {
            var value = maybeValue.a;
            return callback(value);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$andThen = F2($elm$core$Maybe$andThen_fn);
    var $author$project$Main$asString = function (_v0) {
        var oct = _v0.a;
        var pitch = _v0.b;
        return _Utils_ap($author$project$Main$pAsString(pitch), $elm$core$String$fromInt(oct));
    };
    var $author$project$Main$lookupSelectedNote_fn = function (idx, history, array) {
        return $author$project$Main$asString($elm$core$Maybe$withDefault_fn($author$project$Main$Note_fn(3, 0), $elm$core$Maybe$map_fn(function (_v0) {
            var g = _v0;
            return g.f;
        }, $elm$core$Maybe$andThen_fn(function (idx2) {
            return $elm$core$Array$get_fn(idx2, array);
        }, $elm$core$Array$get_fn(idx, history)))));
    }, $author$project$Main$lookupSelectedNote = F3($author$project$Main$lookupSelectedNote_fn);
    var $author$project$Main$playNote = _Platform_outgoingPort("playNote", $elm$json$Json$Encode$string);
    var $author$project$Main$playback = function (model) {
        return $author$project$Main$playNote($author$project$Main$lookupSelectedNote_fn($author$project$Main$getCurrentVoiceIndex(model), model.l, model.a));
    };
    var $author$project$Main$randomNote = function () {
        var randClass = $elm$random$Random$map_fn(function (idx) {
            return $elm$core$Maybe$withDefault_fn(0, $elm$core$Array$get_fn(idx, $elm$core$Array$fromList($author$project$Main$majorScale)));
        }, $elm$random$Random$int_fn(0, $elm$core$List$length($author$project$Main$allPitchClasses)));
        var oct = $elm$random$Random$int_fn(2, 3);
        return $elm$random$Random$map2_fn($author$project$Main$Note, oct, randClass);
    }();
    var $author$project$Main$withOctave_fn = function (o, _v0) {
        var p = _v0.b;
        return $author$project$Main$Note_fn(o, p);
    }, $author$project$Main$withOctave = F2($author$project$Main$withOctave_fn);
    var $author$project$Main$selectedOctave_fn = function (idx, octStr, model) {
        var moctave = $elm$core$String$toInt(octStr);
        var mentry = $elm$core$Array$get_fn(idx, model.a);
        var _v0 = _Utils_Tuple2(mentry, moctave);
        if ((!_v0.a.$) && (!_v0.b.$)) {
            var g = _v0.a.a;
            var oct = _v0.b.a;
            return $$update__a(model, $elm$core$Array$set_fn(idx, $$update__f(g, $author$project$Main$withOctave_fn(oct, g.f)), model.a));
        }
        else {
            return model;
        }
    }, $author$project$Main$selectedOctave = F3($author$project$Main$selectedOctave_fn);
    var $author$project$Main$withPitchClass_fn = function (pi, _v0) {
        var o = _v0.a;
        return $author$project$Main$Note_fn(o, pi);
    }, $author$project$Main$withPitchClass = F2($author$project$Main$withPitchClass_fn);
    var $author$project$Main$selectedPitch_fn = function (idx, pitchStr, model) {
        var mpitch = $author$project$Main$stringToPitchclass(pitchStr);
        var mentry = $elm$core$Array$get_fn(idx, model.a);
        var _v0 = _Utils_Tuple2(mentry, mpitch);
        if ((!_v0.a.$) && (!_v0.b.$)) {
            var g = _v0.a.a;
            var pi = _v0.b.a;
            return $$update__a(model, $elm$core$Array$set_fn(idx, $$update__f(g, $author$project$Main$withPitchClass_fn(pi, g.f)), model.a));
        }
        else {
            return model;
        }
    }, $author$project$Main$selectedPitch = F3($author$project$Main$selectedPitch_fn);
    var $author$project$Main$setNote_fn = function (idx, note, model) {
        var mentry = $elm$core$Array$get_fn(idx, model.a);
        if (!mentry.$) {
            var g = mentry.a;
            return $$update__a(model, $elm$core$Array$set_fn(idx, $$update__f(g, note), model.a));
        }
        else {
            return model;
        }
    }, $author$project$Main$setNote = F3($author$project$Main$setNote_fn);
    var $author$project$Main$setOffset_fn = function (input, model) {
        var off = $elm$core$Maybe$withDefault_fn(0, $elm$core$String$toInt(input));
        return function () {
            var $r = model.$c();
            $r.E = input;
            $r.g = _Utils_Tuple2(0, _List_fromArray([0 + off, 0 + (2 * off)]));
            return $r;
        }();
    }, $author$project$Main$setOffset = F2($author$project$Main$setOffset_fn);
    var $author$project$Main$setScale_fn = function (str, model) {
        var updateEntry = F2(function (pitch, _v1) {
            var g = _v1;
            return $$update__f(g, $author$project$Main$withPitchClass_fn(pitch, g.f));
        });
        var pitches = function () {
            switch (str) {
                case "major":
                    return $author$project$Main$majorScale;
                case "pentatonic":
                    return $author$project$Main$pentaTonic;
                case "chromatic":
                    return $author$project$Main$allPitchClasses;
                default:
                    return $author$project$Main$allPitchClasses;
            }
        }();
        var nPitches = $elm$core$List$length(pitches);
        var nMissing = (_Utils_cmp(nPitches, $elm$core$Array$length(model.a)) > 0) ? 0 : (nPitches - $elm$core$Array$length(model.a));
        var graphEntry = (new $$Record11($elm$core$Array$fromList(_List_fromArray([0])), $author$project$Main$Note_fn(3, 0), $elm$core$String$fromInt(0)));
        var filledGraph = _Utils_ap($elm$core$Array$toList(model.a), $elm$core$List$repeat_fn(nMissing, graphEntry));
        var newGraph = $elm$core$Array$fromList(_List_map2_fn(updateEntry, pitches, filledGraph));
        return function () {
            var $r = model.$c();
            $r.H = str;
            $r.a = newGraph;
            return $r;
        }();
    }, $author$project$Main$setScale = F2($author$project$Main$setScale_fn);
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
    var $author$project$Main$setCurrentVoiceIndex_fn = function (newx, model) {
        var _v0 = model.g;
        if (!_v0.b.b) {
            return _Utils_Tuple2(newx, _List_Nil);
        }
        else {
            var idx = _v0.a;
            var rest = _v0.b;
            var _v1 = model.m;
            if (!_v1) {
                return _Utils_Tuple2(newx, rest);
            }
            else {
                var n = _v1;
                var arr = $elm$core$Array$fromList(_List_Cons(idx, rest));
                var _v2 = $elm$core$Array$toList($elm$core$Array$set_fn(n, newx, arr));
                if (_v2.b) {
                    var xs = _v2.b;
                    return _Utils_Tuple2(idx, xs);
                }
                else {
                    return _Utils_Tuple2(idx, _List_Nil);
                }
            }
        }
    }, $author$project$Main$setCurrentVoiceIndex = F2($author$project$Main$setCurrentVoiceIndex_fn);
    var $author$project$Main$timeTick = function (model) {
        var newIndex = $author$project$Main$getCurrentVoiceIndex(model) + 1;
        var safeIndex = _Basics_modBy_fn($elm$core$Basics$max_fn(1, $elm$core$Array$length(model.l)), newIndex);
        var newCurrentVoice = function (x) {
            return (_Utils_cmp(x, $elm$core$List$length(model.g.b)) > 0) ? 0 : x;
        }(model.m + 1);
        return function () {
            var $r = model.$c();
            $r.g = $author$project$Main$setCurrentVoiceIndex_fn(safeIndex, model);
            $r.m = newCurrentVoice;
            return $r;
        }();
    };
    var $author$project$Main$update_fn = function (msg, model) {
        switch (msg.$) {
            case 0:
                var idx = msg.a;
                var str = msg.b;
                return _Utils_Tuple2($author$project$Main$generateAll($author$project$Main$handleChangedInput_fn(idx, str, model)), $elm$core$Platform$Cmd$none);
            case 1:
                return _Utils_Tuple2($author$project$Main$timeTick(model), $author$project$Main$playback(model));
            case 2:
                return _Utils_Tuple2($author$project$Main$handleTick(model), $elm$core$Platform$Cmd$none);
            case 3:
                var idx = msg.a;
                var octStr = msg.b;
                return _Utils_Tuple2($author$project$Main$selectedOctave_fn(idx, octStr, model), $elm$core$Platform$Cmd$none);
            case 4:
                var idx = msg.a;
                var pitchStr = msg.b;
                return _Utils_Tuple2($author$project$Main$selectedPitch_fn(idx, pitchStr, model), $elm$core$Platform$Cmd$none);
            case 6:
                var idx = msg.a;
                var note = msg.b;
                return _Utils_Tuple2($author$project$Main$setNote_fn(idx, note, model), $elm$core$Platform$Cmd$none);
            case 5:
                var idx = msg.a;
                return _Utils_Tuple2(model, $elm$random$Random$generate_fn($author$project$Main$SetNote(idx), $author$project$Main$randomNote));
            case 7:
                return _Utils_Tuple2(model, $author$project$Main$copyJSON($author$project$Main$modelAsJSON(model)));
            case 8:
                return _Utils_Tuple2($author$project$Main$randomizeAllNotes(model), $elm$core$Platform$Cmd$none);
            case 9:
                return _Utils_Tuple2($author$project$Main$generateAll($author$project$Main$randomizeOpts(model)), $elm$core$Platform$Cmd$none);
            case 10:
                var scale = msg.a;
                return _Utils_Tuple2($author$project$Main$setScale_fn(scale, model), $elm$core$Platform$Cmd$none);
            case 12:
                return _Utils_Tuple2($$update__x(model, false), $elm$core$Platform$Cmd$none);
            case 11:
                return _Utils_Tuple2($$update__x(model, true), $elm$core$Platform$Cmd$none);
            case 13:
                return _Utils_Tuple2(function () {
                    var $r = model.$c();
                    $r.z = !model.z;
                    return $r;
                }(), $elm$core$Platform$Cmd$none);
            case 14:
                var inputStr = msg.a;
                return _Utils_Tuple2($author$project$Main$setOffset_fn(inputStr, model), $elm$core$Platform$Cmd$none);
            default:
                var n = msg.a;
                return _Utils_Tuple2($author$project$Main$changeNumberOfVoice_fn(n, model), $elm$core$Platform$Cmd$none);
        }
    }, $author$project$Main$update = F2($author$project$Main$update_fn);
    var $author$project$Main$ChangeNumberOfVoice = function (a) {
        return { $: 15, a: a };
    };
    var $author$project$Main$CopyJSON = { $: 7 };
    var $author$project$Main$RandomizeAll = { $: 8 };
    var $author$project$Main$RandomizeOpts = { $: 9 };
    var $elm$core$Basics$min_fn = function (x, y) {
        return (_Utils_cmp(x, y) < 0) ? x : y;
    }, $elm$core$Basics$min = F2($elm$core$Basics$min_fn);
    var $author$project$Background$clip_fn = function (low, high, x) {
        return function (y) {
            return $elm$core$Basics$min_fn(high, y);
        }($elm$core$Basics$max_fn(low, x));
    }, $author$project$Background$clip = F3($author$project$Background$clip_fn);
    var $elm$core$Basics$pi = _Basics_pi;
    var $elm$core$Basics$sin = _Basics_sin;
    var $author$project$Background$colorOfInt_fn = function (noOfColors, n) {
        var norm = function (x) {
            return $elm$core$String$fromInt($elm$core$Basics$floor((x + 1) * 128));
        };
        var r = function (x) {
            return norm($elm$core$Basics$sin((x * $elm$core$Basics$pi) * 2));
        };
        var g = function (x) {
            return norm($elm$core$Basics$sin(((x + 0.3333) * $elm$core$Basics$pi) * 2));
        };
        var b = function (x) {
            return norm($elm$core$Basics$sin(((x + 0.666667) * $elm$core$Basics$pi) * 2));
        };
        return function (x) {
            return "rgb(" + (r(x) + ("," + (g(x) + ("," + (b(x) + ")")))));
        }($author$project$Background$clip_fn(0, 1, n / noOfColors));
    }, $author$project$Background$colorOfInt = F2($author$project$Background$colorOfInt_fn);
    var $elm$svg$Svg$Attributes$height_a0 = "height", $elm$svg$Svg$Attributes$height = _VirtualDom_attribute($elm$svg$Svg$Attributes$height_a0);
    var $elm$core$Elm$JsArray$indexedMap = _JsArray_indexedMap;
    var $elm$core$Array$indexedMap_fn = function (func, _v0) {
        var len = _v0.a;
        var tree = _v0.c;
        var tail = _v0.d;
        var initialBuilder = {
            e: _List_Nil,
            b: 0,
            d: _JsArray_indexedMap_fn(func, $elm$core$Array$tailIndex(len), tail)
        };
        var helper = F2(function (node, builder) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldl_fn(helper, builder, subTree);
            }
            else {
                var leaf = node.a;
                var offset = builder.b * $elm$core$Array$branchFactor;
                var mappedLeaf = $elm$core$Array$Leaf(_JsArray_indexedMap_fn(func, offset, leaf));
                return {
                    e: _List_Cons(mappedLeaf, builder.e),
                    b: builder.b + 1,
                    d: builder.d
                };
            }
        });
        return $elm$core$Array$builderToArray_fn(true, _JsArray_foldl_fn(helper, initialBuilder, tree));
    }, $elm$core$Array$indexedMap = F2($elm$core$Array$indexedMap_fn);
    var $author$project$Background$safeModBy_fn = function (y, x) {
        if (!y) {
            return 1;
        }
        else {
            var nonzero = y;
            return _Basics_modBy_fn(y, x);
        }
    }, $author$project$Background$safeModBy = F2($author$project$Background$safeModBy_fn);
    var $elm$svg$Svg$Attributes$width_a0 = "width", $elm$svg$Svg$Attributes$width = _VirtualDom_attribute($elm$svg$Svg$Attributes$width_a0);
    var $elm$svg$Svg$Attributes$x_a0 = "x", $elm$svg$Svg$Attributes$x = _VirtualDom_attribute($elm$svg$Svg$Attributes$x_a0);
    var $elm$svg$Svg$Attributes$y_a0 = "y", $elm$svg$Svg$Attributes$y = _VirtualDom_attribute($elm$svg$Svg$Attributes$y_a0);
    var $author$project$Background$coordinatesFromIdx_fn = function (screenWidth, squareWidth, i) {
        var maxw = ((screenWidth / squareWidth) | 0) + 1;
        return _List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$x_a0, $elm$core$String$fromInt($author$project$Background$safeModBy_fn(maxw, i) * squareWidth)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$y_a0, $elm$core$String$fromInt(((i / maxw) | 0) * squareWidth)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$width_a0, $elm$core$String$fromInt(squareWidth)),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$height_a0, $elm$core$String$fromInt(squareWidth))
        ]);
    }, $author$project$Background$coordinatesFromIdx = F3($author$project$Background$coordinatesFromIdx_fn);
    var $elm$svg$Svg$Attributes$fill_a0 = "fill", $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute($elm$svg$Svg$Attributes$fill_a0);
    var $elm$svg$Svg$trustedNode_a0 = "http://www.w3.org/2000/svg", $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS($elm$svg$Svg$trustedNode_a0);
    var $elm$svg$Svg$rect = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "rect"), $elm$svg$Svg$rect_fn = $elm$svg$Svg$rect.a2;
    var $elm$svg$Svg$Attributes$stroke_a0 = "stroke", $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute($elm$svg$Svg$Attributes$stroke_a0);
    var $elm$svg$Svg$Attributes$strokeWidth_a0 = "stroke-width", $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeWidth_a0);
    var $author$project$Background$mkRect_fn = function (strk, screenWidth, squareWidth, color, x, marked) {
        var border = marked ? _List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, strk),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, "2")
        ]) : _List_Nil;
        return $elm$svg$Svg$rect_fn(_Utils_ap($author$project$Background$coordinatesFromIdx_fn(screenWidth, squareWidth, x), _Utils_ap(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, color)
        ]), border)), _List_Nil);
    }, $author$project$Background$mkRect = F6($author$project$Background$mkRect_fn);
    var $elm$svg$Svg$svg = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "svg"), $elm$svg$Svg$svg_fn = $elm$svg$Svg$svg.a2;
    var $elm$svg$Svg$Attributes$viewBox_a0 = "viewBox", $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute($elm$svg$Svg$Attributes$viewBox_a0);
    var $author$project$Background$justTheBlocks_fn = function (history, w, h, blockSize) {
        var ws = $elm$core$String$fromInt(w);
        var hs = $elm$core$String$fromInt(h);
        return $elm$svg$Svg$svg_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$width_a0, ws),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$height_a0, hs),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, $elm$core$String$join_fn(" ", _List_fromArray(["0", "0", ws, hs])))
        ]), $elm$core$Array$toList($elm$core$Array$indexedMap_fn(F2(function (i, pitchIndex) {
            return $author$project$Background$mkRect_fn("", w, blockSize, $author$project$Background$colorOfInt_fn(16, pitchIndex), i, false);
        }), history)));
    }, $author$project$Background$justTheBlocks = F4($author$project$Background$justTheBlocks_fn);
    var $elm$virtual_dom$VirtualDom$lazy4 = _VirtualDom_lazy4;
    var $elm$html$Html$Lazy$lazy4 = $elm$virtual_dom$VirtualDom$lazy4;
    var $author$project$Background$backgroundSvg_fn = function (history, w, h, blockSize) {
        return _VirtualDom_lazy4_fn($author$project$Background$justTheBlocks, history, w, h, blockSize);
    }, $author$project$Background$backgroundSvg = F4($author$project$Background$backgroundSvg_fn);
    var $elm$html$Html$br = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "br"), $elm$html$Html$br_fn = $elm$html$Html$br.a2;
    var $elm$html$Html$button = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "button"), $elm$html$Html$button_fn = $elm$html$Html$button.a2;
    var $elm$html$Html$Attributes$stringProperty_fn = function (key, string) {
        return _VirtualDom_property_fn(key, $elm$json$Json$Encode$string(string));
    }, $elm$html$Html$Attributes$stringProperty = F2($elm$html$Html$Attributes$stringProperty_fn);
    var $elm$html$Html$Attributes$class_a0 = "className", $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$class_a0);
    var $elm$html$Html$div = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "div"), $elm$html$Html$div_fn = $elm$html$Html$div.a2;
    var $author$project$Main$column = function (content) {
        return $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "myCol")
        ]), content);
    };
    var $author$project$Background$cursorBox_fn = function (currentVoice, current, history, w, h, blockSize) {
        var ws = $elm$core$String$fromInt(w);
        var strk = function () {
            switch (currentVoice) {
                case 0:
                    return "rgb(255,0,0)";
                case 1:
                    return "rgb(0,255,0)";
                default:
                    return "rgb(0,0,255)";
            }
        }();
        var hs = $elm$core$String$fromInt(h);
        var color = $elm$core$Maybe$withDefault_fn(0, $elm$core$Array$get_fn(current, history));
        return $elm$svg$Svg$svg_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$width_a0, ws),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$height_a0, hs),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, $elm$core$String$join_fn(" ", _List_fromArray(["0", "0", ws, hs])))
        ]), _List_fromArray([
            $author$project$Background$mkRect_fn(strk, w, blockSize, $author$project$Background$colorOfInt_fn(16, color), current, true)
        ]));
    }, $author$project$Background$cursorBox = F6($author$project$Background$cursorBox_fn);
    var $author$project$Main$SetOffset = function (a) {
        return { $: 14, a: a };
    };
    var $elm$html$Html$input = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "input"), $elm$html$Html$input_fn = $elm$html$Html$input.a2;
    var $elm$html$Html$label = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "label"), $elm$html$Html$label_fn = $elm$html$Html$label.a2;
    var $elm$html$Html$Attributes$max_a0 = "max", $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$max_a0);
    var $elm$html$Html$Attributes$min_a0 = "min", $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$min_a0);
    var $elm$html$Html$Events$alwaysStop = function (x) {
        return _Utils_Tuple2(x, true);
    };
    var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
        return { $: 1, a: a };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$stopPropagationOn_fn = function (event, decoder) {
        return _VirtualDom_on_fn(event, $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
    }, $elm$html$Html$Events$stopPropagationOn = F2($elm$html$Html$Events$stopPropagationOn_fn);
    var $elm$json$Json$Decode$at_fn = function (fields, decoder) {
        return $elm$core$List$foldr_fn($elm$json$Json$Decode$field, decoder, fields);
    }, $elm$json$Json$Decode$at = F2($elm$json$Json$Decode$at_fn);
    var $elm$html$Html$Events$targetValue = $elm$json$Json$Decode$at_fn(_List_fromArray(["target", "value"]), $elm$json$Json$Decode$string);
    var $elm$html$Html$Events$onInput = function (tagger) {
        return $elm$html$Html$Events$stopPropagationOn_fn("input", _Json_map1_fn($elm$html$Html$Events$alwaysStop, _Json_map1_fn(tagger, $elm$html$Html$Events$targetValue)));
    };
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$html$Html$Attributes$type__a0 = "type", $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$type__a0);
    var $elm$html$Html$Attributes$value_a0 = "value", $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$value_a0);
    var $author$project$Main$editOffset = function (off) {
        return $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
            $elm$html$Html$input_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "number"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$min_a0, "0"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$max_a0, "100"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, off),
                $elm$html$Html$Events$onInput($author$project$Main$SetOffset)
            ]), _List_Nil),
            $elm$html$Html$text("setoffset")
        ]));
    };
    var $author$project$Main$lookupIndexInHistory_fn = function (idx, model) {
        return $elm$core$Maybe$withDefault_fn(-1, $elm$core$Array$get_fn(model.g.a, model.l));
    }, $author$project$Main$lookupIndexInHistory = F2($author$project$Main$lookupIndexInHistory_fn);
    var $author$project$Main$getCurrentSlotForVoice_fn = function (voiceNum, model) {
        if (!voiceNum) {
            return $author$project$Main$lookupIndexInHistory_fn(model.g.a, model);
        }
        else {
            var nonZero = voiceNum;
            return $elm$core$Maybe$withDefault_fn(-1, $elm$core$Maybe$map_fn(function (idx2) {
                return $author$project$Main$lookupIndexInHistory_fn(idx2, model);
            }, $elm$core$Array$get_fn(nonZero, $elm$core$Array$fromList(model.g.b))));
        }
    }, $author$project$Main$getCurrentSlotForVoice = F2($author$project$Main$getCurrentSlotForVoice_fn);
    var $elm$html$Html$h1 = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "h1"), $elm$html$Html$h1_fn = $elm$html$Html$h1.a2;
    var $elm$html$Html$i = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "i"), $elm$html$Html$i_fn = $elm$html$Html$i.a2;
    var $elm$html$Html$li = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "li"), $elm$html$Html$li_fn = $elm$html$Html$li.a2;
    var $elm$core$Elm$JsArray$map = _JsArray_map;
    var $elm$core$Array$map_fn = function (func, _v0) {
        var len = _v0.a;
        var startShift = _v0.b;
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = function (node) {
            if (!node.$) {
                var subTree = node.a;
                return $elm$core$Array$SubTree(_JsArray_map_fn(helper, subTree));
            }
            else {
                var values = node.a;
                return $elm$core$Array$Leaf(_JsArray_map_fn(func, values));
            }
        };
        return $elm$core$Array$Array_elm_builtin_fn(len, startShift, _JsArray_map_fn(helper, tree), _JsArray_map_fn(func, tail));
    }, $elm$core$Array$map = F2($elm$core$Array$map_fn);
    var $author$project$Main$newline = $elm$html$Html$br_fn(_List_Nil, _List_Nil);
    var $elm$virtual_dom$VirtualDom$Normal = function (a) {
        return { $: 0, a: a };
    };
    var $elm$html$Html$Events$on_fn = function (event, decoder) {
        return _VirtualDom_on_fn(event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    }, $elm$html$Html$Events$on = F2($elm$html$Html$Events$on_fn);
    var $elm$html$Html$Events$onClick = function (msg) {
        return $elm$html$Html$Events$on_fn("click", $elm$json$Json$Decode$succeed(msg));
    };
    var $author$project$Main$Start = { $: 11 };
    var $author$project$Main$Stop = { $: 12 };
    var $author$project$Main$playButton = function (model) {
        return model.x ? $elm$html$Html$button_fn(_List_fromArray([
            $elm$html$Html$Events$onClick($author$project$Main$Stop)
        ]), _List_fromArray([
            $elm$html$Html$text("stop")
        ])) : $elm$html$Html$button_fn(_List_fromArray([
            $elm$html$Html$Events$onClick($author$project$Main$Start)
        ]), _List_fromArray([
            $elm$html$Html$text("start")
        ]));
    };
    var $author$project$Main$SetScale = function (a) {
        return { $: 10, a: a };
    };
    var $elm$html$Html$option = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "option"), $elm$html$Html$option_fn = $elm$html$Html$option.a2;
    var $elm$html$Html$select = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "select"), $elm$html$Html$select_fn = $elm$html$Html$select.a2;
    var $elm$html$Html$Attributes$boolProperty_fn = function (key, bool) {
        return _VirtualDom_property_fn(key, $elm$json$Json$Encode$bool(bool));
    }, $elm$html$Html$Attributes$boolProperty = F2($elm$html$Html$Attributes$boolProperty_fn);
    var $elm$html$Html$Attributes$selected_a0 = "selected", $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty($elm$html$Html$Attributes$selected_a0);
    var $author$project$Main$selectScale = function (currentSel) {
        var options = _List_fromArray(["major", "pentatonic", "chromatic"]);
        var mkOpt = function (opt) {
            return $elm$html$Html$option_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, opt),
                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$selected_a0, _Utils_eq(currentSel, opt))
            ]), _List_fromArray([
                $elm$html$Html$text(opt)
            ]));
        };
        return $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
            $elm$html$Html$text("Scale preset"),
            $elm$html$Html$select_fn(_List_fromArray([
                $elm$html$Html$Events$onInput($author$project$Main$SetScale)
            ]), $elm$core$List$map_fn(mkOpt, options))
        ]));
    };
    var $author$project$Main$ToggleControls = { $: 13 };
    var $elm$html$Html$span = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "span"), $elm$html$Html$span_fn = $elm$html$Html$span.a2;
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $author$project$Main$showHideControlsButton = function (showControls) {
        return $elm$html$Html$label_fn(_List_fromArray([
            _VirtualDom_style_fn("background-color", "white"),
            _VirtualDom_style_fn("float", "right")
        ]), _List_fromArray([
            $elm$html$Html$input_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "checkbox"),
                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$selected_a0, showControls),
                $elm$html$Html$Events$onClick($author$project$Main$ToggleControls)
            ]), _List_Nil),
            $elm$html$Html$span_fn(_List_fromArray([
                _VirtualDom_style_fn("font-size", "24px")
            ]), _List_fromArray([
                $elm$html$Html$text(showControls ? "control panel" : "control panel")
            ]))
        ]));
    };
    var $author$project$Main$showIf = function (show) {
        return show ? _List_Nil : _List_fromArray([
            _VirtualDom_style_fn("display", "none")
        ]);
    };
    var $elm$html$Html$Attributes$step = function (n) {
        return $elm$html$Html$Attributes$stringProperty_fn("step", n);
    };
    var $elm$html$Html$ul = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "ul"), $elm$html$Html$ul_fn = $elm$html$Html$ul.a2;
    var $author$project$Main$ChangedInput_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Main$ChangedInput = F2($author$project$Main$ChangedInput_fn);
    var $author$project$Main$SelectedOctave_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $author$project$Main$SelectedOctave = F2($author$project$Main$SelectedOctave_fn);
    var $author$project$Main$SelectedPitch_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $author$project$Main$SelectedPitch = F2($author$project$Main$SelectedPitch_fn);
    var $author$project$Main$TriggerRandomNote = function (a) {
        return { $: 5, a: a };
    };
    var $author$project$Main$selectOctave_fn = function (toMsg, currentOct) {
        var options = $elm$core$List$map_fn(function (o) {
            var os = $elm$core$String$fromInt(o);
            return $elm$html$Html$option_fn(_List_fromArray([
                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$selected_a0, _Utils_eq(o, currentOct)),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, os)
            ]), _List_fromArray([
                $elm$html$Html$text(os)
            ]));
        }, _List_fromArray([1, 2, 3, 4, 5]));
        return $elm$html$Html$select_fn(_List_fromArray([
            $elm$html$Html$Events$onInput(toMsg)
        ]), options);
    }, $author$project$Main$selectOctave = F2($author$project$Main$selectOctave_fn);
    var $author$project$Main$selectPitch_fn = function (onSelect, currentPitch) {
        var options = $elm$core$List$map_fn(function (p) {
            var ps = $author$project$Main$pAsString(p);
            return $elm$html$Html$option_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, ps),
                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$selected_a0, _Utils_eq(ps, $author$project$Main$pAsString(currentPitch)))
            ]), _List_fromArray([
                $elm$html$Html$text(ps)
            ]));
        }, $author$project$Main$allPitchClasses);
        return $elm$html$Html$select_fn(_List_fromArray([
            $elm$html$Html$Events$onInput(onSelect)
        ]), options);
    }, $author$project$Main$selectPitch = F2($author$project$Main$selectPitch_fn);
    var $author$project$Main$viewOptsAsColors = function (opts) {
        return $elm$html$Html$div_fn(_List_fromArray([
            _VirtualDom_style_fn("display", "inline-block")
        ]), $elm$core$Array$toList($elm$core$Array$map_fn(function (opt) {
            return $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "colorblock"),
                _VirtualDom_style_fn("background-color", $author$project$Background$colorOfInt_fn(16, opt))
            ]), _List_fromArray([
                $elm$html$Html$text("\u00A0")
            ]));
        }, opts)));
    };
    var $author$project$Main$viewEntry_fn = function (currentVoice, isCurrent, idx, _v0) {
        var g = _v0;
        var attrs = isCurrent ? _List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "highlight-voice-" + $elm$core$String$fromInt(currentVoice)),
            _VirtualDom_style_fn("background-color", $author$project$Background$colorOfInt_fn(16, idx))
        ]) : _List_fromArray([
            _VirtualDom_style_fn("background-color", $author$project$Background$colorOfInt_fn(16, idx))
        ]);
        var _v1 = function () {
            var _v2 = g.f;
            var o = _v2.a;
            var p = _v2.b;
            return _Utils_Tuple2(o, p);
        }();
        var octave = _v1.a;
        var pitch = _v1.b;
        return $elm$html$Html$div_fn(attrs, _List_fromArray([
            $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "slot-number")
            ]), _List_fromArray([
                $elm$html$Html$text($elm$core$String$fromInt(idx))
            ])),
            $author$project$Main$selectOctave_fn($author$project$Main$SelectedOctave(idx), octave),
            $author$project$Main$selectPitch_fn($author$project$Main$SelectedPitch(idx), pitch),
            $elm$html$Html$button_fn(_List_fromArray([
                $elm$html$Html$Events$onClick($author$project$Main$TriggerRandomNote(idx))
            ]), _List_fromArray([
                $elm$html$Html$text("RND!")
            ])),
            $elm$html$Html$input_fn(_List_fromArray([
                $elm$html$Html$Events$onInput($author$project$Main$ChangedInput(idx)),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, g.B)
            ]), _List_Nil),
            $author$project$Main$viewOptsAsColors(g.r)
        ]));
    }, $author$project$Main$viewEntry = F4($author$project$Main$viewEntry_fn);
    var $author$project$Main$view = function (model) {
        var entries = $elm$core$Array$toList($elm$core$Array$map_fn(function (item) {
            return $elm$html$Html$li_fn(_List_Nil, _List_fromArray([item]));
        }, $elm$core$Array$indexedMap_fn(F2(function (idx, g) {
            return _VirtualDom_lazy4_fn($author$project$Main$viewEntry, model.m, _Utils_eq($author$project$Main$getCurrentSlotForVoice_fn(model.m, model), idx), idx, g);
        }), model.a)));
        return {
            aB: _List_fromArray([
                $author$project$Main$showHideControlsButton(model.z),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$div_fn(_List_fromArray([
                    _VirtualDom_style_fn("position", "fixed"),
                    _VirtualDom_style_fn("top", "0px"),
                    _VirtualDom_style_fn("left", "0px"),
                    _VirtualDom_style_fn("z-index", "-2")
                ]), _List_fromArray([
                    $author$project$Background$backgroundSvg_fn(model.l, model.q.u, model.q.s, $author$project$Main$blockSize)
                ])),
                $elm$html$Html$div_fn(_List_fromArray([
                    _VirtualDom_style_fn("position", "fixed"),
                    _VirtualDom_style_fn("top", "0px"),
                    _VirtualDom_style_fn("left", "0px"),
                    _VirtualDom_style_fn("z-index", "-1")
                ]), _List_fromArray([
                    $author$project$Background$cursorBox_fn(model.m, $author$project$Main$getCurrentVoiceIndex(model) + 1, model.l, model.q.u, model.q.s, $author$project$Main$blockSize)
                ])),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$div_fn(_List_Cons($elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "controls"), $author$project$Main$showIf(model.z)), _List_fromArray([
                    $author$project$Main$column(_List_fromArray([
                        $elm$html$Html$h1_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Pitches and pattern:")
                        ])),
                        $elm$html$Html$ul_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, " ")
                        ]), entries)
                    ])),
                    $author$project$Main$column(_List_fromArray([
                        $elm$html$Html$h1_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Extra options:")
                        ])),
                        $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Start/stop:"),
                            $author$project$Main$playButton(model)
                        ])),
                        $author$project$Main$newline,
                        $author$project$Main$selectScale(model.H),
                        $author$project$Main$newline,
                        $author$project$Main$newline,
                        $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Randomize all notes based on current scale"),
                            $author$project$Main$newline,
                            $elm$html$Html$button_fn(_List_fromArray([
                                $elm$html$Html$Events$onClick($author$project$Main$RandomizeAll)
                            ]), _List_fromArray([
                                $elm$html$Html$text("randomize all notes")
                            ]))
                        ])),
                        $author$project$Main$newline,
                        $author$project$Main$newline,
                        $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Randomize the pattern of next slots"),
                            $author$project$Main$newline,
                            $elm$html$Html$button_fn(_List_fromArray([
                                $elm$html$Html$Events$onClick($author$project$Main$RandomizeOpts)
                            ]), _List_fromArray([
                                $elm$html$Html$text("randomize options")
                            ]))
                        ])),
                        $author$project$Main$newline,
                        $elm$html$Html$button_fn(_List_fromArray([
                            $elm$html$Html$Events$onClick($author$project$Main$CopyJSON)
                        ]), _List_fromArray([
                            $elm$html$Html$text("copy preset to clipboard")
                        ])),
                        $author$project$Main$newline,
                        $elm$html$Html$i_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("(reload the page to paste a preset)")
                        ])),
                        $author$project$Main$newline,
                        $author$project$Main$editOffset(model.E),
                        $author$project$Main$newline,
                        $author$project$Main$newline,
                        $elm$html$Html$label_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text("Set the number of voices:"),
                            $author$project$Main$newline,
                            $elm$html$Html$input_fn(_List_fromArray([
                                $elm$html$Html$Events$onInput($author$project$Main$ChangeNumberOfVoice),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "number"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$min_a0, "1"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$max_a0, "8"),
                                $elm$html$Html$Attributes$step("1"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, model.K)
                            ]), _List_Nil)
                        ])),
                        $author$project$Main$newline
                    ]))
                ]))
            ]),
            aP: "happy 2023! - gelukkig 2023!"
        };
    };
    var $author$project$Main$main = $elm$browser$Browser$document({ aI: $author$project$Main$init, aO: $author$project$Main$subscriptions, aQ: $author$project$Main$update, aR: $author$project$Main$view });
    _Platform_export({ "Main": { "init": $author$project$Main$main(_Json_andThen_fn(function (width) {
                return _Json_andThen_fn(function (seed) {
                    return _Json_andThen_fn(function (json) {
                        return _Json_andThen_fn(function (height) {
                            return $elm$json$Json$Decode$succeed({ s: height, U: json, Y: seed, u: width });
                        }, _Json_decodeField_fn("height", $elm$json$Json$Decode$int));
                    }, _Json_decodeField_fn("json", $elm$json$Json$Decode$string));
                }, _Json_decodeField_fn("seed", $elm$json$Json$Decode$int));
            }, _Json_decodeField_fn("width", $elm$json$Json$Decode$int)))(0) } });
}(this));
