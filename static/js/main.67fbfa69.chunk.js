(this["webpackJsonpkindb-survey-ui"]=this["webpackJsonpkindb-survey-ui"]||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(17),r=n.n(s),o=(n(46),n(15)),l=n(7),j=(n(47),n(78)),b=n(77),u=n(79),d=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"CommunityFaceKinDB"}),Object(c.jsx)("p",{children:"Database of facial images colleced by community annotated with kinship attributes."})]})},h=n(9),x=n(4),O=n.n(x),f=(n(48),function(){return Object(c.jsxs)("section",{className:"text-justify",children:[Object(c.jsx)("h2",{className:"text-center",children:"Intro"}),Object(c.jsxs)("p",{children:["One of the critical steps in ",Object(c.jsx)("b",{children:"machine learning"})," / ",Object(c.jsx)("b",{children:"artificial intelligence"})," is obtaining large and qualitative dataset. To provide such dataset to the ",Object(c.jsx)("b",{children:"research community"}),", we are kindly asking you for your contribution. Please take ",Object(c.jsx)("b",{children:"5 minutes"})," and contribute to our dataset."]}),Object(c.jsxs)("p",{children:["We are tackling the problem of a ",Object(c.jsx)("b",{children:"kinship"})," recognition, verification and synthesis of the ",Object(c.jsx)("b",{children:"facial images"}),". While some similar dataset already exists, the ",Object(c.jsx)("b",{children:"quality"})," of images is ",Object(c.jsx)("b",{children:"poor"}),"."]}),"Properties of high quality image are:",Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["The image contain ",Object(c.jsx)("b",{children:"only single face"})]}),Object(c.jsx)("li",{children:"Resolution of the facial area is big as possible"}),Object(c.jsx)("li",{children:"Face is possioned directly to the camera"}),Object(c.jsx)("li",{children:"Whole face is visible"})]})]})}),m=n(40),p=n(18),v=n.n(p),g=n(23),k=n(16),y=n.n(k),C=n(34),w=(n(52),n(53),n(32)),N=n(72),B=(n(54),n(71)),S=function(e){var t=e.text;return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(B.a,{animation:"border",role:"status"}),Object(c.jsx)("br",{}),null!==t&&void 0!==t?t:"Loading..."]})},F=function(e){var t=e.children,n=e.isVisible;return Object(c.jsxs)("div",{className:O()({activity:!0,invisible:!n}),children:[Object(c.jsx)(D,{}),t]})},D=function(){return Object(c.jsx)("div",{className:"activity-spinner",children:Object(c.jsx)(S,{})})};F.OkButton=function(e){return Object(c.jsx)(N.a,Object(w.a)({className:"activity-btn activity-ok-btn"},e))},F.BackButton=function(e){return Object(c.jsx)(N.a,Object(w.a)({className:"activity-btn activity-back-btn",variant:"secondary"},e))};var L=F,R=n(73),I=n(74),P=function(e){var t=e.image,n=e.onCrop,a=e.onBack,s=i.a.useRef(null);return Object(c.jsx)("div",{className:"face-cropper",children:Object(c.jsx)(L,{isVisible:!0,children:t&&[Object(c.jsx)(C.a,{src:t.src,initialAspectRatio:1,guides:!1,autoCrop:!0,ref:s,dragMode:"crop",movable:!1,rotatable:!1,scalable:!1,zoomable:!1},"cropper"),Object(c.jsx)(L.OkButton,{onClick:function(){console.log("Crop event...");var e=null===s||void 0===s?void 0:s.current,t=null===e||void 0===e?void 0:e.cropper,c=t.getCropBoxData(),a=c.width,i=c.height,r=t.getCroppedCanvas().toDataURL();console.log("Cropped image (".concat(a,"x").concat(i,").")),n({src:r,meta:{hash:y()(r),width:a,height:i}})},children:Object(c.jsx)(R.a,{})},"ok-btn"),Object(c.jsx)(L.BackButton,{onClick:a,children:Object(c.jsx)(I.a,{})},"back-btn")]})})},z=n(75),M=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))},T=function(e){return new Promise((function(t,n){var c=new Image;c.onload=function(){return t(c)},c.onerror=function(e){return n(e)},c.src=e}))},A=function(e){var t=e.onSelfie,n=i.a.useRef(),a=i.a.useState(null),s=Object(h.a)(a,2),r=s[0],o=s[1],l=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.next=3,M(n);case 3:return c=e.sent,e.next=6,T(c);case 6:a=e.sent,o({src:c,meta:{hash:y()(c),width:a.width,height:a.height}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){n.current.value=null,o(null)};return Object(c.jsxs)("span",{className:"selfie-upload-button",children:[Object(c.jsx)(N.a,{onClick:function(){n.current.click()},size:"sm",variant:"outline-primary",children:Object(c.jsx)(z.a,{})}),Object(c.jsx)("input",{type:"file",accept:"image/png, image/jpeg",capture:"user",ref:n,onChange:l,style:{display:"none"}}),r&&Object(c.jsx)(P,{image:r,onCrop:function(e){t(e),j()},onBack:function(){j()}})]})},U=n(76),V=n(36),q=n.n(V),W=(n(57),n.p+"static/media/face-outline.d8b16a1f.svg"),J=function(e){var t=e.onCapture,n=e.onBack,a=i.a.useState(!1),s=Object(h.a)(a,2),r=s[0],o=s[1],l=i.a.useRef(null),j=i.a.useCallback(Object(g.a)(v.a.mark((function e(){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Capture event..."),n=l.current.getScreenshot(),e.next=4,T(n);case 4:c=e.sent,console.log("Image captured (".concat(c.width,"x").concat(c.height,").")),t({src:n,meta:{hash:y()(n),width:c.width,height:c.height}});case 7:case"end":return e.stop()}}),e)}))),[l,t]);return Object(c.jsx)("div",{className:"camera",children:Object(c.jsxs)(L,{isVisible:!0,children:[Object(c.jsxs)("div",{className:"camera-wrapper",children:[Object(c.jsx)(q.a,{audio:!1,mirrored:!0,screenshotFormat:"image/png",videoConstraints:{facingMode:"user",width:{ideal:4096},height:{ideal:2160}},onUserMedia:function(){return o(!0)},ref:l}),Object(c.jsx)("img",{className:"face-outline",src:W,alt:"Face Overlay"})]}),r&&Object(c.jsx)(L.OkButton,{onClick:j,children:Object(c.jsx)(U.a,{})}),Object(c.jsx)(L.BackButton,{onClick:function(){n()},children:Object(c.jsx)(I.a,{})})]})})},K=function(e){var t=e.onSelfie,n=i.a.useState(null),a=Object(h.a)(n,2),s=a[0],r=a[1],o=i.a.useState(null),l=Object(h.a)(o,2),j=l[0],b=l[1],u=function(){switch(j){case"camera":b(null);break;case"cropper":b("camera")}r(null)};return Object(c.jsxs)("span",{className:"selfie-capture-button",children:[Object(c.jsx)(N.a,{onClick:function(){b("camera")},size:"sm",variant:"outline-primary",children:Object(c.jsx)(U.a,{})}),"camera"===j&&Object(c.jsx)(J,{onCapture:function(e){r(e),b("cropper")},onBack:u}),"cropper"===j&&Object(c.jsx)(P,{image:s,onCrop:function(e){t(e),b(null),r(null)},onBack:u})]})},E=(n(58),function(e){var t=e.image,n=i.a.useState(!1),a=Object(h.a)(n,2),s=a[0],r=a[1],o=function(){r(!1)};return Object(c.jsxs)("div",{className:"image-preview",children:[Object(c.jsx)("div",{className:"image-thumbnail",onClick:function(){r(!0)},style:{backgroundImage:'url("'.concat(t.src,'")')}}),s&&Object(c.jsxs)(L,{isVisible:!0,children:[Object(c.jsx)("img",{className:"full-image",src:t.src,alt:"Image Preview",onClick:o}),Object(c.jsx)(L.BackButton,{onClick:o,children:Object(c.jsx)(I.a,{})})]})]})}),H=(n(59),function(e){var t=e.type,n=e.index,a=i.a.useState([]),s=Object(h.a)(a,2),r=s[0],o=s[1],l=function(e){o([].concat(Object(m.a)(r),[e]))},j=r.map((function(e){return Object(c.jsx)(E,{image:e},e.meta.hash)}));return Object(c.jsxs)("div",{className:"person-images",children:[Object(c.jsxs)("div",{className:"type",children:[Object(c.jsx)("span",{children:t}),n&&Object(c.jsxs)("span",{children:[" #",n]})]}),Object(c.jsx)("div",{className:"image-collection",children:j}),Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsx)(A,{onSelfie:l,style:{margin:"10px"}}),Object(c.jsx)(K,{onSelfie:l,style:{margin:"10px"}})]})]})}),G=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:"text-center",children:"Upload"}),Object(c.jsx)(H,{type:"Father"}),Object(c.jsx)(H,{type:"Mother"}),Object(c.jsx)(H,{type:"Son",index:1}),Object(c.jsx)(H,{type:"Son",index:2})]})},Q=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:"text-center",children:"Finish"}),Object(c.jsx)("p",{children:"Strinjaj se z obdelavo podatkov, povdari anonimnost, zahvali se"})]})},X=function(){var e=i.a.useState(1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("section",{className:"contribute",children:[{1:Object(c.jsx)(f,{}),2:Object(c.jsx)(G,{}),3:Object(c.jsx)(Q,{})}[n],Object(c.jsxs)("div",{className:"workflow-buttons",children:[1===n&&Object(c.jsx)(N.a,{variant:"outline-primary",onClick:function(){return a(2)},children:"Contribute"}),n>1&&Object(c.jsx)(N.a,{variant:"outline-secondary",onClick:function(){return a(n-1)},children:"Back"}),2===n&&Object(c.jsx)(N.a,{variant:"outline-primary",onClick:function(){return a(3)},children:"Next"}),3===n&&Object(c.jsx)(N.a,{variant:"outline-primary",onClick:function(){return a(4)},children:"Finish"})]})]})},Y=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Database"}),Object(c.jsx)("p",{children:"info about database, attributes, annotations, number of families, number of faces, ..."})]})},Z=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsx)("p",{children:"about, cite, ..."})]})},$=function(){return Object(c.jsx)("h1",{children:"404"})},_=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j.a,{bg:"light",expand:"lg",collapseOnSelect:!0,children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(j.a.Brand,{as:o.b,to:"/",children:"CommunityFaceKinDB"}),Object(c.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(u.a,{className:"mr-auto",children:[Object(c.jsx)(u.a.Link,{as:o.b,to:"/",children:"Home"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/contribute",children:"Contribute"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/database",children:"Database"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/about",children:"About"})]})})]})}),Object(c.jsx)(b.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(d,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/contribute",children:Object(c.jsx)(X,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/database",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/about",children:Object(c.jsx)(Z,{})}),Object(c.jsx)(l.a,{children:Object(c.jsx)($,{path:"*"})})]})})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),ee()}},[[69,1,2]]]);
//# sourceMappingURL=main.67fbfa69.chunk.js.map