(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);a(78),a(103);var n=a(0),i=a.n(n),r=a(42),l=a.n(r),c=a(24),o=a.n(c),s=a(15),m=a(26),d=a(76),u=a(9),p=a(10),h=a(12),v=a(11),b=a(13),E=a(1),k=(a(123),function(e){var t=e.id,a=e.go,n=e.user;return i.a.createElement(E.View,{id:t,activePanel:"main"},i.a.createElement(E.Panel,{id:"main"},i.a.createElement(E.PanelHeader,null,"\u041a\u0432\u0435\u0441\u0442"),n&&i.a.createElement(E.Group,{title:"\u041f\u0440\u0438\u0432\u0435\u0442"},i.a.createElement(E.ListItem,{before:n.photo_200?i.a.createElement(E.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title||""},"".concat(n.first_name," ").concat(n.last_name))),i.a.createElement(E.Group,{title:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u0446\u0432\u0435\u0442"},i.a.createElement(E.Div,{style:{textAlign:"center"}},i.a.createElement(E.Button,{size:"l",level:"1",onClick:a,"data-to":"color-tiles-game"},"\u041f\u043e\u0435\u0445\u0430\u043b\u0438"))),i.a.createElement(E.Group,{title:"\u041a\u0430\u0440\u0442\u0430 \u043a\u0432\u0435\u0441\u0442\u0430"},i.a.createElement(E.Div,{style:{textAlign:"center"}},i.a.createElement(E.Button,{size:"l",level:"1",stretched:!0,onClick:a,"data-to":"quest-map"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")))))}),f=a(16),g=a.n(f),w=(a(128),a(43)),y=a.n(w),P=a(72),x=a.n(P),C=a(44),O=a.n(C),S=a(73),j=a.n(S),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).tileSelected=function(e){return function(){a.state.initTask||(3!==a.state.answers?(a.setState({currentPosition:a.state.expectedPosition}),a.nextTile(a.state.expectedPosition[0],a.state.expectedPosition[1]),a.setState({answers:a.state.answers+1})):a.setState({directions:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0442\u044b \u043f\u0440\u043e\u0448\u0435\u043b \u0438\u0433\u0440\u0443)"}))}},a.nextTile=function(e,t){for(var n=Math.floor(4*Math.random());0==n&&0==t||1==n&&0==e||2==n&&5==t||3==n&&5==e;)n=Math.floor(4*Math.random());var i="",r=0;switch(n){case 0:i="left",r=1+Math.floor(Math.random()*t),a.setState({expectedPosition:[e,t-r]});break;case 1:i="up",r=1+Math.floor(Math.random()*e),a.setState({expectedPosition:[e-r,t]});break;case 2:i="right",r=1+Math.floor(Math.random()*(5-t)),a.setState({expectedPosition:[e,t+r]});break;case 3:i="down",r=1+Math.floor(Math.random()*(5-e)),a.setState({expectedPosition:[e+r,t]})}a.setState({directions:"".concat(i,", ").concat(r)})},a.initTaskTileSelected=function(e){return function(){var t;t="b"==e?2:3,a.setState({initTask:!1,currentPosition:[5,t]}),a.nextTile(5,t)}},a.state={directions:"\u0421\u0438\u043d\u044f\u044f \u0438\u043b\u0438 \u043a\u0440\u0430\u0441\u043d\u0430\u044f?",answers:0,field:[["g","y","r","g","b","r"],["r","b","y","r","g","y"],["y","r","g","b","y","g"],["r","b","y","r","b","r"],["b","r","g","y","r","y"],["r","g","b","r","b","g"]],expectedPosition:[-1,-1],initTask:!0,currentPosition:[-1,-1]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(E.View,{id:this.props.id,activePanel:this.state.initTask?"color-tiles-init-task":"color-tiles-main"},i.a.createElement(E.Panel,{id:"color-tiles-init-task",theme:"white"},i.a.createElement(E.PanelHeader,{left:i.a.createElement(g.a,{onClick:this.props.go,"data-to":"home"})},"\u041a\u0430\u043a\u043e\u0439 \u0446\u0432\u0435\u0442 \u0442\u0432\u043e\u0439?"),i.a.createElement(E.Div,null,i.a.createElement("div",{className:"tile-directions"},this.state.directions),i.a.createElement("div",{className:"tile-row"},i.a.createElement("button",{onClick:this.initTaskTileSelected("b"),className:"tile-button",style:{backgroundImage:"url('".concat(y.a,"')")}}),i.a.createElement("button",{onClick:this.initTaskTileSelected("r"),className:"tile-button",style:{backgroundImage:"url('".concat(O.a,"')")}})))),i.a.createElement(E.Panel,{id:"color-tiles-main",theme:"white"},i.a.createElement(E.PanelHeader,{left:i.a.createElement(g.a,{onClick:this.props.go,"data-to":"home"})},"\u041a\u0430\u043a\u043e\u0439 \u0446\u0432\u0435\u0442 \u0442\u0432\u043e\u0439?"),i.a.createElement(E.Div,null,i.a.createElement("div",{className:"tile-directions"},this.state.directions),i.a.createElement("div",{className:"tile-row"},i.a.createElement("button",{onClick:this.tileSelected("b"),className:"tile-button",style:{backgroundImage:"url('".concat(y.a,"')")}}),i.a.createElement("button",{onClick:this.tileSelected("r"),className:"tile-button",style:{backgroundImage:"url('".concat(O.a,"')")}})),i.a.createElement("div",{className:"tile-row"},i.a.createElement("button",{onClick:this.tileSelected("y"),className:"tile-button",style:{backgroundImage:"url('".concat(x.a,"')")}}),i.a.createElement("button",{onClick:this.tileSelected("g"),className:"tile-button",style:{backgroundImage:"url('".concat(j.a,"')")}})),i.a.createElement("div",{className:"tile-help"},"\u0412\u0441\u0442\u0430\u043d\u044c \u043b\u0438\u0446\u043e\u043c \u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0410\u0431\u0431\u0435"))))}}]),t}(i.a.Component),I=(a(129),[{x:34,y:8,id:6},{x:12,y:35,id:5},{x:52,y:52,id:4},{x:7,y:76,id:3},{x:56,y:94,id:2},{x:30,y:128,id:1}]);var M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).renderMapNode=function(e){return function(t){var n=t.x,r=t.y,l=t.id;switch(e[l]){case"completed":return i.a.createElement("circle",{key:l,cx:n,cy:r,r:"6",className:"map-node--completed"});case"locked":return i.a.createElement("circle",{key:l,cx:n,cy:r,r:"6",className:"map-node--locked"});case"available":return i.a.createElement("circle",{key:l,cx:n,cy:r,r:"6",className:"map-node--available",onClick:a.props.go,"data-to":"monster-view","data-monster-id":l})}}},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(E.View,{id:this.props.id,activePanel:"quest-map-main"},i.a.createElement(E.Panel,{id:"quest-map-main",theme:"white"},i.a.createElement(E.PanelHeader,{left:i.a.createElement(g.a,{onClick:this.props.go,"data-to":"home"})},"\u041a\u0430\u0440\u0442\u0430"),i.a.createElement(E.Div,{style:{textAlign:"center"}},this.renderSvgMap())))}},{key:"renderSvgMap",value:function(){var e={1:"completed",2:"available",3:"locked",4:"locked",5:"locked",6:"locked"};return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"240",height:"510",viewBox:"0 0 63.5 134.9"},I.map(this.renderMapNode(e)))}}]),t}(i.a.Component),N=a(74),V=a.n(N),T=a(75),R={2:{name:"\u0423\u0442\u0438\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",sprite:a.n(T).a,description:"\u0418 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0432\u043e\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440\u0435 \u0441\u0435\u0433\u0444\u043e\u043b\u0442\u043e\u0432?",correctQr:"test",hints:i.a.createElement("p",null,"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c, \u044f \u0423\u0442\u0438\u043d\u0430\u0442\u043e\u0440, \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u044f \u0445\u043e\u0447\u0443 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0430\u043c \u043e \u0442\u043e\u043c, \u043f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0435\u043b\u0430 \u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0435\u0431\u044f \u0443\u0447\u0438\u0442\u044c \u0424\u043e\u0440\u0442.")}},q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).applyQrCode=function(e){return function(){a.props.send("VKWebAppOpenQR",{},{VKWebAppOpenQRResult:function(t){var n=t.qr_data==e;a.setState({view:"monster-view-result",completed:n})},VKWebAppOpenQRFailed:function(e){a.setState({view:"monster-view-result",completed:!1})}})}},a.state={view:"monster-view-intro"},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=R[this.props.monsterId];return i.a.createElement(E.View,{id:this.props.id,activePanel:this.state.view},this.renderIntroPanel(e),this.renderActionPanel(e),this.renderResultPanel(e))}},{key:"renderIntroPanel",value:function(e){var t=this,a=e.name,n=e.sprite,r=e.description;return i.a.createElement(E.Panel,{id:"monster-view-intro",theme:"white"},i.a.createElement(E.PanelHeader,{left:i.a.createElement(g.a,{onClick:this.props.go,"data-to":"quest-map"})},a),i.a.createElement(E.Div,{style:{textAlign:"center"}},i.a.createElement("img",{alt:a,src:n}),i.a.createElement("p",null,r),i.a.createElement("div",null,i.a.createElement(E.Button,{size:"l",level:"1",onClick:function(){return t.setState({view:"monster-view-action"})}},"\u0412 \u0431\u043e\u0439"),i.a.createElement(E.Button,{size:"l",level:"2"},"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430"))))}},{key:"renderActionPanel",value:function(e){var t=this,a=e.name,n=e.correctQr;return i.a.createElement(E.Panel,{id:"monster-view-action",theme:"white"},i.a.createElement(E.PanelHeader,{left:i.a.createElement(V.a,{children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(){return t.setState({view:"monster-view-intro"})}})},a),i.a.createElement(E.Div,{style:{textAlign:"center"}},i.a.createElement("div",null,i.a.createElement(E.Button,{size:"l",level:"1",onClick:this.applyQrCode(n)},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"))))}},{key:"renderResultPanel",value:function(e){var t=this,a=e.name,n=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0442\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b!"),i.a.createElement(E.Button,{size:"l",level:"1",onClick:this.props.go,"data-to":"quest-map"},"\u0414\u0430\u043b\u0435\u0435")),r=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"\u041e\u0447\u0435\u043d\u044c \u0436\u0430\u043b\u044c, \u043d\u043e \u043a\u043e\u0434 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 :/"),i.a.createElement(E.Button,{size:"l",level:"1",onClick:function(){return t.setState({view:"monster-view-action"})}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"));return i.a.createElement(E.Panel,{id:"monster-view-result",theme:"white"},i.a.createElement(E.PanelHeader,null,a),i.a.createElement(E.Div,{style:{textAlign:"center"}},this.state.completed?n:r))}}]),t}(i.a.Component),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).go=function(e){var t=e.currentTarget.dataset,n=t.to,i=Object(d.a)(t,["to"]);a.setState({view:n,perViewProps:Object(m.a)(Object(s.a)({},n,i),a.state.perViewProps)})},a.sendConnectRequest=function(e,t,n){a.setState({connectCallbacks:n}),o.a.send(e,t)},a.tryInvokeEventCallback=function(e,t){var n=a.state.connectCallbacks[e];return!!n&&(n(t),a.setState({connectCallbacks:Object(m.a)({},a.state.connectCallbacks,Object(s.a)({},e,void 0))}),!0)},a.state={view:"home",perViewProps:{},user:null,connectCallbacks:{}},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(E.Root,{activeView:this.state.view},i.a.createElement(k,{id:"home",user:this.state.user,go:this.go}),i.a.createElement(A,{id:"color-tiles-game",go:this.go}),i.a.createElement(M,{id:"quest-map",go:this.go}),i.a.createElement(q,Object.assign({id:"monster-view",go:this.go,send:this.sendConnectRequest},this.state.perViewProps["monster-view"])))}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({user:t.detail.data});break;default:e.tryInvokeEventCallback(t.detail.type,t.detail.data)||"VKWebAppOpenQR"===t.detail.handler&&e.tryInvokeEventCallback("VKWebAppOpenQRResult",{qr_data:"test"})||console.log("Unhandled connect event: ".concat(t.detail.type))}}),o.a.send("VKWebAppGetUserInfo",{})}}]),t}(i.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(i.a.createElement(B,null),document.getElementById("root"))},43:function(e,t,a){e.exports=a.p+"static/media/blue.34464695.png"},44:function(e,t,a){e.exports=a.p+"static/media/red.c083d19b.png"},72:function(e,t,a){e.exports=a.p+"static/media/yellow.fc931dc4.png"},73:function(e,t,a){e.exports=a.p+"static/media/green.1799831c.png"},75:function(e,t,a){e.exports=a.p+"static/media/se_ifmo_ru.ea83b28a.png"},77:function(e,t,a){e.exports=a(130)}},[[77,1,2]]]);
//# sourceMappingURL=main.251deb7e.chunk.js.map