(function(o,e,l,i,d,m,t,p){"use strict";const{FormRow:g}=l.Forms,v=i.findByName("Icon"),h=i.findByProps("openLazy","hideActionSheet"),{openURL:y}=i.findByProps("openURL","openDeeplink"),f=e.React.createElement(v,{source:m.getAssetIDByName("search")}),s={saucenao:{name:"SauceNAO",url:"https://saucenao.com/search.php?url=%s",default:!0},tracemoe:{name:"trace.moe",url:"https://trace.moe/?url=%s",default:!0},iqdb:{name:"IQDB",url:"https://iqdb.org/?url=%s"},imgops:{name:"ImgOps",url:"https://imgops.com/%s"},tineye:{name:"TinEye",url:"https://tineye.com/search?url=%s"},google:{name:"Google Images",url:"https://lens.google.com/uploadbyurl?url=%s"},yandex:{name:"Yandex Images",url:"https://yandex.com/images/search?rpt=imageview&url=%s"}},R=()=>{t.storage.services??={};for(const[a,r]of Object.entries(s))t.storage.services[a]??=r.default??!1},b=d.before("openLazy",h,([a,r])=>{r==="MediaShareActionSheet"&&a.then(L=>{const A=d.after("default",L,([{syncer:u}],B)=>{e.React.useEffect(()=>void A(),[]);let n=u.sources[u.index.value];Array.isArray(n)&&(n=n[0]);const N=n.sourceURI??n.uri;B.props.children.props.children.push(...Object.keys(s).filter(c=>t.storage.services[c]).map(c=>e.React.createElement(g,{leading:f,label:s[c].name,onPress:()=>y(s[c].url.replace("%s",N))})))})})}),{FormSection:I,FormDivider:S,FormRadioRow:E}=l.Forms,F=()=>(p.useProxy(t.storage),e.React.createElement(e.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},e.React.createElement(I,{title:"Services"},e.React.createElement(e.ReactNative.FlatList,{data:Object.entries(t.storage.services),ItemSeparatorComponent:S,renderItem:({item:[a,r]})=>e.React.createElement(E,{label:s[a].name,selected:r,onPress:()=>void(t.storage.services[a]=!t.storage.services[a])})}))));return o.onLoad=R,o.onUnload=b,o.settings=F,o})({},vendetta.metro.common,vendetta.ui.components,vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.plugin,vendetta.storage);
