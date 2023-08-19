"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3104);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9212);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ id, image, bookTitle, writer, year })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/${id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-2xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "w-full object-cover md:h-[480px]",
                    src: image,
                    alt: "img"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "break-words text-xl font-medium",
                    children: bookTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "break-words text-sm",
                    children: writer
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "break-words text-sm",
                    children: year
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Switcher = ({ view, setView })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gray-300 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${view === "list" ? "active" : ""}`,
                onClick: ()=>setView("list"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "List"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${view === "grid" ? "active" : ""}`,
                onClick: ()=>setView("grid"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Grid"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switcher);


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaftarBuku)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Switcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5144);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7834);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2053);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function DaftarBuku() {
    const title = "Daftar List Buku";
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("list"); // default view is list
    const { isLoading, error, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("datas", ()=>axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyBVTk6hrNq3WsAv0wi1mevJA-2Mqawz9FQ").then((res)=>res.data.items));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container px-2 md:px-0 mx-auto py-16 min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl",
                        children: title
                    }),
                    error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center",
                        children: [
                            "An error has occurred: ",
                            error.message
                        ]
                    }) : isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    view: view,
                                    setView: setView
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${view === "list" ? "flex flex-col" : "grid grid-cols-2 md:grid-cols-3"} gap-4`,
                                children: data?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: item.id,
                                        image: item.volumeInfo.imageLinks.thumbnail,
                                        bookTitle: item.volumeInfo.title,
                                        writer: item.volumeInfo.authors,
                                        year: item.volumeInfo.publishedDate
                                    }, item.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,664,535,53], () => (__webpack_exec__(1496)));
module.exports = __webpack_exports__;

})();