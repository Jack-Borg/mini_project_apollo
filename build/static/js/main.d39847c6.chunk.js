(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},40:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(24),c=a.n(l),m=(a(39),a(31)),u=a(32),s=a(16),o=a(17),i=a(30),E=a(9),d=a.n(E),p=a(29);a(40);function f(){var e=Object(s.a)(["\n\t\t\tmutation {\n\t\t\t\tresetUsers\n\t\t\t}\n\t\t"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n\t\t\tmutation($user: UserInput!) {\n\t\t\t\tcreateUser(input: $user){\n                    ","\n                }\n\t\t\t}\n\t\t"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\n        {\n            getAllUsers {\n                ","\n            }\n        }\n        "]);return v=function(){return e},e}var h=new i.a({uri:"https://jackborg.dk/graphql/"});function N(e){var t=e.newUser,a=e.updateNewUser,n=e.submitNewUser;return r.a.createElement("form",{className:"row",onSubmit:n},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter username",name:"username",value:t.userName,onChange:a,required:!0}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",value:t.email,onChange:a,required:!0}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Firstname"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter firstname",name:"firstName",value:t.firstName,onChange:a,required:!0}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Lastname"),r.a.createElement("input",{type:"test",className:"form-control",placeholder:"Enter lastname",name:"lastName",value:t.lastName,onChange:a,required:!0}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:t.password,onChange:a,required:!0}))),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}function g(e){var t=e.users;if(0===t.length)return r.a.createElement("p",null,"no data yet");var a=Object.keys(t[0]).slice(0,-1);return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){return r.a.createElement("th",{key:e},e)}))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.username},Object.keys(e).slice(0,-1).map(function(t){return r.a.createElement("td",{key:t},e[t])}))})))}function w(e){var t=e.handleCheck;return r.a.createElement("div",null,r.a.createElement("label",null,"username",r.a.createElement("input",{type:"checkbox",value:"username",onChange:t,defaultChecked:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"firstName",r.a.createElement("input",{type:"checkbox",value:"firstName",onChange:t})),r.a.createElement("br",null),r.a.createElement("label",null,"lastName",r.a.createElement("input",{type:"checkbox",value:"lastName",onChange:t})),r.a.createElement("br",null),r.a.createElement("label",null,"email",r.a.createElement("input",{type:"checkbox",value:"email",onChange:t,defaultChecked:!0})))}var y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(["_id","username","email"]),s=Object(o.a)(c,2),i=s[0],E=s[1],y=Object(n.useState)({username:"",firstName:"",lastName:"",email:"",password:""}),k=Object(o.a)(y,2),j=k[0],C=k[1];function O(){var e=d()(v(),i.join(" "));h.query({query:e,fetchPolicy:"no-cache"}).then(function(e){return l(e.data.getAllUsers)})}return Object(n.useEffect)(function(){return O()}),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{client:h},r.a.createElement(g,{users:a})),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault();var t=d()(f());h.mutate({mutation:t}).then(O())}},"Reset users"),r.a.createElement("hr",null),r.a.createElement(w,{handleCheck:function(e){var t=e.target.value;e.target.checked?i.push(t):i=i.filter(function(e){return e!==t}),E(i),O()}}),r.a.createElement("hr",null),r.a.createElement(N,{newUser:j,updateNewUser:function(e){var t=e.target.name,a=e.target.value;j[t]=a,C(Object(u.a)({},j))},submitNewUser:function(e){e.preventDefault();var t=d()(b(),i.join(" "));h.mutate({mutation:t,variables:{user:j}}).then(function(e){var t=e.data.createUser;a.push(t),l(Object(m.a)(a))})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.d39847c6.chunk.js.map