/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.4.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}
function charIsNumber(_char) {
  return !!(_char || '').match(/\d/);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;

    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;

    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator);
} //spilt a float number into different parts beforeDecimal, afterDecimal, and negation

function splitDecimal(numStr) {
  var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');
  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';
  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';
  return "".concat(isNegative ? '-' : '').concat(beforeDecimal).concat(afterDecimal ? ".".concat(afterDecimal) : '');
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */

function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';

  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }

  return str;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */

function roundToPrecision(numStr, scale, fixedDecimalScale) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) return numStr;
  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

  var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

  var roundedDecimalParts = parseFloat("0.".concat(afterDecimal || '0')).toFixed(scale).split('.');
  var intPart = beforeDecimal.split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }

    return current + roundedStr;
  }, roundedDecimalParts[0]);
  var decimalPart = limitToScale(roundedDecimalParts[1] || '', Math.min(scale, afterDecimal.length), fixedDecimalScale);
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return "".concat(negation).concat(intPart).concat(decimalSeparator).concat(decimalPart);
}
function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}
/** set the caret positon in an input field **/

function setCaretPosition(el, caretPos) {
  el.value = el.value; // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)

  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    } // (el.selectionStart === 0 added for Firefox bug)


    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    } // fail city, fortunately this never happens (as far as I've tested) :)


    el.focus();
    return false;
  }
}
/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/

function findChangedIndex(prevValue, newValue) {
  var i = 0,
      j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;

  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  } //check what has been changed from last


  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }

  return {
    start: i,
    end: prevLength - j
  };
}
/*
  Returns a number whose value is limited to the given range
*/

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function getCurrentCaretPosition(el) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

var propTypes$1 = {
  thousandSeparator: propTypes.oneOfType([propTypes.string, propTypes.oneOf([true])]),
  decimalSeparator: propTypes.string,
  allowedDecimalSeparators: propTypes.arrayOf(propTypes.string),
  thousandsGroupStyle: propTypes.oneOf(['thousand', 'lakh', 'wan']),
  decimalScale: propTypes.number,
  fixedDecimalScale: propTypes.bool,
  displayType: propTypes.oneOf(['input', 'text']),
  prefix: propTypes.string,
  suffix: propTypes.string,
  format: propTypes.oneOfType([propTypes.string, propTypes.func]),
  removeFormatting: propTypes.func,
  mask: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
  isNumericString: propTypes.bool,
  customInput: propTypes.elementType,
  allowNegative: propTypes.bool,
  allowEmptyFormatting: propTypes.bool,
  allowLeadingZeros: propTypes.bool,
  onValueChange: propTypes.func,
  onKeyDown: propTypes.func,
  onMouseUp: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  type: propTypes.oneOf(['text', 'tel', 'password']),
  isAllowed: propTypes.func,
  renderText: propTypes.func,
  getInputRef: propTypes.oneOfType([propTypes.func, // for legacy refs
  propTypes.shape({
    current: propTypes.any
  })])
};
var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue
};

var NumberFormat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberFormat, _React$Component);

  function NumberFormat(props) {
    var _this;

    _classCallCheck(this, NumberFormat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberFormat).call(this, props));
    var defaultValue = props.defaultValue; //validate props

    _this.validateProps();

    var formattedValue = _this.formatValueProp(defaultValue);

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };
    _this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumberFormat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: "updateValueIfRequired",
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state,
          focusedElm = this.focusedElm;
      var stateValue = state.value,
          _state$numAsString = state.numAsString,
          lastNumStr = _state$numAsString === void 0 ? '' : _state$numAsString; // If only state changed no need to do any thing

      if (prevProps !== props) {
        //validate props
        this.validateProps();
        var lastValueWithNewFormat = this.formatNumString(lastNumStr);
        var formattedValue = props.value === undefined ? lastValueWithNewFormat : this.formatValueProp();
        var numAsString = this.removeFormatting(formattedValue);
        var floatValue = parseFloat(numAsString);
        var lastFloatValue = parseFloat(lastNumStr);

        if ( //while typing set state only when float value changes
        (!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue || //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue || //set state always when not in focus and formatted value is changed
        focusedElm === null && formattedValue !== stateValue) {
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: focusedElm
          });
        }
      }
    }
    /** Misc methods **/

  }, {
    key: "getFloatString",
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decimalScale = this.props.decimalScale;

      var _this$getSeparators = this.getSeparators(),
          decimalSeparator = _this$getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true); //remove negation for regex check

      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', ''); //if decimal scale is zero remove decimal and number after decimalSeparator

      if (decimalSeparator && decimalScale === 0) {
        num = num.split(decimalSeparator)[0];
      }

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.'); //remove extra decimals

      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = "".concat(num.substring(0, firstDecimalIndex), ".").concat(num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
      } //add negation back


      if (hasNegation) num = '-' + num;
      return num;
    } //returned regex assumes decimalSeparator is as per prop

  }, {
    key: "getNumberRegex",
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _this$props = this.props,
          format = _this$props.format,
          decimalScale = _this$props.decimalScale;

      var _this$getSeparators2 = this.getSeparators(),
          decimalSeparator = _this$getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + escapeRegExp(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: "getSeparators",
    value: function getSeparators() {
      var decimalSeparator = this.props.decimalSeparator;
      var _this$props2 = this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          allowedDecimalSeparators = _this$props2.allowedDecimalSeparators;

      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators
      };
    }
  }, {
    key: "getMaskAtIndex",
    value: function getMaskAtIndex(index) {
      var _this$props$mask = this.props.mask,
          mask = _this$props$mask === void 0 ? ' ' : _this$props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: "getValueObject",
    value: function getValueObject(formattedValue, numAsString) {
      var floatValue = parseFloat(numAsString);
      return {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: isNaN(floatValue) ? undefined : floatValue
      };
    }
  }, {
    key: "validateProps",
    value: function validateProps() {
      var mask = this.props.mask; //validate decimalSeparator and thousandSeparator

      var _this$getSeparators3 = this.getSeparators(),
          decimalSeparator = _this$getSeparators3.decimalSeparator,
          thousandSeparator = _this$getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(thousandSeparator, " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: ").concat(decimalSeparator, " (default value for decimalSeparator is .)\n       "));
      } //validate mask


      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();

        if (maskAsStr.match(/\d/g)) {
          throw new Error("\n          Mask ".concat(mask, " should not contain numeric character;\n        "));
        }
      }
    }
    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: "setPatchedCaretPosition",
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      setCaretPosition(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) setCaretPosition(el, caretPos);
      }, 0);
    }
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: "correctCaretPosition",
    value: function correctCaretPosition(value, caretPos, direction) {
      var _this$props3 = this.props,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          format = _this$props3.format; //if value is empty return 0

      if (value === '') return 0; //caret position should be between 0 and value length

      caretPos = clamp(caretPos, 0, value.length); //in case of format as number limit between prefix and suffix

      if (!format) {
        var hasNegation = value[0] === '-';
        return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
      } //in case if custom format method don't do anything


      if (typeof format === 'function') return caretPos;
      /* in case format is string find the closest # position from the caret position */
      //in case the caretPos have input value on it don't do anything

      if (format[caretPos] === '#' && charIsNumber(value[caretPos])) return caretPos; //if caretPos is just after input value don't do anything

      if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) return caretPos; //find the nearest caret position

      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#'); //limit the cursor between the first # position and the last # position

      caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);
      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos); //get the position where the last number is present

      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !charIsNumber(value[caretRightBound]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBound - caretPos;

      if (goToLeft) {
        //check if number should be taken after the bound or after it
        //if number preceding a valid number keep it after
        return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
      }

      return caretRightBound;
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;
      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j, i;
      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || ''; //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123

        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue; //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;

        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue; //we are not using currentFormatChar because j can change here

        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }

        j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      } //correct caret position if its outside of editable area


      j = this.correctCaretPosition(formattedValue, j);
      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: "removePrefixAndSuffix",
    value: function removePrefixAndSuffix(val) {
      var _this$props4 = this.props,
          format = _this$props4.format,
          prefix = _this$props4.prefix,
          suffix = _this$props4.suffix; //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-'; //remove negation sign

        if (isNegative) val = val.substring(1, val.length); //remove prefix

        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val; //remove suffix

        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val; //add negation sign back

        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: "removePatternFormatting",
    value: function removePatternFormatting(val) {
      var format = this.props.format;
      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || ''; //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##

        var index = i === ln ? val.length : val.indexOf(part, start);
        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */

        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: "removeFormatting",
    value: function removeFormatting(val) {
      var _this$props5 = this.props,
          format = _this$props5.format,
          removeFormatting = _this$props5.removeFormatting;
      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }

      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/

    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: "formatWithPattern",
    value: function formatWithPattern(numStr) {
      var format = this.props.format;
      var hashCount = 0;
      var formattedNumberAry = format.split('');

      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }

      return formattedNumberAry.join('');
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: "formatAsNumber",
    value: function formatAsNumber(numStr) {
      var _this$props6 = this.props,
          decimalScale = _this$props6.decimalScale,
          fixedDecimalScale = _this$props6.fixedDecimalScale,
          prefix = _this$props6.prefix,
          suffix = _this$props6.suffix,
          allowNegative = _this$props6.allowNegative,
          thousandsGroupStyle = _this$props6.thousandsGroupStyle;

      var _this$getSeparators4 = this.getSeparators(),
          thousandSeparator = _this$getSeparators4.thousandSeparator,
          decimalSeparator = _this$getSeparators4.decimalSeparator;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = splitDecimal(numStr, allowNegative),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const
      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
      } //add prefix and suffix


      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix; //restore negation sign

      if (addNegation) beforeDecimal = '-' + beforeDecimal;
      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;
      return numStr;
    }
  }, {
    key: "formatNumString",
    value: function formatNumString() {
      var numStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props7 = this.props,
          format = _this$props7.format,
          allowEmptyFormatting = _this$props7.allowEmptyFormatting;
      var formattedValue = numStr;

      if (numStr === '' && !allowEmptyFormatting) {
        formattedValue = '';
      } else if (numStr === '-' && !format) {
        formattedValue = '-';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: "formatValueProp",
    value: function formatValueProp(defaultValue) {
      var _this$props8 = this.props,
          format = _this$props8.format,
          decimalScale = _this$props8.decimalScale,
          fixedDecimalScale = _this$props8.fixedDecimalScale,
          allowEmptyFormatting = _this$props8.allowEmptyFormatting;
      var _this$props9 = this.props,
          _this$props9$value = _this$props9.value,
          value = _this$props9$value === void 0 ? defaultValue : _this$props9$value,
          isNumericString = _this$props9.isNumericString;
      var isNonNumericFalsy = !value && value !== 0;

      if (isNonNumericFalsy && allowEmptyFormatting) {
        value = '';
      } // if value is not defined return empty string


      if (isNonNumericFalsy && !allowEmptyFormatting) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      } //change infinity value to empty string


      if (value === 'Infinity' && isNumericString) {
        value = '';
      } //round the number based on decimalScale
      //format only if non formatted value is provided


      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = roundToPrecision(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);
      return formattedValue;
    }
  }, {
    key: "formatNegation",
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;
      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)'); // Check number has '-' value

      var hasNegation = negationRegex.test(value); // Check number has 2 or more '-' values

      var removeNegation = doubleNegationRegex.test(value); //remove negation

      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: "formatInput",
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format; //format negation only if we are formatting as number

      if (!format) {
        value = this.removePrefixAndSuffix(value);
        value = this.formatNegation(value);
      } //remove formatting from number


      value = this.removeFormatting(value);
      return this.formatNumString(value);
    }
    /*** format specific methods end ***/

  }, {
    key: "isCharacterAFormat",
    value: function isCharacterAFormat(caretPos, value) {
      var _this$props10 = this.props,
          format = _this$props10.format,
          prefix = _this$props10.prefix,
          suffix = _this$props10.suffix,
          decimalScale = _this$props10.decimalScale,
          fixedDecimalScale = _this$props10.fixedDecimalScale;

      var _this$getSeparators5 = this.getSeparators(),
          decimalSeparator = _this$getSeparators5.decimalSeparator; //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true; //check in number format

      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: "checkIfFormatGotDeleted",
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }

      return false;
    }
    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: "correctInputValue",
    value: function correctInputValue(caretPos, lastValue, value) {
      var _this$props11 = this.props,
          format = _this$props11.format,
          allowNegative = _this$props11.allowNegative,
          prefix = _this$props11.prefix,
          suffix = _this$props11.suffix,
          decimalScale = _this$props11.decimalScale;

      var _this$getSeparators6 = this.getSeparators(),
          allowedDecimalSeparators = _this$getSeparators6.allowedDecimalSeparators,
          decimalSeparator = _this$getSeparators6.decimalSeparator;

      var lastNumStr = this.state.numAsString || '';
      var _this$selectionBefore = this.selectionBeforeInput,
          selectionStart = _this$selectionBefore.selectionStart,
          selectionEnd = _this$selectionBefore.selectionEnd;

      var _findChangedIndex = findChangedIndex(lastValue, value),
          start = _findChangedIndex.start,
          end = _findChangedIndex.end;
      /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */


      if (!format && start === end && allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        return value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length);
      }
      /* don't do anyhting if something got added,
       or if value is empty string (when whole input is cleared)
       or whole input is replace with a number
      */


      var leftBound = !!format ? 0 : prefix.length;
      var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

      if (value.length > lastValue.length || !value.length || start === end || selectionStart === 0 && selectionEnd === lastValue.length || selectionStart === leftBound && selectionEnd === rightBound) {
        return value;
      } //if format got deleted reset the value to last value


      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      } //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign


      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = splitDecimal(numericString, allowNegative),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const
        //clear only if something got deleted


        var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;

        if (numericString.length < lastNumStr.length && isBeforeDecimalPoint && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
    /** Update value and caret position */

  }, {
    key: "updateValue",
    value: function updateValue(params) {
      var formattedValue = params.formattedValue,
          input = params.input,
          _params$setCaretPosit = params.setCaretPosition,
          setCaretPosition = _params$setCaretPosit === void 0 ? true : _params$setCaretPosit;
      var numAsString = params.numAsString,
          caretPos = params.caretPos;
      var onValueChange = this.props.onValueChange;
      var lastValue = this.state.value;

      if (input) {
        //set caret position, and value imperatively when element is provided
        if (setCaretPosition) {
          //calculate caret position if not defined
          if (!caretPos) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = getCurrentCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */

            input.value = formattedValue; //get the caret position

            caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
          } //set caret position


          this.setPatchedCaretPosition(input, caretPos, formattedValue);
        } else {
          /**
           * if we are not setting caret position set the value imperatively.
           * This is required on onBlur method
           */
          input.value = formattedValue;
        }
      } //calculate numeric string if not passed


      if (numAsString === undefined) {
        numAsString = this.removeFormatting(formattedValue);
      } //update state if value is changed


      if (formattedValue !== lastValue) {
        this.setState({
          value: formattedValue,
          numAsString: numAsString
        }); // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287

        onValueChange(this.getValueObject(formattedValue, numAsString));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;
      var lastValue = state.value || '';
      var currentCaretPosition = getCurrentCaretPosition(el);
      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);
      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);
      var valueObj = this.getValueObject(formattedValue, numAsString);

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      this.updateValue({
        formattedValue: formattedValue,
        numAsString: numAsString,
        inputValue: inputValue,
        input: el
      });
      props.onChange(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur,
          allowLeadingZeros = props.allowLeadingZeros;
      var numAsString = state.numAsString;
      var lastValue = state.value;
      this.focusedElm = null;

      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }

      if (!format) {
        // if the numAsString is not a valid number reset it to empty
        if (isNaN(parseFloat(numAsString))) {
          numAsString = '';
        }

        if (!allowLeadingZeros) {
          numAsString = fixLeadingZero(numAsString);
        }

        var formattedValue = this.formatNumString(numAsString); //change the state

        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: e.target,
            setCaretPosition: false
          });
          onBlur(e);
          return;
        }
      }

      onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value = el.value,
          value = _el$value === void 0 ? '' : _el$value;
      var expectedCaretPosition;
      var _this$props12 = this.props,
          decimalScale = _this$props12.decimalScale,
          fixedDecimalScale = _this$props12.fixedDecimalScale,
          prefix = _this$props12.prefix,
          suffix = _this$props12.suffix,
          format = _this$props12.format,
          onKeyDown = _this$props12.onKeyDown;
      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';
      this.selectionBeforeInput = {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }; //Handle backspace and delete against non numerical/decimal characters or arrow keys

      if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      } //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle


      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
        /* NOTE: This is special case when backspace is pressed on a
        negative value while the cursor position is after prefix. We can't handle it on onChange because
        we will not have any information of keyPress
        */
        if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
          var newValue = value.substring(1);
          this.updateValue({
            formattedValue: newValue,
            caretPos: newCaretPosition,
            input: el
          });
        } else if (!negativeRegex.test(value[expectedCaretPosition])) {
          while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
            newCaretPosition--;
          }

          newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
        }
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }
      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */


      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      onKeyDown(e);
    }
    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      var el = e.target;
      /**
       * NOTE: we have to give default value for value as in case when custom input is provided
       * value can come as undefined when nothing is provided on value prop.
      */

      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value2 = el.value,
          value = _el$value2 === void 0 ? '' : _el$value2;

      if (selectionStart === selectionEnd) {
        var caretPosition = this.correctCaretPosition(value, selectionStart);

        if (caretPosition !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPosition, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this2 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      this.focusedElm = e.target;
      this.focusTimeout = setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value3 = el.value,
            value = _el$value3 === void 0 ? '' : _el$value3;

        var caretPosition = _this2.correctCaretPosition(value, selectionStart); //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)


        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          _this2.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this2.props.onFocus(e);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          type = _this$props13.type,
          displayType = _this$props13.displayType,
          customInput = _this$props13.customInput,
          renderText = _this$props13.renderText,
          getInputRef = _this$props13.getInputRef;
      var value = this.state.value;
      var otherProps = omit(this.props, propTypes$1);

      var inputProps = _extends({
        inputMode: 'numeric'
      }, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, otherProps, {
          ref: getInputRef
        }), value);
      } else if (customInput) {
        var CustomInput = customInput;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomInput, _extends({}, inputProps, {
          ref: getInputRef
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, inputProps, {
        ref: getInputRef
      }));
    }
  }]);

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

