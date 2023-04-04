(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as $ from "react";
import Ge, { createContext as wr, useState as Ee, useContext as _r, useRef as ve, useEffect as de } from "react";
var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {}, Hr = {
  get exports() {
    return ke;
  },
  set exports(t) {
    ke = t;
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
  var t = Ge, m = Symbol.for("react.element"), b = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(r, i, n) {
    var a, u = {}, y = null, s = null;
    n !== void 0 && (y = "" + n), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (s = i.ref);
    for (a in i)
      l.call(i, a) && !c.hasOwnProperty(a) && (u[a] = i[a]);
    if (r && r.defaultProps)
      for (a in i = r.defaultProps, i)
        u[a] === void 0 && (u[a] = i[a]);
    return { $$typeof: m, type: r, key: y, ref: s, props: u, _owner: d.current };
  }
  return Se.Fragment = b, Se.jsx = o, Se.jsxs = o, Se;
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
    var t = Ge, m = Symbol.for("react.element"), b = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), r = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var p = g && e[g] || e[h];
      return typeof p == "function" ? p : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), k = 1; k < p; k++)
          w[k - 1] = arguments[k];
        x("error", e, w);
      }
    }
    function x(e, p, w) {
      {
        var k = P.ReactDebugCurrentFrame, N = k.getStackAddendum();
        N !== "" && (p += "%s", w = w.concat([N]));
        var K = w.map(function(V) {
          return String(V);
        });
        K.unshift("Warning: " + p), Function.prototype.apply.call(console[e], console, K);
      }
    }
    var C = !1, v = !1, X = !1, T = !1, D = !1, U;
    U = Symbol.for("react.module.reference");
    function Q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === c || D || e === d || e === n || e === a || T || e === s || C || v || X || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === u || e.$$typeof === o || e.$$typeof === r || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === U || e.getModuleId !== void 0));
    }
    function z(e, p, w) {
      var k = e.displayName;
      if (k)
        return k;
      var N = p.displayName || p.name || "";
      return N !== "" ? w + "(" + N + ")" : w;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function J(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case b:
          return "Portal";
        case c:
          return "Profiler";
        case d:
          return "StrictMode";
        case n:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case r:
            var p = e;
            return ae(p) + ".Consumer";
          case o:
            var w = e;
            return ae(w._context) + ".Provider";
          case i:
            return z(e, e.render, "ForwardRef");
          case u:
            var k = e.displayName || null;
            return k !== null ? k : J(e.type) || "Memo";
          case y: {
            var N = e, K = N._payload, V = N._init;
            try {
              return J(V(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, te = 0, ee, oe, ce, se, f, _, j;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function R() {
      {
        if (te === 0) {
          ee = console.log, oe = console.info, ce = console.warn, se = console.error, f = console.group, _ = console.groupCollapsed, j = console.groupEnd;
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
        te++;
      }
    }
    function F() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: ee
            }),
            info: H({}, e, {
              value: oe
            }),
            warn: H({}, e, {
              value: ce
            }),
            error: H({}, e, {
              value: se
            }),
            group: H({}, e, {
              value: f
            }),
            groupCollapsed: H({}, e, {
              value: _
            }),
            groupEnd: H({}, e, {
              value: j
            })
          });
        }
        te < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = P.ReactCurrentDispatcher, M;
    function L(e, p, w) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (N) {
            var k = N.stack.trim().match(/\n( *(at )?)/);
            M = k && k[1] || "";
          }
        return `
` + M + e;
      }
    }
    var q = !1, B;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ie();
    }
    function E(e, p) {
      if (!e || q)
        return "";
      {
        var w = B.get(e);
        if (w !== void 0)
          return w;
      }
      var k;
      q = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = I.current, I.current = null, R();
      try {
        if (p) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (pe) {
              k = pe;
            }
            Reflect.construct(e, [], V);
          } else {
            try {
              V.call();
            } catch (pe) {
              k = pe;
            }
            e.call(V.prototype);
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
          for (var W = pe.stack.split(`
`), ue = k.stack.split(`
`), re = W.length - 1, ne = ue.length - 1; re >= 1 && ne >= 0 && W[re] !== ue[ne]; )
            ne--;
          for (; re >= 1 && ne >= 0; re--, ne--)
            if (W[re] !== ue[ne]) {
              if (re !== 1 || ne !== 1)
                do
                  if (re--, ne--, ne < 0 || W[re] !== ue[ne]) {
                    var fe = `
` + W[re].replace(" at new ", " at ");
                    return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, fe), fe;
                  }
                while (re >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, I.current = K, F(), Error.prepareStackTrace = N;
      }
      var _e = e ? e.displayName || e.name : "", ir = _e ? L(_e) : "";
      return typeof e == "function" && B.set(e, ir), ir;
    }
    function le(e, p, w) {
      return E(e, !1);
    }
    function be(e) {
      var p = e.prototype;
      return !!(p && p.isReactComponent);
    }
    function ye(e, p, w) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return E(e, be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case n:
          return L("Suspense");
        case a:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return le(e.render);
          case u:
            return ye(e.type, p, w);
          case y: {
            var k = e, N = k._payload, K = k._init;
            try {
              return ye(K(N), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, He = {}, Je = P.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var p = e._owner, w = ye(e.type, e._source, p ? p.type : null);
        Je.setExtraStackFrame(w);
      } else
        Je.setExtraStackFrame(null);
    }
    function Cr(e, p, w, k, N) {
      {
        var K = Function.call.bind(Ce);
        for (var V in e)
          if (K(e, V)) {
            var W = void 0;
            try {
              if (typeof e[V] != "function") {
                var ue = Error((k || "React class") + ": " + w + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              W = e[V](p, V, k, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              W = re;
            }
            W && !(W instanceof Error) && (Pe(N), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", w, V, typeof W), Pe(null)), W instanceof Error && !(W.message in He) && (He[W.message] = !0, Pe(N), O("Failed %s type: %s", w, W.message), Pe(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Ie(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Xe(e);
    }
    var Te = P.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, Qe, Me;
    Me = {};
    function jr(e) {
      if (Ce.call(e, "ref")) {
        var p = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (Ce.call(e, "key")) {
        var p = Object.getOwnPropertyDescriptor(e, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Mr(e, p) {
      if (typeof e.ref == "string" && Te.current && p && Te.current.stateNode !== p) {
        var w = J(Te.current.type);
        Me[w] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Te.current.type), e.ref), Me[w] = !0);
      }
    }
    function Dr(e, p) {
      {
        var w = function() {
          Ze || (Ze = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Fr(e, p) {
      {
        var w = function() {
          Qe || (Qe = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var $r = function(e, p, w, k, N, K, V) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: p,
        ref: w,
        props: V,
        // Record the component responsible for creating this element.
        _owner: K
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
        value: N
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Lr(e, p, w, k, N) {
      {
        var K, V = {}, W = null, ue = null;
        w !== void 0 && (Ke(w), W = "" + w), Ir(p) && (Ke(p.key), W = "" + p.key), jr(p) && (ue = p.ref, Mr(p, N));
        for (K in p)
          Ce.call(p, K) && !Ar.hasOwnProperty(K) && (V[K] = p[K]);
        if (e && e.defaultProps) {
          var re = e.defaultProps;
          for (K in re)
            V[K] === void 0 && (V[K] = re[K]);
        }
        if (W || ue) {
          var ne = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          W && Dr(V, ne), ue && Fr(V, ne);
        }
        return $r(e, W, ue, N, k, Te.current, V);
      }
    }
    var De = P.ReactCurrentOwner, er = P.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var p = e._owner, w = ye(e.type, e._source, p ? p.type : null);
        er.setExtraStackFrame(w);
      } else
        er.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function rr() {
      {
        if (De.current) {
          var e = J(De.current.type);
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
          var p = e.fileName.replace(/^.*[\\\/]/, ""), w = e.lineNumber;
          return `

Check your code at ` + p + ":" + w + ".";
        }
        return "";
      }
    }
    var tr = {};
    function Wr(e) {
      {
        var p = rr();
        if (!p) {
          var w = typeof e == "string" ? e : e.displayName || e.name;
          w && (p = `

Check the top-level render call using <` + w + ">.");
        }
        return p;
      }
    }
    function nr(e, p) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var w = Wr(p);
        if (tr[w])
          return;
        tr[w] = !0;
        var k = "";
        e && e._owner && e._owner !== De.current && (k = " It was passed a child from " + J(e._owner.type) + "."), we(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, k), we(null);
      }
    }
    function or(e, p) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var w = 0; w < e.length; w++) {
            var k = e[w];
            $e(k) && nr(k, p);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = S(e);
          if (typeof N == "function" && N !== e.entries)
            for (var K = N.call(e), V; !(V = K.next()).done; )
              $e(V.value) && nr(V.value, p);
        }
      }
    }
    function Vr(e) {
      {
        var p = e.type;
        if (p == null || typeof p == "string")
          return;
        var w;
        if (typeof p == "function")
          w = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === u))
          w = p.propTypes;
        else
          return;
        if (w) {
          var k = J(p);
          Cr(w, e.props, "prop", k, e);
        } else if (p.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var N = J(p);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qr(e) {
      {
        for (var p = Object.keys(e.props), w = 0; w < p.length; w++) {
          var k = p[w];
          if (k !== "children" && k !== "key") {
            we(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ar(e, p, w, k, N, K) {
      {
        var V = Q(e);
        if (!V) {
          var W = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Br(N);
          ue ? W += ue : W += rr();
          var re;
          e === null ? re = "null" : Ie(e) ? re = "array" : e !== void 0 && e.$$typeof === m ? (re = "<" + (J(e.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : re = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, W);
        }
        var ne = Lr(e, p, w, N, K);
        if (ne == null)
          return ne;
        if (V) {
          var fe = p.children;
          if (fe !== void 0)
            if (k)
              if (Ie(fe)) {
                for (var _e = 0; _e < fe.length; _e++)
                  or(fe[_e], e);
                Object.freeze && Object.freeze(fe);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(fe, e);
        }
        return e === l ? qr(ne) : Vr(ne), ne;
      }
    }
    function Nr(e, p, w) {
      return ar(e, p, w, !0);
    }
    function Ur(e, p, w) {
      return ar(e, p, w, !1);
    }
    var Yr = Ur, Gr = Nr;
    Re.Fragment = l, Re.jsx = Yr, Re.jsxs = Gr;
  }()), Re;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Jr() : t.exports = Xr();
})(Hr);
const Z = ke.jsx, me = ke.jsxs;
var ge = {}, sr = {
  get exports() {
    return ge;
  },
  set exports(t) {
    ge = t;
  }
}, Ae = {}, Kr = {
  get exports() {
    return Ae;
  },
  set exports(t) {
    Ae = t;
  }
}, Y = {};
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
    return Y;
  lr = 1;
  var t = typeof Symbol == "function" && Symbol.for, m = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, r = t ? Symbol.for("react.context") : 60110, i = t ? Symbol.for("react.async_mode") : 60111, n = t ? Symbol.for("react.concurrent_mode") : 60111, a = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, y = t ? Symbol.for("react.suspense_list") : 60120, s = t ? Symbol.for("react.memo") : 60115, g = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, S = t ? Symbol.for("react.fundamental") : 60117, P = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
  function x(v) {
    if (typeof v == "object" && v !== null) {
      var X = v.$$typeof;
      switch (X) {
        case m:
          switch (v = v.type, v) {
            case i:
            case n:
            case l:
            case c:
            case d:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case r:
                case a:
                case g:
                case s:
                case o:
                  return v;
                default:
                  return X;
              }
          }
        case b:
          return X;
      }
    }
  }
  function C(v) {
    return x(v) === n;
  }
  return Y.AsyncMode = i, Y.ConcurrentMode = n, Y.ContextConsumer = r, Y.ContextProvider = o, Y.Element = m, Y.ForwardRef = a, Y.Fragment = l, Y.Lazy = g, Y.Memo = s, Y.Portal = b, Y.Profiler = c, Y.StrictMode = d, Y.Suspense = u, Y.isAsyncMode = function(v) {
    return C(v) || x(v) === i;
  }, Y.isConcurrentMode = C, Y.isContextConsumer = function(v) {
    return x(v) === r;
  }, Y.isContextProvider = function(v) {
    return x(v) === o;
  }, Y.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === m;
  }, Y.isForwardRef = function(v) {
    return x(v) === a;
  }, Y.isFragment = function(v) {
    return x(v) === l;
  }, Y.isLazy = function(v) {
    return x(v) === g;
  }, Y.isMemo = function(v) {
    return x(v) === s;
  }, Y.isPortal = function(v) {
    return x(v) === b;
  }, Y.isProfiler = function(v) {
    return x(v) === c;
  }, Y.isStrictMode = function(v) {
    return x(v) === d;
  }, Y.isSuspense = function(v) {
    return x(v) === u;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === l || v === n || v === c || v === d || v === u || v === y || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === s || v.$$typeof === o || v.$$typeof === r || v.$$typeof === a || v.$$typeof === S || v.$$typeof === P || v.$$typeof === O || v.$$typeof === h);
  }, Y.typeOf = x, Y;
}
var G = {};
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
    var t = typeof Symbol == "function" && Symbol.for, m = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, r = t ? Symbol.for("react.context") : 60110, i = t ? Symbol.for("react.async_mode") : 60111, n = t ? Symbol.for("react.concurrent_mode") : 60111, a = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, y = t ? Symbol.for("react.suspense_list") : 60120, s = t ? Symbol.for("react.memo") : 60115, g = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, S = t ? Symbol.for("react.fundamental") : 60117, P = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
    function x(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === l || E === n || E === c || E === d || E === u || E === y || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === s || E.$$typeof === o || E.$$typeof === r || E.$$typeof === a || E.$$typeof === S || E.$$typeof === P || E.$$typeof === O || E.$$typeof === h);
    }
    function C(E) {
      if (typeof E == "object" && E !== null) {
        var le = E.$$typeof;
        switch (le) {
          case m:
            var be = E.type;
            switch (be) {
              case i:
              case n:
              case l:
              case c:
              case d:
              case u:
                return be;
              default:
                var ye = be && be.$$typeof;
                switch (ye) {
                  case r:
                  case a:
                  case g:
                  case s:
                  case o:
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
    var v = i, X = n, T = r, D = o, U = m, Q = a, z = l, ae = g, J = s, H = b, te = c, ee = d, oe = u, ce = !1;
    function se(E) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(E) || C(E) === i;
    }
    function f(E) {
      return C(E) === n;
    }
    function _(E) {
      return C(E) === r;
    }
    function j(E) {
      return C(E) === o;
    }
    function A(E) {
      return typeof E == "object" && E !== null && E.$$typeof === m;
    }
    function R(E) {
      return C(E) === a;
    }
    function F(E) {
      return C(E) === l;
    }
    function I(E) {
      return C(E) === g;
    }
    function M(E) {
      return C(E) === s;
    }
    function L(E) {
      return C(E) === b;
    }
    function q(E) {
      return C(E) === c;
    }
    function B(E) {
      return C(E) === d;
    }
    function ie(E) {
      return C(E) === u;
    }
    G.AsyncMode = v, G.ConcurrentMode = X, G.ContextConsumer = T, G.ContextProvider = D, G.Element = U, G.ForwardRef = Q, G.Fragment = z, G.Lazy = ae, G.Memo = J, G.Portal = H, G.Profiler = te, G.StrictMode = ee, G.Suspense = oe, G.isAsyncMode = se, G.isConcurrentMode = f, G.isContextConsumer = _, G.isContextProvider = j, G.isElement = A, G.isForwardRef = R, G.isFragment = F, G.isLazy = I, G.isMemo = M, G.isPortal = L, G.isProfiler = q, G.isStrictMode = B, G.isSuspense = ie, G.isValidElementType = x, G.typeOf = C;
  }()), G;
}
var dr;
function Er() {
  return dr || (dr = 1, function(t) {
    process.env.NODE_ENV === "production" ? t.exports = Zr() : t.exports = Qr();
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
  var t = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function l(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var o = {}, r = 0; r < 10; r++)
        o["_" + String.fromCharCode(r)] = r;
      var i = Object.getOwnPropertyNames(o).map(function(a) {
        return o[a];
      });
      if (i.join("") !== "0123456789")
        return !1;
      var n = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(a) {
        n[a] = a;
      }), Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = d() ? Object.assign : function(c, o) {
    for (var r, i = l(c), n, a = 1; a < arguments.length; a++) {
      r = Object(arguments[a]);
      for (var u in r)
        m.call(r, u) && (i[u] = r[u]);
      if (t) {
        n = t(r);
        for (var y = 0; y < n.length; y++)
          b.call(r, n[y]) && (i[n[y]] = r[n[y]]);
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
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = t, Be;
}
var We, yr;
function Tr() {
  return yr || (yr = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Ve, hr;
function rt() {
  if (hr)
    return Ve;
  hr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var m = ze(), b = {}, l = Tr();
    t = function(c) {
      var o = "Warning: " + c;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function d(c, o, r, i, n) {
    if (process.env.NODE_ENV !== "production") {
      for (var a in c)
        if (l(c, a)) {
          var u;
          try {
            if (typeof c[a] != "function") {
              var y = Error(
                (i || "React class") + ": " + r + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            u = c[a](o, a, i, r, null, m);
          } catch (g) {
            u = g;
          }
          if (u && !(u instanceof Error) && t(
            (i || "React class") + ": type specification of " + r + " `" + a + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in b)) {
            b[u.message] = !0;
            var s = n ? n() : "";
            t(
              "Failed " + r + " type: " + u.message + (s ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, Ve = d, Ve;
}
var qe, gr;
function tt() {
  if (gr)
    return qe;
  gr = 1;
  var t = Er(), m = et(), b = ze(), l = Tr(), d = rt(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(r) {
    var i = "Warning: " + r;
    typeof console < "u" && console.error(i);
    try {
      throw new Error(i);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return qe = function(r, i) {
    var n = typeof Symbol == "function" && Symbol.iterator, a = "@@iterator";
    function u(f) {
      var _ = f && (n && f[n] || f[a]);
      if (typeof _ == "function")
        return _;
    }
    var y = "<<anonymous>>", s = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: O(),
      arrayOf: x,
      element: C(),
      elementType: v(),
      instanceOf: X,
      node: Q(),
      objectOf: D,
      oneOf: T,
      oneOfType: U,
      shape: ae,
      exact: J
    };
    function g(f, _) {
      return f === _ ? f !== 0 || 1 / f === 1 / _ : f !== f && _ !== _;
    }
    function h(f, _) {
      this.message = f, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function S(f) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, j = 0;
      function A(F, I, M, L, q, B, ie) {
        if (L = L || y, B = B || M, ie !== b) {
          if (i) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = L + ":" + M;
            !_[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[le] = !0, j++);
          }
        }
        return I[M] == null ? F ? I[M] === null ? new h("The " + q + " `" + B + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new h("The " + q + " `" + B + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : f(I, M, L, q, B);
      }
      var R = A.bind(null, !1);
      return R.isRequired = A.bind(null, !0), R;
    }
    function P(f) {
      function _(j, A, R, F, I, M) {
        var L = j[A], q = ee(L);
        if (q !== f) {
          var B = oe(L);
          return new h(
            "Invalid " + F + " `" + I + "` of type " + ("`" + B + "` supplied to `" + R + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return S(_);
    }
    function O() {
      return S(o);
    }
    function x(f) {
      function _(j, A, R, F, I) {
        if (typeof f != "function")
          return new h("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var M = j[A];
        if (!Array.isArray(M)) {
          var L = ee(M);
          return new h("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected an array."));
        }
        for (var q = 0; q < M.length; q++) {
          var B = f(M, q, R, F, I + "[" + q + "]", b);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return S(_);
    }
    function C() {
      function f(_, j, A, R, F) {
        var I = _[j];
        if (!r(I)) {
          var M = ee(I);
          return new h("Invalid " + R + " `" + F + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(f);
    }
    function v() {
      function f(_, j, A, R, F) {
        var I = _[j];
        if (!t.isValidElementType(I)) {
          var M = ee(I);
          return new h("Invalid " + R + " `" + F + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(f);
    }
    function X(f) {
      function _(j, A, R, F, I) {
        if (!(j[A] instanceof f)) {
          var M = f.name || y, L = se(j[A]);
          return new h("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return S(_);
    }
    function T(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), o;
      function _(j, A, R, F, I) {
        for (var M = j[A], L = 0; L < f.length; L++)
          if (g(M, f[L]))
            return null;
        var q = JSON.stringify(f, function(ie, E) {
          var le = oe(E);
          return le === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + F + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + R + "`, expected one of " + q + "."));
      }
      return S(_);
    }
    function D(f) {
      function _(j, A, R, F, I) {
        if (typeof f != "function")
          return new h("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new h("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected an object."));
        for (var q in M)
          if (l(M, q)) {
            var B = f(M, q, R, F, I + "." + q, b);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return S(_);
    }
    function U(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var _ = 0; _ < f.length; _++) {
        var j = f[_];
        if (typeof j != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(j) + " at index " + _ + "."
          ), o;
      }
      function A(R, F, I, M, L) {
        for (var q = [], B = 0; B < f.length; B++) {
          var ie = f[B], E = ie(R, F, I, M, L, b);
          if (E == null)
            return null;
          E.data && l(E.data, "expectedType") && q.push(E.data.expectedType);
        }
        var le = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new h("Invalid " + M + " `" + L + "` supplied to " + ("`" + I + "`" + le + "."));
      }
      return S(A);
    }
    function Q() {
      function f(_, j, A, R, F) {
        return H(_[j]) ? null : new h("Invalid " + R + " `" + F + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return S(f);
    }
    function z(f, _, j, A, R) {
      return new h(
        (f || "React class") + ": " + _ + " type `" + j + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function ae(f) {
      function _(j, A, R, F, I) {
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new h("Invalid " + F + " `" + I + "` of type `" + L + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var q in f) {
          var B = f[q];
          if (typeof B != "function")
            return z(R, F, I, q, oe(B));
          var ie = B(M, q, R, F, I + "." + q, b);
          if (ie)
            return ie;
        }
        return null;
      }
      return S(_);
    }
    function J(f) {
      function _(j, A, R, F, I) {
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new h("Invalid " + F + " `" + I + "` of type `" + L + "` " + ("supplied to `" + R + "`, expected `object`."));
        var q = m({}, j[A], f);
        for (var B in q) {
          var ie = f[B];
          if (l(f, B) && typeof ie != "function")
            return z(R, F, I, B, oe(ie));
          if (!ie)
            return new h(
              "Invalid " + F + " `" + I + "` key `" + B + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(j[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var E = ie(M, B, R, F, I + "." + B, b);
          if (E)
            return E;
        }
        return null;
      }
      return S(_);
    }
    function H(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(H);
          if (f === null || r(f))
            return !0;
          var _ = u(f);
          if (_) {
            var j = _.call(f), A;
            if (_ !== f.entries) {
              for (; !(A = j.next()).done; )
                if (!H(A.value))
                  return !1;
            } else
              for (; !(A = j.next()).done; ) {
                var R = A.value;
                if (R && !H(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(f, _) {
      return f === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ee(f) {
      var _ = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : te(_, f) ? "symbol" : _;
    }
    function oe(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var _ = ee(f);
      if (_ === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ce(f) {
      var _ = oe(f);
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
    function se(f) {
      return !f.constructor || !f.constructor.name ? y : f.constructor.name;
    }
    return s.checkPropTypes = d, s.resetWarningCache = d.resetWarningCache, s.PropTypes = s, s;
  }, qe;
}
var Ne, mr;
function nt() {
  if (mr)
    return Ne;
  mr = 1;
  var t = ze();
  function m() {
  }
  function b() {
  }
  return b.resetWarningCache = m, Ne = function() {
    function l(o, r, i, n, a, u) {
      if (u !== t) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    l.isRequired = l;
    function d() {
      return l;
    }
    var c = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: d,
      element: l,
      elementType: l,
      instanceOf: d,
      node: l,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: b,
      resetWarningCache: m
    };
    return c.PropTypes = c, c;
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
function it({ children: t }) {
  const [m, b] = Ee(""), [l, d] = Ee(), r = {
    audioStatus: m,
    audioRecording: l,
    updateAudioStatus: (i) => b(i),
    updateAudioRecording: (i) => d(i)
  };
  return /* @__PURE__ */ Z(Sr.Provider, { value: r, children: t });
}
function xe() {
  const t = _r(Sr);
  if (t === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return t;
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
function ut({ userPropsValue: t, children: m }) {
  return /* @__PURE__ */ Z(Rr.Provider, { value: t, children: m });
}
function je() {
  const t = _r(Rr);
  if (t === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return t;
}
const ct = (t) => {
  if (!t.length)
    return null;
  const m = [];
  return t.forEach((b) => {
    const l = document.getElementById(b);
    return l && m.push(l), l;
  }), m.length ? m : null;
}, st = (t) => {
  t && t.forEach((m) => {
    m.remove();
  });
}, lt = (t) => t.map((b) => {
  const l = document.createElement("canvas");
  return l.setAttribute("id", b), l;
}), ft = (t, m) => {
  t.forEach((b) => {
    const l = b.getContext("2d");
    l && (l.clearRect(0, 0, b.width, b.height), l.clearRect(0, 0, b.width, b.height), b.width = ((m == null ? void 0 : m.clientWidth) ?? 1) * devicePixelRatio, b.height = ((m == null ? void 0 : m.clientHeight) ?? 1) * devicePixelRatio, l == null || l.scale(devicePixelRatio, devicePixelRatio));
  });
}, dt = (t, m) => {
  t.forEach((b) => {
    b.style.width = (m == null ? void 0 : m.clientWidth) + "px", b.style.height = (m == null ? void 0 : m.clientHeight) + "px";
  });
}, pt = (t, m) => {
  t.forEach((b) => {
    m == null || m.appendChild(b);
  });
}, xr = (t, m) => {
  try {
    const b = document.querySelector(m), l = ct(t);
    st(l);
    const d = lt(t);
    return ft(d, b), dt(d, b), pt(d, b), d;
  } catch (b) {
    return console.error("Error in setUpCanvas: ", b), null;
  }
}, Oe = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, vt = (t, m, b) => {
  const l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  if (!l)
    return Oe;
  const d = parseInt(l[1], 16), c = parseInt(l[2], 16), o = parseInt(l[3], 16);
  if (m && b) {
    const r = Math.round(d * m / 100), i = Math.round(c * m / 100), n = Math.round(o * m / 100);
    return {
      solid: `rgb(${r}, ${i}, ${n})`,
      faded: `rgb(${r}, ${i}, ${n}, 0.5)`
    };
  }
  return {
    solid: `rgb(${d}, ${c}, ${o})`,
    faded: `rgb(${d}, ${c}, ${o}, 0.5)`
  };
}, yt = (t) => {
  const m = new Option().style;
  return m.color = t, m.color == t;
}, ht = (t) => {
  const m = {
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
  return typeof m[t.toLowerCase()] < "u" ? m[t.toLowerCase()] : "#000";
}, Ue = (t, m, b) => {
  try {
    if (!t || !yt(t))
      return Oe;
    const l = ht(t);
    return vt(l, m, b);
  } catch {
    return Oe;
  }
};
const gt = 100, br = 2;
function mt() {
  const { audioStatus: t = "", updateAudioRecording: m } = xe(), { graphColor: b, graphShaded: l } = je(), [d, c] = Ee(0), o = ve(null), r = ve({}), i = ve(t);
  de(() => {
    var s, g, h, S, P, O, x, C, v, X, T, D;
    i.current = t, t === "recording" && (((g = (s = r == null ? void 0 : r.current) == null ? void 0 : s.audioContext) == null ? void 0 : g.state) === "suspended" ? (r.current.audioContext.resume().then(u), (S = (h = r.current) == null ? void 0 : h.mediaRecorder) == null || S.resume()) : (O = (P = r == null ? void 0 : r.current) == null ? void 0 : P.audioContext) != null && O.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(a)), t === "stopped" && ((C = (x = r == null ? void 0 : r.current) == null ? void 0 : x.mediaRecorder) == null || C.stop()), t === "paused_recording" && ((X = (v = r == null ? void 0 : r.current) == null ? void 0 : v.audioContext) == null || X.suspend(), (D = (T = r == null ? void 0 : r.current) == null ? void 0 : T.mediaRecorder) == null || D.pause());
  }, [t]), de(() => {
    n(), window.addEventListener("resize", n);
  }, []);
  const n = () => {
    const s = xr(["waveformgraph-record"], ".voice-recorder_recordcontainer");
    s && (o.current = s[0]);
  }, a = (s) => {
    var g;
    try {
      const h = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), S = new h();
      r.current.audioContext = S;
      const P = S.createMediaStreamSource(s);
      r.current.analyserNode = S.createAnalyser(), P.connect((g = r == null ? void 0 : r.current) == null ? void 0 : g.analyserNode), r.current.analyserNode.fftSize = 128;
      const O = r.current.analyserNode.frequencyBinCount, x = new Float32Array(O);
      r.current.dataArray = x;
      const C = new MediaRecorder(s);
      r.current.mediaRecorder = C, C.start(), C.addEventListener("dataavailable", async (v) => {
        const X = await v.data.arrayBuffer(), T = await S.decodeAudioData(X), D = { blob: v.data, duration: T.duration, graphData: r.current.graphData ?? [] };
        m(D);
      }), C.addEventListener("stop", () => {
        s.getTracks().forEach((v) => v.stop()), P.disconnect(), S.close();
      }), u();
    } catch (h) {
      console.log("error", h);
    }
  }, u = () => {
    var h, S, P, O, x, C, v, X, T, D, U;
    const s = (h = o == null ? void 0 : o.current) == null ? void 0 : h.getContext("2d");
    if (i.current !== "recording")
      return null;
    s == null || s.clearRect(0, 0, ((S = o == null ? void 0 : o.current) == null ? void 0 : S.width) ?? 1, ((P = o == null ? void 0 : o.current) == null ? void 0 : P.height) ?? 1);
    let g = -1 / 0;
    if (Number(performance.now()) > d) {
      if (c(Number(performance.now() / gt)), !((O = r == null ? void 0 : r.current) != null && O.dataArray))
        return null;
      (v = (x = r == null ? void 0 : r.current) == null ? void 0 : x.analyserNode) == null || v.getFloatTimeDomainData((C = r == null ? void 0 : r.current) == null ? void 0 : C.dataArray), g = Math.max(0, ...((X = r == null ? void 0 : r.current) == null ? void 0 : X.dataArray) ?? []);
      const Q = Math.max(1, Math.floor(g * 350));
      r.current.graphData === void 0 && (r.current.graphData = []), (U = r.current) == null || U.graphData.push({
        x: ((T = o == null ? void 0 : o.current) == null ? void 0 : T.offsetWidth) ?? 1,
        y: (((D = o == null ? void 0 : o.current) == null ? void 0 : D.offsetHeight) ?? 1) / 2 - Q / 2,
        height: Q,
        width: br
      });
    }
    y(), requestAnimationFrame(u);
  }, y = () => {
    var g, h, S, P;
    const s = (g = o == null ? void 0 : o.current) == null ? void 0 : g.getContext("2d");
    if (!s || !((h = r.current) != null && h.graphData))
      return null;
    for (let O = 0; O < ((S = r.current) == null ? void 0 : S.graphData.length); O++) {
      const x = (P = r.current) == null ? void 0 : P.graphData[O];
      x && (s.fillStyle = Ue(b, x.height, l).solid, s == null || s.fillRect(x.x, x.y, x.width, x.height), x.x = x.x - br);
    }
  };
  return /* @__PURE__ */ Z("div", { className: "voice-recorder_recordcontainer" });
}
const bt = 0.06;
function wt() {
  const [t, m] = Ee([]), { audioRecording: b, audioStatus: l, updateAudioStatus: d } = xe(), { graphColor: c, graphShaded: o } = je(), r = ve(null), i = ve(null), n = ve(null), a = ve(null), u = ve(), { blob: y, duration: s = 0, graphData: g = [] } = b || {}, h = ve(g);
  de(() => {
    window.addEventListener("resize", v);
  }, []), de(() => {
    y && (l === "playing_requested" ? x() : l === "playing" ? X() : l === "paused_playing" ? (O(), clearInterval(u.current)) : l === "stopped" && clearInterval(u.current));
  }, [l]), de(() => {
    h.current = g;
    try {
      g.length && v();
    } catch (T) {
      console.log("error", T);
    }
  }, [g]);
  const S = (T) => {
    var U, Q, z;
    const D = (U = T == null ? void 0 : T.current) == null ? void 0 : U.getContext("2d");
    D == null || D.clearRect(0, 0, ((Q = T == null ? void 0 : T.current) == null ? void 0 : Q.width) ?? 1, ((z = T == null ? void 0 : T.current) == null ? void 0 : z.height) ?? 1);
  }, P = () => {
    const T = xr([
      "waveformgraph-unplayed-graph",
      "waveformgraph-played-graph",
      "progressbar"
    ], ".voice-recorder_canvascontainer");
    r.current = T == null ? void 0 : T.find((D) => D.id === "waveformgraph-unplayed-graph"), i.current = T == null ? void 0 : T.find((D) => D.id === "waveformgraph-played-graph"), n.current = T == null ? void 0 : T.find((D) => D.id === "progressbar");
  }, O = () => {
    var T;
    return (T = a == null ? void 0 : a.current) == null ? void 0 : T.pause();
  }, x = () => {
    const T = document.querySelector("#playback_audio");
    if (T.readyState !== 4) {
      const D = window.URL.createObjectURL(new Blob([y]));
      T.src = D, T.onloadeddata = () => {
        T.play(), d("playing");
      };
    } else
      T.paused ? (T.play(), d("playing")) : (T.currentTime = 0, T.play(), d("playing"));
    T.onended = () => {
      d("stopped");
    };
  }, C = () => {
    var U;
    const T = [];
    if (!(h != null && h.current.length))
      return T;
    const D = (((U = r == null ? void 0 : r.current) == null ? void 0 : U.offsetWidth) ?? 1) / (h == null ? void 0 : h.current.length);
    return h == null || h.current.forEach((Q, z) => {
      var J;
      const ae = ((J = T[z - 1]) == null ? void 0 : J.x) || 0;
      T.push({
        ...Q,
        x: ae + D,
        width: D
      });
    }), m(T), T;
  }, v = () => {
    var D;
    P();
    const T = (D = r == null ? void 0 : r.current) == null ? void 0 : D.getContext("2d");
    if (T) {
      const U = C();
      for (let Q = 0; Q < U.length; Q++) {
        const z = U[Q];
        T.fillStyle = Ue(c, z.height, o).faded, T.fillRect(z.x, z.y, z.width, z.height);
      }
    }
  }, X = () => {
    var oe, ce, se;
    (((oe = a == null ? void 0 : a.current) == null ? void 0 : oe.currentTime) ?? 1) > 0 || S(i);
    const D = Math.abs(s - bt), U = g.length, Q = D / U * 1e3;
    let z = 0, ae, J;
    const H = (ce = n == null ? void 0 : n.current) == null ? void 0 : ce.getContext("2d"), te = (se = i == null ? void 0 : i.current) == null ? void 0 : se.getContext("2d");
    function ee() {
      var _, j, A, R, F, I, M;
      if (!te || !H || (z = Math.round(U * ((((_ = a == null ? void 0 : a.current) == null ? void 0 : _.currentTime) ?? 1) / D)), J === ((j = a == null ? void 0 : a.current) == null ? void 0 : j.currentTime) || ae === z))
        return;
      if (J = (A = a == null ? void 0 : a.current) == null ? void 0 : A.currentTime, ae = z, z >= U) {
        clearInterval(u.current);
        return;
      }
      const f = t[z];
      te.fillStyle = Ue(c, f.height, o).solid, te == null || te.fillRect(f.x, f.y, f.width, f.height), +f.x.toFixed(3) < (((R = n == null ? void 0 : n.current) == null ? void 0 : R.offsetWidth) ?? 1) && (H == null || H.clearRect(0, 0, ((F = n == null ? void 0 : n.current) == null ? void 0 : F.width) ?? 1, ((I = n == null ? void 0 : n.current) == null ? void 0 : I.height) ?? 1), H == null || H.fillRect(f.x, 0, 1, ((M = n == null ? void 0 : n.current) == null ? void 0 : M.offsetHeight) ?? 1));
    }
    ee(), u.current = setInterval(ee, Q);
  };
  return /* @__PURE__ */ me("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ Z("audio", { ref: a, controls: !0, id: "playback_audio", children: /* @__PURE__ */ Z("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ Z("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function _t() {
  const { audioStatus: t } = xe(), { waveContainerStyle: m } = je(), [b, l] = Ee("");
  return de(() => {
    l(t === "playing" || t === "playing_requested" || t === "paused_playing" || t === "stopped" ? "playing" : "recording");
  }, [t]), /* @__PURE__ */ me("div", { className: "voice-recorder_waveformcontainer", style: m, children: [
    b === "playing" ? /* @__PURE__ */ Z(wt, {}) : null,
    b === "recording" ? /* @__PURE__ */ Z(mt, {}) : null
  ] });
}
const Et = (t) => /* @__PURE__ */ $.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), Tt = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("g", { id: "c98_play" }, /* @__PURE__ */ $.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ $.createElement("g", { id: "Capa_1_78_" })))), St = (t) => /* @__PURE__ */ $.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("title", null, "microphone-filled"), /* @__PURE__ */ $.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ $.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ $.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Rt = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), xt = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ $.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 }))));
var Ye = {}, Ct = {
  get exports() {
    return Ye;
  },
  set exports(t) {
    Ye = t;
  }
};
(function(t, m) {
  (function(b, l) {
    t.exports = l(Ge);
  })(typeof self < "u" ? self : zr, function(b) {
    return function(l) {
      var d = {};
      function c(o) {
        if (d[o])
          return d[o].exports;
        var r = d[o] = { i: o, l: !1, exports: {} };
        return l[o].call(r.exports, r, r.exports, c), r.l = !0, r.exports;
      }
      return c.m = l, c.c = d, c.d = function(o, r, i) {
        c.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: i });
      }, c.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, c.t = function(o, r) {
        if (1 & r && (o = c(o)), 8 & r || 4 & r && typeof o == "object" && o && o.__esModule)
          return o;
        var i = /* @__PURE__ */ Object.create(null);
        if (c.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: o }), 2 & r && typeof o != "string")
          for (var n in o)
            c.d(i, n, function(a) {
              return o[a];
            }.bind(null, n));
        return i;
      }, c.n = function(o) {
        var r = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return c.d(r, "a", r), r;
      }, c.o = function(o, r) {
        return Object.prototype.hasOwnProperty.call(o, r);
      }, c.p = "", c(c.s = 3);
    }([function(l, d) {
      l.exports = b;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.Validate = d.Time = void 0;
      var o = i(c(5)), r = i(c(6));
      function i(n) {
        return n && n.__esModule ? n : { default: n };
      }
      d.Time = o.default, d.Validate = r.default;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.useInterval = void 0;
      var o = function(r) {
        return r && r.__esModule ? r : { default: r };
      }(c(7));
      d.useInterval = o.default;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.useTime = d.useStopwatch = d.useTimer = void 0;
      var o = Object.assign || function(y) {
        for (var s = 1; s < arguments.length; s++) {
          var g = arguments[s];
          for (var h in g)
            Object.prototype.hasOwnProperty.call(g, h) && (y[h] = g[h]);
        }
        return y;
      };
      d.default = function(y) {
        if ((0, r.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), y.expiryTimestamp) {
          var s = (0, i.default)(y);
          return o({}, s, { startTimer: s.start, stopTimer: s.pause, resetTimer: function() {
          } });
        }
        var g = (0, n.default)(y);
        return o({}, g, { startTimer: g.start, stopTimer: g.pause, resetTimer: g.reset });
      };
      var r = c(0), i = u(c(4)), n = u(c(8)), a = u(c(9));
      function u(y) {
        return y && y.__esModule ? y : { default: y };
      }
      d.useTimer = i.default, d.useStopwatch = n.default, d.useTime = a.default;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var o = Object.assign || function(s) {
        for (var g = 1; g < arguments.length; g++) {
          var h = arguments[g];
          for (var S in h)
            Object.prototype.hasOwnProperty.call(h, S) && (s[S] = h[S]);
        }
        return s;
      }, r = function() {
        return function(s, g) {
          if (Array.isArray(s))
            return s;
          if (Symbol.iterator in Object(s))
            return function(h, S) {
              var P = [], O = !0, x = !1, C = void 0;
              try {
                for (var v, X = h[Symbol.iterator](); !(O = (v = X.next()).done) && (P.push(v.value), !S || P.length !== S); O = !0)
                  ;
              } catch (T) {
                x = !0, C = T;
              } finally {
                try {
                  !O && X.return && X.return();
                } finally {
                  if (x)
                    throw C;
                }
              }
              return P;
            }(s, g);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      d.default = function(s) {
        var g = s.expiryTimestamp, h = s.onExpire, S = s.autoStart, P = S === void 0 || S, O = (0, i.useState)(g), x = r(O, 2), C = x[0], v = x[1], X = (0, i.useState)(n.Time.getSecondsFromExpiry(C)), T = r(X, 2), D = T[0], U = T[1], Q = (0, i.useState)(P), z = r(Q, 2), ae = z[0], J = z[1], H = (0, i.useState)(P), te = r(H, 2), ee = te[0], oe = te[1], ce = (0, i.useState)(y(C)), se = r(ce, 2), f = se[0], _ = se[1];
        function j(R) {
          var F = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          _(y(R)), oe(F), J(F), v(R), U(n.Time.getSecondsFromExpiry(R));
        }
        function A() {
          var R = /* @__PURE__ */ new Date();
          R.setMilliseconds(R.getMilliseconds() + 1e3 * D), j(R);
        }
        return (0, a.useInterval)(function() {
          f !== u && _(u);
          var R = n.Time.getSecondsFromExpiry(C);
          U(R), R <= 0 && (n.Validate.onExpire(h) && h(), J(!1), _(null));
        }, ae ? f : null), o({}, n.Time.getTimeFromSeconds(D), { start: function() {
          ee ? (U(n.Time.getSecondsFromExpiry(C)), J(!0)) : A();
        }, pause: function() {
          J(!1);
        }, resume: A, restart: j, isRunning: ae });
      };
      var i = c(0), n = c(1), a = c(2), u = 1e3;
      function y(s) {
        if (!n.Validate.expiryTimestamp(s))
          return null;
        var g = n.Time.getSecondsFromExpiry(s), h = Math.floor(1e3 * (g - Math.floor(g)));
        return h > 0 ? h : u;
      }
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var o = function() {
        function i(n, a) {
          for (var u = 0; u < a.length; u++) {
            var y = a[u];
            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(n, y.key, y);
          }
        }
        return function(n, a, u) {
          return a && i(n.prototype, a), u && i(n, u), n;
        };
      }(), r = function() {
        function i() {
          (function(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          })(this, i);
        }
        return o(i, null, [{ key: "getTimeFromSeconds", value: function(n) {
          var a = Math.ceil(n), u = Math.floor(a / 86400), y = Math.floor(a % 86400 / 3600), s = Math.floor(a % 3600 / 60);
          return { seconds: Math.floor(a % 60), minutes: s, hours: y, days: u };
        } }, { key: "getSecondsFromExpiry", value: function(n, a) {
          var u = n - (/* @__PURE__ */ new Date()).getTime();
          if (u > 0) {
            var y = u / 1e3;
            return a ? Math.round(y) : y;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(n, a) {
          var u = (/* @__PURE__ */ new Date()).getTime() - n;
          if (u > 0) {
            var y = u / 1e3;
            return a ? Math.round(y) : y;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var n = /* @__PURE__ */ new Date();
          return n.getTime() / 1e3 - 60 * n.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(n, a) {
          var u = i.getTimeFromSeconds(n), y = u.seconds, s = u.minutes, g = u.hours, h = "", S = g;
          return a === "12-hour" && (h = g >= 12 ? "pm" : "am", S = g % 12), { seconds: y, minutes: s, hours: S, ampm: h };
        } }]), i;
      }();
      d.default = r;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var o = function() {
        function i(n, a) {
          for (var u = 0; u < a.length; u++) {
            var y = a[u];
            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(n, y.key, y);
          }
        }
        return function(n, a, u) {
          return a && i(n.prototype, a), u && i(n, u), n;
        };
      }(), r = function() {
        function i() {
          (function(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          })(this, i);
        }
        return o(i, null, [{ key: "expiryTimestamp", value: function(n) {
          var a = new Date(n).getTime() > 0;
          return a || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", n), a;
        } }, { key: "onExpire", value: function(n) {
          var a = n && typeof n == "function";
          return n && !a && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", n), a;
        } }]), i;
      }();
      d.default = r;
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.default = function(r, i) {
        var n = (0, o.useRef)();
        (0, o.useEffect)(function() {
          n.current = r;
        }), (0, o.useEffect)(function() {
          if (!i)
            return function() {
            };
          var a = setInterval(function() {
            n.current && n.current();
          }, i);
          return function() {
            return clearInterval(a);
          };
        }, [i]);
      };
      var o = c(0);
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var o = Object.assign || function(u) {
        for (var y = 1; y < arguments.length; y++) {
          var s = arguments[y];
          for (var g in s)
            Object.prototype.hasOwnProperty.call(s, g) && (u[g] = s[g]);
        }
        return u;
      }, r = function() {
        return function(u, y) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(s, g) {
              var h = [], S = !0, P = !1, O = void 0;
              try {
                for (var x, C = s[Symbol.iterator](); !(S = (x = C.next()).done) && (h.push(x.value), !g || h.length !== g); S = !0)
                  ;
              } catch (v) {
                P = !0, O = v;
              } finally {
                try {
                  !S && C.return && C.return();
                } finally {
                  if (P)
                    throw O;
                }
              }
              return h;
            }(u, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      d.default = function(u) {
        var y = u.autoStart, s = u.offsetTimestamp, g = (0, i.useState)(n.Time.getSecondsFromExpiry(s, !0) || 0), h = r(g, 2), S = h[0], P = h[1], O = (0, i.useState)(/* @__PURE__ */ new Date()), x = r(O, 2), C = x[0], v = x[1], X = (0, i.useState)(S + n.Time.getSecondsFromPrevTime(C || 0, !0)), T = r(X, 2), D = T[0], U = T[1], Q = (0, i.useState)(y), z = r(Q, 2), ae = z[0], J = z[1];
        return (0, a.useInterval)(function() {
          U(S + n.Time.getSecondsFromPrevTime(C, !0));
        }, ae ? 1e3 : null), o({}, n.Time.getTimeFromSeconds(D), { start: function() {
          var H = /* @__PURE__ */ new Date();
          v(H), J(!0), U(S + n.Time.getSecondsFromPrevTime(H, !0));
        }, pause: function() {
          P(D), J(!1);
        }, reset: function() {
          var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, te = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], ee = n.Time.getSecondsFromExpiry(H, !0) || 0, oe = /* @__PURE__ */ new Date();
          v(oe), P(ee), J(te), U(ee + n.Time.getSecondsFromPrevTime(oe, !0));
        }, isRunning: ae });
      };
      var i = c(0), n = c(1), a = c(2);
    }, function(l, d, c) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var o = Object.assign || function(u) {
        for (var y = 1; y < arguments.length; y++) {
          var s = arguments[y];
          for (var g in s)
            Object.prototype.hasOwnProperty.call(s, g) && (u[g] = s[g]);
        }
        return u;
      }, r = function() {
        return function(u, y) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(s, g) {
              var h = [], S = !0, P = !1, O = void 0;
              try {
                for (var x, C = s[Symbol.iterator](); !(S = (x = C.next()).done) && (h.push(x.value), !g || h.length !== g); S = !0)
                  ;
              } catch (v) {
                P = !0, O = v;
              } finally {
                try {
                  !S && C.return && C.return();
                } finally {
                  if (P)
                    throw O;
                }
              }
              return h;
            }(u, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      d.default = function(u) {
        var y = u.format, s = (0, i.useState)(n.Time.getSecondsFromTimeNow()), g = r(s, 2), h = g[0], S = g[1];
        return (0, a.useInterval)(function() {
          S(n.Time.getSecondsFromTimeNow());
        }, 1e3), o({}, n.Time.getFormattedTimeFromSeconds(h, y));
      };
      var i = c(0), n = c(1), a = c(2);
    }]);
  });
})(Ct);
const Pt = (t) => /* @__PURE__ */ $.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function Ot() {
  const { audioStatus: t } = xe(), {
    seconds: m,
    minutes: b,
    hours: l,
    start: d,
    pause: c,
    reset: o
  } = Ye.useStopwatch({ autoStart: !1 });
  de(() => {
    t === "recording" ? d() : t === "paused_playing" || t === "paused_recording" || t === "stopped" ? c() : o();
  }, [t]);
  const r = (i) => i.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ me("div", { className: `voice-recorder_stopcontainer ${t === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ Z("div", { className: "voice-recorder_control", children: /* @__PURE__ */ Z(Pt, {}) }),
    /* @__PURE__ */ me("div", { className: "voice-recorder_stopwatch", children: [
      l ? /* @__PURE__ */ Z("span", { children: l }) : null,
      /* @__PURE__ */ Z("span", { children: r(b) }),
      ":",
      /* @__PURE__ */ Z("span", { children: r(m) })
    ] })
  ] });
}
const he = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
};
function kt() {
  const { audioStatus: t, updateAudioStatus: m, audioRecording: b } = xe(), {
    controllerContainerStyle: l,
    controllerStyle: d,
    downloadable: c,
    onAudioDownload: o
  } = je(), [r, i] = Ee(he), n = ({ svg: s, disabled: g, status: h, onClick: S, applyCircularStyles: P = !0, display: O = !0 }) => !h || !O ? null : /* @__PURE__ */ Z("button", { onClick: S, disabled: g, className: `${P ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`, style: d, children: s }), a = (s) => () => {
    m(s);
  }, u = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(a("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  };
  de(() => {
    const s = document.querySelector(".voice-recorder_maincontainer"), g = document.querySelector(".voice-recorder_controlscontainer");
    if (s && g) {
      const { height: h } = s.getBoundingClientRect();
      g.style.height = `${h / 3}px`;
    }
  }, []);
  const y = () => {
    const { blob: s = "" } = b || {};
    if (!s)
      return null;
    const g = URL.createObjectURL(s), h = document.querySelector(".voice-recorder_downloadfile");
    h.href = g, h.download = "audio.wav", h.click();
  };
  return de(() => {
    if (b) {
      const { blob: s = "" } = b || {};
      if (!s || !o)
        return;
      o(s);
    }
  }, [b]), de(() => {
    switch (t) {
      case "":
        i({
          ...he,
          showRecordBtn: !0
        });
        break;
      case "recording":
        i({
          ...he,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      case "paused_recording":
        i({
          ...he,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      case "paused_playing":
        i({
          ...he,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      case "playing":
      case "stopped":
        i({
          ...he,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      default:
        i(he);
    }
  }, [t]), /* @__PURE__ */ me("div", { className: "voice-recorder_controlscontainer", style: l, children: [
    /* @__PURE__ */ me("div", { className: "voice-recorder_controls", children: [
      n({
        svg: /* @__PURE__ */ Z(St, {}),
        disabled: !1,
        status: r.showRecordBtn,
        onClick: u
      }),
      n({
        svg: /* @__PURE__ */ Z(Et, {}),
        disabled: t === "stopped" || t === "paused_recording" || t === "paused_playing",
        status: r.showPauseBtn,
        onClick: a(
          t === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      n({
        svg: /* @__PURE__ */ Z(Tt, {}),
        disabled: !1,
        status: r.showPlayBtn,
        onClick: a("playing_requested")
      }),
      n({
        svg: /* @__PURE__ */ Z(Ot, {}),
        disabled: !1,
        status: r.showStopBtn,
        onClick: a("stopped"),
        applyCircularStyles: !1
      }),
      n({
        svg: /* @__PURE__ */ Z(Rt, {}),
        disabled: !1,
        status: r.showRedoBtn,
        onClick: a("")
      }),
      /* @__PURE__ */ Z("div", { className: "voice-recorder_download", children: n({
        svg: /* @__PURE__ */ Z(xt, {}),
        disabled: !1,
        status: r.showRedoBtn,
        onClick: y,
        display: c
      }) })
    ] }),
    /* @__PURE__ */ Z("a", { download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const At = (t) => {
  const {
    mainContainerStyle: m,
    height: b,
    width: l,
    ...d
  } = t, c = {
    ...m,
    height: b,
    width: l
  };
  return /* @__PURE__ */ Z(it, { children: /* @__PURE__ */ Z(ut, { userPropsValue: d, children: /* @__PURE__ */ me("div", { className: "voice-recorder_maincontainer", style: c, children: [
    /* @__PURE__ */ Z(_t, {}),
    /* @__PURE__ */ Z(kt, {})
  ] }) }) });
};
At.propTypes = {
  mainContainerStyle: ge.object,
  height: ge.string || ge.number,
  width: ge.string || ge.number
};
export {
  At as VoiceRecorder
};
