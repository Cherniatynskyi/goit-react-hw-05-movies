"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:(a,t,c)=>{c.r(t),c.d(t,{default:()=>l});var e=c(689),s=c(791),r=c(207);const n="Cast_actorsContainer__CmOqS",o="Cast_errorTitle__lv-AY";var i=c(184);const l=()=>{const{movieId:a}=(0,e.UO)(),[t,c]=(0,s.useState)(null),l=(0,s.useRef)(!0);return(0,s.useEffect)((()=>{(async()=>{if(l.current)try{const t=await r.TP(a,"/credits");c(t.cast)}catch(t){alert("error")}l.current=!1})()}),[a]),(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsx)("div",{children:0!==t.length?(0,i.jsx)("ul",{className:n,children:t.map((a=>(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:a.name}),(0,i.jsx)("img",{width:"200",height:"300",src:a.profile_path?"https://image.tmdb.org/t/p/w200".concat(a.profile_path):"https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png",alt:a.name})]},a.id)))}):(0,i.jsx)("p",{className:o,children:"No cast"})})})}},207:(a,t,c)=>{c.d(t,{C4:()=>n,TP:()=>o,z1:()=>i});var e=c(294);const s="https://api.themoviedb.org/3",r="f331f91cb9692f1df13f3cba648b2743",n=async()=>(await(0,e.Z)({url:"".concat(s).concat("/trending/all/day","?api_key=").concat(r),method:"GET"})).data.results,o=async(a,t)=>(await(0,e.Z)({url:"".concat(s,"/movie/").concat(a).concat(t,"?api_key=").concat(r),method:"GET"})).data,i=async a=>(await(0,e.Z)({url:"".concat(s,"/search/movie?api_key=").concat(r,"&query=").concat(a),method:"GET"})).data.results}}]);
//# sourceMappingURL=76.f204663b.chunk.js.map