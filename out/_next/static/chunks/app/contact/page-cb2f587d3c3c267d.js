(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327,301],{6413:function(e,t,n){Promise.resolve().then(n.bind(n,8706))},8706:function(e,t,n){"use strict";n.d(t,{Navigation:function(){return m}});var r=n(7437),s=n(5135),i=n(598),o=n(4508),a=n(2265),c=n(5929),l=n(7226),d=n(5922),u=n(2869);function h(){let{setTheme:e,theme:t}=(0,d.F)();return(0,r.jsxs)(u.z,{variant:"ghost",size:"icon",onClick:()=>e("light"===t?"dark":"light"),children:[(0,r.jsx)(c.Z,{className:"h-[1.5rem] w-[1.3rem] dark:hidden"}),(0,r.jsx)(l.Z,{className:"hidden h-5 w-5 dark:block"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function m(){let[e,t]=(0,a.useState)("home");(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.target.id)})},{threshold:.5});return document.querySelectorAll("section[id]").forEach(t=>{e.observe(t)}),()=>e.disconnect()},[]);let n=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,r.jsx)("nav",{className:"sticky top-0 z-50 backdrop-blur-sm border-b border-white/10",children:(0,r.jsx)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 sm:h-20 items-center justify-between",children:[(0,r.jsx)("button",{onClick:()=>n("home"),className:"font-mono text-xl font-bold hover:text-purple-400 transition",children:"Sunny Shah"}),(0,r.jsx)("button",{className:"sm:hidden p-2","aria-label":"Menu",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),(0,r.jsxs)("div",{className:"hidden sm:flex items-center gap-6 lg:gap-8",children:[["about","experience","projects","contact"].map(t=>(0,r.jsx)("button",{onClick:()=>n(t),className:(0,o.cn)("text-base hover:text-purple-400 transition capitalize",e===t&&"text-purple-400"),children:t},t)),(0,r.jsxs)("div",{className:"flex items-center gap-4 ml-4",children:[(0,r.jsx)("a",{href:"https://github.com/sunnypshah1",target:"_blank",className:"hover:text-purple-400 transition",rel:"noreferrer",children:(0,r.jsx)(s.Z,{className:"h-5 w-5"})}),(0,r.jsx)("a",{href:"https://linkedin.com/in/sunnypshah",target:"_blank",className:"hover:text-purple-400 transition",rel:"noreferrer",children:(0,r.jsx)(i.Z,{className:"h-5 w-5"})}),(0,r.jsx)(h,{})]})]})]})})})}},2869:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7437),s=n(2265),i=n(5293),o=n(535),a=n(4508);let c=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,t)=>{let{className:n,variant:s,size:o,asChild:l=!1,...d}=e,u=l?i.g7:"button";return(0,r.jsx)(u,{className:(0,a.cn)(c({variant:s,size:o,className:n})),ref:t,...d})});l.displayName="Button"},4508:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(1994),s=n(3335);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}}},function(e){e.O(0,[224,971,117,744],function(){return e(e.s=6413)}),_N_E=e.O()}]);