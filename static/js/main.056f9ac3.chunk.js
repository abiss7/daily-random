(this["webpackJsonpdaily-random"]=this["webpackJsonpdaily-random"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),s=(a(21),a(7)),c=a(8),l=a(6),u=a(11),m=a(10),p=(a(22),a(23),a(31)),h=a(30),v={center:[51.505,-.09],zoom:13},d=(n.Component,a(26),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.dadoImg?r.a.createElement("img",{src:"".concat("/daily-random","/images/logo192.png")}):r.a.createElement("div",{className:"Dado-recuadro"},this.props.valor)}}]),a}(n.Component)),g=(a(27),{equipo:[],participante:"",nuevo:"",imagenDado:!0}),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=JSON.parse(JSON.stringify(g)),n.tirar=n.tirar.bind(Object(l.a)(n)),n.agregar=n.agregar.bind(Object(l.a)(n)),n.quitar=n.quitar.bind(Object(l.a)(n)),n.reset=n.reset.bind(Object(l.a)(n)),n.setNuevo=n.setNuevo.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"tirar",value:function(){var e=this.state.equipo.length,t=Math.round(Math.floor(Math.random()*Math.floor(e))),a=this.state.equipo[t],n=this.state.equipo.filter((function(e){return e!==a}));this.setState({equipo:n,participante:a,imagenDado:!1})}},{key:"agregar",value:function(){var e=this;if(""!=this.state.nuevo&&!this.state.equipo.find((function(t){return t.toUpperCase()===e.state.nuevo.toUpperCase()}))){var t=this.state.equipo;t.push(this.state.nuevo),this.setState({equipo:t,nuevo:""})}}},{key:"quitar",value:function(){var e=this;if(null!=this.state.nuevo){var t=this.state.equipo;t=this.state.equipo.filter((function(t){return t.toUpperCase()!==e.state.nuevo.toUpperCase()})),this.setState({equipo:t,nuevo:""})}}},{key:"reset",value:function(){var e=JSON.parse(JSON.stringify(g));this.setState({equipo:e.equipo,participante:e.participante,nuevo:e.nuevo,imagenDado:e.imagenDado})}},{key:"setNuevo",value:function(e){var t=e.target.value;this.setState({nuevo:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row center text-center"},this.state.equipo.length>0&&this.state.equipo.map((function(e){return r.a.createElement("div",{key:Math.random(),className:"col-1 m-2"},r.a.createElement(d,{valor:e}))})),0===this.state.equipo.length&&r.a.createElement("h2",null,"Daily!!!")),r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.quitar},"-")),r.a.createElement("div",{className:"col-4"},r.a.createElement("input",{className:"form-control",type:"text",value:this.state.nuevo,onChange:this.setNuevo,placeholder:"Participante"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.agregar},"+")))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row center"},r.a.createElement(d,{valor:this.state.participante||"Daily!!!",dadoImg:this.state.imagenDado})),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.tirar,disabled:0===this.state.equipo.length},"Tirar"),0===this.state.equipo.length&&r.a.createElement("button",{className:"btn btn-primary m-2",onClick:this.reset},"Reset")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.056f9ac3.chunk.js.map