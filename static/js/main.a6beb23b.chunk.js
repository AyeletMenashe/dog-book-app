(this["webpackJsonpdog-book-app"]=this["webpackJsonpdog-book-app"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),i=(n(54),n(21)),j=n(7),b=(n(55),n(93)),o=n(94),l=n(45),d=n(2);function h(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:[Object(d.jsx)(b.a.Brand,{children:Object(d.jsx)(l.a,{icon:"dog"})}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(o.a,{className:"mr-auto",children:[Object(d.jsx)(o.a.Link,{href:"#/",children:"Breeds"}),Object(d.jsx)(o.a.Link,{href:"#About",disabled:!0,children:"About"})]})})]})})}var u=n(88);var O=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{children:Object(d.jsx)("h1",{className:"display-1",children:"404 Not Found"})})})},x=n(14),g=n(89),p=n(90),f=n(95),m=n(91),v=n(92);n(62);function C(e){var t=e.filterText,n=e.handleFilter,c=e.handleChangeImages;return Object(d.jsx)("div",{className:"c-breeds-menubar",children:Object(d.jsxs)(g.a,{className:"justify-content-between","aria-label":"Toolbar with Button groups",children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(p.a.Prepend,{children:Object(d.jsx)(p.a.Text,{children:"Search:"})}),Object(d.jsx)(f.a,{placeholder:"Search actor","aria-label":"Filter",value:t,onChange:n})]}),Object(d.jsxs)(m.a,{"aria-label":"First group",children:[Object(d.jsx)(v.a,{variant:"secondary",onClick:c,children:"Change images"})," "]})]})})}var k=n(17),y=n.n(k),w=n(48),N=function e(t,n){Object(w.a)(this,e),this.id=t,this.name=n},S=n(19),B=n.n(S),F=(n(82),n(96));var I=function(e){var t=e.breed,n=e.changeImage,a=Object(c.useState)("https://www.bil-jac.com/Images/DogPlaceholder.svg"),s=Object(x.a)(a,2),r=s[0],b=s[1],o=Object(c.useState)(""),l=Object(x.a)(o,2),h=l[0],u=l[1],O=Object(j.g)(),g=t.charAt(0).toUpperCase()+t.slice(1);return Object(c.useEffect)((function(){y.a.get("https://dog.ceo/api/breed/"+t+"/images/random").then((function(e){var t=e.data.message;b(t)}))}),[t,n]),h?Object(d.jsx)(j.a,{to:"/breeds/"+h}):Object(d.jsxs)(F.a,{className:"c-breedcard",children:[Object(d.jsx)(F.a.Title,{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)(i.b,{to:"/breeds/"+t,children:g})}),Object(d.jsx)("img",{src:r,alt:t,onClick:function(){O.push("/breeds/"+t),u("/breeds/"+t)}})]})};function L(e){var t=e.breedsList,n=e.changeImage;return Object(d.jsx)(S.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(d.jsx)(B.a,{columnsCount:3,gutter:"10px",children:t.map((function(e,t){return Object(d.jsx)(I,{breed:e.name,changeImage:n,style:{width:"100%",display:"block"},children:" "},t)}))})})}var T=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(x.a)(s,2),i=r[0],j=r[1];Object(c.useEffect)((function(){y.a.get("https://dog.ceo/api/breeds/list/all").then((function(e){a(Object.keys(e.data.message).map((function(e,t){return new N(t,e)})))}))}),[]);var b=Object(c.useState)(""),o=Object(x.a)(b,2),l=o[0],h=o[1],O=n.filter((function(e){return!l||e.name.toLowerCase().includes(l.toLowerCase())}));return Object(d.jsx)("div",{className:"p-breads",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(C,{filterText:l,handleFilter:function(e){var t=e.target.value;h(t)},handleChangeImages:function(){return j(!i)}}),Object(d.jsx)(u.a,{children:Object(d.jsx)(L,{breedsList:O,changeImage:i})})]})})};n(85);function P(e){var t=e.images;return Object(d.jsx)(S.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(d.jsx)(B.a,{columnsCount:3,gutter:"10px",children:t.map((function(e,t){return Object(d.jsx)("img",{src:e,alt:"",onClick:function(){return function(e){var t=window.open(e.image,"_blank","noopener,noreferrer");t&&(t.opener=null)}({image:e})},style:{width:"100%",display:"block"}},t)}))})})}function A(){var e=Object(j.h)().breed,t=Object(c.useState)(),n=Object(x.a)(t,2),a=n[0],s=n[1],r=e.charAt(0).toUpperCase()+e.slice(1);return Object(c.useEffect)((function(){y.a.get("https://dog.ceo/api/breed/"+e+"/images").then((function(e){var t=e.data.message;s(t)}))}),[e]),a?Object(d.jsxs)("div",{className:"p-breed",children:[Object(d.jsx)("div",{className:"display-3 headline",children:r}),Object(d.jsx)(u.a,{children:Object(d.jsx)(P,{images:a})})]}):Object(d.jsx)("div",{})}var E=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{children:Object(d.jsx)("span",{className:"header-text",children:"Dog-Book"})}),Object(d.jsx)(h,{}),Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{exact:!0,path:"/",children:Object(d.jsx)(T,{})}),Object(d.jsx)(j.b,{exact:!0,path:"/Breeds",children:Object(d.jsx)(T,{})}),Object(d.jsx)(j.b,{exact:!0,path:"/breeds/:breed",children:Object(d.jsx)(A,{})}),Object(d.jsx)(j.b,{path:"*",children:Object(d.jsx)(O,{})})]})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),D()}},[[86,1,2]]]);
//# sourceMappingURL=main.a6beb23b.chunk.js.map