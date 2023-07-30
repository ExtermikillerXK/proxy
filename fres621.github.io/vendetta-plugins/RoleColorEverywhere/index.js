(function(B,p,S,d,w,R,a,L,m,G,b){"use strict";const{Text:V}=w.General,U=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:k}}=d.findByProps("colors","meta"),j=d.findByStoreName("UserStore"),F=d.findByStoreName("RelationshipStore"),H=d.findByStoreName("GuildMemberStore"),D=d.findByProps("TYPING_WRAPPER_HEIGHT");function $(){return S.after("default",D,function(e,i){let[{channel:n}]=e;if(!i||a.storage.hideTyping)return;const t=i.props?.children,l=k(U.theme,R.semanticColors.HEADER_SECONDARY),u=S.after("type",t,function(f,g){p.React.useEffect(function(){return function(){u()}},[]);const c=g?.props?.children?.[0]?.props?.children?.[1]?.props;if(!c||!c.children||c.children==="Several people are typing...")return;const o=D.useTypingUserIds(n.id).map(function(r){const s=H.getMember(n.guild_id,r),E=j.getUser(r),y=s?.nick||F.getNickname(r)||E.globalName||E.username,I=s?.colorString||l;return{displayName:y,displayColor:I}});function h(r){return p.React.createElement(V,{style:{color:r.displayColor,fontFamily:p.constants.Fonts.DISPLAY_BOLD}},r.displayName)}!o||o.length<1||(c.children=o.length===1?[h(o[0])," is typing..."]:[...o.slice(0,o.length-1).flatMap(function(r,s){return[h(r),s<o.length-2?", ":" and "]}),h(o[o.length-1])," are typing..."])})})}const Y=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:W}}=d.findByProps("colors","meta"),K=d.findByName("RowManager"),x=d.findByStoreName("GuildMemberStore");d.findByStoreName("SelectedChannelStore");const X=d.findByStoreName("ChannelStore");function C(e,i,n,t){if(e)return t=Object.assign([],t),t?t.push(e):t=[e],Array.isArray(e.content)?e.content.forEach(function(l,u){return e.content[u]=C(l,i,n,t)}):e.items?e.items.forEach(function(l,u){return e.items[u]=C(l,i,n,t)}):Array.isArray(e)&&e.forEach(function(l,u){return e[u]=C(l,i,n,t)}),e.type&&i.forEach(function(l){e=l(e,n,t)||e}),e}function z(e,i,n){const t=function(c){return c.match(/\w\w/g).map(function(o){return parseInt(o,16)})},l=function(c){return"#"+c.map(function(o){return o.toString(16).padStart(2,"0")}).join("")},u=t(e),f=t(i),g=u.map(function(c,o){return Math.round(c+(f[o]-c)*n)});return l(g)}function q(){return S.after("generate",K.prototype,function(e,i){let[n]=e,{message:t}=i;if((!a.storage.chatInterpolation||a.storage.chatInterpolation<=0)&&a.storage.noMention||n.rowType!=1||!t?.content)return;const l=t.channelId,u=X.getChannel(l);if(!u?.guild_id)return;const f=function(h){if(h.type!="mention"||!h.userId)return;const r=x.getMember(u.guild_id,h.userId)?.colorString;if(!r)return;const s=parseInt(r.slice(1),16);return{...h,roleColor:s,color:s,colorString:r}},g=W(Y.theme,R.semanticColors.TEXT_NORMAL),c=function(h,r,s){let[E]=r,y=s?.map(function(T){return T.type});if(y?.includes("mention")||y?.includes("channelMention")||y?.includes("roleMention")||y?.includes("commandMention")||y?.includes("link")||h.type!="text")return;const I=x.getMember(t.guildId,E);if(!(!I||!I.colorString))return{content:[h],target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:p.ReactNative.processColor(z(g,I.colorString,a.storage.chatInterpolation/100)),messageChannelId:"0"},medium:!0},type:"link"}};let o=[];a.storage.chatInterpolation>0&&o.push(c),a.storage.noMention||(o.push(f),t.shouldShowRoleOnName=!0),C({content:t.content},o,[t.authorId]),t.referencedMessage?.message?.content&&C({content:t.referencedMessage.message.content},o,[t.referencedMessage.message.authorId])})}const Q=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:J}}=d.findByProps("colors","meta");function Z(){return S.after("default",d.findByName("VoiceUserConnected",!1),function(e,i){let[n]=e;if(a.storage.noVoice)return;const t=S.after("render",i.type.prototype,function(l,u){t();let f=u.props?.children?.[1]?.props;f&&(f.style.color=n?.member?.colorString||J(Q.theme,R.semanticColors.CHANNELS_DEFAULT))})})}const{View:ee}=p.ReactNative,te=d.findByStoreName("GuildStore");function ne(){return S.after("render",ee,function(e,i){if(a.storage.noRole)return;const n=L.findInReactTree(i,function(l){return l?.props?.roleId});if(!n||isNaN(n.props.roleId)||n.props.excludedApplications||n.props.hasOwnProperty("displayRoleIcon")||n.props.hasOwnProperty("searchable"))return;let t={type:Object.assign({},n.type)};S.after("type",t.type,function(l,u){let f={type:Object.assign({},u.props.children[1].type)};S.after("render",f.type,function(g,c){let o=te.getGuild(n.props.guildId)?.roles?.[n.props.roleId];o?.colorString&&c.props.style.push({color:o.colorString})}),u.props.children[1].type=f.type}),n.type=t.type})}function M(){return M=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},M.apply(this,arguments)}function oe(){return M.apply(this,arguments)}const{StyleSheet:re,PanResponder:ae}=p.ReactNative,_=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:P}}=d.findByProps("colors","meta"),{View:O}=w.General,{useState:ie,useRef:ce}=p.React,A={sliderOff:P(_.theme,R.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:P(_.theme,R.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:P(_.theme,R.semanticColors.MENTION_FOREGROUND)},se=function(e){let{onSlide:i,value:n}=e;const t=n||0,[l,u]=ie(0),f=ce(null);function g(r){f.current&&f.current.measure(function(s,E,y,I,T,Re){let ye=(r-T)/(y-T)*100;const Se=Math.min(Math.max(0,ye),100);i&&i(Se)})}const c=p.React.useRef(ae.create({onStartShouldSetPanResponder:function(r,s){return!0},onStartShouldSetPanResponderCapture:function(r,s){return!0},onMoveShouldSetPanResponder:function(r,s){return!0},onMoveShouldSetPanResponderCapture:function(r,s){return!0},onPanResponderGrant:function(r,s){g(s.x0)},onPanResponderMove:function(r,s){g(s.moveX)},onPanResponderTerminationRequest:function(r,s){return!0},onPanResponderRelease:function(r,s){},onPanResponderTerminate:function(r,s){},onShouldBlockNativeResponder:function(r,s){return!0}})).current;function o(r){u(r.nativeEvent.layout.width)}const h=re.create({container:{marginLeft:"5%",width:"90%",height:20,borderRadius:25,backgroundColor:A.sliderOff,marginBottom:25},slid:{width:t+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:t===100?25:0,backgroundColor:A.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(l/2),borderRadius:100,backgroundColor:A.thumb}});return p.React.createElement(O,oe({style:h.container},c.panHandlers,{ref:f}),p.React.createElement(O,{style:h.slid},p.React.createElement(O,{style:h.thumb,onLayout:o})))},{Text:le,View:ue}=w.General,de=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:fe}}=d.findByProps("colors","meta"),v={Typing:b.getAssetIDByName("ic_messages"),Mention:b.getAssetIDByName("ic_mention_user"),Text:b.getAssetIDByName("ic_add_text"),Voice:b.getAssetIDByName("ic_voice_channel_24px"),Role:b.getAssetIDByName("ic_person_shield")},he={text:fe(de.theme,R.semanticColors.TEXT_NORMAL)};function pe(e,i,n){const t=function(c){return c.match(/\w\w/g).map(function(o){return parseInt(o,16)})},l=function(c){return"#"+c.map(function(o){return o.toString(16).padStart(2,"0")}).join("")},u=t(e),f=t(i),g=u.map(function(c,o){return Math.round(c+(f[o]-c)*n)});return l(g)}function me(){return G.useProxy(a.storage),a.storage.chatInterpolation??=0,React.createElement(p.ReactNative.ScrollView,{style:{flex:1}},React.createElement(m.FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(m.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(m.FormIcon,{source:v.Typing}),value:!a.storage.hideTyping,onValueChange:function(e){return a.storage.hideTyping=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in mentions",subLabel:"Display the top role color in mentions in the chat.",leading:React.createElement(m.FormIcon,{source:v.Mention}),value:!a.storage.noMention,onValueChange:function(e){return a.storage.noMention=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in member list",subLabel:"Display the top role color in the member list role section headers.",leading:React.createElement(m.FormIcon,{source:v.Role}),value:!a.storage.noRole,onValueChange:function(e){return a.storage.noRole=!e}}),React.createElement(ue,{style:{marginHorizontal:10,marginBottom:2}},React.createElement(w.HelpMessage,{messageType:0},"(Regarding option below) - Limitations cause text coloring to prevent interaction with the text. Instead, you'll have to press anywhere else in the message to open the context menu or use gestures.")),React.createElement(m.FormSwitchRow,{label:"Show in chat text",subLabel:"Display the top role color in the chat text... Why would you want this?",leading:React.createElement(m.FormIcon,{source:v.Text}),value:a.storage.chatInterpolation>0,onValueChange:function(e){a.storage.chatInterpolation=e?100:0}}),React.createElement(le,{style:{marginLeft:"5%",color:pe(he.text,"#ff0000",a.storage.chatInterpolation/100),fontFamily:p.constants.Fonts.DISPLAY_MEDIUM,fontSize:16,marginBottom:5,marginTop:-5}},"Color interpolation (for chat text):"),React.createElement(se,{onSlide:function(e){a.storage.chatInterpolation=e},value:a.storage.chatInterpolation,style:{marginBottom:0}}),React.createElement(m.FormSwitchRow,{label:"Show in voice channel member list",subLabel:"Display the top role color in the voice channel member list.",leading:React.createElement(m.FormIcon,{source:v.Voice}),value:!a.storage.noVoice,onValueChange:function(e){a.storage.noVoice=!e}})))}let N=[];var ge={onLoad:function(){N.push($()),N.push(q()),N.push(Z()),N.push(ne())},onUnload:function(){for(const e of N)e()},settings:me};return B.default=ge,Object.defineProperty(B,"__esModule",{value:!0}),B})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.utils,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
