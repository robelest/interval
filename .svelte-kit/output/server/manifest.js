export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.svg","logo192.png","logo512.png","manifest.webmanifest","robots.txt","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B8-NcQCO.js",app:"_app/immutable/entry/app.BxPOrFjg.js",imports:["_app/immutable/entry/start.B8-NcQCO.js","_app/immutable/chunks/mEjIznrw.js","_app/immutable/chunks/Dx6vkeWC.js","_app/immutable/entry/app.BxPOrFjg.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/Dx6vkeWC.js","_app/immutable/chunks/C7qgDVRg.js","_app/immutable/chunks/DJD7U2PO.js","_app/immutable/chunks/CL2VAI88.js","_app/immutable/chunks/CtaYjfD-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/intervals",
				pattern: /^\/intervals\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/intervals/[id]",
				pattern: /^\/intervals\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