NumberFormat.propTypes = propTypes$1;
NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.0";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.0";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _theme_layout_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/layout/Root */ "./src/theme/layout/Root.jsx");
/* harmony import */ var _theme_layout_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/AppContainer */ "./src/theme/layout/AppContainer.jsx");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, /*#__PURE__*/React.createElement(_theme_layout_Root__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_theme_layout_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
});

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: getAllProprietes, getAllDossiers, getAllUsers, getLogout, getHomeUrl, toogleLoader, toogleAddClient, toogleAddChasseur, toogleAddPropriete, toogleUserModal, toogleDossierModal, toogleProprieteModal, getPersonalData, handleChangeAddProprieteModal, handleChangeAddClientModal, handleChangeAddChasseurModal, registerDataProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProprietes", function() { return getAllProprietes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDossiers", function() { return getAllDossiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogout", function() { return getLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeUrl", function() { return getHomeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleLoader", function() { return toogleLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleAddClient", function() { return toogleAddClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleAddChasseur", function() { return toogleAddChasseur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleAddPropriete", function() { return toogleAddPropriete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleUserModal", function() { return toogleUserModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleDossierModal", function() { return toogleDossierModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleProprieteModal", function() { return toogleProprieteModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonalData", function() { return getPersonalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleChangeAddProprieteModal", function() { return handleChangeAddProprieteModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleChangeAddClientModal", function() { return handleChangeAddClientModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleChangeAddChasseurModal", function() { return handleChangeAddChasseurModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDataProgress", function() { return registerDataProgress; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function getAllProprietes() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_proprietes_data');
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_PROPRIETE"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
;
function getAllDossiers() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_dossiers_data');
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);

                if (responseReq == 'fail') {
                  statutRes = 'success';
                  responseReq = null;
                }
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_DOSSIER"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}
;
function getAllUsers() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_users_data');
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);

                if (responseReq == 'fail') {
                  statutRes = 'success';
                  responseReq = null;
                }
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_USER"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}
;
/** UTILITY ACTIONS **/

function getLogout() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_logOut_data');
              _context4.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);

                if (responseReq == 'fail') {
                  statutRes = 'success';
                  responseReq = null;
                }
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LOGOUT"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
}
;
function getHomeUrl() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_homeUrl_data');
              _context5.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);

                if (responseReq == 'fail') {
                  statutRes = 'success';
                  responseReq = null;
                }
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_ADRESSE_SITE"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
}
;
/** LOADER TOOGLE **/

function toogleLoader() {
  var statut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var messageShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Veuillez patienter ...';
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_LOADER"],
    payload: {
      statut: statut,
      message: messageShow
    }
  };
}
/** MODAL TOOGLE **/

function toogleAddClient() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_CLIENT_ADD_MODAL"]
  };
}
function toogleAddChasseur() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_CHASSEUR_ADD_MODAL"]
  };
}
function toogleAddPropriete() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_PROPRIETE_ADD_MODAL"]
  };
}
function toogleUserModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_USER_MODAL"]
  };
}
function toogleDossierModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_DOSSIER_MODAL"]
  };
}
function toogleProprieteModal() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["TOOGLE_PROPRIETE_MODAL"]
  };
}
/** PERSONAL DATA **/

function getPersonalData() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch) {
      var responseReq, statutRes, action;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              responseReq = null;
              statutRes = 'success';
              action = new FormData();
              action.append('action', 'get_personal_data');
              _context6.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', action).then(function (response) {
                responseReq = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatToJson"])(response.data);

                if (responseReq == 'fail') {
                  statutRes = 'success';
                  responseReq = null;
                }
              })["catch"](function (error) {
                responseReq = error;
                statutRes = 'error';
              });

            case 6:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_MY_DATA"],
                payload: {
                  data: responseReq,
                  statut: statutRes
                }
              });

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}
;
/** ADD MODAL **/

function handleChangeAddProprieteModal(key, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_PROPRIETE_ADD_MODAL"],
    payload: {
      key: key,
      data: data
    }
  };
}
function handleChangeAddClientModal(key, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_CLIENT_ADD_MODAL"],
    payload: {
      key: key,
      data: data
    }
  };
}
function handleChangeAddChasseurModal(key, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_CHASSEUR_ADD_MODAL"],
    payload: {
      key: key,
      data: data
    }
  };
}
/** REGISTER DATA **/

function registerDataProgress(key, data) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_REGISTER_DATA"],
    payload: {
      key: key,
      data: data
    }
  };
}

/***/ }),

/***/ "./src/components/BackSite.jsx":
/*!*************************************!*\
  !*** ./src/components/BackSite.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _resources_back_site_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/back-site.svg */ "./src/resources/back-site.svg");
/* harmony import */ var _resources_back_site_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_back_site_svg__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tcursor: pointer;\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    font-weight: 300;\n    outline: none;\n    border: none;\n    white-space: pre;\n\tposition: relative;\n\ttop: calc(100% - 525px);\n    bottom: 30px;\n\tcolor: ", ";\n\ttransition: color 0.3s, transform 0.3s, top 0.3s;\n\n\timg {\n\t\theight: 28px;\n\t\twidth: 28px;\n\t\tobject-fit: contain;\n\t\tmargin-right: 12px;\n\t\tfilter: drop-shadow(0px 3px 15px rgba(0,0,0,0.5));\n\t\ttransition: transform 0.3s, width 0.3s, height 0.3s;\n\t}\n\n\tspan {\n\t\ttransition: opacity 0.3s;\n\t}\n\n\t&:hover {\n\t\ttransform: translateX(10px);\n\t\tcolor: ", ";\n\n\t\timg {\n\t\t\tfilter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);\n\t\t}\n\t}\n\n\t&:active {\n\t\ttransform: scale(0.95);\n        \n        img {\n\t\t\tfilter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;




var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.orange;
});

var BackSite = /*#__PURE__*/function (_Component) {
  _inherits(BackSite, _Component);

  var _super = _createSuper(BackSite);

  function BackSite(props) {
    _classCallCheck(this, BackSite);

    return _super.call(this, props);
  }

  _createClass(BackSite, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getHomeUrl();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledButton, {
        id: "backSite",
        href: this.props.href
      }, /*#__PURE__*/React.createElement("img", {
        src: _resources_back_site_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      }), /*#__PURE__*/React.createElement("span", null, "Retour sur le site"));
    }
  }]);

  return BackSite;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHomeUrl: function getHomeUrl() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getHomeUrl"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    href: state.general.homeUrl.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(BackSite));

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");

function Button(props) {
  var AddIconLeft = null;
  var AddIconRight = null;

  if (props.src) {
    if (props.iconRight) {
      AddIconRight = /*#__PURE__*/React.createElement("img", {
        src: props.src,
        alt: "icon"
      });
    } else {
      AddIconLeft = /*#__PURE__*/React.createElement("img", {
        src: props.src,
        alt: "icon"
      });
    }
  }

  return /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_0__["StyledButton"], {
    href: props.link ? props.link : "#",
    small: props.small,
    light: props.light,
    orange: props.orange,
    blue: props.blue,
    red: props.red,
    green: props.green,
    iconRight: props.iconRight,
    src: props.src,
    onClick: props.onClick ? props.onClick : null
  }, AddIconLeft != null ? AddIconLeft : null, props.children, AddIconRight != null ? AddIconRight : null);
}

/***/ }),

/***/ "./src/components/CardStat.jsx":
/*!*************************************!*\
  !*** ./src/components/CardStat.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            ", ";\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            ", ";\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 30px;\n    box-shadow: 0 5px 20px rgba(251,97,7, 0.4);\n    padding: 25px 35px;\n    margin: 20px;\n    min-width: 275px;\n    max-height: 150px;\n\n    span {\n        max-width: 75%;\n        font-size: 22px;\n        color: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n\n        &:last-of-type {\n            font-size: 50px;\n            align-self: flex-end;\n            margin-top: 10px;\n            text-shadow: ", ";\n        }\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.orange && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), function (props) {
    return props.theme.orangeRadius;
  });
}, function (props) {
  return props.blue && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (props) {
    return props.theme.blueRadius;
  });
}, function (props) {
  return props.green && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), function (props) {
    return props.theme.greenRadius;
  });
});
function Card(props) {
  return /*#__PURE__*/React.createElement(CardContainer, {
    green: props.green,
    blue: props.blue,
    orange: props.orange
  }, /*#__PURE__*/React.createElement("span", null, props.title), /*#__PURE__*/React.createElement("span", null, props.euros ? Object(_lib_functions__WEBPACK_IMPORTED_MODULE_1__["formatPrix"])(props.value) + ' €' : props.value));
}

/***/ }),

/***/ "./src/components/DeleteButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/DeleteButton.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _resources_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/trash.svg */ "./src/resources/trash.svg");
/* harmony import */ var _resources_trash_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_trash_svg__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 45px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background: transparent;\n    transition: transform 0.3s;\n\n    img {\n        width: 100% !important;\n        height: 100% !important;\n        object-fit: contain;\n        border-radius: 0 !important;\n        box-shadow: none !important;\n    }\n\n    &:hover {\n        transform: scale(1.05);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject());

function DeleteButton(props) {
  function handleDelete() {
    console.log(props.id);
    console.log(props.type);

    switch (props.type) {
      case 'propriete':
        deletePropriete(props.id);
        break;

      case 'dossier':
        deleteDossier(props.id);
        break;

      case 'user':
        deleteUser(props.id);
        break;
    }

    function deletePropriete(_x) {
      return _deletePropriete.apply(this, arguments);
    }

    function _deletePropriete() {
      _deletePropriete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var responseReq, statutRes, formData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                responseReq = null;
                statutRes = 'success';
                formData = new FormData();
                formData.append('action', 'form_delete_propriete');
                formData.append('id', id);
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', formData).then(function (response) {
                  responseReq = formatToJson(response.data);

                  if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                  }
                })["catch"](function (error) {
                  responseReq = error;
                  statutRes = 'error';
                });

              case 7:
                props.getAllProprietes();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _deletePropriete.apply(this, arguments);
    }

    ;

    function deleteUser(_x2) {
      return _deleteUser.apply(this, arguments);
    }

    function _deleteUser() {
      _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var responseReq, statutRes, formData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                responseReq = null;
                statutRes = 'success';
                formData = new FormData();
                formData.append('action', 'form_delete_user');
                formData.append('id', id);
                _context2.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', formData).then(function (response) {
                  responseReq = formatToJson(response.data);

                  if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                  }
                })["catch"](function (error) {
                  responseReq = error;
                  statutRes = 'error';
                });

              case 7:
                props.getAllUsers();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _deleteUser.apply(this, arguments);
    }

    ;

    function deleteDossier(_x3) {
      return _deleteDossier.apply(this, arguments);
    }

    function _deleteDossier() {
      _deleteDossier = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var responseReq, statutRes, formData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                responseReq = null;
                statutRes = 'success';
                formData = new FormData();
                formData.append('action', 'form_delete_dossier');
                formData.append('id', id);
                _context3.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', formData).then(function (response) {
                  responseReq = formatToJson(response.data);

                  if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                  }
                })["catch"](function (error) {
                  responseReq = error;
                  statutRes = 'error';
                });

              case 7:
                props.getAllDossiers();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _deleteDossier.apply(this, arguments);
    }

    ;
  }

  return /*#__PURE__*/React.createElement(Button, {
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement("img", {
    src: _resources_trash_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "icon delete"
  }));
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllProprietes: function getAllProprietes() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllProprietes"])());
    },
    getAllDossiers: function getAllDossiers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllDossiers"])());
    },
    getAllUsers: function getAllUsers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllUsers"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(DeleteButton));

/***/ }),

/***/ "./src/components/Input.jsx":
/*!**********************************!*\
  !*** ./src/components/Input.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    border-radius: 34px;\n    -webkit-transition: .4s;\n    transition: .4s;\n\n    &:before {\n        position: absolute;\n        content: \"\";\n        height: 16px;\n        width: 16px;\n        left: 4px;\n        bottom: 4px;\n        background-color: white;\n        border-radius: 50%;\n        -webkit-transition: .4s;\n        transition: .4s;\n    }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 24px;\n    margin: 0 5px;\n    margin-bottom: 15px;\n\n    input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n\n        &:checked + span {\n            background-color: ", ";\n        }\n\n        &:focus + span {\n            box-shadow: 0 0 1px ", ";\n        }\n\n        &:checked + span:before {\n            -webkit-transform: translateX(26px);\n            -ms-transform: translateX(26px);\n            transform: translateX(26px);\n        }\n    }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    max-width: 100%;\n    overflow: scroll;\n    justify-content: center;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    pointer-events: none;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n    transform: rotate(45deg);\n    opacity: 0;\n\ttransition: opacity 0.3s;\n\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 45px;\n\t\theight: 2px;\n\t\tborder-radius: 30px;\n\t\tbackground: ", ";\n\t}\n\n\t&:after {\n\t\ttransform: rotate(90deg);\n\t}\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    width: 100px;\n    height: 100px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    position: relative;\n    transition: transform 0.3s, box-shadow 0.3s;\n\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        border-radius: 5px;\n        background: ", ";\n        transition: opacity 0.3s;\n\t}\n\n\t&:hover {\n        box-shadow: ", ";\n        transform: scale(1.1);\n\n        &:before,\n        &:after {\n            opacity: 0.4;\n        }\n\n        div {\n            opacity: 0.8;\n        }\n\t}\n\n\t&:active {\n        transform: scale(0.9);\n\n        &:before,\n        &:after {\n            opacity: 0.7;\n        }\n\n        div {\n            opacity: 1;\n        }\n\t}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    width: 100px;\n    height: 100px;\n    object-fit: cover;\n    border-radius: 5px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n            margin-right: 0px;\n        "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 20px;\n    margin-right: 45px;\n\n    ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n            background: #ced4da;\n        "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n            display: inline-block;\n            margin-left: 15px;\n        "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-weight: ", "; \n    font-family: ", ";    \n    font-size: 16px;\n    border: 1px solid #ced4da;\n    width: 100%;\n    margin: 10px 0px;\n    padding: 8px 10px 8px 15px;\n    min-height: 16px;\n    outline: none;\n    border-radius: 30px;\n    display: block;\n    background: ", ";\n    transition: border 0.3s, box-shadow 0.3s;\n\n    &:focus {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n            background: #ced4da;\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n            display: inline-block;\n            margin-left: 15px;\n        "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-weight: ", "; \n    font-family: ", ";    \n    font-size: 16px;\n    border: 1px solid #ced4da;\n    width: 100%;\n    margin: 10px 0px;\n    padding: 8px 15px 8px 5px;\n    min-height: 16px;\n    outline: none;\n    border-radius: 10px;\n    display: block;\n    background: ", ";\n    transition: border 0.3s, box-shadow 0.3s;\n\n    &:focus {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n            background: #ced4da;\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            display: inline-block;\n            margin-left: 15px;\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-weight: ", "; \n    font-family: ", ";    \n    font-size: 16px;\n    border: 1px solid #ced4da;\n    width: 100%;\n    max-width: 100%;\n    min-height: 115px;\n    margin: 10px 0px;\n    padding: 8px 10px 8px 15px;\n    min-height: 16px;\n    outline: none;\n    border-radius: 10px;\n    display: block;\n    background: ", ";\n    transition: border 0.3s, box-shadow 0.3s;\n\n    &:focus {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            cursor: not-allowed;\n            background: #ced4da;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            display: inline-block;\n            margin-left: 15px;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-weight: ", "; \n    font-family: ", ";     \n    font-size: 16px;\n    border: 1px solid #ced4da;\n    width: 100%;\n    margin: 10px 0px;\n    padding: 8px 10px 8px 15px;\n    min-height: 16px;\n    outline: none;\n    border-radius: 30px;\n    display: block;\n    background: ", ";\n    transition: border 0.3s, box-shadow 0.3s;\n\n    &:focus {\n        box-shadow: ", ";\n        border: 1px solid ", ";\n    }\n\n    ", "\n\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            cursor: pointer;\n            display: inline-block;\n            position: relative;\n            text-decoration: none;\n            font-size: 16px;\n            background: ", ";\n            color: ", ";\n            padding: 10px 20px;\n            margin: 10px 0px;\n            margin-bottom: 30px;\n            border-radius: 100px;\n            border: none;\n            outline: none;\n            font-weight: ", ";\n            box-shadow: ", ";\n            transition: transform 0.3s,\n                        background 0.3s,\n                        color 0.3s,\n                        opacity 0.3s;\n\n            &:hover {\n                transform: scale(1.1);\n                background-color: ", ";\n                color: ", ";\n            }\n\n            &:active {\n                transform: scale(0.95) !important;\n                background-color: ", ";\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            display: inline-block;\n            margin-left: 15px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";    \n    font-size: 16px;\n    padding: 5px;\n    display: block;\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;


var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject(), function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.inlineLabel && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
}, function (props) {
  return props.isFile && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (props) {
    return props.theme.blue;
  }, function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.regular;
  }, function (props) {
    return props.theme.shadows;
  }, function (props) {
    return props.theme.orange;
  }, function (props) {
    return props.theme.white;
  }, function (props) {
    return props.theme.red;
  });
});
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject4(), function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.inlineLabel && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
}, function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
});
var StyledArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea(_templateObject7(), function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.inlineLabel && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
}, function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9());
});
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject10(), function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.inlineLabel && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject11());
}, function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject12());
});
var StyledNumberFormat = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_number_format__WEBPACK_IMPORTED_MODULE_1__["default"])(_templateObject13(), function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.inlineLabel && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject14());
}, function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject15());
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject16(), function (props) {
  return props.isFile && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject17());
});
var StyledFiles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject18());
var StyledFilesImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject19());
var ImgPrevContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject20(), function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.shadows;
});
var CloseHover = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject21(), function (props) {
  return props.theme.white;
});
var ContainerPreview = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject22());

var ImagePrev = function ImagePrev(props) {
  function handleClick() {
    props.onClick(props.src, props.file);
  }

  return /*#__PURE__*/React.createElement(ImgPrevContainer, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(CloseHover, null), /*#__PURE__*/React.createElement(StyledFilesImg, {
    src: props.src
  }));
};
/** SWITCHER **/


var ToogleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject23(), function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
});
var SliderRound = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject24());

