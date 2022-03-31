(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[21],{1043:function(e,t,s){"use strict";var c=s(4),i=(s(51),s(1125)),a=s(41),n=s(12),d=s(6),l=s(3);const r=Object(a.a)(i.a)`
  width : ${e=>e.width}px;
`,o=a.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,s]=Object(c.useState)(Object(l.jsx)("span",{className:"loading-line"})),[i,a]=Object(c.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},b=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:m,defaultValue:h="--",...g}=e;if(j())g.decimalScale>0&&!t&&g.value&&/\d+\.0*[1-9]+/.test(g.value)&&0===+Object(d.bg)(g.value).toFixed(+g.decimalScale||2)&&(g.decimalScale=Object(n.d)(Math.abs(g.value))+2),-1===g.decimalScale&&delete g.decimalScale,g.value=Object(n.K)(g.value),g.value&&/\d+.9{6}/.test(g.value)&&(g.value=(+g.value).toFixed(5)),s(Object(l.jsx)(r,{...g,renderText:b,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:c}=e;s(Object(l.jsx)(o,{className:"loading-line",width:t,height:c})),m&&a(!1)}const u=window.setTimeout((()=>{j()||s(h)}),6e4);return()=>{clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),t}},1060:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var c=s(41),i=s(1216),a=s.n(i),n=s(111),d=s(12),l=s(1148),r=s(3);const o=c.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j(e){let{text:t,id:s=String((new Date).getTime())+Math.random(),tip:c,multiline:i,html:j,className:b,element:m="",block:h="block",width:g="auto",children:u,tiggerEvent:O}=e;return Object(r.jsxs)(o,{className:b,block:h,isWin:l.isWindows,children:[Object(r.jsx)("div",{className:"text","data-for":s,"data-tip":j?a.a.renderToString(m):c,"data-event":Object(d.y)()?"click":O,"data-html":j,children:t||u}),c&&Object(r.jsx)(n.a,{id:s,width:g,padding:"12",place:"bottom",overridePosition:(e,t,s,c,i,a,n,d)=>{const l=s.getBoundingClientRect(),r=c.getBoundingClientRect();let{x:o,y:j,height:b,width:m}=l;const{left:h,top:g}=e;return o+r.width/2>document.documentElement.clientWidth?o-=Math.abs(m-r.width):o-(r.width-m)/2<0?o-=m:o-=(r.width-m)/2,j+b+r.height>=document.documentElement.clientHeight?j=j+b-r.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:j,borderRadius:8,multiline:i})]})}},1147:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var c=s(4),i=s(41),a=s(6),n=s(1060),d=s(3);const l=i.a.div`
display : flex;
font-size : 14px;
align-items : center;
background: rgba(85, 119, 253, 0.1);
border-radius: 4px;
justify-content: space-between;
input {
  background: transparent;
  border-radius: 4px;
  // min-width: 240px;
  border: 0;
  width : ${e=>e.inputWidth};
  height: ${e=>e.inputHeight};
  color : #E0ECFF;
  font-size : 18px;
  padding-left: 16px;
}
input:focus {
  outline: none;
}
.unit {
  margin-right: ${e=>e.unitPadding};
}
`;function r(e){let{value:t,unit:s,unitTip:i,max:r,step:o,onChange:j,styles:b={},disableNegtive:m=!0,focus:h,placeholder:g="",unitPadding:u="24px",minTradeVolume:O,decimal:x=2,readOnly:f,inputWidth:v="50%",inputHeight:p="56px",className:N,disabled:w=!1,onBlur:k,onFocus:I}=e;const _=Object(c.useRef)(null);return Object(c.useEffect)((()=>{_.current.setCustomValidity(""),_.current&&h&&_.current.focus()}),[h]),Object(d.jsxs)(l,{unitPadding:u,inputWidth:v,inputHeight:p,className:N,style:{...b},children:[Object(d.jsx)("input",{placeholder:g,type:"number",onBlur:k,onFocus:I,disabled:w,value:t,step:o,ref:_,onChange:e=>{const t=new RegExp(`\\d+\\.\\d{0,${x}}$`),{value:s}=e.target;if(r&&Object(a.bg)(s).gt(r))j&&j(r);else if(m&&(s<0||isNaN(s)))j&&j("");else if(s)if(O>=1)if(s/O>=1)j&&j(Object(a.bg)(s).div(O).integerValue()*O);else{const e=s*O;j&&j(e)}else if(/\d+\./.test(s)&&!t.test(s)){const e=s.substring(0,s.indexOf(".")+1+x);j&&j(e)}else j&&j(s);else j&&j(s)},readOnly:f}),Object(d.jsx)("div",{className:"unit",children:i?Object(d.jsx)(n.a,{tip:i,text:s}):s})]})}},1952:function(e,t,s){},1953:function(e,t,s){},2145:function(e,t,s){"use strict";s.r(t);var c=s(4),i=s(35),a=s(6),n=s(1147),d=s(43),l=s(132),r=s(7),o=s(394),j=s(134),b=(s(1952),s(3));function m(){return Object(b.jsx)("div",{class:"sleepContentView",children:Object(b.jsx)("div",{class:"circle"})})}var h=s(256),g=s(392),u=s(400),O=s.p+"static/media/stage-one.9bfaa393.svg",x=s.p+"static/media/stage-two.1ce521f2.svg",f=s.p+"static/media/stage-three.507b43c5.svg",v=s(27),p=s.p+"static/media/succeed.1057d4b2.svg";s.p;function N(e){let{lang:t,wallet:s,amount:i,balance:a,initialize:n,isClaim:h,setSending:g,sending:u,setAmount:N,setIsClaim:k,isWalletConnected:I}=e;const _=Object(o.a)(),C=Object(j.c)(),S=Object(d.g)(),[y,T]=Object(c.useState)(!1),[W,F]=Object(c.useState)(!1),[$,E]=Object(c.useState)({}),[R,D]=Object(c.useState)({}),[q,z]=Object(c.useState)(!1),[B,J]=Object(c.useState)(Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",fontSize:"18",label:t.approve})),P=()=>{s.connect()},V=async()=>{if(s.isConnected()){let e=await v.a.request("getUserWormholeSignature",[s.detail.account]);e.valid&&(s.switchNetwork(_[e.toChainId]),k(!0)),F(e.valid)}},A=async()=>{if(""===i||0===i)return void C.error(t["amount-must-be-greater-than-zero"]);if(+i>a)return void C.error(t["there-is-not-enough-amount"]);if(!I.isFromConnected)return void C.error(`${t["send-finished-one"]} ${w(n.from_chainId,t).netWork} ${t["send-finished-two"]}`);g(!0),E({stageOne:!1}),(await v.a.request("freeze",[s.detail.chainId,s.detail.account,n.to_chainId,i],{includeResponse:!0})).success?(J(Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t.processing})),E({stageOne:!0,stageTwo:!1}),window.setInterval((()=>{V()}),3e3)):g(!1)},H=async()=>{if(!I.isToConnected)return void C.error(`${t["send-finished-one"]} ${w(n.to_chainId,t).netWork} ${t["send-finished-two"]}`);z(!0),D({stageOne:!1}),(await v.a.request("mintDeri",[s.detail.chainId,s.detail.account],{includeResponse:!0})).success?(D({stageOne:!0,stageTwo:!1}),J(Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t.processing})),window.setInterval((()=>{V()}),3e3)):C.error(t["claim-faild"])},L=()=>{S.push("/bridge")},M=async()=>{(await v.a.request("unlockDeri",[s.detail.chainId,s.detail.account],{includeResponse:!0})).success?(T(!0),U()):(T(!1),C.error(t["approve-faild"]))},U=async()=>{if(s.isConnected()){const e=await v.a.request("isDeriUnlocked",[s.detail.chainId,s.detail.account]);T(e)}};return Object(c.useEffect)((()=>{s.isConnected()&&(U(),V())}),[s.detail,n]),Object(c.useEffect)((()=>{W?E({stageOne:!0,stageTwo:!0,stageThree:!0}):q&&(D({stageOne:!0,stageTwo:!0,stageThree:!0}),g(!1),N(""))}),[W,n]),Object(c.useEffect)((()=>{let e;e=s.isConnected()?W?Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t.claim,onClick:H}):y?q?Object(b.jsxs)("button",{className:"complete",onClick:L,children:[" ",Object(b.jsx)("img",{alt:"",src:p})," ",t.complete," "]}):Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t.send,onClick:A}):Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t.approve,onClick:M}):Object(b.jsx)(l.a,{type:r.n,className:"button-bridge",label:t["connect-wallet"],onClick:P}),J(e)}),[W,s.detail,y,i,n,I,q]),Object(b.jsxs)("div",{className:"operate",children:[Object(b.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",i,"  DERI ",t.from.toLowerCase()," ",n.from_network," ",t.to.toLowerCase()," ",n.to_network]}),Object(b.jsx)("div",{className:"btn",children:B}),Object(b.jsxs)("div",{className:"hint",children:[!h&&Object(b.jsxs)("div",{className:"sending",children:[Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:O})]}),Object(b.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[u&&Object(b.jsx)(b.Fragment,{children:$.stageOne?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})}),!u&&Object(b.jsx)("div",{className:"staic"})]})]}),Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:x})]}),Object(b.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[u&&Object(b.jsx)(b.Fragment,{children:$.stageOne&&Object(b.jsx)(b.Fragment,{children:$.stageTwo?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})})}),(!u||!$.stageOne)&&Object(b.jsx)("div",{className:"staic"})]})]}),Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:f})]}),Object(b.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[u&&Object(b.jsx)(b.Fragment,{children:$.stageOne&&$.stageTwo&&Object(b.jsx)(b.Fragment,{children:$.stageThree?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})})}),(!u||!$.stageTwo)&&Object(b.jsx)("div",{className:"staic"})]})]})]}),h&&Object(b.jsxs)("div",{className:"claiming",children:[Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:O})]}),Object(b.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[q&&Object(b.jsx)(b.Fragment,{children:R.stageOne?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})}),!q&&Object(b.jsx)("div",{className:"staic"})]})]}),Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:x})]}),Object(b.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[q&&Object(b.jsx)(b.Fragment,{children:R.stageOne&&Object(b.jsx)(b.Fragment,{children:R.stageTwo?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})})}),(!q||!R.stageOne)&&Object(b.jsx)("div",{className:"staic"})]})]}),Object(b.jsxs)("div",{className:"stage",children:[Object(b.jsxs)("div",{className:"stage-img-text",children:[Object(b.jsxs)("div",{className:"stage-img",children:[" ",Object(b.jsx)("img",{alt:"",src:f})]}),Object(b.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(b.jsxs)("div",{className:"ok-pending",children:[q&&Object(b.jsx)(b.Fragment,{children:R.stageOne&&R.stageTwo&&Object(b.jsx)(b.Fragment,{children:R.stageThree?Object(b.jsx)("div",{className:"succeed",children:Object(b.jsx)("img",{alt:"",src:p})}):Object(b.jsx)("div",{className:"pending",children:Object(b.jsx)(m,{})})})}),(!q||!R.stageTwo)&&Object(b.jsx)("div",{className:"staic"})]})]})]})]})]})}function w(e,t){let s={};switch(e=+e){case 1:s.netWork=t.ethereum,s.chainId=1,s.img=g.default;break;case 56:s.netWork=t.bsc,s.chainId=56,s.img=h.default;break;case 128:s.netWork=t.heco,s.chainId=128,s.img=u.default;break;case 97:s.netWork=t["bsc-testnet"],s.chainId=97,s.img=h.default;break;case 3:s.netWork=t.ropsten,s.chainId=3,s.img=g.default;break;case 256:s.netWork=t["heco-testnet"],s.chainId=256,s.img=u.default}return s}var k=s(1043),I=s.p+"static/media/arrow-left.f14b02ac.svg",_=s.p+"static/media/disabled-down.e8dbb78e.svg",C=s(393),S=s(188),y=s(251),T=s(405),W=s(58),F=s.n(W);s(1953);function $(e,t){let s={};switch(e=+e){case 1:s.netWork=t.ethereum,s.chainId=1,s.img=g.default;break;case 56:s.netWork=t.bsc,s.chainId=56,s.img=C.default;break;case 128:s.netWork=t.heco,s.chainId=128,s.img=u.default;break;case 97:s.netWork=t["bsc-testnet"],s.chainId=97,s.img=C.default;break;case 3:s.netWork=t.ropsten,s.chainId=3,s.img=g.default;break;case 256:s.netWork=t["heco-testnet"],s.chainId=256,s.img=u.default}return s}t.default=Object(i.b)("wallet")(Object(i.c)((function(e){let{wallet:t,lang:s}=e;const[i,d]=Object(c.useState)(""),[l,r]=Object(c.useState)(0),o="prod"!==a.DeriEnv.get(),j=o?[{text:s.ropsten,id:3,img:g.default},{text:s["bsc-testnet"],id:97,img:C.default},{text:s["heco-testnet"],id:256,img:u.default}]:[{text:s.ethereum,id:1,img:g.default},{text:s.bsc,id:56,img:C.default},{text:s.heco,id:128,img:u.default}],[m,h]=Object(c.useState)(j),[O,x]=Object(c.useState)(j),[f,p]=Object(c.useState)(!1),[w,W]=Object(c.useState)(o?{from_chainId:97,from_network:s["bsc-testnet"],to_chainId:3,to_network:s.ropsten}:{from_chainId:1,from_network:s.ethereum,to_chainId:56,to_network:s.bsc}),[E,R]=Object(c.useState)(!1),[D,q]=Object(c.useState)(!1),[z,B]=Object(c.useState)(!1),[J,P]=Object(c.useState)($(w.from_chainId,s).img),[V,A]=Object(c.useState)($(w.to_chainId,s).img),H=F()("from-network-list",{show:D}),L=F()("to-network-list",{show:z}),[M,U]=Object(c.useState)({isFromConnected:!1,isToConnected:!1});return Object(c.useEffect)((()=>{(async()=>{if(t.isConnected()){let e=await v.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);r(e)}})()}),[t.detail,w]),Object(c.useEffect)((()=>{(async()=>{if(t.isConnected()){let e=await v.a.request("getUserWormholeSignature",[t.detail.account]);e.valid&&(W({from_chainId:e.fromChainId,from_network:$(e.fromChainId,s).netWork,to_chainId:e.toChainId,to_network:$(e.toChainId,s).netWork}),P($(e.fromChainId,s).img),A($(e.toChainId,s).img),d(Object(a.bg)(e.amount,-18).toString()),p(e.valid))}})()}),[t.detail]),Object(c.useEffect)((()=>{let e,c;e=[j.filter((e=>e.id===+w.from_chainId))[0],j.filter((e=>e.id!==+w.from_chainId))[0],j.filter((e=>e.id!==+w.from_chainId))[1]],c=[j.filter((e=>e.id===+w.to_chainId))[0],j.filter((e=>e.id!==+w.to_chainId))[0],j.filter((e=>e.id!==+w.to_chainId))[1]],h(e),x(c),P($(w.from_chainId,s).img),A($(w.to_chainId,s).img),(()=>{let e=!!t.isConnected()&&+t.detail.chainId===+w.from_chainId,s=!!t.isConnected()&&+t.detail.chainId===+w.to_chainId;U({isFromConnected:e,isToConnected:s})})()}),[w,t.detail]),Object(b.jsx)("div",{className:"bridge-big-box",children:Object(b.jsxs)("div",{className:"bridge-box",children:[Object(b.jsxs)("div",{className:"bridge-title",children:[Object(b.jsx)("div",{className:"title",children:s.bridge}),Object(b.jsx)("div",{className:"birdge-des",children:s["bridge-des"]})]}),Object(b.jsxs)("div",{className:"bridge-info",children:[Object(b.jsxs)("div",{className:"select-network-box",children:[Object(b.jsx)("div",{className:"select-network-title",children:s["select-networks"]}),Object(b.jsxs)("div",{className:"select-network-from-to",children:[Object(b.jsxs)("div",{className:"from-network",children:[Object(b.jsx)("div",{className:"from-title",children:s.from}),Object(b.jsxs)("div",{className:"from-dropdown-list",children:[Object(b.jsxs)("div",{className:f?"drop drop-disabled":"drop",onClick:()=>{f||q(!D)},children:[Object(b.jsxs)("div",{className:"network-logo-connected",children:[Object(b.jsx)("img",{src:J,alt:""}),Object(b.jsx)("span",{children:w.from_network}),Object(b.jsx)("div",{className:E?"connected-hide":M.isFromConnected?"connected":"is-connected",children:!E&&M.isFromConnected?s.connected:s.unconnected})]}),Object(b.jsx)("img",{className:"down-icon",src:f?_:D?T.default:y.default,alt:""})]}),Object(b.jsx)("ul",{className:H,children:m.map(((e,t)=>Object(b.jsx)(b.Fragment,{children:w.from_network!==e.text?Object(b.jsx)("li",{className:"wallet-li",onClick:()=>(e=>{let t=JSON.parse(JSON.stringify(w));t.to_chainId===e.id?(t.from_chainId=w.to_chainId,t.from_network=w.to_network,t.to_chainId=w.from_chainId,t.to_network=w.from_network):(t.from_chainId=e.id,t.from_network=e.text),W(t),q(!D)})(e),children:Object(b.jsxs)("div",{className:"li-logo-network",children:[Object(b.jsx)("img",{alt:"",src:e.img})," ",Object(b.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})))})]})]}),Object(b.jsx)("div",{className:"arrow",children:Object(b.jsx)("img",{src:I,alt:""})}),Object(b.jsxs)("div",{className:"to-network",children:[Object(b.jsx)("div",{className:"to-title",children:s.to}),Object(b.jsxs)("div",{className:"to-dropdown-list",children:[Object(b.jsxs)("div",{className:f?"drop drop-disabled":"drop",onClick:()=>{f||B(!z)},children:[Object(b.jsxs)("div",{className:"network-logo-connected",children:[Object(b.jsx)("img",{src:V,alt:""}),Object(b.jsx)("span",{children:w.to_network}),Object(b.jsx)("div",{className:E?M.isToConnected?"connected":"is-connected":"connected-hide",children:E&&M.isToConnected?s.connected:s.unconnected})]}),Object(b.jsx)("img",{className:"down-icon",src:f?_:z?T.default:y.default,alt:""})]}),Object(b.jsx)("ul",{className:L,children:O.map(((e,t)=>Object(b.jsx)(b.Fragment,{children:w.to_network!==e.text?Object(b.jsx)("li",{className:"wallet-li",onClick:()=>(e=>{let t=JSON.parse(JSON.stringify(w));t.from_chainId===e.id?(t.from_chainId=w.to_chainId,t.from_network=w.to_network,t.to_chainId=w.from_chainId,t.to_network=w.from_network):(t.to_chainId=e.id,t.to_network=e.text),W(t),B(!z)})(e),children:Object(b.jsxs)("div",{className:"li-logo-network",children:[Object(b.jsx)("img",{alt:"",src:e.img})," ",Object(b.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})))})]})]})]})]}),Object(b.jsxs)("div",{className:"set-amount",children:[Object(b.jsx)("div",{className:"set-amount-title",children:s["set-amount"]}),Object(b.jsxs)("div",{className:"set-amount-box",children:[Object(b.jsxs)("div",{className:"input-deri",children:[Object(b.jsx)(n.a,{placeholder:"0",value:i,onChange:e=>{d(e)},disabled:f,className:"input-box"}),Object(b.jsxs)("span",{children:[Object(b.jsx)("img",{alt:"",src:S.default,className:"amount-img"})," DERI"]})]}),Object(b.jsxs)("div",{className:"total-deri",children:[s["total-amount"]," ",Object(b.jsx)(k.a,{value:l,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(b.jsx)("div",{className:"bridge-operate-hint",children:Object(b.jsx)(N,{lang:s,sending:f,wallet:t,balance:l,isWalletConnected:M,amount:i,isClaim:E,initialize:w,setIsClaim:R,setSending:p,setAmount:d})}),Object(b.jsx)("div",{className:"bridge-to-polygon",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"birdge-to-polygon-title",children:[s["bridge-to-polygon"]," ",Object(b.jsx)("span",{className:"polygon-title",children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:"Polygon"})})]}),Object(b.jsx)("div",{className:"bridge-to-polygon-des",children:s["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=21.f91364bc.chunk.js.map