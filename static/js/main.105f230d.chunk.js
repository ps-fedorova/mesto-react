(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.9d0e3a93.svg"},function(e,a,t){e.exports=t.p+"static/media/edit.a41c84ef.svg"},function(e,a,t){e.exports=t.p+"static/media/plus.3742cf7e.svg"},function(e,a,t){e.exports=t.p+"static/media/trash.9c3b03ae.svg"},function(e,a,t){e.exports=t.p+"static/media/close.c2d0901f.svg"},,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(5),s=t.n(o),c=(t(19),t(13)),i=t(1),l=t(6),u=t.n(l);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabMesto Russia\xbb",className:"header__logo",src:u.a}))},m=t(7),d=t.n(m),_=t(8),f=t.n(_),v=t(9),E=t.n(v),b=r.a.createContext(null);var h=function(e){var a=e.card,t=r.a.useContext(b),n=a.owner._id===t._id,o="button card__button-delete ".concat(n?"":"card__button-delete_invisible"),s=a.likes.some((function(e){return e._id===t._id})),c="button card__button-like ".concat(s?"card__button-like_solid":"");return r.a.createElement("li",{className:"card"},r.a.createElement("img",{src:a.link,alt:a.name,className:"card__image",onClick:function(){e.onCardZoom(a)}}),r.a.createElement("button",{className:o,type:"submit",onClick:function(){e.onCardDelete(a)}},r.a.createElement("img",{alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"card__button-delete-vector",src:E.a})),r.a.createElement("div",{className:"card__description"},r.a.createElement("h2",{className:"card__name"},a.name),r.a.createElement("div",{className:"card__likes-container"},r.a.createElement("button",{className:c,type:"submit",onClick:function(){e.onCardLike(a)}}),r.a.createElement("p",{className:"card__count-likes"},a.likes.length))))};var g=function(e){var a=r.a.useContext(b);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__position"},r.a.createElement("button",{className:"button profile__avatar-edit",type:"button",onClick:e.onEditAvatar,onKeyDown:e.onEditAvatar},r.a.createElement("img",{src:a.avatar,alt:a.name,className:"profile__avatar-image"})),r.a.createElement("div",{className:"profile__user-info"},r.a.createElement("div",{className:"profile__name-edit-position"},r.a.createElement("h1",{className:"profile__user-info-name"},a.name),r.a.createElement("button",{className:"button profile__button-edit",type:"button",onClick:e.onEditProfile,onKeyDown:e.onEditProfile},r.a.createElement("img",{alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__button-edit-vector",src:d.a}))),r.a.createElement("p",{className:"profile__user-info-about"},a.about))),r.a.createElement("button",{className:"button profile__button-add",type:"button",onClick:e.onAddCard,onKeyDown:e.onAddCard},r.a.createElement("img",{alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__button-add-vector",src:f.a}))),r.a.createElement("ul",{className:"card-container"},e.cards.map((function(a){return r.a.createElement(h,{key:a._id,card:a,onCardLike:e.onCardLike,onCardZoom:e.onCardZoom,onCardDelete:e.onCardDelete})}))))};var C=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__\u0441opyright"},"\xa9 2020 Mesto Russia"))},N=t(10),k=t.n(N);var y=function(e){return r.a.createElement("img",{className:"button popup__close",onClick:e.closeHandler,src:k.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})};var O=function(e){return r.a.createElement("div",{className:"popup popup__closed popup__zoom-card ".concat(e.isOpen&&"popup_opened")},r.a.createElement("div",{className:"popup__zoom"},r.a.createElement("img",{src:e.image.link,alt:e.image.name,className:"popup__image"}),r.a.createElement(y,{closeHandler:e.onClose}),r.a.createElement("h2",{className:"popup__card-name"},e.image.name)),r.a.createElement("div",{className:"popup__overlay",onClick:e.onClose}))};var S=function(e){return r.a.createElement("div",{className:"popup popup__closed popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement(y,{closeHandler:e.onClose}),r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{className:"popup__form",name:e.name,noValidate:!0},e.children," ",r.a.createElement("button",{type:"submit",className:"button popup__button ".concat(e.isDisabled?"popup__button_disabled":""),onClick:e.onSubmit},e.submitName," "))),r.a.createElement("div",{className:"popup__overlay",onClick:e.onClose}))};var I=function(e){return r.a.createElement(S,{name:"areYouSure",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitName:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onCardDelete()}})};var j=function(e){var a=r.a.useContext(b),t=r.a.useState(""),n=Object(i.a)(t,2),o=n[0],s=n[1],c=r.a.useState({classInput:"",classError:"",errorMessage:""}),l=Object(i.a)(c,2),u=l[0],p=l[1],m=r.a.useState(""),d=Object(i.a)(m,2),_=d[0],f=d[1],v=r.a.useState({classInput:"",classError:"",errorMessage:""}),E=Object(i.a)(v,2),h=E[0],g=E[1],C=r.a.useState(!0),N=Object(i.a)(C,2),k=N[0],y=N[1],O=r.a.useState(!1),I=Object(i.a)(O,2),j=I[0],M=I[1];return r.a.useEffect((function(){s(a.name),f(a.about)}),[a]),r.a.createElement(S,{isOpen:e.isOpen,onClose:function(){e.onClose(),s(a.name),f(a.about),y(!0),p({classInput:"",classError:"",errorMessage:""}),g({classInput:"",classError:"",errorMessage:""})},name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isDisabled:!k,submitName:j?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(a){a.preventDefault(),M(!0),e.onUpdateUser({name:o,about:_}).catch((function(e){return console.log(e)})).finally((function(){y(!0),M(!1)}))}},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_user-name ".concat(u.classInput),id:"name",maxLength:"40",name:"name",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]+[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]+[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s]*",placeholder:"\u0418\u043c\u044f",value:o,onChange:function(e){s(e.target.value),e.target.validity.valid?(p({classInput:"",classError:"",errorMessage:""}),y(!0)):(p({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),y(!1))},type:"text",required:!0}),r.a.createElement("span",{className:"popup__error ".concat(u.classError),id:"about-error"},u.errorMessage)),r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_user-about ".concat(h.classInput),id:"about",maxLength:"200",minLength:"2",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:_,onChange:function(e){f(e.target.value),e.target.validity.valid?(g({classInput:"",classError:"",errorMessage:""}),y(!0)):(g({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),y(!1))},type:"text",required:!0}),r.a.createElement("span",{className:"popup__error ".concat(h.classError),id:"about-error"},h.errorMessage)))};var M=function(e){var a=r.a.createRef(),t=r.a.useState({classInput:"",classError:"",errorMessage:""}),n=Object(i.a)(t,2),o=n[0],s=n[1],c=r.a.useState(!1),l=Object(i.a)(c,2),u=l[0],p=l[1],m=r.a.useState(!1),d=Object(i.a)(m,2),_=d[0],f=d[1];return r.a.createElement(S,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:function(){e.onClose(),s({classInput:"",classError:"",errorMessage:""}),p(!1),a.current.value=""},onSubmit:function(t){t.preventDefault(),f(!0),e.onUpdateAvatar({avatar:a.current.value}).catch((function(e){return console.error(e)})).finally((function(){p(!1),f(!1)})),a.current.value=""},isDisabled:!u,submitName:_?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input ".concat(o.classInput),id:"link-avatar",ref:a,onChange:function(){var e=a.current;e.validity.valid?(s({classInput:"",classError:"",errorMessage:""}),p(!0)):(s({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.validationMessage}),p(!1))},name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"}),r.a.createElement("span",{className:"popup__error ".concat(o.classError),id:"link-avatar-error"},o.errorMessage)))};var z=function(e){var a=r.a.useState(""),t=Object(i.a)(a,2),n=t[0],o=t[1],s=r.a.useState({classInput:"",classError:"",errorMessage:""}),c=Object(i.a)(s,2),l=c[0],u=c[1],p=r.a.useState(""),m=Object(i.a)(p,2),d=m[0],_=m[1],f=r.a.useState({classInput:"",classError:"",errorMessage:""}),v=Object(i.a)(f,2),E=v[0],b=v[1],h=r.a.useState(!1),g=Object(i.a)(h,2),C=g[0],N=g[1],k=r.a.useState(!1),y=Object(i.a)(k,2),O=y[0],I=y[1];return r.a.createElement(S,{name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:function(){e.onClose(),N(!1),u({classInput:"",classError:"",errorMessage:""}),b({classInput:"",classError:"",errorMessage:""}),o(""),_("")},onSubmit:function(a){a.preventDefault(),I(!0),e.onAddCardSubmit({name:n,link:d}).catch((function(e){return console.log(e)})).finally((function(){N(!1),I(!1)})),o(""),_("")},submitName:O?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isDisabled:!C},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_new-card ".concat(l.classInput),id:"name-card",maxLength:"30",minLength:"2",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text",value:n,onChange:function(e){o(e.target.value),e.target.validity.valid?(u({classInput:"",classError:"",errorMessage:""}),N(!0)):(u({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),N(!1))}}),r.a.createElement("span",{className:"popup__error ".concat(l.classError),id:"about-error"},l.errorMessage)),r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_new-card-link ".concat(E.classInput),id:"link",name:"src",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",value:d,onChange:function(e){_(e.target.value),e.target.validity.valid?(b({classInput:"",classError:"",errorMessage:""}),N(!0)):(b({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),N(!1))}}),r.a.createElement("span",{className:"popup__error ".concat(E.classError),id:"about-error"},E.errorMessage)))},w=t(11),A=t(12),D=new(function(){function e(a){var t=a.baseUrl,n=a.authorization;Object(w.a)(this,e),this._baseUrl=t,this._authorization=n}return Object(A.a)(e,[{key:"_fetch",value:function(e,a){return fetch(this._baseUrl+e,a).then((function(e){return e.ok?e.json():Promise.reject("\u041d\u0443 \u0432\u043e\u0442, \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e (\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,")"))}))}},{key:"getInitialUserInfo",value:function(){return this._fetch("/users/me",{method:"GET",headers:{authorization:this._authorization}})}},{key:"editUserInfo",value:function(e){var a=e.name,t=e.about;return this._fetch("/users/me",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:a,about:t})})}},{key:"editUserAvatar",value:function(e){var a=e.avatar;return this._fetch("/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:a})})}},{key:"getInitialCards",value:function(){return this._fetch("/cards",{method:"GET",headers:{authorization:this._authorization}})}},{key:"postUserCard",value:function(e){var a=e.name,t=e.link;return this._fetch("/cards",{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:a,link:t})})}},{key:"deleteCard",value:function(e){return this._fetch("/cards/"+e,{method:"DELETE",headers:{authorization:this._authorization}})}},{key:"changeLikeCardStatus",value:function(e,a){return this._fetch("/cards/likes/"+e,{method:a?"PUT":"DELETE",headers:{authorization:this._authorization}})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",authorization:"2ecad59e-1d15-4621-aac6-769c45c3d932"});var U=function(){var e=r.a.useState({name:"",avatar:"",about:"",_id:""}),a=Object(i.a)(e,2),t=a[0],n=a[1],o=r.a.useState([]),s=Object(i.a)(o,2),l=s[0],u=s[1],m=r.a.useState(!1),d=Object(i.a)(m,2),_=d[0],f=d[1],v=r.a.useState(!1),E=Object(i.a)(v,2),h=E[0],N=E[1],k=r.a.useState(!1),y=Object(i.a)(k,2),S=y[0],w=y[1],A=r.a.useState(!1),U=Object(i.a)(A,2),x=U[0],L=U[1],T=r.a.useState({link:"",name:""}),P=Object(i.a)(T,2),Z=P[0],q=P[1],H=r.a.useState(!1),J=Object(i.a)(H,2),K=J[0],R=J[1],B=r.a.useState({}),G=Object(i.a)(B,2),W=G[0],V=G[1];function Y(){f(!1),N(!1),w(!1),L(!1),R(!1)}return r.a.useEffect((function(){Promise.all([D.getInitialUserInfo(),D.getInitialCards()]).then((function(e){var a=Object(i.a)(e,2),t=a[0],r=a[1];n(t),u(r)})).catch((function(e){return console.log(e)}))}),[]),r.a.useEffect((function(){var e=function(e){"Escape"===e.key&&Y()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),r.a.createElement(b.Provider,{value:t},r.a.createElement(p,null),r.a.createElement(g,{onEditAvatar:function(){f(!0)},onEditProfile:function(){N(!0)},onAddCard:function(){w(!0)},onCardZoom:function(e){R(!0),q({link:e.link,name:e.name})},onCardDelete:function(e){V(e),L(!0)},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===t._id}));D.changeLikeCardStatus(e._id,!a).then((function(a){var t=l.map((function(t){return t._id===e._id?a:t}));u(t)})).catch((function(e){console.log(e)}))},cards:l}),r.a.createElement(C,null),r.a.createElement(M,{isOpen:_,onClose:Y,onUpdateAvatar:function(e){var a=e.avatar;return D.editUserAvatar({avatar:a}).then((function(e){n(e),Y()}))}}),r.a.createElement(j,{isOpen:h,onClose:Y,onUpdateUser:function(e){var a=e.name,t=e.about;return D.editUserInfo({name:a,about:t}).then((function(e){n(e),Y()}))}}),r.a.createElement(z,{isOpen:S,onClose:Y,onAddCardSubmit:function(e){var a=e.name,t=e.link;return D.postUserCard({name:a,link:t}).then((function(e){u([e].concat(Object(c.a)(l))),Y()}))}}),r.a.createElement(I,{isOpen:x,onClose:Y,onCardDelete:function(){D.deleteCard(W._id).then((function(){var e=l.filter((function(e){return e._id!==W._id}));u(e)})).catch((function(e){console.log(e)})),Y()}}),r.a.createElement(O,{isOpen:K,onClose:Y,image:Z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.105f230d.chunk.js.map