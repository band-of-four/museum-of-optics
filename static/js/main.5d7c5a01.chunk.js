(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);a(80),a(105);var n=a(0),r=a.n(n),s=a(45),i=a.n(s),c=a(8),l=a.n(c),o=a(11),u=a.n(o),m=a(27),d=a(21),p=a(34),h=a(78),v=a(10),f=a(22),b=a(24),k=a(23),E=a(25),g=a(1),w=(a(127),!1);var y=function e(t,a){var n=this;Object(v.a)(this,e),this.storage={set:function(e,t){return new Promise(function(a){w?a(localStorage.setItem(e,t)):n.send("VKWebAppCallAPIMethod",{method:"storage.set",params:{key:e,value:t,user_id:n.user.id,access_token:n.accessToken,v:"5.95"}},{VKWebAppCallAPIMethodResult:a})})},get:function(e){return new Promise(function(t){w?t(localStorage.getItem(e)):n.send("VKWebAppCallAPIMethod",{method:"storage.get",params:{key:e,user_id:n.user.id,access_token:n.accessToken,v:"5.95"}},{VKWebAppCallAPIMethodResult:t})})}},this.send=function(e,t,a){n.callbacks=a,w?"VKWebAppOpenQR"===e&&n.tryInvokeEventCallback("VKWebAppOpenQRResult",{qr_data:"test"}):l.a.send(e,t)},this.handleResponse=function(e){var t=e.detail,a=t.type,r=t.data;n.tryInvokeEventCallback(a,r)||console.log("Unhandled connect event: ".concat(a))},this.tryInvokeEventCallback=function(e,t){var a=n.callbacks[e];return!!a&&(a(t),delete n.callbacks[e],!0)},this.user=t,this.accessToken=a,this.callbacks={},l.a.subscribe(this.handleResponse)},P=[{x:34,y:8,id:6},{x:12,y:35,id:5},{x:52,y:52,id:4},{x:7,y:76,id:3},{x:56,y:94,id:2},{x:30,y:128,id:1}],x={1:[2],2:[3,4],3:[5],4:[5],5:[6],6:[]},S={1:"completed",2:"available",3:"locked",4:"locked",5:"locked",6:"locked"};function C(e,t){var a=Object(p.a)({},e,Object(d.a)({},t,"completed"));return x[t].forEach(function(e,t,n){a[n[t]]="available"}),a}var O=function(e){var t=e.id,a=e.go,n=e.user;return r.a.createElement(g.View,{id:t,activePanel:"main"},r.a.createElement(g.Panel,{id:"main"},r.a.createElement(g.PanelHeader,null,"\u041a\u0432\u0435\u0441\u0442"),n&&r.a.createElement(g.Group,{title:"\u041f\u0440\u0438\u0432\u0435\u0442"},r.a.createElement(g.ListItem,{before:n.photo_200?r.a.createElement(g.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title||""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(g.Group,{title:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u0446\u0432\u0435\u0442"},r.a.createElement(g.Div,{style:{textAlign:"center"}},r.a.createElement(g.Button,{size:"l",level:"1",onClick:a,"data-to":"color-tiles-game"},"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"))),r.a.createElement(g.Group,{title:"\u041a\u0430\u0440\u0442\u0430 \u043a\u0432\u0435\u0441\u0442\u0430"},r.a.createElement(g.Div,{style:{textAlign:"center"}},r.a.createElement(g.Button,{size:"l",level:"1",stretched:!0,onClick:a,"data-to":"quest-map"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")))))},A=a(13),V=a.n(A),j=(a(132),a(46)),I=a.n(j),T=a(76),N=a.n(T),M=a(47),R=a.n(M),K=a(77),W=a.n(K),_=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).tileSelected=function(e){return function(){console.log(a.state.field[a.state.expectedPosition[0]][a.state.expectedPosition[1]]),a.state.initTask||(e==a.state.field[a.state.expectedPosition[0]][a.state.expectedPosition[1]]?3!==a.state.answers?(a.setState({currentPosition:a.state.expectedPosition}),a.nextTile(a.state.expectedPosition[0],a.state.expectedPosition[1]),a.setState({answers:a.state.answers+1})):a.setState({directions:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0442\u044b \u043f\u0440\u043e\u0448\u0435\u043b \u0438\u0433\u0440\u0443)"}):a.setState({initTask:!0,answers:0,directions:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0435\u0449\u0451 \u0440\u0430\u0437"}))}},a.nextTile=function(e,t){for(var n=Math.floor(4*Math.random());0==n&&0==t||1==n&&0==e||2==n&&5==t||3==n&&5==e;)n=Math.floor(4*Math.random());var r=0,s=a.state.routes;switch(a.state.initTask&&(s=["left","up","right","down"]),n){case 0:s=s.slice(1).concat(s.slice(0,1)),r=1+Math.floor(Math.random()*t),a.setState({expectedPosition:[e,t-r]});break;case 1:r=1+Math.floor(Math.random()*e),a.setState({expectedPosition:[e-r,t]});break;case 2:s=s.slice(1).reverse().concat(s.slice(0,1)),r=1+Math.floor(Math.random()*(5-t)),a.setState({expectedPosition:[e,t+r]});break;case 3:s=s.slice(2).concat(s.slice(0,2)),r=1+Math.floor(Math.random()*(5-e)),a.setState({expectedPosition:[e+r,t]})}a.setState({directions:"".concat(a.state.routes[n],", ").concat(r),routes:s})},a.initTaskTileSelected=function(e){return function(){var t;t="b"==e?2:3,a.setState({initTask:!1,currentPosition:[5,t]}),a.nextTile(5,t)}},a.state={directions:"\u0421\u0438\u043d\u044f\u044f \u0438\u043b\u0438 \u043a\u0440\u0430\u0441\u043d\u0430\u044f?",answers:0,field:[["g","y","r","g","b","r"],["r","b","y","r","g","y"],["y","r","g","b","y","g"],["r","b","y","r","b","r"],["b","r","g","y","r","y"],["r","g","b","r","b","g"]],expectedPosition:[-1,-1],initTask:!0,currentPosition:[-1,-1],routes:["left","up","right","down"]},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(g.View,{id:this.props.id,activePanel:this.state.initTask?"color-tiles-init-task":"color-tiles-main"},r.a.createElement(g.Panel,{id:"color-tiles-init-task",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(V.a,{onClick:this.props.go,"data-to":"home"})},"\u041a\u0430\u043a\u043e\u0439 \u0446\u0432\u0435\u0442 \u0442\u0432\u043e\u0439?"),r.a.createElement(g.Div,null,r.a.createElement("div",{className:"tile-directions"},this.state.directions),r.a.createElement("div",{className:"tile-row"},r.a.createElement("button",{onClick:this.initTaskTileSelected("b"),className:"tile-button",style:{backgroundImage:"url('".concat(I.a,"')")}}),r.a.createElement("button",{onClick:this.initTaskTileSelected("r"),className:"tile-button",style:{backgroundImage:"url('".concat(R.a,"')")}})))),r.a.createElement(g.Panel,{id:"color-tiles-main",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(V.a,{onClick:this.props.go,"data-to":"home"})},"\u041a\u0430\u043a\u043e\u0439 \u0446\u0432\u0435\u0442 \u0442\u0432\u043e\u0439?"),r.a.createElement(g.Div,null,r.a.createElement("div",{className:"tile-directions"},this.state.directions),r.a.createElement("div",{className:"tile-row"},r.a.createElement("button",{onClick:this.tileSelected("b"),className:"tile-button",style:{backgroundImage:"url('".concat(I.a,"')")}}),r.a.createElement("button",{onClick:this.tileSelected("r"),className:"tile-button",style:{backgroundImage:"url('".concat(R.a,"')")}})),r.a.createElement("div",{className:"tile-row"},r.a.createElement("button",{onClick:this.tileSelected("y"),className:"tile-button",style:{backgroundImage:"url('".concat(N.a,"')")}}),r.a.createElement("button",{onClick:this.tileSelected("g"),className:"tile-button",style:{backgroundImage:"url('".concat(W.a,"')")}})),r.a.createElement("div",{className:"tile-help"},"\u0412\u0441\u0442\u0430\u043d\u044c \u043b\u0438\u0446\u043e\u043c \u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0410\u0431\u0431\u0435"))))}}]),t}(r.a.Component);a(133);function D(e){var t=e.id,a=e.go,n=e.savestate;return r.a.createElement(g.View,{id:t,activePanel:"quest-map-main"},r.a.createElement(g.Panel,{id:"quest-map-main",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(V.a,{onClick:a,"data-to":"home"})},"\u041a\u0430\u0440\u0442\u0430"),r.a.createElement(g.Div,{style:{textAlign:"center"}},n?H(n,a):r.a.createElement(g.Spinner,{size:"large"}))))}var H=function(e,t){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"240",height:"510",viewBox:"0 0 63.5 134.9"},P.map(Q(e,t)))},Q=function(e,t){return function(a){var n=a.x,s=a.y,i=a.id;switch(e[i]){case"completed":return r.a.createElement("circle",{key:i,cx:n,cy:s,r:"6",className:"map-node--completed"});case"locked":return r.a.createElement("circle",{key:i,cx:n,cy:s,r:"6",className:"map-node--locked"});case"available":return r.a.createElement("circle",{key:i,cx:n,cy:s,r:"6",className:"map-node--available",onClick:t,"data-to":"monster","data-monster-id":i})}}},B=a(48),q=a.n(B),z=(a(134),a(28)),G=a.n(z),J={3:{name:"\u041b\u0435\u043a\u0446\u0438\u044f \u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0430",sprite:G.a,spriteDefeated:G.a,description:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u041a\u0430\u043b\u0438\u043d\u0438\u043d \u043f\u0440\u0438\u0434\u0435\u0442 \u043d\u0430 \u043b\u0435\u043a\u0446\u0438\u044e?",correctQr:"test",hint:r.a.createElement("p",null,"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, \u044f \u0418\u0433\u043e\u0440\u044c \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0442\u0435\u043e\u0440\u0432\u0435\u0440\u043e\u043c.")},2:{name:"\u0423\u0442\u0438\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",sprite:G.a,spriteDefeated:G.a,description:"\u0418 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0432\u043e\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440\u0435 \u0441\u0435\u0433\u0444\u043e\u043b\u0442\u043e\u0432?",correctQr:"test",hint:r.a.createElement("p",null,"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, \u044f \u0423\u0442\u0438\u043d\u0430\u0442\u043e\u0440, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u044f \u0445\u043e\u0447\u0443 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0430\u043c \u043e \u0442\u043e\u043c, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0435\u043b\u0430 \u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0435\u0431\u044f \u0443\u0447\u0438\u0442\u044c \u0424\u043e\u0440\u0442.")}},F=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).setView=function(e){return function(){return a.setState({view:e})}},a.applyQrCode=function(e){return function(){a.props.send("VKWebAppOpenQR",{},{VKWebAppOpenQRResult:function(){var t=Object(m.a)(u.a.mark(function t(n){var r,s,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.qr_data,!(s=r==e)){t.next=6;break}return i=C(a.props.savestate,a.props.monsterId),t.next=6,a.props.updateSavestate(i);case 6:a.setState({view:"monster-result",completed:s});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),VKWebAppOpenQRFailed:function(e){a.setState({view:"monster-result",completed:!1})}})}},a.state={view:"monster-intro"},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=J[this.props.monsterId];return r.a.createElement(g.View,{id:this.props.id,activePanel:this.state.view},this.renderIntroPanel(e),this.renderHintPanel(e),this.renderActionPanel(e),this.renderResultPanel(e))}},{key:"renderIntroPanel",value:function(e){var t=e.name,a=e.sprite,n=e.description;return r.a.createElement(g.Panel,{id:"monster-intro",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(V.a,{onClick:this.props.go,"data-to":"quest-map"})},t),r.a.createElement(g.Div,{style:{textAlign:"center"}},r.a.createElement("img",{className:"monster-sprite",alt:t,src:a}),r.a.createElement("p",null,n),r.a.createElement("div",{className:"button-row"},r.a.createElement(g.Button,{size:"l",level:"1",onClick:this.setView("monster-action")},"\u0412 \u0431\u043e\u0439"),r.a.createElement(g.Button,{size:"l",level:"2",onClick:this.setView("monster-hint")},"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430"))))}},{key:"renderHintPanel",value:function(e){var t=e.name,a=e.hint;return r.a.createElement(g.Panel,{id:"monster-hint",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(q.a,{children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:this.setView("monster-intro")})},t),r.a.createElement(g.Div,{style:{textAlign:"center"}},a))}},{key:"renderActionPanel",value:function(e){var t=e.name,a=e.correctQr;return r.a.createElement(g.Panel,{id:"monster-action",theme:"white"},r.a.createElement(g.PanelHeader,{left:r.a.createElement(q.a,{children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:this.setView("monster-intro")})},t),r.a.createElement(g.Div,{style:{textAlign:"center"}},r.a.createElement("div",null,r.a.createElement(g.Button,{size:"l",level:"1",onClick:this.applyQrCode(a)},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"))))}},{key:"renderResultPanel",value:function(e){var t=e.name,a=e.spriteDefeated,n=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"monster-sprite",alt:t,src:a}),r.a.createElement("p",null,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0442\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b!"),r.a.createElement(g.Button,{size:"l",level:"1",onClick:this.props.go,"data-to":"quest-map"},"\u0414\u0430\u043b\u0435\u0435")),s=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u041e\u0447\u0435\u043d\u044c \u0436\u0430\u043b\u044c, \u043d\u043e \u043a\u043e\u0434 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 :/"),r.a.createElement(g.Button,{size:"l",level:"1",onClick:this.setView("monster-action")},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"));return r.a.createElement(g.Panel,{id:"monster-result",theme:"white"},r.a.createElement(g.PanelHeader,null,t),r.a.createElement(g.Div,{style:{textAlign:"center"}},this.state.completed?n:s))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(k.a)(t).call(this,e))).go=function(e){var t=e.currentTarget.dataset,n=t.to,r=Object(h.a)(t,["to"]);a.setState({view:n,perViewProps:Object(p.a)({},a.state.perViewProps,Object(d.a)({},n,r))})},a.updateSavestate=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.vk.storage.set("savestate",JSON.stringify(t));case 2:a.setState({savestate:t});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={view:"home",perViewProps:{},vk:null,savestate:null},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Root,{activeView:this.state.view},r.a.createElement(O,{id:"home",user:this.state.vk&&this.state.vk.user,go:this.go}),r.a.createElement(_,{id:"color-tiles-game",go:this.go}),r.a.createElement(D,{id:"quest-map",go:this.go,savestate:this.state.savestate}),r.a.createElement(F,Object.assign({id:"monster",go:this.go,send:this.state.vk&&this.state.vk.send,savestate:this.state.savestate,updateSavestate:this.updateSavestate},this.state.perViewProps.monster)))}},{key:"componentDidMount",value:function(){var e=this;!function(e){if(w)e(new y(null,"dev-access-token"));else{var t=null,a=null;l.a.subscribe(function n(r){var s=r.detail,i=s.data;switch(s.type){case"VKWebAppGetUserInfoResult":t=i,l.a.send("VKWebAppGetAuthToken",{app_id:7017221});break;case"VKWebAppAccessTokenReceived":a=i.access_token,l.a.unsubscribe(n),e(new y(t,a))}}),l.a.send("VKWebAppGetUserInfo",{})}}(function(){var t=Object(m.a)(u.a.mark(function t(a){var n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.storage.get("savestate");case 2:n=t.sent,r=n&&""!=n?JSON.parse(n):S,e.setState({vk:a,savestate:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}}]),t}(r.a.Component);l.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(U,null),document.getElementById("root"))},28:function(e,t,a){e.exports=a.p+"static/media/se_ifmo_ru.ea83b28a.png"},46:function(e,t,a){e.exports=a.p+"static/media/blue.34464695.png"},47:function(e,t,a){e.exports=a.p+"static/media/red.c083d19b.png"},76:function(e,t,a){e.exports=a.p+"static/media/yellow.fc931dc4.png"},77:function(e,t,a){e.exports=a.p+"static/media/green.1799831c.png"},79:function(e,t,a){e.exports=a(135)}},[[79,1,2]]]);
//# sourceMappingURL=main.5d7c5a01.chunk.js.map