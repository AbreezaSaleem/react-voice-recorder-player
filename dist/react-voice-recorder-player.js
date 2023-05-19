(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as B from "react";
import Ge, { createContext as br, useState as Ee, useContext as wr, useRef as de, useEffect as pe, useId as Hr } from "react";
var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ue = { exports: {} }, Te = {};
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
function Kr() {
  if (ur)
    return Te;
  ur = 1;
  var t = Ge, y = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(a, n, r) {
    var f, o = {}, u = null, g = null;
    r !== void 0 && (u = "" + r), n.key !== void 0 && (u = "" + n.key), n.ref !== void 0 && (g = n.ref);
    for (f in n)
      l.call(n, f) && !i.hasOwnProperty(f) && (o[f] = n[f]);
    if (a && a.defaultProps)
      for (f in n = a.defaultProps, n)
        o[f] === void 0 && (o[f] = n[f]);
    return { $$typeof: y, type: a, key: u, ref: g, props: o, _owner: s.current };
  }
  return Te.Fragment = _, Te.jsx = c, Te.jsxs = c, Te;
}
var Se = {};
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
function Zr() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ge, y = Symbol.for("react.element"), _ = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), a = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), r = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var p = m && e[m] || e[h];
      return typeof p == "function" ? p : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), j = 1; j < p; j++)
          b[j - 1] = arguments[j];
        S("error", e, b);
      }
    }
    function S(e, p, b) {
      {
        var j = R.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (p += "%s", b = b.concat([Y]));
        var X = b.map(function(U) {
          return String(U);
        });
        X.unshift("Warning: " + p), Function.prototype.apply.call(console[e], console, X);
      }
    }
    var x = !1, d = !1, q = !1, G = !1, re = !1, C;
    C = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === i || re || e === s || e === r || e === f || G || e === g || x || d || q || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === o || e.$$typeof === c || e.$$typeof === a || e.$$typeof === n || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === C || e.getModuleId !== void 0));
    }
    function z(e, p, b) {
      var j = e.displayName;
      if (j)
        return j;
      var Y = p.displayName || p.name || "";
      return Y !== "" ? b + "(" + Y + ")" : b;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case _:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case r:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var p = e;
            return K(p) + ".Consumer";
          case c:
            var b = e;
            return K(b._context) + ".Provider";
          case n:
            return z(e, e.render, "ForwardRef");
          case o:
            var j = e.displayName || null;
            return j !== null ? j : L(e.type) || "Memo";
          case u: {
            var Y = e, X = Y._payload, U = Y._init;
            try {
              return L(U(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, oe = 0, Q, te, ce, se, v, w, k;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function P() {
      {
        if (oe === 0) {
          Q = console.log, te = console.info, ce = console.warn, se = console.error, v = console.group, w = console.groupCollapsed, k = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: I,
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
    function F() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, e, {
              value: Q
            }),
            info: Z({}, e, {
              value: te
            }),
            warn: Z({}, e, {
              value: ce
            }),
            error: Z({}, e, {
              value: se
            }),
            group: Z({}, e, {
              value: v
            }),
            groupCollapsed: Z({}, e, {
              value: w
            }),
            groupEnd: Z({}, e, {
              value: k
            })
          });
        }
        oe < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = R.ReactCurrentDispatcher, D;
    function $(e, p, b) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            D = j && j[1] || "";
          }
        return `
` + D + e;
      }
    }
    var W = !1, N;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      N = new ie();
    }
    function E(e, p) {
      if (!e || W)
        return "";
      {
        var b = N.get(e);
        if (b !== void 0)
          return b;
      }
      var j;
      W = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = M.current, M.current = null, P();
      try {
        if (p) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (ve) {
              j = ve;
            }
            Reflect.construct(e, [], U);
          } else {
            try {
              U.call();
            } catch (ve) {
              j = ve;
            }
            e.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            j = ve;
          }
          e();
        }
      } catch (ve) {
        if (ve && j && typeof ve.stack == "string") {
          for (var V = ve.stack.split(`
`), ue = j.stack.split(`
`), ne = V.length - 1, ae = ue.length - 1; ne >= 1 && ae >= 0 && V[ne] !== ue[ae]; )
            ae--;
          for (; ne >= 1 && ae >= 0; ne--, ae--)
            if (V[ne] !== ue[ae]) {
              if (ne !== 1 || ae !== 1)
                do
                  if (ne--, ae--, ae < 0 || V[ne] !== ue[ae]) {
                    var fe = `
` + V[ne].replace(" at new ", " at ");
                    return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, fe), fe;
                  }
                while (ne >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        W = !1, M.current = X, F(), Error.prepareStackTrace = Y;
      }
      var we = e ? e.displayName || e.name : "", ir = we ? $(we) : "";
      return typeof e == "function" && N.set(e, ir), ir;
    }
    function le(e, p, b) {
      return E(e, !1);
    }
    function me(e) {
      var p = e.prototype;
      return !!(p && p.isReactComponent);
    }
    function he(e, p, b) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return E(e, me(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case r:
          return $("Suspense");
        case f:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            return le(e.render);
          case o:
            return he(e.type, p, b);
          case u: {
            var j = e, Y = j._payload, X = j._init;
            try {
              return he(X(Y), p, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, He = {}, Je = R.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var p = e._owner, b = he(e.type, e._source, p ? p.type : null);
        Je.setExtraStackFrame(b);
      } else
        Je.setExtraStackFrame(null);
    }
    function Pr(e, p, b, j, Y) {
      {
        var X = Function.call.bind(Ce);
        for (var U in e)
          if (X(e, U)) {
            var V = void 0;
            try {
              if (typeof e[U] != "function") {
                var ue = Error((j || "React class") + ": " + b + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              V = e[U](p, U, j, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              V = ne;
            }
            V && !(V instanceof Error) && (Pe(Y), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", b, U, typeof V), Pe(null)), V instanceof Error && !(V.message in He) && (He[V.message] = !0, Pe(Y), O("Failed %s type: %s", b, V.message), Pe(null));
          }
      }
    }
    var Or = Array.isArray;
    function je(e) {
      return Or(e);
    }
    function kr(e) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, b = p && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return b;
      }
    }
    function Ar(e) {
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
      if (Ar(e))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(e)), Xe(e);
    }
    var _e = R.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, Qe, Ie;
    Ie = {};
    function Ir(e) {
      if (Ce.call(e, "ref")) {
        var p = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Mr(e) {
      if (Ce.call(e, "key")) {
        var p = Object.getOwnPropertyDescriptor(e, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Dr(e, p) {
      if (typeof e.ref == "string" && _e.current && p && _e.current.stateNode !== p) {
        var b = L(_e.current.type);
        Ie[b] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(_e.current.type), e.ref), Ie[b] = !0);
      }
    }
    function Fr(e, p) {
      {
        var b = function() {
          Ze || (Ze = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function $r(e, p) {
      {
        var b = function() {
          Qe || (Qe = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Lr = function(e, p, b, j, Y, X, U) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: p,
        ref: b,
        props: U,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Br(e, p, b, j, Y) {
      {
        var X, U = {}, V = null, ue = null;
        b !== void 0 && (Ke(b), V = "" + b), Mr(p) && (Ke(p.key), V = "" + p.key), Ir(p) && (ue = p.ref, Dr(p, Y));
        for (X in p)
          Ce.call(p, X) && !jr.hasOwnProperty(X) && (U[X] = p[X]);
        if (e && e.defaultProps) {
          var ne = e.defaultProps;
          for (X in ne)
            U[X] === void 0 && (U[X] = ne[X]);
        }
        if (V || ue) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          V && Fr(U, ae), ue && $r(U, ae);
        }
        return Lr(e, V, ue, Y, j, _e.current, U);
      }
    }
    var Me = R.ReactCurrentOwner, er = R.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var p = e._owner, b = he(e.type, e._source, p ? p.type : null);
        er.setExtraStackFrame(b);
      } else
        er.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function rr() {
      {
        if (Me.current) {
          var e = L(Me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Nr(e) {
      {
        if (e !== void 0) {
          var p = e.fileName.replace(/^.*[\\\/]/, ""), b = e.lineNumber;
          return `

Check your code at ` + p + ":" + b + ".";
        }
        return "";
      }
    }
    var tr = {};
    function Wr(e) {
      {
        var p = rr();
        if (!p) {
          var b = typeof e == "string" ? e : e.displayName || e.name;
          b && (p = `

Check the top-level render call using <` + b + ">.");
        }
        return p;
      }
    }
    function nr(e, p) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var b = Wr(p);
        if (tr[b])
          return;
        tr[b] = !0;
        var j = "";
        e && e._owner && e._owner !== Me.current && (j = " It was passed a child from " + L(e._owner.type) + "."), be(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, j), be(null);
      }
    }
    function or(e, p) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var b = 0; b < e.length; b++) {
            var j = e[b];
            Fe(j) && nr(j, p);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var Y = T(e);
          if (typeof Y == "function" && Y !== e.entries)
            for (var X = Y.call(e), U; !(U = X.next()).done; )
              Fe(U.value) && nr(U.value, p);
        }
      }
    }
    function Vr(e) {
      {
        var p = e.type;
        if (p == null || typeof p == "string")
          return;
        var b;
        if (typeof p == "function")
          b = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === n || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === o))
          b = p.propTypes;
        else
          return;
        if (b) {
          var j = L(p);
          Pr(b, e.props, "prop", j, e);
        } else if (p.PropTypes !== void 0 && !De) {
          De = !0;
          var Y = L(p);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(e) {
      {
        for (var p = Object.keys(e.props), b = 0; b < p.length; b++) {
          var j = p[b];
          if (j !== "children" && j !== "key") {
            be(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), be(null);
            break;
          }
        }
        e.ref !== null && (be(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function ar(e, p, b, j, Y, X) {
      {
        var U = A(e);
        if (!U) {
          var V = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Nr(Y);
          ue ? V += ue : V += rr();
          var ne;
          e === null ? ne = "null" : je(e) ? ne = "array" : e !== void 0 && e.$$typeof === y ? (ne = "<" + (L(e.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, V);
        }
        var ae = Br(e, p, b, Y, X);
        if (ae == null)
          return ae;
        if (U) {
          var fe = p.children;
          if (fe !== void 0)
            if (j)
              if (je(fe)) {
                for (var we = 0; we < fe.length; we++)
                  or(fe[we], e);
                Object.freeze && Object.freeze(fe);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(fe, e);
        }
        return e === l ? Ur(ae) : Vr(ae), ae;
      }
    }
    function qr(e, p, b) {
      return ar(e, p, b, !0);
    }
    function Yr(e, p, b) {
      return ar(e, p, b, !1);
    }
    var Gr = Yr, zr = qr;
    Se.Fragment = l, Se.jsx = Gr, Se.jsxs = zr;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Ue.exports = Kr() : Ue.exports = Zr();
var Er = Ue.exports;
const ee = Er.jsx, ge = Er.jsxs;
var qe = { exports: {} }, Oe = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Qr() {
  if (sr)
    return H;
  sr = 1;
  var t = typeof Symbol == "function" && Symbol.for, y = t ? Symbol.for("react.element") : 60103, _ = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, n = t ? Symbol.for("react.async_mode") : 60111, r = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, o = t ? Symbol.for("react.suspense") : 60113, u = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
  function S(d) {
    if (typeof d == "object" && d !== null) {
      var q = d.$$typeof;
      switch (q) {
        case y:
          switch (d = d.type, d) {
            case n:
            case r:
            case l:
            case i:
            case s:
            case o:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case a:
                case f:
                case m:
                case g:
                case c:
                  return d;
                default:
                  return q;
              }
          }
        case _:
          return q;
      }
    }
  }
  function x(d) {
    return S(d) === r;
  }
  return H.AsyncMode = n, H.ConcurrentMode = r, H.ContextConsumer = a, H.ContextProvider = c, H.Element = y, H.ForwardRef = f, H.Fragment = l, H.Lazy = m, H.Memo = g, H.Portal = _, H.Profiler = i, H.StrictMode = s, H.Suspense = o, H.isAsyncMode = function(d) {
    return x(d) || S(d) === n;
  }, H.isConcurrentMode = x, H.isContextConsumer = function(d) {
    return S(d) === a;
  }, H.isContextProvider = function(d) {
    return S(d) === c;
  }, H.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === y;
  }, H.isForwardRef = function(d) {
    return S(d) === f;
  }, H.isFragment = function(d) {
    return S(d) === l;
  }, H.isLazy = function(d) {
    return S(d) === m;
  }, H.isMemo = function(d) {
    return S(d) === g;
  }, H.isPortal = function(d) {
    return S(d) === _;
  }, H.isProfiler = function(d) {
    return S(d) === i;
  }, H.isStrictMode = function(d) {
    return S(d) === s;
  }, H.isSuspense = function(d) {
    return S(d) === o;
  }, H.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === l || d === r || d === i || d === s || d === o || d === u || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === g || d.$$typeof === c || d.$$typeof === a || d.$$typeof === f || d.$$typeof === T || d.$$typeof === R || d.$$typeof === O || d.$$typeof === h);
  }, H.typeOf = S, H;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function et() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, y = t ? Symbol.for("react.element") : 60103, _ = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, n = t ? Symbol.for("react.async_mode") : 60111, r = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, o = t ? Symbol.for("react.suspense") : 60113, u = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
    function S(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === l || E === r || E === i || E === s || E === o || E === u || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === g || E.$$typeof === c || E.$$typeof === a || E.$$typeof === f || E.$$typeof === T || E.$$typeof === R || E.$$typeof === O || E.$$typeof === h);
    }
    function x(E) {
      if (typeof E == "object" && E !== null) {
        var le = E.$$typeof;
        switch (le) {
          case y:
            var me = E.type;
            switch (me) {
              case n:
              case r:
              case l:
              case i:
              case s:
              case o:
                return me;
              default:
                var he = me && me.$$typeof;
                switch (he) {
                  case a:
                  case f:
                  case m:
                  case g:
                  case c:
                    return he;
                  default:
                    return le;
                }
            }
          case _:
            return le;
        }
      }
    }
    var d = n, q = r, G = a, re = c, C = y, A = f, z = l, K = m, L = g, Z = _, oe = i, Q = s, te = o, ce = !1;
    function se(E) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(E) || x(E) === n;
    }
    function v(E) {
      return x(E) === r;
    }
    function w(E) {
      return x(E) === a;
    }
    function k(E) {
      return x(E) === c;
    }
    function I(E) {
      return typeof E == "object" && E !== null && E.$$typeof === y;
    }
    function P(E) {
      return x(E) === f;
    }
    function F(E) {
      return x(E) === l;
    }
    function M(E) {
      return x(E) === m;
    }
    function D(E) {
      return x(E) === g;
    }
    function $(E) {
      return x(E) === _;
    }
    function W(E) {
      return x(E) === i;
    }
    function N(E) {
      return x(E) === s;
    }
    function ie(E) {
      return x(E) === o;
    }
    J.AsyncMode = d, J.ConcurrentMode = q, J.ContextConsumer = G, J.ContextProvider = re, J.Element = C, J.ForwardRef = A, J.Fragment = z, J.Lazy = K, J.Memo = L, J.Portal = Z, J.Profiler = oe, J.StrictMode = Q, J.Suspense = te, J.isAsyncMode = se, J.isConcurrentMode = v, J.isContextConsumer = w, J.isContextProvider = k, J.isElement = I, J.isForwardRef = P, J.isFragment = F, J.isLazy = M, J.isMemo = D, J.isPortal = $, J.isProfiler = W, J.isStrictMode = N, J.isSuspense = ie, J.isValidElementType = S, J.typeOf = x;
  }()), J;
}
var fr;
function _r() {
  return fr || (fr = 1, process.env.NODE_ENV === "production" ? Oe.exports = Qr() : Oe.exports = et()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, dr;
function rt() {
  if (dr)
    return $e;
  dr = 1;
  var t = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
  function l(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, a = 0; a < 10; a++)
        c["_" + String.fromCharCode(a)] = a;
      var n = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (n.join("") !== "0123456789")
        return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        r[f] = f;
      }), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = s() ? Object.assign : function(i, c) {
    for (var a, n = l(i), r, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var o in a)
        y.call(a, o) && (n[o] = a[o]);
      if (t) {
        r = t(a);
        for (var u = 0; u < r.length; u++)
          _.call(a, r[u]) && (n[r[u]] = a[r[u]]);
      }
    }
    return n;
  }, $e;
}
var Le, pr;
function ze() {
  if (pr)
    return Le;
  pr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Le = t, Le;
}
var Be, vr;
function Tr() {
  return vr || (vr = 1, Be = Function.call.bind(Object.prototype.hasOwnProperty)), Be;
}
var Ne, yr;
function tt() {
  if (yr)
    return Ne;
  yr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var y = ze(), _ = {}, l = Tr();
    t = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function s(i, c, a, n, r) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (l(i, f)) {
          var o;
          try {
            if (typeof i[f] != "function") {
              var u = Error(
                (n || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            o = i[f](c, f, n, a, null, y);
          } catch (m) {
            o = m;
          }
          if (o && !(o instanceof Error) && t(
            (n || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof o + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), o instanceof Error && !(o.message in _)) {
            _[o.message] = !0;
            var g = r ? r() : "";
            t(
              "Failed " + a + " type: " + o.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (_ = {});
  }, Ne = s, Ne;
}
var We, hr;
function nt() {
  if (hr)
    return We;
  hr = 1;
  var t = _r(), y = rt(), _ = ze(), l = Tr(), s = tt(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var n = "Warning: " + a;
    typeof console < "u" && console.error(n);
    try {
      throw new Error(n);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return We = function(a, n) {
    var r = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function o(v) {
      var w = v && (r && v[r] || v[f]);
      if (typeof w == "function")
        return w;
    }
    var u = "<<anonymous>>", g = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: O(),
      arrayOf: S,
      element: x(),
      elementType: d(),
      instanceOf: q,
      node: A(),
      objectOf: re,
      oneOf: G,
      oneOfType: C,
      shape: K,
      exact: L
    };
    function m(v, w) {
      return v === w ? v !== 0 || 1 / v === 1 / w : v !== v && w !== w;
    }
    function h(v, w) {
      this.message = v, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function T(v) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, k = 0;
      function I(F, M, D, $, W, N, ie) {
        if ($ = $ || u, N = N || D, ie !== _) {
          if (n) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = $ + ":" + D;
            !w[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[le] = !0, k++);
          }
        }
        return M[D] == null ? F ? M[D] === null ? new h("The " + W + " `" + N + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new h("The " + W + " `" + N + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : v(M, D, $, W, N);
      }
      var P = I.bind(null, !1);
      return P.isRequired = I.bind(null, !0), P;
    }
    function R(v) {
      function w(k, I, P, F, M, D) {
        var $ = k[I], W = Q($);
        if (W !== v) {
          var N = te($);
          return new h(
            "Invalid " + F + " `" + M + "` of type " + ("`" + N + "` supplied to `" + P + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return T(w);
    }
    function O() {
      return T(c);
    }
    function S(v) {
      function w(k, I, P, F, M) {
        if (typeof v != "function")
          return new h("Property `" + M + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var D = k[I];
        if (!Array.isArray(D)) {
          var $ = Q(D);
          return new h("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an array."));
        }
        for (var W = 0; W < D.length; W++) {
          var N = v(D, W, P, F, M + "[" + W + "]", _);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return T(w);
    }
    function x() {
      function v(w, k, I, P, F) {
        var M = w[k];
        if (!a(M)) {
          var D = Q(M);
          return new h("Invalid " + P + " `" + F + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(v);
    }
    function d() {
      function v(w, k, I, P, F) {
        var M = w[k];
        if (!t.isValidElementType(M)) {
          var D = Q(M);
          return new h("Invalid " + P + " `" + F + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(v);
    }
    function q(v) {
      function w(k, I, P, F, M) {
        if (!(k[I] instanceof v)) {
          var D = v.name || u, $ = se(k[I]);
          return new h("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return T(w);
    }
    function G(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function w(k, I, P, F, M) {
        for (var D = k[I], $ = 0; $ < v.length; $++)
          if (m(D, v[$]))
            return null;
        var W = JSON.stringify(v, function(ie, E) {
          var le = te(E);
          return le === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + F + " `" + M + "` of value `" + String(D) + "` " + ("supplied to `" + P + "`, expected one of " + W + "."));
      }
      return T(w);
    }
    function re(v) {
      function w(k, I, P, F, M) {
        if (typeof v != "function")
          return new h("Property `" + M + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new h("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an object."));
        for (var W in D)
          if (l(D, W)) {
            var N = v(D, W, P, F, M + "." + W, _);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return T(w);
    }
    function C(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var w = 0; w < v.length; w++) {
        var k = v[w];
        if (typeof k != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(k) + " at index " + w + "."
          ), c;
      }
      function I(P, F, M, D, $) {
        for (var W = [], N = 0; N < v.length; N++) {
          var ie = v[N], E = ie(P, F, M, D, $, _);
          if (E == null)
            return null;
          E.data && l(E.data, "expectedType") && W.push(E.data.expectedType);
        }
        var le = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new h("Invalid " + D + " `" + $ + "` supplied to " + ("`" + M + "`" + le + "."));
      }
      return T(I);
    }
    function A() {
      function v(w, k, I, P, F) {
        return Z(w[k]) ? null : new h("Invalid " + P + " `" + F + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return T(v);
    }
    function z(v, w, k, I, P) {
      return new h(
        (v || "React class") + ": " + w + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function K(v) {
      function w(k, I, P, F, M) {
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new h("Invalid " + F + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var W in v) {
          var N = v[W];
          if (typeof N != "function")
            return z(P, F, M, W, te(N));
          var ie = N(D, W, P, F, M + "." + W, _);
          if (ie)
            return ie;
        }
        return null;
      }
      return T(w);
    }
    function L(v) {
      function w(k, I, P, F, M) {
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new h("Invalid " + F + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        var W = y({}, k[I], v);
        for (var N in W) {
          var ie = v[N];
          if (l(v, N) && typeof ie != "function")
            return z(P, F, M, N, te(ie));
          if (!ie)
            return new h(
              "Invalid " + F + " `" + M + "` key `" + N + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var E = ie(D, N, P, F, M + "." + N, _);
          if (E)
            return E;
        }
        return null;
      }
      return T(w);
    }
    function Z(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(Z);
          if (v === null || a(v))
            return !0;
          var w = o(v);
          if (w) {
            var k = w.call(v), I;
            if (w !== v.entries) {
              for (; !(I = k.next()).done; )
                if (!Z(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var P = I.value;
                if (P && !Z(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(v, w) {
      return v === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function Q(v) {
      var w = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : oe(w, v) ? "symbol" : w;
    }
    function te(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var w = Q(v);
      if (w === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function ce(v) {
      var w = te(v);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function se(v) {
      return !v.constructor || !v.constructor.name ? u : v.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, We;
}
var Ve, gr;
function ot() {
  if (gr)
    return Ve;
  gr = 1;
  var t = ze();
  function y() {
  }
  function _() {
  }
  return _.resetWarningCache = y, Ve = function() {
    function l(c, a, n, r, f, o) {
      if (o !== t) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    l.isRequired = l;
    function s() {
      return l;
    }
    var i = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: s,
      element: l,
      elementType: l,
      instanceOf: s,
      node: l,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: _,
      resetWarningCache: y
    };
    return i.PropTypes = i, i;
  }, Ve;
}
if (process.env.NODE_ENV !== "production") {
  var at = _r(), it = !0;
  qe.exports = nt()(at.isElement, it);
} else
  qe.exports = ot()();
var ut = qe.exports;
const Re = /* @__PURE__ */ Xr(ut), Sr = br({
  audioStatus: "",
  audioRecording: void 0,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  }
});
function ct({ children: t }) {
  const [y, _] = Ee(""), [l, s] = Ee(), a = {
    audioStatus: y,
    audioRecording: l,
    updateAudioStatus: (n) => _(n),
    updateAudioRecording: (n) => s(n)
  };
  return /* @__PURE__ */ ee(Sr.Provider, { value: a, children: t });
}
function xe() {
  const t = wr(Sr);
  if (t === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return t;
}
const Rr = br({
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
function st({ userPropsValue: t, children: y }) {
  return /* @__PURE__ */ ee(Rr.Provider, { value: t, children: y });
}
function Ae() {
  const t = wr(Rr);
  if (t === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return t;
}
const lt = (t, y) => {
  if (!t.length)
    return null;
  const _ = [];
  return t.forEach((l) => {
    const s = y == null ? void 0 : y.getElementsByClassName(l);
    return s != null && s.length && _.push(s[0]), s;
  }), _.length ? _ : null;
}, ft = (t) => {
  t && t.forEach((y) => {
    y.remove();
  });
}, dt = (t) => t.map((_) => {
  const l = document.createElement("canvas");
  return l.className = _, l;
}), pt = (t, y) => {
  t.forEach((_) => {
    const l = _.getContext("2d");
    l && (l.clearRect(0, 0, _.width, _.height), l.clearRect(0, 0, _.width, _.height), _.width = ((y == null ? void 0 : y.clientWidth) ?? 1) * devicePixelRatio, _.height = ((y == null ? void 0 : y.clientHeight) ?? 1) * devicePixelRatio, l == null || l.scale(devicePixelRatio, devicePixelRatio));
  });
}, vt = (t, y) => {
  t.forEach((_) => {
    _.style.width = (y == null ? void 0 : y.clientWidth) + "px", _.style.height = (y == null ? void 0 : y.clientHeight) + "px";
  });
}, yt = (t, y) => {
  t.forEach((_) => {
    y == null || y.appendChild(_);
  });
}, xr = (t, y, _) => {
  try {
    const s = document.getElementById(t).querySelector(_), i = lt(y, s);
    ft(i);
    const c = dt(y);
    return pt(c, s), vt(c, s), yt(c, s), c;
  } catch (l) {
    return console.error("Error in setUpCanvas: ", l), null;
  }
}, ke = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, ht = (t, y, _) => {
  const l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  if (!l)
    return ke;
  const s = parseInt(l[1], 16), i = parseInt(l[2], 16), c = parseInt(l[3], 16);
  if (y && _) {
    const a = Math.round(s * y / 100), n = Math.round(i * y / 100), r = Math.round(c * y / 100);
    return {
      solid: `rgb(${a}, ${n}, ${r})`,
      faded: `rgb(${a}, ${n}, ${r}, 0.5)`
    };
  }
  return {
    solid: `rgb(${s}, ${i}, ${c})`,
    faded: `rgb(${s}, ${i}, ${c}, 0.5)`
  };
}, gt = (t) => {
  const y = new Option().style;
  return y.color = t, y.color == t;
}, mt = (t) => {
  const y = {
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
  return typeof y[t.toLowerCase()] < "u" ? y[t.toLowerCase()] : "#000";
}, Ye = (t, y, _) => {
  try {
    if (!t || !gt(t))
      return ke;
    const l = mt(t);
    return ht(l, y, _);
  } catch {
    return ke;
  }
};
const bt = 100, mr = 2;
function wt() {
  const { audioStatus: t = "", updateAudioRecording: y } = xe(), { graphColor: _, graphShaded: l, rootElementId: s, onRecordingEnd: i } = Ae(), [c, a] = Ee(0), n = de(null), r = de({}), f = de(t);
  pe(() => {
    var h, T, R, O, S, x, d, q, G, re, C, A;
    f.current = t, t === "recording" && (((T = (h = r == null ? void 0 : r.current) == null ? void 0 : h.audioContext) == null ? void 0 : T.state) === "suspended" ? (r.current.audioContext.resume().then(g), (O = (R = r.current) == null ? void 0 : R.mediaRecorder) == null || O.resume()) : (x = (S = r == null ? void 0 : r.current) == null ? void 0 : S.audioContext) != null && x.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(u)), t === "stopped" && ((q = (d = r == null ? void 0 : r.current) == null ? void 0 : d.mediaRecorder) == null || q.stop()), t === "paused_recording" && ((re = (G = r == null ? void 0 : r.current) == null ? void 0 : G.audioContext) == null || re.suspend(), (A = (C = r == null ? void 0 : r.current) == null ? void 0 : C.mediaRecorder) == null || A.pause());
  }, [t]), pe(() => {
    o(), window.addEventListener("resize", o);
  }, []);
  const o = () => {
    const h = xr(s, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    h && (n.current = h[0]);
  }, u = (h) => {
    var T;
    try {
      const R = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), O = new R();
      r.current.audioContext = O;
      const S = O.createMediaStreamSource(h);
      r.current.analyserNode = O.createAnalyser(), S.connect((T = r == null ? void 0 : r.current) == null ? void 0 : T.analyserNode), r.current.analyserNode.fftSize = 128;
      const x = r.current.analyserNode.frequencyBinCount, d = new Float32Array(x);
      r.current.dataArray = d;
      const q = new MediaRecorder(h);
      r.current.mediaRecorder = q, q.start(), q.addEventListener("dataavailable", async (G) => {
        const re = await G.data.arrayBuffer(), C = await O.decodeAudioData(re), A = { blob: G.data, duration: C.duration, graphData: r.current.graphData ?? [] };
        i == null || i(G.data), y(A);
      }), q.addEventListener("stop", () => {
        h.getTracks().forEach((G) => G.stop()), S.disconnect(), O.close();
      }), g();
    } catch (R) {
      console.log("error", R);
    }
  }, g = () => {
    var R, O, S, x, d, q, G, re, C, A, z;
    const h = (R = n == null ? void 0 : n.current) == null ? void 0 : R.getContext("2d");
    if (f.current !== "recording")
      return null;
    h == null || h.clearRect(0, 0, ((O = n == null ? void 0 : n.current) == null ? void 0 : O.width) ?? 1, ((S = n == null ? void 0 : n.current) == null ? void 0 : S.height) ?? 1);
    let T = -1 / 0;
    if (Number(performance.now()) > c) {
      if (a(Number(performance.now() / bt)), !((x = r == null ? void 0 : r.current) != null && x.dataArray))
        return null;
      (G = (d = r == null ? void 0 : r.current) == null ? void 0 : d.analyserNode) == null || G.getFloatTimeDomainData((q = r == null ? void 0 : r.current) == null ? void 0 : q.dataArray), T = Math.max(0, ...((re = r == null ? void 0 : r.current) == null ? void 0 : re.dataArray) ?? []);
      const K = Math.max(1, Math.floor(T * 550));
      r.current.graphData === void 0 && (r.current.graphData = []), (z = r.current) == null || z.graphData.push({
        x: ((C = n == null ? void 0 : n.current) == null ? void 0 : C.offsetWidth) ?? 1,
        y: (((A = n == null ? void 0 : n.current) == null ? void 0 : A.offsetHeight) ?? 1) / 2 - K / 2,
        height: K,
        width: mr
      });
    }
    m(), requestAnimationFrame(g);
  }, m = () => {
    var T, R, O, S;
    const h = (T = n == null ? void 0 : n.current) == null ? void 0 : T.getContext("2d");
    if (!h || !((R = r.current) != null && R.graphData))
      return null;
    for (let x = 0; x < ((O = r.current) == null ? void 0 : O.graphData.length); x++) {
      const d = (S = r.current) == null ? void 0 : S.graphData[x];
      d && (h.fillStyle = Ye(_, d.height, l).solid, h == null || h.fillRect(d.x, d.y, d.width, d.height), d.x = d.x - mr);
    }
  };
  return /* @__PURE__ */ ee("div", { className: "voice-recorder_recordcontainer" });
}
const Et = 0.06;
function _t() {
  const [t, y] = Ee([]), { audioRecording: _, audioStatus: l, updateAudioStatus: s } = xe(), { graphColor: i, graphShaded: c, rootElementId: a, onPlayEnd: n } = Ae(), r = de(null), f = de(null), o = de(null), u = de(null), g = de(), { blob: m, duration: h = 0, graphData: T = [] } = _ || {}, R = de(T);
  pe(() => {
    window.addEventListener("resize", G);
  }, []), pe(() => {
    m && (l === "playing_requested" ? d() : l === "playing" ? re() : l === "paused_playing" ? (x(), clearInterval(g.current)) : l === "stopped" && clearInterval(g.current));
  }, [l]), pe(() => {
    R.current = T;
    try {
      T.length && G();
    } catch (C) {
      console.log("error", C);
    }
  }, [T]);
  const O = (C) => {
    var z, K, L;
    const A = (z = C == null ? void 0 : C.current) == null ? void 0 : z.getContext("2d");
    A == null || A.clearRect(0, 0, ((K = C == null ? void 0 : C.current) == null ? void 0 : K.width) ?? 1, ((L = C == null ? void 0 : C.current) == null ? void 0 : L.height) ?? 1);
  }, S = () => {
    const C = xr(
      a,
      [
        "waveformgraph-unplayed-graph",
        "waveformgraph-played-graph",
        "progressbar"
      ],
      ".voice-recorder_canvascontainer"
    );
    r.current = C == null ? void 0 : C.find((A) => A.className === "waveformgraph-unplayed-graph"), f.current = C == null ? void 0 : C.find((A) => A.className === "waveformgraph-played-graph"), o.current = C == null ? void 0 : C.find((A) => A.className === "progressbar");
  }, x = () => {
    var C;
    return (C = u == null ? void 0 : u.current) == null ? void 0 : C.pause();
  }, d = () => {
    const A = document.getElementById(a).querySelector("#playback_audio");
    if (A.autoplay = !0, A.readyState !== 4) {
      const z = window.URL.createObjectURL(new Blob([m], { type: "audio/mpeg" }));
      A.src = z, A.onloadeddata = () => {
        A.play(), s("playing");
      };
    } else
      A.paused ? (A.play(), s("playing")) : (A.currentTime = 0, A.play(), s("playing"));
    A.onended = () => {
      m && (n == null || n(m)), s("stopped");
    };
  }, q = () => {
    var z;
    const C = [];
    if (!(R != null && R.current.length))
      return C;
    const A = (((z = r == null ? void 0 : r.current) == null ? void 0 : z.offsetWidth) ?? 1) / (R == null ? void 0 : R.current.length);
    return R == null || R.current.forEach((K, L) => {
      var oe;
      const Z = ((oe = C[L - 1]) == null ? void 0 : oe.x) || 0;
      C.push({
        ...K,
        x: Z + A,
        width: A
      });
    }), y(C), C;
  }, G = () => {
    var A;
    S();
    const C = (A = r == null ? void 0 : r.current) == null ? void 0 : A.getContext("2d");
    if (C) {
      const z = q();
      for (let K = 0; K < z.length; K++) {
        const L = z[K];
        C.fillStyle = Ye(i, L.height, c).faded, C.fillRect(L.x, L.y, L.width, L.height);
      }
    }
  }, re = () => {
    var se, v, w;
    (((se = u == null ? void 0 : u.current) == null ? void 0 : se.currentTime) ?? 1) > 0 || O(f);
    const A = Math.abs(h - Et), z = T.length, K = A / z * 1e3;
    let L = 0, Z, oe;
    const Q = (v = o == null ? void 0 : o.current) == null ? void 0 : v.getContext("2d"), te = (w = f == null ? void 0 : f.current) == null ? void 0 : w.getContext("2d");
    function ce() {
      var I, P, F, M, D, $, W;
      if (!te || !Q || (L = Math.round(z * ((((I = u == null ? void 0 : u.current) == null ? void 0 : I.currentTime) ?? 1) / A)), oe === ((P = u == null ? void 0 : u.current) == null ? void 0 : P.currentTime) || Z === L))
        return;
      if (oe = (F = u == null ? void 0 : u.current) == null ? void 0 : F.currentTime, Z = L, L >= z) {
        clearInterval(g.current);
        return;
      }
      const k = t[L];
      te.fillStyle = Ye(i, k.height, c).solid, te == null || te.fillRect(k.x, k.y, k.width, k.height), +k.x.toFixed(3) < (((M = o == null ? void 0 : o.current) == null ? void 0 : M.offsetWidth) ?? 1) && (Q == null || Q.clearRect(0, 0, ((D = o == null ? void 0 : o.current) == null ? void 0 : D.width) ?? 1, (($ = o == null ? void 0 : o.current) == null ? void 0 : $.height) ?? 1), Q == null || Q.fillRect(k.x, 0, 1, ((W = o == null ? void 0 : o.current) == null ? void 0 : W.offsetHeight) ?? 1));
    }
    ce(), g.current = setInterval(ce, K);
  };
  return /* @__PURE__ */ ge("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ ee("audio", { ref: u, controls: !0, id: "playback_audio", children: /* @__PURE__ */ ee("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ ee("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function Tt() {
  const { audioStatus: t } = xe(), { waveContainerStyle: y } = Ae(), [_, l] = Ee("");
  return pe(() => {
    l(t === "playing" || t === "playing_requested" || t === "paused_playing" || t === "stopped" ? "playing" : "recording");
  }, [t]), /* @__PURE__ */ ge("div", { className: "voice-recorder_waveformcontainer", style: y, children: [
    _ === "playing" ? /* @__PURE__ */ ee(_t, {}) : null,
    _ === "recording" ? /* @__PURE__ */ ee(wt, {}) : null
  ] });
}
const St = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), Rt = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("g", { id: "c98_play" }, /* @__PURE__ */ B.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ B.createElement("g", { id: "Capa_1_78_" })))), xt = (t) => /* @__PURE__ */ B.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("title", null, "microphone-filled"), /* @__PURE__ */ B.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ B.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ B.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Ct = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), Pt = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ B.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 }))));
var Cr = { exports: {} };
(function(t, y) {
  (function(_, l) {
    t.exports = l(Ge);
  })(typeof self < "u" ? self : Jr, function(_) {
    return function(l) {
      var s = {};
      function i(c) {
        if (s[c])
          return s[c].exports;
        var a = s[c] = { i: c, l: !1, exports: {} };
        return l[c].call(a.exports, a, a.exports, i), a.l = !0, a.exports;
      }
      return i.m = l, i.c = s, i.d = function(c, a, n) {
        i.o(c, a) || Object.defineProperty(c, a, { enumerable: !0, get: n });
      }, i.r = function(c) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
      }, i.t = function(c, a) {
        if (1 & a && (c = i(c)), 8 & a || 4 & a && typeof c == "object" && c && c.__esModule)
          return c;
        var n = /* @__PURE__ */ Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: c }), 2 & a && typeof c != "string")
          for (var r in c)
            i.d(n, r, function(f) {
              return c[f];
            }.bind(null, r));
        return n;
      }, i.n = function(c) {
        var a = c && c.__esModule ? function() {
          return c.default;
        } : function() {
          return c;
        };
        return i.d(a, "a", a), a;
      }, i.o = function(c, a) {
        return Object.prototype.hasOwnProperty.call(c, a);
      }, i.p = "", i(i.s = 3);
    }([function(l, s) {
      l.exports = _;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 }), s.Validate = s.Time = void 0;
      var c = n(i(5)), a = n(i(6));
      function n(r) {
        return r && r.__esModule ? r : { default: r };
      }
      s.Time = c.default, s.Validate = a.default;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 }), s.useInterval = void 0;
      var c = function(a) {
        return a && a.__esModule ? a : { default: a };
      }(i(7));
      s.useInterval = c.default;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 }), s.useTime = s.useStopwatch = s.useTimer = void 0;
      var c = Object.assign || function(u) {
        for (var g = 1; g < arguments.length; g++) {
          var m = arguments[g];
          for (var h in m)
            Object.prototype.hasOwnProperty.call(m, h) && (u[h] = m[h]);
        }
        return u;
      };
      s.default = function(u) {
        if ((0, a.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), u.expiryTimestamp) {
          var g = (0, n.default)(u);
          return c({}, g, { startTimer: g.start, stopTimer: g.pause, resetTimer: function() {
          } });
        }
        var m = (0, r.default)(u);
        return c({}, m, { startTimer: m.start, stopTimer: m.pause, resetTimer: m.reset });
      };
      var a = i(0), n = o(i(4)), r = o(i(8)), f = o(i(9));
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      s.useTimer = n.default, s.useStopwatch = r.default, s.useTime = f.default;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c = Object.assign || function(g) {
        for (var m = 1; m < arguments.length; m++) {
          var h = arguments[m];
          for (var T in h)
            Object.prototype.hasOwnProperty.call(h, T) && (g[T] = h[T]);
        }
        return g;
      }, a = function() {
        return function(g, m) {
          if (Array.isArray(g))
            return g;
          if (Symbol.iterator in Object(g))
            return function(h, T) {
              var R = [], O = !0, S = !1, x = void 0;
              try {
                for (var d, q = h[Symbol.iterator](); !(O = (d = q.next()).done) && (R.push(d.value), !T || R.length !== T); O = !0)
                  ;
              } catch (G) {
                S = !0, x = G;
              } finally {
                try {
                  !O && q.return && q.return();
                } finally {
                  if (S)
                    throw x;
                }
              }
              return R;
            }(g, m);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      s.default = function(g) {
        var m = g.expiryTimestamp, h = g.onExpire, T = g.autoStart, R = T === void 0 || T, O = (0, n.useState)(m), S = a(O, 2), x = S[0], d = S[1], q = (0, n.useState)(r.Time.getSecondsFromExpiry(x)), G = a(q, 2), re = G[0], C = G[1], A = (0, n.useState)(R), z = a(A, 2), K = z[0], L = z[1], Z = (0, n.useState)(R), oe = a(Z, 2), Q = oe[0], te = oe[1], ce = (0, n.useState)(u(x)), se = a(ce, 2), v = se[0], w = se[1];
        function k(P) {
          var F = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          w(u(P)), te(F), L(F), d(P), C(r.Time.getSecondsFromExpiry(P));
        }
        function I() {
          var P = /* @__PURE__ */ new Date();
          P.setMilliseconds(P.getMilliseconds() + 1e3 * re), k(P);
        }
        return (0, f.useInterval)(function() {
          v !== o && w(o);
          var P = r.Time.getSecondsFromExpiry(x);
          C(P), P <= 0 && (r.Validate.onExpire(h) && h(), L(!1), w(null));
        }, K ? v : null), c({}, r.Time.getTimeFromSeconds(re), { start: function() {
          Q ? (C(r.Time.getSecondsFromExpiry(x)), L(!0)) : I();
        }, pause: function() {
          L(!1);
        }, resume: I, restart: k, isRunning: K });
      };
      var n = i(0), r = i(1), f = i(2), o = 1e3;
      function u(g) {
        if (!r.Validate.expiryTimestamp(g))
          return null;
        var m = r.Time.getSecondsFromExpiry(g), h = Math.floor(1e3 * (m - Math.floor(m)));
        return h > 0 ? h : o;
      }
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c = function() {
        function n(r, f) {
          for (var o = 0; o < f.length; o++) {
            var u = f[o];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
          }
        }
        return function(r, f, o) {
          return f && n(r.prototype, f), o && n(r, o), r;
        };
      }(), a = function() {
        function n() {
          (function(r, f) {
            if (!(r instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return c(n, null, [{ key: "getTimeFromSeconds", value: function(r) {
          var f = Math.ceil(r), o = Math.floor(f / 86400), u = Math.floor(f % 86400 / 3600), g = Math.floor(f % 3600 / 60);
          return { seconds: Math.floor(f % 60), minutes: g, hours: u, days: o };
        } }, { key: "getSecondsFromExpiry", value: function(r, f) {
          var o = r - (/* @__PURE__ */ new Date()).getTime();
          if (o > 0) {
            var u = o / 1e3;
            return f ? Math.round(u) : u;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(r, f) {
          var o = (/* @__PURE__ */ new Date()).getTime() - r;
          if (o > 0) {
            var u = o / 1e3;
            return f ? Math.round(u) : u;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var r = /* @__PURE__ */ new Date();
          return r.getTime() / 1e3 - 60 * r.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(r, f) {
          var o = n.getTimeFromSeconds(r), u = o.seconds, g = o.minutes, m = o.hours, h = "", T = m;
          return f === "12-hour" && (h = m >= 12 ? "pm" : "am", T = m % 12), { seconds: u, minutes: g, hours: T, ampm: h };
        } }]), n;
      }();
      s.default = a;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c = function() {
        function n(r, f) {
          for (var o = 0; o < f.length; o++) {
            var u = f[o];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
          }
        }
        return function(r, f, o) {
          return f && n(r.prototype, f), o && n(r, o), r;
        };
      }(), a = function() {
        function n() {
          (function(r, f) {
            if (!(r instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return c(n, null, [{ key: "expiryTimestamp", value: function(r) {
          var f = new Date(r).getTime() > 0;
          return f || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", r), f;
        } }, { key: "onExpire", value: function(r) {
          var f = r && typeof r == "function";
          return r && !f && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", r), f;
        } }]), n;
      }();
      s.default = a;
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 }), s.default = function(a, n) {
        var r = (0, c.useRef)();
        (0, c.useEffect)(function() {
          r.current = a;
        }), (0, c.useEffect)(function() {
          if (!n)
            return function() {
            };
          var f = setInterval(function() {
            r.current && r.current();
          }, n);
          return function() {
            return clearInterval(f);
          };
        }, [n]);
      };
      var c = i(0);
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c = Object.assign || function(o) {
        for (var u = 1; u < arguments.length; u++) {
          var g = arguments[u];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (o[m] = g[m]);
        }
        return o;
      }, a = function() {
        return function(o, u) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(g, m) {
              var h = [], T = !0, R = !1, O = void 0;
              try {
                for (var S, x = g[Symbol.iterator](); !(T = (S = x.next()).done) && (h.push(S.value), !m || h.length !== m); T = !0)
                  ;
              } catch (d) {
                R = !0, O = d;
              } finally {
                try {
                  !T && x.return && x.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return h;
            }(o, u);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      s.default = function(o) {
        var u = o.autoStart, g = o.offsetTimestamp, m = (0, n.useState)(r.Time.getSecondsFromExpiry(g, !0) || 0), h = a(m, 2), T = h[0], R = h[1], O = (0, n.useState)(/* @__PURE__ */ new Date()), S = a(O, 2), x = S[0], d = S[1], q = (0, n.useState)(T + r.Time.getSecondsFromPrevTime(x || 0, !0)), G = a(q, 2), re = G[0], C = G[1], A = (0, n.useState)(u), z = a(A, 2), K = z[0], L = z[1];
        return (0, f.useInterval)(function() {
          C(T + r.Time.getSecondsFromPrevTime(x, !0));
        }, K ? 1e3 : null), c({}, r.Time.getTimeFromSeconds(re), { start: function() {
          var Z = /* @__PURE__ */ new Date();
          d(Z), L(!0), C(T + r.Time.getSecondsFromPrevTime(Z, !0));
        }, pause: function() {
          R(re), L(!1);
        }, reset: function() {
          var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, oe = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Q = r.Time.getSecondsFromExpiry(Z, !0) || 0, te = /* @__PURE__ */ new Date();
          d(te), R(Q), L(oe), C(Q + r.Time.getSecondsFromPrevTime(te, !0));
        }, isRunning: K });
      };
      var n = i(0), r = i(1), f = i(2);
    }, function(l, s, i) {
      Object.defineProperty(s, "__esModule", { value: !0 });
      var c = Object.assign || function(o) {
        for (var u = 1; u < arguments.length; u++) {
          var g = arguments[u];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (o[m] = g[m]);
        }
        return o;
      }, a = function() {
        return function(o, u) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(g, m) {
              var h = [], T = !0, R = !1, O = void 0;
              try {
                for (var S, x = g[Symbol.iterator](); !(T = (S = x.next()).done) && (h.push(S.value), !m || h.length !== m); T = !0)
                  ;
              } catch (d) {
                R = !0, O = d;
              } finally {
                try {
                  !T && x.return && x.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return h;
            }(o, u);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      s.default = function(o) {
        var u = o.format, g = (0, n.useState)(r.Time.getSecondsFromTimeNow()), m = a(g, 2), h = m[0], T = m[1];
        return (0, f.useInterval)(function() {
          T(r.Time.getSecondsFromTimeNow());
        }, 1e3), c({}, r.Time.getFormattedTimeFromSeconds(h, u));
      };
      var n = i(0), r = i(1), f = i(2);
    }]);
  });
})(Cr);
var Ot = Cr.exports;
const kt = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function At() {
  const { audioStatus: t } = xe(), {
    seconds: y,
    minutes: _,
    hours: l,
    start: s,
    pause: i,
    reset: c
  } = Ot.useStopwatch({ autoStart: !1 });
  pe(() => {
    t === "recording" ? s() : t === "paused_playing" || t === "paused_recording" || t === "stopped" ? i() : c();
  }, [t]);
  const a = (n) => n.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ ge("div", { className: `voice-recorder_stopcontainer ${t === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ ee("div", { className: "voice-recorder_control", children: /* @__PURE__ */ ee(kt, {}) }),
    /* @__PURE__ */ ge("div", { className: "voice-recorder_stopwatch", children: [
      l ? /* @__PURE__ */ ee("span", { children: l }) : null,
      /* @__PURE__ */ ee("span", { children: a(_) }),
      ":",
      /* @__PURE__ */ ee("span", { children: a(y) })
    ] })
  ] });
}
const ye = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
};
function jt() {
  const t = de(null), { audioStatus: y, updateAudioStatus: _, audioRecording: l } = xe(), {
    controllerContainerStyle: s,
    controllerStyle: i,
    downloadable: c = !0,
    onAudioDownload: a,
    onRecordingStart: n,
    onPlayStart: r,
    onRecordingPause: f,
    onPlayPause: o,
    rootElementId: u
  } = Ae(), [g, m] = Ee(ye), h = ({ svg: S, disabled: x, status: d, onClick: q, applyCircularStyles: G = !0, display: re = !0 }) => !d || !re ? null : /* @__PURE__ */ ee("button", { onClick: q, disabled: x, className: `${G ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`, style: i, children: S }), T = (S) => () => {
    _(S);
  }, R = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(T("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  }, O = () => {
    const { blob: S = "" } = l || {};
    if (!S || !t.current)
      return null;
    const x = URL.createObjectURL(S);
    t.current.href = x, t.current.download = "audio.wav", t.current.click();
  };
  return pe(() => {
    const S = document.getElementById(u);
    if (S) {
      const x = S.querySelector(".voice-recorder_controlscontainer");
      if (S && x) {
        const { height: d } = S.getBoundingClientRect();
        x.style.height = `${d / 3}px`;
      }
    }
  }, []), pe(() => {
    if (l) {
      const { blob: S = "" } = l || {};
      if (!S || !a)
        return;
      a(S);
    }
  }, [l]), pe(() => {
    switch (y) {
      case "":
        m({
          ...ye,
          showRecordBtn: !0
        });
        break;
      case "recording": {
        n == null || n(), m({
          ...ye,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      }
      case "paused_recording": {
        f == null || f(), m({
          ...ye,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      }
      case "paused_playing": {
        o == null || o(), m({
          ...ye,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "playing": {
        r == null || r(), m({
          ...ye,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "stopped": {
        m({
          ...ye,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      default:
        m(ye);
    }
  }, [y]), /* @__PURE__ */ ge("div", { className: "voice-recorder_controlscontainer", style: s, children: [
    /* @__PURE__ */ ge("div", { className: "voice-recorder_controls", children: [
      h({
        svg: /* @__PURE__ */ ee(xt, {}),
        disabled: !1,
        status: g.showRecordBtn,
        onClick: R
      }),
      h({
        svg: /* @__PURE__ */ ee(St, {}),
        disabled: y === "stopped" || y === "paused_recording" || y === "paused_playing",
        status: g.showPauseBtn,
        onClick: T(
          y === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      h({
        svg: /* @__PURE__ */ ee(Rt, {}),
        disabled: !1,
        status: g.showPlayBtn,
        onClick: T("playing_requested")
      }),
      h({
        svg: /* @__PURE__ */ ee(At, {}),
        disabled: !1,
        status: g.showStopBtn,
        onClick: T("stopped"),
        applyCircularStyles: !1
      }),
      h({
        svg: /* @__PURE__ */ ee(Ct, {}),
        disabled: !1,
        status: g.showRedoBtn,
        onClick: T("")
      }),
      /* @__PURE__ */ ee("div", { className: "voice-recorder_download", children: h({
        svg: /* @__PURE__ */ ee(Pt, {}),
        disabled: !1,
        status: g.showRedoBtn,
        onClick: O,
        display: c
      }) })
    ] }),
    /* @__PURE__ */ ee("a", { ref: t, download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const It = (t) => {
  const {
    mainContainerStyle: y,
    height: _,
    width: l,
    ...s
  } = t, i = Hr(), c = {
    ...y,
    height: _,
    width: l
  }, a = `voice-recorder-${i}`;
  return /* @__PURE__ */ ee(ct, { children: /* @__PURE__ */ ee(st, { userPropsValue: { ...s, rootElementId: a }, children: /* @__PURE__ */ ge("div", { id: a, className: "voice-recorder_maincontainer", style: c, children: [
    /* @__PURE__ */ ee(Tt, {}),
    /* @__PURE__ */ ee(jt, {})
  ] }) }) });
};
It.propTypes = {
  mainContainerStyle: Re.object,
  height: Re.string || Re.number,
  width: Re.string || Re.number
};
export {
  It as VoiceRecorder
};