var ToogleSwith = function ToogleSwith(props) {
  return /*#__PURE__*/React.createElement(ToogleContainer, null, /*#__PURE__*/React.createElement("input", {
    type: props.type,
    value: props.value,
    checked: props.checked,
    id: props.id,
    name: props.id,
    required: props.required,
    onChange: props.onChange
  }), /*#__PURE__*/React.createElement(SliderRound, null));
};

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      inputValue: null,
      formattedValue: null,
      filesList: new Array(),
      previewImg: new Array()
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleChangeNumber = _this.handleChangeNumber.bind(_assertThisInitialized(_this));
    _this.handleChangeFiles = _this.handleChangeFiles.bind(_assertThisInitialized(_this));
    _this.handleDeleteFiles = _this.handleDeleteFiles.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.value && this.props.onChange) {
        if (this.props.type == 'file') {
          this.setState({
            filesList: this.props.value
          });
        } else {
          this.props.onChange(this.props.id, this.props.value);
          this.setState({
            inputValue: this.props.value
          });
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      if (this.props.type == 'checkbox') {
        if (this.props.onChange) this.props.onChange(this.props.id, event.target.checked);
        this.setState({
          inputValue: event.target.checked
        });
      } else {
        if (this.props.onChange) this.props.onChange(this.props.id, event.target.value);
        this.setState({
          inputValue: event.target.value
        });
      }
    }
  }, {
    key: "handleChangeFiles",
    value: function handleChangeFiles(event) {
      if (this.props.multiple == true) {
        var filesArr = Array.prototype.slice.call(event.target.files);
        var newPrev = new Array();
        filesArr.forEach(function (element) {
          newPrev.push({
            preview: URL.createObjectURL(element),
            file: element
          });
        });
        this.setState({
          previewImg: [].concat(_toConsumableArray(this.state.previewImg), newPrev)
        });
        if (this.props.onChange) this.props.onChange(this.props.id, [].concat(_toConsumableArray(this.props.value), _toConsumableArray(filesArr)));
        this.setState({
          filesList: [].concat(_toConsumableArray(this.state.filesList), _toConsumableArray(filesArr))
        });
      } else {
        if (event.target.files.length > 0) {
          var theFile = event.target.files[0];
          var _newPrev = [{
            preview: URL.createObjectURL(theFile),
            file: theFile
          }];
          this.setState({
            previewImg: _newPrev
          });
          if (this.props.onChange) this.props.onChange(this.props.id, [theFile]);
          this.setState({
            filesList: [theFile]
          });
        }
      }
    }
  }, {
    key: "handleDeleteFiles",
    value: function handleDeleteFiles(img, file) {
      if (this.props.multiple == true) {
        var newPrev = this.state.previewImg.filter(function (element) {
          return element.preview != img;
        });
        var newData = this.state.filesList.filter(function (element) {
          return element != file;
        });
        this.setState({
          previewImg: newPrev
        });
        if (this.props.onChange) this.props.onChange(this.props.id, newData);
        this.setState({
          filesList: newData
        });
      } else {
        this.setState({
          previewImg: new Array()
        });
        if (this.props.onChange) this.props.onChange(this.props.id, null);
        this.setState({
          filesList: new Array()
        });
      }
    }
  }, {
    key: "handleChangeNumber",
    value: function handleChangeNumber(values) {
      var formattedValue = values.formattedValue,
          value = values.value;
      if (this.props.onChange) this.props.onChange(this.props.id, Number(value));
      this.setState({
        formattedValue: formattedValue,
        inputValue: Number(value)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var haveSuffix = '';
      var input = null;
      var thousandSeparator = ' ';
      var decimalSeparator = ',';
      var value = null;
      var listFiles = null;
      var filesList = new Array();

      if (this.props.value != null && this.props.onChange) {
        if (this.props.type == 'file') {
          filesList = this.props.value;
        } else {
          value = this.props.value;
        }
      } else {
        value = this.state.inputValue;
      }

      if (this.props.euro) {
        haveSuffix = ' €';
      } else if (this.props.pourcent) {
        haveSuffix = ' %';
      } else if (this.props.suffix) {
        haveSuffix = ' ' + this.props.suffix;
      }

      if (this.props.thousandSeparator == 'false') {
        thousandSeparator = false;
      }

      if (this.props.type == 'file' && filesList.length > 0) {
        listFiles = this.state.previewImg.map(function (element) {
          return /*#__PURE__*/React.createElement(ImagePrev, {
            src: element.preview,
            file: element.file,
            onClick: _this2.handleDeleteFiles
          });
        });
      }

      if (this.props.type == 'number') {
        input = /*#__PURE__*/React.createElement(StyledNumberFormat, {
          format: this.props.tel ? "##.## ## ## ##" : null,
          value: value,
          decimalScale: this.props.tel ? null : 2,
          step: this.props.step ? this.props.step : 1,
          min: this.props.min ? this.props.min : 0,
          max: this.props.max ? this.props.max : null,
          id: this.props.id,
          name: this.props.id,
          required: this.props.required,
          readonly: this.props.readonly,
          disabled: this.props.disabled,
          thousandSeparator: this.props.tel ? false : thousandSeparator,
          decimalSeparator: this.props.tel ? null : decimalSeparator,
          allowNegative: false,
          allowLeadingZeros: this.props.tel ? true : false,
          suffix: this.props.tel ? null : haveSuffix,
          placeholder: this.props.placeholder,
          onValueChange: this.handleChangeNumber,
          inlineLabel: this.props.inline
        });
      } else if (this.props.type == 'textarea') {
        input = /*#__PURE__*/React.createElement(StyledArea, {
          value: value,
          required: this.props.required,
          id: this.props.id,
          name: this.props.id,
          placeholder: this.props.placeholder,
          onChange: this.handleChange
        });
      } else if (this.props.type == 'select') {
        input = /*#__PURE__*/React.createElement(StyledSelect, {
          value: value,
          required: this.props.required,
          id: this.props.id,
          name: this.props.id,
          onChange: this.handleChange
        }, /*#__PURE__*/React.createElement("option", {
          value: "",
          selected: true,
          disabled: true,
          hidden: true
        }, "Choisir..."), this.props.list.map(function (item) {
          return /*#__PURE__*/React.createElement("option", null, item);
        }));
      } else if (this.props.type == 'checkbox') {
        input = /*#__PURE__*/React.createElement(ToogleSwith, {
          type: this.props.type,
          value: value,
          checked: value,
          id: this.props.id,
          name: this.props.id,
          required: this.props.required,
          onChange: this.handleChange,
          inlineLabel: this.props.inline
        });
      } else if (this.props.type == 'file') {
        input = /*#__PURE__*/React.createElement(StyledFiles, {
          type: this.props.type,
          value: value,
          id: this.props.id,
          name: this.props.id,
          multiple: this.props.multiple,
          accept: this.props.accept,
          required: this.props.required,
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onChange: this.handleChangeFiles,
          inlineLabel: this.props.inline
        });
      } else {
        input = /*#__PURE__*/React.createElement(StyledInput, {
          type: this.props.type,
          value: value,
          id: this.props.id,
          name: this.props.id,
          required: this.props.required,
          readonly: this.props.readonly,
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          onChange: this.handleChange,
          inlineLabel: this.props.inline
        });
      }

      return /*#__PURE__*/React.createElement(Container, {
        isFile: this.props.type == 'file' ? true : false
      }, this.props.label && /*#__PURE__*/React.createElement(Label, {
        isFile: this.props.type == 'file' ? true : false,
        htmlFor: this.props.id,
        inlineLabel: this.props.inline
      }, " ", this.props.label, " "), input, this.props.type == 'file' && /*#__PURE__*/React.createElement(ContainerPreview, null, listFiles));
    }
  }]);

  return Input;
}(Component);



/***/ }),

/***/ "./src/components/Loader.jsx":
/*!***********************************!*\
  !*** ./src/components/Loader.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            z-index: 99;\n            opacity: 1;\n            pointer-events: all;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tz-index: -1;\n\topacity: 0;\n\tpointer-events: none;\n\tbackground: rgba(251, 97, 7, 0.75);\n    transition: opacity 0.3s;\n    \n    ", "\n\n\tp {\n\t\tmargin-top: 10px;\n\t\tfont-size: 18px;\n\t\tcolor: #FFF;\n    }\n    \n    .lds-default {\n        display: inline-block;\n        position: relative;\n        width: 80px;\n        height: 80px;\n    }\n\n    .lds-default div {\n        position: absolute;\n        width: 6px;\n        height: 6px;\n        background: #fff;\n        border-radius: 50%;\n        animation: lds-default 1.2s linear infinite;\n    }\n\n    .lds-default div:nth-child(1) {\n        animation-delay: 0s;\n        top: 37px;\n        left: 66px;\n    }\n\n    .lds-default div:nth-child(2) {\n        animation-delay: -0.1s;\n        top: 22px;\n        left: 62px;\n    }\n\n    .lds-default div:nth-child(3) {\n        animation-delay: -0.2s;\n        top: 11px;\n        left: 52px;\n    }\n\n    .lds-default div:nth-child(4) {\n        animation-delay: -0.3s;\n        top: 7px;\n        left: 37px;\n    }\n\n    .lds-default div:nth-child(5) {\n        animation-delay: -0.4s;\n        top: 11px;\n        left: 22px;\n    }\n\n    .lds-default div:nth-child(6) {\n        animation-delay: -0.5s;\n        top: 22px;\n        left: 11px;\n    }\n\n    .lds-default div:nth-child(7) {\n        animation-delay: -0.6s;\n        top: 37px;\n        left: 7px;\n    }\n\n    .lds-default div:nth-child(8) {\n        animation-delay: -0.7s;\n        top: 52px;\n        left: 11px;\n    }\n\n    .lds-default div:nth-child(9) {\n        animation-delay: -0.8s;\n        top: 62px;\n        left: 22px;\n    }\n\n    .lds-default div:nth-child(10) {\n        animation-delay: -0.9s;\n        top: 66px;\n        left: 37px;\n    }\n\n    .lds-default div:nth-child(11) {\n        animation-delay: -1s;\n        top: 62px;\n        left: 52px;\n    }\n\n    .lds-default div:nth-child(12) {\n        animation-delay: -1.1s;\n        top: 52px;\n        left: 62px;\n    }\n\n    @keyframes lds-default {\n\n        0%,\n        20%,\n        80%,\n        100% {\n            transform: scale(1);\n        }\n\n        50% {\n            transform: scale(1.5);\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
});
function Loader(props) {
  return /*#__PURE__*/React.createElement(LoaderStyle, {
    "class": "loader",
    show: props.show
  }, /*#__PURE__*/React.createElement("div", {
    "class": "lds-default"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("p", {
    "class": "info"
  }, props.message));
}

/***/ }),

/***/ "./src/components/LogOutButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/LogOutButton.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _resources_logout_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/logout.svg */ "./src/resources/logout.svg");
/* harmony import */ var _resources_logout_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_logout_svg__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 300;\n\toutline: none;\n\tpadding: 4px 16px;\n\tborder: none;\n\tcolor: ", ";\n\ttransition: color 0.3s, transform 0.3s;\n\n\timg {\n\t\theight: 12px;\n\t\tmargin-right: 5px;\n        transition: filter 0.3s;\n\t}\n\n\t&:hover {\n\t\ttransform: scale(1.1);\n\t\tcolor: ", ";\n\n\t\timg {\n\t\t\tfilter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);\n\t\t}\n\t}\n\n\t&:active {\n\t\ttransform: scale(0.95);\n        \n        img {\n\t\t\tfilter: invert(47%) sepia(96%) saturate(2099%) hue-rotate(350deg) brightness(93%) contrast(112%);\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;




var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.orange;
});

var LogOut = /*#__PURE__*/function (_Component) {
  _inherits(LogOut, _Component);

  var _super = _createSuper(LogOut);

  function LogOut(props) {
    _classCallCheck(this, LogOut);

    return _super.call(this, props);
  }

  _createClass(LogOut, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getLogout();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledButton, {
        href: this.props.href
      }, /*#__PURE__*/React.createElement("img", {
        src: _resources_logout_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      }), 'Déconnexion'.toUpperCase());
    }
  }]);

  return LogOut;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getLogout: function getLogout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getLogout"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    href: state.general.logOut.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(LogOut));

/***/ }),

/***/ "./src/components/Navigation.jsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _resources_userDefault_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/userDefault.svg */ "./src/resources/userDefault.svg");
/* harmony import */ var _resources_userDefault_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_userDefault_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_chart_pie_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/chart-pie.svg */ "./src/resources/chart-pie.svg");
/* harmony import */ var _resources_chart_pie_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_chart_pie_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_home_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/home.svg */ "./src/resources/home.svg");
/* harmony import */ var _resources_home_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_home_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_user_tie_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/user-tie.svg */ "./src/resources/user-tie.svg");
/* harmony import */ var _resources_user_tie_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_user_tie_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_users_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/users.svg */ "./src/resources/users.svg");
/* harmony import */ var _resources_users_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_users_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_bell_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/bell.svg */ "./src/resources/bell.svg");
/* harmony import */ var _resources_bell_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_bell_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _resources_folder_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/folder.svg */ "./src/resources/folder.svg");
/* harmony import */ var _resources_folder_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resources_folder_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BackSite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BackSite */ "./src/components/BackSite.jsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ "./src/components/Loader.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\t\twidth: 95% !important;\n\t\t\t\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t\t&:before {\n\t\t\t\twidth: 285px !important;\n\n\t\t\t\t", ";\n\t\t\t}\n\t\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n    flex-direction: row;\n\talign-items: center;\n\t\n\t", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            opacity: 0;\n\t\t\tpointer-events: none;\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tcursor: pointer;\n\tz-index: 2;\n\tmin-width: 24px;\n\twidth: 24px;\n\theight: 24px;\n\tmargin-left: 15px;\n\tborder-radius: 25px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n\tbackground: ", ";\n\tbox-shadow: ", ";\n\ttransition: transform 0.3s, opacity 0.8s;\n\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 14px;\n\t\theight: 2px;\n\t\tborder-radius: 30px;\n\t\tbackground: ", ";\n\t}\n\n\t&:after {\n\t\ttransform: rotate(90deg);\n\t}\n\n\t&:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t&:active {\n\t\ttransform: scale(0.95);\n\t}\n\n\t", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 17px;\n    height: 17px;\n    border-radius: 50%;\n    font-size: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 8px;\n    left: 3px;\n    z-index: 1;\n    font-family: ", ";\n    font-weight: ", ";\n    background: ", ";\n    box-shadow: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            h2 {\n                opacity: 0;\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 30px;\n\n    .imgContainer {\n        overflow: hidden;\n        min-width: 42px;\n        width: 42px;\n        height: 42px;\n        border-radius: 50px;\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-position: center;\n            object-fit: cover;\n        }\n    }\n\n    h2 {\n        font-size: 24px;\n        color: ", ";\n        font-weight: ", ";\n        margin-left: 20px;\n        white-space: pre;\n        transition: opacity 0.3s;\n    }\n\n    ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\toverflow: hidden;\n            width: 42px;\n            padding: 45px 20px;\n\n            li a span, .addButton {\n                opacity: 0;\n                pointer-events: none;\n            }\n\n            #backSite {\n                img {\n                    width: 42px;\n                    height: 42px;\n                }\n\n                span {\n                    opacity: 0;\n                    pointer-events: none;\n                }\n            }\n\n\t\t\t&:hover {\n\t\t\t\twidth: 210px;\n\t\t\t\tpadding: 45px;\n\n\t\t\t\th2 {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\tli a span, .addButton {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tpointer-events: all;\n\t\t\t\t}\n\n\t\t\t\t#backSite {\n\t\t\t\t\timg {\n\t\t\t\t\t\twidth: 28px;\n\t\t\t\t\t\theight: 28px;\n\t\t\t\t\t}\n\n\t\t\t\t\tspan {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\tpointer-events: all;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 210px;\n    height: calc(100vh - 55px);\n    top: 55px;\n    padding: 45px;\n    position: fixed;\n    z-index: 2;\n    background: ", ";\n    transition: width 0.4s, padding 0.4s;\n\n    ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n\n        li {\n            width: 100%;\n\n            &:before {\n                content: '';\n                z-index: -1;\n                position: absolute;\n                height: 50px;\n                width: 0;\n                left: 0;\n                border-radius: 0px 50px 50px 0px;\n                transition: width 0.4s;\n                box-shadow: 0 0 10px rgba(251, 97, 7, 0.5);\n                ", ";\n            }\n\n            &:hover {\n                &:before {\n                    width: 285px;\n\t\t\t\t}\n            }\n\n            img {\n                width: 42px;\n                height: 42px;\n                object-fit: contain;\n                margin-right: 12px;\n                filter: drop-shadow(0px 3px 15px rgba(0,0,0,0.5));\n                transition: transform 0.3s;\n            }\n\n            a {\n                position: relative;\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n\t\t\t\theight: 50px;\n                margin: 0;\n                font-size: 17px;\n                font-family: ", ";\n                font-weight: ", ";\n                color: ", ";\n                text-shadow: ", ";\n\t\t\t\ttext-decoration: none;\n                transition: transform 0.3s;\n\n                span {\n                    transition: opacity 0.3s;\n                    white-space: pre;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t&:hover {\n                    transform: scale(1.05);\n\t\t\t\t}\n\n\t\t\t\t&:active {\n\t\t\t\t\ttransform: scale(0.98);\n\t\t\t\t}\n            }\n        }\n    }\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;












var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.orangeRadius;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return !props.closeMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
});
var Avatar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return !props.closeMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
});
var Notification = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5(), function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.shadows;
});
var AddButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return !props.closeMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7());
});
var LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject8(), function (props) {
  return props.current && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject9(), function (props) {
    return !props.closeMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10());
  });
});

var NavLink = function NavLink(props) {
  var linkFormat = props.name.trim().toLowerCase().replace(/é/gi, 'e').replace(/ /gi, '_');
  return /*#__PURE__*/React.createElement(LinkStyled, {
    closeMenu: props.closeMenu,
    current: props.currentLink == props.name ? true : null
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + linkFormat,
    onClick: function onClick() {
      return props.changeView(props.name);
    }
  }, props.notifications && /*#__PURE__*/React.createElement(Notification, null, props.notifications), /*#__PURE__*/React.createElement("img", {
    src: props.src
  }), /*#__PURE__*/React.createElement("span", null, props.name)), props.addButton ? /*#__PURE__*/React.createElement(AddButton, {
    className: "addButton",
    onClick: props.addButton,
    closeMenu: props.closeMenu
  }) : null);
};

