if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),l={module:{uri:o},exports:d,require:t};i[o]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CoxMyStc.js",revision:null},{url:"assets/index-CZ-FxcHl.css",revision:null},{url:"index.html",revision:"e94124db7eef589a8f8ee7b6e2e4ed85"},{url:"registerSW.js",revision:"b08e468f07499d9305ac14f25d9376ab"},{url:"apple-touch-icon.png",revision:"6534f82eb378d58168a60b4e973c7d6d"},{url:"favicon.ico",revision:"1c15811986bf1c9a3d073d771b89588c"},{url:"pwa-192x192.png",revision:"8ba54599016b0d775ea38d92bed69935"},{url:"pwa-512x512.png",revision:"9da68d58106d1fe30a7af4fb17223a6a"},{url:"manifest.webmanifest",revision:"d6281b6d27f24d9a91534d07934610f5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
