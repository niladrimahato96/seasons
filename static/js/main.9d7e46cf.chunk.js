(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),c=a(4),o=a(7),i=a(0),l=a.n(i),u=a(5),m=a.n(u),d=(a(13),{winter:{text:"It's Chilly. Use Sweater",iconName:"snowflake"},summer:{text:"Let's hit the beach!",iconName:"sun"}}),g=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,c=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left ".concat(c," massive icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right ".concat(c," massive icon")}))},v=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};v.defaultProps={message:"Loading..."};var f=v,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={lat:null,errMessage:""},a.renderContent=function(){return a.state.errMessage&&!a.state.lat?l.a.createElement("div",null,"Error: ",a.state.errMessage):!a.state.errMessage&&a.state.lat?l.a.createElement(g,{lat:a.state.lat}):a.state.errMessage||a.state.lat?void 0:l.a.createElement(f,{message:"Please accept location request"})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errMessage:t.message})})}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderContent())}}]),t}(l.a.Component);m.a.render(l.a.createElement(w,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.9d7e46cf.chunk.js.map