(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/full--on-light.3db7afff.svg","height":360,"width":360,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1100:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/stack--on-light.dc0f1a4b.svg","height":360,"width":864,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/assets/images/svg/full--on-light.svg
var full_on_light = __webpack_require__(3081);
;// CONCATENATED MODULE: ./public/assets/images/svg/wordmark--on-dark.svg
/* harmony default export */ const wordmark_on_dark = ({"src":"/_next/static/media/wordmark--on-dark.9880f921.svg","height":83,"width":200,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/nav/Footer.js





function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "d-flex justify-content-center u-vr__py--1",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: full_on_light/* default */.Z,
                    unoptimized: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer d-flex flex-column t-background--jet justify-content-center align-items-center u-vr__px--2 u-vr__py--1",
                style: {
                    minHeight: "300px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "u-vr__py--1",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: wordmark_on_dark,
                                alt: "Aberration Co.",
                                unoptimized: true
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            "Nashville, TN |",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "mailto:mike@aberration.com",
                                children: "mike@aberration.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            "\xa9",
                            "  ",
                            new Date().getFullYear(),
                            " Aberration Co. All rights reserved."
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const nav_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./public/assets/images/svg/full--on-dark.svg
/* harmony default export */ const full_on_dark = ({"src":"/_next/static/media/full--on-dark.a3448c99.svg","height":360,"width":360,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./public/assets/images/svg/stack--on-light.svg
var stack_on_light = __webpack_require__(1100);
;// CONCATENATED MODULE: ./components/nav/Navbar.js









const CustomNav = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [targetHover, setTargetHover] = (0,external_react_.useState)("0");
    const [showcaseHeight, setShowcaseHeight] = (0,external_react_.useState)(0);
    let showcaseRef = (0,external_react_.useRef)(null);
    const router = (0,router_namespaceObject.useRouter)();
    const [menuItems] = (0,external_react_.useState)([
        {
            label: "Home",
            dest: "/"
        },
        {
            label: "Stay With Us!",
            dest: "/stay-with-us"
        },
        {
            label: "Media Production",
            dest: "/media-production"
        },
        {
            label: "Food + Drink",
            dest: "/food-drink"
        }
    ]);
    const [showcaseItems] = (0,external_react_.useState)([
        {
            content: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: wordmark_on_dark,
                alt: "Aberration Co.",
                unoptimized: true
            }),
            backgroundImage: ""
        },
        {
            content: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: full_on_dark,
                alt: "Aberration Co.",
                unoptimized: true
            }),
            backgroundImage: ""
        },
        {
            content: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: wordmark_on_dark,
                alt: "Aberration Co.",
                unoptimized: true
            }),
            backgroundImage: ""
        },
        {
            content: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: full_on_dark,
                alt: "Aberration Co.",
                unoptimized: true
            }),
            backgroundImage: ""
        }
    ]);
    let toggleClasses = external_classnames_default()("nav__toggle", {
        clicked: open
    });
    let navClasses = external_classnames_default()("nav__nav", {
        open: open
    }, {
        hidden: !open
    });
    const handleShowTarget = (e)=>{
        setTargetHover(e.target.dataset.target);
        setShowcaseHeight(showcaseRef.current.clientHeight);
    };
    (0,external_react_.useEffect)(()=>{
        setShowcaseHeight(showcaseRef.current.clientHeight);
        const listenForEscape = (e)=>{
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        };
        window.addEventListener("keydown", listenForEscape);
        return ()=>{
            window.removeEventListener("keydown", listenForEscape);
        };
    }, []);
    const handleClick = (route)=>{
        router.push(route);
        setOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "nav-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "nav",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "nav__logo",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: wordmark_on_dark,
                            alt: "Aberration Co.",
                            unoptimized: true
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: toggleClasses,
                    onClick: ()=>setOpen(!open),
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "nav__toggle__bar"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: navClasses,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "nav__showcase",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "nav__showcase-container",
                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    ref: showcaseRef,
                                    className: "nav__showcase-menu",
                                    style: {
                                        top: showcaseHeight * targetHover * -1
                                    },
                                    children: showcaseItems.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                            "data-target": i,
                                            style: {
                                                backgroundImage: item?.backgroundImage
                                            },
                                            children: item.content
                                        }, i))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "nav__menu",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "nav__menu-main",
                                children: menuItems.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: targetHover === i.toString() ? "hover" : "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "number",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: ("0" + i).slice(-2)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>handleClick(item.dest),
                                                onMouseEnter: handleShowTarget,
                                                "data-target": i,
                                                children: item.label
                                            })
                                        ]
                                    }, i))
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Navbar = (CustomNav);

;// CONCATENATED MODULE: ./components/layout.js



function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "main",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(nav_Footer, {})
        ]
    });
}

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(1663);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootLayout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Aberration Co."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 1663:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,675,664], () => (__webpack_exec__(1480)));
module.exports = __webpack_exports__;

})();