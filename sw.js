if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--qQ1kaDS.css",revision:null},{url:"assets/index-ucdKegPy.js",revision:null},{url:"index.html",revision:"17cd0e076aa439de886b456c9b56678b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"apple-touch-icon.png",revision:"6534f82eb378d58168a60b4e973c7d6d"},{url:"favicon.ico",revision:"1c15811986bf1c9a3d073d771b89588c"},{url:"pwa-192x192.png",revision:"8ba54599016b0d775ea38d92bed69935"},{url:"pwa-512x512.png",revision:"9da68d58106d1fe30a7af4fb17223a6a"},{url:"manifest.webmanifest",revision:"b2c10afaa1fc6b0b0f890dfe23a9cded"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
