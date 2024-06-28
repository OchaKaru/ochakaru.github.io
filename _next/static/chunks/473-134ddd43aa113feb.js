"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{5271:function(e,t,n){n.d(t,{uT:function(){return o}});var r=n(2265);function o(e){var t;let{show:n=!1,enter:o,exit:a,duration:i=300,children:l}=e;if(!o||!a)throw Error("Both enter and exit props need to be defined");let[c,s]=(0,r.useState)(!1),[u,h]=(0,r.useState)("inactive");(0,r.useEffect)(()=>{n&&!c?(h("enter"),s(!0),setTimeout(()=>h("active"),i)):!n&&c&&(h("exit"),setTimeout(()=>s(!1)||h("inactive"),i))},[n,c,i]);let d=r.Children.only(l);return c&&(0,r.cloneElement)(d,{className:[null!==(t=d.props.className)&&void 0!==t?t:"","enter"===u?o:"exit"===u?a:""].join(" ")})}},6232:function(e,t,n){n.d(t,{J:function(){return s},Z:function(){return u}});var r=n(7437),o=n(2265),a=n(4038),i=n(9844),l=n(8998);let c=a.IR.create(e=>{let{theme:t,role:n,type:r,appearance:o,containerRole:a,rippleClass:i,isInButton:l}=e;return{icon:{display:"block",position:"relative",fontSize:l?20:30,color:t[n]["on".concat(r[0].toUpperCase()+r.slice(1))].hex()},iconButton:{outline:"none",border:"outlined"===o?"1pt solid ".concat(t[n]["on".concat(r[0].toUpperCase()+r.slice(1))].hex()):"none",minWidth:"fit-content",minHeight:"fit-content",maxWidth:"fit-content",maxHeight:"fit-content",padding:"10px",position:"relative",overflow:"hidden",clipPath:"inset(0 0 0 0 round 100%)",borderRadius:"100%",display:"flex",justifyContent:"center",gap:5,alignSelf:"flex-start",backgroundColor:"text"===o||"outlined"===o?"transparent":t[n]["filled"===o?"accent":"container"].hex(),"&::after":{content:"''",width:"100%",height:"100%",position:"absolute",inset:0,backgroundColor:"text"===o||"outlined"===o?t[a].onContainer.hex():t[n]["filled"===o?"onAccent":"onContainer"].hex(),opacity:0,transition:"opacity 300ms ease"},"&:hover::after":{opacity:.2},["& .".concat(i)]:{backgroundColor:"text"===o||"outlined"===o?t[a].onContainer.hex():t[n]["filled"===o?"onAccent":"onContainer"].hex()}}}});function s(e){let{className:t,icon:n,iconClass:o="material-icons",__isInButton:a=!1,...l}=e,{role:s,type:u}=(0,i.b)(),{cx:h,classes:d}=c({role:s,type:u,isInButton:a});return(0,r.jsx)("i",{className:h(d.icon,o,null!=t?t:""),...l,children:n})}function u(e){let{className:t,role:n="primary",appearance:a="filled",icon:u,iconClass:h="material-icons",onMouseDown:d,onMouseUp:g,...f}=e,m="filled"===a?"accent":"container",{role:p}=(0,i.b)(),{rippleClass:k,rippleExpand:x,rippleFade:b}=(0,l.Z)(),C=(0,o.useCallback)(e=>{x(e),null==d||d(e)},[d]),y=(0,o.useCallback)(e=>{b(e),null==g||g(e)}),{cx:v,classes:w}=c({role:n,type:m,appearance:a,containerRole:p,rippleClass:k});return(0,r.jsx)(i.r,{role:n,type:m,children:(0,r.jsx)(s,{className:v(w.iconButton,null!=t?t:""),icon:u,iconClass:h,onMouseDown:C,onMouseUp:y,...f})})}},4038:function(e,t,n){n.d(t,{IR:function(){return m},TC:function(){return d},ZP:function(){return k},m0:function(){return f}});var r=n(7437),o=n(5262),a=n.n(o),i=n(2265),l=n(7730),c=n(7875),s=n(1690),u=n.n(s);let h=(0,i.createContext)();function d(){return(0,i.useContext)(h)}let g=(0,i.createContext)();function f(){return(0,i.useContext)(g)}let m=(0,c.Pe)({useContext:()=>({theme:(0,i.useContext)(h).theme})}).tss,p={dark:{accent:80,onAccent:20,container:30,onContainer:90,background:5,surfaceLowest:10,surfaceLow:12.5,surface:15,surfaceHigh:17.5,surfaceHighest:20,onSurface:90,rule:60,shadow:0},light:{accent:40,onAccent:90,container:80,onContainer:10,background:95,surfaceLowest:90,surfaceLow:87.5,surface:85,surfaceHigh:82.5,surfaceHighest:80,onSurface:10,rule:50,shadow:0}};function k(e){let{darkModeDefault:t=!0,themeDefault:n="default",palettePresets:o,setDarkModeCookie:s,setThemeCookie:d,children:f}=e,[m,k]=(0,i.useState)(t),x=(0,i.useCallback)(()=>{null==s||s(!m),k(!m)},[m]),b=(0,i.useRef)({default:{primary:"#011638",secondary:"#364156",tertiary:"#DFF8EB",error:"#F0A49F",neutral:"#CDCDCD"},...o}),C=(0,i.useCallback)((e,t)=>{if(!e||!t)return console.error("The function `addPalette` requires 2 arguments: themeName and paletteObject.");b.current[e]=t},[b]),y=(0,i.useCallback)(e=>{if(!e)return console.error("The function `removePalette` requires 1 argument: themeName.");delete b.current[e]},[b]),v=(0,i.useCallback)((e,t,n)=>{try{let r=u()(t.primary),o=u()(t.secondary),a=u()(t.tertiary),i=u()(t.error),l=u()(t.neutral);return{name:e,primary:{accent:r.lightness(p[n?"dark":"light"].accent),onAccent:r.lightness(p[n?"dark":"light"].onAccent),container:r.lightness(p[n?"dark":"light"].container),onContainer:r.lightness(p[n?"dark":"light"].onContainer)},secondary:{accent:o.lightness(p[n?"dark":"light"].accent),onAccent:o.lightness(p[n?"dark":"light"].onAccent),container:o.lightness(p[n?"dark":"light"].container),onContainer:o.lightness(p[n?"dark":"light"].onContainer)},tertiary:{accent:a.lightness(p[n?"dark":"light"].accent),onAccent:a.lightness(p[n?"dark":"light"].onAccent),container:a.lightness(p[n?"dark":"light"].container),onContainer:a.lightness(p[n?"dark":"light"].onContainer)},error:{accent:i.lightness(p[n?"dark":"light"].accent),onAccent:i.lightness(p[n?"dark":"light"].onAccent),container:i.lightness(p[n?"dark":"light"].container),onContainer:i.lightness(p[n?"dark":"light"].onContainer)},neutral:{background:l.lightness(p[n?"dark":"light"].background),containerLowest:l.lightness(p[n?"dark":"light"].surfaceLowest),containerLow:l.lightness(p[n?"dark":"light"].surfaceLow),container:l.lightness(p[n?"dark":"light"].surface),containerHigh:l.lightness(p[n?"dark":"light"].surfaceHigh),containerHighest:l.lightness(p[n?"dark":"light"].surfaceHighest),onContainer:l.lightness(p[n?"dark":"light"].onSurface),rule:l.lightness(p[n?"dark":"light"].rule),shadow:l.lightness(p[n?"dark":"light"].shadow)}}}catch(e){console.error("While creating a theme an error occured: "+e.message);return}},[]),[w,S]=(0,i.useState)(v(n,b.current[n],m)),j=(0,i.useCallback)(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];try{let n=v(e,b.current[e],m);if(!n)return console.warn("Theme was not created sucessfully. Please ensure your palette object has primary, secondary, tertiary, error, and neutral as properties.");S(n),t&&(null==d||d(e))}catch(e){console.error("While setting a theme an error occured: "+e.message)}},[b,b.current,m]);(0,i.useEffect)(()=>{j(w.name,!1)},[m]);let A={"*":{boxSizing:"border-box",transition:"background-color 300ms ease","&::before, &::after":{boxSizing:"border-box",transition:"opacity 300ms ease, background-color 300ms ease"}},html:{MozTextSizeAdjust:"none",WebkitTextSizeAdjust:"none",textSizeAdjust:"none"},body:{backgroundColor:w.neutral.background.hex(),color:w.neutral.onContainer.hex()},"body, h1, h2, h3, h4, p, figure, blockquote, dl, dd":{margin:0},'ul[role="list"], ol[role="list"]':{listStyle:"none"},"html, body":{position:"relative",width:"100%",minWidth:"100%",maxWidth:"100%",overflowX:"hidden",minHeight:"100vh",lineHeight:1,overscrollBehavior:"none",fontFamily:"var()",fontWeight:"400",fontStyle:"normal"},"h1, h2, h3, h4, button, input, label":{lineHeight:1},"h1, h2, h3, h4":{textWrap:"balance"},a:{"&:not([class])":{textDecorationSkipInk:"auto",color:"currentcolor"}},"img, picture":{maxWidth:"100%",display:"block"},"input, button, textarea, select":{font:"inherit"},textarea:{"&:not([rows])":{minHeight:"10em"}},":target":{scrollMarginBlock:"5ex"},".material-icons":{fontFamily:"var(--material-icons)",fontWeight:"normal",fontStyle:"normal",display:"inline-block",lineHeight:1,textTransform:"none",letterSpacing:"normal",wordWrap:"normal",whiteSpace:"nowrap",direction:"ltr",WebkitFontSmoothing:"antialiased",textRendering:"optimizeLegibility",MosOsxFontSmoothing:"grayscale",fontFeatureSettings:"'liga'"}};return(0,r.jsx)(l.a,{options:{key:"css"},children:(0,r.jsx)(h.Provider,{value:{theme:w,palettes:b.current,changeTheme:j,addPalette:C,removePalette:y},children:(0,r.jsxs)(g.Provider,{value:{darkMode:m,toggleDarkMode:x},children:[(0,r.jsx)(c.nz,{styles:A}),(0,r.jsx)("main",{id:"root",className:a().variable,children:f})]})})})}},9844:function(e,t,n){n.d(t,{b:function(){return i},r:function(){return l}});var r=n(7437),o=n(2265);let a=(0,o.createContext)({role:"neutral",type:"container"});function i(){return(0,o.useContext)(a)}function l(e){let{role:t,type:n,children:o}=e;return(0,r.jsx)(a.Provider,{value:{role:t,type:n},children:o})}},8998:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2265),o=n(7875),a=n(4038);let i=(0,o.F4)({to:{transform:"scale(4)"}}),l=(0,o.F4)({to:{opacity:0}}),c=a.IR.create(()=>({ripple:{position:"fixed",transform:"scale(0)",pointerEvents:"none",borderRadius:"50%",opacity:"0.3",animation:"".concat(i," 1800ms forwards"),"&.ripple-fade":{animation:"".concat(i," 1800ms forwards, ").concat(l," 600ms forwards")}}}));function s(){let{classes:e}=c(),[t]=(0,r.useState)(()=>e.ripple),n=(0,r.useCallback)(e=>{let n=e.currentTarget,r=document.createElement("span"),o=Math.max(n.clientWidth,n.clientHeight),a=o/2;r.style.width=r.style.height="".concat(o,"px"),r.style.left="".concat(e.clientX-a,"px"),r.style.top="".concat(e.clientY-a,"px"),r.classList.add(t);let i=n.getElementsByClassName(t)[0];null==i||i.remove(),n.appendChild(r),e.stopPropagation()},[]),o=(0,r.useCallback)(e=>{let n=e.currentTarget.getElementsByClassName(t)[0];null==n||n.classList.add("ripple-fade"),setTimeout(()=>null==n?void 0:n.remove(),600),e.stopPropagation()},[]);return{rippleClass:t,rippleExpand:n,rippleFade:o}}}}]);