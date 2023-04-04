(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@charset "UTF-8";.voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as F from "react";
import Ge, { createContext as wr, useState as Ee, useContext as _r, useRef as ve, useEffect as de } from "react";
var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {}, Hr = {
  get exports() {
    return ke;
  },
  set exports(r) {
    ke = r;
  }
}, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Jr() {
  if (ur)
    return Se;
  ur = 1;
  var r = Ge, h = Symbol.for("react.element"), b = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(o, i, a) {
    var d, u = {}, s = null, l = null;
    a !== void 0 && (s = "" + a), i.key !== void 0 && (s = "" + i.key), i.ref !== void 0 && (l = i.ref);
    for (d in i)
      p.call(i, d) && !t.hasOwnProperty(d) && (u[d] = i[d]);
    if (o && o.defaultProps)
      for (d in i = o.defaultProps, i)
        u[d] === void 0 && (u[d] = i[d]);
    return { $$typeof: h, type: o, key: s, ref: l, props: u, _owner: c.current };
  }
  return Se.Fragment = b, Se.jsx = f, Se.jsxs = f, Se;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Xr() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ge, h = Symbol.for("react.element"), b = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), o = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var v = g && e[g] || e[m];
      return typeof v == "function" ? v : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
          w[k - 1] = arguments[k];
        C("error", e, w);
      }
    }
    function C(e, v, w) {
      {
        var k = S.ReactDebugCurrentFrame, N = k.getStackAddendum();
        N !== "" && (v += "%s", w = w.concat([N]));
        var H = w.map(function(W) {
          return String(W);
        });
        H.unshift("Warning: " + v), Function.prototype.apply.call(console[e], console, H);
      }
    }
    var P = !1, n = !1, O = !1, G = !1, X = !1, q;
    q = Symbol.for("react.module.reference");
    function ce(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === t || X || e === c || e === a || e === d || G || e === l || P || n || O || typeof e == "object" && e !== null && (e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === o || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === q || e.getModuleId !== void 0));
    }
    function te(e, v, w) {
      var k = e.displayName;
      if (k)
        return k;
      var N = v.displayName || v.name || "";
      return N !== "" ? w + "(" + N + ")" : w;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case b:
          return "Portal";
        case t:
          return "Profiler";
        case c:
          return "StrictMode";
        case a:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var v = e;
            return ee(v) + ".Consumer";
          case f:
            var w = e;
            return ee(w._context) + ".Provider";
          case i:
            return te(e, e.render, "ForwardRef");
          case u:
            var k = e.displayName || null;
            return k !== null ? k : z(e.type) || "Memo";
          case s: {
            var N = e, H = N._payload, W = N._init;
            try {
              return z(W(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, oe = 0, Z, ne, ae, se, y, _, j;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function R() {
      {
        if (oe === 0) {
          Z = console.log, ne = console.info, ae = console.warn, se = console.error, y = console.group, _ = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: A,
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
        oe++;
      }
    }
    function M() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: Z
            }),
            info: K({}, e, {
              value: ne
            }),
            warn: K({}, e, {
              value: ae
            }),
            error: K({}, e, {
              value: se
            }),
            group: K({}, e, {
              value: y
            }),
            groupCollapsed: K({}, e, {
              value: _
            }),
            groupEnd: K({}, e, {
              value: j
            })
          });
        }
        oe < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = S.ReactCurrentDispatcher, D;
    function $(e, v, w) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (N) {
            var k = N.stack.trim().match(/\n( *(at )?)/);
            D = k && k[1] || "";
          }
        return `
` + D + e;
      }
    }
    var V = !1, L;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      L = new ie();
    }
    function E(e, v) {
      if (!e || V)
        return "";
      {
        var w = L.get(e);
        if (w !== void 0)
          return w;
      }
      var k;
      V = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = I.current, I.current = null, R();
      try {
        if (v) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (pe) {
              k = pe;
            }
            Reflect.construct(e, [], W);
          } else {
            try {
              W.call();
            } catch (pe) {
              k = pe;
            }
            e.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            k = pe;
          }
          e();
        }
      } catch (pe) {
        if (pe && k && typeof pe.stack == "string") {
          for (var B = pe.stack.split(`
`), ue = k.stack.split(`
`), Q = B.length - 1, re = ue.length - 1; Q >= 1 && re >= 0 && B[Q] !== ue[re]; )
            re--;
          for (; Q >= 1 && re >= 0; Q--, re--)
            if (B[Q] !== ue[re]) {
              if (Q !== 1 || re !== 1)
                do
                  if (Q--, re--, re < 0 || B[Q] !== ue[re]) {
                    var fe = `
` + B[Q].replace(" at new ", " at ");
                    return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, fe), fe;
                  }
                while (Q >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        V = !1, I.current = H, M(), Error.prepareStackTrace = N;
      }
      var _e = e ? e.displayName || e.name : "", ir = _e ? $(_e) : "";
      return typeof e == "function" && L.set(e, ir), ir;
    }
    function le(e, v, w) {
      return E(e, !1);
    }
    function be(e) {
      var v = e.prototype;
      return !!(v && v.isReactComponent);
    }
    function ye(e, v, w) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return E(e, be(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case a:
          return $("Suspense");
        case d:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return le(e.render);
          case u:
            return ye(e.type, v, w);
          case s: {
            var k = e, N = k._payload, H = k._init;
            try {
              return ye(H(N), v, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, He = {}, Je = S.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var v = e._owner, w = ye(e.type, e._source, v ? v.type : null);
        Je.setExtraStackFrame(w);
      } else
        Je.setExtraStackFrame(null);
    }
    function Cr(e, v, w, k, N) {
      {
        var H = Function.call.bind(Ce);
        for (var W in e)
          if (H(e, W)) {
            var B = void 0;
            try {
              if (typeof e[W] != "function") {
                var ue = Error((k || "React class") + ": " + w + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              B = e[W](v, W, k, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              B = Q;
            }
            B && !(B instanceof Error) && (Pe(N), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", w, W, typeof B), Pe(null)), B instanceof Error && !(B.message in He) && (He[B.message] = !0, Pe(N), x("Failed %s type: %s", w, B.message), Pe(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Ie(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, w = v && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return w;
      }
    }
    function kr(e) {
      try {
        return Xe(e), !1;
      } catch {
        return !0;
      }
    }
    function Xe(e) {
      return "" + e;
    }
    function Ke(e) {
      if (kr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Xe(e);
    }
    var Te = S.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, Qe, Me;
    Me = {};
    function jr(e) {
      if (Ce.call(e, "ref")) {
        var v = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (Ce.call(e, "key")) {
        var v = Object.getOwnPropertyDescriptor(e, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Mr(e, v) {
      if (typeof e.ref == "string" && Te.current && v && Te.current.stateNode !== v) {
        var w = z(Te.current.type);
        Me[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Te.current.type), e.ref), Me[w] = !0);
      }
    }
    function Dr(e, v) {
      {
        var w = function() {
          Ze || (Ze = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Fr(e, v) {
      {
        var w = function() {
          Qe || (Qe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var $r = function(e, v, w, k, N, H, W) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: v,
        ref: w,
        props: W,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function Lr(e, v, w, k, N) {
      {
        var H, W = {}, B = null, ue = null;
        w !== void 0 && (Ke(w), B = "" + w), Ir(v) && (Ke(v.key), B = "" + v.key), jr(v) && (ue = v.ref, Mr(v, N));
        for (H in v)
          Ce.call(v, H) && !Ar.hasOwnProperty(H) && (W[H] = v[H]);
        if (e && e.defaultProps) {
          var Q = e.defaultProps;
          for (H in Q)
            W[H] === void 0 && (W[H] = Q[H]);
        }
        if (B || ue) {
          var re = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          B && Dr(W, re), ue && Fr(W, re);
        }
        return $r(e, B, ue, N, k, Te.current, W);
      }
    }
    var De = S.ReactCurrentOwner, er = S.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var v = e._owner, w = ye(e.type, e._source, v ? v.type : null);
        er.setExtraStackFrame(w);
      } else
        er.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function rr() {
      {
        if (De.current) {
          var e = z(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Br(e) {
      {
        if (e !== void 0) {
          var v = e.fileName.replace(/^.*[\\\/]/, ""), w = e.lineNumber;
          return `

Check your code at ` + v + ":" + w + ".";
        }
        return "";
      }
    }
    var tr = {};
    function Wr(e) {
      {
        var v = rr();
        if (!v) {
          var w = typeof e == "string" ? e : e.displayName || e.name;
          w && (v = `

Check the top-level render call using <` + w + ">.");
        }
        return v;
      }
    }
    function nr(e, v) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var w = Wr(v);
        if (tr[w])
          return;
        tr[w] = !0;
        var k = "";
        e && e._owner && e._owner !== De.current && (k = " It was passed a child from " + z(e._owner.type) + "."), we(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, k), we(null);
      }
    }
    function or(e, v) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var w = 0; w < e.length; w++) {
            var k = e[w];
            $e(k) && nr(k, v);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = T(e);
          if (typeof N == "function" && N !== e.entries)
            for (var H = N.call(e), W; !(W = H.next()).done; )
              $e(W.value) && nr(W.value, v);
        }
      }
    }
    function Vr(e) {
      {
        var v = e.type;
        if (v == null || typeof v == "string")
          return;
        var w;
        if (typeof v == "function")
          w = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === u))
          w = v.propTypes;
        else
          return;
        if (w) {
          var k = z(v);
          Cr(w, e.props, "prop", k, e);
        } else if (v.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var N = z(v);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qr(e) {
      {
        for (var v = Object.keys(e.props), w = 0; w < v.length; w++) {
          var k = v[w];
          if (k !== "children" && k !== "key") {
            we(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ar(e, v, w, k, N, H) {
      {
        var W = ce(e);
        if (!W) {
          var B = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Br(N);
          ue ? B += ue : B += rr();
          var Q;
          e === null ? Q = "null" : Ie(e) ? Q = "array" : e !== void 0 && e.$$typeof === h ? (Q = "<" + (z(e.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, B);
        }
        var re = Lr(e, v, w, N, H);
        if (re == null)
          return re;
        if (W) {
          var fe = v.children;
          if (fe !== void 0)
            if (k)
              if (Ie(fe)) {
                for (var _e = 0; _e < fe.length; _e++)
                  or(fe[_e], e);
                Object.freeze && Object.freeze(fe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(fe, e);
        }
        return e === p ? qr(re) : Vr(re), re;
      }
    }
    function Nr(e, v, w) {
      return ar(e, v, w, !0);
    }
    function Ur(e, v, w) {
      return ar(e, v, w, !1);
    }
    var Yr = Ur, Gr = Nr;
    Re.Fragment = p, Re.jsx = Yr, Re.jsxs = Gr;
  }()), Re;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Jr() : r.exports = Xr();
})(Hr);
const J = ke.jsx, me = ke.jsxs;
var he = {}, sr = {
  get exports() {
    return he;
  },
  set exports(r) {
    he = r;
  }
}, Ae = {}, Kr = {
  get exports() {
    return Ae;
  },
  set exports(r) {
    Ae = r;
  }
}, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Zr() {
  if (lr)
    return U;
  lr = 1;
  var r = typeof Symbol == "function" && Symbol.for, h = r ? Symbol.for("react.element") : 60103, b = r ? Symbol.for("react.portal") : 60106, p = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, t = r ? Symbol.for("react.profiler") : 60114, f = r ? Symbol.for("react.provider") : 60109, o = r ? Symbol.for("react.context") : 60110, i = r ? Symbol.for("react.async_mode") : 60111, a = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, u = r ? Symbol.for("react.suspense") : 60113, s = r ? Symbol.for("react.suspense_list") : 60120, l = r ? Symbol.for("react.memo") : 60115, g = r ? Symbol.for("react.lazy") : 60116, m = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
  function C(n) {
    if (typeof n == "object" && n !== null) {
      var O = n.$$typeof;
      switch (O) {
        case h:
          switch (n = n.type, n) {
            case i:
            case a:
            case p:
            case t:
            case c:
            case u:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case o:
                case d:
                case g:
                case l:
                case f:
                  return n;
                default:
                  return O;
              }
          }
        case b:
          return O;
      }
    }
  }
  function P(n) {
    return C(n) === a;
  }
  return U.AsyncMode = i, U.ConcurrentMode = a, U.ContextConsumer = o, U.ContextProvider = f, U.Element = h, U.ForwardRef = d, U.Fragment = p, U.Lazy = g, U.Memo = l, U.Portal = b, U.Profiler = t, U.StrictMode = c, U.Suspense = u, U.isAsyncMode = function(n) {
    return P(n) || C(n) === i;
  }, U.isConcurrentMode = P, U.isContextConsumer = function(n) {
    return C(n) === o;
  }, U.isContextProvider = function(n) {
    return C(n) === f;
  }, U.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === h;
  }, U.isForwardRef = function(n) {
    return C(n) === d;
  }, U.isFragment = function(n) {
    return C(n) === p;
  }, U.isLazy = function(n) {
    return C(n) === g;
  }, U.isMemo = function(n) {
    return C(n) === l;
  }, U.isPortal = function(n) {
    return C(n) === b;
  }, U.isProfiler = function(n) {
    return C(n) === t;
  }, U.isStrictMode = function(n) {
    return C(n) === c;
  }, U.isSuspense = function(n) {
    return C(n) === u;
  }, U.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === p || n === a || n === t || n === c || n === u || n === s || typeof n == "object" && n !== null && (n.$$typeof === g || n.$$typeof === l || n.$$typeof === f || n.$$typeof === o || n.$$typeof === d || n.$$typeof === T || n.$$typeof === S || n.$$typeof === x || n.$$typeof === m);
  }, U.typeOf = C, U;
}
var Y = {};
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
    var r = typeof Symbol == "function" && Symbol.for, h = r ? Symbol.for("react.element") : 60103, b = r ? Symbol.for("react.portal") : 60106, p = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, t = r ? Symbol.for("react.profiler") : 60114, f = r ? Symbol.for("react.provider") : 60109, o = r ? Symbol.for("react.context") : 60110, i = r ? Symbol.for("react.async_mode") : 60111, a = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, u = r ? Symbol.for("react.suspense") : 60113, s = r ? Symbol.for("react.suspense_list") : 60120, l = r ? Symbol.for("react.memo") : 60115, g = r ? Symbol.for("react.lazy") : 60116, m = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
    function C(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === p || E === a || E === t || E === c || E === u || E === s || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === l || E.$$typeof === f || E.$$typeof === o || E.$$typeof === d || E.$$typeof === T || E.$$typeof === S || E.$$typeof === x || E.$$typeof === m);
    }
    function P(E) {
      if (typeof E == "object" && E !== null) {
        var le = E.$$typeof;
        switch (le) {
          case h:
            var be = E.type;
            switch (be) {
              case i:
              case a:
              case p:
              case t:
              case c:
              case u:
                return be;
              default:
                var ye = be && be.$$typeof;
                switch (ye) {
                  case o:
                  case d:
                  case g:
                  case l:
                  case f:
                    return ye;
                  default:
                    return le;
                }
            }
          case b:
            return le;
        }
      }
    }
    var n = i, O = a, G = o, X = f, q = h, ce = d, te = p, ee = g, z = l, K = b, oe = t, Z = c, ne = u, ae = !1;
    function se(E) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(E) || P(E) === i;
    }
    function y(E) {
      return P(E) === a;
    }
    function _(E) {
      return P(E) === o;
    }
    function j(E) {
      return P(E) === f;
    }
    function A(E) {
      return typeof E == "object" && E !== null && E.$$typeof === h;
    }
    function R(E) {
      return P(E) === d;
    }
    function M(E) {
      return P(E) === p;
    }
    function I(E) {
      return P(E) === g;
    }
    function D(E) {
      return P(E) === l;
    }
    function $(E) {
      return P(E) === b;
    }
    function V(E) {
      return P(E) === t;
    }
    function L(E) {
      return P(E) === c;
    }
    function ie(E) {
      return P(E) === u;
    }
    Y.AsyncMode = n, Y.ConcurrentMode = O, Y.ContextConsumer = G, Y.ContextProvider = X, Y.Element = q, Y.ForwardRef = ce, Y.Fragment = te, Y.Lazy = ee, Y.Memo = z, Y.Portal = K, Y.Profiler = oe, Y.StrictMode = Z, Y.Suspense = ne, Y.isAsyncMode = se, Y.isConcurrentMode = y, Y.isContextConsumer = _, Y.isContextProvider = j, Y.isElement = A, Y.isForwardRef = R, Y.isFragment = M, Y.isLazy = I, Y.isMemo = D, Y.isPortal = $, Y.isProfiler = V, Y.isStrictMode = L, Y.isSuspense = ie, Y.isValidElementType = C, Y.typeOf = P;
  }()), Y;
}
var dr;
function Er() {
  return dr || (dr = 1, function(r) {
    process.env.NODE_ENV === "production" ? r.exports = Zr() : r.exports = Qr();
  }(Kr)), Ae;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, pr;
function et() {
  if (pr)
    return Le;
  pr = 1;
  var r = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function p(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function c() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var f = {}, o = 0; o < 10; o++)
        f["_" + String.fromCharCode(o)] = o;
      var i = Object.getOwnPropertyNames(f).map(function(d) {
        return f[d];
      });
      if (i.join("") !== "0123456789")
        return !1;
      var a = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        a[d] = d;
      }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = c() ? Object.assign : function(t, f) {
    for (var o, i = p(t), a, d = 1; d < arguments.length; d++) {
      o = Object(arguments[d]);
      for (var u in o)
        h.call(o, u) && (i[u] = o[u]);
      if (r) {
        a = r(o);
        for (var s = 0; s < a.length; s++)
          b.call(o, a[s]) && (i[a[s]] = o[a[s]]);
      }
    }
    return i;
  }, Le;
}
var Be, vr;
function ze() {
  if (vr)
    return Be;
  vr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = r, Be;
}
var We, yr;
function Tr() {
  return yr || (yr = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Ve, gr;
function rt() {
  if (gr)
    return Ve;
  gr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = ze(), b = {}, p = Tr();
    r = function(t) {
      var f = "Warning: " + t;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function c(t, f, o, i, a) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in t)
        if (p(t, d)) {
          var u;
          try {
            if (typeof t[d] != "function") {
              var s = Error(
                (i || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw s.name = "Invariant Violation", s;
            }
            u = t[d](f, d, i, o, null, h);
          } catch (g) {
            u = g;
          }
          if (u && !(u instanceof Error) && r(
            (i || "React class") + ": type specification of " + o + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in b)) {
            b[u.message] = !0;
            var l = a ? a() : "";
            r(
              "Failed " + o + " type: " + u.message + (l ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, Ve = c, Ve;
}
var qe, hr;
function tt() {
  if (hr)
    return qe;
  hr = 1;
  var r = Er(), h = et(), b = ze(), p = Tr(), c = rt(), t = function() {
  };
  process.env.NODE_ENV !== "production" && (t = function(o) {
    var i = "Warning: " + o;
    typeof console < "u" && console.error(i);
    try {
      throw new Error(i);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return qe = function(o, i) {
    var a = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function u(y) {
      var _ = y && (a && y[a] || y[d]);
      if (typeof _ == "function")
        return _;
    }
    var s = "<<anonymous>>", l = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: x(),
      arrayOf: C,
      element: P(),
      elementType: n(),
      instanceOf: O,
      node: ce(),
      objectOf: X,
      oneOf: G,
      oneOfType: q,
      shape: ee,
      exact: z
    };
    function g(y, _) {
      return y === _ ? y !== 0 || 1 / y === 1 / _ : y !== y && _ !== _;
    }
    function m(y, _) {
      this.message = y, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function T(y) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, j = 0;
      function A(M, I, D, $, V, L, ie) {
        if ($ = $ || s, L = L || D, ie !== b) {
          if (i) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = $ + ":" + D;
            !_[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (t(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[le] = !0, j++);
          }
        }
        return I[D] == null ? M ? I[D] === null ? new m("The " + V + " `" + L + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new m("The " + V + " `" + L + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : y(I, D, $, V, L);
      }
      var R = A.bind(null, !1);
      return R.isRequired = A.bind(null, !0), R;
    }
    function S(y) {
      function _(j, A, R, M, I, D) {
        var $ = j[A], V = Z($);
        if (V !== y) {
          var L = ne($);
          return new m(
            "Invalid " + M + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return T(_);
    }
    function x() {
      return T(f);
    }
    function C(y) {
      function _(j, A, R, M, I) {
        if (typeof y != "function")
          return new m("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var D = j[A];
        if (!Array.isArray(D)) {
          var $ = Z(D);
          return new m("Invalid " + M + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an array."));
        }
        for (var V = 0; V < D.length; V++) {
          var L = y(D, V, R, M, I + "[" + V + "]", b);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return T(_);
    }
    function P() {
      function y(_, j, A, R, M) {
        var I = _[j];
        if (!o(I)) {
          var D = Z(I);
          return new m("Invalid " + R + " `" + M + "` of type " + ("`" + D + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(y);
    }
    function n() {
      function y(_, j, A, R, M) {
        var I = _[j];
        if (!r.isValidElementType(I)) {
          var D = Z(I);
          return new m("Invalid " + R + " `" + M + "` of type " + ("`" + D + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(y);
    }
    function O(y) {
      function _(j, A, R, M, I) {
        if (!(j[A] instanceof y)) {
          var D = y.name || s, $ = se(j[A]);
          return new m("Invalid " + M + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return T(_);
    }
    function G(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? t(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : t("Invalid argument supplied to oneOf, expected an array.")), f;
      function _(j, A, R, M, I) {
        for (var D = j[A], $ = 0; $ < y.length; $++)
          if (g(D, y[$]))
            return null;
        var V = JSON.stringify(y, function(ie, E) {
          var le = ne(E);
          return le === "symbol" ? String(E) : E;
        });
        return new m("Invalid " + M + " `" + I + "` of value `" + String(D) + "` " + ("supplied to `" + R + "`, expected one of " + V + "."));
      }
      return T(_);
    }
    function X(y) {
      function _(j, A, R, M, I) {
        if (typeof y != "function")
          return new m("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var D = j[A], $ = Z(D);
        if ($ !== "object")
          return new m("Invalid " + M + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an object."));
        for (var V in D)
          if (p(D, V)) {
            var L = y(D, V, R, M, I + "." + V, b);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return T(_);
    }
    function q(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && t("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var _ = 0; _ < y.length; _++) {
        var j = y[_];
        if (typeof j != "function")
          return t(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(j) + " at index " + _ + "."
          ), f;
      }
      function A(R, M, I, D, $) {
        for (var V = [], L = 0; L < y.length; L++) {
          var ie = y[L], E = ie(R, M, I, D, $, b);
          if (E == null)
            return null;
          E.data && p(E.data, "expectedType") && V.push(E.data.expectedType);
        }
        var le = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new m("Invalid " + D + " `" + $ + "` supplied to " + ("`" + I + "`" + le + "."));
      }
      return T(A);
    }
    function ce() {
      function y(_, j, A, R, M) {
        return K(_[j]) ? null : new m("Invalid " + R + " `" + M + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return T(y);
    }
    function te(y, _, j, A, R) {
      return new m(
        (y || "React class") + ": " + _ + " type `" + j + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function ee(y) {
      function _(j, A, R, M, I) {
        var D = j[A], $ = Z(D);
        if ($ !== "object")
          return new m("Invalid " + M + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var V in y) {
          var L = y[V];
          if (typeof L != "function")
            return te(R, M, I, V, ne(L));
          var ie = L(D, V, R, M, I + "." + V, b);
          if (ie)
            return ie;
        }
        return null;
      }
      return T(_);
    }
    function z(y) {
      function _(j, A, R, M, I) {
        var D = j[A], $ = Z(D);
        if ($ !== "object")
          return new m("Invalid " + M + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        var V = h({}, j[A], y);
        for (var L in V) {
          var ie = y[L];
          if (p(y, L) && typeof ie != "function")
            return te(R, M, I, L, ne(ie));
          if (!ie)
            return new m(
              "Invalid " + M + " `" + I + "` key `" + L + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(j[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var E = ie(D, L, R, M, I + "." + L, b);
          if (E)
            return E;
        }
        return null;
      }
      return T(_);
    }
    function K(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(K);
          if (y === null || o(y))
            return !0;
          var _ = u(y);
          if (_) {
            var j = _.call(y), A;
            if (_ !== y.entries) {
              for (; !(A = j.next()).done; )
                if (!K(A.value))
                  return !1;
            } else
              for (; !(A = j.next()).done; ) {
                var R = A.value;
                if (R && !K(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(y, _) {
      return y === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function Z(y) {
      var _ = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : oe(_, y) ? "symbol" : _;
    }
    function ne(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var _ = Z(y);
      if (_ === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ae(y) {
      var _ = ne(y);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function se(y) {
      return !y.constructor || !y.constructor.name ? s : y.constructor.name;
    }
    return l.checkPropTypes = c, l.resetWarningCache = c.resetWarningCache, l.PropTypes = l, l;
  }, qe;
}
var Ne, mr;
function nt() {
  if (mr)
    return Ne;
  mr = 1;
  var r = ze();
  function h() {
  }
  function b() {
  }
  return b.resetWarningCache = h, Ne = function() {
    function p(f, o, i, a, d, u) {
      if (u !== r) {
        var s = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw s.name = "Invariant Violation", s;
      }
    }
    p.isRequired = p;
    function c() {
      return p;
    }
    var t = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: c,
      element: p,
      elementType: p,
      instanceOf: c,
      node: p,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: b,
      resetWarningCache: h
    };
    return t.PropTypes = t, t;
  }, Ne;
}
if (process.env.NODE_ENV !== "production") {
  var ot = Er(), at = !0;
  sr.exports = tt()(ot.isElement, at);
} else
  sr.exports = nt()();
const Sr = wr({
  audioStatus: "",
  audioRecording: void 0,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  }
});
function it({ children: r }) {
  const [h, b] = Ee(""), [p, c] = Ee(), o = {
    audioStatus: h,
    audioRecording: p,
    updateAudioStatus: (i) => b(i),
    updateAudioRecording: (i) => c(i)
  };
  return /* @__PURE__ */ J(Sr.Provider, { value: o, children: r });
}
function xe() {
  const r = _r(Sr);
  if (r === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return r;
}
const Rr = wr({
  mainContainerStyle: {},
  controllerContainerStyle: {},
  controllerStyle: {},
  waveContainerStyle: {},
  graphColor: "#000",
  graphShaded: !1,
  height: "inherit",
  width: "inherit",
  downloadable: !1,
  onAudioDownload: () => {
  }
});
function ut({ userPropsValue: r, children: h }) {
  return /* @__PURE__ */ J(Rr.Provider, { value: r, children: h });
}
function je() {
  const r = _r(Rr);
  if (r === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return r;
}
const ct = (r) => {
  if (!r.length)
    return null;
  const h = [];
  return r.forEach((b) => {
    const p = document.getElementById(b);
    return p && h.push(p), p;
  }), h.length ? h : null;
}, st = (r) => {
  r && r.forEach((h) => {
    h.remove();
  });
}, lt = (r) => r.map((b) => {
  const p = document.createElement("canvas");
  return p.setAttribute("id", b), p;
}), ft = (r, h) => {
  r.forEach((b) => {
    const p = b.getContext("2d");
    p && (p.clearRect(0, 0, b.width, b.height), p.clearRect(0, 0, b.width, b.height), b.width = ((h == null ? void 0 : h.clientWidth) ?? 1) * devicePixelRatio, b.height = ((h == null ? void 0 : h.clientHeight) ?? 1) * devicePixelRatio, p == null || p.scale(devicePixelRatio, devicePixelRatio));
  });
}, dt = (r, h) => {
  r.forEach((b) => {
    b.style.width = (h == null ? void 0 : h.clientWidth) + "px", b.style.height = (h == null ? void 0 : h.clientHeight) + "px";
  });
}, pt = (r, h) => {
  r.forEach((b) => {
    h == null || h.appendChild(b);
  });
}, xr = (r, h) => {
  try {
    const b = document.querySelector(h), p = ct(r);
    st(p);
    const c = lt(r);
    return ft(c, b), dt(c, b), pt(c, b), c;
  } catch (b) {
    return console.error("Error in setUpCanvas: ", b), null;
  }
}, Oe = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, vt = (r, h, b) => {
  const p = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
  if (!p)
    return Oe;
  const c = parseInt(p[1], 16), t = parseInt(p[2], 16), f = parseInt(p[3], 16);
  if (h && b) {
    const o = Math.round(c * h / 100), i = Math.round(t * h / 100), a = Math.round(f * h / 100);
    return {
      solid: `rgb(${o}, ${i}, ${a})`,
      faded: `rgb(${o}, ${i}, ${a}, 0.5)`
    };
  }
  return {
    solid: `rgb(${c}, ${t}, ${f})`,
    faded: `rgb(${c}, ${t}, ${f}, 0.5)`
  };
}, yt = (r) => {
  const h = new Option().style;
  return h.color = r, h.color == r;
}, gt = (r) => {
  const h = {
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
  return typeof h[r.toLowerCase()] < "u" ? h[r.toLowerCase()] : "#000";
}, Ue = (r, h, b) => {
  try {
    if (!r || !yt(r))
      return Oe;
    const p = gt(r);
    return vt(p, h, b);
  } catch {
    return Oe;
  }
};
const ht = 100, br = 2;
function mt() {
  const { audioStatus: r = "", updateAudioRecording: h } = xe();
  je();
  const [b, p] = Ee(0), c = ve(null), t = ve({}), f = ve(r);
  de(() => {
    var u, s, l, g, m, T, S, x, C, P, n, O;
    f.current = r, r === "recording" && (((s = (u = t == null ? void 0 : t.current) == null ? void 0 : u.audioContext) == null ? void 0 : s.state) === "suspended" ? (t.current.audioContext.resume().then(a), (g = (l = t.current) == null ? void 0 : l.mediaRecorder) == null || g.resume()) : (T = (m = t == null ? void 0 : t.current) == null ? void 0 : m.audioContext) != null && T.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(i)), r === "stopped" && ((x = (S = t == null ? void 0 : t.current) == null ? void 0 : S.mediaRecorder) == null || x.stop()), r === "paused_recording" && ((P = (C = t == null ? void 0 : t.current) == null ? void 0 : C.audioContext) == null || P.suspend(), (O = (n = t == null ? void 0 : t.current) == null ? void 0 : n.mediaRecorder) == null || O.pause());
  }, [r]), de(() => {
    o(), window.addEventListener("resize", o);
  }, []);
  const o = () => {
    const u = xr(["waveformgraph-record"], ".voice-recorder_recordcontainer");
    u && (c.current = u[0]);
  }, i = (u) => {
    var s;
    try {
      const l = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), g = new l();
      t.current.audioContext = g;
      const m = g.createMediaStreamSource(u);
      t.current.analyserNode = g.createAnalyser(), m.connect((s = t == null ? void 0 : t.current) == null ? void 0 : s.analyserNode), t.current.analyserNode.fftSize = 128;
      const T = t.current.analyserNode.frequencyBinCount, S = new Float32Array(T);
      t.current.dataArray = S;
      const x = new MediaRecorder(u);
      t.current.mediaRecorder = x, x.start(), x.addEventListener("dataavailable", async (C) => {
        const P = await C.data.arrayBuffer(), n = await g.decodeAudioData(P), O = { blob: C.data, duration: n.duration, graphData: t.current.graphData ?? [] };
        h(O);
      }), x.addEventListener("stop", () => {
        u.getTracks().forEach((C) => C.stop()), m.disconnect(), g.close();
      }), a();
    } catch (l) {
      console.log("error", l);
    }
  }, a = () => {
    var l, g, m, T, S, x, C, P, n, O, G;
    const u = (l = c == null ? void 0 : c.current) == null ? void 0 : l.getContext("2d");
    if (f.current !== "recording")
      return null;
    u == null || u.clearRect(0, 0, ((g = c == null ? void 0 : c.current) == null ? void 0 : g.width) ?? 1, ((m = c == null ? void 0 : c.current) == null ? void 0 : m.height) ?? 1);
    let s = -1 / 0;
    if (Number(performance.now()) > b) {
      if (p(Number(performance.now() / ht)), !((T = t == null ? void 0 : t.current) != null && T.dataArray))
        return null;
      (C = (S = t == null ? void 0 : t.current) == null ? void 0 : S.analyserNode) == null || C.getFloatTimeDomainData((x = t == null ? void 0 : t.current) == null ? void 0 : x.dataArray), s = Math.max(0, ...((P = t == null ? void 0 : t.current) == null ? void 0 : P.dataArray) ?? []);
      const X = Math.max(1, Math.floor(s * 450));
      t.current.graphData === void 0 && (t.current.graphData = []), (G = t.current) == null || G.graphData.push({
        x: ((n = c == null ? void 0 : c.current) == null ? void 0 : n.offsetWidth) ?? 1,
        y: (((O = c == null ? void 0 : c.current) == null ? void 0 : O.offsetHeight) ?? 1) / 2 - X / 2,
        height: X,
        width: br
        /* (canvas.width / bufferLength) */
      });
    }
    d(), requestAnimationFrame(a);
  }, d = () => {
    var s, l, g, m;
    const u = (s = c == null ? void 0 : c.current) == null ? void 0 : s.getContext("2d");
    if (!u || !((l = t.current) != null && l.graphData))
      return null;
    for (let T = 0; T < ((g = t.current) == null ? void 0 : g.graphData.length); T++) {
      const S = (m = t.current) == null ? void 0 : m.graphData[T];
      S && (u.fillStyle = Ue("red", S.height, !0).solid, u == null || u.fillRect(S.x, S.y, S.width, S.height), S.x = S.x - br);
    }
  };
  return /* @__PURE__ */ J("div", { className: "voice-recorder_recordcontainer" });
}
const bt = 0.06;
function wt() {
  const [r, h] = Ee([]), { audioRecording: b, audioStatus: p, updateAudioStatus: c } = xe();
  je();
  const t = ve(null), f = ve(null), o = ve(null), i = ve(null), a = ve(), { blob: d, duration: u = 0, graphData: s = [] } = b || {}, l = ve(s);
  de(() => {
    window.addEventListener("resize", C);
  }, []), de(() => {
    d && (p === "playing_requested" ? S() : p === "playing" ? P() : p === "paused_playing" ? (T(), clearInterval(a.current)) : p === "stopped" && clearInterval(a.current));
  }, [p]), de(() => {
    l.current = s;
    try {
      s.length && C();
    } catch (n) {
      console.log("error", n);
    }
  }, [s]);
  const g = (n) => {
    var G, X, q;
    const O = (G = n == null ? void 0 : n.current) == null ? void 0 : G.getContext("2d");
    O == null || O.clearRect(0, 0, ((X = n == null ? void 0 : n.current) == null ? void 0 : X.width) ?? 1, ((q = n == null ? void 0 : n.current) == null ? void 0 : q.height) ?? 1);
  }, m = () => {
    const n = xr([
      "waveformgraph-unplayed-graph",
      "waveformgraph-played-graph",
      "progressbar"
    ], ".voice-recorder_canvascontainer");
    t.current = n == null ? void 0 : n.find((O) => O.id === "waveformgraph-unplayed-graph"), f.current = n == null ? void 0 : n.find((O) => O.id === "waveformgraph-played-graph"), o.current = n == null ? void 0 : n.find((O) => O.id === "progressbar");
  }, T = () => {
    var n;
    return (n = i == null ? void 0 : i.current) == null ? void 0 : n.pause();
  }, S = () => {
    const n = document.querySelector("#playback_audio");
    if (n.readyState !== 4) {
      const O = window.URL.createObjectURL(new Blob([d]));
      n.src = O, n.onloadeddata = () => {
        n.play(), c("playing");
      };
    } else
      n.paused ? (n.play(), c("playing")) : (n.currentTime = 0, n.play(), c("playing"));
    n.onended = () => {
      c("stopped");
    };
  }, x = () => {
    var G;
    const n = [];
    if (!(l != null && l.current.length))
      return n;
    const O = (((G = t == null ? void 0 : t.current) == null ? void 0 : G.offsetWidth) ?? 1) / (l == null ? void 0 : l.current.length);
    return l == null || l.current.forEach((X, q) => {
      var te;
      const ce = ((te = n[q - 1]) == null ? void 0 : te.x) || 0;
      n.push({
        ...X,
        x: ce + O,
        width: O
      });
    }), h(n), n;
  }, C = () => {
    var O;
    m();
    const n = (O = t == null ? void 0 : t.current) == null ? void 0 : O.getContext("2d");
    if (n) {
      const G = x();
      for (let X = 0; X < G.length; X++) {
        const q = G[X];
        n.fillStyle = Ue("red", q.height, !0).faded, n.fillRect(q.x, q.y, q.width, q.height);
      }
    }
  }, P = () => {
    var oe, Z, ne;
    (((oe = i == null ? void 0 : i.current) == null ? void 0 : oe.currentTime) ?? 1) > 0 || g(f);
    const O = Math.abs(u - bt), G = s.length, X = O / G * 1e3;
    let q = 0, ce, te;
    const ee = (Z = o == null ? void 0 : o.current) == null ? void 0 : Z.getContext("2d"), z = (ne = f == null ? void 0 : f.current) == null ? void 0 : ne.getContext("2d");
    function K() {
      var se, y, _, j, A, R, M;
      if (!z || !ee || (q = Math.round(G * ((((se = i == null ? void 0 : i.current) == null ? void 0 : se.currentTime) ?? 1) / O)), te === ((y = i == null ? void 0 : i.current) == null ? void 0 : y.currentTime) || ce === q))
        return;
      if (te = (_ = i == null ? void 0 : i.current) == null ? void 0 : _.currentTime, ce = q, q >= G) {
        clearInterval(a.current);
        return;
      }
      const ae = r[q];
      z.fillStyle = Ue("red", ae.height, !0).solid, z == null || z.fillRect(ae.x, ae.y, ae.width, ae.height), +ae.x.toFixed(3) < (((j = o == null ? void 0 : o.current) == null ? void 0 : j.offsetWidth) ?? 1) && (ee == null || ee.clearRect(0, 0, ((A = o == null ? void 0 : o.current) == null ? void 0 : A.width) ?? 1, ((R = o == null ? void 0 : o.current) == null ? void 0 : R.height) ?? 1), ee == null || ee.fillRect(ae.x, 0, 1, ((M = o == null ? void 0 : o.current) == null ? void 0 : M.offsetHeight) ?? 1));
    }
    K(), a.current = setInterval(K, X);
  };
  return /* @__PURE__ */ me("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ J("audio", { ref: i, controls: !0, id: "playback_audio", children: /* @__PURE__ */ J("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ J("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function _t() {
  const { audioStatus: r } = xe(), { waveContainerStyle: h } = je(), [b, p] = Ee("");
  return de(() => {
    p(r === "playing" || r === "playing_requested" || r === "paused_playing" || r === "stopped" ? "playing" : "recording");
  }, [r]), /* @__PURE__ */ me("div", { className: "voice-recorder_waveformcontainer", style: h, children: [
    b === "playing" ? /* @__PURE__ */ J(wt, {}) : null,
    b === "recording" ? /* @__PURE__ */ J(mt, {}) : null
  ] });
}
const Et = (r) => /* @__PURE__ */ F.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), Tt = (r) => /* @__PURE__ */ F.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("g", null, /* @__PURE__ */ F.createElement("g", { id: "c98_play" }, /* @__PURE__ */ F.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ F.createElement("g", { id: "Capa_1_78_" })))), St = (r) => /* @__PURE__ */ F.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("title", null, "microphone-filled"), /* @__PURE__ */ F.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ F.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ F.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Rt = (r) => /* @__PURE__ */ F.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), xt = (r) => /* @__PURE__ */ F.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("g", null, /* @__PURE__ */ F.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ F.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 }))));
var Ye = {}, Ct = {
  get exports() {
    return Ye;
  },
  set exports(r) {
    Ye = r;
  }
};
(function(r, h) {
  (function(b, p) {
    r.exports = p(Ge);
  })(typeof self < "u" ? self : zr, function(b) {
    return function(p) {
      var c = {};
      function t(f) {
        if (c[f])
          return c[f].exports;
        var o = c[f] = { i: f, l: !1, exports: {} };
        return p[f].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
      }
      return t.m = p, t.c = c, t.d = function(f, o, i) {
        t.o(f, o) || Object.defineProperty(f, o, { enumerable: !0, get: i });
      }, t.r = function(f) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
      }, t.t = function(f, o) {
        if (1 & o && (f = t(f)), 8 & o || 4 & o && typeof f == "object" && f && f.__esModule)
          return f;
        var i = /* @__PURE__ */ Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: f }), 2 & o && typeof f != "string")
          for (var a in f)
            t.d(i, a, function(d) {
              return f[d];
            }.bind(null, a));
        return i;
      }, t.n = function(f) {
        var o = f && f.__esModule ? function() {
          return f.default;
        } : function() {
          return f;
        };
        return t.d(o, "a", o), o;
      }, t.o = function(f, o) {
        return Object.prototype.hasOwnProperty.call(f, o);
      }, t.p = "", t(t.s = 3);
    }([function(p, c) {
      p.exports = b;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.Validate = c.Time = void 0;
      var f = i(t(5)), o = i(t(6));
      function i(a) {
        return a && a.__esModule ? a : { default: a };
      }
      c.Time = f.default, c.Validate = o.default;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.useInterval = void 0;
      var f = function(o) {
        return o && o.__esModule ? o : { default: o };
      }(t(7));
      c.useInterval = f.default;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.useTime = c.useStopwatch = c.useTimer = void 0;
      var f = Object.assign || function(s) {
        for (var l = 1; l < arguments.length; l++) {
          var g = arguments[l];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (s[m] = g[m]);
        }
        return s;
      };
      c.default = function(s) {
        if ((0, o.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), s.expiryTimestamp) {
          var l = (0, i.default)(s);
          return f({}, l, { startTimer: l.start, stopTimer: l.pause, resetTimer: function() {
          } });
        }
        var g = (0, a.default)(s);
        return f({}, g, { startTimer: g.start, stopTimer: g.pause, resetTimer: g.reset });
      };
      var o = t(0), i = u(t(4)), a = u(t(8)), d = u(t(9));
      function u(s) {
        return s && s.__esModule ? s : { default: s };
      }
      c.useTimer = i.default, c.useStopwatch = a.default, c.useTime = d.default;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var f = Object.assign || function(l) {
        for (var g = 1; g < arguments.length; g++) {
          var m = arguments[g];
          for (var T in m)
            Object.prototype.hasOwnProperty.call(m, T) && (l[T] = m[T]);
        }
        return l;
      }, o = function() {
        return function(l, g) {
          if (Array.isArray(l))
            return l;
          if (Symbol.iterator in Object(l))
            return function(m, T) {
              var S = [], x = !0, C = !1, P = void 0;
              try {
                for (var n, O = m[Symbol.iterator](); !(x = (n = O.next()).done) && (S.push(n.value), !T || S.length !== T); x = !0)
                  ;
              } catch (G) {
                C = !0, P = G;
              } finally {
                try {
                  !x && O.return && O.return();
                } finally {
                  if (C)
                    throw P;
                }
              }
              return S;
            }(l, g);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      c.default = function(l) {
        var g = l.expiryTimestamp, m = l.onExpire, T = l.autoStart, S = T === void 0 || T, x = (0, i.useState)(g), C = o(x, 2), P = C[0], n = C[1], O = (0, i.useState)(a.Time.getSecondsFromExpiry(P)), G = o(O, 2), X = G[0], q = G[1], ce = (0, i.useState)(S), te = o(ce, 2), ee = te[0], z = te[1], K = (0, i.useState)(S), oe = o(K, 2), Z = oe[0], ne = oe[1], ae = (0, i.useState)(s(P)), se = o(ae, 2), y = se[0], _ = se[1];
        function j(R) {
          var M = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          _(s(R)), ne(M), z(M), n(R), q(a.Time.getSecondsFromExpiry(R));
        }
        function A() {
          var R = new Date();
          R.setMilliseconds(R.getMilliseconds() + 1e3 * X), j(R);
        }
        return (0, d.useInterval)(function() {
          y !== u && _(u);
          var R = a.Time.getSecondsFromExpiry(P);
          q(R), R <= 0 && (a.Validate.onExpire(m) && m(), z(!1), _(null));
        }, ee ? y : null), f({}, a.Time.getTimeFromSeconds(X), { start: function() {
          Z ? (q(a.Time.getSecondsFromExpiry(P)), z(!0)) : A();
        }, pause: function() {
          z(!1);
        }, resume: A, restart: j, isRunning: ee });
      };
      var i = t(0), a = t(1), d = t(2), u = 1e3;
      function s(l) {
        if (!a.Validate.expiryTimestamp(l))
          return null;
        var g = a.Time.getSecondsFromExpiry(l), m = Math.floor(1e3 * (g - Math.floor(g)));
        return m > 0 ? m : u;
      }
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var f = function() {
        function i(a, d) {
          for (var u = 0; u < d.length; u++) {
            var s = d[u];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(a, s.key, s);
          }
        }
        return function(a, d, u) {
          return d && i(a.prototype, d), u && i(a, u), a;
        };
      }(), o = function() {
        function i() {
          (function(a, d) {
            if (!(a instanceof d))
              throw new TypeError("Cannot call a class as a function");
          })(this, i);
        }
        return f(i, null, [{ key: "getTimeFromSeconds", value: function(a) {
          var d = Math.ceil(a), u = Math.floor(d / 86400), s = Math.floor(d % 86400 / 3600), l = Math.floor(d % 3600 / 60);
          return { seconds: Math.floor(d % 60), minutes: l, hours: s, days: u };
        } }, { key: "getSecondsFromExpiry", value: function(a, d) {
          var u = a - new Date().getTime();
          if (u > 0) {
            var s = u / 1e3;
            return d ? Math.round(s) : s;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(a, d) {
          var u = new Date().getTime() - a;
          if (u > 0) {
            var s = u / 1e3;
            return d ? Math.round(s) : s;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var a = new Date();
          return a.getTime() / 1e3 - 60 * a.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(a, d) {
          var u = i.getTimeFromSeconds(a), s = u.seconds, l = u.minutes, g = u.hours, m = "", T = g;
          return d === "12-hour" && (m = g >= 12 ? "pm" : "am", T = g % 12), { seconds: s, minutes: l, hours: T, ampm: m };
        } }]), i;
      }();
      c.default = o;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var f = function() {
        function i(a, d) {
          for (var u = 0; u < d.length; u++) {
            var s = d[u];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(a, s.key, s);
          }
        }
        return function(a, d, u) {
          return d && i(a.prototype, d), u && i(a, u), a;
        };
      }(), o = function() {
        function i() {
          (function(a, d) {
            if (!(a instanceof d))
              throw new TypeError("Cannot call a class as a function");
          })(this, i);
        }
        return f(i, null, [{ key: "expiryTimestamp", value: function(a) {
          var d = new Date(a).getTime() > 0;
          return d || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", a), d;
        } }, { key: "onExpire", value: function(a) {
          var d = a && typeof a == "function";
          return a && !d && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", a), d;
        } }]), i;
      }();
      c.default = o;
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 }), c.default = function(o, i) {
        var a = (0, f.useRef)();
        (0, f.useEffect)(function() {
          a.current = o;
        }), (0, f.useEffect)(function() {
          if (!i)
            return function() {
            };
          var d = setInterval(function() {
            a.current && a.current();
          }, i);
          return function() {
            return clearInterval(d);
          };
        }, [i]);
      };
      var f = t(0);
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var f = Object.assign || function(u) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s];
          for (var g in l)
            Object.prototype.hasOwnProperty.call(l, g) && (u[g] = l[g]);
        }
        return u;
      }, o = function() {
        return function(u, s) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(l, g) {
              var m = [], T = !0, S = !1, x = void 0;
              try {
                for (var C, P = l[Symbol.iterator](); !(T = (C = P.next()).done) && (m.push(C.value), !g || m.length !== g); T = !0)
                  ;
              } catch (n) {
                S = !0, x = n;
              } finally {
                try {
                  !T && P.return && P.return();
                } finally {
                  if (S)
                    throw x;
                }
              }
              return m;
            }(u, s);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      c.default = function(u) {
        var s = u.autoStart, l = u.offsetTimestamp, g = (0, i.useState)(a.Time.getSecondsFromExpiry(l, !0) || 0), m = o(g, 2), T = m[0], S = m[1], x = (0, i.useState)(new Date()), C = o(x, 2), P = C[0], n = C[1], O = (0, i.useState)(T + a.Time.getSecondsFromPrevTime(P || 0, !0)), G = o(O, 2), X = G[0], q = G[1], ce = (0, i.useState)(s), te = o(ce, 2), ee = te[0], z = te[1];
        return (0, d.useInterval)(function() {
          q(T + a.Time.getSecondsFromPrevTime(P, !0));
        }, ee ? 1e3 : null), f({}, a.Time.getTimeFromSeconds(X), { start: function() {
          var K = new Date();
          n(K), z(!0), q(T + a.Time.getSecondsFromPrevTime(K, !0));
        }, pause: function() {
          S(X), z(!1);
        }, reset: function() {
          var K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, oe = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Z = a.Time.getSecondsFromExpiry(K, !0) || 0, ne = new Date();
          n(ne), S(Z), z(oe), q(Z + a.Time.getSecondsFromPrevTime(ne, !0));
        }, isRunning: ee });
      };
      var i = t(0), a = t(1), d = t(2);
    }, function(p, c, t) {
      Object.defineProperty(c, "__esModule", { value: !0 });
      var f = Object.assign || function(u) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s];
          for (var g in l)
            Object.prototype.hasOwnProperty.call(l, g) && (u[g] = l[g]);
        }
        return u;
      }, o = function() {
        return function(u, s) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(l, g) {
              var m = [], T = !0, S = !1, x = void 0;
              try {
                for (var C, P = l[Symbol.iterator](); !(T = (C = P.next()).done) && (m.push(C.value), !g || m.length !== g); T = !0)
                  ;
              } catch (n) {
                S = !0, x = n;
              } finally {
                try {
                  !T && P.return && P.return();
                } finally {
                  if (S)
                    throw x;
                }
              }
              return m;
            }(u, s);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      c.default = function(u) {
        var s = u.format, l = (0, i.useState)(a.Time.getSecondsFromTimeNow()), g = o(l, 2), m = g[0], T = g[1];
        return (0, d.useInterval)(function() {
          T(a.Time.getSecondsFromTimeNow());
        }, 1e3), f({}, a.Time.getFormattedTimeFromSeconds(m, s));
      };
      var i = t(0), a = t(1), d = t(2);
    }]);
  });
})(Ct);
const Pt = (r) => /* @__PURE__ */ F.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ F.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ F.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function Ot() {
  const { audioStatus: r } = xe(), {
    seconds: h,
    minutes: b,
    hours: p,
    start: c,
    pause: t,
    reset: f
  } = Ye.useStopwatch({ autoStart: !1 });
  de(() => {
    r === "recording" ? c() : r === "paused_playing" || r === "paused_recording" || r === "stopped" ? t() : f();
  }, [r]);
  const o = (i) => i.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ me("div", { className: `voice-recorder_stopcontainer ${r === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ J("div", { className: "voice-recorder_control", children: /* @__PURE__ */ J(Pt, {}) }),
    /* @__PURE__ */ me("div", { className: "voice-recorder_stopwatch", children: [
      p ? /* @__PURE__ */ J("span", { children: p }) : null,
      /* @__PURE__ */ J("span", { children: o(b) }),
      ":",
      /* @__PURE__ */ J("span", { children: o(h) })
    ] })
  ] });
}
const ge = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
};
function kt() {
  const { audioStatus: r, updateAudioStatus: h, audioRecording: b } = xe(), {
    controllerContainerStyle: p,
    controllerStyle: c,
    downloadable: t,
    onAudioDownload: f
  } = je(), [o, i] = Ee(ge), a = ({ svg: l, disabled: g, status: m, onClick: T, applyCircularStyles: S = !0, display: x = !0 }) => !m || !x ? null : /* @__PURE__ */ J("button", { onClick: T, disabled: g, className: `${S ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`, style: c, children: l }), d = (l) => () => {
    h(l);
  }, u = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(d("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  };
  de(() => {
    const l = document.querySelector(".voice-recorder_maincontainer"), g = document.querySelector(".voice-recorder_controlscontainer");
    if (l && g) {
      const { height: m } = l.getBoundingClientRect();
      g.style.height = `${m / 3}px`;
    }
  }, []);
  const s = () => {
    const { blob: l = "" } = b || {};
    if (!l)
      return null;
    const g = URL.createObjectURL(l), m = document.querySelector(".voice-recorder_downloadfile");
    m.href = g, m.download = "audio.wav", m.click();
  };
  return de(() => {
    if (b) {
      const { blob: l = "" } = b || {};
      if (!l || !f)
        return;
      f(l);
    }
  }, [b]), de(() => {
    switch (r) {
      case "":
        i({
          ...ge,
          showRecordBtn: !0
        });
        break;
      case "recording":
        i({
          ...ge,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      case "paused_recording":
        i({
          ...ge,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      case "paused_playing":
        i({
          ...ge,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      case "playing":
      case "stopped":
        i({
          ...ge,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      default:
        i(ge);
    }
  }, [r]), /* @__PURE__ */ me("div", { className: "voice-recorder_controlscontainer", style: p, children: [
    /* @__PURE__ */ me("div", { className: "voice-recorder_controls", children: [
      a({
        svg: /* @__PURE__ */ J(St, {}),
        disabled: !1,
        status: o.showRecordBtn,
        onClick: u
      }),
      a({
        svg: /* @__PURE__ */ J(Et, {}),
        disabled: r === "stopped" || r === "paused_recording" || r === "paused_playing",
        status: o.showPauseBtn,
        onClick: d(
          r === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      a({
        svg: /* @__PURE__ */ J(Tt, {}),
        disabled: !1,
        status: o.showPlayBtn,
        onClick: d("playing_requested")
      }),
      a({
        svg: /* @__PURE__ */ J(Ot, {}),
        disabled: !1,
        status: o.showStopBtn,
        onClick: d("stopped"),
        applyCircularStyles: !1
      }),
      a({
        svg: /* @__PURE__ */ J(Rt, {}),
        disabled: !1,
        status: o.showRedoBtn,
        onClick: d("")
      }),
      /* @__PURE__ */ J("div", { className: "voice-recorder_download", children: a({
        svg: /* @__PURE__ */ J(xt, {}),
        disabled: !1,
        status: o.showRedoBtn,
        onClick: s,
        display: t
      }) })
    ] }),
    /* @__PURE__ */ J("a", { download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const At = (r) => {
  const {
    mainContainerStyle: h,
    height: b,
    width: p,
    ...c
  } = r, t = {
    ...h
  };
  return /* @__PURE__ */ J(it, { children: /* @__PURE__ */ J(ut, { userPropsValue: c, children: /* @__PURE__ */ me("div", { className: "voice-recorder_maincontainer", style: t, children: [
    /* @__PURE__ */ J(_t, {}),
    /* @__PURE__ */ J(kt, {})
  ] }) }) });
};
At.propTypes = {
  mainContainerStyle: he.object,
  height: he.string || he.number,
  width: he.string || he.number
};
export {
  At as VoiceRecorder
};
