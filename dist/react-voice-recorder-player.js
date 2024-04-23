(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto;justify-content:end}@-webkit-keyframes rotating{0%{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating{0%{-ms-transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.voice-recorder_controlscontainer .voice-recorder_rotate{-webkit-animation:rotating 1.5s linear infinite;-moz-animation:rotating 1.5s linear infinite;-ms-animation:rotating 1.5s linear infinite;-o-animation:rotating 1.5s linear infinite;animation:rotating 1.5s linear infinite}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as B from "react";
import ze, { createContext as br, useState as he, useContext as wr, useRef as ue, useEffect as pe, useId as zr } from "react";
var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var We = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Xr() {
  if (cr)
    return Te;
  cr = 1;
  var r = ze, l = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(n, s, t) {
    var b, g = {}, S = null, P = null;
    t !== void 0 && (S = "" + t), s.key !== void 0 && (S = "" + s.key), s.ref !== void 0 && (P = s.ref);
    for (b in s)
      u.call(s, b) && !p.hasOwnProperty(b) && (g[b] = s[b]);
    if (n && n.defaultProps)
      for (b in s = n.defaultProps, s)
        g[b] === void 0 && (g[b] = s[b]);
    return { $$typeof: l, type: n, key: S, ref: P, props: g, _owner: m.current };
  }
  return Te.Fragment = d, Te.jsx = E, Te.jsxs = E, Te;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Zr() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ze, l = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), n = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), t = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), j = Symbol.iterator, R = "@@iterator";
    function x(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = j && e[j] || e[R];
      return typeof a == "function" ? a : null;
    }
    var h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var a = arguments.length, v = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
          v[k - 1] = arguments[k];
        f("error", e, v);
      }
    }
    function f(e, a, v) {
      {
        var k = h.ReactDebugCurrentFrame, z = k.getStackAddendum();
        z !== "" && (a += "%s", v = v.concat([z]));
        var re = v.map(function(Y) {
          return String(Y);
        });
        re.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, re);
      }
    }
    var T = !1, o = !1, $ = !1, G = !1, I = !1, w;
    w = Symbol.for("react.module.reference");
    function _(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === p || I || e === m || e === t || e === b || G || e === P || T || o || $ || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === g || e.$$typeof === E || e.$$typeof === n || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === w || e.getModuleId !== void 0));
    }
    function H(e, a, v) {
      var k = e.displayName;
      if (k)
        return k;
      var z = a.displayName || a.name || "";
      return z !== "" ? v + "(" + z + ")" : v;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case p:
          return "Profiler";
        case m:
          return "StrictMode";
        case t:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            var a = e;
            return ee(a) + ".Consumer";
          case E:
            var v = e;
            return ee(v._context) + ".Provider";
          case s:
            return H(e, e.render, "ForwardRef");
          case g:
            var k = e.displayName || null;
            return k !== null ? k : N(e.type) || "Memo";
          case S: {
            var z = e, re = z._payload, Y = z._init;
            try {
              return N(Y(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ne = 0, Q, te, le, ae, i, C, O;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function A() {
      {
        if (ne === 0) {
          Q = console.log, te = console.info, le = console.warn, ae = console.error, i = console.group, C = console.groupCollapsed, O = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ne++;
      }
    }
    function U() {
      {
        if (ne--, ne === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: Q
            }),
            info: K({}, e, {
              value: te
            }),
            warn: K({}, e, {
              value: le
            }),
            error: K({}, e, {
              value: ae
            }),
            group: K({}, e, {
              value: i
            }),
            groupCollapsed: K({}, e, {
              value: C
            }),
            groupEnd: K({}, e, {
              value: O
            })
          });
        }
        ne < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = h.ReactCurrentDispatcher, M;
    function L(e, a, v) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (z) {
            var k = z.stack.trim().match(/\n( *(at )?)/);
            M = k && k[1] || "";
          }
        return `
` + M + e;
      }
    }
    var q = !1, V;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      V = new se();
    }
    function y(e, a) {
      if (!e || q)
        return "";
      {
        var v = V.get(e);
        if (v !== void 0)
          return v;
      }
      var k;
      q = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = F.current, F.current = null, A();
      try {
        if (a) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (ve) {
              k = ve;
            }
            Reflect.construct(e, [], Y);
          } else {
            try {
              Y.call();
            } catch (ve) {
              k = ve;
            }
            e.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            k = ve;
          }
          e();
        }
      } catch (ve) {
        if (ve && k && typeof ve.stack == "string") {
          for (var W = ve.stack.split(`
`), ce = k.stack.split(`
`), oe = W.length - 1, ie = ce.length - 1; oe >= 1 && ie >= 0 && W[oe] !== ce[ie]; )
            ie--;
          for (; oe >= 1 && ie >= 0; oe--, ie--)
            if (W[oe] !== ce[ie]) {
              if (oe !== 1 || ie !== 1)
                do
                  if (oe--, ie--, ie < 0 || W[oe] !== ce[ie]) {
                    var de = `
` + W[oe].replace(" at new ", " at ");
                    return e.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, de), de;
                  }
                while (oe >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        q = !1, F.current = re, U(), Error.prepareStackTrace = z;
      }
      var Ce = e ? e.displayName || e.name : "", sr = Ce ? L(Ce) : "";
      return typeof e == "function" && V.set(e, sr), sr;
    }
    function fe(e, a, v) {
      return y(e, !1);
    }
    function be(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function me(e, a, v) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return y(e, be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case t:
          return L("Suspense");
        case b:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return fe(e.render);
          case g:
            return me(e.type, a, v);
          case S: {
            var k = e, z = k._payload, re = k._init;
            try {
              return me(re(z), a, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Je = {}, Xe = h.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var a = e._owner, v = me(e.type, e._source, a ? a.type : null);
        Xe.setExtraStackFrame(v);
      } else
        Xe.setExtraStackFrame(null);
    }
    function xr(e, a, v, k, z) {
      {
        var re = Function.call.bind(Pe);
        for (var Y in e)
          if (re(e, Y)) {
            var W = void 0;
            try {
              if (typeof e[Y] != "function") {
                var ce = Error((k || "React class") + ": " + v + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              W = e[Y](a, Y, k, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              W = oe;
            }
            W && !(W instanceof Error) && (Oe(z), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", v, Y, typeof W), Oe(null)), W instanceof Error && !(W.message in Je) && (Je[W.message] = !0, Oe(z), c("Failed %s type: %s", v, W.message), Oe(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Ie(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, v = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v;
      }
    }
    function kr(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function Ke(e) {
      if (kr(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Ze(e);
    }
    var Se = h.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, er, Me;
    Me = {};
    function Fr(e) {
      if (Pe.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (Pe.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Mr(e, a) {
      if (typeof e.ref == "string" && Se.current && a && Se.current.stateNode !== a) {
        var v = N(Se.current.type);
        Me[v] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Se.current.type), e.ref), Me[v] = !0);
      }
    }
    function jr(e, a) {
      {
        var v = function() {
          Qe || (Qe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        v.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Dr(e, a) {
      {
        var v = function() {
          er || (er = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        v.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Br = function(e, a, v, k, z, re, Y) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: v,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function $r(e, a, v, k, z) {
      {
        var re, Y = {}, W = null, ce = null;
        v !== void 0 && (Ke(v), W = "" + v), Ir(a) && (Ke(a.key), W = "" + a.key), Fr(a) && (ce = a.ref, Mr(a, z));
        for (re in a)
          Pe.call(a, re) && !Ar.hasOwnProperty(re) && (Y[re] = a[re]);
        if (e && e.defaultProps) {
          var oe = e.defaultProps;
          for (re in oe)
            Y[re] === void 0 && (Y[re] = oe[re]);
        }
        if (W || ce) {
          var ie = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          W && jr(Y, ie), ce && Dr(Y, ie);
        }
        return Br(e, W, ce, z, k, Se.current, Y);
      }
    }
    var je = h.ReactCurrentOwner, rr = h.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var a = e._owner, v = me(e.type, e._source, a ? a.type : null);
        rr.setExtraStackFrame(v);
      } else
        rr.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function tr() {
      {
        if (je.current) {
          var e = N(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Lr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), v = e.lineNumber;
          return `

Check your code at ` + a + ":" + v + ".";
        }
        return "";
      }
    }
    var nr = {};
    function Nr(e) {
      {
        var a = tr();
        if (!a) {
          var v = typeof e == "string" ? e : e.displayName || e.name;
          v && (a = `

Check the top-level render call using <` + v + ">.");
        }
        return a;
      }
    }
    function or(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var v = Nr(a);
        if (nr[v])
          return;
        nr[v] = !0;
        var k = "";
        e && e._owner && e._owner !== je.current && (k = " It was passed a child from " + N(e._owner.type) + "."), we(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, k), we(null);
      }
    }
    function ar(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var v = 0; v < e.length; v++) {
            var k = e[v];
            Be(k) && or(k, a);
          }
        else if (Be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var z = x(e);
          if (typeof z == "function" && z !== e.entries)
            for (var re = z.call(e), Y; !(Y = re.next()).done; )
              Be(Y.value) && or(Y.value, a);
        }
      }
    }
    function Ur(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var v;
        if (typeof a == "function")
          v = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          v = a.propTypes;
        else
          return;
        if (v) {
          var k = N(a);
          xr(v, e.props, "prop", k, e);
        } else if (a.PropTypes !== void 0 && !De) {
          De = !0;
          var z = N(a);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(e) {
      {
        for (var a = Object.keys(e.props), v = 0; v < a.length; v++) {
          var k = a[v];
          if (k !== "children" && k !== "key") {
            we(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ir(e, a, v, k, z, re) {
      {
        var Y = _(e);
        if (!Y) {
          var W = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Lr(z);
          ce ? W += ce : W += tr();
          var oe;
          e === null ? oe = "null" : Ie(e) ? oe = "array" : e !== void 0 && e.$$typeof === l ? (oe = "<" + (N(e.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, W);
        }
        var ie = $r(e, a, v, z, re);
        if (ie == null)
          return ie;
        if (Y) {
          var de = a.children;
          if (de !== void 0)
            if (k)
              if (Ie(de)) {
                for (var Ce = 0; Ce < de.length; Ce++)
                  ar(de[Ce], e);
                Object.freeze && Object.freeze(de);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(de, e);
        }
        return e === u ? Vr(ie) : Ur(ie), ie;
      }
    }
    function qr(e, a, v) {
      return ir(e, a, v, !0);
    }
    function Wr(e, a, v) {
      return ir(e, a, v, !1);
    }
    var Yr = Wr, Gr = qr;
    _e.Fragment = u, _e.jsx = Yr, _e.jsxs = Gr;
  }()), _e;
}
process.env.NODE_ENV === "production" ? We.exports = Xr() : We.exports = Zr();
var Cr = We.exports;
const Z = Cr.jsx, ye = Cr.jsxs;
var Ye = { exports: {} }, ke = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Kr() {
  if (lr)
    return J;
  lr = 1;
  var r = typeof Symbol == "function" && Symbol.for, l = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, m = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, n = r ? Symbol.for("react.context") : 60110, s = r ? Symbol.for("react.async_mode") : 60111, t = r ? Symbol.for("react.concurrent_mode") : 60111, b = r ? Symbol.for("react.forward_ref") : 60112, g = r ? Symbol.for("react.suspense") : 60113, S = r ? Symbol.for("react.suspense_list") : 60120, P = r ? Symbol.for("react.memo") : 60115, j = r ? Symbol.for("react.lazy") : 60116, R = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, h = r ? Symbol.for("react.responder") : 60118, c = r ? Symbol.for("react.scope") : 60119;
  function f(o) {
    if (typeof o == "object" && o !== null) {
      var $ = o.$$typeof;
      switch ($) {
        case l:
          switch (o = o.type, o) {
            case s:
            case t:
            case u:
            case p:
            case m:
            case g:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case n:
                case b:
                case j:
                case P:
                case E:
                  return o;
                default:
                  return $;
              }
          }
        case d:
          return $;
      }
    }
  }
  function T(o) {
    return f(o) === t;
  }
  return J.AsyncMode = s, J.ConcurrentMode = t, J.ContextConsumer = n, J.ContextProvider = E, J.Element = l, J.ForwardRef = b, J.Fragment = u, J.Lazy = j, J.Memo = P, J.Portal = d, J.Profiler = p, J.StrictMode = m, J.Suspense = g, J.isAsyncMode = function(o) {
    return T(o) || f(o) === s;
  }, J.isConcurrentMode = T, J.isContextConsumer = function(o) {
    return f(o) === n;
  }, J.isContextProvider = function(o) {
    return f(o) === E;
  }, J.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === l;
  }, J.isForwardRef = function(o) {
    return f(o) === b;
  }, J.isFragment = function(o) {
    return f(o) === u;
  }, J.isLazy = function(o) {
    return f(o) === j;
  }, J.isMemo = function(o) {
    return f(o) === P;
  }, J.isPortal = function(o) {
    return f(o) === d;
  }, J.isProfiler = function(o) {
    return f(o) === p;
  }, J.isStrictMode = function(o) {
    return f(o) === m;
  }, J.isSuspense = function(o) {
    return f(o) === g;
  }, J.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === u || o === t || o === p || o === m || o === g || o === S || typeof o == "object" && o !== null && (o.$$typeof === j || o.$$typeof === P || o.$$typeof === E || o.$$typeof === n || o.$$typeof === b || o.$$typeof === x || o.$$typeof === h || o.$$typeof === c || o.$$typeof === R);
  }, J.typeOf = f, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Qr() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, l = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, m = r ? Symbol.for("react.strict_mode") : 60108, p = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, n = r ? Symbol.for("react.context") : 60110, s = r ? Symbol.for("react.async_mode") : 60111, t = r ? Symbol.for("react.concurrent_mode") : 60111, b = r ? Symbol.for("react.forward_ref") : 60112, g = r ? Symbol.for("react.suspense") : 60113, S = r ? Symbol.for("react.suspense_list") : 60120, P = r ? Symbol.for("react.memo") : 60115, j = r ? Symbol.for("react.lazy") : 60116, R = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, h = r ? Symbol.for("react.responder") : 60118, c = r ? Symbol.for("react.scope") : 60119;
    function f(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === u || y === t || y === p || y === m || y === g || y === S || typeof y == "object" && y !== null && (y.$$typeof === j || y.$$typeof === P || y.$$typeof === E || y.$$typeof === n || y.$$typeof === b || y.$$typeof === x || y.$$typeof === h || y.$$typeof === c || y.$$typeof === R);
    }
    function T(y) {
      if (typeof y == "object" && y !== null) {
        var fe = y.$$typeof;
        switch (fe) {
          case l:
            var be = y.type;
            switch (be) {
              case s:
              case t:
              case u:
              case p:
              case m:
              case g:
                return be;
              default:
                var me = be && be.$$typeof;
                switch (me) {
                  case n:
                  case b:
                  case j:
                  case P:
                  case E:
                    return me;
                  default:
                    return fe;
                }
            }
          case d:
            return fe;
        }
      }
    }
    var o = s, $ = t, G = n, I = E, w = l, _ = b, H = u, ee = j, N = P, K = d, ne = p, Q = m, te = g, le = !1;
    function ae(y) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(y) || T(y) === s;
    }
    function i(y) {
      return T(y) === t;
    }
    function C(y) {
      return T(y) === n;
    }
    function O(y) {
      return T(y) === E;
    }
    function D(y) {
      return typeof y == "object" && y !== null && y.$$typeof === l;
    }
    function A(y) {
      return T(y) === b;
    }
    function U(y) {
      return T(y) === u;
    }
    function F(y) {
      return T(y) === j;
    }
    function M(y) {
      return T(y) === P;
    }
    function L(y) {
      return T(y) === d;
    }
    function q(y) {
      return T(y) === p;
    }
    function V(y) {
      return T(y) === m;
    }
    function se(y) {
      return T(y) === g;
    }
    X.AsyncMode = o, X.ConcurrentMode = $, X.ContextConsumer = G, X.ContextProvider = I, X.Element = w, X.ForwardRef = _, X.Fragment = H, X.Lazy = ee, X.Memo = N, X.Portal = K, X.Profiler = ne, X.StrictMode = Q, X.Suspense = te, X.isAsyncMode = ae, X.isConcurrentMode = i, X.isContextConsumer = C, X.isContextProvider = O, X.isElement = D, X.isForwardRef = A, X.isFragment = U, X.isLazy = F, X.isMemo = M, X.isPortal = L, X.isProfiler = q, X.isStrictMode = V, X.isSuspense = se, X.isValidElementType = f, X.typeOf = T;
  }()), X;
}
var dr;
function Er() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? ke.exports = Kr() : ke.exports = Qr()), ke.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, pr;
function et() {
  if (pr)
    return $e;
  pr = 1;
  var r = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function u(p) {
    if (p == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(p);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var p = new String("abc");
      if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
        return !1;
      for (var E = {}, n = 0; n < 10; n++)
        E["_" + String.fromCharCode(n)] = n;
      var s = Object.getOwnPropertyNames(E).map(function(b) {
        return E[b];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var t = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        t[b] = b;
      }), Object.keys(Object.assign({}, t)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = m() ? Object.assign : function(p, E) {
    for (var n, s = u(p), t, b = 1; b < arguments.length; b++) {
      n = Object(arguments[b]);
      for (var g in n)
        l.call(n, g) && (s[g] = n[g]);
      if (r) {
        t = r(n);
        for (var S = 0; S < t.length; S++)
          d.call(n, t[S]) && (s[t[S]] = n[t[S]]);
      }
    }
    return s;
  }, $e;
}
var Le, vr;
function He() {
  if (vr)
    return Le;
  vr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Le = r, Le;
}
var Ne, gr;
function Sr() {
  return gr || (gr = 1, Ne = Function.call.bind(Object.prototype.hasOwnProperty)), Ne;
}
var Ue, hr;
function rt() {
  if (hr)
    return Ue;
  hr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var l = He(), d = {}, u = Sr();
    r = function(p) {
      var E = "Warning: " + p;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function m(p, E, n, s, t) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in p)
        if (u(p, b)) {
          var g;
          try {
            if (typeof p[b] != "function") {
              var S = Error(
                (s || "React class") + ": " + n + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            g = p[b](E, b, s, n, null, l);
          } catch (j) {
            g = j;
          }
          if (g && !(g instanceof Error) && r(
            (s || "React class") + ": type specification of " + n + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in d)) {
            d[g.message] = !0;
            var P = t ? t() : "";
            r(
              "Failed " + n + " type: " + g.message + (P ?? "")
            );
          }
        }
    }
  }
  return m.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, Ue = m, Ue;
}
var Ve, yr;
function tt() {
  if (yr)
    return Ve;
  yr = 1;
  var r = Er(), l = et(), d = He(), u = Sr(), m = rt(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(n) {
    var s = "Warning: " + n;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return Ve = function(n, s) {
    var t = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function g(i) {
      var C = i && (t && i[t] || i[b]);
      if (typeof C == "function")
        return C;
    }
    var S = "<<anonymous>>", P = {
      array: h("array"),
      bigint: h("bigint"),
      bool: h("boolean"),
      func: h("function"),
      number: h("number"),
      object: h("object"),
      string: h("string"),
      symbol: h("symbol"),
      any: c(),
      arrayOf: f,
      element: T(),
      elementType: o(),
      instanceOf: $,
      node: _(),
      objectOf: I,
      oneOf: G,
      oneOfType: w,
      shape: ee,
      exact: N
    };
    function j(i, C) {
      return i === C ? i !== 0 || 1 / i === 1 / C : i !== i && C !== C;
    }
    function R(i, C) {
      this.message = i, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function x(i) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, O = 0;
      function D(U, F, M, L, q, V, se) {
        if (L = L || S, V = V || M, se !== d) {
          if (s) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = L + ":" + M;
            !C[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[fe] = !0, O++);
          }
        }
        return F[M] == null ? U ? F[M] === null ? new R("The " + q + " `" + V + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new R("The " + q + " `" + V + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : i(F, M, L, q, V);
      }
      var A = D.bind(null, !1);
      return A.isRequired = D.bind(null, !0), A;
    }
    function h(i) {
      function C(O, D, A, U, F, M) {
        var L = O[D], q = Q(L);
        if (q !== i) {
          var V = te(L);
          return new R(
            "Invalid " + U + " `" + F + "` of type " + ("`" + V + "` supplied to `" + A + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return x(C);
    }
    function c() {
      return x(E);
    }
    function f(i) {
      function C(O, D, A, U, F) {
        if (typeof i != "function")
          return new R("Property `" + F + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var M = O[D];
        if (!Array.isArray(M)) {
          var L = Q(M);
          return new R("Invalid " + U + " `" + F + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected an array."));
        }
        for (var q = 0; q < M.length; q++) {
          var V = i(M, q, A, U, F + "[" + q + "]", d);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return x(C);
    }
    function T() {
      function i(C, O, D, A, U) {
        var F = C[O];
        if (!n(F)) {
          var M = Q(F);
          return new R("Invalid " + A + " `" + U + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(i);
    }
    function o() {
      function i(C, O, D, A, U) {
        var F = C[O];
        if (!r.isValidElementType(F)) {
          var M = Q(F);
          return new R("Invalid " + A + " `" + U + "` of type " + ("`" + M + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(i);
    }
    function $(i) {
      function C(O, D, A, U, F) {
        if (!(O[D] instanceof i)) {
          var M = i.name || S, L = ae(O[D]);
          return new R("Invalid " + U + " `" + F + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return x(C);
    }
    function G(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), E;
      function C(O, D, A, U, F) {
        for (var M = O[D], L = 0; L < i.length; L++)
          if (j(M, i[L]))
            return null;
        var q = JSON.stringify(i, function(se, y) {
          var fe = te(y);
          return fe === "symbol" ? String(y) : y;
        });
        return new R("Invalid " + U + " `" + F + "` of value `" + String(M) + "` " + ("supplied to `" + A + "`, expected one of " + q + "."));
      }
      return x(C);
    }
    function I(i) {
      function C(O, D, A, U, F) {
        if (typeof i != "function")
          return new R("Property `" + F + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var M = O[D], L = Q(M);
        if (L !== "object")
          return new R("Invalid " + U + " `" + F + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected an object."));
        for (var q in M)
          if (u(M, q)) {
            var V = i(M, q, A, U, F + "." + q, d);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return x(C);
    }
    function w(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var C = 0; C < i.length; C++) {
        var O = i[C];
        if (typeof O != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(O) + " at index " + C + "."
          ), E;
      }
      function D(A, U, F, M, L) {
        for (var q = [], V = 0; V < i.length; V++) {
          var se = i[V], y = se(A, U, F, M, L, d);
          if (y == null)
            return null;
          y.data && u(y.data, "expectedType") && q.push(y.data.expectedType);
        }
        var fe = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new R("Invalid " + M + " `" + L + "` supplied to " + ("`" + F + "`" + fe + "."));
      }
      return x(D);
    }
    function _() {
      function i(C, O, D, A, U) {
        return K(C[O]) ? null : new R("Invalid " + A + " `" + U + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return x(i);
    }
    function H(i, C, O, D, A) {
      return new R(
        (i || "React class") + ": " + C + " type `" + O + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function ee(i) {
      function C(O, D, A, U, F) {
        var M = O[D], L = Q(M);
        if (L !== "object")
          return new R("Invalid " + U + " `" + F + "` of type `" + L + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var q in i) {
          var V = i[q];
          if (typeof V != "function")
            return H(A, U, F, q, te(V));
          var se = V(M, q, A, U, F + "." + q, d);
          if (se)
            return se;
        }
        return null;
      }
      return x(C);
    }
    function N(i) {
      function C(O, D, A, U, F) {
        var M = O[D], L = Q(M);
        if (L !== "object")
          return new R("Invalid " + U + " `" + F + "` of type `" + L + "` " + ("supplied to `" + A + "`, expected `object`."));
        var q = l({}, O[D], i);
        for (var V in q) {
          var se = i[V];
          if (u(i, V) && typeof se != "function")
            return H(A, U, F, V, te(se));
          if (!se)
            return new R(
              "Invalid " + U + " `" + F + "` key `" + V + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(O[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var y = se(M, V, A, U, F + "." + V, d);
          if (y)
            return y;
        }
        return null;
      }
      return x(C);
    }
    function K(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(K);
          if (i === null || n(i))
            return !0;
          var C = g(i);
          if (C) {
            var O = C.call(i), D;
            if (C !== i.entries) {
              for (; !(D = O.next()).done; )
                if (!K(D.value))
                  return !1;
            } else
              for (; !(D = O.next()).done; ) {
                var A = D.value;
                if (A && !K(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(i, C) {
      return i === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function Q(i) {
      var C = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : ne(C, i) ? "symbol" : C;
    }
    function te(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var C = Q(i);
      if (C === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function le(i) {
      var C = te(i);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function ae(i) {
      return !i.constructor || !i.constructor.name ? S : i.constructor.name;
    }
    return P.checkPropTypes = m, P.resetWarningCache = m.resetWarningCache, P.PropTypes = P, P;
  }, Ve;
}
var qe, mr;
function nt() {
  if (mr)
    return qe;
  mr = 1;
  var r = He();
  function l() {
  }
  function d() {
  }
  return d.resetWarningCache = l, qe = function() {
    function u(E, n, s, t, b, g) {
      if (g !== r) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    u.isRequired = u;
    function m() {
      return u;
    }
    var p = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: m,
      element: u,
      elementType: u,
      instanceOf: m,
      node: u,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: d,
      resetWarningCache: l
    };
    return p.PropTypes = p, p;
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var ot = Er(), at = !0;
  Ye.exports = tt()(ot.isElement, at);
} else
  Ye.exports = nt()();
var it = Ye.exports;
const Re = /* @__PURE__ */ Jr(it), Tr = br({
  audioStatus: "",
  audioFile: void 0,
  audioRecording: void 0,
  audioFileProcessing: !1,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  },
  convertAudioFile: () => {
  },
  setAudioFileProcessing: () => {
  }
});
function st({ children: r }) {
  const [l, d] = he(""), [u, m] = he(), [p, E] = he(), [n, s] = he(!1), S = {
    audioStatus: l,
    audioRecording: u,
    updateAudioStatus: (P) => d(P),
    updateAudioRecording: (P) => m(P),
    convertAudioFile: (P) => E(P),
    audioFile: p,
    setAudioFileProcessing: s,
    audioFileProcessing: n
  };
  return /* @__PURE__ */ Z(Tr.Provider, { value: S, children: r });
}
function Ee() {
  const r = wr(Tr);
  if (r === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return r;
}
const _r = br({
  mainContainerStyle: {},
  controllerContainerStyle: {},
  controllerStyle: {},
  waveContainerStyle: {},
  graphColor: "#000",
  graphShaded: !1,
  height: "inherit",
  width: "inherit",
  downloadable: !1,
  uploadAudioFile: !0,
  onAudioDownload: () => {
  },
  onRecordingStart: () => {
  },
  onRecordingEnd: () => {
  },
  onPlayStart: () => {
  },
  onPlayEnd: () => {
  },
  onRecordingPause: () => {
  },
  onPlayPause: () => {
  },
  rootElementId: ""
});
function ct({ userPropsValue: r, children: l }) {
  return /* @__PURE__ */ Z(_r.Provider, { value: r, children: l });
}
function xe() {
  const r = wr(_r);
  if (r === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return r;
}
const ut = (r, l) => {
  if (!r.length)
    return null;
  const d = [];
  return r.forEach((u) => {
    const m = l == null ? void 0 : l.getElementsByClassName(u);
    return m != null && m.length && d.push(m[0]), m;
  }), d.length ? d : null;
}, lt = (r) => {
  r && r.forEach((l) => {
    l.remove();
  });
}, ft = (r) => r.map((d) => {
  const u = document.createElement("canvas");
  return u.className = d, u;
}), dt = (r, l) => {
  r.forEach((d) => {
    const u = d.getContext("2d");
    u && (u.clearRect(0, 0, d.width, d.height), u.clearRect(0, 0, d.width, d.height), d.width = ((l == null ? void 0 : l.clientWidth) ?? 1) * devicePixelRatio, d.height = ((l == null ? void 0 : l.clientHeight) ?? 1) * devicePixelRatio, u == null || u.scale(devicePixelRatio, devicePixelRatio));
  });
}, pt = (r, l) => {
  r.forEach((d) => {
    d.style.width = (l == null ? void 0 : l.clientWidth) + "px", d.style.height = (l == null ? void 0 : l.clientHeight) + "px";
  });
}, vt = (r, l) => {
  r.forEach((d) => {
    l == null || l.appendChild(d);
  });
}, Fe = (r, l, d) => {
  try {
    const m = document.getElementById(r).querySelector(d), p = ut(l, m);
    lt(p);
    const E = ft(l);
    return dt(E, m), pt(E, m), vt(E, m), E;
  } catch (u) {
    return console.error("Error in setUpCanvas: ", u), null;
  }
}, Ae = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, gt = (r, l, d) => {
  const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
  if (!u)
    return Ae;
  const m = parseInt(u[1], 16), p = parseInt(u[2], 16), E = parseInt(u[3], 16);
  if (l && d) {
    const n = Math.round(m * l / 100), s = Math.round(p * l / 100), t = Math.round(E * l / 100);
    return {
      solid: `rgb(${n}, ${s}, ${t})`,
      faded: `rgb(${n}, ${s}, ${t}, 0.5)`
    };
  }
  return {
    solid: `rgb(${m}, ${p}, ${E})`,
    faded: `rgb(${m}, ${p}, ${E}, 0.5)`
  };
}, ht = (r) => {
  const l = new Option().style;
  return l.color = r, l.color == r;
}, yt = (r) => {
  const l = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  return typeof l[r.toLowerCase()] < "u" ? l[r.toLowerCase()] : "#000";
}, Ge = (r, l, d) => {
  try {
    if (!r || !ht(r))
      return Ae;
    const u = yt(r);
    return gt(u, l, d);
  } catch {
    return Ae;
  }
};
const mt = 100;
function bt() {
  const { audioStatus: r = "", updateAudioRecording: l } = Ee(), { graphColor: d, graphShaded: u, rootElementId: m, onRecordingEnd: p } = xe(), [E, n] = he(0), s = ue(null), t = ue({}), b = ue(r);
  pe(() => {
    var R, x, h, c, f, T, o, $, G, I, w, _;
    b.current = r, r === "recording" && (((x = (R = t == null ? void 0 : t.current) == null ? void 0 : R.audioContext) == null ? void 0 : x.state) === "suspended" ? (t.current.audioContext.resume().then(P), (c = (h = t.current) == null ? void 0 : h.mediaRecorder) == null || c.resume()) : (T = (f = t == null ? void 0 : t.current) == null ? void 0 : f.audioContext) != null && T.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(S)), r === "stopped" && (($ = (o = t == null ? void 0 : t.current) == null ? void 0 : o.mediaRecorder) == null || $.stop()), r === "paused_recording" && ((I = (G = t == null ? void 0 : t.current) == null ? void 0 : G.audioContext) == null || I.suspend(), (_ = (w = t == null ? void 0 : t.current) == null ? void 0 : w.mediaRecorder) == null || _.pause());
  }, [r]), pe(() => {
    g(), window.addEventListener("resize", g);
  }, []);
  const g = () => {
    const R = Fe(m, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    R && (s.current = R[0]);
  }, S = (R) => {
    var x;
    try {
      const h = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), c = new h();
      t.current.audioContext = c;
      const f = c.createMediaStreamSource(R);
      t.current.analyserNode = c.createAnalyser(), f.connect((x = t == null ? void 0 : t.current) == null ? void 0 : x.analyserNode), t.current.analyserNode.fftSize = 128;
      const T = t.current.analyserNode.frequencyBinCount, o = new Float32Array(T);
      t.current.dataArray = o;
      const $ = new MediaRecorder(R);
      t.current.mediaRecorder = $, $.start(), $.addEventListener("dataavailable", async (G) => {
        const I = await G.data.arrayBuffer(), w = await c.decodeAudioData(I), _ = { blob: G.data, duration: w.duration, graphData: t.current.graphData ?? [] };
        p == null || p(G.data), l(_);
      }), $.addEventListener("stop", () => {
        R.getTracks().forEach((G) => G.stop()), f.disconnect(), c.close();
      }), P();
    } catch (h) {
      console.log("error", h);
    }
  }, P = () => {
    var h, c, f, T, o, $, G, I, w, _, H;
    const R = (h = s == null ? void 0 : s.current) == null ? void 0 : h.getContext("2d");
    if (b.current !== "recording")
      return null;
    R == null || R.clearRect(0, 0, ((c = s == null ? void 0 : s.current) == null ? void 0 : c.width) ?? 1, ((f = s == null ? void 0 : s.current) == null ? void 0 : f.height) ?? 1);
    let x = -1 / 0;
    if (Number(performance.now()) > E) {
      if (n(Number(performance.now() / mt)), !((T = t == null ? void 0 : t.current) != null && T.dataArray))
        return null;
      (G = (o = t == null ? void 0 : t.current) == null ? void 0 : o.analyserNode) == null || G.getFloatTimeDomainData(($ = t == null ? void 0 : t.current) == null ? void 0 : $.dataArray), x = Math.max(0, ...((I = t == null ? void 0 : t.current) == null ? void 0 : I.dataArray) ?? []);
      const ee = Math.max(1, Math.floor(x * 550));
      t.current.graphData === void 0 && (t.current.graphData = []), (H = t.current) == null || H.graphData.push({
        x: ((w = s == null ? void 0 : s.current) == null ? void 0 : w.offsetWidth) ?? 1,
        y: (((_ = s == null ? void 0 : s.current) == null ? void 0 : _.offsetHeight) ?? 1) / 2 - ee / 2,
        height: ee,
        width: 2
      });
    }
    j(), requestAnimationFrame(P);
  }, j = () => {
    var x, h, c, f;
    const R = (x = s == null ? void 0 : s.current) == null ? void 0 : x.getContext("2d");
    if (!R || !((h = t.current) != null && h.graphData))
      return null;
    for (let T = 0; T < ((c = t.current) == null ? void 0 : c.graphData.length); T++) {
      const o = (f = t.current) == null ? void 0 : f.graphData[T];
      o && (R.fillStyle = Ge(d, o.height, u).solid, R == null || R.fillRect(o.x, o.y, o.width, o.height), o.x = o.x - 2);
    }
  };
  return /* @__PURE__ */ Z("div", { className: "voice-recorder_recordcontainer" });
}
const wt = 0.06;
function Ct() {
  const [r, l] = he([]), { audioRecording: d, audioStatus: u, updateAudioStatus: m } = Ee(), { graphColor: p, graphShaded: E, rootElementId: n, onPlayEnd: s } = xe(), t = ue(null), b = ue(null), g = ue(null), S = ue(null), P = ue(), { blob: j, duration: R = 0, graphData: x = [] } = d || {}, h = ue(x);
  pe(() => {
    window.addEventListener("resize", G);
  }, []), pe(() => {
    j && (u === "playing_requested" ? o() : u === "playing" ? I() : u === "paused_playing" ? (T(), window.clearInterval(P.current)) : u === "stopped" && window.clearInterval(P.current));
  }, [u]), pe(() => {
    h.current = x;
    try {
      x.length && G();
    } catch (w) {
      console.log("error", w);
    }
  }, [x]);
  const c = (w) => {
    var H, ee, N;
    const _ = (H = w == null ? void 0 : w.current) == null ? void 0 : H.getContext("2d");
    _ == null || _.clearRect(0, 0, ((ee = w == null ? void 0 : w.current) == null ? void 0 : ee.width) ?? 1, ((N = w == null ? void 0 : w.current) == null ? void 0 : N.height) ?? 1);
  }, f = () => {
    const w = Fe(
      n,
      [
        "waveformgraph-unplayed-graph",
        "waveformgraph-played-graph",
        "progressbar"
      ],
      ".voice-recorder_canvascontainer"
    );
    t.current = w == null ? void 0 : w.find((_) => _.className === "waveformgraph-unplayed-graph"), b.current = w == null ? void 0 : w.find((_) => _.className === "waveformgraph-played-graph"), g.current = w == null ? void 0 : w.find((_) => _.className === "progressbar");
  }, T = () => {
    var w;
    return (w = S == null ? void 0 : S.current) == null ? void 0 : w.pause();
  }, o = () => {
    const _ = document.getElementById(n).querySelector("#playback_audio");
    if (_.autoplay = !0, _.readyState !== 4) {
      const H = window.URL.createObjectURL(new Blob([j], { type: "audio/mpeg" }));
      _.src = H, _.onloadeddata = () => {
        _.play(), m("playing");
      };
    } else
      _.paused ? (_.play(), m("playing")) : (_.currentTime = 0, _.play(), m("playing"));
    _.onended = () => {
      j && (s == null || s(j)), m("stopped");
    };
  }, $ = () => {
    var H;
    const w = [];
    if (!(h != null && h.current.length))
      return w;
    const _ = (((H = t == null ? void 0 : t.current) == null ? void 0 : H.offsetWidth) ?? 1) / (h == null ? void 0 : h.current.length);
    return h == null || h.current.forEach((ee, N) => {
      var ne;
      const K = ((ne = w[N - 1]) == null ? void 0 : ne.x) || 0;
      w.push({
        ...ee,
        x: K + _,
        width: _
      });
    }), l(w), w;
  }, G = () => {
    var _;
    f();
    const w = (_ = t == null ? void 0 : t.current) == null ? void 0 : _.getContext("2d");
    if (w) {
      const H = $();
      for (let ee = 0; ee < H.length; ee++) {
        const N = H[ee];
        w.fillStyle = Ge(p, N.height, E).faded, w.fillRect(N.x, N.y, N.width, N.height);
      }
    }
  }, I = () => {
    var ae, i, C;
    (((ae = S == null ? void 0 : S.current) == null ? void 0 : ae.currentTime) ?? 1) > 0 || c(b);
    const _ = Math.abs(R - wt), H = x.length, ee = _ / H * 1e3;
    let N = 0, K, ne;
    const Q = (i = g == null ? void 0 : g.current) == null ? void 0 : i.getContext("2d"), te = (C = b == null ? void 0 : b.current) == null ? void 0 : C.getContext("2d");
    function le() {
      var D, A, U, F, M, L, q;
      if (!te || !Q || (N = Math.round(H * ((((D = S == null ? void 0 : S.current) == null ? void 0 : D.currentTime) ?? 1) / _)), ne === ((A = S == null ? void 0 : S.current) == null ? void 0 : A.currentTime) || K === N))
        return;
      if (ne = (U = S == null ? void 0 : S.current) == null ? void 0 : U.currentTime, K = N, N >= H) {
        window.clearInterval(P.current);
        return;
      }
      const O = r[N];
      te.fillStyle = Ge(p, O.height, E).solid, te == null || te.fillRect(O.x, O.y, O.width, O.height), +O.x.toFixed(3) < (((F = g == null ? void 0 : g.current) == null ? void 0 : F.offsetWidth) ?? 1) && (Q == null || Q.clearRect(0, 0, ((M = g == null ? void 0 : g.current) == null ? void 0 : M.width) ?? 1, ((L = g == null ? void 0 : g.current) == null ? void 0 : L.height) ?? 1), Q == null || Q.fillRect(O.x, 0, 1, ((q = g == null ? void 0 : g.current) == null ? void 0 : q.offsetHeight) ?? 1));
    }
    le(), P.current = window.setInterval(le, ee);
  };
  return /* @__PURE__ */ ye("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ Z("audio", { ref: S, controls: !0, id: "playback_audio", children: /* @__PURE__ */ Z("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ Z("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function Et() {
  const [r, l] = he(!1), {
    updateAudioRecording: d,
    updateAudioStatus: u,
    audioFile: m,
    setAudioFileProcessing: p
  } = Ee(), { rootElementId: E } = xe(), n = ue(null), s = ue({});
  pe(() => {
    const b = Fe(E, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    return b && (n.current = b[0]), p(!0), t(), () => p(!1);
  }, []);
  const t = async () => {
    if (!m)
      return;
    const b = Fe(E, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    b && (n.current = b[0]);
    const g = await m.arrayBuffer(), S = new Blob([new Uint8Array(g)], { type: m.type });
    s.current.blob = S;
    const P = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), j = new P(), R = j.createGain(), x = await j.decodeAudioData(g);
    s.current.audioBuffer = x;
    const h = j.createAnalyser(), c = j.createBufferSource();
    c.buffer = x, c.connect(R), R.connect(j.destination), c.connect(h), c.playbackRate.value = 2, c.start(), R.gain.setValueAtTime(0, j.currentTime);
    const f = h.frequencyBinCount, T = [], o = () => {
      const $ = new Float32Array(f);
      if (h.getFloatTimeDomainData($), T.push($), j.currentTime * 2 > x.duration && Math.abs(j.currentTime * 2 - x.duration) <= 0.1) {
        l(!0);
        return;
      }
      requestAnimationFrame(o);
    };
    o(), s.current.dataArray = T;
  };
  return pe(() => {
    var b, g;
    if (r && s.current.dataArray) {
      const S = [];
      for (const P of s.current.dataArray) {
        let j = -1 / 0;
        j = Math.max(0, ...P ?? []);
        const R = Math.max(1, Math.floor(j * 550));
        S.push({
          x: ((b = n == null ? void 0 : n.current) == null ? void 0 : b.offsetWidth) ?? 1,
          y: (((g = n == null ? void 0 : n.current) == null ? void 0 : g.offsetHeight) ?? 1) / 2 - R / 2,
          height: R,
          width: 2
        });
      }
      if (s.current.blob && s.current.audioBuffer) {
        const P = { blob: s.current.blob, duration: s.current.audioBuffer.duration, graphData: S ?? [] };
        d(P), u("playing_requested");
      }
    }
  }, [r]), /* @__PURE__ */ Z("div", { className: "voice-recorder_recordcontainer" });
}
function St() {
  const { audioStatus: r } = Ee(), { waveContainerStyle: l } = xe(), [d, u] = he("");
  return pe(() => {
    u(r === "playing" || r === "playing_requested" || r === "paused_playing" || r === "stopped" ? "playing" : r === "processing" ? "prerecord" : "recording");
  }, [r]), /* @__PURE__ */ ye("div", { className: "voice-recorder_waveformcontainer", style: l, children: [
    d === "playing" ? /* @__PURE__ */ Z(Ct, {}) : null,
    d === "prerecord" ? /* @__PURE__ */ Z(Et, {}) : null,
    d === "recording" ? /* @__PURE__ */ Z(bt, {}) : null
  ] });
}
const Tt = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), _t = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("g", { id: "c98_play" }, /* @__PURE__ */ B.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ B.createElement("g", { id: "Capa_1_78_" })))), Rt = (r) => /* @__PURE__ */ B.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("title", null, "microphone-filled"), /* @__PURE__ */ B.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ B.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ B.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), xt = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), Pt = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ B.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 })))), Ot = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", id: "upload", ...r }, /* @__PURE__ */ B.createElement("path", { d: "M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z" })), kt = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ B.createElement("path", { d: "M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 ", stroke: "none", fillRule: "evenodd", fill: "#000000" }));
var Rr = { exports: {} };
(function(r, l) {
  (function(d, u) {
    r.exports = u(ze);
  })(typeof self < "u" ? self : Hr, (d) => (() => {
    var u = { 156: (n) => {
      n.exports = d;
    } }, m = {};
    function p(n) {
      var s = m[n];
      if (s !== void 0)
        return s.exports;
      var t = m[n] = { exports: {} };
      return u[n](t, t.exports, p), t.exports;
    }
    p.d = (n, s) => {
      for (var t in s)
        p.o(s, t) && !p.o(n, t) && Object.defineProperty(n, t, { enumerable: !0, get: s[t] });
    }, p.o = (n, s) => Object.prototype.hasOwnProperty.call(n, s), p.r = (n) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
    };
    var E = {};
    return (() => {
      p.r(E), p.d(E, { default: () => x, useStopwatch: () => j, useTime: () => R, useTimer: () => P });
      var n = p(156);
      class s {
        static expiryTimestamp(c) {
          const f = new Date(c).getTime() > 0;
          return f || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", c), f;
        }
        static onExpire(c) {
          const f = c && typeof c == "function";
          return c && !f && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", c), f;
        }
      }
      class t {
        static getTimeFromSeconds(c) {
          const f = Math.ceil(c), T = Math.floor(f / 86400), o = Math.floor(f % 86400 / 3600), $ = Math.floor(f % 3600 / 60);
          return { totalSeconds: f, seconds: Math.floor(f % 60), minutes: $, hours: o, days: T };
        }
        static getSecondsFromExpiry(c, f) {
          const T = c - (/* @__PURE__ */ new Date()).getTime();
          if (T > 0) {
            const o = T / 1e3;
            return f ? Math.round(o) : o;
          }
          return 0;
        }
        static getSecondsFromPrevTime(c, f) {
          const T = (/* @__PURE__ */ new Date()).getTime() - c;
          if (T > 0) {
            const o = T / 1e3;
            return f ? Math.round(o) : o;
          }
          return 0;
        }
        static getSecondsFromTimeNow() {
          const c = /* @__PURE__ */ new Date();
          return c.getTime() / 1e3 - 60 * c.getTimezoneOffset();
        }
        static getFormattedTimeFromSeconds(c, f) {
          const { seconds: T, minutes: o, hours: $ } = t.getTimeFromSeconds(c);
          let G = "", I = $;
          return f === "12-hour" && (G = $ >= 12 ? "pm" : "am", I = $ % 12), { seconds: T, minutes: o, hours: I, ampm: G };
        }
      }
      function b(h, c) {
        const f = (0, n.useRef)();
        (0, n.useEffect)(() => {
          f.current = h;
        }), (0, n.useEffect)(() => {
          if (!c)
            return () => {
            };
          const T = setInterval(() => {
            f.current && f.current();
          }, c);
          return () => clearInterval(T);
        }, [c]);
      }
      const g = 1e3;
      function S(h) {
        if (!s.expiryTimestamp(h))
          return null;
        const c = t.getSecondsFromExpiry(h), f = Math.floor(1e3 * (c - Math.floor(c)));
        return f > 0 ? f : g;
      }
      function P() {
        let { expiryTimestamp: h, onExpire: c, autoStart: f = !0 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const [T, o] = (0, n.useState)(h), [$, G] = (0, n.useState)(t.getSecondsFromExpiry(T)), [I, w] = (0, n.useState)(f), [_, H] = (0, n.useState)(f), [ee, N] = (0, n.useState)(S(T)), K = (0, n.useCallback)(() => {
          s.onExpire(c) && c(), w(!1), N(null);
        }, [c]), ne = (0, n.useCallback)(() => {
          w(!1);
        }, []), Q = (0, n.useCallback)(function(ae) {
          let i = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          N(S(ae)), H(i), w(i), o(ae), G(t.getSecondsFromExpiry(ae));
        }, []), te = (0, n.useCallback)(() => {
          const ae = /* @__PURE__ */ new Date();
          ae.setMilliseconds(ae.getMilliseconds() + 1e3 * $), Q(ae);
        }, [$, Q]), le = (0, n.useCallback)(() => {
          _ ? (G(t.getSecondsFromExpiry(T)), w(!0)) : te();
        }, [T, _, te]);
        return b(() => {
          ee !== g && N(g);
          const ae = t.getSecondsFromExpiry(T);
          G(ae), ae <= 0 && K();
        }, I ? ee : null), { ...t.getTimeFromSeconds($), start: le, pause: ne, resume: te, restart: Q, isRunning: I };
      }
      function j() {
        let { autoStart: h, offsetTimestamp: c } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const [f, T] = (0, n.useState)(t.getSecondsFromExpiry(c, !0) || 0), [o, $] = (0, n.useState)(/* @__PURE__ */ new Date()), [G, I] = (0, n.useState)(f + t.getSecondsFromPrevTime(o || 0, !0)), [w, _] = (0, n.useState)(h);
        b(() => {
          I(f + t.getSecondsFromPrevTime(o, !0));
        }, w ? 1e3 : null);
        const H = (0, n.useCallback)(() => {
          const K = /* @__PURE__ */ new Date();
          $(K), _(!0), I(f + t.getSecondsFromPrevTime(K, !0));
        }, [f]), ee = (0, n.useCallback)(() => {
          T(G), _(!1);
        }, [G]), N = (0, n.useCallback)(function() {
          let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, ne = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          const Q = t.getSecondsFromExpiry(K, !0) || 0, te = /* @__PURE__ */ new Date();
          $(te), T(Q), _(ne), I(Q + t.getSecondsFromPrevTime(te, !0));
        }, []);
        return { ...t.getTimeFromSeconds(G), start: H, pause: ee, reset: N, isRunning: w };
      }
      function R() {
        let { format: h } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const [c, f] = (0, n.useState)(t.getSecondsFromTimeNow());
        return b(() => {
          f(t.getSecondsFromTimeNow());
        }, 1e3), { ...t.getFormattedTimeFromSeconds(c, h) };
      }
      function x(h) {
        if ((0, n.useEffect)(() => {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), h.expiryTimestamp) {
          const f = P(h);
          return { ...f, startTimer: f.start, stopTimer: f.pause, resetTimer: () => {
          } };
        }
        const c = j(h);
        return { ...c, startTimer: c.start, stopTimer: c.pause, resetTimer: c.reset };
      }
    })(), E;
  })());
})(Rr);
var At = Rr.exports;
const Ft = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function It() {
  const { audioStatus: r } = Ee(), {
    seconds: l,
    minutes: d,
    hours: u,
    start: m,
    pause: p,
    reset: E
  } = At.useStopwatch({ autoStart: !1 });
  pe(() => {
    r === "recording" ? m() : r === "paused_playing" || r === "paused_recording" || r === "stopped" ? p() : E();
  }, [r]);
  const n = (s) => s.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ ye("div", { className: `voice-recorder_stopcontainer ${r === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ Z("div", { className: "voice-recorder_control", children: /* @__PURE__ */ Z(Ft, {}) }),
    /* @__PURE__ */ ye("div", { className: "voice-recorder_stopwatch", children: [
      u ? /* @__PURE__ */ Z("span", { children: u }) : null,
      /* @__PURE__ */ Z("span", { children: n(d) }),
      ":",
      /* @__PURE__ */ Z("span", { children: n(l) })
    ] })
  ] });
}
const ge = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1,
  showUploadBtn: !1,
  showLoadingBtn: !1
};
function Mt() {
  const r = ue(null), l = ue(null), { audioStatus: d, updateAudioStatus: u, audioRecording: m, convertAudioFile: p } = Ee(), {
    controllerContainerStyle: E,
    controllerStyle: n,
    downloadable: s = !0,
    uploadAudioFile: t = !0,
    onAudioDownload: b,
    onRecordingStart: g,
    onPlayStart: S,
    onRecordingPause: P,
    onPlayPause: j,
    rootElementId: R
  } = xe(), [x, h] = he(ge), c = ({ svg: I, disabled: w, status: _, onClick: H, applyCircularStyles: ee = !0, display: N = !0, rotate: K = !1 }) => {
    if (!_ || !N)
      return null;
    let ne = `${ee ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`;
    return ne += `${K ? " voice-recorder_rotate" : ""}`, /* @__PURE__ */ Z("button", { onClick: H, disabled: w, className: ne, style: n, children: I });
  }, f = (I) => () => {
    u(I);
  }, T = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(f("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  }, o = () => {
    const { blob: I = "" } = m || {};
    if (!I || !r.current)
      return null;
    const w = URL.createObjectURL(I);
    r.current.href = w, r.current.download = "audio.wav", r.current.click();
  }, $ = () => {
    l.current && l.current.click();
  }, G = (I) => {
    I && (p(I), u("processing"));
  };
  return pe(() => {
    const I = document.getElementById(R);
    if (I) {
      const w = I.querySelector(".voice-recorder_controlscontainer");
      if (I && w) {
        const { height: _ } = I.getBoundingClientRect();
        w.style.height = `${_ / 3}px`;
      }
    }
    return l.current && l.current.addEventListener("change", (w) => {
      const _ = w.target;
      _ != null && _.files && (G(_.files[0]), _.value = "");
    }), () => {
      l.current && l.current.removeEventListener("change", () => null);
    };
  }, []), pe(() => {
    if (m) {
      const { blob: I = "" } = m || {};
      if (!I || !b)
        return;
      b(I);
    }
  }, [m]), pe(() => {
    switch (d) {
      case "":
        h({
          ...ge,
          showRecordBtn: !0,
          showUploadBtn: !0
        });
        break;
      case "recording": {
        g == null || g(), h({
          ...ge,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      }
      case "paused_recording": {
        P == null || P(), h({
          ...ge,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      }
      case "paused_playing": {
        j == null || j(), h({
          ...ge,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "playing": {
        S == null || S(), h({
          ...ge,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "stopped": {
        h({
          ...ge,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "processing": {
        h({
          ...ge,
          showRecordBtn: !0,
          showLoadingBtn: !0
        });
        break;
      }
      default:
        h(ge);
    }
  }, [d]), /* @__PURE__ */ ye("div", { className: "voice-recorder_controlscontainer", style: E, children: [
    /* @__PURE__ */ ye("div", { className: "voice-recorder_controls", children: [
      c({
        svg: /* @__PURE__ */ Z(Rt, {}),
        disabled: d === "processing",
        status: x.showRecordBtn,
        onClick: T
      }),
      c({
        svg: /* @__PURE__ */ Z(Tt, {}),
        disabled: d === "stopped" || d === "paused_recording" || d === "paused_playing",
        status: x.showPauseBtn,
        onClick: f(
          d === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      c({
        svg: /* @__PURE__ */ Z(_t, {}),
        disabled: !1,
        status: x.showPlayBtn,
        onClick: f("playing_requested")
      }),
      c({
        svg: /* @__PURE__ */ Z(It, {}),
        disabled: !1,
        status: x.showStopBtn,
        onClick: f("stopped"),
        applyCircularStyles: !1
      }),
      c({
        svg: /* @__PURE__ */ Z(xt, {}),
        disabled: !1,
        status: x.showRedoBtn,
        onClick: f("")
      }),
      /* @__PURE__ */ ye("div", { className: "voice-recorder_download", children: [
        c({
          svg: /* @__PURE__ */ Z(Pt, {}),
          disabled: !1,
          status: x.showRedoBtn,
          onClick: o,
          display: s
        }),
        c({
          svg: /* @__PURE__ */ Z(Ot, {}),
          disabled: !1,
          status: x.showUploadBtn,
          onClick: $,
          display: t
        }),
        c({
          svg: /* @__PURE__ */ Z(kt, {}),
          disabled: !0,
          rotate: !0,
          status: x.showLoadingBtn,
          onClick: () => {
          }
        })
      ] })
    ] }),
    /* @__PURE__ */ Z("input", { ref: l, type: "file", style: { display: "none" }, accept: "audio/*" }),
    /* @__PURE__ */ Z("a", { ref: r, download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const jt = (r) => {
  const {
    mainContainerStyle: l,
    height: d,
    width: u,
    ...m
  } = r, p = zr(), E = {
    ...l,
    height: d,
    width: u
  }, n = `voice-recorder-${p}`;
  return /* @__PURE__ */ Z(st, { children: /* @__PURE__ */ Z(ct, { userPropsValue: { ...m, rootElementId: n }, children: /* @__PURE__ */ ye("div", { id: n, className: "voice-recorder_maincontainer", style: E, children: [
    /* @__PURE__ */ Z(St, {}),
    /* @__PURE__ */ Z(Mt, {})
  ] }) }) });
};
jt.propTypes = {
  mainContainerStyle: Re.object,
  height: Re.string || Re.number,
  width: Re.string || Re.number
};
export {
  jt as VoiceRecorder
};
