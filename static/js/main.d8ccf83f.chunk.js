(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(15),a(1)),u=a(6),s=a.n(u);var l=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:s.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"}))},p=o.a.createContext();var m=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(p).user,i=t.owner._id===c._id,u="place__button-delete ".concat(i?"":"place__button-delete_hidden"),s=t.likes.some((function(e){return e._id===c._id})),l="place__button-like ".concat(s?"place__button-like_active":"");return o.a.createElement("div",{className:"place"},o.a.createElement("img",{src:t.link,alt:t.name,className:"place__image",onClick:function(){return a(t.name,t.link)}}),o.a.createElement("button",{className:u,type:"button",onClick:function(){return r(t._id)}}),o.a.createElement("div",{className:"place__description"},o.a.createElement("h3",{className:"place__title"},t.name),o.a.createElement("div",{className:"place__like"},o.a.createElement("button",{className:l,type:"button",onClick:function(){return n(t)}}),o.a.createElement("p",{className:"place__like-count"},t.likes.length))))},d=a(7),f=a(8),_={url:"https://mesto.nomoreparties.co/v1/cohort-13",auth:"bb89f9dd-ceae-40c2-90a7-950f4a7ba36d"},h=new(function(){function e(t){Object(d.a)(this,e),this.baseUrl=t.url,this.auth=t.auth}return Object(f.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:{authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"updateUserProfile",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.json()}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:{authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))}}]),e}())(_);var b=function(e){var t=e.isOpen,a=e.className,n=e.formName,r=e.onSubmitClick,c=e.onClose,i=e.title;return o.a.createElement("div",{className:t?"popup  ".concat(a," popup_open"):"popup  ".concat(a)},o.a.createElement("form",{className:"popup__form ".concat(n),method:"post",action:"#",noValidate:!0,onSubmit:function(e){e.preventDefault(),r()}},o.a.createElement("button",{className:"popup__button-close confirmation__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c}),o.a.createElement("h3",{className:"popup__title"},i),o.a.createElement("button",{className:"popup__button-submit",type:"submit","aria-label":"\u0414\u0430"},"\u0414\u0430")))};var E=function(e){var t=e.onEditProfile,a=e.onAddPlace,r=e.onEditAvatar,c=e.onCardClick,u=o.a.useContext(p).user,s=o.a.useContext(p).cards,l=o.a.useContext(p).setCards,d=Object(n.useState)(!1),f=Object(i.a)(d,2),_=f[0],E=f[1],v=Object(n.useState)(""),C=Object(i.a)(v,2),N=C[0],k=C[1];function g(){E(!1)}function O(e){var t=e.likes.some((function(e){return e._id===u._id}));h.changeLikeCardStatus(e._id,!t).then((function(t){var a=s.map((function(a){return a._id===e._id?t:a}));l(a)})).catch((function(e){return console.log(e)}))}function j(e){E(!0),k(e)}return o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("img",{src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__logo"}),o.a.createElement("div",{className:"profile__avatar-hover",onClick:r}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__user"},o.a.createElement("h3",{className:"profile__name"},u.name),o.a.createElement("p",{className:"profile__occupation"},u.about)),o.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:t})),o.a.createElement("button",{className:"profile__add-button",type:"button",onClick:a})),o.a.createElement("section",{className:"places","aria-label":"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},s.map((function(e){return o.a.createElement(m,{key:e._id,onCardClick:c,onCardLike:O,onCardDelete:j,card:e})}))),o.a.createElement(b,{isOpen:_,onClose:g,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",className:"confirmation",formName:"confirmation__form",onSubmitClick:function(){h.deleteCard(N).then((function(){var e=s.filter((function(e){return e._id!==N}));l(e)})).catch((function(e){return console.log(e)})),g()}}))};var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var C=function(e){var t=e.isOpen,a=e.link,n=e.name,r=e.onClose;return o.a.createElement("div",{className:t?"popup show-photo popup_open":"popup show-photo"},o.a.createElement("div",{className:"show-photo__window"},o.a.createElement("button",{className:"popup__button-close show-photo__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:r}),o.a.createElement("img",{src:a.toString(),alt:n,className:"show-photo__image"}),o.a.createElement("p",{className:"show-photo__title"},n)))};var N=function(e){var t=e.isOpen,a=e.className,n=e.formName,r=e.Submit,c=e.onClose,i=e.title,u=e.children,s=e.buttonText;return o.a.createElement("div",{className:t?"popup  ".concat(a," popup_open"):"popup  ".concat(a)},o.a.createElement("form",{className:"popup__form ".concat(n),method:"post",action:"#",noValidate:!0,onSubmit:r},o.a.createElement("button",{className:"popup__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c}),o.a.createElement("h3",{className:"popup__title"},i),u,o.a.createElement("button",{className:"popup__button-submit",type:"submit"},s)))};var k=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useContext(p).user,r=o.a.useContext(p).setCurrentUser,c=o.a.useState(""),u=Object(i.a)(c,2),s=u[0],l=u[1],m=o.a.useState(""),d=Object(i.a)(m,2),f=d[0],_=d[1],b=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),E=Object(i.a)(b,2),v=E[0],C=E[1];return o.a.useEffect((function(){l(n.name),_(n.about)}),[n]),o.a.createElement(N,{isOpen:t,onClose:a,Submit:function(e){e.preventDefault(),C("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),h.updateUserProfile(s,f).then((function(e){r(e),a(),C("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})).catch((function(e){return console.log(e)}))},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:v,children:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"input-name",className:"popup__input edit-profile__input-name",type:"text",value:s||"",onChange:function(e){return l(e.target.value)},name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:2,maxLength:40,pattern:"^[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]+$",required:!0}),o.a.createElement("span",{id:"input-name-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"input-occupation",className:"popup__input edit-profile__input-occupation",type:"text",value:f||"",onChange:function(e){return _(e.target.value)},name:"occupation",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",minLength:2,maxLength:200,required:!0}),o.a.createElement("span",{id:"input-occupation-error",className:"popup__input-error"})))})};var g=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useContext(p).setCurrentUser,r=o.a.useRef(),c=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),u=Object(i.a)(c,2),s=u[0],l=u[1];return o.a.createElement(N,{isOpen:t,className:"change-avatar",formName:"change-avatar__form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:s,onClose:a,Submit:function(e){e.preventDefault(),l("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),h.setUserAvatar(r.current.value).then((function(e){n(e),a(),r.current.value="",l("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})).catch((function(e){return console.log(e)}))},children:o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input change-avatar__input-link",ref:r,type:"url",id:"change-avatar__input-link",name:"link",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"change-avatar__input-link-error",className:"popup__input-error"}))})},O=a(9);var j=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useState(""),r=Object(i.a)(n,2),c=r[0],u=r[1],s=o.a.useState(""),l=Object(i.a)(s,2),m=l[0],d=l[1],f=o.a.useContext(p).cards,_=o.a.useContext(p).setCards,b=o.a.useState("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),E=Object(i.a)(b,2),v=E[0],C=E[1];return o.a.createElement(N,{isOpen:t,className:"add-card",formName:"add-card__form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:v,Submit:function(e){e.preventDefault(),C("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),h.addNewCard(c,m).then((function(e){_([e].concat(Object(O.a)(f))),C("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")})).catch((function(e){return console.log(e)})),d(""),u(""),a()},onClose:a,children:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input add-card__input-name",type:"text",id:"input-place-name",name:"name",value:c,onChange:function(e){return u(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:2,maxLength:30,required:!0}),o.a.createElement("span",{id:"input-place-name-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input add-card__input-link",type:"url",id:"input-place-link",name:"link",value:m,onChange:function(e){return d(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"input-place-link-error",className:"popup__input-error"})))})};a(16);var y=function(){return o.a.createElement("div",{className:"Spinner"})};var S=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),_=f[0],b=f[1],N=Object(n.useState)(!1),O=Object(i.a)(N,2),S=O[0],x=O[1],P=Object(n.useState)(!1),U=Object(i.a)(P,2),T=U[0],w=U[1],L=Object(n.useState)({isOpen:!1,name:"",link:""}),A=Object(i.a)(L,2),z=A[0],D=A[1],q=o.a.useState(!0),J=Object(i.a)(q,2),I=J[0],V=J[1];function F(){w(!1),b(!1),x(!1),D({isOpen:!1,name:"",link:""})}return Object(n.useEffect)((function(){Promise.all([h.getUserInfo(),h.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];m(n),r(a)})).then((function(){return V(!1)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(p.Provider,{value:{user:a,cards:s,setCards:m,setCurrentUser:r}},o.a.createElement(l,null),I?o.a.createElement(y,null):o.a.createElement(E,{onEditProfile:function(){b(!0)},onAddPlace:function(){x(!0)},onEditAvatar:function(){w(!0)},onCardClick:function(e,t){D({isOpen:!0,name:e,link:t})}}),o.a.createElement(v,null),o.a.createElement(k,{isOpen:_,onClose:F}),o.a.createElement(j,{isOpen:S,onClose:F}),o.a.createElement(g,{isOpen:T,onClose:F}),o.a.createElement(C,Object.assign({},z,{onClose:F})))};c.a.render(o.a.createElement(S,null),document.querySelector("#root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d8ccf83f.chunk.js.map