(this["webpackJsonpkpierce-shopify-w2022"]=this["webpackJsonpkpierce-shopify-w2022"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),s=a.n(i),o=(a(50),a(3)),r=a.p+"static/media/rocket-loader.e26e31f3.svg",l=a(38),j=(a(51),a(1)),d=function(e){var t=e.openSpacestagram,a=Object(c.useState)(""),n=Object(o.a)(a,2),i=n[0],s=n[1];return Object(j.jsxs)("div",{className:"homepage-wrapper",children:[Object(j.jsxs)("div",{className:"homepage-header",children:[Object(j.jsx)("h1",{className:i?"fadeout-animation":"",children:"SPACESTAGRAM"}),Object(j.jsx)("img",{height:"60",src:r,alt:"spacestagram main logo",className:i})]}),Object(j.jsx)(l.a,{"aria-label":"Open spacestagram",className:i?"fadeout-animation":"",onClick:function(){s("animate-mode"),t()},children:"Begin your journey"})]})},u=a(15),p=a(28),b=a.n(p),h=a(39),m=a(40),g=a.n(m),O=a(91),f=a(89),x=a(44),v=a.p+"static/media/link-icon.8d570e79.svg",w=a.p+"static/media/heart-full-icon.65b6419a.svg",S=a.p+"static/media/heart-empty-icon.35384cfe.svg",k=(a(75),a(76),function(e){var t=e.imageData,a=e.onPostInteractionHandler,n=Object(c.useState)(!1),i=Object(o.a)(n,2),s=i[0],r=i[1];Object(c.useEffect)((function(){var e=window.localStorage.getItem("".concat(t.identifier,"-liked-state"));null!=e&&"true"==e&&r(!0)}),[]);return Object(j.jsx)("div",{className:"spacestagram-card-wrapper",children:Object(j.jsx)(O.a,{children:Object(j.jsxs)(O.a.Body,{children:[Object(j.jsx)(x.a,{src:t.url,zoomSrc:t.url,alt:"Photo of Earth taken by NASA's EPIC camera",zoomType:"hover",zoomScale:1.25,width:566,height:566}),Object(j.jsxs)("div",{className:"interactions-row",children:[Object(j.jsx)(l.a,{"aria-label":"Like button",onClick:function(){s?(window.localStorage.removeItem("".concat(t.identifier,"-liked-state")),a("Unliked post")):(window.localStorage.setItem("".concat(t.identifier,"-liked-state"),!s),a("Liked post")),r(!s)},variant:"none",className:"like-btn",children:1==s?Object(j.jsx)("img",{alt:"Liked post icon",src:w}):Object(j.jsx)("img",{alt:"Unliked post icon",src:S})}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(f.a.Toggle,{variant:"none","aria-label":"Share button",className:"share-btn",children:Object(j.jsx)("img",{width:"32",alt:"Ei-share-apple",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ei-share-apple.svg/512px-Ei-share-apple.svg.png"})}),Object(j.jsx)(f.a.Menu,{children:Object(j.jsx)(f.a.Item,{"aria-label":"Copy link",onClick:function(e){a("Link copied to clipboard"),navigator.clipboard.writeText("".concat(t.url))},children:Object(j.jsx)("div",{className:"share-dropdown-content",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{width:"16",alt:"Link icon",src:v}),"Copy link to Image"]})})})})]})]}),Object(j.jsx)(O.a.Text,{className:"caption",children:t.caption}),Object(j.jsx)(O.a.Text,{className:"date",children:t.date.split(" ")[0]})]})})})}),N=(a(77),["Scouring space for images","Asking NOAA DSCOVR to send images","Exploring the universe for images","Kindly asking NASA for images"]),E=function(e){var t=e.showMsg,a=void 0===t||t,c=N[Math.floor(Math.random()*N.length)];return Object(j.jsxs)("div",{className:"loading-wrapper"+(a?"":" lazy-load"),children:[Object(j.jsx)("img",{className:"loader",src:r,height:"100",alt:"Loading Icon"}),Object(j.jsx)("h4",{children:a?c:""})]})},y=a(88),C=a(90),A=(a(78),function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.pageYOffset>500?n(!0):n(!1)}))}),[]);return Object(j.jsx)("div",{className:"scroll-button-wrapper",children:Object(j.jsx)(l.a,{"aria-label":"Scroll to top",className:"scroll-button"+(a?" show":""),onClick:function(){window.scrollTo({top:0,behaviour:"smooth"})},children:"^"})})}),I=(a(79),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),l=s[0],d=s[1],p=Object(c.useState)(!1),m=Object(o.a)(p,2),O=m[0],f=m[1],x=Object(c.useState)([]),v=Object(o.a)(x,2),w=v[0],S=v[1],N=Object(c.useState)(2),I=Object(o.a)(N,2),T=I[0],D=I[1];Object(c.useEffect)((function(){L(),window.addEventListener("scroll",(function(){Math.ceil(window.innerHeight+document.documentElement.scrollTop)!==document.documentElement.offsetHeight||O||f(!0)}))}),[]),Object(c.useEffect)((function(){w.length>0&&window.setTimeout((function(){S((function(e){return e.slice(1)}))}),3e3)}),[w]),Object(c.useEffect)((function(){O&&L()}),[O]);var L=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Date).setDate(t.getDate()-T),a=String(t.toISOString().slice(0,10)),e.next=5,g()({method:"get",url:"https://api.nasa.gov/EPIC/api/natural/date/".concat(a,"?api_key=").concat("vxZwwUvpSDaBWPFhWaSWD5J4FDCJuIGQApvcv8Xi")}).then((function(e){P(e.data)})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.map((function(e){var t=e.date.split(" ")[0].split("-"),a=t[0],c=t[1],n=t[2],i="https://epic.gsfc.nasa.gov/archive/natural/".concat(a,"/").concat(c,"/").concat(n,"/jpg/").concat(e.image,".jpg");return e.url=i,e}));n((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),d(!0),D(T+1),f(!1)},M=function(e){S([].concat(Object(u.a)(w),[e]))};return Object(j.jsxs)("div",{className:"spacestagram-view-wrapper",children:[l&&a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"spacestagram-header",children:[Object(j.jsx)("h1",{children:"SPACESTAGRAM"}),Object(j.jsx)("img",{height:"60",src:r,alt:"spacestagram main logo"})]}),Object(j.jsx)("div",{className:"spacestagram-cards-holder",children:a.map((function(e){return Object(j.jsx)(k,{onPostInteractionHandler:M,imageData:e},e.identifier)}))})]}):Object(j.jsx)(E,{}),O?Object(j.jsx)(E,{showMsg:!1}):Object(j.jsx)(j.Fragment,{}),Object(j.jsx)(y.a,{style:{position:"fixed",bottom:"36px",right:"108px"},children:w&&w.map((function(e,t){return Object(j.jsx)(C.a,{children:Object(j.jsx)(C.a.Header,{children:Object(j.jsx)("strong",{className:"me-auto",children:e})})},t)}))}),Object(j.jsx)(A,{})]})}),T=(a(80),function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(j.jsx)("div",{className:"app-wrapper",children:Object(j.jsx)("header",{className:"app-header",children:a?Object(j.jsx)(d,{openSpacestagram:function(){window.setTimeout((function(){n(!1)}),1e3)}}):Object(j.jsx)(I,{})})})}),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};a(81);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),D()}},[[82,1,2]]]);
//# sourceMappingURL=main.ed29c0f8.chunk.js.map