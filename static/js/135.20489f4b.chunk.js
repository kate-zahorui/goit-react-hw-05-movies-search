"use strict";(self.webpackChunkgoit_react_hw_05_movies_search=self.webpackChunkgoit_react_hw_05_movies_search||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(861),c=n(885),s=n(757),a=n.n(s),i=n(791),o=n(501),u=n(871),l=n(390),f="MovieDetails_button__uXZxd",h="MovieDetails_movieContainer__ilr3m",v="MovieDetails_poster__yO7gD",p="MovieDetails_title__cUGs9",d="MovieDetails_sectionTitle__lgzGU",x="MovieDetails_additionalContainer__YQYEX",m="MovieDetails_navLink__uPVwm",_=n(184),j=(0,i.lazy)((function(){return n.e(76).then(n.bind(n,76))})),w=(0,i.lazy)((function(){return n.e(168).then(n.bind(n,168))})),k=function(){var e=(0,i.useState)(null),t=(0,c.Z)(e,2),n=t[0],s=t[1],k=(0,i.useState)(!1),b=(0,c.Z)(k,2),y=b[0],g=b[1],M=(0,i.useState)(""),Z=(0,c.Z)(M,2),N=Z[0],D=Z[1],C=(0,u.UO)().movieId,S=(0,u.TH)(),L=(0,u.s0)();function O(){return(O=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),D(""),e.next=5,l.v.fetchMovieById(C);case 5:if(!(t=e.sent).ok){e.next=12;break}return e.next=9,t.json();case 9:return n=e.sent,s(n),e.abrupt("return");case 12:return e.next=14,Promise.reject(new Error("Movie is not found"));case 14:return e.abrupt("return");case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),D(e.t0.message);case 21:return e.prev=21,g(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,17,21,24]])})))).apply(this,arguments)}(0,i.useEffect)((function(){C&&function(){O.apply(this,arguments)}()}),[C]);var U=!y&&n;return(0,_.jsxs)("div",{children:[(0,_.jsx)("button",{type:"button",onClick:function(){S.state?L(S.state.from):L("/")},className:f,children:"Go back"}),N&&(0,_.jsxs)("div",{children:["Error: ",N]}),y&&(0,_.jsx)("div",{children:"Loading..."}),U&&(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"movie poster",className:v}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("section",{children:[(0,_.jsxs)("h1",{className:p,children:[" ",n.title?n.title:n.name]}),(0,_.jsxs)("p",{children:["User Score: ",function(){if(n)return Math.round(10*n.vote_average)}(),"%"]})]}),(0,_.jsxs)("section",{children:[(0,_.jsx)("h2",{className:d,children:"Overview"}),(0,_.jsx)("p",{children:n.overview})]}),(0,_.jsxs)("section",{children:[(0,_.jsx)("h2",{className:d,children:"Genres"}),(0,_.jsx)("p",{children:function(){if(n)return n.genres.map((function(e){return e.name})).join(", ")}()})]})]})]}),(0,_.jsxs)("section",{children:[(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)("h2",{className:d,children:"Additional information"}),(0,_.jsx)(o.OL,{to:"cast",state:{from:S.state.from},className:m,children:"Cast"}),(0,_.jsx)(o.OL,{to:"reviews",state:{from:S.state.from},className:m,children:"Reviews"})]}),(0,_.jsx)(i.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsxs)(u.Z5,{children:[(0,_.jsx)(u.AW,{path:"cast",element:(0,_.jsx)(j,{})}),(0,_.jsx)(u.AW,{path:"reviews",element:(0,_.jsx)(w,{})})]})})]})]})]})}},390:function(e,t,n){n.d(t,{v:function(){return o}});var r=n(861),c=n(757),s=n.n(c),a="dddf682d6a330b3ee1156a5db67c7481",i="https://api.themoviedb.org/3",o={fetchTrends:function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/trending/all/week?api_key=").concat(a),e.next=3,fetch("".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovies:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split(" ").join("+"),r="".concat(i,"/search/movie?api_key=").concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"),e.next=4,fetch("".concat(r));case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieById:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"?api_key=").concat(a),e.next=3,fetch("".concat(n));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieCast:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(a),e.next=3,fetch("".concat(n));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieReviews:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(a),e.next=3,fetch("".concat(n));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=135.20489f4b.chunk.js.map