var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _super.call(this, props);
    _this.state = {
      showLoader: true,
      currentLink: 'Tableau de bord'
    };
    _this.handleChangeLink = _this.handleChangeLink.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getPersonalData();
      this.props.toogleLoader(true, 'Chargement des données en cours ...');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.myUserData.role != 'load' && this.props.loaderStat.statut ? this.props.toogleLoader(false, 'Chargement des données en cours ...') : null;
    }
  }, {
    key: "handleChangeLink",
    value: function handleChangeLink(newLink) {
      this.setState({
        currentLink: newLink
      });
      this.props.onChangeView(newLink);
    }
  }, {
    key: "render",
    value: function render() {
      var showLink = new Array();

      if (this.props.myUserData.role != 'load') {
        // ALL
        showLink.push( /*#__PURE__*/React.createElement(NavLink, {
          src: _resources_chart_pie_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
          name: "Tableau de bord",
          currentLink: this.state.currentLink,
          changeView: this.handleChangeLink,
          closeMenu: this.props.statMenu
        })); // ONLY CHASSEUR AND SUPERVISEUR

        if (this.props.myUserData.role != 'client__investisseur') {
          showLink.push( /*#__PURE__*/React.createElement(NavLink, {
            src: _resources_home_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
            name: "Propri\xE9t\xE9s",
            currentLink: this.state.currentLink,
            changeView: this.handleChangeLink,
            closeMenu: this.props.statMenu,
            addButton: this.props.toogleAddPropriete
          })); // ONLY SUPERVISEUR

          if (this.props.myUserData.role != 'chasseur') {
            showLink.push( /*#__PURE__*/React.createElement(NavLink, {
              src: _resources_user_tie_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
              name: "Chasseurs",
              currentLink: this.state.currentLink,
              changeView: this.handleChangeLink,
              closeMenu: this.props.statMenu,
              addButton: this.props.toogleAddChasseur
            }));
          }

          showLink.push( /*#__PURE__*/React.createElement(NavLink, {
            src: _resources_users_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
            name: "Mes clients",
            currentLink: this.state.currentLink,
            changeView: this.handleChangeLink,
            closeMenu: this.props.statMenu,
            addButton: this.props.toogleAddClient
          }));
        } // ALL


        showLink.push( /*#__PURE__*/React.createElement(NavLink, {
          src: _resources_bell_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
          name: "Notifications",
          currentLink: this.state.currentLink,
          changeView: this.handleChangeLink,
          closeMenu: this.props.statMenu
        })); // ONLY CHASSEUR AND SUPERVISEUR

        if (this.props.myUserData.role != 'client__investisseur') {
          showLink.push( /*#__PURE__*/React.createElement(NavLink, {
            src: _resources_folder_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
            name: "Suivi dossiers",
            currentLink: this.state.currentLink,
            changeView: this.handleChangeLink,
            closeMenu: this.props.statMenu
          }));
        }
      }

      return /*#__PURE__*/React.createElement(NavContainer, {
        closeMenu: this.props.statMenu
      }, /*#__PURE__*/React.createElement(Avatar, {
        closeMenu: this.props.statMenu
      }, /*#__PURE__*/React.createElement("div", {
        className: "imgContainer"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.props.myUserData.avatar != 'default' ? this.props.myUserData.avatar : _resources_userDefault_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      })), /*#__PURE__*/React.createElement("h2", null, this.props.myUserData.display_name)), /*#__PURE__*/React.createElement("ul", null, showLink), /*#__PURE__*/React.createElement(_components_BackSite__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/React.createElement(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        show: this.props.loaderStat.statut,
        message: this.props.loaderStat.message
      }), ";");
    }
  }]);

  return Navigation;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPersonalData: function getPersonalData() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getPersonalData"])());
    },
    toogleLoader: function toogleLoader(statut, message) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleLoader"])(statut, message));
    },
    toogleAddClient: function toogleAddClient() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddClient"])());
    },
    toogleAddChasseur: function toogleAddChasseur() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddChasseur"])());
    },
    toogleAddPropriete: function toogleAddPropriete() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddPropriete"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    myUserData: state.general.myData.data,
    loaderStat: state.general.loader
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Navigation));

/***/ }),

/***/ "./src/components/Table.jsx":
/*!**********************************!*\
  !*** ./src/components/Table.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_DeleteButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DeleteButton */ "./src/components/DeleteButton.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 10px;\n    font-family: ", ";\n    font-size: 13px;\n    font-weight: ", ";\n    text-align: center;\n\n    &:first-child {\n        padding-left: 0px;\n    }\n\n    img {\n        width: 100%;\n        width: 100px;\n        height: 100px;\n        object-fit: cover;\n        border-radius: 15px;\n        box-shadow: ", ";\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 10px;\n    font-family: ", ";\n    font-size: 13px;\n    font-weight: ", ";\n    text-align: center;\n\n    &:first-child {\n        padding-left: 0px;\n    }\n\n    img {\n        width: 100px;\n        height: 100px;\n        object-fit: cover;\n        border-radius: 15px;\n        box-shadow: ", ";\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 10px;\n    font-size: 15px;\n    text-align: center;\n\n    &:first-child {\n        padding-left: 0px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            pointer-events: none;\n            opacity: 0.4;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 0;\n    border-bottom: 1px solid #D8D8D8;\n\n    &:last-child {\n         border-bottom: none;\n    }\n\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 40px;\n    border-collapse: collapse;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;


var StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table(_templateObject());
var Line = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tr(_templateObject2(), function (props) {
  return props.lineStat == 'disable' && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
});
var ValThHead = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].th(_templateObject4());
var ValTh = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].th(_templateObject5(), function (props) {
  return props.theme.robot;
}, function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.shadows;
});
var ValTd = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].td(_templateObject6(), function (props) {
  return props.theme.robot;
}, function (props) {
  return props.theme.light;
}, function (props) {
  return props.theme.shadows;
});

var LineTable = /*#__PURE__*/function (_Component) {
  _inherits(LineTable, _Component);

  var _super = _createSuper(LineTable);

  function LineTable(props) {
    var _this;

    _classCallCheck(this, LineTable);

    _this = _super.call(this, props);
    _this.state = {
      lineStat: null
    };
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LineTable, [{
    key: "handleDelete",
    value: function handleDelete() {
      this.setState({
        lineStat: 'disable'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var listItems = new Array();
      var optionTable = new Array(); // Pour chaque entête on assigne la valeurs correspondant

      this.props.orderKeys.forEach(function (searchKey) {
        var returnVal = _this2.props.object[searchKey]; // Si la clé est un sous element on va le chercher

        if (searchKey.indexOf('.') != -1) {
          searchKey = searchKey.split(".");
          var objVal = _this2.props.object;
          searchKey.forEach(function (key) {
            objVal = objVal[key];
          });

          if (searchKey == 'id') {
            returnVal = /*#__PURE__*/React.createElement(ValTh, {
              scope: "row"
            }, objVal);
          } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && objVal != null && objVal != false) {
            returnVal = /*#__PURE__*/React.createElement(ValTd, null, /*#__PURE__*/React.createElement("img", {
              src: objVal
            }));
          } else {
            returnVal = /*#__PURE__*/React.createElement(ValTd, null, objVal);
          }

          listItems.push(returnVal);
        } else {
          if (searchKey == 'id') {
            returnVal = /*#__PURE__*/React.createElement(ValTh, {
              scope: "row"
            }, returnVal);
          } else if (searchKey.indexOf('photo') != -1 || searchKey == 'thumbnail' && returnVal != null && returnVal != false) {
            returnVal = /*#__PURE__*/React.createElement(ValTd, null, /*#__PURE__*/React.createElement("img", {
              src: returnVal
            }));
          } else {
            returnVal = /*#__PURE__*/React.createElement(ValTd, null, returnVal);
          }

          listItems.push(returnVal);
        }
      });

      if (this.props["delete"]) {
        optionTable.push( /*#__PURE__*/React.createElement(ValTd, null, /*#__PURE__*/React.createElement(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: this.props["delete"],
          id: this.props.id,
          onClick: this.handleDelete
        })));
      }

      return /*#__PURE__*/React.createElement(Line, {
        key: this.props.id,
        lineStat: this.state.lineStat
      }, listItems, optionTable);
    }
  }]);

  return LineTable;
}(Component);

function Table(props) {
  if (props.statut == 'error') {
    return /*#__PURE__*/React.createElement("div", null, "Impossible de charger les donn\xE9es ...");
  } else if (props.statut == null && props.data == null) {
    return /*#__PURE__*/React.createElement("div", null, "Chargement...");
  } else if (props.statut != null && props.data == null) {
    return /*#__PURE__*/React.createElement("div", null, props.empty);
  } else {
    var headTable = Object.values(props.listeProps).map(function (item) {
      return /*#__PURE__*/React.createElement(ValThHead, {
        scope: "col"
      }, item);
    });
    var contentTable = props.data.map(function (item) {
      return /*#__PURE__*/React.createElement(LineTable, {
        "delete": props.deleteType,
        id: item.id,
        object: item,
        orderKeys: Object.keys(props.listeProps)
      });
    });
    return /*#__PURE__*/React.createElement(StyledTable, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headTable)), /*#__PURE__*/React.createElement("tbody", null, contentTable));
  }
}

/***/ }),

/***/ "./src/components/Uploader.jsx":
/*!*************************************!*\
  !*** ./src/components/Uploader.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    margin-bottom: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            &:before {\n                animation-duration: 1.5s;\n                animation-iteration-count: infinite;\n                animation-name: moveIndeterminate;\n                animation-timing-function: linear;\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 14px;\n    margin-right: 20px;\n    border-radius: 20px;\n    background: #A5A5A5;\n    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.45);\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        width: ", "%;\n        height: 14px;\n        border-radius: 20px;\n        ", ";\n        transition: width 0.5s, right 0.5s;\n    }\n\n    ", "\n\n    @keyframes moveIndeterminate {\n        0% { \n            width: 0%;\n            right: 0%;\n        }\n\n        50% { \n            width: 100%;\n            right: 0%;\n        }\n\n        750% { \n            width: 0%;\n            right: 100%;\n        }\n\n        100% { \n            width: 0%;\n            right: 0%;\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    min-width: 200px;\n    margin: 10px 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            bottom: 20px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    z-index: 10;\n    bottom: -100%;\n    right: 20px;\n    border-radius: 10px;\n    padding: 20px 30px;\n    background: ", ";\n    box-shadow: ", ";\n    transition: bottom 0.5s ease-out;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;


var UploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
});
var ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var ProgressBarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), function (props) {
  return props.pourcentage;
}, function (props) {
  return props.theme.orangeRadius;
}, function (props) {
  return props.inderterminate && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
});
var TextBarre = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject6());

function ProgressBar(props) {
  return /*#__PURE__*/React.createElement(ItemContainer, null, /*#__PURE__*/React.createElement(ProgressBarStyle, {
    inderterminate: props.pourcentage >= 90,
    pourcentage: props.pourcentage >= 90 ? 100 : props.pourcentage
  }), /*#__PURE__*/React.createElement(TextBarre, null, props.pourcentage, "%"));
}

