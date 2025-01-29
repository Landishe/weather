/*! For license information please see main.188575aa.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      463: (e, t, n) => {
        var r = n(791),
          a = n(296)
        function l(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n])
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          )
        }
        var i = new Set(),
          o = {}
        function u(e, t) {
          s(e, t), s(e + 'Capture', t)
        }
        function s(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e])
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {}
        function m(e, t, n, r, a, l, i) {
          ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i)
        }
        var g = {}
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1)
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0]
            g[t] = new m(t, 1, !1, e[1], null, !1, !1)
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1)
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1)
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1)
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1)
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
          })
        var v = /[\-:]([a-z])/g
        function y(e) {
          return e[1].toUpperCase()
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null
          ;(null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      )
                    default:
                      return !1
                  }
                })(e, t, n, r)
              )
                return !0
              if (r) return !1
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t
                  case 4:
                    return !1 === t
                  case 5:
                    return isNaN(t)
                  case 6:
                    return isNaN(t) || 1 > t
                }
              return !1
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  )
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(v, y)
            g[t] = new m(t, 1, !1, e, null, !1, !1)
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(v, y)
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(v, y)
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            )
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
          })
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          x = Symbol.for('react.portal'),
          S = Symbol.for('react.fragment'),
          _ = Symbol.for('react.strict_mode'),
          C = Symbol.for('react.profiler'),
          E = Symbol.for('react.provider'),
          N = Symbol.for('react.context'),
          T = Symbol.for('react.forward_ref'),
          j = Symbol.for('react.suspense'),
          P = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          z = Symbol.for('react.lazy')
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
        var R = Symbol.for('react.offscreen')
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker')
        var I = Symbol.iterator
        function F(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (I && e[I]) || e['@@iterator'])
            ? e
            : null
        }
        var M,
          D = Object.assign
        function O(e) {
          if (void 0 === M)
            try {
              throw Error()
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/)
              M = (t && t[1]) || ''
            }
          return '\n' + M + e
        }
        var U = !1
        function W(e, t) {
          if (!e || U) return ''
          U = !0
          var n = Error.prepareStackTrace
          Error.prepareStackTrace = void 0
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, [])
                } catch (s) {
                  var r = s
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (s) {
                  r = s
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (s) {
                r = s
              }
              e()
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var a = s.stack.split('\n'),
                  l = r.stack.split('\n'),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var u = '\n' + a[i].replace(' at new ', ' at ')
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        )
                      }
                    } while (1 <= i && 0 <= o)
                  break
                }
            }
          } finally {
            ;(U = !1), (Error.prepareStackTrace = n)
          }
          return (e = e ? e.displayName || e.name : '') ? O(e) : ''
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return O(e.type)
            case 16:
              return O('Lazy')
            case 13:
              return O('Suspense')
            case 19:
              return O('SuspenseList')
            case 0:
            case 2:
            case 15:
              return (e = W(e.type, !1))
            case 11:
              return (e = W(e.type.render, !1))
            case 1:
              return (e = W(e.type, !0))
            default:
              return ''
          }
        }
        function A(e) {
          if (null == e) return null
          if ('function' === typeof e) return e.displayName || e.name || null
          if ('string' === typeof e) return e
          switch (e) {
            case S:
              return 'Fragment'
            case x:
              return 'Portal'
            case C:
              return 'Profiler'
            case _:
              return 'StrictMode'
            case j:
              return 'Suspense'
            case P:
              return 'SuspenseList'
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || 'Context') + '.Consumer'
              case E:
                return (e._context.displayName || 'Context') + '.Provider'
              case T:
                var t = e.render
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                )
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : A(e.type) || 'Memo'
              case z:
                ;(t = e._payload), (e = e._init)
                try {
                  return A(e(t))
                } catch (n) {}
            }
          return null
        }
        function B(e) {
          var t = e.type
          switch (e.tag) {
            case 24:
              return 'Cache'
            case 9:
              return (t.displayName || 'Context') + '.Consumer'
            case 10:
              return (t._context.displayName || 'Context') + '.Provider'
            case 18:
              return 'DehydratedFragment'
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              )
            case 7:
              return 'Fragment'
            case 5:
              return t
            case 4:
              return 'Portal'
            case 3:
              return 'Root'
            case 6:
              return 'Text'
            case 16:
              return A(t)
            case 8:
              return t === _ ? 'StrictMode' : 'Mode'
            case 22:
              return 'Offscreen'
            case 12:
              return 'Profiler'
            case 21:
              return 'Scope'
            case 13:
              return 'Suspense'
            case 19:
              return 'SuspenseList'
            case 25:
              return 'TracingMarker'
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null
              if ('string' === typeof t) return t
          }
          return null
        }
        function H(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e
            default:
              return ''
          }
        }
        function $(e) {
          var t = e.type
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          )
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t]
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  l = n.set
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this)
                    },
                    set: function (e) {
                      ;(r = '' + e), l.call(this, e)
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r
                    },
                    setValue: function (e) {
                      r = '' + e
                    },
                    stopTracking: function () {
                      ;(e._valueTracker = null), delete e[t]
                    },
                  }
                )
              }
            })(e))
        }
        function q(e) {
          if (!e) return !1
          var t = e._valueTracker
          if (!t) return !0
          var n = t.getValue(),
            r = ''
          return (
            e && (r = $(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          )
        }
        function K(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }
        function X(e, t) {
          var n = t.checked
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          })
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked
          ;(n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            })
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1)
        }
        function Z(e, t) {
          G(e, t)
          var n = H(t.value),
            r = t.type
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n)
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value')
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked)
        }
        function J(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return
            ;(t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t)
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n)
        }
        function ee(e, t, n) {
          ;('number' === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
        }
        var te = Array.isArray
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {}
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0)
          } else {
            for (n = '' + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                )
              null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91))
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          })
        }
        function ae(e, t) {
          var n = t.value
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92))
              if (te(n)) {
                if (1 < n.length) throw Error(l(93))
                n = n[0]
              }
              t = n
            }
            null == t && (t = ''), (n = t)
          }
          e._wrapperState = { initialValue: H(n) }
        }
        function le(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue)
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r)
        }
        function ie(e) {
          var t = e.textContent
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t)
        }
        function oe(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg'
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML'
            default:
              return 'http://www.w3.org/1999/xhtml'
          }
        }
        function ue(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? oe(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild)
                for (; t.firstChild; ) e.appendChild(t.firstChild)
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t)
                  })
                }
              : ce)
        function fe(e, t) {
          if (t) {
            var n = e.firstChild
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O']
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px'
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r)
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a)
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e])
          })
        })
        var ve = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        )
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e))
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60))
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61))
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(l(62))
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1
            default:
              return !0
          }
        }
        var ke = null
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          )
        }
        var xe = null,
          Se = null,
          _e = null
        function Ce(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof xe) throw Error(l(280))
            var t = e.stateNode
            t && ((t = wa(t)), xe(e.stateNode, e.type, t))
          }
        }
        function Ee(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e)
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = _e
            if (((_e = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e])
          }
        }
        function Te(e, t) {
          return e(t)
        }
        function je() {}
        var Pe = !1
        function Le(e, t, n) {
          if (Pe) return e(t, n)
          Pe = !0
          try {
            return Te(e, t, n)
          } finally {
            ;(Pe = !1), (null !== Se || null !== _e) && (je(), Ne())
          }
        }
        function ze(e, t) {
          var n = e.stateNode
          if (null === n) return null
          var r = wa(n)
          if (null === r) return null
          n = r[t]
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ;(r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r)
              break e
            default:
              e = !1
          }
          if (e) return null
          if (n && 'function' !== typeof n) throw Error(l(231, t, typeof n))
          return n
        }
        var Re = !1
        if (c)
          try {
            var Ie = {}
            Object.defineProperty(Ie, 'passive', {
              get: function () {
                Re = !0
              },
            }),
              window.addEventListener('test', Ie, Ie),
              window.removeEventListener('test', Ie, Ie)
          } catch (ce) {
            Re = !1
          }
        function Fe(e, t, n, r, a, l, i, o, u) {
          var s = Array.prototype.slice.call(arguments, 3)
          try {
            t.apply(n, s)
          } catch (c) {
            this.onError(c)
          }
        }
        var Me = !1,
          De = null,
          Oe = !1,
          Ue = null,
          We = {
            onError: function (e) {
              ;(Me = !0), (De = e)
            },
          }
        function Ve(e, t, n, r, a, l, i, o, u) {
          ;(Me = !1), (De = null), Fe.apply(We, arguments)
        }
        function Ae(e) {
          var t = e,
            n = e
          if (e.alternate) for (; t.return; ) t = t.return
          else {
            e = t
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return)
            } while (e)
          }
          return 3 === t.tag ? n : null
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated
          }
          return null
        }
        function He(e) {
          if (Ae(e) !== e) throw Error(l(188))
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate
              if (!t) {
                if (null === (t = Ae(e))) throw Error(l(188))
                return t !== e ? null : e
              }
              for (var n = e, r = t; ; ) {
                var a = n.return
                if (null === a) break
                var i = a.alternate
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r
                    continue
                  }
                  break
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e
                    if (i === r) return He(a), t
                    i = i.sibling
                  }
                  throw Error(l(188))
                }
                if (n.return !== r.return) (n = a), (r = i)
                else {
                  for (var o = !1, u = a.child; u; ) {
                    if (u === n) {
                      ;(o = !0), (n = a), (r = i)
                      break
                    }
                    if (u === r) {
                      ;(o = !0), (r = a), (n = i)
                      break
                    }
                    u = u.sibling
                  }
                  if (!o) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        ;(o = !0), (n = i), (r = a)
                        break
                      }
                      if (u === r) {
                        ;(o = !0), (r = i), (n = a)
                        break
                      }
                      u = u.sibling
                    }
                    if (!o) throw Error(l(189))
                  }
                }
                if (n.alternate !== r) throw Error(l(190))
              }
              if (3 !== n.tag) throw Error(l(188))
              return n.stateNode.current === n ? e : t
            })(e))
            ? Qe(e)
            : null
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e
          for (e = e.child; null !== e; ) {
            var t = Qe(e)
            if (null !== t) return t
            e = e.sibling
          }
          return null
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / ut) | 0)) | 0
              },
          ot = Math.log,
          ut = Math.LN2
        var st = 64,
          ct = 4194304
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1
            case 2:
              return 2
            case 4:
              return 4
            case 8:
              return 8
            case 16:
              return 16
            case 32:
              return 32
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e
            case 134217728:
              return 134217728
            case 268435456:
              return 268435456
            case 536870912:
              return 536870912
            case 1073741824:
              return 1073741824
            default:
              return e
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes
          if (0 === n) return 0
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n
          if (0 !== i) {
            var o = i & ~a
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l))
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l))
          if (0 === r) return 0
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a)
          return r
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3
            default:
              return -1
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0
        }
        function mt() {
          var e = st
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e)
          return t
        }
        function vt(e, t, n) {
          ;(e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n)
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t)
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r
            ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
          }
        }
        var bt = 0
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1
        }
        var wt,
          xt,
          St,
          _t,
          Ct,
          Et = !1,
          Nt = [],
          Tt = null,
          jt = null,
          Pt = null,
          Lt = new Map(),
          zt = new Map(),
          Rt = [],
          It =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            )
        function Ft(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Tt = null
              break
            case 'dragenter':
            case 'dragleave':
              jt = null
              break
            case 'mouseover':
            case 'mouseout':
              Pt = null
              break
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId)
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
              zt.delete(t.pointerId)
          }
        }
        function Mt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e)
        }
        function Dt(e) {
          var t = ya(e.target)
          if (null !== t) {
            var n = Ae(t)
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n)
                    })
                  )
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }
        function Ot(e) {
          if (null !== e.blockedOn) return !1
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1
            var r = new (n = e.nativeEvent).constructor(n.type, n)
            ;(ke = r), n.target.dispatchEvent(r), (ke = null), t.shift()
          }
          return !0
        }
        function Ut(e, t, n) {
          Ot(e) && n.delete(t)
        }
        function Wt() {
          ;(Et = !1),
            null !== Tt && Ot(Tt) && (Tt = null),
            null !== jt && Ot(jt) && (jt = null),
            null !== Pt && Ot(Pt) && (Pt = null),
            Lt.forEach(Ut),
            zt.forEach(Ut)
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Wt)))
        }
        function At(e) {
          function t(t) {
            return Vt(t, e)
          }
          if (0 < Nt.length) {
            Vt(Nt[0], e)
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n]
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (
            null !== Tt && Vt(Tt, e),
              null !== jt && Vt(jt, e),
              null !== Pt && Vt(Pt, e),
              Lt.forEach(t),
              zt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null)
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Rt.shift()
        }
        var Bt = k.ReactCurrentBatchConfig,
          Ht = !0
        function $t(e, t, n, r) {
          var a = bt,
            l = Bt.transition
          Bt.transition = null
          try {
            ;(bt = 1), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Bt.transition = l)
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Bt.transition
          Bt.transition = null
          try {
            ;(bt = 4), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Bt.transition = l)
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Xt(e, t, n, r)
            if (null === a) Hr(e, t, r, Kt, n), Ft(e, r)
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0
                  case 'dragenter':
                    return (jt = Mt(jt, e, t, n, r, a)), !0
                  case 'mouseover':
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0
                  case 'pointerover':
                    var l = a.pointerId
                    return Lt.set(l, Mt(Lt.get(l) || null, e, t, n, r, a)), !0
                  case 'gotpointercapture':
                    return (
                      (l = a.pointerId),
                      zt.set(l, Mt(zt.get(l) || null, e, t, n, r, a)),
                      !0
                    )
                }
                return !1
              })(a, e, t, n, r)
            )
              r.stopPropagation()
            else if ((Ft(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a)
                if (
                  (null !== l && wt(l),
                  null === (l = Xt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  l === a)
                )
                  break
                a = l
              }
              null !== a && r.stopPropagation()
            } else Hr(e, t, r, null, n)
          }
        }
        var Kt = null
        function Xt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ae(e))) e = null
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e
              e = null
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null
              e = null
            } else t !== e && (e = null)
          return (Kt = e), null
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4
            case 'message':
              switch (Ze()) {
                case Je:
                  return 1
                case et:
                  return 4
                case tt:
                case nt:
                  return 16
                case rt:
                  return 536870912
                default:
                  return 16
              }
            default:
              return 16
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null
        function en() {
          if (Jt) return Jt
          var e,
            t,
            n = Zt,
            r = n.length,
            a = 'value' in Gt ? Gt.value : Gt.textContent,
            l = a.length
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0))
        }
        function tn(e) {
          var t = e.keyCode
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          )
        }
        function nn() {
          return !0
        }
        function rn() {
          return !1
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]))
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            )
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0
                var e = this.nativeEvent
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn))
              },
              stopPropagation: function () {
                var e = this.nativeEvent
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn))
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          )
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          dn = D({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== un &&
                    (un && 'mousemove' === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln)
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : on
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          gn = an(D({}, dn, { relatedTarget: 0 })),
          vn = an(
            D({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = D({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData
            },
          }),
          bn = an(yn),
          kn = an(D({}, sn, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          xn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Sn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          }
        function _n(e) {
          var t = this.nativeEvent
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e]
        }
        function Cn() {
          return _n
        }
        var En = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key
                if ('Unidentified' !== t) return t
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? xn[e.keyCode] || 'Unidentified'
                : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0
            },
          }),
          Nn = an(En),
          Tn = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Pn = an(
            D({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = D({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(Ln),
          Rn = [9, 13, 27, 32],
          In = c && 'CompositionEvent' in window,
          Fn = null
        c && 'documentMode' in document && (Fn = document.documentMode)
        var Mn = c && 'TextEvent' in window && !Fn,
          Dn = c && (!In || (Fn && 8 < Fn && 11 >= Fn)),
          On = String.fromCharCode(32),
          Un = !1
        function Wn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Rn.indexOf(t.keyCode)
            case 'keydown':
              return 229 !== t.keyCode
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0
            default:
              return !1
          }
        }
        function Vn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null
        }
        var An = !1
        var Bn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        }
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return 'input' === t ? !!Bn[e.type] : 'textarea' === t
        }
        function $n(e, t, n, r) {
          Ee(r),
            0 < (t = Qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }))
        }
        var Qn = null,
          qn = null
        function Kn(e) {
          Or(e, 0)
        }
        function Xn(e) {
          if (q(ka(e))) return e
        }
        function Yn(e, t) {
          if ('change' === e) return t
        }
        var Gn = !1
        if (c) {
          var Zn
          if (c) {
            var Jn = 'oninput' in document
            if (!Jn) {
              var er = document.createElement('div')
              er.setAttribute('oninput', 'return;'),
                (Jn = 'function' === typeof er.oninput)
            }
            Zn = Jn
          } else Zn = !1
          Gn = Zn && (!document.documentMode || 9 < document.documentMode)
        }
        function tr() {
          Qn && (Qn.detachEvent('onpropertychange', nr), (qn = Qn = null))
        }
        function nr(e) {
          if ('value' === e.propertyName && Xn(qn)) {
            var t = []
            $n(t, qn, e, we(e)), Le(Kn, t)
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr()
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Xn(qn)
        }
        function lr(e, t) {
          if ('click' === e) return Xn(t)
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Xn(t)
        }
        var or =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              }
        function ur(e, t) {
          if (or(e, t)) return !0
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1
          var n = Object.keys(e),
            r = Object.keys(t)
          if (n.length !== r.length) return !1
          for (r = 0; r < n.length; r++) {
            var a = n[r]
            if (!d.call(t, a) || !or(e[a], t[a])) return !1
          }
          return !0
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild
          return e
        }
        function cr(e, t) {
          var n,
            r = sr(e)
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
              e = n
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = sr(r)
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          )
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break
            t = K((e = t.contentWindow).document)
          }
          return t
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          )
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length))
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection()
                var a = n.textContent.length,
                  l = Math.min(r.start, a)
                ;(r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l))
                var i = cr(n, r)
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)))
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1
        function kr(e, t, n) {
          var r =
            n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
          br ||
            null == gr ||
            gr !== K(r) ||
            ('selectionStart' in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))))
        }
        function wr(e, t) {
          var n = {}
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          )
        }
        var xr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          Sr = {},
          _r = {}
        function Cr(e) {
          if (Sr[e]) return Sr[e]
          if (!xr[e]) return e
          var t,
            n = xr[e]
          for (t in n) if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t])
          return e
        }
        c &&
          ((_r = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          'TransitionEvent' in window || delete xr.transitionend.transition)
        var Er = Cr('animationend'),
          Nr = Cr('animationiteration'),
          Tr = Cr('animationstart'),
          jr = Cr('transitionend'),
          Pr = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            )
        function zr(e, t) {
          Pr.set(e, t), u(t, [e])
        }
        for (var Rr = 0; Rr < Lr.length; Rr++) {
          var Ir = Lr[Rr]
          zr(Ir.toLowerCase(), 'on' + (Ir[0].toUpperCase() + Ir.slice(1)))
        }
        zr(Er, 'onAnimationEnd'),
          zr(Nr, 'onAnimationIteration'),
          zr(Tr, 'onAnimationStart'),
          zr('dblclick', 'onDoubleClick'),
          zr('focusin', 'onFocus'),
          zr('focusout', 'onBlur'),
          zr(jr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          u('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          )
        var Fr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Mr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Fr)
          )
        function Dr(e, t, n) {
          var r = e.type || 'unknown-event'
          ;(e.currentTarget = n),
            (function (e, t, n, r, a, i, o, u, s) {
              if ((Ve.apply(this, arguments), Me)) {
                if (!Me) throw Error(l(198))
                var c = De
                ;(Me = !1), (De = null), Oe || ((Oe = !0), (Ue = c))
              }
            })(r, t, void 0, e),
            (e.currentTarget = null)
        }
        function Or(e, t) {
          t = 0 !== (4 & t)
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event
            r = r.listeners
            e: {
              var l = void 0
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    u = o.instance,
                    s = o.currentTarget
                  if (((o = o.listener), u !== l && a.isPropagationStopped()))
                    break e
                  Dr(a, o, s), (l = u)
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (o = r[i]).instance),
                    (s = o.currentTarget),
                    (o = o.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e
                  Dr(a, o, s), (l = u)
                }
            }
          }
          if (Oe) throw ((e = Ue), (Oe = !1), (Ue = null), e)
        }
        function Ur(e, t) {
          var n = t[ma]
          void 0 === n && (n = t[ma] = new Set())
          var r = e + '__bubble'
          n.has(r) || (Br(t, e, 2, !1), n.add(r))
        }
        function Wr(e, t, n) {
          var r = 0
          t && (r |= 4), Br(n, e, r, t)
        }
        var Vr = '_reactListening' + Math.random().toString(36).slice(2)
        function Ar(e) {
          if (!e[Vr]) {
            ;(e[Vr] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t &&
                  (Mr.has(t) || Wr(t, !1, e), Wr(t, !0, e))
              })
            var t = 9 === e.nodeType ? e : e.ownerDocument
            null === t || t[Vr] || ((t[Vr] = !0), Wr('selectionchange', !1, t))
          }
        }
        function Br(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t
              break
            case 4:
              a = Qt
              break
            default:
              a = qt
          }
          ;(n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1)
        }
        function Hr(e, t, n, r, a) {
          var l = r
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return
              var i = r.tag
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return
                    i = i.return
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return
                  if (5 === (u = i.tag) || 6 === u) {
                    r = l = i
                    continue e
                  }
                  o = o.parentNode
                }
              }
              r = r.return
            }
          Le(function () {
            var r = l,
              a = we(n),
              i = []
            e: {
              var o = Pr.get(e)
              if (void 0 !== o) {
                var u = cn,
                  s = e
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e
                  case 'keydown':
                  case 'keyup':
                    u = Nn
                    break
                  case 'focusin':
                    ;(s = 'focus'), (u = gn)
                    break
                  case 'focusout':
                    ;(s = 'blur'), (u = gn)
                    break
                  case 'beforeblur':
                  case 'afterblur':
                    u = gn
                    break
                  case 'click':
                    if (2 === n.button) break e
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = hn
                    break
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = mn
                    break
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = jn
                    break
                  case Er:
                  case Nr:
                  case Tr:
                    u = vn
                    break
                  case jr:
                    u = Pn
                    break
                  case 'scroll':
                    u = fn
                    break
                  case 'wheel':
                    u = zn
                    break
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn
                    break
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Tn
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== o ? o + 'Capture' : null) : o
                c = []
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = ze(h, f)) &&
                        c.push($r(h, m, p))),
                    d)
                  )
                    break
                  h = h.return
                }
                0 < c.length &&
                  ((o = new u(o, s, null, n, a)),
                  i.push({ event: o, listeners: c }))
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(o = 'mouseover' === e || 'pointerover' === e) ||
                  n === ke ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (d = Ae(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Tn),
                    (m = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (h = 'pointer')),
                  (d = null == u ? o : ka(u)),
                  (p = null == s ? o : ka(s)),
                  ((o = new c(m, h + 'leave', u, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + 'enter', s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = qr(p)) h++
                    for (p = 0, m = f; m; m = qr(m)) p++
                    for (; 0 < h - p; ) (c = qr(c)), h--
                    for (; 0 < p - h; ) (f = qr(f)), p--
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e
                      ;(c = qr(c)), (f = qr(f))
                    }
                    c = null
                  }
                else c = null
                null !== u && Kr(i, o, u, c, !1),
                  null !== s && null !== d && Kr(i, d, s, c, !0)
              }
              if (
                'select' ===
                  (u =
                    (o = r ? ka(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === o.type)
              )
                var g = Yn
              else if (Hn(o))
                if (Gn) g = ir
                else {
                  g = ar
                  var v = rr
                }
              else
                (u = o.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === o.type || 'radio' === o.type) &&
                  (g = lr)
              switch (
                (g && (g = g(e, r))
                  ? $n(i, g, n, a)
                  : (v && v(e, o, r),
                    'focusout' === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      'number' === o.type &&
                      ee(o, 'number', o.value)),
                (v = r ? ka(r) : window),
                e)
              ) {
                case 'focusin':
                  ;(Hn(v) || 'true' === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null))
                  break
                case 'focusout':
                  yr = vr = gr = null
                  break
                case 'mousedown':
                  br = !0
                  break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ;(br = !1), kr(i, n, a)
                  break
                case 'selectionchange':
                  if (mr) break
                case 'keydown':
                case 'keyup':
                  kr(i, n, a)
              }
              var y
              if (In)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart'
                      break e
                    case 'compositionend':
                      b = 'onCompositionEnd'
                      break e
                    case 'compositionupdate':
                      b = 'onCompositionUpdate'
                      break e
                  }
                  b = void 0
                }
              else
                An
                  ? Wn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart')
              b &&
                (Dn &&
                  'ko' !== n.locale &&
                  (An || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && An && (y = en())
                    : ((Zt = 'value' in (Gt = a) ? Gt.value : Gt.textContent),
                      (An = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new kn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Vn(t)
                        case 'keypress':
                          return 32 !== t.which ? null : ((Un = !0), On)
                        case 'textInput':
                          return (e = t.data) === On && Un ? null : e
                        default:
                          return null
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (An)
                        return 'compositionend' === e || (!In && Wn(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (An = !1), e)
                          : null
                      switch (e) {
                        case 'paste':
                        default:
                          return null
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char
                            if (t.which) return String.fromCharCode(t.which)
                          }
                          return null
                        case 'compositionend':
                          return Dn && 'ko' !== t.locale ? null : t.data
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, 'onBeforeInput')).length &&
                  ((a = new kn('onBeforeInput', 'beforeinput', null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y))
            }
            Or(i, t)
          })
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n }
        }
        function Qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              l = a.stateNode
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = ze(e, n)) && r.unshift($r(e, l, a)),
              null != (l = ze(e, t)) && r.push($r(e, l, a))),
              (e = e.return)
          }
          return r
        }
        function qr(e) {
          if (null === e) return null
          do {
            e = e.return
          } while (e && 5 !== e.tag)
          return e || null
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              u = o.alternate,
              s = o.stateNode
            if (null !== u && u === r) break
            5 === o.tag &&
              null !== s &&
              ((o = s),
              a
                ? null != (u = ze(n, l)) && i.unshift($r(n, u, o))
                : a || (null != (u = ze(n, l)) && i.push($r(n, u, o)))),
              (n = n.return)
          }
          0 !== i.length && e.push({ event: t, listeners: i })
        }
        var Xr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g
        function Gr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Xr, '\n')
            .replace(Yr, '')
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(l(425))
        }
        function Jr() {}
        var ea = null,
          ta = null
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          )
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          la = 'function' === typeof Promise ? Promise : void 0,
          ia =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa)
                }
              : ra
        function oa(e) {
          setTimeout(function () {
            throw e
          })
        }
        function ua(e, t) {
          var n = t,
            r = 0
          do {
            var a = n.nextSibling
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void At(t)
                r--
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
            n = a
          } while (n)
          At(t)
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType
            if (1 === t || 3 === t) break
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
              if ('/$' === t) return null
            }
          }
          return e
        }
        function ca(e) {
          e = e.previousSibling
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e
                t--
              } else '/$' === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          ga = '__reactListeners$' + da,
          va = '__reactHandles$' + da
        function ya(e) {
          var t = e[fa]
          if (t) return t
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n
                  e = ca(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e
        }
        function ka(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode
          throw Error(l(33))
        }
        function wa(e) {
          return e[pa] || null
        }
        var xa = [],
          Sa = -1
        function _a(e) {
          return { current: e }
        }
        function Ca(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--)
        }
        function Ea(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t)
        }
        var Na = {},
          Ta = _a(Na),
          ja = _a(!1),
          Pa = Na
        function La(e, t) {
          var n = e.type.contextTypes
          if (!n) return Na
          var r = e.stateNode
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext
          var a,
            l = {}
          for (a in n) l[a] = t[a]
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          )
        }
        function za(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }
        function Ra() {
          Ca(ja), Ca(Ta)
        }
        function Ia(e, t, n) {
          if (Ta.current !== Na) throw Error(l(168))
          Ea(Ta, t), Ea(ja, n)
        }
        function Fa(e, t, n) {
          var r = e.stateNode
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, B(e) || 'Unknown', a))
          return D({}, n, r)
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Pa = Ta.current),
            Ea(Ta, e),
            Ea(ja, ja.current),
            !0
          )
        }
        function Da(e, t, n) {
          var r = e.stateNode
          if (!r) throw Error(l(169))
          n
            ? ((e = Fa(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(ja),
              Ca(Ta),
              Ea(Ta, e))
            : Ca(ja),
            Ea(ja, n)
        }
        var Oa = null,
          Ua = !1,
          Wa = !1
        function Va(e) {
          null === Oa ? (Oa = [e]) : Oa.push(e)
        }
        function Aa() {
          if (!Wa && null !== Oa) {
            Wa = !0
            var e = 0,
              t = bt
            try {
              var n = Oa
              for (bt = 1; e < n.length; e++) {
                var r = n[e]
                do {
                  r = r(!0)
                } while (null !== r)
              }
              ;(Oa = null), (Ua = !1)
            } catch (a) {
              throw (null !== Oa && (Oa = Oa.slice(e + 1)), qe(Je, Aa), a)
            } finally {
              ;(bt = t), (Wa = !1)
            }
          }
          return null
        }
        var Ba = [],
          Ha = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Xa = null,
          Ya = 1,
          Ga = ''
        function Za(e, t) {
          ;(Ba[Ha++] = Qa), (Ba[Ha++] = $a), ($a = e), (Qa = t)
        }
        function Ja(e, t, n) {
          ;(qa[Ka++] = Ya), (qa[Ka++] = Ga), (qa[Ka++] = Xa), (Xa = e)
          var r = Ya
          e = Ga
          var a = 32 - it(r) - 1
          ;(r &= ~(1 << a)), (n += 1)
          var l = 32 - it(t) + a
          if (30 < l) {
            var i = a - (a % 5)
            ;(l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ga = l + e)
          } else (Ya = (1 << l) | (n << a) | r), (Ga = e)
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0))
        }
        function tl(e) {
          for (; e === $a; )
            ($a = Ba[--Ha]), (Ba[Ha] = null), (Qa = Ba[--Ha]), (Ba[Ha] = null)
          for (; e === Xa; )
            (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Ya = qa[--Ka]),
              (qa[Ka] = null)
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null
        function il(e, t) {
          var n = zs(5, null, null, 0)
          ;(n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n)
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              )
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              )
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = zs(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              )
            default:
              return !1
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }
        function sl(e) {
          if (al) {
            var t = rl
            if (t) {
              var n = t
              if (!ol(e, t)) {
                if (ul(e)) throw Error(l(418))
                t = sa(n.nextSibling)
                var r = nl
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e))
              }
            } else {
              if (ul(e)) throw Error(l(418))
              ;(e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e)
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return
          nl = e
        }
        function dl(e) {
          if (e !== nl) return !1
          if (!al) return cl(e), (al = !0), !1
          var t
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (fl(), Error(l(418)))
            for (; t; ) il(e, t), (t = sa(t.nextSibling))
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317))
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data
                  if ('/$' === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling)
                      break e
                    }
                    t--
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
                }
                e = e.nextSibling
              }
              rl = null
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null
          return !0
        }
        function fl() {
          for (var e = rl; e; ) e = sa(e.nextSibling)
        }
        function pl() {
          ;(rl = nl = null), (al = !1)
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e)
        }
        var ml = k.ReactCurrentBatchConfig
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n])
            return t
          }
          return t
        }
        var vl = _a(null),
          yl = null,
          bl = null,
          kl = null
        function wl() {
          kl = bl = yl = null
        }
        function xl(e) {
          var t = vl.current
          Ca(vl), (e._currentValue = t)
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break
            e = e.return
          }
        }
        function _l(e, t) {
          ;(yl = e),
            (kl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ko = !0), (e.firstContext = null))
        }
        function Cl(e) {
          var t = e._currentValue
          if (kl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308))
              ;(bl = e), (yl.dependencies = { lanes: 0, firstContext: e })
            } else bl = bl.next = e
          return t
        }
        var El = null
        function Nl(e) {
          null === El ? (El = [e]) : El.push(e)
        }
        function Tl(e, t, n, r) {
          var a = t.interleaved
          return (
            null === a
              ? ((n.next = n), Nl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            jl(e, r)
          )
        }
        function jl(e, t) {
          e.lanes |= t
          var n = e.alternate
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return)
          return 3 === n.tag ? n.stateNode : null
        }
        var Pl = !1
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          }
        }
        function zl(e, t) {
          ;(e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              })
        }
        function Rl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }
        }
        function Il(e, t, n) {
          var r = e.updateQueue
          if (null === r) return null
          if (((r = r.shared), 0 !== (2 & ju))) {
            var a = r.pending
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              jl(e, n)
            )
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Nl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            jl(e, n)
          )
        }
        function Fl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        function Ml(e, t) {
          var n = e.updateQueue,
            r = e.alternate
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next)
              } while (null !== n)
              null === l ? (a = l = t) : (l = l.next = t)
            } else a = l = t
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            )
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t)
        }
        function Dl(e, t, n, r) {
          var a = e.updateQueue
          Pl = !1
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending
          if (null !== o) {
            a.shared.pending = null
            var u = o,
              s = u.next
            ;(u.next = null), null === i ? (l = s) : (i.next = s), (i = u)
            var c = e.alternate
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = s) : (o.next = s),
              (c.lastBaseUpdate = u))
          }
          if (null !== l) {
            var d = a.baseState
            for (i = 0, c = s = u = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    })
                e: {
                  var h = e,
                    m = o
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f)
                        break e
                      }
                      d = h
                      break e
                    case 3:
                      h.flags = (-65537 & h.flags) | 128
                    case 0:
                      if (
                        null ===
                          (f =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e
                      d = D({}, d, f)
                      break e
                    case 2:
                      Pl = !0
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o))
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (i |= f)
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break
                ;(o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null)
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t
              do {
                ;(i |= a.lane), (a = a.next)
              } while (a !== t)
            } else null === l && (a.shared.lanes = 0)
            ;(Du |= i), (e.lanes = i), (e.memoizedState = d)
          }
        }
        function Ol(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(l(191, a))
                a.call(r)
              }
            }
        }
        var Ul = new r.Component().refs
        function Wl(e, t, n, r) {
          ;(n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var Vl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ae(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals
            var r = ts(),
              a = ns(e),
              l = Rl(r, a)
            ;(l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (rs(t, e, a, r), Fl(t, e, a))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals
            var r = ts(),
              a = ns(e),
              l = Rl(r, a)
            ;(l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (rs(t, e, a, r), Fl(t, e, a))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var n = ts(),
              r = ns(e),
              a = Rl(n, r)
            ;(a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Il(e, a, r)) && (rs(t, e, r, n), Fl(t, e, r))
          },
        }
        function Al(e, t, n, r, a, l, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l)
        }
        function Bl(e, t, n) {
          var r = !1,
            a = Na,
            l = t.contextType
          return (
            'object' === typeof l && null !== l
              ? (l = Cl(l))
              : ((a = za(t) ? Pa : Ta.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Na)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Vl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          )
        }
        function Hl(e, t, n, r) {
          ;(e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Vl.enqueueReplaceState(t, t.state, null)
        }
        function $l(e, t, n, r) {
          var a = e.stateNode
          ;(a.props = n), (a.state = e.memoizedState), (a.refs = Ul), Ll(e)
          var l = t.contextType
          'object' === typeof l && null !== l
            ? (a.context = Cl(l))
            : ((l = za(t) ? Pa : Ta.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            'function' === typeof (l = t.getDerivedStateFromProps) &&
              (Wl(e, t, l, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Vl.enqueueReplaceState(a, a.state, null),
              Dl(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308)
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309))
                var r = n.stateNode
              }
              if (!r) throw Error(l(147, e))
              var a = r,
                i = '' + e
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs
                    t === Ul && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e)
                  }),
                  (t._stringRef = i),
                  t)
            }
            if ('string' !== typeof e) throw Error(l(284))
            if (!n._owner) throw Error(l(290, e))
          }
          return e
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e
              )
            ))
          )
        }
        function Kl(e) {
          return (0, e._init)(e._payload)
        }
        function Xl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
            }
          }
          function n(n, r) {
            if (!e) return null
            for (; null !== r; ) t(n, r), (r = r.sibling)
            return null
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling)
            return e
          }
          function a(e, t) {
            return ((e = Is(e, t)).index = 0), (e.sibling = null), e
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            )
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Os(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function s(e, t, n, r) {
            var l = n.type
            return l === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ('object' === typeof l &&
                    null !== l &&
                    l.$$typeof === z &&
                    Kl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Fs(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r)
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t)
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Os('' + t, e.mode, n)).return = e), t
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fs(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  )
                case x:
                  return ((t = Us(t, e.mode, n)).return = e), t
                case z:
                  return f(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || F(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t
              ql(e, t)
            }
            return null
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : u(e, t, '' + n, r)
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null
                case x:
                  return n.key === a ? c(e, t, n, r) : null
                case z:
                  return p(e, t, (a = n._init)(n._payload), r)
              }
              if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null)
              ql(e, n)
            }
            return null
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, a)
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  )
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  )
                case z:
                  return h(e, t, n, (0, r._init)(r._payload), a)
              }
              if (te(r) || F(r)) return d(t, (e = e.get(n) || null), r, a, null)
              ql(t, r)
            }
            return null
          }
          function m(a, l, o, u) {
            for (
              var s = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling)
              var v = p(a, d, o[m], u)
              if (null === v) {
                null === d && (d = g)
                break
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (d = g)
            }
            if (m === o.length) return n(a, d), al && Za(a, m), s
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], u)) &&
                  ((l = i(d, l, m)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d))
              return al && Za(a, m), s
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g))
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e)
                }),
              al && Za(a, m),
              s
            )
          }
          function g(a, o, u, s) {
            var c = F(u)
            if ('function' !== typeof c) throw Error(l(150))
            if (null == (u = c.call(u))) throw Error(l(151))
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, y = u.next();
              null !== m && !y.done;
              g++, y = u.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling)
              var b = p(a, m, y.value, s)
              if (null === b) {
                null === m && (m = v)
                break
              }
              e && m && null === b.alternate && t(a, m),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v)
            }
            if (y.done) return n(a, m), al && Za(a, g), c
            if (null === m) {
              for (; !y.done; g++, y = u.next())
                null !== (y = f(a, y.value, s)) &&
                  ((o = i(y, o, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y))
              return al && Za(a, g), c
            }
            for (m = r(a, m); !y.done; g++, y = u.next())
              null !== (y = h(m, a, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y))
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e)
                }),
              al && Za(a, g),
              c
            )
          }
          return function e(r, l, i, u) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var s = i.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l)
                            break e
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === z &&
                            Kl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l)
                          break e
                        }
                        n(r, c)
                        break
                      }
                      t(r, c), (c = c.sibling)
                    }
                    i.type === S
                      ? (((l = Ms(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = l))
                      : (((u = Fs(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ql(r, l, i)),
                        (u.return = r),
                        (r = u))
                  }
                  return o(r)
                case x:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l)
                          break e
                        }
                        n(r, l)
                        break
                      }
                      t(r, l), (l = l.sibling)
                    }
                    ;((l = Us(i, r.mode, u)).return = r), (r = l)
                  }
                  return o(r)
                case z:
                  return e(r, l, (c = i._init)(i._payload), u)
              }
              if (te(i)) return m(r, l, i, u)
              if (F(i)) return g(r, l, i, u)
              ql(r, i)
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Os(i, r.mode, u)).return = r), (r = l)),
                o(r))
              : n(r, l)
          }
        }
        var Yl = Xl(!0),
          Gl = Xl(!1),
          Zl = {},
          Jl = _a(Zl),
          ei = _a(Zl),
          ti = _a(Zl)
        function ni(e) {
          if (e === Zl) throw Error(l(174))
          return e
        }
        function ri(e, t) {
          switch ((Ea(ti, t), Ea(ei, e), Ea(Jl, Zl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '')
              break
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              )
          }
          Ca(Jl), Ea(Jl, t)
        }
        function ai() {
          Ca(Jl), Ca(ei), Ca(ti)
        }
        function li(e) {
          ni(ti.current)
          var t = ni(Jl.current),
            n = ue(t, e.type)
          t !== n && (Ea(ei, e), Ea(Jl, n))
        }
        function ii(e) {
          ei.current === e && (Ca(Jl), Ca(ei))
        }
        var oi = _a(0)
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null
              t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
          }
          return null
        }
        var si = []
        function ci() {
          for (var e = 0; e < si.length; e++)
            si[e]._workInProgressVersionPrimary = null
          si.length = 0
        }
        var di = k.ReactCurrentDispatcher,
          fi = k.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          gi = null,
          vi = !1,
          yi = !1,
          bi = 0,
          ki = 0
        function wi() {
          throw Error(l(321))
        }
        function xi(e, t) {
          if (null === t) return !1
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1
          return !0
        }
        function Si(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (hi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            yi)
          ) {
            i = 0
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301))
              ;(i += 1),
                (gi = mi = null),
                (t.updateQueue = null),
                (di.current = uo),
                (e = n(r, a))
            } while (yi)
          }
          if (
            ((di.current = lo),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (gi = mi = hi = null),
            (vi = !1),
            t)
          )
            throw Error(l(300))
          return e
        }
        function _i() {
          var e = 0 !== bi
          return (bi = 0), e
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          }
          return (
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
          )
        }
        function Ei() {
          if (null === mi) {
            var e = hi.alternate
            e = null !== e ? e.memoizedState : null
          } else e = mi.next
          var t = null === gi ? hi.memoizedState : gi.next
          if (null !== t) (gi = t), (mi = e)
          else {
            if (null === e) throw Error(l(310))
            ;(e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e)
          }
          return gi
        }
        function Ni(e, t) {
          return 'function' === typeof t ? t(e) : t
        }
        function Ti(e) {
          var t = Ei(),
            n = t.queue
          if (null === n) throw Error(l(311))
          n.lastRenderedReducer = e
          var r = mi,
            a = r.baseQueue,
            i = n.pending
          if (null !== i) {
            if (null !== a) {
              var o = a.next
              ;(a.next = i.next), (i.next = o)
            }
            ;(r.baseQueue = a = i), (n.pending = null)
          }
          if (null !== a) {
            ;(i = a.next), (r = r.baseState)
            var u = (o = null),
              s = null,
              c = i
            do {
              var d = c.lane
              if ((pi & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action))
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }
                null === s ? ((u = s = f), (o = r)) : (s = s.next = f),
                  (hi.lanes |= d),
                  (Du |= d)
              }
              c = c.next
            } while (null !== c && c !== i)
            null === s ? (o = r) : (s.next = u),
              or(r, t.memoizedState) || (ko = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = s),
              (n.lastRenderedState = r)
          }
          if (null !== (e = n.interleaved)) {
            a = e
            do {
              ;(i = a.lane), (hi.lanes |= i), (Du |= i), (a = a.next)
            } while (a !== e)
          } else null === a && (n.lanes = 0)
          return [t.memoizedState, n.dispatch]
        }
        function ji(e) {
          var t = Ei(),
            n = t.queue
          if (null === n) throw Error(l(311))
          n.lastRenderedReducer = e
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState
          if (null !== a) {
            n.pending = null
            var o = (a = a.next)
            do {
              ;(i = e(i, o.action)), (o = o.next)
            } while (o !== a)
            or(i, t.memoizedState) || (ko = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i)
          }
          return [i, r]
        }
        function Pi() {}
        function Li(e, t) {
          var n = hi,
            r = Ei(),
            a = t(),
            i = !or(r.memoizedState, a)
          if (
            (i && ((r.memoizedState = a), (ko = !0)),
            (r = r.queue),
            Bi(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Oi(9, Ri.bind(null, n, r, a, t), void 0, null),
              null === Pu)
            )
              throw Error(l(349))
            0 !== (30 & pi) || zi(n, t, a)
          }
          return a
        }
        function zi(e, t, n) {
          ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e)
        }
        function Ri(e, t, n, r) {
          ;(t.value = n), (t.getSnapshot = r), Fi(t) && Mi(e)
        }
        function Ii(e, t, n) {
          return n(function () {
            Fi(t) && Mi(e)
          })
        }
        function Fi(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !or(e, n)
          } catch (r) {
            return !0
          }
        }
        function Mi(e) {
          var t = jl(e, 1)
          null !== t && rs(t, e, 1, -1)
        }
        function Di(e) {
          var t = Ci()
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, hi, e)),
            [t.memoizedState, e]
          )
        }
        function Oi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          )
        }
        function Ui() {
          return Ei().memoizedState
        }
        function Wi(e, t, n, r) {
          var a = Ci()
          ;(hi.flags |= e),
            (a.memoizedState = Oi(1 | t, n, void 0, void 0 === r ? null : r))
        }
        function Vi(e, t, n, r) {
          var a = Ei()
          r = void 0 === r ? null : r
          var l = void 0
          if (null !== mi) {
            var i = mi.memoizedState
            if (((l = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = Oi(t, n, l, r))
          }
          ;(hi.flags |= e), (a.memoizedState = Oi(1 | t, n, l, r))
        }
        function Ai(e, t) {
          return Wi(8390656, 8, e, t)
        }
        function Bi(e, t) {
          return Vi(2048, 8, e, t)
        }
        function Hi(e, t) {
          return Vi(4, 2, e, t)
        }
        function $i(e, t) {
          return Vi(4, 4, e, t)
        }
        function Qi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null)
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null
              })
            : void 0
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vi(4, 4, Qi.bind(null, t, e), n)
          )
        }
        function Ki() {}
        function Xi(e, t) {
          var n = Ei()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e)
        }
        function Yi(e, t) {
          var n = Ei()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e)
        }
        function Gi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (ko = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (hi.lanes |= n), (Du |= n), (e.baseState = !0)),
              t)
        }
        function Zi(e, t) {
          var n = bt
          ;(bt = 0 !== n && 4 > n ? n : 4), e(!0)
          var r = fi.transition
          fi.transition = {}
          try {
            e(!1), t()
          } finally {
            ;(bt = n), (fi.transition = r)
          }
        }
        function Ji() {
          return Ei().memoizedState
        }
        function eo(e, t, n) {
          var r = ns(e)
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n)
          else if (null !== (n = Tl(e, t, n, r))) {
            rs(n, e, r, ts()), ao(n, t, r)
          }
        }
        function to(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }
          if (no(e)) ro(t, a)
          else {
            var l = e.alternate
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n)
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var u = t.interleaved
                  return (
                    null === u
                      ? ((a.next = a), Nl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  )
                }
              } catch (s) {}
            null !== (n = Tl(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ao(n, t, r))
          }
        }
        function no(e) {
          var t = e.alternate
          return e === hi || (null !== t && t === hi)
        }
        function ro(e, t) {
          yi = vi = !0
          var n = e.pending
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t)
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        var lo = {
            readContext: Cl,
            useCallback: wi,
            useContext: wi,
            useEffect: wi,
            useImperativeHandle: wi,
            useInsertionEffect: wi,
            useLayoutEffect: wi,
            useMemo: wi,
            useReducer: wi,
            useRef: wi,
            useState: wi,
            useDebugValue: wi,
            useDeferredValue: wi,
            useTransition: wi,
            useMutableSource: wi,
            useSyncExternalStore: wi,
            useId: wi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Cl,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e
            },
            useContext: Cl,
            useEffect: Ai,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Wi(4194308, 4, Qi.bind(null, t, e), n)
              )
            },
            useLayoutEffect: function (e, t) {
              return Wi(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Wi(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = Ci()
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              )
            },
            useReducer: function (e, t, n) {
              var r = Ci()
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hi, e)),
                [r.memoizedState, e]
              )
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e)
            },
            useState: Di,
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e)
            },
            useTransition: function () {
              var e = Di(!1),
                t = e[0]
              return (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hi,
                a = Ci()
              if (al) {
                if (void 0 === n) throw Error(l(407))
                n = n()
              } else {
                if (((n = t()), null === Pu)) throw Error(l(349))
                0 !== (30 & pi) || zi(r, t, n)
              }
              a.memoizedState = n
              var i = { value: n, getSnapshot: t }
              return (
                (a.queue = i),
                Ai(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Oi(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              )
            },
            useId: function () {
              var e = Ci(),
                t = Pu.identifierPrefix
              if (al) {
                var n = Ga
                ;(t =
                  ':' +
                  t +
                  'R' +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += 'H' + n.toString(32)),
                  (t += ':')
              } else t = ':' + t + 'r' + (n = ki++).toString(32) + ':'
              return (e.memoizedState = t)
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Cl,
            useCallback: Xi,
            useContext: Cl,
            useEffect: Bi,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: $i,
            useMemo: Yi,
            useReducer: Ti,
            useRef: Ui,
            useState: function () {
              return Ti(Ni)
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              return Gi(Ei(), mi.memoizedState, e)
            },
            useTransition: function () {
              return [Ti(Ni)[0], Ei().memoizedState]
            },
            useMutableSource: Pi,
            useSyncExternalStore: Li,
            useId: Ji,
            unstable_isNewReconciler: !1,
          },
          uo = {
            readContext: Cl,
            useCallback: Xi,
            useContext: Cl,
            useEffect: Bi,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: $i,
            useMemo: Yi,
            useReducer: ji,
            useRef: Ui,
            useState: function () {
              return ji(Ni)
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {
              var t = Ei()
              return null === mi
                ? (t.memoizedState = e)
                : Gi(t, mi.memoizedState, e)
            },
            useTransition: function () {
              return [ji(Ni)[0], Ei().memoizedState]
            },
            useMutableSource: Pi,
            useSyncExternalStore: Li,
            useId: Ji,
            unstable_isNewReconciler: !1,
          }
        function so(e, t) {
          try {
            var n = '',
              r = t
            do {
              ;(n += V(r)), (r = r.return)
            } while (r)
            var a = n
          } catch (l) {
            a = '\nError generating stack: ' + l.message + '\n' + l.stack
          }
          return { value: e, source: t, stack: a, digest: null }
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          }
        }
        function fo(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout(function () {
              throw n
            })
          }
        }
        var po = 'function' === typeof WeakMap ? WeakMap : Map
        function ho(e, t, n) {
          ;((n = Rl(-1, n)).tag = 3), (n.payload = { element: null })
          var r = t.value
          return (
            (n.callback = function () {
              $u || (($u = !0), (Qu = r)), fo(0, t)
            }),
            n
          )
        }
        function mo(e, t, n) {
          ;(n = Rl(-1, n)).tag = 3
          var r = e.type.getDerivedStateFromError
          if ('function' === typeof r) {
            var a = t.value
            ;(n.payload = function () {
              return r(a)
            }),
              (n.callback = function () {
                fo(0, t)
              })
          }
          var l = e.stateNode
          return (
            null !== l &&
              'function' === typeof l.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  'function' !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this))
                var e = t.stack
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                })
              }),
            n
          )
        }
        function go(e, t, n) {
          var r = e.pingCache
          if (null === r) {
            r = e.pingCache = new po()
            var a = new Set()
            r.set(t, a)
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a))
          a.has(n) || (a.add(n), (e = Es.bind(null, e, t, n)), t.then(e, e))
        }
        function vo(e) {
          do {
            var t
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e
            e = e.return
          } while (null !== e)
          return null
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Rl(-1, 1)).tag = 2), Il(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e)
        }
        var bo = k.ReactCurrentOwner,
          ko = !1
        function wo(e, t, n, r) {
          t.child = null === e ? Gl(t, null, n, r) : Yl(t, e.child, n, r)
        }
        function xo(e, t, n, r, a) {
          n = n.render
          var l = t.ref
          return (
            _l(t, a),
            (r = Si(e, t, n, r, l, a)),
            (n = _i()),
            null === e || ko
              ? (al && n && el(t), (t.flags |= 1), wo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $o(e, t, a))
          )
        }
        function So(e, t, n, r, a) {
          if (null === e) {
            var l = n.type
            return 'function' !== typeof l ||
              Rs(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), _o(e, t, l, r, a))
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return $o(e, t, a)
          }
          return (
            (t.flags |= 1),
            ((e = Is(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          )
        }
        function _o(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps
            if (ur(l, r) && e.ref === t.ref) {
              if (((ko = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $o(e, t, a)
              0 !== (131072 & e.flags) && (ko = !0)
            }
          }
          return No(e, t, n, r, a)
        }
        function Co(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(Iu, Ru),
                (Ru |= n)
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(Iu, Ru),
                  (Ru |= e),
                  null
                )
              ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ea(Iu, Ru),
                (Ru |= r)
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(Iu, Ru),
              (Ru |= r)
          return wo(e, t, a, n), t.child
        }
        function Eo(e, t) {
          var n = t.ref
          ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152))
        }
        function No(e, t, n, r, a) {
          var l = za(n) ? Pa : Ta.current
          return (
            (l = La(t, l)),
            _l(t, a),
            (n = Si(e, t, n, r, l, a)),
            (r = _i()),
            null === e || ko
              ? (al && r && el(t), (t.flags |= 1), wo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $o(e, t, a))
          )
        }
        function To(e, t, n, r, a) {
          if (za(n)) {
            var l = !0
            Ma(t)
          } else l = !1
          if ((_l(t, a), null === t.stateNode))
            Ho(e, t), Bl(t, n, r), $l(t, n, r, a), (r = !0)
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps
            i.props = o
            var u = i.context,
              s = n.contextType
            'object' === typeof s && null !== s
              ? (s = Cl(s))
              : (s = La(t, (s = za(n) ? Pa : Ta.current)))
            var c = n.getDerivedStateFromProps,
              d =
                'function' === typeof c ||
                'function' === typeof i.getSnapshotBeforeUpdate
            d ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((o !== r || u !== s) && Hl(t, i, r, s)),
              (Pl = !1)
            var f = t.memoizedState
            ;(i.state = f),
              Dl(t, r, i, a),
              (u = t.memoizedState),
              o !== r || f !== u || ja.current || Pl
                ? ('function' === typeof c &&
                    (Wl(t, n, c, r), (u = t.memoizedState)),
                  (o = Pl || Al(t, n, o, r, f, u, s))
                    ? (d ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = o))
                : ('function' === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1))
          } else {
            ;(i = t.stateNode),
              zl(e, t),
              (o = t.memoizedProps),
              (s = t.type === t.elementType ? o : gl(t.type, o)),
              (i.props = s),
              (d = t.pendingProps),
              (f = i.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = Cl(u))
                : (u = La(t, (u = za(n) ? Pa : Ta.current)))
            var p = n.getDerivedStateFromProps
            ;(c =
              'function' === typeof p ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== u) && Hl(t, i, r, u)),
              (Pl = !1),
              (f = t.memoizedState),
              (i.state = f),
              Dl(t, r, i, a)
            var h = t.memoizedState
            o !== d || f !== h || ja.current || Pl
              ? ('function' === typeof p &&
                  (Wl(t, n, p, r), (h = t.memoizedState)),
                (s = Pl || Al(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ('function' !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1))
          }
          return jo(e, t, n, r, l, a)
        }
        function jo(e, t, n, r, a, l) {
          Eo(e, t)
          var i = 0 !== (128 & t.flags)
          if (!r && !i) return a && Da(t, n, !1), $o(e, t, l)
          ;(r = t.stateNode), (bo.current = t)
          var o =
            i && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render()
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, o, l)))
              : wo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          )
        }
        function Po(e) {
          var t = e.stateNode
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            ri(e, t.containerInfo)
        }
        function Lo(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), wo(e, t, n, r), t.child
        }
        var zo,
          Ro,
          Io,
          Fo,
          Mo = { dehydrated: null, treeContext: null, retryLane: 0 }
        function Do(e) {
          return { baseLanes: e, cachePool: null, transitions: null }
        }
        function Oo(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            u = 0 !== (128 & t.flags)
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ea(oi, 1 & i),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = u))
                        : (o = Ds(u, a, 0, null)),
                      (e = Ms(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Do(n)),
                      (t.memoizedState = Mo),
                      e)
                    : Uo(t, u))
            )
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Wo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Ds(
                      { mode: 'visible', children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ms(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Yl(t, e.child, null, o),
                    (t.child.memoizedState = Do(o)),
                    (t.memoizedState = Mo),
                    i)
              if (0 === (1 & t.mode)) return Wo(e, t, o, null)
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst
                return (
                  (r = u), Wo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                )
              }
              if (((u = 0 !== (o & e.childLanes)), ko || u)) {
                if (null !== (r = Pu)) {
                  switch (o & -o) {
                    case 4:
                      a = 2
                      break
                    case 16:
                      a = 8
                      break
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32
                      break
                    case 536870912:
                      a = 268435456
                      break
                    default:
                      a = 0
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), jl(e, a), rs(r, e, a, -1))
                }
                return gs(), Wo(e, t, o, (r = co(Error(l(421)))))
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ts.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Ya),
                    (qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  (t = Uo(t, r.children)),
                  (t.flags |= 4096),
                  t)
            })(e, t, u, a, r, i, n)
          if (o) {
            ;(o = a.fallback), (u = t.mode), (r = (i = e.child).sibling)
            var s = { mode: 'hidden', children: a.children }
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Is(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Is(r, o))
                : ((o = Ms(o, u, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Do(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (o.memoizedState = u),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mo),
              a
            )
          }
          return (
            (e = (o = e.child).sibling),
            (a = Is(o, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          )
        }
        function Uo(e, t) {
          return (
            ((t = Ds(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          )
        }
        function Wo(e, t, n, r) {
          return (
            null !== r && hl(r),
            Yl(t, e.child, null, n),
            ((e = Uo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          )
        }
        function Vo(e, t, n) {
          e.lanes |= t
          var r = e.alternate
          null !== r && (r.lanes |= t), Sl(e.return, t, n)
        }
        function Ao(e, t, n, r, a) {
          var l = e.memoizedState
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a))
        }
        function Bo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail
          if ((wo(e, t, r.children, n), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128)
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vo(e, n, t)
                else if (19 === e.tag) Vo(e, n, t)
                else if (null !== e.child) {
                  ;(e.child.return = e), (e = e.child)
                  continue
                }
                if (e === t) break e
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e
                  e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
              }
            r &= 1
          }
          if ((Ea(oi, r), 0 === (1 & t.mode))) t.memoizedState = null
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling)
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ao(t, !1, a, n, l)
                break
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a
                    break
                  }
                  ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
                }
                Ao(t, !0, n, null, l)
                break
              case 'together':
                Ao(t, !1, null, null, void 0)
                break
              default:
                t.memoizedState = null
            }
          return t.child
        }
        function Ho(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
        }
        function $o(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null
          if (null !== e && t.child !== e.child) throw Error(l(153))
          if (null !== t.child) {
            for (
              n = Is((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Is(e, e.pendingProps)).return = t)
            n.sibling = null
          }
          return t.child
        }
        function Qo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling)
                null === n ? (e.tail = null) : (n.sibling = null)
                break
              case 'collapsed':
                n = e.tail
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling)
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null)
            }
        }
        function qo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling)
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling)
          return (e.subtreeFlags |= r), (e.childLanes = n), t
        }
        function Ko(e, t, n) {
          var r = t.pendingProps
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qo(t), null
            case 1:
            case 17:
              return za(t.type) && Ra(), qo(t), null
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Ca(ja),
                Ca(Ta),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Ro(e, t),
                qo(t),
                null
              )
            case 5:
              ii(t)
              var a = ni(ti.current)
              if (((n = t.type), null !== e && null != t.stateNode))
                Io(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166))
                  return qo(t), null
                }
                if (((e = ni(Jl.current)), dl(t))) {
                  ;(r = t.stateNode), (n = t.type)
                  var i = t.memoizedProps
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Ur('cancel', r), Ur('close', r)
                      break
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ur('load', r)
                      break
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Fr.length; a++) Ur(Fr[a], r)
                      break
                    case 'source':
                      Ur('error', r)
                      break
                    case 'img':
                    case 'image':
                    case 'link':
                      Ur('error', r), Ur('load', r)
                      break
                    case 'details':
                      Ur('toggle', r)
                      break
                    case 'input':
                      Y(r, i), Ur('invalid', r)
                      break
                    case 'select':
                      ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur('invalid', r)
                      break
                    case 'textarea':
                      ae(r, i), Ur('invalid', r)
                  }
                  for (var u in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u]
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ['children', '' + s]))
                        : o.hasOwnProperty(u) &&
                          null != s &&
                          'onScroll' === u &&
                          Ur('scroll', r)
                    }
                  switch (n) {
                    case 'input':
                      Q(r), J(r, i, !0)
                      break
                    case 'textarea':
                      Q(r), ie(r)
                      break
                    case 'select':
                    case 'option':
                      break
                    default:
                      'function' === typeof i.onClick && (r.onclick = Jr)
                  }
                  ;(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4)
                } else {
                  ;(u = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = oe(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          'select' === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    zo(e, t, !1, !1),
                    (t.stateNode = e)
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Ur('cancel', e), Ur('close', e), (a = r)
                        break
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ur('load', e), (a = r)
                        break
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Fr.length; a++) Ur(Fr[a], e)
                        a = r
                        break
                      case 'source':
                        Ur('error', e), (a = r)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        Ur('error', e), Ur('load', e), (a = r)
                        break
                      case 'details':
                        Ur('toggle', e), (a = r)
                        break
                      case 'input':
                        Y(e, r), (a = X(e, r)), Ur('invalid', e)
                        break
                      case 'option':
                      default:
                        a = r
                        break
                      case 'select':
                        ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Ur('invalid', e)
                        break
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Ur('invalid', e)
                    }
                    for (i in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i]
                        'style' === i
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : 'children' === i
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && fe(e, c)
                            : 'number' === typeof c && fe(e, '' + c)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && 'onScroll' === i && Ur('scroll', e)
                              : null != c && b(e, i, c, u))
                      }
                    switch (n) {
                      case 'input':
                        Q(e), J(e, r, !1)
                        break
                      case 'textarea':
                        Q(e), ie(e)
                        break
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + H(r.value))
                        break
                      case 'select':
                        ;(e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0)
                        break
                      default:
                        'function' === typeof a.onClick && (e.onclick = Jr)
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus
                        break e
                      case 'img':
                        r = !0
                        break e
                      default:
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              }
              return qo(t), null
            case 6:
              if (e && null != t.stateNode) Fo(e, t, e.memoizedProps, r)
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(l(166))
                if (((n = ni(ti.current)), ni(Jl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                        break
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                    }
                  i && (t.flags |= 4)
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r)
              }
              return qo(t), null
            case 13:
              if (
                (Ca(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1)
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318))
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317))
                    i[fa] = t
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4)
                  qo(t), (i = !1)
                } else null !== ll && (os(ll), (ll = null)), (i = !0)
                if (!i) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Fu && (Fu = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qo(t),
                  null)
            case 4:
              return (
                ai(),
                Ro(e, t),
                null === e && Ar(t.stateNode.containerInfo),
                qo(t),
                null
              )
            case 10:
              return xl(t.type._context), qo(t), null
            case 19:
              if ((Ca(oi), null === (i = t.memoizedState))) return qo(t), null
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Qo(i, !1)
                else {
                  if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ui(e))) {
                        for (
                          t.flags |= 128,
                            Qo(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling)
                        return Ea(oi, (1 & oi.current) | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== i.tail &&
                    Ge() > Bu &&
                    ((t.flags |= 128), (r = !0), Qo(i, !1), (t.lanes = 4194304))
                }
              else {
                if (!r)
                  if (null !== (e = ui(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        'hidden' === i.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return qo(t), null
                  } else
                    2 * Ge() - i.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (t.lanes = 4194304))
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u))
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = oi.current),
                  Ea(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qo(t), null)
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ru) &&
                    (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qo(t),
                null
              )
            case 24:
            case 25:
              return null
          }
          throw Error(l(156, t.tag))
        }
        function Xo(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                za(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 3:
              return (
                ai(),
                Ca(ja),
                Ca(Ta),
                ci(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 5:
              return ii(t), null
            case 13:
              if (
                (Ca(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340))
                pl()
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            case 19:
              return Ca(oi), null
            case 4:
              return ai(), null
            case 10:
              return xl(t.type._context), null
            case 22:
            case 23:
              return fs(), null
            default:
              return null
          }
        }
        ;(zo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
            else if (4 !== n.tag && null !== n.child) {
              ;(n.child.return = n), (n = n.child)
              continue
            }
            if (n === t) break
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return
              n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
          }
        }),
          (Ro = function () {}),
          (Io = function (e, t, n, r) {
            var a = e.memoizedProps
            if (a !== r) {
              ;(e = t.stateNode), ni(Jl.current)
              var l,
                i = null
              switch (n) {
                case 'input':
                  ;(a = X(e, a)), (r = X(e, r)), (i = [])
                  break
                case 'select':
                  ;(a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = [])
                  break
                case 'textarea':
                  ;(a = re(e, a)), (r = re(e, r)), (i = [])
                  break
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr)
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var u = a[c]
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null))
              for (c in r) {
                var s = r[c]
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ''))
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]))
                    } else n || (i || (i = []), i.push(c, n)), (n = s)
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : 'children' === c
                      ? ('string' !== typeof s && 'number' !== typeof s) ||
                        (i = i || []).push(c, '' + s)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != s && 'onScroll' === c && Ur('scroll', e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s))
              }
              n && (i = i || []).push('style', n)
              var c = i
              ;(t.updateQueue = c) && (t.flags |= 4)
            }
          }),
          (Fo = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
          })
        var Yo = !1,
          Go = !1,
          Zo = 'function' === typeof WeakSet ? WeakSet : Set,
          Jo = null
        function eu(e, t) {
          var n = e.ref
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null)
              } catch (r) {
                Cs(e, t, r)
              }
            else n.current = null
        }
        function tu(e, t, n) {
          try {
            n()
          } catch (r) {
            Cs(e, t, r)
          }
        }
        var nu = !1
        function ru(e, t, n) {
          var r = t.updateQueue
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next)
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy
                ;(a.destroy = void 0), void 0 !== l && tu(t, n, l)
              }
              a = a.next
            } while (a !== r)
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next)
            do {
              if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }
        function lu(e) {
          var t = e.ref
          if (null !== t) {
            var n = e.stateNode
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e)
          }
        }
        function iu(e) {
          var t = e.alternate
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null
              e = e.return
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e
              if (null === e.child || 4 === e.tag) continue e
              ;(e.child.return = e), (e = e.child)
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }
        function su(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr))
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling)
        }
        function cu(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling)
        }
        var du = null,
          fu = !1
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling)
        }
        function hu(e, t, n) {
          if (lt && 'function' === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n)
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Go || eu(n, t)
            case 6:
              var r = du,
                a = fu
              ;(du = null),
                pu(e, t, n),
                (fu = a),
                null !== (du = r) &&
                  (fu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : du.removeChild(n.stateNode))
              break
            case 18:
              null !== du &&
                (fu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    At(e))
                  : ua(du, n.stateNode))
              break
            case 4:
              ;(r = du),
                (a = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = a)
              break
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Go &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next
                do {
                  var l = a,
                    i = l.destroy
                  ;(l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      tu(n, t, i),
                    (a = a.next)
                } while (a !== r)
              }
              pu(e, t, n)
              break
            case 1:
              if (
                !Go &&
                (eu(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ;(r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount()
                } catch (o) {
                  Cs(n, t, o)
                }
              pu(e, t, n)
              break
            case 21:
              pu(e, t, n)
              break
            case 22:
              1 & n.mode
                ? ((Go = (r = Go) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Go = r))
                : pu(e, t, n)
              break
            default:
              pu(e, t, n)
          }
        }
        function mu(e) {
          var t = e.updateQueue
          if (null !== t) {
            e.updateQueue = null
            var n = e.stateNode
            null === n && (n = e.stateNode = new Zo()),
              t.forEach(function (t) {
                var r = js.bind(null, e, t)
                n.has(t) || (n.add(t), t.then(r, r))
              })
          }
        }
        function gu(e, t) {
          var n = t.deletions
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r]
              try {
                var i = e,
                  o = t,
                  u = o
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      ;(du = u.stateNode), (fu = !1)
                      break e
                    case 3:
                    case 4:
                      ;(du = u.stateNode.containerInfo), (fu = !0)
                      break e
                  }
                  u = u.return
                }
                if (null === du) throw Error(l(160))
                hu(i, o, a), (du = null), (fu = !1)
                var s = a.alternate
                null !== s && (s.return = null), (a.return = null)
              } catch (c) {
                Cs(a, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling)
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e)
                } catch (g) {
                  Cs(e, e.return, g)
                }
                try {
                  ru(5, e, e.return)
                } catch (g) {
                  Cs(e, e.return, g)
                }
              }
              break
            case 1:
              gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return)
              break
            case 5:
              if (
                (gu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode
                try {
                  fe(a, '')
                } catch (g) {
                  Cs(e, e.return, g)
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u &&
                      'radio' === i.type &&
                      null != i.name &&
                      G(a, i),
                      be(u, o)
                    var c = be(u, i)
                    for (o = 0; o < s.length; o += 2) {
                      var d = s[o],
                        f = s[o + 1]
                      'style' === d
                        ? ge(a, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(a, f)
                        : 'children' === d
                        ? fe(a, f)
                        : b(a, d, f, c)
                    }
                    switch (u) {
                      case 'input':
                        Z(a, i)
                        break
                      case 'textarea':
                        le(a, i)
                        break
                      case 'select':
                        var p = a._wrapperState.wasMultiple
                        a._wrapperState.wasMultiple = !!i.multiple
                        var h = i.value
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : '', !1))
                    }
                    a[pa] = i
                  } catch (g) {
                    Cs(e, e.return, g)
                  }
              }
              break
            case 6:
              if ((gu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162))
                ;(a = e.stateNode), (i = e.memoizedProps)
                try {
                  a.nodeValue = i
                } catch (g) {
                  Cs(e, e.return, g)
                }
              }
              break
            case 3:
              if (
                (gu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  At(t.containerInfo)
                } catch (g) {
                  Cs(e, e.return, g)
                }
              break
            case 4:
            default:
              gu(t, e), yu(e)
              break
            case 13:
              gu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Au = Ge())),
                4 & r && mu(e)
              break
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Go = (c = Go) || d), gu(t, e), (Go = c))
                  : gu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (f = Jo = d; null !== Jo; ) {
                      switch (((h = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return)
                          break
                        case 1:
                          eu(p, p.return)
                          var m = p.stateNode
                          if ('function' === typeof m.componentWillUnmount) {
                            ;(r = p), (n = p.return)
                            try {
                              ;(t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount()
                            } catch (g) {
                              Cs(r, n, g)
                            }
                          }
                          break
                        case 5:
                          eu(p, p.return)
                          break
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(f)
                            continue
                          }
                      }
                      null !== h ? ((h.return = p), (Jo = h)) : xu(f)
                    }
                    d = d.sibling
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f
                      try {
                        ;(a = f.stateNode),
                          c
                            ? 'function' === typeof (i = a.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((u = f.stateNode),
                              (o =
                                void 0 !== (s = f.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = me('display', o)))
                      } catch (g) {
                        Cs(e, e.return, g)
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps
                      } catch (g) {
                        Cs(e, e.return, g)
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    ;(f.child.return = f), (f = f.child)
                    continue
                  }
                  if (f === e) break e
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e
                    d === f && (d = null), (f = f.return)
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling)
                }
              }
              break
            case 19:
              gu(t, e), yu(e), 4 & r && mu(e)
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n
                    break e
                  }
                  n = n.return
                }
                throw Error(l(160))
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)), cu(e, uu(e), a)
                  break
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo
                  su(e, uu(e), i)
                  break
                default:
                  throw Error(l(161))
              }
            } catch (o) {
              Cs(e, e.return, o)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }
        function bu(e, t, n) {
          ;(Jo = e), ku(e, t, n)
        }
        function ku(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yo
              if (!i) {
                var o = a.alternate,
                  u = (null !== o && null !== o.memoizedState) || Go
                o = Yo
                var s = Go
                if (((Yo = i), (Go = u) && !s))
                  for (Jo = a; null !== Jo; )
                    (u = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = i), (Jo = u))
                        : Su(a)
                for (; null !== l; ) (Jo = l), ku(l, t, n), (l = l.sibling)
                ;(Jo = a), (Yo = o), (Go = s)
              }
              wu(e)
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : wu(e)
          }
        }
        function wu(e) {
          for (; null !== Jo; ) {
            var t = Jo
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go || au(5, t)
                      break
                    case 1:
                      var r = t.stateNode
                      if (4 & t.flags && !Go)
                        if (null === n) r.componentDidMount()
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps)
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          )
                        }
                      var i = t.updateQueue
                      null !== i && Ol(t, i, r)
                      break
                    case 3:
                      var o = t.updateQueue
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode
                          }
                        Ol(t, o, n)
                      }
                      break
                    case 5:
                      var u = t.stateNode
                      if (null === n && 4 & t.flags) {
                        n = u
                        var s = t.memoizedProps
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && n.focus()
                            break
                          case 'img':
                            s.src && (n.src = s.src)
                        }
                      }
                      break
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate
                        if (null !== c) {
                          var d = c.memoizedState
                          if (null !== d) {
                            var f = d.dehydrated
                            null !== f && At(f)
                          }
                        }
                      }
                      break
                    default:
                      throw Error(l(163))
                  }
                Go || (512 & t.flags && lu(t))
              } catch (p) {
                Cs(t, t.return, p)
              }
            }
            if (t === e) {
              Jo = null
              break
            }
            if (null !== (n = t.sibling)) {
              ;(n.return = t.return), (Jo = n)
              break
            }
            Jo = t.return
          }
        }
        function xu(e) {
          for (; null !== Jo; ) {
            var t = Jo
            if (t === e) {
              Jo = null
              break
            }
            var n = t.sibling
            if (null !== n) {
              ;(n.return = t.return), (Jo = n)
              break
            }
            Jo = t.return
          }
        }
        function Su(e) {
          for (; null !== Jo; ) {
            var t = Jo
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return
                  try {
                    au(4, t)
                  } catch (u) {
                    Cs(t, n, u)
                  }
                  break
                case 1:
                  var r = t.stateNode
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return
                    try {
                      r.componentDidMount()
                    } catch (u) {
                      Cs(t, a, u)
                    }
                  }
                  var l = t.return
                  try {
                    lu(t)
                  } catch (u) {
                    Cs(t, l, u)
                  }
                  break
                case 5:
                  var i = t.return
                  try {
                    lu(t)
                  } catch (u) {
                    Cs(t, i, u)
                  }
              }
            } catch (u) {
              Cs(t, t.return, u)
            }
            if (t === e) {
              Jo = null
              break
            }
            var o = t.sibling
            if (null !== o) {
              ;(o.return = t.return), (Jo = o)
              break
            }
            Jo = t.return
          }
        }
        var _u,
          Cu = Math.ceil,
          Eu = k.ReactCurrentDispatcher,
          Nu = k.ReactCurrentOwner,
          Tu = k.ReactCurrentBatchConfig,
          ju = 0,
          Pu = null,
          Lu = null,
          zu = 0,
          Ru = 0,
          Iu = _a(0),
          Fu = 0,
          Mu = null,
          Du = 0,
          Ou = 0,
          Uu = 0,
          Wu = null,
          Vu = null,
          Au = 0,
          Bu = 1 / 0,
          Hu = null,
          $u = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Xu = null,
          Yu = 0,
          Gu = 0,
          Zu = null,
          Ju = -1,
          es = 0
        function ts() {
          return 0 !== (6 & ju) ? Ge() : -1 !== Ju ? Ju : (Ju = Ge())
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & ju) && 0 !== zu
            ? zu & -zu
            : null !== ml.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type))
        }
        function rs(e, t, n, r) {
          if (50 < Gu) throw ((Gu = 0), (Zu = null), Error(l(185)))
          vt(e, n, r),
            (0 !== (2 & ju) && e === Pu) ||
              (e === Pu && (0 === (2 & ju) && (Ou |= n), 4 === Fu && us(e, zu)),
              as(e, r),
              1 === n &&
                0 === ju &&
                0 === (1 & t.mode) &&
                ((Bu = Ge() + 500), Ua && Aa()))
        }
        function as(e, t) {
          var n = e.callbackNode
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                u = a[i]
              ;-1 === u
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : u <= t && (e.expiredLanes |= o),
                (l &= ~o)
            }
          })(e, t)
          var r = ft(e, e === Pu ? zu : 0)
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    ;(Ua = !0), Va(e)
                  })(ss.bind(null, e))
                : Va(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & ju) && Aa()
                }),
                (n = null)
            else {
              switch (kt(r)) {
                case 1:
                  n = Je
                  break
                case 4:
                  n = et
                  break
                case 16:
                default:
                  n = tt
                  break
                case 536870912:
                  n = rt
              }
              n = Ps(n, ls.bind(null, e))
            }
            ;(e.callbackPriority = t), (e.callbackNode = n)
          }
        }
        function ls(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & ju))) throw Error(l(327))
          var n = e.callbackNode
          if (Ss() && e.callbackNode !== n) return null
          var r = ft(e, e === Pu ? zu : 0)
          if (0 === r) return null
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r)
          else {
            t = r
            var a = ju
            ju |= 2
            var i = ms()
            for (
              (Pu === e && zu === t) ||
              ((Hu = null), (Bu = Ge() + 500), ps(e, t));
              ;

            )
              try {
                bs()
                break
              } catch (u) {
                hs(e, u)
              }
            wl(),
              (Eu.current = i),
              (ju = a),
              null !== Lu ? (t = 0) : ((Pu = null), (zu = 0), (t = Fu))
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ge()), n)
            if (6 === t) us(e, r)
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot
                            a = a.value
                            try {
                              if (!or(l(), a)) return !1
                            } catch (o) {
                              return !1
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n)
                      else {
                        if (t === e) break
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0
                          t = t.return
                        }
                        ;(t.sibling.return = t.return), (t = t.sibling)
                      }
                    }
                    return !0
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ge()), n)
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345))
                case 2:
                case 5:
                  xs(e, Vu, Hu)
                  break
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Au + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a)
                      break
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Vu, Hu), t)
                    break
                  }
                  xs(e, Vu, Hu)
                  break
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r)
                    ;(i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i)
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Vu, Hu), r)
                    break
                  }
                  xs(e, Vu, Hu)
                  break
                default:
                  throw Error(l(329))
              }
            }
          }
          return as(e, Ge()), e.callbackNode === n ? ls.bind(null, e) : null
        }
        function is(e, t) {
          var n = Wu
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Vu), (Vu = n), null !== t && os(t)),
            e
          )
        }
        function os(e) {
          null === Vu ? (Vu = e) : Vu.push.apply(Vu, e)
        }
        function us(e, t) {
          for (
            t &= ~Uu,
              t &= ~Ou,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n
            ;(e[n] = -1), (t &= ~r)
          }
        }
        function ss(e) {
          if (0 !== (6 & ju)) throw Error(l(327))
          Ss()
          var t = ft(e, 0)
          if (0 === (1 & t)) return as(e, Ge()), null
          var n = vs(e, t)
          if (0 !== e.tag && 2 === n) {
            var r = ht(e)
            0 !== r && ((t = r), (n = is(e, r)))
          }
          if (1 === n) throw ((n = Mu), ps(e, 0), us(e, t), as(e, Ge()), n)
          if (6 === n) throw Error(l(345))
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Vu, Hu),
            as(e, Ge()),
            null
          )
        }
        function cs(e, t) {
          var n = ju
          ju |= 1
          try {
            return e(t)
          } finally {
            0 === (ju = n) && ((Bu = Ge() + 500), Ua && Aa())
          }
        }
        function ds(e) {
          null !== Xu && 0 === Xu.tag && 0 === (6 & ju) && Ss()
          var t = ju
          ju |= 1
          var n = Tu.transition,
            r = bt
          try {
            if (((Tu.transition = null), (bt = 1), e)) return e()
          } finally {
            ;(bt = r), (Tu.transition = n), 0 === (6 & (ju = t)) && Aa()
          }
        }
        function fs() {
          ;(Ru = Iu.current), Ca(Iu)
        }
        function ps(e, t) {
          ;(e.finishedWork = null), (e.finishedLanes = 0)
          var n = e.timeoutHandle
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Lu))
            for (n = Lu.return; null !== n; ) {
              var r = n
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra()
                  break
                case 3:
                  ai(), Ca(ja), Ca(Ta), ci()
                  break
                case 5:
                  ii(r)
                  break
                case 4:
                  ai()
                  break
                case 13:
                case 19:
                  Ca(oi)
                  break
                case 10:
                  xl(r.type._context)
                  break
                case 22:
                case 23:
                  fs()
              }
              n = n.return
            }
          if (
            ((Pu = e),
            (Lu = e = Is(e.current, null)),
            (zu = Ru = t),
            (Fu = 0),
            (Mu = null),
            (Uu = Ou = Du = 0),
            (Vu = Wu = null),
            null !== El)
          ) {
            for (t = 0; t < El.length; t++)
              if (null !== (r = (n = El[t]).interleaved)) {
                n.interleaved = null
                var a = r.next,
                  l = n.pending
                if (null !== l) {
                  var i = l.next
                  ;(l.next = a), (r.next = i)
                }
                n.pending = r
              }
            El = null
          }
          return e
        }
        function hs(e, t) {
          for (;;) {
            var n = Lu
            try {
              if ((wl(), (di.current = lo), vi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue
                  null !== a && (a.pending = null), (r = r.next)
                }
                vi = !1
              }
              if (
                ((pi = 0),
                (gi = mi = hi = null),
                (yi = !1),
                (bi = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                ;(Fu = 1), (Mu = t), (Lu = null)
                break
              }
              e: {
                var i = e,
                  o = n.return,
                  u = n,
                  s = t
                if (
                  ((t = zu),
                  (u.flags |= 32768),
                  null !== s &&
                    'object' === typeof s &&
                    'function' === typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null))
                  }
                  var h = vo(o)
                  if (null !== h) {
                    ;(h.flags &= -257),
                      yo(h, o, u, 0, t),
                      1 & h.mode && go(i, c, t),
                      (s = c)
                    var m = (t = h).updateQueue
                    if (null === m) {
                      var g = new Set()
                      g.add(s), (t.updateQueue = g)
                    } else m.add(s)
                    break e
                  }
                  if (0 === (1 & t)) {
                    go(i, c, t), gs()
                    break e
                  }
                  s = Error(l(426))
                } else if (al && 1 & u.mode) {
                  var v = vo(o)
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yo(v, o, u, 0, t),
                      hl(so(s, u))
                    break e
                  }
                }
                ;(i = s = so(s, u)),
                  4 !== Fu && (Fu = 2),
                  null === Wu ? (Wu = [i]) : Wu.push(i),
                  (i = o)
                do {
                  switch (i.tag) {
                    case 3:
                      ;(i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ml(i, ho(0, s, t))
                      break e
                    case 1:
                      u = s
                      var y = i.type,
                        b = i.stateNode
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        ;(i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ml(i, mo(i, u, t))
                        break e
                      }
                  }
                  i = i.return
                } while (null !== i)
              }
              ws(n)
            } catch (k) {
              ;(t = k), Lu === n && null !== n && (Lu = n = n.return)
              continue
            }
            break
          }
        }
        function ms() {
          var e = Eu.current
          return (Eu.current = lo), null === e ? lo : e
        }
        function gs() {
          ;(0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4),
            null === Pu ||
              (0 === (268435455 & Du) && 0 === (268435455 & Ou)) ||
              us(Pu, zu)
        }
        function vs(e, t) {
          var n = ju
          ju |= 2
          var r = ms()
          for ((Pu === e && zu === t) || ((Hu = null), ps(e, t)); ; )
            try {
              ys()
              break
            } catch (a) {
              hs(e, a)
            }
          if ((wl(), (ju = n), (Eu.current = r), null !== Lu))
            throw Error(l(261))
          return (Pu = null), (zu = 0), Fu
        }
        function ys() {
          for (; null !== Lu; ) ks(Lu)
        }
        function bs() {
          for (; null !== Lu && !Xe(); ) ks(Lu)
        }
        function ks(e) {
          var t = _u(e.alternate, e, Ru)
          ;(e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (Lu = t),
            (Nu.current = null)
        }
        function ws(e) {
          var t = e
          do {
            var n = t.alternate
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ko(n, t, Ru))) return void (Lu = n)
            } else {
              if (null !== (n = Xo(n, t)))
                return (n.flags &= 32767), void (Lu = n)
              if (null === e) return (Fu = 6), void (Lu = null)
              ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            }
            if (null !== (t = t.sibling)) return void (Lu = t)
            Lu = t = e
          } while (null !== t)
          0 === Fu && (Fu = 5)
        }
        function xs(e, t, n) {
          var r = bt,
            a = Tu.transition
          try {
            ;(Tu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss()
                } while (null !== Xu)
                if (0 !== (6 & ju)) throw Error(l(327))
                n = e.finishedWork
                var a = e.finishedLanes
                if (null === n) return null
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177))
                ;(e.callbackNode = null), (e.callbackPriority = 0)
                var i = n.lanes | n.childLanes
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t
                    ;(e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements)
                    var r = e.eventTimes
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a
                      ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l)
                    }
                  })(e, i),
                  e === Pu && ((Lu = Pu = null), (zu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    Ps(tt, function () {
                      return Ss(), null
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  ;(i = Tu.transition), (Tu.transition = null)
                  var o = bt
                  bt = 1
                  var u = ju
                  ;(ju |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          }
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection()
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode
                              var a = r.anchorOffset,
                                i = r.focusNode
                              r = r.focusOffset
                              try {
                                n.nodeType, i.nodeType
                              } catch (w) {
                                n = null
                                break e
                              }
                              var o = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h)
                                for (;;) {
                                  if (f === e) break t
                                  if (
                                    (p === n && ++c === a && (u = o),
                                    p === i && ++d === r && (s = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break
                                  p = (f = p).parentNode
                                }
                                f = h
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s }
                            } else n = null
                          }
                        n = n || { start: 0, end: 0 }
                      } else n = null
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e)
                        else
                          for (; null !== Jo; ) {
                            t = Jo
                            try {
                              var m = t.alternate
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        )
                                      y.__reactInternalSnapshotBeforeUpdate = b
                                    }
                                    break
                                  case 3:
                                    var k = t.stateNode.containerInfo
                                    1 === k.nodeType
                                      ? (k.textContent = '')
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement)
                                    break
                                  default:
                                    throw Error(l(163))
                                }
                            } catch (w) {
                              Cs(t, t.return, w)
                            }
                            if (null !== (e = t.sibling)) {
                              ;(e.return = t.return), (Jo = e)
                              break
                            }
                            Jo = t.return
                          }
                      ;(m = nu), (nu = !1)
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (ju = u),
                    (bt = o),
                    (Tu.transition = i)
                } else e.current = n
                if (
                  (Ku && ((Ku = !1), (Xu = e), (Yu = a)),
                  (i = e.pendingLanes),
                  0 === i && (qu = null),
                  (function (e) {
                    if (lt && 'function' === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        )
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest })
                if ($u) throw (($u = !1), (e = Qu), (Qu = null), e)
                0 !== (1 & Yu) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zu
                      ? Gu++
                      : ((Gu = 0), (Zu = e))
                    : (Gu = 0),
                  Aa()
              })(e, t, n, r)
          } finally {
            ;(Tu.transition = a), (bt = r)
          }
          return null
        }
        function Ss() {
          if (null !== Xu) {
            var e = kt(Yu),
              t = Tu.transition,
              n = bt
            try {
              if (((Tu.transition = null), (bt = 16 > e ? 16 : e), null === Xu))
                var r = !1
              else {
                if (((e = Xu), (Xu = null), (Yu = 0), 0 !== (6 & ju)))
                  throw Error(l(331))
                var a = ju
                for (ju |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child
                  if (0 !== (16 & Jo.flags)) {
                    var u = i.deletions
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s]
                        for (Jo = c; null !== Jo; ) {
                          var d = Jo
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, i)
                          }
                          var f = d.child
                          if (null !== f) (f.return = d), (Jo = f)
                          else
                            for (; null !== Jo; ) {
                              var p = (d = Jo).sibling,
                                h = d.return
                              if ((iu(d), d === c)) {
                                Jo = null
                                break
                              }
                              if (null !== p) {
                                ;(p.return = h), (Jo = p)
                                break
                              }
                              Jo = h
                            }
                        }
                      }
                      var m = i.alternate
                      if (null !== m) {
                        var g = m.child
                        if (null !== g) {
                          m.child = null
                          do {
                            var v = g.sibling
                            ;(g.sibling = null), (g = v)
                          } while (null !== g)
                        }
                      }
                      Jo = i
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o)
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return)
                        }
                      var y = i.sibling
                      if (null !== y) {
                        ;(y.return = i.return), (Jo = y)
                        break e
                      }
                      Jo = i.return
                    }
                }
                var b = e.current
                for (Jo = b; null !== Jo; ) {
                  var k = (o = Jo).child
                  if (0 !== (2064 & o.subtreeFlags) && null !== k)
                    (k.return = o), (Jo = k)
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 !== (2048 & (u = Jo).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u)
                          }
                        } catch (x) {
                          Cs(u, u.return, x)
                        }
                      if (u === o) {
                        Jo = null
                        break e
                      }
                      var w = u.sibling
                      if (null !== w) {
                        ;(w.return = u.return), (Jo = w)
                        break e
                      }
                      Jo = u.return
                    }
                }
                if (
                  ((ju = a),
                  Aa(),
                  lt && 'function' === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e)
                  } catch (x) {}
                r = !0
              }
              return r
            } finally {
              ;(bt = n), (Tu.transition = t)
            }
          }
          return !1
        }
        function _s(e, t, n) {
          ;(e = Il(e, (t = ho(0, (t = so(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (vt(e, 1, t), as(e, t))
        }
        function Cs(e, t, n) {
          if (3 === e.tag) _s(e, e, n)
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _s(t, e, n)
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  ;(t = Il(t, (e = mo(t, (e = so(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (vt(t, 1, e), as(t, e))
                  break
                }
              }
              t = t.return
            }
        }
        function Es(e, t, n) {
          var r = e.pingCache
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Pu === e &&
              (zu & n) === n &&
              (4 === Fu ||
              (3 === Fu && (130023424 & zu) === zu && 500 > Ge() - Au)
                ? ps(e, 0)
                : (Uu |= n)),
            as(e, t)
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)))
          var n = ts()
          null !== (e = jl(e, t)) && (vt(e, t, n), as(e, n))
        }
        function Ts(e) {
          var t = e.memoizedState,
            n = 0
          null !== t && (n = t.retryLane), Ns(e, n)
        }
        function js(e, t) {
          var n = 0
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState
              null !== a && (n = a.retryLane)
              break
            case 19:
              r = e.stateNode
              break
            default:
              throw Error(l(314))
          }
          null !== r && r.delete(t), Ns(e, n)
        }
        function Ps(e, t) {
          return qe(e, t)
        }
        function Ls(e, t, n, r) {
          ;(this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
        }
        function zs(e, t, n, r) {
          return new Ls(e, t, n, r)
        }
        function Rs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function Is(e, t) {
          var n = e.alternate
          return (
            null === n
              ? (((n = zs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          )
        }
        function Fs(e, t, n, r, a, i) {
          var o = 2
          if (((r = e), 'function' === typeof e)) Rs(e) && (o = 1)
          else if ('string' === typeof e) o = 5
          else
            e: switch (e) {
              case S:
                return Ms(n.children, a, i, t)
              case _:
                ;(o = 8), (a |= 8)
                break
              case C:
                return (
                  ((e = zs(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                )
              case j:
                return ((e = zs(13, n, t, a)).elementType = j), (e.lanes = i), e
              case P:
                return ((e = zs(19, n, t, a)).elementType = P), (e.lanes = i), e
              case R:
                return Ds(n, a, i, t)
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      o = 10
                      break e
                    case N:
                      o = 9
                      break e
                    case T:
                      o = 11
                      break e
                    case L:
                      o = 14
                      break e
                    case z:
                      ;(o = 16), (r = null)
                      break e
                  }
                throw Error(l(130, null == e ? e : typeof e, ''))
            }
          return (
            ((t = zs(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          )
        }
        function Ms(e, t, n, r) {
          return ((e = zs(7, e, r, t)).lanes = n), e
        }
        function Ds(e, t, n, r) {
          return (
            ((e = zs(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          )
        }
        function Os(e, t, n) {
          return ((e = zs(6, e, null, t)).lanes = n), e
        }
        function Us(e, t, n) {
          return (
            ((t = zs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          )
        }
        function Ws(e, t, n, r, a) {
          ;(this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null)
        }
        function Vs(e, t, n, r, a, l, i, o, u) {
          return (
            (e = new Ws(e, t, n, o, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = zs(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          )
        }
        function As(e) {
          if (!e) return Na
          e: {
            if (Ae((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170))
            var t = e
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context
                  break e
                case 1:
                  if (za(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext
                    break e
                  }
              }
              t = t.return
            } while (null !== t)
            throw Error(l(171))
          }
          if (1 === e.tag) {
            var n = e.type
            if (za(n)) return Fa(e, n, t)
          }
          return t
        }
        function Bs(e, t, n, r, a, l, i, o, u) {
          return (
            ((e = Vs(n, r, !0, e, 0, l, 0, o, u)).context = As(null)),
            (n = e.current),
            ((l = Rl((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Il(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            as(e, r),
            e
          )
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            l = ts(),
            i = ns(a)
          return (
            (n = As(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Rl(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Il(a, t, i)) && (rs(e, a, i, l), Fl(e, a, i)),
            i
          )
        }
        function $s(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t)
        }
        _u = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) ko = !0
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ko = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Po(t), pl()
                        break
                      case 5:
                        li(t)
                        break
                      case 1:
                        za(t.type) && Ma(t)
                        break
                      case 4:
                        ri(t, t.stateNode.containerInfo)
                        break
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value
                        Ea(vl, r._currentValue), (r._currentValue = a)
                        break
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Oo(e, t, n)
                            : (Ea(oi, 1 & oi.current),
                              null !== (e = $o(e, t, n)) ? e.sibling : null)
                        Ea(oi, 1 & oi.current)
                        break
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bo(e, t, n)
                          t.flags |= 128
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(oi, oi.current),
                          r)
                        )
                          break
                        return null
                      case 22:
                      case 23:
                        return (t.lanes = 0), Co(e, t, n)
                    }
                    return $o(e, t, n)
                  })(e, t, n)
                )
              ko = 0 !== (131072 & e.flags)
            }
          else (ko = !1), al && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index)
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type
              Ho(e, t), (e = t.pendingProps)
              var a = La(t, Ta.current)
              _l(t, n), (a = Si(null, t, r, e, a, n))
              var i = _i()
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    za(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Vl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $l(t, r, e, n),
                    (t = jo(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    wo(null, t, a, n),
                    (t = t.child)),
                t
              )
            case 16:
              r = t.elementType
              e: {
                switch (
                  (Ho(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Rs(e) ? 1 : 0
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11
                        if (e === L) return 14
                      }
                      return 2
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = No(null, t, r, e, n)
                    break e
                  case 1:
                    t = To(null, t, r, e, n)
                    break e
                  case 11:
                    t = xo(null, t, r, e, n)
                    break e
                  case 14:
                    t = So(null, t, r, gl(r.type, e), n)
                    break e
                }
                throw Error(l(306, r, ''))
              }
              return t
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                No(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              )
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                To(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              )
            case 3:
              e: {
                if ((Po(t), null === e)) throw Error(l(387))
                ;(r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  zl(e, t),
                  Dl(t, r, null, n)
                var o = t.memoizedState
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Lo(e, t, r, n, (a = so(Error(l(423)), t)))
                    break e
                  }
                  if (r !== a) {
                    t = Lo(e, t, r, n, (a = so(Error(l(424)), t)))
                    break e
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Gl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                } else {
                  if ((pl(), r === a)) {
                    t = $o(e, t, n)
                    break e
                  }
                  wo(e, t, r, n)
                }
                t = t.child
              }
              return t
            case 5:
              return (
                li(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Eo(e, t),
                wo(e, t, o, n),
                t.child
              )
            case 6:
              return null === e && sl(t), null
            case 13:
              return Oo(e, t, n)
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : wo(e, t, r, n),
                t.child
              )
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xo(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              )
            case 7:
              return wo(e, t, t.pendingProps, n), t.child
            case 8:
            case 12:
              return wo(e, t, t.pendingProps.children, n), t.child
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Ea(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !ja.current) {
                      t = $o(e, t, n)
                      break e
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies
                      if (null !== u) {
                        o = i.child
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              ;(s = Rl(-1, n & -n)).tag = 2
                              var c = i.updateQueue
                              if (null !== c) {
                                var d = (c = c.shared).pending
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s)
                              }
                            }
                            ;(i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Sl(i.return, n, t),
                              (u.lanes |= n)
                            break
                          }
                          s = s.next
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341))
                        ;(o.lanes |= n),
                          null !== (u = o.alternate) && (u.lanes |= n),
                          Sl(o, n, t),
                          (o = i.sibling)
                      } else o = i.child
                      if (null !== o) o.return = i
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null
                            break
                          }
                          if (null !== (i = o.sibling)) {
                            ;(i.return = o.return), (o = i)
                            break
                          }
                          o = o.return
                        }
                      i = o
                    }
                wo(e, t, a.children, n), (t = t.child)
              }
              return t
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _l(t, n),
                (r = r((a = Cl(a)))),
                (t.flags |= 1),
                wo(e, t, r, n),
                t.child
              )
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                So(e, t, r, (a = gl(r.type, a)), n)
              )
            case 15:
              return _o(e, t, t.type, t.pendingProps, n)
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Ho(e, t),
                (t.tag = 1),
                za(r) ? ((e = !0), Ma(t)) : (e = !1),
                _l(t, n),
                Bl(t, r, a),
                $l(t, r, a, n),
                jo(null, t, r, !0, e, n)
              )
            case 19:
              return Bo(e, t, n)
            case 22:
              return Co(e, t, n)
          }
          throw Error(l(156, t.tag))
        }
        var Ks =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e)
              }
        function Xs(e) {
          this._internalRoot = e
        }
        function Ys(e) {
          this._internalRoot = e
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          )
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          )
        }
        function Js() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer
          if (l) {
            var i = l
            if ('function' === typeof a) {
              var o = a
              a = function () {
                var e = $s(i)
                o.call(e)
              }
            }
            Hs(t, i, e, a)
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var l = r
                  r = function () {
                    var e = $s(i)
                    l.call(e)
                  }
                }
                var i = Bs(t, r, e, 0, null, !1, 0, '', Js)
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Ar(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  i
                )
              }
              for (; (a = e.lastChild); ) e.removeChild(a)
              if ('function' === typeof r) {
                var o = r
                r = function () {
                  var e = $s(u)
                  o.call(e)
                }
              }
              var u = Vs(e, 0, !1, null, 0, !1, 0, '', Js)
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Ar(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Hs(t, u, n, r)
                }),
                u
              )
            })(n, t, e, a, r)
          return $s(i)
        }
        ;(Ys.prototype.render = Xs.prototype.render =
          function (e) {
            var t = this._internalRoot
            if (null === t) throw Error(l(409))
            Hs(e, t, null, null)
          }),
          (Ys.prototype.unmount = Xs.prototype.unmount =
            function () {
              var e = this._internalRoot
              if (null !== e) {
                this._internalRoot = null
                var t = e.containerInfo
                ds(function () {
                  Hs(null, e, null, null)
                }),
                  (t[ha] = null)
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t()
              e = { blockedOn: null, target: e, priority: t }
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Dt(e)
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes)
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Ge()),
                    0 === (6 & ju) && ((Bu = Ge() + 500), Aa()))
                }
                break
              case 13:
                ds(function () {
                  var t = jl(e, 1)
                  if (null !== t) {
                    var n = ts()
                    rs(t, e, 1, n)
                  }
                }),
                  qs(e, 1)
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = jl(e, 134217728)
              if (null !== t) rs(t, e, 134217728, ts())
              qs(e, 134217728)
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = jl(e, t)
              if (null !== n) rs(n, e, t, ts())
              qs(e, t)
            }
          }),
          (_t = function () {
            return bt
          }),
          (Ct = function (e, t) {
            var n = bt
            try {
              return (bt = e), t()
            } finally {
              bt = n
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((Z(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                      var a = wa(r)
                      if (!a) throw Error(l(90))
                      q(r), Z(r, a)
                    }
                  }
                }
                break
              case 'textarea':
                le(e, n)
                break
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
          }),
          (Te = cs),
          (je = ds)
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, ka, wa, Ee, Ne, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          }
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              ;(at = ac.inject(rc)), (lt = ac)
            } catch (ce) {}
        }
        ;(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            if (!Gs(t)) throw Error(l(200))
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return {
                $$typeof: x,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              }
            })(e, t, null, n)
          }),
          (t.createRoot = function (e, t) {
            if (!Gs(e)) throw Error(l(299))
            var n = !1,
              r = '',
              a = Ks
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ar(8 === e.nodeType ? e.parentNode : e),
              new Xs(t)
            )
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null
            if (1 === e.nodeType) return e
            var t = e._reactInternals
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(l(188))
              throw ((e = Object.keys(e).join(',')), Error(l(268, e)))
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode)
          }),
          (t.flushSync = function (e) {
            return ds(e)
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200))
            return ec(null, e, t, !0, n)
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gs(e)) throw Error(l(405))
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = '',
              o = Ks
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Bs(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Ar(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a)
            return new Ys(t)
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200))
            return ec(null, e, t, !1, n)
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(l(40))
            return (
              !!e._reactRootContainer &&
              (ds(function () {
                ec(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[ha] = null)
                })
              }),
              !0)
            )
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(l(200))
            if (null == e || void 0 === e._reactInternals) throw Error(l(38))
            return ec(e, t, n, !1, r)
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608')
      },
      250: (e, t, n) => {
        var r = n(164)
        ;(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot)
      },
      164: (e, t, n) => {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
          (e.exports = n(463))
      },
      374: (e, t, n) => {
        var r = n(791),
          a = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 }
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r])
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r])
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: o.current,
          }
        }
        ;(t.Fragment = l), (t.jsx = s), (t.jsxs = s)
      },
      117: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          o = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator
        var h = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {}
        function v(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h)
        }
        function y() {}
        function b(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h)
        }
        ;(v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              )
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (y.prototype = v.prototype)
        var k = (b.prototype = new y())
        ;(k.constructor = b), m(k, v.prototype), (k.isPureReactComponent = !0)
        var w = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 }
        function C(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = '' + t.key),
            t))
              x.call(t, a) && !_.hasOwnProperty(a) && (l[a] = t[a])
          var u = arguments.length - 2
          if (1 === u) l.children = r
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
            l.children = s
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a])
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: S.current,
          }
        }
        function E(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n
        }
        var N = /\/+/g
        function T(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })('' + e.key)
            : t.toString(36)
        }
        function j(e, t, a, l, i) {
          var o = typeof e
          ;('undefined' !== o && 'boolean' !== o) || (e = null)
          var u = !1
          if (null === e) u = !0
          else
            switch (o) {
              case 'string':
              case 'number':
                u = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = '' === l ? '.' + T(u, 0) : l),
              w(i)
                ? ((a = ''),
                  null != e && (a = e.replace(N, '$&/') + '/'),
                  j(i, t, a, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (E(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      }
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ''
                          : ('' + i.key).replace(N, '$&/') + '/') +
                        e
                    )),
                  t.push(i)),
              1
            )
          if (((u = 0), (l = '' === l ? '.' : l + ':'), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + T((o = e[s]), s)
              u += j(o, t, a, c, i)
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(o = e.next()).done; )
              u += j((o = o.value), t, a, (c = l + T(o, s++)), i)
          else if ('object' === o)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            )
          return u
        }
        function P(e, t, n) {
          if (null == e) return e
          var r = [],
            a = 0
          return (
            j(e, r, '', '', function (e) {
              return t.call(n, e, a++)
            }),
            r
          )
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t))
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var z = { current: null },
          R = { transition: null },
          I = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: S,
          }
        ;(t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments)
              },
              n
            )
          },
          count: function (e) {
            var t = 0
            return (
              P(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              )
            return e
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              )
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = S.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps
              for (s in t)
                x.call(t, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
            }
            var s = arguments.length - 2
            if (1 === s) a.children = r
            else if (1 < s) {
              u = Array(s)
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
              a.children = u
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            }
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e }
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = R.transition
            R.transition = {}
            try {
              e()
            } finally {
              R.transition = t
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            )
          }),
          (t.useCallback = function (e, t) {
            return z.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return z.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return z.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return z.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return z.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return z.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return z.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return z.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return z.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return z.current.useRef(e)
          }),
          (t.useState = function (e) {
            return z.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return z.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return z.current.useTransition()
          }),
          (t.version = '18.2.0')
      },
      791: (e, t, n) => {
        e.exports = n(117)
      },
      184: (e, t, n) => {
        e.exports = n(374)
      },
      813: (e, t) => {
        function n(e, t) {
          var n = e.length
          e.push(t)
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r]
            if (!(0 < l(a, t))) break e
            ;(e[r] = t), (e[n] = a), (n = r)
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0]
        }
        function a(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                u = e[o],
                s = o + 1,
                c = e[s]
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[o] = n), (r = o))
              else {
                if (!(s < a && 0 > l(c, n))) break e
                ;(e[r] = c), (e[s] = n), (r = s)
              }
            }
          }
          return t
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var i = performance
          t.unstable_now = function () {
            return i.now()
          }
        } else {
          var o = Date,
            u = o.now()
          t.unstable_now = function () {
            return o.now() - u
          }
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c)
            else {
              if (!(t.startTime <= e)) break
              a(c), (t.sortIndex = t.expirationTime), n(s, t)
            }
            t = r(c)
          }
        }
        function w(e) {
          if (((g = !1), k(e), !m))
            if (null !== r(s)) (m = !0), R(x)
            else {
              var t = r(c)
              null !== t && I(w, t.startTime - e)
            }
        }
        function x(e, n) {
          ;(m = !1), g && ((g = !1), y(E), (E = -1)), (h = !0)
          var l = p
          try {
            for (
              k(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !j()));

            ) {
              var i = f.callback
              if ('function' === typeof i) {
                ;(f.callback = null), (p = f.priorityLevel)
                var o = i(f.expirationTime <= n)
                ;(n = t.unstable_now()),
                  'function' === typeof o
                    ? (f.callback = o)
                    : f === r(s) && a(s),
                  k(n)
              } else a(s)
              f = r(s)
            }
            if (null !== f) var u = !0
            else {
              var d = r(c)
              null !== d && I(w, d.startTime - n), (u = !1)
            }
            return u
          } finally {
            ;(f = null), (p = l), (h = !1)
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var S,
          _ = !1,
          C = null,
          E = -1,
          N = 5,
          T = -1
        function j() {
          return !(t.unstable_now() - T < N)
        }
        function P() {
          if (null !== C) {
            var e = t.unstable_now()
            T = e
            var n = !0
            try {
              n = C(!0, e)
            } finally {
              n ? S() : ((_ = !1), (C = null))
            }
          } else _ = !1
        }
        if ('function' === typeof b)
          S = function () {
            b(P)
          }
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            z = L.port2
          ;(L.port1.onmessage = P),
            (S = function () {
              z.postMessage(null)
            })
        } else
          S = function () {
            v(P, 0)
          }
        function R(e) {
          ;(C = e), _ || ((_ = !0), S())
        }
        function I(e, n) {
          E = v(function () {
            e(t.unstable_now())
          }, n)
        }
        ;(t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R(x))
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s)
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = p
            }
            var n = p
            p = t
            try {
              return e()
            } finally {
              p = n
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = p
            p = e
            try {
              return t()
            } finally {
              p = n
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now()
            switch (
              ('object' === typeof l && null !== l
                ? (l = 'number' === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1
                break
              case 2:
                o = 250
                break
              case 5:
                o = 1073741823
                break
              case 4:
                o = 1e4
                break
              default:
                o = 5e3
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), I(w, l - i)))
                : ((e.sortIndex = o), n(s, e), m || h || ((m = !0), R(x))),
              e
            )
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p
            return function () {
              var n = p
              p = t
              try {
                return e.apply(this, arguments)
              } finally {
                p = n
              }
            }
          })
      },
      296: (e, t, n) => {
        e.exports = n(813)
      },
    },
    t = {}
  function n(r) {
    var a = t[r]
    if (void 0 !== a) return a.exports
    var l = (t[r] = { exports: {} })
    return e[r](l, l.exports, n), l.exports
  }
  ;(n.p = '/weather/'),
    (() => {
      var e = n(791),
        t = n(250)
      const r = {
        allBlocks: 'MainPage_allBlocks__El6kC',
        titlePage: 'MainPage_titlePage__Rhobw',
        cityChange: 'MainPage_cityChange__d07ix',
        city: 'MainPage_city__GLLND',
        btnCity: 'MainPage_btnCity__ipIKB',
      }
      const a = n.p + 'static/media/city.85f8e5d45787eae613ae8f5a29e706db.svg'
      var l = n(184)
      const i = function (e) {
        let { active: t, setActive: n, handleCitySelect: a, cities: i } = e
        return (0, l.jsx)('div', {
          className: t ? 'modal active' : 'modal',
          onClick: () => n(!1),
          children: (0, l.jsx)('div', {
            className: t ? 'modalWindow active' : 'modalWindow',
            onClick: (e) => e.stopPropagation(),
            children: i.map((e) =>
              (0, l.jsx)(
                'button',
                { className: r.btnCity, onClick: a, children: e.name },
                e.location_id
              )
            ),
          }),
        })
      }
      const o = function (t) {
        let { cities: n, handleCitySelect: a, selectedCity: o } = t
        const [u, s] = (0, e.useState)(!1)
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)('div', {
            children: [
              (0, l.jsx)('button', {
                className: r.btnChangeCity,
                onClick: () => s(!0),
                children: o,
              }),
              (0, l.jsx)(i, {
                active: u,
                setActive: s,
                cities: n,
                handleCitySelect: a,
              }),
            ],
          }),
        })
      }
      const u = 'WeatherToday_weatherToday__izZgv',
        s = 'WeatherToday_date__TToAT',
        c = 'WeatherToday_weatherNow__m7+00',
        d = 'WeatherToday_weather__N+RRX',
        f = 'WeatherToday_temperature__hXZnP',
        p = 'WeatherToday_weatherPhenomenon__Iatvs',
        h = 'WeatherToday_feltWeather__aEa40',
        m = 'WeatherToday_PhenomenonContent__D9ucA',
        g = 'WeatherToday_params__+F4ml',
        v = 'WeatherToday_wind__LHjrj',
        y = 'WeatherToday_windSpeed__p4k4W',
        b = 'WeatherToday_per\u0441ent__+Htxx',
        k = 'WeatherToday_pressure__mDliL',
        w = 'WeatherToday_humidityText__iLvTf'
      const x =
        n.p + 'static/media/thunderstroms.ea78cf3b820221d99ca94f2c35f8f59b.svg'
      const S = n.p + 'static/media/sunny.88274d6f03155f286af8969b680c6428.svg'
      const _ = n.p + 'static/media/cloudy.f95f7ce6f5bb9a256cd295764e424f3a.svg'
      const C =
        n.p + 'static/media/clear-cloudy.29bfb5a5b5eacf6865d434c2ed53c2ae.svg'
      const E =
        n.p + 'static/media/drizzle.9280b77901407331c7e9871f5eb9cd07.svg'
      const N =
        n.p + 'static/media/RainSlight.8953409cbab2ba914872c48260817ed8.svg'
      const T =
        n.p + 'static/media/showers.18785199cf15f1fa995823b14d8668d9.svg'
      const j =
        n.p + 'static/media/snow-flurries.2cbff96cea6fd8e28f0a812acc03d682.svg'
      const P = n.p + 'static/media/sleet.55100966c38b265e8b8210c04664a00b.svg'
      const L = n.p + 'static/media/snow.1c10f5c0e65ad974426cc2a571d3ede8.svg'
      const z = function (e) {
        let { weatherCode: t } = e
        switch (t) {
          case 0:
            return (0, l.jsx)('img', {
              width: 58,
              height: 53,
              src: S,
              alt: '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e',
            })
          case 1:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: C,
                  alt: '\u043c\u0430\u043b\u043e \u043e\u0431\u043b\u0430\u0447\u043d\u043e',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u041c\u0430\u043b\u043e \u043e\u0431\u043b\u0430\u0447\u043d\u043e',
                }),
              ],
            })
          case 2:
          case 3:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: _,
                  alt: '\u041e\u0431\u043b\u0430\u0447\u043d\u043e',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children: '\u043e\u0431\u043b\u0430\u0447\u043d\u043e',
                }),
              ],
            })
          case 51:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: E,
                  alt: '\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u043e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435\u043c\u0438',
                }),
              ],
            })
          case 53:
          case 55:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: T,
                  alt: '\u0421\u0438\u043b\u044c\u043d\u043e \u0434\u043e\u0436\u0434\u044c',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u0421\u0438\u043b\u044c\u043d\u043e \u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c',
                }),
              ],
            })
          case 61:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: N,
                  alt: '\u041e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f\u043c\u0438',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u043e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435\u043c\u0438',
                }),
              ],
            })
          case 66:
          case 63:
          case 65:
          case 66:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: T,
                  alt: '\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0445\u043e\u043b\u043e\u0434\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0445\u043e\u043b\u043e\u0434\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c',
                }),
              ],
            })
          case 67:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: P,
                  alt: '\u0421\u043d\u0435\u0433 \u0441 \u0434\u043e\u0436\u0434\u0435\u043c',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u0421\u043d\u0435\u0433 \u0441 \u0434\u043e\u0436\u0434\u0435\u043c',
                }),
              ],
            })
          case 71:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: j,
                  alt: '\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433',
                }),
              ],
            })
          case 73:
          case 75:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: L,
                  alt: '\u0421\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children: '\u0421\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                }),
              ],
            })
          case 77:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: L,
                  alt: '\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u043a\u0440\u0443\u043f\u0430',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u043a\u0440\u0443\u043f\u0430',
                }),
              ],
            })
          case 80:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: T,
                  alt: '\u041b\u0438\u0432\u0435\u043d\u044c',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children: '\u041b\u0438\u0432\u0435\u043d\u044c',
                }),
              ],
            })
          case 81:
          case 82:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: x,
                  alt: '\u041b\u0438\u0432\u0435\u043d\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0439',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u041b\u0438\u0432\u0435\u043d\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0439',
                }),
              ],
            })
          case 85:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: j,
                  alt: '\u0421\u043b\u0430\u0431\u044b\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u041b\u0438\u0432\u0435\u043d\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0439',
                }),
              ],
            })
          case 86:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)('img', {
                  width: 58,
                  height: 53,
                  src: L,
                  alt: '\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                }),
                (0, l.jsx)('p', {
                  className: m,
                  children:
                    '\u041b\u0438\u0432\u0435\u043d\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0439',
                }),
              ],
            })
          default:
            return (0, l.jsx)('div', {
              children:
                '\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430',
            })
        }
      }
      const R = n.p + 'static/media/wind.cbd548484e30d312fbf7b1c3b8aaf869.svg'
      const I =
        n.p + 'static/media/pressure.91b378c54bedcebc1cb4f7153a8adf5e.svg'
      const F =
        n.p + 'static/media/humidity.2d05924a10e78fbd237e0b65605632ae.svg'
      const M = function (e) {
          let { weatherData: t } = e
          console.log(t.current.time)
          const n = t.current.time,
            r = new Date(n)
          console.log(r)
          let a = new Intl.DateTimeFormat('ru', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
          })
          return (0, l.jsx)('div', {
            className: 'all-section',
            children: (0, l.jsxs)('section', {
              className: u,
              children: [
                (0, l.jsx)('div', {
                  className: s,
                  children: (0, l.jsx)('span', { children: a.format(r) }),
                }),
                (0, l.jsxs)('div', {
                  className: c,
                  children: [
                    (0, l.jsxs)('div', {
                      className: d,
                      children: [
                        (0, l.jsx)('p', {
                          className: f,
                          children: t.current.temperature_2m,
                        }),
                        (0, l.jsx)('div', {
                          className: p,
                          children: (0, l.jsx)(z, {
                            weatherCode: t.current.weather_code,
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)('div', {
                      className: h,
                      children: (0, l.jsx)('p', {
                        children:
                          '\u043e\u0449\u0443\u0449\u0435\u0442\u0441\u044f \u043a\u0430\u043a ' +
                          t.current.apparent_temperature,
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)('div', {
                  className: g,
                  children: [
                    (0, l.jsxs)('div', {
                      className: v,
                      children: [
                        (0, l.jsx)('img', {
                          width: 26,
                          height: 26,
                          src: R,
                          alt: '\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430',
                        }),
                        (0, l.jsx)('p', {
                          className: y,
                          children: t.current.wind_speed_10m,
                        }),
                        (0, l.jsx)('p', {
                          className: y,
                          children: t.current_units.wind_speed_10m,
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: k,
                      children: [
                        (0, l.jsx)('img', {
                          width: 26,
                          height: 26,
                          src: I,
                          alt: '\u0432\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c',
                        }),
                        (0, l.jsx)('p', {
                          className: b,
                          children: t.current.relative_humidity_2m + ' %',
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: k,
                      children: [
                        (0, l.jsx)('img', {
                          width: 26,
                          height: 26,
                          src: F,
                          alt: '\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043c \u0440\u0442. \u0441\u0442\u043e\u043b\u0431\u0430',
                        }),
                        (0, l.jsx)('p', {
                          className: w,
                          children:
                            '764 \u043c\u043c \u0440\u0442. \u0441\u0442.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        D = 'WeatherWeek_weatherWeek__9zC8G',
        O = 'WeatherWeek_day__UPZnX',
        U = 'WeatherWeek_dayWeek__-bvmg',
        W = 'WeatherWeek_date__d0q3H',
        V = 'WeatherWeek_temperatureWeek__M0LRV'
      const A = function (e) {
        let { weatherData: t } = e
        const n = (function () {
          const e = [
              '\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a',
              '\u0412\u0442\u043e\u0440\u043d\u0438\u043a',
              '\u0421\u0440\u0435\u0434\u0430',
              '\u0427\u0435\u0442\u0432\u0435\u0440\u0433',
              '\u041f\u044f\u0442\u043d\u0438\u0446\u0430',
              '\u0421\u0443\u0431\u0431\u043e\u0442\u0430',
              '\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0438\u0435',
            ],
            n = new Date(t.time[6]).getDay(),
            r = []
          for (let a = 0; a < t.time.length + 1; a++) {
            const t = (n + a) % 7
            r.push(e[t])
          }
          return r
        })(t.time)
        return t.weather_code.map((e, r) =>
          (0, l.jsx)(
            'section',
            {
              children: (0, l.jsxs)('div', {
                className: O,
                children: [
                  (0, l.jsx)('span', { className: U, children: n[r] }),
                  (0, l.jsx)('span', { className: W, children: t.time[r] }),
                  (() => {
                    switch (e) {
                      case 0:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: S,
                          alt: '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e',
                        })
                      case 1:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: C,
                          alt: '\u043c\u0430\u043b\u043e \u043e\u0431\u043b\u0430\u0447\u043d\u043e',
                        })
                      case 2:
                      case 3:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: _,
                          alt: '\u041e\u0431\u043b\u0430\u0447\u043d\u043e',
                        })
                      case 45:
                      case 51:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: E,
                          alt: '\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c',
                        })
                      case 53:
                      case 55:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: T,
                          alt: '\u0421\u0438\u043b\u044c\u043d\u043e \u0434\u043e\u0436\u0434\u044c',
                        })
                      case 61:
                      case 63:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: N,
                          alt: '\u041e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f\u043c\u0438',
                        })
                      case 65:
                      case 66:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: T,
                          alt: '\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0445\u043e\u043b\u043e\u0434\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c',
                        })
                      case 67:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: P,
                          alt: '\u0421\u043d\u0435\u0433 \u0441 \u0434\u043e\u0436\u0434\u0435\u043c',
                        })
                      case 71:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: j,
                          alt: '\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433',
                        })
                      case 73:
                      case 75:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: L,
                          alt: '\u0421\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                        })
                      case 77:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: L,
                          alt: '\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u043a\u0440\u0443\u043f\u0430',
                        })
                      case 80:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: T,
                          alt: '\u041b\u0438\u0432\u0435\u043d\u044c',
                        })
                      case 81:
                      case 82:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: x,
                          alt: '\u041b\u0438\u0432\u0435\u043d\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0439',
                        })
                      case 85:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: j,
                          alt: '\u0421\u043b\u0430\u0431\u044b\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                        })
                      case 86:
                        return (0, l.jsx)('img', {
                          width: 58,
                          height: 53,
                          src: L,
                          alt: '\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434',
                        })
                    }
                  })(),
                  (0, l.jsx)('span', {
                    className: V,
                    children: t.temperature_2m_max[r],
                  }),
                ],
              }),
            },
            r
          )
        )
      }
      const B = function (e) {
          let { weatherData: t } = e
          return (0, l.jsx)('div', {
            className: D,
            children: (0, l.jsx)(A, { weatherData: t }),
          })
        },
        H = 'ClothesToday_titel__JBe0X',
        $ = 'ClothesToday_clothesOfWeather__vKcjX',
        Q = 'ClothesToday_sex__JihXu',
        q = 'ClothesToday_iconMale__FLjrp',
        K = 'ClothesToday_male__Y+scD',
        X = 'ClothesToday_iconFemale__2cz0Q',
        Y = 'ClothesToday_female__tX9M4',
        G = 'ClothesToday_clothes__mpqRp',
        Z = (e) => {
          let { ...t } = e
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)('svg', {
              ...t,
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, l.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M10 5.5C9.99999 4.53241 9.71923 3.58562 9.19177 2.77444C8.66432 1.96326 7.91283 1.32254 7.02844 0.930006C6.14406 0.537468 5.16477 0.409968 4.20936 0.562971C3.25395 0.715973 2.36345 1.1429 1.64588 1.79199C0.928298 2.44107 0.414468 3.28441 0.166703 4.21974C-0.0810625 5.15506 -0.0521182 6.14219 0.250025 7.06139C0.552169 7.98059 1.11453 8.79238 1.86891 9.3983C2.62328 10.0042 3.53726 10.3782 4.5 10.475V12H2.5C2.36739 12 2.24022 12.0527 2.14645 12.1464C2.05268 12.2402 2 12.3674 2 12.5C2 12.6326 2.05268 12.7598 2.14645 12.8536C2.24022 12.9473 2.36739 13 2.5 13H4.5V14.5C4.5 14.6326 4.55268 14.7598 4.64645 14.8536C4.74021 14.9473 4.86739 15 5 15C5.13261 15 5.25979 14.9473 5.35355 14.8536C5.44732 14.7598 5.5 14.6326 5.5 14.5V13H7.5C7.63261 13 7.75979 12.9473 7.85355 12.8536C7.94732 12.7598 8 12.6326 8 12.5C8 12.3674 7.94732 12.2402 7.85355 12.1464C7.75979 12.0527 7.63261 12 7.5 12H5.5V10.475C6.73272 10.3496 7.87515 9.77148 8.70635 8.85254C9.53755 7.9336 9.99848 6.73909 10 5.5ZM1 5.5C1 4.70888 1.2346 3.93552 1.67412 3.27772C2.11365 2.61992 2.73836 2.10723 3.46927 1.80448C4.20017 1.50173 5.00444 1.42252 5.78036 1.57686C6.55629 1.7312 7.26902 2.11216 7.82843 2.67157C8.38784 3.23098 8.7688 3.94372 8.92314 4.71964C9.07748 5.49556 8.99827 6.29983 8.69552 7.03073C8.39277 7.76164 7.88008 8.38635 7.22228 8.82588C6.56448 9.2654 5.79113 9.5 5 9.5C3.93949 9.49884 2.92275 9.07704 2.17285 8.32715C1.42296 7.57725 1.00116 6.56051 1 5.5Z',
                fill: 'currentColor',
              }),
            }),
          })
        },
        J = (e) => {
          let { ...t } = e
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)('svg', {
              ...t,
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, l.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M12.5 0.5H9.5C9.36739 0.5 9.24021 0.552679 9.14645 0.646447C9.05268 0.740215 9 0.867392 9 1C9 1.13261 9.05268 1.25979 9.14645 1.35355C9.24021 1.44732 9.36739 1.5 9.5 1.5H11.2931L8.66375 4.12937C7.67057 3.31754 6.40336 2.91848 5.12421 3.01473C3.84507 3.11098 2.65184 3.69517 1.79132 4.64647C0.930801 5.59778 0.468822 6.84343 0.500931 8.12579C0.53304 9.40815 1.05678 10.6291 1.96383 11.5362C2.87088 12.4432 4.09185 12.967 5.37421 12.9991C6.65657 13.0312 7.90222 12.5692 8.85353 11.7087C9.80484 10.8482 10.389 9.65493 10.4853 8.37579C10.5815 7.09664 10.1825 5.82943 9.37063 4.83625L12 2.2075V4C12 4.13261 12.0527 4.25979 12.1464 4.35355C12.2402 4.44732 12.3674 4.5 12.5 4.5C12.6326 4.5 12.7598 4.44732 12.8536 4.35355C12.9473 4.25979 13 4.13261 13 4V1C13 0.867392 12.9473 0.740215 12.8536 0.646447C12.7598 0.552679 12.6326 0.5 12.5 0.5ZM8.3275 10.8306C7.76802 11.3899 7.05528 11.7706 6.27941 11.9248C5.50353 12.079 4.69936 11.9997 3.96856 11.6969C3.23776 11.3941 2.61315 10.8814 2.17371 10.2237C1.73426 9.5659 1.49971 8.79261 1.49971 8.00156C1.49971 7.21051 1.73426 6.43723 2.17371 5.77947C2.61315 5.12171 3.23776 4.60902 3.96856 4.30622C4.69936 4.00341 5.50353 3.92409 6.27941 4.07829C7.05528 4.23249 7.76802 4.61327 8.3275 5.1725C9.07651 5.92351 9.49713 6.94089 9.49713 8.00156C9.49713 9.06223 9.07651 10.0796 8.3275 10.8306Z',
                fill: 'currentColor',
              }),
            }),
          })
        }
      const ee = function (t) {
        let { onChange: n } = t
        const [r, a] = (0, e.useState)('male'),
          i = (e) => {
            a(e.target.value), n(e.target.value), console.log(e.target.value)
          }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(Z, { className: X, female: r }),
            (0, l.jsx)('input', {
              className: Y,
              id: 'female',
              type: 'radio',
              name: 'sex',
              value: 'female',
              checked: 'female' === r,
              onChange: i,
            }),
            (0, l.jsx)(J, { className: q }),
            (0, l.jsx)('input', {
              className: K,
              id: 'male',
              type: 'radio',
              name: 'sex',
              value: 'male',
              checked: 'male' === r,
              onChange: i,
            }),
          ],
        })
      }
      const te =
        n.p + 'static/media/baseball.2679d361f6fd81de04f356d85b4e7484.svg'
      const ne =
        n.p +
        'static/media/sleeveless_blouse.cd01027f078beb6fd1001e4305d236d9.svg'
      const re =
        n.p + 'static/media/sunglasses.70940730e9250f76ce03e66469967ef9.svg'
      const ae = n.p + 'static/media/skirt.31659bdcc0316828cbb82a6f99e7dfa7.svg'
      const le =
        n.p + 'static/media/sandals.968e8e0de9cdce1ad1c0bea2c1cd35a7.svg'
      const ie = n.p + 'static/media/scarf.94505106e96d2e58b4fd7263cb55eba5.svg'
      const oe =
        n.p + 'static/media/neckline_dress.c17073087f64ae3f2044080c59bb934b.svg'
      const ue =
        n.p + 'static/media/high_heels.9aa06f3e8c77c6e777184d007ceb6f21.svg'
      const se = n.p + 'static/media/pants.9c4608f27ec51b2739880ea048cda3f1.svg'
      const ce = n.p + 'static/media/coat.1679e9f1a4f94da74cdcf535cc8b7c23.svg'
      const de =
        n.p +
        'static/media/high_heel_boots.039252fe3c8f92b72a6a54fb86fb1391.svg'
      const fe = n.p + 'static/media/socks.f84f6031c97cf4126352431664adf132.svg'
      const pe =
        n.p + 'static/media/noun-umbrella.2d654e194abb272c396f05e8c252b4a1.svg'
      const he =
        n.p + 'static/media/rain_coat.7aec925aae3a15fb3fbab84d6df025bd.svg'
      const me = function (e) {
        let { weatherCodes: t } = e
        const n = { disabled: !1 }
        return t.temperature_2m >= 20
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(re, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u041e\u0447\u043a\u0438',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ne, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041c\u0430\u0439\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(te, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0435\u043f\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ae, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u042e\u0431\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(le, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0421\u0430\u043d\u0434\u0430\u043b\u0438'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : n, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', 65 === t ? '\u0417\u043e\u043d\u0442' : n],
                }),
              ],
            })
          : t.temperature_2m >= 15
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(re, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u041e\u0447\u043a\u0438',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(te, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0435\u043f\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(oe, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041f\u043b\u0430\u0442\u044c\u0435'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ne, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041c\u0430\u0439\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ue, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0422\u0443\u0444\u043b\u0438'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : ae, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    65 === t
                      ? '\u0417\u043e\u043d\u0442'
                      : '\u042e\u0431\u043a\u0430',
                  ],
                }),
              ],
            })
          : t.temperature_2m >= 5 || t.temperature_2m >= -5
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ce, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041f\u0430\u043b\u044c\u0442\u043e'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(he, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0422\u043e\u043b\u0441\u0442\u043e\u0432\u043a\u0430',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(se, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0428\u0442\u0430\u043d\u044b'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(fe, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u041d\u043e\u0441\u043a\u0438 \u0442\u0435\u043f\u043b\u044b\u0435',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : ie, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    65 === t
                      ? '\u0417\u043e\u043d\u0442'
                      : '\u0428\u0430\u0440\u0444',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(de, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0412\u044b\u0441\u043e\u043a\u0438\u0435 \u0441\u0430\u043f\u043e\u0433\u0438',
                  ],
                }),
              ],
            })
          : void 0
      }
      const ge =
        n.p + 'static/media/shorts.272414a19d7444f439861a9931e9e238.svg'
      const ve =
        n.p + 'static/media/casual_t_shirt.ff94913981900c28590d4d141fb7bb14.svg'
      const ye =
        n.p + 'static/media/jacket.c779f75fa13389e8a21b1cd4ca0913ca.svg'
      const be =
        n.p + 'static/media/male_boots.8105e33123ac92554e60022b9c5d1b5d.svg'
      const ke = function (e) {
        let { weatherCodes: t } = e
        const n = { disabled: !1 }
        return t.temperature_2m >= 20
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(re, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u041e\u0447\u043a\u0438',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(te, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0435\u043f\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ne, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041c\u0430\u0439\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ge, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0428\u043e\u0440\u0442\u044b'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(le, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0421\u0430\u043d\u0434\u0430\u043b\u0438'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : n, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', 65 === t ? '\u0417\u043e\u043d\u0442' : n],
                }),
              ],
            })
          : t.temperature_2m >= 15
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(re, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u041e\u0447\u043a\u0438',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(te, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0435\u043f\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ve, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0430',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(se, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0428\u0442\u0430\u043d\u044b'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(be, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0422\u0443\u0444\u043b\u0438'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : n, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', 65 === t ? '\u0417\u043e\u043d\u0442' : n],
                }),
              ],
            })
          : t.temperature_2m >= 5
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(te, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0435\u043f\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ye, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041a\u0443\u0440\u0442\u043a\u0430'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ve, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0430',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(se, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0428\u0442\u0430\u043d\u044b'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : ie, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    65 === t
                      ? '\u0417\u043e\u043d\u0442'
                      : '\u0448\u0430\u0440\u0444',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(be, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0411\u043e\u0442\u0438\u043d\u043a\u0438'],
                }),
              ],
            })
          : t.temperature_2m >= -5
          ? (0, l.jsxs)('ul', {
              className: G,
              children: [
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(ce, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u041f\u0430\u043b\u044c\u0442\u043e'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(he, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u0422\u043e\u043b\u0441\u0442\u043e\u0432\u043a\u0430',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(se, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0428\u0442\u0430\u043d\u044b'],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(fe, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    '\u041d\u043e\u0441\u043a\u0438 \u0442\u0435\u043f\u043b\u044b\u0435',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(65 === t ? pe : ie, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [
                    ' ',
                    65 === t
                      ? '\u0417\u043e\u043d\u0442'
                      : '\u0428\u0430\u0440\u0444',
                  ],
                }),
                (0, l.jsxs)('li', {
                  style: {
                    opacity: n.disabled ? 0 : 1,
                    backgroundImage: 'url('.concat(be, ')'),
                    backgroundRepeat: 'no-repeat',
                    paddingLeft: '45px',
                    paddingTop: '10px',
                  },
                  children: [' ', '\u0411\u043e\u0442\u0438\u043d\u043a\u0438'],
                }),
              ],
            })
          : void 0
      }
      const we = function (e) {
        let { weatherCodes: t, selectedSex: n } = e
        return 'female' === n
          ? (0, l.jsx)(me, { weatherCodes: t })
          : 'male' === n
          ? (0, l.jsx)(ke, { weatherCodes: t })
          : void 0
      }
      const xe = function (t) {
        let { weatherData: n } = t
        const [r, a] = (0, e.useState)('male')
        return (0, l.jsx)('section', {
          className: 'all-section',
          children: (0, l.jsxs)('div', {
            className: H,
            children: [
              (0, l.jsxs)('div', {
                className: $,
                children: [
                  (0, l.jsx)('span', {
                    children:
                      ' \u041e\u0434\u0435\u0436\u0434\u0430 \u043f\u043e \u043f\u043e\u0433\u043e\u0434\u0435 ',
                  }),
                  (0, l.jsx)('div', {
                    className: Q,
                    children: (0, l.jsx)(ee, {
                      onChange: (e) => {
                        a(e)
                      },
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(we, { selectedSex: r, weatherCodes: n }),
            ],
          }),
        })
      }
      const Se = function () {
        const [t, n] = (0, e.useState)(
            '\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433'
          ),
          [i, u] = (0, e.useState)(null),
          [s, c] = (0, e.useState)(!0),
          [d, f] = (0, e.useState)(null),
          [p, h] = (0, e.useState)(),
          [m, g] = (0, e.useState)(!0),
          v = [
            { name: '\u041c\u043e\u0441\u043a\u0432\u0430', location_id: '' },
            {
              name: '\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433',
              location_id: 1,
            },
            {
              name: '\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433',
              location_id: 2,
            },
            {
              name: '\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440',
              location_id: 3,
            },
            {
              name: '\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c',
              location_id: 4,
            },
          ]
        ;(0, e.useEffect)(() => {
          ;(async () => {
            try {
              c(!0)
              const e = await (async function () {
                try {
                  const e = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=55.7522,59.9386,56.75,45.0625,57.625&longitude=37.6156,30.3141,60.8125,39,39.875&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,rain_sum,showers_sum,snowfall_sum&wind_speed_unit=ms&timezone=auto'
                  )
                  return await e.json()
                } catch (e) {
                  throw (
                    (console.error(
                      '\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445'
                    ),
                    e)
                  )
                }
              })()
              u(e)
            } catch (e) {
              console.error(
                '\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445:',
                e
              ),
                f(
                  '\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u0438\u0448\u0435\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435.'
                )
            } finally {
              c(!1)
            }
          })()
        }, [t]),
          (0, e.useEffect)(() => {
            const e = v.find((e) => e.name === t)
            if (e) {
              const t = e.location_id
              if (i)
                if ('' === t) {
                  const e = i[0]
                  h(e), g(!1)
                } else {
                  const e = i.find((e) => e.location_id === t)
                  h(e), console.log(e), g(!1)
                }
            }
          }, [t, i])
        const y = (e) => {
          n(e.target.innerHTML)
        }
        return s
          ? (0, l.jsx)('div', {})
          : d
          ? (0, l.jsxs)('div', {
              children: [
                '\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ',
                d,
              ],
            })
          : m
          ? (0, l.jsx)('div', {
              className: r.isLoading,
              children:
                '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445',
            })
          : (console.log(p.current.weather_code),
            (0, l.jsx)('div', {
              className:
                0 === p.current.weather_code
                  ? 'weatherImageSunny'
                  : p.current.weather_code >= 3
                  ? 'weatherImageCloudy'
                  : p.current.weather_code >= 61
                  ? 'weatherImageRain'
                  : p.current.weather_code >= 71
                  ? 'weatherImageSnowy'
                  : p.current.weather_code >= 71,
              children: (0, l.jsx)('div', {
                className: r.titlePage,
                children: (0, l.jsxs)('div', {
                  className: r.cityBlock,
                  children: [
                    (0, l.jsxs)('div', {
                      className: r.city,
                      children: [
                        (0, l.jsx)('div', {
                          className: r.cityChange,
                          children: (0, l.jsx)('img', { src: a, alt: '' }),
                        }),
                        (0, l.jsx)(o, {
                          cities: v,
                          handleCitySelect: y,
                          selectedCity: t,
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: r.allBlocks,
                      children: [
                        p && (0, l.jsx)(M, { weatherData: p }),
                        p && (0, l.jsx)(xe, { weatherData: p.current }),
                        p && (0, l.jsx)(B, { weatherData: p.daily }),
                      ],
                    }),
                  ],
                }),
              }),
            }))
      }
      const _e = function () {
        return (0, l.jsx)('div', {
          className: 'App',
          children: (0, l.jsx)(Se, {}),
        })
      }
      t.createRoot(document.getElementById('root')).render((0, l.jsx)(_e, {}))
    })()
})()
//# sourceMappingURL=main.188575aa.js.map
