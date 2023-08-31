(function(w,e,K,D,x,B,O,y,N,C){"use strict";const W=y.findByStoreName("ThemeStore"),J=y.findByProps("colors","meta"),{TextStyleSheet:Q}=y.findByProps("TextStyleSheet"),{View:k,Text:I,Pressable:Z}=x.General;y.find(function(t){return t.render?.name==="ActionSheet"}),y.findByProps("openLazy","hideActionSheet"),y.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),y.findByName("Navigator"),y.findByProps("getRenderCloseButton"),y.findByProps("popModal","pushModal");function ee(t){return J.meta.resolveSemanticColor(W.theme,t)}function te(t){let{title:R,onPress:i,icon:o}=t;const n=e.stylesheet.createThemedStyleSheet({androidRipple:{color:N.semanticColors.ANDROID_RIPPLE},icon:{height:18,tintColor:N.semanticColors.HEADER_SECONDARY,opacity:.5}}),l=i?Z:k;return e.React.createElement(l,{android_ripple:n.androidRipple,disabled:!1,accessibilityRole:"button",onPress:i,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},o&&e.React.createElement(k,{style:{marginRight:4}},e.React.createElement(e.ReactNative.Image,{style:n.icon,source:o,resizeMode:"contain"})),e.React.createElement(h,{variant:"text-sm/semibold",color:"HEADER_SECONDARY"},R))}function F(t){let{title:R,onTitlePress:i,icon:o,children:n,padding:l}=t;const u=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:N.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(k,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(te,{title:R,onPress:i,icon:o}),e.React.createElement(k,{style:u.main},l?e.React.createElement(k,{style:{paddingHorizontal:16,paddingVertical:16}},n):n))}var $;(function(t){function R(o){let{children:n,onPress:l}=o;return e.React.createElement(h,{variant:"text-md/bold",onPress:l},n)}t.Bold=R;function i(o){let{children:n,onPress:l}=o;return e.React.createElement(I,{style:{textDecorationLine:"underline"},onPress:l},n)}t.Underline=i})($||($={}));function h(t){let{variant:R,lineClamp:i,color:o,align:n,style:l,onPress:u,getChildren:a,children:f,liveUpdate:d}=t;const[c,g]=e.React.useReducer(function(p){return~p},0);return e.React.useEffect(function(){if(!d)return;const p=new Date().setMilliseconds(1e3);let m,v;return v=setTimeout(function(){g(),m=setInterval(g,1e3)},p-Date.now()),function(){clearTimeout(v),clearInterval(m)}},[]),e.React.createElement(I,{style:[R?Q[R]:{},o?{color:ee(N.semanticColors[o])}:{},n?{textAlign:n}:{},l??{}],numberOfLines:i,onPress:u},a?.()??f)}const{parseTimestamp:q}=y.findByProps("parseTimestamp","unparseTimestamp"),A=e.stylesheet.createThemedStyleSheet({code:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,backgroundColor:N.semanticColors.BACKGROUND_SECONDARY},timestamp:{backgroundColor:N.semanticColors.BACKGROUND_MODIFIER_ACCENT}});function ae(){const[t,R]=e.React.useState(Date.now());return e.React.useLayoutEffect(function(){return R(Date.now())},[r.time.acceptRelative]),e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",liveUpdate:!0,getChildren:function(){const i=new Date,o=[[4],[19,20],[4,18,2],i.getHours()<12&&[i.getHours()],[i.getHours(),i.getMinutes()],[i.getHours(),i.getMinutes(),i.getSeconds()]].filter(function(u){return!!u}),n=[];let l=-1;for(const[u,a,f]of o){l++;const d=new Date;d.setHours(u,a??0,f||0);let c=[d.getHours().toString(),a!==void 0&&d.getMinutes().toString().padStart(2,"0"),f!==void 0&&d.getSeconds().toString().padStart(2,"0")].filter(function(p){return!!p}).join(":");u<12&&(c+=" AM");const g=q(Math.floor(d.getTime()/1e3).toString(),d.getSeconds()===0?"t":"T");n.push(r.time.requireBackticks?e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:A.code},c):c),n.push(" \u2014 "),n.push(e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:A.timestamp,onPress:function(){return C.showToast(g.full,D.getAssetIDByName("ic_information_24px"))}},g.formatted)),l!==o.length-1&&n.push(`
`)}if(r.time.acceptRelative){n.push(`

`);const u=[["in 20 seconds",1e3*20],["8 minutes ago",-(1e3*60*8)]];l=-1;for(const[a,f]of u){const d=t+f,c=q(Math.floor(d/1e3).toString(),"R");n.push(r.time.requireBackticks?e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:A.code},a):a),n.push(" \u2014 "),n.push(e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:A.timestamp,onPress:function(){return C.showToast(c.full,D.getAssetIDByName("ic_information_24px"))}},c.formatted)),l!==u.length-1&&n.push(`
`)}}return n}})}const{parseTimestamp:H}=y.findByProps("parseTimestamp","unparseTimestamp"),_=e.stylesheet.createThemedStyleSheet({code:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,backgroundColor:N.semanticColors.BACKGROUND_SECONDARY},timestamp:{backgroundColor:N.semanticColors.BACKGROUND_MODIFIER_ACCENT}});function ne(){const[t,R]=e.React.useState(Date.now());return e.React.useLayoutEffect(function(){return R(Date.now())},[r.day.acceptRelative]),e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",liveUpdate:!0,getChildren:function(){const i=new Date,o=[[21,11,2023],[12,5],[1,8,20],[i.getDate(),i.getMonth()-1,i.getFullYear()],[i.getDate(),i.getMonth()-1],[i.getDate(),i.getMonth()-1,i.getFullYear()-2e3]].filter(function(u){return!!u}),n=[];let l=-1;for(let[u,a,f]of o){l++;const d=new Date().getFullYear(),c=new Date;f<100&&(f+=2e3),c.setFullYear(f??d,a,u);const g=H(Math.floor(c.getTime()/1e3).toString(),"d"),p=[r.day.american?a:u,r.day.american?u:a,f].join("/");n.push(r.day.requireBackticks?e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:_.code},p):p),n.push(" \u2014 "),n.push(e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:_.timestamp,onPress:function(){return C.showToast(g.full,D.getAssetIDByName("ic_information_24px"))}},g.formatted)),l!==o.length-1&&n.push(`
`)}if(r.day.acceptRelative){n.push(`

`);const u=1e3*60*60*24,a=u*(365+1/4),f=[["yesterday",-u],["in 2 days",u*2],["2 centuries ago",-(a*200)],["next week",u*7]];l=-1;for(const[d,c]of f){const g=t+c,p=H(Math.floor(g/1e3).toString(),"R");n.push(r.day.requireBackticks?e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:_.code},d):d),n.push(" \u2014 "),n.push(e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:_.timestamp,onPress:function(){return C.showToast(p.full,D.getAssetIDByName("ic_information_24px"))}},p.formatted)),l!==f.length-1&&n.push(`
`)}}return n}})}const{View:Y,ScrollView:re}=x.General,{FormSwitchRow:L,FormIcon:P}=x.Forms,{BadgableTabBar:ie}=y.findByProps("BadgableTabBar");function se(){const[t,R]=e.React.useState("time");return r.time??={acceptRelative:!1,requireBackticks:B.storage.reqBackticks??!0},r.day??={acceptRelative:!1,requireBackticks:!0,american:!1},B.storage.alwaysLong!==void 0&&delete B.storage.alwaysLong,B.storage.reqBackticks!==void 0&&delete B.storage.reqBackticks,K.useProxy(r),e.React.createElement(re,null,e.React.createElement(Y,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(ie,{activeTab:t,onTabSelected:R,tabs:[{id:"day",title:"Date"},{id:"time",title:"Time"}]})),e.React.createElement(F,{title:"Info",icon:D.getAssetIDByName("ic_info_24px"),padding:!0},e.React.createElement(h,{variant:"text-md/semibold",color:"TEXT_NORMAL"},t==="time"?e.React.createElement(e.React.Fragment,null,"Send a message with a time code (in"," ",e.React.createElement($.Bold,null,"HH:MM"),r.time.acceptRelative?", ":" or ",e.React.createElement($.Bold,null,"HH:MM:SS"),r.time.acceptRelative&&e.React.createElement(e.React.Fragment,null," or relative")," format) and automatically turn it into a timestamp",`

`,e.React.createElement(ae,null)):e.React.createElement(e.React.Fragment,null,"Send a message with a date code (in"," ",e.React.createElement($.Bold,null,r.day.american?"MM/DD":"DD/MM","/YY(YY)"),r.day.acceptRelative?", ":" or ",e.React.createElement($.Bold,null,r.day.american?"MM/DD":"DD/MM","/MM"),r.day.acceptRelative&&e.React.createElement(e.React.Fragment,null," or relative")," format) and automatically turn it into a timestamp",`

`,e.React.createElement(ne,null)))),e.React.createElement(F,{title:"Settings",icon:D.getAssetIDByName("settings")},e.React.createElement(L,{key:`${t}_acceptRelative`,label:`Allow Relative ${t==="time"?"Time":"Date"}`,subLabel:t==="time"?"Formats relative time (in 10 seconds, 5 minutes ago)":"Formats relative date (in 2 days, 6 weeks ago)",leading:e.React.createElement(P,{source:D.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return r[t].acceptRelative=!r[t].acceptRelative},value:r[t].acceptRelative}),e.React.createElement(L,{key:`${t}_requireBackticks`,label:"Require Backticks",subLabel:`Require ${t==="day"?"date":"time"} to be surrounded by backticks (\`)`,leading:e.React.createElement(P,{source:D.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return r[t].requireBackticks=!r[t].requireBackticks},value:r[t].requireBackticks}),t==="day"&&e.React.createElement(L,{key:`${t}_american`,label:"'Merican Dates",subLabel:"Uses MM/DD instead of DD/MM",leading:e.React.createElement(P,{source:D.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return r.day.american=!r.day.american},value:r.day.american})),e.React.createElement(Y,{style:{marginBottom:16}}))}function ce(t,R,i,o){const n=[["seconds?",1e3],["minutes?",6e4],["hours?",36e5]],l=31556952e3,u=1e3*60*60*24,a=[["days?",u],["weeks?",u*7],["months?",u*30.436875],["years?",l],["decades?",l*10],["century",l*100],["centuries",l*100],["millennium",l*1e3],["millennia",l*1e3]],f=[...t.time?n:[],...t.date?a:[]].filter(function(s){return!!s}),d=function(s){return s?["`","`"]:["(?:\\s|\\t|^)","(?:\\s|\\t|$)"]},c=d(R.time),g=d(R.date),p=function(s){return`in (an?|[0-9]+) (${s})`},m=function(s){return`(an?|[0-9]+) (${s}) ago`},v=[t.time&&[1,`${c[0]}${p(n.map(function(s){return s[0]}).join("|"))}${c[1]}`],t.time&&[-1,`${c[0]}${m(n.map(function(s){return s[0]}).join("|"))}${c[1]}`],t.date&&[1,`${g[0]}${p(a.map(function(s){return s[0]}).join("|"))}${g[1]}`],t.date&&[-1,`${g[0]}${m(a.map(function(s){return s[0]}).join("|"))}${g[1]}`]].filter(function(s){return!!s});for(const[s,S]of v)i=i.replace(new RegExp(S,"gi"),function(b,G,ue){const V=G.toLowerCase().startsWith("a")?1:Number(G);if(Number.isNaN(V))return b;const z=f.find(function(de){return de[0].toLowerCase().includes(ue)})?.[1];return z?o(b,z*V*s):b});const E=[["last week",-7],["yesterday",-1],["tomorrow",1],["next week",7]].map(function(s){return[`${g[0]}${s[0]}${g[1]}`,s[1]*1e3*60*60*24]}),T=[...t.date?E:[]].filter(function(s){return!!s});for(const[s,S]of T)i=i.replace(new RegExp(s,"gi"),function(b){return o(b,S)});return i}const U=y.findByProps("sendMessage","editMessage"),M=function(t){return/^\s$/.test(t)},X=function(t){let[R,i]=t,o=i?.content;if(typeof o!="string"||typeof i!="object")return;const n=function(a){return a?["`","`"]:["(?:\\s|\\t|^)","(?:\\s|\\t|$)"]},l=n(r.time?.requireBackticks),u=n(r.day?.requireBackticks);if(r.time){const a={otN:"[0-9]{1,2}",tN:"[0-9]{2}",abrv:"(?: ?(AM|PM))"},f=[`(${a.otN}:${a.tN}:${a.tN})${a.abrv}?`,`(${a.otN}:${a.tN})${a.abrv}?`,`(${a.otN})${a.abrv}`].map(function(d){return new RegExp(`${l[0]}${d}${l[1]}`,"gi")});for(const d of f)o=o.replace(d,function(c,g,p){let[m,v,E]=g.split(":").map(function(s){return Number(s)});if(m<0||m>24||typeof v=="number"&&(v<0||v>60)||typeof E=="number"&&(E<0||E>60))return c;p&&(p.toLowerCase()==="pm"&&m!==12?m+=12:p.toLowerCase()==="am"&&m===12&&(m=0));const T=new Date;return T.setHours(m,v??0,E??0,0),`${M(c[0])?c[0]:""}<t:${Math.floor(T.getTime()/1e3)}:${T.getSeconds()===0?"t":"T"}>${M(c[c.length-1])?c[c.length-1]:""}`})}if(r.day){const a={otN:"[0-9]{1,2}",tN:"[0-9]{2}",fN:"[0-9]{4}"},f=[`(${a.otN})\\/(${a.otN})\\/(${a.fN}|${a.tN})`,`(${a.otN})\\/(${a.otN})`].map(function(d){return new RegExp(`${u[0]}${d}${u[1]}`,"gi")});for(const d of f)o=o.replace(d,function(c,g,p,m){const v=new Date().getFullYear();let[E,T,s]=[Number(g),Number(p),m?Number(m):v];if(r.day.american){const b=T;T=E,E=b}if(E<0||E>31||T<0||T>12||s<0||s>9999)return c;s<100&&(s+=2e3);const S=new Date(0);return S.setFullYear(s,T-1,E),`${M(c[0])?c[0]:""}<t:${Math.floor(S.getTime()/1e3)}:d>${M(c[c.length-1])?c[c.length-1]:""}`})}o=ce({time:!!r.time?.acceptRelative,date:!!r.day?.acceptRelative},{time:!!r.time?.requireBackticks,date:!!r.day?.requireBackticks},o,function(a,f){return`${M(a[0])?a[0]:""}<t:${Math.floor((Date.now()+f)/1e3)}:R>${M(a[a.length-1])?a[0]:""}`}),i.content=o};function oe(){const t=new Array;return t.push(O.before("sendMessage",U,X)),t.push(O.before("editMessage",U,X)),function(){return t.forEach(function(R){return R()})}}const r=B.storage;let j;var le={onLoad:function(){return j=oe()},onUnload:function(){return j?.()},settings:se};return w.default=le,w.vstorage=r,Object.defineProperty(w,"__esModule",{value:!0}),w})({},vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.plugin,vendetta.patcher,vendetta.metro,vendetta.ui,vendetta.ui.toasts);