var Uploader = /*#__PURE__*/function (_Component) {
  _inherits(Uploader, _Component);

  var _super = _createSuper(Uploader);

  function Uploader(props) {
    _classCallCheck(this, Uploader);

    return _super.call(this, props);
  }

  _createClass(Uploader, [{
    key: "render",
    value: function render() {
      var uploads = new Array();

      for (var key in this.props.registerData) {
        uploads.push( /*#__PURE__*/React.createElement(ProgressBar, {
          key: key,
          pourcentage: this.props.registerData[key]
        }));
      }

      return /*#__PURE__*/React.createElement(UploadContainer, {
        show: uploads.length > 0
      }, /*#__PURE__*/React.createElement(TextBarre, null, "Envoie en cours ..."), uploads);
    }
  }]);

  return Uploader;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    registerData: state.general.registerData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(Uploader));

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: GET_PROPRIETE, UPDATE_PROPRIETE, GET_DOSSIER, UPDATE_DOSSIER, GET_USER, UPDATE_USER, GET_MY_DATA, GET_LOGOUT, GET_ADRESSE_SITE, TOOGLE_LOADER, TOOGLE_CLIENT_ADD_MODAL, TOOGLE_CHASSEUR_ADD_MODAL, TOOGLE_PROPRIETE_ADD_MODAL, TOOGLE_USER_MODAL, TOOGLE_DOSSIER_MODAL, TOOGLE_PROPRIETE_MODAL, SET_PROPRIETE_ADD_MODAL, SET_CLIENT_ADD_MODAL, SET_CHASSEUR_ADD_MODAL, SET_REGISTER_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROPRIETE", function() { return GET_PROPRIETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROPRIETE", function() { return UPDATE_PROPRIETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DOSSIER", function() { return GET_DOSSIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_DOSSIER", function() { return UPDATE_DOSSIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_DATA", function() { return GET_MY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGOUT", function() { return GET_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ADRESSE_SITE", function() { return GET_ADRESSE_SITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_LOADER", function() { return TOOGLE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_CLIENT_ADD_MODAL", function() { return TOOGLE_CLIENT_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_CHASSEUR_ADD_MODAL", function() { return TOOGLE_CHASSEUR_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_PROPRIETE_ADD_MODAL", function() { return TOOGLE_PROPRIETE_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_USER_MODAL", function() { return TOOGLE_USER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_DOSSIER_MODAL", function() { return TOOGLE_DOSSIER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_PROPRIETE_MODAL", function() { return TOOGLE_PROPRIETE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROPRIETE_ADD_MODAL", function() { return SET_PROPRIETE_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLIENT_ADD_MODAL", function() { return SET_CLIENT_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHASSEUR_ADD_MODAL", function() { return SET_CHASSEUR_ADD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REGISTER_DATA", function() { return SET_REGISTER_DATA; });
var GET_PROPRIETE = "GET_PROPRIETE";
var UPDATE_PROPRIETE = "UPDATE_PROPRIETE";
var GET_DOSSIER = "GET_DOSSIER";
var UPDATE_DOSSIER = "UPDATE_DOSSIER";
var GET_USER = "GET_USER";
var UPDATE_USER = "UPDATE_USER";
var GET_MY_DATA = "GET_MY_DATA";
var GET_LOGOUT = "GET_LOGOUT";
var GET_ADRESSE_SITE = "GET_ADRESSE_SITE";
var TOOGLE_LOADER = "TOOGLE_LOADER";
var TOOGLE_CLIENT_ADD_MODAL = "TOOGLE_CLIENT_ADD_MODAL";
var TOOGLE_CHASSEUR_ADD_MODAL = "TOOGLE_CHASSEUR_ADD_MODAL";
var TOOGLE_PROPRIETE_ADD_MODAL = "TOOGLE_PROPRIETE_ADD_MODAL";
var TOOGLE_USER_MODAL = "TOOGLE_USER_MODAL";
var TOOGLE_DOSSIER_MODAL = "TOOGLE_DOSSIER_MODAL";
var TOOGLE_PROPRIETE_MODAL = "TOOGLE_PROPRIETE_MODAL";
var SET_PROPRIETE_ADD_MODAL = "SET_PROPRIETE_ADD_MODAL";
var SET_CLIENT_ADD_MODAL = "SET_CLIENT_ADD_MODAL";
var SET_CHASSEUR_ADD_MODAL = "SET_CHASSEUR_ADD_MODAL";
var SET_REGISTER_DATA = "SET_REGISTER_DATA";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
var render = wp.element.render;

/* RENDER APP */

render( /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('root-app'));

/***/ }),

/***/ "./src/lib/functions.js":
/*!******************************!*\
  !*** ./src/lib/functions.js ***!
  \******************************/
/*! exports provided: setDocumentTitle, formatPrix, fixNumber, formatToJson, xmlTojson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocumentTitle", function() { return setDocumentTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrix", function() { return formatPrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNumber", function() { return fixNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatToJson", function() { return formatToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xmlTojson", function() { return xmlTojson; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// SET WINDOW TITLE
function setDocumentTitle(title) {
  document.title = title;
} // FORMAT PRICE FOR OUTPUT

function formatPrix(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
} // FIX NUMBER TO 2 DECIMAL

function fixNumber(value) {
  return Number(Math.round(parseFloat(value + 'e' + 2)) + 'e-' + 2);
} // FORMAT DATA TO JSON

function formatToJson(dataToFormat) {
  var parserXML = new DOMParser();
  var xmlDoc = parserXML.parseFromString(dataToFormat, "text/xml");
  var json = xmlTojson(xmlDoc);
  var data = json.wp_ajax.response.object.response_data;
  var regex = /<!\[CDATA\[(.*)\]\]>/gm;
  return JSON.parse(regex.exec(data)[1]);
} // Changes XML to JSON

function xmlTojson(srcDOM) {
  var children = _toConsumableArray(srcDOM.children);

  if (!children.length) {
    return srcDOM.innerHTML;
  }

  var jsonResult = {};

  var _iterator = _createForOfIteratorHelper(children),
      _step;

  try {
    var _loop = function _loop() {
      var child = _step.value;
      var childIsArray = children.filter(function (eachChild) {
        return eachChild.nodeName === child.nodeName;
      }).length > 1;

      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [xmlTojson(child)];
        } else {
          jsonResult[child.nodeName].push(xmlTojson(child));
        }
      } else {
        jsonResult[child.nodeName] = xmlTojson(child);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return jsonResult;
}

/***/ }),

/***/ "./src/reducers/addModalReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/addModalReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return manageAddModal; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  addProprieteModal: {
    title: null,
    description: null,
    cashflow_mensuel_brut: 0,
    rentabilite_net: 0,
    prix_au_m: 0,
    rentabilite_brut: 0,
    adresse_postale: null,
    ville: null,
    zip_code_postal: null,
    type_bien: null,
    annee: null,
    superficie: 0,
    superficie_habitable: 0,
    nombre_de_pieces: null,
    nombre_de_chambre: 0,
    nombre_de_salles_de_bains: 0,
    nombre_de_wc: 0,
    nombre_de_celliers: 0,
    nombre_de_buanderies: 0,
    niveaux: 0,
    cuisine: false,
    isolation: false,
    prix_du_bien: null,
    frais_dagence: 0,
    frais_de_travaux: 0,
    frais_de_notaire: 0,
    honoraires_immomalin: 0,
    mobilier_equipement: 0,
    projet_global: 0,
    budget: 0,
    charges_copropriete_mensuelles: null,
    charges_copropriete_annuelles: 0,
    taxe_fonciere_mensuelles: 0,
    taxe_fonciere_annuelles: 0,
    assurance_pno_mensuelles: 0,
    assurance_pno_annuelles: 0,
    assurances_locatives_mensuelles: 0,
    assurances_locatives_annuelles: 0,
    gestion_locative_mensuelles: 0,
    gestion_locative_annuelles: 0,
    frais_divers_mensuelles: 0,
    frais_divers_annuelles: 0,
    frais_electricite_mensuelles: 0,
    frais_electricite_annuelles: 0,
    frais_eau_mensuelles: 0,
    frais_eau_annuelles: 0,
    forfait_internet_mensuelles: 0,
    forfait_internet_annuelles: 0,
    total_charges_mensuelles: 0,
    total_charges_annuelles: 0,
    loyer_previsionnel_mensuelles: 0,
    loyer_previsionnel_annuelles: 0,
    vacance_locative: 0,
    total_revenus_mensuelles: 0,
    total_revenus_annuelles: 0,
    solde: 0,
    nombre_de_lots: null,
    derniere_assemble: null,
    syndic: null,
    details_charges_copropriete: null,
    type_de_chauffage: null,
    mode_de_chauffage: null,
    energie_du_chauffage: null,
    caves: 0,
    terrases: 0,
    balcons: 0,
    varangues: 0,
    piscines: 0,
    jacuzzis: 0,
    equipements: null,
    diagnostics: null,
    points_positif_et_negatifs: null,
    filesPhotos: new Array(),
    chasseur: null,
    artisan: null,
    interlocuteur: null
  },
  addClientModal: {
    id: null,
    role: 'client__investisseur',
    pseudo: null,
    first_name: null,
    last_name: null,
    mail: null,
    telephone: null,
    adresse: null,
    adresse_postale_1: null,
    adresse_postale_2: null,
    ville: null,
    etat_province_region: null,
    zip_code_postal: null,
    pays: null,
    filesPhotosClient: new Array()
  },
  addChasseurModal: {
    id: null,
    role: 'chasseur',
    pseudo: null,
    first_name: null,
    last_name: null,
    mail: null,
    telephone: null,
    filesPhotosChasseur: new Array()
  }
};
function manageAddModal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_PROPRIETE_ADD_MODAL"]:
      if (action.payload.key != 'resetTheForm') {
        var newData = Object.assign({}, state.addProprieteModal);
        newData[action.payload.key] = action.payload.data;
        var theKey = action.payload.key;
        /* SET MENSUELLES VALUES */

        switch (theKey) {
          case 'charges_copropriete_annuelles':
          case 'taxe_fonciere_annuelles':
          case 'assurance_pno_annuelles':
          case 'assurances_locatives_annuelles':
          case 'gestion_locative_annuelles':
          case 'frais_divers_annuelles':
          case 'frais_electricite_annuelles':
          case 'frais_eau_annuelles':
          case 'forfait_internet_annuelles':
          case 'loyer_previsionnel_annuelles':
            var keyForA = theKey.replace(/annuelles$/, "mensuelles");
            newData[keyForA] = Number((action.payload.data / 12).toFixed(0));
            break;
        }
        /* SET ANNUELLES VALUES */


        switch (theKey) {
          case 'charges_copropriete_mensuelles':
          case 'taxe_fonciere_mensuelles':
          case 'assurance_pno_mensuelles':
          case 'assurances_locatives_mensuelles':
          case 'gestion_locative_mensuelles':
          case 'frais_divers_mensuelles':
          case 'frais_electricite_mensuelles':
          case 'frais_eau_mensuelles':
          case 'forfait_internet_mensuelles':
          case 'loyer_previsionnel_mensuelles':
            var keyForM = theKey.replace(/mensuelles$/, "annuelles");
            newData[keyForM] = Number(action.payload.data * 12);
            break;
        }
        /* SET TOTAL CHARGE MENSUELLES VALUES */


        switch (theKey) {
          case 'charges_copropriete_mensuelles':
          case 'taxe_fonciere_mensuelles':
          case 'assurance_pno_mensuelles':
          case 'assurances_locatives_mensuelles':
          case 'gestion_locative_mensuelles':
          case 'frais_divers_mensuelles':
          case 'frais_electricite_mensuelles':
          case 'frais_eau_mensuelles':
          case 'forfait_internet_mensuelles':
            newData.total_charges_mensuelles = Number(newData.charges_copropriete_mensuelles + newData.taxe_fonciere_mensuelles + newData.assurance_pno_mensuelles + newData.assurances_locatives_mensuelles + newData.gestion_locative_mensuelles + newData.frais_divers_mensuelles + newData.frais_electricite_mensuelles + newData.frais_eau_mensuelles + newData.forfait_internet_mensuelles);
            break;
        }
        /* SET TOTAL CHARGE ANNUELLES VALUES */


        switch (theKey) {
          case 'charges_copropriete_annuelles':
          case 'taxe_fonciere_annuelles':
          case 'assurance_pno_annuelles':
          case 'assurances_locatives_annuelles':
          case 'gestion_locative_annuelles':
          case 'frais_divers_annuelles':
          case 'frais_electricite_annuelles':
          case 'frais_eau_annuelles':
          case 'forfait_internet_annuelles':
            newData.total_charges_annuelles = Number(newData.charges_copropriete_annuelles + newData.taxe_fonciere_annuelles + newData.assurance_pno_annuelles + newData.assurances_locatives_annuelles + newData.gestion_locative_annuelles + newData.frais_divers_annuelles + newData.frais_electricite_annuelles + newData.frais_eau_annuelles + newData.forfait_internet_annuelles);
            break;
        }
        /* REVENU ANNUELLES */


        switch (theKey) {
          case 'vacance_locative':
          case 'loyer_previsionnel_annuelles':
            newData.total_revenus_annuelles = Number(newData.loyer_previsionnel_annuelles / (newData.vacance_locative / 100 + 1));
            break;
        }
        /* REVENU ANNUELLES */


        switch (theKey) {
          case 'vacance_locative':
          case 'loyer_previsionnel_mensuelles':
            newData.total_revenus_mensuelles = Number(newData.loyer_previsionnel_mensuelles / (newData.vacance_locative / 100 + 1));
            break;
        }
        /* PROJET GLOBAL */


        switch (theKey) {
          case 'prix_du_bien':
          case 'frais_dagence':
          case 'frais_de_travaux':
          case 'honoraires_immomalin':
          case 'mobilier_equipement':
            newData.projet_global = Number(newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.honoraires_immomalin + newData.mobilier_equipement);
            break;
        }
        /* BUDGET */


        switch (theKey) {
          case 'frais_de_notaire':
          case 'prix_du_bien':
          case 'frais_dagence':
          case 'frais_de_travaux':
          case 'honoraires_immomalin':
          case 'mobilier_equipement':
            newData.budget = Number(newData.frais_de_notaire + newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.honoraires_immomalin + newData.mobilier_equipement);
            break;
        }
        /* SOLDE */


        switch (theKey) {
          case 'total_charges_annuelles':
          case 'total_revenus_annuelles':
            newData.solde = Number(newData.total_revenus_annuelles - newData.total_charges_annuelles);
            break;
        }
        /* RENTABILITE NET */


        switch (theKey) {
          case 'loyer_previsionnel_mensuelles':
          case 'total_charges_mensuelles':
          case 'frais_de_notaire':
          case 'prix_du_bien':
          case 'frais_dagence':
          case 'frais_de_travaux':
          case 'honoraires_immomalin':
          case 'mobilier_equipement':
            newData.rentabilite_net = Number((newData.loyer_previsionnel_mensuelles - newData.total_charges_mensuelles) * 12 / (newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux + newData.frais_de_notaire + newData.honoraires_immomalin + newData.mobilier_equipement));
            break;
        }
        /* RENTABILITE BRUT */


        switch (theKey) {
          case 'loyer_previsionnel_annuelles':
          case 'prix_du_bien':
          case 'frais_dagence':
          case 'frais_de_travaux':
            newData.rentabilite_brut = Number(newData.loyer_previsionnel_annuelles / (newData.prix_du_bien + newData.frais_dagence + newData.frais_de_travaux));
            break;
        }
        /* CASHFLOW BRUT */


        switch (theKey) {
          case 'loyer_previsionnel_mensuelles':
          case 'total_charges_mensuelles':
            newData.cashflow_mensuel_brut = Number(newData.loyer_previsionnel_mensuelles - newData.total_charges_mensuelles);
            break;
        }
        /* PRIX M CARRE */


        switch (theKey) {
          case 'frais_dagence':
          case 'prix_du_bien':
          case 'superficie':
            newData.prix_au_m = Number((newData.prix_du_bien + newData.frais_dagence) / newData.superficie);
            break;
        }

        newState = _objectSpread(_objectSpread({}, state), {}, {
          addProprieteModal: newData
        });
      } else {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          addProprieteModal: {
            title: '',
            description: '',
            cashflow_mensuel_brut: 0,
            rentabilite_net: 0,
            prix_au_m: 0,
            rentabilite_brut: 0,
            adresse_postale: '',
            ville: '',
            zip_code_postal: '',
            type_bien: '',
            annee: '',
            superficie: 0,
            superficie_habitable: 0,
            nombre_de_pieces: '',
            nombre_de_chambre: 0,
            nombre_de_salles_de_bains: 0,
            nombre_de_wc: 0,
            nombre_de_celliers: 0,
            nombre_de_buanderies: 0,
            niveaux: 0,
            cuisine: false,
            isolation: false,
            prix_du_bien: '',
            frais_dagence: 0,
            frais_de_travaux: 0,
            frais_de_notaire: 0,
            honoraires_immomalin: 0,
            mobilier_equipement: 0,
            projet_global: 0,
            budget: 0,
            charges_copropriete_mensuelles: '',
            charges_copropriete_annuelles: 0,
            taxe_fonciere_mensuelles: 0,
            taxe_fonciere_annuelles: 0,
            assurance_pno_mensuelles: 0,
            assurance_pno_annuelles: 0,
            assurances_locatives_mensuelles: 0,
            assurances_locatives_annuelles: 0,
            gestion_locative_mensuelles: 0,
            gestion_locative_annuelles: 0,
            frais_divers_mensuelles: 0,
            frais_divers_annuelles: 0,
            frais_electricite_mensuelles: 0,
            frais_electricite_annuelles: 0,
            frais_eau_mensuelles: 0,
            frais_eau_annuelles: 0,
            forfait_internet_mensuelles: 0,
            forfait_internet_annuelles: 0,
            total_charges_mensuelles: 0,
            total_charges_annuelles: 0,
            loyer_previsionnel_mensuelles: 0,
            loyer_previsionnel_annuelles: 0,
            vacance_locative: 0,
            total_revenus_mensuelles: 0,
            total_revenus_annuelles: 0,
            solde: 0,
            nombre_de_lots: '',
            derniere_assemble: '',
            syndic: '',
            details_charges_copropriete: '',
            type_de_chauffage: '',
            mode_de_chauffage: '',
            energie_du_chauffage: '',
            caves: 0,
            terrases: 0,
            balcons: 0,
            varangues: 0,
            piscines: 0,
            jacuzzis: 0,
            equipements: '',
            diagnostics: '',
            points_positif_et_negatifs: '',
            filesPhotos: new Array(),
            chasseur: '',
            artisan: '',
            interlocuteur: ''
          }
        });
      }

      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_CLIENT_ADD_MODAL"]:
      if (action.payload.key != 'resetTheForm') {
        var _newData = Object.assign({}, state.addClientModal);

        _newData[action.payload.key] = action.payload.data;
        newState = _objectSpread(_objectSpread({}, state), {}, {
          addClientModal: _newData
        });
      } else {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          addClientModal: {
            id: '',
            role: 'client__investisseur',
            pseudo: '',
            first_name: '',
            last_name: '',
            mail: '',
            telephone: '',
            adresse: '',
            adresse_postale_1: '',
            adresse_postale_2: '',
            ville: '',
            etat_province_region: '',
            zip_code_postal: '',
            pays: '',
            filesPhotosClient: new Array()
          }
        });
      }

      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_CHASSEUR_ADD_MODAL"]:
      if (action.payload.key != 'resetTheForm') {
        var _newData2 = Object.assign({}, state.addChasseurModal);

        _newData2[action.payload.key] = action.payload.data;
        newState = _objectSpread(_objectSpread({}, state), {}, {
          addChasseurModal: _newData2
        });
      } else {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          addChasseurModal: {
            id: '',
            role: 'chasseur',
            pseudo: '',
            first_name: '',
            last_name: '',
            mail: '',
            telephone: '',
            filesPhotosChasseur: new Array()
          }
        });
      }

      return newState || state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/dossierReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/dossierReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return manageDossier; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  listDossier: []
};
function manageDossier() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_DOSSIER"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        listDossier: action.payload
      });
      return newState || state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/generalReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/generalReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return manageGeneral; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  userModal: false,
  dossierModal: false,
  proprieteModal: false,
  addClientModal: false,
  addChasseurModal: false,
  addProprieteModal: false,
  loader: {
    statut: false,
    message: 'Veuillez patienter ...'
  },
  registerData: {},
  logOut: '#logout',
  homeUrl: '#homeUrl',
  myData: {
    data: {
      id: null,
      avatar: 'default',
      display_name: 'Utilisateur',
      role: 'load'
    }
  }
};
function manageGeneral() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_MY_DATA"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        myData: action.payload
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_LOGOUT"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        logOut: action.payload
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_ADRESSE_SITE"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        homeUrl: action.payload
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_LOADER"]:
      if (action.payload.statut == 'null') {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          loader: {
            statut: !state.loader.statut,
            message: action.payload.message
          }
        });
      } else {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          loader: {
            statut: action.payload.statut,
            message: action.payload.message
          }
        });
      }

      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_CLIENT_ADD_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        addClientModal: !state.addClientModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_CHASSEUR_ADD_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        addChasseurModal: !state.addChasseurModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_PROPRIETE_ADD_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        addProprieteModal: !state.addProprieteModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_USER_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        userModal: !state.userModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_DOSSIER_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        dossierModal: !state.dossierModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_PROPRIETE_MODAL"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        proprieteModal: !state.proprieteModal
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["SET_REGISTER_DATA"]:
      if (action.payload.data < 100) {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          registerData: _objectSpread(_objectSpread({}, state.registerData), {}, _defineProperty({}, action.payload.key, action.payload.data))
        });
      } else {
        newState = _objectSpread(_objectSpread({}, state), {}, {
          registerData: _objectSpread({}, state.registerData)
        });
        delete newState.registerData[action.payload.key];
      }

      return newState || state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/proprieteReducer.js":
/*!******************************************!*\
  !*** ./src/reducers/proprieteReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return managePropriete; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  listPropriete: []
};
function managePropriete() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_PROPRIETE"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        listPropriete: action.payload
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROPRIETE"]:
      /*const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
          newState = {
              ...state,
              favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
          }
      }
      else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          newState = {
              ...state,
              favoritesFilm: [...state.favoritesFilm, action.value]
          }
      }*/
      return newState || state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return manageUser; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  listUser: []
};
function manageUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_USER"]:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        listUser: action.payload
      });
      return newState || state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"]:
      /*const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
          newState = {
              ...state,
              favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
          }
      }
      else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          newState = {
              ...state,
              favoritesFilm: [...state.favoritesFilm, action.value]
          }
      }*/
      return newState || state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/resources/back-site.svg":
/*!*************************************!*\
  !*** ./src/resources/back-site.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:1.5125;stroke-linecap:round;stroke-linejoin:round;%7D %3C/style%3E %3Cg transform='translate(0.5 0.5)'%3E %3Cpath class='st0' d='M15.2,28.5h-4.4c-1.2,0-2.2-1-2.2-2.2c0,0,0,0,0,0V10.7c0-1.2,1-2.2,2.2-2.2h4.4'/%3E %3Cpath class='st0' d='M22.9,24.1l5.6-5.6l-5.6-5.6'/%3E %3Cpath class='st0' d='M28.5,18.5H15.2'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/bell.svg":
/*!********************************!*\
  !*** ./src/resources/bell.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M19,29c1.4,0,2.5-1.1,2.5-2.5h-5C16.5,27.9,17.6,29,19,29z M27.4,23.2c-0.8-0.8-2.2-2-2.2-6c0-3-2.1-5.5-5-6.1 v-0.8C20.3,9.6,19.7,9,19,9s-1.2,0.6-1.2,1.2v0.8c-2.9,0.6-5,3.1-5,6.1c0,4-1.4,5.2-2.2,6c-0.2,0.2-0.3,0.5-0.3,0.8 c0,0.7,0.6,1.3,1.3,1.3c0,0,0,0,0,0h15c0.7,0,1.3-0.6,1.3-1.2c0,0,0,0,0,0C27.8,23.7,27.6,23.4,27.4,23.2z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/chart-pie.svg":
/*!*************************************!*\
  !*** ./src/resources/chart-pie.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M29,20.3h-9.3l6.2,6.2c0.2,0.2,0.6,0.3,0.9,0c1.5-1.5,2.6-3.4,2.9-5.5C29.6,20.6,29.4,20.3,29,20.3L29,20.3 L29,20.3z M28.3,17.7C28,13,24.3,9.3,19.6,9c-0.3,0-0.6,0.3-0.7,0.6l0,0v8.7h8.7C28,18.4,28.3,18.1,28.3,17.7 C28.3,17.8,28.3,17.8,28.3,17.7z M17.1,20.3V11c0-0.3-0.3-0.6-0.6-0.6h-0.1c-4.7,0.7-8.2,4.8-8,9.6c0.2,5.1,4.4,9.1,9.5,9 c1.9,0,3.7-0.6,5.3-1.7c0.3-0.2,0.3-0.6,0.1-0.9c0,0,0,0-0.1-0.1L17.1,20.3z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/folder.svg":
/*!**********************************!*\
  !*** ./src/resources/folder.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M29.8,12.3h-10L16.5,9H8.2c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5l0,0h21.7c1.4,0,2.5-1.1,2.5-2.5 l0,0V14.8C32.3,13.5,31.2,12.3,29.8,12.3L29.8,12.3z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/home.svg":
/*!********************************!*\
  !*** ./src/resources/home.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M18.7,14.2L10.4,21v7.3c0,0.4,0.3,0.7,0.7,0.7l5,0c0.4,0,0.7-0.3,0.7-0.7V24c0-0.4,0.3-0.7,0.7-0.7h2.9 c0.4,0,0.7,0.3,0.7,0.7v4.3c0,0.4,0.3,0.7,0.7,0.7c0,0,0,0,0,0l5,0c0.4,0,0.7-0.3,0.7-0.7V21l-8.2-6.8C19.1,14,18.9,14,18.7,14.2 L18.7,14.2z M31.7,18.8l-3.7-3.1V9.5c0-0.3-0.2-0.5-0.5-0.5h-2.5c-0.3,0-0.5,0.2-0.5,0.5v3.2l-4-3.3c-0.8-0.7-1.9-0.7-2.7,0 L6.3,18.8c-0.2,0.2-0.3,0.5-0.1,0.8l1.1,1.4c0.2,0.2,0.5,0.3,0.8,0.1c0,0,0,0,0,0l10.5-8.7c0.2-0.2,0.5-0.2,0.7,0L29.8,21 c0.2,0.2,0.6,0.2,0.8-0.1l1.1-1.4C31.9,19.3,31.9,19,31.7,18.8C31.7,18.8,31.7,18.8,31.7,18.8L31.7,18.8z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/logout.svg":
/*!**********************************!*\
  !*** ./src/resources/logout.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.71' height='18.71'%3E%3Cpath d='M15.417 2.324a.889.889 0 0 0-.575-.21.888.888 0 0 0-.882.96.886.886 0 0 0 .312.6 7.552 7.552 0 1 1-12.493 5.72 7.483 7.483 0 0 1 2.67-5.72.885.885 0 0 0 .1-1.252.886.886 0 0 0-1.247-.1 9.247 9.247 0 0 0-3.3 7.07 9.355 9.355 0 1 0 15.417-7.07z'/%3E%3Cpath d='M9.399 10.257a.9.9 0 0 0 .9-.9V.9a.9.9 0 1 0-1.8 0v8.454a.9.9 0 0 0 .9.903z'/%3E%3C/svg%3E"

/***/ }),

