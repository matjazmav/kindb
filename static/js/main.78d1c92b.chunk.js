(this["webpackJsonpkindb-survey-ui"]=this["webpackJsonpkindb-survey-ui"]||[]).push([[0],{40:function(e,t,c){},46:function(e,t,c){},54:function(e,t){},55:function(e,t){},56:function(e,t){},58:function(e,t,c){},59:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(2),s=c.n(a),i=c(15),j=c.n(i),r=(c(40),c(9)),o=(c(45),c(70)),b=c(69),l=c(71),d=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"CommunityFaceKinDB"}),Object(n.jsx)("p",{children:"Database of facial images colleced by community annotated with kinship attributes."})]})},u=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Step 1"}),Object(n.jsx)("p",{children:"Zakaj je ta anketa, Kratka navodila, poudari se anonimnost..."})]})},h=c(19),O=c(24),x=c.n(O),f=(c(46),c.p+"static/media/face-outline.d8b16a1f.svg"),m=c(65),p=c(66),g=function(e){var t=e.onCapture,c=s.a.useState(!1),a=Object(h.a)(c,2),i=a[0],j=a[1],r=s.a.useRef(null),o=s.a.useCallback((function(){var e=r.current.getScreenshot(),c=new Image;c.onload=function(){console.log("Image captured (".concat(c.width,"x").concat(c.height,").")),t({src:e,meta:{width:c.width,height:c.height}})},c.src=e}),[r]);return Object(n.jsxs)("div",{className:"camera",children:[Object(n.jsxs)("div",{className:"camera-loader",style:{display:i?"none":"block"},children:[Object(n.jsx)(m.a,{}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Opening camera..."})]}),Object(n.jsxs)("div",{className:"camera-view",style:{display:i?"block":"none"},children:[Object(n.jsx)(x.a,{audio:!1,mirrored:!0,screenshotFormat:"image/png",videoConstraints:{facingMode:"user"},onUserMedia:function(){return j(!0)},ref:r}),Object(n.jsx)("button",{onClick:o,children:Object(n.jsx)(p.a,{})}),Object(n.jsx)("img",{src:f})]})]})},v=c(29),k=(c(47),c(62),c(58),function(e){var t=e.image,c=s.a.useRef(null),a=s.a.useCallback((function(){}),[c]);return Object(n.jsx)("div",{className:"face-cropper",children:Object(n.jsx)(v.a,{src:t.src,style:{height:t.meta.height,width:t.meta.width},initialAspectRatio:1,guides:!1,crop:a,onInitialized:function(e){c.current=e},dragMode:"crop",movable:!1,rotatable:!1,scalable:!1,zoomable:!1})})}),C=c(67),y=c(68),N=(c(59),function(){var e=s.a.useState(null),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{className:"selfie",children:c?Object(n.jsxs)("div",{className:"selfie-cropper",children:[Object(n.jsx)(k,{image:c}),Object(n.jsxs)("div",{className:"selfie-cropper-buttons",children:[Object(n.jsx)("button",{className:"backBtn",onClick:function(){return a(null)},children:Object(n.jsx)(C.a,{})}),Object(n.jsx)("button",{className:"okBtn",children:Object(n.jsx)(y.a,{})})]})]}):Object(n.jsx)(g,{onCapture:a})})}),w=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Step 2"}),Object(n.jsx)(N,{})]})},I=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Step 3"}),Object(n.jsx)("p",{children:"Strinjaj se z obdelavo podatkov, povdari anonimnost, zahvali se"})]})},L=function(){return Object(n.jsxs)("section",{children:[Object(n.jsxs)(l.a,{fill:!0,className:"justify-content-center",children:[Object(n.jsx)(l.a.Item,{children:Object(n.jsx)(l.a.Link,{as:r.a,to:"1",children:"Intro"})}),Object(n.jsx)(l.a.Item,{children:Object(n.jsx)(l.a.Link,{as:r.a,to:"2",children:"Upload"})}),Object(n.jsx)(l.a.Item,{children:Object(n.jsx)(l.a.Link,{as:r.a,to:"3",children:"Finish"})})]}),Object(n.jsxs)(r.b,{children:[Object(n.jsx)(u,{path:"1"}),Object(n.jsx)(w,{path:"2"}),Object(n.jsx)(I,{path:"3"})]})]})},S=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Database"}),Object(n.jsx)("p",{children:"info about database, attributes, annotations, number of families, number of faces, ..."})]})},F=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"about, cite, ..."})]})},B=function(){return Object(n.jsx)("h1",{children:"404"})},D=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)(o.a,{bg:"light",expand:"lg",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(o.a.Brand,{as:r.a,to:"/",children:"CommunityFaceKinDB"}),Object(n.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(l.a,{className:"mr-auto",children:[Object(n.jsx)(l.a.Link,{as:r.a,to:"/",children:"Home"}),Object(n.jsx)(l.a.Link,{as:r.a,to:"contribute",children:"Contribute"}),Object(n.jsx)(l.a.Link,{as:r.a,to:"database",children:"Database"}),Object(n.jsx)(l.a.Link,{as:r.a,to:"about",children:"About"})]})})]})}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(r.b,{children:[Object(n.jsx)(d,{path:"/"}),Object(n.jsx)(L,{path:"contribute/*"}),Object(n.jsx)(S,{path:"database"}),Object(n.jsx)(F,{path:"about"}),Object(n.jsx)(B,{default:!0})]})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};j.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),z()}},[[63,1,2]]]);
//# sourceMappingURL=main.78d1c92b.chunk.js.map