(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5196:function(e,t,i){Promise.resolve().then(i.bind(i,1009))},1009:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(7437),a=i(2265),o=i(4038),c=i(7875),r=i(5271),s=i(4883),l=i(6232),h=i(2627);let d=(0,c.F4)({to:{width:0}}),x=(0,c.F4)({to:{height:0}}),p=o.IR.withName("Splash").create(e=>{let{theme:t}=e;return{splash:{overscrollBehavior:"contain",backgroundColor:t.neutral.containerLowest.hex(),width:"calc(100% + 1280px)",height:"100%",position:"fixed",left:-500,top:0,["@media (max-width: ".concat(1280,"px)")]:{left:0,top:-500,width:"100%",height:"calc(100% + 1280px)"},"&::before":{content:"''",backgroundColor:t.tertiary.accent.hex(),width:500,height:"100%",position:"absolute",bottom:"auto",right:0,["@media (max-width: ".concat(1280,"px)")]:{width:"100%",height:500,bottom:0,right:"auto"}},"&::after":{content:"''",backgroundColor:t.primary.accent.hex(),width:500,height:"100%",position:"absolute",bottom:"auto",right:-250,["@media (max-width: ".concat(1280,"px)")]:{width:"100%",height:500,bottom:-250,right:"auto"}}},splashExit:{animation:"".concat(d," 1280ms ease"),["@media (max-width: ".concat(1280,"px)")]:{animation:"".concat(x," 1280ms ease")}},content:{overflow:"hidden",width:"calc(100% - 1280px)",height:"100%",position:"absolute",top:0,left:500,display:"flex",alignItems:"center",justifyContent:"center",gap:50,["@media (max-width: ".concat(1280,"px)")]:{width:"100%",height:"calc(100% - 1280px)",top:500,left:0,flexDirection:"column-reverse"}},text:{display:"flex",flexDirection:"column",gap:40,width:"50%",height:"fit-content",justifyContent:"flex-end",["@media (max-width: ".concat(1280,"px)")]:{width:"fit-content",height:"50%"}},tagline:{height:"fit-content",display:"flex",flexDirection:"column",gap:10,["@media (max-width: ".concat(1280,"px)")]:{alignItems:"center"},"& > *":{textWrap:"nowrap"}},typewriter:{minHeight:"4rem",display:"block",position:"relative",fontSize:"4rem",fontFamily:"var(--display-font)",color:t.primary.accent.hex(),lineHeight:1,textDecoration:"".concat(t.tertiary.accent.hex()," wavy underline"),textDecorationSkipInk:"none",textUnderlineOffset:"10px"},buttons:{display:"flex",flexWrap:"nowrap",gap:10,["@media (max-width: ".concat(1280,"px)")]:{alignItems:"center",flexDirection:"column"}},portrait:{width:"50%",height:"fit-content",["@media (max-width: ".concat(1280,"px)")]:{width:"fit-content",height:"50%"}}}});function m(e){let{show:t,setShow:i}=e,o=["a Designer.","a Developer.","an Engineer.","a Programmer.","Kalvin Garcia!"],[c,d]=(0,a.useState)(!1),x=(0,a.useCallback)((e,t,i)=>{d(!0),!c&&t<o[i].length?(e.innerHTML+=o[i].charAt(t),setTimeout(()=>x(e,t+1,i),80)):!c&&i<o.length-1&&setTimeout(()=>m(e,o[i].length,i),320)},[c]),m=(0,a.useCallback)((e,t,i)=>{!c&&t>-1?(e.innerHTML=e.innerHTML.slice(0,t),setTimeout(()=>m(e,t-1,i),40)):c||setTimeout(()=>x(e,0,i+1),80)},[c]),{classes:u}=p();return(0,n.jsx)(r.uT,{show:t,enter:"none",exit:u.splashExit,duration:600,children:(0,n.jsx)("div",{className:u.splash,children:(0,n.jsxs)("div",{className:u.content,children:[(0,n.jsx)("div",{className:u.portrait}),(0,n.jsxs)("div",{className:u.text,children:[(0,n.jsxs)("div",{className:u.tagline,children:[(0,n.jsx)(s.Dx,{children:"Hello, I'm..."}),(0,n.jsx)("span",{ref:e=>e?x(e,0,0):console.assert(!e,"Tagline not Rendered"),className:u.typewriter})]}),(0,n.jsxs)("div",{className:u.buttons,children:[(0,n.jsxs)(h.Z,{role:"primary",appearance:"filled",onClick:()=>i(!1),children:[(0,n.jsx)(l.J,{icon:"info"}),(0,n.jsx)(s.__,{children:"Learn More"})]}),(0,n.jsx)(h.Z,{className:u.projectsButton,role:"secondary",appearance:"text",children:(0,n.jsx)(s.__,{children:"My Projects"})})]})]})]})})})}let u=o.IR.create(e=>{let{theme:t}=e;return{homepage:{}}});function f(e){let{}=e,[t,i]=(0,a.useState)(!0),{classes:o}=u();return(0,n.jsxs)("section",{className:o.homepage,children:[(0,n.jsx)(m,{show:t,setShow:i}),(0,n.jsx)(h.Z,{onClick:()=>window.location.href="/projects"})]})}}},function(e){e.O(0,[309,529,349,971,23,744],function(){return e(e.s=5196)}),_N_E=e.O()}]);