/***/ "./src/resources/pencil.svg":
/*!**********************************!*\
  !*** ./src/resources/pencil.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cpath d='M28.4,14.5l-1.8,1.8c-0.2,0.2-0.5,0.2-0.7,0L21.6,12c-0.2-0.2-0.2-0.5,0-0.7l1.8-1.8c0.7-0.7,1.9-0.7,2.7,0l2.3,2.3 C29.2,12.6,29.2,13.8,28.4,14.5z M20.1,12.9L9.8,23.2L9,27.9c-0.1,0.6,0.4,1.2,1.1,1.1l4.7-0.8l10.3-10.3c0.2-0.2,0.2-0.5,0-0.7 l-4.3-4.3C20.6,12.7,20.3,12.7,20.1,12.9L20.1,12.9z M13.8,22.3c-0.2-0.2-0.2-0.6,0-0.8l6-6c0.2-0.2,0.6-0.2,0.8,0 c0.2,0.2,0.2,0.6,0,0.8l-6,6C14.4,22.5,14.1,22.5,13.8,22.3L13.8,22.3z M12.4,25.6h1.9V27l-2.5,0.4l-1.2-1.2l0.4-2.5h1.4V25.6z'/%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/trash.svg":
/*!*********************************!*\
  !*** ./src/resources/trash.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cpath d='M27.1,10.3h-4.7l-0.4-0.7C21.9,9.2,21.6,9,21.2,9h-4.5c-0.4,0-0.7,0.2-0.8,0.5l-0.4,0.7h-4.7c-0.3,0-0.6,0.3-0.6,0.6v1.2 c0,0.3,0.3,0.6,0.6,0.6h16.2c0.3,0,0.6-0.3,0.6-0.6v-1.2C27.7,10.5,27.5,10.3,27.1,10.3z M12.3,27.2c0.1,1,0.9,1.8,1.9,1.8h9.6 c1,0,1.8-0.8,1.9-1.8L26.5,14h-15L12.3,27.2z'/%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/user-tie.svg":
/*!************************************!*\
  !*** ./src/resources/user-tie.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cpath class='st0' d='M19.1,19c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S16.3,19,19.1,19z M22.8,20.3l-1.9,7.5l-1.2-5.3l1.2-2.2h-3.8 l1.2,2.2l-1.2,5.3l-1.9-7.5c-2.8,0.1-5,2.4-5,5.2v1.6c0,1,0.8,1.9,1.9,1.9l0,0h13.7c1,0,1.9-0.8,1.9-1.9v-1.6 C27.8,22.7,25.6,20.4,22.8,20.3z'/%3E %3C/svg%3E"

/***/ }),

/***/ "./src/resources/userDefault.svg":
/*!***************************************!*\
  !*** ./src/resources/userDefault.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bclip-path:url(%23c);%7D.b%7Bfill:url(%23a);%7D.c%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:8px;%7D.d%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='a' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23fb6107'/%3E%3Cstop offset='1' stop-color='%23ed1c24'/%3E%3C/linearGradient%3E%3CclipPath id='c'%3E%3Crect width='400' height='400'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg id='b' class='a'%3E%3Crect class='d' width='400' height='400'/%3E%3Crect class='b' width='400' height='400'/%3E%3Cg transform='translate(106.521 94.836)'%3E%3Cpath class='c' d='M192.959,92.609V69.24a46.74,46.74,0,0,0-46.74-46.74H52.74A46.74,46.74,0,0,0,6,69.24v23.37' transform='translate(-6 117.719)'/%3E%3Cpath class='c' d='M105.479,51.24A46.74,46.74,0,1,1,58.74,4.5a46.74,46.74,0,0,1,46.74,46.74Z' transform='translate(34.74 -4.5)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"

/***/ }),

/***/ "./src/resources/users.svg":
/*!*********************************!*\
  !*** ./src/resources/users.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 38 38' style='enable-background:new 0 0 38 38;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M9,17.6c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9S7.4,17.6,9,17.6z M29,17.6 c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9S27.4,17.6,29,17.6z M30.4,19h-2.9c-0.8,0-1.5,0.3-2,0.8 c1.8,1,3.1,2.8,3.4,4.9h2.9c0.8,0,1.4-0.6,1.4-1.4c0,0,0,0,0,0v-1.4C33.3,20.3,32,19,30.4,19z M19,19c2.8,0,5-2.2,5-5s-2.2-5-5-5 s-5,2.2-5,5C14,16.8,16.2,19,19,19C19,19,19,19,19,19z M22.4,20.4h-0.4c-1.9,1-4.2,1-6.1,0h-0.4c-2.8,0-5.1,2.3-5.1,5.1v1.3 c0,1.2,1,2.1,2.1,2.1l0,0h12.9c1.2,0,2.1-1,2.1-2.1l0,0v-1.3C27.6,22.7,25.3,20.4,22.4,20.4z M12.4,19.8c-0.5-0.5-1.3-0.8-2-0.8 H7.6c-1.6,0-2.9,1.3-2.9,2.9v1.4c0,0.8,0.6,1.4,1.4,1.4c0,0,0,0,0,0h2.9C9.4,22.6,10.6,20.8,12.4,19.8z'/%3E %3C/g%3E %3C/svg%3E"

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_generalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/generalReducer */ "./src/reducers/generalReducer.js");
/* harmony import */ var _reducers_proprieteReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/proprieteReducer */ "./src/reducers/proprieteReducer.js");
/* harmony import */ var _reducers_dossierReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/dossierReducer */ "./src/reducers/dossierReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/userReducer */ "./src/reducers/userReducer.js");
/* harmony import */ var _reducers_addModalReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/addModalReducer */ "./src/reducers/addModalReducer.js");







var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  general: _reducers_generalReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  addModal: _reducers_addModalReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  managePropriete: _reducers_proprieteReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  manageDossier: _reducers_dossierReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  manageUser: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]))));

/***/ }),

/***/ "./src/theme/design/componentsDesign.jsx":
/*!***********************************************!*\
  !*** ./src/theme/design/componentsDesign.jsx ***!
  \***********************************************/
/*! exports provided: StyledButton, TitleSection, Text, Inline, RowInput, TitleForm, Label, Form, SendButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSection", function() { return TitleSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inline", function() { return Inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowInput", function() { return RowInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleForm", function() { return TitleForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendButton", function() { return SendButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-size: 16px;\n    background: ", ";\n    color: ", ";\n    padding: 10px 20px;\n    margin-right: 10px;\n    margin-top: 50px;\n    margin-left: 0px;\n    margin-bottom: 20px;\n    border-radius: 100px;\n    border: none;\n    outline: none;\n    font-weight: ", ";\n    box-shadow: ", ";\n    transition: transform 0.3s,\n                background 0.3s,\n                color 0.3s,\n                opacity 0.3s;\n\n    &:hover {\n        transform: scale(1.1);\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:active {\n        transform: scale(0.95) !important;\n        background-color: ", ";\n    }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 15px;\n    min-width: 200px;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n            margin-top: 0px;\n        "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 20px;\n    position: relative;\n    padding: 15px 0;\n    margin-top: 50px;\n    margin-bottom: 30px;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 90px;\n        height: 3px;\n        border-radius: 30px;\n        bottom: 0;\n        left: 0;\n        background: ", ";\n    }\n\n    ", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n            margin-top: 40px;\n            color: ", ";\n\n            &:before {\n                content: '';\n                position: absolute;\n                width: calc(85% - 90px);\n                height: 1px;\n                top: 0px;\n                background-color: ", ";\n                opacity: 0.2;\n                border-radius: 5px;\n            }\n        "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n            justify-content: space-between;\n        "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-end;\n\n    ", "\n\n    ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-right: ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n            font-weight: ", ";\n        "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            font-weight: ", ";\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    font-size: 15px;\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    ", ";\n\n    ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size: 24px;\n    position: relative;\n    padding: 15px 0;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 90px;\n        height: 3px;\n        border-radius: 30px;\n        bottom: 0;\n        left: 0;\n        background: ", ";\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                    img {\n                        height: 25px;\n                        width: 25px;\n                        position: absolute;\n                        top: 1px;\n                        margin-left: ", ";\n                        margin-right: ", ";\n                        left: ", ";\n                        transition: filter 0.3s;\n                        filter: invert(1);\n                    }\n\n                    padding: ", ";\n                "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            padding: ", ";\n\n            img {\n                height: 25px;\n                width: 25px;\n                position: absolute;\n                top: 7px;\n                margin-left: ", ";\n                margin-right: ", ";\n                left: ", ";\n                transition: filter 0.3s;\n                filter: invert(1);\n            }\n\n            ", ";\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            background: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: darken($color: ", ", $amount: 10);\n            }\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            background: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: darken($color: ", ", $amount: 10);\n            }\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            background: ", ";\n\n            &:hover {\n                background-color: ", ";\n            }\n\n            &:active {\n                background-color: darken($color: ", ", $amount: 10);\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            padding: 4px 20px;\n\n            &:hover {\n                transform: scale(1.06);\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            font-weight: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            margin-left: 0px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;    \n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-size: 16px;\n    background: ", ";\n    color: ", ";\n    padding: 10px 20px;\n    margin: 10px;\n    border-radius: 100px;\n    border: none;\n    outline: none;\n    font-weight: ", ";\n    box-shadow: ", ";\n    transition: transform 0.3s,\n                background 0.3s,\n                color 0.3s,\n                opacity 0.3s;\n\n    &:hover {\n        transform: scale(1.1);\n        background-color: ", ";\n        color: ", ";\n    }\n\n    &:active {\n        transform: scale(0.95) !important;\n        background-color: ", ";\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject(), function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.noMarginLeft && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
}, function (props) {
  return props.light && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (props) {
    return props.theme.light;
  });
}, function (props) {
  return props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
}, function (props) {
  return props.orange && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), function (props) {
    return props.theme.orange;
  }, function (props) {
    return props.theme.red;
  }, function (props) {
    return props.theme.red;
  });
}, function (props) {
  return props.red && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), function (props) {
    return props.theme.red;
  }, function (props) {
    return props.theme.orange;
  }, function (props) {
    return props.theme.orange;
  });
}, function (props) {
  return props.green && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7(), function (props) {
    return props.theme.green;
  }, function (props) {
    return props.theme.red;
  }, function (props) {
    return props.theme.red;
  });
}, function (props) {
  return props.src && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8(), function (props) {
    return props.iconRight ? '10px 40px 10px 20px' : '10px 20px 10px 40px';
  }, function (props) {
    return props.iconRight ? '5px' : '0';
  }, function (props) {
    return props.iconRight ? '0px' : '5px';
  }, function (props) {
    return props.iconRight ? 'initiale' : '10px';
  }, function (props) {
    return props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9(), function (props) {
      return props.iconRight ? '5px' : '0';
    }, function (props) {
      return props.iconRight ? '0px' : '5px';
    }, function (props) {
      return props.iconRight ? 'initiale' : '10px';
    }, function (props) {
      return props.iconRight ? '4px 40px 4px 20px' : '4px 20px 4px 40px';
    });
  });
});
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2(_templateObject10(), function (props) {
  return props.theme.black;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject11(), function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.roboto;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.light && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject12(), function (props) {
    return props.theme.light;
  });
}, function (props) {
  return props.bold && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject13(), function (props) {
    return props.theme.bold;
  });
});
var Inline = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject14(), function (props) {
  return props.marginRight ? props.marginRight : 'initiale';
});
var RowInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject15(), function (props) {
  return props.dispatch && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject16());
}, function (props) {
  return props.result && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject17(), function (props) {
    return props.theme.blue;
  }, function (props) {
    return props.theme.black;
  });
});
var TitleForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject18(), function (props) {
  return props.theme.montserrat;
}, function (props) {
  return props.theme.bold;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.isFirst && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject19());
});
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4(_templateObject20(), function (props) {
  return props.theme.montserrat;
}, function (props) {
  return props.theme.bold;
});
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form(_templateObject21());
var SendButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject22(), function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.red;
});

/***/ }),

/***/ "./src/theme/layout/AppContainer.jsx":
/*!*******************************************!*\
  !*** ./src/theme/layout/AppContainer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_Switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Switcher */ "./src/theme/layout/Switcher.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_LogOutButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LogOutButton */ "./src/components/LogOutButton.jsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ "./src/components/Navigation.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./src/theme/layout/Modal.jsx");
/* harmony import */ var _views_AddPropriete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/AddPropriete */ "./src/views/AddPropriete.jsx");
/* harmony import */ var _views_AddClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/AddClient */ "./src/views/AddClient.jsx");
/* harmony import */ var _views_AddChasseur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/AddChasseur */ "./src/views/AddChasseur.jsx");
/* harmony import */ var _components_Uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Uploader */ "./src/components/Uploader.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            margin-left: 82px;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: 55px 45px 45px 45px;\n    margin-left: 300px;\n    transition: margin 0.4s;\n\n    ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 22px;\n    margin-left: 20px;\n    text-transform: uppercase;\n    font-weight: ", ";\n\n    span {\n        font-weight: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    padding: 10px;\n    margin-left: -10px;\n    width: 25px;\n    display: inline-block;\n    transition: transform 0.3s;\n\n    div {\n        display: block;\n        margin-bottom: 5px;\n        width: 100%;\n        height: 2px;\n        border-radius: 50px;\n        background-color: ", ";\n\n        &:last-child {\n            margin-bottom: 0px;\n        }\n    }\n\n    &:hover {\n        transform: scale(1.1);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    z-index: 2;\n    background: ", ";\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: calc(100vw - 90px);\n    height: 55px;\n    padding: 0 45px;\n    box-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = wp.element.Component;










var BarreTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
});
var ContainerTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var MenuBurger = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.theme.black;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject4(), function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.light;
});
var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject5(), function (props) {
  return !props.closeMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6());
});

var AppContainer = /*#__PURE__*/function (_Component) {
  _inherits(AppContainer, _Component);

  var _super = _createSuper(AppContainer);

  function AppContainer(props) {
    var _this;

    _classCallCheck(this, AppContainer);

    _this = _super.call(this, props);
    _this.state = {
      openMenu: true,
      view: 'Tableau de bord'
    };
    _this.handleChangeView = _this.handleChangeView.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AppContainer, [{
    key: "handleChangeView",
    value: function handleChangeView(newView) {
      this.setState({
        view: newView
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BarreTop, null, /*#__PURE__*/React.createElement(ContainerTitle, null, /*#__PURE__*/React.createElement(MenuBurger, {
        onClick: function onClick() {
          return _this2.setState({
            openMenu: !_this2.state.openMenu
          });
        }
      }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement(Title, null, "Projet", /*#__PURE__*/React.createElement("span", null, "locatif"))), /*#__PURE__*/React.createElement(_components_LogOutButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/React.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
        statMenu: this.state.openMenu,
        onChangeView: this.handleChangeView
      }), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "addPropriete",
        show: this.props.showModalAddPropriete,
        title: "Ajouter une Propri\xE9t\xE9"
      }, /*#__PURE__*/React.createElement(_views_AddPropriete__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "addChasseur",
        show: this.props.showModalAddChasseur
      }, /*#__PURE__*/React.createElement(_views_AddChasseur__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "addClient",
        show: this.props.showModalAddClient
      }, /*#__PURE__*/React.createElement(_views_AddClient__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "userModal",
        show: this.props.showModalUser
      }, /*#__PURE__*/React.createElement("p", null, "User")), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "dossierModal",
        show: this.props.showModalDossier
      }, /*#__PURE__*/React.createElement("p", null, "Dossier")), /*#__PURE__*/React.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "proprieteModal",
        show: this.props.showModalPropriete
      }, /*#__PURE__*/React.createElement("p", null, "propriete")), /*#__PURE__*/React.createElement(Main, {
        closeMenu: this.state.openMenu
      }, /*#__PURE__*/React.createElement(_layout_Switcher__WEBPACK_IMPORTED_MODULE_0__["default"], {
        view: this.state.view
      })), /*#__PURE__*/React.createElement(_components_Uploader__WEBPACK_IMPORTED_MODULE_9__["default"], null));
    }
  }]);

  return AppContainer;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    myUserData: state.general.myData.data,
    showModalAddPropriete: state.general.addProprieteModal,
    showModalAddChasseur: state.general.addChasseurModal,
    showModalAddClient: state.general.addClientModal,
    showModalPropriete: state.general.proprieteModal,
    showModalDossier: state.general.dossierModal,
    showModalUser: state.general.userModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(AppContainer));

/***/ }),

