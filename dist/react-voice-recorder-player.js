(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto;justify-content:end}@-webkit-keyframes rotating{0%{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating{0%{-ms-transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.voice-recorder_controlscontainer .voice-recorder_rotate{-webkit-animation:rotating 1.5s linear infinite;-moz-animation:rotating 1.5s linear infinite;-ms-animation:rotating 1.5s linear infinite;-o-animation:rotating 1.5s linear infinite;animation:rotating 1.5s linear infinite}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as B from "react";
import ze, { createContext as br, useState as ge, useContext as wr, useRef as ue, useEffect as pe, useId as zr } from "react";
var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
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
var ur;
function Xr() {
  if (ur)
    return Te;
  ur = 1;
  var t = ze, h = Symbol.for("react.element"), b = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, n, r) {
    var c, o = {}, i = null, g = null;
    r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), n.ref !== void 0 && (g = n.ref);
    for (c in n)
      d.call(n, c) && !s.hasOwnProperty(c) && (o[c] = n[c]);
    if (a && a.defaultProps)
      for (c in n = a.defaultProps, n)
        o[c] === void 0 && (o[c] = n[c]);
    return { $$typeof: h, type: a, key: i, ref: g, props: o, _owner: u.current };
  }
  return Te.Fragment = b, Te.jsx = l, Te.jsxs = l, Te;
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
var sr;
function Zr() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ze, h = Symbol.for("react.element"), b = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), r = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var p = m && e[m] || e[y];
      return typeof p == "function" ? p : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), j = 1; j < p; j++)
          E[j - 1] = arguments[j];
        O("error", e, E);
      }
    }
    function O(e, p, E) {
      {
        var j = C.ReactDebugCurrentFrame, z = j.getStackAddendum();
        z !== "" && (p += "%s", E = E.concat([z]));
        var ee = E.map(function(Y) {
          return String(Y);
        });
        ee.unshift("Warning: " + p), Function.prototype.apply.call(console[e], console, ee);
      }
    }
    var R = !1, f = !1, W = !1, M = !1, H = !1, S;
    S = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === s || H || e === u || e === r || e === c || M || e === g || R || f || W || typeof e == "object" && e !== null && (e.$$typeof === i || e.$$typeof === o || e.$$typeof === l || e.$$typeof === a || e.$$typeof === n || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === S || e.getModuleId !== void 0));
    }
    function G(e, p, E) {
      var j = e.displayName;
      if (j)
        return j;
      var z = p.displayName || p.name || "";
      return z !== "" ? E + "(" + z + ")" : E;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case b:
          return "Portal";
        case s:
          return "Profiler";
        case u:
          return "StrictMode";
        case r:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var p = e;
            return Q(p) + ".Consumer";
          case l:
            var E = e;
            return Q(E._context) + ".Provider";
          case n:
            return G(e, e.render, "ForwardRef");
          case o:
            var j = e.displayName || null;
            return j !== null ? j : $(e.type) || "Memo";
          case i: {
            var z = e, ee = z._payload, Y = z._init;
            try {
              return $(Y(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, oe = 0, re, te, se, le, v, _, k;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function P() {
      {
        if (oe === 0) {
          re = console.log, te = console.info, se = console.warn, le = console.error, v = console.group, _ = console.groupCollapsed, k = console.groupEnd;
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
    function L() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: re
            }),
            info: K({}, e, {
              value: te
            }),
            warn: K({}, e, {
              value: se
            }),
            error: K({}, e, {
              value: le
            }),
            group: K({}, e, {
              value: v
            }),
            groupCollapsed: K({}, e, {
              value: _
            }),
            groupEnd: K({}, e, {
              value: k
            })
          });
        }
        oe < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = C.ReactCurrentDispatcher, D;
    function V(e, p, E) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (z) {
            var j = z.stack.trim().match(/\n( *(at )?)/);
            D = j && j[1] || "";
          }
        return `
` + D + e;
      }
    }
    var U = !1, N;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      N = new ie();
    }
    function T(e, p) {
      if (!e || U)
        return "";
      {
        var E = N.get(e);
        if (E !== void 0)
          return E;
      }
      var j;
      U = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = F.current, F.current = null, P();
      try {
        if (p) {
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
              j = ve;
            }
            Reflect.construct(e, [], Y);
          } else {
            try {
              Y.call();
            } catch (ve) {
              j = ve;
            }
            e.call(Y.prototype);
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
          for (var q = ve.stack.split(`
`), ce = j.stack.split(`
`), ne = q.length - 1, ae = ce.length - 1; ne >= 1 && ae >= 0 && q[ne] !== ce[ae]; )
            ae--;
          for (; ne >= 1 && ae >= 0; ne--, ae--)
            if (q[ne] !== ce[ae]) {
              if (ne !== 1 || ae !== 1)
                do
                  if (ne--, ae--, ae < 0 || q[ne] !== ce[ae]) {
                    var de = `
` + q[ne].replace(" at new ", " at ");
                    return e.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, de), de;
                  }
                while (ne >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        U = !1, F.current = ee, L(), Error.prepareStackTrace = z;
      }
      var Ee = e ? e.displayName || e.name : "", cr = Ee ? V(Ee) : "";
      return typeof e == "function" && N.set(e, cr), cr;
    }
    function fe(e, p, E) {
      return T(e, !1);
    }
    function be(e) {
      var p = e.prototype;
      return !!(p && p.isReactComponent);
    }
    function me(e, p, E) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return T(e, be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case r:
          return V("Suspense");
        case c:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            return fe(e.render);
          case o:
            return me(e.type, p, E);
          case i: {
            var j = e, z = j._payload, ee = j._init;
            try {
              return me(ee(z), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Je = {}, Xe = C.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var p = e._owner, E = me(e.type, e._source, p ? p.type : null);
        Xe.setExtraStackFrame(E);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Rr(e, p, E, j, z) {
      {
        var ee = Function.call.bind(Pe);
        for (var Y in e)
          if (ee(e, Y)) {
            var q = void 0;
            try {
              if (typeof e[Y] != "function") {
                var ce = Error((j || "React class") + ": " + E + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              q = e[Y](p, Y, j, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              q = ne;
            }
            q && !(q instanceof Error) && (Oe(z), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", E, Y, typeof q), Oe(null)), q instanceof Error && !(q.message in Je) && (Je[q.message] = !0, Oe(z), x("Failed %s type: %s", E, q.message), Oe(null));
          }
      }
    }
    var Pr = Array.isArray;
    function Me(e) {
      return Pr(e);
    }
    function Or(e) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, E = p && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return E;
      }
    }
    function Ar(e) {
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
      if (Ar(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Ze(e);
    }
    var _e = C.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, er, Ie;
    Ie = {};
    function jr(e) {
      if (Pe.call(e, "ref")) {
        var p = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Mr(e) {
      if (Pe.call(e, "key")) {
        var p = Object.getOwnPropertyDescriptor(e, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ir(e, p) {
      if (typeof e.ref == "string" && _e.current && p && _e.current.stateNode !== p) {
        var E = $(_e.current.type);
        Ie[E] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(_e.current.type), e.ref), Ie[E] = !0);
      }
    }
    function Fr(e, p) {
      {
        var E = function() {
          Qe || (Qe = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        E.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Dr(e, p) {
      {
        var E = function() {
          er || (er = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        E.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Br = function(e, p, E, j, z, ee, Y) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: p,
        ref: E,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function $r(e, p, E, j, z) {
      {
        var ee, Y = {}, q = null, ce = null;
        E !== void 0 && (Ke(E), q = "" + E), Mr(p) && (Ke(p.key), q = "" + p.key), jr(p) && (ce = p.ref, Ir(p, z));
        for (ee in p)
          Pe.call(p, ee) && !kr.hasOwnProperty(ee) && (Y[ee] = p[ee]);
        if (e && e.defaultProps) {
          var ne = e.defaultProps;
          for (ee in ne)
            Y[ee] === void 0 && (Y[ee] = ne[ee]);
        }
        if (q || ce) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          q && Fr(Y, ae), ce && Dr(Y, ae);
        }
        return Br(e, q, ce, z, j, _e.current, Y);
      }
    }
    var Fe = C.ReactCurrentOwner, rr = C.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var p = e._owner, E = me(e.type, e._source, p ? p.type : null);
        rr.setExtraStackFrame(E);
      } else
        rr.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function tr() {
      {
        if (Fe.current) {
          var e = $(Fe.current.type);
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
          var p = e.fileName.replace(/^.*[\\\/]/, ""), E = e.lineNumber;
          return `

Check your code at ` + p + ":" + E + ".";
        }
        return "";
      }
    }
    var nr = {};
    function Vr(e) {
      {
        var p = tr();
        if (!p) {
          var E = typeof e == "string" ? e : e.displayName || e.name;
          E && (p = `

Check the top-level render call using <` + E + ">.");
        }
        return p;
      }
    }
    function or(e, p) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var E = Vr(p);
        if (nr[E])
          return;
        nr[E] = !0;
        var j = "";
        e && e._owner && e._owner !== Fe.current && (j = " It was passed a child from " + $(e._owner.type) + "."), we(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), we(null);
      }
    }
    function ar(e, p) {
      {
        if (typeof e != "object")
          return;
        if (Me(e))
          for (var E = 0; E < e.length; E++) {
            var j = e[E];
            Be(j) && or(j, p);
          }
        else if (Be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var z = w(e);
          if (typeof z == "function" && z !== e.entries)
            for (var ee = z.call(e), Y; !(Y = ee.next()).done; )
              Be(Y.value) && or(Y.value, p);
        }
      }
    }
    function Nr(e) {
      {
        var p = e.type;
        if (p == null || typeof p == "string")
          return;
        var E;
        if (typeof p == "function")
          E = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === n || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === o))
          E = p.propTypes;
        else
          return;
        if (E) {
          var j = $(p);
          Rr(E, e.props, "prop", j, e);
        } else if (p.PropTypes !== void 0 && !De) {
          De = !0;
          var z = $(p);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(e) {
      {
        for (var p = Object.keys(e.props), E = 0; E < p.length; E++) {
          var j = p[E];
          if (j !== "children" && j !== "key") {
            we(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ir(e, p, E, j, z, ee) {
      {
        var Y = A(e);
        if (!Y) {
          var q = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Lr(z);
          ce ? q += ce : q += tr();
          var ne;
          e === null ? ne = "null" : Me(e) ? ne = "array" : e !== void 0 && e.$$typeof === h ? (ne = "<" + ($(e.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, q);
        }
        var ae = $r(e, p, E, z, ee);
        if (ae == null)
          return ae;
        if (Y) {
          var de = p.children;
          if (de !== void 0)
            if (j)
              if (Me(de)) {
                for (var Ee = 0; Ee < de.length; Ee++)
                  ar(de[Ee], e);
                Object.freeze && Object.freeze(de);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(de, e);
        }
        return e === d ? Ur(ae) : Nr(ae), ae;
      }
    }
    function qr(e, p, E) {
      return ir(e, p, E, !0);
    }
    function Wr(e, p, E) {
      return ir(e, p, E, !1);
    }
    var Yr = Wr, Gr = qr;
    Se.Fragment = d, Se.jsx = Yr, Se.jsxs = Gr;
  }()), Se;
}
process.env.NODE_ENV === "production" ? We.exports = Xr() : We.exports = Zr();
var Er = We.exports;
const Z = Er.jsx, he = Er.jsxs;
var Ye = { exports: {} }, Ae = { exports: {} }, J = {};
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
  var t = typeof Symbol == "function" && Symbol.for, h = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, n = t ? Symbol.for("react.async_mode") : 60111, r = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, o = t ? Symbol.for("react.suspense") : 60113, i = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, w = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, x = t ? Symbol.for("react.scope") : 60119;
  function O(f) {
    if (typeof f == "object" && f !== null) {
      var W = f.$$typeof;
      switch (W) {
        case h:
          switch (f = f.type, f) {
            case n:
            case r:
            case d:
            case s:
            case u:
            case o:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case c:
                case m:
                case g:
                case l:
                  return f;
                default:
                  return W;
              }
          }
        case b:
          return W;
      }
    }
  }
  function R(f) {
    return O(f) === r;
  }
  return J.AsyncMode = n, J.ConcurrentMode = r, J.ContextConsumer = a, J.ContextProvider = l, J.Element = h, J.ForwardRef = c, J.Fragment = d, J.Lazy = m, J.Memo = g, J.Portal = b, J.Profiler = s, J.StrictMode = u, J.Suspense = o, J.isAsyncMode = function(f) {
    return R(f) || O(f) === n;
  }, J.isConcurrentMode = R, J.isContextConsumer = function(f) {
    return O(f) === a;
  }, J.isContextProvider = function(f) {
    return O(f) === l;
  }, J.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === h;
  }, J.isForwardRef = function(f) {
    return O(f) === c;
  }, J.isFragment = function(f) {
    return O(f) === d;
  }, J.isLazy = function(f) {
    return O(f) === m;
  }, J.isMemo = function(f) {
    return O(f) === g;
  }, J.isPortal = function(f) {
    return O(f) === b;
  }, J.isProfiler = function(f) {
    return O(f) === s;
  }, J.isStrictMode = function(f) {
    return O(f) === u;
  }, J.isSuspense = function(f) {
    return O(f) === o;
  }, J.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === d || f === r || f === s || f === u || f === o || f === i || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === g || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === w || f.$$typeof === C || f.$$typeof === x || f.$$typeof === y);
  }, J.typeOf = O, J;
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
    var t = typeof Symbol == "function" && Symbol.for, h = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, d = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, n = t ? Symbol.for("react.async_mode") : 60111, r = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, o = t ? Symbol.for("react.suspense") : 60113, i = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, w = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, x = t ? Symbol.for("react.scope") : 60119;
    function O(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === d || T === r || T === s || T === u || T === o || T === i || typeof T == "object" && T !== null && (T.$$typeof === m || T.$$typeof === g || T.$$typeof === l || T.$$typeof === a || T.$$typeof === c || T.$$typeof === w || T.$$typeof === C || T.$$typeof === x || T.$$typeof === y);
    }
    function R(T) {
      if (typeof T == "object" && T !== null) {
        var fe = T.$$typeof;
        switch (fe) {
          case h:
            var be = T.type;
            switch (be) {
              case n:
              case r:
              case d:
              case s:
              case u:
              case o:
                return be;
              default:
                var me = be && be.$$typeof;
                switch (me) {
                  case a:
                  case c:
                  case m:
                  case g:
                  case l:
                    return me;
                  default:
                    return fe;
                }
            }
          case b:
            return fe;
        }
      }
    }
    var f = n, W = r, M = a, H = l, S = h, A = c, G = d, Q = m, $ = g, K = b, oe = s, re = u, te = o, se = !1;
    function le(T) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(T) || R(T) === n;
    }
    function v(T) {
      return R(T) === r;
    }
    function _(T) {
      return R(T) === a;
    }
    function k(T) {
      return R(T) === l;
    }
    function I(T) {
      return typeof T == "object" && T !== null && T.$$typeof === h;
    }
    function P(T) {
      return R(T) === c;
    }
    function L(T) {
      return R(T) === d;
    }
    function F(T) {
      return R(T) === m;
    }
    function D(T) {
      return R(T) === g;
    }
    function V(T) {
      return R(T) === b;
    }
    function U(T) {
      return R(T) === s;
    }
    function N(T) {
      return R(T) === u;
    }
    function ie(T) {
      return R(T) === o;
    }
    X.AsyncMode = f, X.ConcurrentMode = W, X.ContextConsumer = M, X.ContextProvider = H, X.Element = S, X.ForwardRef = A, X.Fragment = G, X.Lazy = Q, X.Memo = $, X.Portal = K, X.Profiler = oe, X.StrictMode = re, X.Suspense = te, X.isAsyncMode = le, X.isConcurrentMode = v, X.isContextConsumer = _, X.isContextProvider = k, X.isElement = I, X.isForwardRef = P, X.isFragment = L, X.isLazy = F, X.isMemo = D, X.isPortal = V, X.isProfiler = U, X.isStrictMode = N, X.isSuspense = ie, X.isValidElementType = O, X.typeOf = R;
  }()), X;
}
var dr;
function Cr() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? Ae.exports = Kr() : Ae.exports = Qr()), Ae.exports;
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
  var t = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function d(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, a = 0; a < 10; a++)
        l["_" + String.fromCharCode(a)] = a;
      var n = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (n.join("") !== "0123456789")
        return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        r[c] = c;
      }), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = u() ? Object.assign : function(s, l) {
    for (var a, n = d(s), r, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var o in a)
        h.call(a, o) && (n[o] = a[o]);
      if (t) {
        r = t(a);
        for (var i = 0; i < r.length; i++)
          b.call(a, r[i]) && (n[r[i]] = a[r[i]]);
      }
    }
    return n;
  }, $e;
}
var Le, vr;
function He() {
  if (vr)
    return Le;
  vr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Le = t, Le;
}
var Ve, yr;
function _r() {
  return yr || (yr = 1, Ve = Function.call.bind(Object.prototype.hasOwnProperty)), Ve;
}
var Ne, gr;
function rt() {
  if (gr)
    return Ne;
  gr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = He(), b = {}, d = _r();
    t = function(s) {
      var l = "Warning: " + s;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function u(s, l, a, n, r) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in s)
        if (d(s, c)) {
          var o;
          try {
            if (typeof s[c] != "function") {
              var i = Error(
                (n || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw i.name = "Invariant Violation", i;
            }
            o = s[c](l, c, n, a, null, h);
          } catch (m) {
            o = m;
          }
          if (o && !(o instanceof Error) && t(
            (n || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof o + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), o instanceof Error && !(o.message in b)) {
            b[o.message] = !0;
            var g = r ? r() : "";
            t(
              "Failed " + a + " type: " + o.message + (g ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, Ne = u, Ne;
}
var Ue, hr;
function tt() {
  if (hr)
    return Ue;
  hr = 1;
  var t = Cr(), h = et(), b = He(), d = _r(), u = rt(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var n = "Warning: " + a;
    typeof console < "u" && console.error(n);
    try {
      throw new Error(n);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Ue = function(a, n) {
    var r = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function o(v) {
      var _ = v && (r && v[r] || v[c]);
      if (typeof _ == "function")
        return _;
    }
    var i = "<<anonymous>>", g = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: x(),
      arrayOf: O,
      element: R(),
      elementType: f(),
      instanceOf: W,
      node: A(),
      objectOf: H,
      oneOf: M,
      oneOfType: S,
      shape: Q,
      exact: $
    };
    function m(v, _) {
      return v === _ ? v !== 0 || 1 / v === 1 / _ : v !== v && _ !== _;
    }
    function y(v, _) {
      this.message = v, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function w(v) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, k = 0;
      function I(L, F, D, V, U, N, ie) {
        if (V = V || i, N = N || D, ie !== b) {
          if (n) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = V + ":" + D;
            !_[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[fe] = !0, k++);
          }
        }
        return F[D] == null ? L ? F[D] === null ? new y("The " + U + " `" + N + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new y("The " + U + " `" + N + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : v(F, D, V, U, N);
      }
      var P = I.bind(null, !1);
      return P.isRequired = I.bind(null, !0), P;
    }
    function C(v) {
      function _(k, I, P, L, F, D) {
        var V = k[I], U = re(V);
        if (U !== v) {
          var N = te(V);
          return new y(
            "Invalid " + L + " `" + F + "` of type " + ("`" + N + "` supplied to `" + P + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return w(_);
    }
    function x() {
      return w(l);
    }
    function O(v) {
      function _(k, I, P, L, F) {
        if (typeof v != "function")
          return new y("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var D = k[I];
        if (!Array.isArray(D)) {
          var V = re(D);
          return new y("Invalid " + L + " `" + F + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an array."));
        }
        for (var U = 0; U < D.length; U++) {
          var N = v(D, U, P, L, F + "[" + U + "]", b);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return w(_);
    }
    function R() {
      function v(_, k, I, P, L) {
        var F = _[k];
        if (!a(F)) {
          var D = re(F);
          return new y("Invalid " + P + " `" + L + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(v);
    }
    function f() {
      function v(_, k, I, P, L) {
        var F = _[k];
        if (!t.isValidElementType(F)) {
          var D = re(F);
          return new y("Invalid " + P + " `" + L + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(v);
    }
    function W(v) {
      function _(k, I, P, L, F) {
        if (!(k[I] instanceof v)) {
          var D = v.name || i, V = le(k[I]);
          return new y("Invalid " + L + " `" + F + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return w(_);
    }
    function M(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), l;
      function _(k, I, P, L, F) {
        for (var D = k[I], V = 0; V < v.length; V++)
          if (m(D, v[V]))
            return null;
        var U = JSON.stringify(v, function(ie, T) {
          var fe = te(T);
          return fe === "symbol" ? String(T) : T;
        });
        return new y("Invalid " + L + " `" + F + "` of value `" + String(D) + "` " + ("supplied to `" + P + "`, expected one of " + U + "."));
      }
      return w(_);
    }
    function H(v) {
      function _(k, I, P, L, F) {
        if (typeof v != "function")
          return new y("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var D = k[I], V = re(D);
        if (V !== "object")
          return new y("Invalid " + L + " `" + F + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an object."));
        for (var U in D)
          if (d(D, U)) {
            var N = v(D, U, P, L, F + "." + U, b);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return w(_);
    }
    function S(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var _ = 0; _ < v.length; _++) {
        var k = v[_];
        if (typeof k != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(k) + " at index " + _ + "."
          ), l;
      }
      function I(P, L, F, D, V) {
        for (var U = [], N = 0; N < v.length; N++) {
          var ie = v[N], T = ie(P, L, F, D, V, b);
          if (T == null)
            return null;
          T.data && d(T.data, "expectedType") && U.push(T.data.expectedType);
        }
        var fe = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new y("Invalid " + D + " `" + V + "` supplied to " + ("`" + F + "`" + fe + "."));
      }
      return w(I);
    }
    function A() {
      function v(_, k, I, P, L) {
        return K(_[k]) ? null : new y("Invalid " + P + " `" + L + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return w(v);
    }
    function G(v, _, k, I, P) {
      return new y(
        (v || "React class") + ": " + _ + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function Q(v) {
      function _(k, I, P, L, F) {
        var D = k[I], V = re(D);
        if (V !== "object")
          return new y("Invalid " + L + " `" + F + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var U in v) {
          var N = v[U];
          if (typeof N != "function")
            return G(P, L, F, U, te(N));
          var ie = N(D, U, P, L, F + "." + U, b);
          if (ie)
            return ie;
        }
        return null;
      }
      return w(_);
    }
    function $(v) {
      function _(k, I, P, L, F) {
        var D = k[I], V = re(D);
        if (V !== "object")
          return new y("Invalid " + L + " `" + F + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        var U = h({}, k[I], v);
        for (var N in U) {
          var ie = v[N];
          if (d(v, N) && typeof ie != "function")
            return G(P, L, F, N, te(ie));
          if (!ie)
            return new y(
              "Invalid " + L + " `" + F + "` key `" + N + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var T = ie(D, N, P, L, F + "." + N, b);
          if (T)
            return T;
        }
        return null;
      }
      return w(_);
    }
    function K(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(K);
          if (v === null || a(v))
            return !0;
          var _ = o(v);
          if (_) {
            var k = _.call(v), I;
            if (_ !== v.entries) {
              for (; !(I = k.next()).done; )
                if (!K(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var P = I.value;
                if (P && !K(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(v, _) {
      return v === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function re(v) {
      var _ = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : oe(_, v) ? "symbol" : _;
    }
    function te(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var _ = re(v);
      if (_ === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function se(v) {
      var _ = te(v);
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
    function le(v) {
      return !v.constructor || !v.constructor.name ? i : v.constructor.name;
    }
    return g.checkPropTypes = u, g.resetWarningCache = u.resetWarningCache, g.PropTypes = g, g;
  }, Ue;
}
var qe, mr;
function nt() {
  if (mr)
    return qe;
  mr = 1;
  var t = He();
  function h() {
  }
  function b() {
  }
  return b.resetWarningCache = h, qe = function() {
    function d(l, a, n, r, c, o) {
      if (o !== t) {
        var i = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw i.name = "Invariant Violation", i;
      }
    }
    d.isRequired = d;
    function u() {
      return d;
    }
    var s = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: u,
      element: d,
      elementType: d,
      instanceOf: u,
      node: d,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: b,
      resetWarningCache: h
    };
    return s.PropTypes = s, s;
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var ot = Cr(), at = !0;
  Ye.exports = tt()(ot.isElement, at);
} else
  Ye.exports = nt()();
var it = Ye.exports;
const xe = /* @__PURE__ */ Jr(it), Tr = br({
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
function ct({ children: t }) {
  const [h, b] = ge(""), [d, u] = ge(), [s, l] = ge(), [a, n] = ge(!1), i = {
    audioStatus: h,
    audioRecording: d,
    updateAudioStatus: (g) => b(g),
    updateAudioRecording: (g) => u(g),
    convertAudioFile: async (g) => l(g),
    audioFile: s,
    setAudioFileProcessing: n,
    audioFileProcessing: a
  };
  return /* @__PURE__ */ Z(Tr.Provider, { value: i, children: t });
}
function Ce() {
  const t = wr(Tr);
  if (t === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return t;
}
const Sr = br({
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
function ut({ userPropsValue: t, children: h }) {
  return /* @__PURE__ */ Z(Sr.Provider, { value: t, children: h });
}
function Re() {
  const t = wr(Sr);
  if (t === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return t;
}
const st = (t, h) => {
  if (!t.length)
    return null;
  const b = [];
  return t.forEach((d) => {
    const u = h == null ? void 0 : h.getElementsByClassName(d);
    return u != null && u.length && b.push(u[0]), u;
  }), b.length ? b : null;
}, lt = (t) => {
  t && t.forEach((h) => {
    h.remove();
  });
}, ft = (t) => t.map((b) => {
  const d = document.createElement("canvas");
  return d.className = b, d;
}), dt = (t, h) => {
  t.forEach((b) => {
    const d = b.getContext("2d");
    d && (d.clearRect(0, 0, b.width, b.height), d.clearRect(0, 0, b.width, b.height), b.width = ((h == null ? void 0 : h.clientWidth) ?? 1) * devicePixelRatio, b.height = ((h == null ? void 0 : h.clientHeight) ?? 1) * devicePixelRatio, d == null || d.scale(devicePixelRatio, devicePixelRatio));
  });
}, pt = (t, h) => {
  t.forEach((b) => {
    b.style.width = (h == null ? void 0 : h.clientWidth) + "px", b.style.height = (h == null ? void 0 : h.clientHeight) + "px";
  });
}, vt = (t, h) => {
  t.forEach((b) => {
    h == null || h.appendChild(b);
  });
}, je = (t, h, b) => {
  try {
    const u = document.getElementById(t).querySelector(b), s = st(h, u);
    lt(s);
    const l = ft(h);
    return dt(l, u), pt(l, u), vt(l, u), l;
  } catch (d) {
    return console.error("Error in setUpCanvas: ", d), null;
  }
}, ke = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, yt = (t, h, b) => {
  const d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  if (!d)
    return ke;
  const u = parseInt(d[1], 16), s = parseInt(d[2], 16), l = parseInt(d[3], 16);
  if (h && b) {
    const a = Math.round(u * h / 100), n = Math.round(s * h / 100), r = Math.round(l * h / 100);
    return {
      solid: `rgb(${a}, ${n}, ${r})`,
      faded: `rgb(${a}, ${n}, ${r}, 0.5)`
    };
  }
  return {
    solid: `rgb(${u}, ${s}, ${l})`,
    faded: `rgb(${u}, ${s}, ${l}, 0.5)`
  };
}, gt = (t) => {
  const h = new Option().style;
  return h.color = t, h.color == t;
}, ht = (t) => {
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
  return typeof h[t.toLowerCase()] < "u" ? h[t.toLowerCase()] : "#000";
}, Ge = (t, h, b) => {
  try {
    if (!t || !gt(t))
      return ke;
    const d = ht(t);
    return yt(d, h, b);
  } catch {
    return ke;
  }
};
const mt = 100;
function bt() {
  const { audioStatus: t = "", updateAudioRecording: h } = Ce(), { graphColor: b, graphShaded: d, rootElementId: u, onRecordingEnd: s } = Re(), [l, a] = ge(0), n = ue(null), r = ue({}), c = ue(t);
  pe(() => {
    var y, w, C, x, O, R, f, W, M, H, S, A;
    c.current = t, t === "recording" && (((w = (y = r == null ? void 0 : r.current) == null ? void 0 : y.audioContext) == null ? void 0 : w.state) === "suspended" ? (r.current.audioContext.resume().then(g), (x = (C = r.current) == null ? void 0 : C.mediaRecorder) == null || x.resume()) : (R = (O = r == null ? void 0 : r.current) == null ? void 0 : O.audioContext) != null && R.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(i)), t === "stopped" && ((W = (f = r == null ? void 0 : r.current) == null ? void 0 : f.mediaRecorder) == null || W.stop()), t === "paused_recording" && ((H = (M = r == null ? void 0 : r.current) == null ? void 0 : M.audioContext) == null || H.suspend(), (A = (S = r == null ? void 0 : r.current) == null ? void 0 : S.mediaRecorder) == null || A.pause());
  }, [t]), pe(() => {
    o(), window.addEventListener("resize", o);
  }, []);
  const o = () => {
    const y = je(u, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    y && (n.current = y[0]);
  }, i = (y) => {
    var w;
    try {
      const C = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), x = new C();
      r.current.audioContext = x;
      const O = x.createMediaStreamSource(y);
      r.current.analyserNode = x.createAnalyser(), O.connect((w = r == null ? void 0 : r.current) == null ? void 0 : w.analyserNode), r.current.analyserNode.fftSize = 128;
      const R = r.current.analyserNode.frequencyBinCount, f = new Float32Array(R);
      r.current.dataArray = f;
      const W = new MediaRecorder(y);
      r.current.mediaRecorder = W, W.start(), W.addEventListener("dataavailable", async (M) => {
        const H = await M.data.arrayBuffer(), S = await x.decodeAudioData(H), A = { blob: M.data, duration: S.duration, graphData: r.current.graphData ?? [] };
        s == null || s(M.data), h(A);
      }), W.addEventListener("stop", () => {
        y.getTracks().forEach((M) => M.stop()), O.disconnect(), x.close();
      }), g();
    } catch (C) {
      console.log("error", C);
    }
  }, g = () => {
    var C, x, O, R, f, W, M, H, S, A, G;
    const y = (C = n == null ? void 0 : n.current) == null ? void 0 : C.getContext("2d");
    if (c.current !== "recording")
      return null;
    y == null || y.clearRect(0, 0, ((x = n == null ? void 0 : n.current) == null ? void 0 : x.width) ?? 1, ((O = n == null ? void 0 : n.current) == null ? void 0 : O.height) ?? 1);
    let w = -1 / 0;
    if (Number(performance.now()) > l) {
      if (a(Number(performance.now() / mt)), !((R = r == null ? void 0 : r.current) != null && R.dataArray))
        return null;
      (M = (f = r == null ? void 0 : r.current) == null ? void 0 : f.analyserNode) == null || M.getFloatTimeDomainData((W = r == null ? void 0 : r.current) == null ? void 0 : W.dataArray), w = Math.max(0, ...((H = r == null ? void 0 : r.current) == null ? void 0 : H.dataArray) ?? []);
      const Q = Math.max(1, Math.floor(w * 550));
      r.current.graphData === void 0 && (r.current.graphData = []), (G = r.current) == null || G.graphData.push({
        x: ((S = n == null ? void 0 : n.current) == null ? void 0 : S.offsetWidth) ?? 1,
        y: (((A = n == null ? void 0 : n.current) == null ? void 0 : A.offsetHeight) ?? 1) / 2 - Q / 2,
        height: Q,
        width: 2
      });
    }
    m(), requestAnimationFrame(g);
  }, m = () => {
    var w, C, x, O;
    const y = (w = n == null ? void 0 : n.current) == null ? void 0 : w.getContext("2d");
    if (!y || !((C = r.current) != null && C.graphData))
      return null;
    for (let R = 0; R < ((x = r.current) == null ? void 0 : x.graphData.length); R++) {
      const f = (O = r.current) == null ? void 0 : O.graphData[R];
      f && (y.fillStyle = Ge(b, f.height, d).solid, y == null || y.fillRect(f.x, f.y, f.width, f.height), f.x = f.x - 2);
    }
  };
  return /* @__PURE__ */ Z("div", { className: "voice-recorder_recordcontainer" });
}
const wt = 0.06;
function Et() {
  const [t, h] = ge([]), { audioRecording: b, audioStatus: d, updateAudioStatus: u } = Ce(), { graphColor: s, graphShaded: l, rootElementId: a, onPlayEnd: n } = Re(), r = ue(null), c = ue(null), o = ue(null), i = ue(null), g = ue(), { blob: m, duration: y = 0, graphData: w = [] } = b || {}, C = ue(w);
  pe(() => {
    window.addEventListener("resize", M);
  }, []), pe(() => {
    m && (d === "playing_requested" ? f() : d === "playing" ? H() : d === "paused_playing" ? (R(), clearInterval(g.current)) : d === "stopped" && clearInterval(g.current));
  }, [d]), pe(() => {
    C.current = w;
    try {
      w.length && M();
    } catch (S) {
      console.log("error", S);
    }
  }, [w]);
  const x = (S) => {
    var G, Q, $;
    const A = (G = S == null ? void 0 : S.current) == null ? void 0 : G.getContext("2d");
    A == null || A.clearRect(0, 0, ((Q = S == null ? void 0 : S.current) == null ? void 0 : Q.width) ?? 1, (($ = S == null ? void 0 : S.current) == null ? void 0 : $.height) ?? 1);
  }, O = () => {
    const S = je(
      a,
      [
        "waveformgraph-unplayed-graph",
        "waveformgraph-played-graph",
        "progressbar"
      ],
      ".voice-recorder_canvascontainer"
    );
    r.current = S == null ? void 0 : S.find((A) => A.className === "waveformgraph-unplayed-graph"), c.current = S == null ? void 0 : S.find((A) => A.className === "waveformgraph-played-graph"), o.current = S == null ? void 0 : S.find((A) => A.className === "progressbar");
  }, R = () => {
    var S;
    return (S = i == null ? void 0 : i.current) == null ? void 0 : S.pause();
  }, f = () => {
    const A = document.getElementById(a).querySelector("#playback_audio");
    if (A.autoplay = !0, A.readyState !== 4) {
      const G = window.URL.createObjectURL(new Blob([m], { type: "audio/mpeg" }));
      A.src = G, A.onloadeddata = () => {
        A.play(), u("playing");
      };
    } else
      A.paused ? (A.play(), u("playing")) : (A.currentTime = 0, A.play(), u("playing"));
    A.onended = () => {
      m && (n == null || n(m)), u("stopped");
    };
  }, W = () => {
    var G;
    const S = [];
    if (!(C != null && C.current.length))
      return S;
    const A = (((G = r == null ? void 0 : r.current) == null ? void 0 : G.offsetWidth) ?? 1) / (C == null ? void 0 : C.current.length);
    return C == null || C.current.forEach((Q, $) => {
      var oe;
      const K = ((oe = S[$ - 1]) == null ? void 0 : oe.x) || 0;
      S.push({
        ...Q,
        x: K + A,
        width: A
      });
    }), h(S), S;
  }, M = () => {
    var A;
    O();
    const S = (A = r == null ? void 0 : r.current) == null ? void 0 : A.getContext("2d");
    if (S) {
      const G = W();
      for (let Q = 0; Q < G.length; Q++) {
        const $ = G[Q];
        S.fillStyle = Ge(s, $.height, l).faded, S.fillRect($.x, $.y, $.width, $.height);
      }
    }
  }, H = () => {
    var le, v, _;
    (((le = i == null ? void 0 : i.current) == null ? void 0 : le.currentTime) ?? 1) > 0 || x(c);
    const A = Math.abs(y - wt), G = w.length, Q = A / G * 1e3;
    let $ = 0, K, oe;
    const re = (v = o == null ? void 0 : o.current) == null ? void 0 : v.getContext("2d"), te = (_ = c == null ? void 0 : c.current) == null ? void 0 : _.getContext("2d");
    function se() {
      var I, P, L, F, D, V, U;
      if (!te || !re || ($ = Math.round(G * ((((I = i == null ? void 0 : i.current) == null ? void 0 : I.currentTime) ?? 1) / A)), oe === ((P = i == null ? void 0 : i.current) == null ? void 0 : P.currentTime) || K === $))
        return;
      if (oe = (L = i == null ? void 0 : i.current) == null ? void 0 : L.currentTime, K = $, $ >= G) {
        clearInterval(g.current);
        return;
      }
      const k = t[$];
      te.fillStyle = Ge(s, k.height, l).solid, te == null || te.fillRect(k.x, k.y, k.width, k.height), +k.x.toFixed(3) < (((F = o == null ? void 0 : o.current) == null ? void 0 : F.offsetWidth) ?? 1) && (re == null || re.clearRect(0, 0, ((D = o == null ? void 0 : o.current) == null ? void 0 : D.width) ?? 1, ((V = o == null ? void 0 : o.current) == null ? void 0 : V.height) ?? 1), re == null || re.fillRect(k.x, 0, 1, ((U = o == null ? void 0 : o.current) == null ? void 0 : U.offsetHeight) ?? 1));
    }
    se(), g.current = setInterval(se, Q);
  };
  return /* @__PURE__ */ he("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ Z("audio", { ref: i, controls: !0, id: "playback_audio", children: /* @__PURE__ */ Z("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ Z("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function Ct() {
  const [t, h] = ge(!1), {
    updateAudioRecording: b,
    updateAudioStatus: d,
    audioFile: u,
    setAudioFileProcessing: s
  } = Ce(), { rootElementId: l } = Re(), a = ue(null), n = ue({});
  pe(() => {
    const c = je(l, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    return c && (a.current = c[0]), s(!0), r(), () => s(!1);
  }, []);
  const r = async () => {
    if (!u)
      return;
    const c = je(l, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    c && (a.current = c[0]);
    const o = await u.arrayBuffer(), i = new Blob([new Uint8Array(o)], { type: u.type });
    n.current.blob = i;
    const g = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), m = new g(), y = m.createGain(), w = await m.decodeAudioData(o);
    n.current.audioBuffer = w;
    const C = m.createAnalyser(), x = m.createBufferSource();
    x.buffer = w, x.connect(y), y.connect(m.destination), x.connect(C), x.playbackRate.value = 2, x.start(), y.gain.setValueAtTime(0, m.currentTime);
    const O = C.frequencyBinCount, R = [], f = () => {
      const W = new Float32Array(O);
      if (C.getFloatTimeDomainData(W), R.push(W), m.currentTime * 2 > w.duration && Math.abs(m.currentTime * 2 - w.duration) <= 0.1) {
        h(!0);
        return;
      }
      requestAnimationFrame(f);
    };
    f(), n.current.dataArray = R;
  };
  return pe(() => {
    var c, o;
    if (t && n.current.dataArray) {
      const i = [];
      for (const g of n.current.dataArray) {
        let m = -1 / 0;
        m = Math.max(0, ...g ?? []);
        const y = Math.max(1, Math.floor(m * 550));
        i.push({
          x: ((c = a == null ? void 0 : a.current) == null ? void 0 : c.offsetWidth) ?? 1,
          y: (((o = a == null ? void 0 : a.current) == null ? void 0 : o.offsetHeight) ?? 1) / 2 - y / 2,
          height: y,
          width: 2
        });
      }
      if (n.current.blob && n.current.audioBuffer) {
        const g = { blob: n.current.blob, duration: n.current.audioBuffer.duration, graphData: i ?? [] };
        b(g), d("playing_requested");
      }
    }
  }, [t]), /* @__PURE__ */ Z("div", { className: "voice-recorder_recordcontainer" });
}
function _t() {
  const { audioStatus: t } = Ce(), { waveContainerStyle: h } = Re(), [b, d] = ge("");
  return pe(() => {
    d(t === "playing" || t === "playing_requested" || t === "paused_playing" || t === "stopped" ? "playing" : t === "processing" ? "prerecord" : "recording");
  }, [t]), /* @__PURE__ */ he("div", { className: "voice-recorder_waveformcontainer", style: h, children: [
    b === "playing" ? /* @__PURE__ */ Z(Et, {}) : null,
    b === "prerecord" ? /* @__PURE__ */ Z(Ct, {}) : null,
    b === "recording" ? /* @__PURE__ */ Z(bt, {}) : null
  ] });
}
const Tt = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), St = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("g", { id: "c98_play" }, /* @__PURE__ */ B.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ B.createElement("g", { id: "Capa_1_78_" })))), xt = (t) => /* @__PURE__ */ B.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("title", null, "microphone-filled"), /* @__PURE__ */ B.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ B.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ B.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Rt = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), Pt = (t) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ B.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 })))), Ot = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", id: "upload", ...t }, /* @__PURE__ */ B.createElement("path", { d: "M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z" })), At = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ B.createElement("path", { d: "M7.706 0.290 C 7.484 0.362,7.356 0.490,7.294 0.699 C 7.259 0.816,7.253 1.088,7.253 2.508 C 7.253 4.389,7.251 4.365,7.443 4.557 C 7.700 4.813,8.300 4.813,8.557 4.557 C 8.749 4.365,8.747 4.389,8.747 2.508 C 8.747 0.688,8.744 0.656,8.596 0.480 C 8.472 0.333,8.339 0.284,8.040 0.276 C 7.893 0.272,7.743 0.278,7.706 0.290 M2.753 2.266 C 2.595 2.338,2.362 2.566,2.281 2.728 C 2.197 2.897,2.193 3.085,2.269 3.253 C 2.343 3.418,4.667 5.750,4.850 5.843 C 5.109 5.976,5.375 5.911,5.643 5.649 C 5.907 5.391,5.977 5.111,5.843 4.850 C 5.750 4.667,3.418 2.343,3.253 2.269 C 3.101 2.200,2.901 2.199,2.753 2.266 M12.853 2.282 C 12.730 2.339,12.520 2.536,11.518 3.541 C 10.597 4.464,10.316 4.762,10.271 4.860 C 10.195 5.025,10.196 5.216,10.272 5.378 C 10.342 5.528,10.572 5.764,10.727 5.845 C 10.884 5.927,11.117 5.926,11.280 5.843 C 11.447 5.757,13.757 3.447,13.843 3.280 C 13.926 3.118,13.927 2.884,13.846 2.729 C 13.764 2.572,13.552 2.364,13.392 2.283 C 13.213 2.192,13.048 2.192,12.853 2.282 M0.699 7.292 C 0.404 7.385,0.258 7.620,0.258 7.999 C 0.259 8.386,0.403 8.618,0.698 8.706 C 0.816 8.741,1.079 8.747,2.508 8.747 C 3.997 8.747,4.196 8.742,4.318 8.702 C 4.498 8.644,4.644 8.498,4.702 8.318 C 4.788 8.053,4.745 7.677,4.608 7.491 C 4.578 7.451,4.492 7.384,4.417 7.343 L 4.280 7.267 2.547 7.261 C 1.152 7.257,0.791 7.263,0.699 7.292 M11.745 7.278 C 11.622 7.308,11.452 7.411,11.392 7.492 C 11.255 7.677,11.212 8.053,11.298 8.318 C 11.356 8.498,11.502 8.644,11.682 8.702 C 11.804 8.742,12.003 8.747,13.492 8.747 C 14.921 8.747,15.184 8.741,15.302 8.706 C 15.597 8.618,15.741 8.386,15.742 7.999 C 15.742 7.614,15.595 7.383,15.290 7.291 C 15.187 7.260,14.864 7.254,13.496 7.256 C 12.578 7.258,11.790 7.268,11.745 7.278 M4.853 10.282 C 4.730 10.339,4.520 10.536,3.518 11.541 C 2.597 12.464,2.316 12.762,2.271 12.860 C 2.195 13.025,2.196 13.216,2.272 13.378 C 2.342 13.528,2.572 13.764,2.727 13.845 C 2.884 13.927,3.117 13.926,3.280 13.843 C 3.447 13.757,5.757 11.447,5.843 11.280 C 5.926 11.118,5.927 10.884,5.846 10.729 C 5.764 10.572,5.552 10.364,5.392 10.283 C 5.213 10.192,5.048 10.192,4.853 10.282 M10.753 10.266 C 10.595 10.338,10.362 10.566,10.281 10.728 C 10.197 10.897,10.193 11.085,10.269 11.253 C 10.343 11.418,12.667 13.750,12.850 13.843 C 13.109 13.976,13.375 13.911,13.643 13.649 C 13.907 13.391,13.977 13.111,13.843 12.850 C 13.750 12.667,11.418 10.343,11.253 10.269 C 11.101 10.200,10.901 10.199,10.753 10.266 M7.745 11.277 C 7.620 11.309,7.451 11.412,7.392 11.492 C 7.254 11.678,7.253 11.691,7.253 13.489 C 7.253 14.921,7.259 15.184,7.294 15.302 C 7.382 15.597,7.615 15.741,8.000 15.741 C 8.385 15.741,8.618 15.597,8.706 15.302 C 8.768 15.090,8.767 11.875,8.704 11.690 C 8.644 11.514,8.575 11.430,8.420 11.346 C 8.310 11.286,8.246 11.271,8.057 11.264 C 7.930 11.259,7.790 11.265,7.745 11.277 ", stroke: "none", fillRule: "evenodd", fill: "#000000" }));
var xr = { exports: {} };
(function(t, h) {
  (function(b, d) {
    t.exports = d(ze);
  })(typeof self < "u" ? self : Hr, function(b) {
    return function(d) {
      var u = {};
      function s(l) {
        if (u[l])
          return u[l].exports;
        var a = u[l] = { i: l, l: !1, exports: {} };
        return d[l].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
      }
      return s.m = d, s.c = u, s.d = function(l, a, n) {
        s.o(l, a) || Object.defineProperty(l, a, { enumerable: !0, get: n });
      }, s.r = function(l) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
      }, s.t = function(l, a) {
        if (1 & a && (l = s(l)), 8 & a || 4 & a && typeof l == "object" && l && l.__esModule)
          return l;
        var n = /* @__PURE__ */ Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: l }), 2 & a && typeof l != "string")
          for (var r in l)
            s.d(n, r, function(c) {
              return l[c];
            }.bind(null, r));
        return n;
      }, s.n = function(l) {
        var a = l && l.__esModule ? function() {
          return l.default;
        } : function() {
          return l;
        };
        return s.d(a, "a", a), a;
      }, s.o = function(l, a) {
        return Object.prototype.hasOwnProperty.call(l, a);
      }, s.p = "", s(s.s = 3);
    }([function(d, u) {
      d.exports = b;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.Validate = u.Time = void 0;
      var l = n(s(5)), a = n(s(6));
      function n(r) {
        return r && r.__esModule ? r : { default: r };
      }
      u.Time = l.default, u.Validate = a.default;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useInterval = void 0;
      var l = function(a) {
        return a && a.__esModule ? a : { default: a };
      }(s(7));
      u.useInterval = l.default;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useTime = u.useStopwatch = u.useTimer = void 0;
      var l = Object.assign || function(i) {
        for (var g = 1; g < arguments.length; g++) {
          var m = arguments[g];
          for (var y in m)
            Object.prototype.hasOwnProperty.call(m, y) && (i[y] = m[y]);
        }
        return i;
      };
      u.default = function(i) {
        if ((0, a.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), i.expiryTimestamp) {
          var g = (0, n.default)(i);
          return l({}, g, { startTimer: g.start, stopTimer: g.pause, resetTimer: function() {
          } });
        }
        var m = (0, r.default)(i);
        return l({}, m, { startTimer: m.start, stopTimer: m.pause, resetTimer: m.reset });
      };
      var a = s(0), n = o(s(4)), r = o(s(8)), c = o(s(9));
      function o(i) {
        return i && i.__esModule ? i : { default: i };
      }
      u.useTimer = n.default, u.useStopwatch = r.default, u.useTime = c.default;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = Object.assign || function(g) {
        for (var m = 1; m < arguments.length; m++) {
          var y = arguments[m];
          for (var w in y)
            Object.prototype.hasOwnProperty.call(y, w) && (g[w] = y[w]);
        }
        return g;
      }, a = function() {
        return function(g, m) {
          if (Array.isArray(g))
            return g;
          if (Symbol.iterator in Object(g))
            return function(y, w) {
              var C = [], x = !0, O = !1, R = void 0;
              try {
                for (var f, W = y[Symbol.iterator](); !(x = (f = W.next()).done) && (C.push(f.value), !w || C.length !== w); x = !0)
                  ;
              } catch (M) {
                O = !0, R = M;
              } finally {
                try {
                  !x && W.return && W.return();
                } finally {
                  if (O)
                    throw R;
                }
              }
              return C;
            }(g, m);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(g) {
        var m = g.expiryTimestamp, y = g.onExpire, w = g.autoStart, C = w === void 0 || w, x = (0, n.useState)(m), O = a(x, 2), R = O[0], f = O[1], W = (0, n.useState)(r.Time.getSecondsFromExpiry(R)), M = a(W, 2), H = M[0], S = M[1], A = (0, n.useState)(C), G = a(A, 2), Q = G[0], $ = G[1], K = (0, n.useState)(C), oe = a(K, 2), re = oe[0], te = oe[1], se = (0, n.useState)(i(R)), le = a(se, 2), v = le[0], _ = le[1];
        function k(P) {
          var L = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          _(i(P)), te(L), $(L), f(P), S(r.Time.getSecondsFromExpiry(P));
        }
        function I() {
          var P = /* @__PURE__ */ new Date();
          P.setMilliseconds(P.getMilliseconds() + 1e3 * H), k(P);
        }
        return (0, c.useInterval)(function() {
          v !== o && _(o);
          var P = r.Time.getSecondsFromExpiry(R);
          S(P), P <= 0 && (r.Validate.onExpire(y) && y(), $(!1), _(null));
        }, Q ? v : null), l({}, r.Time.getTimeFromSeconds(H), { start: function() {
          re ? (S(r.Time.getSecondsFromExpiry(R)), $(!0)) : I();
        }, pause: function() {
          $(!1);
        }, resume: I, restart: k, isRunning: Q });
      };
      var n = s(0), r = s(1), c = s(2), o = 1e3;
      function i(g) {
        if (!r.Validate.expiryTimestamp(g))
          return null;
        var m = r.Time.getSecondsFromExpiry(g), y = Math.floor(1e3 * (m - Math.floor(m)));
        return y > 0 ? y : o;
      }
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = function() {
        function n(r, c) {
          for (var o = 0; o < c.length; o++) {
            var i = c[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
          }
        }
        return function(r, c, o) {
          return c && n(r.prototype, c), o && n(r, o), r;
        };
      }(), a = function() {
        function n() {
          (function(r, c) {
            if (!(r instanceof c))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return l(n, null, [{ key: "getTimeFromSeconds", value: function(r) {
          var c = Math.ceil(r), o = Math.floor(c / 86400), i = Math.floor(c % 86400 / 3600), g = Math.floor(c % 3600 / 60);
          return { seconds: Math.floor(c % 60), minutes: g, hours: i, days: o };
        } }, { key: "getSecondsFromExpiry", value: function(r, c) {
          var o = r - (/* @__PURE__ */ new Date()).getTime();
          if (o > 0) {
            var i = o / 1e3;
            return c ? Math.round(i) : i;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(r, c) {
          var o = (/* @__PURE__ */ new Date()).getTime() - r;
          if (o > 0) {
            var i = o / 1e3;
            return c ? Math.round(i) : i;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var r = /* @__PURE__ */ new Date();
          return r.getTime() / 1e3 - 60 * r.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(r, c) {
          var o = n.getTimeFromSeconds(r), i = o.seconds, g = o.minutes, m = o.hours, y = "", w = m;
          return c === "12-hour" && (y = m >= 12 ? "pm" : "am", w = m % 12), { seconds: i, minutes: g, hours: w, ampm: y };
        } }]), n;
      }();
      u.default = a;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = function() {
        function n(r, c) {
          for (var o = 0; o < c.length; o++) {
            var i = c[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
          }
        }
        return function(r, c, o) {
          return c && n(r.prototype, c), o && n(r, o), r;
        };
      }(), a = function() {
        function n() {
          (function(r, c) {
            if (!(r instanceof c))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return l(n, null, [{ key: "expiryTimestamp", value: function(r) {
          var c = new Date(r).getTime() > 0;
          return c || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", r), c;
        } }, { key: "onExpire", value: function(r) {
          var c = r && typeof r == "function";
          return r && !c && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", r), c;
        } }]), n;
      }();
      u.default = a;
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.default = function(a, n) {
        var r = (0, l.useRef)();
        (0, l.useEffect)(function() {
          r.current = a;
        }), (0, l.useEffect)(function() {
          if (!n)
            return function() {
            };
          var c = setInterval(function() {
            r.current && r.current();
          }, n);
          return function() {
            return clearInterval(c);
          };
        }, [n]);
      };
      var l = s(0);
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = Object.assign || function(o) {
        for (var i = 1; i < arguments.length; i++) {
          var g = arguments[i];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (o[m] = g[m]);
        }
        return o;
      }, a = function() {
        return function(o, i) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(g, m) {
              var y = [], w = !0, C = !1, x = void 0;
              try {
                for (var O, R = g[Symbol.iterator](); !(w = (O = R.next()).done) && (y.push(O.value), !m || y.length !== m); w = !0)
                  ;
              } catch (f) {
                C = !0, x = f;
              } finally {
                try {
                  !w && R.return && R.return();
                } finally {
                  if (C)
                    throw x;
                }
              }
              return y;
            }(o, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(o) {
        var i = o.autoStart, g = o.offsetTimestamp, m = (0, n.useState)(r.Time.getSecondsFromExpiry(g, !0) || 0), y = a(m, 2), w = y[0], C = y[1], x = (0, n.useState)(/* @__PURE__ */ new Date()), O = a(x, 2), R = O[0], f = O[1], W = (0, n.useState)(w + r.Time.getSecondsFromPrevTime(R || 0, !0)), M = a(W, 2), H = M[0], S = M[1], A = (0, n.useState)(i), G = a(A, 2), Q = G[0], $ = G[1];
        return (0, c.useInterval)(function() {
          S(w + r.Time.getSecondsFromPrevTime(R, !0));
        }, Q ? 1e3 : null), l({}, r.Time.getTimeFromSeconds(H), { start: function() {
          var K = /* @__PURE__ */ new Date();
          f(K), $(!0), S(w + r.Time.getSecondsFromPrevTime(K, !0));
        }, pause: function() {
          C(H), $(!1);
        }, reset: function() {
          var K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, oe = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], re = r.Time.getSecondsFromExpiry(K, !0) || 0, te = /* @__PURE__ */ new Date();
          f(te), C(re), $(oe), S(re + r.Time.getSecondsFromPrevTime(te, !0));
        }, isRunning: Q });
      };
      var n = s(0), r = s(1), c = s(2);
    }, function(d, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var l = Object.assign || function(o) {
        for (var i = 1; i < arguments.length; i++) {
          var g = arguments[i];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (o[m] = g[m]);
        }
        return o;
      }, a = function() {
        return function(o, i) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(g, m) {
              var y = [], w = !0, C = !1, x = void 0;
              try {
                for (var O, R = g[Symbol.iterator](); !(w = (O = R.next()).done) && (y.push(O.value), !m || y.length !== m); w = !0)
                  ;
              } catch (f) {
                C = !0, x = f;
              } finally {
                try {
                  !w && R.return && R.return();
                } finally {
                  if (C)
                    throw x;
                }
              }
              return y;
            }(o, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(o) {
        var i = o.format, g = (0, n.useState)(r.Time.getSecondsFromTimeNow()), m = a(g, 2), y = m[0], w = m[1];
        return (0, c.useInterval)(function() {
          w(r.Time.getSecondsFromTimeNow());
        }, 1e3), l({}, r.Time.getFormattedTimeFromSeconds(y, i));
      };
      var n = s(0), r = s(1), c = s(2);
    }]);
  });
})(xr);
var kt = xr.exports;
const jt = (t) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function Mt() {
  const { audioStatus: t } = Ce(), {
    seconds: h,
    minutes: b,
    hours: d,
    start: u,
    pause: s,
    reset: l
  } = kt.useStopwatch({ autoStart: !1 });
  pe(() => {
    t === "recording" ? u() : t === "paused_playing" || t === "paused_recording" || t === "stopped" ? s() : l();
  }, [t]);
  const a = (n) => n.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ he("div", { className: `voice-recorder_stopcontainer ${t === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ Z("div", { className: "voice-recorder_control", children: /* @__PURE__ */ Z(jt, {}) }),
    /* @__PURE__ */ he("div", { className: "voice-recorder_stopwatch", children: [
      d ? /* @__PURE__ */ Z("span", { children: d }) : null,
      /* @__PURE__ */ Z("span", { children: a(b) }),
      ":",
      /* @__PURE__ */ Z("span", { children: a(h) })
    ] })
  ] });
}
const ye = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1,
  showUploadBtn: !1,
  showLoadingBtn: !1
};
function It() {
  const t = ue(null), h = ue(null), { audioStatus: b, updateAudioStatus: d, audioRecording: u, convertAudioFile: s } = Ce(), {
    controllerContainerStyle: l,
    controllerStyle: a,
    downloadable: n = !0,
    onAudioDownload: r,
    onRecordingStart: c,
    onPlayStart: o,
    onRecordingPause: i,
    onPlayPause: g,
    rootElementId: m
  } = Re(), [y, w] = ge(ye), C = ({ svg: M, disabled: H, status: S, onClick: A, applyCircularStyles: G = !0, display: Q = !0, rotate: $ = !1 }) => {
    if (!S || !Q)
      return null;
    let K = `${G ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`;
    return K += `${$ ? " voice-recorder_rotate" : ""}`, /* @__PURE__ */ Z("button", { onClick: A, disabled: H, className: K, style: a, children: M });
  }, x = (M) => () => {
    d(M);
  }, O = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(x("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  }, R = () => {
    const { blob: M = "" } = u || {};
    if (!M || !t.current)
      return null;
    const H = URL.createObjectURL(M);
    t.current.href = H, t.current.download = "audio.wav", t.current.click();
  }, f = () => {
    h.current && h.current.click();
  }, W = (M) => {
    s(M), d("processing");
  };
  return pe(() => {
    const M = document.getElementById(m);
    if (M) {
      const H = M.querySelector(".voice-recorder_controlscontainer");
      if (M && H) {
        const { height: S } = M.getBoundingClientRect();
        H.style.height = `${S / 3}px`;
      }
    }
    return h.current && h.current.addEventListener("change", (H) => {
      const S = H.target;
      S != null && S.files && (W(S.files[0]), S.value = "");
    }), () => {
      h.current && h.current.removeEventListener("change", () => null);
    };
  }, []), pe(() => {
    if (u) {
      const { blob: M = "" } = u || {};
      if (!M || !r)
        return;
      r(M);
    }
  }, [u]), pe(() => {
    switch (b) {
      case "":
        w({
          ...ye,
          showRecordBtn: !0,
          showUploadBtn: !0
        });
        break;
      case "recording": {
        c == null || c(), w({
          ...ye,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      }
      case "paused_recording": {
        i == null || i(), w({
          ...ye,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      }
      case "paused_playing": {
        g == null || g(), w({
          ...ye,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "playing": {
        o == null || o(), w({
          ...ye,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "stopped": {
        w({
          ...ye,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "processing": {
        w({
          ...ye,
          showRecordBtn: !0,
          showLoadingBtn: !0
        });
        break;
      }
      default:
        w(ye);
    }
  }, [b]), /* @__PURE__ */ he("div", { className: "voice-recorder_controlscontainer", style: l, children: [
    /* @__PURE__ */ he("div", { className: "voice-recorder_controls", children: [
      C({
        svg: /* @__PURE__ */ Z(xt, {}),
        disabled: b === "processing",
        status: y.showRecordBtn,
        onClick: O
      }),
      C({
        svg: /* @__PURE__ */ Z(Tt, {}),
        disabled: b === "stopped" || b === "paused_recording" || b === "paused_playing",
        status: y.showPauseBtn,
        onClick: x(
          b === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      C({
        svg: /* @__PURE__ */ Z(St, {}),
        disabled: !1,
        status: y.showPlayBtn,
        onClick: x("playing_requested")
      }),
      C({
        svg: /* @__PURE__ */ Z(Mt, {}),
        disabled: !1,
        status: y.showStopBtn,
        onClick: x("stopped"),
        applyCircularStyles: !1
      }),
      C({
        svg: /* @__PURE__ */ Z(Rt, {}),
        disabled: !1,
        status: y.showRedoBtn,
        onClick: x("")
      }),
      /* @__PURE__ */ he("div", { className: "voice-recorder_download", children: [
        C({
          svg: /* @__PURE__ */ Z(Pt, {}),
          disabled: !1,
          status: y.showRedoBtn,
          onClick: R,
          display: n
        }),
        C({
          svg: /* @__PURE__ */ Z(Ot, {}),
          disabled: !1,
          status: y.showUploadBtn,
          onClick: f
        }),
        C({
          svg: /* @__PURE__ */ Z(At, {}),
          disabled: !0,
          rotate: !0,
          status: y.showLoadingBtn,
          onClick: f
        })
      ] })
    ] }),
    /* @__PURE__ */ Z("input", { ref: h, type: "file", style: { display: "none" }, accept: "audio/*" }),
    /* @__PURE__ */ Z("a", { ref: t, download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const Ft = (t) => {
  const {
    mainContainerStyle: h,
    height: b,
    width: d,
    ...u
  } = t, s = zr(), l = {
    ...h,
    height: b,
    width: d
  }, a = `voice-recorder-${s}`;
  return /* @__PURE__ */ Z(ct, { children: /* @__PURE__ */ Z(ut, { userPropsValue: { ...u, rootElementId: a }, children: /* @__PURE__ */ he("div", { id: a, className: "voice-recorder_maincontainer", style: l, children: [
    /* @__PURE__ */ Z(_t, {}),
    /* @__PURE__ */ Z(It, {})
  ] }) }) });
};
Ft.propTypes = {
  mainContainerStyle: xe.object,
  height: xe.string || xe.number,
  width: xe.string || xe.number
};
export {
  Ft as VoiceRecorder
};
