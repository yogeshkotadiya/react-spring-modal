function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react-dom"),n=e(require("react-use/lib/useLockBodyScroll"));require("wicg-inert");var r=require("react"),o=(e(r),require("react-spring")),a=e(require("@chbphone55/classnames")),l=globalThis.document?document.querySelector("#modal-root"):null;function i(e){var n=e.children,o=r.useMemo(function(){return globalThis.document?document.createElement("div"):null},[]);return r.useEffect(function(){return l&&o&&l.appendChild(o),function(){l&&o&&l.removeChild(o)}},[o]),o?t.createPortal(n,o):null}var s=r.forwardRef(function(e,t){var n=e.className,l=e.onClick,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["className","onClick"]),s=r.useCallback(function(e){t.current===e.target&&l(e)},[l,t]);return react(o.animated.div,Object.assign({},{ref:t,onClick:s,className:a("ModalBackdrop",n)},i))}),c=globalThis.document?document.getElementById("root"):null;function u(e){var t=e.isOpen,a=e.onRequestClose,l=e.children;n(t);var u=r.useRef(null),d=r.useRef(null),f=o.useTransition(t,null,{"--opacity":0,from:{"--opacity":0},enter:{"--opacity":.5},leave:{"--opacity":0},onRest:function(){if(d.current&&t){var e=d.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e.length&&e[0].focus()}}});return r.useEffect(function(){function e(e){"Escape"===e.key&&a()}return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}},[a]),r.useEffect(function(){t?(globalThis.document&&(u.current=document.activeElement),c&&c.setAttribute("inert","")):(c&&c.removeAttribute("inert"),setTimeout(function(){u.current&&u.current.focus()},0))},[t]),react(i,null,f.map(function(e){return e.item?react(s,{key:e.key,className:"BottomModal__backdrop",style:e.props,onClick:a,"aria-modal":"true",role:"dialog",ref:d},l):null}))}exports.ModalPortal=i,exports.ModalBackdrop=s,exports.BaseModal=u,exports.CenterModal=function(e){var t=e.isOpen,n=e.onRequestClose,r=e.className,l=e.modalTransition;void 0===l&&(l=function(e,t){return void 0===t&&(t={}),o.useTransition(e,null,Object.assign({},{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},t))}(t));var i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["isOpen","onRequestClose","className","modalTransition"]);return react(u,{isOpen:t,onRequestClose:n},l.map(function(e){return e.item?react(o.animated.div,Object.assign({},{key:e.key,style:e.props,className:a("CenterModal shadow-lg",r)},i)):null}))},exports.BottomModal=function(e){var t=e.children,n=e.isOpen,r=e.onRequestClose,l=e.className,i=e.modalTransition;void 0===i&&(i=o.useTransition(n,null,{from:{transform:"translateY(100%) translateX(-50%)"},enter:{transform:"translateY(0%) translateX(-50%)"},leave:{transform:"translateY(100%) translateX(-50%)"}}));var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["children","isOpen","onRequestClose","className","modalTransition"]);return react(u,{isOpen:n,onRequestClose:r},i.map(function(e){return e.item?react(o.animated.div,Object.assign({},{className:a("BottomModal shadow-lg",l),key:e.key,style:e.props},s),t):null}))};
//# sourceMappingURL=index.js.map
