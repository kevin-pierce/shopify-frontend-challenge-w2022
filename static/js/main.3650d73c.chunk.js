(this["webpackJsonpkpierce-shopify-w2022"]=this["webpackJsonpkpierce-shopify-w2022"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),s=a.n(i),r=(a(50),a(3)),o=a.p+"static/media/rocket-loader.e26e31f3.svg",l=a(38),d=(a(51),a(1)),j=function(e){var t=e.openSpacestagram,a=Object(c.useState)(""),n=Object(r.a)(a,2),i=n[0],s=n[1];return Object(d.jsxs)("div",{className:"homepage-wrapper",children:[Object(d.jsxs)("div",{className:"homepage-header",children:[Object(d.jsx)("h1",{className:i?"fadeout-animation":"",children:"SPACESTAGRAM"}),Object(d.jsx)("img",{height:"60",src:o,alt:"spacestagram main logo",className:i})]}),Object(d.jsx)(l.a,{"aria-label":"Open spacestagram",className:i?"fadeout-animation":"",onClick:function(){s("animate-mode"),t()},children:"Begin your journey"})]})},u=a(15),m=a(27),p=a.n(m),h=a(39),b=a(40),g=a.n(b),O=a(90),f=a(88),x=a(44),v=a.p+"static/media/link-icon.8d570e79.svg",w=a.p+"static/media/heart-full-icon.65b6419a.svg",S=a.p+"static/media/heart-empty-icon.35384cfe.svg",k=(a(75),a(76),function(e){var t=e.imageData,a=e.onPostInteractionHandler,n=Object(c.useState)(!1),i=Object(r.a)(n,2),s=i[0],o=i[1];Object(c.useEffect)((function(){var e=window.localStorage.getItem("".concat(t.identifier,"-liked-state"));null!=e&&"true"==e&&o(!0)}),[]);return Object(d.jsx)("div",{className:"spacestagram-card-wrapper",children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(x.a,{src:t.url,zoomSrc:t.url,alt:"Image from NASA's EPIC camera",zoomType:"hover",zoomScale:1.2}),Object(d.jsxs)("div",{className:"interactions-row",children:[Object(d.jsx)(l.a,{"aria-label":"Like button",onClick:function(){s?(window.localStorage.removeItem("".concat(t.identifier,"-liked-state")),a("Unliked post")):(window.localStorage.setItem("".concat(t.identifier,"-liked-state"),!s),a("Liked post")),o(!s)},variant:"none",className:"like-btn",children:1==s?Object(d.jsx)("img",{alt:"Liked image icon",src:w}):Object(d.jsx)("img",{alt:"Unliked image icon",src:S})}),Object(d.jsxs)(f.a,{children:[Object(d.jsx)(f.a.Toggle,{variant:"none","aria-label":"Share button",className:"share-btn",children:Object(d.jsx)("img",{width:"32",alt:"Ei-share-apple",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/512px-Ei-share-apple.svg.png"})}),Object(d.jsx)(f.a.Menu,{children:Object(d.jsx)(f.a.Item,{"aria-label":"Copy link",onClick:function(e){a("Link copied to clipboard"),navigator.clipboard.writeText("".concat(t.url))},children:Object(d.jsx)("div",{className:"share-dropdown-content",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{width:"16",alt:"Link icon",src:v}),"Copy link to Image"]})})})})]})]}),Object(d.jsx)(O.a.Text,{className:"caption",children:t.caption}),Object(d.jsx)(O.a.Text,{className:"date",children:t.date.split(" ")[0]})]})})})}),N=(a(77),["Scouring space for images","Asking NOAA DSCOVR to send images","Exploring the universe for images","Kindly asking NASA for images"]),E=function(){var e=N[Math.floor(Math.random()*N.length)];return Object(d.jsxs)("div",{className:"loading-wrapper",children:[Object(d.jsx)("img",{className:"loader",src:o,height:"100",alt:"Loading Icon"}),Object(d.jsx)("h4",{children:e})]})},I=a(87),y=a(89),A=(a(78),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),s=Object(r.a)(i,2),l=s[0],j=s[1],m=Object(c.useState)(!1),b=Object(r.a)(m,2),O=b[0],f=b[1],x=Object(c.useState)([]),v=Object(r.a)(x,2),w=v[0],S=v[1],N=Object(c.useState)(2),A=Object(r.a)(N,2),C=A[0],T=A[1];Object(c.useEffect)((function(){D(),window.addEventListener("scroll",(function(){Math.ceil(window.innerHeight+document.documentElement.scrollTop)!==document.documentElement.offsetHeight||O||f(!0)}))}),[]),Object(c.useEffect)((function(){w.length>0&&window.setTimeout((function(){S((function(e){return e.slice(1)}))}),3e3)}),[w]),Object(c.useEffect)((function(){O&&D()}),[O]);var D=function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Date).setDate(t.getDate()-C),a=String(t.toISOString().slice(0,10)),e.next=5,g()({method:"get",url:"https://api.nasa.gov/EPIC/api/natural/date/".concat(a,"?api_key=").concat("vxZwwUvpSDaBWPFhWaSWD5J4FDCJuIGQApvcv8Xi")}).then((function(e){L(e.data)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){var t=e.date.split(" ")[0].split("-"),a=t[0],c=t[1],n=t[2],i="https://epic.gsfc.nasa.gov/archive/natural/".concat(a,"/").concat(c,"/").concat(n,"/jpg/").concat(e.image,".jpg");return e.url=i,e}));n((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),j(!0),T(C+1),f(!1)},P=function(e){S([].concat(Object(u.a)(w),[e]))};return Object(d.jsxs)("div",{className:"spacestagram-view-wrapper",children:[l&&a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"spacestagram-header",children:[Object(d.jsx)("h1",{children:"SPACESTAGRAM"}),Object(d.jsx)("img",{height:"60",src:o,alt:"spacestagram main logo"})]}),Object(d.jsx)("div",{className:"spacestagram-cards-holder",children:a.map((function(e){return Object(d.jsx)(k,{onPostInteractionHandler:P,imageData:e},e.identifier)}))})]}):Object(d.jsx)(E,{}),Object(d.jsx)(I.a,{style:{position:"fixed",bottom:"50px",right:"50px"},children:w&&w.map((function(e,t){return Object(d.jsx)(y.a,{children:Object(d.jsx)(y.a.Header,{children:Object(d.jsx)("strong",{className:"me-auto",children:e})})},t)}))})]})}),C=(a(79),function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(d.jsx)("div",{className:"app-wrapper",children:Object(d.jsx)("header",{className:"app-header",children:a?Object(d.jsx)(j,{openSpacestagram:function(){window.localStorage.setItem("homepageVisited",!0),window.setTimeout((function(){n(!1)}),1e3)}}):Object(d.jsx)(A,{})})})}),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};a(80);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.3650d73c.chunk.js.map