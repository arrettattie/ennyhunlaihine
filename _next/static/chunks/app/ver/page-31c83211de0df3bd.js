(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{4357:function(e,a,t){Promise.resolve().then(t.bind(t,7858))},7858:function(e,a,t){"use strict";t.r(a);var n=t(7437),c=t(3005),s=t(4033),i=t(2265),r=t(5251);t(9222);var o=t(8763);a.default=()=>{let e=(0,s.useRouter)(),a=(0,s.useSearchParams)(),t=a.get("temporada"),l=a.get("ver"),p=a.get("id");if(t&&l&&p){let[a,s]=(0,i.useState)(!0),[_,d]=(0,i.useState)(!1),[m,u]=(0,i.useState)(),[y,g]=(0,i.useState)();return((0,i.useEffect)(()=>{c.V.get("/".concat(t,"/").concat(l,".json")).then(a=>{let t=a.data.content.find(e=>e.contentId==p);u(t),t?s(!1):e.push("/")})},[]),a)?(0,n.jsx)(r.a,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:"LQSA ".concat(m.season,"x").concat(m.contentId,' "').concat(m.title,'" - La Que Se Avecina')}),(0,n.jsx)("meta",{name:"description",content:"Episodio ".concat(m.contentId," de la Temporada ").concat(m.season," de La Que Se Avecina entero en HD. Cap\xedtulo ").concat(m.season,"x").concat(m.contentId,' "').concat(m.title,'".')}),(0,n.jsx)("meta",{name:"og:title",content:"LQSA ".concat(m.season,"x").concat(m.contentId,' "').concat(m.title,'" - La Que Se Avecina')}),(0,n.jsx)("meta",{name:"og:image",content:m.image}),(0,n.jsx)("meta",{name:"twitter:image",content:m.image}),(0,n.jsx)("meta",{name:"og:description",content:"Episodio ".concat(m.contentId," de la Temporada ").concat(m.season," de La Que Se Avecina entero en HD. Cap\xedtulo ").concat(m.season,"x").concat(m.contentId,' "').concat(m.title,'".')}),(0,n.jsx)(o.I,{content:m})]})}(0,i.useEffect)(()=>e.push("/"),[])}},5251:function(e,a,t){"use strict";t.d(a,{a:function(){return i}});var n=t(7437),c=t(7154),s=t.n(c);let i=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:s().loader,children:" "})})},8763:function(e,a,t){"use strict";t.d(a,{I:function(){return m}});var n=t(7437),c=t(2265),s=t(1260),i=t.n(s),r=t(9222),o=t(8475),l=t.n(o),p=t(9593),_=t.n(p);let d=e=>{let{url:a,setVideoUrl:t,twitch:c}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("head",{children:(0,n.jsx)(l(),{async:!0,src:"/embed/embed.js"})}),(0,n.jsx)("iframe",{id:"player",className:_().videoplayer,src:a,frameBorder:"0",allowFullScreen:!0}),(0,n.jsx)("div",{className:"close_player",children:(0,n.jsx)("img",{className:_().close_icon,src:"/static/icons/close.svg",onClick:()=>t(!1)})})]})},m=e=>{let{content:a,is_live:t}=e,[s,o]=(0,c.useState)(!1),[l,p]=(0,c.useState)(!1),[_,m]=(0,c.useState)(),u=async()=>{let e=await r.Z.get("https://back.laisla.pm/api/key").then(e=>e.data);return e.secret1},y=async()=>{o(!0);let e=async()=>{let e=await u();m("/embed/index.html?u=".concat(a.video.normal+"?"+await e,"&i=").concat(a.image||a.cover)),o(!1)},t=async()=>{for(let e of a.video.backup.filter(e=>!0===e.enable)){let a=await r.Z.get("https://back.laisla.pm/api/health?i=".concat(e.url)).then(e=>e.data);if(2===a.result);else if(1===a.result){o(!1),p(!0);break}else{m(e.url),o(!1);break}}};a.app?(o(!1),p(!0)):a.twitch?m(a.twitch):a.video.normal?e():t()};return _?(0,n.jsx)(d,{url:_,setVideoUrl:m,twitch:!!a.twitch}):(0,n.jsxs)("section",{className:i().play,children:[(0,n.jsx)("div",{className:i().image,children:(0,n.jsx)("img",{src:a.image||a.cover,className:i().backgroundImage})}),(0,n.jsxs)("div",{className:i().video_info,children:[!l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:i().play_btn,onClick:y,children:(0,n.jsx)("object",{className:s?i().spinner:i().play_icon,type:"image/svg+xml",data:"/static/icons/".concat(s?"spinner":"play",".svg")})}),(0,n.jsx)("h1",{className:i().video_title,children:a.title})]}),l&&(0,n.jsx)("div",{className:i().download_app,children:(0,n.jsx)("p",{className:i().warning_app_title,children:a.custom_error?a.custom_error:"Actualmente este contenido no se encuentra disponible"})})]})]})}},3005:function(e,a,t){"use strict";t.d(a,{V:function(){return c}});var n=t(9222);let c=n.Z.create({baseURL:"https://api.lqsa.online/data"})},7154:function(e){e.exports={loader:"loader_loader__F_hDg",spinner:"loader_spinner__qosHm"}},9593:function(e){e.exports={videoplayer:"player_videoplayer__i_D7i",close_icon:"player_close_icon__bugWk"}},1260:function(e){e.exports={play:"pre-player_play__ma4kl",image:"pre-player_image__0PawT",backgroundImage:"pre-player_backgroundImage__PyD7i",video_info:"pre-player_video_info__xCOys",video_title:"pre-player_video_title__g7mRr",video_season:"pre-player_video_season__KX27m",play_btn:"pre-player_play_btn__Z2sb5",play_icon:"pre-player_play_icon__ez6V1",spinner:"pre-player_spinner___p4em",videoplayer:"pre-player_videoplayer__ORuwS",download_app:"pre-player_download_app__yfV9n",warning_app_title:"pre-player_warning_app_title__qZg88",app_btn:"pre-player_app_btn__F3dKs",cta_app:"pre-player_cta_app__n_9i3",mac_app_btn:"pre-player_mac_app_btn__eBFQd",win_app_btn:"pre-player_win_app_btn__Ugibe"}}},function(e){e.O(0,[750,124,971,596,744],function(){return e(e.s=4357)}),_N_E=e.O()}]);