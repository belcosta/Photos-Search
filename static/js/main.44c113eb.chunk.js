(this.webpackJsonpphotos=this.webpackJsonpphotos||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),o=c(17),a=c.n(o),i=(c(23),c(24),c(3)),u=(c(25),c(6)),j=c.n(u);function b(e){return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("input",{placeholder:"Search for a pic here..",value:e.query,onInput:function(t){e.setQuery(t.target.value)}}),Object(n.jsx)("button",{onClick:function(){e.setSearchOn((function(e){return!e}))},children:"SEARCH"})]})}function l(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{className:"card-img-top",src:e.photo.cover_photo.urls.full,alt:"Card pic"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h5",{className:"card-title",children:e.photo.cover_photo.alt_description||e.photo.title})})]})})}function h(e){var t=e.photos,c=e.hasMore,s=e.setPageNumber,o=Object(r.useRef)(),a=Object(r.useCallback)((function(e){o.current&&o.current.disconnect(),o.current=new IntersectionObserver((function(e){e[0].isIntersecting&&c&&s((function(e){return e+1}))})),e&&o.current.observe(e)}),[c]),i=t.filter((function(e){return e.cover_photo}));return Object(n.jsx)("div",{className:"card-columns",children:i.map((function(e,t){return e.cover_photo?t===i.length-1?Object(n.jsx)("div",{ref:a,children:Object(n.jsx)(l,{photo:e})},t):Object(n.jsx)("div",{children:Object(n.jsx)(l,{photo:e})},t):null}))})}var d=c(8);var O=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(r.useState)(1),a=Object(i.a)(o,2),u=a[0],l=a[1],O=Object(r.useState)(!1),p=Object(i.a)(O,2),f=p[0],v=p[1],x=function(e,t,c){var n=Object(r.useState)([]),s=Object(i.a)(n,2),o=s[0],a=s[1],u=Object(r.useState)(!1),b=Object(i.a)(u,2),l=b[0],h=b[1];return Object(r.useEffect)((function(){a([])}),[e]),Object(r.useEffect)((function(){j.a.get("https://api.unsplash.com/search/collections/?client_id=j9bQjfT_YyUFBte48Ewb8Q58-tYlHNiThtbzHJ8Y6oE&query=".concat(e,"&page=").concat(t)).then((function(e){a([].concat(Object(d.a)(o),Object(d.a)(e.data.results))),h(e.data.total_pages>t)})).catch((function(e){console.log(e)}))}),[t,c]),[o,l]}(c,u,f),m=Object(i.a)(x,2),g=m[0],S=m[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDWZFBlcr5FmGTFvxsz22J2i73drsBqLLbQ&usqp=CAU",alt:"draw of camera"}),Object(n.jsx)(b,{query:c,setQuery:s,setSearchOn:v})]}),Object(n.jsx)("main",{children:Object(n.jsx)(h,{photos:g,hasMore:S,setPageNumber:l})})]})};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.44c113eb.chunk.js.map