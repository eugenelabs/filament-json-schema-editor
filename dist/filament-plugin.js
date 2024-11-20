(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/@json-editor/json-editor/dist/jsoneditor.js
  var require_jsoneditor = __commonJS({
    "node_modules/@json-editor/json-editor/dist/jsoneditor.js"(exports, module) {
      !function(t, e) {
        if (typeof exports == "object" && typeof module == "object")
          module.exports = e();
        else if (typeof define == "function" && define.amd)
          define([], e);
        else {
          var r = e();
          for (var n in r)
            (typeof exports == "object" ? exports : t)[n] = r[n];
        }
      }(self, () => (() => {
        "use strict";
        var t = { 9306: (t2, e2, r2) => {
          var n2 = r2(4901), i = r2(6823), o = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              return t3;
            throw new o(i(t3) + " is not a function");
          };
        }, 5548: (t2, e2, r2) => {
          var n2 = r2(3517), i = r2(6823), o = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              return t3;
            throw new o(i(t3) + " is not a constructor");
          };
        }, 3506: (t2, e2, r2) => {
          var n2 = r2(3925), i = String, o = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              return t3;
            throw new o("Can't set " + i(t3) + " as a prototype");
          };
        }, 6469: (t2, e2, r2) => {
          var n2 = r2(8227), i = r2(2360), o = r2(4913).f, a = n2("unscopables"), s = Array.prototype;
          s[a] === void 0 && o(s, a, { configurable: true, value: i(null) }), t2.exports = function(t3) {
            s[a][t3] = true;
          };
        }, 7829: (t2, e2, r2) => {
          var n2 = r2(8183).charAt;
          t2.exports = function(t3, e3, r3) {
            return e3 + (r3 ? n2(t3, e3).length : 1);
          };
        }, 679: (t2, e2, r2) => {
          var n2 = r2(1625), i = TypeError;
          t2.exports = function(t3, e3) {
            if (n2(e3, t3))
              return t3;
            throw new i("Incorrect invocation");
          };
        }, 8551: (t2, e2, r2) => {
          var n2 = r2(34), i = String, o = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              return t3;
            throw new o(i(t3) + " is not an object");
          };
        }, 235: (t2, e2, r2) => {
          var n2 = r2(9213).forEach, i = r2(4598)("forEach");
          t2.exports = i ? [].forEach : function(t3) {
            return n2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          };
        }, 7916: (t2, e2, r2) => {
          var n2 = r2(6080), i = r2(9565), o = r2(8981), a = r2(6319), s = r2(4209), l = r2(3517), c = r2(6198), u = r2(4659), h = r2(81), p = r2(851), d = Array;
          t2.exports = function(t3) {
            var e3 = o(t3), r3 = l(this), f = arguments.length, y = f > 1 ? arguments[1] : void 0, m = y !== void 0;
            m && (y = n2(y, f > 2 ? arguments[2] : void 0));
            var v, b, g, w, _, k, j = p(e3), O = 0;
            if (!j || this === d && s(j))
              for (v = c(e3), b = r3 ? new this(v) : d(v); v > O; O++)
                k = m ? y(e3[O], O) : e3[O], u(b, O, k);
            else
              for (b = r3 ? new this() : [], _ = (w = h(e3, j)).next; !(g = i(_, w)).done; O++)
                k = m ? a(w, y, [g.value, O], true) : g.value, u(b, O, k);
            return b.length = O, b;
          };
        }, 9617: (t2, e2, r2) => {
          var n2 = r2(5397), i = r2(5610), o = r2(6198), a = function(t3) {
            return function(e3, r3, a2) {
              var s = n2(e3), l = o(s);
              if (l === 0)
                return !t3 && -1;
              var c, u = i(a2, l);
              if (t3 && r3 != r3) {
                for (; l > u; )
                  if ((c = s[u++]) != c)
                    return true;
              } else
                for (; l > u; u++)
                  if ((t3 || u in s) && s[u] === r3)
                    return t3 || u || 0;
              return !t3 && -1;
            };
          };
          t2.exports = { includes: a(true), indexOf: a(false) };
        }, 9213: (t2, e2, r2) => {
          var n2 = r2(6080), i = r2(9504), o = r2(7055), a = r2(8981), s = r2(6198), l = r2(1469), c = i([].push), u = function(t3) {
            var e3 = t3 === 1, r3 = t3 === 2, i2 = t3 === 3, u2 = t3 === 4, h = t3 === 6, p = t3 === 7, d = t3 === 5 || h;
            return function(f, y, m, v) {
              for (var b, g, w = a(f), _ = o(w), k = s(_), j = n2(y, m), O = 0, x = v || l, C = e3 ? x(f, k) : r3 || p ? x(f, 0) : void 0; k > O; O++)
                if ((d || O in _) && (g = j(b = _[O], O, w), t3))
                  if (e3)
                    C[O] = g;
                  else if (g)
                    switch (t3) {
                      case 3:
                        return true;
                      case 5:
                        return b;
                      case 6:
                        return O;
                      case 2:
                        c(C, b);
                    }
                  else
                    switch (t3) {
                      case 4:
                        return false;
                      case 7:
                        c(C, b);
                    }
              return h ? -1 : i2 || u2 ? u2 : C;
            };
          };
          t2.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
        }, 597: (t2, e2, r2) => {
          var n2 = r2(9039), i = r2(8227), o = r2(7388), a = i("species");
          t2.exports = function(t3) {
            return o >= 51 || !n2(function() {
              var e3 = [];
              return (e3.constructor = {})[a] = function() {
                return { foo: 1 };
              }, e3[t3](Boolean).foo !== 1;
            });
          };
        }, 4598: (t2, e2, r2) => {
          var n2 = r2(9039);
          t2.exports = function(t3, e3) {
            var r3 = [][t3];
            return !!r3 && n2(function() {
              r3.call(null, e3 || function() {
                return 1;
              }, 1);
            });
          };
        }, 926: (t2, e2, r2) => {
          var n2 = r2(9306), i = r2(8981), o = r2(7055), a = r2(6198), s = TypeError, l = "Reduce of empty array with no initial value", c = function(t3) {
            return function(e3, r3, c2, u) {
              var h = i(e3), p = o(h), d = a(h);
              if (n2(r3), d === 0 && c2 < 2)
                throw new s(l);
              var f = t3 ? d - 1 : 0, y = t3 ? -1 : 1;
              if (c2 < 2)
                for (; ; ) {
                  if (f in p) {
                    u = p[f], f += y;
                    break;
                  }
                  if (f += y, t3 ? f < 0 : d <= f)
                    throw new s(l);
                }
              for (; t3 ? f >= 0 : d > f; f += y)
                f in p && (u = r3(u, p[f], f, h));
              return u;
            };
          };
          t2.exports = { left: c(false), right: c(true) };
        }, 4527: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(4376), o = TypeError, a = Object.getOwnPropertyDescriptor, s = n2 && !function() {
            if (this !== void 0)
              return true;
            try {
              Object.defineProperty([], "length", { writable: false }).length = 1;
            } catch (t3) {
              return t3 instanceof TypeError;
            }
          }();
          t2.exports = s ? function(t3, e3) {
            if (i(t3) && !a(t3, "length").writable)
              throw new o("Cannot set read only .length");
            return t3.length = e3;
          } : function(t3, e3) {
            return t3.length = e3;
          };
        }, 7680: (t2, e2, r2) => {
          var n2 = r2(9504);
          t2.exports = n2([].slice);
        }, 4488: (t2, e2, r2) => {
          var n2 = r2(7680), i = Math.floor, o = function(t3, e3) {
            var r3 = t3.length;
            if (r3 < 8)
              for (var a, s, l = 1; l < r3; ) {
                for (s = l, a = t3[l]; s && e3(t3[s - 1], a) > 0; )
                  t3[s] = t3[--s];
                s !== l++ && (t3[s] = a);
              }
            else
              for (var c = i(r3 / 2), u = o(n2(t3, 0, c), e3), h = o(n2(t3, c), e3), p = u.length, d = h.length, f = 0, y = 0; f < p || y < d; )
                t3[f + y] = f < p && y < d ? e3(u[f], h[y]) <= 0 ? u[f++] : h[y++] : f < p ? u[f++] : h[y++];
            return t3;
          };
          t2.exports = o;
        }, 7433: (t2, e2, r2) => {
          var n2 = r2(4376), i = r2(3517), o = r2(34), a = r2(8227)("species"), s = Array;
          t2.exports = function(t3) {
            var e3;
            return n2(t3) && (e3 = t3.constructor, (i(e3) && (e3 === s || n2(e3.prototype)) || o(e3) && (e3 = e3[a]) === null) && (e3 = void 0)), e3 === void 0 ? s : e3;
          };
        }, 1469: (t2, e2, r2) => {
          var n2 = r2(7433);
          t2.exports = function(t3, e3) {
            return new (n2(t3))(e3 === 0 ? 0 : e3);
          };
        }, 6319: (t2, e2, r2) => {
          var n2 = r2(8551), i = r2(9539);
          t2.exports = function(t3, e3, r3, o) {
            try {
              return o ? e3(n2(r3)[0], r3[1]) : e3(r3);
            } catch (e4) {
              i(t3, "throw", e4);
            }
          };
        }, 4428: (t2, e2, r2) => {
          var n2 = r2(8227)("iterator"), i = false;
          try {
            var o = 0, a = { next: function() {
              return { done: !!o++ };
            }, return: function() {
              i = true;
            } };
            a[n2] = function() {
              return this;
            }, Array.from(a, function() {
              throw 2;
            });
          } catch (t3) {
          }
          t2.exports = function(t3, e3) {
            try {
              if (!e3 && !i)
                return false;
            } catch (t4) {
              return false;
            }
            var r3 = false;
            try {
              var o2 = {};
              o2[n2] = function() {
                return { next: function() {
                  return { done: r3 = true };
                } };
              }, t3(o2);
            } catch (t4) {
            }
            return r3;
          };
        }, 4576: (t2, e2, r2) => {
          var n2 = r2(9504), i = n2({}.toString), o = n2("".slice);
          t2.exports = function(t3) {
            return o(i(t3), 8, -1);
          };
        }, 6955: (t2, e2, r2) => {
          var n2 = r2(2140), i = r2(4901), o = r2(4576), a = r2(8227)("toStringTag"), s = Object, l = o(function() {
            return arguments;
          }()) === "Arguments";
          t2.exports = n2 ? o : function(t3) {
            var e3, r3, n3;
            return t3 === void 0 ? "Undefined" : t3 === null ? "Null" : typeof (r3 = function(t4, e4) {
              try {
                return t4[e4];
              } catch (t5) {
              }
            }(e3 = s(t3), a)) == "string" ? r3 : l ? o(e3) : (n3 = o(e3)) === "Object" && i(e3.callee) ? "Arguments" : n3;
          };
        }, 7740: (t2, e2, r2) => {
          var n2 = r2(9297), i = r2(5031), o = r2(7347), a = r2(4913);
          t2.exports = function(t3, e3, r3) {
            for (var s = i(e3), l = a.f, c = o.f, u = 0; u < s.length; u++) {
              var h = s[u];
              n2(t3, h) || r3 && n2(r3, h) || l(t3, h, c(e3, h));
            }
          };
        }, 1436: (t2, e2, r2) => {
          var n2 = r2(8227)("match");
          t2.exports = function(t3) {
            var e3 = /./;
            try {
              "/./"[t3](e3);
            } catch (r3) {
              try {
                return e3[n2] = false, "/./"[t3](e3);
              } catch (t4) {
              }
            }
            return false;
          };
        }, 2211: (t2, e2, r2) => {
          var n2 = r2(9039);
          t2.exports = !n2(function() {
            function t3() {
            }
            return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
          });
        }, 2529: (t2) => {
          t2.exports = function(t3, e2) {
            return { value: t3, done: e2 };
          };
        }, 6699: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(4913), o = r2(6980);
          t2.exports = n2 ? function(t3, e3, r3) {
            return i.f(t3, e3, o(1, r3));
          } : function(t3, e3, r3) {
            return t3[e3] = r3, t3;
          };
        }, 6980: (t2) => {
          t2.exports = function(t3, e2) {
            return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e2 };
          };
        }, 4659: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(4913), o = r2(6980);
          t2.exports = function(t3, e3, r3) {
            n2 ? i.f(t3, e3, o(0, r3)) : t3[e3] = r3;
          };
        }, 380: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9039), o = r2(533).start, a = RangeError, s = isFinite, l = Math.abs, c = Date.prototype, u = c.toISOString, h = n2(c.getTime), p = n2(c.getUTCDate), d = n2(c.getUTCFullYear), f = n2(c.getUTCHours), y = n2(c.getUTCMilliseconds), m = n2(c.getUTCMinutes), v = n2(c.getUTCMonth), b = n2(c.getUTCSeconds);
          t2.exports = i(function() {
            return u.call(new Date(-50000000000001)) !== "0385-07-25T07:06:39.999Z";
          }) || !i(function() {
            u.call(new Date(NaN));
          }) ? function() {
            if (!s(h(this)))
              throw new a("Invalid time value");
            var t3 = this, e3 = d(t3), r3 = y(t3), n3 = e3 < 0 ? "-" : e3 > 9999 ? "+" : "";
            return n3 + o(l(e3), n3 ? 6 : 4, 0) + "-" + o(v(t3) + 1, 2, 0) + "-" + o(p(t3), 2, 0) + "T" + o(f(t3), 2, 0) + ":" + o(m(t3), 2, 0) + ":" + o(b(t3), 2, 0) + "." + o(r3, 3, 0) + "Z";
          } : u;
        }, 3640: (t2, e2, r2) => {
          var n2 = r2(8551), i = r2(4270), o = TypeError;
          t2.exports = function(t3) {
            if (n2(this), t3 === "string" || t3 === "default")
              t3 = "string";
            else if (t3 !== "number")
              throw new o("Incorrect hint");
            return i(this, t3);
          };
        }, 2106: (t2, e2, r2) => {
          var n2 = r2(283), i = r2(4913);
          t2.exports = function(t3, e3, r3) {
            return r3.get && n2(r3.get, e3, { getter: true }), r3.set && n2(r3.set, e3, { setter: true }), i.f(t3, e3, r3);
          };
        }, 6840: (t2, e2, r2) => {
          var n2 = r2(4901), i = r2(4913), o = r2(283), a = r2(9433);
          t2.exports = function(t3, e3, r3, s) {
            s || (s = {});
            var l = s.enumerable, c = s.name !== void 0 ? s.name : e3;
            if (n2(r3) && o(r3, c, s), s.global)
              l ? t3[e3] = r3 : a(e3, r3);
            else {
              try {
                s.unsafe ? t3[e3] && (l = true) : delete t3[e3];
              } catch (t4) {
              }
              l ? t3[e3] = r3 : i.f(t3, e3, { value: r3, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
            }
            return t3;
          };
        }, 9433: (t2, e2, r2) => {
          var n2 = r2(4475), i = Object.defineProperty;
          t2.exports = function(t3, e3) {
            try {
              i(n2, t3, { value: e3, configurable: true, writable: true });
            } catch (r3) {
              n2[t3] = e3;
            }
            return e3;
          };
        }, 4606: (t2, e2, r2) => {
          var n2 = r2(6823), i = TypeError;
          t2.exports = function(t3, e3) {
            if (!delete t3[e3])
              throw new i("Cannot delete property " + n2(e3) + " of " + n2(t3));
          };
        }, 3724: (t2, e2, r2) => {
          var n2 = r2(9039);
          t2.exports = !n2(function() {
            return Object.defineProperty({}, 1, { get: function() {
              return 7;
            } })[1] !== 7;
          });
        }, 4055: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(34), o = n2.document, a = i(o) && i(o.createElement);
          t2.exports = function(t3) {
            return a ? o.createElement(t3) : {};
          };
        }, 6837: (t2) => {
          var e2 = TypeError;
          t2.exports = function(t3) {
            if (t3 > 9007199254740991)
              throw e2("Maximum allowed index exceeded");
            return t3;
          };
        }, 7400: (t2) => {
          t2.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        }, 9296: (t2, e2, r2) => {
          var n2 = r2(4055)("span").classList, i = n2 && n2.constructor && n2.constructor.prototype;
          t2.exports = i === Object.prototype ? void 0 : i;
        }, 8834: (t2, e2, r2) => {
          var n2 = r2(9392).match(/firefox\/(\d+)/i);
          t2.exports = !!n2 && +n2[1];
        }, 7290: (t2, e2, r2) => {
          var n2 = r2(516), i = r2(9088);
          t2.exports = !n2 && !i && typeof window == "object" && typeof document == "object";
        }, 6763: (t2) => {
          t2.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";
        }, 516: (t2) => {
          t2.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
        }, 3202: (t2, e2, r2) => {
          var n2 = r2(9392);
          t2.exports = /MSIE|Trident/.test(n2);
        }, 28: (t2, e2, r2) => {
          var n2 = r2(9392);
          t2.exports = /ipad|iphone|ipod/i.test(n2) && typeof Pebble != "undefined";
        }, 8119: (t2, e2, r2) => {
          var n2 = r2(9392);
          t2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n2);
        }, 9088: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(4576);
          t2.exports = i(n2.process) === "process";
        }, 6765: (t2, e2, r2) => {
          var n2 = r2(9392);
          t2.exports = /web0s(?!.*chrome)/i.test(n2);
        }, 9392: (t2) => {
          t2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
        }, 7388: (t2, e2, r2) => {
          var n2, i, o = r2(4475), a = r2(9392), s = o.process, l = o.Deno, c = s && s.versions || l && l.version, u = c && c.v8;
          u && (i = (n2 = u.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1])), !i && a && (!(n2 = a.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a.match(/Chrome\/(\d+)/)) && (i = +n2[1]), t2.exports = i;
        }, 9160: (t2, e2, r2) => {
          var n2 = r2(9392).match(/AppleWebKit\/(\d+)\./);
          t2.exports = !!n2 && +n2[1];
        }, 8727: (t2) => {
          t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        }, 6518: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(7347).f, o = r2(6699), a = r2(6840), s = r2(9433), l = r2(7740), c = r2(2796);
          t2.exports = function(t3, e3) {
            var r3, u, h, p, d, f = t3.target, y = t3.global, m = t3.stat;
            if (r3 = y ? n2 : m ? n2[f] || s(f, {}) : n2[f] && n2[f].prototype)
              for (u in e3) {
                if (p = e3[u], h = t3.dontCallGetSet ? (d = i(r3, u)) && d.value : r3[u], !c(y ? u : f + (m ? "." : "#") + u, t3.forced) && h !== void 0) {
                  if (typeof p == typeof h)
                    continue;
                  l(p, h);
                }
                (t3.sham || h && h.sham) && o(p, "sham", true), a(r3, u, p, t3);
              }
          };
        }, 9039: (t2) => {
          t2.exports = function(t3) {
            try {
              return !!t3();
            } catch (t4) {
              return true;
            }
          };
        }, 9228: (t2, e2, r2) => {
          r2(7495);
          var n2 = r2(9565), i = r2(6840), o = r2(7323), a = r2(9039), s = r2(8227), l = r2(6699), c = s("species"), u = RegExp.prototype;
          t2.exports = function(t3, e3, r3, h) {
            var p = s(t3), d = !a(function() {
              var e4 = {};
              return e4[p] = function() {
                return 7;
              }, ""[t3](e4) !== 7;
            }), f = d && !a(function() {
              var e4 = false, r4 = /a/;
              return t3 === "split" && ((r4 = {}).constructor = {}, r4.constructor[c] = function() {
                return r4;
              }, r4.flags = "", r4[p] = /./[p]), r4.exec = function() {
                return e4 = true, null;
              }, r4[p](""), !e4;
            });
            if (!d || !f || r3) {
              var y = /./[p], m = e3(p, ""[t3], function(t4, e4, r4, i2, a2) {
                var s2 = e4.exec;
                return s2 === o || s2 === u.exec ? d && !a2 ? { done: true, value: n2(y, e4, r4, i2) } : { done: true, value: n2(t4, r4, e4, i2) } : { done: false };
              });
              i(String.prototype, t3, m[0]), i(u, p, m[1]);
            }
            h && l(u[p], "sham", true);
          };
        }, 8745: (t2, e2, r2) => {
          var n2 = r2(616), i = Function.prototype, o = i.apply, a = i.call;
          t2.exports = typeof Reflect == "object" && Reflect.apply || (n2 ? a.bind(o) : function() {
            return a.apply(o, arguments);
          });
        }, 6080: (t2, e2, r2) => {
          var n2 = r2(7476), i = r2(9306), o = r2(616), a = n2(n2.bind);
          t2.exports = function(t3, e3) {
            return i(t3), e3 === void 0 ? t3 : o ? a(t3, e3) : function() {
              return t3.apply(e3, arguments);
            };
          };
        }, 616: (t2, e2, r2) => {
          var n2 = r2(9039);
          t2.exports = !n2(function() {
            var t3 = function() {
            }.bind();
            return typeof t3 != "function" || t3.hasOwnProperty("prototype");
          });
        }, 566: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9306), o = r2(34), a = r2(9297), s = r2(7680), l = r2(616), c = Function, u = n2([].concat), h = n2([].join), p = {};
          t2.exports = l ? c.bind : function(t3) {
            var e3 = i(this), r3 = e3.prototype, n3 = s(arguments, 1), l2 = function() {
              var r4 = u(n3, s(arguments));
              return this instanceof l2 ? function(t4, e4, r5) {
                if (!a(p, e4)) {
                  for (var n4 = [], i2 = 0; i2 < e4; i2++)
                    n4[i2] = "a[" + i2 + "]";
                  p[e4] = c("C,a", "return new C(" + h(n4, ",") + ")");
                }
                return p[e4](t4, r5);
              }(e3, r4.length, r4) : e3.apply(t3, r4);
            };
            return o(r3) && (l2.prototype = r3), l2;
          };
        }, 9565: (t2, e2, r2) => {
          var n2 = r2(616), i = Function.prototype.call;
          t2.exports = n2 ? i.bind(i) : function() {
            return i.apply(i, arguments);
          };
        }, 350: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9297), o = Function.prototype, a = n2 && Object.getOwnPropertyDescriptor, s = i(o, "name"), l = s && function() {
          }.name === "something", c = s && (!n2 || n2 && a(o, "name").configurable);
          t2.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
        }, 6706: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9306);
          t2.exports = function(t3, e3, r3) {
            try {
              return n2(i(Object.getOwnPropertyDescriptor(t3, e3)[r3]));
            } catch (t4) {
            }
          };
        }, 7476: (t2, e2, r2) => {
          var n2 = r2(4576), i = r2(9504);
          t2.exports = function(t3) {
            if (n2(t3) === "Function")
              return i(t3);
          };
        }, 9504: (t2, e2, r2) => {
          var n2 = r2(616), i = Function.prototype, o = i.call, a = n2 && i.bind.bind(o, o);
          t2.exports = n2 ? a : function(t3) {
            return function() {
              return o.apply(t3, arguments);
            };
          };
        }, 7751: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(4901);
          t2.exports = function(t3, e3) {
            return arguments.length < 2 ? (r3 = n2[t3], i(r3) ? r3 : void 0) : n2[t3] && n2[t3][e3];
            var r3;
          };
        }, 851: (t2, e2, r2) => {
          var n2 = r2(6955), i = r2(5966), o = r2(4117), a = r2(6269), s = r2(8227)("iterator");
          t2.exports = function(t3) {
            if (!o(t3))
              return i(t3, s) || i(t3, "@@iterator") || a[n2(t3)];
          };
        }, 81: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(9306), o = r2(8551), a = r2(6823), s = r2(851), l = TypeError;
          t2.exports = function(t3, e3) {
            var r3 = arguments.length < 2 ? s(t3) : e3;
            if (i(r3))
              return o(n2(r3, t3));
            throw new l(a(t3) + " is not iterable");
          };
        }, 6933: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(4376), o = r2(4901), a = r2(4576), s = r2(655), l = n2([].push);
          t2.exports = function(t3) {
            if (o(t3))
              return t3;
            if (i(t3)) {
              for (var e3 = t3.length, r3 = [], n3 = 0; n3 < e3; n3++) {
                var c = t3[n3];
                typeof c == "string" ? l(r3, c) : typeof c != "number" && a(c) !== "Number" && a(c) !== "String" || l(r3, s(c));
              }
              var u = r3.length, h = true;
              return function(t4, e4) {
                if (h)
                  return h = false, e4;
                if (i(this))
                  return e4;
                for (var n4 = 0; n4 < u; n4++)
                  if (r3[n4] === t4)
                    return e4;
              };
            }
          };
        }, 5966: (t2, e2, r2) => {
          var n2 = r2(9306), i = r2(4117);
          t2.exports = function(t3, e3) {
            var r3 = t3[e3];
            return i(r3) ? void 0 : n2(r3);
          };
        }, 2478: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(8981), o = Math.floor, a = n2("".charAt), s = n2("".replace), l = n2("".slice), c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, u = /\$([$&'`]|\d{1,2})/g;
          t2.exports = function(t3, e3, r3, n3, h, p) {
            var d = r3 + t3.length, f = n3.length, y = u;
            return h !== void 0 && (h = i(h), y = c), s(p, y, function(i2, s2) {
              var c2;
              switch (a(s2, 0)) {
                case "$":
                  return "$";
                case "&":
                  return t3;
                case "`":
                  return l(e3, 0, r3);
                case "'":
                  return l(e3, d);
                case "<":
                  c2 = h[l(s2, 1, -1)];
                  break;
                default:
                  var u2 = +s2;
                  if (u2 === 0)
                    return i2;
                  if (u2 > f) {
                    var p2 = o(u2 / 10);
                    return p2 === 0 ? i2 : p2 <= f ? n3[p2 - 1] === void 0 ? a(s2, 1) : n3[p2 - 1] + a(s2, 1) : i2;
                  }
                  c2 = n3[u2 - 1];
              }
              return c2 === void 0 ? "" : c2;
            });
          };
        }, 4475: function(t2, e2, r2) {
          var n2 = function(t3) {
            return t3 && t3.Math === Math && t3;
          };
          t2.exports = n2(typeof globalThis == "object" && globalThis) || n2(typeof window == "object" && window) || n2(typeof self == "object" && self) || n2(typeof r2.g == "object" && r2.g) || n2(typeof this == "object" && this) || function() {
            return this;
          }() || Function("return this")();
        }, 9297: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(8981), o = n2({}.hasOwnProperty);
          t2.exports = Object.hasOwn || function(t3, e3) {
            return o(i(t3), e3);
          };
        }, 421: (t2) => {
          t2.exports = {};
        }, 3138: (t2) => {
          t2.exports = function(t3, e2) {
            try {
              arguments.length === 1 ? console.error(t3) : console.error(t3, e2);
            } catch (t4) {
            }
          };
        }, 397: (t2, e2, r2) => {
          var n2 = r2(7751);
          t2.exports = n2("document", "documentElement");
        }, 5917: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9039), o = r2(4055);
          t2.exports = !n2 && !i(function() {
            return Object.defineProperty(o("div"), "a", { get: function() {
              return 7;
            } }).a !== 7;
          });
        }, 7055: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9039), o = r2(4576), a = Object, s = n2("".split);
          t2.exports = i(function() {
            return !a("z").propertyIsEnumerable(0);
          }) ? function(t3) {
            return o(t3) === "String" ? s(t3, "") : a(t3);
          } : a;
        }, 3167: (t2, e2, r2) => {
          var n2 = r2(4901), i = r2(34), o = r2(2967);
          t2.exports = function(t3, e3, r3) {
            var a, s;
            return o && n2(a = e3.constructor) && a !== r3 && i(s = a.prototype) && s !== r3.prototype && o(t3, s), t3;
          };
        }, 3706: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(4901), o = r2(7629), a = n2(Function.toString);
          i(o.inspectSource) || (o.inspectSource = function(t3) {
            return a(t3);
          }), t2.exports = o.inspectSource;
        }, 1181: (t2, e2, r2) => {
          var n2, i, o, a = r2(8622), s = r2(4475), l = r2(34), c = r2(6699), u = r2(9297), h = r2(7629), p = r2(6119), d = r2(421), f = "Object already initialized", y = s.TypeError, m = s.WeakMap;
          if (a || h.state) {
            var v = h.state || (h.state = new m());
            v.get = v.get, v.has = v.has, v.set = v.set, n2 = function(t3, e3) {
              if (v.has(t3))
                throw new y(f);
              return e3.facade = t3, v.set(t3, e3), e3;
            }, i = function(t3) {
              return v.get(t3) || {};
            }, o = function(t3) {
              return v.has(t3);
            };
          } else {
            var b = p("state");
            d[b] = true, n2 = function(t3, e3) {
              if (u(t3, b))
                throw new y(f);
              return e3.facade = t3, c(t3, b, e3), e3;
            }, i = function(t3) {
              return u(t3, b) ? t3[b] : {};
            }, o = function(t3) {
              return u(t3, b);
            };
          }
          t2.exports = { set: n2, get: i, has: o, enforce: function(t3) {
            return o(t3) ? i(t3) : n2(t3, {});
          }, getterFor: function(t3) {
            return function(e3) {
              var r3;
              if (!l(e3) || (r3 = i(e3)).type !== t3)
                throw new y("Incompatible receiver, " + t3 + " required");
              return r3;
            };
          } };
        }, 4209: (t2, e2, r2) => {
          var n2 = r2(8227), i = r2(6269), o = n2("iterator"), a = Array.prototype;
          t2.exports = function(t3) {
            return t3 !== void 0 && (i.Array === t3 || a[o] === t3);
          };
        }, 4376: (t2, e2, r2) => {
          var n2 = r2(4576);
          t2.exports = Array.isArray || function(t3) {
            return n2(t3) === "Array";
          };
        }, 4901: (t2) => {
          var e2 = typeof document == "object" && document.all;
          t2.exports = e2 === void 0 && e2 !== void 0 ? function(t3) {
            return typeof t3 == "function" || t3 === e2;
          } : function(t3) {
            return typeof t3 == "function";
          };
        }, 3517: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9039), o = r2(4901), a = r2(6955), s = r2(7751), l = r2(3706), c = function() {
          }, u = s("Reflect", "construct"), h = /^\s*(?:class|function)\b/, p = n2(h.exec), d = !h.test(c), f = function(t3) {
            if (!o(t3))
              return false;
            try {
              return u(c, [], t3), true;
            } catch (t4) {
              return false;
            }
          }, y = function(t3) {
            if (!o(t3))
              return false;
            switch (a(t3)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
              return d || !!p(h, l(t3));
            } catch (t4) {
              return true;
            }
          };
          y.sham = true, t2.exports = !u || i(function() {
            var t3;
            return f(f.call) || !f(Object) || !f(function() {
              t3 = true;
            }) || t3;
          }) ? y : f;
        }, 6575: (t2, e2, r2) => {
          var n2 = r2(9297);
          t2.exports = function(t3) {
            return t3 !== void 0 && (n2(t3, "value") || n2(t3, "writable"));
          };
        }, 2796: (t2, e2, r2) => {
          var n2 = r2(9039), i = r2(4901), o = /#|\.prototype\./, a = function(t3, e3) {
            var r3 = l[s(t3)];
            return r3 === u || r3 !== c && (i(e3) ? n2(e3) : !!e3);
          }, s = a.normalize = function(t3) {
            return String(t3).replace(o, ".").toLowerCase();
          }, l = a.data = {}, c = a.NATIVE = "N", u = a.POLYFILL = "P";
          t2.exports = a;
        }, 4117: (t2) => {
          t2.exports = function(t3) {
            return t3 == null;
          };
        }, 34: (t2, e2, r2) => {
          var n2 = r2(4901);
          t2.exports = function(t3) {
            return typeof t3 == "object" ? t3 !== null : n2(t3);
          };
        }, 3925: (t2, e2, r2) => {
          var n2 = r2(34);
          t2.exports = function(t3) {
            return n2(t3) || t3 === null;
          };
        }, 6395: (t2) => {
          t2.exports = false;
        }, 788: (t2, e2, r2) => {
          var n2 = r2(34), i = r2(4576), o = r2(8227)("match");
          t2.exports = function(t3) {
            var e3;
            return n2(t3) && ((e3 = t3[o]) !== void 0 ? !!e3 : i(t3) === "RegExp");
          };
        }, 757: (t2, e2, r2) => {
          var n2 = r2(7751), i = r2(4901), o = r2(1625), a = r2(7040), s = Object;
          t2.exports = a ? function(t3) {
            return typeof t3 == "symbol";
          } : function(t3) {
            var e3 = n2("Symbol");
            return i(e3) && o(e3.prototype, s(t3));
          };
        }, 2652: (t2, e2, r2) => {
          var n2 = r2(6080), i = r2(9565), o = r2(8551), a = r2(6823), s = r2(4209), l = r2(6198), c = r2(1625), u = r2(81), h = r2(851), p = r2(9539), d = TypeError, f = function(t3, e3) {
            this.stopped = t3, this.result = e3;
          }, y = f.prototype;
          t2.exports = function(t3, e3, r3) {
            var m, v, b, g, w, _, k, j = r3 && r3.that, O = !(!r3 || !r3.AS_ENTRIES), x = !(!r3 || !r3.IS_RECORD), C = !(!r3 || !r3.IS_ITERATOR), E = !(!r3 || !r3.INTERRUPTED), S = n2(e3, j), P = function(t4) {
              return m && p(m, "normal", t4), new f(true, t4);
            }, L = function(t4) {
              return O ? (o(t4), E ? S(t4[0], t4[1], P) : S(t4[0], t4[1])) : E ? S(t4, P) : S(t4);
            };
            if (x)
              m = t3.iterator;
            else if (C)
              m = t3;
            else {
              if (!(v = h(t3)))
                throw new d(a(t3) + " is not iterable");
              if (s(v)) {
                for (b = 0, g = l(t3); g > b; b++)
                  if ((w = L(t3[b])) && c(y, w))
                    return w;
                return new f(false);
              }
              m = u(t3, v);
            }
            for (_ = x ? t3.next : m.next; !(k = i(_, m)).done; ) {
              try {
                w = L(k.value);
              } catch (t4) {
                p(m, "throw", t4);
              }
              if (typeof w == "object" && w && c(y, w))
                return w;
            }
            return new f(false);
          };
        }, 9539: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(8551), o = r2(5966);
          t2.exports = function(t3, e3, r3) {
            var a, s;
            i(t3);
            try {
              if (!(a = o(t3, "return"))) {
                if (e3 === "throw")
                  throw r3;
                return r3;
              }
              a = n2(a, t3);
            } catch (t4) {
              s = true, a = t4;
            }
            if (e3 === "throw")
              throw r3;
            if (s)
              throw a;
            return i(a), r3;
          };
        }, 3994: (t2, e2, r2) => {
          var n2 = r2(7657).IteratorPrototype, i = r2(2360), o = r2(6980), a = r2(687), s = r2(6269), l = function() {
            return this;
          };
          t2.exports = function(t3, e3, r3, c) {
            var u = e3 + " Iterator";
            return t3.prototype = i(n2, { next: o(+!c, r3) }), a(t3, u, false, true), s[u] = l, t3;
          };
        }, 1088: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9565), o = r2(6395), a = r2(350), s = r2(4901), l = r2(3994), c = r2(2787), u = r2(2967), h = r2(687), p = r2(6699), d = r2(6840), f = r2(8227), y = r2(6269), m = r2(7657), v = a.PROPER, b = a.CONFIGURABLE, g = m.IteratorPrototype, w = m.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), k = "keys", j = "values", O = "entries", x = function() {
            return this;
          };
          t2.exports = function(t3, e3, r3, a2, f2, m2, C) {
            l(r3, e3, a2);
            var E, S, P, L = function(t4) {
              if (t4 === f2 && B)
                return B;
              if (!w && t4 && t4 in R)
                return R[t4];
              switch (t4) {
                case k:
                case j:
                case O:
                  return function() {
                    return new r3(this, t4);
                  };
              }
              return function() {
                return new r3(this);
              };
            }, T = e3 + " Iterator", A = false, R = t3.prototype, I = R[_] || R["@@iterator"] || f2 && R[f2], B = !w && I || L(f2), N = e3 === "Array" && R.entries || I;
            if (N && (E = c(N.call(new t3()))) !== Object.prototype && E.next && (o || c(E) === g || (u ? u(E, g) : s(E[_]) || d(E, _, x)), h(E, T, true, true), o && (y[T] = x)), v && f2 === j && I && I.name !== j && (!o && b ? p(R, "name", j) : (A = true, B = function() {
              return i(I, this);
            })), f2)
              if (S = { values: L(j), keys: m2 ? B : L(k), entries: L(O) }, C)
                for (P in S)
                  (w || A || !(P in R)) && d(R, P, S[P]);
              else
                n2({ target: e3, proto: true, forced: w || A }, S);
            return o && !C || R[_] === B || d(R, _, B, { name: f2 }), y[e3] = B, S;
          };
        }, 7657: (t2, e2, r2) => {
          var n2, i, o, a = r2(9039), s = r2(4901), l = r2(34), c = r2(2360), u = r2(2787), h = r2(6840), p = r2(8227), d = r2(6395), f = p("iterator"), y = false;
          [].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (n2 = i) : y = true), !l(n2) || a(function() {
            var t3 = {};
            return n2[f].call(t3) !== t3;
          }) ? n2 = {} : d && (n2 = c(n2)), s(n2[f]) || h(n2, f, function() {
            return this;
          }), t2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: y };
        }, 6269: (t2) => {
          t2.exports = {};
        }, 6198: (t2, e2, r2) => {
          var n2 = r2(8014);
          t2.exports = function(t3) {
            return n2(t3.length);
          };
        }, 283: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9039), o = r2(4901), a = r2(9297), s = r2(3724), l = r2(350).CONFIGURABLE, c = r2(3706), u = r2(1181), h = u.enforce, p = u.get, d = String, f = Object.defineProperty, y = n2("".slice), m = n2("".replace), v = n2([].join), b = s && !i(function() {
            return f(function() {
            }, "length", { value: 8 }).length !== 8;
          }), g = String(String).split("String"), w = t2.exports = function(t3, e3, r3) {
            y(d(e3), 0, 7) === "Symbol(" && (e3 = "[" + m(d(e3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r3 && r3.getter && (e3 = "get " + e3), r3 && r3.setter && (e3 = "set " + e3), (!a(t3, "name") || l && t3.name !== e3) && (s ? f(t3, "name", { value: e3, configurable: true }) : t3.name = e3), b && r3 && a(r3, "arity") && t3.length !== r3.arity && f(t3, "length", { value: r3.arity });
            try {
              r3 && a(r3, "constructor") && r3.constructor ? s && f(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
            } catch (t4) {
            }
            var n3 = h(t3);
            return a(n3, "source") || (n3.source = v(g, typeof e3 == "string" ? e3 : "")), t3;
          };
          Function.prototype.toString = w(function() {
            return o(this) && p(this).source || c(this);
          }, "toString");
        }, 741: (t2) => {
          var e2 = Math.ceil, r2 = Math.floor;
          t2.exports = Math.trunc || function(t3) {
            var n2 = +t3;
            return (n2 > 0 ? r2 : e2)(n2);
          };
        }, 1955: (t2, e2, r2) => {
          var n2, i, o, a, s, l = r2(4475), c = r2(3389), u = r2(6080), h = r2(9225).set, p = r2(8265), d = r2(8119), f = r2(28), y = r2(6765), m = r2(9088), v = l.MutationObserver || l.WebKitMutationObserver, b = l.document, g = l.process, w = l.Promise, _ = c("queueMicrotask");
          if (!_) {
            var k = new p(), j = function() {
              var t3, e3;
              for (m && (t3 = g.domain) && t3.exit(); e3 = k.get(); )
                try {
                  e3();
                } catch (t4) {
                  throw k.head && n2(), t4;
                }
              t3 && t3.enter();
            };
            d || m || y || !v || !b ? !f && w && w.resolve ? ((a = w.resolve(void 0)).constructor = w, s = u(a.then, a), n2 = function() {
              s(j);
            }) : m ? n2 = function() {
              g.nextTick(j);
            } : (h = u(h, l), n2 = function() {
              h(j);
            }) : (i = true, o = b.createTextNode(""), new v(j).observe(o, { characterData: true }), n2 = function() {
              o.data = i = !i;
            }), _ = function(t3) {
              k.head || n2(), k.add(t3);
            };
          }
          t2.exports = _;
        }, 6043: (t2, e2, r2) => {
          var n2 = r2(9306), i = TypeError, o = function(t3) {
            var e3, r3;
            this.promise = new t3(function(t4, n3) {
              if (e3 !== void 0 || r3 !== void 0)
                throw new i("Bad Promise constructor");
              e3 = t4, r3 = n3;
            }), this.resolve = n2(e3), this.reject = n2(r3);
          };
          t2.exports.f = function(t3) {
            return new o(t3);
          };
        }, 5749: (t2, e2, r2) => {
          var n2 = r2(788), i = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              throw new i("The method doesn't accept regular expressions");
            return t3;
          };
        }, 3904: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(9039), o = r2(9504), a = r2(655), s = r2(3802).trim, l = r2(7452), c = o("".charAt), u = n2.parseFloat, h = n2.Symbol, p = h && h.iterator, d = 1 / u(l + "-0") != -1 / 0 || p && !i(function() {
            u(Object(p));
          });
          t2.exports = d ? function(t3) {
            var e3 = s(a(t3)), r3 = u(e3);
            return r3 === 0 && c(e3, 0) === "-" ? -0 : r3;
          } : u;
        }, 2703: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(9039), o = r2(9504), a = r2(655), s = r2(3802).trim, l = r2(7452), c = n2.parseInt, u = n2.Symbol, h = u && u.iterator, p = /^[+-]?0x/i, d = o(p.exec), f = c(l + "08") !== 8 || c(l + "0x16") !== 22 || h && !i(function() {
            c(Object(h));
          });
          t2.exports = f ? function(t3, e3) {
            var r3 = s(a(t3));
            return c(r3, e3 >>> 0 || (d(p, r3) ? 16 : 10));
          } : c;
        }, 4213: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9504), o = r2(9565), a = r2(9039), s = r2(1072), l = r2(3717), c = r2(8773), u = r2(8981), h = r2(7055), p = Object.assign, d = Object.defineProperty, f = i([].concat);
          t2.exports = !p || a(function() {
            if (n2 && p({ b: 1 }, p(d({}, "a", { enumerable: true, get: function() {
              d(this, "b", { value: 3, enumerable: false });
            } }), { b: 2 })).b !== 1)
              return true;
            var t3 = {}, e3 = {}, r3 = Symbol("assign detection"), i2 = "abcdefghijklmnopqrst";
            return t3[r3] = 7, i2.split("").forEach(function(t4) {
              e3[t4] = t4;
            }), p({}, t3)[r3] !== 7 || s(p({}, e3)).join("") !== i2;
          }) ? function(t3, e3) {
            for (var r3 = u(t3), i2 = arguments.length, a2 = 1, p2 = l.f, d2 = c.f; i2 > a2; )
              for (var y, m = h(arguments[a2++]), v = p2 ? f(s(m), p2(m)) : s(m), b = v.length, g = 0; b > g; )
                y = v[g++], n2 && !o(d2, m, y) || (r3[y] = m[y]);
            return r3;
          } : p;
        }, 2360: (t2, e2, r2) => {
          var n2, i = r2(8551), o = r2(6801), a = r2(8727), s = r2(421), l = r2(397), c = r2(4055), u = r2(6119), h = "prototype", p = "script", d = u("IE_PROTO"), f = function() {
          }, y = function(t3) {
            return "<" + p + ">" + t3 + "</" + p + ">";
          }, m = function(t3) {
            t3.write(y("")), t3.close();
            var e3 = t3.parentWindow.Object;
            return t3 = null, e3;
          }, v = function() {
            try {
              n2 = new ActiveXObject("htmlfile");
            } catch (t4) {
            }
            var t3, e3, r3;
            v = typeof document != "undefined" ? document.domain && n2 ? m(n2) : (e3 = c("iframe"), r3 = "java" + p + ":", e3.style.display = "none", l.appendChild(e3), e3.src = String(r3), (t3 = e3.contentWindow.document).open(), t3.write(y("document.F=Object")), t3.close(), t3.F) : m(n2);
            for (var i2 = a.length; i2--; )
              delete v[h][a[i2]];
            return v();
          };
          s[d] = true, t2.exports = Object.create || function(t3, e3) {
            var r3;
            return t3 !== null ? (f[h] = i(t3), r3 = new f(), f[h] = null, r3[d] = t3) : r3 = v(), e3 === void 0 ? r3 : o.f(r3, e3);
          };
        }, 6801: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(8686), o = r2(4913), a = r2(8551), s = r2(5397), l = r2(1072);
          e2.f = n2 && !i ? Object.defineProperties : function(t3, e3) {
            a(t3);
            for (var r3, n3 = s(e3), i2 = l(e3), c = i2.length, u = 0; c > u; )
              o.f(t3, r3 = i2[u++], n3[r3]);
            return t3;
          };
        }, 4913: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(5917), o = r2(8686), a = r2(8551), s = r2(6969), l = TypeError, c = Object.defineProperty, u = Object.getOwnPropertyDescriptor, h = "enumerable", p = "configurable", d = "writable";
          e2.f = n2 ? o ? function(t3, e3, r3) {
            if (a(t3), e3 = s(e3), a(r3), typeof t3 == "function" && e3 === "prototype" && "value" in r3 && d in r3 && !r3[d]) {
              var n3 = u(t3, e3);
              n3 && n3[d] && (t3[e3] = r3.value, r3 = { configurable: p in r3 ? r3[p] : n3[p], enumerable: h in r3 ? r3[h] : n3[h], writable: false });
            }
            return c(t3, e3, r3);
          } : c : function(t3, e3, r3) {
            if (a(t3), e3 = s(e3), a(r3), i)
              try {
                return c(t3, e3, r3);
              } catch (t4) {
              }
            if ("get" in r3 || "set" in r3)
              throw new l("Accessors not supported");
            return "value" in r3 && (t3[e3] = r3.value), t3;
          };
        }, 7347: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9565), o = r2(8773), a = r2(6980), s = r2(5397), l = r2(6969), c = r2(9297), u = r2(5917), h = Object.getOwnPropertyDescriptor;
          e2.f = n2 ? h : function(t3, e3) {
            if (t3 = s(t3), e3 = l(e3), u)
              try {
                return h(t3, e3);
              } catch (t4) {
              }
            if (c(t3, e3))
              return a(!i(o.f, t3, e3), t3[e3]);
          };
        }, 298: (t2, e2, r2) => {
          var n2 = r2(4576), i = r2(5397), o = r2(8480).f, a = r2(7680), s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          t2.exports.f = function(t3) {
            return s && n2(t3) === "Window" ? function(t4) {
              try {
                return o(t4);
              } catch (t5) {
                return a(s);
              }
            }(t3) : o(i(t3));
          };
        }, 8480: (t2, e2, r2) => {
          var n2 = r2(1828), i = r2(8727).concat("length", "prototype");
          e2.f = Object.getOwnPropertyNames || function(t3) {
            return n2(t3, i);
          };
        }, 3717: (t2, e2) => {
          e2.f = Object.getOwnPropertySymbols;
        }, 2787: (t2, e2, r2) => {
          var n2 = r2(9297), i = r2(4901), o = r2(8981), a = r2(6119), s = r2(2211), l = a("IE_PROTO"), c = Object, u = c.prototype;
          t2.exports = s ? c.getPrototypeOf : function(t3) {
            var e3 = o(t3);
            if (n2(e3, l))
              return e3[l];
            var r3 = e3.constructor;
            return i(r3) && e3 instanceof r3 ? r3.prototype : e3 instanceof c ? u : null;
          };
        }, 1625: (t2, e2, r2) => {
          var n2 = r2(9504);
          t2.exports = n2({}.isPrototypeOf);
        }, 1828: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(9297), o = r2(5397), a = r2(9617).indexOf, s = r2(421), l = n2([].push);
          t2.exports = function(t3, e3) {
            var r3, n3 = o(t3), c = 0, u = [];
            for (r3 in n3)
              !i(s, r3) && i(n3, r3) && l(u, r3);
            for (; e3.length > c; )
              i(n3, r3 = e3[c++]) && (~a(u, r3) || l(u, r3));
            return u;
          };
        }, 1072: (t2, e2, r2) => {
          var n2 = r2(1828), i = r2(8727);
          t2.exports = Object.keys || function(t3) {
            return n2(t3, i);
          };
        }, 8773: (t2, e2) => {
          var r2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, i = n2 && !r2.call({ 1: 2 }, 1);
          e2.f = i ? function(t3) {
            var e3 = n2(this, t3);
            return !!e3 && e3.enumerable;
          } : r2;
        }, 2967: (t2, e2, r2) => {
          var n2 = r2(6706), i = r2(34), o = r2(7750), a = r2(3506);
          t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t3, e3 = false, r3 = {};
            try {
              (t3 = n2(Object.prototype, "__proto__", "set"))(r3, []), e3 = r3 instanceof Array;
            } catch (t4) {
            }
            return function(r4, n3) {
              return o(r4), a(n3), i(r4) ? (e3 ? t3(r4, n3) : r4.__proto__ = n3, r4) : r4;
            };
          }() : void 0);
        }, 2357: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9039), o = r2(9504), a = r2(2787), s = r2(1072), l = r2(5397), c = o(r2(8773).f), u = o([].push), h = n2 && i(function() {
            var t3 = /* @__PURE__ */ Object.create(null);
            return t3[2] = 2, !c(t3, 2);
          }), p = function(t3) {
            return function(e3) {
              for (var r3, i2 = l(e3), o2 = s(i2), p2 = h && a(i2) === null, d = o2.length, f = 0, y = []; d > f; )
                r3 = o2[f++], n2 && !(p2 ? r3 in i2 : c(i2, r3)) || u(y, t3 ? [r3, i2[r3]] : i2[r3]);
              return y;
            };
          };
          t2.exports = { entries: p(true), values: p(false) };
        }, 3179: (t2, e2, r2) => {
          var n2 = r2(2140), i = r2(6955);
          t2.exports = n2 ? {}.toString : function() {
            return "[object " + i(this) + "]";
          };
        }, 4270: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(4901), o = r2(34), a = TypeError;
          t2.exports = function(t3, e3) {
            var r3, s;
            if (e3 === "string" && i(r3 = t3.toString) && !o(s = n2(r3, t3)))
              return s;
            if (i(r3 = t3.valueOf) && !o(s = n2(r3, t3)))
              return s;
            if (e3 !== "string" && i(r3 = t3.toString) && !o(s = n2(r3, t3)))
              return s;
            throw new a("Can't convert object to primitive value");
          };
        }, 5031: (t2, e2, r2) => {
          var n2 = r2(7751), i = r2(9504), o = r2(8480), a = r2(3717), s = r2(8551), l = i([].concat);
          t2.exports = n2("Reflect", "ownKeys") || function(t3) {
            var e3 = o.f(s(t3)), r3 = a.f;
            return r3 ? l(e3, r3(t3)) : e3;
          };
        }, 9167: (t2, e2, r2) => {
          var n2 = r2(4475);
          t2.exports = n2;
        }, 1103: (t2) => {
          t2.exports = function(t3) {
            try {
              return { error: false, value: t3() };
            } catch (t4) {
              return { error: true, value: t4 };
            }
          };
        }, 916: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(550), o = r2(4901), a = r2(2796), s = r2(3706), l = r2(8227), c = r2(7290), u = r2(516), h = r2(6395), p = r2(7388), d = i && i.prototype, f = l("species"), y = false, m = o(n2.PromiseRejectionEvent), v = a("Promise", function() {
            var t3 = s(i), e3 = t3 !== String(i);
            if (!e3 && p === 66)
              return true;
            if (h && (!d.catch || !d.finally))
              return true;
            if (!p || p < 51 || !/native code/.test(t3)) {
              var r3 = new i(function(t4) {
                t4(1);
              }), n3 = function(t4) {
                t4(function() {
                }, function() {
                });
              };
              if ((r3.constructor = {})[f] = n3, !(y = r3.then(function() {
              }) instanceof n3))
                return true;
            }
            return !e3 && (c || u) && !m;
          });
          t2.exports = { CONSTRUCTOR: v, REJECTION_EVENT: m, SUBCLASSING: y };
        }, 550: (t2, e2, r2) => {
          var n2 = r2(4475);
          t2.exports = n2.Promise;
        }, 3438: (t2, e2, r2) => {
          var n2 = r2(8551), i = r2(34), o = r2(6043);
          t2.exports = function(t3, e3) {
            if (n2(t3), i(e3) && e3.constructor === t3)
              return e3;
            var r3 = o.f(t3);
            return (0, r3.resolve)(e3), r3.promise;
          };
        }, 537: (t2, e2, r2) => {
          var n2 = r2(550), i = r2(4428), o = r2(916).CONSTRUCTOR;
          t2.exports = o || !i(function(t3) {
            n2.all(t3).then(void 0, function() {
            });
          });
        }, 1056: (t2, e2, r2) => {
          var n2 = r2(4913).f;
          t2.exports = function(t3, e3, r3) {
            r3 in t3 || n2(t3, r3, { configurable: true, get: function() {
              return e3[r3];
            }, set: function(t4) {
              e3[r3] = t4;
            } });
          };
        }, 8265: (t2) => {
          var e2 = function() {
            this.head = null, this.tail = null;
          };
          e2.prototype = { add: function(t3) {
            var e3 = { item: t3, next: null }, r2 = this.tail;
            r2 ? r2.next = e3 : this.head = e3, this.tail = e3;
          }, get: function() {
            var t3 = this.head;
            if (t3)
              return (this.head = t3.next) === null && (this.tail = null), t3.item;
          } }, t2.exports = e2;
        }, 6682: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(8551), o = r2(4901), a = r2(4576), s = r2(7323), l = TypeError;
          t2.exports = function(t3, e3) {
            var r3 = t3.exec;
            if (o(r3)) {
              var c = n2(r3, t3, e3);
              return c !== null && i(c), c;
            }
            if (a(t3) === "RegExp")
              return n2(s, t3, e3);
            throw new l("RegExp#exec called on incompatible receiver");
          };
        }, 7323: (t2, e2, r2) => {
          var n2, i, o = r2(9565), a = r2(9504), s = r2(655), l = r2(7979), c = r2(8429), u = r2(5745), h = r2(2360), p = r2(1181).get, d = r2(3635), f = r2(8814), y = u("native-string-replace", String.prototype.replace), m = RegExp.prototype.exec, v = m, b = a("".charAt), g = a("".indexOf), w = a("".replace), _ = a("".slice), k = (i = /b*/g, o(m, n2 = /a/, "a"), o(m, i, "a"), n2.lastIndex !== 0 || i.lastIndex !== 0), j = c.BROKEN_CARET, O = /()??/.exec("")[1] !== void 0;
          (k || O || j || d || f) && (v = function(t3) {
            var e3, r3, n3, i2, a2, c2, u2, d2 = this, f2 = p(d2), x = s(t3), C = f2.raw;
            if (C)
              return C.lastIndex = d2.lastIndex, e3 = o(v, C, x), d2.lastIndex = C.lastIndex, e3;
            var E = f2.groups, S = j && d2.sticky, P = o(l, d2), L = d2.source, T = 0, A = x;
            if (S && (P = w(P, "y", ""), g(P, "g") === -1 && (P += "g"), A = _(x, d2.lastIndex), d2.lastIndex > 0 && (!d2.multiline || d2.multiline && b(x, d2.lastIndex - 1) !== "\n") && (L = "(?: " + L + ")", A = " " + A, T++), r3 = new RegExp("^(?:" + L + ")", P)), O && (r3 = new RegExp("^" + L + "$(?!\\s)", P)), k && (n3 = d2.lastIndex), i2 = o(m, S ? r3 : d2, A), S ? i2 ? (i2.input = _(i2.input, T), i2[0] = _(i2[0], T), i2.index = d2.lastIndex, d2.lastIndex += i2[0].length) : d2.lastIndex = 0 : k && i2 && (d2.lastIndex = d2.global ? i2.index + i2[0].length : n3), O && i2 && i2.length > 1 && o(y, i2[0], r3, function() {
              for (a2 = 1; a2 < arguments.length - 2; a2++)
                arguments[a2] === void 0 && (i2[a2] = void 0);
            }), i2 && E)
              for (i2.groups = c2 = h(null), a2 = 0; a2 < E.length; a2++)
                c2[(u2 = E[a2])[0]] = i2[u2[1]];
            return i2;
          }), t2.exports = v;
        }, 7979: (t2, e2, r2) => {
          var n2 = r2(8551);
          t2.exports = function() {
            var t3 = n2(this), e3 = "";
            return t3.hasIndices && (e3 += "d"), t3.global && (e3 += "g"), t3.ignoreCase && (e3 += "i"), t3.multiline && (e3 += "m"), t3.dotAll && (e3 += "s"), t3.unicode && (e3 += "u"), t3.unicodeSets && (e3 += "v"), t3.sticky && (e3 += "y"), e3;
          };
        }, 1034: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(9297), o = r2(1625), a = r2(7979), s = RegExp.prototype;
          t2.exports = function(t3) {
            var e3 = t3.flags;
            return e3 !== void 0 || "flags" in s || i(t3, "flags") || !o(s, t3) ? e3 : n2(a, t3);
          };
        }, 8429: (t2, e2, r2) => {
          var n2 = r2(9039), i = r2(4475).RegExp, o = n2(function() {
            var t3 = i("a", "y");
            return t3.lastIndex = 2, t3.exec("abcd") !== null;
          }), a = o || n2(function() {
            return !i("a", "y").sticky;
          }), s = o || n2(function() {
            var t3 = i("^r", "gy");
            return t3.lastIndex = 2, t3.exec("str") !== null;
          });
          t2.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: o };
        }, 3635: (t2, e2, r2) => {
          var n2 = r2(9039), i = r2(4475).RegExp;
          t2.exports = n2(function() {
            var t3 = i(".", "s");
            return !(t3.dotAll && t3.test("\n") && t3.flags === "s");
          });
        }, 8814: (t2, e2, r2) => {
          var n2 = r2(9039), i = r2(4475).RegExp;
          t2.exports = n2(function() {
            var t3 = i("(?<a>b)", "g");
            return t3.exec("b").groups.a !== "b" || "b".replace(t3, "$<a>c") !== "bc";
          });
        }, 7750: (t2, e2, r2) => {
          var n2 = r2(4117), i = TypeError;
          t2.exports = function(t3) {
            if (n2(t3))
              throw new i("Can't call method on " + t3);
            return t3;
          };
        }, 3389: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(3724), o = Object.getOwnPropertyDescriptor;
          t2.exports = function(t3) {
            if (!i)
              return n2[t3];
            var e3 = o(n2, t3);
            return e3 && e3.value;
          };
        }, 9472: (t2, e2, r2) => {
          var n2, i = r2(4475), o = r2(8745), a = r2(4901), s = r2(6763), l = r2(9392), c = r2(7680), u = r2(2812), h = i.Function, p = /MSIE .\./.test(l) || s && ((n2 = i.Bun.version.split(".")).length < 3 || n2[0] === "0" && (n2[1] < 3 || n2[1] === "3" && n2[2] === "0"));
          t2.exports = function(t3, e3) {
            var r3 = e3 ? 2 : 1;
            return p ? function(n3, i2) {
              var s2 = u(arguments.length, 1) > r3, l2 = a(n3) ? n3 : h(n3), p2 = s2 ? c(arguments, r3) : [], d = s2 ? function() {
                o(l2, this, p2);
              } : l2;
              return e3 ? t3(d, i2) : t3(d);
            } : t3;
          };
        }, 7633: (t2, e2, r2) => {
          var n2 = r2(7751), i = r2(2106), o = r2(8227), a = r2(3724), s = o("species");
          t2.exports = function(t3) {
            var e3 = n2(t3);
            a && e3 && !e3[s] && i(e3, s, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 687: (t2, e2, r2) => {
          var n2 = r2(4913).f, i = r2(9297), o = r2(8227)("toStringTag");
          t2.exports = function(t3, e3, r3) {
            t3 && !r3 && (t3 = t3.prototype), t3 && !i(t3, o) && n2(t3, o, { configurable: true, value: e3 });
          };
        }, 6119: (t2, e2, r2) => {
          var n2 = r2(5745), i = r2(3392), o = n2("keys");
          t2.exports = function(t3) {
            return o[t3] || (o[t3] = i(t3));
          };
        }, 7629: (t2, e2, r2) => {
          var n2 = r2(6395), i = r2(4475), o = r2(9433), a = "__core-js_shared__", s = t2.exports = i[a] || o(a, {});
          (s.versions || (s.versions = [])).push({ version: "3.36.1", mode: n2 ? "pure" : "global", copyright: "\xA9 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE", source: "https://github.com/zloirock/core-js" });
        }, 5745: (t2, e2, r2) => {
          var n2 = r2(7629);
          t2.exports = function(t3, e3) {
            return n2[t3] || (n2[t3] = e3 || {});
          };
        }, 2293: (t2, e2, r2) => {
          var n2 = r2(8551), i = r2(5548), o = r2(4117), a = r2(8227)("species");
          t2.exports = function(t3, e3) {
            var r3, s = n2(t3).constructor;
            return s === void 0 || o(r3 = n2(s)[a]) ? e3 : i(r3);
          };
        }, 8183: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(1291), o = r2(655), a = r2(7750), s = n2("".charAt), l = n2("".charCodeAt), c = n2("".slice), u = function(t3) {
            return function(e3, r3) {
              var n3, u2, h = o(a(e3)), p = i(r3), d = h.length;
              return p < 0 || p >= d ? t3 ? "" : void 0 : (n3 = l(h, p)) < 55296 || n3 > 56319 || p + 1 === d || (u2 = l(h, p + 1)) < 56320 || u2 > 57343 ? t3 ? s(h, p) : n3 : t3 ? c(h, p, p + 2) : u2 - 56320 + (n3 - 55296 << 10) + 65536;
            };
          };
          t2.exports = { codeAt: u(false), charAt: u(true) };
        }, 533: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(8014), o = r2(655), a = r2(2333), s = r2(7750), l = n2(a), c = n2("".slice), u = Math.ceil, h = function(t3) {
            return function(e3, r3, n3) {
              var a2, h2, p = o(s(e3)), d = i(r3), f = p.length, y = n3 === void 0 ? " " : o(n3);
              return d <= f || y === "" ? p : ((h2 = l(y, u((a2 = d - f) / y.length))).length > a2 && (h2 = c(h2, 0, a2)), t3 ? p + h2 : h2 + p);
            };
          };
          t2.exports = { start: h(false), end: h(true) };
        }, 2333: (t2, e2, r2) => {
          var n2 = r2(1291), i = r2(655), o = r2(7750), a = RangeError;
          t2.exports = function(t3) {
            var e3 = i(o(this)), r3 = "", s = n2(t3);
            if (s < 0 || s === 1 / 0)
              throw new a("Wrong number of repetitions");
            for (; s > 0; (s >>>= 1) && (e3 += e3))
              1 & s && (r3 += e3);
            return r3;
          };
        }, 706: (t2, e2, r2) => {
          var n2 = r2(350).PROPER, i = r2(9039), o = r2(7452);
          t2.exports = function(t3) {
            return i(function() {
              return !!o[t3]() || "\u200B\x85\u180E"[t3]() !== "\u200B\x85\u180E" || n2 && o[t3].name !== t3;
            });
          };
        }, 3802: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(7750), o = r2(655), a = r2(7452), s = n2("".replace), l = RegExp("^[" + a + "]+"), c = RegExp("(^|[^" + a + "])[" + a + "]+$"), u = function(t3) {
            return function(e3) {
              var r3 = o(i(e3));
              return 1 & t3 && (r3 = s(r3, l, "")), 2 & t3 && (r3 = s(r3, c, "$1")), r3;
            };
          };
          t2.exports = { start: u(1), end: u(2), trim: u(3) };
        }, 4495: (t2, e2, r2) => {
          var n2 = r2(7388), i = r2(9039), o = r2(4475).String;
          t2.exports = !!Object.getOwnPropertySymbols && !i(function() {
            var t3 = Symbol("symbol detection");
            return !o(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
          });
        }, 8242: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(7751), o = r2(8227), a = r2(6840);
          t2.exports = function() {
            var t3 = i("Symbol"), e3 = t3 && t3.prototype, r3 = e3 && e3.valueOf, s = o("toPrimitive");
            e3 && !e3[s] && a(e3, s, function(t4) {
              return n2(r3, this);
            }, { arity: 1 });
          };
        }, 1296: (t2, e2, r2) => {
          var n2 = r2(4495);
          t2.exports = n2 && !!Symbol.for && !!Symbol.keyFor;
        }, 9225: (t2, e2, r2) => {
          var n2, i, o, a, s = r2(4475), l = r2(8745), c = r2(6080), u = r2(4901), h = r2(9297), p = r2(9039), d = r2(397), f = r2(7680), y = r2(4055), m = r2(2812), v = r2(8119), b = r2(9088), g = s.setImmediate, w = s.clearImmediate, _ = s.process, k = s.Dispatch, j = s.Function, O = s.MessageChannel, x = s.String, C = 0, E = {}, S = "onreadystatechange";
          p(function() {
            n2 = s.location;
          });
          var P = function(t3) {
            if (h(E, t3)) {
              var e3 = E[t3];
              delete E[t3], e3();
            }
          }, L = function(t3) {
            return function() {
              P(t3);
            };
          }, T = function(t3) {
            P(t3.data);
          }, A = function(t3) {
            s.postMessage(x(t3), n2.protocol + "//" + n2.host);
          };
          g && w || (g = function(t3) {
            m(arguments.length, 1);
            var e3 = u(t3) ? t3 : j(t3), r3 = f(arguments, 1);
            return E[++C] = function() {
              l(e3, void 0, r3);
            }, i(C), C;
          }, w = function(t3) {
            delete E[t3];
          }, b ? i = function(t3) {
            _.nextTick(L(t3));
          } : k && k.now ? i = function(t3) {
            k.now(L(t3));
          } : O && !v ? (a = (o = new O()).port2, o.port1.onmessage = T, i = c(a.postMessage, a)) : s.addEventListener && u(s.postMessage) && !s.importScripts && n2 && n2.protocol !== "file:" && !p(A) ? (i = A, s.addEventListener("message", T, false)) : i = S in y("script") ? function(t3) {
            d.appendChild(y("script"))[S] = function() {
              d.removeChild(this), P(t3);
            };
          } : function(t3) {
            setTimeout(L(t3), 0);
          }), t2.exports = { set: g, clear: w };
        }, 1240: (t2, e2, r2) => {
          var n2 = r2(9504);
          t2.exports = n2(1 .valueOf);
        }, 5610: (t2, e2, r2) => {
          var n2 = r2(1291), i = Math.max, o = Math.min;
          t2.exports = function(t3, e3) {
            var r3 = n2(t3);
            return r3 < 0 ? i(r3 + e3, 0) : o(r3, e3);
          };
        }, 5397: (t2, e2, r2) => {
          var n2 = r2(7055), i = r2(7750);
          t2.exports = function(t3) {
            return n2(i(t3));
          };
        }, 1291: (t2, e2, r2) => {
          var n2 = r2(741);
          t2.exports = function(t3) {
            var e3 = +t3;
            return e3 != e3 || e3 === 0 ? 0 : n2(e3);
          };
        }, 8014: (t2, e2, r2) => {
          var n2 = r2(1291), i = Math.min;
          t2.exports = function(t3) {
            var e3 = n2(t3);
            return e3 > 0 ? i(e3, 9007199254740991) : 0;
          };
        }, 8981: (t2, e2, r2) => {
          var n2 = r2(7750), i = Object;
          t2.exports = function(t3) {
            return i(n2(t3));
          };
        }, 2777: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(34), o = r2(757), a = r2(5966), s = r2(4270), l = r2(8227), c = TypeError, u = l("toPrimitive");
          t2.exports = function(t3, e3) {
            if (!i(t3) || o(t3))
              return t3;
            var r3, l2 = a(t3, u);
            if (l2) {
              if (e3 === void 0 && (e3 = "default"), r3 = n2(l2, t3, e3), !i(r3) || o(r3))
                return r3;
              throw new c("Can't convert object to primitive value");
            }
            return e3 === void 0 && (e3 = "number"), s(t3, e3);
          };
        }, 6969: (t2, e2, r2) => {
          var n2 = r2(2777), i = r2(757);
          t2.exports = function(t3) {
            var e3 = n2(t3, "string");
            return i(e3) ? e3 : e3 + "";
          };
        }, 2140: (t2, e2, r2) => {
          var n2 = {};
          n2[r2(8227)("toStringTag")] = "z", t2.exports = String(n2) === "[object z]";
        }, 655: (t2, e2, r2) => {
          var n2 = r2(6955), i = String;
          t2.exports = function(t3) {
            if (n2(t3) === "Symbol")
              throw new TypeError("Cannot convert a Symbol value to a string");
            return i(t3);
          };
        }, 6823: (t2) => {
          var e2 = String;
          t2.exports = function(t3) {
            try {
              return e2(t3);
            } catch (t4) {
              return "Object";
            }
          };
        }, 3392: (t2, e2, r2) => {
          var n2 = r2(9504), i = 0, o = Math.random(), a = n2(1 .toString);
          t2.exports = function(t3) {
            return "Symbol(" + (t3 === void 0 ? "" : t3) + ")_" + a(++i + o, 36);
          };
        }, 7040: (t2, e2, r2) => {
          var n2 = r2(4495);
          t2.exports = n2 && !Symbol.sham && typeof Symbol.iterator == "symbol";
        }, 8686: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(9039);
          t2.exports = n2 && i(function() {
            return Object.defineProperty(function() {
            }, "prototype", { value: 42, writable: false }).prototype !== 42;
          });
        }, 2812: (t2) => {
          var e2 = TypeError;
          t2.exports = function(t3, r2) {
            if (t3 < r2)
              throw new e2("Not enough arguments");
            return t3;
          };
        }, 8622: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(4901), o = n2.WeakMap;
          t2.exports = i(o) && /native code/.test(String(o));
        }, 511: (t2, e2, r2) => {
          var n2 = r2(9167), i = r2(9297), o = r2(1951), a = r2(4913).f;
          t2.exports = function(t3) {
            var e3 = n2.Symbol || (n2.Symbol = {});
            i(e3, t3) || a(e3, t3, { value: o.f(t3) });
          };
        }, 1951: (t2, e2, r2) => {
          var n2 = r2(8227);
          e2.f = n2;
        }, 8227: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(5745), o = r2(9297), a = r2(3392), s = r2(4495), l = r2(7040), c = n2.Symbol, u = i("wks"), h = l ? c.for || c : c && c.withoutSetter || a;
          t2.exports = function(t3) {
            return o(u, t3) || (u[t3] = s && o(c, t3) ? c[t3] : h("Symbol." + t3)), u[t3];
          };
        }, 7452: (t2) => {
          t2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, 8706: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9039), o = r2(4376), a = r2(34), s = r2(8981), l = r2(6198), c = r2(6837), u = r2(4659), h = r2(1469), p = r2(597), d = r2(8227), f = r2(7388), y = d("isConcatSpreadable"), m = f >= 51 || !i(function() {
            var t3 = [];
            return t3[y] = false, t3.concat()[0] !== t3;
          }), v = function(t3) {
            if (!a(t3))
              return false;
            var e3 = t3[y];
            return e3 !== void 0 ? !!e3 : o(t3);
          };
          n2({ target: "Array", proto: true, arity: 1, forced: !m || !p("concat") }, { concat: function(t3) {
            var e3, r3, n3, i2, o2, a2 = s(this), p2 = h(a2, 0), d2 = 0;
            for (e3 = -1, n3 = arguments.length; e3 < n3; e3++)
              if (v(o2 = e3 === -1 ? a2 : arguments[e3]))
                for (i2 = l(o2), c(d2 + i2), r3 = 0; r3 < i2; r3++, d2++)
                  r3 in o2 && u(p2, d2, o2[r3]);
              else
                c(d2 + 1), u(p2, d2++, o2);
            return p2.length = d2, p2;
          } });
        }, 8431: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9213).every;
          n2({ target: "Array", proto: true, forced: !r2(4598)("every") }, { every: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 2008: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9213).filter;
          n2({ target: "Array", proto: true, forced: !r2(597)("filter") }, { filter: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 113: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9213).find, o = r2(6469), a = "find", s = true;
          a in [] && Array(1)[a](function() {
            s = false;
          }), n2({ target: "Array", proto: true, forced: s }, { find: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } }), o(a);
        }, 1629: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(235);
          n2({ target: "Array", proto: true, forced: [].forEach !== i }, { forEach: i });
        }, 3418: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7916);
          n2({ target: "Array", stat: true, forced: !r2(4428)(function(t3) {
            Array.from(t3);
          }) }, { from: i });
        }, 4423: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9617).includes, o = r2(9039), a = r2(6469);
          n2({ target: "Array", proto: true, forced: o(function() {
            return !Array(1).includes();
          }) }, { includes: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } }), a("includes");
        }, 5276: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7476), o = r2(9617).indexOf, a = r2(4598), s = i([].indexOf), l = !!s && 1 / s([1], 1, -0) < 0;
          n2({ target: "Array", proto: true, forced: l || !a("indexOf") }, { indexOf: function(t3) {
            var e3 = arguments.length > 1 ? arguments[1] : void 0;
            return l ? s(this, t3, e3) || 0 : o(this, t3, e3);
          } });
        }, 4346: (t2, e2, r2) => {
          r2(6518)({ target: "Array", stat: true }, { isArray: r2(4376) });
        }, 3792: (t2, e2, r2) => {
          var n2 = r2(5397), i = r2(6469), o = r2(6269), a = r2(1181), s = r2(4913).f, l = r2(1088), c = r2(2529), u = r2(6395), h = r2(3724), p = "Array Iterator", d = a.set, f = a.getterFor(p);
          t2.exports = l(Array, "Array", function(t3, e3) {
            d(this, { type: p, target: n2(t3), index: 0, kind: e3 });
          }, function() {
            var t3 = f(this), e3 = t3.target, r3 = t3.index++;
            if (!e3 || r3 >= e3.length)
              return t3.target = void 0, c(void 0, true);
            switch (t3.kind) {
              case "keys":
                return c(r3, false);
              case "values":
                return c(e3[r3], false);
            }
            return c([r3, e3[r3]], false);
          }, "values");
          var y = o.Arguments = o.Array;
          if (i("keys"), i("values"), i("entries"), !u && h && y.name !== "values")
            try {
              s(y, "name", { value: "values" });
            } catch (t3) {
            }
        }, 8598: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9504), o = r2(7055), a = r2(5397), s = r2(4598), l = i([].join);
          n2({ target: "Array", proto: true, forced: o !== Object || !s("join", ",") }, { join: function(t3) {
            return l(a(this), t3 === void 0 ? "," : t3);
          } });
        }, 2062: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9213).map;
          n2({ target: "Array", proto: true, forced: !r2(597)("map") }, { map: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 2712: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(926).left, o = r2(4598), a = r2(7388);
          n2({ target: "Array", proto: true, forced: !r2(9088) && a > 79 && a < 83 || !o("reduce") }, { reduce: function(t3) {
            var e3 = arguments.length;
            return i(this, t3, e3, e3 > 1 ? arguments[1] : void 0);
          } });
        }, 4490: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9504), o = r2(4376), a = i([].reverse), s = [1, 2];
          n2({ target: "Array", proto: true, forced: String(s) === String(s.reverse()) }, { reverse: function() {
            return o(this) && (this.length = this.length), a(this);
          } });
        }, 4782: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4376), o = r2(3517), a = r2(34), s = r2(5610), l = r2(6198), c = r2(5397), u = r2(4659), h = r2(8227), p = r2(597), d = r2(7680), f = p("slice"), y = h("species"), m = Array, v = Math.max;
          n2({ target: "Array", proto: true, forced: !f }, { slice: function(t3, e3) {
            var r3, n3, h2, p2 = c(this), f2 = l(p2), b = s(t3, f2), g = s(e3 === void 0 ? f2 : e3, f2);
            if (i(p2) && (r3 = p2.constructor, (o(r3) && (r3 === m || i(r3.prototype)) || a(r3) && (r3 = r3[y]) === null) && (r3 = void 0), r3 === m || r3 === void 0))
              return d(p2, b, g);
            for (n3 = new (r3 === void 0 ? m : r3)(v(g - b, 0)), h2 = 0; b < g; b++, h2++)
              b in p2 && u(n3, h2, p2[b]);
            return n3.length = h2, n3;
          } });
        }, 5086: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9213).some;
          n2({ target: "Array", proto: true, forced: !r2(4598)("some") }, { some: function(t3) {
            return i(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 6910: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9504), o = r2(9306), a = r2(8981), s = r2(6198), l = r2(4606), c = r2(655), u = r2(9039), h = r2(4488), p = r2(4598), d = r2(8834), f = r2(3202), y = r2(7388), m = r2(9160), v = [], b = i(v.sort), g = i(v.push), w = u(function() {
            v.sort(void 0);
          }), _ = u(function() {
            v.sort(null);
          }), k = p("sort"), j = !u(function() {
            if (y)
              return y < 70;
            if (!(d && d > 3)) {
              if (f)
                return true;
              if (m)
                return m < 603;
              var t3, e3, r3, n3, i2 = "";
              for (t3 = 65; t3 < 76; t3++) {
                switch (e3 = String.fromCharCode(t3), t3) {
                  case 66:
                  case 69:
                  case 70:
                  case 72:
                    r3 = 3;
                    break;
                  case 68:
                  case 71:
                    r3 = 4;
                    break;
                  default:
                    r3 = 2;
                }
                for (n3 = 0; n3 < 47; n3++)
                  v.push({ k: e3 + n3, v: r3 });
              }
              for (v.sort(function(t4, e4) {
                return e4.v - t4.v;
              }), n3 = 0; n3 < v.length; n3++)
                e3 = v[n3].k.charAt(0), i2.charAt(i2.length - 1) !== e3 && (i2 += e3);
              return i2 !== "DGBEFHACIJK";
            }
          });
          n2({ target: "Array", proto: true, forced: w || !_ || !k || !j }, { sort: function(t3) {
            t3 !== void 0 && o(t3);
            var e3 = a(this);
            if (j)
              return t3 === void 0 ? b(e3) : b(e3, t3);
            var r3, n3, i2 = [], u2 = s(e3);
            for (n3 = 0; n3 < u2; n3++)
              n3 in e3 && g(i2, e3[n3]);
            for (h(i2, function(t4) {
              return function(e4, r4) {
                return r4 === void 0 ? -1 : e4 === void 0 ? 1 : t4 !== void 0 ? +t4(e4, r4) || 0 : c(e4) > c(r4) ? 1 : -1;
              };
            }(t3)), r3 = s(i2), n3 = 0; n3 < r3; )
              e3[n3] = i2[n3++];
            for (; n3 < u2; )
              l(e3, n3++);
            return e3;
          } });
        }, 4554: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(8981), o = r2(5610), a = r2(1291), s = r2(6198), l = r2(4527), c = r2(6837), u = r2(1469), h = r2(4659), p = r2(4606), d = r2(597)("splice"), f = Math.max, y = Math.min;
          n2({ target: "Array", proto: true, forced: !d }, { splice: function(t3, e3) {
            var r3, n3, d2, m, v, b, g = i(this), w = s(g), _ = o(t3, w), k = arguments.length;
            for (k === 0 ? r3 = n3 = 0 : k === 1 ? (r3 = 0, n3 = w - _) : (r3 = k - 2, n3 = y(f(a(e3), 0), w - _)), c(w + r3 - n3), d2 = u(g, n3), m = 0; m < n3; m++)
              (v = _ + m) in g && h(d2, m, g[v]);
            if (d2.length = n3, r3 < n3) {
              for (m = _; m < w - n3; m++)
                b = m + r3, (v = m + n3) in g ? g[b] = g[v] : p(g, b);
              for (m = w; m > w - n3 + r3; m--)
                p(g, m - 1);
            } else if (r3 > n3)
              for (m = w - n3; m > _; m--)
                b = m + r3 - 1, (v = m + n3 - 1) in g ? g[b] = g[v] : p(g, b);
            for (m = 0; m < r3; m++)
              g[m + _] = arguments[m + 2];
            return l(g, w - n3 + r3), d2;
          } });
        }, 1688: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(380);
          n2({ target: "Date", proto: true, forced: Date.prototype.toISOString !== i }, { toISOString: i });
        }, 739: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9039), o = r2(8981), a = r2(2777);
          n2({ target: "Date", proto: true, arity: 1, forced: i(function() {
            return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } }) !== 1;
          }) }, { toJSON: function(t3) {
            var e3 = o(this), r3 = a(e3, "number");
            return typeof r3 != "number" || isFinite(r3) ? e3.toISOString() : null;
          } });
        }, 9572: (t2, e2, r2) => {
          var n2 = r2(9297), i = r2(6840), o = r2(3640), a = r2(8227)("toPrimitive"), s = Date.prototype;
          n2(s, a) || i(s, a, o);
        }, 3288: (t2, e2, r2) => {
          var n2 = r2(9504), i = r2(6840), o = Date.prototype, a = "Invalid Date", s = "toString", l = n2(o[s]), c = n2(o.getTime);
          String(new Date(NaN)) !== a && i(o, s, function() {
            var t3 = c(this);
            return t3 == t3 ? l(this) : a;
          });
        }, 4170: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(566);
          n2({ target: "Function", proto: true, forced: Function.bind !== i }, { bind: i });
        }, 2010: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(350).EXISTS, o = r2(9504), a = r2(2106), s = Function.prototype, l = o(s.toString), c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, u = o(c.exec);
          n2 && !i && a(s, "name", { configurable: true, get: function() {
            try {
              return u(c, l(this))[1];
            } catch (t3) {
              return "";
            }
          } });
        }, 3110: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7751), o = r2(8745), a = r2(9565), s = r2(9504), l = r2(9039), c = r2(4901), u = r2(757), h = r2(7680), p = r2(6933), d = r2(4495), f = String, y = i("JSON", "stringify"), m = s(/./.exec), v = s("".charAt), b = s("".charCodeAt), g = s("".replace), w = s(1 .toString), _ = /[\uD800-\uDFFF]/g, k = /^[\uD800-\uDBFF]$/, j = /^[\uDC00-\uDFFF]$/, O = !d || l(function() {
            var t3 = i("Symbol")("stringify detection");
            return y([t3]) !== "[null]" || y({ a: t3 }) !== "{}" || y(Object(t3)) !== "{}";
          }), x = l(function() {
            return y("\uDF06\uD834") !== '"\\udf06\\ud834"' || y("\uDEAD") !== '"\\udead"';
          }), C = function(t3, e3) {
            var r3 = h(arguments), n3 = p(e3);
            if (c(n3) || t3 !== void 0 && !u(t3))
              return r3[1] = function(t4, e4) {
                if (c(n3) && (e4 = a(n3, this, f(t4), e4)), !u(e4))
                  return e4;
              }, o(y, null, r3);
          }, E = function(t3, e3, r3) {
            var n3 = v(r3, e3 - 1), i2 = v(r3, e3 + 1);
            return m(k, t3) && !m(j, i2) || m(j, t3) && !m(k, n3) ? "\\u" + w(b(t3, 0), 16) : t3;
          };
          y && n2({ target: "JSON", stat: true, arity: 3, forced: O || x }, { stringify: function(t3, e3, r3) {
            var n3 = h(arguments), i2 = o(O ? C : y, null, n3);
            return x && typeof i2 == "string" ? g(i2, _, E) : i2;
          } });
        }, 4731: (t2, e2, r2) => {
          var n2 = r2(4475);
          r2(687)(n2.JSON, "JSON", true);
        }, 479: (t2, e2, r2) => {
          r2(687)(Math, "Math", true);
        }, 2892: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(6395), o = r2(3724), a = r2(4475), s = r2(9167), l = r2(9504), c = r2(2796), u = r2(9297), h = r2(3167), p = r2(1625), d = r2(757), f = r2(2777), y = r2(9039), m = r2(8480).f, v = r2(7347).f, b = r2(4913).f, g = r2(1240), w = r2(3802).trim, _ = "Number", k = a[_], j = s[_], O = k.prototype, x = a.TypeError, C = l("".slice), E = l("".charCodeAt), S = c(_, !k(" 0o1") || !k("0b1") || k("+0x1")), P = function(t3) {
            var e3, r3 = arguments.length < 1 ? 0 : k(function(t4) {
              var e4 = f(t4, "number");
              return typeof e4 == "bigint" ? e4 : function(t5) {
                var e5, r4, n3, i2, o2, a2, s2, l2, c2 = f(t5, "number");
                if (d(c2))
                  throw new x("Cannot convert a Symbol value to a number");
                if (typeof c2 == "string" && c2.length > 2) {
                  if (c2 = w(c2), (e5 = E(c2, 0)) === 43 || e5 === 45) {
                    if ((r4 = E(c2, 2)) === 88 || r4 === 120)
                      return NaN;
                  } else if (e5 === 48) {
                    switch (E(c2, 1)) {
                      case 66:
                      case 98:
                        n3 = 2, i2 = 49;
                        break;
                      case 79:
                      case 111:
                        n3 = 8, i2 = 55;
                        break;
                      default:
                        return +c2;
                    }
                    for (a2 = (o2 = C(c2, 2)).length, s2 = 0; s2 < a2; s2++)
                      if ((l2 = E(o2, s2)) < 48 || l2 > i2)
                        return NaN;
                    return parseInt(o2, n3);
                  }
                }
                return +c2;
              }(e4);
            }(t3));
            return p(O, e3 = this) && y(function() {
              g(e3);
            }) ? h(Object(r3), this, P) : r3;
          };
          P.prototype = O, S && !i && (O.constructor = P), n2({ global: true, constructor: true, wrap: true, forced: S }, { Number: P });
          var L = function(t3, e3) {
            for (var r3, n3 = o ? m(e3) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i2 = 0; n3.length > i2; i2++)
              u(e3, r3 = n3[i2]) && !u(t3, r3) && b(t3, r3, v(e3, r3));
          };
          i && j && L(s[_], j), (S || i) && L(s[_], k);
        }, 9868: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9504), o = r2(1291), a = r2(1240), s = r2(2333), l = r2(9039), c = RangeError, u = String, h = Math.floor, p = i(s), d = i("".slice), f = i(1 .toFixed), y = function(t3, e3, r3) {
            return e3 === 0 ? r3 : e3 % 2 == 1 ? y(t3, e3 - 1, r3 * t3) : y(t3 * t3, e3 / 2, r3);
          }, m = function(t3, e3, r3) {
            for (var n3 = -1, i2 = r3; ++n3 < 6; )
              i2 += e3 * t3[n3], t3[n3] = i2 % 1e7, i2 = h(i2 / 1e7);
          }, v = function(t3, e3) {
            for (var r3 = 6, n3 = 0; --r3 >= 0; )
              n3 += t3[r3], t3[r3] = h(n3 / e3), n3 = n3 % e3 * 1e7;
          }, b = function(t3) {
            for (var e3 = 6, r3 = ""; --e3 >= 0; )
              if (r3 !== "" || e3 === 0 || t3[e3] !== 0) {
                var n3 = u(t3[e3]);
                r3 = r3 === "" ? n3 : r3 + p("0", 7 - n3.length) + n3;
              }
            return r3;
          };
          n2({ target: "Number", proto: true, forced: l(function() {
            return f(8e-5, 3) !== "0.000" || f(0.9, 0) !== "1" || f(1.255, 2) !== "1.25" || f(1000000000000000100, 0) !== "1000000000000000128";
          }) || !l(function() {
            f({});
          }) }, { toFixed: function(t3) {
            var e3, r3, n3, i2, s2 = a(this), l2 = o(t3), h2 = [0, 0, 0, 0, 0, 0], f2 = "", g = "0";
            if (l2 < 0 || l2 > 20)
              throw new c("Incorrect fraction digits");
            if (s2 != s2)
              return "NaN";
            if (s2 <= -1e21 || s2 >= 1e21)
              return u(s2);
            if (s2 < 0 && (f2 = "-", s2 = -s2), s2 > 1e-21)
              if (r3 = (e3 = function(t4) {
                for (var e4 = 0, r4 = t4; r4 >= 4096; )
                  e4 += 12, r4 /= 4096;
                for (; r4 >= 2; )
                  e4 += 1, r4 /= 2;
                return e4;
              }(s2 * y(2, 69, 1)) - 69) < 0 ? s2 * y(2, -e3, 1) : s2 / y(2, e3, 1), r3 *= 4503599627370496, (e3 = 52 - e3) > 0) {
                for (m(h2, 0, r3), n3 = l2; n3 >= 7; )
                  m(h2, 1e7, 0), n3 -= 7;
                for (m(h2, y(10, n3, 1), 0), n3 = e3 - 1; n3 >= 23; )
                  v(h2, 1 << 23), n3 -= 23;
                v(h2, 1 << n3), m(h2, 1, 1), v(h2, 2), g = b(h2);
              } else
                m(h2, 0, r3), m(h2, 1 << -e3, 0), g = b(h2) + p("0", l2);
            return l2 > 0 ? f2 + ((i2 = g.length) <= l2 ? "0." + p("0", l2 - i2) + g : d(g, 0, i2 - l2) + "." + d(g, i2 - l2)) : f2 + g;
          } });
        }, 9085: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4213);
          n2({ target: "Object", stat: true, arity: 2, forced: Object.assign !== i }, { assign: i });
        }, 9904: (t2, e2, r2) => {
          r2(6518)({ target: "Object", stat: true, sham: !r2(3724) }, { create: r2(2360) });
        }, 7945: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3724), o = r2(6801).f;
          n2({ target: "Object", stat: true, forced: Object.defineProperties !== o, sham: !i }, { defineProperties: o });
        }, 4185: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3724), o = r2(4913).f;
          n2({ target: "Object", stat: true, forced: Object.defineProperty !== o, sham: !i }, { defineProperty: o });
        }, 5506: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(2357).entries;
          n2({ target: "Object", stat: true }, { entries: function(t3) {
            return i(t3);
          } });
        }, 3851: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9039), o = r2(5397), a = r2(7347).f, s = r2(3724);
          n2({ target: "Object", stat: true, forced: !s || i(function() {
            a(1);
          }), sham: !s }, { getOwnPropertyDescriptor: function(t3, e3) {
            return a(o(t3), e3);
          } });
        }, 1278: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3724), o = r2(5031), a = r2(5397), s = r2(7347), l = r2(4659);
          n2({ target: "Object", stat: true, sham: !i }, { getOwnPropertyDescriptors: function(t3) {
            for (var e3, r3, n3 = a(t3), i2 = s.f, c = o(n3), u = {}, h = 0; c.length > h; )
              (r3 = i2(n3, e3 = c[h++])) !== void 0 && l(u, e3, r3);
            return u;
          } });
        }, 9773: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4495), o = r2(9039), a = r2(3717), s = r2(8981);
          n2({ target: "Object", stat: true, forced: !i || o(function() {
            a.f(1);
          }) }, { getOwnPropertySymbols: function(t3) {
            var e3 = a.f;
            return e3 ? e3(s(t3)) : [];
          } });
        }, 875: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9039), o = r2(8981), a = r2(2787), s = r2(2211);
          n2({ target: "Object", stat: true, forced: i(function() {
            a(1);
          }), sham: !s }, { getPrototypeOf: function(t3) {
            return a(o(t3));
          } });
        }, 9432: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(8981), o = r2(1072);
          n2({ target: "Object", stat: true, forced: r2(9039)(function() {
            o(1);
          }) }, { keys: function(t3) {
            return o(i(t3));
          } });
        }, 287: (t2, e2, r2) => {
          r2(6518)({ target: "Object", stat: true }, { setPrototypeOf: r2(2967) });
        }, 6099: (t2, e2, r2) => {
          var n2 = r2(2140), i = r2(6840), o = r2(3179);
          n2 || i(Object.prototype, "toString", o, { unsafe: true });
        }, 6034: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(2357).values;
          n2({ target: "Object", stat: true }, { values: function(t3) {
            return i(t3);
          } });
        }, 8459: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3904);
          n2({ global: true, forced: parseFloat !== i }, { parseFloat: i });
        }, 8940: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(2703);
          n2({ global: true, forced: parseInt !== i }, { parseInt: i });
        }, 6499: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9565), o = r2(9306), a = r2(6043), s = r2(1103), l = r2(2652);
          n2({ target: "Promise", stat: true, forced: r2(537) }, { all: function(t3) {
            var e3 = this, r3 = a.f(e3), n3 = r3.resolve, c = r3.reject, u = s(function() {
              var r4 = o(e3.resolve), a2 = [], s2 = 0, u2 = 1;
              l(t3, function(t4) {
                var o2 = s2++, l2 = false;
                u2++, i(r4, e3, t4).then(function(t5) {
                  l2 || (l2 = true, a2[o2] = t5, --u2 || n3(a2));
                }, c);
              }), --u2 || n3(a2);
            });
            return u.error && c(u.value), r3.promise;
          } });
        }, 2003: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(6395), o = r2(916).CONSTRUCTOR, a = r2(550), s = r2(7751), l = r2(4901), c = r2(6840), u = a && a.prototype;
          if (n2({ target: "Promise", proto: true, forced: o, real: true }, { catch: function(t3) {
            return this.then(void 0, t3);
          } }), !i && l(a)) {
            var h = s("Promise").prototype.catch;
            u.catch !== h && c(u, "catch", h, { unsafe: true });
          }
        }, 436: (t2, e2, r2) => {
          var n2, i, o, a = r2(6518), s = r2(6395), l = r2(9088), c = r2(4475), u = r2(9565), h = r2(6840), p = r2(2967), d = r2(687), f = r2(7633), y = r2(9306), m = r2(4901), v = r2(34), b = r2(679), g = r2(2293), w = r2(9225).set, _ = r2(1955), k = r2(3138), j = r2(1103), O = r2(8265), x = r2(1181), C = r2(550), E = r2(916), S = r2(6043), P = "Promise", L = E.CONSTRUCTOR, T = E.REJECTION_EVENT, A = E.SUBCLASSING, R = x.getterFor(P), I = x.set, B = C && C.prototype, N = C, D = B, F = c.TypeError, V = c.document, H = c.process, z = S.f, M = z, q = !!(V && V.createEvent && c.dispatchEvent), U = "unhandledrejection", G = function(t3) {
            var e3;
            return !(!v(t3) || !m(e3 = t3.then)) && e3;
          }, $ = function(t3, e3) {
            var r3, n3, i2, o2 = e3.value, a2 = e3.state === 1, s2 = a2 ? t3.ok : t3.fail, l2 = t3.resolve, c2 = t3.reject, h2 = t3.domain;
            try {
              s2 ? (a2 || (e3.rejection === 2 && Q(e3), e3.rejection = 1), s2 === true ? r3 = o2 : (h2 && h2.enter(), r3 = s2(o2), h2 && (h2.exit(), i2 = true)), r3 === t3.promise ? c2(new F("Promise-chain cycle")) : (n3 = G(r3)) ? u(n3, r3, l2, c2) : l2(r3)) : c2(o2);
            } catch (t4) {
              h2 && !i2 && h2.exit(), c2(t4);
            }
          }, J = function(t3, e3) {
            t3.notified || (t3.notified = true, _(function() {
              for (var r3, n3 = t3.reactions; r3 = n3.get(); )
                $(r3, t3);
              t3.notified = false, e3 && !t3.rejection && Z(t3);
            }));
          }, W = function(t3, e3, r3) {
            var n3, i2;
            q ? ((n3 = V.createEvent("Event")).promise = e3, n3.reason = r3, n3.initEvent(t3, false, true), c.dispatchEvent(n3)) : n3 = { promise: e3, reason: r3 }, !T && (i2 = c["on" + t3]) ? i2(n3) : t3 === U && k("Unhandled promise rejection", r3);
          }, Z = function(t3) {
            u(w, c, function() {
              var e3, r3 = t3.facade, n3 = t3.value;
              if (Y(t3) && (e3 = j(function() {
                l ? H.emit("unhandledRejection", n3, r3) : W(U, r3, n3);
              }), t3.rejection = l || Y(t3) ? 2 : 1, e3.error))
                throw e3.value;
            });
          }, Y = function(t3) {
            return t3.rejection !== 1 && !t3.parent;
          }, Q = function(t3) {
            u(w, c, function() {
              var e3 = t3.facade;
              l ? H.emit("rejectionHandled", e3) : W("rejectionhandled", e3, t3.value);
            });
          }, K = function(t3, e3, r3) {
            return function(n3) {
              t3(e3, n3, r3);
            };
          }, X = function(t3, e3, r3) {
            t3.done || (t3.done = true, r3 && (t3 = r3), t3.value = e3, t3.state = 2, J(t3, true));
          }, tt = function(t3, e3, r3) {
            if (!t3.done) {
              t3.done = true, r3 && (t3 = r3);
              try {
                if (t3.facade === e3)
                  throw new F("Promise can't be resolved itself");
                var n3 = G(e3);
                n3 ? _(function() {
                  var r4 = { done: false };
                  try {
                    u(n3, e3, K(tt, r4, t3), K(X, r4, t3));
                  } catch (e4) {
                    X(r4, e4, t3);
                  }
                }) : (t3.value = e3, t3.state = 1, J(t3, false));
              } catch (e4) {
                X({ done: false }, e4, t3);
              }
            }
          };
          if (L && (D = (N = function(t3) {
            b(this, D), y(t3), u(n2, this);
            var e3 = R(this);
            try {
              t3(K(tt, e3), K(X, e3));
            } catch (t4) {
              X(e3, t4);
            }
          }).prototype, (n2 = function(t3) {
            I(this, { type: P, done: false, notified: false, parent: false, reactions: new O(), rejection: false, state: 0, value: void 0 });
          }).prototype = h(D, "then", function(t3, e3) {
            var r3 = R(this), n3 = z(g(this, N));
            return r3.parent = true, n3.ok = !m(t3) || t3, n3.fail = m(e3) && e3, n3.domain = l ? H.domain : void 0, r3.state === 0 ? r3.reactions.add(n3) : _(function() {
              $(n3, r3);
            }), n3.promise;
          }), i = function() {
            var t3 = new n2(), e3 = R(t3);
            this.promise = t3, this.resolve = K(tt, e3), this.reject = K(X, e3);
          }, S.f = z = function(t3) {
            return t3 === N || t3 === void 0 ? new i(t3) : M(t3);
          }, !s && m(C) && B !== Object.prototype)) {
            o = B.then, A || h(B, "then", function(t3, e3) {
              var r3 = this;
              return new N(function(t4, e4) {
                u(o, r3, t4, e4);
              }).then(t3, e3);
            }, { unsafe: true });
            try {
              delete B.constructor;
            } catch (t3) {
            }
            p && p(B, D);
          }
          a({ global: true, constructor: true, wrap: true, forced: L }, { Promise: N }), d(N, P, false, true), f(P);
        }, 3362: (t2, e2, r2) => {
          r2(436), r2(6499), r2(2003), r2(7743), r2(1481), r2(280);
        }, 7743: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9565), o = r2(9306), a = r2(6043), s = r2(1103), l = r2(2652);
          n2({ target: "Promise", stat: true, forced: r2(537) }, { race: function(t3) {
            var e3 = this, r3 = a.f(e3), n3 = r3.reject, c = s(function() {
              var a2 = o(e3.resolve);
              l(t3, function(t4) {
                i(a2, e3, t4).then(r3.resolve, n3);
              });
            });
            return c.error && n3(c.value), r3.promise;
          } });
        }, 1481: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(6043);
          n2({ target: "Promise", stat: true, forced: r2(916).CONSTRUCTOR }, { reject: function(t3) {
            var e3 = i.f(this);
            return (0, e3.reject)(t3), e3.promise;
          } });
        }, 280: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7751), o = r2(6395), a = r2(550), s = r2(916).CONSTRUCTOR, l = r2(3438), c = i("Promise"), u = o && !s;
          n2({ target: "Promise", stat: true, forced: o || s }, { resolve: function(t3) {
            return l(u && this === c ? a : this, t3);
          } });
        }, 825: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7751), o = r2(8745), a = r2(566), s = r2(5548), l = r2(8551), c = r2(34), u = r2(2360), h = r2(9039), p = i("Reflect", "construct"), d = Object.prototype, f = [].push, y = h(function() {
            function t3() {
            }
            return !(p(function() {
            }, [], t3) instanceof t3);
          }), m = !h(function() {
            p(function() {
            });
          }), v = y || m;
          n2({ target: "Reflect", stat: true, forced: v, sham: v }, { construct: function(t3, e3) {
            s(t3), l(e3);
            var r3 = arguments.length < 3 ? t3 : s(arguments[2]);
            if (m && !y)
              return p(t3, e3, r3);
            if (t3 === r3) {
              switch (e3.length) {
                case 0:
                  return new t3();
                case 1:
                  return new t3(e3[0]);
                case 2:
                  return new t3(e3[0], e3[1]);
                case 3:
                  return new t3(e3[0], e3[1], e3[2]);
                case 4:
                  return new t3(e3[0], e3[1], e3[2], e3[3]);
              }
              var n3 = [null];
              return o(f, n3, e3), new (o(a, t3, n3))();
            }
            var i2 = r3.prototype, h2 = u(c(i2) ? i2 : d), v2 = o(t3, h2, e3);
            return c(v2) ? v2 : h2;
          } });
        }, 888: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9565), o = r2(34), a = r2(8551), s = r2(6575), l = r2(7347), c = r2(2787);
          n2({ target: "Reflect", stat: true }, { get: function t3(e3, r3) {
            var n3, u, h = arguments.length < 3 ? e3 : arguments[2];
            return a(e3) === h ? e3[r3] : (n3 = l.f(e3, r3)) ? s(n3) ? n3.value : n3.get === void 0 ? void 0 : i(n3.get, h) : o(u = c(e3)) ? t3(u, r3, h) : void 0;
          } });
        }, 4864: (t2, e2, r2) => {
          var n2 = r2(3724), i = r2(4475), o = r2(9504), a = r2(2796), s = r2(3167), l = r2(6699), c = r2(2360), u = r2(8480).f, h = r2(1625), p = r2(788), d = r2(655), f = r2(1034), y = r2(8429), m = r2(1056), v = r2(6840), b = r2(9039), g = r2(9297), w = r2(1181).enforce, _ = r2(7633), k = r2(8227), j = r2(3635), O = r2(8814), x = k("match"), C = i.RegExp, E = C.prototype, S = i.SyntaxError, P = o(E.exec), L = o("".charAt), T = o("".replace), A = o("".indexOf), R = o("".slice), I = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, B = /a/g, N = /a/g, D = new C(B) !== B, F = y.MISSED_STICKY, V = y.UNSUPPORTED_Y;
          if (a("RegExp", n2 && (!D || F || j || O || b(function() {
            return N[x] = false, C(B) !== B || C(N) === N || String(C(B, "i")) !== "/a/i";
          })))) {
            for (var H = function(t3, e3) {
              var r3, n3, i2, o2, a2, u2, y2 = h(E, this), m2 = p(t3), v2 = e3 === void 0, b2 = [], _2 = t3;
              if (!y2 && m2 && v2 && t3.constructor === H)
                return t3;
              if ((m2 || h(E, t3)) && (t3 = t3.source, v2 && (e3 = f(_2))), t3 = t3 === void 0 ? "" : d(t3), e3 = e3 === void 0 ? "" : d(e3), _2 = t3, j && "dotAll" in B && (n3 = !!e3 && A(e3, "s") > -1) && (e3 = T(e3, /s/g, "")), r3 = e3, F && "sticky" in B && (i2 = !!e3 && A(e3, "y") > -1) && V && (e3 = T(e3, /y/g, "")), O && (o2 = function(t4) {
                for (var e4, r4 = t4.length, n4 = 0, i3 = "", o3 = [], a3 = c(null), s2 = false, l2 = false, u3 = 0, h2 = ""; n4 <= r4; n4++) {
                  if ((e4 = L(t4, n4)) === "\\")
                    e4 += L(t4, ++n4);
                  else if (e4 === "]")
                    s2 = false;
                  else if (!s2)
                    switch (true) {
                      case e4 === "[":
                        s2 = true;
                        break;
                      case e4 === "(":
                        P(I, R(t4, n4 + 1)) && (n4 += 2, l2 = true), i3 += e4, u3++;
                        continue;
                      case (e4 === ">" && l2):
                        if (h2 === "" || g(a3, h2))
                          throw new S("Invalid capture group name");
                        a3[h2] = true, o3[o3.length] = [h2, u3], l2 = false, h2 = "";
                        continue;
                    }
                  l2 ? h2 += e4 : i3 += e4;
                }
                return [i3, o3];
              }(t3), t3 = o2[0], b2 = o2[1]), a2 = s(C(t3, e3), y2 ? this : E, H), (n3 || i2 || b2.length) && (u2 = w(a2), n3 && (u2.dotAll = true, u2.raw = H(function(t4) {
                for (var e4, r4 = t4.length, n4 = 0, i3 = "", o3 = false; n4 <= r4; n4++)
                  (e4 = L(t4, n4)) !== "\\" ? o3 || e4 !== "." ? (e4 === "[" ? o3 = true : e4 === "]" && (o3 = false), i3 += e4) : i3 += "[\\s\\S]" : i3 += e4 + L(t4, ++n4);
                return i3;
              }(t3), r3)), i2 && (u2.sticky = true), b2.length && (u2.groups = b2)), t3 !== _2)
                try {
                  l(a2, "source", _2 === "" ? "(?:)" : _2);
                } catch (t4) {
                }
              return a2;
            }, z = u(C), M = 0; z.length > M; )
              m(H, C, z[M++]);
            E.constructor = H, H.prototype = E, v(i, "RegExp", H, { constructor: true });
          }
          _("RegExp");
        }, 7495: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7323);
          n2({ target: "RegExp", proto: true, forced: /./.exec !== i }, { exec: i });
        }, 8781: (t2, e2, r2) => {
          var n2 = r2(350).PROPER, i = r2(6840), o = r2(8551), a = r2(655), s = r2(9039), l = r2(1034), c = "toString", u = RegExp.prototype, h = u[c], p = s(function() {
            return h.call({ source: "a", flags: "b" }) !== "/a/b";
          }), d = n2 && h.name !== c;
          (p || d) && i(u, c, function() {
            var t3 = o(this);
            return "/" + a(t3.source) + "/" + a(l(t3));
          }, { unsafe: true });
        }, 1699: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9504), o = r2(5749), a = r2(7750), s = r2(655), l = r2(1436), c = i("".indexOf);
          n2({ target: "String", proto: true, forced: !l("includes") }, { includes: function(t3) {
            return !!~c(s(a(this)), s(o(t3)), arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 7764: (t2, e2, r2) => {
          var n2 = r2(8183).charAt, i = r2(655), o = r2(1181), a = r2(1088), s = r2(2529), l = "String Iterator", c = o.set, u = o.getterFor(l);
          a(String, "String", function(t3) {
            c(this, { type: l, string: i(t3), index: 0 });
          }, function() {
            var t3, e3 = u(this), r3 = e3.string, i2 = e3.index;
            return i2 >= r3.length ? s(void 0, true) : (t3 = n2(r3, i2), e3.index += t3.length, s(t3, false));
          });
        }, 1761: (t2, e2, r2) => {
          var n2 = r2(9565), i = r2(9228), o = r2(8551), a = r2(4117), s = r2(8014), l = r2(655), c = r2(7750), u = r2(5966), h = r2(7829), p = r2(6682);
          i("match", function(t3, e3, r3) {
            return [function(e4) {
              var r4 = c(this), i2 = a(e4) ? void 0 : u(e4, t3);
              return i2 ? n2(i2, e4, r4) : new RegExp(e4)[t3](l(r4));
            }, function(t4) {
              var n3 = o(this), i2 = l(t4), a2 = r3(e3, n3, i2);
              if (a2.done)
                return a2.value;
              if (!n3.global)
                return p(n3, i2);
              var c2 = n3.unicode;
              n3.lastIndex = 0;
              for (var u2, d = [], f = 0; (u2 = p(n3, i2)) !== null; ) {
                var y = l(u2[0]);
                d[f] = y, y === "" && (n3.lastIndex = h(i2, s(n3.lastIndex), c2)), f++;
              }
              return f === 0 ? null : d;
            }];
          });
        }, 5440: (t2, e2, r2) => {
          var n2 = r2(8745), i = r2(9565), o = r2(9504), a = r2(9228), s = r2(9039), l = r2(8551), c = r2(4901), u = r2(4117), h = r2(1291), p = r2(8014), d = r2(655), f = r2(7750), y = r2(7829), m = r2(5966), v = r2(2478), b = r2(6682), g = r2(8227)("replace"), w = Math.max, _ = Math.min, k = o([].concat), j = o([].push), O = o("".indexOf), x = o("".slice), C = "a".replace(/./, "$0") === "$0", E = !!/./[g] && /./[g]("a", "$0") === "";
          a("replace", function(t3, e3, r3) {
            var o2 = E ? "$" : "$0";
            return [function(t4, r4) {
              var n3 = f(this), o3 = u(t4) ? void 0 : m(t4, g);
              return o3 ? i(o3, t4, n3, r4) : i(e3, d(n3), t4, r4);
            }, function(t4, i2) {
              var a2 = l(this), s2 = d(t4);
              if (typeof i2 == "string" && O(i2, o2) === -1 && O(i2, "$<") === -1) {
                var u2 = r3(e3, a2, s2, i2);
                if (u2.done)
                  return u2.value;
              }
              var f2 = c(i2);
              f2 || (i2 = d(i2));
              var m2, g2 = a2.global;
              g2 && (m2 = a2.unicode, a2.lastIndex = 0);
              for (var C2, E2 = []; (C2 = b(a2, s2)) !== null && (j(E2, C2), g2); )
                d(C2[0]) === "" && (a2.lastIndex = y(s2, p(a2.lastIndex), m2));
              for (var S, P = "", L = 0, T = 0; T < E2.length; T++) {
                for (var A, R = d((C2 = E2[T])[0]), I = w(_(h(C2.index), s2.length), 0), B = [], N = 1; N < C2.length; N++)
                  j(B, (S = C2[N]) === void 0 ? S : String(S));
                var D = C2.groups;
                if (f2) {
                  var F = k([R], B, I, s2);
                  D !== void 0 && j(F, D), A = d(n2(i2, void 0, F));
                } else
                  A = v(R, s2, I, B, D, i2);
                I >= L && (P += x(s2, L, I) + A, L = I + R.length);
              }
              return P + x(s2, L);
            }];
          }, !!s(function() {
            var t3 = /./;
            return t3.exec = function() {
              var t4 = [];
              return t4.groups = { a: "7" }, t4;
            }, "".replace(t3, "$<a>") !== "7";
          }) || !C || E);
        }, 1392: (t2, e2, r2) => {
          var n2, i = r2(6518), o = r2(7476), a = r2(7347).f, s = r2(8014), l = r2(655), c = r2(5749), u = r2(7750), h = r2(1436), p = r2(6395), d = o("".slice), f = Math.min, y = h("startsWith");
          i({ target: "String", proto: true, forced: !(!p && !y && (n2 = a(String.prototype, "startsWith"), n2 && !n2.writable) || y) }, { startsWith: function(t3) {
            var e3 = l(u(this));
            c(t3);
            var r3 = s(f(arguments.length > 1 ? arguments[1] : void 0, e3.length)), n3 = l(t3);
            return d(e3, r3, r3 + n3.length) === n3;
          } });
        }, 2762: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3802).trim;
          n2({ target: "String", proto: true, forced: r2(706)("trim") }, { trim: function() {
            return i(this);
          } });
        }, 6412: (t2, e2, r2) => {
          r2(511)("asyncIterator");
        }, 6761: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4475), o = r2(9565), a = r2(9504), s = r2(6395), l = r2(3724), c = r2(4495), u = r2(9039), h = r2(9297), p = r2(1625), d = r2(8551), f = r2(5397), y = r2(6969), m = r2(655), v = r2(6980), b = r2(2360), g = r2(1072), w = r2(8480), _ = r2(298), k = r2(3717), j = r2(7347), O = r2(4913), x = r2(6801), C = r2(8773), E = r2(6840), S = r2(2106), P = r2(5745), L = r2(6119), T = r2(421), A = r2(3392), R = r2(8227), I = r2(1951), B = r2(511), N = r2(8242), D = r2(687), F = r2(1181), V = r2(9213).forEach, H = L("hidden"), z = "Symbol", M = "prototype", q = F.set, U = F.getterFor(z), G = Object[M], $ = i.Symbol, J = $ && $[M], W = i.RangeError, Z = i.TypeError, Y = i.QObject, Q = j.f, K = O.f, X = _.f, tt = C.f, et = a([].push), rt = P("symbols"), nt = P("op-symbols"), it = P("wks"), ot = !Y || !Y[M] || !Y[M].findChild, at = function(t3, e3, r3) {
            var n3 = Q(G, e3);
            n3 && delete G[e3], K(t3, e3, r3), n3 && t3 !== G && K(G, e3, n3);
          }, st = l && u(function() {
            return b(K({}, "a", { get: function() {
              return K(this, "a", { value: 7 }).a;
            } })).a !== 7;
          }) ? at : K, lt = function(t3, e3) {
            var r3 = rt[t3] = b(J);
            return q(r3, { type: z, tag: t3, description: e3 }), l || (r3.description = e3), r3;
          }, ct = function(t3, e3, r3) {
            t3 === G && ct(nt, e3, r3), d(t3);
            var n3 = y(e3);
            return d(r3), h(rt, n3) ? (r3.enumerable ? (h(t3, H) && t3[H][n3] && (t3[H][n3] = false), r3 = b(r3, { enumerable: v(0, false) })) : (h(t3, H) || K(t3, H, v(1, b(null))), t3[H][n3] = true), st(t3, n3, r3)) : K(t3, n3, r3);
          }, ut = function(t3, e3) {
            d(t3);
            var r3 = f(e3), n3 = g(r3).concat(ft(r3));
            return V(n3, function(e4) {
              l && !o(ht, r3, e4) || ct(t3, e4, r3[e4]);
            }), t3;
          }, ht = function(t3) {
            var e3 = y(t3), r3 = o(tt, this, e3);
            return !(this === G && h(rt, e3) && !h(nt, e3)) && (!(r3 || !h(this, e3) || !h(rt, e3) || h(this, H) && this[H][e3]) || r3);
          }, pt = function(t3, e3) {
            var r3 = f(t3), n3 = y(e3);
            if (r3 !== G || !h(rt, n3) || h(nt, n3)) {
              var i2 = Q(r3, n3);
              return !i2 || !h(rt, n3) || h(r3, H) && r3[H][n3] || (i2.enumerable = true), i2;
            }
          }, dt = function(t3) {
            var e3 = X(f(t3)), r3 = [];
            return V(e3, function(t4) {
              h(rt, t4) || h(T, t4) || et(r3, t4);
            }), r3;
          }, ft = function(t3) {
            var e3 = t3 === G, r3 = X(e3 ? nt : f(t3)), n3 = [];
            return V(r3, function(t4) {
              !h(rt, t4) || e3 && !h(G, t4) || et(n3, rt[t4]);
            }), n3;
          };
          c || (E(J = ($ = function() {
            if (p(J, this))
              throw new Z("Symbol is not a constructor");
            var t3 = arguments.length && arguments[0] !== void 0 ? m(arguments[0]) : void 0, e3 = A(t3), r3 = function(t4) {
              var n3 = this === void 0 ? i : this;
              n3 === G && o(r3, nt, t4), h(n3, H) && h(n3[H], e3) && (n3[H][e3] = false);
              var a2 = v(1, t4);
              try {
                st(n3, e3, a2);
              } catch (t5) {
                if (!(t5 instanceof W))
                  throw t5;
                at(n3, e3, a2);
              }
            };
            return l && ot && st(G, e3, { configurable: true, set: r3 }), lt(e3, t3);
          })[M], "toString", function() {
            return U(this).tag;
          }), E($, "withoutSetter", function(t3) {
            return lt(A(t3), t3);
          }), C.f = ht, O.f = ct, x.f = ut, j.f = pt, w.f = _.f = dt, k.f = ft, I.f = function(t3) {
            return lt(R(t3), t3);
          }, l && (S(J, "description", { configurable: true, get: function() {
            return U(this).description;
          } }), s || E(G, "propertyIsEnumerable", ht, { unsafe: true }))), n2({ global: true, constructor: true, wrap: true, forced: !c, sham: !c }, { Symbol: $ }), V(g(it), function(t3) {
            B(t3);
          }), n2({ target: z, stat: true, forced: !c }, { useSetter: function() {
            ot = true;
          }, useSimple: function() {
            ot = false;
          } }), n2({ target: "Object", stat: true, forced: !c, sham: !l }, { create: function(t3, e3) {
            return e3 === void 0 ? b(t3) : ut(b(t3), e3);
          }, defineProperty: ct, defineProperties: ut, getOwnPropertyDescriptor: pt }), n2({ target: "Object", stat: true, forced: !c }, { getOwnPropertyNames: dt }), N(), D($, z), T[H] = true;
        }, 9463: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(3724), o = r2(4475), a = r2(9504), s = r2(9297), l = r2(4901), c = r2(1625), u = r2(655), h = r2(2106), p = r2(7740), d = o.Symbol, f = d && d.prototype;
          if (i && l(d) && (!("description" in f) || d().description !== void 0)) {
            var y = {}, m = function() {
              var t3 = arguments.length < 1 || arguments[0] === void 0 ? void 0 : u(arguments[0]), e3 = c(f, this) ? new d(t3) : t3 === void 0 ? d() : d(t3);
              return t3 === "" && (y[e3] = true), e3;
            };
            p(m, d), m.prototype = f, f.constructor = m;
            var v = String(d("description detection")) === "Symbol(description detection)", b = a(f.valueOf), g = a(f.toString), w = /^Symbol\((.*)\)[^)]+$/, _ = a("".replace), k = a("".slice);
            h(f, "description", { configurable: true, get: function() {
              var t3 = b(this);
              if (s(y, t3))
                return "";
              var e3 = g(t3), r3 = v ? k(e3, 7, -1) : _(e3, w, "$1");
              return r3 === "" ? void 0 : r3;
            } }), n2({ global: true, constructor: true, forced: true }, { Symbol: m });
          }
        }, 1510: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(7751), o = r2(9297), a = r2(655), s = r2(5745), l = r2(1296), c = s("string-to-symbol-registry"), u = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !l }, { for: function(t3) {
            var e3 = a(t3);
            if (o(c, e3))
              return c[e3];
            var r3 = i("Symbol")(e3);
            return c[e3] = r3, u[r3] = e3, r3;
          } });
        }, 2259: (t2, e2, r2) => {
          r2(511)("iterator");
        }, 2675: (t2, e2, r2) => {
          r2(6761), r2(1510), r2(7812), r2(3110), r2(9773);
        }, 7812: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(9297), o = r2(757), a = r2(6823), s = r2(5745), l = r2(1296), c = s("symbol-to-string-registry");
          n2({ target: "Symbol", stat: true, forced: !l }, { keyFor: function(t3) {
            if (!o(t3))
              throw new TypeError(a(t3) + " is not a symbol");
            if (i(c, t3))
              return c[t3];
          } });
        }, 5700: (t2, e2, r2) => {
          var n2 = r2(511), i = r2(8242);
          n2("toPrimitive"), i();
        }, 8125: (t2, e2, r2) => {
          var n2 = r2(7751), i = r2(511), o = r2(687);
          i("toStringTag"), o(n2("Symbol"), "Symbol");
        }, 3500: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(7400), o = r2(9296), a = r2(235), s = r2(6699), l = function(t3) {
            if (t3 && t3.forEach !== a)
              try {
                s(t3, "forEach", a);
              } catch (e3) {
                t3.forEach = a;
              }
          };
          for (var c in i)
            i[c] && l(n2[c] && n2[c].prototype);
          l(o);
        }, 2953: (t2, e2, r2) => {
          var n2 = r2(4475), i = r2(7400), o = r2(9296), a = r2(3792), s = r2(6699), l = r2(687), c = r2(8227)("iterator"), u = a.values, h = function(t3, e3) {
            if (t3) {
              if (t3[c] !== u)
                try {
                  s(t3, c, u);
                } catch (e4) {
                  t3[c] = u;
                }
              if (l(t3, e3, true), i[e3]) {
                for (var r3 in a)
                  if (t3[r3] !== a[r3])
                    try {
                      s(t3, r3, a[r3]);
                    } catch (e4) {
                      t3[r3] = a[r3];
                    }
              }
            }
          };
          for (var p in i)
            h(n2[p] && n2[p].prototype, p);
          h(o, "DOMTokenList");
        }, 5575: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4475), o = r2(9472)(i.setInterval, true);
          n2({ global: true, bind: true, forced: i.setInterval !== o }, { setInterval: o });
        }, 4599: (t2, e2, r2) => {
          var n2 = r2(6518), i = r2(4475), o = r2(9472)(i.setTimeout, true);
          n2({ global: true, bind: true, forced: i.setTimeout !== o }, { setTimeout: o });
        }, 6031: (t2, e2, r2) => {
          r2(5575), r2(4599);
        } }, e = {};
        function r(n2) {
          var i = e[n2];
          if (i !== void 0)
            return i.exports;
          var o = e[n2] = { exports: {} };
          return t[n2].call(o.exports, o, o.exports, r), o.exports;
        }
        r.d = (t2, e2) => {
          for (var n2 in e2)
            r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
        }, r.g = function() {
          if (typeof globalThis == "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t2) {
            if (typeof window == "object")
              return window;
          }
        }(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        };
        var n = {};
        return (() => {
          r.r(n), r.d(n, { JSONEditor: () => Wl }), r(2675), r(9463), r(6412), r(2259), r(5700), r(8125), r(8706), r(113), r(1629), r(3418), r(4346), r(3792), r(2712), r(4490), r(4782), r(739), r(9572), r(3288), r(2010), r(4731), r(479), r(2892), r(9085), r(9904), r(4185), r(875), r(9432), r(287), r(6099), r(6034), r(3362), r(7495), r(8781), r(7764), r(3500), r(2953), r(5506), r(4864), r(5440), r(4423);
          var t2 = ["actionscript", "batchfile", "c", "c++", "cpp", "coffee", "csharp", "css", "dart", "django", "ejs", "erlang", "golang", "groovy", "handlebars", "haskell", "haxe", "html", "ini", "jade", "java", "javascript", "json", "less", "lisp", "lua", "makefile", "matlab", "mysql", "objectivec", "pascal", "perl", "pgsql", "php", "python", "prql", "r", "ruby", "rust", "sass", "scala", "scss", "sh", "smarty", "sql", "sqlserver", "stylus", "svg", "typescript", "twig", "vbscript", "xml", "yaml", "zig"], e2 = [function(t3) {
            return t3.type === "string" && t3.format === "color" && "colorpicker";
          }, function(t3) {
            return t3.type === "string" && ["ip", "ipv4", "ipv6", "hostname"].includes(t3.format) && "ip";
          }, function(e3) {
            return e3.type === "string" && t2.includes(e3.format) && "ace";
          }, function(t3) {
            return t3.type === "string" && ["xhtml", "bbcode"].includes(t3.format) && "sceditor";
          }, function(t3) {
            return t3.type === "string" && t3.format === "markdown" && "simplemde";
          }, function(t3) {
            return t3.type === "string" && t3.format === "jodit" && "jodit";
          }, function(t3) {
            return t3.type === "string" && t3.format === "autocomplete" && "autocomplete";
          }, function(t3) {
            return t3.type === "string" && t3.format === "uuid" && "uuid";
          }, function(t3) {
            return t3.format === "info" && "info";
          }, function(t3) {
            return t3.format === "button" && "button";
          }, function(t3) {
            if ((t3.type === "integer" || t3.type === "number") && t3.format === "stepper")
              return "stepper";
          }, function(t3) {
            if (t3.links) {
              for (var e3 = 0; e3 < t3.links.length; e3++)
                if (t3.links[e3].rel && t3.links[e3].rel.toLowerCase() === "describedby")
                  return "describedBy";
            }
          }, function(t3) {
            return ["string", "integer"].includes(t3.type) && ["starrating", "rating"].includes(t3.format) && "starrating";
          }, function(t3) {
            return ["string", "integer"].includes(t3.type) && ["date", "time", "datetime-local"].includes(t3.format) && "datetime";
          }, function(t3) {
            var e3, r2;
            return (t3.oneOf || t3.anyOf) && ((e3 = (r2 = t3.options) === null || r2 === void 0 ? void 0 : r2.switcher) === null || e3 === void 0 || e3) === true && "multiple";
          }, function(t3) {
            return t3.if && "multiple";
          }, function(t3, e3) {
            if (t3.items && (t3.items = e3.expandSchema(t3.items)), t3.type === "array" && t3.items && !Array.isArray(t3.items) && ["string", "number", "integer"].includes(t3.items.type)) {
              if (t3.format === "choices")
                return "arrayChoices";
              if (t3.uniqueItems) {
                if (t3.format === "selectize")
                  return "arraySelectize";
                if (t3.format === "select2")
                  return "arraySelect2";
                if (t3.items.enum)
                  return "multiselect";
              }
            }
          }, function(t3) {
            if (t3.enum) {
              if (t3.type === "array" || t3.type === "object")
                return "enum";
              if (t3.type === "number" || t3.type === "integer" || t3.type === "string")
                return t3.format === "radio" ? "radio" : t3.format === "select2" ? "select2" : t3.format === "selectize" ? "selectize" : t3.format === "choices" ? "choices" : "select";
            }
          }, function(t3) {
            if (t3.enumSource)
              return t3.format === "radio" ? "radio" : t3.format === "select2" ? "select2" : t3.format === "selectize" ? "selectize" : t3.format === "choices" ? "choices" : "select";
          }, function(t3) {
            return t3.type === "array" && t3.format === "table" && "table";
          }, function(t3) {
            return t3.type === "string" && t3.format === "url" && window.FileReader && t3.options && t3.options.upload === Object(t3.options.upload) && "upload";
          }, function(t3) {
            return t3.type === "string" && t3.media && t3.media.binaryEncoding === "base64" && "base64";
          }, function(t3) {
            return t3.type === "any" && "multiple";
          }, function(t3) {
            if (t3.type === "boolean")
              return t3.format === "checkbox" || t3.options && t3.options.checkbox ? "checkbox" : t3.format === "select2" ? "select2" : t3.format === "selectize" ? "selectize" : t3.format === "choices" ? "choices" : "select";
          }, function(t3) {
            return t3.type === "string" && t3.format === "signature" && "signature";
          }, function(t3) {
            return typeof t3.type == "string" && ["string", "number", "integer", "boolean", "null", "array", "object"].includes(t3.type) && t3.type;
          }, function(t3) {
            return !t3.type && t3.properties && "object";
          }, function(t3) {
            return typeof t3.type != "string" && "multiple";
          }, function(t3) {
            return typeof t3.type == "string" && "string";
          }];
          function i(t3, e3, r2) {
            var n2;
            return n2 = function(t4, e4) {
              if (o(t4) != "object" || !t4)
                return t4;
              var r3 = t4[Symbol.toPrimitive];
              if (r3 !== void 0) {
                var n3 = r3.call(t4, "string");
                if (o(n3) != "object")
                  return n3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(e3), (e3 = o(n2) == "symbol" ? n2 : n2 + "") in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
          }
          function o(t3) {
            return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, o(t3);
          }
          function a(t3) {
            return !(t3 === null || o(t3) !== "object" || t3.nodeType || t3 === t3.window || t3.constructor && !h(t3.constructor.prototype, "isPrototypeOf"));
          }
          function s(t3) {
            return a(t3) ? l({}, t3) : Array.isArray(t3) ? t3.map(s) : t3;
          }
          function l(t3) {
            for (var e3 = arguments.length, r2 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
              r2[n2 - 1] = arguments[n2];
            return r2.forEach(function(e4) {
              e4 && Object.keys(e4).forEach(function(r3) {
                e4[r3] && a(e4[r3]) ? (h(t3, r3) || (t3[r3] = {}), l(t3[r3], e4[r3])) : Array.isArray(e4[r3]) ? t3[r3] = s(e4[r3]) : t3[r3] = e4[r3];
              });
            }), t3;
          }
          function c(t3, e3) {
            var r2 = document.createEvent("HTMLEvents");
            r2.initEvent(e3, true, true), t3.dispatchEvent(r2);
          }
          function u(t3) {
            return t3 && (t3.toString() === "[object ShadowRoot]" ? t3 : u(t3.parentNode));
          }
          function h(t3, e3) {
            return t3 && Object.prototype.hasOwnProperty.call(t3, e3);
          }
          r(4170), r(3851), r(825), r(888), r(8598), r(1699), r(1761), r(5276), r(5086), r(1392), r(2062), r(8459), r(8940);
          var p = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, d = /^\s*(-|\+)?(\d+)\s*$/;
          function f() {
            var t3 = new Date().getTime();
            return typeof performance != "undefined" && typeof performance.now == "function" && (t3 += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
              var r2 = (t3 + 16 * Math.random()) % 16 | 0;
              return t3 = Math.floor(t3 / 16), (e3 === "x" ? r2 : 3 & r2 | 8).toString(16);
            });
          }
          function y(t3) {
            return t3 && o(t3) === "object" && !Array.isArray(t3);
          }
          function m(t3) {
            for (var e3 = arguments.length, r2 = new Array(e3 > 1 ? e3 - 1 : 0), n2 = 1; n2 < e3; n2++)
              r2[n2 - 1] = arguments[n2];
            if (!r2.length)
              return t3;
            var o2 = r2.shift();
            if (y(t3) && y(o2))
              for (var a2 in o2)
                y(o2[a2]) ? (t3[a2] || Object.assign(t3, i({}, a2, {})), m(t3[a2], o2[a2])) : Object.assign(t3, i({}, a2, o2[a2]));
            return m.apply(void 0, [t3].concat(r2));
          }
          function v(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function b(t3) {
            return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, b(t3);
          }
          function g(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, w(n2.key), n2);
            }
          }
          function w(t3) {
            var e3 = function(t4, e4) {
              if (b(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (b(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return b(e3) == "symbol" ? e3 : e3 + "";
          }
          var _ = function() {
            return t3 = function t4(e4, r2) {
              var n2, i2;
              !function(t5, e5) {
                if (!(t5 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t4), this.defaults = r2, this.jsoneditor = e4.jsoneditor, this.theme = this.jsoneditor.theme, this.template_engine = this.jsoneditor.template, this.iconlib = this.jsoneditor.iconlib, this.translate = this.jsoneditor.translate || this.defaults.translate, this.translateProperty = this.jsoneditor.translateProperty || this.defaults.translateProperty, this.original_schema = e4.schema, this.schema = this.jsoneditor.expandSchema(this.original_schema), this.active = true, this.isUiOnly = false, this.options = l({}, this.options || {}, this.schema.options || {}, e4.schema.options || {}, e4), this.enforceConstEnabled = (n2 = this.options.enforce_const) !== null && n2 !== void 0 ? n2 : this.jsoneditor.options.enforce_const, this.formname = this.jsoneditor.options.form_name_root || "root", e4.path || this.schema.id || (this.schema.id = this.formname), this.path = e4.path || this.formname, this.formname = e4.formname || this.path.replace(/\.([^.]+)/g, "[$1]"), this.parent = e4.parent, this.key = this.parent !== void 0 ? this.path.split(".").slice(this.parent.path.split(".").length).join(".") : this.path, this.link_watchers = [], this.watchLoop = false, this.optInWidget = (i2 = this.options.opt_in_widget) !== null && i2 !== void 0 ? i2 : this.jsoneditor.options.opt_in_widget, e4.container && this.setContainer(e4.container), this.registerDependencies();
            }, e3 = [{ key: "onChildEditorChange", value: function(t4, e4) {
              this.onChange(true, false, e4);
            } }, { key: "notify", value: function() {
              this.path && this.jsoneditor.notifyWatchers(this.path);
            } }, { key: "change", value: function(t4) {
              this.parent ? this.parent.onChildEditorChange(this, t4) : this.jsoneditor && this.jsoneditor.onChange(t4);
            } }, { key: "onChange", value: function(t4, e4, r2) {
              this.notify(), e4 || this.watch_listener && this.watch_listener(), t4 && this.change(r2);
            } }, { key: "register", value: function() {
              if (this.jsoneditor.registerEditor(this), this.input && !this.label) {
                var t4 = this.getTitle() || this.formname;
                this.input.setAttribute("aria-label", t4);
              }
              this.onChange();
            } }, { key: "unregister", value: function() {
              this.jsoneditor && this.jsoneditor.unregisterEditor(this);
            } }, { key: "getNumColumns", value: function() {
              return 12;
            } }, { key: "isActive", value: function() {
              return this.active;
            } }, { key: "activate", value: function() {
              this.active = true, this.optInCheckbox.checked = true, this.enable(), this.change();
            } }, { key: "deactivate", value: function() {
              this.isRequired() || (this.active = false, this.optInCheckbox.checked = false, this.disable(), this.change());
            } }, { key: "registerDependencies", value: function() {
              var t4 = this;
              this.dependenciesFulfilled = true;
              var e4 = this.options.dependencies;
              e4 && Object.keys(e4).forEach(function(e5) {
                var r2;
                e5.startsWith(t4.jsoneditor.root.path) ? r2 = e5 : ((r2 = t4.path.split("."))[r2.length - 1] = e5, r2 = r2.join(".")), t4.jsoneditor.watch(r2, function() {
                  t4.evaluateDependencies();
                });
              });
            } }, { key: "evaluateDependencies", value: function() {
              var t4 = this, e4 = this.container || this.control;
              if (e4 && this.jsoneditor !== null) {
                var r2 = this.options.dependencies;
                if (r2) {
                  var n2 = this.dependenciesFulfilled;
                  this.dependenciesFulfilled = true, Object.keys(r2).forEach(function(e5) {
                    var n3;
                    e5.startsWith(t4.jsoneditor.root.path) ? n3 = e5 : ((n3 = t4.path.split("."))[n3.length - 1] = e5, n3 = n3.join("."));
                    var i3 = r2[e5];
                    t4.checkDependency(n3, i3);
                  }), this.dependenciesFulfilled !== n2 && this.notify();
                  var i2 = this.dependenciesFulfilled ? "block" : "none";
                  this.options.hidden && (i2 = "none"), e4.tagName === "TD" ? Object.keys(e4.childNodes).forEach(function(t5) {
                    return e4.childNodes[t5].style.display = i2;
                  }) : e4.style.display = i2;
                }
              }
            } }, { key: "checkDependency", value: function(t4, e4) {
              var r2 = this;
              if (this.path !== t4 && this.jsoneditor !== null) {
                var n2 = this.jsoneditor.getEditor(t4), i2 = n2 ? n2.getValue() : void 0;
                n2 && n2.dependenciesFulfilled && i2 ? Array.isArray(e4) ? this.dependenciesFulfilled = e4.some(function(t5) {
                  if (JSON.stringify(i2) === JSON.stringify(t5))
                    return true;
                }) : b(e4) === "object" ? b(i2) !== "object" ? this.dependenciesFulfilled = e4 === i2 : Object.keys(e4).some(function(t5) {
                  return !!h(e4, t5) && (h(i2, t5) && e4[t5] === i2[t5] ? void 0 : (r2.dependenciesFulfilled = false, true));
                }) : typeof e4 == "string" || typeof e4 == "number" ? this.dependenciesFulfilled = this.dependenciesFulfilled && i2 === e4 : typeof e4 == "boolean" && (this.dependenciesFulfilled = e4 ? this.dependenciesFulfilled && (i2 || i2.length > 0) : this.dependenciesFulfilled && (!i2 || i2.length === 0)) : this.dependenciesFulfilled = false;
              }
            } }, { key: "setContainer", value: function(t4) {
              this.container = t4, this.setContainerAttributes(), this.schema.id && this.container.setAttribute("data-schemaid", this.schema.id), this.schema.type && typeof this.schema.type == "string" && this.container.setAttribute("data-schematype", this.schema.type), this.container.setAttribute("data-schemapath", this.path);
            } }, { key: "setOptInCheckbox", value: function() {
              var t4, e4 = this;
              t4 = this.optInWidget === "switch" ? this.theme.getOptInSwitch(this.formname) : this.theme.getOptInCheckbox(this.formname), this.optInCheckbox = t4.checkbox, this.optInContainer = t4.container, this.optInCheckbox.addEventListener("click", function() {
                e4.isActive() ? e4.deactivate() : e4.activate();
              });
              var r2 = this.jsoneditor.options.show_opt_in, n2 = this.parent.options.show_opt_in !== void 0, i2 = n2 && this.parent.options.show_opt_in === true, o2 = n2 && this.parent.options.show_opt_in === false;
              (i2 || !o2 && r2 || !n2 && r2) && this.parent && this.parent.schema.type === "object" && !this.isRequired() && this.header && (this.header.insertBefore(this.optInContainer, this.header.firstChild), this.optInAppended = true);
            } }, { key: "preBuild", value: function() {
            } }, { key: "build", value: function() {
            } }, { key: "postBuild", value: function() {
              this.setupWatchListeners(), this.addLinks(), this.register(), this.setValue(this.getDefault(), true), this.updateHeaderText(), this.onWatchedFieldChange(), this.options.titleHidden && (this.theme.visuallyHidden(this.label), this.theme.visuallyHidden(this.header)), this.enforceConstEnabled && this.schema.const && this.disable();
            } }, { key: "setupWatchListeners", value: function() {
              var t4 = this;
              if (this.watched = {}, this.schema.vars && (this.schema.watch = this.schema.vars), this.watched_values = {}, this.watch_listener = function() {
                t4.refreshWatchedFieldValues() && t4.onWatchedFieldChange();
              }, h(this.schema, "watch")) {
                var e4, r2, n2, i2, o2, a2 = this.container.getAttribute("data-schemapath");
                Object.keys(this.schema.watch).forEach(function(s2) {
                  if (e4 = t4.schema.watch[s2], Array.isArray(e4)) {
                    if (e4.length < 2)
                      return;
                    r2 = [e4[0]].concat(e4[1].split("."));
                  } else
                    r2 = e4.split("."), t4.theme.closest(t4.container, '[data-schemaid="'.concat(r2[0], '"]')) || r2.unshift("#");
                  if ((n2 = r2.shift()) === "#" && (n2 = t4.jsoneditor.schema.id || t4.jsoneditor.root.formname), !(i2 = t4.theme.closest(t4.container, '[data-schemaid="'.concat(n2, '"]'))))
                    throw new Error("Could not find ancestor node with id ".concat(n2));
                  o2 = "".concat(i2.getAttribute("data-schemapath"), ".").concat(r2.join(".")), a2.startsWith(o2) && (t4.watchLoop = true), t4.jsoneditor.watch(o2, t4.watch_listener), t4.watched[s2] = o2;
                });
              }
              this.schema.headerTemplate && (this.header_template = this.jsoneditor.compileTemplate(this.schema.headerTemplate, this.template_engine));
            } }, { key: "addLinks", value: function() {
              if (!this.no_link_holder && (this.link_holder = this.theme.getLinksHolder(), this.description !== void 0 ? this.description.parentNode.insertBefore(this.link_holder, this.description) : this.container.appendChild(this.link_holder), this.schema.links))
                for (var t4 = 0; t4 < this.schema.links.length; t4++)
                  this.addLink(this.getLink(this.schema.links[t4]));
            } }, { key: "onMove", value: function() {
            } }, { key: "getButton", value: function(t4, e4, r2) {
              var n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [], i2 = "json-editor-btn-".concat(e4);
              e4 = this.iconlib ? this.iconlib.getIcon(e4) : null, t4 = this.translate(t4, n2), r2 = this.translate(r2, n2), !e4 && r2 && (t4 = r2, r2 = null);
              var o2 = this.theme.getButton(t4, e4, r2);
              return o2.classList.add(i2), o2;
            } }, { key: "setButtonText", value: function(t4, e4, r2, n2) {
              var i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
              return r2 = this.iconlib ? this.iconlib.getIcon(r2) : null, e4 = this.translate(e4, i2), n2 = this.translate(n2, i2), !r2 && n2 && (e4 = n2, n2 = null), this.theme.setButtonText(t4, e4, r2, n2);
            } }, { key: "addLink", value: function(t4) {
              this.link_holder && this.link_holder.appendChild(t4);
            } }, { key: "getLink", value: function(t4) {
              var e4, r2, n2 = (t4.mediaType || "application/javascript").split("/")[0], i2 = this.jsoneditor.compileTemplate(t4.href, this.template_engine), o2 = this.jsoneditor.compileTemplate(t4.rel ? t4.rel : t4.href, this.template_engine), a2 = null;
              if (t4.download && (a2 = t4.download), a2 && a2 !== true && (a2 = this.jsoneditor.compileTemplate(a2, this.template_engine)), n2 === "image") {
                e4 = this.theme.getBlockLinkHolder(), (r2 = document.createElement("a")).setAttribute("target", "_blank");
                var s2 = document.createElement("img");
                this.theme.createImageLink(e4, r2, s2), this.link_watchers.push(function(t5) {
                  var e5 = i2(t5), n3 = o2(t5);
                  r2.setAttribute("href", e5), r2.setAttribute("title", n3 || e5), s2.setAttribute("src", e5);
                });
              } else if (["audio", "video"].includes(n2)) {
                e4 = this.theme.getBlockLinkHolder(), (r2 = this.theme.getBlockLink()).setAttribute("target", "_blank");
                var l2 = document.createElement(n2);
                l2.setAttribute("controls", "controls"), this.theme.createMediaLink(e4, r2, l2), this.link_watchers.push(function(t5) {
                  var e5 = i2(t5), n3 = o2(t5);
                  r2.setAttribute("href", e5), r2.textContent = n3 || e5, l2.setAttribute("src", e5);
                });
              } else
                r2 = e4 = this.theme.getBlockLink(), e4.setAttribute("target", "_blank"), e4.textContent = t4.rel, e4.style.display = "none", this.link_watchers.push(function(t5) {
                  var r3 = i2(t5), n3 = o2(t5);
                  r3 && (e4.style.display = ""), e4.setAttribute("href", r3), e4.textContent = n3 || r3;
                });
              return a2 && r2 && (a2 === true ? r2.setAttribute("download", "") : this.link_watchers.push(function(t5) {
                r2.setAttribute("download", a2(t5));
              })), t4.class && t4.class.split(" ").forEach(function(t5) {
                r2.classList.add(t5);
              }), e4;
            } }, { key: "refreshWatchedFieldValues", value: function() {
              var t4 = this;
              if (this.watched_values) {
                var e4 = {}, r2 = false;
                return this.watched && Object.keys(this.watched).forEach(function(n2) {
                  var i2 = t4.jsoneditor.getEditor(t4.watched[n2]), o2 = i2 ? i2.getValue() : null;
                  t4.watched_values[n2] !== o2 && (r2 = true), e4[n2] = o2;
                }), e4.self = this.getValue(), this.watched_values.self !== e4.self && (r2 = true), this.watched_values = e4, r2;
              }
            } }, { key: "getWatchedFieldValues", value: function() {
              return this.watched_values;
            } }, { key: "updateHeaderText", value: function() {
              if (this.header) {
                var t4 = this.getHeaderText();
                if (this.header.children.length) {
                  for (var e4 = 0; e4 < this.header.childNodes.length; e4++)
                    if (this.header.childNodes[e4].nodeType === 3) {
                      this.header.childNodes[e4].nodeValue = this.cleanText(t4);
                      break;
                    }
                } else
                  window.DOMPurify ? this.header.innerHTML = window.DOMPurify.sanitize(t4) : this.header.textContent = this.cleanText(t4);
              }
            } }, { key: "getHeaderText", value: function(t4) {
              return this.header_text ? this.header_text : t4 ? this.translateProperty(this.schema.title) : this.getTitle();
            } }, { key: "getPathDepth", value: function() {
              return this.path.split(".").length;
            } }, { key: "cleanText", value: function(t4) {
              var e4 = document.createElement("div");
              return e4.innerHTML = t4, e4.textContent || e4.innerText;
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4, e4 = this;
              if (this.header_template) {
                t4 = l(this.getWatchedFieldValues(), { key: this.key, i: this.key, i0: 1 * this.key, i1: 1 * this.key + 1, title: this.getTitle() }), this.editors && Object.keys(this.editors).length && (t4.properties = {}, Object.keys(this.editors).forEach(function(r3) {
                  var n3 = e4.editors[r3];
                  if (n3.schema && n3.schema.enum && n3.schema.options && n3.schema.options.enum_titles) {
                    var i2 = n3.schema.enum.indexOf(n3.value), o2 = n3.options.enum_titles[i2];
                    t4.properties[r3] = { enumTitle: o2 };
                  }
                }));
                var r2 = this.header_template(t4);
                r2 !== this.header_text && (this.header_text = r2, this.updateHeaderText(), this.notify());
              }
              if (this.link_watchers.length) {
                t4 = this.getWatchedFieldValues();
                for (var n2 = 0; n2 < this.link_watchers.length; n2++)
                  this.link_watchers[n2](t4);
              }
            } }, { key: "setValue", value: function(t4) {
              t4 = this.applyConstFilter(t4), this.value = t4;
            } }, { key: "applyConstFilter", value: function(t4) {
              return this.enforceConstEnabled && this.schema.const !== void 0 && (t4 = this.schema.const), t4;
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return this.value;
            } }, { key: "refreshValue", value: function() {
            } }, { key: "getChildEditors", value: function() {
              return false;
            } }, { key: "destroy", value: function() {
              var t4 = this;
              this.unregister(this), this.watched && Object.values(this.watched).forEach(function(e4) {
                return t4.jsoneditor.unwatch(e4, t4.watch_listener);
              }), this.watched = null, this.watched_values = null, this.watch_listener = null, this.header_text = null, this.header_template = null, this.value = null, this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), this.container = null, this.jsoneditor = null, this.schema = null, this.path = null, this.key = null, this.parent = null;
            } }, { key: "isDefaultRequired", value: function() {
              return this.isRequired() || !!this.jsoneditor.options.use_default_values;
            } }, { key: "getDefault", value: function() {
              if (this.enforceConstEnabled && this.schema.const)
                return this.schema.const;
              if (this.schema.default !== void 0)
                return this.schema.default;
              if (this.schema.enum !== void 0)
                return this.schema.enum[0];
              var t4 = this.schema.type || this.schema.oneOf;
              if (t4 && Array.isArray(t4) && (t4 = t4[0]), t4 && b(t4) === "object" && (t4 = t4.type), t4 && Array.isArray(t4) && (t4 = t4[0]), typeof t4 == "string") {
                if (t4 === "number")
                  return this.isDefaultRequired() ? 0 : void 0;
                if (t4 === "boolean")
                  return !this.isDefaultRequired() && void 0;
                if (t4 === "integer")
                  return this.isDefaultRequired() ? 0 : void 0;
                if (t4 === "string")
                  return this.isDefaultRequired() ? "" : void 0;
                if (t4 === "null")
                  return null;
                if (t4 === "object")
                  return {};
                if (t4 === "array")
                  return [];
              }
            } }, { key: "getTitle", value: function() {
              return this.translateProperty(this.schema.title || this.key || this.formname);
            } }, { key: "enable", value: function() {
              this.disabled = false;
            } }, { key: "disable", value: function() {
              this.disabled = true;
            } }, { key: "isEnabled", value: function() {
              return !this.disabled;
            } }, { key: "isRequired", value: function() {
              return typeof this.schema.required == "boolean" ? this.schema.required : this.parent && this.parent.schema && Array.isArray(this.parent.schema.required) ? this.parent.schema.required.includes(this.key) : !!this.jsoneditor.options.required_by_default;
            } }, { key: "getDisplayText", value: function(t4) {
              var e4 = [], r2 = {};
              t4.forEach(function(t5) {
                t5.title && (r2[t5.title] = r2[t5.title] || 0, r2[t5.title]++), t5.description && (r2[t5.description] = r2[t5.description] || 0, r2[t5.description]++), t5.format && (r2[t5.format] = r2[t5.format] || 0, r2[t5.format]++), t5.type && (r2[t5.type] = r2[t5.type] || 0, r2[t5.type]++);
              }), t4.forEach(function(t5) {
                var n3;
                n3 = typeof t5 == "string" ? t5 : t5.title && r2[t5.title] <= 1 ? t5.title : t5.format && r2[t5.format] <= 1 ? t5.format : t5.type && r2[t5.type] <= 1 ? t5.type : t5.description && r2[t5.description] <= 1 ? t5.description : t5.title ? t5.title : t5.format ? t5.format : t5.type ? t5.type : t5.description ? t5.description : JSON.stringify(t5).length < 500 ? JSON.stringify(t5) : "type", e4.push(n3);
              });
              var n2 = {};
              return e4.forEach(function(t5, i2) {
                n2[t5] = n2[t5] || 0, n2[t5]++, r2[t5] > 1 && (e4[i2] = "".concat(t5, " ").concat(n2[t5]));
              }), e4;
            } }, { key: "getValidId", value: function(t4) {
              return (t4 = t4 === void 0 ? "" : t4.toString()).replace(/\s+/g, "-");
            } }, { key: "setInputAttributes", value: function(t4, e4) {
              if (this.schema.options && this.schema.options.inputAttributes) {
                var r2 = this.schema.options.inputAttributes, n2 = ["name", "type"].concat(t4), i2 = e4 || this.input;
                Object.keys(r2).forEach(function(t5) {
                  n2.includes(t5.toLowerCase()) || i2.setAttribute(t5, r2[t5]);
                });
              }
            } }, { key: "setContainerAttributes", value: function() {
              var t4 = this;
              if (this.schema.options && this.schema.options.containerAttributes) {
                var e4 = this.schema.options.containerAttributes, r2 = ["data-schemapath", "data-schematype", "data-schemaid"];
                Object.keys(e4).forEach(function(n2) {
                  r2.includes(n2.toLowerCase()) || t4.container.setAttribute(n2, e4[n2]);
                });
              }
            } }, { key: "expandCallbacks", value: function(t4, e4) {
              var r2 = this, n2 = this.defaults.callbacks[t4];
              return Object.entries(e4).forEach(function(i2) {
                var o2, a2, s2 = (a2 = 2, function(t5) {
                  if (Array.isArray(t5))
                    return t5;
                }(o2 = i2) || function(t5, e5) {
                  var r3 = t5 == null ? null : typeof Symbol != "undefined" && t5[Symbol.iterator] || t5["@@iterator"];
                  if (r3 != null) {
                    var n3, i3, o3, a3, s3 = [], l3 = true, c3 = false;
                    try {
                      if (o3 = (r3 = r3.call(t5)).next, e5 === 0) {
                        if (Object(r3) !== r3)
                          return;
                        l3 = false;
                      } else
                        for (; !(l3 = (n3 = o3.call(r3)).done) && (s3.push(n3.value), s3.length !== e5); l3 = true)
                          ;
                    } catch (t6) {
                      c3 = true, i3 = t6;
                    } finally {
                      try {
                        if (!l3 && r3.return != null && (a3 = r3.return(), Object(a3) !== a3))
                          return;
                      } finally {
                        if (c3)
                          throw i3;
                      }
                    }
                    return s3;
                  }
                }(o2, a2) || function(t5, e5) {
                  if (t5) {
                    if (typeof t5 == "string")
                      return v(t5, e5);
                    var r3 = Object.prototype.toString.call(t5).slice(8, -1);
                    return r3 === "Object" && t5.constructor && (r3 = t5.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t5) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? v(t5, e5) : void 0;
                  }
                }(o2, a2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()), l2 = s2[0], c2 = s2[1];
                c2 === Object(c2) ? e4[l2] = r2.expandCallbacks(t4, c2) : typeof c2 == "string" && b(n2) === "object" && typeof n2[c2] == "function" && (e4[l2] = n2[c2].bind(null, r2));
              }), e4;
            } }, { key: "showValidationErrors", value: function(t4) {
            } }], e3 && g(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
            var t3, e3;
          }();
          function k(t3) {
            return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, k(t3);
          }
          function j(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, O(n2.key), n2);
            }
          }
          function O(t3) {
            var e3 = function(t4, e4) {
              if (k(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (k(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return k(e3) == "symbol" ? e3 : e3 + "";
          }
          function x(t3, e3, r2) {
            return e3 = S(e3), function(t4, e4) {
              if (e4 && (k(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, C() ? Reflect.construct(e3, r2 || [], S(t3).constructor) : e3.apply(t3, r2));
          }
          function C() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (C = function() {
              return !!t3;
            })();
          }
          function E() {
            return E = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = S(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, E.apply(this, arguments);
          }
          function S(t3) {
            return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, S(t3);
          }
          function P(t3, e3) {
            return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, P(t3, e3);
          }
          var L = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), x(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && P(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "register", value: function() {
              E(S(e3.prototype), "register", this).call(this), this.input && this.jsoneditor.options.use_name_attributes && this.input.setAttribute("name", this.formname);
            } }, { key: "unregister", value: function() {
              E(S(e3.prototype), "unregister", this).call(this), this.input && (this.input.removeAttribute("name"), this.input.removeAttribute("aria-label"));
            } }, { key: "setValue", value: function(t4, e4, r3) {
              if (t4 = this.applyConstFilter(t4), (!this.template || r3) && (this.shouldBeUnset() || t4 != null ? k(t4) === "object" ? t4 = JSON.stringify(t4) : this.shouldBeUnset() || typeof t4 == "string" || (t4 = "".concat(t4)) : t4 = "", t4 !== this.serialized)) {
                var n3 = this.sanitize(t4);
                if (this.input.value !== n3) {
                  if (this.setValueToInputField(n3), this.format === "range") {
                    var i2 = this.control.querySelector("output");
                    i2 && (i2.value = n3);
                  }
                  var o2 = r3 || this.getValue() !== t4;
                  return this.refreshValue(), e4 ? this.is_dirty = false : this.jsoneditor.options.show_errors === "change" && (this.is_dirty = true), this.adjust_height && this.adjust_height(this.input), o2 && this.onChange(true, r3), { changed: o2, value: n3 };
                }
              }
            } }, { key: "setValueToInputField", value: function(t4) {
              this.input.value = t4 === void 0 ? "" : t4;
            } }, { key: "getNumColumns", value: function() {
              var t4, e4 = Math.ceil(Math.max(this.getTitle().length, this.schema.maxLength || 0, this.schema.minLength || 0) / 5);
              return t4 = this.input_type === "textarea" ? 6 : ["text", "email"].includes(this.input_type) ? 4 : 2, Math.min(12, Math.max(e4, t4));
            } }, { key: "build", value: function() {
              var t4, e4 = this;
              if (this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.format = this.schema.format, !this.format && this.schema.media && this.schema.media.type && (this.format = this.schema.media.type.replace(/(^(application|text)\/(x-)?(script\.)?)|(-source$)/g, "")), !this.format && this.options.default_format && (this.format = this.options.default_format), this.options.format && (this.format = this.options.format), this.format)
                if (this.format === "textarea")
                  this.input_type = "textarea", this.input = this.theme.getTextareaInput();
                else if (this.format === "range") {
                  this.input_type = "range";
                  var r3 = this.schema.minimum || 0, n3 = this.schema.maximum || Math.max(100, r3 + 1), i2 = 1;
                  this.schema.multipleOf && (r3 % this.schema.multipleOf && (r3 = Math.ceil(r3 / this.schema.multipleOf) * this.schema.multipleOf), n3 % this.schema.multipleOf && (n3 = Math.floor(n3 / this.schema.multipleOf) * this.schema.multipleOf), i2 = this.schema.multipleOf), this.input = this.theme.getRangeInput(r3, n3, i2, this.description, this.formname), this.input.setAttribute("id", this.formname);
                } else
                  this.input_type = "text", ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "reset", "search", "submit", "tel", "text", "time", "url", "week"].includes(this.format) && (this.input_type = this.format), this.input = this.theme.getFormInputField(this.input_type);
              else
                this.input_type = "text", this.input = this.theme.getFormInputField(this.input_type);
              this.schema.maxLength !== void 0 && this.input.setAttribute("maxlength", this.schema.maxLength), this.schema.pattern !== void 0 ? this.input.setAttribute("pattern", this.schema.pattern) : this.schema.minLength !== void 0 && this.input.setAttribute("pattern", ".{".concat(this.schema.minLength, ",}")), this.options.compact ? this.container.classList.add("compact") : this.options.input_width && (this.input.style.width = this.options.input_width), (this.schema.readOnly || this.schema.readonly || this.schema.template) && (this.disable(true), this.input.setAttribute("readonly", "true")), this.setInputAttributes(["maxlength", "pattern", "readonly", "min", "max", "step"]), this.input.addEventListener("change", function(t5) {
                if (t5.preventDefault(), t5.stopPropagation(), e4.schema.template)
                  t5.currentTarget.value = e4.value;
                else {
                  var r4 = t5.currentTarget.value, n4 = e4.sanitize(r4);
                  r4 !== n4 && (t5.currentTarget.value = n4), e4.is_dirty = true, e4.refreshValue(), e4.onChange(true);
                }
              }), this.options.input_height && (this.input.style.height = this.options.input_height), this.options.expand_height && (this.adjust_height = function(t5) {
                if (t5) {
                  var e5, r4 = t5.offsetHeight;
                  if (t5.offsetHeight < t5.scrollHeight)
                    for (e5 = 0; t5.offsetHeight < t5.scrollHeight + 3 && !(e5 > 100); )
                      e5++, r4++, t5.style.height = "".concat(r4, "px");
                  else {
                    for (e5 = 0; t5.offsetHeight >= t5.scrollHeight + 3 && !(e5 > 100); )
                      e5++, r4--, t5.style.height = "".concat(r4, "px");
                    t5.style.height = "".concat(r4 + 1, "px");
                  }
                }
              }, this.input.addEventListener("keyup", function(t5) {
                e4.adjust_height(t5.currentTarget);
              }), this.input.addEventListener("change", function(t5) {
                e4.adjust_height(t5.currentTarget);
              }), this.adjust_height());
              var o2 = (t4 = this.options.prompt_paste_max_length_reached) !== null && t4 !== void 0 ? t4 : this.jsoneditor.options.prompt_paste_max_length_reached, a2 = this.schema.maxLength !== void 0;
              o2 && a2 && this.input.addEventListener("paste", function(t5) {
                (t5.clipboardData || window.clipboardData).getData("text").length + e4.input.value.length > e4.schema.maxLength && alert(e4.translate("paste_max_length_reached", [e4.schema.maxLength]));
              }), this.format && this.input.setAttribute("data-schemaformat", this.format);
              var s2 = this.input;
              if (this.format === "range" && (s2 = this.theme.getRangeControl(this.input, this.theme.getRangeOutput(this.input, this.schema.default || Math.max(this.schema.minimum || 0, 0)))), this.control = this.theme.getFormControl(this.label, s2, this.description, this.infoButton, this.formname), this.container.appendChild(this.control), window.requestAnimationFrame(function() {
                e4.input.parentNode && e4.afterInputReady(), e4.adjust_height && e4.adjust_height(e4.input), e4.format === "range" && (e4.control.querySelector("output").value = e4.input.value);
              }), this.schema.template) {
                var l2 = this.expandCallbacks("template", { template: this.schema.template });
                typeof l2.template == "function" ? this.template = l2.template : this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine), this.refreshValue();
              } else
                this.refreshValue();
            } }, { key: "setupCleave", value: function(t4) {
              var e4 = this.expandCallbacks("cleave", l({}, this.defaults.options.cleave || {}, this.options.cleave || {}));
              k(e4) === "object" && Object.keys(e4).length > 0 && (this.cleave_instance = new window.Cleave(t4, e4));
            } }, { key: "setupImask", value: function(t4) {
              var e4 = this.expandCallbacks("imask", l({}, this.defaults.options.imask || {}, this.options.imask || {}));
              k(e4) === "object" && Object.keys(e4).length > 0 && (this.imask_instance = window.IMask(t4, this.ajustIMaskOptions(e4)));
            } }, { key: "ajustIMaskOptions", value: function(t4) {
              var e4 = this;
              return Object.keys(t4).forEach(function(r3) {
                if (t4[r3] === Object(t4[r3]))
                  t4[r3] = e4.ajustIMaskOptions(t4[r3]);
                else if (r3 === "mask")
                  if (t4[r3].substr(0, 6) === "regex:") {
                    var n3 = t4[r3].match(/^regex:\/(.*)\/([gimsuy]*)$/);
                    if (n3 !== null)
                      try {
                        t4[r3] = new RegExp(n3[1], n3[2]);
                      } catch (t5) {
                      }
                  } else
                    t4[r3] = e4.getGlobalPropertyFromString(t4[r3]);
              }), t4;
            } }, { key: "getGlobalPropertyFromString", value: function(t4) {
              if (t4.includes(".")) {
                var e4 = t4.split("."), r3 = e4[0], n3 = e4[1];
                if (window[r3] !== void 0 && window[r3][n3] !== void 0)
                  return window[r3][n3];
              } else if (window[t4] !== void 0)
                return window[t4];
              return t4;
            } }, { key: "shouldBeUnset", value: function() {
              return !this.jsoneditor.options.use_default_values && !this.is_dirty;
            } }, { key: "getValue", value: function() {
              var t4 = !(!this.input || !this.input.value);
              if (!this.shouldBeUnset() || t4)
                return this.imask_instance && this.dependenciesFulfilled && this.options.imask.returnUnmasked ? this.imask_instance.unmaskedValue : E(S(e3.prototype), "getValue", this).call(this);
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.input.disabled = false, E(S(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.input.disabled = true, E(S(e3.prototype), "disable", this).call(this);
            } }, { key: "afterInputReady", value: function() {
              this.theme.afterInputReady(this.input), window.Cleave && !this.cleave_instance ? this.setupCleave(this.input) : window.IMask && !this.imask_instance && this.setupImask(this.input);
            } }, { key: "refreshValue", value: function() {
              this.input && (this.value = this.input.value, typeof this.value == "string" || this.shouldBeUnset() || (this.value = ""), this.serialized = this.value);
            } }, { key: "destroy", value: function() {
              this.cleave_instance && this.cleave_instance.destroy(), this.imask_instance && this.imask_instance.destroy(), this.template = null, this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), E(S(e3.prototype), "destroy", this).call(this);
            } }, { key: "sanitize", value: function(t4) {
              return t4;
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4;
              this.template && (t4 = this.getWatchedFieldValues(), this.setValue(this.template(t4), false, true)), E(S(e3.prototype), "onWatchedFieldChange", this).call(this);
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this;
              if (this.jsoneditor.options.show_errors === "always")
                ;
              else if (!this.is_dirty && this.previous_error_setting === this.jsoneditor.options.show_errors)
                return;
              this.previous_error_setting = this.jsoneditor.options.show_errors;
              var r3 = t4.reduce(function(t5, r4) {
                return r4.path === e4.path && t5.push(r4.message), t5;
              }, []);
              r3.length ? this.theme.addInputError(this.input, "".concat(r3.join(". "), ".")) : this.theme.removeInputError(this.input);
            } }]) && j(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function T(t3) {
            return T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, T(t3);
          }
          function A(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, R(n2.key), n2);
            }
          }
          function R(t3) {
            var e3 = function(t4, e4) {
              if (T(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (T(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return T(e3) == "symbol" ? e3 : e3 + "";
          }
          function I(t3, e3, r2) {
            return e3 = D(e3), function(t4, e4) {
              if (e4 && (T(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, B() ? Reflect.construct(e3, r2 || [], D(t3).constructor) : e3.apply(t3, r2));
          }
          function B() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (B = function() {
              return !!t3;
            })();
          }
          function N() {
            return N = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = D(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, N.apply(this, arguments);
          }
          function D(t3) {
            return D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, D(t3);
          }
          function F(t3, e3) {
            return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, F(t3, e3);
          }
          var V = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), I(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && F(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4);
              var i2 = N(D(e3.prototype), "setValue", this).call(this, t4, r3, n3);
              i2 !== void 0 && i2.changed && this.ace_editor_instance && (this.ace_editor_instance.setValue(i2.value), this.ace_editor_instance.session.getSelection().clearSelection(), this.ace_editor_instance.resize());
            } }, { key: "build", value: function() {
              this.options.format = "textarea", N(D(e3.prototype), "build", this).call(this), this.input_type = this.schema.format, this.input.setAttribute("data-schemaformat", this.input_type);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              if (window.ace) {
                var n3 = this.input_type;
                n3 !== "cpp" && n3 !== "c++" && n3 !== "c" || (n3 = "c_cpp"), t4 = this.expandCallbacks("ace", l({}, { selectionStyle: "text", minLines: 30, maxLines: 30 }, this.defaults.options.ace || {}, this.options.ace || {}, { mode: "ace/mode/".concat(n3) })), this.ace_container = document.createElement("div"), this.ace_container.style.width = "100%", this.ace_container.style.position = "relative", this.input.parentNode.insertBefore(this.ace_container, this.input), this.input.style.display = "none", this.ace_editor_instance = window.ace.edit(this.ace_container, t4), this.ace_editor_instance.setValue(this.getValue()), this.ace_editor_instance.session.getSelection().clearSelection(), this.ace_editor_instance.resize(), (this.schema.readOnly || this.schema.readonly || this.schema.template) && this.ace_editor_instance.setReadOnly(true), this.ace_editor_instance.on("change", function() {
                  r3.input.value = r3.ace_editor_instance.getValue(), r3.refreshValue(), r3.is_dirty = true, r3.onChange(true);
                }), this.theme.afterInputReady(this.input);
              } else
                N(D(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 6;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.ace_editor_instance && this.ace_editor_instance.setReadOnly(false), N(D(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.ace_editor_instance && this.ace_editor_instance.setReadOnly(true), N(D(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.ace_editor_instance && (this.ace_editor_instance.destroy(), this.ace_editor_instance = null), N(D(e3.prototype), "destroy", this).call(this);
            } }]) && A(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function H(t3) {
            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, H(t3);
          }
          function z(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, M(n2.key), n2);
            }
          }
          function M(t3) {
            var e3 = function(t4, e4) {
              if (H(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (H(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return H(e3) == "symbol" ? e3 : e3 + "";
          }
          function q(t3, e3, r2) {
            return e3 = $(e3), function(t4, e4) {
              if (e4 && (H(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, U() ? Reflect.construct(e3, r2 || [], $(t3).constructor) : e3.apply(t3, r2));
          }
          function U() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (U = function() {
              return !!t3;
            })();
          }
          function G() {
            return G = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = $(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, G.apply(this, arguments);
          }
          function $(t3) {
            return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, $(t3);
          }
          function J(t3, e3) {
            return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, J(t3, e3);
          }
          r(2008), r(4554);
          var W = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), q(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && J(t4, e4);
            }(e3, t3), r2 = e3, n2 = [{ key: "askConfirmation", value: function() {
              return this.jsoneditor.options.prompt_before_delete !== true || window.confirm(this.translate("button_delete_node_warning")) !== false;
            } }, { key: "register", value: function() {
              G($(e3.prototype), "register", this).call(this), this.rows && this.rows.forEach(function(t4) {
                return t4.register();
              });
            } }, { key: "unregister", value: function() {
              G($(e3.prototype), "unregister", this).call(this), this.rows && this.rows.forEach(function(t4) {
                return t4.unregister();
              });
            } }, { key: "getNumColumns", value: function() {
              var t4 = this.getItemInfo(0);
              return this.tabs_holder && this.schema.format !== "tabs-top" ? Math.max(Math.min(12, t4.width + 2), 4) : t4.width;
            } }, { key: "enable", value: function() {
              var t4 = this;
              this.always_disabled || (this.setAvailability(this, false), this.rows && this.rows.forEach(function(e4) {
                e4.enable(), t4.setAvailability(e4, false);
              }), G($(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              var r3 = this;
              t4 && (this.always_disabled = true), this.setAvailability(this, true), this.rows && this.rows.forEach(function(e4) {
                e4.disable(t4), r3.setAvailability(e4, true);
              }), G($(e3.prototype), "disable", this).call(this);
            } }, { key: "setAvailability", value: function(t4, e4) {
              t4.add_row_button && (t4.add_row_button.disabled = e4), t4.remove_all_rows_button && (t4.remove_all_rows_button.disabled = e4), t4.delete_last_row_button && (t4.delete_last_row_button.disabled = e4), t4.copy_button && (t4.copy_button.disabled = e4), t4.delete_button && (t4.delete_button.disabled = e4), t4.moveup_button && (t4.moveup_button.disabled = e4), t4.movedown_button && (t4.movedown_button.disabled = e4);
            } }, { key: "preBuild", value: function() {
              G($(e3.prototype), "preBuild", this).call(this), this.rows = [], this.row_cache = [], this.hide_delete_buttons = this.options.disable_array_delete || this.jsoneditor.options.disable_array_delete, this.hide_delete_all_rows_buttons = this.hide_delete_buttons || this.options.disable_array_delete_all_rows || this.jsoneditor.options.disable_array_delete_all_rows, this.hide_delete_last_row_buttons = this.hide_delete_buttons || this.options.disable_array_delete_last_row || this.jsoneditor.options.disable_array_delete_last_row, this.hide_move_buttons = this.options.disable_array_reorder || this.jsoneditor.options.disable_array_reorder, this.hide_add_button = this.options.disable_array_add || this.jsoneditor.options.disable_array_add, this.show_copy_button = this.options.enable_array_copy || this.jsoneditor.options.enable_array_copy, this.array_controls_top = this.options.array_controls_top || this.jsoneditor.options.array_controls_top;
            } }, { key: "build", value: function() {
              this.options.compact ? (this.title = this.theme.getHeader("", this.getPathDepth()), this.container.appendChild(this.title), this.panel = this.theme.getIndentedPanel(), this.container.appendChild(this.panel), this.title_controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.title_controls), this.controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.controls), this.row_holder = document.createElement("div"), this.panel.appendChild(this.row_holder)) : (this.header = document.createElement("span"), this.header.textContent = this.getTitle(), this.title = this.theme.getHeader(this.header, this.getPathDepth()), this.container.appendChild(this.title), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText)), this.container.appendChild(this.infoButton)), this.title_controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.title_controls), this.schema.description && (this.description = this.theme.getDescription(this.translateProperty(this.schema.description)), this.container.appendChild(this.description)), this.error_holder = document.createElement("div"), this.container.appendChild(this.error_holder), this.schema.format === "tabs-top" ? (this.controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.controls), this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.getItemTitle())), this.container.appendChild(this.tabs_holder), this.row_holder = this.theme.getTopTabContentHolder(this.tabs_holder), this.active_tab = null) : this.schema.format === "tabs" ? (this.controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.controls), this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.getItemTitle())), this.container.appendChild(this.tabs_holder), this.row_holder = this.theme.getTabContentHolder(this.tabs_holder), this.active_tab = null) : (this.panel = this.theme.getIndentedPanel(), this.container.appendChild(this.panel), this.row_holder = document.createElement("div"), this.panel.appendChild(this.row_holder), this.controls = this.theme.getButtonHolder(), this.array_controls_top ? this.title.appendChild(this.controls) : this.panel.appendChild(this.controls))), this.addControls();
            } }, { key: "postBuild", value: function() {
              G($(e3.prototype), "postBuild", this).call(this), (this.schema.readOnly || this.schema.readonly) && this.disable();
            } }, { key: "onChildEditorChange", value: function(t4, r3) {
              this.refreshValue(), this.refreshTabs(true), this.is_dirty = true, G($(e3.prototype), "onChildEditorChange", this).call(this, t4, r3);
            } }, { key: "getItemTitle", value: function() {
              if (!this.item_title)
                if (this.schema.items && !Array.isArray(this.schema.items)) {
                  var t4 = this.jsoneditor.expandRefs(this.schema.items);
                  this.item_title = this.translateProperty(t4.title) || this.translate("default_array_item_title");
                } else
                  this.item_title = this.translate("default_array_item_title");
              return this.cleanText(this.item_title);
            } }, { key: "getItemSchema", value: function(t4) {
              return Array.isArray(this.schema.items) ? t4 >= this.schema.items.length ? this.schema.additionalItems === true ? {} : this.schema.additionalItems ? l({}, this.schema.additionalItems) : void 0 : l({}, this.schema.items[t4]) : this.schema.items ? l({}, this.schema.items) : {};
            } }, { key: "getItemInfo", value: function(t4) {
              var e4 = this.getItemSchema(t4);
              this.item_info = this.item_info || {};
              var r3 = JSON.stringify(e4);
              return this.item_info[r3] !== void 0 || (e4 = this.jsoneditor.expandRefs(e4), this.item_info[r3] = { title: this.translateProperty(e4.title) || this.translate("default_array_item_title"), default: e4.default, width: 12, child_editors: e4.properties || e4.items }), this.item_info[r3];
            } }, { key: "getElementEditor", value: function(t4) {
              var e4 = this.getItemInfo(t4), r3 = this.getItemSchema(t4);
              (r3 = this.jsoneditor.expandRefs(r3)).title = "".concat(e4.title, " ").concat(t4 + 1);
              var n3, i2 = this.jsoneditor.getEditorClass(r3);
              this.tabs_holder ? (n3 = this.schema.format === "tabs-top" ? this.theme.getTopTabContent() : this.theme.getTabContent()).id = "".concat(this.path, ".").concat(t4) : n3 = e4.child_editors ? this.theme.getChildEditorHolder() : this.theme.getIndentedPanel(), this.row_holder.appendChild(n3);
              var o2 = this.jsoneditor.createEditor(i2, { jsoneditor: this.jsoneditor, schema: r3, container: n3, path: "".concat(this.path, ".").concat(t4), parent: this, required: true });
              return o2.preBuild(), o2.build(), o2.postBuild(), o2.title_controls || (o2.array_controls = this.theme.getButtonHolder(), n3.appendChild(o2.array_controls)), o2;
            } }, { key: "checkParent", value: function(t4) {
              return t4 && t4.parentNode;
            } }, { key: "destroy", value: function() {
              this.empty(true), this.checkParent(this.title) && this.title.parentNode.removeChild(this.title), this.checkParent(this.description) && this.description.parentNode.removeChild(this.description), this.checkParent(this.row_holder) && this.row_holder.parentNode.removeChild(this.row_holder), this.checkParent(this.controls) && this.controls.parentNode.removeChild(this.controls), this.checkParent(this.panel) && this.panel.parentNode.removeChild(this.panel), this.rows = this.row_cache = this.title = this.description = this.row_holder = this.panel = this.controls = null, G($(e3.prototype), "destroy", this).call(this);
            } }, { key: "empty", value: function(t4) {
              var e4 = this;
              if (this.rows !== null) {
                if (this.rows.forEach(function(r4, n3) {
                  t4 && (e4.checkParent(r4.tab) && r4.tab.parentNode.removeChild(r4.tab), e4.destroyRow(r4, true), e4.row_cache[n3] = null), e4.rows[n3] = null;
                }), t4)
                  for (var r3 = this.rows.length; r3 < this.row_cache.length; r3++)
                    this.destroyRow(this.row_cache[r3], true), this.row_cache[r3] = null;
                this.rows = [], t4 && (this.row_cache = []);
              }
            } }, { key: "destroyRow", value: function(t4, e4) {
              var r3 = t4.container;
              e4 ? (t4.destroy(), r3.parentNode && r3.parentNode.removeChild(r3), this.checkParent(t4.tab) && t4.tab.parentNode.removeChild(t4.tab)) : (t4.tab && (t4.tab.style.display = "none"), r3.style.display = "none", t4.unregister());
            } }, { key: "getMax", value: function() {
              return Array.isArray(this.schema.items) && this.schema.additionalItems === false ? Math.min(this.schema.items.length, this.schema.maxItems || 1 / 0) : this.schema.maxItems || 1 / 0;
            } }, { key: "refreshTabs", value: function(t4) {
              var e4 = this;
              this.rows.forEach(function(r3) {
                r3.tab && (t4 ? r3.tab_text.textContent = r3.getHeaderText() : r3.tab === e4.active_tab ? e4.theme.markTabActive(r3) : e4.theme.markTabInactive(r3));
              });
            } }, { key: "ensureArraySize", value: function(t4) {
              if (Array.isArray(t4) || (t4 = [t4]), this.schema.minItems)
                for (; t4.length < this.schema.minItems; )
                  t4.push(this.getItemInfo(t4.length).default);
              return this.getMax() && t4.length > this.getMax() && (t4 = t4.slice(0, this.getMax())), t4;
            } }, { key: "setValue", value: function() {
              var t4 = this, e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r3 = arguments.length > 1 ? arguments[1] : void 0;
              if (e4 = this.applyConstFilter(e4), e4 = this.ensureArraySize(e4), JSON.stringify(e4) !== this.serialized) {
                e4.forEach(function(e5, n4) {
                  if (t4.rows[n4])
                    t4.rows[n4].setValue(e5, r3);
                  else if (t4.row_cache[n4])
                    t4.rows[n4] = t4.row_cache[n4], t4.rows[n4].setValue(e5, r3), t4.rows[n4].container.style.display = "", t4.rows[n4].tab && (t4.rows[n4].tab.style.display = ""), t4.rows[n4].register(), t4.jsoneditor.trigger("addRow", t4.rows[n4]);
                  else {
                    var i3 = t4.addRow(e5, r3);
                    t4.jsoneditor.trigger("addRow", i3);
                  }
                });
                for (var n3 = e4.length; n3 < this.rows.length; n3++)
                  this.destroyRow(this.rows[n3]), this.rows[n3] = null;
                this.rows = this.rows.slice(0, e4.length);
                var i2 = this.rows.find(function(e5) {
                  return e5.tab === t4.active_tab;
                }), o2 = i2 !== void 0 ? i2.tab : null;
                !o2 && this.rows.length && (o2 = this.rows[0].tab), this.active_tab = o2, this.refreshValue(r3), this.refreshTabs(true), this.refreshTabs(), this.onChange();
              } else
                r3 && this.refreshValue(r3);
            } }, { key: "setButtonState", value: function(t4, e4) {
              switch (this.options.button_state_mode || this.jsoneditor.options.button_state_mode) {
                case 1:
                default:
                  t4.style.display = e4 ? "" : "none";
                  break;
                case 2:
                  t4.disabled = !e4;
              }
            } }, { key: "setupButtons", value: function(t4) {
              var e4 = [];
              if (this.value.length)
                if (this.value.length === 1) {
                  this.setButtonState(this.remove_all_rows_button, false);
                  var r3 = !(t4 || this.hide_delete_last_row_buttons);
                  this.setButtonState(this.delete_last_row_button, r3), e4.push(r3);
                } else {
                  var n3 = !(t4 || this.hide_delete_last_row_buttons);
                  this.setButtonState(this.delete_last_row_button, n3), e4.push(n3);
                  var i2 = !(t4 || this.hide_delete_all_rows_buttons);
                  this.setButtonState(this.remove_all_rows_button, i2), e4.push(i2);
                }
              else
                this.setButtonState(this.delete_last_row_button, false), this.setButtonState(this.remove_all_rows_button, false);
              var o2 = !(this.getMax() && this.getMax() <= this.rows.length || this.hide_add_button);
              return this.setButtonState(this.add_row_button, o2), e4.push(o2), e4.some(function(t5) {
                return t5;
              });
            } }, { key: "refreshValue", value: function(t4) {
              var e4 = this, r3 = this.value ? this.value.length : 0;
              if (this.value = this.rows.map(function(t5) {
                return t5.getValue();
              }), r3 !== this.value.length || t4) {
                var n3 = this.schema.minItems && this.schema.minItems >= this.rows.length;
                this.rows.forEach(function(t5, r4) {
                  if (t5.movedown_button) {
                    var i2 = r4 !== e4.rows.length - 1;
                    e4.setButtonState(t5.movedown_button, i2);
                  }
                  t5.delete_button && e4.setButtonState(t5.delete_button, !n3), e4.value[r4] = t5.getValue();
                }), this.setupButtons(n3) && !this.collapsed ? this.controls.style.display = "inline-block" : this.controls.style.display = "none";
              }
              this.serialized = JSON.stringify(this.value);
            } }, { key: "addRow", value: function(t4, e4) {
              var r3 = this, n3 = this.rows.length;
              this.rows[n3] = this.getElementEditor(n3), this.row_cache[n3] = this.rows[n3], this.tabs_holder ? (this.rows[n3].tab_text = document.createElement("span"), this.rows[n3].tab_text.textContent = this.rows[n3].getHeaderText(), this.schema.format === "tabs-top" ? (this.rows[n3].tab = this.theme.getTopTab(this.rows[n3].tab_text, this.getValidId(this.rows[n3].path)), this.theme.addTopTab(this.tabs_holder, this.rows[n3].tab)) : (this.rows[n3].tab = this.theme.getTab(this.rows[n3].tab_text, this.getValidId(this.rows[n3].path)), this.theme.addTab(this.tabs_holder, this.rows[n3].tab)), this.rows[n3].tab.addEventListener("click", function(t5) {
                r3.active_tab = r3.rows[n3].tab, r3.refreshTabs(), t5.preventDefault(), t5.stopPropagation();
              }), this._supportDragDrop(this.rows[n3].tab)) : this._supportDragDrop(this.rows[n3].container, true);
              var i2 = this.rows[n3].title_controls || this.rows[n3].array_controls;
              return this.hide_delete_buttons || (this.rows[n3].delete_button = this._createDeleteButton(n3, i2)), this.show_copy_button && (this.rows[n3].copy_button = this._createCopyButton(n3, i2)), n3 && !this.hide_move_buttons && (this.rows[n3].moveup_button = this._createMoveUpButton(n3, i2)), this.hide_move_buttons || (this.rows[n3].movedown_button = this._createMoveDownButton(n3, i2)), t4 !== void 0 && this.rows[n3].setValue(t4, e4), this.refreshTabs(), this.rows[n3];
            } }, { key: "_createDeleteButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton(this.getItemTitle(), "delete", "button_delete_row_title", [this.getItemTitle()]);
              return n3.classList.add("delete", "json-editor-btntype-delete"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                if (t5.preventDefault(), t5.stopPropagation(), !r3.askConfirmation())
                  return false;
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue().filter(function(t6, r4) {
                  return r4 !== e5;
                }), i2 = null, o2 = r3.rows[e5].getValue();
                r3.setValue(n4), r3.rows[e5] ? i2 = r3.rows[e5].tab : r3.rows[e5 - 1] && (i2 = r3.rows[e5 - 1].tab), i2 && (r3.active_tab = i2, r3.refreshTabs()), r3.onChange(true), r3.jsoneditor.trigger("deleteRow", o2);
              }), e4 && e4.appendChild(n3), n3;
            } }, { key: "_createCopyButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton(this.getItemTitle(), "copy", "button_copy_row_title", [this.getItemTitle()]), i2 = this.schema;
              return n3.classList.add("copy", "json-editor-btntype-copy"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                var e5 = r3.getValue();
                t5.preventDefault(), t5.stopPropagation();
                var n4 = 1 * t5.currentTarget.getAttribute("data-i");
                e5.forEach(function(t6, r4) {
                  if (r4 === n4) {
                    if (i2.items.type === "string" && i2.items.format === "uuid")
                      t6 = f();
                    else if (i2.items.type === "object" && i2.items.properties)
                      for (var o2 = 0, a2 = Object.keys(t6); o2 < a2.length; o2++) {
                        var s2 = a2[o2];
                        i2.items.properties && i2.items.properties[s2] && i2.items.properties[s2].format === "uuid" && (t6[s2] = f());
                      }
                    e5.push(t6);
                  }
                }), r3.setValue(e5), r3.refreshValue(true), r3.onChange(true), r3.jsoneditor.trigger("copyRow", r3.rows[n4 - 1]);
              }), e4.appendChild(n3), n3;
            } }, { key: "_createMoveUpButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", this.schema.format === "tabs-top" ? "moveleft" : "moveup", "button_move_up_title");
              return n3.classList.add("moveup", "json-editor-btntype-move"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                t5.preventDefault(), t5.stopPropagation();
                var e5 = 1 * t5.currentTarget.getAttribute("data-i");
                if (!(e5 <= 0)) {
                  var n4 = r3.getValue(), i2 = n4[e5 - 1];
                  n4[e5 - 1] = n4[e5], n4[e5] = i2, r3.setValue(n4), r3.active_tab = r3.rows[e5 - 1].tab, r3.refreshTabs(), r3.onChange(true), r3.jsoneditor.trigger("moveRow", r3.rows[e5 - 1]);
                }
              }), e4 && e4.appendChild(n3), n3;
            } }, { key: "_createMoveDownButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", this.schema.format === "tabs-top" ? "moveright" : "movedown", "button_move_down_title");
              return n3.classList.add("movedown", "json-editor-btntype-move"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                t5.preventDefault(), t5.stopPropagation();
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue();
                if (!(e5 >= n4.length - 1)) {
                  var i2 = n4[e5 + 1];
                  n4[e5 + 1] = n4[e5], n4[e5] = i2, r3.setValue(n4), r3.active_tab = r3.rows[e5 + 1].tab, r3.refreshTabs(), r3.onChange(true), r3.jsoneditor.trigger("moveRow", r3.rows[e5 + 1]);
                }
              }), e4 && e4.appendChild(n3), n3;
            } }, { key: "_supportDragDrop", value: function(t4, e4) {
              var r3 = this;
              Z(t4, function(t5, e5) {
                var n3 = r3.getValue(), i2 = n3[t5];
                n3.splice(t5, 1), n3.splice(e5, 0, i2), r3.setValue(n3), r3.active_tab = r3.rows[e5].tab, r3.refreshTabs(), r3.onChange(true), r3.jsoneditor.trigger("moveRow", r3.rows[e5]);
              }, { useTrigger: e4 });
            } }, { key: "addControls", value: function() {
              this.collapsed = false, this.toggle_button = this._createToggleButton(), this.options.collapsed && c(this.toggle_button, "click"), this.schema.options && this.schema.options.disable_collapse !== void 0 ? this.schema.options.disable_collapse && (this.toggle_button.style.display = "none") : this.jsoneditor.options.disable_collapse && (this.toggle_button.style.display = "none"), this.add_row_button = this._createAddRowButton(), this.delete_last_row_button = this._createDeleteLastRowButton(), this.remove_all_rows_button = this._createRemoveAllRowsButton(), this.tabs && (this.add_row_button.classList.add("je-array-control-btn"), this.delete_last_row_button.classList.add("je-array-control-btn"), this.remove_all_rows_button.classList.add("je-array-control-btn"));
            } }, { key: "_createToggleButton", value: function() {
              var t4 = this, e4 = this.getButton("", "collapse", "button_collapse");
              e4.classList.add("json-editor-btntype-toggle"), this.title.insertBefore(e4, this.title.childNodes[0]);
              var r3 = this.row_holder.style.display, n3 = this.controls.style.display;
              return e4.addEventListener("click", function(e5) {
                e5.preventDefault(), e5.stopPropagation(), t4.panel && t4.setButtonState(t4.panel, t4.collapsed), t4.tabs_holder && t4.setButtonState(t4.tabs_holder, t4.collapsed), t4.collapsed ? (t4.collapsed = false, t4.row_holder.style.display = r3, t4.controls.style.display = n3, t4.setButtonText(e5.currentTarget, "", "collapse", "button_collapse")) : (t4.collapsed = true, t4.row_holder.style.display = "none", t4.controls.style.display = "none", t4.setButtonText(e5.currentTarget, "", "expand", "button_expand"));
              }), e4;
            } }, { key: "_createAddRowButton", value: function() {
              var t4 = this, e4 = this.getButton(this.getItemTitle(), "add", "button_add_row_title", [this.getItemTitle()]);
              return e4.classList.add("json-editor-btntype-add"), e4.addEventListener("click", function(e5) {
                e5.preventDefault(), e5.stopPropagation();
                var r3, n3 = t4.rows.length;
                t4.row_cache[n3] ? (r3 = t4.rows[n3] = t4.row_cache[n3], t4.rows[n3].setValue(t4.rows[n3].getDefault(), true), typeof t4.rows[n3].deactivateNonRequiredProperties == "function" && t4.rows[n3].deactivateNonRequiredProperties(true), t4.rows[n3].container.style.display = "", t4.rows[n3].tab && (t4.rows[n3].tab.style.display = ""), t4.rows[n3].register()) : r3 = t4.addRow(), t4.active_tab = t4.rows[n3].tab, t4.refreshTabs(), t4.refreshValue(), t4.onChange(true), t4.jsoneditor.trigger("addRow", r3);
              }), this.controls.appendChild(e4), e4;
            } }, { key: "_createDeleteLastRowButton", value: function() {
              var t4 = this, e4 = this.getButton("button_delete_last", "subtract", "button_delete_last_title", [this.getItemTitle()]);
              return e4.classList.add("json-editor-btntype-deletelast"), e4.addEventListener("click", function(e5) {
                if (e5.preventDefault(), e5.stopPropagation(), !t4.askConfirmation())
                  return false;
                var r3 = t4.getValue(), n3 = null, i2 = r3.pop();
                t4.setValue(r3), t4.rows[t4.rows.length - 1] && (n3 = t4.rows[t4.rows.length - 1].tab), n3 && (t4.active_tab = n3, t4.refreshTabs()), t4.onChange(true), t4.jsoneditor.trigger("deleteRow", i2);
              }), this.controls.appendChild(e4), e4;
            } }, { key: "_createRemoveAllRowsButton", value: function() {
              var t4 = this, e4 = this.getButton("button_delete_all", "delete", "button_delete_all_title");
              return e4.classList.add("json-editor-btntype-deleteall"), e4.addEventListener("click", function(e5) {
                if (e5.preventDefault(), e5.stopPropagation(), !t4.askConfirmation())
                  return false;
                var r3 = t4.getValue();
                t4.empty(true), t4.setValue([]), t4.onChange(true), t4.jsoneditor.trigger("deleteAllRows", r3);
              }), this.controls.appendChild(e4), e4;
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this, r3 = [], n3 = [];
              t4.forEach(function(t5) {
                t5.path === e4.path ? r3.push(t5) : n3.push(t5);
              }), this.error_holder && (r3.length ? (this.error_holder.innerHTML = "", this.error_holder.style.display = "", r3.forEach(function(t5) {
                e4.error_holder.appendChild(e4.theme.getErrorMessage(t5.message));
              })) : this.error_holder.style.display = "none"), this.rows.forEach(function(t5) {
                return t5.showValidationErrors(n3);
              });
            } }], n2 && z(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function Z(t3, e3) {
            (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).useTrigger ? t3.addEventListener("mousedown", function(e4) {
              if (e4.ctrlKey) {
                t3.draggable = true;
                var r2 = function e5(r3) {
                  t3.draggable = false, document.removeEventListener("dragend", e5), document.removeEventListener("mouseup", e5);
                };
                document.addEventListener("dragend", r2), document.addEventListener("mouseup", r2);
              }
            }) : t3.draggable = true, t3.addEventListener("dragstart", function(e4) {
              window.curDrag = t3;
            }), t3.addEventListener("dragover", function(e4) {
              window.curDrag === null || window.curDrag === t3 || window.curDrag.parentElement !== t3.parentElement ? e4.dataTransfer.dropEffect = "none" : e4.dataTransfer.dropEffect = "move", e4.preventDefault();
            }), t3.addEventListener("drop", function(r2) {
              if (r2.preventDefault(), r2.stopPropagation(), window.curDrag !== null && window.curDrag !== t3 && window.curDrag.parentElement === t3.parentElement) {
                var n2 = function(t4) {
                  for (var e4 = 0, r3 = t4.parentElement.firstElementChild; r3 !== t4 && r3 !== null; )
                    r3 = r3.nextSibling, ++e4;
                  return e4;
                }, i2 = n2(window.curDrag), o2 = n2(t3);
                e3(i2, o2, window.curDrag, t3), window.curDrag = null;
              }
            });
          }
          function Y(t3) {
            return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Y(t3);
          }
          function Q(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, K(n2.key), n2);
            }
          }
          function K(t3) {
            var e3 = function(t4, e4) {
              if (Y(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Y(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Y(e3) == "symbol" ? e3 : e3 + "";
          }
          function X(t3, e3, r2) {
            return e3 = rt(e3), function(t4, e4) {
              if (e4 && (Y(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, tt() ? Reflect.construct(e3, r2 || [], rt(t3).constructor) : e3.apply(t3, r2));
          }
          function tt() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (tt = function() {
              return !!t3;
            })();
          }
          function et() {
            return et = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = rt(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, et.apply(this, arguments);
          }
          function rt(t3) {
            return rt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, rt(t3);
          }
          function nt(t3, e3) {
            return nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, nt(t3, e3);
          }
          W.rules = { ".json-editor-btntype-toggle": "margin:0%2010px%200%200", ".je-array-control-btn": "width:100%25;text-align:left;margin-bottom:3px" };
          var it = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), X(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && nt(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "onInputChange", value: function() {
              this.value = this.input.value, this.onChange(true);
            } }, { key: "register", value: function() {
              et(rt(e3.prototype), "register", this).call(this), this.input && this.jsoneditor.options.use_name_attributes && this.input.setAttribute("name", this.formname);
            } }, { key: "unregister", value: function() {
              et(rt(e3.prototype), "unregister", this).call(this), this.input && this.input.removeAttribute("name");
            } }, { key: "getNumColumns", value: function() {
              var t4 = this, e4 = this.getTitle().length;
              return Object.keys(this.select_values).forEach(function(r3) {
                return e4 = Math.max(e4, "".concat(t4.select_values[r3]).length + 4);
              }), Math.min(12, Math.max(e4 / 7, 2));
            } }, { key: "preBuild", value: function() {
              var t4;
              et(rt(e3.prototype), "preBuild", this).call(this), this.select_options = {}, this.select_values = {}, this.option_titles = [], this.option_keys = [], this.option_enum = [];
              var r3 = this.jsoneditor.expandRefs(this.schema.items || {}), n3 = r3.enum || [], i2 = r3.options && r3.options.enum || [], o2 = r3.options && r3.options.enum_titles || [];
              for (t4 = 0; t4 < n3.length; t4++)
                if (this.sanitize(n3[t4]) === n3[t4]) {
                  var a2 = i2[t4] || {};
                  "title" in a2 || (a2.title = "".concat(o2[t4] || n3[t4])), this.option_keys.push("".concat(n3[t4])), this.option_enum.push(a2), this.select_values["".concat(n3[t4])] = n3[t4];
                }
            } }, { key: "build", value: function() {
              var t4, e4 = this;
              if (this.options.compact || (this.header = this.label = this.theme.getLabelLike(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.compact && this.container.classList.add("compact"), !this.schema.format && this.option_keys.length < 8 || this.schema.format === "checkbox") {
                for (this.input_type = "checkboxes", this.inputs = {}, this.controls = {}, t4 = 0; t4 < this.option_keys.length; t4++) {
                  var r3 = this.formname + t4.toString();
                  this.inputs[this.option_keys[t4]] = this.theme.getCheckbox(), this.inputs[this.option_keys[t4]].id = r3, this.select_options[this.option_keys[t4]] = this.inputs[this.option_keys[t4]];
                  var n3 = this.theme.getCheckboxLabel(this.option_enum[t4].title);
                  if (n3.htmlFor = r3, this.option_enum[t4].infoText) {
                    var i2 = this.theme.getInfoButton(this.translateProperty(this.option_enum[t4].infoText));
                    n3.appendChild(i2);
                  }
                  this.controls["_" + this.option_keys[t4]] = this.theme.getFormControl(n3, this.inputs[this.option_keys[t4]]);
                }
                this.control = this.theme.getMultiCheckboxHolder(this.controls, this.label, this.description, this.infoButton), this.inputs.controlgroup = this.inputs.controls = this.control;
              } else {
                for (this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.input_type = "select", this.input = this.theme.getSelectInput(this.option_keys, true), this.theme.setSelectOptions(this.input, this.option_keys, this.option_enum.map(function(t5) {
                  return t5.title;
                })), this.input.setAttribute("multiple", "multiple"), this.input.size = Math.min(10, this.option_keys.length), t4 = 0; t4 < this.option_keys.length; t4++)
                  this.select_options[this.option_keys[t4]] = this.input.children[t4];
                this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton, this.formname);
              }
              (this.schema.readOnly || this.schema.readonly) && this.disable(true), this.container.appendChild(this.control), this.multiselectChangeHandler = function(r4) {
                var n4 = [];
                for (t4 = 0; t4 < e4.option_keys.length; t4++)
                  e4.select_options[e4.option_keys[t4]] && (e4.select_options[e4.option_keys[t4]].selected || e4.select_options[e4.option_keys[t4]].checked) && n4.push(e4.select_values[e4.option_keys[t4]]);
                e4.updateValue(n4), e4.onChange(true);
              }, this.control.addEventListener("change", this.multiselectChangeHandler, false), window.requestAnimationFrame(function() {
                e4.afterInputReady();
              });
            } }, { key: "postBuild", value: function() {
              et(rt(e3.prototype), "postBuild", this).call(this);
            } }, { key: "afterInputReady", value: function() {
              this.theme.afterInputReady(this.input || this.inputs);
            } }, { key: "setValue", value: function(t4, e4) {
              var r3 = this;
              t4 = (t4 = this.applyConstFilter(t4)) || [], Array.isArray(t4) || (t4 = [t4]), t4 = t4.map(function(t5) {
                return "".concat(t5);
              }), Object.keys(this.select_options).forEach(function(e5) {
                r3.select_options[e5][r3.input_type === "select" ? "selected" : "checked"] = t4.includes(e5);
              }), this.updateValue(t4), this.onChange(true);
            } }, { key: "removeValue", value: function(t4) {
              t4 = [].concat(t4), this.setValue(this.getValue().filter(function(e4) {
                return !t4.includes(e4);
              }));
            } }, { key: "addValue", value: function(t4) {
              this.setValue(this.getValue().concat(t4));
            } }, { key: "updateValue", value: function(t4) {
              for (var e4 = false, r3 = [], n3 = 0; n3 < t4.length; n3++)
                if (this.select_options["".concat(t4[n3])]) {
                  var i2 = this.sanitize(this.select_values[t4[n3]]);
                  r3.push(i2), i2 !== t4[n3] && (e4 = true);
                } else
                  e4 = true;
              return this.value = r3, e4;
            } }, { key: "sanitize", value: function(t4) {
              return this.schema.items.type === "boolean" ? !!t4 : this.schema.items.type === "number" ? 1 * t4 || 0 : this.schema.items.type === "integer" ? Math.floor(1 * t4 || 0) : "".concat(t4);
            } }, { key: "enable", value: function() {
              var t4 = this;
              this.always_disabled || (this.input ? this.input.disabled = false : this.inputs && Object.keys(this.inputs).forEach(function(e4) {
                return t4.inputs[e4].disabled = false;
              }), et(rt(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              var r3 = this;
              t4 && (this.always_disabled = true), this.input ? this.input.disabled = true : this.inputs && Object.keys(this.inputs).forEach(function(t5) {
                return r3.inputs[t5].disabled = true;
              }), et(rt(e3.prototype), "disable", this).call(this);
            } }, { key: "destroy", value: function() {
              et(rt(e3.prototype), "destroy", this).call(this);
            } }, { key: "escapeRegExp", value: function(t4) {
              return t4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = new RegExp("^".concat(this.escapeRegExp(this.path), "(\\.\\d+)?$")), r3 = t4.reduce(function(t5, r4) {
                return r4.path.match(e4) && t5.push(r4.message), t5;
              }, []);
              r3.length ? this.theme.addInputError(this.input || this.inputs, "".concat(r3.join(". "), ".")) : this.theme.removeInputError(this.input || this.inputs);
            } }]) && Q(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function ot(t3) {
            return ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ot(t3);
          }
          function at(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, st(n2.key), n2);
            }
          }
          function st(t3) {
            var e3 = function(t4, e4) {
              if (ot(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ot(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ot(e3) == "symbol" ? e3 : e3 + "";
          }
          function lt(t3, e3, r2) {
            return e3 = ht(e3), function(t4, e4) {
              if (e4 && (ot(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, ct() ? Reflect.construct(e3, r2 || [], ht(t3).constructor) : e3.apply(t3, r2));
          }
          function ct() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (ct = function() {
              return !!t3;
            })();
          }
          function ut() {
            return ut = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = ht(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ut.apply(this, arguments);
          }
          function ht(t3) {
            return ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, ht(t3);
          }
          function pt(t3, e3) {
            return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, pt(t3, e3);
          }
          var dt = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), lt(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && pt(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              this.choices_instance ? (t4 = this.applyConstFilter(t4), t4 = [].concat(t4).map(function(t5) {
                return "".concat(t5);
              }), this.updateValue(t4), this.choices_instance.removeActiveItems(), this.choices_instance.setChoiceByValue(this.value), this.onChange(true)) : ut(ht(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              var t4 = this;
              if (window.Choices && !this.choices_instance) {
                var r3 = this.expandCallbacks("choices", l({}, { removeItems: true, removeItemButton: true }, this.defaults.options.choices || {}, this.options.choices || {}, { addItems: true, editItems: false, duplicateItemsAllowed: false }));
                this.newEnumAllowed = false, this.choices_instance = new window.Choices(this.input, r3), this.control.removeEventListener("change", this.multiselectChangeHandler), this.multiselectChangeHandler = function(e4) {
                  var r4 = t4.choices_instance.getValue(true);
                  t4.updateValue(r4), t4.onChange(true);
                }, this.control.addEventListener("change", this.multiselectChangeHandler, false);
              }
              ut(ht(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "updateValue", value: function(t4) {
              t4 = [].concat(t4);
              for (var e4 = false, r3 = [], n3 = 0; n3 < t4.length; n3++) {
                if (!this.select_values["".concat(t4[n3])]) {
                  if (e4 = true, !this.newEnumAllowed)
                    continue;
                  if (!this.addNewOption(t4[n3]))
                    continue;
                }
                var i2 = this.sanitize(this.select_values[t4[n3]]);
                r3.push(i2), i2 !== t4[n3] && (e4 = true);
              }
              return this.value = r3, e4;
            } }, { key: "addNewOption", value: function(t4) {
              return this.option_keys.push("".concat(t4)), this.option_titles.push("".concat(t4)), this.select_values["".concat(t4)] = t4, this.schema.items.enum.push(t4), this.choices_instance.setChoices([{ value: "".concat(t4), label: "".concat(t4) }], "value", "label", false), true;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.choices_instance && this.choices_instance.enable(), ut(ht(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.choices_instance && this.choices_instance.disable(), ut(ht(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.choices_instance && (this.choices_instance.destroy(), this.choices_instance = null), ut(ht(e3.prototype), "destroy", this).call(this);
            } }]) && at(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(it);
          function ft(t3) {
            return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ft(t3);
          }
          function yt(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, mt(n2.key), n2);
            }
          }
          function mt(t3) {
            var e3 = function(t4, e4) {
              if (ft(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ft(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ft(e3) == "symbol" ? e3 : e3 + "";
          }
          function vt(t3, e3, r2) {
            return e3 = wt(e3), function(t4, e4) {
              if (e4 && (ft(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, bt() ? Reflect.construct(e3, r2 || [], wt(t3).constructor) : e3.apply(t3, r2));
          }
          function bt() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (bt = function() {
              return !!t3;
            })();
          }
          function gt() {
            return gt = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = wt(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, gt.apply(this, arguments);
          }
          function wt(t3) {
            return wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, wt(t3);
          }
          function _t(t3, e3) {
            return _t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, _t(t3, e3);
          }
          var kt = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), vt(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && _t(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              t4 = this.applyConstFilter(t4), this.select2_instance ? (t4 = [].concat(t4).map(function(t5) {
                return "".concat(t5);
              }), this.updateValue(t4), this.select2v4 ? this.select2_instance.val(this.value).change() : this.select2_instance.select2("val", this.value), this.onChange(true)) : gt(wt(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance && (t4 = this.expandCallbacks("select2", l({}, { tags: true, width: "100%" }, this.defaults.options.select2 || {}, this.options.select2 || {})), this.newEnumAllowed = t4.tags = !!t4.tags && this.schema.items && this.schema.items.type === "string", this.select2_instance = window.jQuery(this.input).select2(t4), this.select2v4 = h(this.select2_instance.select2, "amd"), this.selectChangeHandler = function() {
                var t5 = r3.select2v4 ? r3.select2_instance.val() : r3.select2_instance.select2("val");
                r3.updateValue(t5), r3.onChange(true);
              }, this.select2_instance.on("select2-blur", this.selectChangeHandler), this.select2_instance.on("change", this.selectChangeHandler)), gt(wt(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "updateValue", value: function(t4) {
              t4 = [].concat(t4);
              for (var e4 = false, r3 = [], n3 = 0; n3 < t4.length; n3++) {
                if (!this.select_values["".concat(t4[n3])]) {
                  if (e4 = true, !this.newEnumAllowed)
                    continue;
                  if (!this.addNewOption(t4[n3]))
                    continue;
                }
                var i2 = this.sanitize(this.select_values[t4[n3]]);
                r3.push(i2), i2 !== t4[n3] && (e4 = true);
              }
              return this.value = r3, e4;
            } }, { key: "addNewOption", value: function(t4) {
              this.option_keys.push("".concat(t4)), this.option_titles.push("".concat(t4)), this.select_values["".concat(t4)] = t4, this.schema.items.enum.push(t4);
              var e4 = this.input.querySelector('option[value="'.concat(t4, '"]'));
              return e4 ? e4.removeAttribute("data-select2-tag") : this.input.appendChild(new Option(t4, t4, false, false)).trigger("change"), true;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.select2_instance && (this.select2v4 ? this.select2_instance.prop("disabled", false) : this.select2_instance.select2("enable", true)), gt(wt(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.select2_instance && (this.select2v4 ? this.select2_instance.prop("disabled", true) : this.select2_instance.select2("enable", false)), gt(wt(e3.prototype), "disable", this).call(this);
            } }, { key: "destroy", value: function() {
              this.select2_instance && (this.select2_instance.select2("destroy"), this.select2_instance = null), gt(wt(e3.prototype), "destroy", this).call(this);
            } }]) && yt(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(it);
          function jt(t3) {
            return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, jt(t3);
          }
          function Ot(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, xt(n2.key), n2);
            }
          }
          function xt(t3) {
            var e3 = function(t4, e4) {
              if (jt(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (jt(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return jt(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ct(t3, e3, r2) {
            return e3 = Pt(e3), function(t4, e4) {
              if (e4 && (jt(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Et() ? Reflect.construct(e3, r2 || [], Pt(t3).constructor) : e3.apply(t3, r2));
          }
          function Et() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Et = function() {
              return !!t3;
            })();
          }
          function St() {
            return St = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Pt(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, St.apply(this, arguments);
          }
          function Pt(t3) {
            return Pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Pt(t3);
          }
          function Lt(t3, e3) {
            return Lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Lt(t3, e3);
          }
          var Tt = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ct(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Lt(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              t4 = this.applyConstFilter(t4), this.selectize_instance ? (t4 = [].concat(t4).map(function(t5) {
                return "".concat(t5);
              }), this.updateValue(t4), this.selectize_instance.setValue(this.value), this.onChange(true)) : St(Pt(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
                t4 = this.expandCallbacks("selectize", l({}, { plugins: ["remove_button"], delimiter: false, createOnBlur: true, create: true }, this.defaults.options.selectize || {}, this.options.selectize || {})), this.newEnumAllowed = t4.create = !!t4.create && this.schema.items && this.schema.items.type === "string", this.selectize_instance = window.jQuery(this.input).selectize(t4)[0].selectize, this.control.removeEventListener("change", this.multiselectChangeHandler), this.multiselectChangeHandler = function(t5) {
                  var e4 = r3.selectize_instance.getValue();
                  r3.updateValue(e4), r3.onChange(true);
                }, this.selectize_instance.on("change", this.multiselectChangeHandler);
                var n3 = this.theme.getHiddenLabel(this.formname);
                this.input.setAttribute("id", this.formname + "-hidden-input"), n3.setAttribute("for", this.formname + "-hidden-input"), this.input.parentNode.insertBefore(n3, this.input);
                var i2 = this.selectize_instance.$control[0];
                if (i2) {
                  var o2 = this.theme.getHiddenLabel(this.formname);
                  o2.setAttribute("for", this.formname + "-selectized"), i2.appendChild(o2);
                }
              }
              St(Pt(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "updateValue", value: function(t4) {
              t4 = [].concat(t4);
              for (var e4 = false, r3 = [], n3 = 0; n3 < t4.length; n3++) {
                if (!this.select_values["".concat(t4[n3])]) {
                  if (e4 = true, !this.newEnumAllowed)
                    continue;
                  if (!this.addNewOption(t4[n3]))
                    continue;
                }
                var i2 = this.sanitize(this.select_values[t4[n3]]);
                r3.push(i2), i2 !== t4[n3] && (e4 = true);
              }
              return this.value = r3, e4;
            } }, { key: "addNewOption", value: function(t4) {
              return this.option_keys.push("".concat(t4)), this.option_titles.push("".concat(t4)), this.select_values["".concat(t4)] = t4, this.selectize_instance.addOption({ text: t4, value: t4 }), true;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.selectize_instance && this.selectize_instance.unlock(), St(Pt(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.selectize_instance && this.selectize_instance.lock(), St(Pt(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.selectize_instance && (this.selectize_instance.destroy(), this.selectize_instance = null), St(Pt(e3.prototype), "destroy", this).call(this);
            } }]) && Ot(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(it);
          function At(t3) {
            return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, At(t3);
          }
          function Rt(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, It(n2.key), n2);
            }
          }
          function It(t3) {
            var e3 = function(t4, e4) {
              if (At(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (At(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return At(e3) == "symbol" ? e3 : e3 + "";
          }
          function Bt(t3, e3, r2) {
            return e3 = Ft(e3), function(t4, e4) {
              if (e4 && (At(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Nt() ? Reflect.construct(e3, r2 || [], Ft(t3).constructor) : e3.apply(t3, r2));
          }
          function Nt() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Nt = function() {
              return !!t3;
            })();
          }
          function Dt() {
            return Dt = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Ft(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Dt.apply(this, arguments);
          }
          function Ft(t3) {
            return Ft = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ft(t3);
          }
          function Vt(t3, e3) {
            return Vt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Vt(t3, e3);
          }
          var Ht = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Bt(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Vt(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "postBuild", value: function() {
              window.Autocomplete && (this.autocomplete_wrapper = document.createElement("div"), this.input.parentNode.insertBefore(this.autocomplete_wrapper, this.input.nextSibling), this.autocomplete_wrapper.appendChild(this.input), this.autocomplete_dropdown = document.createElement("ul"), this.input.parentNode.insertBefore(this.autocomplete_dropdown, this.input.nextSibling)), Dt(Ft(e3.prototype), "postBuild", this).call(this);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              window.Autocomplete && !this.autocomplete_instance && (t4 = this.expandCallbacks("autocomplete", l({}, { search: function(t5) {
                return console.log('No "search" callback defined for autocomplete in property "'.concat(t5.key, '"')), [];
              }, onSubmit: function() {
                r3.input.blur();
              }, baseClass: "autocomplete" }, this.defaults.options.autocomplete || {}, this.options.autocomplete || {})), this.autocomplete_wrapper.classList.add(t4.baseClass), this.autocomplete_dropdown.classList.add("".concat(t4.baseClass, "-result-list")), this.autocomplete_instance = new window.Autocomplete(this.autocomplete_wrapper, t4)), Dt(Ft(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "destroy", value: function() {
              this.autocomplete_instance && (this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), this.autocomplete_dropdown && this.autocomplete_dropdown.parentNode && this.autocomplete_dropdown.parentNode.removeChild(this.autocomplete_dropdown), this.autocomplete_wrapper && this.autocomplete_wrapper.parentNode && this.autocomplete_wrapper.parentNode.removeChild(this.autocomplete_wrapper), this.autocomplete_instance = null), Dt(Ft(e3.prototype), "destroy", this).call(this);
            } }]) && Rt(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function zt(t3) {
            return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, zt(t3);
          }
          function Mt(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, qt(n2.key), n2);
            }
          }
          function qt(t3) {
            var e3 = function(t4, e4) {
              if (zt(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (zt(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return zt(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ut(t3, e3, r2) {
            return e3 = Jt(e3), function(t4, e4) {
              if (e4 && (zt(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Gt() ? Reflect.construct(e3, r2 || [], Jt(t3).constructor) : e3.apply(t3, r2));
          }
          function Gt() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Gt = function() {
              return !!t3;
            })();
          }
          function $t() {
            return $t = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Jt(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, $t.apply(this, arguments);
          }
          function Jt(t3) {
            return Jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Jt(t3);
          }
          function Wt(t3, e3) {
            return Wt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Wt(t3, e3);
          }
          var Zt = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ut(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Wt(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getNumColumns", value: function() {
              return 4;
            } }, { key: "setFileReaderListener", value: function(t4) {
              var e4 = this;
              t4.addEventListener("load", function(t5) {
                if (e4.count === e4.current_item_index)
                  e4.value[e4.count][e4.key] = t5.target.result;
                else {
                  var r3 = {};
                  for (var n3 in e4.parent.schema.properties)
                    r3[n3] = "";
                  r3[e4.key] = t5.target.result, e4.value.splice(e4.count, 0, r3);
                }
                e4.count += 1, e4.count === e4.total + e4.current_item_index && e4.arrayEditor.setValue(e4.value);
              });
            } }, { key: "build", value: function() {
              var t4 = this;
              if (this.options.compact || (this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.input = this.theme.getFormInputField("hidden"), this.container.appendChild(this.input), !this.schema.readOnly && !this.schema.readonly) {
                if (!window.FileReader)
                  throw new Error("FileReader required for base64 editor");
                this.uploader = this.theme.getFormInputField("file"), this.uploader.style.display = "none", this.schema.options && this.schema.options.multiple && this.schema.options.multiple === true && this.parent && this.parent.schema.type === "object" && this.parent.parent && this.parent.parent.schema.type === "array" && this.uploader.setAttribute("multiple", ""), this.uploader.addEventListener("change", function(e5) {
                  if (e5.preventDefault(), e5.stopPropagation(), e5.currentTarget.files && e5.currentTarget.files.length)
                    if (e5.currentTarget.files.length > 1 && t4.schema.options && t4.schema.options.multiple && t4.schema.options.multiple === true && t4.parent && t4.parent.schema.type === "object" && t4.parent.parent && t4.parent.parent.schema.type === "array") {
                      t4.arrayEditor = t4.jsoneditor.getEditor(t4.parent.parent.path), t4.value = t4.arrayEditor.getValue(), t4.total = e5.currentTarget.files.length, t4.current_item_index = parseInt(t4.parent.key), t4.count = t4.current_item_index;
                      for (var r3 = 0; r3 < t4.total; r3++) {
                        var n3 = new FileReader();
                        t4.setFileReaderListener(n3), n3.readAsDataURL(e5.currentTarget.files[r3]);
                      }
                    } else {
                      var i2 = new FileReader();
                      i2.onload = function(e6) {
                        t4.value = e6.target.result, t4.refreshPreview(), t4.onChange(true), i2 = null;
                      }, i2.readAsDataURL(e5.currentTarget.files[0]);
                    }
                });
              }
              this.preview = this.theme.getFormInputDescription(this.translateProperty(this.schema.description)), this.container.appendChild(this.preview), this.control = this.theme.getFormControl(this.label, this.uploader || this.input, this.preview, this.infoButton), this.container.appendChild(this.control);
              var e4 = this.getButton("button_upload", "upload", "button_upload");
              e4.addEventListener("click", function() {
                t4.uploader.click();
              }), this.control.appendChild(e4), this.setInputAttributes(["multiple"], e4);
            } }, { key: "refreshPreview", value: function() {
              if (this.last_preview !== this.value && (this.last_preview = this.value, this.preview.innerHTML = "", this.value)) {
                var t4 = this.value.match(/^data:([^;,]+)[;,]/);
                if (t4 && (t4 = t4[1]), t4) {
                  if (this.preview.innerHTML = "<strong>Type:</strong> ".concat(t4, ", <strong>Size:</strong> ").concat(Math.floor((this.value.length - this.value.split(",")[0].length - 1) / 1.33333), " bytes"), t4.substr(0, 5) === "image") {
                    this.preview.innerHTML += "<br>";
                    var e4 = document.createElement("img");
                    e4.style.maxWidth = "100%", e4.style.maxHeight = "100px", e4.src = this.value, this.preview.appendChild(e4);
                  }
                } else
                  this.preview.innerHTML = "<em>Invalid data URI</em>";
              }
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.uploader && (this.uploader.disabled = false), $t(Jt(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.uploader && (this.uploader.disabled = true), $t(Jt(e3.prototype), "disable", this).call(this);
            } }, { key: "setValue", value: function(t4) {
              t4 = this.applyConstFilter(t4), this.value !== t4 && (this.schema.readOnly && this.schema.enum && !this.schema.enum.includes(t4) ? this.value = this.schema.enum[0] : this.value = t4, this.input.value = this.value, this.refreshPreview(), this.onChange());
            } }, { key: "destroy", value: function() {
              this.preview && this.preview.parentNode && this.preview.parentNode.removeChild(this.preview), this.title && this.title.parentNode && this.title.parentNode.removeChild(this.title), this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), this.uploader && this.uploader.parentNode && this.uploader.parentNode.removeChild(this.uploader), $t(Jt(e3.prototype), "destroy", this).call(this);
            } }]) && Mt(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function Yt(t3) {
            return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Yt(t3);
          }
          function Qt(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Kt(n2.key), n2);
            }
          }
          function Kt(t3) {
            var e3 = function(t4, e4) {
              if (Yt(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Yt(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Yt(e3) == "symbol" ? e3 : e3 + "";
          }
          function Xt(t3, e3, r2) {
            return e3 = re(e3), function(t4, e4) {
              if (e4 && (Yt(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, te() ? Reflect.construct(e3, r2 || [], re(t3).constructor) : e3.apply(t3, r2));
          }
          function te() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (te = function() {
              return !!t3;
            })();
          }
          function ee() {
            return ee = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = re(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ee.apply(this, arguments);
          }
          function re(t3) {
            return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, re(t3);
          }
          function ne(t3, e3) {
            return ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ne(t3, e3);
          }
          var ie = function(t3) {
            function e3(t4, r3) {
              var n3;
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), (n3 = Xt(this, e3, [t4, r3])).active = false, n3.isUiOnly = true, n3.parent && n3.parent.schema && (Array.isArray(n3.parent.schema.required) ? n3.parent.schema.required.includes(n3.key) || n3.parent.schema.required.push(n3.key) : n3.parent.schema.required = [n3.key]), n3;
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ne(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              var t4 = this;
              this.options.compact = true;
              var e4 = this.expandCallbacks("button", l({}, { icon: "", validated: false, align: "left", action: function(t5, e5) {
                window.alert('No button action defined for "'.concat(t5.path, '"'));
              } }, this.defaults.options.button || {}, this.options.button || {})), r3 = this.translateProperty(e4.text || this.schema.title) || this.key;
              this.input = this.getButton(r3, e4.icon, r3), typeof e4.action != "function" ? window.alert('No button action defined for "'.concat(this.path, '"')) : this.input.addEventListener("click", e4.action, false), (this.schema.readOnly || this.schema.readonly || this.schema.template) && (this.disable(true), this.input.setAttribute("readonly", "true")), this.setInputAttributes(["readonly"]), this.control = this.theme.getFormButtonHolder(e4.align), this.control.appendChild(this.input), this.container.appendChild(this.control), this.changeHandler = function() {
                t4.jsoneditor.validate(t4.jsoneditor.getValue()).length > 0 ? t4.disable() : t4.enable();
              }, e4.validated && this.jsoneditor.on("change", this.changeHandler);
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.input.disabled = false, ee(re(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.input.disabled = true, ee(re(e3.prototype), "disable", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "activate", value: function() {
              this.active = false, this.enable();
            } }, { key: "deactivate", value: function() {
              this.isRequired() || (this.active = false, this.disable());
            } }, { key: "destroy", value: function() {
              this.jsoneditor.off("change", this.changeHandler), this.changeHandler = null, ee(re(e3.prototype), "destroy", this).call(this);
            } }]) && Qt(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function oe(t3) {
            return oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, oe(t3);
          }
          function ae(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, se(n2.key), n2);
            }
          }
          function se(t3) {
            var e3 = function(t4, e4) {
              if (oe(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (oe(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return oe(e3) == "symbol" ? e3 : e3 + "";
          }
          function le(t3, e3, r2) {
            return e3 = he(e3), function(t4, e4) {
              if (e4 && (oe(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, ce() ? Reflect.construct(e3, r2 || [], he(t3).constructor) : e3.apply(t3, r2));
          }
          function ce() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (ce = function() {
              return !!t3;
            })();
          }
          function ue() {
            return ue = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = he(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ue.apply(this, arguments);
          }
          function he(t3) {
            return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, he(t3);
          }
          function pe(t3, e3) {
            return pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, pe(t3, e3);
          }
          var de = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), le(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && pe(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, e4) {
              t4 = !!(t4 = this.applyConstFilter(t4));
              var r3 = this.getValue() !== t4;
              this.value = t4, this.input.checked = this.value, e4 || (this.is_dirty = true), this.onChange(r3);
            } }, { key: "register", value: function() {
              ue(he(e3.prototype), "register", this).call(this), this.input && this.jsoneditor.options.use_name_attributes && this.input.setAttribute("name", this.formname);
            } }, { key: "unregister", value: function() {
              ue(he(e3.prototype), "unregister", this).call(this), this.input && this.input.removeAttribute("name");
            } }, { key: "getNumColumns", value: function() {
              return Math.min(12, Math.max(this.getTitle().length / 7, 2));
            } }, { key: "setOptInCheckbox", value: function() {
              ue(he(e3.prototype), "setOptInCheckbox", this).call(this), this.optInAppended && (this.container.insertBefore(this.optInContainer, this.container.firstChild), this.optInContainer.style.verticalAlign = "top", this.control.style.marginTop = "0");
            } }, { key: "build", value: function() {
              var t4 = this;
              this.parent.options.table_row || (this.label = this.header = this.theme.getCheckboxLabel(this.getTitle(), this.isRequired()), this.label.htmlFor = this.formname), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && !this.options.compact && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.compact && this.container.classList.add("compact"), this.input = this.theme.getCheckbox(), this.input.id = this.formname, this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton), this.control.style.display = "inline-block", (this.schema.readOnly || this.schema.readonly) && (this.disable(true), this.input.disabled = true), this.input.addEventListener("change", function(e4) {
                e4.preventDefault(), e4.stopPropagation(), t4.value = e4.currentTarget.checked, t4.is_dirty = true, t4.onChange(true);
              }), this.container.appendChild(this.control);
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.input.disabled = false, ue(he(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.input.disabled = true, ue(he(e3.prototype), "disable", this).call(this);
            } }, { key: "destroy", value: function() {
              this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), ue(he(e3.prototype), "destroy", this).call(this);
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this, r3 = this.jsoneditor.options.show_errors, n3 = r3 === "change" || r3 === "interaction";
              if ((r3 !== "never" || this.is_dirty) && (!n3 || this.is_dirty)) {
                var i2 = t4.reduce(function(t5, r4) {
                  return r4.path === e4.path && t5.push(r4.message), t5;
                }, []);
                this.input.controlgroup = this.control, i2.length ? this.theme.addInputError(this.input, "".concat(i2.join(". "), ".")) : this.theme.removeInputError(this.input);
              }
            } }]) && ae(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function fe(t3) {
            return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, fe(t3);
          }
          function ye(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, me(n2.key), n2);
            }
          }
          function me(t3) {
            var e3 = function(t4, e4) {
              if (fe(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (fe(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return fe(e3) == "symbol" ? e3 : e3 + "";
          }
          function ve(t3, e3, r2) {
            return e3 = we(e3), function(t4, e4) {
              if (e4 && (fe(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, be() ? Reflect.construct(e3, r2 || [], we(t3).constructor) : e3.apply(t3, r2));
          }
          function be() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (be = function() {
              return !!t3;
            })();
          }
          function ge() {
            return ge = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = we(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ge.apply(this, arguments);
          }
          function we(t3) {
            return we = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, we(t3);
          }
          function _e(t3, e3) {
            return _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, _e(t3, e3);
          }
          r(6910);
          var ke = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), ve(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && _e(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, e4) {
              t4 = this.applyConstFilter(t4);
              var r3 = this.typecast(t4), n3 = this.enum_options.length > 0 && this.enum_values.includes(r3), i2 = !!this.jsoneditor.options.use_default_values || this.schema.default !== void 0;
              if (this.hasPlaceholderOption || n3 && (!e4 || this.isRequired() || i2) || (r3 = this.enum_values[0]), this.value !== r3) {
                var o2 = this.enum_values.indexOf(r3);
                n3 && o2 !== -1 ? this.input.value = this.enum_options[o2] : this.hasPlaceholderOption ? this.input.value = "_placeholder_" : this.input.value = r3, this.value = r3, e4 || (this.is_dirty = true), this.onChange(), this.change();
              }
            } }, { key: "register", value: function() {
              ge(we(e3.prototype), "register", this).call(this), this.input && this.jsoneditor.options.use_name_attributes && this.input.setAttribute("name", this.formname);
            } }, { key: "unregister", value: function() {
              ge(we(e3.prototype), "unregister", this).call(this), this.input && this.input.removeAttribute("name");
            } }, { key: "getNumColumns", value: function() {
              if (!this.enum_options)
                return 3;
              for (var t4 = this.getTitle().length, e4 = 0; e4 < this.enum_options.length; e4++)
                t4 = Math.max(t4, this.enum_options[e4].length + 4);
              return Math.min(12, Math.max(t4 / 7, 2));
            } }, { key: "typecast", value: function(t4) {
              return this.schema.type === "boolean" ? t4 === "undefined" || t4 === void 0 ? void 0 : !!t4 : this.schema.type === "number" ? 1 * t4 || 0 : this.schema.type === "integer" ? Math.floor(1 * t4 || 0) : this.schema.enum && t4 === void 0 ? void 0 : "".concat(t4);
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return this.typecast(this.value);
            } }, { key: "preBuild", value: function() {
              var t4, e4, r3, n3, i2 = this;
              if (this.input_type = "select", this.enum_options = [], this.enum_values = [], this.enum_display = [], this.hasPlaceholderOption = ((t4 = this.schema) === null || t4 === void 0 || (t4 = t4.options) === null || t4 === void 0 ? void 0 : t4.has_placeholder_option) || false, this.placeholderOptionText = ((e4 = this.schema) === null || e4 === void 0 || (e4 = e4.options) === null || e4 === void 0 ? void 0 : e4.placeholder_option_text) || " ", this.enforceConst && this.schema.const) {
                var o2 = this.schema.const;
                this.enum_options = ["".concat(o2)], this.enum_display = ["".concat(this.translateProperty(o2) || o2)], this.enum_values = [this.typecast(o2)];
              } else if (this.schema.enum) {
                var a2 = this.schema.options && this.schema.options.enum_titles || [];
                this.schema.enum.forEach(function(t5, e5) {
                  i2.enum_options[e5] = "".concat(t5), i2.enum_display[e5] = "".concat(i2.translateProperty(a2[e5]) || t5), i2.enum_values[e5] = i2.typecast(t5);
                });
              } else if (this.schema.type === "boolean")
                this.enum_display = this.schema.options && this.schema.options.enum_titles || ["true", "false"], this.enum_options = ["1", ""], this.enum_values = [true, false], this.isRequired() || (this.enum_display.unshift(" "), this.enum_options.unshift("undefined"), this.enum_values.unshift(void 0));
              else {
                if (!this.schema.enumSource)
                  throw new Error("'select' editor requires the enum property to be set.");
                if (this.enumSource = [], this.enum_display = [], this.enum_options = [], this.enum_values = [], Array.isArray(this.schema.enumSource))
                  for (r3 = 0; r3 < this.schema.enumSource.length; r3++)
                    typeof this.schema.enumSource[r3] == "string" ? this.enumSource[r3] = { source: this.schema.enumSource[r3] } : Array.isArray(this.schema.enumSource[r3]) ? this.enumSource[r3] = this.schema.enumSource[r3] : this.enumSource[r3] = l({}, this.schema.enumSource[r3]);
                else
                  this.schema.enumValue ? this.enumSource = [{ source: this.schema.enumSource, value: this.schema.enumValue }] : this.enumSource = [{ source: this.schema.enumSource }];
                for (r3 = 0; r3 < this.enumSource.length; r3++)
                  this.enumSource[r3].value && (typeof (n3 = this.expandCallbacks("template", { template: this.enumSource[r3].value })).template == "function" ? this.enumSource[r3].value = n3.template : this.enumSource[r3].value = this.jsoneditor.compileTemplate(this.enumSource[r3].value, this.template_engine)), this.enumSource[r3].title && (typeof (n3 = this.expandCallbacks("template", { template: this.enumSource[r3].title })).template == "function" ? this.enumSource[r3].title = n3.template : this.enumSource[r3].title = this.jsoneditor.compileTemplate(this.enumSource[r3].title, this.template_engine)), this.enumSource[r3].filter && this.enumSource[r3].value && (typeof (n3 = this.expandCallbacks("template", { template: this.enumSource[r3].filter })).template == "function" ? this.enumSource[r3].filter = n3.template : this.enumSource[r3].filter = this.jsoneditor.compileTemplate(this.enumSource[r3].filter, this.template_engine));
              }
            } }, { key: "build", value: function() {
              var t4 = this;
              this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.compact && this.container.classList.add("compact"), this.input = this.theme.getSelectInput(this.enum_options, false), this.theme.setSelectOptions(this.input, this.enum_options, this.enum_display, this.hasPlaceholderOption, this.placeholderOptionText), (this.schema.readOnly || this.schema.readonly) && (this.disable(true), this.input.disabled = true), this.setInputAttributes([]), this.input.addEventListener("change", function(e4) {
                e4.preventDefault(), e4.stopPropagation(), t4.onInputChange();
              }), this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton, this.formname), this.container.appendChild(this.control), this.value = this.enum_values[0], window.requestAnimationFrame(function() {
                t4.input.parentNode && t4.afterInputReady();
              });
            } }, { key: "afterInputReady", value: function() {
              this.theme.afterInputReady(this.input);
            } }, { key: "onInputChange", value: function() {
              var t4, e4 = this.typecast(this.input.value);
              (t4 = this.enum_values.includes(e4) ? this.enum_values[this.enum_values.indexOf(e4)] : this.enum_values[0]) !== this.value && (this.is_dirty = true, this.value = t4, this.onChange(true));
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4, r3, n3 = [], i2 = [];
              if (this.enumSource) {
                t4 = this.getWatchedFieldValues();
                for (var o2 = 0; o2 < this.enumSource.length; o2++)
                  if (Array.isArray(this.enumSource[o2]))
                    n3 = n3.concat(this.enumSource[o2]), i2 = i2.concat(this.enumSource[o2]);
                  else {
                    var a2 = [];
                    if (a2 = Array.isArray(this.enumSource[o2].source) ? this.enumSource[o2].source : t4[this.enumSource[o2].source]) {
                      if (this.enumSource[o2].slice && (a2 = Array.prototype.slice.apply(a2, this.enumSource[o2].slice)), this.enumSource[o2].filter) {
                        var s2 = [];
                        for (r3 = 0; r3 < a2.length; r3++)
                          this.enumSource[o2].filter({ i: r3, item: a2[r3], watched: t4 }) && s2.push(a2[r3]);
                        a2 = s2;
                      }
                      var l2 = [], c2 = [];
                      for (r3 = 0; r3 < a2.length; r3++) {
                        var u2 = a2[r3];
                        this.enumSource[o2].value ? c2[r3] = this.typecast(this.enumSource[o2].value({ i: r3, item: u2 })) : c2[r3] = a2[r3], this.enumSource[o2].title ? l2[r3] = this.enumSource[o2].title({ i: r3, item: u2 }) : l2[r3] = c2[r3];
                      }
                      this.enumSource[o2].sort && function(t5, e4, r4) {
                        t5.map(function(t6, r5) {
                          return { v: t6, t: e4[r5] };
                        }).sort(function(t6, e5) {
                          return t6.v < e5.v ? -r4 : t6.v === e5.v ? 0 : r4;
                        }).forEach(function(r5, n4) {
                          t5[n4] = r5.v, e4[n4] = r5.t;
                        });
                      }.bind(null, c2, l2, this.enumSource[o2].sort === "desc" ? 1 : -1)(), n3 = n3.concat(c2), i2 = i2.concat(l2);
                    }
                  }
                var h2 = this.value;
                this.theme.setSelectOptions(this.input, n3, i2), this.enum_options = n3, this.enum_display = i2, this.enum_values = n3, n3.includes(h2) || this.jsoneditor.options.enum_source_value_auto_select !== false ? (this.input.value = h2, this.value = h2) : (this.input.value = n3[0], this.value = this.typecast(n3[0] || ""), this.parent && !this.watchLoop ? this.parent.onChildEditorChange(this) : this.jsoneditor.onChange(), this.jsoneditor.notifyWatchers(this.path));
              }
              ge(we(e3.prototype), "onWatchedFieldChange", this).call(this);
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.input.disabled = false, ge(we(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.input.disabled = true, ge(we(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), ge(we(e3.prototype), "destroy", this).call(this);
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this, r3 = this.jsoneditor.options.show_errors, n3 = r3 === "change" || r3 === "interaction";
              if ((r3 !== "never" || this.is_dirty) && (!n3 || this.is_dirty)) {
                var i2 = t4.reduce(function(t5, r4) {
                  return r4.path === e4.path && t5.push(r4.message), t5;
                }, []);
                i2.length ? this.theme.addInputError(this.input, "".concat(i2.join(". "), ".")) : this.theme.removeInputError(this.input);
              }
            } }]) && ye(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function je(t3) {
            return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, je(t3);
          }
          function Oe(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, xe(n2.key), n2);
            }
          }
          function xe(t3) {
            var e3 = function(t4, e4) {
              if (je(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (je(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return je(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ce(t3, e3, r2) {
            return e3 = Pe(e3), function(t4, e4) {
              if (e4 && (je(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ee() ? Reflect.construct(e3, r2 || [], Pe(t3).constructor) : e3.apply(t3, r2));
          }
          function Ee() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ee = function() {
              return !!t3;
            })();
          }
          function Se() {
            return Se = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Pe(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Se.apply(this, arguments);
          }
          function Pe(t3) {
            return Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Pe(t3);
          }
          function Le(t3, e3) {
            return Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Le(t3, e3);
          }
          var Te = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ce(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Le(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              if (t4 = this.applyConstFilter(t4), this.choices_instance) {
                var n3 = this.typecast(t4 || "");
                if (this.enum_values.includes(n3) || (n3 = this.enum_values[0]), this.value === n3)
                  return;
                r3 ? this.is_dirty = false : this.jsoneditor.options.show_errors === "change" && (this.is_dirty = true), this.input.value = this.enum_options[this.enum_values.indexOf(n3)], this.choices_instance.setChoiceByValue(this.input.value), this.value = n3, this.onChange();
              } else
                Se(Pe(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              if (window.Choices && !this.choices_instance) {
                var t4 = this.expandCallbacks("choices", l({}, this.defaults.options.choices || {}, this.options.choices || {}));
                this.choices_instance = new window.Choices(this.input, t4);
              }
              Se(Pe(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4 = this;
              if (Se(Pe(e3.prototype), "onWatchedFieldChange", this).call(this), this.choices_instance) {
                var r3 = this.enum_options.map(function(e4, r4) {
                  return { value: e4, label: t4.enum_display[r4] };
                });
                this.choices_instance.setChoices(r3, "value", "label", true), this.choices_instance.setChoiceByValue("".concat(this.value));
              }
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.choices_instance && this.choices_instance.enable(), Se(Pe(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.choices_instance && this.choices_instance.disable(), Se(Pe(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.choices_instance && (this.choices_instance.destroy(), this.choices_instance = null), Se(Pe(e3.prototype), "destroy", this).call(this);
            } }]) && Oe(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(ke);
          function Ae(t3) {
            return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ae(t3);
          }
          function Re(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Ie(n2.key), n2);
            }
          }
          function Ie(t3) {
            var e3 = function(t4, e4) {
              if (Ae(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ae(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ae(e3) == "symbol" ? e3 : e3 + "";
          }
          function Be(t3, e3, r2) {
            return e3 = Fe(e3), function(t4, e4) {
              if (e4 && (Ae(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ne() ? Reflect.construct(e3, r2 || [], Fe(t3).constructor) : e3.apply(t3, r2));
          }
          function Ne() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ne = function() {
              return !!t3;
            })();
          }
          function De() {
            return De = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Fe(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, De.apply(this, arguments);
          }
          function Fe(t3) {
            return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Fe(t3);
          }
          function Ve(t3, e3) {
            return Ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Ve(t3, e3);
          }
          Te.rules = { ".choices > *": "box-sizing:border-box" };
          var He = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Be(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Ve(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              if (De(Fe(e3.prototype), "build", this).call(this), this.input && (this.schema.max && typeof this.schema.max == "string" && this.input.setAttribute("max", this.schema.max), this.schema.min && typeof this.schema.max == "string" && this.input.setAttribute("min", this.schema.min), window.flatpickr && Ae(this.options.flatpickr) === "object")) {
                this.options.flatpickr.enableTime = this.schema.format !== "date", this.options.flatpickr.noCalendar = this.schema.format === "time", this.schema.type === "integer" && (this.options.flatpickr.mode = "single"), this.input.setAttribute("data-input", "");
                var t4 = this.input;
                if (this.options.flatpickr.wrap === true) {
                  var r3 = [];
                  if (this.options.flatpickr.showToggleButton !== false) {
                    var n3 = this.getButton("", this.schema.format === "time" ? "time" : "calendar", "flatpickr_toggle_button");
                    n3.setAttribute("data-toggle", ""), r3.push(n3);
                  }
                  if (this.options.flatpickr.showClearButton !== false) {
                    var i2 = this.getButton("", "clear", "flatpickr_clear_button");
                    i2.setAttribute("data-clear", ""), r3.push(i2);
                  }
                  var o2 = this.input.parentNode, a2 = this.input.nextSibling, s2 = this.theme.getInputGroup(this.input, r3);
                  s2 !== void 0 ? (this.options.flatpickr.inline = false, o2.insertBefore(s2, a2), t4 = s2) : this.options.flatpickr.wrap = false;
                }
                this.flatpickr = window.flatpickr(t4, this.options.flatpickr), this.options.flatpickr.inline === true && this.options.flatpickr.inlineHideInput === true && this.input.setAttribute("type", "hidden");
              }
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled) {
                if (this.schema.type === "string")
                  return this.value;
                if (this.value !== "" && this.value !== void 0) {
                  var t4 = this.schema.format === "time" ? "1970-01-01 ".concat(this.value) : this.value;
                  return parseInt(new Date(t4).getTime() / 1e3);
                }
              }
            } }, { key: "setValue", value: function(t4, r3, n3) {
              if (t4 = this.applyConstFilter(t4), this.schema.type === "string")
                De(Fe(e3.prototype), "setValue", this).call(this, t4, r3, n3), this.flatpickr && this.flatpickr.setDate(t4);
              else if (t4 > 0) {
                var i2 = new Date(1e3 * t4), o2 = i2.getFullYear(), a2 = this.zeroPad(i2.getMonth() + 1), s2 = this.zeroPad(i2.getDate()), l2 = this.zeroPad(i2.getHours()), c2 = this.zeroPad(i2.getMinutes()), u2 = this.zeroPad(i2.getSeconds()), h2 = [o2, a2, s2].join("-"), p2 = [l2, c2, u2].join(":"), d2 = "".concat(h2, "T").concat(p2);
                this.schema.format === "date" ? d2 = h2 : this.schema.format === "time" && (d2 = p2), this.input.value = d2, this.refreshValue(), this.flatpickr && this.flatpickr.setDate(d2);
              }
            } }, { key: "destroy", value: function() {
              this.flatpickr && this.flatpickr.destroy(), this.flatpickr = null, De(Fe(e3.prototype), "destroy", this).call(this);
            } }, { key: "zeroPad", value: function(t4) {
              return "0".concat(t4).slice(-2);
            } }]) && Re(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function ze(t3) {
            return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ze(t3);
          }
          function Me(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, qe(n2.key), n2);
            }
          }
          function qe(t3) {
            var e3 = function(t4, e4) {
              if (ze(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ze(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ze(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ue(t3, e3, r2) {
            return e3 = Je(e3), function(t4, e4) {
              if (e4 && (ze(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ge() ? Reflect.construct(e3, r2 || [], Je(t3).constructor) : e3.apply(t3, r2));
          }
          function Ge() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ge = function() {
              return !!t3;
            })();
          }
          function $e() {
            return $e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Je(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, $e.apply(this, arguments);
          }
          function Je(t3) {
            return Je = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Je(t3);
          }
          function We(t3, e3) {
            return We = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, We(t3, e3);
          }
          var Ze = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ue(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && We(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "register", value: function() {
              if (this.editors) {
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].unregister();
                this.editors[this.currentEditor] && this.editors[this.currentEditor].register();
              }
              $e(Je(e3.prototype), "register", this).call(this);
            } }, { key: "unregister", value: function() {
              if ($e(Je(e3.prototype), "unregister", this).call(this), this.editors)
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].unregister();
            } }, { key: "getNumColumns", value: function() {
              return this.editors[this.currentEditor] ? Math.max(this.editors[this.currentEditor].getNumColumns(), 4) : 4;
            } }, { key: "enable", value: function() {
              if (this.editors)
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].enable();
              $e(Je(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function() {
              if (this.editors)
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].disable();
              $e(Je(e3.prototype), "disable", this).call(this);
            } }, { key: "switchEditor", value: function() {
              var t4 = this, e4 = this.getWatchedFieldValues();
              if (e4) {
                var r3 = document.location.origin + document.location.pathname + this.template(e4);
                this.editors[this.refs[r3]] || this.buildChildEditor(r3), this.currentEditor = this.refs[r3], this.register(), this.editors.forEach(function(e5, r4) {
                  e5 && (t4.currentEditor === r4 ? e5.container.style.display = "" : e5.container.style.display = "none");
                }), this.refreshValue(), this.onChange(true);
              }
            } }, { key: "buildChildEditor", value: function(t4) {
              this.refs[t4] = this.editors.length;
              var e4 = this.theme.getChildEditorHolder();
              this.editor_holder.appendChild(e4);
              var r3 = l({}, this.schema, this.jsoneditor.refs[t4]), n3 = this.jsoneditor.getEditorClass(r3, this.jsoneditor), i2 = this.jsoneditor.createEditor(n3, { jsoneditor: this.jsoneditor, schema: r3, container: e4, path: this.path, parent: this, required: true });
              this.editors.push(i2), i2.preBuild(), i2.build(), i2.postBuild();
            } }, { key: "preBuild", value: function() {
              var t4;
              for (this.refs = {}, this.editors = [], this.currentEditor = "", t4 = 0; t4 < this.schema.links.length; t4++)
                if (this.schema.links[t4].rel.toLowerCase() === "describedby") {
                  this.template = this.jsoneditor.compileTemplate(this.schema.links[t4].href, this.template_engine);
                  break;
                }
              this.schema.links = this.schema.links.slice(0, t4).concat(this.schema.links.slice(t4 + 1)), this.schema.links.length === 0 && delete this.schema.links, this.baseSchema = l({}, this.schema);
            } }, { key: "build", value: function() {
              this.editor_holder = document.createElement("div"), this.container.appendChild(this.editor_holder), this.switchEditor();
            } }, { key: "onWatchedFieldChange", value: function() {
              this.switchEditor();
            } }, { key: "onChildEditorChange", value: function(t4, r3) {
              this.editors[this.currentEditor] && this.refreshValue(), $e(Je(e3.prototype), "onChildEditorChange", this).call(this, t4, r3);
            } }, { key: "refreshValue", value: function() {
              this.editors[this.currentEditor] && (this.value = this.editors[this.currentEditor].getValue());
            } }, { key: "setValue", value: function(t4, e4) {
              t4 = this.applyConstFilter(t4), this.editors[this.currentEditor] && (this.editors[this.currentEditor].setValue(t4, e4), this.refreshValue(), this.onChange());
            } }, { key: "destroy", value: function() {
              this.editors.forEach(function(t4) {
                t4 && t4.destroy();
              }), this.editor_holder && this.editor_holder.parentNode && this.editor_holder.parentNode.removeChild(this.editor_holder), $e(Je(e3.prototype), "destroy", this).call(this);
            } }, { key: "showValidationErrors", value: function(t4) {
              this.editors.forEach(function(e4) {
                e4 && e4.showValidationErrors(t4);
              });
            } }]) && Me(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function Ye(t3) {
            return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ye(t3);
          }
          function Qe(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function Ke(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Xe(n2.key), n2);
            }
          }
          function Xe(t3) {
            var e3 = function(t4, e4) {
              if (Ye(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ye(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ye(e3) == "symbol" ? e3 : e3 + "";
          }
          function tr(t3, e3, r2) {
            return e3 = nr(e3), function(t4, e4) {
              if (e4 && (Ye(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, er() ? Reflect.construct(e3, r2 || [], nr(t3).constructor) : e3.apply(t3, r2));
          }
          function er() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (er = function() {
              return !!t3;
            })();
          }
          function rr() {
            return rr = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = nr(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, rr.apply(this, arguments);
          }
          function nr(t3) {
            return nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, nr(t3);
          }
          function ir(t3, e3) {
            return ir = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ir(t3, e3);
          }
          var or = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), tr(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ir(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getNumColumns", value: function() {
              return 4;
            } }, { key: "build", value: function() {
              var t4 = this;
              this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired()), this.container.appendChild(this.title), this.options.enum_titles = this.options.enum_titles || [], this.enforceConstEnabled && this.schema.const ? this.enum = [this.schema.const] : this.enum = this.schema.enum, this.selected = 0, this.select_options = [], this.html_values = [];
              for (var e4 = 0; e4 < this.enum.length; e4++)
                this.select_options[e4] = this.options.enum_titles[e4] || "Value ".concat(e4 + 1), this.html_values[e4] = this.getHTML(this.enum[e4]);
              this.switcher = this.theme.getSwitcher(this.select_options), this.container.appendChild(this.switcher), this.display_area = this.theme.getIndentedPanel(), this.container.appendChild(this.display_area), this.options.hide_display && (this.display_area.style.display = "none"), this.switcher.addEventListener("change", function(e5) {
                t4.selected = t4.select_options.indexOf(e5.currentTarget.value), t4.value = t4.enum[t4.selected], t4.refreshValue(), t4.onChange(true);
              }), this.value = this.enum[0], this.refreshValue(), this.enum.length === 1 && (this.switcher.style.display = "none");
            } }, { key: "refreshValue", value: function() {
              var t4 = this;
              if (this.enum) {
                this.selected = -1;
                var e4 = JSON.stringify(this.value);
                this.enum.forEach(function(r3, n3) {
                  if (e4 === JSON.stringify(r3))
                    return t4.selected = n3, false;
                }), this.selected < 0 ? this.setValue(this.enum[0]) : (this.switcher.value = this.select_options[this.selected], this.display_area.innerHTML = this.html_values[this.selected]);
              }
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.switcher.disabled = false, rr(nr(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.switcher.disabled = true, rr(nr(e3.prototype), "disable", this).call(this);
            } }, { key: "getHTML", value: function(t4) {
              var e4, r3, n3 = this;
              if (t4 === null)
                return "<em>null</em>";
              if (Ye(t4) === "object") {
                var i2 = "";
                return e4 = t4, r3 = function(e5, r4) {
                  var o2 = n3.getHTML(r4);
                  Array.isArray(t4) || (o2 = "<div><em>".concat(e5, "</em>: ").concat(o2, "</div>")), i2 += "<li>".concat(o2, "</li>");
                }, Array.isArray(e4) || typeof e4.length == "number" && e4.length > 0 && e4.length - 1 in e4 ? Array.from(e4).forEach(function(t5, e5) {
                  return r3(e5, t5);
                }) : Object.entries(e4).forEach(function(t5) {
                  var e5, n4, i3 = (n4 = 2, function(t6) {
                    if (Array.isArray(t6))
                      return t6;
                  }(e5 = t5) || function(t6, e6) {
                    var r4 = t6 == null ? null : typeof Symbol != "undefined" && t6[Symbol.iterator] || t6["@@iterator"];
                    if (r4 != null) {
                      var n5, i4, o3, a3, s2 = [], l2 = true, c2 = false;
                      try {
                        if (o3 = (r4 = r4.call(t6)).next, e6 === 0) {
                          if (Object(r4) !== r4)
                            return;
                          l2 = false;
                        } else
                          for (; !(l2 = (n5 = o3.call(r4)).done) && (s2.push(n5.value), s2.length !== e6); l2 = true)
                            ;
                      } catch (t7) {
                        c2 = true, i4 = t7;
                      } finally {
                        try {
                          if (!l2 && r4.return != null && (a3 = r4.return(), Object(a3) !== a3))
                            return;
                        } finally {
                          if (c2)
                            throw i4;
                        }
                      }
                      return s2;
                    }
                  }(e5, n4) || function(t6, e6) {
                    if (t6) {
                      if (typeof t6 == "string")
                        return Qe(t6, e6);
                      var r4 = Object.prototype.toString.call(t6).slice(8, -1);
                      return r4 === "Object" && t6.constructor && (r4 = t6.constructor.name), r4 === "Map" || r4 === "Set" ? Array.from(t6) : r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? Qe(t6, e6) : void 0;
                    }
                  }(e5, n4) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }()), o2 = i3[0], a2 = i3[1];
                  return r3(o2, a2);
                }), i2 = Array.isArray(t4) ? "<ol>".concat(i2, "</ol>") : "<ul style='margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;'>".concat(i2, "</ul>");
              }
              return typeof t4 == "boolean" ? t4 ? "true" : "false" : typeof t4 == "string" ? t4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : t4;
            } }, { key: "setValue", value: function(t4) {
              t4 = this.applyConstFilter(t4), this.value !== t4 && (this.value = t4, this.refreshValue(), this.onChange());
            } }, { key: "destroy", value: function() {
              this.display_area && this.display_area.parentNode && this.display_area.parentNode.removeChild(this.display_area), this.title && this.title.parentNode && this.title.parentNode.removeChild(this.title), this.switcher && this.switcher.parentNode && this.switcher.parentNode.removeChild(this.switcher), rr(nr(e3.prototype), "destroy", this).call(this);
            } }]) && Ke(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function ar(t3) {
            return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ar(t3);
          }
          function sr(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, lr(n2.key), n2);
            }
          }
          function lr(t3) {
            var e3 = function(t4, e4) {
              if (ar(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ar(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ar(e3) == "symbol" ? e3 : e3 + "";
          }
          function cr(t3, e3, r2) {
            return e3 = pr(e3), function(t4, e4) {
              if (e4 && (ar(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, ur() ? Reflect.construct(e3, r2 || [], pr(t3).constructor) : e3.apply(t3, r2));
          }
          function ur() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (ur = function() {
              return !!t3;
            })();
          }
          function hr() {
            return hr = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = pr(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, hr.apply(this, arguments);
          }
          function pr(t3) {
            return pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, pr(t3);
          }
          function dr(t3, e3) {
            return dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, dr(t3, e3);
          }
          var fr = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), cr(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && dr(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "register", value: function() {
              hr(pr(e3.prototype), "register", this).call(this), this.input && this.jsoneditor.options.use_name_attributes && this.input.setAttribute("name", this.formname);
            } }, { key: "unregister", value: function() {
              hr(pr(e3.prototype), "unregister", this).call(this), this.input && this.input.removeAttribute("name");
            } }, { key: "setValue", value: function(t4, e4, r3) {
              if (t4 = this.applyConstFilter(t4), (!this.template || r3) && (t4 == null ? t4 = "" : ar(t4) === "object" ? t4 = JSON.stringify(t4) : typeof t4 != "string" && (t4 = "".concat(t4)), t4 !== this.serialized)) {
                var n3 = this.sanitize(t4);
                if (this.input.value !== n3) {
                  this.input.value = n3;
                  var i2 = r3 || this.getValue() !== t4;
                  this.refreshValue(), e4 ? this.is_dirty = false : this.jsoneditor.options.show_errors === "change" && (this.is_dirty = true), this.adjust_height && this.adjust_height(this.input), this.onChange(i2);
                }
              }
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "enable", value: function() {
              hr(pr(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function() {
              hr(pr(e3.prototype), "disable", this).call(this);
            } }, { key: "refreshValue", value: function() {
              this.value = this.input.value, typeof this.value != "string" && (this.value = ""), this.serialized = this.value;
            } }, { key: "destroy", value: function() {
              this.template = null, this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), hr(pr(e3.prototype), "destroy", this).call(this);
            } }, { key: "sanitize", value: function(t4) {
              return t4;
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4;
              this.template && (t4 = this.getWatchedFieldValues(), this.setValue(this.template(t4), false, true)), hr(pr(e3.prototype), "onWatchedFieldChange", this).call(this);
            } }, { key: "build", value: function() {
              if (this.format = this.schema.format, !this.format && this.options.default_format && (this.format = this.options.default_format), this.options.format && (this.format = this.options.format), this.input_type = "hidden", this.input = this.theme.getFormInputField(this.input_type), this.format && this.input.setAttribute("data-schemaformat", this.format), this.container.appendChild(this.input), this.schema.template) {
                var t4 = this.expandCallbacks("template", { template: this.schema.template });
                typeof t4.template == "function" ? this.template = t4.template : this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine), this.refreshValue();
              } else
                this.refreshValue();
            } }]) && sr(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function yr(t3) {
            return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, yr(t3);
          }
          function mr(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, vr(n2.key), n2);
            }
          }
          function vr(t3) {
            var e3 = function(t4, e4) {
              if (yr(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (yr(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return yr(e3) == "symbol" ? e3 : e3 + "";
          }
          function br(t3, e3, r2) {
            return e3 = wr(e3), function(t4, e4) {
              if (e4 && (yr(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, gr() ? Reflect.construct(e3, r2 || [], wr(t3).constructor) : e3.apply(t3, r2));
          }
          function gr() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (gr = function() {
              return !!t3;
            })();
          }
          function wr(t3) {
            return wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, wr(t3);
          }
          function _r(t3, e3) {
            return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, _r(t3, e3);
          }
          var kr = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), br(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && _r(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              this.options.compact = false, this.header = this.label = this.theme.getLabelLike(this.getTitle()), this.description = this.theme.getDescription(this.schema.description || ""), this.control = this.theme.getFormControl(this.label, this.description, null), this.container.appendChild(this.control);
            } }, { key: "getTitle", value: function() {
              return this.translateProperty(this.schema.title);
            } }, { key: "getNumColumns", value: function() {
              return 12;
            } }, { key: "disable", value: function() {
              return false;
            } }, { key: "enable", value: function() {
              return false;
            } }]) && mr(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(ie);
          function jr(t3) {
            return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, jr(t3);
          }
          function Or(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, xr(n2.key), n2);
            }
          }
          function xr(t3) {
            var e3 = function(t4, e4) {
              if (jr(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (jr(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return jr(e3) == "symbol" ? e3 : e3 + "";
          }
          function Cr(t3, e3, r2) {
            return e3 = Pr(e3), function(t4, e4) {
              if (e4 && (jr(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Er() ? Reflect.construct(e3, r2 || [], Pr(t3).constructor) : e3.apply(t3, r2));
          }
          function Er() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Er = function() {
              return !!t3;
            })();
          }
          function Sr() {
            return Sr = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Pr(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Sr.apply(this, arguments);
          }
          function Pr(t3) {
            return Pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Pr(t3);
          }
          function Lr(t3, e3) {
            return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Lr(t3, e3);
          }
          var Tr = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Cr(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Lr(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              if (Sr(Pr(e3.prototype), "build", this).call(this), this.schema.minimum !== void 0) {
                var t4 = this.schema.minimum;
                this.schema.exclusiveMinimum !== void 0 && (t4 += 1), this.input.setAttribute("min", t4);
              }
              if (this.schema.maximum !== void 0) {
                var r3 = this.schema.maximum;
                this.schema.exclusiveMaximum !== void 0 && (r3 -= 1), this.input.setAttribute("max", r3);
              }
              if (this.schema.step !== void 0) {
                var n3 = this.schema.step || 1;
                this.input.setAttribute("step", n3);
              }
              this.setInputAttributes(["maxlength", "pattern", "readonly", "min", "max", "step"]);
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return this.schema.default || this.jsoneditor.options.use_default_values || this.value !== "" ? function(t4) {
                  if (t4 == null)
                    return false;
                  var e4 = t4.match(p), r3 = parseFloat(t4);
                  return e4 !== null && !isNaN(r3) && isFinite(r3);
                }(this.value) ? parseFloat(this.value) : this.value : void (this.shouldBeUnset() && (this.input.value = ""));
            } }]) && Or(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function Ar(t3) {
            return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ar(t3);
          }
          function Rr(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Ir(n2.key), n2);
            }
          }
          function Ir(t3) {
            var e3 = function(t4, e4) {
              if (Ar(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ar(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ar(e3) == "symbol" ? e3 : e3 + "";
          }
          function Br(t3, e3, r2) {
            return e3 = Dr(e3), function(t4, e4) {
              if (e4 && (Ar(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Nr() ? Reflect.construct(e3, r2 || [], Dr(t3).constructor) : e3.apply(t3, r2));
          }
          function Nr() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Nr = function() {
              return !!t3;
            })();
          }
          function Dr(t3) {
            return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Dr(t3);
          }
          function Fr(t3, e3) {
            return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Fr(t3, e3);
          }
          var Vr = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Br(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Fr(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return this.schema.default || this.jsoneditor.options.use_default_values || this.value !== "" ? function(t4) {
                  if (t4 == null)
                    return false;
                  var e4 = t4.match(d), r3 = parseInt(t4);
                  return e4 !== null && !isNaN(r3) && isFinite(r3);
                }(this.value) ? parseInt(this.value) : this.value : void this.shouldBeUnset();
            } }]) && Rr(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(Tr);
          function Hr(t3) {
            return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Hr(t3);
          }
          function zr(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Mr(n2.key), n2);
            }
          }
          function Mr(t3) {
            var e3 = function(t4, e4) {
              if (Hr(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Hr(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Hr(e3) == "symbol" ? e3 : e3 + "";
          }
          function qr(t3, e3, r2) {
            return e3 = $r(e3), function(t4, e4) {
              if (e4 && (Hr(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ur() ? Reflect.construct(e3, r2 || [], $r(t3).constructor) : e3.apply(t3, r2));
          }
          function Ur() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ur = function() {
              return !!t3;
            })();
          }
          function Gr() {
            return Gr = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = $r(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Gr.apply(this, arguments);
          }
          function $r(t3) {
            return $r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, $r(t3);
          }
          function Jr(t3, e3) {
            return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Jr(t3, e3);
          }
          var Wr = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), qr(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Jr(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "preBuild", value: function() {
              if (Gr($r(e3.prototype), "preBuild", this).call(this), this.schema.options || (this.schema.options = {}), !this.schema.options.cleave)
                switch (this.format) {
                  case "ipv6":
                    this.schema.options.cleave = { delimiters: [":"], blocks: [4, 4, 4, 4, 4, 4, 4, 4], uppercase: true };
                    break;
                  case "ipv4":
                    this.schema.options.cleave = { delimiters: ["."], blocks: [3, 3, 3, 3], numericOnly: true };
                }
              this.options = l(this.options, this.schema.options || {});
            } }]) && zr(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function Zr(t3) {
            return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Zr(t3);
          }
          function Yr(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Qr(n2.key), n2);
            }
          }
          function Qr(t3) {
            var e3 = function(t4, e4) {
              if (Zr(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Zr(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Zr(e3) == "symbol" ? e3 : e3 + "";
          }
          function Kr(t3, e3, r2) {
            return e3 = en(e3), function(t4, e4) {
              if (e4 && (Zr(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Xr() ? Reflect.construct(e3, r2 || [], en(t3).constructor) : e3.apply(t3, r2));
          }
          function Xr() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Xr = function() {
              return !!t3;
            })();
          }
          function tn() {
            return tn = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = en(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, tn.apply(this, arguments);
          }
          function en(t3) {
            return en = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, en(t3);
          }
          function rn(t3, e3) {
            return rn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, rn(t3, e3);
          }
          var nn = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Kr(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && rn(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4);
              var i2 = tn(en(e3.prototype), "setValue", this).call(this, t4, r3, n3);
              i2 !== void 0 && i2.changed && this.jodit_instance && this.jodit_instance.setEditorValue(i2.value);
            } }, { key: "build", value: function() {
              this.options.format = "textarea", tn(en(e3.prototype), "build", this).call(this), this.input_type = this.schema.format, this.input.setAttribute("data-schemaformat", this.input_type);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              window.Jodit ? (t4 = this.expandCallbacks("jodit", l({}, { height: 300 }, this.defaults.options.jodit || {}, this.options.jodit || {})), this.jodit_instance = new window.Jodit(this.input, t4), (this.schema.readOnly || this.schema.readonly || this.schema.template) && this.jodit_instance.setReadOnly(true), this.jodit_instance.events.on("change", function() {
                r3.value = r3.jodit_instance.getEditorValue(), r3.is_dirty = true, r3.onChange(true);
              }), this.theme.afterInputReady(this.input)) : tn(en(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 6;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.jodit_instance && this.jodit_instance.setReadOnly(false), tn(en(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.jodit_instance && this.jodit_instance.setReadOnly(true), tn(en(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.jodit_instance && (this.jodit_instance.destruct(), this.jodit_instance = null), tn(en(e3.prototype), "destroy", this).call(this);
            } }]) && Yr(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function on(t3, e3, r2, n2) {
            try {
              switch (t3.format) {
                case "ipv4":
                  !function(t4) {
                    var e4 = t4.split(".");
                    if (e4.length !== 4)
                      throw new Error("error_ipv4");
                    e4.forEach(function(t5) {
                      if (isNaN(+t5) || +t5 < 0 || +t5 > 255)
                        throw new Error("error_ipv4");
                    });
                  }(e3);
                  break;
                case "ipv6":
                  !function(t4) {
                    if (!t4.match("^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:[0-9]{1,3}.){3}[0-9]{1,3}$)(([0-9a-fA-F]{1,4}:){1,5}|:)((:[0-9a-fA-F]{1,4}){1,5}:|:)|::(?:[a-fA-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?=(?:[a-fA-F0-9]{0,4}:){0,7}[a-fA-F0-9]{0,4}$)(([0-9a-fA-F]{1,4}:){1,7}|:)((:[0-9a-fA-F]{1,4}){1,7}|:)|(?:[a-fA-F0-9]{1,4}:){7}:|:(:[a-fA-F0-9]{1,4}){7})$"))
                      throw new Error("error_ipv6");
                  }(e3);
                  break;
                case "hostname":
                  !function(t4) {
                    if (!t4.match("(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9].)+[a-zA-Z]{2,63}$)"))
                      throw new Error("error_hostname");
                  }(e3);
              }
              return [];
            } catch (t4) {
              return [{ path: r2, property: "format", message: n2(t4.message) }];
            }
          }
          function an(t3, e3) {
            var r2 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t3);
              e3 && (n2 = n2.filter(function(e4) {
                return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
              })), r2.push.apply(r2, n2);
            }
            return r2;
          }
          function sn(t3, e3, r2) {
            return (e3 = fn(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
          }
          function ln(t3) {
            return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ln(t3);
          }
          function cn(t3, e3) {
            return function(t4) {
              if (Array.isArray(t4))
                return t4;
            }(t3) || function(t4, e4) {
              var r2 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
              if (r2 != null) {
                var n2, i2, o2, a2, s2 = [], l2 = true, c2 = false;
                try {
                  if (o2 = (r2 = r2.call(t4)).next, e4 === 0) {
                    if (Object(r2) !== r2)
                      return;
                    l2 = false;
                  } else
                    for (; !(l2 = (n2 = o2.call(r2)).done) && (s2.push(n2.value), s2.length !== e4); l2 = true)
                      ;
                } catch (t5) {
                  c2 = true, i2 = t5;
                } finally {
                  try {
                    if (!l2 && r2.return != null && (a2 = r2.return(), Object(a2) !== a2))
                      return;
                  } finally {
                    if (c2)
                      throw i2;
                  }
                }
                return s2;
              }
            }(t3, e3) || hn(t3, e3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function un(t3) {
            return function(t4) {
              if (Array.isArray(t4))
                return pn(t4);
            }(t3) || function(t4) {
              if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
                return Array.from(t4);
            }(t3) || hn(t3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function hn(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return pn(t3, e3);
              var r2 = Object.prototype.toString.call(t3).slice(8, -1);
              return r2 === "Object" && t3.constructor && (r2 = t3.constructor.name), r2 === "Map" || r2 === "Set" ? Array.from(t3) : r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? pn(t3, e3) : void 0;
            }
          }
          function pn(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function dn(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, fn(n2.key), n2);
            }
          }
          function fn(t3) {
            var e3 = function(t4, e4) {
              if (ln(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ln(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ln(e3) == "symbol" ? e3 : e3 + "";
          }
          r(8431), r(7945), r(1278);
          var yn = function() {
            return t3 = function t4(e4, r2, n2, i2) {
              !function(t5, e5) {
                if (!(t5 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t4), this.jsoneditor = e4, this.schema = r2 || this.jsoneditor.schema, this.options = n2 || {}, this.translate = this.jsoneditor.translate || i2.translate, this.translateProperty = this.jsoneditor.translateProperty || i2.translateProperty, this.defaults = i2, this._validateSubSchema = { dependentRequired: function(t5, e5, r3) {
                var n3 = [];
                if (t5.dependentRequired !== void 0) {
                  var i3 = [];
                  Object.keys(t5.dependentRequired).forEach(function(r4) {
                    if (e5[r4] !== void 0) {
                      var n4 = t5.dependentRequired[r4];
                      i3 = n4.filter(function(t6) {
                        return !h(e5, t6);
                      });
                    }
                  }), i3.length > 0 && n3.push({ message: "Must have the required properties: " + i3.join(", "), path: r3 });
                }
                return n3;
              }, dependentSchemas: function(t5, e5, r3) {
                var n3 = this, i3 = [];
                return Object.keys(t5.dependentSchemas).forEach(function(o2) {
                  if (e5[o2] !== void 0) {
                    var a2 = t5.dependentSchemas[o2], s2 = n3._validateSchema(a2, e5, r3);
                    i3 = [].concat(un(i3), un(s2));
                  }
                }), i3;
              }, contains: function(t5, e5, r3) {
                var n3 = this, i3 = [], o2 = 0;
                e5.forEach(function(e6) {
                  n3._validateSchema(t5.contains, e6, r3).length === 0 && o2++;
                });
                var a2 = o2 === 0;
                return t5.minContains !== void 0 ? o2 < t5.minContains && i3.push({ message: this.translate("error_minContains", [o2, t5.minContains], t5), path: r3 }) : a2 && i3.push({ message: this.translate("error_contains", null, t5), path: r3 }), t5.maxContains !== void 0 && o2 > t5.maxContains && i3.push({ message: this.translate("error_maxContains", [o2, t5.maxContains], t5), path: r3 }), i3;
              }, if: function(t5, e5, r3) {
                if (t5.then === void 0 && t5.else === void 0)
                  return [];
                var n3 = this._validateSchema(t5.if, e5, r3), i3 = [], o2 = [];
                return t5.then !== void 0 && (i3 = this._validateSchema(t5.then, e5, r3)), t5.else !== void 0 && (o2 = this._validateSchema(t5.else, e5, r3)), t5.if === true ? i3 : t5.if === false ? o2 : n3.length === 0 ? i3 : n3.length > 0 ? o2 : [];
              }, const: function(t5, e5, r3) {
                return JSON.stringify(t5.const) === JSON.stringify(e5) ? [] : [{ path: r3, property: "const", message: this.translate("error_const", null, t5) }];
              }, enum: function(t5, e5, r3) {
                var n3 = JSON.stringify(e5);
                return t5.enum.some(function(t6) {
                  return n3 === JSON.stringify(t6);
                }) ? [] : [{ path: r3, property: "enum", message: this.translate("error_enum", null, t5) }];
              }, extends: function(t5, e5, r3) {
                var n3 = this;
                return t5.extends.reduce(function(t6, i3) {
                  return t6.push.apply(t6, un(n3._validateSchema(i3, e5, r3))), t6;
                }, []);
              }, allOf: function(t5, e5, r3) {
                var n3 = this;
                return t5.allOf.reduce(function(t6, i3) {
                  return t6.push.apply(t6, un(n3._validateSchema(i3, e5, r3))), t6;
                }, []);
              }, anyOf: function(t5, e5, r3) {
                var n3 = this;
                return t5.anyOf.some(function(t6) {
                  return !n3._validateSchema(t6, e5, r3).length;
                }) ? [] : [{ path: r3, property: "anyOf", message: this.translate("error_anyOf", null, t5) }];
              }, oneOf: function(t5, e5, r3) {
                var n3 = this, i3 = 0, o2 = [];
                t5.oneOf.forEach(function(t6, a3) {
                  var s2 = n3._validateSchema(t6, e5, r3);
                  s2.length || i3++, s2.forEach(function(t7) {
                    t7.path = "".concat(r3, ".oneOf[").concat(a3, "]").concat(t7.path.substr(r3.length));
                  }), o2.push.apply(o2, un(s2));
                });
                var a2 = [];
                return i3 !== 1 && (a2.push({ path: r3, property: "oneOf", message: this.translate("error_oneOf", [i3], t5) }), a2.push.apply(a2, o2)), a2;
              }, not: function(t5, e5, r3) {
                return this._validateSchema(t5.not, e5, r3).length ? [] : [{ path: r3, property: "not", message: this.translate("error_not", null, t5) }];
              }, type: function(t5, e5, r3) {
                var n3 = this;
                if (Array.isArray(t5.type)) {
                  if (!t5.type.some(function(t6) {
                    return n3._checkType(t6, e5);
                  }))
                    return [{ path: r3, property: "type", message: this.translate("error_type_union", null, t5) }];
                } else if (["date", "time", "datetime-local"].includes(t5.format) && t5.type === "integer") {
                  if (!this._checkType("string", "".concat(e5)))
                    return [{ path: r3, property: "type", message: this.translate("error_type", [t5.format], t5) }];
                } else if (!this._checkType(t5.type, e5))
                  return [{ path: r3, property: "type", message: this.translate("error_type", [t5.type], t5) }];
                return [];
              }, disallow: function(t5, e5, r3) {
                var n3 = this;
                if (Array.isArray(t5.disallow)) {
                  if (t5.disallow.some(function(t6) {
                    return n3._checkType(t6, e5);
                  }))
                    return [{ path: r3, property: "disallow", message: this.translate("error_disallow_union", null, t5) }];
                } else if (this._checkType(t5.disallow, e5))
                  return [{ path: r3, property: "disallow", message: this.translate("error_disallow", [t5.disallow], t5) }];
                return [];
              } }, this._validateNumberSubSchema = { multipleOf: function(t5, e5, r3) {
                return this._validateNumberSubSchemaMultipleDivisible(t5, e5, r3);
              }, divisibleBy: function(t5, e5, r3) {
                return this._validateNumberSubSchemaMultipleDivisible(t5, e5, r3);
              }, maximum: function(t5, e5, r3) {
                var n3 = t5.exclusiveMaximum ? e5 < t5.maximum : e5 <= t5.maximum;
                return window.math ? n3 = window.math[t5.exclusiveMaximum ? "smaller" : "smallerEq"](window.math.bignumber(e5), window.math.bignumber(t5.maximum)) : window.Decimal && (n3 = new window.Decimal(e5)[t5.exclusiveMaximum ? "lt" : "lte"](new window.Decimal(t5.maximum))), n3 ? [] : [{ path: r3, property: "maximum", message: this.translate(t5.exclusiveMaximum ? "error_maximum_excl" : "error_maximum_incl", [t5.maximum], t5) }];
              }, minimum: function(t5, e5, r3) {
                var n3 = t5.exclusiveMinimum ? e5 > t5.minimum : e5 >= t5.minimum;
                return window.math ? n3 = window.math[t5.exclusiveMinimum ? "larger" : "largerEq"](window.math.bignumber(e5), window.math.bignumber(t5.minimum)) : window.Decimal && (n3 = new window.Decimal(e5)[t5.exclusiveMinimum ? "gt" : "gte"](new window.Decimal(t5.minimum))), n3 ? [] : [{ path: r3, property: "minimum", message: this.translate(t5.exclusiveMinimum ? "error_minimum_excl" : "error_minimum_incl", [t5.minimum], t5) }];
              } }, this._validateStringSubSchema = { maxLength: function(t5, e5, r3) {
                var n3 = [];
                return "".concat(e5).length > t5.maxLength && n3.push({ path: r3, property: "maxLength", message: this.translate("error_maxLength", [t5.maxLength], t5) }), n3;
              }, minLength: function(t5, e5, r3) {
                return "".concat(e5).length < t5.minLength ? [{ path: r3, property: "minLength", message: this.translate(t5.minLength === 1 ? "error_notempty" : "error_minLength", [t5.minLength], t5) }] : [];
              }, pattern: function(t5, e5, r3) {
                return new RegExp(t5.pattern).test(e5) ? [] : [{ path: r3, property: "pattern", message: t5.options && t5.options.patternmessage ? t5.options.patternmessage : this.translate("error_pattern", [t5.pattern], t5) }];
              } }, this._validateArraySubSchema = { items: function(t5, e5, r3) {
                var n3 = this, i3 = [];
                if (Array.isArray(t5.items))
                  for (var o2 = 0; o2 < e5.length; o2++)
                    if (t5.items[o2])
                      i3.push.apply(i3, un(this._validateSchema(t5.items[o2], e5[o2], "".concat(r3, ".").concat(o2))));
                    else {
                      if (t5.additionalItems === true)
                        break;
                      if (!t5.additionalItems) {
                        if (t5.additionalItems === false) {
                          i3.push({ path: r3, property: "additionalItems", message: this.translate("error_additionalItems", null, t5) });
                          break;
                        }
                        break;
                      }
                      i3.push.apply(i3, un(this._validateSchema(t5.additionalItems, e5[o2], "".concat(r3, ".").concat(o2))));
                    }
                else
                  e5.forEach(function(e6, o3) {
                    i3.push.apply(i3, un(n3._validateSchema(t5.items, e6, "".concat(r3, ".").concat(o3))));
                  });
                return i3;
              }, maxItems: function(t5, e5, r3) {
                return e5.length > t5.maxItems ? [{ path: r3, property: "maxItems", message: this.translate("error_maxItems", [t5.maxItems], t5) }] : [];
              }, minItems: function(t5, e5, r3) {
                return e5.length < t5.minItems ? [{ path: r3, property: "minItems", message: this.translate("error_minItems", [t5.minItems], t5) }] : [];
              }, uniqueItems: function(t5, e5, r3) {
                for (var n3 = {}, i3 = 0; i3 < e5.length; i3++) {
                  var o2 = JSON.stringify(e5[i3]);
                  if (n3[o2])
                    return [{ path: r3, property: "uniqueItems", message: this.translate("error_uniqueItems", null, t5) }];
                  n3[o2] = true;
                }
                return [];
              } }, this._validateObjectSubSchema = { maxProperties: function(t5, e5, r3) {
                return Object.keys(e5).length > t5.maxProperties ? [{ path: r3, property: "maxProperties", message: this.translate("error_maxProperties", [t5.maxProperties], t5) }] : [];
              }, minProperties: function(t5, e5, r3) {
                return Object.keys(e5).length < t5.minProperties ? [{ path: r3, property: "minProperties", message: this.translate("error_minProperties", [t5.minProperties], t5) }] : [];
              }, required: function(t5, e5, r3) {
                var n3 = this, i3 = [];
                return Array.isArray(t5.required) && t5.required.forEach(function(o2) {
                  if (e5[o2] === void 0) {
                    var a2 = n3.jsoneditor.getEditor("".concat(r3, ".").concat(o2));
                    a2 && a2.dependenciesFulfilled === false || a2 && ["button", "info"].includes(a2.schema.format || a2.schema.type) || i3.push({ path: r3, property: "required", message: n3.translate("error_required", [t5 && t5.properties && t5.properties[o2] && t5.properties[o2].title ? t5.properties[o2].title : o2], t5) });
                  }
                }), i3;
              }, properties: function(t5, e5, r3, n3) {
                var i3 = this, o2 = [];
                return Object.entries(t5.properties).forEach(function(t6) {
                  var a2 = cn(t6, 2), s2 = a2[0], l2 = a2[1];
                  n3[s2] = true, o2.push.apply(o2, un(i3._validateSchema(l2, e5[s2], "".concat(r3, ".").concat(s2))));
                }), o2;
              }, patternProperties: function(t5, e5, r3, n3) {
                var i3 = this, o2 = [];
                return Object.entries(t5.patternProperties).forEach(function(t6) {
                  var a2 = cn(t6, 2), s2 = a2[0], l2 = a2[1], c2 = new RegExp(s2);
                  Object.entries(e5).forEach(function(t7) {
                    var e6 = cn(t7, 2), a3 = e6[0], s3 = e6[1];
                    c2.test(a3) && (n3[a3] = true, o2.push.apply(o2, un(i3._validateSchema(l2, s3, "".concat(r3, ".").concat(a3)))));
                  });
                }), o2;
              } }, this._validateObjectSubSchema2 = { propertyNames: function(t5, e5, r3, n3) {
                for (var i3, o2 = this, a2 = [], s2 = Object.keys(e5), l2 = null, c2 = function() {
                  var e6 = "";
                  return l2 = s2[u2], typeof t5.propertyNames == "boolean" ? t5.propertyNames === true ? 0 : (a2.push({ path: r3, property: "propertyNames", message: o2.translate("error_property_names_false", [l2], t5) }), 1) : Object.entries(t5.propertyNames).every(function(n4) {
                    var i4 = cn(n4, 2), s3 = i4[0], c3 = i4[1], u3 = false;
                    switch (s3) {
                      case "maxLength":
                        if (typeof c3 != "number") {
                          e6 = "error_property_names_maxlength";
                          break;
                        }
                        if (l2.length > c3) {
                          e6 = "error_property_names_exceeds_maxlength";
                          break;
                        }
                        return true;
                      case "const":
                        if (c3 !== l2) {
                          e6 = "error_property_names_const_mismatch";
                          break;
                        }
                        return true;
                      case "enum":
                        if (!Array.isArray(c3)) {
                          e6 = "error_property_names_enum";
                          break;
                        }
                        if (c3.forEach(function(t6) {
                          t6 === l2 && (u3 = true);
                        }), !u3) {
                          e6 = "error_property_names_enum_mismatch";
                          break;
                        }
                        return true;
                      case "pattern":
                        if (typeof c3 != "string") {
                          e6 = "error_property_names_pattern";
                          break;
                        }
                        if (!new RegExp(c3).test(l2)) {
                          e6 = "error_property_names_pattern_mismatch";
                          break;
                        }
                        return true;
                      default:
                        return a2.push({ path: r3, property: "propertyNames", message: o2.translate("error_property_names_unsupported", [s3], t5) }), false;
                    }
                    return a2.push({ path: r3, property: "propertyNames", message: o2.translate(e6, [l2], t5) }), false;
                  }) ? void 0 : 1;
                }, u2 = 0; u2 < s2.length && ((i3 = c2()) === 0 || i3 !== 1); u2++)
                  ;
                return a2;
              }, additionalProperties: function(t5, e5, r3, n3) {
                for (var i3 = [], o2 = Object.keys(e5), a2 = 0; a2 < o2.length; a2++) {
                  var s2 = o2[a2];
                  if (!n3[s2]) {
                    if (!t5.additionalProperties) {
                      i3.push({ path: r3, property: "additionalProperties", message: this.translate("error_additional_properties", [s2], t5) });
                      break;
                    }
                    if (t5.additionalProperties === true)
                      break;
                    i3.push.apply(i3, un(this._validateSchema(t5.additionalProperties, e5[s2], "".concat(r3, ".").concat(s2))));
                  }
                }
                return i3;
              }, dependencies: function(t5, e5, r3) {
                var n3 = this, i3 = [];
                return Object.entries(t5.dependencies).forEach(function(o2) {
                  var a2 = cn(o2, 2), s2 = a2[0], l2 = a2[1];
                  e5[s2] !== void 0 && (Array.isArray(l2) ? l2.forEach(function(o3) {
                    e5[o3] === void 0 && i3.push({ path: r3, property: "dependencies", message: n3.translate("error_dependency", [o3], t5) });
                  }) : i3.push.apply(i3, un(n3._validateSchema(l2, e5, r3))));
                }), i3;
              } };
            }, e3 = [{ key: "fitTest", value: function(t4, e4) {
              var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e7, n2 = { match: 0, extra: 0 };
              if (ln(t4) === "object" && t4 !== null) {
                var i2 = this._getSchema(e4);
                if (i2.anyOf) {
                  var o2, a2 = function(t5) {
                    for (var e5 = 1; e5 < arguments.length; e5++) {
                      var r3 = arguments[e5] != null ? arguments[e5] : {};
                      e5 % 2 ? an(Object(r3), true).forEach(function(e6) {
                        sn(t5, e6, r3[e6]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(r3)) : an(Object(r3)).forEach(function(e6) {
                        Object.defineProperty(t5, e6, Object.getOwnPropertyDescriptor(r3, e6));
                      });
                    }
                    return t5;
                  }({}, n2), s2 = function(t5, e5) {
                    var r3 = typeof Symbol != "undefined" && t5[Symbol.iterator] || t5["@@iterator"];
                    if (!r3) {
                      if (Array.isArray(t5) || (r3 = hn(t5))) {
                        r3 && (t5 = r3);
                        var n3 = 0, i3 = function() {
                        };
                        return { s: i3, n: function() {
                          return n3 >= t5.length ? { done: true } : { done: false, value: t5[n3++] };
                        }, e: function(t6) {
                          throw t6;
                        }, f: i3 };
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o3, a3 = true, s3 = false;
                    return { s: function() {
                      r3 = r3.call(t5);
                    }, n: function() {
                      var t6 = r3.next();
                      return a3 = t6.done, t6;
                    }, e: function(t6) {
                      s3 = true, o3 = t6;
                    }, f: function() {
                      try {
                        a3 || r3.return == null || r3.return();
                      } finally {
                        if (s3)
                          throw o3;
                      }
                    } };
                  }(i2.anyOf);
                  try {
                    for (s2.s(); !(o2 = s2.n()).done; ) {
                      var l2 = o2.value, c2 = this.fitTest(t4, l2, r2);
                      (c2.match > a2.match || c2.match === a2.match && c2.extra < a2.extra) && (a2 = c2);
                    }
                  } catch (t5) {
                    s2.e(t5);
                  } finally {
                    s2.f();
                  }
                  return a2;
                }
                var u2 = this._getSchema(e4).properties;
                for (var p2 in u2)
                  if (h(u2, p2)) {
                    if (ln(t4[p2]) === "object" && ln(u2[p2]) === "object" && ln(u2[p2].properties) === "object") {
                      var d2 = this.fitTest(t4[p2], u2[p2], r2 / 100);
                      n2.match += d2.match, n2.extra += d2.extra;
                    }
                    t4[p2] !== void 0 && (n2.match += r2);
                  } else
                    n2.extra += r2;
              }
              return n2;
            } }, { key: "_getSchema", value: function(t4) {
              return t4 === void 0 ? l({}, this.jsoneditor.expandRefs(this.schema)) : t4;
            } }, { key: "validate", value: function(t4) {
              return this._validateSchema(this.schema, t4);
            } }, { key: "_validateSchema", value: function(t4, e4, r2) {
              var n2 = this, i2 = [];
              return r2 = r2 || this.jsoneditor.root.formname, t4 = l({}, this.jsoneditor.expandRefs(t4)), e4 === void 0 ? this._validateV3Required(t4, e4, r2) : (Object.keys(t4).forEach(function(o2) {
                n2._validateSubSchema[o2] && i2.push.apply(i2, un(n2._validateSubSchema[o2].call(n2, t4, e4, r2)));
              }), i2.push.apply(i2, un(this._validateByValueType(t4, e4, r2))), t4.links && t4.links.forEach(function(o2, a2) {
                o2.rel && o2.rel.toLowerCase() === "describedby" && (t4 = n2._expandSchemaLink(t4, a2), i2.push.apply(i2, un(n2._validateSchema(t4, e4, r2, n2.translate))));
              }), ["date", "time", "datetime-local"].includes(t4.format) && i2.push.apply(i2, un(this._validateDateTimeSubSchema(t4, e4, r2))), ["uuid"].includes(t4.format) && i2.push.apply(i2, un(this._validateUUIDSchema(t4, e4, r2))), i2.push.apply(i2, un(this._validateCustomValidator(t4, e4, r2))), this._removeDuplicateErrors(i2));
            } }, { key: "_expandSchemaLink", value: function(t4, e4) {
              var r2 = t4.links[e4].href, n2 = this.jsoneditor.root.getValue(), i2 = this.jsoneditor.compileTemplate(r2, this.jsoneditor.template), o2 = document.location.origin + document.location.pathname + i2(n2);
              return t4.links = t4.links.slice(0, e4).concat(t4.links.slice(e4 + 1)), l({}, t4, this.jsoneditor.refs[o2]);
            } }, { key: "_validateV3Required", value: function(t4, e4, r2) {
              return (t4.required !== void 0 && t4.required === true || t4.required === void 0 && this.jsoneditor.options.required_by_default === true) && t4.type !== "info" ? [{ path: r2, property: "required", message: this.translate("error_notset", null, t4) }] : [];
            } }, { key: "_validateByValueType", value: function(t4, e4, r2) {
              var n2 = this, i2 = [];
              if (e4 === null)
                return i2;
              if (typeof e4 == "number")
                Object.keys(t4).forEach(function(o3) {
                  n2._validateNumberSubSchema[o3] && i2.push.apply(i2, un(n2._validateNumberSubSchema[o3].call(n2, t4, e4, r2)));
                });
              else if (typeof e4 == "string")
                Object.keys(t4).forEach(function(o3) {
                  n2._validateStringSubSchema[o3] && i2.push.apply(i2, un(n2._validateStringSubSchema[o3].call(n2, t4, e4, r2)));
                });
              else if (Array.isArray(e4))
                Object.keys(t4).forEach(function(o3) {
                  n2._validateArraySubSchema[o3] && i2.push.apply(i2, un(n2._validateArraySubSchema[o3].call(n2, t4, e4, r2)));
                });
              else if (ln(e4) === "object") {
                var o2 = {};
                Object.keys(t4).forEach(function(a2) {
                  n2._validateObjectSubSchema[a2] && i2.push.apply(i2, un(n2._validateObjectSubSchema[a2].call(n2, t4, e4, r2, o2)));
                }), t4.additionalProperties !== void 0 || !this.jsoneditor.options.no_additional_properties || t4.oneOf || t4.anyOf || t4.allOf || (t4.additionalProperties = false), Object.keys(t4).forEach(function(a2) {
                  n2._validateObjectSubSchema2[a2] !== void 0 && i2.push.apply(i2, un(n2._validateObjectSubSchema2[a2].call(n2, t4, e4, r2, o2)));
                });
              }
              return i2;
            } }, { key: "_validateUUIDSchema", value: function(t4, e4, r2) {
              return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e4) ? [] : [{ path: r2, property: "format", message: this.translate("error_pattern", ["^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"], t4) }];
            } }, { key: "_validateNumberSubSchemaMultipleDivisible", value: function(t4, e4, r2) {
              var n2 = t4.multipleOf || t4.divisibleBy, i2 = e4 / n2 === Math.floor(e4 / n2);
              return window.math ? i2 = window.math.mod(window.math.bignumber(e4), window.math.bignumber(n2)).equals(0) : window.Decimal && (i2 = new window.Decimal(e4).mod(new window.Decimal(n2)).equals(0)), i2 ? [] : [{ path: r2, property: t4.multipleOf ? "multipleOf" : "divisibleBy", message: this.translate("error_multipleOf", [n2], t4) }];
            } }, { key: "_validateDateTimeSubSchema", value: function(t4, e4, r2) {
              var n2 = this, i2 = this.jsoneditor.getEditor(r2), o2 = i2 && i2.flatpickr ? i2.flatpickr.config.dateFormat : { date: '"YYYY-MM-DD"', time: '"HH:MM"', "datetime-local": '"YYYY-MM-DD HH:MM"' }[t4.format];
              if (t4.type === "integer")
                return function(t5, e5, r3) {
                  return 1 * e5 < 1 ? [{ path: r3, property: "format", message: n2.translate("error_invalid_epoch", null, t5) }] : e5 !== Math.abs(parseInt(e5)) ? [{ path: r3, property: "format", message: n2.translate("error_".concat(t5.format.replace(/-/g, "_")), [o2], t5) }] : [];
                }(t4, e4, r2);
              if (i2 && i2.flatpickr) {
                if (i2)
                  return function(t5, e5, r3, i3) {
                    if (e5 !== "") {
                      var o3;
                      if (i3.flatpickr.config.mode !== "single") {
                        var a2 = i3.flatpickr.config.mode === "range" ? i3.flatpickr.l10n.rangeSeparator : ", ";
                        o3 = i3.flatpickr.selectedDates.map(function(t6) {
                          return i3.flatpickr.formatDate(t6, i3.flatpickr.config.dateFormat);
                        }).join(a2);
                      }
                      try {
                        if (o3) {
                          if (o3 !== e5)
                            throw new Error("".concat(i3.flatpickr.config.mode, " mismatch"));
                        } else if (i3.flatpickr.formatDate(i3.flatpickr.parseDate(e5, i3.flatpickr.config.dateFormat), i3.flatpickr.config.dateFormat) !== e5)
                          throw new Error("mismatch");
                      } catch (e6) {
                        var s2 = i3.flatpickr.config.errorDateFormat !== void 0 ? i3.flatpickr.config.errorDateFormat : i3.flatpickr.config.dateFormat;
                        return [{ path: r3, property: "format", message: n2.translate("error_".concat(i3.format.replace(/-/g, "_")), [s2], t5) }];
                      }
                    }
                    return [];
                  }(t4, e4, r2, i2);
              } else if (!{ date: /^(\d{4}\D\d{2}\D\d{2})$/, time: /^(\d{2}:\d{2}(?::\d{2})?)$/, "datetime-local": /^(\d{4}\D\d{2}\D\d{2}[ T]\d{2}:\d{2}(?::\d{2})?)$/ }[t4.format].test(e4))
                return [{ path: r2, property: "format", message: this.translate("error_".concat(t4.format.replace(/-/g, "_")), [o2], t4) }];
              return [];
            } }, { key: "_validateCustomValidator", value: function(t4, e4, r2) {
              var n2 = this, i2 = [];
              i2.push.apply(i2, un(on.call(this, t4, e4, r2, this.translate)));
              var o2 = function(o3) {
                i2.push.apply(i2, un(o3.call(n2, t4, e4, r2)));
              };
              return this.defaults.custom_validators.forEach(o2), this.options.custom_validators && this.options.custom_validators.forEach(o2), i2;
            } }, { key: "_removeDuplicateErrors", value: function(t4) {
              return t4.reduce(function(t5, e4) {
                var r2 = true;
                return t5 || (t5 = []), t5.forEach(function(t6) {
                  t6.message === e4.message && t6.path === e4.path && t6.property === e4.property && (t6.errorcount++, r2 = false);
                }), r2 && (e4.errorcount = 1, t5.push(e4)), t5;
              }, []);
            } }, { key: "_checkType", value: function(t4, e4) {
              var r2 = { string: function(t5) {
                return typeof t5 == "string";
              }, number: function(t5) {
                return typeof t5 == "number";
              }, integer: function(t5) {
                return typeof t5 == "number" && t5 === Math.floor(t5);
              }, boolean: function(t5) {
                return typeof t5 == "boolean";
              }, array: function(t5) {
                return Array.isArray(t5);
              }, object: function(t5) {
                return t5 !== null && !Array.isArray(t5) && ln(t5) === "object";
              }, null: function(t5) {
                return t5 === null;
              } };
              return typeof t4 == "string" ? !r2[t4] || r2[t4](e4) : !this._validateSchema(t4, e4).length;
            } }], e3 && dn(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
            var t3, e3;
          }();
          function mn(t3) {
            return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, mn(t3);
          }
          function vn(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, bn(n2.key), n2);
            }
          }
          function bn(t3) {
            var e3 = function(t4, e4) {
              if (mn(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (mn(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return mn(e3) == "symbol" ? e3 : e3 + "";
          }
          function gn(t3, e3, r2) {
            return e3 = kn(e3), function(t4, e4) {
              if (e4 && (mn(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, wn() ? Reflect.construct(e3, r2 || [], kn(t3).constructor) : e3.apply(t3, r2));
          }
          function wn() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (wn = function() {
              return !!t3;
            })();
          }
          function _n() {
            return _n = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = kn(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, _n.apply(this, arguments);
          }
          function kn(t3) {
            return kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, kn(t3);
          }
          function jn(t3, e3) {
            return jn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, jn(t3, e3);
          }
          var On = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), gn(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && jn(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "register", value: function() {
              if (this.editors) {
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].unregister();
                this.editors[this.type] && this.editors[this.type].register();
              }
              _n(kn(e3.prototype), "register", this).call(this);
            } }, { key: "unregister", value: function() {
              if (_n(kn(e3.prototype), "unregister", this).call(this), this.editors)
                for (var t4 = 0; t4 < this.editors.length; t4++)
                  this.editors[t4] && this.editors[t4].unregister();
            } }, { key: "getNumColumns", value: function() {
              return this.editors[this.type] ? Math.max(this.editors[this.type].getNumColumns(), 4) : 4;
            } }, { key: "enable", value: function() {
              if (!this.always_disabled) {
                if (this.editors)
                  for (var t4 = 0; t4 < this.editors.length; t4++)
                    this.editors[t4] && this.editors[t4].enable();
                this.switcher.disabled = false, _n(kn(e3.prototype), "enable", this).call(this);
              }
            } }, { key: "disable", value: function(t4) {
              if (t4 && (this.always_disabled = true), this.editors)
                for (var r3 = 0; r3 < this.editors.length; r3++)
                  this.editors[r3] && this.editors[r3].disable(t4);
              this.switcher.disabled = true, _n(kn(e3.prototype), "disable", this).call(this);
            } }, { key: "switchEditor", value: function(t4) {
              var e4 = this;
              this.lastType = this.type, this.editors[t4] || this.buildChildEditor(t4);
              var r3 = this.getValue();
              this.type = t4, this.register(), this.editors.forEach(function(t5, n3) {
                var i2, o2;
                t5 && (e4.type === n3 ? (e4.keep_only_existing_values && (i2 = t5.getValue(), o2 = r3, Object.keys(o2).forEach(function(t6) {
                  t6 in i2 && (i2[t6] = o2[t6]);
                }), r3 = i2), (e4.keep_values || e4.if) && t5.setValue(r3, true), t5.container.style.display = "") : t5.container.style.display = "none");
              }), this.onChange(true, false, { event: "switch", data: { type: this.lastType, path: this.editors[t4].path } }), this.refreshValue(), this.refreshHeaderText();
            } }, { key: "buildChildEditor", value: function(t4) {
              var e4, r3, n3 = this, i2 = this.types[t4], o2 = this.theme.getChildEditorHolder();
              this.editor_holder.appendChild(o2), typeof i2 == "string" ? (r3 = l({}, this.schema)).type = i2 : (r3 = l({}, this.schema, i2), r3 = this.jsoneditor.expandRefs(r3), i2 && i2.required && Array.isArray(i2.required) && this.schema.required && Array.isArray(this.schema.required) && (r3.required = this.schema.required.concat(i2.required))), (e4 = r3) !== null && e4 !== void 0 && (e4 = e4.options) !== null && e4 !== void 0 && e4.dependencies && delete r3.options.dependencies;
              var a2 = this.jsoneditor.getEditorClass(r3);
              this.editors[t4] = this.jsoneditor.createEditor(a2, { jsoneditor: this.jsoneditor, schema: r3, container: o2, path: this.path, parent: this, required: true }), this.editors[t4].preBuild(), this.editors[t4].build(), this.editors[t4].postBuild(), this.editors[t4].header && this.theme.visuallyHidden(this.editors[t4].header), this.editors[t4].option = this.switcher_options[t4], o2.addEventListener("change_header_text", function() {
                n3.refreshHeaderText();
              }), t4 !== this.type && (o2.style.display = "none");
            } }, { key: "preBuild", value: function() {
              if (this.types = [], this.type = 0, this.editors = [], this.validators = [], this.keep_values = true, this.jsoneditor.options.keep_oneof_values !== void 0 && (this.keep_values = this.jsoneditor.options.keep_oneof_values), this.options.keep_oneof_values !== void 0 && (this.keep_values = this.options.keep_oneof_values), this.keep_only_existing_values = false, this.jsoneditor.options.keep_only_existing_values !== void 0 && (this.keep_only_existing_values = this.jsoneditor.options.keep_only_existing_values), this.options.keep_only_existing_values !== void 0 && (this.keep_only_existing_values = this.options.keep_only_existing_values), this.schema.oneOf)
                this.oneOf = true, this.types = this.schema.oneOf, delete this.schema.oneOf;
              else if (this.schema.anyOf)
                this.anyOf = true, this.types = this.schema.anyOf, delete this.schema.anyOf;
              else if (this.schema.if)
                this.if = true, this.ifSchema = JSON.parse(JSON.stringify(this.schema.if)), this.thenSchema = { title: "then" }, this.elseSchema = { title: "else" }, this.types = [], this.schema.then && m(this.thenSchema, this.schema, this.schema.then), this.schema.else && m(this.elseSchema, this.schema, this.schema.else), this.types.push(this.thenSchema), this.types.push(this.elseSchema), this.types.forEach(function(t5) {
                  delete t5.if, delete t5.then, delete t5.else;
                }), delete this.schema.if;
              else {
                if (this.schema.type && this.schema.type !== "any")
                  Array.isArray(this.schema.type) ? this.types = this.schema.type : this.types = [this.schema.type];
                else if (this.types = ["string", "number", "integer", "boolean", "object", "array", "null"], this.schema.disallow) {
                  var t4 = this.schema.disallow;
                  mn(t4) === "object" && Array.isArray(t4) || (t4 = [t4]);
                  var e4 = [];
                  this.types.forEach(function(r3) {
                    t4.includes(r3) || e4.push(r3);
                  }), this.types = e4;
                }
                delete this.schema.type;
              }
              this.display_text = this.getDisplayText(this.types);
            } }, { key: "build", value: function() {
              var t4 = this, e4 = this.container;
              this.header = this.label = this.theme.getLabelLike(this.getTitle(), this.isRequired()), this.switcher = this.theme.getSwitcher(this.display_text), this.switcher.setAttribute("id", this.formname + "switcher"), this.switcherLabel = this.theme.getHiddenLabel(this.formname + " switcher"), this.switcherLabel.setAttribute("for", this.formname + "switcher"), this.if || (this.container.appendChild(this.header), e4.appendChild(this.switcherLabel), e4.appendChild(this.switcher)), this.switcher.addEventListener("change", function(e5) {
                e5.preventDefault(), e5.stopPropagation(), t4.switchEditor(t4.display_text.indexOf(e5.currentTarget.value)), t4.onChange(true);
              }), this.editor_holder = document.createElement("div"), e4.appendChild(this.editor_holder);
              var r3 = {};
              this.jsoneditor.options.custom_validators && (r3.custom_validators = this.jsoneditor.options.custom_validators), this.switcher_options = this.theme.getSwitcherOptions(this.switcher), this.types.forEach(function(e5, n3) {
                var i2;
                t4.editors[n3] = false, typeof e5 == "string" ? (i2 = l({}, t4.schema)).type = e5 : (i2 = l({}, t4.schema, e5), e5.required && Array.isArray(e5.required) && t4.schema.required && Array.isArray(t4.schema.required) && (i2.required = t4.schema.required.concat(e5.required))), t4.validators[n3] = new yn(t4.jsoneditor, i2, r3, t4.defaults);
              }), this.jsoneditor.on("change", function() {
                t4.switchIf();
              }), this.switchEditor(0);
            } }, { key: "onChildEditorChange", value: function(t4, r3) {
              this.editors[this.type] && (this.refreshValue(), this.refreshHeaderText()), _n(kn(e3.prototype), "onChildEditorChange", this).call(this, t4, r3);
            } }, { key: "refreshHeaderText", value: function() {
              var t4 = this.getDisplayText(this.types);
              Array.from(this.switcher_options).forEach(function(e4, r3) {
                e4.textContent = t4[r3];
              });
            } }, { key: "refreshValue", value: function() {
              this.editors[this.type] && (this.value = this.editors[this.type].getValue());
            } }, { key: "switchIf", value: function() {
              if (this.ifSchema && this.value) {
                var t4 = this.getIfType(this.value);
                this.lastType !== t4 && (this.switchEditor(t4), this.editors[this.type].setValue(this.value, true)), this.switcher.value = this.display_text[this.type];
              }
            } }, { key: "getIfType", value: function(t4) {
              return this.jsoneditor.validator._validateSchema(this.ifSchema, t4).length === 0 ? 0 : 1;
            } }, { key: "setValue", value: function(t4, e4) {
              var r3 = this;
              t4 = this.applyConstFilter(t4);
              var n3 = this.type, i2 = { match: 0, extra: 0, i: this.type }, o2 = { match: 0, i: null };
              this.validators.forEach(function(e5, n4) {
                var a3 = null;
                r3.anyOf !== void 0 && r3.anyOf && (a3 = e5.fitTest(t4), (i2.match < a3.match || i2.match === a3.match && i2.extra > a3.extra) && ((i2 = a3).i = n4)), e5.validate(t4).length || o2.i !== null ? i2 = o2 : (o2.i = n4, a3 !== null && (o2.match = a3.match));
              });
              var a2 = o2.i;
              this.anyOf !== void 0 && this.anyOf && o2.match < i2.match && (a2 = i2.i), this.if && (a2 = this.getIfType(t4)), a2 === null && (a2 = this.type), this.type = a2, this.switcher.value = this.display_text[a2];
              var s2 = this.type !== n3;
              s2 && (this.switchEditor(this.type), this.editors[this.type].setValue(t4, e4)), t4 !== void 0 && this.editors[this.type].setValue(t4, e4), this.refreshValue(), this.onChange(s2);
            } }, { key: "destroy", value: function() {
              this.editors.forEach(function(t4) {
                t4 && t4.destroy();
              }), this.editor_holder && this.editor_holder.parentNode && this.editor_holder.parentNode.removeChild(this.editor_holder), this.switcher && this.switcher.parentNode && this.switcher.parentNode.removeChild(this.switcher), _n(kn(e3.prototype), "destroy", this).call(this);
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this;
              if (this.oneOf || this.anyOf) {
                var r3 = this.oneOf ? "oneOf" : "anyOf";
                this.editors.forEach(function(n3, i2) {
                  if (n3) {
                    var o2 = "".concat(e4.path, ".").concat(r3, "[").concat(i2, "]");
                    n3.showValidationErrors(t4.reduce(function(t5, r4) {
                      if (r4.path.startsWith(o2) || r4.path === o2.substr(0, r4.path.length)) {
                        var n4 = l({}, r4);
                        r4.path.startsWith(o2) && (n4.path = e4.path + n4.path.substr(o2.length)), t5.push(n4);
                      }
                      return t5;
                    }, []));
                  }
                });
              } else
                this.editors.forEach(function(e5) {
                  e5 && e5.showValidationErrors(t4);
                });
            } }, { key: "addLinks", value: function() {
            } }]) && vn(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function xn(t3) {
            return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, xn(t3);
          }
          function Cn(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, En(n2.key), n2);
            }
          }
          function En(t3) {
            var e3 = function(t4, e4) {
              if (xn(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (xn(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return xn(e3) == "symbol" ? e3 : e3 + "";
          }
          function Sn(t3, e3, r2) {
            return e3 = Ln(e3), function(t4, e4) {
              if (e4 && (xn(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Pn() ? Reflect.construct(e3, r2 || [], Ln(t3).constructor) : e3.apply(t3, r2));
          }
          function Pn() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Pn = function() {
              return !!t3;
            })();
          }
          function Ln(t3) {
            return Ln = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ln(t3);
          }
          function Tn(t3, e3) {
            return Tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Tn(t3, e3);
          }
          var An = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Sn(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Tn(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return null;
            } }, { key: "setValue", value: function() {
              this.onChange();
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }]) && Cn(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function Rn(t3, e3) {
            var r2 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t3);
              e3 && (n2 = n2.filter(function(e4) {
                return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
              })), r2.push.apply(r2, n2);
            }
            return r2;
          }
          function In(t3) {
            for (var e3 = 1; e3 < arguments.length; e3++) {
              var r2 = arguments[e3] != null ? arguments[e3] : {};
              e3 % 2 ? Rn(Object(r2), true).forEach(function(e4) {
                Bn(t3, e4, r2[e4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : Rn(Object(r2)).forEach(function(e4) {
                Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r2, e4));
              });
            }
            return t3;
          }
          function Bn(t3, e3, r2) {
            return (e3 = Hn(e3)) in t3 ? Object.defineProperty(t3, e3, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e3] = r2, t3;
          }
          function Nn(t3, e3) {
            return function(t4) {
              if (Array.isArray(t4))
                return t4;
            }(t3) || function(t4, e4) {
              var r2 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
              if (r2 != null) {
                var n2, i2, o2, a2, s2 = [], l2 = true, c2 = false;
                try {
                  if (o2 = (r2 = r2.call(t4)).next, e4 === 0) {
                    if (Object(r2) !== r2)
                      return;
                    l2 = false;
                  } else
                    for (; !(l2 = (n2 = o2.call(r2)).done) && (s2.push(n2.value), s2.length !== e4); l2 = true)
                      ;
                } catch (t5) {
                  c2 = true, i2 = t5;
                } finally {
                  try {
                    if (!l2 && r2.return != null && (a2 = r2.return(), Object(a2) !== a2))
                      return;
                  } finally {
                    if (c2)
                      throw i2;
                  }
                }
                return s2;
              }
            }(t3, e3) || function(t4, e4) {
              if (t4) {
                if (typeof t4 == "string")
                  return Dn(t4, e4);
                var r2 = Object.prototype.toString.call(t4).slice(8, -1);
                return r2 === "Object" && t4.constructor && (r2 = t4.constructor.name), r2 === "Map" || r2 === "Set" ? Array.from(t4) : r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? Dn(t4, e4) : void 0;
              }
            }(t3, e3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function Dn(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function Fn(t3) {
            return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Fn(t3);
          }
          function Vn(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Hn(n2.key), n2);
            }
          }
          function Hn(t3) {
            var e3 = function(t4, e4) {
              if (Fn(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Fn(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Fn(e3) == "symbol" ? e3 : e3 + "";
          }
          function zn(t3, e3, r2) {
            return e3 = Un(e3), function(t4, e4) {
              if (e4 && (Fn(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Mn() ? Reflect.construct(e3, r2 || [], Un(t3).constructor) : e3.apply(t3, r2));
          }
          function Mn() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Mn = function() {
              return !!t3;
            })();
          }
          function qn() {
            return qn = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Un(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, qn.apply(this, arguments);
          }
          function Un(t3) {
            return Un = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Un(t3);
          }
          function Gn(t3, e3) {
            return Gn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Gn(t3, e3);
          }
          var $n = function(t3) {
            function e3(t4, r3, n3) {
              var i2;
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), (i2 = zn(this, e3, [t4, r3])).currentDepth = n3, i2;
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Gn(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getChildEditors", value: function() {
              return this.editors;
            } }, { key: "register", value: function() {
              qn(Un(e3.prototype), "register", this).call(this), this.editors && Object.values(this.editors).forEach(function(t4) {
                return t4.register();
              });
            } }, { key: "unregister", value: function() {
              qn(Un(e3.prototype), "unregister", this).call(this), this.editors && Object.values(this.editors).forEach(function(t4) {
                return t4.unregister();
              });
            } }, { key: "getNumColumns", value: function() {
              return Math.max(Math.min(12, this.maxwidth), 3);
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.editjson_control && (this.editjson_control.disabled = false), this.addproperty_button && (this.addproperty_button.disabled = false), qn(Un(e3.prototype), "enable", this).call(this), this.editors && Object.values(this.editors).forEach(function(t4) {
                (t4.isActive() || t4.isUiOnly) && t4.enable(), t4.optInCheckbox && (t4.optInCheckbox.disabled = false);
              }));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.editjson_control && (this.editjson_control.disabled = true), this.addproperty_button && (this.addproperty_button.disabled = true), this.hideEditJSON(), qn(Un(e3.prototype), "disable", this).call(this), this.editors && Object.values(this.editors).forEach(function(e4) {
                (e4.isActive() || e4.isUiOnly) && e4.disable(t4), e4.optInCheckbox.disabled = true;
              });
            } }, { key: "layoutEditors", value: function() {
              var t4, e4, r3 = this;
              if (this.row_container) {
                var n3;
                this.property_order = Object.keys(this.editors), this.property_order = this.property_order.sort(function(t5, e5) {
                  var n4 = r3.editors[t5].schema.propertyOrder, i3 = r3.editors[e5].schema.propertyOrder;
                  return typeof n4 != "number" && (n4 = 1e3), typeof i3 != "number" && (i3 = 1e3), n4 - i3;
                });
                var i2, o2 = this.format === "categories", a2 = [], s2 = null, l2 = null;
                if (this.format === "grid-strict") {
                  var u2 = 0;
                  if (i2 = [], this.property_order.forEach(function(t5) {
                    var e5 = r3.editors[t5];
                    if (!e5.property_removed) {
                      var n4 = e5.options.hidden ? 0 : e5.options.grid_columns || e5.getNumColumns(), o3 = e5.options.hidden ? 0 : e5.options.grid_offset || 0, s3 = !e5.options.hidden && (e5.options.grid_break || false), l3 = { key: t5, width: n4, offset: o3, height: e5.options.hidden ? 0 : e5.container.offsetHeight };
                      i2.push(l3), a2[u2] = i2, s3 && (u2++, i2 = []);
                    }
                  }), this.layout === JSON.stringify(a2))
                    return false;
                  for (this.layout = JSON.stringify(a2), n3 = document.createElement("div"), t4 = 0; t4 < a2.length; t4++)
                    for (i2 = this.theme.getGridRow(), n3.appendChild(i2), e4 = 0; e4 < a2[t4].length; e4++)
                      s2 = a2[t4][e4].key, (l2 = this.editors[s2]).options.hidden ? l2.container.style.display = "none" : this.theme.setGridColumnSize(l2.container, a2[t4][e4].width, a2[t4][e4].offset), i2.appendChild(l2.container);
                } else if (this.format === "grid") {
                  for (this.property_order.forEach(function(t5) {
                    var e5 = r3.editors[t5];
                    if (!e5.property_removed) {
                      for (var n4 = false, i3 = e5.options.hidden ? 0 : e5.options.grid_columns || e5.getNumColumns(), o3 = e5.options.hidden ? 0 : e5.container.offsetHeight, s3 = 0; s3 < a2.length; s3++)
                        a2[s3].width + i3 <= 12 && (!o3 || 0.5 * a2[s3].minh < o3 && 2 * a2[s3].maxh > o3) && (n4 = s3);
                      n4 === false && (a2.push({ width: 0, minh: 999999, maxh: 0, editors: [] }), n4 = a2.length - 1), a2[n4].editors.push({ key: t5, width: i3, height: o3 }), a2[n4].width += i3, a2[n4].minh = Math.min(a2[n4].minh, o3), a2[n4].maxh = Math.max(a2[n4].maxh, o3);
                    }
                  }), t4 = 0; t4 < a2.length; t4++)
                    if (a2[t4].width < 12) {
                      var h2 = false, p2 = 0;
                      for (e4 = 0; e4 < a2[t4].editors.length; e4++)
                        (h2 === false || a2[t4].editors[e4].width > a2[t4].editors[h2].width) && (h2 = e4), a2[t4].editors[e4].width *= 12 / a2[t4].width, a2[t4].editors[e4].width = Math.floor(a2[t4].editors[e4].width), p2 += a2[t4].editors[e4].width;
                      p2 < 12 && (a2[t4].editors[h2].width += 12 - p2), a2[t4].width = 12;
                    }
                  if (this.layout === JSON.stringify(a2))
                    return false;
                  for (this.layout = JSON.stringify(a2), n3 = document.createElement("div"), t4 = 0; t4 < a2.length; t4++)
                    for (i2 = this.theme.getGridRow(), n3.appendChild(i2), e4 = 0; e4 < a2[t4].editors.length; e4++)
                      s2 = a2[t4].editors[e4].key, (l2 = this.editors[s2]).options.hidden ? l2.container.style.display = "none" : this.theme.setGridColumnSize(l2.container, a2[t4].editors[e4].width), i2.appendChild(l2.container);
                } else {
                  if (n3 = document.createElement("div"), o2) {
                    var d2 = document.createElement("div"), f2 = this.theme.getTopTabHolder(this.translateProperty(this.schema.title)), y2 = this.theme.getTopTabContentHolder(f2);
                    for (this.property_order.forEach(function(t5) {
                      var e5 = r3.editors[t5];
                      if (!e5.property_removed) {
                        var n4 = r3.theme.getTabContent(), i3 = e5.schema && (e5.schema.type === "object" || e5.schema.type === "array");
                        n4.isObjOrArray = i3;
                        var o3 = r3.theme.getGridRow();
                        e5.tab || (r3.basicPane === void 0 ? r3.addRow(e5, f2, n4) : r3.addRow(e5, f2, r3.basicPane)), n4.id = r3.getValidId(e5.tab_text.textContent), i3 ? (n4.appendChild(o3), y2.appendChild(n4), r3.theme.addTopTab(f2, e5.tab)) : (d2.appendChild(o3), y2.childElementCount > 0 ? y2.firstChild.isObjOrArray && (n4.appendChild(d2), y2.insertBefore(n4, y2.firstChild), r3.theme.insertBasicTopTab(e5.tab, f2), e5.basicPane = n4) : (n4.appendChild(d2), y2.appendChild(n4), r3.theme.addTopTab(f2, e5.tab), e5.basicPane = n4)), e5.options.hidden ? e5.container.style.display = "none" : r3.theme.setGridColumnSize(e5.container, 12), o3.appendChild(e5.container), e5.rowPane = n4;
                      }
                    }); this.tabPanesContainer.firstChild; )
                      this.tabPanesContainer.removeChild(this.tabPanesContainer.firstChild);
                    var m2 = this.tabs_holder.parentNode;
                    m2.removeChild(m2.firstChild), m2.appendChild(f2), this.tabPanesContainer = y2, this.tabs_holder = f2;
                    var v2 = this.theme.getFirstTab(this.tabs_holder);
                    return void (v2 && c(v2, "click"));
                  }
                  this.property_order.forEach(function(t5) {
                    var e5 = r3.editors[t5];
                    e5.property_removed || (i2 = r3.theme.getGridRow(), n3.appendChild(i2), e5.options.hidden ? e5.container.style.display = "none" : r3.theme.setGridColumnSize(e5.container, 12), i2.appendChild(e5.container));
                  });
                }
                for (; this.row_container.firstChild; )
                  this.row_container.removeChild(this.row_container.firstChild);
                this.row_container.appendChild(n3);
              }
            } }, { key: "getPropertySchema", value: function(t4) {
              var e4 = this, r3 = this.schema.properties[t4] || {};
              r3 = l({}, r3);
              var n3 = !!this.schema.properties[t4];
              return this.schema.patternProperties && Object.keys(this.schema.patternProperties).forEach(function(i2) {
                new RegExp(i2).test(t4) && (r3.allOf = r3.allOf || [], r3.allOf.push(e4.schema.patternProperties[i2]), n3 = true);
              }), !n3 && this.schema.additionalProperties && Fn(this.schema.additionalProperties) === "object" && (r3 = l({}, this.schema.additionalProperties)), r3;
            } }, { key: "preBuild", value: function() {
              var t4 = this;
              if (qn(Un(e3.prototype), "preBuild", this).call(this), this.editors = {}, this.cached_editors = {}, this.format = this.options.layout || this.options.object_layout || this.schema.format || this.jsoneditor.options.object_layout || "normal", this.schema.properties = this.schema.properties || {}, this.minwidth = 0, this.maxwidth = 0, this.options.table_row)
                Object.entries(this.schema.properties).forEach(function(e4) {
                  var r3 = Nn(e4, 2), n3 = r3[0], i2 = r3[1], o2 = t4.jsoneditor.getEditorClass(i2);
                  t4.editors[n3] = t4.jsoneditor.createEditor(o2, { jsoneditor: t4.jsoneditor, schema: i2, path: "".concat(t4.path, ".").concat(n3), parent: t4, compact: true, required: true }, t4.currentDepth + 1), t4.editors[n3].preBuild();
                  var a2 = t4.editors[n3].options.hidden ? 0 : t4.editors[n3].options.grid_columns || t4.editors[n3].getNumColumns();
                  t4.minwidth += a2, t4.maxwidth += a2;
                }), this.no_link_holder = true;
              else {
                if (this.options.table)
                  throw new Error("Not supported yet");
                this.schema.defaultProperties || (this.jsoneditor.options.display_required_only || this.options.display_required_only ? this.schema.defaultProperties = Object.keys(this.schema.properties).filter(function(e4) {
                  return t4.isRequiredObject({ key: e4, schema: t4.schema.properties[e4] });
                }) : this.schema.defaultProperties = Object.keys(this.schema.properties)), this.maxwidth += 1, Array.isArray(this.schema.defaultProperties) && this.schema.defaultProperties.forEach(function(e4) {
                  t4.addObjectProperty(e4, true), t4.editors[e4] && (t4.minwidth = Math.max(t4.minwidth, t4.editors[e4].options.grid_columns || t4.editors[e4].getNumColumns()), t4.maxwidth += t4.editors[e4].options.grid_columns || t4.editors[e4].getNumColumns());
                });
              }
              this.property_order = Object.keys(this.editors), this.property_order = this.property_order.sort(function(e4, r3) {
                var n3 = t4.editors[e4].schema.propertyOrder, i2 = t4.editors[r3].schema.propertyOrder;
                return typeof n3 != "number" && (n3 = 1e3), typeof i2 != "number" && (i2 = 1e3), n3 - i2;
              });
            } }, { key: "addTab", value: function(t4) {
              var e4 = this, r3 = this.rows[t4].schema && (this.rows[t4].schema.type === "object" || this.rows[t4].schema.type === "array");
              this.tabs_holder && (this.rows[t4].tab_text = document.createElement("span"), this.rows[t4].tab_text.textContent = r3 ? this.rows[t4].getHeaderText() : this.schema.basicCategoryTitle === void 0 ? "Basic" : this.schema.basicCategoryTitle, this.rows[t4].tab = this.theme.getTopTab(this.rows[t4].tab_text, this.getValidId(this.rows[t4].tab_text.textContent)), this.rows[t4].tab.addEventListener("click", function(r4) {
                e4.active_tab = e4.rows[t4].tab, e4.refreshTabs(), r4.preventDefault(), r4.stopPropagation();
              }));
            } }, { key: "addRow", value: function(t4, e4, r3) {
              var n3 = this.rows.length, i2 = t4.schema.type === "object" || t4.schema.type === "array";
              this.rows[n3] = t4, this.rows[n3].rowPane = r3, i2 ? (this.addTab(n3), this.theme.addTopTab(e4, this.rows[n3].tab)) : this.basicTab === void 0 ? (this.addTab(n3), this.basicTab = n3, this.basicPane = r3, this.theme.addTopTab(e4, this.rows[n3].tab)) : (this.rows[n3].tab = this.rows[this.basicTab].tab, this.rows[n3].tab_text = this.rows[this.basicTab].tab_text, this.rows[n3].rowPane = this.rows[this.basicTab].rowPane);
            } }, { key: "refreshTabs", value: function(t4) {
              var e4 = this, r3 = this.basicTab !== void 0, n3 = false;
              this.rows.forEach(function(i2) {
                i2.tab && i2.rowPane && i2.rowPane.parentNode && (r3 && i2.tab === e4.rows[e4.basicTab].tab && n3 || (t4 ? i2.tab_text.textContent = i2.getHeaderText() : (r3 && i2.tab === e4.rows[e4.basicTab].tab && (n3 = true), i2.tab === e4.active_tab ? e4.theme.markTabActive(i2) : e4.theme.markTabInactive(i2))));
              });
            } }, { key: "build", value: function() {
              var t4 = this, e4 = this.format === "categories";
              if (this.rows = [], this.active_tab = null, this.options.table_row)
                this.editor_holder = this.container, Object.entries(this.editors).forEach(function(e5) {
                  var r4 = Nn(e5, 2), n3 = r4[0], i2 = r4[1], o2 = t4.theme.getTableCell();
                  t4.editor_holder.appendChild(o2), i2.setContainer(o2), i2.build(), i2.postBuild(), i2.setOptInCheckbox(i2.header), i2.setValue(i2.getDefault(), true), t4.editors[n3].options.hidden && (o2.style.display = "none"), t4.editors[n3].options.input_width && (o2.style.width = t4.editors[n3].options.input_width);
                });
              else {
                if (this.options.table)
                  throw new Error("Not supported yet");
                this.header = "", this.options.compact || (this.header = document.createElement("span"), this.header.textContent = this.getTitle()), this.title = this.theme.getHeader(this.header, this.getPathDepth()), this.title.classList.add("je-object__title"), this.controls = this.theme.getButtonHolder(), this.controls.classList.add("je-object__controls"), this.container.appendChild(this.title), this.container.appendChild(this.controls), this.container.classList.add("je-object__container"), this.editjson_holder = this.theme.getModal(), this.editjson_textarea_label = this.theme.getHiddenLabel(this.translate("button_edit_json")), this.editjson_textarea_label.setAttribute("for", this.path + "-edit-json-textarea"), this.editjson_textarea = this.theme.getTextareaInput(), this.editjson_textarea.setAttribute("id", this.path + "-edit-json-textarea"), this.editjson_textarea.setAttribute("aria-labelledby", this.path + "-edit-json-textarea"), this.editjson_textarea.classList.add("je-edit-json--textarea"), this.editjson_save = this.getButton("button_save", "save", "button_save"), this.editjson_save.classList.add("json-editor-btntype-save"), this.editjson_save.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.saveJSON();
                }), this.editjson_copy = this.getButton("button_copy", "copy", "button_copy"), this.editjson_copy.classList.add("json-editor-btntype-copy"), this.editjson_copy.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.copyJSON();
                }), this.editjson_cancel = this.getButton("button_cancel", "cancel", "button_cancel"), this.editjson_cancel.classList.add("json-editor-btntype-cancel"), this.editjson_cancel.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.hideEditJSON();
                }), this.editjson_holder.appendChild(this.editjson_textarea_label), this.editjson_holder.appendChild(this.editjson_textarea), this.editjson_holder.appendChild(this.editjson_save), this.editjson_holder.appendChild(this.editjson_copy), this.editjson_holder.appendChild(this.editjson_cancel), this.addproperty_holder = this.theme.getModal(), this.addproperty_list = document.createElement("div"), this.addproperty_list.classList.add("property-selector"), this.addproperty_add = this.getButton("button_add", "add", "button_add"), this.addproperty_add.classList.add("json-editor-btntype-add"), this.addproperty_input = this.theme.getFormInputField("text"), this.addproperty_input.setAttribute("placeholder", "Property name..."), this.addproperty_input_label = this.theme.getHiddenLabel(this.translate("button_properties")), this.addproperty_input_label.setAttribute("for", this.path + "-property-selector"), this.addproperty_input.classList.add("property-selector-input"), this.addproperty_input.setAttribute("id", this.path + "-property-selector"), this.addproperty_input.setAttribute("aria-labelledby", this.path + "-property-selector"), this.addproperty_add.addEventListener("click", function(e5) {
                  if (e5.preventDefault(), e5.stopPropagation(), t4.addproperty_input.value) {
                    if (t4.editors[t4.addproperty_input.value])
                      return void window.alert("there is already a property with that name");
                    t4.addObjectProperty(t4.addproperty_input.value), t4.editors[t4.addproperty_input.value] && t4.editors[t4.addproperty_input.value].disable();
                    var r4 = t4.editors[t4.addproperty_input.value].key, n3 = t4.editors[t4.addproperty_input.value].type, i2 = t4.editors[t4.addproperty_input.value].path;
                    t4.onChange(true, false, { event: "add", data: { key: r4, type: n3, path: i2 } });
                  }
                }), this.addproperty_input.addEventListener("input", function(e5) {
                  e5.target.previousSibling.previousSibling.childNodes.forEach(function(r4) {
                    var n3 = r4.innerText, i2 = e5.target.value;
                    t4.options.case_sensitive_property_search || t4.jsoneditor.options.case_sensitive_property_search || (n3 = n3.toLowerCase(), i2 = i2.toLowerCase()), n3.includes(i2) ? r4.style.display = "" : r4.style.display = "none";
                  });
                }), this.addproperty_holder.appendChild(this.addproperty_list), this.addproperty_holder.appendChild(this.addproperty_input_label), this.addproperty_holder.appendChild(this.addproperty_input), this.addproperty_holder.appendChild(this.addproperty_add);
                var r3 = document.createElement("div");
                r3.style.clear = "both", this.addproperty_holder.appendChild(r3), this.onOutsideModalClickListener = this.onOutsideModalClick.bind(this), document.addEventListener("click", this.onOutsideModalClickListener, true), this.schema.description && (this.description = this.theme.getDescription(this.translateProperty(this.schema.description)), this.container.appendChild(this.description)), this.error_holder = document.createElement("div"), this.container.appendChild(this.error_holder), this.editor_holder = this.theme.getIndentedPanel(), this.container.appendChild(this.editor_holder), this.row_container = this.theme.getGridContainer(), e4 ? (this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.translateProperty(this.schema.title))), this.tabPanesContainer = this.theme.getTopTabContentHolder(this.tabs_holder), this.editor_holder.appendChild(this.tabs_holder)) : (this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.translateProperty(this.schema.title))), this.tabPanesContainer = this.theme.getTabContentHolder(this.tabs_holder), this.editor_holder.appendChild(this.row_container)), Object.values(this.editors).forEach(function(r4) {
                  var n3 = t4.theme.getTabContent(), i2 = t4.theme.getGridColumn(), o2 = !(!r4.schema || r4.schema.type !== "object" && r4.schema.type !== "array");
                  if (n3.isObjOrArray = o2, e4) {
                    if (o2) {
                      var a2 = t4.theme.getGridContainer();
                      a2.appendChild(i2), n3.appendChild(a2), t4.tabPanesContainer.appendChild(n3), t4.row_container = a2;
                    } else
                      t4.row_container_basic === void 0 && (t4.row_container_basic = t4.theme.getGridContainer(), n3.appendChild(t4.row_container_basic), t4.tabPanesContainer.childElementCount === 0 ? t4.tabPanesContainer.appendChild(n3) : t4.tabPanesContainer.insertBefore(n3, t4.tabPanesContainer.childNodes[1])), t4.row_container_basic.appendChild(i2);
                    t4.addRow(r4, t4.tabs_holder, n3), n3.id = t4.getValidId(r4.schema.title);
                  } else
                    t4.row_container.appendChild(i2);
                  r4.setContainer(i2), r4.build(), r4.postBuild(), r4.setOptInCheckbox(r4.header);
                }), this.rows[0] && c(this.rows[0].tab, "click"), this.collapsed = false, this.collapse_control = this.getButton("", "collapse", "button_collapse"), this.collapse_control.classList.add("json-editor-btntype-toggle"), this.title.insertBefore(this.collapse_control, this.title.childNodes[0]), this.collapse_control.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.collapsed ? (t4.editor_holder.style.display = "", t4.collapsed = false, t4.setButtonText(t4.collapse_control, "", "collapse", "button_collapse")) : (t4.editor_holder.style.display = "none", t4.collapsed = true, t4.setButtonText(t4.collapse_control, "", "expand", "button_expand"));
                }), this.options.collapsed && c(this.collapse_control, "click"), this.schema.options && this.schema.options.disable_collapse !== void 0 ? this.schema.options.disable_collapse && (this.collapse_control.style.display = "none") : this.jsoneditor.options.disable_collapse && (this.collapse_control.style.display = "none"), this.editjson_control = this.getButton("JSON", "edit", "button_edit_json"), this.editjson_control.classList.add("json-editor-btntype-editjson"), this.editjson_control.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.toggleEditJSON();
                }), this.controls.appendChild(this.editjson_control), this.controls.insertBefore(this.editjson_holder, this.controls.childNodes[0]), this.schema.options && this.schema.options.disable_edit_json !== void 0 ? this.schema.options.disable_edit_json && (this.editjson_control.style.display = "none") : this.jsoneditor.options.disable_edit_json && (this.editjson_control.style.display = "none"), this.addproperty_button = this.getButton("properties", "edit_properties", "button_object_properties"), this.addproperty_button.classList.add("json-editor-btntype-properties"), this.addproperty_button.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.toggleAddProperty();
                }), this.controls.appendChild(this.addproperty_button), this.controls.insertBefore(this.addproperty_holder, this.controls.childNodes[1]), this.refreshAddProperties(), this.deactivateNonRequiredProperties(false);
              }
              this.options.table_row ? (this.editor_holder = this.container, this.property_order.forEach(function(e5) {
                t4.editor_holder.appendChild(t4.editors[e5].container);
              })) : (this.layoutEditors(), this.layoutEditors()), (this.schema.readOnly || this.schema.readonly) && this.disable();
            } }, { key: "deactivateNonRequiredProperties", value: function(t4) {
              var e4 = this, r3 = this.jsoneditor.options.show_opt_in, n3 = this.options.show_opt_in !== void 0, i2 = n3 && this.options.show_opt_in === true, o2 = n3 && this.options.show_opt_in === false;
              (i2 || !o2 && r3 || !n3 && r3) && Object.entries(this.editors).forEach(function(r4) {
                var n4 = Nn(r4, 2), i3 = n4[0], o3 = n4[1];
                e4.isRequiredObject(o3) || e4.editors[i3].deactivate(), t4 && typeof e4.editors[i3].deactivateNonRequiredProperties == "function" && e4.editors[i3].deactivateNonRequiredProperties(t4);
              });
            } }, { key: "showEditJSON", value: function() {
              this.editjson_holder && (this.hideAddProperty(), this.editjson_holder.style.left = "".concat(this.editjson_control.offsetLeft, "px"), this.editjson_holder.style.top = "".concat(this.editjson_control.offsetTop + this.editjson_control.offsetHeight, "px"), this.editjson_textarea.value = JSON.stringify(this.getValue(), null, 2), this.disable(), this.editjson_holder.style.display = "", this.editjson_control.disabled = false, this.editing_json = true);
            } }, { key: "hideEditJSON", value: function() {
              this.editjson_holder && this.editing_json && (this.editjson_holder.style.display = "none", this.enable(), this.editing_json = false);
            } }, { key: "copyJSON", value: function() {
              this.editjson_holder && navigator.clipboard.writeText(this.editjson_textarea.value).catch(function(t4) {
                return window.alert(t4);
              });
            } }, { key: "saveJSON", value: function() {
              if (this.editjson_holder)
                try {
                  var t4 = JSON.parse(this.editjson_textarea.value);
                  this.setValue(t4), this.hideEditJSON(), this.onChange(true);
                } catch (t5) {
                  throw window.alert("invalid JSON"), t5;
                }
            } }, { key: "toggleEditJSON", value: function() {
              this.editing_json ? this.hideEditJSON() : this.showEditJSON();
            } }, { key: "insertPropertyControlUsingPropertyOrder", value: function(t4, e4, r3) {
              var n3;
              this.schema.properties[t4] && (n3 = this.schema.properties[t4].propertyOrder), typeof n3 != "number" && (n3 = 1e3), e4.propertyOrder = n3;
              for (var i2 = 0; i2 < r3.childNodes.length; i2++) {
                var o2 = r3.childNodes[i2];
                if (e4.propertyOrder < o2.propertyOrder) {
                  this.addproperty_list.insertBefore(e4, o2), e4 = null;
                  break;
                }
              }
              e4 && this.addproperty_list.appendChild(e4);
            } }, { key: "addPropertyCheckbox", value: function(t4) {
              var e4, r3 = this, n3 = this.theme.getCheckbox();
              e4 = this.schema.properties[t4] && this.schema.properties[t4].title ? this.schema.properties[t4].title : t4;
              var i2 = this.theme.getCheckboxLabel(e4), o2 = this.theme.getFormControl(i2, n3, null, null, this.path + "-" + t4);
              return o2.style.paddingBottom = o2.style.marginBottom = o2.style.paddingTop = o2.style.marginTop = 0, o2.style.height = "auto", this.insertPropertyControlUsingPropertyOrder(t4, o2, this.addproperty_list), n3.checked = t4 in this.editors, n3.addEventListener("change", function() {
                n3.checked ? r3.addObjectProperty(t4) : r3.removeObjectProperty(t4), r3.onChange(true);
              }), this.addproperty_checkboxes[t4] = n3, n3;
            } }, { key: "showAddProperty", value: function() {
              this.addproperty_holder && (this.hideEditJSON(), this.addproperty_holder.style.left = "".concat(this.addproperty_button.offsetLeft, "px"), this.addproperty_holder.style.top = "".concat(this.addproperty_button.offsetTop + this.addproperty_button.offsetHeight, "px"), this.disable(), this.adding_property = true, this.addproperty_button.disabled = false, this.addproperty_holder.style.display = "", this.refreshAddProperties());
            } }, { key: "hideAddProperty", value: function() {
              this.addproperty_holder && this.adding_property && (this.addproperty_holder.style.display = "none", this.enable(), this.adding_property = false);
            } }, { key: "toggleAddProperty", value: function() {
              this.adding_property ? this.hideAddProperty() : this.showAddProperty();
            } }, { key: "removeObjectProperty", value: function(t4) {
              if (this.editors[t4]) {
                var e4;
                if ((e4 = this.editors[t4].schema) !== null && e4 !== void 0 && (e4 = e4.options) !== null && e4 !== void 0 && e4.dependencies)
                  return;
                this.editors[t4].unregister(), delete this.editors[t4], this.refreshValue(), this.layoutEditors();
              }
            } }, { key: "getSchemaOnMaxDepth", value: function(t4) {
              return Object.keys(t4).reduce(function(e4, r3) {
                switch (r3) {
                  case "$ref":
                    return e4;
                  case "properties":
                  case "items":
                    return In(In({}, e4), {}, Bn({}, r3, {}));
                  case "additionalProperties":
                  case "propertyNames":
                    return In(In({}, e4), {}, Bn({}, r3, true));
                  default:
                    return In(In({}, e4), {}, Bn({}, r3, t4[r3]));
                }
              }, {});
            } }, { key: "addObjectProperty", value: function(t4, e4) {
              if (!this.editors[t4]) {
                if (this.cached_editors[t4]) {
                  if (this.editors[t4] = this.cached_editors[t4], e4)
                    return;
                  this.editors[t4].register();
                } else {
                  if (!(this.canHaveAdditionalProperties() || this.schema.properties && this.schema.properties[t4] || this.schema.patternProperties && Object.keys(this.schema.patternProperties).find(function(e5) {
                    return new RegExp(e5).test(t4);
                  })))
                    return;
                  var r3 = this.getPropertySchema(t4);
                  typeof r3.propertyOrder != "number" && (r3.propertyOrder = Object.keys(this.editors).length + 1e3);
                  var n3 = this.jsoneditor.getEditorClass(r3), i2 = this.jsoneditor.options.max_depth;
                  if (this.editors[t4] = this.jsoneditor.createEditor(n3, { jsoneditor: this.jsoneditor, schema: i2 && this.currentDepth >= i2 ? this.getSchemaOnMaxDepth(r3) : r3, path: "".concat(this.path, ".").concat(t4), parent: this }, this.currentDepth + 1), this.editors[t4].preBuild(), !e4) {
                    var o2 = this.theme.getChildEditorHolder();
                    this.editor_holder.appendChild(o2), this.editors[t4].setContainer(o2), this.editors[t4].build(), this.editors[t4].postBuild(), this.editors[t4].setOptInCheckbox(n3.header), this.editors[t4].activate();
                  }
                  this.cached_editors[t4] = this.editors[t4];
                }
                e4 || (this.refreshValue(), this.layoutEditors());
              }
            } }, { key: "onOutsideModalClick", value: function(t4) {
              var e4 = t4.path || t4.composedPath && t4.composedPath();
              this.addproperty_holder && !this.addproperty_holder.contains(e4[0]) && this.adding_property && (t4.preventDefault(), t4.stopPropagation(), this.toggleAddProperty());
            } }, { key: "onChildEditorChange", value: function(t4, r3) {
              this.refreshValue(), qn(Un(e3.prototype), "onChildEditorChange", this).call(this, t4, r3);
            } }, { key: "canHaveAdditionalProperties", value: function() {
              return typeof this.schema.additionalProperties == "boolean" ? this.schema.additionalProperties : Fn(this.schema.additionalProperties) === "object" && this.schema.additionalProperties !== null || (typeof this.options.no_additional_properties == "boolean" ? !this.options.no_additional_properties : typeof this.jsoneditor.options.no_additional_properties != "boolean" || !this.jsoneditor.options.no_additional_properties);
            } }, { key: "destroy", value: function() {
              Object.values(this.cached_editors).forEach(function(t4) {
                return t4.destroy();
              }), this.editor_holder && (this.editor_holder.innerHTML = ""), this.title && this.title.parentNode && this.title.parentNode.removeChild(this.title), this.error_holder && this.error_holder.parentNode && this.error_holder.parentNode.removeChild(this.error_holder), this.editors = null, this.cached_editors = null, this.editor_holder && this.editor_holder.parentNode && this.editor_holder.parentNode.removeChild(this.editor_holder), this.editor_holder = null, document.removeEventListener("click", this.onOutsideModalClickListener, true), qn(Un(e3.prototype), "destroy", this).call(this);
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled) {
                var t4 = qn(Un(e3.prototype), "getValue", this).call(this);
                return t4 && (this.jsoneditor.options.remove_empty_properties || this.options.remove_empty_properties) && Object.keys(t4).forEach(function(e4) {
                  var r3;
                  ((r3 = t4[e4]) === void 0 || r3 === "" || r3 === Object(r3) && Object.keys(r3).length === 0 && r3.constructor === Object) && delete t4[e4];
                }), t4 && (this.jsoneditor.options.remove_false_properties || this.options.remove_false_properties) && Object.keys(t4).forEach(function(e4) {
                  t4[e4] === false && delete t4[e4];
                }), t4;
              }
            } }, { key: "refreshValue", value: function() {
              var t4 = this;
              this.value = {}, this.editors && (Object.keys(this.editors).forEach(function(e4) {
                t4.editors[e4].isActive() && (t4.editors[e4].refreshValue(), t4.value[e4] = t4.editors[e4].getValue());
              }), Object.keys(this.editors).forEach(function(e4) {
                t4.editors[e4].isActive() && t4.activateDependentRequired(t4.editors[e4].key);
              }), this.adding_property && this.refreshAddProperties());
            } }, { key: "activateDependentRequired", value: function(t4) {
              var e4 = this;
              this.getDependentRequired(t4).forEach(function(t5) {
                var r3;
                Object.entries(e4.cached_editors).forEach(function(e5) {
                  var n3 = Nn(e5, 2), i2 = (n3[0], n3[1]);
                  i2.key === t5 && (r3 = i2);
                }), r3 && !r3.isActive() && r3.activate();
              });
            } }, { key: "getDependentRequired", value: function(t4) {
              return this.schema.dependentRequired && h(this.schema.dependentRequired, t4) ? this.schema.dependentRequired[t4] : [];
            } }, { key: "refreshAddProperties", value: function() {
              var t4 = this;
              if (this.options.disable_properties || this.options.disable_properties !== false && this.jsoneditor.options.disable_properties)
                this.addproperty_button.style.display = "none";
              else {
                var e4, r3 = 0, n3 = false;
                Object.keys(this.editors).forEach(function(t5) {
                  return r3++;
                }), e4 = this.canHaveAdditionalProperties() && !(this.schema.maxProperties !== void 0 && r3 >= this.schema.maxProperties), this.addproperty_checkboxes && (this.addproperty_list.innerHTML = ""), this.addproperty_checkboxes = {}, Object.keys(this.cached_editors).forEach(function(i2) {
                  t4.addPropertyCheckbox(i2), t4.isRequiredObject(t4.cached_editors[i2]) && i2 in t4.editors && (t4.addproperty_checkboxes[i2].disabled = true), t4.schema.minProperties !== void 0 && r3 <= t4.schema.minProperties ? (t4.addproperty_checkboxes[i2].disabled = t4.addproperty_checkboxes[i2].checked, t4.addproperty_checkboxes[i2].checked || (n3 = true)) : i2 in t4.editors ? n3 = true : e4 || h(t4.schema.properties, i2) ? (t4.addproperty_checkboxes[i2].disabled = false, n3 = true) : t4.addproperty_checkboxes[i2].disabled = true;
                }), this.canHaveAdditionalProperties() && (n3 = true), Object.keys(this.schema.properties).forEach(function(e5) {
                  t4.cached_editors[e5] || (n3 = true, t4.addPropertyCheckbox(e5));
                }), n3 ? this.canHaveAdditionalProperties() ? this.addproperty_add.disabled = !e4 : (this.addproperty_add.style.display = "none", this.addproperty_input.style.display = "none") : (this.hideAddProperty(), this.addproperty_button.style.display = "none");
              }
            } }, { key: "isRequiredObject", value: function(t4) {
              if (t4)
                return typeof t4.schema.required == "boolean" ? t4.schema.required : Array.isArray(this.schema.required) ? this.schema.required.includes(t4.key) : !!this.jsoneditor.options.required_by_default;
            } }, { key: "setValue", value: function(t4, e4) {
              var r3 = this;
              (Fn(t4 = (t4 = this.applyConstFilter(t4)) || {}) !== "object" || Array.isArray(t4)) && (t4 = {}), Object.entries(this.cached_editors).forEach(function(n3) {
                var i2 = Nn(n3, 2), o2 = i2[0], a2 = i2[1];
                t4[o2] !== void 0 ? (r3.addObjectProperty(o2), a2.setValue(t4[o2], e4), a2.activate(), r3.disabled && a2.disable()) : e4 || r3.isRequiredObject(a2) ? a2.setValue(a2.getDefault(), e4) : r3.jsoneditor.options.show_opt_in || r3.options.show_opt_in ? a2.deactivate() : r3.removeObjectProperty(o2);
              }), Object.entries(t4).forEach(function(t5) {
                var n3 = Nn(t5, 2), i2 = n3[0], o2 = n3[1];
                r3.cached_editors[i2] || (r3.addObjectProperty(i2), r3.editors[i2] && r3.editors[i2].setValue(o2, e4, !!r3.editors[i2].template));
              }), this.refreshValue(), this.layoutEditors(), this.onChange();
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = this, r3 = [], n3 = [];
              t4.forEach(function(t5) {
                t5.path === e4.path ? r3.push(t5) : n3.push(t5);
              }), this.error_holder && (r3.length ? (this.error_holder.innerHTML = "", this.error_holder.style.display = "", r3.forEach(function(t5) {
                t5.errorcount && t5.errorcount > 1 && (t5.message += " (".concat(t5.errorcount, " errors)")), e4.error_holder.appendChild(e4.theme.getErrorMessage(t5.message));
              })) : this.error_holder.style.display = "none"), this.options.table_row && (r3.length ? this.theme.addTableRowError(this.container) : this.theme.removeTableRowError(this.container)), Object.values(this.editors).forEach(function(t5) {
                t5.showValidationErrors(n3);
              });
            } }]) && Vn(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_);
          function Jn(t3) {
            return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Jn(t3);
          }
          function Wn(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Zn(n2.key), n2);
            }
          }
          function Zn(t3) {
            var e3 = function(t4, e4) {
              if (Jn(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Jn(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Jn(e3) == "symbol" ? e3 : e3 + "";
          }
          function Yn(t3, e3, r2) {
            return e3 = Xn(e3), function(t4, e4) {
              if (e4 && (Jn(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Qn() ? Reflect.construct(e3, r2 || [], Xn(t3).constructor) : e3.apply(t3, r2));
          }
          function Qn() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Qn = function() {
              return !!t3;
            })();
          }
          function Kn() {
            return Kn = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Xn(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Kn.apply(this, arguments);
          }
          function Xn(t3) {
            return Xn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Xn(t3);
          }
          function ti(t3, e3) {
            return ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ti(t3, e3);
          }
          $n.rules = { ".je-object__title": "display:inline-block", ".je-object__controls": "margin:0%200%200%2010px", ".je-object__container": "position:relative", ".je-object__property-checkbox": "margin:0;height:auto", ".property-selector": "width:295px;max-height:160px;padding:5px%200;overflow-y:auto;overflow-x:hidden;padding-left:5px", ".property-selector-input": "width:220px;margin-bottom:0;display:inline-block", ".json-editor-btntype-toggle": "margin:0%2010px%200%200", ".je-edit-json--textarea": "height:170px;width:300px;display:block" };
          var ei = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Yn(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ti(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "preBuild", value: function() {
              Kn(Xn(e3.prototype), "preBuild", this).call(this);
            } }, { key: "build", value: function() {
              var t4 = this;
              this.label = "", this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.compact && this.container.classList.add("compact"), this.radioContainer = document.createElement("div"), this.radioGroup = [];
              for (var e4 = function(e5) {
                t4.setValue(e5.currentTarget.value), t4.onChange(true), t4.radioGroup.forEach(function(e6) {
                  e6.checked = e6.value === t4.getValue();
                });
              }, r3 = 0; r3 < this.enum_values.length; r3++) {
                var n3 = { id: "".concat(this.formname, "[").concat(r3, "]"), value: this.enum_values[r3] };
                this.jsoneditor.options.use_name_attributes && (n3.name = this.formname), this.input = this.theme.getFormRadio(n3), this.setInputAttributes(["id", "value", "name"]), this.input.addEventListener("change", e4, false), this.radioGroup.push(this.input);
                var i2 = this.theme.getFormRadioLabel(this.enum_display[r3]);
                i2.htmlFor = this.input.id;
                var o2 = this.theme.getFormRadioControl(i2, this.input, !(this.options.layout !== "horizontal" && !this.options.compact));
                this.radioContainer.appendChild(o2);
              }
              if (this.schema.readOnly || this.schema.readonly) {
                this.disable(true);
                for (var a2 = 0; a2 < this.radioGroup.length; a2++)
                  this.radioGroup[a2].disabled = true;
                this.radioContainer.classList.add("readonly");
              }
              var s2 = this.theme.getContainer();
              s2.appendChild(this.radioContainer), s2.dataset.containerFor = "radio", this.input = s2, this.control = this.theme.getFormControl(this.label, s2, this.description, this.infoButton), this.container.appendChild(this.control), window.requestAnimationFrame(function() {
                t4.input.parentNode && t4.afterInputReady();
              });
            } }, { key: "enable", value: function() {
              if (!this.always_disabled) {
                for (var t4 = 0; t4 < this.radioGroup.length; t4++)
                  this.radioGroup[t4].disabled = false;
                this.radioContainer.classList.remove("readonly"), Kn(Xn(e3.prototype), "enable", this).call(this);
              }
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true);
              for (var r3 = 0; r3 < this.radioGroup.length; r3++)
                this.radioGroup[r3].disabled = true;
              this.radioContainer.classList.add("readonly"), Kn(Xn(e3.prototype), "disable", this).call(this);
            } }, { key: "destroy", value: function() {
              this.radioContainer.parentNode && this.radioContainer.parentNode.parentNode && this.radioContainer.parentNode.parentNode.removeChild(this.radioContainer.parentNode), this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), Kn(Xn(e3.prototype), "destroy", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "setValue", value: function(t4) {
              typeof (t4 = this.applyConstFilter(t4)) != "string" && (t4 = String(t4));
              for (var e4 = 0; e4 < this.radioGroup.length; e4++) {
                if (this.radioGroup[e4].value === t4) {
                  this.radioGroup[e4].checked = true;
                  break;
                }
                this.radioGroup[e4].checked = false;
              }
              this.value = t4, this.onChange();
            } }]) && Wn(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(ke);
          function ri(t3) {
            return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ri(t3);
          }
          function ni(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ii(n2.key), n2);
            }
          }
          function ii(t3) {
            var e3 = function(t4, e4) {
              if (ri(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ri(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ri(e3) == "symbol" ? e3 : e3 + "";
          }
          function oi(t3, e3, r2) {
            return e3 = li(e3), function(t4, e4) {
              if (e4 && (ri(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, ai() ? Reflect.construct(e3, r2 || [], li(t3).constructor) : e3.apply(t3, r2));
          }
          function ai() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (ai = function() {
              return !!t3;
            })();
          }
          function si() {
            return si = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = li(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, si.apply(this, arguments);
          }
          function li(t3) {
            return li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, li(t3);
          }
          function ci(t3, e3) {
            return ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ci(t3, e3);
          }
          var ui = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), oi(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ci(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4);
              var i2 = si(li(e3.prototype), "setValue", this).call(this, t4, r3, n3);
              i2 !== void 0 && i2.changed && this.sceditor_instance && this.sceditor_instance.val(i2.value);
            } }, { key: "build", value: function() {
              this.options.format = "textarea", si(li(e3.prototype), "build", this).call(this), this.input_type = this.schema.format, this.input.setAttribute("data-schemaformat", this.input_type);
            } }, { key: "afterInputReady", value: function() {
              var t4 = this;
              if (window.sceditor) {
                var r3 = this.expandCallbacks("sceditor", l({}, { format: this.input_type, emoticonsEnabled: false, width: "100%", height: 300, readOnly: this.schema.readOnly || this.schema.readonly || this.schema.template }, this.defaults.options.sceditor || {}, this.options.sceditor || {}, { element: this.input })), n3 = window.sceditor.instance(this.input);
                n3 === void 0 && window.sceditor.create(this.input, r3), this.sceditor_instance = n3 || window.sceditor.instance(this.input), this.sceditor_instance.blur(function() {
                  t4.value = t4.sceditor_instance.val(), t4.sceditor_instance.updateOriginal(), t4.is_dirty = true, t4.onChange(true);
                }), this.theme.afterInputReady(this.input);
              } else
                si(li(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 6;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.sceditor_instance && this.sceditor_instance.readOnly(false), si(li(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.sceditor_instance && this.sceditor_instance.readOnly(true), si(li(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.sceditor_instance && (this.sceditor_instance.destroy(), this.sceditor_instance = null), si(li(e3.prototype), "destroy", this).call(this);
            } }]) && ni(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function hi(t3) {
            return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, hi(t3);
          }
          function pi(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, di(n2.key), n2);
            }
          }
          function di(t3) {
            var e3 = function(t4, e4) {
              if (hi(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (hi(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return hi(e3) == "symbol" ? e3 : e3 + "";
          }
          function fi(t3, e3, r2) {
            return e3 = vi(e3), function(t4, e4) {
              if (e4 && (hi(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, yi() ? Reflect.construct(e3, r2 || [], vi(t3).constructor) : e3.apply(t3, r2));
          }
          function yi() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (yi = function() {
              return !!t3;
            })();
          }
          function mi() {
            return mi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = vi(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, mi.apply(this, arguments);
          }
          function vi(t3) {
            return vi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, vi(t3);
          }
          function bi(t3, e3) {
            return bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, bi(t3, e3);
          }
          var gi = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), fi(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && bi(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              if (t4 = this.applyConstFilter(t4), this.select2_instance) {
                r3 ? this.is_dirty = false : this.jsoneditor.options.show_errors === "change" && (this.is_dirty = true);
                var n3 = this.updateValue(t4);
                this.input.value = n3, this.select2v4 ? this.select2_instance.val(n3).trigger("change") : this.select2_instance.select2("val", n3), this.onChange(true);
              } else
                mi(vi(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              var t4 = this;
              if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance) {
                var r3 = this.expandCallbacks("select2", l({}, this.defaults.options.select2 || {}, this.options.select2 || {}));
                this.newEnumAllowed = r3.tags = !!r3.tags && this.schema.type === "string", this.select2_instance = window.jQuery(this.input).select2(r3), this.select2v4 = h(this.select2_instance.select2, "amd"), this.selectChangeHandler = function() {
                  var e4 = t4.select2v4 ? t4.select2_instance.val() : t4.select2_instance.select2("val");
                  t4.updateValue(e4), t4.onChange(true);
                }, this.select2_instance.on("change", this.selectChangeHandler), this.select2_instance.on("select2-blur", this.selectChangeHandler);
              }
              mi(vi(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "updateValue", value: function(t4) {
              var e4 = this.enum_values[0];
              return t4 = this.typecast(t4 || ""), this.enum_values.includes(t4) ? e4 = t4 : this.newEnumAllowed && (e4 = this.addNewOption(t4) ? t4 : e4), this.value = e4, e4;
            } }, { key: "addNewOption", value: function(t4) {
              var e4, r3 = this.typecast(t4), n3 = false;
              return this.enum_values.includes(r3) || r3 === "" || (this.enum_options.push("".concat(r3)), this.enum_display.push("".concat(r3)), this.enum_values.push(r3), this.schema.enum.push(r3), (e4 = this.input.querySelector('option[value="'.concat(r3, '"]'))) ? e4.removeAttribute("data-select2-tag") : this.select2_instance.append(new Option(r3, r3, false, false)).trigger("change"), n3 = true), n3;
            } }, { key: "enable", value: function() {
              this.always_disabled || this.select2_instance && (this.select2v4 ? this.select2_instance.prop("disabled", false) : this.select2_instance.select2("enable", true)), mi(vi(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.select2_instance && (this.select2v4 ? this.select2_instance.prop("disabled", true) : this.select2_instance.select2("enable", false)), mi(vi(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.select2_instance && (this.select2_instance.select2("destroy"), this.select2_instance = null), mi(vi(e3.prototype), "destroy", this).call(this);
            } }]) && pi(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(ke);
          function wi(t3) {
            return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, wi(t3);
          }
          function _i(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ki(n2.key), n2);
            }
          }
          function ki(t3) {
            var e3 = function(t4, e4) {
              if (wi(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (wi(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return wi(e3) == "symbol" ? e3 : e3 + "";
          }
          function ji(t3, e3, r2) {
            return e3 = Ci(e3), function(t4, e4) {
              if (e4 && (wi(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Oi() ? Reflect.construct(e3, r2 || [], Ci(t3).constructor) : e3.apply(t3, r2));
          }
          function Oi() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Oi = function() {
              return !!t3;
            })();
          }
          function xi() {
            return xi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Ci(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, xi.apply(this, arguments);
          }
          function Ci(t3) {
            return Ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ci(t3);
          }
          function Ei(t3, e3) {
            return Ei = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Ei(t3, e3);
          }
          var Si = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), ji(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Ei(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3) {
              if (t4 = this.applyConstFilter(t4), this.selectize_instance) {
                r3 ? this.is_dirty = false : this.jsoneditor.options.show_errors === "change" && (this.is_dirty = true);
                var n3 = this.updateValue(t4);
                this.input.value = n3, this.selectize_instance.clear(true), this.selectize_instance.setValue(n3), this.onChange(true);
              } else
                xi(Ci(e3.prototype), "setValue", this).call(this, t4, r3);
            } }, { key: "afterInputReady", value: function() {
              var t4 = this;
              if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
                var r3 = this.expandCallbacks("selectize", l({}, this.defaults.options.selectize || {}, this.options.selectize || {}));
                this.newEnumAllowed = r3.create = !!r3.create && this.schema.type === "string", this.selectize_instance = window.jQuery(this.input).selectize(r3)[0].selectize, this.control.removeEventListener("change", this.multiselectChangeHandler), this.multiselectChangeHandler = function(e4) {
                  t4.updateValue(e4), t4.onChange(true);
                }, this.selectize_instance.on("change", this.multiselectChangeHandler);
              }
              xi(Ci(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "updateValue", value: function(t4) {
              var e4 = this.enum_values[0];
              return t4 = this.typecast(t4 || ""), this.enum_values.includes(t4) ? e4 = t4 : this.newEnumAllowed && (e4 = this.addNewOption(t4) ? t4 : e4), this.value = e4, e4;
            } }, { key: "addNewOption", value: function(t4) {
              var e4 = this.typecast(t4), r3 = false;
              return this.enum_values.includes(e4) || e4 === "" || (this.enum_options.push("".concat(e4)), this.enum_display.push("".concat(e4)), this.enum_values.push(e4), this.schema.enum.push(e4), this.selectize_instance.addItem(e4), this.selectize_instance.refreshOptions(false), r3 = true), r3;
            } }, { key: "onWatchedFieldChange", value: function() {
              var t4 = this;
              xi(Ci(e3.prototype), "onWatchedFieldChange", this).call(this), this.selectize_instance && (this.selectize_instance.clear(true), this.selectize_instance.clearOptions(true), this.enum_options.forEach(function(e4, r3) {
                t4.selectize_instance.addOption({ value: e4, text: t4.enum_display[r3] });
              }), this.selectize_instance.addItem("".concat(this.value), true));
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.selectize_instance && this.selectize_instance.unlock(), xi(Ci(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.selectize_instance && this.selectize_instance.lock(), xi(Ci(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.selectize_instance && (this.selectize_instance.destroy(), this.selectize_instance = null), xi(Ci(e3.prototype), "destroy", this).call(this);
            } }]) && _i(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(ke);
          function Pi(t3) {
            return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Pi(t3);
          }
          function Li(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Ti(n2.key), n2);
            }
          }
          function Ti(t3) {
            var e3 = function(t4, e4) {
              if (Pi(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Pi(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Pi(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ai(t3, e3, r2) {
            return e3 = Ii(e3), function(t4, e4) {
              if (e4 && (Pi(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ri() ? Reflect.construct(e3, r2 || [], Ii(t3).constructor) : e3.apply(t3, r2));
          }
          function Ri() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ri = function() {
              return !!t3;
            })();
          }
          function Ii(t3) {
            return Ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ii(t3);
          }
          function Bi(t3, e3) {
            return Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Bi(t3, e3);
          }
          var Ni = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ai(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Bi(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              var t4 = this;
              this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description)));
              var e4 = this.formname.replace(/\W/g, "");
              if (typeof SignaturePad == "function") {
                this.input = this.theme.getFormInputField("hidden"), this.container.appendChild(this.input);
                var r3 = document.createElement("div");
                r3.classList.add("signature-container");
                var n3 = document.createElement("canvas");
                this.jsoneditor.options.use_name_attributes && n3.setAttribute("name", e4), n3.classList.add("signature"), r3.appendChild(n3), this.signaturePad = new window.SignaturePad(n3), this.signaturePad.onEnd = function() {
                  t4.signaturePad.isEmpty() ? t4.input.value = "" : t4.input.value = t4.signaturePad.toDataURL(), t4.is_dirty = true, t4.refreshValue(), t4.watch_listener(), t4.jsoneditor.notifyWatchers(t4.path), t4.parent ? t4.parent.onChildEditorChange(t4) : t4.jsoneditor.onChange();
                };
                var i2 = document.createElement("div"), o2 = document.createElement("button");
                o2.classList.add("tiny", "button"), o2.innerHTML = "Clear signature", i2.appendChild(o2), r3.appendChild(i2), this.options.compact && this.container.setAttribute("class", "".concat(this.container.getAttribute("class"), " compact")), (this.schema.readOnly || this.schema.readonly) && (this.disable(true), Array.from(this.inputs).forEach(function(t5) {
                  n3.setAttribute("readOnly", "readOnly"), t5.disabled = true;
                })), o2.addEventListener("click", function(e5) {
                  e5.preventDefault(), e5.stopPropagation(), t4.signaturePad.clear(), t4.signaturePad.strokeEnd();
                }), this.control = this.theme.getFormControl(this.label, r3, this.description), this.container.appendChild(this.control), this.refreshValue(), n3.width = r3.offsetWidth, this.options && this.options.canvas_height ? n3.height = this.options.canvas_height : n3.height = "300";
              } else {
                var a2 = document.createElement("p");
                a2.innerHTML = "Signature pad is not available, please include SignaturePad from https://github.com/szimek/signature_pad", this.container.appendChild(a2);
              }
            } }, { key: "setValue", value: function(t4) {
              if (t4 = this.applyConstFilter(t4), typeof SignaturePad == "function") {
                var e4 = this.sanitize(t4);
                if (this.value === e4)
                  return;
                return this.value = e4, this.input.value = this.value, this.signaturePad.clear(), t4 && t4 !== "" && this.signaturePad.fromDataURL(t4), this.watch_listener(), this.jsoneditor.notifyWatchers(this.path), false;
              }
            } }, { key: "destroy", value: function() {
              this.signaturePad.off(), delete this.signaturePad;
            } }]) && Li(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function Di(t3) {
            return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Di(t3);
          }
          function Fi(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Vi(n2.key), n2);
            }
          }
          function Vi(t3) {
            var e3 = function(t4, e4) {
              if (Di(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Di(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Di(e3) == "symbol" ? e3 : e3 + "";
          }
          function Hi(t3, e3, r2) {
            return e3 = qi(e3), function(t4, e4) {
              if (e4 && (Di(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, zi() ? Reflect.construct(e3, r2 || [], qi(t3).constructor) : e3.apply(t3, r2));
          }
          function zi() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (zi = function() {
              return !!t3;
            })();
          }
          function Mi() {
            return Mi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = qi(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Mi.apply(this, arguments);
          }
          function qi(t3) {
            return qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, qi(t3);
          }
          function Ui(t3, e3) {
            return Ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Ui(t3, e3);
          }
          r(6031);
          var Gi = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Hi(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Ui(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4);
              var i2 = Mi(qi(e3.prototype), "setValue", this).call(this, t4, r3, n3);
              i2 !== void 0 && i2.changed && this.simplemde_instance && this.simplemde_instance.value(i2.value);
            } }, { key: "build", value: function() {
              this.options.format = "textarea", Mi(qi(e3.prototype), "build", this).call(this), this.input_type = this.schema.format, this.input.setAttribute("data-schemaformat", this.input_type);
            } }, { key: "afterInputReady", value: function() {
              var t4, r3 = this;
              window.SimpleMDE ? (t4 = this.expandCallbacks("simplemde", l({}, { height: 300 }, this.defaults.options.simplemde || {}, this.options.simplemde || {}, { element: this.input, forceSync: true })), this.simplemde_instance = new window.SimpleMDE(t4), (this.schema.readOnly || this.schema.readonly || this.schema.template) && (this.simplemde_instance.codemirror.options.readOnly = true), this.simplemde_instance.codemirror.on("change", function() {
                r3.value = r3.simplemde_instance.value(), r3.is_dirty = true, r3.onChange(true);
              }), t4.autorefresh && this.startListening(this.simplemde_instance.codemirror, this.simplemde_instance.codemirror.state.autoRefresh = { delay: 250 }), this.theme.afterInputReady(this.input)) : Mi(qi(e3.prototype), "afterInputReady", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 6;
            } }, { key: "enable", value: function() {
              !this.always_disabled && this.simplemde_instance && (this.simplemde_instance.codemirror.options.readOnly = false), Mi(qi(e3.prototype), "enable", this).call(this);
            } }, { key: "disable", value: function(t4) {
              this.simplemde_instance && (this.simplemde_instance.codemirror.options.readOnly = true), Mi(qi(e3.prototype), "disable", this).call(this, t4);
            } }, { key: "destroy", value: function() {
              this.simplemde_instance && (this.simplemde_instance.toTextArea(), this.simplemde_instance = null), Mi(qi(e3.prototype), "destroy", this).call(this);
            } }, { key: "startListening", value: function(t4, e4) {
              var r3 = this, n3 = function n4() {
                t4.display.wrapper.offsetHeight ? (r3.stopListening(t4, e4), t4.display.lastWrapHeight !== t4.display.wrapper.clientHeight && t4.refresh()) : e4.timeout = window.setTimeout(n4, e4.delay);
              };
              e4.timeout = window.setTimeout(n3, e4.delay), e4.hurry = function() {
                window.clearTimeout(e4.timeout), e4.timeout = window.setTimeout(n3, 50);
              }, t4.on(window, "mouseup", e4.hurry), t4.on(window, "keyup", e4.hurry);
            } }, { key: "stopListening", value: function(t4, e4) {
              window.clearTimeout(e4.timeout), t4.off(window, "mouseup", e4.hurry), t4.off(window, "keyup", e4.hurry);
            } }]) && Fi(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function $i(t3) {
            return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, $i(t3);
          }
          function Ji(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Wi(n2.key), n2);
            }
          }
          function Wi(t3) {
            var e3 = function(t4, e4) {
              if ($i(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if ($i(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return $i(e3) == "symbol" ? e3 : e3 + "";
          }
          function Zi(t3, e3, r2) {
            return e3 = Ki(e3), function(t4, e4) {
              if (e4 && ($i(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Yi() ? Reflect.construct(e3, r2 || [], Ki(t3).constructor) : e3.apply(t3, r2));
          }
          function Yi() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Yi = function() {
              return !!t3;
            })();
          }
          function Qi() {
            return Qi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Ki(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Qi.apply(this, arguments);
          }
          function Ki(t3) {
            return Ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ki(t3);
          }
          function Xi(t3, e3) {
            return Xi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Xi(t3, e3);
          }
          var to = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Zi(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Xi(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              var t4 = this;
              if (this.options.compact || (this.header = this.label = this.theme.getLabelLike(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.compact && this.container.classList.add("compact"), this.ratingContainer = document.createElement("div"), this.ratingContainer.classList.add("starrating"), this.schema.enum === void 0) {
                var e4 = this.schema.maximum ? this.schema.maximum : 5;
                this.schema.exclusiveMaximum && e4--, this.enum_values = [];
                for (var r3 = 0; r3 < e4; r3++)
                  this.enum_values.push(r3 + 1);
              } else
                this.enum_values = this.schema.enum;
              this.radioGroup = [];
              for (var n3 = function(e5) {
                e5.preventDefault(), e5.stopPropagation(), t4.setValue(e5.currentTarget.value), t4.onChange(true);
              }, i2 = this.enum_values.length - 1; i2 > -1; i2--) {
                var o2 = this.formname + (i2 + 1), a2 = this.theme.getFormInputField("radio");
                a2.name = "".concat(this.formname, "[starrating]"), a2.value = this.enum_values[i2], a2.id = o2, a2.addEventListener("change", n3, false), this.radioGroup.push(a2);
                var s2 = document.createElement("label");
                s2.htmlFor = o2, s2.title = this.enum_values[i2], this.options.displayValue && s2.classList.add("starrating-display-enabled");
                var l2 = this.theme.getHiddenText("label");
                l2.textContent = i2, s2.appendChild(l2), this.ratingContainer.appendChild(a2), this.ratingContainer.appendChild(s2);
              }
              if (this.options.displayValue && (this.displayRating = document.createElement("div"), this.displayRating.classList.add("starrating-display"), this.displayRating.innerText = this.enum_values[0], this.ratingContainer.appendChild(this.displayRating)), this.schema.readOnly || this.schema.readonly) {
                this.disable(true);
                for (var c2 = 0; c2 < this.radioGroup.length; c2++)
                  this.radioGroup[c2].disabled = true;
                this.ratingContainer.classList.add("readonly");
              }
              var u2 = this.theme.getContainer();
              u2.appendChild(this.ratingContainer), this.input = u2, this.control = this.theme.getFormControl(this.label, u2, this.description, this.infoButton), this.container.appendChild(this.control), this.refreshValue();
            } }, { key: "enable", value: function() {
              if (!this.always_disabled) {
                for (var t4 = 0; t4 < this.radioGroup.length; t4++)
                  this.radioGroup[t4].disabled = false;
                this.ratingContainer.classList.remove("readonly"), this.disabled = false;
              }
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true);
              for (var e4 = 0; e4 < this.radioGroup.length; e4++)
                this.radioGroup[e4].disabled = true;
              this.ratingContainer.classList.add("readonly"), this.disabled = true;
            } }, { key: "destroy", value: function() {
              this.ratingContainer.parentNode && this.ratingContainer.parentNode.parentNode && this.ratingContainer.parentNode.parentNode.removeChild(this.ratingContainer.parentNode), this.label && this.label.parentNode && this.label.parentNode.removeChild(this.label), this.description && this.description.parentNode && this.description.parentNode.removeChild(this.description), Qi(Ki(e3.prototype), "destroy", this).call(this);
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "getValue", value: function() {
              if (this.dependenciesFulfilled)
                return this.schema.type === "integer" ? this.value === "" ? 0 : parseInt(this.value) : this.value;
            } }, { key: "setValue", value: function(t4) {
              t4 = this.applyConstFilter(t4), this.value = t4;
              for (var r3 = 0; r3 < this.radioGroup.length; r3++)
                if (this.radioGroup[r3].value === "".concat(t4)) {
                  this.radioGroup[r3].checked = true, this.value = t4, this.options.displayValue && (this.displayRating.innerHTML = this.value);
                  break;
                }
              Qi(Ki(e3.prototype), "setValue", this).call(this, this.value);
            } }]) && Ji(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L);
          function eo(t3) {
            return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, eo(t3);
          }
          function ro(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, no(n2.key), n2);
            }
          }
          function no(t3) {
            var e3 = function(t4, e4) {
              if (eo(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (eo(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return eo(e3) == "symbol" ? e3 : e3 + "";
          }
          function io(t3, e3, r2) {
            return e3 = so(e3), function(t4, e4) {
              if (e4 && (eo(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, oo() ? Reflect.construct(e3, r2 || [], so(t3).constructor) : e3.apply(t3, r2));
          }
          function oo() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (oo = function() {
              return !!t3;
            })();
          }
          function ao() {
            return ao = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = so(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ao.apply(this, arguments);
          }
          function so(t3) {
            return so = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, so(t3);
          }
          function lo(t3, e3) {
            return lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, lo(t3, e3);
          }
          to.rules = { ".starrating": "direction:rtl;display:inline-block;white-space:nowrap", ".starrating > input": "display:none", ".starrating > label:before": "content:'%5C2606';margin:1px;font-size:18px;font-style:normal;font-weight:400;line-height:1;font-family:'Arial';display:inline-block", ".starrating > label": "color:%23888;cursor:pointer;margin:8px%200%202px%200", ".starrating > label.starrating-display-enabled": "margin:1px%200%200%200", ".starrating > input:checked ~ label": "color:%23ffca08", ".starrating:not(.readonly) > input:hover ~ label": "color:%23ffca08", ".starrating > input:checked ~ label:before": "content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)", ".starrating:not(.readonly) > input:hover ~ label:before": "content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)", ".starrating .starrating-display": "position:relative;direction:rtl;text-align:center;font-size:10px;line-height:0px" };
          var co = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), io(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && lo(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "build", value: function() {
              ao(so(e3.prototype), "build", this).call(this), this.input.setAttribute("type", "number"), this.input.getAttribute("step") || this.input.setAttribute("step", "1");
              var t4 = this.theme.getStepperButtons(this.input);
              this.control.appendChild(t4), this.stepperDown = this.control.querySelector(".stepper-down"), this.stepperUp = this.control.querySelector(".stepper-up");
            } }, { key: "enable", value: function() {
              ao(so(e3.prototype), "enable", this).call(this), this.stepperDown.removeAttribute("disabled"), this.stepperUp.removeAttribute("disabled");
            } }, { key: "disable", value: function() {
              ao(so(e3.prototype), "disable", this).call(this), this.stepperDown.setAttribute("disabled", true), this.stepperUp.setAttribute("disabled", true);
            } }]) && ro(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(Vr);
          function uo(t3) {
            return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, uo(t3);
          }
          function ho(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, po(n2.key), n2);
            }
          }
          function po(t3) {
            var e3 = function(t4, e4) {
              if (uo(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (uo(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return uo(e3) == "symbol" ? e3 : e3 + "";
          }
          function fo(t3, e3, r2) {
            return e3 = vo(e3), function(t4, e4) {
              if (e4 && (uo(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, yo() ? Reflect.construct(e3, r2 || [], vo(t3).constructor) : e3.apply(t3, r2));
          }
          function yo() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (yo = function() {
              return !!t3;
            })();
          }
          function mo() {
            return mo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = vo(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, mo.apply(this, arguments);
          }
          function vo(t3) {
            return vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, vo(t3);
          }
          function bo(t3, e3) {
            return bo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, bo(t3, e3);
          }
          var go = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), fo(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && bo(t4, e4);
            }(e3, t3), r2 = e3, n2 = [{ key: "register", value: function() {
              if (mo(vo(e3.prototype), "register", this).call(this), this.rows)
                for (var t4 = 0; t4 < this.rows.length; t4++)
                  this.rows[t4].register();
            } }, { key: "unregister", value: function() {
              if (mo(vo(e3.prototype), "unregister", this).call(this), this.rows)
                for (var t4 = 0; t4 < this.rows.length; t4++)
                  this.rows[t4].unregister();
            } }, { key: "getNumColumns", value: function() {
              return Math.max(Math.min(12, this.width), 3);
            } }, { key: "preBuild", value: function() {
              var t4 = this.jsoneditor.expandRefs(this.schema.items || {});
              this.item_title = t4.title || "row", this.item_default = t4.default || null, this.item_has_child_editors = t4.properties || t4.items, this.width = 12, this.array_controls_top = this.options.array_controls_top || this.jsoneditor.options.array_controls_top, mo(vo(e3.prototype), "preBuild", this).call(this);
            } }, { key: "build", value: function() {
              this.tableContainer = this.theme.getTableContainer(), this.table = this.theme.getTable(), this.tableContainer.appendChild(this.table), this.container.appendChild(this.tableContainer), this.thead = this.theme.getTableHead(), this.table.appendChild(this.thead), this.header_row = this.theme.getTableRow(), this.thead.appendChild(this.header_row), this.row_holder = this.theme.getTableBody(), this.table.appendChild(this.row_holder);
              var t4 = this.getElementEditor(0, true);
              if (this.item_default = t4.getDefault(), this.width = t4.getNumColumns() + 2, this.options.compact ? (this.panel = document.createElement("div"), this.container.appendChild(this.panel)) : (this.header = document.createElement("span"), this.header.textContent = this.getTitle(), this.title = this.theme.getHeader(this.header, this.getPathDepth()), this.container.appendChild(this.title), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText)), this.container.appendChild(this.infoButton)), this.title_controls = this.theme.getHeaderButtonHolder(), this.title.appendChild(this.title_controls), this.schema.description && (this.description = this.theme.getDescription(this.translateProperty(this.schema.description)), this.container.appendChild(this.description)), this.panel = this.theme.getIndentedPanel(), this.container.appendChild(this.panel), this.error_holder = document.createElement("div"), this.panel.appendChild(this.error_holder)), this.panel.appendChild(this.tableContainer), this.controls = this.theme.getButtonHolder(), this.array_controls_top ? this.title.appendChild(this.controls) : this.panel.appendChild(this.controls), this.item_has_child_editors)
                for (var e4 = t4.getChildEditors(), r3 = t4.property_order || Object.keys(e4), n3 = 0; n3 < r3.length; n3++) {
                  var i2 = this.theme.getTableHeaderCell(e4[r3[n3]].getTitle());
                  e4[r3[n3]].options.hidden && (i2.style.display = "none"), this.header_row.appendChild(i2);
                }
              else
                this.header_row.appendChild(this.theme.getTableHeaderCell(this.item_title));
              t4.destroy(), this.row_holder.innerHTML = "", this.controls_header_cell = this.theme.getTableHeaderCell(this.translate("table_controls")), this.controls_header_cell.setAttribute("aria-hidden", "true"), this.controls_header_cell.style.visibility = "hidden", this.header_row.appendChild(this.controls_header_cell), this.addControls();
            } }, { key: "onChildEditorChange", value: function(t4, r3) {
              this.refreshValue(), mo(vo(e3.prototype), "onChildEditorChange", this).call(this, t4, r3);
            } }, { key: "getItemDefault", value: function() {
              return l({}, { default: this.item_default }).default;
            } }, { key: "getItemTitle", value: function() {
              return this.item_title;
            } }, { key: "getElementEditor", value: function(t4, e4) {
              var r3 = l({}, this.schema.items), n3 = this.jsoneditor.getEditorClass(r3, this.jsoneditor), i2 = this.row_holder.appendChild(this.theme.getTableRow()), o2 = i2;
              this.item_has_child_editors || (o2 = this.theme.getTableCell(), i2.appendChild(o2));
              var a2 = this.jsoneditor.createEditor(n3, { jsoneditor: this.jsoneditor, schema: r3, container: o2, path: "".concat(this.path, ".").concat(t4), parent: this, compact: true, table_row: true });
              return a2.preBuild(), e4 || (a2.build(), a2.postBuild(), a2.controls_cell = i2.appendChild(this.theme.getTableCell()), a2.row = i2, a2.table_controls = this.theme.getButtonHolder(), a2.controls_cell.appendChild(a2.table_controls), a2.table_controls.style.margin = 0, a2.table_controls.style.padding = 0), a2;
            } }, { key: "destroy", value: function() {
              this.innerHTML = "", this.checkParent(this.title) && this.title.parentNode.removeChild(this.title), this.checkParent(this.description) && this.description.parentNode.removeChild(this.description), this.checkParent(this.row_holder) && this.row_holder.parentNode.removeChild(this.row_holder), this.checkParent(this.table) && this.table.parentNode.removeChild(this.table), this.checkParent(this.panel) && this.panel.parentNode.removeChild(this.panel), this.rows = this.title = this.description = this.row_holder = this.table = this.panel = null, mo(vo(e3.prototype), "destroy", this).call(this);
            } }, { key: "ensureArraySize", value: function(t4) {
              if (Array.isArray(t4) || (t4 = [t4]), this.schema.minItems)
                for (; t4.length < this.schema.minItems; )
                  t4.push(this.getItemDefault());
              return this.schema.maxItems && t4.length > this.schema.maxItems && (t4 = t4.slice(0, this.schema.maxItems)), t4;
            } }, { key: "setValue", value: function() {
              var t4 = this, e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r3 = arguments.length > 1 ? arguments[1] : void 0;
              if (e4 = this.applyConstFilter(e4), e4 = this.ensureArraySize(e4), JSON.stringify(e4) !== this.serialized) {
                var n3 = false;
                e4.forEach(function(e5, r4) {
                  t4.rows[r4] ? t4.rows[r4].setValue(e5) : (t4.addRow(e5), n3 = true);
                });
                for (var i2 = e4.length; i2 < this.rows.length; i2++) {
                  var o2 = this.rows[i2].container;
                  this.item_has_child_editors || this.rows[i2].row.parentNode.removeChild(this.rows[i2].row), this.rows[i2].destroy(), o2.parentNode && o2.parentNode.removeChild(o2), this.rows[i2] = null, n3 = true;
                }
                this.rows = this.rows.slice(0, e4.length), this.refreshValue(), (n3 || r3) && this.refreshRowButtons(), this.onChange();
              }
            } }, { key: "refreshRowButtons", value: function() {
              var t4 = this, e4 = this.schema.minItems && this.schema.minItems >= this.rows.length, r3 = this.schema.maxItems && this.schema.maxItems <= this.rows.length, n3 = [];
              this.rows.forEach(function(i3, o3) {
                if (i3.delete_button) {
                  var a3 = !e4;
                  t4.setButtonState(i3.delete_button, a3), n3.push(a3);
                }
                if (i3.copy_button) {
                  var s3 = !r3;
                  t4.setButtonState(i3.copy_button, s3), n3.push(s3);
                }
                if (i3.moveup_button) {
                  var l3 = o3 !== 0;
                  t4.setButtonState(i3.moveup_button, l3), n3.push(l3);
                }
                if (i3.movedown_button) {
                  var c2 = o3 !== t4.rows.length - 1;
                  t4.setButtonState(i3.movedown_button, c2), n3.push(c2);
                }
              });
              var i2 = n3.some(function(t5) {
                return t5;
              });
              this.rows.forEach(function(e5) {
                return t4.setButtonState(e5.controls_cell, i2);
              }), this.setButtonState(this.controls_header_cell, i2), this.setButtonState(this.table, this.value.length);
              var o2 = !(r3 || this.hide_add_button);
              this.setButtonState(this.add_row_button, o2);
              var a2 = !(!this.value.length || e4 || this.hide_delete_last_row_buttons);
              this.setButtonState(this.delete_last_row_button, a2);
              var s2 = !(this.value.length <= 1 || e4 || this.hide_delete_all_rows_buttons);
              this.setButtonState(this.remove_all_rows_button, s2);
              var l2 = o2 || a2 || s2;
              this.setButtonState(this.controls, l2);
            } }, { key: "refreshValue", value: function() {
              var t4 = this;
              this.value = [], this.rows.forEach(function(e4, r3) {
                t4.value[r3] = e4.getValue();
              }), this.serialized = JSON.stringify(this.value);
            } }, { key: "addRow", value: function(t4) {
              var e4 = this.rows.length;
              this.rows[e4] = this.getElementEditor(e4);
              var r3 = this.rows[e4].table_controls;
              return this.hide_delete_buttons || (this.rows[e4].delete_button = this._createDeleteButton(e4, r3)), this.show_copy_button && (this.rows[e4].copy_button = this._createCopyButton(e4, r3)), this.hide_move_buttons || (this.rows[e4].moveup_button = this._createMoveUpButton(e4, r3)), this.hide_move_buttons || (this.rows[e4].movedown_button = this._createMoveDownButton(e4, r3)), this._supportDragDrop(this.rows[e4].row), t4 !== void 0 && this.rows[e4].setValue(t4), this.rows[e4];
            } }, { key: "_createDeleteButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", "delete", "button_delete_row_title_short");
              return n3.classList.add("delete", "json-editor-btntype-delete"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                if (t5.preventDefault(), t5.stopPropagation(), !r3.askConfirmation())
                  return false;
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue(), i2 = r3.getValue()[e5];
                n4.splice(e5, 1), r3.setValue(n4), r3.onChange(true), r3.jsoneditor.trigger("deleteRow", i2);
              }), e4.appendChild(n3), n3;
            } }, { key: "_createCopyButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", "copy", "button_copy_row_title_short"), i2 = this.schema;
              return n3.classList.add("copy", "json-editor-btntype-copy"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                t5.preventDefault(), t5.stopPropagation();
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue(), o2 = n4[e5];
                i2.items.type === "string" && i2.items.format === "uuid" ? o2 = f() : i2.items.type === "object" && i2.items.properties && n4.forEach(function(t6, r4) {
                  if (e5 === r4)
                    for (var a2 = 0, s2 = Object.keys(t6); a2 < s2.length; a2++) {
                      var l2 = s2[a2];
                      i2.items.properties && i2.items.properties[l2] && i2.items.properties[l2].format === "uuid" && ((o2 = Object.assign({}, n4[e5]))[l2] = f());
                    }
                }), n4.splice(e5 + 1, 0, o2), r3.setValue(n4), r3.onChange(true), r3.jsoneditor.trigger("copyRow", r3.rows[e5 + 1]);
              }), e4.appendChild(n3), n3;
            } }, { key: "_createMoveUpButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", "moveup", "button_move_up_title");
              return n3.classList.add("moveup", "json-editor-btntype-move"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                t5.preventDefault(), t5.stopPropagation();
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue();
                n4.splice(e5 - 1, 0, n4.splice(e5, 1)[0]), r3.setValue(n4), r3.onChange(true), r3.jsoneditor.trigger("moveRow", r3.rows[e5 - 1]);
              }), e4.appendChild(n3), n3;
            } }, { key: "_createMoveDownButton", value: function(t4, e4) {
              var r3 = this, n3 = this.getButton("", "movedown", "button_move_down_title");
              return n3.classList.add("movedown", "json-editor-btntype-move"), n3.setAttribute("data-i", t4), n3.addEventListener("click", function(t5) {
                t5.preventDefault(), t5.stopPropagation();
                var e5 = 1 * t5.currentTarget.getAttribute("data-i"), n4 = r3.getValue();
                n4.splice(e5 + 1, 0, n4.splice(e5, 1)[0]), r3.setValue(n4), r3.onChange(true), r3.jsoneditor.trigger("moveRow", r3.rows[e5 + 1]);
              }), e4.appendChild(n3), n3;
            } }, { key: "_supportDragDrop", value: function(t4) {
              var e4 = this;
              Z(t4, function(t5, r3) {
                var n3 = e4.getValue(), i2 = n3[t5];
                n3.splice(t5, 1), n3.splice(r3, 0, i2), e4.setValue(n3), e4.onChange(true), e4.jsoneditor.trigger("moveRow", e4.rows[r3]);
              }, { useTrigger: true });
            } }, { key: "addControls", value: function() {
              var t4 = this;
              this.collapsed = false, this.toggle_button = this._createToggleButton(), this.title_controls && (this.title.insertBefore(this.toggle_button, this.title.childNodes[0]), this.toggle_button.addEventListener("click", function(e4) {
                e4.preventDefault(), e4.stopPropagation(), t4.setButtonState(t4.panel, t4.collapsed), t4.collapsed ? (t4.collapsed = false, t4.setButtonText(e4.currentTarget, "", "collapse", "button_collapse")) : (t4.collapsed = true, t4.setButtonText(e4.currentTarget, "", "expand", "button_expand"));
              }), this.options.collapsed && c(this.toggle_button, "click"), this.schema.options && this.schema.options.disable_collapse !== void 0 ? this.schema.options.disable_collapse && (this.toggle_button.style.display = "none") : this.jsoneditor.options.disable_collapse && (this.toggle_button.style.display = "none")), this.add_row_button = this._createAddRowButton(), this.delete_last_row_button = this._createDeleteLastRowButton(), this.remove_all_rows_button = this._createRemoveAllRowsButton();
            } }, { key: "_createToggleButton", value: function() {
              var t4 = this.getButton("", "collapse", "button_collapse");
              return t4.classList.add("json-editor-btntype-toggle"), t4;
            } }, { key: "_createAddRowButton", value: function() {
              var t4 = this, e4 = this.getButton(this.getItemTitle(), "add", "button_add_row_title", [this.getItemTitle()]);
              return e4.classList.add("json-editor-btntype-add"), e4.addEventListener("click", function(e5) {
                e5.preventDefault(), e5.stopPropagation();
                var r3 = t4.addRow();
                t4.refreshValue(), t4.refreshRowButtons(), t4.onChange(true), t4.jsoneditor.trigger("addRow", r3);
              }), this.controls.appendChild(e4), e4;
            } }, { key: "_createDeleteLastRowButton", value: function() {
              var t4 = this, e4 = this.getButton("button_delete_last", "subtract", "button_delete_last_title", [this.getItemTitle()]);
              return e4.classList.add("json-editor-btntype-deletelast"), e4.addEventListener("click", function(e5) {
                if (e5.preventDefault(), e5.stopPropagation(), !t4.askConfirmation())
                  return false;
                var r3 = t4.getValue(), n3 = r3.pop();
                t4.setValue(r3), t4.onChange(true), t4.jsoneditor.trigger("deleteRow", n3);
              }), this.controls.appendChild(e4), e4;
            } }, { key: "_createRemoveAllRowsButton", value: function() {
              var t4 = this, e4 = this.getButton("button_delete_all", "delete", "button_delete_all_title");
              return e4.classList.add("json-editor-btntype-deleteall"), e4.addEventListener("click", function(e5) {
                if (e5.preventDefault(), e5.stopPropagation(), !t4.askConfirmation())
                  return false;
                var r3 = t4.getValue();
                t4.setValue([]), t4.onChange(true), t4.jsoneditor.trigger("deleteAllRows", r3);
              }), this.controls.appendChild(e4), e4;
            } }], n2 && ho(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(W);
          function wo(t3) {
            return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, wo(t3);
          }
          function _o(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ko(n2.key), n2);
            }
          }
          function ko(t3) {
            var e3 = function(t4, e4) {
              if (wo(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (wo(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return wo(e3) == "symbol" ? e3 : e3 + "";
          }
          function jo(t3, e3, r2) {
            return e3 = Co(e3), function(t4, e4) {
              if (e4 && (wo(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Oo() ? Reflect.construct(e3, r2 || [], Co(t3).constructor) : e3.apply(t3, r2));
          }
          function Oo() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Oo = function() {
              return !!t3;
            })();
          }
          function xo() {
            return xo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Co(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, xo.apply(this, arguments);
          }
          function Co(t3) {
            return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Co(t3);
          }
          function Eo(t3, e3) {
            return Eo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Eo(t3, e3);
          }
          function So(t3) {
            return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, So(t3);
          }
          function Po(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Lo(n2.key), n2);
            }
          }
          function Lo(t3) {
            var e3 = function(t4, e4) {
              if (So(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (So(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return So(e3) == "symbol" ? e3 : e3 + "";
          }
          function To(t3, e3, r2) {
            return e3 = Io(e3), function(t4, e4) {
              if (e4 && (So(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ao() ? Reflect.construct(e3, r2 || [], Io(t3).constructor) : e3.apply(t3, r2));
          }
          function Ao() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ao = function() {
              return !!t3;
            })();
          }
          function Ro() {
            return Ro = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Io(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Ro.apply(this, arguments);
          }
          function Io(t3) {
            return Io = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Io(t3);
          }
          function Bo(t3, e3) {
            return Bo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Bo(t3, e3);
          }
          function No(t3) {
            return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, No(t3);
          }
          function Do(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Fo(n2.key), n2);
            }
          }
          function Fo(t3) {
            var e3 = function(t4, e4) {
              if (No(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (No(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return No(e3) == "symbol" ? e3 : e3 + "";
          }
          function Vo(t3, e3, r2) {
            return e3 = Mo(e3), function(t4, e4) {
              if (e4 && (No(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ho() ? Reflect.construct(e3, r2 || [], Mo(t3).constructor) : e3.apply(t3, r2));
          }
          function Ho() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ho = function() {
              return !!t3;
            })();
          }
          function zo() {
            return zo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Mo(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, zo.apply(this, arguments);
          }
          function Mo(t3) {
            return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Mo(t3);
          }
          function qo(t3, e3) {
            return qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, qo(t3, e3);
          }
          r(9868);
          var Uo = { ace: V, array: W, arrayChoices: dt, arraySelect2: kt, arraySelectize: Tt, autocomplete: Ht, base64: Zt, button: ie, checkbox: de, choices: Te, datetime: He, describedBy: Ze, enum: or, hidden: fr, info: kr, integer: Vr, ip: Wr, jodit: nn, multiple: On, multiselect: it, null: An, number: Tr, object: $n, radio: ei, sceditor: ui, select: ke, select2: gi, selectize: Si, signature: Ni, simplemde: Gi, starrating: to, stepper: co, string: L, table: go, upload: function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), jo(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Eo(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getNumColumns", value: function() {
              return 4;
            } }, { key: "build", value: function() {
              var t4 = this;
              if (this.options.compact || (this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())), this.schema.description && (this.description = this.theme.getFormInputDescription(this.translateProperty(this.schema.description))), this.options.infoText && (this.infoButton = this.theme.getInfoButton(this.translateProperty(this.options.infoText))), this.options.hidden && (this.container.style.display = "none"), this.options = this.expandCallbacks("upload", l({}, { title: "Browse", icon: "", auto_upload: false, hide_input: false, enable_drag_drop: false, drop_zone_text: "Drag & Drop file here", drop_zone_top: false, alt_drop_zone: "", mime_type: "", max_upload_size: 0, upload_handler: function(t5, e5, r4, n3) {
                window.alert('No upload_handler defined for "'.concat(t5.path, '". You must create your own handler to enable upload to server'));
              } }, this.defaults.options.upload || {}, this.options.upload || {})), this.options.mime_type = this.options.mime_type ? [].concat(this.options.mime_type) : [], this.input = this.theme.getFormInputField("hidden"), this.container.appendChild(this.input), !this.schema.readOnly && !this.schema.readonly) {
                if (typeof this.options.upload_handler != "function")
                  throw new Error("Upload handler required for upload editor");
                if (this.uploader = this.theme.getFormInputField("file"), this.uploader.style.display = "none", this.options.mime_type.length && this.uploader.setAttribute("accept", this.options.mime_type), this.options.enable_drag_drop === true && this.options.hide_input === true || (this.clickHandler = function(e5) {
                  t4.uploader.dispatchEvent(new window.MouseEvent("click", { view: window, bubbles: true, cancelable: false }));
                }, this.browseButton = this.getButton(this.options.title, this.options.icon, this.options.title), this.browseButton.addEventListener("click", this.clickHandler), this.fileDisplay = this.theme.getFormInputField("input"), this.fileDisplay.setAttribute("readonly", true), this.fileDisplay.value = "No file selected.", this.fileDisplay.addEventListener("dblclick", this.clickHandler), this.fileUploadGroup = this.theme.getInputGroup(this.fileDisplay, [this.browseButton]), this.fileUploadGroup || (this.fileUploadGroup = document.createElement("div"), this.fileUploadGroup.appendChild(this.fileDisplay), this.fileUploadGroup.appendChild(this.browseButton))), this.options.enable_drag_drop === true) {
                  if (this.options.alt_drop_zone !== "") {
                    if (this.altDropZone = document.querySelector(this.options.alt_drop_zone), !this.altDropZone)
                      throw new Error('Error: alt_drop_zone selector "'.concat(this.options.alt_drop_zone, '" not found!'));
                    this.dropZone = this.altDropZone;
                  } else
                    this.dropZone = this.theme.getDropZone(this.options.drop_zone_text);
                  this.dropZone && (this.dropZone.classList.add("upload-dropzone"), this.dropZone.addEventListener("dblclick", this.clickHandler));
                }
                this.uploadHandler = function(e5) {
                  e5.preventDefault(), e5.stopPropagation();
                  var r4 = e5.target.files || e5.dataTransfer.files;
                  if (r4 && r4.length)
                    if (t4.options.max_upload_size !== 0 && r4[0].size > t4.options.max_upload_size)
                      t4.theme.addInputError(t4.uploader, "".concat(t4.translate("upload_max_size"), " ").concat(t4.options.max_upload_size));
                    else if (t4.options.mime_type.length === 0 || t4.isValidMimeType(r4[0].type, t4.options.mime_type)) {
                      t4.fileDisplay && (t4.fileDisplay.value = r4[0].name);
                      var n3 = new window.FileReader();
                      n3.onload = function(e6) {
                        t4.preview_value = e6.target.result, t4.refreshPreview(r4), t4.onChange(true), n3 = null;
                      }, n3.readAsDataURL(r4[0]);
                    } else
                      t4.theme.addInputError(t4.uploader, "".concat(t4.translate("upload_wrong_file_format"), " ").concat(t4.options.mime_type.toString()));
                }, this.uploader.addEventListener("change", this.uploadHandler), this.dragHandler = function(e5) {
                  var r4 = e5.dataTransfer.items || e5.dataTransfer.files, n3 = r4 && r4.length && (t4.options.mime_type.length === 0 || t4.isValidMimeType(r4[0].type, t4.options.mime_type)), i2 = e5.currentTarget.classList && e5.currentTarget.classList.contains("upload-dropzone") && n3;
                  switch ((e5.currentTarget === window ? "w_" : "e_") + e5.type) {
                    case "w_drop":
                    case "w_dragover":
                      i2 || (e5.dataTransfer.dropEffect = "none");
                      break;
                    case "e_dragenter":
                      i2 ? (t4.dropZone.classList.add("valid-dropzone"), e5.dataTransfer.dropEffect = "copy") : t4.dropZone.classList.add("invalid-dropzone");
                      break;
                    case "e_dragover":
                      i2 && (e5.dataTransfer.dropEffect = "copy");
                      break;
                    case "e_dragleave":
                      t4.dropZone.classList.remove("valid-dropzone", "invalid-dropzone");
                      break;
                    case "e_drop":
                      t4.dropZone.classList.remove("valid-dropzone", "invalid-dropzone"), i2 && t4.uploadHandler(e5);
                  }
                  i2 || e5.preventDefault();
                }, this.options.enable_drag_drop === true && (["dragover", "drop"].forEach(function(e5) {
                  window.addEventListener(e5, t4.dragHandler, true);
                }), ["dragenter", "dragover", "dragleave", "drop"].forEach(function(e5) {
                  t4.dropZone.addEventListener(e5, t4.dragHandler, true);
                }));
              }
              this.preview = document.createElement("div"), this.control = this.input.controlgroup = this.theme.getFormControl(this.label, this.uploader || this.input, this.description, this.infoButton), this.uploader && (this.uploader.controlgroup = this.control);
              var e4 = this.uploader || this.input, r3 = document.createElement("div");
              this.dropZone && !this.altDropZone && this.options.drop_zone_top === true && r3.appendChild(this.dropZone), this.fileUploadGroup && r3.appendChild(this.fileUploadGroup), this.dropZone && !this.altDropZone && this.options.drop_zone_top !== true && r3.appendChild(this.dropZone), r3.appendChild(this.preview), e4.parentNode.insertBefore(r3, e4.nextSibling), this.container.appendChild(this.control), window.requestAnimationFrame(function() {
                t4.afterInputReady();
              });
            } }, { key: "afterInputReady", value: function() {
              var t4 = this;
              if (this.value) {
                var e4 = document.createElement("img");
                e4.style.maxWidth = "100%", e4.style.maxHeight = "100px", e4.onload = function(r3) {
                  t4.preview.appendChild(e4);
                }, e4.onerror = function(t5) {
                  console.error("upload error", t5, t5.currentTarget);
                }, e4.src = this.container.querySelector("a").href;
              }
              this.theme.afterInputReady(this.input);
            } }, { key: "refreshPreview", value: function(t4) {
              var e4 = this;
              if (this.last_preview !== this.preview_value && (this.last_preview = this.preview_value, this.preview.innerHTML = "", this.preview_value)) {
                var r3 = t4[0], n3 = this.preview_value.match(/^data:([^;,]+)[;,]/);
                if (r3.mimeType = n3 ? n3[1] : "unknown", r3.size > 0) {
                  var i2 = Math.floor(Math.log(r3.size) / Math.log(1024));
                  r3.formattedSize = "".concat(parseFloat((r3.size / Math.pow(1024, i2)).toFixed(2)), " ").concat(["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i2]);
                } else
                  r3.formattedSize = "0 Bytes";
                var o2 = this.getButton("button_upload", "upload", "button_upload");
                o2.addEventListener("click", function(t5) {
                  t5.preventDefault(), o2.setAttribute("disabled", "disabled"), e4.theme.removeInputError(e4.uploader), e4.theme.getProgressBar && (e4.progressBar = e4.theme.getProgressBar(), e4.preview.appendChild(e4.progressBar)), e4.options.upload_handler(e4.path, r3, { success: function(t6) {
                    e4.setValue(t6), e4.parent ? e4.parent.onChildEditorChange(e4) : e4.jsoneditor.onChange(), e4.progressBar && e4.preview.removeChild(e4.progressBar), o2.removeAttribute("disabled");
                  }, failure: function(t6) {
                    e4.theme.addInputError(e4.uploader, t6), e4.progressBar && e4.preview.removeChild(e4.progressBar), o2.removeAttribute("disabled");
                  }, updateProgress: function(t6) {
                    e4.progressBar && (t6 ? e4.theme.updateProgressBar(e4.progressBar, t6) : e4.theme.updateProgressBarUnknown(e4.progressBar));
                  } });
                }), this.preview.appendChild(this.theme.getUploadPreview(r3, o2, this.preview_value)), this.options.auto_upload && (o2.dispatchEvent(new window.MouseEvent("click")), o2.parentNode.removeChild(o2));
              }
            } }, { key: "enable", value: function() {
              this.always_disabled || (this.uploader && (this.uploader.disabled = false), xo(Co(e3.prototype), "enable", this).call(this));
            } }, { key: "disable", value: function(t4) {
              t4 && (this.always_disabled = true), this.uploader && (this.uploader.disabled = true), xo(Co(e3.prototype), "disable", this).call(this);
            } }, { key: "setValue", value: function(t4) {
              t4 = this.applyConstFilter(t4), this.value !== t4 && (this.value = t4, this.input.value = this.value, this.onChange());
            } }, { key: "destroy", value: function() {
              var t4 = this;
              this.options.enable_drag_drop === true && (["dragover", "drop"].forEach(function(e4) {
                window.removeEventListener(e4, t4.dragHandler, true);
              }), ["dragenter", "dragover", "dragleave", "drop"].forEach(function(e4) {
                t4.dropZone.removeEventListener(e4, t4.dragHandler, true);
              }), this.dropZone.removeEventListener("dblclick", this.clickHandler), this.dropZone && this.dropZone.parentNode && this.dropZone.parentNode.removeChild(this.dropZone)), this.uploader && this.uploader.parentNode && (this.uploader.removeEventListener("change", this.uploadHandler), this.uploader.parentNode.removeChild(this.uploader)), this.browseButton && this.browseButton.parentNode && (this.browseButton.removeEventListener("click", this.clickHandler), this.browseButton.parentNode.removeChild(this.browseButton)), this.fileDisplay && this.fileDisplay.parentNode && (this.fileDisplay.removeEventListener("dblclick", this.clickHandler), this.fileDisplay.parentNode.removeChild(this.fileDisplay)), this.fileUploadGroup && this.fileUploadGroup.parentNode && this.fileUploadGroup.parentNode.removeChild(this.fileUploadGroup), this.preview && this.preview.parentNode && this.preview.parentNode.removeChild(this.preview), this.header && this.header.parentNode && this.header.parentNode.removeChild(this.header), this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input), xo(Co(e3.prototype), "destroy", this).call(this);
            } }, { key: "isValidMimeType", value: function(t4, e4) {
              return e4.reduce(function(e5, r3) {
                return e5 || new RegExp(r3.replace(/\*/g, ".*"), "gi").test(t4);
              }, false);
            } }]) && _o(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(_), uuid: function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), To(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Bo(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "preBuild", value: function() {
              Ro(Io(e3.prototype), "preBuild", this).call(this), this.schema.default = this.uuid = this.getUuid(), this.schema.options || (this.schema.options = {}), this.schema.options.cleave || (this.schema.options.cleave = { delimiters: ["-"], blocks: [8, 4, 4, 4, 12] });
            } }, { key: "build", value: function() {
              Ro(Io(e3.prototype), "build", this).call(this), this.disable(true), this.input.setAttribute("readonly", "true");
            } }, { key: "sanitize", value: function(t4) {
              return this.testUuid(t4) || (t4 = this.uuid), t4;
            } }, { key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4), this.testUuid(t4) || (t4 = this.uuid), this.uuid = t4, Ro(Io(e3.prototype), "setValue", this).call(this, t4, r3, n3);
            } }, { key: "getUuid", value: function() {
              return f();
            } }, { key: "testUuid", value: function(t4) {
              return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t4);
            } }]) && Po(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L), colorpicker: function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Vo(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && qo(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "postBuild", value: function() {
              window.Picker && (this.input.type = "text"), this.input.style.padding = "3px";
            } }, { key: "setValue", value: function(t4, r3, n3) {
              t4 = this.applyConstFilter(t4);
              var i2 = zo(Mo(e3.prototype), "setValue", this).call(this, t4, r3, n3);
              return this.picker_instance && this.picker_instance.domElement && i2 && i2.changed && this.picker_instance.setColor(i2.value, true), i2;
            } }, { key: "getNumColumns", value: function() {
              return 2;
            } }, { key: "afterInputReady", value: function() {
              zo(Mo(e3.prototype), "afterInputReady", this).call(this), this.createPicker(true);
            } }, { key: "disable", value: function() {
              if (zo(Mo(e3.prototype), "disable", this).call(this), this.picker_instance && this.picker_instance.domElement) {
                this.picker_instance.domElement.style.pointerEvents = "none";
                for (var t4 = this.picker_instance.domElement.querySelectorAll("button"), r3 = 0; r3 < t4.length; r3++)
                  t4[r3].disabled = true;
              }
            } }, { key: "enable", value: function() {
              if (zo(Mo(e3.prototype), "enable", this).call(this), this.picker_instance && this.picker_instance.domElement) {
                this.picker_instance.domElement.style.pointerEvents = "auto";
                for (var t4 = this.picker_instance.domElement.querySelectorAll("button"), r3 = 0; r3 < t4.length; r3++)
                  t4[r3].disabled = false;
              }
            } }, { key: "destroy", value: function() {
              this.createPicker(false), zo(Mo(e3.prototype), "destroy", this).call(this);
            } }, { key: "createPicker", value: function(t4) {
              var e4 = this;
              if (t4) {
                if (window.Picker && !this.picker_instance) {
                  var r3 = this.expandCallbacks("colorpicker", l({}, { editor: false, alpha: false, color: this.value, popup: "bottom" }, this.defaults.options.colorpicker || {}, this.options.colorpicker || {}, { parent: this.container })), n3 = function(t5) {
                    var r4 = e4.picker_instance.settings.editorFormat, n4 = e4.picker_instance.settings.alpha;
                    e4.setValue(r4 === "hex" ? n4 ? t5.hex : t5.hex.slice(0, 7) : t5["".concat(r4 + (n4 ? "a" : ""), "String")]);
                  };
                  r3.popup || typeof r3.onChange == "function" ? r3.popup && typeof r3.onDone != "function" && (r3.onDone = n3) : r3.onChange = n3, this.picker_instance = new window.Picker(r3), r3.popup || (this.input.style.display = "none", this.theme.afterInputReady(this.picker_instance.domElement));
                }
              } else
                this.picker_instance && (this.picker_instance.destroy(), this.picker_instance = null, this.input.style.display = "");
            } }]) && Do(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(L) };
          function Go(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          var $o = {}, Jo = "en", Wo = Jo;
          $o.en = { error_notset: "Property must be set", error_notempty: "Value required", error_enum: "Value must be one of the enumerated values", error_const: "Value must be the constant value", error_anyOf: "Value must validate against at least one of the provided schemas", error_oneOf: "Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.", error_not: "Value must not validate against the provided schema", error_type_union: "Value must be one of the provided types", error_type: "Value must be of type {{0}}", error_disallow_union: "Value must not be one of the provided disallowed types", error_disallow: "Value must not be of type {{0}}", error_multipleOf: "Value must be a multiple of {{0}}", error_maximum_excl: "Value must be less than {{0}}", error_maximum_incl: "Value must be at most {{0}}", error_minimum_excl: "Value must be greater than {{0}}", error_minimum_incl: "Value must be at least {{0}}", error_maxLength: "Value must be at most {{0}} characters long", error_contains: "No items match contains", error_minContains: "Contains match count {{0}} is less than minimum contains count of {{1}}", error_maxContains: "Contains match count {{0}} exceeds maximum contains count of {{1}}", error_minLength: "Value must be at least {{0}} characters long", error_pattern: "Value must match the pattern {{0}}", error_additionalItems: "No additional items allowed in this array", error_maxItems: "Value must have at most {{0}} items", error_minItems: "Value must have at least {{0}} items", error_uniqueItems: "Array must have unique items", error_maxProperties: "Object must have at most {{0}} properties", error_minProperties: "Object must have at least {{0}} properties", error_required: "Object is missing the required property '{{0}}'", error_additional_properties: "No additional properties allowed, but property {{0}} is set", error_property_names_exceeds_maxlength: "Property name {{0}} exceeds maxLength", error_property_names_enum_mismatch: "Property name {{0}} does not match any enum values", error_property_names_const_mismatch: "Property name {{0}} does not match the const value", error_property_names_pattern_mismatch: "Property name {{0}} does not match pattern", error_property_names_false: "Property name {{0}} fails when propertyName is false", error_property_names_maxlength: "Property name {{0}} cannot match invalid maxLength", error_property_names_enum: "Property name {{0}} cannot match invalid enum", error_property_names_pattern: "Property name {{0}} cannot match invalid pattern", error_property_names_unsupported: "Unsupported propertyName {{0}}", error_dependency: "Must have property {{0}}", error_date: "Date must be in the format {{0}}", error_time: "Time must be in the format {{0}}", error_datetime_local: "Datetime must be in the format {{0}}", error_invalid_epoch: "Date must be greater than 1 January 1970", error_ipv4: "Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots", error_ipv6: "Value must be a valid IPv6 address", error_hostname: "The hostname has the wrong format", upload_max_size: "Filesize too large. Max size is ", upload_wrong_file_format: "Wrong file format. Allowed format(s): ", button_save: "Save", button_copy: "Copy", button_cancel: "Cancel", button_add: "Add", button_delete_all: "All", button_delete_all_title: "Delete All", button_delete_last: "Last {{0}}", button_delete_last_title: "Delete Last {{0}}", button_add_row_title: "Add {{0}}", button_move_down_title: "Move down", button_move_up_title: "Move up", button_properties: "Properties", button_object_properties: "Object Properties", button_copy_row_title: "Copy {{0}}", button_delete_row_title: "Delete {{0}}", button_delete_row_title_short: "Delete", button_copy_row_title_short: "Copy", button_collapse: "Collapse", button_expand: "Expand", button_edit_json: "Edit JSON", button_upload: "Upload", flatpickr_toggle_button: "Toggle", flatpickr_clear_button: "Clear", choices_placeholder_text: "Start typing to add value", default_array_item_title: "item", button_delete_node_warning: "Are you sure you want to remove this item?", table_controls: "Controls", paste_max_length_reached: "Pasted text exceeded maximum length of {{0}} and will be clipped." }, Object.entries(Uo).forEach(function(t3) {
            var e3 = function(t4, e4) {
              return function(t5) {
                if (Array.isArray(t5))
                  return t5;
              }(t4) || function(t5, e5) {
                var r3 = t5 == null ? null : typeof Symbol != "undefined" && t5[Symbol.iterator] || t5["@@iterator"];
                if (r3 != null) {
                  var n3, i2, o2, a2, s2 = [], l2 = true, c2 = false;
                  try {
                    if (o2 = (r3 = r3.call(t5)).next, e5 === 0) {
                      if (Object(r3) !== r3)
                        return;
                      l2 = false;
                    } else
                      for (; !(l2 = (n3 = o2.call(r3)).done) && (s2.push(n3.value), s2.length !== e5); l2 = true)
                        ;
                  } catch (t6) {
                    c2 = true, i2 = t6;
                  } finally {
                    try {
                      if (!l2 && r3.return != null && (a2 = r3.return(), Object(a2) !== a2))
                        return;
                    } finally {
                      if (c2)
                        throw i2;
                    }
                  }
                  return s2;
                }
              }(t4, e4) || function(t5, e5) {
                if (t5) {
                  if (typeof t5 == "string")
                    return Go(t5, e5);
                  var r3 = Object.prototype.toString.call(t5).slice(8, -1);
                  return r3 === "Object" && t5.constructor && (r3 = t5.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t5) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? Go(t5, e5) : void 0;
                }
              }(t4, e4) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }(t3, 2), r2 = e3[0], n2 = e3[1];
            Uo[r2].options = n2.options || {};
          });
          var Zo = { options: { upload: function(t3, e3, r2) {
            console.log("Upload handler required for upload editor");
          }, use_name_attributes: true, prompt_before_delete: true, use_default_values: true, max_depth: 0, button_state_mode: 1, case_sensitive_property_search: true, show_errors: "interaction", prompt_paste_max_length_reached: false, remove_false_properties: false, enforce_const: false, opt_in_widget: "checkbox" }, theme: "html", template: "default", themes: {}, callbacks: {}, templates: {}, iconlibs: {}, editors: Uo, languages: $o, resolvers: e2, custom_validators: [], default_language: Jo, language: Wo, translate: function(t3, e3, r2) {
            var n2 = {};
            r2 && r2.options && r2.options.error_messages && r2.options.error_messages[Zo.language] && (n2 = r2.options.error_messages[Zo.language]);
            var i2 = Zo.languages[Zo.language];
            if (!i2)
              throw new Error("Unknown language ".concat(Zo.language));
            var o2 = n2[t3] || i2[t3] || Zo.languages[Jo][t3] || t3;
            if (e3)
              for (var a2 = 0; a2 < e3.length; a2++)
                o2 = o2.replace(new RegExp("\\{\\{".concat(a2, "}}"), "g"), e3[a2]);
            return o2;
          }, translateProperty: function(t3, e3) {
            return t3;
          } };
          function Yo() {
            Yo = function() {
              return e3;
            };
            var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, i2 = Object.defineProperty || function(t4, e4, r3) {
              t4[e4] = r3.value;
            }, o2 = typeof Symbol == "function" ? Symbol : {}, a2 = o2.iterator || "@@iterator", s2 = o2.asyncIterator || "@@asyncIterator", l2 = o2.toStringTag || "@@toStringTag";
            function c2(t4, e4, r3) {
              return Object.defineProperty(t4, e4, { value: r3, enumerable: true, configurable: true, writable: true }), t4[e4];
            }
            try {
              c2({}, "");
            } catch (t4) {
              c2 = function(t5, e4, r3) {
                return t5[e4] = r3;
              };
            }
            function u2(t4, e4, r3, n3) {
              var o3 = e4 && e4.prototype instanceof v2 ? e4 : v2, a3 = Object.create(o3.prototype), s3 = new L2(n3 || []);
              return i2(a3, "_invoke", { value: C2(t4, r3, s3) }), a3;
            }
            function h2(t4, e4, r3) {
              try {
                return { type: "normal", arg: t4.call(e4, r3) };
              } catch (t5) {
                return { type: "throw", arg: t5 };
              }
            }
            e3.wrap = u2;
            var p2 = "suspendedStart", d2 = "suspendedYield", f2 = "executing", y2 = "completed", m2 = {};
            function v2() {
            }
            function b2() {
            }
            function g2() {
            }
            var w2 = {};
            c2(w2, a2, function() {
              return this;
            });
            var _2 = Object.getPrototypeOf, k2 = _2 && _2(_2(T2([])));
            k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
            var j2 = g2.prototype = v2.prototype = Object.create(w2);
            function O2(t4) {
              ["next", "throw", "return"].forEach(function(e4) {
                c2(t4, e4, function(t5) {
                  return this._invoke(e4, t5);
                });
              });
            }
            function x2(t4, e4) {
              function r3(i3, o4, a3, s3) {
                var l3 = h2(t4[i3], t4, o4);
                if (l3.type !== "throw") {
                  var c3 = l3.arg, u3 = c3.value;
                  return u3 && ea(u3) == "object" && n2.call(u3, "__await") ? e4.resolve(u3.__await).then(function(t5) {
                    r3("next", t5, a3, s3);
                  }, function(t5) {
                    r3("throw", t5, a3, s3);
                  }) : e4.resolve(u3).then(function(t5) {
                    c3.value = t5, a3(c3);
                  }, function(t5) {
                    return r3("throw", t5, a3, s3);
                  });
                }
                s3(l3.arg);
              }
              var o3;
              i2(this, "_invoke", { value: function(t5, n3) {
                function i3() {
                  return new e4(function(e5, i4) {
                    r3(t5, n3, e5, i4);
                  });
                }
                return o3 = o3 ? o3.then(i3, i3) : i3();
              } });
            }
            function C2(e4, r3, n3) {
              var i3 = p2;
              return function(o3, a3) {
                if (i3 === f2)
                  throw Error("Generator is already running");
                if (i3 === y2) {
                  if (o3 === "throw")
                    throw a3;
                  return { value: t3, done: true };
                }
                for (n3.method = o3, n3.arg = a3; ; ) {
                  var s3 = n3.delegate;
                  if (s3) {
                    var l3 = E2(s3, n3);
                    if (l3) {
                      if (l3 === m2)
                        continue;
                      return l3;
                    }
                  }
                  if (n3.method === "next")
                    n3.sent = n3._sent = n3.arg;
                  else if (n3.method === "throw") {
                    if (i3 === p2)
                      throw i3 = y2, n3.arg;
                    n3.dispatchException(n3.arg);
                  } else
                    n3.method === "return" && n3.abrupt("return", n3.arg);
                  i3 = f2;
                  var c3 = h2(e4, r3, n3);
                  if (c3.type === "normal") {
                    if (i3 = n3.done ? y2 : d2, c3.arg === m2)
                      continue;
                    return { value: c3.arg, done: n3.done };
                  }
                  c3.type === "throw" && (i3 = y2, n3.method = "throw", n3.arg = c3.arg);
                }
              };
            }
            function E2(e4, r3) {
              var n3 = r3.method, i3 = e4.iterator[n3];
              if (i3 === t3)
                return r3.delegate = null, n3 === "throw" && e4.iterator.return && (r3.method = "return", r3.arg = t3, E2(e4, r3), r3.method === "throw") || n3 !== "return" && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), m2;
              var o3 = h2(i3, e4.iterator, r3.arg);
              if (o3.type === "throw")
                return r3.method = "throw", r3.arg = o3.arg, r3.delegate = null, m2;
              var a3 = o3.arg;
              return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, r3.method !== "return" && (r3.method = "next", r3.arg = t3), r3.delegate = null, m2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, m2);
            }
            function S2(t4) {
              var e4 = { tryLoc: t4[0] };
              1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
            }
            function P2(t4) {
              var e4 = t4.completion || {};
              e4.type = "normal", delete e4.arg, t4.completion = e4;
            }
            function L2(t4) {
              this.tryEntries = [{ tryLoc: "root" }], t4.forEach(S2, this), this.reset(true);
            }
            function T2(e4) {
              if (e4 || e4 === "") {
                var r3 = e4[a2];
                if (r3)
                  return r3.call(e4);
                if (typeof e4.next == "function")
                  return e4;
                if (!isNaN(e4.length)) {
                  var i3 = -1, o3 = function r4() {
                    for (; ++i3 < e4.length; )
                      if (n2.call(e4, i3))
                        return r4.value = e4[i3], r4.done = false, r4;
                    return r4.value = t3, r4.done = true, r4;
                  };
                  return o3.next = o3;
                }
              }
              throw new TypeError(ea(e4) + " is not iterable");
            }
            return b2.prototype = g2, i2(j2, "constructor", { value: g2, configurable: true }), i2(g2, "constructor", { value: b2, configurable: true }), b2.displayName = c2(g2, l2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
              var e4 = typeof t4 == "function" && t4.constructor;
              return !!e4 && (e4 === b2 || (e4.displayName || e4.name) === "GeneratorFunction");
            }, e3.mark = function(t4) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t4, g2) : (t4.__proto__ = g2, c2(t4, l2, "GeneratorFunction")), t4.prototype = Object.create(j2), t4;
            }, e3.awrap = function(t4) {
              return { __await: t4 };
            }, O2(x2.prototype), c2(x2.prototype, s2, function() {
              return this;
            }), e3.AsyncIterator = x2, e3.async = function(t4, r3, n3, i3, o3) {
              o3 === void 0 && (o3 = Promise);
              var a3 = new x2(u2(t4, r3, n3, i3), o3);
              return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
                return t5.done ? t5.value : a3.next();
              });
            }, O2(j2), c2(j2, l2, "Generator"), c2(j2, a2, function() {
              return this;
            }), c2(j2, "toString", function() {
              return "[object Generator]";
            }), e3.keys = function(t4) {
              var e4 = Object(t4), r3 = [];
              for (var n3 in e4)
                r3.push(n3);
              return r3.reverse(), function t5() {
                for (; r3.length; ) {
                  var n4 = r3.pop();
                  if (n4 in e4)
                    return t5.value = n4, t5.done = false, t5;
                }
                return t5.done = true, t5;
              };
            }, e3.values = T2, L2.prototype = { constructor: L2, reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(P2), !e4)
                for (var r3 in this)
                  r3.charAt(0) === "t" && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            }, stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if (t4.type === "throw")
                throw t4.arg;
              return this.rval;
            }, dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function i3(n3, i4) {
                return s3.type = "throw", s3.arg = e4, r3.next = n3, i4 && (r3.method = "next", r3.arg = t3), !!i4;
              }
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var a3 = this.tryEntries[o3], s3 = a3.completion;
                if (a3.tryLoc === "root")
                  return i3("end");
                if (a3.tryLoc <= this.prev) {
                  var l3 = n2.call(a3, "catchLoc"), c3 = n2.call(a3, "finallyLoc");
                  if (l3 && c3) {
                    if (this.prev < a3.catchLoc)
                      return i3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return i3(a3.finallyLoc);
                  } else if (l3) {
                    if (this.prev < a3.catchLoc)
                      return i3(a3.catchLoc, true);
                  } else {
                    if (!c3)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return i3(a3.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var i3 = this.tryEntries[r3];
                if (i3.tryLoc <= this.prev && n2.call(i3, "finallyLoc") && this.prev < i3.finallyLoc) {
                  var o3 = i3;
                  break;
                }
              }
              o3 && (t4 === "break" || t4 === "continue") && o3.tryLoc <= e4 && e4 <= o3.finallyLoc && (o3 = null);
              var a3 = o3 ? o3.completion : {};
              return a3.type = t4, a3.arg = e4, o3 ? (this.method = "next", this.next = o3.finallyLoc, m2) : this.complete(a3);
            }, complete: function(t4, e4) {
              if (t4.type === "throw")
                throw t4.arg;
              return t4.type === "break" || t4.type === "continue" ? this.next = t4.arg : t4.type === "return" ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : t4.type === "normal" && e4 && (this.next = e4), m2;
            }, finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), P2(r3), m2;
              }
            }, catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if (n3.type === "throw") {
                    var i3 = n3.arg;
                    P2(r3);
                  }
                  return i3;
                }
              }
              throw Error("illegal catch attempt");
            }, delegateYield: function(e4, r3, n3) {
              return this.delegate = { iterator: T2(e4), resultName: r3, nextLoc: n3 }, this.method === "next" && (this.arg = t3), m2;
            } }, e3;
          }
          function Qo(t3, e3, r2, n2, i2, o2, a2) {
            try {
              var s2 = t3[o2](a2), l2 = s2.value;
            } catch (t4) {
              return void r2(t4);
            }
            s2.done ? e3(l2) : Promise.resolve(l2).then(n2, i2);
          }
          function Ko(t3) {
            return function() {
              var e3 = this, r2 = arguments;
              return new Promise(function(n2, i2) {
                var o2 = t3.apply(e3, r2);
                function a2(t4) {
                  Qo(o2, n2, i2, a2, s2, "next", t4);
                }
                function s2(t4) {
                  Qo(o2, n2, i2, a2, s2, "throw", t4);
                }
                a2(void 0);
              });
            };
          }
          function Xo(t3, e3) {
            return function(t4) {
              if (Array.isArray(t4))
                return t4;
            }(t3) || function(t4, e4) {
              var r2 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
              if (r2 != null) {
                var n2, i2, o2, a2, s2 = [], l2 = true, c2 = false;
                try {
                  if (o2 = (r2 = r2.call(t4)).next, e4 === 0) {
                    if (Object(r2) !== r2)
                      return;
                    l2 = false;
                  } else
                    for (; !(l2 = (n2 = o2.call(r2)).done) && (s2.push(n2.value), s2.length !== e4); l2 = true)
                      ;
                } catch (t5) {
                  c2 = true, i2 = t5;
                } finally {
                  try {
                    if (!l2 && r2.return != null && (a2 = r2.return(), Object(a2) !== a2))
                      return;
                  } finally {
                    if (c2)
                      throw i2;
                  }
                }
                return s2;
              }
            }(t3, e3) || function(t4, e4) {
              if (t4) {
                if (typeof t4 == "string")
                  return ta(t4, e4);
                var r2 = Object.prototype.toString.call(t4).slice(8, -1);
                return r2 === "Object" && t4.constructor && (r2 = t4.constructor.name), r2 === "Map" || r2 === "Set" ? Array.from(t4) : r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? ta(t4, e4) : void 0;
              }
            }(t3, e3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function ta(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function ea(t3) {
            return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ea(t3);
          }
          function ra(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, na(n2.key), n2);
            }
          }
          function na(t3) {
            var e3 = function(t4, e4) {
              if (ea(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (ea(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return ea(e3) == "symbol" ? e3 : e3 + "";
          }
          r(1688);
          var ia = function() {
            return t3 = function t4(e4) {
              !function(t5, e5) {
                if (!(t5 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t4), this.options = e4 || {}, this.schema = {}, this.refs = this.options.refs || {}, this.refs_with_info = {}, this.refs_prefix = "#/counter/", this.refs_counter = 1, this._subSchema1 = { type: function(t5) {
                ea(t5.type) === "object" && (t5.type = this._expandSubSchema(t5.type));
              }, disallow: function(t5) {
                ea(t5.disallow) === "object" && (t5.disallow = this._expandSubSchema(t5.disallow));
              }, anyOf: function(t5) {
                var e5 = this;
                Object.entries(t5.anyOf).forEach(function(r3) {
                  var n3 = Xo(r3, 2), i2 = n3[0], o2 = n3[1];
                  t5.anyOf[i2] = e5.expandSchema(o2);
                });
              }, dependencies: function(t5) {
                var e5 = this;
                Object.entries(t5.dependencies).forEach(function(r3) {
                  var n3 = Xo(r3, 2), i2 = n3[0], o2 = n3[1];
                  ea(o2) !== "object" || Array.isArray(o2) || (t5.dependencies[i2] = e5.expandSchema(o2));
                });
              }, not: function(t5) {
                t5.not = this.expandSchema(t5.not);
              } }, this._subSchema2 = { allOf: function(t5, e5) {
                var r3 = this, n3 = l({}, e5);
                return Object.entries(t5.allOf).forEach(function(e6) {
                  var i2 = Xo(e6, 2), o2 = i2[0], a2 = i2[1];
                  t5.allOf[o2] = r3.expandRefs(a2, true), n3 = r3.extendSchemas(n3, r3.expandSchema(a2));
                }), delete n3.allOf, n3;
              }, extends: function(t5, e5) {
                var r3, n3 = this;
                return delete (r3 = Array.isArray(t5.extends) ? t5.extends.reduce(function(t6, e6, r4) {
                  return n3.extendSchemas(t6, n3.expandSchema(e6));
                }, e5) : this.extendSchemas(e5, this.expandSchema(t5.extends))).extends, r3;
              }, oneOf: function(t5, e5) {
                var r3 = this, n3 = l({}, e5);
                return delete n3.oneOf, t5.oneOf.reduce(function(t6, e6, i2) {
                  return t6.oneOf[i2] = r3.extendSchemas(r3.expandSchema(e6), n3), t6;
                }, e5), e5;
              } };
            }, e3 = [{ key: "load", value: (n2 = Ko(Yo().mark(function t4(e4, r3, n3) {
              return Yo().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return this.schema = e4, t5.next = 3, this._asyncloadExternalRefs(e4, r3, this._getFileBase(n3), true);
                    case 3:
                      return t5.abrupt("return", this.expandRefs(e4));
                    case 4:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function(t4, e4, r3) {
              return n2.apply(this, arguments);
            }) }, { key: "expandRefs", value: function(t4, e4) {
              var r3 = this, n3 = l({}, t4);
              if (!n3.$ref)
                return n3;
              var i2 = n3.$ref.split("#");
              if (i2.length === 2 && !this.refs_with_info[n3.$ref]) {
                var o2 = this.expandRecursivePointer(this.schema, i2[1]), a2 = this.extendSchemas(n3, this.expandSchema(o2));
                return delete a2.$ref, a2;
              }
              var s2 = i2.length > 2 ? this.refs_with_info["#" + i2[1]] : this.refs_with_info[n3.$ref];
              delete n3.$ref;
              var c2 = s2.$ref.startsWith("#") ? s2.fetchUrl : "", u2 = this._getRef(c2, s2);
              if (this.refs[u2]) {
                if (e4 && h(this.refs[u2], "allOf")) {
                  var p2 = this.refs[u2].allOf;
                  Object.keys(p2).forEach(function(t5) {
                    p2[t5] = r3.expandRefs(p2[t5], true);
                  });
                }
              } else
                console.warn("reference:'".concat(u2, "' not found!"));
              return i2.length > 2 ? this.extendSchemas(n3, this.expandSchema(this.expandRecursivePointer(this.refs[u2], i2[2]))) : this.extendSchemas(n3, this.expandSchema(this.refs[u2]));
            } }, { key: "expandRecursivePointer", value: function(t4, e4) {
              var r3 = t4;
              return e4.split("/").slice(1).forEach(function(t5) {
                r3[t5] && (r3 = r3[t5]);
              }), r3.$refs && r3.$refs.startsWith("#") ? this.expandRecursivePointer(t4, r3.$refs) : r3;
            } }, { key: "expandSchema", value: function(t4) {
              var e4 = this;
              Object.entries(this._subSchema1).forEach(function(r4) {
                var n3 = Xo(r4, 2), i2 = n3[0], o2 = n3[1];
                t4[i2] && o2.call(e4, t4);
              });
              var r3 = l({}, t4);
              return Object.entries(this._subSchema2).forEach(function(n3) {
                var i2 = Xo(n3, 2), o2 = i2[0], a2 = i2[1];
                t4[o2] && (r3 = a2.call(e4, t4, r3));
              }), this.expandRefs(r3);
            } }, { key: "_getRef", value: function(t4, e4) {
              var r3 = t4 + e4;
              return this.refs[r3] ? r3 : t4 + decodeURIComponent(e4.$ref);
            } }, { key: "_expandSubSchema", value: function(t4) {
              var e4 = this;
              return Array.isArray(t4) ? t4.map(function(t5) {
                return ea(t5) === "object" ? e4.expandSchema(t5) : t5;
              }) : this.expandSchema(t4);
            } }, { key: "_manageRecursivePointer", value: function(t4, e4) {
              Object.keys(t4).forEach(function(r3) {
                t4[r3] !== null && t4[r3].$ref && t4[r3].$ref.indexOf("#") === 0 && (t4[r3].$ref = e4 + t4[r3].$ref);
              });
            } }, { key: "_getExternalRefs", value: function(t4, e4) {
              var r3 = this, n3 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
              n3 || this._manageRecursivePointer(t4, e4);
              var i2 = {}, o2 = function(t5) {
                return Object.keys(t5).forEach(function(t6) {
                  i2[t6] = true;
                });
              };
              if (t4.$ref && ea(t4.$ref) !== "object" && (t4.$ref.indexOf("#") !== 0 || !n3)) {
                var a2 = t4.$ref, s2 = "";
                a2.indexOf("#") > 0 && (a2 = a2.substr(0, a2.indexOf("#"))), a2 !== t4.$ref && (s2 = t4.$ref.substr(t4.$ref.indexOf("#")));
                var l2 = this.refs_prefix + this.refs_counter++, c2 = l2 + s2;
                t4.$ref.substr(0, 1) === "#" || this.refs[t4.$ref] || (i2[a2] = true), this.refs_with_info[l2] = { fetchUrl: e4, $ref: a2 }, t4.$ref = c2;
              }
              return Object.values(t4).forEach(function(t5) {
                t5 && ea(t5) === "object" && (Array.isArray(t5) ? Object.values(t5).forEach(function(t6) {
                  t6 && ea(t6) === "object" && o2(r3._getExternalRefs(t6, e4, n3));
                }) : t5.$ref && typeof t5.$ref == "string" && t5.$ref.startsWith("#") || o2(r3._getExternalRefs(t5, e4, n3)));
              }), t4.id && typeof t4.id == "string" && t4.id.substr(0, 4) === "urn:" ? this.refs[t4.id] = t4 : t4.$id && typeof t4.$id == "string" && t4.$id.substr(0, 4) === "urn:" && (this.refs[t4.$id] = t4), i2;
            } }, { key: "_getFileBase", value: function(t4) {
              if (!t4)
                return "/";
              var e4 = this.options.ajaxBase;
              return e4 === void 0 ? this._getFileBaseFromFileLocation(t4) : e4;
            } }, { key: "_getFileBaseFromFileLocation", value: function(t4) {
              var e4 = t4.split("/");
              return e4.pop(), "".concat(e4.join("/"), "/");
            } }, { key: "_joinUrl", value: function(t4, e4) {
              var r3 = t4;
              return t4.substr(0, 7) !== "http://" && t4.substr(0, 8) !== "https://" && t4.substr(0, 5) !== "blob:" && t4.substr(0, 5) !== "data:" && t4.substr(0, 1) !== "#" && t4.substr(0, 1) !== "/" && (r3 = e4 + t4), r3.indexOf("#") > 0 && (r3 = r3.substr(0, r3.indexOf("#"))), r3;
            } }, { key: "_isUniformResourceName", value: function(t4) {
              return t4.substr(0, 4) === "urn:";
            } }, { key: "_asyncloadExternalRefs", value: (r2 = Ko(Yo().mark(function t4(e4, r3, n3) {
              var i2, o2, a2, s2, l2, c2, u2 = this, h2 = arguments;
              return Yo().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      i2 = h2.length > 3 && h2[3] !== void 0 && h2[3], o2 = this._getExternalRefs(e4, r3, i2), a2 = 0, s2 = Yo().mark(function t6() {
                        var e5, r4, i3, o3, s3, h3, p2, d2, f2, y2, m2;
                        return Yo().wrap(function(t7) {
                          for (; ; )
                            switch (t7.prev = t7.next) {
                              case 0:
                                if ((e5 = c2[l2]) !== void 0) {
                                  t7.next = 3;
                                  break;
                                }
                                return t7.abrupt("return", 0);
                              case 3:
                                if (!u2.refs[e5]) {
                                  t7.next = 5;
                                  break;
                                }
                                return t7.abrupt("return", 0);
                              case 5:
                                if (!u2._isUniformResourceName(e5)) {
                                  t7.next = 40;
                                  break;
                                }
                                if (u2.refs[e5] = "loading", a2++, r4 = u2.options.urn_resolver, i3 = e5, typeof r4 == "function") {
                                  t7.next = 13;
                                  break;
                                }
                                throw console.log('No "urn_resolver" callback defined to resolve "'.concat(i3, '"')), new Error("Must set urn_resolver option to a callback to resolve ".concat(i3));
                              case 13:
                                return i3.indexOf("#") > 0 && (i3 = i3.substr(0, i3.indexOf("#"))), t7.prev = 14, t7.next = 17, r4(i3);
                              case 17:
                                o3 = t7.sent, t7.prev = 18, s3 = JSON.parse(o3), t7.next = 26;
                                break;
                              case 22:
                                throw t7.prev = 22, t7.t0 = t7.catch(18), console.log(t7.t0), new Error("Failed to parse external ref ".concat(i3));
                              case 26:
                                if (!(typeof s3 != "boolean" && ea(s3) !== "object" || s3 === null || Array.isArray(s3))) {
                                  t7.next = 28;
                                  break;
                                }
                                throw new Error("External ref does not contain a valid schema - ".concat(i3));
                              case 28:
                                return u2.refs[e5] = s3, t7.next = 31, u2._asyncloadExternalRefs(s3, e5, n3);
                              case 31:
                                t7.next = 37;
                                break;
                              case 33:
                                throw t7.prev = 33, t7.t1 = t7.catch(14), console.log(t7.t1), new Error("Failed to parse external ref ".concat(i3));
                              case 37:
                                if (typeof o3 != "boolean") {
                                  t7.next = 39;
                                  break;
                                }
                                throw new Error("External ref does not contain a valid schema - ".concat(i3));
                              case 39:
                                return t7.abrupt("return", 0);
                              case 40:
                                if (u2.options.ajax) {
                                  t7.next = 42;
                                  break;
                                }
                                throw new Error("Must set ajax option to true to load external ref ".concat(e5));
                              case 42:
                                if (a2++, h3 = u2._joinUrl(e5, n3), u2.options.ajax_cache_responses && (d2 = u2.cacheGet(h3)) && (p2 = d2), p2) {
                                  t7.next = 61;
                                  break;
                                }
                                return t7.next = 48, new Promise(function(t8) {
                                  var e6 = new XMLHttpRequest();
                                  u2.options.ajaxCredentials && (e6.withCredentials = u2.options.ajaxCredentials), e6.overrideMimeType("application/json"), e6.open("GET", h3, true), e6.onload = function() {
                                    t8(e6);
                                  }, e6.onerror = function(e7) {
                                    t8(void 0);
                                  }, e6.send();
                                });
                              case 48:
                                if ((f2 = t7.sent) !== void 0) {
                                  t7.next = 51;
                                  break;
                                }
                                throw new Error("Failed to fetch ref via ajax - ".concat(e5));
                              case 51:
                                t7.prev = 51, p2 = JSON.parse(f2.responseText), u2.onSchemaLoaded({ schema: p2, schemaUrl: h3 }), u2.options.ajax_cache_responses && u2.cacheSet(h3, p2), t7.next = 61;
                                break;
                              case 57:
                                throw t7.prev = 57, t7.t2 = t7.catch(51), console.log(t7.t2), new Error("Failed to parse external ref ".concat(h3));
                              case 61:
                                if (!(typeof p2 != "boolean" && ea(p2) !== "object" || p2 === null || Array.isArray(p2))) {
                                  t7.next = 63;
                                  break;
                                }
                                throw new Error("External ref does not contain a valid schema - ".concat(h3));
                              case 63:
                                return u2.refs[e5] = p2, y2 = u2._getFileBaseFromFileLocation(h3), h3 !== e5 && (m2 = h3.split("/"), h3 = (e5.substr(0, 1) === "/" ? "/" : "") + m2.pop()), t7.next = 68, u2._asyncloadExternalRefs(p2, h3, y2);
                              case 68:
                              case "end":
                                return t7.stop();
                            }
                        }, t6, null, [[14, 33], [18, 22], [51, 57]]);
                      }), l2 = 0, c2 = Object.keys(o2);
                    case 5:
                      if (!(l2 < c2.length)) {
                        t5.next = 13;
                        break;
                      }
                      return t5.delegateYield(s2(), "t0", 7);
                    case 7:
                      if (t5.t0 !== 0) {
                        t5.next = 10;
                        break;
                      }
                      return t5.abrupt("continue", 10);
                    case 10:
                      l2++, t5.next = 5;
                      break;
                    case 13:
                      if (a2) {
                        t5.next = 15;
                        break;
                      }
                      return t5.abrupt("return", true);
                    case 15:
                      this.onAllSchemasLoaded();
                    case 16:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function(t4, e4, n3) {
              return r2.apply(this, arguments);
            }) }, { key: "onSchemaLoaded", value: function(t4) {
            } }, { key: "onAllSchemasLoaded", value: function() {
            } }, { key: "extendSchemas", value: function(t4, e4) {
              var r3 = this;
              t4 = l({}, t4), e4 = l({}, e4);
              var n3 = {}, i2 = function(t5) {
                typeof t5 == "string" && (t5 = [t5]), typeof e4.type == "string" && (e4.type = [e4.type]), e4.type && e4.type.length ? n3.type = t5.filter(function(t6) {
                  return e4.type.includes(t6);
                }) : n3.type = t5, n3.type.length === 1 && typeof n3.type[0] == "string" ? n3.type = n3.type[0] : n3.type.length === 0 && delete n3.type;
              };
              return Object.entries(t4).forEach(function(t5) {
                var o2 = Xo(t5, 2), a2 = o2[0], s2 = o2[1];
                e4[a2] !== void 0 ? function(t6, o3) {
                  !function(t7, e5) {
                    return (t7 === "required" || t7 === "defaultProperties") && ea(e5) === "object" && Array.isArray(e5);
                  }(t6, o3) ? t6 !== "type" || typeof o3 != "string" && !Array.isArray(o3) ? ea(o3) !== "object" || Array.isArray(o3) || o3 === null ? n3[t6] = o3 : n3[t6] = r3.extendSchemas(o3, e4[t6]) : i2(o3) : n3[t6] = o3.concat(e4[t6]).reduce(function(t7, e5) {
                    return t7.includes(e5) || t7.push(e5), t7;
                  }, []);
                }(a2, s2) : n3[a2] = s2;
              }), Object.entries(e4).forEach(function(e5) {
                var r4 = Xo(e5, 2), i3 = r4[0], o2 = r4[1];
                t4[i3] === void 0 && (n3[i3] = o2);
              }), n3;
            } }, { key: "getCacheKey", value: function(t4) {
              return ["je-cache", t4].join("::");
            } }, { key: "getCacheBuster", value: function() {
              return this.options.ajax_cache_buster || new Date().toISOString().slice(0, 10);
            } }, { key: "cacheSet", value: function(t4, e4) {
              try {
                window.localStorage.setItem(this.getCacheKey(t4), JSON.stringify({ cacheBuster: this.getCacheBuster(), schema: e4 }));
              } catch (t5) {
                console.error(t5);
              }
            } }, { key: "cacheGet", value: function(t4) {
              try {
                var e4 = window.localStorage.getItem(this.getCacheKey(t4));
                if (e4) {
                  var r3 = JSON.parse(e4);
                  if (r3.cacheBuster && r3.schema && r3.cacheBuster === this.getCacheBuster())
                    return r3.schema;
                  this.cacheDelete(t4);
                }
              } catch (t5) {
                console.error(t5);
              }
            } }, { key: "cacheDelete", value: function(t4) {
              window.localStorage.removeItem(this.getCacheKey(t4));
            } }], e3 && ra(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
            var t3, e3, r2, n2;
          }(), oa = (r(2762), { default: function() {
            return { compile: function(t3) {
              var e3 = t3.match(/{{\s*([a-zA-Z0-9\-_ .]+)\s*}}/g), r2 = e3 && e3.length;
              if (!r2)
                return function() {
                  return t3;
                };
              for (var n2 = [], i2 = function(t4) {
                var r3, i3, o3 = e3[t4].replace(/[{}]+/g, "").trim().split("."), a2 = o3.length;
                a2 > 1 ? r3 = function(e4) {
                  for (i3 = e4, t4 = 0; t4 < a2 && (i3 = i3[o3[t4]]); t4++)
                    ;
                  return i3;
                } : (o3 = o3[0], r3 = function(t5) {
                  return t5[o3];
                }), n2.push({ s: e3[t4], r: r3 });
              }, o2 = 0; o2 < r2; o2++)
                i2(o2);
              return function(e4) {
                for (var i3, o3 = "".concat(t3), a2 = 0; a2 < r2; a2++)
                  i3 = n2[a2], o3 = o3.replace(i3.s, i3.r(e4));
                return o3;
              };
            } };
          }, ejs: function() {
            return !!window.EJS && { compile: function(t3) {
              var e3 = new window.EJS({ text: t3 });
              return function(t4) {
                return e3.render(t4);
              };
            } };
          }, handlebars: function() {
            return window.Handlebars;
          }, hogan: function() {
            return !!window.Hogan && { compile: function(t3) {
              var e3 = window.Hogan.compile(t3);
              return function(t4) {
                return e3.render(t4);
              };
            } };
          }, lodash: function() {
            return !!window._ && { compile: function(t3) {
              return function(e3) {
                return window._.template(t3)(e3);
              };
            } };
          }, markup: function() {
            return !(!window.Mark || !window.Mark.up) && { compile: function(t3) {
              return function(e3) {
                return window.Mark.up(t3, e3);
              };
            } };
          }, mustache: function() {
            return !!window.Mustache && { compile: function(t3) {
              return function(e3) {
                return window.Mustache.render(t3, e3);
              };
            } };
          }, swig: function() {
            return window.swig;
          }, underscore: function() {
            return !!window._ && { compile: function(t3) {
              return function(e3) {
                return window._.template(t3)(e3);
              };
            } };
          } });
          function aa(t3) {
            return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, aa(t3);
          }
          function sa(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function la(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ca(n2.key), n2);
            }
          }
          function ca(t3) {
            var e3 = function(t4, e4) {
              if (aa(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (aa(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return aa(e3) == "symbol" ? e3 : e3 + "";
          }
          var ua = { collapse: "", expand: "", delete: "", edit: "", add: "", cancel: "", save: "", moveup: "", movedown: "" }, ha = function() {
            return t3 = function t4() {
              var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ua;
              !function(t5, e5) {
                if (!(t5 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t4), this.mapping = r2, this.icon_prefix = e4;
            }, (e3 = [{ key: "getIconClass", value: function(t4) {
              return this.mapping[t4] ? this.icon_prefix + this.mapping[t4] : this.icon_prefix + t4;
            } }, { key: "getIcon", value: function(t4) {
              var e4, r2 = this.getIconClass(t4);
              if (!r2)
                return null;
              var n2, i2 = document.createElement("i");
              return (e4 = i2.classList).add.apply(e4, function(t5) {
                if (Array.isArray(t5))
                  return sa(t5);
              }(n2 = r2.split(" ")) || function(t5) {
                if (typeof Symbol != "undefined" && t5[Symbol.iterator] != null || t5["@@iterator"] != null)
                  return Array.from(t5);
              }(n2) || function(t5, e5) {
                if (t5) {
                  if (typeof t5 == "string")
                    return sa(t5, e5);
                  var r3 = Object.prototype.toString.call(t5).slice(8, -1);
                  return r3 === "Object" && t5.constructor && (r3 = t5.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t5) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? sa(t5, e5) : void 0;
                }
              }(n2) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()), i2;
            } }]) && la(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
            var t3, e3;
          }();
          function pa(t3) {
            return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, pa(t3);
          }
          function da(t3, e3, r2) {
            return e3 = ya(e3), function(t4, e4) {
              if (e4 && (pa(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, fa() ? Reflect.construct(e3, r2 || [], ya(t3).constructor) : e3.apply(t3, r2));
          }
          function fa() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (fa = function() {
              return !!t3;
            })();
          }
          function ya(t3) {
            return ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, ya(t3);
          }
          function ma(t3, e3) {
            return ma = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ma(t3, e3);
          }
          var va = { collapse: "chevron-down", expand: "chevron-right", delete: "trash", edit: "pencil", add: "plus", subtract: "minus", cancel: "floppy-remove", save: "floppy-saved", moveup: "arrow-up", moveright: "arrow-right", movedown: "arrow-down", moveleft: "arrow-left", copy: "copy", clear: "remove-circle", time: "time", calendar: "calendar", edit_properties: "list" }, ba = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), da(this, e3, ["glyphicon glyphicon-", va]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ma(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function ga(t3) {
            return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ga(t3);
          }
          function wa(t3, e3, r2) {
            return e3 = ka(e3), function(t4, e4) {
              if (e4 && (ga(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, _a() ? Reflect.construct(e3, r2 || [], ka(t3).constructor) : e3.apply(t3, r2));
          }
          function _a() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (_a = function() {
              return !!t3;
            })();
          }
          function ka(t3) {
            return ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, ka(t3);
          }
          function ja(t3, e3) {
            return ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ja(t3, e3);
          }
          var Oa = { collapse: "chevron-down", expand: "chevron-right", delete: "trash", edit: "pencil", add: "plus", subtract: "minus", cancel: "ban-circle", save: "save", moveup: "arrow-up", moveright: "arrow-right", movedown: "arrow-down", moveleft: "arrow-left", copy: "copy", clear: "remove-circle", time: "time", calendar: "calendar", edit_properties: "list" }, xa = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), wa(this, e3, ["icon-", Oa]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ja(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function Ca(t3) {
            return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ca(t3);
          }
          function Ea(t3, e3, r2) {
            return e3 = Pa(e3), function(t4, e4) {
              if (e4 && (Ca(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Sa() ? Reflect.construct(e3, r2 || [], Pa(t3).constructor) : e3.apply(t3, r2));
          }
          function Sa() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Sa = function() {
              return !!t3;
            })();
          }
          function Pa(t3) {
            return Pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Pa(t3);
          }
          function La(t3, e3) {
            return La = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, La(t3, e3);
          }
          var Ta = { collapse: "caret-square-o-down", expand: "caret-square-o-right", delete: "times", edit: "pencil", add: "plus", subtract: "minus", cancel: "ban", save: "save", moveup: "arrow-up", moveright: "arrow-right", movedown: "arrow-down", moveleft: "arrow-left", copy: "files-o", clear: "times-circle-o", time: "clock-o", calendar: "calendar", edit_properties: "list" }, Aa = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ea(this, e3, ["fa fa-", Ta]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && La(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function Ra(t3) {
            return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ra(t3);
          }
          function Ia(t3, e3, r2) {
            return e3 = Na(e3), function(t4, e4) {
              if (e4 && (Ra(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ba() ? Reflect.construct(e3, r2 || [], Na(t3).constructor) : e3.apply(t3, r2));
          }
          function Ba() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ba = function() {
              return !!t3;
            })();
          }
          function Na(t3) {
            return Na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Na(t3);
          }
          function Da(t3, e3) {
            return Da = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Da(t3, e3);
          }
          var Fa = { collapse: "caret-down", expand: "caret-right", delete: "trash", edit: "pen", add: "plus", subtract: "minus", cancel: "ban", save: "save", moveup: "arrow-up", moveright: "arrow-right", movedown: "arrow-down", moveleft: "arrow-left", copy: "copy", clear: "times-circle", time: "clock", calendar: "calendar", edit_properties: "list" }, Va = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ia(this, e3, ["fas fa-", Fa]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Da(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function Ha(t3) {
            return Ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ha(t3);
          }
          function za(t3, e3, r2) {
            return e3 = qa(e3), function(t4, e4) {
              if (e4 && (Ha(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ma() ? Reflect.construct(e3, r2 || [], qa(t3).constructor) : e3.apply(t3, r2));
          }
          function Ma() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ma = function() {
              return !!t3;
            })();
          }
          function qa(t3) {
            return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, qa(t3);
          }
          function Ua(t3, e3) {
            return Ua = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Ua(t3, e3);
          }
          var Ga = { collapse: "triangle-1-s", expand: "triangle-1-e", delete: "trash", edit: "pencil", add: "plusthick", subtract: "minusthick", cancel: "closethick", save: "disk", moveup: "arrowthick-1-n", moveright: "arrowthick-1-e", movedown: "arrowthick-1-s", moveleft: "arrowthick-1-w", copy: "copy", clear: "circle-close", time: "time", calendar: "calendar", edit_properties: "note" }, $a = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), za(this, e3, ["ui-icon ui-icon-", Ga]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Ua(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function Ja(t3) {
            return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ja(t3);
          }
          function Wa(t3, e3, r2) {
            return e3 = Ya(e3), function(t4, e4) {
              if (e4 && (Ja(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Za() ? Reflect.construct(e3, r2 || [], Ya(t3).constructor) : e3.apply(t3, r2));
          }
          function Za() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Za = function() {
              return !!t3;
            })();
          }
          function Ya(t3) {
            return Ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Ya(t3);
          }
          function Qa(t3, e3) {
            return Qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Qa(t3, e3);
          }
          var Ka = { collapse: "collapse-down", expand: "expand-right", delete: "trash", edit: "pencil", add: "plus", subtract: "minus", cancel: "ban", save: "file", moveup: "arrow-thick-top", moveright: "arrow-thick-right", movedown: "arrow-thick-bottom", moveleft: "arrow-thick-left", copy: "clipboard", clear: "circle-x", time: "clock", calendar: "calendar", edit_properties: "list" }, Xa = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Wa(this, e3, ["oi oi-", Ka]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Qa(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function ts(t3) {
            return ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ts(t3);
          }
          function es(t3, e3, r2) {
            return e3 = ns(e3), function(t4, e4) {
              if (e4 && (ts(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, rs() ? Reflect.construct(e3, r2 || [], ns(t3).constructor) : e3.apply(t3, r2));
          }
          function rs() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (rs = function() {
              return !!t3;
            })();
          }
          function ns(t3) {
            return ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, ns(t3);
          }
          function is(t3, e3) {
            return is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, is(t3, e3);
          }
          var os = { collapse: "arrow-down", expand: "arrow-right", delete: "delete", edit: "edit", add: "plus", subtract: "minus", cancel: "cross", save: "check", moveup: "upward", moveright: "forward", movedown: "downward", moveleft: "back", copy: "copy", clear: "close", time: "time", calendar: "bookmark", edit_properties: "menu" }, as = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), es(this, e3, ["icon icon-", os]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && is(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha);
          function ss(t3) {
            return ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, ss(t3);
          }
          function ls(t3, e3, r2) {
            return e3 = us(e3), function(t4, e4) {
              if (e4 && (ss(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, cs() ? Reflect.construct(e3, r2 || [], us(t3).constructor) : e3.apply(t3, r2));
          }
          function cs() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (cs = function() {
              return !!t3;
            })();
          }
          function us(t3) {
            return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, us(t3);
          }
          function hs(t3, e3) {
            return hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, hs(t3, e3);
          }
          var ps = { collapse: "chevron-down", expand: "chevron-right", delete: "trash", edit: "pencil", add: "plus", subtract: "dash", cancel: "x-circle", save: "save", moveup: "arrow-up", moveright: "arrow-right", movedown: "arrow-down", moveleft: "arrow-left", copy: "clipboard", clear: "x-circle", time: "clock", calendar: "calendar", edit_properties: "list-ul" }, ds = { bootstrap: function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), ls(this, e3, ["bi bi-", ps]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && hs(t4, e4);
            }(e3, t3), r2 = e3, Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2;
          }(ha), bootstrap3: ba, fontawesome3: xa, fontawesome4: Aa, fontawesome5: Va, jqueryui: $a, openiconic: Xa, spectre: as };
          function fs(t3) {
            return fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, fs(t3);
          }
          function ys(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ms(n2.key), n2);
            }
          }
          function ms(t3) {
            var e3 = function(t4, e4) {
              if (fs(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (fs(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return fs(e3) == "symbol" ? e3 : e3 + "";
          }
          var vs = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].find(function(t3) {
            return t3 in document.documentElement;
          }), bs = function() {
            return t3 = function t4(e4) {
              var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { disable_theme_rules: false };
              !function(t5, e5) {
                if (!(t5 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t4), this.jsoneditor = e4, Object.keys(r2).forEach(function(t5) {
                e4.options[t5] !== void 0 && (r2[t5] = e4.options[t5]);
              }), this.options = r2;
            }, e3 = [{ key: "getContainer", value: function() {
              return document.createElement("div");
            } }, { key: "getOptInCheckbox", value: function(t4) {
              var e4 = document.createElement("span"), r2 = this.getHiddenLabel(t4 + " opt-in");
              r2.setAttribute("for", t4 + "-opt-in"), r2.textContent = t4 + "-opt-in";
              var n2 = document.createElement("input");
              return n2.setAttribute("type", "checkbox"), n2.setAttribute("style", "margin: 0 10px 0 0;"), n2.setAttribute("id", t4 + "-opt-in"), n2.classList.add("json-editor-opt-in"), e4.appendChild(n2), e4.appendChild(r2), { label: r2, checkbox: n2, container: e4 };
            } }, { key: "getOptInSwitch", value: function(t4) {
              return this.getOptInCheckbox();
            } }, { key: "getFloatRightLinkHolder", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("je-float-right-linkholder"), t4;
            } }, { key: "getModal", value: function() {
              var t4 = document.createElement("div");
              return t4.style.display = "none", t4.classList.add("je-modal"), t4;
            } }, { key: "getGridContainer", value: function() {
              return document.createElement("div");
            } }, { key: "getGridRow", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("row"), t4;
            } }, { key: "getGridColumn", value: function() {
              return document.createElement("div");
            } }, { key: "setGridColumnSize", value: function(t4, e4) {
            } }, { key: "getLink", value: function(t4) {
              var e4 = document.createElement("a");
              return e4.setAttribute("href", "#"), e4.appendChild(document.createTextNode(t4)), e4;
            } }, { key: "disableHeader", value: function(t4) {
              t4.style.color = "#ccc";
            } }, { key: "disableLabel", value: function(t4) {
              t4.style.color = "#ccc";
            } }, { key: "enableHeader", value: function(t4) {
              t4.style.color = "";
            } }, { key: "enableLabel", value: function(t4) {
              t4.style.color = "";
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("span");
              e4.innerText = "\u24D8", e4.classList.add("je-infobutton-icon");
              var r2 = document.createElement("span");
              return r2.classList.add("je-infobutton-tooltip"), r2.innerText = t4, e4.onmouseover = function() {
                r2.style.visibility = "visible";
              }, e4.onmouseleave = function() {
                r2.style.visibility = "hidden";
              }, e4.appendChild(r2), e4;
            } }, { key: "getFormInputLabel", value: function(t4, e4) {
              var r2 = document.createElement("label");
              return r2.appendChild(document.createTextNode(t4)), e4 && r2.classList.add("required"), r2;
            } }, { key: "getLabelLike", value: function(t4, e4) {
              var r2 = document.createElement("b");
              return r2.appendChild(document.createTextNode(t4)), e4 && r2.classList.add("required"), r2;
            } }, { key: "getHeader", value: function(t4, e4) {
              var r2 = document.createElement("span");
              return typeof t4 == "string" ? r2.textContent = t4 : r2.appendChild(t4), r2.classList.add("je-header"), r2;
            } }, { key: "getCheckbox", value: function() {
              var t4 = this.getFormInputField("checkbox");
              return t4.classList.add("je-checkbox"), t4;
            } }, { key: "getCheckboxLabel", value: function(t4, e4) {
              var r2 = document.createElement("label");
              return r2.appendChild(document.createTextNode("\xA0".concat(t4))), e4 && r2.classList.add("required"), r2;
            } }, { key: "getMultiCheckboxHolder", value: function(t4, e4, r2, n2) {
              var i2 = document.createElement("div");
              return i2.classList.add("control-group"), e4 && (e4.style.display = "block", i2.appendChild(e4), n2 && e4.appendChild(n2)), Object.values(t4).forEach(function(t5) {
                t5.style.display = "inline-block", t5.style.marginRight = "20px", i2.appendChild(t5);
              }), r2 && i2.appendChild(r2), i2;
            } }, { key: "getFormCheckboxControl", value: function(t4, e4, r2) {
              var n2 = document.createElement("div");
              return n2.appendChild(t4), e4.style.width = "auto", t4.insertBefore(e4, t4.firstChild), r2 && n2.classList.add("je-checkbox-control--compact"), n2;
            } }, { key: "getFormRadio", value: function(t4) {
              var e4 = this.getFormInputField("radio");
              return Object.keys(t4).forEach(function(r2) {
                return e4.setAttribute(r2, t4[r2]);
              }), e4.classList.add("je-radio"), e4;
            } }, { key: "getFormRadioLabel", value: function(t4, e4) {
              var r2 = document.createElement("label");
              return r2.appendChild(document.createTextNode("\xA0".concat(t4))), e4 && r2.classList.add("required"), r2;
            } }, { key: "getFormRadioControl", value: function(t4, e4, r2, n2) {
              var i2 = document.createElement("div");
              return i2.appendChild(t4), e4.style.width = "auto", t4.insertBefore(e4, t4.firstChild), r2 && i2.classList.add("je-radio-control--compact"), e4.tagName.toLowerCase() !== "div" && n2 && t4 && e4 && (e4.setAttribute("id", n2), e4.setAttribute("aria-labelledby", n2), t4.setAttribute("for", n2)), i2;
            } }, { key: "getSelectInput", value: function(t4, e4) {
              var r2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], n2 = document.createElement("select");
              return t4 && this.setSelectOptions(n2, t4, [], r2), n2;
            } }, { key: "getSwitcher", value: function(t4) {
              var e4 = this.getSelectInput(t4, false);
              return e4.classList.add("je-switcher"), e4;
            } }, { key: "getSwitcherOptions", value: function(t4) {
              return t4.getElementsByTagName("option");
            } }, { key: "setSwitcherOptions", value: function(t4, e4, r2) {
              this.setSelectOptions(t4, e4, r2);
            } }, { key: "setSelectOptions", value: function(t4, e4) {
              var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : " ";
              if (t4.innerHTML = "", n2) {
                var o2 = document.createElement("option");
                o2.setAttribute("value", "_placeholder_"), o2.textContent = i2, o2.setAttribute("disabled", ""), o2.setAttribute("hidden", ""), t4.appendChild(o2);
              }
              for (var a2 = 0; a2 < e4.length; a2++) {
                var s2 = document.createElement("option");
                s2.setAttribute("value", e4[a2]), s2.textContent = r2[a2] || e4[a2], t4.appendChild(s2);
              }
            } }, { key: "getTextareaInput", value: function() {
              var t4 = document.createElement("textarea");
              return t4.classList.add("je-textarea"), t4;
            } }, { key: "getHiddenLabel", value: function(t4) {
              var e4 = document.createElement("label");
              return e4.textContent = t4, e4.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;"), e4;
            } }, { key: "visuallyHidden", value: function(t4) {
              t4 && t4.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;");
            } }, { key: "getHiddenText", value: function(t4) {
              var e4 = document.createElement("span");
              return e4.textContent = t4, e4.setAttribute("style", "position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;"), e4;
            } }, { key: "getRangeInput", value: function(t4, e4, r2, n2, i2) {
              var o2 = this.getFormInputField("range");
              return o2.setAttribute("min", t4), o2.setAttribute("max", e4), o2.setAttribute("step", r2), n2 && (n2.setAttribute("id", i2 + "-description"), o2.setAttribute("aria-describedby", i2 + "-description")), o2;
            } }, { key: "getStepperButtons", value: function(t4) {
              var e4 = document.createElement("div"), r2 = document.createElement("button");
              r2.setAttribute("type", "button"), r2.classList.add("stepper-down");
              var n2 = document.createElement("button");
              n2.setAttribute("type", "button"), n2.classList.add("stepper-up"), t4.getAttribute("readonly") && (r2.setAttribute("disabled", true), n2.setAttribute("disabled", true)), r2.textContent = "-", n2.textContent = "+";
              var i2 = function(t5, e5) {
                t5.value = Number(e5 || t5.value), t5.setAttribute("initialized", "1");
              }, o2 = t4.getAttribute("min"), a2 = t4.getAttribute("max");
              return r2.addEventListener("click", function() {
                t4.getAttribute("initialized") ? o2 ? Number(t4.value) > Number(o2) && t4.stepDown() : t4.stepDown() : i2(t4, o2), c(t4, "change");
              }), n2.addEventListener("click", function() {
                t4.getAttribute("initialized") ? a2 ? Number(t4.value) < Number(a2) && t4.stepUp() : t4.stepUp() : i2(t4, o2), c(t4, "change");
              }), e4.appendChild(r2), e4.appendChild(n2), e4;
            } }, { key: "getRangeOutput", value: function(t4) {
              var e4 = document.createElement("output"), r2 = function(t5) {
                e4.value = t5.currentTarget.value;
              };
              return t4.addEventListener("change", r2, false), t4.addEventListener("input", r2, false), e4;
            } }, { key: "getRangeControl", value: function(t4, e4) {
              var r2 = document.createElement("div");
              return r2.classList.add("je-range-control"), e4 && r2.appendChild(e4), r2.appendChild(t4), r2;
            } }, { key: "getFormInputField", value: function(t4) {
              var e4 = document.createElement("input");
              return e4.setAttribute("type", t4), e4;
            } }, { key: "afterInputReady", value: function(t4) {
            } }, { key: "getFormControl", value: function(t4, e4, r2, n2, i2) {
              var o2 = document.createElement("div");
              return o2.classList.add("form-control"), t4 && (o2.appendChild(t4), i2 && t4.setAttribute("for", i2)), e4.type !== "checkbox" && e4.type !== "radio" || !t4 ? (n2 && t4 && t4.appendChild(n2), o2.appendChild(e4)) : (e4.style.width = "auto", t4.insertBefore(e4, t4.firstChild), n2 && t4.appendChild(n2)), e4.tagName.toLowerCase() !== "div" && e4 && t4 && i2 && (t4.setAttribute("for", i2), e4.setAttribute("id", i2)), e4.tagName.toLowerCase() !== "div" && e4 && r2 && (r2.setAttribute("id", i2 + "-description"), e4.setAttribute("aria-describedby", i2 + "-description")), r2 && o2.appendChild(r2), o2;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("je-indented-panel"), t4;
            } }, { key: "getTopIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("je-indented-panel--top"), t4;
            } }, { key: "getChildEditorHolder", value: function() {
              return document.createElement("div");
            } }, { key: "getDescription", value: function(t4) {
              var e4 = document.createElement("p");
              return window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getCheckboxDescription", value: function(t4) {
              return this.getDescription(t4);
            } }, { key: "getFormInputDescription", value: function(t4) {
              return this.getDescription(t4);
            } }, { key: "getButtonHolder", value: function() {
              return document.createElement("span");
            } }, { key: "getHeaderButtonHolder", value: function() {
              return this.getButtonHolder();
            } }, { key: "getFormButtonHolder", value: function(t4) {
              return this.getButtonHolder();
            } }, { key: "getButton", value: function(t4, e4, r2) {
              var n2 = document.createElement("button");
              return n2.type = "button", this.setButtonText(n2, t4, e4, r2), n2;
            } }, { key: "getFormButton", value: function(t4, e4, r2) {
              return this.getButton(t4, e4, r2);
            } }, { key: "setButtonText", value: function(t4, e4, r2, n2) {
              for (; t4.firstChild; )
                t4.removeChild(t4.firstChild);
              if (r2 && (t4.appendChild(r2), e4 = " ".concat(e4)), !this.jsoneditor.options.iconlib || !this.jsoneditor.options.remove_button_labels || !r2) {
                var i2 = document.createElement("span");
                i2.appendChild(document.createTextNode(e4)), t4.appendChild(i2);
              }
              n2 && t4.setAttribute("title", n2);
            } }, { key: "getTableContainer", value: function() {
              return document.createElement("div");
            } }, { key: "getTable", value: function() {
              return document.createElement("table");
            } }, { key: "getTableRow", value: function() {
              return document.createElement("tr");
            } }, { key: "getTableHead", value: function() {
              return document.createElement("thead");
            } }, { key: "getTableBody", value: function() {
              return document.createElement("tbody");
            } }, { key: "getTableHeaderCell", value: function(t4) {
              var e4 = document.createElement("th");
              return e4.textContent = t4, e4;
            } }, { key: "getTableCell", value: function() {
              return document.createElement("td");
            } }, { key: "getErrorMessage", value: function(t4) {
              var e4 = document.createElement("p");
              return e4.style = e4.style || {}, e4.style.color = "red", e4.appendChild(document.createTextNode(t4)), e4;
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.errmsg.setAttribute("role", "alert");
            } }, { key: "removeInputError", value: function(t4) {
            } }, { key: "addTableRowError", value: function(t4) {
            } }, { key: "removeTableRowError", value: function(t4) {
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r2 = document.createElement("div");
              return r2.innerHTML = "<div class='je-tabholder tabs'></div><div class='content' id='".concat(e4, "'></div><div class='je-tabholder--clear'></div>"), r2;
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r2 = document.createElement("div");
              return r2.innerHTML = "<div class='tabs je-tabholder--top'></div><div class='je-tabholder--clear'></div><div class='content' id='".concat(e4, "'></div>"), r2;
            } }, { key: "applyStyles", value: function(t4, e4) {
              Object.keys(e4).forEach(function(r2) {
                return t4.style[r2] = e4[r2];
              });
            } }, { key: "closest", value: function(t4, e4) {
              for (; t4 && t4 !== document; ) {
                if (!t4[vs])
                  return false;
                if (t4[vs](e4))
                  return t4;
                t4 = t4.parentNode;
              }
              return false;
            } }, { key: "insertBasicTopTab", value: function(t4, e4) {
              e4.firstChild.insertBefore(t4, e4.firstChild.firstChild);
            } }, { key: "getTab", value: function(t4, e4) {
              var r2 = document.createElement("div");
              return r2.appendChild(t4), r2.id = e4, r2.classList.add("je-tab"), r2;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r2 = document.createElement("div");
              return r2.appendChild(t4), r2.id = e4, r2.classList.add("je-tab--top"), r2;
            } }, { key: "getTabContentHolder", value: function(t4) {
              return t4.children[1];
            } }, { key: "getTopTabContentHolder", value: function(t4) {
              return t4.children[1];
            } }, { key: "getTabContent", value: function() {
              return this.getIndentedPanel();
            } }, { key: "getTopTabContent", value: function() {
              return this.getTopIndentedPanel();
            } }, { key: "markTabActive", value: function(t4) {
              this.applyStyles(t4.tab, { opacity: 1, background: "white" }), t4.rowPane !== void 0 ? t4.rowPane.style.display = "" : t4.container.style.display = "";
            } }, { key: "markTabInactive", value: function(t4) {
              this.applyStyles(t4.tab, { opacity: 0.5, background: "" }), t4.rowPane !== void 0 ? t4.rowPane.style.display = "none" : t4.container.style.display = "none";
            } }, { key: "addTab", value: function(t4, e4) {
              t4.children[0].appendChild(e4);
            } }, { key: "addTopTab", value: function(t4, e4) {
              t4.children[0].appendChild(e4);
            } }, { key: "getBlockLink", value: function() {
              var t4 = document.createElement("a");
              return t4.classList.add("je-block-link"), t4;
            } }, { key: "getBlockLinkHolder", value: function() {
              return document.createElement("div");
            } }, { key: "getLinksHolder", value: function() {
              return document.createElement("div");
            } }, { key: "createMediaLink", value: function(t4, e4, r2) {
              t4.appendChild(e4), r2.classList.add("je-media"), t4.appendChild(r2);
            } }, { key: "createImageLink", value: function(t4, e4, r2) {
              t4.appendChild(e4), e4.appendChild(r2);
            } }, { key: "getFirstTab", value: function(t4) {
              return t4.firstChild.firstChild;
            } }, { key: "getInputGroup", value: function(t4, e4) {
            } }, { key: "cleanText", value: function(t4) {
              var e4 = document.createElement("div");
              return e4.innerHTML = t4, e4.textContent || e4.innerText;
            } }, { key: "getDropZone", value: function(t4) {
              var e4 = document.createElement("div");
              return e4.setAttribute("data-text", t4), e4.classList.add("je-dropzone"), e4;
            } }, { key: "getUploadPreview", value: function(t4, e4, r2) {
              var n2 = document.createElement("div");
              if (n2.classList.add("je-upload-preview"), t4.mimeType.substr(0, 5) === "image") {
                var i2 = document.createElement("img");
                i2.src = r2, n2.appendChild(i2);
              }
              var o2 = document.createElement("div");
              o2.innerHTML += "<strong>Name:</strong> ".concat(t4.name, "<br><strong>Type:</strong> ").concat(t4.type, "<br><strong>Size:</strong> ").concat(t4.formattedSize), n2.appendChild(o2), n2.appendChild(e4);
              var a2 = document.createElement("div");
              return a2.style.clear = "left", n2.appendChild(a2), n2;
            } }, { key: "getProgressBar", value: function() {
              var t4 = document.createElement("progress");
              return t4.setAttribute("max", 100), t4.setAttribute("value", 0), t4;
            } }, { key: "updateProgressBar", value: function(t4, e4) {
              t4 && t4.setAttribute("value", e4);
            } }, { key: "updateProgressBarUnknown", value: function(t4) {
              t4 && t4.removeAttribute("value");
            } }], e3 && ys(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
            var t3, e3;
          }();
          function gs(t3) {
            return gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, gs(t3);
          }
          function ws(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, _s(n2.key), n2);
            }
          }
          function _s(t3) {
            var e3 = function(t4, e4) {
              if (gs(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (gs(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return gs(e3) == "symbol" ? e3 : e3 + "";
          }
          function ks(t3, e3, r2) {
            return e3 = xs(e3), function(t4, e4) {
              if (e4 && (gs(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, js() ? Reflect.construct(e3, r2 || [], xs(t3).constructor) : e3.apply(t3, r2));
          }
          function js() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (js = function() {
              return !!t3;
            })();
          }
          function Os() {
            return Os = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = xs(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Os.apply(this, arguments);
          }
          function xs(t3) {
            return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, xs(t3);
          }
          function Cs(t3, e3) {
            return Cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Cs(t3, e3);
          }
          var Es = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), ks(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Cs(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getFormInputLabel", value: function(t4, r3) {
              var n3 = Os(xs(e3.prototype), "getFormInputLabel", this).call(this, t4, r3);
              return n3.classList.add("je-form-input-label"), n3;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var r3 = Os(xs(e3.prototype), "getFormInputDescription", this).call(this, t4);
              return r3.classList.add("je-form-input-label"), r3;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = Os(xs(e3.prototype), "getIndentedPanel", this).call(this);
              return t4.classList.add("je-indented-panel"), t4;
            } }, { key: "getTopIndentedPanel", value: function() {
              return this.getIndentedPanel();
            } }, { key: "getChildEditorHolder", value: function() {
              var t4 = Os(xs(e3.prototype), "getChildEditorHolder", this).call(this);
              return t4.classList.add("je-child-editor-holder"), t4;
            } }, { key: "getHeaderButtonHolder", value: function() {
              var t4 = this.getButtonHolder();
              return t4.classList.add("je-header-button-holder"), t4;
            } }, { key: "getTable", value: function() {
              var t4 = Os(xs(e3.prototype), "getTable", this).call(this);
              return t4.classList.add("je-table"), t4;
            } }, { key: "addInputError", value: function(t4, e4) {
              var r3 = this.closest(t4, ".form-control") || t4.controlgroup;
              t4.errmsg ? t4.errmsg.style.display = "block" : (t4.errmsg = document.createElement("div"), t4.errmsg.setAttribute("class", "errmsg"), t4.errmsg.style = t4.errmsg.style || {}, t4.errmsg.style.color = "red", r3.appendChild(t4.errmsg)), t4.errmsg.innerHTML = "", t4.errmsg.appendChild(document.createTextNode(e4)), t4.errmsg.setAttribute("role", "alert");
            } }, { key: "removeInputError", value: function(t4) {
              t4.style && (t4.style.borderColor = ""), t4.errmsg && (t4.errmsg.style.display = "none");
            } }]) && ws(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function Ss(t3) {
            return Ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ss(t3);
          }
          function Ps(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Ls(n2.key), n2);
            }
          }
          function Ls(t3) {
            var e3 = function(t4, e4) {
              if (Ss(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ss(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ss(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ts(t3, e3, r2) {
            return e3 = Is(e3), function(t4, e4) {
              if (e4 && (Ss(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, As() ? Reflect.construct(e3, r2 || [], Is(t3).constructor) : e3.apply(t3, r2));
          }
          function As() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (As = function() {
              return !!t3;
            })();
          }
          function Rs() {
            return Rs = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Is(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Rs.apply(this, arguments);
          }
          function Is(t3) {
            return Is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Is(t3);
          }
          function Bs(t3, e3) {
            return Bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Bs(t3, e3);
          }
          Es.rules = { ".je-form-input-label": "display:block;margin-bottom:3px;font-weight:bold", ".je-form-input-description": "display:inline-block;margin:0;font-size:0.8em;font-style:italic", ".je-indented-panel": "padding:5px;margin:10px;border-radius:3px;border:1px%20solid%20%23ddd", ".je-child-editor-holder": "margin-bottom:8px", ".je-header-button-holder": "display:inline-block;margin-left:10px;font-size:0.8em;vertical-align:middle", ".je-table": "margin-bottom:5px;border-bottom:1px%20solid%20%23ccc", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red" };
          var Ns = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ts(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Bs(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getOptInSwitch", value: function(t4) {
              var e4 = this.getHiddenLabel(t4 + " opt-in");
              e4.setAttribute("for", t4 + "-opt-in");
              var r3 = document.createElement("label");
              r3.classList.add("switch");
              var n3 = document.createElement("input");
              n3.setAttribute("type", "checkbox"), n3.setAttribute("id", t4 + "-opt-in"), n3.classList.add("json-editor-opt-in");
              var i2 = document.createElement("span");
              i2.classList.add("switch-slider");
              var o2 = document.createElement("span");
              return o2.classList.add("sr-only"), o2.textContent = t4 + "-opt-in", r3.appendChild(o2), r3.appendChild(n3), r3.appendChild(i2), { label: e4, checkbox: n3, container: r3 };
            } }, { key: "getSelectInput", value: function(t4, r3) {
              var n3 = Rs(Is(e3.prototype), "getSelectInput", this).call(this, t4);
              return n3.classList.add("form-control"), n3;
            } }, { key: "setGridColumnSize", value: function(t4, e4, r3) {
              t4.classList.add("col-md-".concat(e4)), r3 && t4.classList.add("col-md-offset-".concat(r3));
            } }, { key: "afterInputReady", value: function(t4) {
              t4.controlgroup || (t4.controlgroup = this.closest(t4, ".form-group"), this.closest(t4, ".compact") && (t4.controlgroup.style.marginBottom = 0));
            } }, { key: "getTextareaInput", value: function() {
              var t4 = document.createElement("textarea");
              return t4.classList.add("form-control"), t4;
            } }, { key: "getRangeInput", value: function(t4, r3, n3, i2, o2) {
              return Rs(Is(e3.prototype), "getRangeInput", this).call(this, t4, r3, n3, i2, o2);
            } }, { key: "getFormInputField", value: function(t4) {
              var r3 = Rs(Is(e3.prototype), "getFormInputField", this).call(this, t4);
              return t4 !== "checkbox" && t4 !== "radio" && r3.classList.add("form-control"), r3;
            } }, { key: "getHiddenLabel", value: function(t4) {
              var e4 = document.createElement("label");
              return e4.textContent = t4, e4.classList.add("sr-only"), e4;
            } }, { key: "visuallyHidden", value: function(t4) {
              t4 && t4.classList.add("sr-only");
            } }, { key: "getHiddenText", value: function(t4) {
              var e4 = document.createElement("span");
              return e4.textContent = t4, e4.classList.add("sr-only"), e4;
            } }, { key: "getFormControl", value: function(t4, e4, r3, n3, i2) {
              var o2 = document.createElement("div");
              return !t4 || e4.type !== "checkbox" && e4.type !== "radio" ? (o2.classList.add("form-group"), t4 && (t4.classList.add("control-label"), o2.appendChild(t4), n3 && t4.appendChild(n3)), o2.appendChild(e4)) : (o2.classList.add(e4.type), n3 && t4.appendChild(n3), t4.insertBefore(e4, t4.firstChild), o2.appendChild(t4)), r3 && o2.appendChild(r3), e4.tagName.toLowerCase() !== "div" && e4 && t4 && i2 && (t4.setAttribute("for", i2), e4.setAttribute("id", i2)), e4.tagName.toLowerCase() !== "div" && e4 && r3 && (r3.setAttribute("id", i2 + "-description"), e4.setAttribute("aria-describedby", i2 + "-description")), o2;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("well", "well-sm"), t4.style.paddingBottom = 0, t4;
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("span");
              e4.classList.add("glyphicon", "glyphicon-info-sign", "pull-right"), e4.style.padding = ".25rem", e4.style.position = "relative", e4.style.display = "inline-block";
              var r3 = document.createElement("span");
              return r3.style["font-family"] = "sans-serif", r3.style.visibility = "hidden", r3.style["background-color"] = "rgba(50, 50, 50, .75)", r3.style.margin = "0 .25rem", r3.style.color = "#FAFAFA", r3.style.padding = ".5rem 1rem", r3.style["border-radius"] = ".25rem", r3.style.width = "25rem", r3.style.position = "absolute", r3.innerText = t4, e4.onmouseover = function() {
                r3.style.visibility = "visible";
              }, e4.onmouseleave = function() {
                r3.style.visibility = "hidden";
              }, e4.appendChild(r3), e4;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var e4 = document.createElement("p");
              return e4.classList.add("help-block"), window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getHeaderContainer", value: function() {
              return document.createElement("div");
            } }, { key: "getHeader", value: function(t4, e4) {
              var r3 = document.createElement("span");
              return r3.classList.add("h3"), typeof t4 == "string" ? r3.textContent = t4 : r3.appendChild(t4), r3;
            } }, { key: "getHeaderButtonHolder", value: function() {
              var t4 = this.getButtonHolder();
              return t4.style.marginLeft = "10px", t4;
            } }, { key: "getButtonHolder", value: function() {
              var t4 = document.createElement("span");
              return t4.classList.add("btn-group"), t4;
            } }, { key: "getButton", value: function(t4, r3, n3) {
              var i2 = Rs(Is(e3.prototype), "getButton", this).call(this, t4, r3, n3);
              return i2.classList.add("btn", "btn-default"), i2;
            } }, { key: "getTableContainer", value: function() {
              var t4 = Rs(Is(e3.prototype), "getTableContainer", this).call(this);
              return t4.classList.add("table-responsive"), t4;
            } }, { key: "getTable", value: function() {
              var t4 = document.createElement("table");
              return t4.classList.add("table", "table-bordered"), t4.style.width = "auto", t4.style.maxWidth = "none", t4;
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controlgroup && (t4.controlgroup.classList.add("has-error"), t4.errmsg ? t4.errmsg.style.display = "" : (t4.errmsg = document.createElement("p"), t4.errmsg.classList.add("help-block", "errormsg"), t4.controlgroup.appendChild(t4.errmsg)), t4.errmsg.textContent = e4, t4.errmsg.setAttribute("role", "alert"));
            } }, { key: "removeInputError", value: function(t4) {
              t4.errmsg && (t4.errmsg.style.display = "none", t4.controlgroup.classList.remove("has-error"));
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.innerHTML = "<ul class='col-md-2 nav nav-pills nav-stacked' id='".concat(e4, "' role='tablist'></ul><div class='col-md-10 tab-content active well well-small'  id='").concat(e4, "'></div>"), r3;
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.innerHTML = "<ul class='nav nav-tabs' id='".concat(e4, "' role='tablist'></ul><div class='tab-content active well well-small'  id='").concat(e4, "'></div>"), r3;
            } }, { key: "getTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.setAttribute("role", "presentation");
              var n3 = document.createElement("a");
              return n3.setAttribute("href", "#".concat(e4)), n3.appendChild(t4), n3.setAttribute("aria-controls", e4), n3.setAttribute("role", "tab"), n3.setAttribute("data-toggle", "tab"), r3.appendChild(n3), r3;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.setAttribute("role", "presentation");
              var n3 = document.createElement("a");
              return n3.setAttribute("href", "#".concat(e4)), n3.appendChild(t4), n3.setAttribute("aria-controls", e4), n3.setAttribute("role", "tab"), n3.setAttribute("data-toggle", "tab"), r3.appendChild(n3), r3;
            } }, { key: "getTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "getTopTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.classList.add("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.add("active") : t4.container.classList.add("active");
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.classList.remove("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.remove("active") : t4.container.classList.remove("active");
            } }, { key: "getProgressBar", value: function() {
              var t4 = document.createElement("div");
              t4.classList.add("progress");
              var e4 = document.createElement("div");
              return e4.classList.add("progress-bar"), e4.setAttribute("role", "progressbar"), e4.setAttribute("aria-valuenow", 0), e4.setAttribute("aria-valuemin", 0), e4.setAttribute("aria-valuenax", 100), e4.innerHTML = "".concat(0, "%"), t4.appendChild(e4), t4;
            } }, { key: "updateProgressBar", value: function(t4, e4) {
              if (t4) {
                var r3 = t4.firstChild, n3 = "".concat(e4, "%");
                r3.setAttribute("aria-valuenow", e4), r3.style.width = n3, r3.innerHTML = n3;
              }
            } }, { key: "updateProgressBarUnknown", value: function(t4) {
              if (t4) {
                var e4 = t4.firstChild;
                t4.classList.add("progress", "progress-striped", "active"), e4.removeAttribute("aria-valuenow"), e4.style.width = "100%", e4.innerHTML = "";
              }
            } }, { key: "getInputGroup", value: function(t4, e4) {
              if (t4) {
                var r3 = document.createElement("div");
                r3.classList.add("input-group"), r3.appendChild(t4);
                var n3 = document.createElement("div");
                n3.classList.add("input-group-btn"), r3.appendChild(n3);
                for (var i2 = 0; i2 < e4.length; i2++)
                  n3.appendChild(e4[i2]);
                return r3;
              }
            } }]) && Ps(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function Ds(t3) {
            return Ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ds(t3);
          }
          function Fs(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Vs(n2.key), n2);
            }
          }
          function Vs(t3) {
            var e3 = function(t4, e4) {
              if (Ds(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ds(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ds(e3) == "symbol" ? e3 : e3 + "";
          }
          function Hs(t3, e3, r2) {
            return e3 = qs(e3), function(t4, e4) {
              if (e4 && (Ds(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, zs() ? Reflect.construct(e3, r2 || [], qs(t3).constructor) : e3.apply(t3, r2));
          }
          function zs() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (zs = function() {
              return !!t3;
            })();
          }
          function Ms() {
            return Ms = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = qs(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Ms.apply(this, arguments);
          }
          function qs(t3) {
            return qs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, qs(t3);
          }
          function Us(t3, e3) {
            return Us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Us(t3, e3);
          }
          Ns.rules = { ".switch": "position:relative;display:inline-block;width:28px;height:16px;margin-right:10px", ".switch input": "opacity:0;width:0;height:0", ".switch-slider": "position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:%23ccc;transition:.1s;border-radius:34px", ".switch-slider:before": "position:absolute;content:%22%22;height:12px;width:12px;left:1px;top:2px;background-color:white;transition:.1s;border-radius:50%25", "input:checked + .switch-slider": "background-color:%232196F3", "input:focus + .switch-slider": "box-shadow:0%200%201px%20%232196F3", "input:checked + .switch-slider:before": "transform:translateX(12px)", "input:disabled + .switch-slider": "opacity:0.5" };
          var Gs = { disable_theme_rules: false, input_size: "normal", custom_forms: false, object_indent: true, object_background: "bg-light", object_text: "", table_border: false, table_zebrastyle: false, tooltip: "bootstrap" }, $s = function(t3) {
            function e3(t4) {
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Hs(this, e3, [t4, Gs]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Us(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getSelectInput", value: function(t4, r3) {
              var n3 = Ms(qs(e3.prototype), "getSelectInput", this).call(this, t4);
              return n3.classList.add("form-control"), this.options.custom_forms === false ? (this.options.input_size === "small" && n3.classList.add("form-control-sm"), this.options.input_size === "large" && n3.classList.add("form-control-lg")) : (n3.classList.remove("form-control"), n3.classList.add("custom-select"), this.options.input_size === "small" && n3.classList.add("custom-select-sm"), this.options.input_size === "large" && n3.classList.add("custom-select-lg")), n3;
            } }, { key: "getContainer", value: function() {
              var t4 = document.createElement("div");
              return this.options.object_indent || t4.classList.add("je-noindent"), t4;
            } }, { key: "getOptInSwitch", value: function(t4) {
              var e4 = this.getHiddenLabel(t4 + " opt-in");
              e4.setAttribute("for", t4 + "-opt-in");
              var r3 = document.createElement("div");
              r3.classList.add("custom-control", "custom-switch", "d-inline-block", "fs-6");
              var n3 = document.createElement("input");
              n3.setAttribute("type", "checkbox"), n3.setAttribute("id", t4 + "-opt-in"), n3.classList.add("custom-control-input", "json-editor-opt-in");
              var i2 = document.createElement("label");
              i2.setAttribute("for", t4 + "-opt-in"), i2.classList.add("custom-control-label");
              var o2 = document.createElement("span");
              return o2.classList.add("sr-only"), o2.textContent = t4 + "-opt-in", i2.appendChild(o2), r3.appendChild(n3), r3.appendChild(i2), { label: e4, checkbox: n3, container: r3 };
            } }, { key: "setGridColumnSize", value: function(t4, e4, r3) {
              t4.classList.add("col-md-".concat(e4)), r3 && t4.classList.add("offset-md-".concat(r3));
            } }, { key: "afterInputReady", value: function(t4) {
              if (!t4.controlgroup) {
                var e4 = t4.name;
                t4.id = e4;
                var r3 = t4.parentNode.parentNode.getElementsByTagName("label")[0];
                r3 && (r3.htmlFor = e4), t4.controlgroup = this.closest(t4, ".form-group");
              }
            } }, { key: "getTextareaInput", value: function() {
              var t4 = document.createElement("textarea");
              return t4.classList.add("form-control"), this.options.input_size === "small" && t4.classList.add("form-control-sm"), this.options.input_size === "large" && t4.classList.add("form-control-lg"), t4;
            } }, { key: "getRangeInput", value: function(t4, r3, n3, i2, o2) {
              var a2 = Ms(qs(e3.prototype), "getRangeInput", this).call(this, t4, r3, n3, i2, o2);
              return this.options.custom_forms === true && (a2.classList.remove("form-control"), a2.classList.add("custom-range")), a2;
            } }, { key: "getStepperButtons", value: function(t4) {
              var e4 = document.createElement("div"), r3 = document.createElement("div"), n3 = document.createElement("div"), i2 = document.createElement("button");
              i2.setAttribute("type", "button");
              var o2 = document.createElement("button");
              o2.setAttribute("type", "button"), e4.appendChild(r3), e4.appendChild(t4), e4.appendChild(n3), r3.appendChild(i2), n3.appendChild(o2), e4.classList.add("input-group"), r3.classList.add("input-group-prepend"), n3.classList.add("input-group-append"), i2.classList.add("btn"), i2.classList.add("btn-secondary"), i2.classList.add("stepper-down"), o2.classList.add("btn"), o2.classList.add("btn-secondary"), o2.classList.add("stepper-up"), t4.getAttribute("readonly") && (i2.setAttribute("disabled", true), o2.setAttribute("disabled", true)), i2.textContent = "-", o2.textContent = "+";
              var a2 = function(t5, e5) {
                t5.value = Number(e5 || t5.value), t5.setAttribute("initialized", "1");
              }, s2 = t4.getAttribute("min"), l2 = t4.getAttribute("max");
              return t4.addEventListener("change", function() {
                t4.getAttribute("initialized") || t4.setAttribute("initialized", "1");
              }), i2.addEventListener("click", function() {
                t4.getAttribute("initialized") ? s2 ? Number(t4.value) > Number(s2) && t4.stepDown() : t4.stepDown() : a2(t4, s2), c(t4, "change");
              }), o2.addEventListener("click", function() {
                t4.getAttribute("initialized") ? l2 ? Number(t4.value) < Number(l2) && t4.stepUp() : t4.stepUp() : a2(t4, s2), c(t4, "change");
              }), e4;
            } }, { key: "getFormInputField", value: function(t4) {
              var r3 = Ms(qs(e3.prototype), "getFormInputField", this).call(this, t4);
              return t4 !== "checkbox" && t4 !== "radio" && t4 !== "file" && (r3.classList.add("form-control"), this.options.input_size === "small" && r3.classList.add("form-control-sm"), this.options.input_size === "large" && r3.classList.add("form-control-lg")), t4 === "file" && r3.classList.add("form-control-file"), r3;
            } }, { key: "getHiddenLabel", value: function(t4) {
              var e4 = document.createElement("label");
              return e4.textContent = t4, e4.classList.add("sr-only"), e4;
            } }, { key: "visuallyHidden", value: function(t4) {
              t4 && t4.classList.add("sr-only");
            } }, { key: "getHiddenText", value: function(t4) {
              var e4 = document.createElement("span");
              return e4.textContent = t4, e4.classList.add("sr-only"), e4;
            } }, { key: "getFormControl", value: function(t4, e4, r3, n3, i2) {
              var o2 = document.createElement("div");
              if (o2.classList.add("form-group"), !t4 || e4.type !== "checkbox" && e4.type !== "radio")
                t4 && (o2.appendChild(t4), n3 && o2.appendChild(n3)), o2.appendChild(e4);
              else {
                var a2 = document.createElement("div");
                this.options.custom_forms === false ? (a2.classList.add("form-check"), e4.classList.add("form-check-input"), t4.classList.add("form-check-label")) : (a2.classList.add("custom-control"), e4.classList.add("custom-control-input"), t4.classList.add("custom-control-label"), e4.type === "checkbox" ? a2.classList.add("custom-checkbox") : a2.classList.add("custom-radio")), a2.appendChild(e4), a2.appendChild(t4), n3 && a2.appendChild(n3), o2.appendChild(a2);
              }
              return r3 && o2.appendChild(r3), e4.tagName.toLowerCase() !== "div" && e4 && t4 && i2 && (t4.setAttribute("for", i2), e4.setAttribute("id", i2)), e4.tagName.toLowerCase() !== "div" && e4 && r3 && (r3.setAttribute("id", i2 + "-description"), e4.setAttribute("aria-describedby", i2 + "-description")), o2;
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("button");
              e4.type = "button", e4.classList.add("ml-3", "jsoneditor-twbs4-text-button"), e4.setAttribute("data-toggle", "tooltip"), e4.setAttribute("data-placement", "auto"), e4.title = t4;
              var r3 = document.createTextNode("\u24D8");
              return e4.appendChild(r3), this.options.tooltip === "bootstrap" ? window.jQuery && window.jQuery().tooltip ? window.jQuery(e4).tooltip() : console.warn("Could not find popper jQuery plugin of Bootstrap.") : this.options.tooltip === "css" && e4.classList.add("je-tooltip"), e4;
            } }, { key: "getCheckbox", value: function() {
              return this.getFormInputField("checkbox");
            } }, { key: "getMultiCheckboxHolder", value: function(t4, e4, r3, n3) {
              var i2 = document.createElement("div");
              i2.classList.add("form-group"), e4 && (i2.appendChild(e4), n3 && e4.appendChild(n3));
              var o2 = document.createElement("div");
              return Object.values(t4).forEach(function(t5) {
                var e5 = t5.firstChild;
                o2.appendChild(e5);
              }), i2.appendChild(o2), r3 && i2.appendChild(r3), i2;
            } }, { key: "getFormRadio", value: function(t4) {
              var e4 = this.getFormInputField("radio");
              for (var r3 in t4)
                e4.setAttribute(r3, t4[r3]);
              return this.options.custom_forms === false ? e4.classList.add("form-check-input") : e4.classList.add("custom-control-input"), e4;
            } }, { key: "getFormRadioLabel", value: function(t4, e4) {
              var r3 = document.createElement("label");
              return this.options.custom_forms === false ? r3.classList.add("form-check-label") : r3.classList.add("custom-control-label"), r3.appendChild(document.createTextNode(t4)), r3;
            } }, { key: "getFormRadioControl", value: function(t4, e4, r3) {
              var n3 = document.createElement("div");
              return this.options.custom_forms === false ? n3.classList.add("form-check") : n3.classList.add("custom-control", "custom-radio"), n3.appendChild(e4), n3.appendChild(t4), r3 && (this.options.custom_forms === false ? n3.classList.add("form-check-inline") : n3.classList.add("custom-control-inline")), n3;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("card", "card-body", "mb-3"), this.options.object_background && t4.classList.add(this.options.object_background), this.options.object_text && t4.classList.add(this.options.object_text), t4;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var e4 = document.createElement("small");
              return e4.classList.add("form-text"), window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getHeader", value: function(t4, e4) {
              var r3 = document.createElement("span");
              return r3.classList.add("h3"), r3.classList.add("card-title"), r3.classList.add("level-" + e4), typeof t4 == "string" ? r3.textContent = t4 : r3.appendChild(t4), r3.style.display = "inline-block", r3;
            } }, { key: "getHeaderButtonHolder", value: function() {
              return this.getButtonHolder();
            } }, { key: "getButtonHolder", value: function() {
              var t4 = document.createElement("span");
              return t4.classList.add("btn-group"), t4;
            } }, { key: "getFormButtonHolder", value: function(t4) {
              var e4 = this.getButtonHolder();
              return e4.classList.add("d-block"), t4 === "center" ? e4.classList.add("text-center") : t4 === "right" && e4.classList.add("text-right"), e4;
            } }, { key: "getButton", value: function(t4, r3, n3) {
              var i2 = Ms(qs(e3.prototype), "getButton", this).call(this, t4, r3, n3);
              return i2.classList.add("btn", "btn-secondary", "btn-sm"), i2;
            } }, { key: "getTableContainer", value: function() {
              var t4 = Ms(qs(e3.prototype), "getTableContainer", this).call(this);
              return t4.classList.add("table-responsive"), t4;
            } }, { key: "getTable", value: function() {
              var t4 = document.createElement("table");
              return t4.classList.add("table", "table-sm"), this.options.table_border && t4.classList.add("table-bordered"), this.options.table_zebrastyle && t4.classList.add("table-striped"), t4;
            } }, { key: "getErrorMessage", value: function(t4) {
              var e4 = document.createElement("div");
              return e4.classList.add("alert", "alert-danger"), e4.setAttribute("role", "alert"), e4.appendChild(document.createTextNode(t4)), e4;
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controlgroup && (t4.controlgroup.classList.add("is-invalid"), t4.errmsg || (t4.errmsg = document.createElement("p"), t4.errmsg.classList.add("invalid-feedback"), t4.controlgroup.appendChild(t4.errmsg), t4.errmsg.style.display = "block"), t4.errmsg.style.display = "block", t4.errmsg.textContent = e4, t4.errmsg.setAttribute("role", "alert"));
            } }, { key: "removeInputError", value: function(t4) {
              t4.errmsg && (t4.errmsg.style.display = "none", t4.controlgroup.classList.remove("is-invalid"));
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = document.createElement("div"), r3 = t4 === void 0 ? "" : t4;
              return e4.innerHTML = "<div class='col-md-2' id='".concat(r3, "'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='").concat(r3, "'></div></div>"), e4.classList.add("row"), e4;
            } }, { key: "addTab", value: function(t4, e4) {
              t4.children[0].children[0].appendChild(e4);
            } }, { key: "getTabContentHolder", value: function(t4) {
              return t4.children[1].children[0];
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.classList.add("card"), r3.innerHTML = "<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='".concat(e4, "'></ul></div><div class='card-body'><div class='tab-content' id='").concat(e4, "'></div></div>"), r3;
            } }, { key: "getTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "getTopTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.firstChild.classList.add("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.add("active") : t4.container.classList.add("active");
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.firstChild.classList.remove("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.remove("active") : t4.container.classList.remove("active");
            } }, { key: "insertBasicTopTab", value: function(t4, e4) {
              e4.children[0].children[0].insertBefore(t4, e4.children[0].children[0].firstChild);
            } }, { key: "addTopTab", value: function(t4, e4) {
              t4.children[0].children[0].appendChild(e4);
            } }, { key: "getTopTabContentHolder", value: function(t4) {
              return t4.children[1].children[0];
            } }, { key: "getFirstTab", value: function(t4) {
              return t4.firstChild.firstChild.firstChild;
            } }, { key: "getProgressBar", value: function() {
              var t4 = document.createElement("div");
              t4.classList.add("progress");
              var e4 = document.createElement("div");
              return e4.classList.add("progress-bar"), e4.setAttribute("role", "progressbar"), e4.setAttribute("aria-valuenow", 0), e4.setAttribute("aria-valuemin", 0), e4.setAttribute("aria-valuenax", 100), e4.innerHTML = "".concat(0, "%"), t4.appendChild(e4), t4;
            } }, { key: "updateProgressBar", value: function(t4, e4) {
              if (t4) {
                var r3 = t4.firstChild, n3 = "".concat(e4, "%");
                r3.setAttribute("aria-valuenow", e4), r3.style.width = n3, r3.innerHTML = n3;
              }
            } }, { key: "updateProgressBarUnknown", value: function(t4) {
              if (t4) {
                var e4 = t4.firstChild;
                t4.classList.add("progress", "progress-striped", "active"), e4.removeAttribute("aria-valuenow"), e4.style.width = "100%", e4.innerHTML = "";
              }
            } }, { key: "getBlockLink", value: function() {
              var t4 = document.createElement("a");
              return t4.classList.add("mb-3", "d-inline-block"), t4;
            } }, { key: "getLinksHolder", value: function() {
              return document.createElement("div");
            } }, { key: "getInputGroup", value: function(t4, e4) {
              if (t4) {
                var r3 = document.createElement("div");
                r3.classList.add("input-group"), r3.appendChild(t4);
                var n3 = document.createElement("div");
                n3.classList.add("input-group-append"), r3.appendChild(n3);
                for (var i2 = 0; i2 < e4.length; i2++)
                  e4[i2].classList.remove("mr-2", "btn-secondary"), e4[i2].classList.add("btn-outline-secondary"), n3.appendChild(e4[i2]);
                return r3;
              }
            } }]) && Fs(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function Js(t3) {
            return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Js(t3);
          }
          function Ws(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Zs(n2.key), n2);
            }
          }
          function Zs(t3) {
            var e3 = function(t4, e4) {
              if (Js(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Js(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Js(e3) == "symbol" ? e3 : e3 + "";
          }
          function Ys(t3, e3, r2) {
            return e3 = Xs(e3), function(t4, e4) {
              if (e4 && (Js(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Qs() ? Reflect.construct(e3, r2 || [], Xs(t3).constructor) : e3.apply(t3, r2));
          }
          function Qs() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Qs = function() {
              return !!t3;
            })();
          }
          function Ks() {
            return Ks = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Xs(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Ks.apply(this, arguments);
          }
          function Xs(t3) {
            return Xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Xs(t3);
          }
          function tl(t3, e3) {
            return tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, tl(t3, e3);
          }
          $s.rules = { ".jsoneditor-twbs4-text-button": "background:none;padding:0;border:0;color:currentColor", "td > .form-group": "margin-bottom:0", ".json-editor-btn-upload": "margin-top:1rem", ".je-noindent .card": "padding:0;border:0", ".je-tooltip:hover::before": "display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em", ".je-tooltip:hover::after": "display:block;position:absolute;font-size:0.8em;color:%23fff", ".select2-container--default .select2-selection--single": "height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".select2-container--default   .select2-selection--single   .select2-selection__arrow": "height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".select2-container--default   .select2-selection--single   .select2-selection__rendered": "line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".selectize-control.form-control": "padding:0", ".selectize-dropdown.form-control": "padding:0;height:auto", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red" };
          var el = { disable_theme_rules: false, input_size: "normal", object_indent: true, object_background: "bg-light", object_text: "", table_border: false, table_zebrastyle: false, tooltip: "bootstrap" }, rl = function(t3) {
            function e3(t4) {
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Ys(this, e3, [t4, el]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && tl(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getSelectInput", value: function(t4, r3) {
              var n3 = Ks(Xs(e3.prototype), "getSelectInput", this).call(this, t4);
              return n3.classList.add("form-control"), n3.classList.add("form-select"), this.options.input_size === "small" && n3.classList.add("form-control-sm"), this.options.input_size === "large" && n3.classList.add("form-control-lg"), n3;
            } }, { key: "getContainer", value: function() {
              var t4 = document.createElement("div");
              return this.options.object_indent || t4.classList.add("je-noindent"), t4;
            } }, { key: "getOptInSwitch", value: function(t4) {
              var e4 = this.getHiddenLabel(t4 + " opt-in");
              e4.setAttribute("for", t4 + "-opt-in");
              var r3 = document.createElement("div");
              r3.classList.add("form-check", "form-switch", "d-inline-block", "fs-6");
              var n3 = document.createElement("input");
              n3.setAttribute("type", "checkbox"), n3.setAttribute("role", "switch"), n3.setAttribute("id", t4 + "-opt-in"), n3.classList.add("form-check-input", "json-editor-opt-in");
              var i2 = document.createElement("label");
              i2.setAttribute("for", t4 + "-opt-in"), i2.classList.add("form-check-label");
              var o2 = document.createElement("span");
              return o2.classList.add("visually-hidden"), o2.textContent = t4 + "-opt-in", i2.appendChild(o2), r3.appendChild(n3), r3.appendChild(i2), { label: e4, checkbox: n3, container: r3 };
            } }, { key: "setGridColumnSize", value: function(t4, e4, r3) {
              t4.classList.add("col-md-".concat(e4)), r3 && t4.classList.add("offset-md-".concat(r3));
            } }, { key: "afterInputReady", value: function(t4) {
              if (!t4.controlgroup) {
                var e4 = t4.name;
                t4.id = e4;
                var r3 = t4.parentNode.parentNode.getElementsByTagName("label")[0];
                r3 && (r3.classList.add("form-label"), r3.htmlFor = e4), t4.controlgroup = this.closest(t4, ".form-group");
              }
            } }, { key: "getTextareaInput", value: function() {
              var t4 = document.createElement("textarea");
              return t4.classList.add("form-control"), this.options.input_size === "small" && t4.classList.add("form-control-sm"), this.options.input_size === "large" && t4.classList.add("form-control-lg"), t4;
            } }, { key: "getRangeInput", value: function(t4, r3, n3, i2, o2) {
              var a2 = Ks(Xs(e3.prototype), "getRangeInput", this).call(this, t4, r3, n3, i2, o2);
              return a2.classList.remove("form-control"), a2.classList.add("form-range"), a2;
            } }, { key: "getStepperButtons", value: function(t4) {
              var e4 = document.createElement("div"), r3 = document.createElement("button");
              r3.setAttribute("type", "button");
              var n3 = document.createElement("button");
              n3.setAttribute("type", "button"), e4.appendChild(r3), e4.appendChild(t4), e4.appendChild(n3), e4.classList.add("input-group"), r3.classList.add("btn"), r3.classList.add("btn-secondary"), r3.classList.add("stepper-down"), n3.classList.add("btn"), n3.classList.add("btn-secondary"), n3.classList.add("stepper-up"), t4.getAttribute("readonly") && (r3.setAttribute("disabled", true), n3.setAttribute("disabled", true)), r3.textContent = "-", n3.textContent = "+";
              var i2 = function(t5, e5) {
                t5.value = Number(e5 || t5.value), t5.setAttribute("initialized", "1");
              }, o2 = t4.getAttribute("min"), a2 = t4.getAttribute("max");
              return t4.addEventListener("change", function() {
                t4.getAttribute("initialized") || t4.setAttribute("initialized", "1");
              }), r3.addEventListener("click", function() {
                t4.getAttribute("initialized") ? o2 ? Number(t4.value) > Number(o2) && t4.stepDown() : t4.stepDown() : i2(t4, o2), c(t4, "change");
              }), n3.addEventListener("click", function() {
                t4.getAttribute("initialized") ? a2 ? Number(t4.value) < Number(a2) && t4.stepUp() : t4.stepUp() : i2(t4, o2), c(t4, "change");
              }), e4;
            } }, { key: "getFormInputField", value: function(t4) {
              var r3 = Ks(Xs(e3.prototype), "getFormInputField", this).call(this, t4);
              return t4 !== "checkbox" && t4 !== "radio" && (r3.classList.add("form-control"), this.options.input_size === "small" && r3.classList.add("form-control-sm"), this.options.input_size === "large" && r3.classList.add("form-control-lg")), r3;
            } }, { key: "getFormControl", value: function(t4, e4, r3, n3, i2) {
              var o2 = document.createElement("div");
              if (o2.classList.add("form-group"), !t4 || e4.type !== "checkbox" && e4.type !== "radio")
                t4 && (t4.classList.add("form-label"), o2.appendChild(t4), n3 && o2.appendChild(n3)), o2.appendChild(e4);
              else {
                var a2 = document.createElement("div");
                a2.classList.add("form-check"), e4.classList.add("form-check-input"), t4.classList.add("form-check-label"), e4.tagName.toLowerCase() !== "div" && e4 && t4 && i2 && (t4.setAttribute("for", i2), e4.setAttribute("id", i2)), e4.tagName.toLowerCase() !== "div" && e4 && r3 && (r3.setAttribute("id", i2 + "-description"), e4.setAttribute("aria-describedby", i2 + "-description")), a2.appendChild(e4), a2.appendChild(t4), n3 && a2.appendChild(n3), o2.appendChild(a2);
              }
              return r3 && o2.appendChild(r3), o2;
            } }, { key: "getHiddenLabel", value: function(t4) {
              var e4 = document.createElement("label");
              return e4.textContent = t4, e4.classList.add("visually-hidden"), e4;
            } }, { key: "visuallyHidden", value: function(t4) {
              t4 && t4.classList.add("visually-hidden");
            } }, { key: "getHiddenText", value: function(t4) {
              var e4 = document.createElement("span");
              return e4.textContent = t4, e4.classList.add("sr-only"), e4;
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("button");
              e4.type = "button", e4.classList.add("ms-3", "jsoneditor-twbs5-text-button"), e4.setAttribute("data-toggle", "tooltip"), e4.setAttribute("data-placement", "auto"), e4.title = t4;
              var r3 = document.createTextNode("\u24D8");
              return e4.appendChild(r3), this.options.tooltip === "bootstrap" ? window.jQuery && window.jQuery().tooltip ? window.jQuery(e4).tooltip() : console.warn("Could not find popper jQuery plugin of Bootstrap.") : this.options.tooltip === "css" && e4.classList.add("je-tooltip"), e4;
            } }, { key: "getCheckbox", value: function() {
              return this.getFormInputField("checkbox");
            } }, { key: "getMultiCheckboxHolder", value: function(t4, e4, r3, n3) {
              var i2 = document.createElement("div");
              i2.classList.add("form-group"), e4 && (i2.appendChild(e4), n3 && e4.appendChild(n3));
              var o2 = document.createElement("div");
              return Object.values(t4).forEach(function(t5) {
                var e5 = t5.firstChild;
                o2.appendChild(e5);
              }), i2.appendChild(o2), r3 && i2.appendChild(r3), i2;
            } }, { key: "getFormRadio", value: function(t4) {
              var e4 = this.getFormInputField("radio");
              for (var r3 in t4)
                e4.setAttribute(r3, t4[r3]);
              return e4.classList.add("form-check-input"), e4;
            } }, { key: "getFormRadioLabel", value: function(t4, e4) {
              var r3 = document.createElement("label");
              return r3.classList.add("form-check-label"), r3.appendChild(document.createTextNode(t4)), r3;
            } }, { key: "getFormRadioControl", value: function(t4, e4, r3) {
              var n3 = document.createElement("div");
              return n3.classList.add("form-check"), n3.appendChild(e4), n3.appendChild(t4), r3 && n3.classList.add("form-check-inline"), n3;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("card", "card-body", "my-3"), this.options.object_background && t4.classList.add(this.options.object_background), this.options.object_text && t4.classList.add(this.options.object_text), t4;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var e4 = document.createElement("small");
              return e4.classList.add("form-text"), e4.classList.add("d-block"), window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getHeader", value: function(t4, e4) {
              var r3 = document.createElement("span");
              return r3.classList.add("h3"), r3.classList.add("card-title"), r3.classList.add("level-" + e4), typeof t4 == "string" ? r3.textContent = t4 : r3.appendChild(t4), r3.style.display = "inline-block", r3;
            } }, { key: "getHeaderButtonHolder", value: function() {
              return this.getButtonHolder();
            } }, { key: "getButtonHolder", value: function() {
              var t4 = document.createElement("span");
              return t4.classList.add("btn-group"), t4;
            } }, { key: "getFormButtonHolder", value: function(t4) {
              var e4 = this.getButtonHolder();
              return e4.classList.add("d-block"), t4 === "center" ? e4.classList.add("text-center") : t4 === "right" && e4.classList.add("text-end"), e4;
            } }, { key: "getButton", value: function(t4, r3, n3) {
              var i2 = Ks(Xs(e3.prototype), "getButton", this).call(this, t4, r3, n3);
              return i2.classList.add("btn", "btn-secondary", "btn-sm"), i2;
            } }, { key: "getTableContainer", value: function() {
              var t4 = Ks(Xs(e3.prototype), "getTableContainer", this).call(this);
              return t4.classList.add("table-responsive"), t4;
            } }, { key: "getTable", value: function() {
              var t4 = document.createElement("table");
              return t4.classList.add("table", "table-sm"), this.options.table_border && t4.classList.add("table-bordered"), this.options.table_zebrastyle && t4.classList.add("table-striped"), t4;
            } }, { key: "getErrorMessage", value: function(t4) {
              var e4 = document.createElement("div");
              return e4.classList.add("alert", "alert-danger"), e4.setAttribute("role", "alert"), e4.appendChild(document.createTextNode(t4)), e4;
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controlgroup && (t4.controlgroup.classList.add("is-invalid"), t4.errmsg || (t4.errmsg = document.createElement("p"), t4.errmsg.classList.add("invalid-feedback"), t4.controlgroup.appendChild(t4.errmsg), t4.errmsg.style.display = "block"), t4.errmsg.style.display = "block", t4.errmsg.textContent = e4, t4.errmsg.setAttribute("role", "alert"));
            } }, { key: "removeInputError", value: function(t4) {
              t4.errmsg && (t4.errmsg.style.display = "none", t4.controlgroup.classList.remove("is-invalid"));
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = document.createElement("div"), r3 = t4 === void 0 ? "" : t4;
              return e4.innerHTML = "<div class='col-md-2' id='".concat(r3, "'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='").concat(r3, "'></div></div>"), e4.classList.add("row"), e4;
            } }, { key: "addTab", value: function(t4, e4) {
              t4.children[0].children[0].appendChild(e4);
            } }, { key: "getTabContentHolder", value: function(t4) {
              return t4.children[1].children[0];
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.classList.add("card"), r3.innerHTML = "<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='".concat(e4, "'></ul></div><div class='card-body'><div class='tab-content' id='").concat(e4, "'></div></div>"), r3;
            } }, { key: "getTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "getTopTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("tab-pane"), t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.firstChild.classList.add("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.add("active") : t4.container.classList.add("active");
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.firstChild.classList.remove("active"), t4.rowPane !== void 0 ? t4.rowPane.classList.remove("active") : t4.container.classList.remove("active");
            } }, { key: "insertBasicTopTab", value: function(t4, e4) {
              e4.children[0].children[0].insertBefore(t4, e4.children[0].children[0].firstChild);
            } }, { key: "addTopTab", value: function(t4, e4) {
              t4.children[0].children[0].appendChild(e4);
            } }, { key: "getTopTabContentHolder", value: function(t4) {
              return t4.children[1].children[0];
            } }, { key: "getFirstTab", value: function(t4) {
              return t4.firstChild.firstChild.firstChild;
            } }, { key: "getProgressBar", value: function() {
              var t4 = document.createElement("div");
              t4.classList.add("progress");
              var e4 = document.createElement("div");
              return e4.classList.add("progress-bar"), e4.setAttribute("role", "progressbar"), e4.setAttribute("aria-valuenow", 0), e4.setAttribute("aria-valuemin", 0), e4.setAttribute("aria-valuenax", 100), e4.innerHTML = "".concat(0, "%"), t4.appendChild(e4), t4;
            } }, { key: "updateProgressBar", value: function(t4, e4) {
              if (t4) {
                var r3 = t4.firstChild, n3 = "".concat(e4, "%");
                r3.setAttribute("aria-valuenow", e4), r3.style.width = n3, r3.innerHTML = n3;
              }
            } }, { key: "updateProgressBarUnknown", value: function(t4) {
              if (t4) {
                var e4 = t4.firstChild;
                t4.classList.add("progress", "progress-striped", "active"), e4.removeAttribute("aria-valuenow"), e4.style.width = "100%", e4.innerHTML = "";
              }
            } }, { key: "getBlockLink", value: function() {
              var t4 = document.createElement("a");
              return t4.classList.add("mb-3", "d-inline-block"), t4;
            } }, { key: "getLinksHolder", value: function() {
              return document.createElement("div");
            } }, { key: "getInputGroup", value: function(t4, e4) {
              if (t4) {
                var r3 = document.createElement("div");
                r3.classList.add("input-group"), r3.appendChild(t4);
                for (var n3 = 0; n3 < e4.length; n3++)
                  e4[n3].classList.remove("me-2", "btn-secondary"), e4[n3].classList.add("btn-outline-secondary"), r3.appendChild(e4[n3]);
                return r3;
              }
            } }]) && Ws(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function nl(t3) {
            return nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, nl(t3);
          }
          function il(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ol(n2.key), n2);
            }
          }
          function ol(t3) {
            var e3 = function(t4, e4) {
              if (nl(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (nl(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return nl(e3) == "symbol" ? e3 : e3 + "";
          }
          function al(t3, e3, r2) {
            return e3 = cl(e3), function(t4, e4) {
              if (e4 && (nl(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, sl() ? Reflect.construct(e3, r2 || [], cl(t3).constructor) : e3.apply(t3, r2));
          }
          function sl() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (sl = function() {
              return !!t3;
            })();
          }
          function ll() {
            return ll = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = cl(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, ll.apply(this, arguments);
          }
          function cl(t3) {
            return cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, cl(t3);
          }
          function ul(t3, e3) {
            return ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, ul(t3, e3);
          }
          rl.rules = { ".form-group": "margin-bottom:1rem", ".form-text": "display:block", ".jsoneditor-twbs5-text-button": "background:none;padding:0;border:0;color:currentColor", "td > .form-group": "margin-bottom:0", ".json-editor-btn-upload": "margin-top:1rem", ".je-noindent .card": "padding:0;border:0", ".je-tooltip:hover::before": "display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em", ".je-tooltip:hover::after": "display:block;position:absolute;font-size:0.8em;color:%23fff", ".select2-container--default .select2-selection--single": "height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".select2-container--default   .select2-selection--single   .select2-selection__arrow": "height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".select2-container--default   .select2-selection--single   .select2-selection__rendered": "line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)", ".selectize-control.form-control": "padding:0", ".selectize-dropdown.form-control": "padding:0;height:auto", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red" };
          var hl = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), al(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ul(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getTable", value: function() {
              var t4 = ll(cl(e3.prototype), "getTable", this).call(this);
              return t4.setAttribute("cellpadding", 5), t4.setAttribute("cellspacing", 0), t4;
            } }, { key: "getTableHeaderCell", value: function(t4) {
              var r3 = ll(cl(e3.prototype), "getTableHeaderCell", this).call(this, t4);
              return r3.classList.add("ui-state-active"), r3.style.fontWeight = "bold", r3;
            } }, { key: "getTableCell", value: function() {
              var t4 = ll(cl(e3.prototype), "getTableCell", this).call(this);
              return t4.classList.add("ui-widget-content"), t4;
            } }, { key: "getHeaderButtonHolder", value: function() {
              var t4 = this.getButtonHolder();
              return t4.style.marginLeft = "10px", t4.style.fontSize = ".6em", t4.style.display = "inline-block", t4;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var e4 = this.getDescription(t4);
              return e4.style.marginLeft = "10px", e4.style.display = "inline-block", e4;
            } }, { key: "getFormControl", value: function(t4, r3, n3, i2) {
              var o2 = ll(cl(e3.prototype), "getFormControl", this).call(this, t4, r3, n3, i2);
              return r3.type === "checkbox" ? (o2.style.lineHeight = "25px", o2.style.padding = "3px 0") : o2.style.padding = "4px 0 8px 0", o2;
            } }, { key: "getDescription", value: function(t4) {
              var e4 = document.createElement("span");
              return e4.style.fontSize = ".8em", e4.style.fontStyle = "italic", window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getButtonHolder", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("ui-buttonset"), t4.style.fontSize = ".7em", t4;
            } }, { key: "getFormInputLabel", value: function(t4, e4) {
              var r3 = document.createElement("label");
              return r3.style.fontWeight = "bold", r3.style.display = "block", r3.textContent = t4, e4 && r3.classList.add("required"), r3;
            } }, { key: "getButton", value: function(t4, e4, r3) {
              var n3 = document.createElement("button");
              n3.classList.add("ui-button", "ui-widget", "ui-state-default", "ui-corner-all"), e4 && !t4 ? (n3.classList.add("ui-button-icon-only"), e4.classList.add("ui-button-icon-primary", "ui-icon-primary"), n3.appendChild(e4)) : e4 ? (n3.classList.add("ui-button-text-icon-primary"), e4.classList.add("ui-button-icon-primary", "ui-icon-primary"), n3.appendChild(e4)) : n3.classList.add("ui-button-text-only");
              var i2 = document.createElement("span");
              return i2.classList.add("ui-button-text"), i2.textContent = t4 || r3 || ".", n3.appendChild(i2), n3.setAttribute("title", r3), n3;
            } }, { key: "setButtonText", value: function(t4, e4, r3, n3) {
              t4.innerHTML = "", t4.classList.add("ui-button", "ui-widget", "ui-state-default", "ui-corner-all"), r3 && !e4 ? (t4.classList.add("ui-button-icon-only"), r3.classList.add("ui-button-icon-primary", "ui-icon-primary"), t4.appendChild(r3)) : r3 ? (t4.classList.add("ui-button-text-icon-primary"), r3.classList.add("ui-button-icon-primary", "ui-icon-primary"), t4.appendChild(r3)) : t4.classList.add("ui-button-text-only");
              var i2 = document.createElement("span");
              i2.classList.add("ui-button-text"), i2.textContent = e4 || n3 || ".", t4.appendChild(i2), t4.setAttribute("title", n3);
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("ui-widget-content", "ui-corner-all"), t4.style.padding = "1em 1.4em", t4.style.marginBottom = "20px", t4;
            } }, { key: "afterInputReady", value: function(t4) {
              if (!t4.controls && (t4.controls = this.closest(t4, ".form-control"), this.queuedInputErrorText)) {
                var e4 = this.queuedInputErrorText;
                delete this.queuedInputErrorText, this.addInputError(t4, e4);
              }
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controls ? (t4.errmsg ? t4.errmsg.style.display = "" : (t4.errmsg = document.createElement("div"), t4.errmsg.classList.add("ui-state-error"), t4.controls.appendChild(t4.errmsg)), t4.errmsg.textContent = e4) : this.queuedInputErrorText = e4;
            } }, { key: "removeInputError", value: function(t4) {
              t4.controls || delete this.queuedInputErrorText, t4.errmsg && (t4.errmsg.style.display = "none");
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.classList.remove("ui-widget-header"), t4.tab.classList.add("ui-state-active"), t4.rowPane !== void 0 ? t4.rowPane.style.display = "" : t4.container.style.display = "";
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.classList.add("ui-widget-header"), t4.tab.classList.remove("ui-state-active"), t4.rowPane !== void 0 ? t4.rowPane.style.display = "none" : t4.container.style.display = "none";
            } }]) && il(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function pl(t3) {
            return pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, pl(t3);
          }
          function dl(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, fl(n2.key), n2);
            }
          }
          function fl(t3) {
            var e3 = function(t4, e4) {
              if (pl(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (pl(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return pl(e3) == "symbol" ? e3 : e3 + "";
          }
          function yl(t3, e3, r2) {
            return e3 = vl(e3), function(t4, e4) {
              if (e4 && (pl(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, ml() ? Reflect.construct(e3, r2 || [], vl(t3).constructor) : e3.apply(t3, r2));
          }
          function ml() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (ml = function() {
              return !!t3;
            })();
          }
          function vl(t3) {
            return vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, vl(t3);
          }
          function bl(t3, e3) {
            return bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, bl(t3, e3);
          }
          hl.rules = { 'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"' };
          var gl = function(t3) {
            function e3() {
              return function(t4, e4) {
                if (!(t4 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), yl(this, e3, arguments);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && bl(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "addInputError", value: function(t4, e4) {
              if (t4.errmsg)
                t4.errmsg.style.display = "block";
              else {
                var r3 = this.closest(t4, ".form-control");
                t4.errmsg = document.createElement("div"), t4.errmsg.setAttribute("class", "errmsg"), r3.nodeName && r3.appendChild(t4.errmsg);
              }
              t4.errmsg.innerHTML = "", t4.errmsg.appendChild(document.createTextNode(e4)), t4.errmsg.setAttribute("role", "alert");
            } }, { key: "removeInputError", value: function(t4) {
              t4.style && (t4.style.borderColor = ""), t4.errmsg && (t4.errmsg.style.display = "none");
            } }]) && dl(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function wl(t3) {
            return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, wl(t3);
          }
          function _l(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, kl(n2.key), n2);
            }
          }
          function kl(t3) {
            var e3 = function(t4, e4) {
              if (wl(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (wl(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return wl(e3) == "symbol" ? e3 : e3 + "";
          }
          function jl(t3, e3, r2) {
            return e3 = Cl(e3), function(t4, e4) {
              if (e4 && (wl(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Ol() ? Reflect.construct(e3, r2 || [], Cl(t3).constructor) : e3.apply(t3, r2));
          }
          function Ol() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Ol = function() {
              return !!t3;
            })();
          }
          function xl() {
            return xl = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Cl(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, xl.apply(this, arguments);
          }
          function Cl(t3) {
            return Cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Cl(t3);
          }
          function El(t3, e3) {
            return El = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, El(t3, e3);
          }
          gl.rules = { ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red" };
          var Sl = { disable_theme_rules: false, label_bold: true, align_bottom: false, object_indent: false, object_border: false, table_border: false, table_zebrastyle: false, input_size: "normal" }, Pl = function(t3) {
            function e3(t4) {
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), jl(this, e3, [t4, Sl]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && El(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getOptInSwitch", value: function(t4) {
              var e4 = document.createElement("span");
              e4.classList.add("form-group");
              var r3 = document.createElement("label");
              r3.classList.add("form-switch", "d-inline-block");
              var n3 = document.createElement("input");
              n3.setAttribute("type", "checkbox"), n3.setAttribute("id", t4 + "-opt-in"), n3.classList.add("json-editor-opt-in");
              var i2 = document.createElement("i");
              i2.classList.add("form-icon");
              var o2 = document.createElement("span");
              return o2.classList.add("sr-only"), o2.textContent = t4 + "-opt-in", r3.appendChild(o2), r3.appendChild(n3), r3.appendChild(i2), e4.appendChild(r3), { label: r3, checkbox: n3, container: e4 };
            } }, { key: "setGridColumnSize", value: function(t4, e4, r3) {
              t4.classList.add("col-".concat(e4)), r3 && t4.classList.add("col-mx-auto");
            } }, { key: "getGridContainer", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("container"), this.options.object_indent || t4.classList.add("je-noindent"), t4;
            } }, { key: "getGridRow", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("columns"), t4;
            } }, { key: "getGridColumn", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("column"), this.options.align_bottom && t4.classList.add("je-align-bottom"), t4;
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("je-panel"), this.options.object_border && t4.classList.add("je-border"), t4;
            } }, { key: "getTopIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("je-panel-top"), this.options.object_border && t4.classList.add("je-border"), t4;
            } }, { key: "getHeaderButtonHolder", value: function() {
              return this.getButtonHolder();
            } }, { key: "getButtonHolder", value: function() {
              var t4 = xl(Cl(e3.prototype), "getButtonHolder", this).call(this);
              return t4.classList.add("btn-group"), t4;
            } }, { key: "getFormButtonHolder", value: function(t4) {
              var r3 = xl(Cl(e3.prototype), "getFormButtonHolder", this).call(this);
              return r3.classList.remove("btn-group"), r3.classList.add("d-block"), t4 === "center" ? r3.classList.add("text-center") : t4 === "right" ? r3.classList.add("text-right") : r3.classList.add("text-left"), r3;
            } }, { key: "getFormButton", value: function(t4, r3, n3) {
              var i2 = xl(Cl(e3.prototype), "getFormButton", this).call(this, t4, r3, n3);
              return i2.classList.add("btn", "btn-primary", "mx-2", "my-1"), this.options.input_size !== "small" && i2.classList.remove("btn-sm"), this.options.input_size === "large" && i2.classList.add("btn-lg"), i2;
            } }, { key: "getButton", value: function(t4, r3, n3) {
              var i2 = xl(Cl(e3.prototype), "getButton", this).call(this, t4, r3, n3);
              return i2.classList.add("btn", "btn-sm", "btn-primary", "mr-2", "my-1"), i2;
            } }, { key: "getHeader", value: function(t4, e4) {
              var r3 = document.createElement("span");
              return typeof t4 == "string" ? r3.textContent = t4 : r3.appendChild(t4), r3.style.display = "inline-block", r3;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var r3 = xl(Cl(e3.prototype), "getFormInputDescription", this).call(this, t4);
              return r3.classList.add("je-desc", "hide-sm"), r3;
            } }, { key: "getFormInputLabel", value: function(t4, r3) {
              var n3 = xl(Cl(e3.prototype), "getFormInputLabel", this).call(this, t4, r3);
              return this.options.label_bold && n3.classList.add("je-label"), n3;
            } }, { key: "getCheckbox", value: function() {
              return this.getFormInputField("checkbox");
            } }, { key: "getCheckboxLabel", value: function(t4, r3) {
              var n3 = xl(Cl(e3.prototype), "getCheckboxLabel", this).call(this, t4, r3), i2 = document.createElement("i");
              return i2.classList.add("form-icon"), n3.classList.add("form-checkbox", "pr-0"), n3.insertBefore(i2, n3.firstChild), n3;
            } }, { key: "getFormCheckboxControl", value: function(t4, e4, r3) {
              return t4.insertBefore(e4, t4.firstChild), r3 && t4.classList.add("form-inline"), t4;
            } }, { key: "getMultiCheckboxHolder", value: function(t4, r3, n3, i2) {
              return xl(Cl(e3.prototype), "getMultiCheckboxHolder", this).call(this, t4, r3, n3, i2);
            } }, { key: "getFormRadio", value: function(t4) {
              var e4 = this.getFormInputField("radio");
              for (var r3 in t4)
                e4.setAttribute(r3, t4[r3]);
              return e4;
            } }, { key: "getFormRadioLabel", value: function(t4, r3) {
              var n3 = xl(Cl(e3.prototype), "getFormRadioLabel", this).call(this, t4, r3), i2 = document.createElement("i");
              return i2.classList.add("form-icon"), n3.classList.add("form-radio"), n3.insertBefore(i2, n3.firstChild), n3;
            } }, { key: "getFormRadioControl", value: function(t4, e4, r3) {
              return t4.insertBefore(e4, t4.firstChild), r3 && t4.classList.add("form-inline"), t4;
            } }, { key: "getFormInputField", value: function(t4) {
              var r3 = xl(Cl(e3.prototype), "getFormInputField", this).call(this, t4);
              return ["checkbox", "radio"].includes(t4) || r3.classList.add("form-input"), r3;
            } }, { key: "getRangeInput", value: function(t4, r3, n3, i2, o2) {
              var a2 = xl(Cl(e3.prototype), "getRangeInput", this).call(this, t4, r3, n3, i2, o2);
              return a2.classList.add("slider"), a2.classList.remove("form-input"), a2.setAttribute("oninput", 'this.setAttribute("value", this.value)'), a2;
            } }, { key: "getRangeControl", value: function(t4, r3) {
              var n3 = xl(Cl(e3.prototype), "getRangeControl", this).call(this, t4, r3);
              return n3.classList.add("text-center"), n3;
            } }, { key: "getSelectInput", value: function(t4, r3) {
              var n3 = xl(Cl(e3.prototype), "getSelectInput", this).call(this, t4);
              return n3.classList.add("form-select"), n3;
            } }, { key: "getTextareaInput", value: function() {
              var t4 = document.createElement("textarea");
              return t4.classList.add("form-input"), t4;
            } }, { key: "getFormControl", value: function(t4, e4, r3, n3, i2) {
              var o2 = document.createElement("div");
              return o2.classList.add("form-group"), !t4 || e4.type !== "checkbox" && e4.type !== "radio" ? (t4 && (t4.classList.add("form-label"), o2.appendChild(t4), n3 && t4.appendChild(n3)), o2.appendChild(e4)) : (o2.classList.add(e4.type), n3 && t4.appendChild(n3), t4.insertBefore(e4, t4.firstChild), o2.appendChild(t4)), this.options.input_size === "small" ? e4.classList.add("input-sm", "select-sm") : this.options.input_size === "large" && e4.classList.add("input-lg", "select-lg"), e4.type !== "checkbox" && o2.appendChild(e4), r3 && o2.appendChild(r3), e4.tagName.toLowerCase() !== "div" && e4 && t4 && i2 && (t4.setAttribute("for", i2), e4.setAttribute("id", i2)), e4.tagName.toLowerCase() !== "div" && e4 && r3 && (r3.setAttribute("id", i2 + "-description"), e4.setAttribute("aria-describedby", i2 + "-description")), o2;
            } }, { key: "getInputGroup", value: function(t4, e4) {
              if (t4) {
                var r3 = document.createElement("div");
                r3.classList.add("input-group"), r3.appendChild(t4);
                for (var n3 = 0; n3 < e4.length; n3++)
                  e4[n3].classList.add("input-group-btn"), e4[n3].classList.remove("btn-sm", "mr-2", "my-1"), r3.appendChild(e4[n3]);
                return r3;
              }
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("div");
              e4.classList.add("popover", "popover-left", "float-right");
              var r3 = document.createElement("button");
              r3.classList.add("btn", "btn-secondary", "btn-info", "btn-action", "s-circle"), r3.setAttribute("tabindex", "-1"), e4.appendChild(r3);
              var n3 = document.createTextNode("I");
              r3.appendChild(n3);
              var i2 = document.createElement("div");
              i2.classList.add("popover-container"), e4.appendChild(i2);
              var o2 = document.createElement("div");
              o2.classList.add("card"), i2.appendChild(o2);
              var a2 = document.createElement("div");
              return a2.classList.add("card-body"), a2.innerHTML = t4, o2.appendChild(a2), e4;
            } }, { key: "getTable", value: function() {
              var t4 = xl(Cl(e3.prototype), "getTable", this).call(this);
              return t4.classList.add("table", "table-scroll"), this.options.table_border && t4.classList.add("je-table-border"), this.options.table_zebrastyle && t4.classList.add("table-striped"), t4;
            } }, { key: "getProgressBar", value: function() {
              var t4 = xl(Cl(e3.prototype), "getProgressBar", this).call(this);
              return t4.classList.add("progress"), t4;
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.classList.add("columns"), r3.innerHTML = '<div class="column col-2"></div><div class="column col-10 content" id="'.concat(e4, '"></div>'), r3;
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.innerHTML = '<ul class="tab"></ul><div class="content" id="'.concat(e4, '"></div>'), r3;
            } }, { key: "getTab", value: function(t4, e4) {
              var r3 = document.createElement("a");
              return r3.classList.add("btn", "btn-secondary", "btn-block"), r3.setAttribute("href", "#".concat(e4)), r3.appendChild(t4), r3;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.id = e4, r3.classList.add("tab-item");
              var n3 = document.createElement("a");
              return n3.setAttribute("href", "#".concat(e4)), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.classList.add("active"), t4.rowPane !== void 0 ? t4.rowPane.style.display = "" : t4.container.style.display = "";
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.classList.remove("active"), t4.rowPane !== void 0 ? t4.rowPane.style.display = "none" : t4.container.style.display = "none";
            } }, { key: "afterInputReady", value: function(t4) {
              if (t4.localName === "select") {
                if (t4.classList.contains("selectized")) {
                  var e4 = t4.nextSibling;
                  e4 && (e4.classList.remove("form-select"), Array.from(e4.querySelectorAll(".form-select")).forEach(function(t5) {
                    t5.classList.remove("form-select");
                  }));
                } else if (t4.classList.contains("select2-hidden-accessible")) {
                  var r3 = t4.nextSibling;
                  r3 && r3.querySelector(".select2-selection--single") && r3.classList.add("form-select");
                }
              }
              t4.controlgroup || (t4.controlgroup = this.closest(t4, ".form-group"), this.closest(t4, ".compact") && (t4.controlgroup.style.marginBottom = 0));
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controlgroup && (t4.controlgroup.classList.add("has-error"), t4.errmsg || (t4.errmsg = document.createElement("p"), t4.errmsg.classList.add("form-input-hint"), t4.controlgroup.appendChild(t4.errmsg)), t4.errmsg.classList.remove("d-hide"), t4.errmsg.textContent = e4, t4.errmsg.setAttribute("role", "alert"));
            } }, { key: "removeInputError", value: function(t4) {
              t4.errmsg && (t4.errmsg.classList.add("d-hide"), t4.controlgroup.classList.remove("has-error"));
            } }]) && _l(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          function Ll(t3) {
            return Ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ll(t3);
          }
          function Tl(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Al(n2.key), n2);
            }
          }
          function Al(t3) {
            var e3 = function(t4, e4) {
              if (Ll(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ll(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ll(e3) == "symbol" ? e3 : e3 + "";
          }
          function Rl(t3, e3, r2) {
            return e3 = Nl(e3), function(t4, e4) {
              if (e4 && (Ll(e4) === "object" || typeof e4 == "function"))
                return e4;
              if (e4 !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (t5 === void 0)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(t3, Il() ? Reflect.construct(e3, r2 || [], Nl(t3).constructor) : e3.apply(t3, r2));
          }
          function Il() {
            try {
              var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              }));
            } catch (t4) {
            }
            return (Il = function() {
              return !!t3;
            })();
          }
          function Bl() {
            return Bl = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t3, e3, r2) {
              var n2 = function(t4, e4) {
                for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = Nl(t4)) !== null; )
                  ;
                return t4;
              }(t3, e3);
              if (n2) {
                var i2 = Object.getOwnPropertyDescriptor(n2, e3);
                return i2.get ? i2.get.call(arguments.length < 3 ? t3 : r2) : i2.value;
              }
            }, Bl.apply(this, arguments);
          }
          function Nl(t3) {
            return Nl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
              return t4.__proto__ || Object.getPrototypeOf(t4);
            }, Nl(t3);
          }
          function Dl(t3, e3) {
            return Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
              return t4.__proto__ = e4, t4;
            }, Dl(t3, e3);
          }
          Pl.rules = { "*": "--primary-color:%235755d9;--gray-color:%23bcc3ce;--light-color:%23fff", ".slider:focus": "box-shadow:none", "h4 > label + .btn-group": "margin-left:1rem", ".text-right > button": "margin-right:0%20!important", ".text-left > button": "margin-left:0%20!important", ".property-selector": "font-size:0.7rem;font-weight:normal;max-height:260px%20!important;width:395px%20!important", ".property-selector .form-checkbox": "margin:0", textarea: "width:100%25;min-height:2rem;resize:vertical", table: "border-collapse:collapse", ".table td": "padding:0.4rem%200.4rem", ".mr-5": "margin-right:1rem%20!important", "div[data-schematype]:not([data-schematype='object'])": "transition:0.5s", "div[data-schematype]:not([data-schematype='object']):hover": "background-color:%23eee", ".je-table-border td": "border:0.05rem%20solid%20%23dadee4%20!important", ".btn-info": "font-size:0.5rem;font-weight:bold;height:0.8rem;padding:0.15rem%200;line-height:0.8;margin:0.3rem%200%200.3rem%200.1rem", ".je-label + select": "min-width:5rem", ".je-label": "font-weight:600", ".btn-action.btn-info": "width:0.8rem", ".je-border": "border:0.05rem%20solid%20%23dadee4", ".je-panel": "padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)", ".je-panel-top": "padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)", ".required:after": "content:%22%20*%22;color:red;font:inherit", ".je-align-bottom": "margin-top:auto", ".je-desc": "font-size:smaller;margin:0.2rem%200", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem;border:3px%20solid%20white;box-shadow:0px%200px%208px%20rgba(0%2C%200%2C%200%2C%200.3);box-sizing:border-box", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red", ".columns .container.je-noindent": "padding-left:0;padding-right:0", ".selectize-control.multi .item": "background:var(--primary-color)%20!important", ".select2-container--default   .select2-selection--single   .select2-selection__arrow": "display:none", ".select2-container--default .select2-selection--single": "border:none", ".select2-container .select2-selection--single .select2-selection__rendered": "padding:0", ".select2-container .select2-search--inline .select2-search__field": "margin-top:0", ".select2-container--default.select2-container--focus   .select2-selection--multiple": "border:0.05rem%20solid%20var(--gray-color)", ".select2-container--default   .select2-selection--multiple   .select2-selection__choice": "margin:0.4rem%200.2rem%200.2rem%200;padding:2px%205px;background-color:var(--primary-color);color:var(--light-color)", ".select2-container--default .select2-search--inline .select2-search__field": "line-height:normal", ".choices": "margin-bottom:auto", ".choices__list--multiple .choices__item": "border:none;background-color:var(--primary-color);color:var(--light-color)", ".choices[data-type*='select-multiple'] .choices__button": "border-left:0.05rem%20solid%20%232826a6", ".choices__inner": "font-size:inherit;min-height:20px;padding:4px%207.5px%204px%203.75px", ".choices[data-type*='select-one'] .choices__inner": "padding-bottom:4px", ".choices__list--dropdown .choices__item": "font-size:inherit" };
          var Fl = { disable_theme_rules: false, label_bold: false, object_panel_default: true, object_indent: true, object_border: false, table_border: false, table_hdiv: false, table_zebrastyle: false, input_size: "small", enable_compact: false }, Vl = function(t3) {
            function e3(t4) {
              return function(t5, e4) {
                if (!(t5 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e3), Rl(this, e3, [t4, Fl]);
            }
            return function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && Dl(t4, e4);
            }(e3, t3), r2 = e3, (n2 = [{ key: "getOptInSwitch", value: function(t4) {
              var e4 = this.getHiddenLabel(t4 + " opt-in");
              e4.setAttribute("for", t4 + "-opt-in");
              var r3 = document.createElement("label");
              r3.classList.add("switch");
              var n3 = document.createElement("input");
              n3.setAttribute("type", "checkbox"), n3.setAttribute("id", t4 + "-opt-in"), n3.classList.add("json-editor-opt-in");
              var i2 = document.createElement("span");
              i2.classList.add("switch-slider", "round");
              var o2 = document.createElement("span");
              return o2.classList.add("sr-only"), o2.textContent = t4 + "-opt-in", r3.appendChild(o2), r3.appendChild(n3), r3.appendChild(i2), { label: e4, checkbox: n3, container: r3 };
            } }, { key: "getGridContainer", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("flex", "flex-col", "w-full"), this.options.object_indent || t4.classList.add("je-noindent"), t4;
            } }, { key: "getGridRow", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("flex", "flex-wrap", "w-full"), t4;
            } }, { key: "getGridColumn", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("flex", "flex-col"), t4;
            } }, { key: "setGridColumnSize", value: function(t4, e4, r3) {
              e4 > 0 && e4 < 12 ? t4.classList.add("w-".concat(e4, "/12"), "px-1") : t4.classList.add("w-full", "px-1"), r3 && (t4.style.marginLeft = "".concat(100 / 12 * r3, "%"));
            } }, { key: "getIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return this.options.object_panel_default ? t4.classList.add("w-full", "p-1") : t4.classList.add("relative", "flex", "flex-col", "rounded", "break-words", "border", "bg-white", "border-0", "border-blue-400", "p-1", "shadow-md"), this.options.object_border && t4.classList.add("je-border"), t4;
            } }, { key: "getTopIndentedPanel", value: function() {
              var t4 = document.createElement("div");
              return this.options.object_panel_default ? t4.classList.add("w-full", "m-2") : t4.classList.add("relative", "flex", "flex-col", "rounded", "break-words", "border", "bg-white", "border-0", "border-blue-400", "p-1", "shadow-md"), this.options.object_border && t4.classList.add("je-border"), t4;
            } }, { key: "getTitle", value: function() {
              return this.translateProperty(this.schema.title);
            } }, { key: "getSelectInput", value: function(t4, r3) {
              var n3 = Bl(Nl(e3.prototype), "getSelectInput", this).call(this, t4);
              return r3 ? n3.classList.add("form-multiselect", "block", "py-0", "h-auto", "w-full", "px-1", "text-sm", "text-black", "leading-normal", "bg-white", "border", "border-grey", "rounded") : n3.classList.add("form-select", "block", "py-0", "h-6", "w-full", "px-1", "text-sm", "text-black", "leading-normal", "bg-white", "border", "border-grey", "rounded"), this.options.enable_compact && n3.classList.add("compact"), n3;
            } }, { key: "afterInputReady", value: function(t4) {
              t4.controlgroup || (t4.controlgroup = this.closest(t4, ".form-group"), this.closest(t4, ".compact") && (t4.controlgroup.style.marginBottom = 0));
            } }, { key: "getTextareaInput", value: function() {
              var t4 = Bl(Nl(e3.prototype), "getTextareaInput", this).call(this);
              return t4.classList.add("block", "w-full", "px-1", "text-sm", "leading-normal", "bg-white", "text-black", "border", "border-grey", "rounded"), this.options.enable_compact && t4.classList.add("compact"), t4.style.height = 0, t4;
            } }, { key: "getRangeInput", value: function(t4, e4, r3) {
              var n3 = this.getFormInputField("range");
              return n3.classList.add("slider"), this.options.enable_compact && n3.classList.add("compact"), n3.setAttribute("oninput", 'this.setAttribute("value", this.value)'), n3.setAttribute("min", t4), n3.setAttribute("max", e4), n3.setAttribute("step", r3), n3;
            } }, { key: "getRangeControl", value: function(t4, r3) {
              var n3 = Bl(Nl(e3.prototype), "getRangeControl", this).call(this, t4, r3);
              return n3.classList.add("text-center", "text-black"), n3;
            } }, { key: "getCheckbox", value: function() {
              var t4 = this.getFormInputField("checkbox");
              return t4.classList.add("form-checkbox", "text-red-600"), t4;
            } }, { key: "getCheckboxLabel", value: function(t4, r3) {
              var n3 = Bl(Nl(e3.prototype), "getCheckboxLabel", this).call(this, t4, r3);
              return n3.classList.add("inline-flex", "items-center"), n3;
            } }, { key: "getFormCheckboxControl", value: function(t4, e4, r3) {
              return t4.insertBefore(e4, t4.firstChild), r3 && t4.classList.add("inline-flex flex-row"), t4;
            } }, { key: "getMultiCheckboxHolder", value: function(t4, r3, n3, i2) {
              var o2 = Bl(Nl(e3.prototype), "getMultiCheckboxHolder", this).call(this, t4, r3, n3, i2);
              return o2.classList.add("inline-flex", "flex-col"), o2;
            } }, { key: "getFormRadio", value: function(t4) {
              var e4 = this.getFormInputField("radio");
              for (var r3 in e4.classList.add("form-radio", "text-red-600"), t4)
                e4.setAttribute(r3, t4[r3]);
              return e4;
            } }, { key: "getFormRadioLabel", value: function(t4, r3) {
              var n3 = Bl(Nl(e3.prototype), "getFormRadioLabel", this).call(this, t4, r3);
              return n3.classList.add("inline-flex", "items-center", "mr-2"), n3;
            } }, { key: "getFormRadioControl", value: function(t4, e4, r3) {
              return t4.insertBefore(e4, t4.firstChild), r3 && t4.classList.add("form-radio"), t4;
            } }, { key: "getRadioHolder", value: function(t4, r3, n3, i2, o2) {
              var a2 = Bl(Nl(e3.prototype), "getRadioHolder", this).call(this, r3, n3, i2, o2);
              return t4.options.layout === "h" ? a2.classList.add("inline-flex", "flex-row") : a2.classList.add("inline-flex", "flex-col"), a2;
            } }, { key: "getFormInputLabel", value: function(t4, r3) {
              var n3 = Bl(Nl(e3.prototype), "getFormInputLabel", this).call(this, t4, r3);
              return this.options.label_bold ? n3.classList.add("font-bold") : n3.classList.add("required"), n3;
            } }, { key: "getFormInputField", value: function(t4) {
              var r3 = Bl(Nl(e3.prototype), "getFormInputField", this).call(this, t4);
              return ["checkbox", "radio"].includes(t4) || r3.classList.add("block", "w-full", "px-1", "text-black", "text-sm", "leading-normal", "bg-white", "border", "border-grey", "rounded"), this.options.enable_compact && r3.classList.add("compact"), r3;
            } }, { key: "getFormInputDescription", value: function(t4) {
              var e4 = document.createElement("p");
              return e4.classList.add("block", "mt-1", "text-xs"), window.DOMPurify ? e4.innerHTML = window.DOMPurify.sanitize(t4) : e4.textContent = this.cleanText(t4), e4;
            } }, { key: "getFormControl", value: function(t4, e4, r3, n3) {
              var i2 = document.createElement("div");
              return i2.classList.add("form-group", "mb-1", "w-full"), t4 && (t4.classList.add("text-xs"), e4.type === "checkbox" && (e4.classList.add("form-checkbox", "text-xs", "text-red-600", "mr-1"), t4.classList.add("items-center", "flex"), t4 = this.getFormCheckboxControl(t4, e4, false, n3)), e4.type === "radio" && (e4.classList.add("form-radio", "text-red-600", "mr-1"), t4.classList.add("items-center", "flex"), t4 = this.getFormRadioControl(t4, e4, false, n3)), i2.appendChild(t4), !["checkbox", "radio"].includes(e4.type) && n3 && i2.appendChild(n3)), ["checkbox", "radio"].includes(e4.type) || (this.options.input_size === "small" ? e4.classList.add("text-xs") : this.options.input_size === "normal" ? e4.classList.add("text-base") : this.options.input_size === "large" && e4.classList.add("text-xl"), i2.appendChild(e4)), r3 && i2.appendChild(r3), i2;
            } }, { key: "getHeaderButtonHolder", value: function() {
              var t4 = this.getButtonHolder();
              return t4.classList.add("text-sm"), t4;
            } }, { key: "getButtonHolder", value: function() {
              var t4 = document.createElement("div");
              return t4.classList.add("flex", "relative", "inline-flex", "align-middle"), t4;
            } }, { key: "getButton", value: function(t4, r3, n3) {
              var i2 = Bl(Nl(e3.prototype), "getButton", this).call(this, t4, r3, n3);
              return i2.classList.add("inline-block", "align-middle", "text-center", "text-sm", "bg-blue-700", "text-white", "py-1", "pr-1", "m-2", "shadow", "select-none", "whitespace-no-wrap", "rounded"), i2;
            } }, { key: "getInfoButton", value: function(t4) {
              var e4 = document.createElement("a");
              e4.classList.add("tooltips", "float-right"), e4.innerHTML = "\u24D8";
              var r3 = document.createElement("span");
              return r3.innerHTML = t4, e4.appendChild(r3), e4;
            } }, { key: "getTable", value: function() {
              var t4 = Bl(Nl(e3.prototype), "getTable", this).call(this);
              return this.options.table_border ? t4.classList.add("je-table-border") : t4.classList.add("table", "border", "p-0"), t4;
            } }, { key: "getTableRow", value: function() {
              var t4 = Bl(Nl(e3.prototype), "getTableRow", this).call(this);
              return this.options.table_border && t4.classList.add("je-table-border"), this.options.table_zebrastyle && t4.classList.add("je-table-zebra"), t4;
            } }, { key: "getTableHeaderCell", value: function(t4) {
              var r3 = Bl(Nl(e3.prototype), "getTableHeaderCell", this).call(this, t4);
              return this.options.table_border ? r3.classList.add("je-table-border") : this.options.table_hdiv ? r3.classList.add("je-table-hdiv") : r3.classList.add("text-xs", "border", "p-0", "m-0"), r3;
            } }, { key: "getTableCell", value: function() {
              var t4 = Bl(Nl(e3.prototype), "getTableCell", this).call(this);
              return this.options.table_border ? t4.classList.add("je-table-border") : this.options.table_hdiv ? t4.classList.add("je-table-hdiv") : t4.classList.add("border-0", "p-0", "m-0"), t4;
            } }, { key: "addInputError", value: function(t4, e4) {
              t4.controlgroup && (t4.controlgroup.classList.add("has-error"), t4.controlgroup.classList.add("text-red-600"), t4.errmsg ? t4.errmsg.style.display = "" : (t4.errmsg = document.createElement("p"), t4.errmsg.classList.add("block", "mt-1", "text-xs", "text-red"), t4.controlgroup.appendChild(t4.errmsg)), t4.errmsg.textContent = e4);
            } }, { key: "removeInputError", value: function(t4) {
              t4.errmsg && (t4.errmsg.style.display = "none", t4.controlgroup.classList.remove("text-red-600"), t4.controlgroup.classList.remove("has-error"));
            } }, { key: "getTabHolder", value: function(t4) {
              var e4 = document.createElement("div"), r3 = t4 === void 0 ? "" : t4;
              return e4.innerHTML = "<div class='w-2/12' id='".concat(r3, "'><ul class='list-reset pl-0 mb-0'></ul></div><div class='w-10/12' id='").concat(r3, "'></div>"), e4.classList.add("flex"), e4;
            } }, { key: "addTab", value: function(t4, e4) {
              t4.children[0].children[0].appendChild(e4);
            } }, { key: "getTopTabHolder", value: function(t4) {
              var e4 = t4 === void 0 ? "" : t4, r3 = document.createElement("div");
              return r3.innerHTML = "<ul class='nav-tabs flex list-reset pl-0 mb-0 border-b border-grey-light' id='".concat(e4, "'></ul><div class='p-6 block' id='").concat(e4, "'></div>"), r3;
            } }, { key: "getTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item", "flex-col", "text-center", "text-white", "bg-blue-500", "shadow-md", "border", "p-2", "mb-2", "mr-2", "hover:bg-blue-400", "rounded");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link", "text-center"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTopTab", value: function(t4, e4) {
              var r3 = document.createElement("li");
              r3.classList.add("nav-item", "flex", "border-l", "border-t", "border-r");
              var n3 = document.createElement("a");
              return n3.classList.add("nav-link", "-mb-px", "flex-row", "text-center", "bg-white", "p-2", "hover:bg-blue-400", "rounded-t"), n3.setAttribute("href", "#".concat(e4)), n3.setAttribute("data-toggle", "tab"), n3.appendChild(t4), r3.appendChild(n3), r3;
            } }, { key: "getTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "getTopTabContent", value: function() {
              var t4 = document.createElement("div");
              return t4.setAttribute("role", "tabpanel"), t4;
            } }, { key: "markTabActive", value: function(t4) {
              t4.tab.firstChild.classList.add("block"), t4.tab.firstChild.classList.contains("border-b") === true ? (t4.tab.firstChild.classList.add("border-b-0"), t4.tab.firstChild.classList.remove("border-b")) : t4.tab.firstChild.classList.add("border-b-0"), t4.container.classList.contains("hidden") === true ? (t4.container.classList.remove("hidden"), t4.container.classList.add("block")) : t4.container.classList.add("block");
            } }, { key: "markTabInactive", value: function(t4) {
              t4.tab.firstChild.classList.contains("border-b-0") === true ? (t4.tab.firstChild.classList.add("border-b"), t4.tab.firstChild.classList.remove("border-b-0")) : t4.tab.firstChild.classList.add("border-b"), t4.container.classList.contains("block") === true && (t4.container.classList.remove("block"), t4.container.classList.add("hidden"));
            } }, { key: "getProgressBar", value: function() {
              var t4 = document.createElement("div");
              t4.classList.add("progress");
              var e4 = document.createElement("div");
              return e4.classList.add("bg-blue", "leading-none", "py-1", "text-xs", "text-center", "text-white"), e4.setAttribute("role", "progressbar"), e4.setAttribute("aria-valuenow", 0), e4.setAttribute("aria-valuemin", 0), e4.setAttribute("aria-valuenax", 100), e4.innerHTML = "".concat(0, "%"), t4.appendChild(e4), t4;
            } }, { key: "updateProgressBar", value: function(t4, e4) {
              if (t4) {
                var r3 = t4.firstChild, n3 = "".concat(e4, "%");
                r3.setAttribute("aria-valuenow", e4), r3.style.width = n3, r3.innerHTML = n3;
              }
            } }, { key: "updateProgressBarUnknown", value: function(t4) {
              if (t4) {
                var e4 = t4.firstChild;
                t4.classList.add("progress", "bg-blue", "leading-none", "py-1", "text-xs", "text-center", "text-white", "block"), e4.removeAttribute("aria-valuenow"), e4.classList.add("w-full"), e4.innerHTML = "";
              }
            } }, { key: "getInputGroup", value: function(t4, e4) {
              if (t4) {
                var r3 = document.createElement("div");
                r3.classList.add("relative", "items-stretch", "w-full"), r3.appendChild(t4);
                var n3 = document.createElement("div");
                n3.classList.add("-mr-1"), r3.appendChild(n3);
                for (var i2 = 0; i2 < e4.length; i2++)
                  n3.appendChild(e4[i2]);
                return r3;
              }
            } }]) && Tl(r2.prototype, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
            var r2, n2;
          }(bs);
          Vl.rules = { ".slider": "-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;display:block;border:none;height:1.2rem;width:100%25", ".slider:focus": "box-shadow:0%200%200%200%20rgba(87%2C%2085%2C%20217%2C%200.2);outline:none", ".slider.tooltip:not([data-tooltip])::after": "content:attr(value)", ".slider::-webkit-slider-thumb": "-webkit-appearance:none;background:%23f17405;border-radius:100%25;height:0.6rem;margin-top:-0.25rem;transition:transform%200.2s;width:0.6rem", ".slider:active::-webkit-slider-thumb": "transform:scale(1.25);outline:none", ".slider::-webkit-slider-runnable-track": "background:%23b2b4b6;border-radius:0.1rem;height:0.1rem;width:100%25", "a.tooltips": "position:relative;display:inline", "a.tooltips span": "position:absolute;white-space:nowrap;width:auto;padding-left:1rem;padding-right:1rem;color:%23ffffff;background:rgba(56%2C%2056%2C%2056%2C%200.85);height:1.5rem;line-height:1.5rem;text-align:center;visibility:hidden;border-radius:3px", "a.tooltips span:after": "content:%22%22;position:absolute;top:50%25;left:100%25;margin-top:-5px;width:0;height:0;border-left:5px%20solid%20rgba(56%2C%2056%2C%2056%2C%200.85);border-top:5px%20solid%20transparent;border-bottom:5px%20solid%20transparent", "a:hover.tooltips span": "visibility:visible;opacity:0.9;font-size:0.8rem;right:100%25;top:50%25;margin-top:-12px;margin-right:10px;z-index:999", ".json-editor-btntype-properties + div": "font-size:0.8rem;font-weight:normal", textarea: "width:100%25;min-height:2rem;resize:vertical", table: "width:100%25;border-collapse:collapse", ".table td": "padding:0rem%200rem", "div[data-schematype]:not([data-schematype='object'])": "transition:0.5s", "div[data-schematype]:not([data-schematype='object']):hover": "background-color:%23e6f4fe", "div[data-schemaid='root']": "position:relative;width:inherit;display:inherit;overflow-x:hidden;z-index:10", "select[multiple]": "height:auto", "select[multiple].from-select": "height:auto", ".je-table-zebra:nth-child(even)": "background-color:%23f2f2f2", ".je-table-border": "border:0.5px%20solid%20black", ".je-table-hdiv": "border-bottom:1px%20solid%20black", ".je-border": "border:0.05rem%20solid%20%233182ce", ".je-panel": "width:inherit;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)", ".je-panel-top": "width:100%25;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)", ".required:after": "content:%22%20*%22;color:red;font:inherit;font-weight:bold", ".je-desc": "font-size:smaller;margin:0.2rem%200", ".container-xl.je-noindent": "padding-left:0;padding-right:0", ".json-editor-btntype-add": "color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%234299e1;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)", ".json-editor-btntype-deletelast": "color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23e53e3e;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)", ".json-editor-btntype-deleteall": "color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23000000;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)", ".json-editor-btn-save": "float:right;color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)", ".json-editor-btn-back": "color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)", ".json-editor-btntype-delete": "color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem", ".json-editor-btntype-move": "color:%23000000;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem", ".json-editor-btn-collapse": "padding:0em%200.8rem;font-size:1.3rem;color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-dropzone": "position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s", ".je-dropzone:before": "position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)", ".je-dropzone.valid-dropzone": "background:green", ".je-dropzone.invalid-dropzone": "background:red", ".switch": "position:relative;display:inline-block;width:28px;height:16px;margin-right:10px", ".switch input": "opacity:0;width:0;height:0", ".switch-slider": "position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:%23ccc;transition:.1s;border-radius:34px", ".switch-slider:before": "position:absolute;content:%22%22;height:12px;width:12px;left:1px;top:2px;background-color:white;transition:.1s;border-radius:50%25", "input:checked + .switch-slider": "background-color:%232196F3", "input:focus + .switch-slider": "box-shadow:0%200%201px%20%232196F3", "input:checked + .switch-slider:before": "transform:translateX(12px)", "input:disabled + .switch-slider": "opacity:0.5" };
          var Hl = { html: Es, bootstrap3: Ns, bootstrap4: $s, bootstrap5: rl, jqueryui: hl, barebones: gl, spectre: Pl, tailwind: Vl };
          const zl = { ".table-responsive .autocomplete-result-list": "position:relative%20!important", ".je-float-right-linkholder": "float:right;margin-left:10px", ".je-modal": "background-color:white;border:1px%20solid%20black;box-shadow:3px%203px%20black;position:absolute;z-index:10", ".je-infobutton-icon": "font-size:16px;font-weight:bold;padding:0.25rem;position:relative;display:inline-block", ".je-infobutton-tooltip": "font-size:12px;font-weight:normal;font-family:sans-serif;visibility:hidden;background-color:rgba(50%2C%2050%2C%2050%2C%200.75);margin:0%200.25rem;color:%23fafafa;padding:0.5rem%201rem;border-radius:0.25rem;width:20rem;position:absolute", ".je-not-loaded": "pointer-events:none", ".je-header": "display:inline-block", ".je-upload-preview img": "float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem", ".je-checkbox": "display:inline-block;width:auto", ".je-checkbox-control--compact": "display:inline-block;margin-right:1rem", ".je-radio": "display:inline-block;width:auto", ".je-radio-control--compact": "display:inline-block;margin-right:1rem", ".je-switcher": "background-color:transparent;display:inline-block;font-style:italic;font-weight:normal;height:auto;width:auto;margin-bottom:0;margin-left:5px;padding:0%200%200%203px", ".je-textarea": "width:100%25;height:300px;box-sizing:border-box", ".je-range-control": "text-align:center", ".je-indented-panel": "padding-left:10px;margin-left:10px;border-left:1px%20solid%20%23ccc", ".je-indented-panel--top": "padding-left:10px;margin-left:10px", ".je-tabholder": "float:left;width:130px", ".je-tabholder .content": "margin-left:120px", ".je-tabholder--top": "margin-left:10px", ".je-tabholder--clear": "clear:both", ".je-tab": "border:1px%20solid%20%23ccc;border-width:1px%200%201px%201px;text-align:center;line-height:30px;border-radius:5px;border-bottom-right-radius:0;border-top-right-radius:0;font-weight:bold;cursor:pointer", ".je-tab--top": "float:left;border:1px%20solid%20%23ccc;border-width:1px%201px%200px%201px;text-align:center;line-height:30px;border-radius:5px;padding-left:5px;padding-right:5px;border-bottom-right-radius:0;border-bottom-left-radius:0;font-weight:bold;cursor:pointer", ".je-block-link": "display:block", ".je-media": "width:100%25" };
          function Ml(t3) {
            return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
              return typeof t4;
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
            }, Ml(t3);
          }
          function ql(t3, e3) {
            (e3 == null || e3 > t3.length) && (e3 = t3.length);
            for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
              n2[r2] = t3[r2];
            return n2;
          }
          function Ul() {
            Ul = function() {
              return e3;
            };
            var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, i2 = Object.defineProperty || function(t4, e4, r3) {
              t4[e4] = r3.value;
            }, o2 = typeof Symbol == "function" ? Symbol : {}, a2 = o2.iterator || "@@iterator", s2 = o2.asyncIterator || "@@asyncIterator", l2 = o2.toStringTag || "@@toStringTag";
            function c2(t4, e4, r3) {
              return Object.defineProperty(t4, e4, { value: r3, enumerable: true, configurable: true, writable: true }), t4[e4];
            }
            try {
              c2({}, "");
            } catch (t4) {
              c2 = function(t5, e4, r3) {
                return t5[e4] = r3;
              };
            }
            function u2(t4, e4, r3, n3) {
              var o3 = e4 && e4.prototype instanceof v2 ? e4 : v2, a3 = Object.create(o3.prototype), s3 = new L2(n3 || []);
              return i2(a3, "_invoke", { value: C2(t4, r3, s3) }), a3;
            }
            function h2(t4, e4, r3) {
              try {
                return { type: "normal", arg: t4.call(e4, r3) };
              } catch (t5) {
                return { type: "throw", arg: t5 };
              }
            }
            e3.wrap = u2;
            var p2 = "suspendedStart", d2 = "suspendedYield", f2 = "executing", y2 = "completed", m2 = {};
            function v2() {
            }
            function b2() {
            }
            function g2() {
            }
            var w2 = {};
            c2(w2, a2, function() {
              return this;
            });
            var _2 = Object.getPrototypeOf, k2 = _2 && _2(_2(T2([])));
            k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
            var j2 = g2.prototype = v2.prototype = Object.create(w2);
            function O2(t4) {
              ["next", "throw", "return"].forEach(function(e4) {
                c2(t4, e4, function(t5) {
                  return this._invoke(e4, t5);
                });
              });
            }
            function x2(t4, e4) {
              function r3(i3, o4, a3, s3) {
                var l3 = h2(t4[i3], t4, o4);
                if (l3.type !== "throw") {
                  var c3 = l3.arg, u3 = c3.value;
                  return u3 && Ml(u3) == "object" && n2.call(u3, "__await") ? e4.resolve(u3.__await).then(function(t5) {
                    r3("next", t5, a3, s3);
                  }, function(t5) {
                    r3("throw", t5, a3, s3);
                  }) : e4.resolve(u3).then(function(t5) {
                    c3.value = t5, a3(c3);
                  }, function(t5) {
                    return r3("throw", t5, a3, s3);
                  });
                }
                s3(l3.arg);
              }
              var o3;
              i2(this, "_invoke", { value: function(t5, n3) {
                function i3() {
                  return new e4(function(e5, i4) {
                    r3(t5, n3, e5, i4);
                  });
                }
                return o3 = o3 ? o3.then(i3, i3) : i3();
              } });
            }
            function C2(e4, r3, n3) {
              var i3 = p2;
              return function(o3, a3) {
                if (i3 === f2)
                  throw Error("Generator is already running");
                if (i3 === y2) {
                  if (o3 === "throw")
                    throw a3;
                  return { value: t3, done: true };
                }
                for (n3.method = o3, n3.arg = a3; ; ) {
                  var s3 = n3.delegate;
                  if (s3) {
                    var l3 = E2(s3, n3);
                    if (l3) {
                      if (l3 === m2)
                        continue;
                      return l3;
                    }
                  }
                  if (n3.method === "next")
                    n3.sent = n3._sent = n3.arg;
                  else if (n3.method === "throw") {
                    if (i3 === p2)
                      throw i3 = y2, n3.arg;
                    n3.dispatchException(n3.arg);
                  } else
                    n3.method === "return" && n3.abrupt("return", n3.arg);
                  i3 = f2;
                  var c3 = h2(e4, r3, n3);
                  if (c3.type === "normal") {
                    if (i3 = n3.done ? y2 : d2, c3.arg === m2)
                      continue;
                    return { value: c3.arg, done: n3.done };
                  }
                  c3.type === "throw" && (i3 = y2, n3.method = "throw", n3.arg = c3.arg);
                }
              };
            }
            function E2(e4, r3) {
              var n3 = r3.method, i3 = e4.iterator[n3];
              if (i3 === t3)
                return r3.delegate = null, n3 === "throw" && e4.iterator.return && (r3.method = "return", r3.arg = t3, E2(e4, r3), r3.method === "throw") || n3 !== "return" && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), m2;
              var o3 = h2(i3, e4.iterator, r3.arg);
              if (o3.type === "throw")
                return r3.method = "throw", r3.arg = o3.arg, r3.delegate = null, m2;
              var a3 = o3.arg;
              return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, r3.method !== "return" && (r3.method = "next", r3.arg = t3), r3.delegate = null, m2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, m2);
            }
            function S2(t4) {
              var e4 = { tryLoc: t4[0] };
              1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
            }
            function P2(t4) {
              var e4 = t4.completion || {};
              e4.type = "normal", delete e4.arg, t4.completion = e4;
            }
            function L2(t4) {
              this.tryEntries = [{ tryLoc: "root" }], t4.forEach(S2, this), this.reset(true);
            }
            function T2(e4) {
              if (e4 || e4 === "") {
                var r3 = e4[a2];
                if (r3)
                  return r3.call(e4);
                if (typeof e4.next == "function")
                  return e4;
                if (!isNaN(e4.length)) {
                  var i3 = -1, o3 = function r4() {
                    for (; ++i3 < e4.length; )
                      if (n2.call(e4, i3))
                        return r4.value = e4[i3], r4.done = false, r4;
                    return r4.value = t3, r4.done = true, r4;
                  };
                  return o3.next = o3;
                }
              }
              throw new TypeError(Ml(e4) + " is not iterable");
            }
            return b2.prototype = g2, i2(j2, "constructor", { value: g2, configurable: true }), i2(g2, "constructor", { value: b2, configurable: true }), b2.displayName = c2(g2, l2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
              var e4 = typeof t4 == "function" && t4.constructor;
              return !!e4 && (e4 === b2 || (e4.displayName || e4.name) === "GeneratorFunction");
            }, e3.mark = function(t4) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t4, g2) : (t4.__proto__ = g2, c2(t4, l2, "GeneratorFunction")), t4.prototype = Object.create(j2), t4;
            }, e3.awrap = function(t4) {
              return { __await: t4 };
            }, O2(x2.prototype), c2(x2.prototype, s2, function() {
              return this;
            }), e3.AsyncIterator = x2, e3.async = function(t4, r3, n3, i3, o3) {
              o3 === void 0 && (o3 = Promise);
              var a3 = new x2(u2(t4, r3, n3, i3), o3);
              return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
                return t5.done ? t5.value : a3.next();
              });
            }, O2(j2), c2(j2, l2, "Generator"), c2(j2, a2, function() {
              return this;
            }), c2(j2, "toString", function() {
              return "[object Generator]";
            }), e3.keys = function(t4) {
              var e4 = Object(t4), r3 = [];
              for (var n3 in e4)
                r3.push(n3);
              return r3.reverse(), function t5() {
                for (; r3.length; ) {
                  var n4 = r3.pop();
                  if (n4 in e4)
                    return t5.value = n4, t5.done = false, t5;
                }
                return t5.done = true, t5;
              };
            }, e3.values = T2, L2.prototype = { constructor: L2, reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(P2), !e4)
                for (var r3 in this)
                  r3.charAt(0) === "t" && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            }, stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if (t4.type === "throw")
                throw t4.arg;
              return this.rval;
            }, dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function i3(n3, i4) {
                return s3.type = "throw", s3.arg = e4, r3.next = n3, i4 && (r3.method = "next", r3.arg = t3), !!i4;
              }
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var a3 = this.tryEntries[o3], s3 = a3.completion;
                if (a3.tryLoc === "root")
                  return i3("end");
                if (a3.tryLoc <= this.prev) {
                  var l3 = n2.call(a3, "catchLoc"), c3 = n2.call(a3, "finallyLoc");
                  if (l3 && c3) {
                    if (this.prev < a3.catchLoc)
                      return i3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return i3(a3.finallyLoc);
                  } else if (l3) {
                    if (this.prev < a3.catchLoc)
                      return i3(a3.catchLoc, true);
                  } else {
                    if (!c3)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return i3(a3.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var i3 = this.tryEntries[r3];
                if (i3.tryLoc <= this.prev && n2.call(i3, "finallyLoc") && this.prev < i3.finallyLoc) {
                  var o3 = i3;
                  break;
                }
              }
              o3 && (t4 === "break" || t4 === "continue") && o3.tryLoc <= e4 && e4 <= o3.finallyLoc && (o3 = null);
              var a3 = o3 ? o3.completion : {};
              return a3.type = t4, a3.arg = e4, o3 ? (this.method = "next", this.next = o3.finallyLoc, m2) : this.complete(a3);
            }, complete: function(t4, e4) {
              if (t4.type === "throw")
                throw t4.arg;
              return t4.type === "break" || t4.type === "continue" ? this.next = t4.arg : t4.type === "return" ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : t4.type === "normal" && e4 && (this.next = e4), m2;
            }, finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), P2(r3), m2;
              }
            }, catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if (n3.type === "throw") {
                    var i3 = n3.arg;
                    P2(r3);
                  }
                  return i3;
                }
              }
              throw Error("illegal catch attempt");
            }, delegateYield: function(e4, r3, n3) {
              return this.delegate = { iterator: T2(e4), resultName: r3, nextLoc: n3 }, this.method === "next" && (this.arg = t3), m2;
            } }, e3;
          }
          function Gl(t3, e3, r2, n2, i2, o2, a2) {
            try {
              var s2 = t3[o2](a2), l2 = s2.value;
            } catch (t4) {
              return void r2(t4);
            }
            s2.done ? e3(l2) : Promise.resolve(l2).then(n2, i2);
          }
          function $l(t3, e3) {
            for (var r2 = 0; r2 < e3.length; r2++) {
              var n2 = e3[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, Jl(n2.key), n2);
            }
          }
          function Jl(t3) {
            var e3 = function(t4, e4) {
              if (Ml(t4) != "object" || !t4)
                return t4;
              var r2 = t4[Symbol.toPrimitive];
              if (r2 !== void 0) {
                var n2 = r2.call(t4, "string");
                if (Ml(n2) != "object")
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t4);
            }(t3);
            return Ml(e3) == "symbol" ? e3 : e3 + "";
          }
          var Wl = function() {
            function t3(e4) {
              var r3 = this, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (function(t4, e5) {
                if (!(t4 instanceof e5))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t3), !(e4 instanceof Element))
                throw new Error("element should be an instance of Element");
              this.element = e4, this.options = l({}, t3.defaults.options, n3), this.ready = false, this.copyClipboard = null, this.schema = this.options.schema, this.template = this.options.template, this.translate = this.options.translate || t3.defaults.translate, this.translateProperty = this.options.translateProperty || t3.defaults.translateProperty, this.uuid = 0, this.__data = {};
              var i3 = this.options.theme || t3.defaults.theme, o2 = t3.defaults.themes[i3];
              if (!o2)
                throw new Error("Unknown theme ".concat(i3));
              this.element.setAttribute("data-theme", i3), this.element.classList.add("je-not-loaded"), this.element.classList.remove("je-ready"), this.theme = new o2(this);
              var a2 = l(zl, this.getEditorsRules()), s2 = function(t4, e5, n4) {
                return n4 ? r3.addNewStyleRulesToShadowRoot(t4, e5, n4) : r3.addNewStyleRules(t4, e5);
              };
              if (!this.theme.options.disable_theme_rules) {
                var c2 = u(this.element);
                s2("default", a2, c2), o2.rules !== void 0 && s2(i3, o2.rules, c2);
              }
              var h2 = t3.defaults.iconlibs[this.options.iconlib || t3.defaults.iconlib];
              h2 && (this.iconlib = new h2()), this.root_container = this.theme.getContainer(), this.element.appendChild(this.root_container), this.promise = this.load();
            }
            return e3 = t3, r2 = [{ key: "load", value: (n2 = Ul().mark(function e4() {
              var r3, n3, i3, o2, a2, s2, l2 = this;
              return Ul().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return r3 = document.location.origin + document.location.pathname.toString(), (n3 = new ia(this.options)).onSchemaLoaded = function(t4) {
                        l2.trigger("schemaLoaded", t4);
                      }, n3.onAllSchemasLoaded = function() {
                        l2.trigger("allSchemasLoaded");
                      }, this.expandSchema = function(t4) {
                        return n3.expandSchema(t4);
                      }, this.expandRefs = function(t4, e6) {
                        return n3.expandRefs(t4, e6);
                      }, i3 = document.location.toString(), e5.next = 9, n3.load(this.schema, r3, i3);
                    case 9:
                      o2 = e5.sent, a2 = this.options.custom_validators ? { custom_validators: this.options.custom_validators } : {}, this.validator = new yn(this, null, a2, t3.defaults), s2 = this.getEditorClass(o2), this.root = this.createEditor(s2, { jsoneditor: this, schema: o2, required: true, container: this.root_container }), this.root.preBuild(), this.root.build(), this.root.postBuild(), h(this.options, "startval") && this.root.setValue(this.options.startval), this.validation_results = this.validator.validate(this.root.getValue()), this.root.showValidationErrors(this.validation_results), this.ready = true, this.element.classList.remove("je-not-loaded"), this.element.classList.add("je-ready"), window.requestAnimationFrame(function() {
                        l2.ready && (l2.validation_results = l2.validator.validate(l2.root.getValue()), l2.root.showValidationErrors(l2.validation_results), l2.trigger("ready"), l2.trigger("change"));
                      });
                    case 24:
                    case "end":
                      return e5.stop();
                  }
              }, e4, this);
            }), i2 = function() {
              var t4 = this, e4 = arguments;
              return new Promise(function(r3, i3) {
                var o2 = n2.apply(t4, e4);
                function a2(t5) {
                  Gl(o2, r3, i3, a2, s2, "next", t5);
                }
                function s2(t5) {
                  Gl(o2, r3, i3, a2, s2, "throw", t5);
                }
                a2(void 0);
              });
            }, function() {
              return i2.apply(this, arguments);
            }) }, { key: "getValue", value: function() {
              if (!this.ready)
                throw new Error("JSON Editor not ready yet. Make sure the load method is complete");
              return this.root.getValue();
            } }, { key: "setValue", value: function(t4) {
              if (!this.ready)
                throw new Error("JSON Editor not ready yet. Make sure the load method is complete");
              return this.root.setValue(t4), this;
            } }, { key: "validate", value: function(t4) {
              if (!this.ready)
                throw new Error("JSON Editor not ready yet. Make sure the load method is complete");
              return arguments.length === 1 ? this.validator.validate(t4) : this.validation_results;
            } }, { key: "destroy", value: function() {
              this.destroyed || this.ready && (this.schema = null, this.options = null, this.root.destroy(), this.root = null, this.root_container = null, this.validator = null, this.validation_results = null, this.theme = null, this.iconlib = null, this.template = null, this.__data = null, this.ready = false, this.element.innerHTML = "", this.element.removeAttribute("data-theme"), this.destroyed = true);
            } }, { key: "on", value: function(t4, e4) {
              return this.callbacks = this.callbacks || {}, this.callbacks[t4] = this.callbacks[t4] || [], this.callbacks[t4].push(e4), this;
            } }, { key: "off", value: function(t4, e4) {
              if (t4 && e4) {
                this.callbacks = this.callbacks || {}, this.callbacks[t4] = this.callbacks[t4] || [];
                for (var r3 = [], n3 = 0; n3 < this.callbacks[t4].length; n3++)
                  this.callbacks[t4][n3] !== e4 && r3.push(this.callbacks[t4][n3]);
                this.callbacks[t4] = r3;
              } else
                t4 ? (this.callbacks = this.callbacks || {}, this.callbacks[t4] = []) : this.callbacks = {};
              return this;
            } }, { key: "trigger", value: function(t4, e4) {
              if (this.callbacks && this.callbacks[t4] && this.callbacks[t4].length)
                for (var r3 = 0; r3 < this.callbacks[t4].length; r3++)
                  this.callbacks[t4][r3].apply(this, [e4]);
              return this;
            } }, { key: "setOption", value: function(t4, e4) {
              if (t4 !== "show_errors")
                throw new Error("Option ".concat(t4, " must be set during instantiation and cannot be changed later"));
              return this.options.show_errors = e4, this.onChange(), this;
            } }, { key: "getEditorsRules", value: function() {
              return Object.values(t3.defaults.editors).reduce(function(t4, e4) {
                return e4.rules ? l(t4, e4.rules) : t4;
              }, {});
            } }, { key: "getEditorClass", value: function(e4) {
              var r3, n3 = this;
              if (e4 = this.expandSchema(e4), t3.defaults.resolvers.find(function(i3) {
                return (r3 = i3(e4, n3)) && t3.defaults.editors[r3];
              }), !r3)
                throw new Error("Unknown editor for schema ".concat(JSON.stringify(e4)));
              if (!t3.defaults.editors[r3])
                throw new Error("Unknown editor ".concat(r3));
              return t3.defaults.editors[r3];
            } }, { key: "createEditor", value: function(e4, r3) {
              var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
              return new e4(r3 = l({}, e4.options || {}, r3), t3.defaults, n3);
            } }, { key: "onChange", value: function(t4) {
              var e4 = this;
              if (this.ready && (t4 && this.trigger(t4.event, t4.data), !this.firing_change))
                return this.firing_change = true, window.requestAnimationFrame(function() {
                  e4.firing_change = false, e4.ready && (e4.validation_results = e4.validator.validate(e4.root.getValue()), e4.options.show_errors !== "never" ? e4.root.showValidationErrors(e4.validation_results) : e4.root.showValidationErrors([]), e4.trigger("change"));
                }), this;
            } }, { key: "compileTemplate", value: function(e4) {
              var r3, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t3.defaults.template;
              if (typeof n3 == "string") {
                if (!t3.defaults.templates[n3])
                  throw new Error("Unknown template engine ".concat(n3));
                if (!(r3 = t3.defaults.templates[n3]()))
                  throw new Error("Template engine ".concat(n3, " missing required library."));
              } else
                r3 = n3;
              if (!r3)
                throw new Error("No template engine set");
              if (!r3.compile)
                throw new Error("Invalid template engine set");
              return r3.compile(e4);
            } }, { key: "_data", value: function(t4, e4, r3) {
              if (arguments.length !== 3)
                return t4.hasAttribute("data-jsoneditor-".concat(e4)) ? this.__data[t4.getAttribute("data-jsoneditor-".concat(e4))] : null;
              var n3;
              t4.hasAttribute("data-jsoneditor-".concat(e4)) ? n3 = t4.getAttribute("data-jsoneditor-".concat(e4)) : (n3 = this.uuid++, t4.setAttribute("data-jsoneditor-".concat(e4), n3)), this.__data[n3] = r3;
            } }, { key: "registerEditor", value: function(t4) {
              return this.editors = this.editors || {}, this.editors[t4.path] = t4, this;
            } }, { key: "unregisterEditor", value: function(t4) {
              return this.editors = this.editors || {}, this.editors[t4.path] = null, this;
            } }, { key: "getEditor", value: function(t4) {
              if (this.editors)
                return this.editors[t4];
            } }, { key: "watch", value: function(t4, e4) {
              return this.watchlist = this.watchlist || {}, this.watchlist[t4] = this.watchlist[t4] || [], this.watchlist[t4].push(e4), this;
            } }, { key: "unwatch", value: function(t4, e4) {
              if (!this.watchlist || !this.watchlist[t4])
                return this;
              if (!e4)
                return this.watchlist[t4] = null, this;
              for (var r3 = [], n3 = 0; n3 < this.watchlist[t4].length; n3++)
                this.watchlist[t4][n3] !== e4 && r3.push(this.watchlist[t4][n3]);
              return this.watchlist[t4] = r3.length ? r3 : null, this;
            } }, { key: "notifyWatchers", value: function(t4) {
              if (!this.watchlist || !this.watchlist[t4])
                return this;
              for (var e4 = 0; e4 < this.watchlist[t4].length; e4++)
                this.watchlist[t4][e4]();
            } }, { key: "isEnabled", value: function() {
              return !this.root || this.root.isEnabled();
            } }, { key: "enable", value: function() {
              this.root.enable();
            } }, { key: "disable", value: function() {
              this.root.disable();
            } }, { key: "setCopyClipboardContents", value: function(t4) {
              this.copyClipboard = t4;
            } }, { key: "getCopyClipboardContents", value: function() {
              return this.copyClipboard;
            } }, { key: "addNewStyleRules", value: function(t4, e4) {
              var r3 = document.querySelector("#theme-".concat(t4));
              r3 || ((r3 = document.createElement("style")).setAttribute("id", "theme-".concat(t4)), r3.appendChild(document.createTextNode("")), document.head.appendChild(r3));
              for (var n3 = r3.sheet ? r3.sheet : r3.styleSheet, i3 = this.element.nodeName.toLowerCase(); n3.cssRules.length > 0; )
                n3.deleteRule(0);
              Object.keys(e4).forEach(function(r4) {
                var o2 = t4 === "default" ? r4 : "".concat(i3, '[data-theme="').concat(t4, '"] ').concat(r4);
                n3.insertRule ? n3.insertRule(o2 + " {" + decodeURIComponent(e4[r4]) + "}", 0) : n3.addRule && n3.addRule(o2, decodeURIComponent(e4[r4]), 0);
              });
            } }, { key: "addNewStyleRulesToShadowRoot", value: function(t4, e4, r3) {
              var n3 = this.element.nodeName.toLowerCase(), i3 = "";
              Object.keys(e4).forEach(function(r4) {
                var o3 = t4 === "default" ? r4 : "".concat(n3, '[data-theme="').concat(t4, '"] ').concat(r4);
                i3 += o3 + " {" + decodeURIComponent(e4[r4]) + "}\n";
              });
              var o2, a2 = new CSSStyleSheet();
              a2.replaceSync(i3), r3.adoptedStyleSheets = [].concat(function(t5) {
                if (Array.isArray(t5))
                  return ql(t5);
              }(o2 = r3.adoptedStyleSheets) || function(t5) {
                if (typeof Symbol != "undefined" && t5[Symbol.iterator] != null || t5["@@iterator"] != null)
                  return Array.from(t5);
              }(o2) || function(t5, e5) {
                if (t5) {
                  if (typeof t5 == "string")
                    return ql(t5, e5);
                  var r4 = Object.prototype.toString.call(t5).slice(8, -1);
                  return r4 === "Object" && t5.constructor && (r4 = t5.constructor.name), r4 === "Map" || r4 === "Set" ? Array.from(t5) : r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? ql(t5, e5) : void 0;
                }
              }(o2) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }(), [a2]);
            } }, { key: "showValidationErrors", value: function(t4) {
              var e4 = t4 != null ? t4 : this.validate();
              Object.values(this.editors).forEach(function(t5) {
                t5 && (t5.is_dirty = true, t5.showValidationErrors(e4));
              });
            } }], r2 && $l(e3.prototype, r2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
            var e3, r2, n2, i2;
          }();
          Wl.defaults = Zo, Wl.AbstractEditor = _, Wl.AbstractTheme = bs, Wl.AbstractIconLib = ha, Object.assign(Wl.defaults.themes, Hl), Object.assign(Wl.defaults.editors, Uo), Object.assign(Wl.defaults.templates, oa), Object.assign(Wl.defaults.iconlibs, ds);
        })(), n;
      })());
    }
  });

  // resources/js/components/json-schema-editor.js
  var import_jsoneditor = __toESM(require_jsoneditor());
  var json_schema_editor_default = (Alpine) => {
    Alpine.data("jsonSchemaEditorFormComponent", ({ customSchema, initialValue, pollInterval = 2e3 }) => ({
      state: initialValue,
      editor: null,
      intervalId: null,
      init() {
        this.render();
        this.$watch("state", (value) => {
          if (this.editor) {
            const editorValue = this.editor.getValue();
            if (JSON.stringify(editorValue) !== JSON.stringify(value)) {
              console.log(`[Watch] Syncing editor value with state...`);
              this.editor.setValue(value || {});
            }
          }
        });
        this.startPolling();
      },
      render() {
        this.editor = new import_jsoneditor.JSONEditor(this.$refs.jsonschemaeditor, {
          schema: customSchema,
          startval: this.state || {},
          show_errors: "always",
          compact: true,
          disable_edit_json: true,
          form_name_root: "Report"
        });
        this.editor.on("change", () => {
          this.syncState();
        });
      },
      syncState() {
        const newValue = this.editor.getValue();
        if (Object.keys(this.state).length === 0) {
          this.state = newValue;
        }
        if (JSON.stringify(newValue) !== JSON.stringify(this.state)) {
          this.state = newValue;
          if (typeof this.$wire !== "undefined") {
            this.$wire.snapshotUpdated(newValue);
          }
        }
      },
      startPolling() {
        this.intervalId = setInterval(() => {
          if (this.editor) {
            this.syncState();
          }
        }, pollInterval);
      },
      stopPolling() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      },
      destroy() {
        this.stopPolling();
        if (this.editor) {
          this.editor.destroy();
          this.editor = null;
        }
      }
    }));
  };

  // resources/js/index.js
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(json_schema_editor_default);
  });
})();
/*! For license information please see jsoneditor.js.LICENSE.txt */
