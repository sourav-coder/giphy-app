(this["webpackJsonpgiphy-app"]=this["webpackJsonpgiphy-app"]||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(16),r=n.n(s),i=(n(5),n(3)),u=n(7),o=n.n(u),l=n(17),p=n(18),j=n.n(p),f=n(0),m=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("i",{class:"fas fa-spinner fa-4x fa-spin"})})};n(42).config();var d=function(e){console.log("props: "+e.text);var t=c.a.useState([]),n=Object(i.a)(t,2),s=n[0],r=n[1],u=c.a.useState(!0),p=Object(i.a)(u,2),d=p[0],b=p[1];Object(a.useEffect)((function(){b(!0),function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://api.giphy.com/v1/gifs/search",{params:{api_key:"8hkwhIfm2gdrAnpBGMTeatP6tnLXbCrH",q:e.text,limit:"5"}});case 2:n=t.sent,console.log(n),r(n.data.data),setTimeout((function(){b(!1)}),4e3);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e.text]);return Object(f.jsx)("div",{className:"row",children:d?Object(f.jsx)(m,{}):s.map((function(e){return Object(f.jsx)("div",{className:"gif col-md-2 ",children:Object(f.jsx)("img",{className:"images",src:e.images.original.url})})}))})},b=function(){var e=c.a.useState("Trending"),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("form",{class:"ui form",onSubmit:function(e){var t=document.getElementById("name").value;a(t),e.preventDefault()},children:Object(f.jsxs)("div",{class:"field",children:[Object(f.jsx)("input",{type:"text",name:"name",id:"name",className:"inputTag",placeholder:"Trending"}),Object(f.jsx)("button",{class:"btn btn-outline-primary",type:"submit",children:"Search"})]})}),Object(f.jsx)(d,{text:n})]})},x=function(){return Object(f.jsx)(b,{})};r.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))},5:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.f4a4b239.chunk.js.map