/***/ "./src/theme/layout/Modal.jsx":
/*!************************************!*\
  !*** ./src/theme/layout/Modal.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 20px;\n    left: 45px;\n    margin: 0;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 24px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 20px;\n    right: 20px;\n\tcursor: pointer;\n\tz-index: 2;\n\tmin-width: 24px;\n\twidth: 24px;\n\theight: 24px;\n\tmargin-left: 15px;\n\tborder-radius: 25px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n\tbackground: ", ";\n    box-shadow: ", ";\n    transform: rotate(45deg);\n\ttransition: transform 0.3s, opacity 0.8s;\n\n\t&:before,\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 14px;\n\t\theight: 2px;\n\t\tborder-radius: 30px;\n\t\tbackground: ", ";\n\t}\n\n\t&:after {\n\t\ttransform: rotate(90deg);\n\t}\n\n\t&:hover {\n        transform: scale(1.1) rotate(45deg);\n\t}\n\n\t&:active {\n        transform: scale(0.95) rotate(45deg);\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    overflow: scroll;\n    max-height: 80vh;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            padding-top: 65px;\n            \n            &:after {\n                content: '';\n                position: absolute;\n                width: calc(85% - 90px);\n                height: 2px;\n                top: 65px;\n                background-color: ", ";\n                opacity: 0.1;\n                border-radius: 5px;\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-width: 80vw;\n    max-height: 80vh;\n    width: 65%;\n    min-width: 200px;\n    min-height: 200px;\n    background: ", ";\n    box-shadow: ", ";\n    border-radius: 30px;\n    padding: 45px;\n    position: relative;\n\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            pointer-events: all;\n            opacity: 1;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    opacity: 0;\n    z-index: 10;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.8);\n    transition: opacity 0.4s;\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ContainerModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.open && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
});
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.haveTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), function (props) {
    return props.theme.black;
  });
});
var ContentModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.theme.white;
});
var TitleModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject7(), function (props) {
  return props.theme.montserrat;
}, function (props) {
  return props.theme.regular;
});

function Modal(props) {
  var closeButton = null;
  var titleModal = null;

  if (props.type == 'addPropriete') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleAddPropriete
    });
  } else if (props.type == 'addChasseur') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleAddChasseur
    });
  } else if (props.type == 'addClient') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleAddClient
    });
  } else if (props.type == 'userModal') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleUserModal
    });
  } else if (props.type == 'dossierModal') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleDossierModal
    });
  } else if (props.type == 'proprieteModal') {
    closeButton = /*#__PURE__*/React.createElement(CloseButton, {
      onClick: props.toogleProprieteModal
    });
  }

  if (props.title) {
    titleModal = /*#__PURE__*/React.createElement(TitleModal, null, props.title);
  }

  return /*#__PURE__*/React.createElement(ContainerModal, {
    open: props.show
  }, /*#__PURE__*/React.createElement(StyledModal, {
    haveTitle: titleModal != null ? true : false
  }, titleModal, closeButton, /*#__PURE__*/React.createElement(ContentModal, null, props.children)));
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toogleAddClient: function toogleAddClient() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddClient"])());
    },
    toogleAddChasseur: function toogleAddChasseur() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddChasseur"])());
    },
    toogleAddPropriete: function toogleAddPropriete() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleAddPropriete"])());
    },
    toogleUserModal: function toogleUserModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleUserModal"])());
    },
    toogleDossierModal: function toogleDossierModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleDossierModal"])());
    },
    toogleProprieteModal: function toogleProprieteModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleProprieteModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./src/theme/layout/Root.jsx":
/*!***********************************!*\
  !*** ./src/theme/layout/Root.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variable */ "./src/theme/variable.jsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body, html {\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap');\n\n    font-family: ", ";\n\tfont-weight: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.montserrat;
}, function (props) {
  return props.theme.regular;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/React.createElement(styled_components__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: _variable__WEBPACK_IMPORTED_MODULE_1__["themeVariable"]
  }, /*#__PURE__*/React.createElement(GlobalStyle, null), props.children);
});

/***/ }),

/***/ "./src/theme/layout/Switcher.jsx":
/*!***************************************!*\
  !*** ./src/theme/layout/Switcher.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switcher; });
/* harmony import */ var _views_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/Board */ "./src/views/Board.jsx");
/* harmony import */ var _views_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/Notification */ "./src/views/Notification.jsx");
/* harmony import */ var _views_Chasseur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/Chasseur */ "./src/views/Chasseur.jsx");
/* harmony import */ var _views_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/Client */ "./src/views/Client.jsx");
/* harmony import */ var _views_Dossier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/Dossier */ "./src/views/Dossier.jsx");
/* harmony import */ var _views_Propriete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/Propriete */ "./src/views/Propriete.jsx");






function Switcher(props) {
  var renderView = /*#__PURE__*/React.createElement(_views_Board__WEBPACK_IMPORTED_MODULE_0__["default"], null);

  switch (props.view) {
    case 'Tableau de bord':
      renderView = /*#__PURE__*/React.createElement(_views_Board__WEBPACK_IMPORTED_MODULE_0__["default"], null);
      break;

    case 'Propriétés':
      renderView = /*#__PURE__*/React.createElement(_views_Propriete__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      break;

    case 'Chasseurs':
      renderView = /*#__PURE__*/React.createElement(_views_Chasseur__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      break;

    case 'Mes clients':
      renderView = /*#__PURE__*/React.createElement(_views_Client__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;

    case 'Notifications':
      renderView = /*#__PURE__*/React.createElement(_views_Notification__WEBPACK_IMPORTED_MODULE_1__["default"], null);
      break;

    case 'Suivi dossiers':
      renderView = /*#__PURE__*/React.createElement(_views_Dossier__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      break;

    default:
      renderView = /*#__PURE__*/React.createElement(_views_Board__WEBPACK_IMPORTED_MODULE_0__["default"], null);
      break;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, renderView);
}

/***/ }),

/***/ "./src/theme/variable.jsx":
/*!********************************!*\
  !*** ./src/theme/variable.jsx ***!
  \********************************/
/*! exports provided: themeVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeVariable", function() { return themeVariable; });
var themeVariable = {
  green: '#0DAB76',
  black: '#0F0A0A',
  whiteGrey: '#FDFDFD',
  white: '#FFFFFF',
  red: '#ED1C24',
  blue: '#3533FF',
  orange: '#FB6107',
  shadows: '0px 3px 14px rgba(0, 0, 0, 0.15)',
  montserrat: "'Montserrat', sans-serif",
  roboto: "'Roboto', sans-serif",
  bold: 700,
  regular: 500,
  light: 300,
  orangeRadius: 'background: rgb(251,97,7);background: -moz-linear-gradient(120deg, rgba(251,97,7,1) 0%, rgba(237,28,36,1) 100%);background: -webkit-linear-gradient(120deg, rgba(251,97,7,1) 0%, rgba(237,28,36,1) 100%);background: linear-gradient(120deg, rgba(251,97,7,1) 0%, rgba(237,28,36,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fb6107",endColorstr="#ed1c24",GradientType=1);',
  blueRadius: 'background: rgb(53,51,255);background: -moz-linear-gradient(120deg, rgba(53,51,255,1) 0%, rgba(32,31,170,1) 100%);background: -webkit-linear-gradient(120deg, rgba(53,51,255,1) 0%, rgba(32,31,170,1) 100%);background: linear-gradient(120deg, rgba(53,51,255,1) 0%, rgba(32,31,170,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3533ff",endColorstr="#201faa",GradientType=1);',
  greenRadius: 'background: rgb(13,171,118);background: -moz-linear-gradient(120deg, rgba(13,171,118,1) 0%, rgba(37,141,105,1) 100%);background: -webkit-linear-gradient(120deg, rgba(13,171,118,1) 0%, rgba(37,141,105,1) 100%);background: linear-gradient(120deg, rgba(13,171,118,1) 0%, rgba(37,141,105,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0dab76",endColorstr="#258d69",GradientType=1);'
};

/***/ }),

/***/ "./src/views/AddChasseur.jsx":
/*!***********************************!*\
  !*** ./src/views/AddChasseur.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.jsx");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;







var AddChasseur = /*#__PURE__*/function (_Component) {
  _inherits(AddChasseur, _Component);

  var _super = _createSuper(AddChasseur);

  function AddChasseur(props) {
    var _this;

    _classCallCheck(this, AddChasseur);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddChasseur, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var fakeID = '_' + Math.random().toString(36).substr(2, 9);
      this.props.toogleAddChasseur();
      this.props.handleChangeModal('resetTheForm', true);
      event.preventDefault();
      var data = new FormData();
      data.append('action', 'form_add_user');

      for (var key in this.props.modalData) {
        if (key != 'filesPhotosChasseur' && this.props.modalData[key] != null) {
          data.append(key, this.props.modalData[key]);
        } else {
          if (this.props.modalData[key] != null) {
            var _iterator = _createForOfIteratorHelper(this.props.modalData[key]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                data.append('files[]', item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function onUploadProgress(progress) {
          var loaded = progress.loaded,
              total = progress.total;
          var percentageProgress = Math.floor(loaded / total * 90);

          _this2.props.registerDataProgress(fakeID, percentageProgress);
        }
      }).then(function (response) {
        var result = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["formatToJson"])(response.data);

        if (result.id == null) {
          console.log('error');
        }
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        _this2.props.registerDataProgress(fakeID, 100);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], {
        isFirst: true
      }, "D\xE9tails"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.filesPhotosChasseur,
        onChange: this.props.handleChangeModal,
        type: "file",
        id: "filesPhotosChasseur",
        multiple: "false",
        accept: ".png, .jpg, .jpeg",
        label: "Ajouter une photo de profil"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.pseudo,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "pseudo",
        label: "Pseudo"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.first_name,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "first_name",
        label: "Pr\xE9nom"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.last_name,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "last_name",
        label: "Nom"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.telephone,
        onChange: this.props.handleChangeModal,
        required: true,
        tel: true,
        type: "number",
        id: "telephone",
        label: "T\xE9l\xE9phone"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.mail,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "email",
        id: "mail",
        label: "e-Mail"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["SendButton"], {
        noMarginLeft: true,
        type: "submit"
      }, "Enregistrer"));
    }
  }]);

  return AddChasseur;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChangeModal: function handleChangeModal(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["handleChangeAddChasseurModal"])(key, data));
    },
    registerDataProgress: function registerDataProgress(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["registerDataProgress"])(key, data));
    },
    toogleAddChasseur: function toogleAddChasseur() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["toogleAddChasseur"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modalData: state.addModal.addChasseurModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddChasseur));

/***/ }),

/***/ "./src/views/AddClient.jsx":
/*!*********************************!*\
  !*** ./src/views/AddClient.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.jsx");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;






var listPays = ['Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 'Arabie saoudite', 'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 'Bahreïn', 'Bangladesh', 'Barbade', 'Belgique', 'Belize', 'Bénin', 'Bhoutan', 'Biélorussie', 'Birmanie', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cambodge', 'Cameroun', 'Canada', 'Cap-Vert', 'République centrafricaine', 'Chili', 'Chine', 'Chypre', 'Colombie', 'Comores', 'République du Congo', 'République démocratique du Congo', 'Îles Cook', 'Corée du Nord', 'Corée du Sud', 'Costa Rica', 'Côte d’Ivoire', 'Croatie', 'Cuba', 'Danemark', 'Djibouti', 'République dominicaine', 'Dominique', 'Égypte', 'Émirats arabes unis', 'Équateur', 'Érythrée', 'Espagne', 'Estonie', 'États-Unis', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'La Réunion', 'Gabon', 'Gambie', 'Géorgie', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Inde', 'Indonésie', 'Irak', 'Iran', 'Irlande', 'Islande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 'Jordanie', 'Kazakhstan', 'Kenya', 'Kirghizistan', 'Kiribati', 'Koweït', 'Laos', 'Lesotho', 'Lettonie', 'Liban', 'Liberia', 'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Macédoine du Nord', 'Madagascar', 'Malaisie', 'Malawi', 'Maldives', 'Mali', 'Malte', 'Maroc', 'Îles Marshall', 'Maurice', 'Mauritanie', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 'Monténégro', 'Mozambique', 'Namibie', 'Nauru', 'Népal', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norvège', 'Nouvelle-Zélande', 'Oman', 'Ouganda', 'Ouzbékistan', 'Pakistan', 'Palaos', 'Palestine', 'Panamá', 'Papouasie-Nouvelle-Guinée', 'Paraguay', 'Pays-Bas', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 'Royaume-Uni', 'Russie', 'Rwanda', 'Saint-Christophe-et-Niévès', 'Saint-Marin', 'Saint-Vincent-et-les Grenadines', 'Sainte-Lucie', 'Îles Salomon', 'Salvador', 'Samoa', 'São Tomé-et-Principe', 'Sénégal', 'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 'Somalie', 'Soudan', 'Soudan du Sud', 'Sri Lanka', 'Suède', 'Suisse', 'Suriname', 'Eswatini', 'Syrie', 'Tadjikistan', 'Tanzanie', 'Tchad', 'République tchèque', 'Thaïlande', 'Timor oriental', 'Togo', 'Tonga', 'Trinité-et-Tobago', 'Tunisie', 'Turkménistan', 'Turquie', 'Tuvalu', 'Ukraine', 'Uruguay', 'Vanuatu', 'Vatican', 'Venezuela', 'Viêt Nam', 'Yémen', 'Zambie', 'Zimbabwe', 'Abkhazie', 'Chypre du Nord', 'Kosovo', 'Ossétie du Sud', 'Sahara occidental', 'Taïwan'];

var AddClient = /*#__PURE__*/function (_Component) {
  _inherits(AddClient, _Component);

  var _super = _createSuper(AddClient);

  function AddClient(props) {
    var _this;

    _classCallCheck(this, AddClient);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddClient, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var fakeID = '_' + Math.random().toString(36).substr(2, 9);
      this.props.toogleAddClient();
      this.props.handleChangeModal('resetTheForm', true);
      event.preventDefault();
      var data = new FormData();
      data.append('action', 'form_add_user');

      for (var key in this.props.modalData) {
        if (key != 'filesPhotosClient' && this.props.modalData[key] != null) {
          data.append(key, this.props.modalData[key]);
        } else {
          if (this.props.modalData[key] != null) {
            var _iterator = _createForOfIteratorHelper(this.props.modalData[key]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                data.append('files[]', item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function onUploadProgress(progress) {
          var loaded = progress.loaded,
              total = progress.total;
          var percentageProgress = Math.floor(loaded / total * 90);

          _this2.props.registerDataProgress(fakeID, percentageProgress);
        }
      }).then(function (response) {
        var result = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["formatToJson"])(response.data);

        if (result.id == null) {
          console.log('error');
        }
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        _this2.props.registerDataProgress(fakeID, 100);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], {
        isFirst: true
      }, "D\xE9tails"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.filesPhotosClient,
        onChange: this.props.handleChangeModal,
        type: "file",
        id: "filesPhotosClient",
        multiple: "false",
        accept: ".png, .jpg, .jpeg",
        label: "Ajouter une photo de profil"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.pseudo,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "pseudo",
        label: "Pseudo"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.first_name,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "first_name",
        label: "Pr\xE9nom"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.last_name,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "last_name",
        label: "Nom"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.telephone,
        onChange: this.props.handleChangeModal,
        required: true,
        tel: true,
        type: "number",
        id: "telephone",
        label: "T\xE9l\xE9phone"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.mail,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "email",
        id: "mail",
        label: "e-Mail"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.adresse_postale_1,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "adresse_postale_1",
        label: "Adresse postale"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.adresse_postale_2,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "adresse_postale_2",
        label: "Adresse postale 2"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.ville,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "ville",
        label: "Ville"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.etat_province_region,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "etat_province_region",
        label: "\xC9tat / Province / R\xE9gion"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.zip_code_postal,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "zip_code_postal",
        label: "ZIP / Code postal"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.pays,
        onChange: this.props.handleChangeModal,
        type: "select",
        id: "pays",
        label: "Pays",
        list: listPays,
        required: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["SendButton"], {
        noMarginLeft: true,
        type: "submit"
      }, "Enregistrer"));
    }
  }]);

  return AddClient;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChangeModal: function handleChangeModal(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["handleChangeAddClientModal"])(key, data));
    },
    registerDataProgress: function registerDataProgress(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["registerDataProgress"])(key, data));
    },
    toogleAddClient: function toogleAddClient() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["toogleAddClient"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modalData: state.addModal.addClientModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddClient));

/***/ }),

