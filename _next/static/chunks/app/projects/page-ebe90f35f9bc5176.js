(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{4226:function(e,t,o){var n={"./ai-collections.md":[970,970],"./catalog-demo.md":[6050,50],"./image-processor.md":[6653,653],"./kalvin-portfolio.md":[1174,174],"./micro-R-parser.md":[2290,290],"./mountains-website.md":[3605,517],"./slime-mold-sim.md":[4569,569],"./toy-AES.md":[4232,232],"./toy-food-blog.md":[3776,776],"./urbarch-dashboard.md":[2259,259],"./urbarch-website.md":[8254,254]};function a(e){if(!o.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return o.e(t[1]).then(function(){return o(a)})}a.keys=function(){return Object.keys(n)},a.id=4226,e.exports=a},8123:function(e,t,o){Promise.resolve().then(o.bind(o,9349))},9349:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return z}});var n=o(7437),a=o(2265),i=o(4038),r=o(4883),l=o(6232),c=o(2627);let s=i.IR.withNestedSelectors().create(e=>{let{theme:t}=e;return{table:{textAlign:"left","& .column":{verticalAlign:"top",padding:10},"& tr":{borderBottom:"1pt solid ".concat(t.primary.container.alpha(.2).hexa())},"& tbody :last-child":{borderBottom:"none"}},header:{fontWeight:"bold",color:t.secondary.accent.hex(),position:"relative",zIndex:10,"& th":{backdropFilter:"blur(8px)"}},row:{position:"relative"}}});function d(e){let{className:t,children:o,...i}=e,{cx:r,classes:l}=s({});return(0,n.jsx)("tr",{className:r(l.row,t),...i,children:a.Children.map(o,(e,t)=>(0,n.jsx)("td",{className:"column column-".concat(t),children:e},"column-".concat(t)))})}function m(e){let{className:t,headers:o,children:a,...i}=e,{cx:r,classes:l}=s({});return(0,n.jsxs)("table",{className:r(l.table,t),...i,children:[o?(0,n.jsx)("thead",{className:l.header,children:(0,n.jsx)("tr",{children:o.map((e,t)=>(0,n.jsx)("th",{className:"column column-".concat(t),children:e},"column-".concat(t)))})}):"",(0,n.jsx)("tbody",{children:a})]})}var h=o(4887),u=o(7875),p=o(5271),g=o(9844);let b=(0,u.F4)({"0%":{opacity:0}}),y=(0,u.F4)({"100%":{opacity:0}}),f=(0,u.F4)({"0%":{transform:"translate(0, 1000px)"}}),x=(0,u.F4)({"100%":{transform:"translate(0, 1000px)"}}),v=(0,u.F4)({"0%":{transform:"scale(0.95)"}}),w=(0,u.F4)({"100%":{transform:"scale(0.95)"}}),j=i.IR.create(e=>{let{theme:t,role:o,elevation:n,delay:a}=e;return{modal:{position:"absolute",zIndex:1e3},scrim:{position:"fixed",width:"100%",height:"100%",inset:0,opacity:.75,backgroundColor:t.neutral.shadow.hex()},content:{position:"fixed",width:"80%",height:"80%",maxWidth:1e3,top:"10%",left:"calc((100% - min(80%, 1000px)) / 2)",padding:40,borderRadius:20,overflowX:"hidden",overflowY:"auto",clip:"inset(0 0 0 0 20px)",backgroundColor:t[o]["container".concat("normal"===n?"":n[0].toUpperCase()+n.slice(1))].hex()},fadeIn:{animation:"".concat(b," ").concat(a,"ms ease-out forwards")},fadeOut:{animation:"".concat(y," ").concat(a,"ms ease-in forwards")},slideUp:{animation:"".concat(f," ").concat(a,"ms ease-in-out forwards")},slideDown:{animation:"".concat(x," ").concat(a,"ms ease-in forwards")},zoomIn:{animation:"".concat(v," ").concat(a,"ms ease-in-out forwards")},zoomOut:{animation:"".concat(w," ").concat(a,"ms ease-in forwards"),overflow:"hidden"},lockScroll:{overflow:"hidden"}}});function k(e){let{className:t,role:o="neutral",elevation:i="normal",open:r,setOpen:l,delay:c=300,children:s,...d}=e;"neutral"!=o&&(i="normal");let[m,u]=(0,a.useState)(r);(0,a.useEffect)(()=>{m&&!r?(document.getElementById("root").classList.remove(y.zoomOut),document.getElementById("root").classList.add(y.zoomIn),document.body.classList.remove(y.lockScroll),document.documentElement.classList.remove(y.lockScroll),setTimeout(()=>u(!1)||document.getElementById("root").classList.remove(y.zoomIn),c)):!m&&r&&(document.getElementById("root").classList.add(y.zoomOut),document.body.classList.add(y.lockScroll),document.documentElement.classList.add(y.lockScroll),u(!0))},[r]);let{cx:b,classes:y}=j({role:o,elevation:i,delay:c});return m&&(0,h.createPortal)((0,n.jsx)(g.r,{role:o,type:"container",children:(0,n.jsxs)("div",{className:y.modal,children:[(0,n.jsx)(p.uT,{show:r,enter:y.fadeIn,exit:y.fadeOut,duration:c,children:(0,n.jsx)("div",{className:y.scrim,onClick:()=>l(!1)})}),(0,n.jsx)(p.uT,{show:r,enter:b(y.fadeIn,y.slideUp),exit:b(y.fadeOut,y.slideDown),duration:c,children:(0,n.jsx)("div",{className:b(y.content,t),...d,children:s})})]})}),document.body)}var C=o(8904),S=o(5968);let N=i.IR.create(e=>{let{theme:t}=e;return{codeContainer:{margin:0,width:"100%",overflowX:"scroll",padding:20,borderRadius:20,backgroundColor:t.primary.container.lightness(10).hex(),color:t.primary.accent.lightness(90).hex(),fontSize:"0.75rem",lineHeight:1.5,scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},"\n            & .hljs-doctag,\n            & .hljs-keyword,\n            & .hljs-meta .hljs-keyword,\n            & .hljs-template-tag,\n            & .hljs-template-variable,\n            & .hljs-type,\n            & .hljs-variable.language_ \n        ":{color:t.primary.accent.lightness(60).hex()},"\n            & .hljs-title,\n            & .hljs-title.class_,\n            & .hljs-title.class_.inherited__,\n            & .hljs-title.function_ \n        ":{color:t.secondary.accent.lightness(70).hex()},"\n            .hljs-attr,\n            .hljs-attribute,\n            .hljs-literal,\n            .hljs-meta,\n            .hljs-number,\n            .hljs-operator,\n            .hljs-variable,\n            .hljs-selector-attr,\n            .hljs-selector-class,\n            .hljs-selector-id\n        ":{color:t.secondary.accent.lightness(60).hex()},"\n            & .hljs-regexp,\n            & .hljs-string,\n            & .hljs-meta .hljs-string\n        ":{color:t.tertiary.accent.lightness(60).hex()},"\n            & .hljs-built_in,\n            & .hljs-symbol\n        ":{color:t.tertiary.accent.lightness(90).hex()},"\n            & .hljs-comment\n        ":{color:t.primary.accent.lightness(30).hex()},"\n            & .hljs-subst,\n            & .hljs-punctuation\n        ":{color:t.tertiary.accent.lightness(30).hex()}}}});function F(e){let{className:t,language:o,children:i}=e,[r,l]=(0,a.useState)(void 0);(0,a.useEffect)(()=>{r&&(r.innerHTML=S.Z.highlight(i,{language:o}).value)},[r]);let{cx:c,classes:s}=N();return(0,n.jsx)("pre",{className:c(s.codeContainer,t),children:(0,n.jsx)("code",{ref:e=>l(e)})})}let U=i.IR.create(e=>{let{theme:t}=e;return{title:{marginBottom:40,color:t.primary.accent.hex()},subtitle:{marginBottom:20,color:t.tertiary.accent.hex()},heading:{marginBottom:10,color:t.primary.onContainer.hex()},subheading:{marginBottom:10,color:t.tertiary.onContainer.hex()},button:{display:"inline-flex"},body:{marginBottom:10,opacity:.75},image:{marginBottom:10,width:"100%",height:"100%","& img":{objectPosition:"center",objectFit:"contain"}},code:{marginBottom:10}}});function D(e){let{children:t}=e,{classes:o}=U();return(0,n.jsx)(C.U,{components:{h1(e){let{children:t}=e;return(0,n.jsx)(r.Dx,{className:o.title,children:t})},h2(e){let{children:t}=e;return(0,n.jsx)(r.QE,{className:o.subtitle,children:t})},h3(e){let{children:t}=e;return(0,n.jsx)(r.X6,{className:o.heading,children:t})},h4(e){let{children:t}=e;return(0,n.jsx)(r.pm,{className:o.subheading,children:t})},h5(e){let{children:t}=e,a=t.split(",");return(0,n.jsx)(c.Z,{className:o.button,appearance:"outlined",onClick:()=>setTimeout(()=>window.open(a[1],"_blank"),300),children:(0,n.jsx)(r.__,{children:a[0]})})},p(e){let{children:t}=e;return(0,n.jsx)(r.uT,{className:o.body,children:t})},img(e){let{src:t,alt:a}=e;return t?(0,n.jsx)("div",{className:o.image,children:(0,n.jsx)("img",{src:t,alt:a})}):""},code(e){let{className:t,children:a}=e;return(0,n.jsx)(F,{className:o.code,language:t.replace("language-",""),children:a})},pre(e){let{children:t}=e;return t}},children:t})}let _=i.IR.create(e=>{let{theme:t,role:o,active:n}=e;return{chip:{minWidth:"fit-content",minHeight:"fit-content",maxWidth:"fit-content",maxHeight:"fit-content",position:"relative",overflow:"hidden",padding:"5px 10px",borderRadius:2e3,display:"flex",alignItems:"center",justifyContent:"center",gap:5,fontSize:"0.9rem",backgroundColor:t[n?o:"neutral"][n?"container":"containerHigh"].hex(),"&::after":{content:"''",width:"100%",height:"100%",position:"absolute",inset:0,backgroundColor:t[n?o:"neutral"].onContainer.hex(),opacity:0,transition:"opacity 300ms ease"},"&:hover::after":{opacity:.2}}}});function I(e){let{className:t,role:o="primary",activeDefault:i=!1,onClick:l,children:c,...s}=e,[d,m]=(0,a.useState)(i),h=(0,a.useCallback)(e=>{null==l||l(e),m(!d)},[d]),{cx:u,classes:p}=_({role:o,active:d});return(0,n.jsx)(g.r,{role:d?o:"neutral",type:"container",children:(0,n.jsx)(r.__,{className:u(p.chip,t),onClick:h,...s,children:c})})}var P=JSON.parse('{"z":["Date","Name","Made For","Technologies Used","Links"],"i":[{"directory":"arcadia-engine","name":"Arcadia 2D Game Engine","madeFor":"Fun","technologiesUsed":["C#","OpenGL"],"links":{"github":"https://www.github.com/kalvingarcia/arcadia-engine/"},"completionDate":"","display":false},{"directory":"project-magia","name":"Project Magia","madeFor":"Fun","technologiesUsed":["Python","PyTorch"],"links":{"github":"https://www.github.com/kalvingarcia/project-magia/","deployment":"https://project-magia.kalvin.live/"},"completionDate":"","display":false},{"directory":"database-visualizer","name":"Database Dashboard App","madeFor":"Fun","technologiesUsed":["TypeScript","React Native","C++","PostgresQL"],"links":{"github":"https://www.github.com/kalvingarcia/arcadia-engine/","docs":"https://projects.kalvingarcia.com/database-visualizer/"},"completionDate":"","display":false},{"directory":"kalvin-food-blog","name":"Personal Food Blog","madeFor":"","technologiesUsed":["TypeScript","Next.js","React.js","TSS"],"links":{"github":"https://www.github.com/kalvingarcia/kalvin-food-blog/","deployment":"https://food.kalvingarcia.com/"},"completionDate":"October 2024","display":false},{"directory":"arroz","name":"Arroz React Components","madeFor":"","technologiesUsed":["TypeScript","React.js","React Native","TSS"],"links":{"github":"https://www.github.com/kalvingarcia/arroz/","docs":"https://projects.kalvingarcia.com/arroz"},"completionDate":"September 2024","display":false},{"directory":"camera-product-page","name":"Product Page Proof of Concept","madeFor":"Coalition Interview","technologiesUsed":["HTML","JavaScript","CSS"],"links":{"github":"https://www.github.com/kalvingarcia/camera-product-page/"},"completionDate":"September 2024","display":false},{"directory":"urbarch-dashboard-v2","name":"Urban Archaeology Dashboard v2","madeFor":"Urban Archaeology","technologiesUsed":["JavaScript","React Native","PostgresQL"],"links":{"github":"https://www.github.com/kalvingarcia/urbarch-dashboard-v2/"},"completionDate":"August 2024","display":false},{"directory":"kalvin-portfolio","name":"Personal Website","madeFor":"","technologiesUsed":["JavaScript","Next.js","React.js","TSS"],"links":{"github":"https://www.github.com/kalvingarcia/kalvin-portfolio/","deployment":"https://www.kalvingarcia.com/"},"completionDate":"July 2024","display":true},{"directory":"urbarch-website","name":"Urban Archaeology Website","madeFor":"Urban Archaeology","technologiesUsed":["JavaScript","Next.js","React.js","SCSS","PostgresQL"],"links":{"github":"https://www.github.com/kalvingarcia/urbarch-website/","deployment":"https://urbarch-website.kalvin.live/"},"completionDate":"July 2024","display":true},{"directory":"urbarch-dashboard-v1","name":"Urban Archaeology Dashboard v1","madeFor":"Urban Archaeology","technologiesUsed":["Python","Kivy","KivyMD","PostgresQL"],"links":{"github":"https://www.github.com/kalvingarcia/urbarch-dashboard-v1/"},"completionDate":"June 2024","display":true},{"directory":"catalog-demo","name":"Catalog Demonstration","madeFor":"Urban Archaeology","technologiesUsed":["HTML","CSS","JavaScript"],"links":{"github":"https://www.github.com/kalvingarcia/catalog-demo/","deployment":"https://projects.kalvingarcia.com/catalog-demo/"},"completionDate":"December 2023","display":true},{"directory":"mountains-website","name":"Los Angeles Mountains Website","madeFor":"Coalition Interview","technologiesUsed":["HTML","JavaScript","CSS"],"links":{"github":"https://www.github.com/kalvingarcia/mountains-website/","deployment":"https://projects.kalvingarcia.com/mountains-website/"},"completionDate":"August 2023","display":true},{"directory":"toy-food-blog","name":"Faux Food Blog Homepage","madeFor":"","technologiesUsed":["JavaScript","React.js","Python","Django","CSS"],"links":{"github":"https://www.github.com/kalvingarcia/toy-food-blog/","deployment":"https://projects.kalvingarcia.com/toy-food-blog/"},"completionDate":"August 2023","display":true},{"directory":"ai-collections","name":"AI Project Menagerie","madeFor":"Various","technologiesUsed":["Python","PyTorch"],"links":{"github":"https://www.github.com/kalvingarcia/ai-collection/"},"completionDate":"June 2023","display":true},{"directory":"slime-mold-sim","name":"Physarum Slime Mold Simulation","madeFor":"Fun","technologiesUsed":["C++"],"links":{"github":"https://www.github.com/kalvingarcia/slime-mold-sim/"},"completionDate":"November 2022","display":true},{"directory":"image-processor","name":"Image Processing Webapp","madeFor":"Academic","technologiesUsed":[],"links":{"github":"https://www.github.com/kalvingarcia/image-processor/","deployment":"https://projects.kalvingarcia.com/image-processor/"},"completionDate":"December 2021","display":true},{"directory":"toy-AES","name":"Toy AES Implementation","madeFor":"Academic","technologiesUsed":["C++"],"links":{"github":"https://github.com/kalvingarcia/toy-AES/"},"completionDate":"November 2021","display":true},{"directory":"micro-R-parser","name":"Toy Parser Implementation","madeFor":"Academic","technologiesUsed":["Java","JFlex","CUP"],"links":{"github":"https://github.com/kalvingarcia/mirco-R-parser/"},"completionDate":"October 2021","display":true}]}');let A=i.IR.create(e=>{let{theme:t}=e;return{projects:{padding:40,margin:"auto",width:"100%",maxWidth:1280},backLink:{},list:{width:"100%",marginTop:50,borderCollapse:"collapse","& .column-3":{maxWidth:150},["@media (max-width: ".concat(1e3,"px)")]:{"& .column-3":{display:"none"}},["@media (max-width: ".concat(1200,"px)")]:{"& .column-2":{display:"none"}}},openModal:{cursor:"pointer","&:hover":{color:t.primary.accent.hex()},"& i":{display:"inline-block",fontSize:"1rem"}},technologies:{display:"flex",flexWrap:"wrap",gap:5},links:{display:"flex",gap:5,["@media (max-width: ".concat(600,"px)")]:{flexDirection:"column"}}}});function z(e){let{}=e,[t,i]=(0,a.useState)(!1),[s,h]=(0,a.useState)(""),u=(0,a.useCallback)(async e=>{h((await o(4226)("./".concat(e,".md"))).default),i(!0)},[]),{classes:p}=A();return(0,n.jsxs)("section",{className:p.projects,children:[(0,n.jsxs)(c.Z,{role:"tertiary",appearance:"text",className:p.backLink,onClick:()=>setTimeout(()=>window.location.href="https://www.kalvingarcia.com/",300),children:[(0,n.jsx)(l.J,{icon:"arrow_back"}),(0,n.jsx)(r.__,{children:"kalvingarcia.com"})]}),(0,n.jsx)(r.sS,{children:"Projects"}),(0,n.jsx)(m,{className:p.list,headers:P.z,children:P.i.map((e,t)=>e.display?(0,n.jsxs)(d,{children:[(0,n.jsx)(r.__,{children:e.completionDate}),(0,n.jsxs)(r.__,{className:p.openModal,onClick:()=>u(e.directory),children:[e.name," ",(0,n.jsx)(l.J,{icon:"arrow_outward"})]}),(0,n.jsx)(r.__,{children:e.madeFor}),(0,n.jsx)("div",{className:p.technologies,children:e.technologiesUsed.map((e,t)=>(0,n.jsx)(I,{children:e},e))}),(0,n.jsx)("div",{className:p.links,children:Object.entries(e.links).map(e=>{let[t,o]=e;return(0,n.jsx)(l.Z,{appearance:"text",icon:t,iconClass:"kalvin-icons",onClick:()=>setTimeout(()=>window.open(o,"_blank"),300)},t)})})]},"row-".concat(t)):"")}),(0,n.jsx)(k,{elevation:"highest",open:t,setOpen:i,children:(0,n.jsx)(D,{children:s})})]})}},2627:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var n=o(7437),a=o(2265),i=o(4038),r=o(9844),l=o(8998);let c=i.IR.create(e=>{let{theme:t,role:o,appearance:n,containerRole:a,rippleClass:i}=e;return{button:{outline:"none",border:"outlined"===n?"1pt solid ".concat(t[o].onContainer.hex()):"none",minWidth:"fit-content",minHeight:"fit-content",maxWidth:"fit-content",maxHeight:"fit-content",position:"relative",overflow:"hidden",clipPath:"inset(0 0 0 0 round 2000px)",padding:"10px 20px",borderRadius:2e3,display:"flex",alignItems:"center",justifyContent:"center",gap:5,backgroundColor:"text"===n||"outlined"===n?"transparent":t[o]["filled"===n?"accent":"container"].hex(),"&::after":{content:"''",width:"100%",height:"100%",position:"absolute",inset:0,backgroundColor:"text"===n||"outlined"===n?t[a].onContainer.hex():t[o]["filled"===n?"onAccent":"onContainer"].hex(),opacity:0,transition:"opacity 300ms ease"},"&:hover::after":{opacity:.2},["& .".concat(i)]:{backgroundColor:"text"===n||"outlined"===n?t[a].onContainer.hex():t[o]["filled"===n?"onAccent":"onContainer"].hex()},"& > *":{textWrap:"nowrap"}}}});function s(e){let{className:t,role:o="primary",appearance:i="filled",onMouseDown:s,onMouseUp:d,children:m,...h}=e,{role:u}=(0,r.b)(),{rippleClass:p,rippleExpand:g,rippleFade:b}=(0,l.Z)(),y=(0,a.useCallback)(e=>{g(e),null==s||s(e)},[s]),f=(0,a.useCallback)(e=>{b(e),null==d||d(e)}),{cx:x,classes:v}=c({role:o,appearance:i,containerRole:u,rippleClass:p});return(0,n.jsx)(r.r,{role:o,type:"filled"===i?"accent":"container",children:(0,n.jsx)("button",{className:x(v.button,null!=t?t:""),onMouseDown:y,onMouseUp:f,...h,children:a.Children.map(m,e=>(0,a.cloneElement)(e,{__isInButton:!0}))})})}},4883:function(e,t,o){"use strict";o.d(t,{Dx:function(){return c},QE:function(){return s},X6:function(){return d},__:function(){return u},pm:function(){return m},sS:function(){return l},uT:function(){return h}});var n=o(7437),a=o(4038),i=o(9844);let r=a.IR.create(e=>{let{theme:t,role:o,type:n}=e;return{display:{display:"block",position:"relative",fontSize:"4rem",fontFamily:"var(--display-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()},title:{display:"block",position:"relative",fontSize:"2rem",fontFamily:"var(--title-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()},subtitle:{display:"block",position:"relative",fontSize:"1.75rem",fontFamily:"var(--title-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()},heading:{display:"block",position:"relative",fontSize:"1.5rem",fontFamily:"var(--heading-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()},subheading:{display:"block",position:"relative",fontSize:"1.2rem",fontFamily:"var(--heading-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()},body:{display:"block",position:"relative",fontSize:"1rem",fontFamily:"var(--body-font)",color:t[o]["on".concat(n[0].toUpperCase()+n.slice(1))].hex()}}});function l(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("h1",{className:s(d.display,null!=t?t:""),...a,children:o})}function c(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("h2",{className:s(d.title,null!=t?t:""),...a,children:o})}function s(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("h3",{className:s(d.subtitle,null!=t?t:""),...a,children:o})}function d(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("h4",{className:s(d.heading,null!=t?t:""),...a,children:o})}function m(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("h1",{className:s(d.subheading,null!=t?t:""),...a,children:o})}function h(e){let{className:t,children:o,...a}=e,{role:l,type:c}=(0,i.b)(),{cx:s,classes:d}=r({role:l,type:c});return(0,n.jsx)("p",{className:s(d.body,null!=t?t:""),...a,children:o})}function u(e){let{className:t,children:o,__isInButton:a=!1,...l}=e,{role:c,type:s}=(0,i.b)(),{cx:d,classes:m}=r({role:c,type:s});return(0,n.jsx)("span",{className:d(m.body,null!=t?t:""),...l,children:o})}}},function(e){e.O(0,[309,529,123,473,971,23,744],function(){return e(e.s=8123)}),_N_E=e.O()}]);