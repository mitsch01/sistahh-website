exports.id=965,exports.ids=[965],exports.modules={7250:(e,t,s)=>{Promise.resolve().then(s.bind(s,2909))},1754:(e,t,s)=>{Promise.resolve().then(s.bind(s,471))},2758:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3219,23)),Promise.resolve().then(s.t.bind(s,4863,23)),Promise.resolve().then(s.t.bind(s,5155,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,6313,23)),Promise.resolve().then(s.t.bind(s,8530,23)),Promise.resolve().then(s.t.bind(s,8921,23))},2494:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6959,23)),Promise.resolve().then(s.t.bind(s,3875,23)),Promise.resolve().then(s.t.bind(s,1284,23)),Promise.resolve().then(s.t.bind(s,4178,23)),Promise.resolve().then(s.t.bind(s,6013,23)),Promise.resolve().then(s.t.bind(s,7190,23)),Promise.resolve().then(s.t.bind(s,1365,23))},8924:(e,t,s)=>{"use strict";s.d(t,{S:()=>l,a:()=>i});var r=s(5512),n=s(8009);let a=(0,n.createContext)(),i=({children:e})=>{let[t,s]=(0,n.useState)(!1);return(0,r.jsx)(a.Provider,{value:{consentGiven:t,setConsentGiven:s},children:e})},l=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useConsent must be used within a ConsentProvider");return e}},471:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(5512),n=s(8009),a=s(8924);s(6080);var i=s(7897),l=s(6008);function o({text:e,path:t}){return(0,r.jsx)(l.default,{href:t,className:"hover:text-[#FFF8B2]",children:e})}var c=s(5103);function d(){let[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(0),[i,d]=(0,n.useState)(!1),[h,x]=(0,n.useState)(0),[m,u]=(0,n.useState)(!1),b=()=>{u(e=>!e)};return(0,r.jsxs)("header",{className:"sticky top-0 z-20 bg-black backdrop-blur-lg text-2xl",children:[(0,r.jsx)("div",{className:`absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent transition-all duration-300 ${e?"-bottom-12":"-bottom-16"}`}),(0,r.jsxs)("div",{className:"lg:max-w-[796px] md:px-12 lg:px-0 flex items-center justify-between mx-auto relative",children:[(0,r.jsxs)("div",{className:"hidden md:flex space-x-7 text-[0.9em]",children:[(0,r.jsx)(o,{text:"Home",path:"/"}),(0,r.jsx)(o,{text:"Concerts",path:"/#concerts"})]}),(0,r.jsxs)("div",{className:"flex justify-center flex-1",children:[!e&&(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)(c.default,{src:"/images/Sistahh_Stern_All_gelb.png",alt:"SISTAHH Logo",width:200,height:200,className:"cursor-pointer priority w-40 md:w-52"})}),e&&(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)(c.default,{src:"/images/Sistahh_Stern_gelb.png",alt:"SISTAHH Logo",width:100,height:100,style:{transform:`rotate(${s}deg)`,transition:"transform 0.1s ease-out"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"cursor-pointer"})})]}),(0,r.jsxs)("div",{className:"hidden md:flex space-x-7 text-[0.9em]",children:[(0,r.jsx)(o,{id:"about",text:"About",path:"/#about",onClick:e=>{e.preventDefault(),console.log("About link clicked!"),scrollToSection()}}),(0,r.jsx)(o,{text:"Contact",path:"/contact"})]}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsx)("button",{onClick:b,className:"absolute right-5 top-5 text-2xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent",children:(0,r.jsx)("i",{className:"fas fa-bars"})})})]}),m&&(0,r.jsxs)("div",{className:"fixed inset-0 z-30 bg-black flex flex-col items-center justify-center text-center h-screen",children:[(0,r.jsx)("button",{onClick:b,className:"absolute top-5 right-5 text-3xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent",children:(0,r.jsx)("i",{className:"fas fa-times"})}),(0,r.jsxs)("nav",{className:"flex flex-col space-y-5 text-2xl",children:[(0,r.jsx)(l.default,{href:"/",onClick:b,className:"hover:underline",children:"Home"}),(0,r.jsx)(l.default,{href:"/#concerts",onClick:b,className:"hover:underline",children:"Concerts"}),(0,r.jsx)(l.default,{href:"/#about",onClick:b,className:"hover:underline",children:"About"}),(0,r.jsx)(l.default,{href:"/contact",onClick:b,className:"hover:underline",children:"Contact"})]})]})]})}function h(){return(0,r.jsx)("footer",{children:(0,r.jsxs)("div",{className:"mx-auto max-w-4xl text-center text-sm mt-20 mb-16",children:[(0,r.jsx)("nav",{className:"footer-menu-container mb-4",children:(0,r.jsxs)("ul",{className:"footer-menu flex justify-center",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"m-4 hover:underline",href:"/datenschutz",children:"Datenschutz"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"m-4 hover:underline",href:"/impressum",children:"Impressum"})})]})}),(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Anne Niemann"]})]})})}function x(){return(0,r.jsxs)("div",{className:"z-50 flex flex-col items-center gap-2 sm:gap-3 fixed right-4 bottom-8 lg:top-[43vh] text-2xl sm:text-3xl",children:[(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCBeoLwuD9m6imyYmj6elDGw",children:(0,r.jsx)("i",{className:"fa-brands fa-youtube text-white hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent"})}),(0,r.jsx)("a",{href:"https://www.instagram.com/sista.hh/",target:"blank",rel:"noopener noreferrer",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram text-white hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent"})}),(0,r.jsx)("a",{href:"https://www.facebook.com/sistahh.ladiespopchoir",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook-f text-white hover:scale-2"})})]})}function m({children:e}){return(0,r.jsx)(a.a,{children:(0,r.jsx)(u,{children:e})})}s(919);let u=({children:e})=>{let{consentGiven:t,setConsentGiven:s}=(0,a.S)(),[l,o]=(0,n.useState)(!1),[c,m]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=localStorage.getItem("cookieConsent");"true"===e?(s(!0),o(!1),m(!1)):"false"===e?(s(!1),o(!1),m(!1)):(o(!0),m(!0))},[s]),(0,r.jsx)("html",{lang:"en",children:(0,r.jsxs)("body",{children:[(0,r.jsx)(i.A,{isOpen:l,disableCloseOutsideClick:!0,message:"Wir nutzen nur notwendige Technologien auf dieser Website. F\xfcr YouTube setzen wir einen zus\xe4tzlichen Cookie. Einverstanden?",icon:"fas fa-cookie-bite",acceptText:"Logisch",declineText:"Ohne Videos",handleAccept:()=>{localStorage.setItem("cookieConsent","true"),s(!0),o(!1),m(!1)},handleDecline:()=>{localStorage.setItem("cookieConsent","false"),s(!1),o(!1),m(!1)}}),(0,r.jsx)("div",{className:`${c?"backdrop-blur-lg":""}`,children:(0,r.jsxs)("div",{className:"relative bg-custom-pattern bg-cover bg-center min-h-screen",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg"}),(0,r.jsxs)("div",{className:"relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white",children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(h,{})]})]})}),(0,r.jsx)(x,{})]})})}},7897:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var r=s(5512);function n({isOpen:e,onClose:t,message:s,icon:n,acceptText:a,declineText:i,handleAccept:l,handleDecline:o,disableCloseOutsideClick:c=!1}){return e?(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",onClick:e=>{!c&&t&&t()},children:(0,r.jsxs)("div",{className:"bg-white rounded-md p-6 w-5/6 sm:w-1/2 max-w-96",onClick:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"flex items-center justify-center mb-4",children:[(0,r.jsx)("i",{className:`fa-3x ${n} bg-heading-gradient bg-clip-text text-transparent`})," "]}),(0,r.jsx)("p",{className:"text-center text-gray-700",children:s}),(a||i)&&(0,r.jsxs)("div",{className:"flex justify-center space-x-4 mt-4",children:[a&&(0,r.jsx)("button",{className:"bg-gray-800 hover:bg-gray-600 text-white px-8 py-2 rounded",onClick:l,children:a}),i&&(0,r.jsx)("button",{className:"bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded",onClick:o,children:i})]})]})}):null}s(8009),s(919)},2909:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/miriamschwartz/sistahh-website/app/layout.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/miriamschwartz/sistahh-website/app/layout.jsx","default")},6080:()=>{}};