/***/ "./src/views/AddPropriete.jsx":
/*!************************************!*\
  !*** ./src/views/AddPropriete.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.jsx");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;







var AddPropriete = /*#__PURE__*/function (_Component) {
  _inherits(AddPropriete, _Component);

  var _super = _createSuper(AddPropriete);

  function AddPropriete(props) {
    var _this;

    _classCallCheck(this, AddPropriete);

    _this = _super.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddPropriete, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var fakeID = '_' + Math.random().toString(36).substr(2, 9);
      this.props.toogleAddPropriete();
      this.props.handleChangeModal('resetTheForm', true);
      event.preventDefault();
      this.props.handleChangeModal('chasseur', Number(this.props.chasseurID));
      var data = new FormData();
      data.append('action', 'form_add_propriete');

      for (var key in this.props.modalData) {
        if (key != 'filesPhotos' && this.props.modalData[key] != null) {
          data.append(key, this.props.modalData[key]);
        } else {
          if (this.props.modalData[key] != null) {
            var _iterator = _createForOfIteratorHelper(this.props.modalData[key]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                data.append('files[]', item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function onUploadProgress(progress) {
          var loaded = progress.loaded,
              total = progress.total;
          var percentageProgress = Math.floor(loaded / total * 90);

          _this2.props.registerDataProgress(fakeID, percentageProgress);
        }
      }).then(function (response) {
        var result = Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["formatToJson"])(response.data);

        if (result.id == null) {
          console.log('error');
        }
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        _this2.props.registerDataProgress(fakeID, 100);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.chasseur,
        onChange: this.props.handleChangeModal,
        type: "hidden",
        id: "chasseur"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], {
        isFirst: true
      }, "D\xE9tails"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.filesPhotos,
        onChange: this.props.handleChangeModal,
        type: "file",
        id: "filesPhotos",
        multiple: "true",
        accept: ".png, .jpg, .jpeg",
        label: "Ajouter des photos"
      })), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.titre,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "text",
        id: "title",
        label: "Titre"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.description,
        onChange: this.props.handleChangeModal,
        type: "textarea",
        id: "description",
        label: "Courte description"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.adresse_postale,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "adresse_postale",
        label: "Adresse postale"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.artisan,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "artisan",
        label: "Artisan"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.interlocuteur,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "interlocuteur",
        label: "Interlocuteur"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.ville,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "ville",
        label: "Ville"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.zip_code_postal,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "zip_code_postal",
        label: "ZIP / Code postal"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.type_bien,
        onChange: this.props.handleChangeModal,
        type: "select",
        id: "type_bien",
        label: "Type de bien",
        list: ['Appartement', 'Maison', 'Autre'],
        required: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.annee,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "annee",
        thousandSeparator: "false",
        label: "Ann\xE9e"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.superficie,
        onChange: this.props.handleChangeModal,
        type: "number",
        min: "1",
        label: "Superficie",
        id: "superficie",
        suffix: "m\xB2",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.superficie_habitable,
        onChange: this.props.handleChangeModal,
        type: "number",
        min: "1",
        id: "superficie_habitable",
        label: "Superficie Habitable",
        suffix: "m\xB2"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Agencement int\xE9rieur"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_pieces,
        onChange: this.props.handleChangeModal,
        type: "number",
        min: "1",
        id: "nombre_de_pieces",
        label: "Nombre de Pi\xE8ce",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_chambre,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "nombre_de_chambre",
        label: "Nombre de chambre",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_salles_de_bains,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "nombre_de_salles_de_bains",
        label: "Nombre de salle de Bain",
        required: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_wc,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "nombre_de_wc",
        label: "Nombre de WC",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_celliers,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "nombre_de_celliers",
        label: "Nombre de Cellier",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_buanderies,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "nombre_de_buanderies",
        label: "Nombre de Buanderie",
        required: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.niveaux,
        onChange: this.props.handleChangeModal,
        type: "number",
        id: "niveaux",
        label: "Nombre de Niveaux",
        required: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.cuisine,
        onChange: this.props.handleChangeModal,
        type: "checkbox",
        id: "cuisine",
        label: "Cuisine"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.isolation,
        onChange: this.props.handleChangeModal,
        type: "checkbox",
        id: "isolation",
        label: "Isolation"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Agencement ext\xE9rieur"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.caves,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "caves",
        label: "Nombre de cave"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.terrases,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "terrases",
        label: "Nombre de terrase"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.balcons,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "balcons",
        label: "Nombre de balcon"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.varangues,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "varangues",
        label: "Nombre de varangue"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.piscines,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "piscines",
        label: "Nombre de piscine"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.jacuzzis,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "jacuzzis",
        label: "Nombre de jacuzzi"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Copropri\xE9t\xE9"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.nombre_de_lots,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        id: "nombre_de_lots",
        label: "Nombre de lots"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.derniere_assemble,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        id: "derniere_assemble",
        thousandSeparator: "false",
        label: "Derni\xE8re assembl\xE9e"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.syndic,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "syndic",
        label: "Syndic"
      })), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.details_charges_copropriete,
        onChange: this.props.handleChangeModal,
        type: "textarea",
        id: "details_charges_copropriete",
        label: "D\xE9tails charges",
        placeholder: "Exemple: Eau, EDF communs, Gardien, Chauffage, Nettoyage, Syndic"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Chauffage"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.type_de_chauffage,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "type_de_chauffage",
        label: "Type"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.mode_de_chauffage,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "mode_de_chauffage",
        label: "Mode"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.energie_du_chauffage,
        onChange: this.props.handleChangeModal,
        type: "text",
        id: "energie_du_chauffage",
        label: "\xC9nergie"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "\xC9quipements"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.equipements,
        onChange: this.props.handleChangeModal,
        type: "textarea",
        id: "equipements",
        placeholder: "Exemple: Interphone, C\xE2ble, Double vitrage"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Diagnostics"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.diagnostics,
        onChange: this.props.handleChangeModal,
        type: "textarea",
        id: "diagnostics"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Points positifs et n\xE9gatifs"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.points_positif_et_negatifs,
        onChange: this.props.handleChangeModal,
        type: "textarea",
        id: "points_positif_et_negatifs"
      }), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Frais d'acquisition"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.prix_du_bien,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "prix_du_bien",
        euro: true,
        label: "Prix du bien"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_dagence,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "frais_dagence",
        euro: true,
        label: "Frais d'agence"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_de_notaire,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "frais_de_notaire",
        euro: true,
        label: "Frais de notaire"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_de_travaux,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "frais_de_travaux",
        euro: true,
        label: "Estimation Travaux"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.mobilier_equipement,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "mobilier_equipement",
        euro: true,
        label: "Mobilier / Equipement"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.honoraires_immomalin,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "honoraires_immomalin",
        euro: true,
        label: "Commission chasseur"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        result: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.projet_global,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "projet_global",
        euro: true,
        label: "Projet Global (Hors frais de notaire)",
        readonly: true,
        disabled: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.budget,
        onChange: this.props.handleChangeModal,
        required: true,
        type: "number",
        step: ".01",
        id: "budget",
        euro: true,
        label: "BUDGET",
        readonly: true,
        disabled: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Charges locatif"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Charges copropri\xE9t\xE9"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.charges_copropriete_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "charges_copropriete_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.charges_copropriete_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "charges_copropriete_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Taxe fonci\xE8re"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.taxe_fonciere_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "taxe_fonciere_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.taxe_fonciere_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "taxe_fonciere_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Assurance PNO"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.assurance_pno_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "assurance_pno_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.assurance_pno_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "assurance_pno_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Assurances locatives"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.assurances_locatives_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "assurances_locatives_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.assurances_locatives_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "assurances_locatives_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Gestion locative"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.gestion_locative_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "gestion_locative_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.gestion_locative_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "gestion_locative_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Frais divers"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_divers_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_divers_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_divers_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_divers_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Eau"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_electricite_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_electricite_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_electricite_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_electricite_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "\xC9lectricit\xE9"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_eau_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_eau_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.frais_eau_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "frais_eau_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Forfait internet"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.forfait_internet_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "forfait_internet_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.forfait_internet_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "forfait_internet_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        result: true
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "TOTAL"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.total_charges_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "total_charges_mensuelles",
        readonly: true,
        disabled: true,
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.total_charges_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "total_charges_annuelles",
        readonly: true,
        disabled: true,
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Revenus locatif"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Loyer pr\xE9visionnel"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.loyer_previsionnel_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "loyer_previsionnel_mensuelles",
        label: "Mensuelles"
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.loyer_previsionnel_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "loyer_previsionnel_annuelles",
        label: "Annuelles"
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Vacance locative"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.vacance_locative,
        onChange: this.props.handleChangeModal,
        required: true,
        pourcent: true,
        type: "number",
        step: ".01",
        id: "vacance_locative"
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        result: true
      }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "TOTAL"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.total_revenus_mensuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "total_revenus_mensuelles",
        label: "Mensuelles",
        readonly: true,
        disabled: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.total_revenus_annuelles,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "total_revenus_annuelles",
        label: "Annuelles",
        readonly: true,
        disabled: true
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Solde"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.solde,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "solde",
        readonly: true,
        disabled: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["TitleForm"], null, "Vue synth\xE9tique"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Rentabilit\xE9"), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], {
        dispatch: true
      }, /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.rentabilite_net,
        onChange: this.props.handleChangeModal,
        required: true,
        pourcent: true,
        type: "number",
        step: ".01",
        id: "rentabilite_net",
        label: "Brut",
        readonly: true,
        disabled: true
      }), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.rentabilite_brut,
        onChange: this.props.handleChangeModal,
        required: true,
        pourcent: true,
        type: "number",
        step: ".01",
        id: "rentabilite_brut",
        label: "Net",
        readonly: true,
        disabled: true
      }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Cashflow Brut"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.cashflow_mensuel_brut,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "cashflow_mensuel_brut",
        label: "mensuelle",
        readonly: true,
        disabled: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["RowInput"], null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Prix au m\xB2"), /*#__PURE__*/React.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: this.props.modalData.prix_au_m,
        onChange: this.props.handleChangeModal,
        required: true,
        euro: true,
        type: "number",
        step: ".01",
        id: "prix_au_m",
        readonly: true,
        disabled: true
      })), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_5__["SendButton"], {
        noMarginLeft: true,
        type: "submit"
      }, "Enregistrer"));
    }
  }]);

  return AddPropriete;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChangeModal: function handleChangeModal(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["handleChangeAddProprieteModal"])(key, data));
    },
    registerDataProgress: function registerDataProgress(key, data) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["registerDataProgress"])(key, data));
    },
    toogleAddPropriete: function toogleAddPropriete() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["toogleAddPropriete"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    chasseurID: state.general.myData.data.id,
    modalData: state.addModal.addProprieteModal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddPropriete));

/***/ }),

/***/ "./src/views/Board.jsx":
/*!*****************************!*\
  !*** ./src/views/Board.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_CardStat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardStat */ "./src/components/CardStat.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.jsx");
/* harmony import */ var _resources_pencil_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/pencil.svg */ "./src/resources/pencil.svg");
/* harmony import */ var _resources_pencil_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_pencil_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_layout_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/layout/Modal */ "./src/theme/layout/Modal.jsx");
function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    min-width: 160px;\n    margin: 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 14px;\n    margin-right: 20px;\n    border-radius: 20px;\n    background: #A5A5A5;\n    box-shadow: ", ";\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        width: ", "%;\n        height: 14px;\n        border-radius: 20px;\n        ", ";\n        transition: width 0.5s;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 40px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 40px;\n    margin-bottom: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-left: -20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    min-width: 375px;\n    margin-right: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            width: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            flex-grow: ", ";\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.grow && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), function (props) {
    return props.grow != true ? props.grow : 1;
  });
}, function (props) {
  return props.width && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), function (props) {
    return props.width;
  });
});
var HeadDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject7());
var BarreContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(FlexRow)(_templateObject8());
var Barre = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9(), function (props) {
  return props.theme.shadows;
}, function (props) {
  return props.pourcentage * 100 / props.max;
}, function (props) {
  return props.theme.orangeRadius;
});
var TextBarre = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__["Text"])(_templateObject10());

function BarreBonus(props) {
  return /*#__PURE__*/React.createElement(BarreContainer, null, /*#__PURE__*/React.createElement(Barre, {
    pourcentage: props.pourcentage,
    max: props.max
  }), /*#__PURE__*/React.createElement(TextBarre, null, Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["formatPrix"])(props.pourcentage), " \u20AC / ", Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["formatPrix"])(props.max), " \u20AC ", /*#__PURE__*/React.createElement("br", null), props.title));
}

function Board(props) {
  Object(_lib_functions__WEBPACK_IMPORTED_MODULE_3__["setDocumentTitle"])('Tableau de bord');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlexDiv, null, /*#__PURE__*/React.createElement(HeadDiv, null, /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__["Inline"], {
    marginRight: "20px"
  }, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__["TitleSection"], null, "Bonjour, ", props.myUserData.first_name ? props.myUserData.first_name : 'Utilisateur')), /*#__PURE__*/React.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    small: true,
    light: true,
    src: _resources_pencil_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    iconRight: true,
    onClick: props.toogleUserModal
  }, "Mon compte")), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    light: true
  }, "Vous avez 3 notifications"), /*#__PURE__*/React.createElement(H2, null, "Prochain Bonus"), /*#__PURE__*/React.createElement(BarreBonus, {
    title: "De chiffre d\u2019affaire",
    pourcentage: 70000,
    max: 120000
  })), /*#__PURE__*/React.createElement(CardsContainer, null, /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blue: true,
    title: "Nombre de projet en cours",
    value: 12
  }), /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    green: true,
    title: "Nombre de projet factur\xE9",
    value: 7
  }))), /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_4__["TitleSection"], null, "Vos chiffres"), /*#__PURE__*/React.createElement(CardsContainer, null, /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orange: true,
    title: "Total Commission pr\xE9visionnel",
    value: 4000,
    euros: true
  }), /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orange: true,
    title: "Total Chiffre d\u2019affaire ImmoMalin factur\xE9",
    value: 2000,
    euros: true
  })), /*#__PURE__*/React.createElement(CardsContainer, null, /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orange: true,
    title: "Total Commission encaiss\xE9",
    value: 4000,
    euros: true
  }), /*#__PURE__*/React.createElement(_components_CardStat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orange: true,
    title: "Total Chiffre d\u2019affaire ImmoMalin pr\xE9visionnel",
    value: 2000,
    euros: true
  })));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    myUserData: state.general.myData.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toogleUserModal: function toogleUserModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toogleUserModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Board));

/***/ }),

/***/ "./src/views/Chasseur.jsx":
/*!********************************!*\
  !*** ./src/views/Chasseur.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./src/components/Table.jsx");
var _entete;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = wp.element.Component;





var title = 'Liste des chasseurs';
var entete = (_entete = {
  'first_name': 'Prénom Chasseur',
  'telephone': 'Téléphone',
  'user_email': 'Mail',
  '': 'Secteur'
}, _defineProperty(_entete, "", 'Total CA réalisé'), _defineProperty(_entete, "", 'Total CA prévisionnel'), _defineProperty(_entete, "", 'Barre de progession vers son prochain BONUS'), _entete);

var Chasseur = /*#__PURE__*/function (_Component) {
  _inherits(Chasseur, _Component);

  var _super = _createSuper(Chasseur);

  function Chasseur(props) {
    _classCallCheck(this, Chasseur);

    return _super.call(this, props);
  }

  _createClass(Chasseur, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_lib_functions__WEBPACK_IMPORTED_MODULE_2__["setDocumentTitle"])(title);
      this.props.getAllUsers();
    }
  }, {
    key: "render",
    value: function render() {
      var data = null;

      if (this.props.list.data != null) {
        data = this.props.list.data.filter(function (user) {
          return user.role == 'chasseur';
        });
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], null, title), /*#__PURE__*/React.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listeProps: entete,
        data: data,
        deleteType: "user",
        empty: "Aucun chasseur enregistr\xE9 pour le moment",
        statut: this.props.list.statut ? this.props.list.statut : null
      }));
    }
  }]);

  return Chasseur;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: function getAllUsers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllUsers"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.manageUser.listUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Chasseur));

/***/ }),

/***/ "./src/views/Client.jsx":
/*!******************************!*\
  !*** ./src/views/Client.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./src/components/Table.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;





var title = 'Liste des clients';
var entete = {
  'display_name': 'Nom',
  'telephone': 'Téléphone',
  'user_email': 'Mail',
  'ville': 'Ville'
};

var Client = /*#__PURE__*/function (_Component) {
  _inherits(Client, _Component);

  var _super = _createSuper(Client);

  function Client(props) {
    _classCallCheck(this, Client);

    return _super.call(this, props);
  }

  _createClass(Client, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_lib_functions__WEBPACK_IMPORTED_MODULE_2__["setDocumentTitle"])(title);
      this.props.getAllUsers();
    }
  }, {
    key: "render",
    value: function render() {
      var data = null;

      if (this.props.list.data != null) {
        data = this.props.list.data.filter(function (user) {
          return user.role == 'client__investisseur';
        });
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], null, title), /*#__PURE__*/React.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listeProps: entete,
        data: data,
        deleteType: "user",
        empty: "Aucun client enregistr\xE9 pour le moment",
        statut: this.props.list.statut ? this.props.list.statut : null
      }));
    }
  }]);

  return Client;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: function getAllUsers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllUsers"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.manageUser.listUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Client));

/***/ }),

/***/ "./src/views/Dossier.jsx":
/*!*******************************!*\
  !*** ./src/views/Dossier.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./src/components/Table.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;





var title = 'Liste des dossiers';
var entete = {
  'id_fiche_produit.chasseur.first_name': 'Prénom du chasseur',
  'id_client.display_name': 'Nom du client',
  'id_fiche_produit.id': 'ID du bien',
  'id_fiche_produit.budget': 'Montant total du projet',
  'id_fiche_produit.ville': 'Ville',
  'id_fiche_produit.interlocuteur': 'Nom de l\'interlocuteur',
  'id_fiche_produit.artisan': 'Artisan',
  'id_fiche_produit.honoraires_immomalin': 'CA ImmoMalin'
};

var Dossier = /*#__PURE__*/function (_Component) {
  _inherits(Dossier, _Component);

  var _super = _createSuper(Dossier);

  function Dossier(props) {
    _classCallCheck(this, Dossier);

    return _super.call(this, props);
  }

  _createClass(Dossier, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_lib_functions__WEBPACK_IMPORTED_MODULE_2__["setDocumentTitle"])(title);
      this.props.getAllDossiers();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], null, title), /*#__PURE__*/React.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listeProps: entete,
        deleteType: "dossier",
        empty: "Aucun dossier enregistr\xE9 pour le moment",
        data: this.props.list.data ? this.props.list.data : null,
        statut: this.props.list.statut ? this.props.list.statut : null
      }));
    }
  }]);

  return Dossier;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllDossiers: function getAllDossiers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllDossiers"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.manageDossier.listDossier
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Dossier));

/***/ }),

/***/ "./src/views/Notification.jsx":
/*!************************************!*\
  !*** ./src/views/Notification.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./src/components/Table.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = wp.element.Component;





var title = 'Liste des propriétés';
var entete = {
  'chasseur.first_name': 'Prénom du chasseur',
  'thumbnail': 'Photo',
  'type_bien': 'Type de bien',
  'ville': 'Ville',
  'interlocuteur': 'Nom de l\'interlocuteur',
  'CA': 'CA ImmoMalin',
  'honoraires_immomalin': 'Commission Chasseur'
};

var Notification = /*#__PURE__*/function (_Component) {
  _inherits(Notification, _Component);

  var _super = _createSuper(Notification);

  function Notification(props) {
    _classCallCheck(this, Notification);

    return _super.call(this, props);
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_lib_functions__WEBPACK_IMPORTED_MODULE_2__["setDocumentTitle"])(title);
      this.props.getAllProprietes();
      this.props.getAllDossiers();
      this.props.getAllUsers();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], null, title), /*#__PURE__*/React.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listeProps: entete,
        empty: "Aucune notification pour le moment",
        data: this.props.list.data ? this.props.list.data : null,
        statut: this.props.list.statut ? this.props.list.statut : null
      }));
    }
  }]);

  return Notification;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllProprietes: function getAllProprietes() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllProprietes"])());
    },
    getAllDossiers: function getAllDossiers() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllDossiers"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.managePropriete.listPropriete
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Notification));

/***/ }),

/***/ "./src/views/Propriete.jsx":
/*!*********************************!*\
  !*** ./src/views/Propriete.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/functions */ "./src/lib/functions.js");
/* harmony import */ var _theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/design/componentsDesign */ "./src/theme/design/componentsDesign.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./src/components/Table.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = wp.element.Component;





var title = 'Liste des propriétés';

var entete = _defineProperty({
  'chasseur.first_name': 'Prénom du chasseur',
  'thumbnail': 'Photo',
  'type_bien': 'Type de bien',
  'ville': 'Ville',
  'interlocuteur': 'Nom de l\'interlocuteur',
  'honoraires_immomalin': 'CA ImmoMalin'
}, "honoraires_immomalin", 'Commission Chasseur');

var Propriete = /*#__PURE__*/function (_Component) {
  _inherits(Propriete, _Component);

  var _super = _createSuper(Propriete);

  function Propriete(props) {
    _classCallCheck(this, Propriete);

    return _super.call(this, props);
  }

  _createClass(Propriete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_lib_functions__WEBPACK_IMPORTED_MODULE_2__["setDocumentTitle"])(title);
      this.props.getAllProprietes();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_theme_design_componentsDesign__WEBPACK_IMPORTED_MODULE_3__["TitleSection"], null, title), /*#__PURE__*/React.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listeProps: entete,
        empty: "Aucune propri\xE9t\xE9e enregistr\xE9 pour le moment",
        deleteType: "propriete",
        data: this.props.list.data ? this.props.list.data : null,
        statut: this.props.list.statut ? this.props.list.statut : null
      }));
    }
  }]);

  return Propriete;
}(Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllProprietes: function getAllProprietes() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllProprietes"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.managePropriete.listPropriete
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(Propriete));

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map