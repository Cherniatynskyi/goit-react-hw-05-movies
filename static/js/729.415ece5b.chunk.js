"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[729],{155:(t,e,a)=>{a.d(e,{O:()=>i});const c="MoviesList_moviesList__P6SP5",s="MoviesList_title__PB2c8";var o=a(87),r=a(184);const i=t=>{let{movies:e,location:a}=t;return(0,r.jsx)("ul",{className:c,children:e?e.map((t=>(0,r.jsx)(o.rU,{to:"/"===a.pathname?"movies/".concat(t.id):"".concat(t.id),state:{from:a},children:(0,r.jsx)("li",{children:(0,r.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg",alt:t.title})})},t.id))):(0,r.jsx)("h1",{className:s,children:"Search for Movies"})})}},729:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var c=a(791),s=a(207);const o="SearchBar_form__gW7Gj",r="SearchBar_formButton__C-ydM",i="SearchBar_input__bIy50";var n=a(686),l=a.n(n),h=a(184);const u=t=>{let{onSubmit:e}=t;const[a,s]=(0,c.useState)("");return(0,h.jsx)("header",{children:(0,h.jsxs)("form",{className:o,onSubmit:t=>{t.preventDefault(),a?e({query:a}):l().Notify.failure("Enter your search term")},children:[(0,h.jsx)("button",{className:r,type:"submit",children:(0,h.jsx)("span",{children:"Search"})}),(0,h.jsx)("input",{className:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:t=>{s(t.target.value)},value:a})]})})};var m=a(689),d=a(87),_=a(155);const p=()=>{const[t,e]=(0,c.useState)(null),a=(0,m.TH)(),[o,r]=(0,d.lr)();(0,c.useEffect)((()=>{const t=o.get("q");(async()=>{if(t)try{const a=await s.z1(t);e(a),console.log("Fetched")}catch(a){l().Notify.failure("Error")}})()}),[o]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(u,{onSubmit:t=>{let{query:e}=t;r({q:e})}}),(0,h.jsx)(_.O,{movies:t,location:a})]})}},207:(t,e,a)=>{a.d(e,{C4:()=>r,TP:()=>i,z1:()=>n});var c=a(294);const s="https://api.themoviedb.org/3",o="f331f91cb9692f1df13f3cba648b2743",r=async()=>(await(0,c.Z)({url:"".concat(s).concat("/trending/all/day","?api_key=").concat(o),method:"GET"})).data.results,i=async(t,e)=>(await(0,c.Z)({url:"".concat(s,"/movie/").concat(t).concat(e,"?api_key=").concat(o),method:"GET"})).data,n=async t=>(await(0,c.Z)({url:"".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t),method:"GET"})).data.results}}]);
//# sourceMappingURL=729.415ece5b.chunk.js.map