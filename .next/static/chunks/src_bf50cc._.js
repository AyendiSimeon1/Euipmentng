(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_bf50cc._.js", {

"[project]/src/components/ui/cards/HomepageCard.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cardData": (()=>cardData),
    "default": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$reducers$2f$equipmentReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/reducers/equipmentReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const slugify = (string)=>{
    return string.toLowerCase().replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-').trim();
};
const cardData = [
    {
        image: "future.jpeg",
        amount: "2,500,000.00",
        duration: "per day",
        name: "Steel Pipelines Cables",
        description: "Lorem ipsum dolor sit amet",
        workingcondition: "Available: Immediately",
        slug: "steel-pipelines-cables"
    },
    {
        image: "future.jpeg",
        amount: "1,800,000.00",
        duration: "per week",
        name: "High-Pressure Valves",
        description: "Consectetur adipiscing elit",
        workingcondition: "Available: In 3 days",
        slug: "high-pressure-valves"
    },
    {
        image: "future.jpeg",
        amount: "2,500,000.00",
        duration: "per day",
        name: "Bulldozer",
        description: "Powerful bulldozer for earthmoving and demolition.",
        workingcondition: "Available: In 2 days",
        slug: "bulldozer"
    },
    {
        image: "future.jpeg",
        amount: "4,000,000.00",
        duration: "per day",
        name: "Crane",
        description: "High-capacity crane for lifting and moving heavy loads.",
        workingcondition: "Available: Immediately",
        slug: "crane"
    },
    {
        image: "future.jpeg",
        amount: "1,200,000.00",
        duration: "per day",
        name: "Forklift",
        description: "Versatile forklift for material handling and warehouse operations.",
        workingcondition: "Available: In 1 day",
        slug: "forklift"
    },
    {
        image: "future.jpeg",
        amount: "2,800,000.00",
        duration: "per day",
        name: "Backhoe Loader",
        description: "Multi-purpose backhoe loader for digging and loading.",
        workingcondition: "Available: Immediately",
        slug: "backhoe-loader"
    },
    {
        image: "future.jpeg",
        amount: "1,500,000.00",
        duration: "per day",
        name: "Compactor",
        description: "Heavy-duty compactor for soil and asphalt compaction.",
        workingcondition: "Available: In 3 days",
        slug: "compactor"
    },
    {
        image: "future.jpeg",
        amount: "3,200,000.00",
        duration: "per day",
        name: "Motor Grader",
        description: "Precision motor grader for road construction and maintenance.",
        workingcondition: "Available: Immediately",
        slug: "motor-grader"
    }
];
function Card() {
    // const dispatch = useDispatch();
    // const { equipments, loading, error } = useSelector((state) => state.equipments);
    // useEffect(() => {
    //     dispatch(fetchEquipments());
    // }, [dispatch]);
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 mx-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Listed Equipments "
            }, void 0, false, {
                fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            cardData.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg overflow-hidden shadow-lg bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `equipment-detail/${card.slug}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-full h-48 object-cover rounded-t-lg",
                                        src: "/future.jpeg",
                                        alt: card.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                        // Add bookmark functionality here
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsBookmark"], {
                                            className: "h-5 w-5 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-800",
                                            children: card.amount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 131,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500",
                                            children: card.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg sm:text-xl font-semibold text-gray-700",
                                            children: card.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 font-semibold",
                                            children: card.workingcondition
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/ui/cards/HomepageCard.js",
                    lineNumber: 110,
                    columnNumber: 13
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/cards/HomepageCard.js",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_c = Card;
var _c;
__turbopack_refresh__.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_bf50cc._.js.map