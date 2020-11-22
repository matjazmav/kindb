(this["webpackJsonpkindb-survey-ui"]=this["webpackJsonpkindb-survey-ui"]||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(18),r=n.n(s),o=(n(46),n(16)),l=n(7),j=(n(47),n(78)),b=n(77),u=n(79),d=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"CommunityFaceKinDB"}),Object(c.jsx)("p",{children:"Database of facial images colleced by community annotated with kinship attributes."})]})},h=n(9),x=(n(48),n(71)),O=function(e){var t=e.onNext;return Object(c.jsxs)("section",{className:"text-justify",children:[Object(c.jsx)("h2",{className:"text-center",children:"Intro"}),Object(c.jsxs)("p",{children:["One of the critical steps in ",Object(c.jsx)("b",{children:"machine learning"})," / ",Object(c.jsx)("b",{children:"artificial intelligence"})," is obtaining large and qualitative dataset. To provide such dataset to the ",Object(c.jsx)("b",{children:"research community"}),", we are kindly asking you for your contribution. Please take ",Object(c.jsx)("b",{children:"5 minutes"})," and contribute to our dataset."]}),Object(c.jsxs)("p",{children:["We are tackling the problem of a ",Object(c.jsx)("b",{children:"kinship"})," recognition, verification and synthesis of the ",Object(c.jsx)("b",{children:"facial images"}),". While some similar dataset already exists, the ",Object(c.jsx)("b",{children:"quality"})," of images is ",Object(c.jsx)("b",{children:"poor"}),"."]}),"Properties of high quality image are:",Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["The image contain ",Object(c.jsx)("b",{children:"only single face"})]}),Object(c.jsx)("li",{children:"Resolution of the facial area is big as possible"}),Object(c.jsx)("li",{children:"Face is possioned directly to the camera"}),Object(c.jsx)("li",{children:"Whole face is visible"})]}),Object(c.jsx)("div",{className:"workflow-buttons",children:Object(c.jsx)(x.a,{variant:"outline-primary",onClick:t,children:"Contribute"})})]})},f=n(40),m=n(19),p=n.n(m),v=n(24),g=n(17),k=n.n(g),y=n(34),C=(n(52),n(53),n(32)),N=n(4),w=n.n(N),B=(n(54),n(72)),S=function(e){var t=e.text;return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(B.a,{animation:"border",role:"status"}),Object(c.jsx)("br",{}),null!==t&&void 0!==t?t:"Loading..."]})},F=function(e){var t=e.children,n=e.isVisible;return Object(c.jsxs)("div",{className:w()({activity:!0,invisible:!n}),children:[Object(c.jsx)(D,{}),t]})},D=function(){return Object(c.jsx)("div",{className:"activity-spinner",children:Object(c.jsx)(S,{})})};F.OkButton=function(e){return Object(c.jsx)(x.a,Object(C.a)({className:"activity-btn activity-ok-btn"},e))},F.BackButton=function(e){return Object(c.jsx)(x.a,Object(C.a)({className:"activity-btn activity-back-btn",variant:"secondary"},e))};var I=F,L=n(73),P=n(74),R=function(e){var t=e.image,n=e.onCrop,a=e.onBack,s=i.a.useRef(null);return Object(c.jsx)("div",{className:"face-cropper",children:Object(c.jsx)(I,{isVisible:!0,children:t&&[Object(c.jsx)(y.a,{src:t.src,initialAspectRatio:1,guides:!1,autoCrop:!0,ref:s,dragMode:"crop",movable:!1,rotatable:!1,scalable:!1,zoomable:!1},"cropper"),Object(c.jsx)(I.OkButton,{onClick:function(){console.log("Crop event...");var e=null===s||void 0===s?void 0:s.current,t=null===e||void 0===e?void 0:e.cropper,c=t.getCropBoxData(),a=c.width,i=c.height,r=t.getCroppedCanvas().toDataURL();console.log("Cropped image (".concat(a,"x").concat(i,").")),n({src:r,meta:{hash:k()(r),width:a,height:i}})},children:Object(c.jsx)(L.a,{})},"ok-btn"),Object(c.jsx)(I.BackButton,{onClick:a,children:Object(c.jsx)(P.a,{})},"back-btn")]})})},T=n(75),M=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))},A=function(e){return new Promise((function(t,n){var c=new Image;c.onload=function(){return t(c)},c.onerror=function(e){return n(e)},c.src=e}))},U=function(e){var t=e.onSelfie,n=i.a.useRef(),a=i.a.useState(null),s=Object(h.a)(a,2),r=s[0],o=s[1],l=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.next=3,M(n);case 3:return c=e.sent,e.next=6,A(c);case 6:a=e.sent,o({src:c,meta:{hash:k()(c),width:a.width,height:a.height}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){n.current.value=null,o(null)};return Object(c.jsxs)("span",{className:"selfie-upload-button",children:[Object(c.jsx)(x.a,{onClick:function(){n.current.click()},size:"sm",variant:"outline-primary",children:Object(c.jsx)(T.a,{})}),Object(c.jsx)("input",{type:"file",accept:"image/png, image/jpeg",capture:"user",ref:n,onChange:l,style:{display:"none"}}),r&&Object(c.jsx)(R,{image:r,onCrop:function(e){t(e),j()},onBack:function(){j()}})]})},V=n(76),W=n(36),q=n.n(W),z=(n(57),n.p+"static/media/face-outline.d8b16a1f.svg"),J=function(e){var t=e.onCapture,n=e.onBack,a=i.a.useState(!1),s=Object(h.a)(a,2),r=s[0],o=s[1],l=i.a.useRef(null),j=i.a.useCallback(Object(v.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Capture event..."),n=l.current.getScreenshot(),e.next=4,A(n);case 4:c=e.sent,console.log("Image captured (".concat(c.width,"x").concat(c.height,").")),t({src:n,meta:{hash:k()(n),width:c.width,height:c.height}});case 7:case"end":return e.stop()}}),e)}))),[l,t]);return Object(c.jsx)("div",{className:"camera",children:Object(c.jsxs)(I,{isVisible:!0,children:[Object(c.jsxs)("div",{className:"camera-wrapper",children:[Object(c.jsx)(q.a,{audio:!1,mirrored:!0,screenshotFormat:"image/png",videoConstraints:{facingMode:"user"},onUserMedia:function(){return o(!0)},ref:l}),Object(c.jsx)("img",{className:"face-outline",src:z,alt:"Face Overlay"})]}),r&&Object(c.jsx)(I.OkButton,{onClick:j,children:Object(c.jsx)(V.a,{})}),Object(c.jsx)(I.BackButton,{onClick:function(){n()},children:Object(c.jsx)(P.a,{})})]})})},K=function(e){var t=e.onSelfie,n=i.a.useState(null),a=Object(h.a)(n,2),s=a[0],r=a[1],o=i.a.useState(null),l=Object(h.a)(o,2),j=l[0],b=l[1],u=function(){switch(j){case"camera":b(null);break;case"cropper":b("camera")}r(null)};return Object(c.jsxs)("span",{className:"selfie-capture-button",children:[Object(c.jsx)(x.a,{onClick:function(){b("camera")},size:"sm",variant:"outline-primary",children:Object(c.jsx)(V.a,{})}),"camera"===j&&Object(c.jsx)(J,{onCapture:function(e){r(e),b("cropper")},onBack:u}),"cropper"===j&&Object(c.jsx)(R,{image:s,onCrop:function(e){t(e),b(null),r(null)},onBack:u})]})},E=(n(58),function(e){var t=e.image,n=i.a.useState(!1),a=Object(h.a)(n,2),s=a[0],r=a[1],o=function(){r(!1)};return Object(c.jsxs)("div",{className:"image-preview",children:[Object(c.jsx)("div",{className:"image-thumbnail",onClick:function(){r(!0)},style:{backgroundImage:'url("'.concat(t.src,'")')}}),s&&Object(c.jsxs)(I,{isVisible:!0,children:[Object(c.jsxs)("div",{className:"full-image",children:[Object(c.jsx)("img",{src:t.src,alt:"Image Preview",onClick:o}),Object(c.jsx)("div",{className:"meta",children:Object(c.jsxs)("div",{children:[t.meta.width," x ",t.meta.height]})})]}),Object(c.jsx)(I.BackButton,{onClick:o,children:Object(c.jsx)(P.a,{})})]})]})}),H=(n(59),function(e){var t=e.type,n=e.index,a=i.a.useState([]),s=Object(h.a)(a,2),r=s[0],o=s[1],l=function(e){o([].concat(Object(f.a)(r),[e]))},j=r.map((function(e){return Object(c.jsx)(E,{image:e},e.meta.hash)}));return Object(c.jsxs)("div",{className:"person-images",children:[Object(c.jsxs)("div",{className:"type",children:[Object(c.jsx)("span",{children:t}),n&&Object(c.jsxs)("span",{children:[" #",n]})]}),Object(c.jsx)("div",{className:"image-collection",children:j}),Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsx)(U,{onSelfie:l,style:{margin:"10px"}}),Object(c.jsx)(K,{onSelfie:l,style:{margin:"10px"}})]})]})}),G=function(e){var t=e.onBack,n=e.onNext;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:"text-center",children:"Upload"}),Object(c.jsx)("p",{children:"Please provide at least one facial image per person (father, mother and one or more children). Images provided on this step are stored only on your device."}),Object(c.jsx)(H,{type:"Father"}),Object(c.jsx)(H,{type:"Mother"}),Object(c.jsx)(H,{type:"Son",index:1}),Object(c.jsx)(H,{type:"Son",index:2}),Object(c.jsx)("p",{children:"On the next step you can review your provided images and finish the contribution process."}),Object(c.jsxs)("div",{className:"workflow-buttons",children:[Object(c.jsx)(x.a,{variant:"outline-secondary",onClick:t,children:"Back"}),Object(c.jsx)(x.a,{variant:"outline-primary",onClick:n,children:"Next"})]})]})},Q=function(e){var t=e.onBack,n=e.onNext,a=i.a.useState(!1),s=Object(h.a)(a,2),r=s[0],o=s[1];return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:"text-center",children:"Finish"}),Object(c.jsx)("p",{children:"With click on the finish button your provided images will be uploaded to our dataset."}),Object(c.jsx)("input",{type:"checkbox",onChange:function(e){o(e.target.checked)}})," I consent with terms and conditions.",Object(c.jsxs)("div",{className:"workflow-buttons",children:[Object(c.jsx)(x.a,{variant:"outline-secondary",onClick:t,children:"Back"}),Object(c.jsx)(x.a,{variant:"outline-primary",onClick:n,disabled:!r,children:"Finish"})]})]})},X=function(e){var t=e.onNext;return Object(c.jsxs)("section",{className:"text-center",children:[Object(c.jsx)("h2",{children:"Thank you"}),Object(c.jsx)("p",{children:"Thank your for your contribution."}),Object(c.jsx)("div",{className:"workflow-buttons",children:Object(c.jsx)(x.a,{variant:"outline-primary",onClick:t,children:"Close"})})]})},Y=function(){var e=i.a.useState(1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)("section",{className:"contribute",children:{1:Object(c.jsx)(O,{onNext:function(){return a(2)}}),2:Object(c.jsx)(G,{onNext:function(){return a(3)},onBack:function(){return a(1)}}),3:Object(c.jsx)(Q,{onNext:function(){a(4)},onBack:function(){return a(2)}}),4:Object(c.jsx)(X,{onNext:function(){return a(1)}})}[n]})},Z=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Database"}),Object(c.jsx)("p",{children:"info about database, attributes, annotations, number of families, number of faces, ..."})]})},$=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsx)("p",{children:"about, cite, ..."})]})},_=function(){return Object(c.jsx)("h1",{children:"404"})},ee=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j.a,{bg:"light",expand:"lg",collapseOnSelect:!0,children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(j.a.Brand,{as:o.b,to:"/",children:"CommunityFaceKinDB"}),Object(c.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(u.a,{className:"mr-auto",children:[Object(c.jsx)(u.a.Link,{as:o.b,to:"/",children:"Home"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/contribute",children:"Contribute"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/database",children:"Database"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"/about",children:"About"})]})})]})}),Object(c.jsx)(b.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(d,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/contribute",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/database",children:Object(c.jsx)(Z,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/about",children:Object(c.jsx)($,{})}),Object(c.jsx)(l.a,{children:Object(c.jsx)(_,{path:"*"})})]})})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ee,{})}),document.getElementById("root")),te()}},[[69,1,2]]]);
//# sourceMappingURL=main.f47a25e4.chunk.js.map