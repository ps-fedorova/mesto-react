(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo.9d0e3a93.svg"},function(e,a,t){e.exports=t.p+"static/media/edit.a41c84ef.svg"},function(e,a,t){e.exports=t.p+"static/media/plus.3742cf7e.svg"},function(e,a,t){e.exports=t.p+"static/media/trash.9c3b03ae.svg"},function(e,a,t){e.exports=t.p+"static/media/close.c2d0901f.svg"},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),s=t.n(o),c=(t(16),t(1)),i=t(4),l=t.n(i);var u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabMesto Russia\xbb",className:"header__logo",src:l.a}))},p=t(5),m=t.n(p),d=t(6),_=t.n(d),f=t(7),v=t.n(f),h=r.a.createContext(null);var E=function(e){var a=e.card,t=r.a.useContext(h),n=a.owner._id===t._id,o="button card__button-delete ".concat(n?"":"card__button-delete_invisible"),s=a.likes.some((function(e){return e._id===t._id})),c="button card__button-like ".concat(s?"card__button-like_solid":"");return r.a.createElement("li",{className:"card"},r.a.createElement("img",{src:a.link,alt:a.name,className:"card__image",onClick:function(){e.onCardZoom(a)}}),r.a.createElement("button",{className:o,type:"submit",onClick:function(){e.onCardDelete(a)}},r.a.createElement("img",{alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"card__button-delete-vector",src:v.a})),r.a.createElement("div",{className:"card__description"},r.a.createElement("h2",{className:"card__name"},a.name),r.a.createElement("div",{className:"card__likes-container"},r.a.createElement("button",{className:c,type:"submit",onClick:function(){e.onCardLike(a)}}),r.a.createElement("p",{className:"card__count-likes"},a.likes.length))))};var b=function(e){var a=r.a.useContext(h);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__position"},r.a.createElement("button",{className:"button profile__avatar-edit",type:"button",onClick:e.onEditAvatar,onKeyDown:e.onEditAvatar},r.a.createElement("img",{src:a.avatar,alt:a.name,className:"profile__avatar-image"})),r.a.createElement("div",{className:"profile__user-info"},r.a.createElement("div",{className:"profile__name-edit-position"},r.a.createElement("h1",{className:"profile__user-info-name"},a.name),r.a.createElement("button",{className:"button profile__button-edit",type:"button",onClick:e.onEditProfile,onKeyDown:e.onEditProfile},r.a.createElement("img",{alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__button-edit-vector",src:m.a}))),r.a.createElement("p",{className:"profile__user-info-about"},a.about))),r.a.createElement("button",{className:"button profile__button-add",type:"button",onClick:e.onAddCard,onKeyDown:e.onAddCard},r.a.createElement("img",{alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__button-add-vector",src:_.a}))),r.a.createElement("ul",{className:"card-container"},e.cards.map((function(a){return r.a.createElement(E,{key:a._id,card:a,onCardLike:e.onCardLike,onCardZoom:e.onCardZoom,onCardDelete:e.onCardDelete})}))))};var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__\u0441opyright"},"\xa9 2020 Mesto Russia"))},C=t(8),N=t.n(C);var k=function(e){return r.a.createElement("img",{className:"button popup__close",onClick:e.closeHandler,src:N.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})};var y=function(e){return r.a.createElement("div",{className:"popup popup__closed popup__zoom-card ".concat(e.isOpen&&"popup_opened")},r.a.createElement("div",{className:"popup__zoom"},r.a.createElement("img",{src:e.image.link,alt:e.image.name,className:"popup__image"}),r.a.createElement(k,{closeHandler:e.onClose}),r.a.createElement("h2",{className:"popup__card-name"},e.image.name)),r.a.createElement("div",{className:"popup__overlay",onClick:e.onClose}))};var O=function(e){return r.a.createElement("div",{className:"popup popup__closed popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement(k,{closeHandler:e.onClose}),r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{className:"popup__form",name:e.name,noValidate:!0},e.children," ",r.a.createElement("button",{type:"submit",className:"button popup__button ".concat(e.isDisabled?"popup__button_disabled":""),onClick:e.onSubmit},e.submitName," "))),r.a.createElement("div",{className:"popup__overlay",onClick:e.onClose}))};var S=function(e){return r.a.createElement(O,{name:"areYouSure",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitName:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onCardDelete()}})};var j=function(e){var a=r.a.useContext(h),t=r.a.useState(""),n=Object(c.a)(t,2),o=n[0],s=n[1],i=r.a.useState({classInput:"",classError:"",errorMessage:""}),l=Object(c.a)(i,2),u=l[0],p=l[1],m=r.a.useState(""),d=Object(c.a)(m,2),_=d[0],f=d[1],v=r.a.useState({classInput:"",classError:"",errorMessage:""}),E=Object(c.a)(v,2),b=E[0],g=E[1],C=r.a.useState(!0),N=Object(c.a)(C,2),k=N[0],y=N[1],S=r.a.useState(!1),j=Object(c.a)(S,2),z=j[0],I=j[1];return r.a.useEffect((function(){s(a.name),f(a.about)}),[a]),r.a.createElement(O,{isOpen:e.isOpen,onClose:function(){e.onClose(),s(a.name),f(a.about),y(!0),p({classInput:"",classError:"",errorMessage:""}),g({classInput:"",classError:"",errorMessage:""})},name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isDisabled:!k,submitName:z?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(a){a.preventDefault(),I(!0),e.onUpdateUser({name:o,about:_}).catch((function(e){return console.log(e)})).finally((function(){y(!0),I(!1)}))}},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_user-name ".concat(u.classInput),id:"name",maxLength:"40",name:"name",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]+[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]*[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]+[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s]*",placeholder:"\u0418\u043c\u044f",value:o,onChange:function(e){s(e.target.value),e.target.validity.valid?(p({classInput:"",classError:"",errorMessage:""}),y(!0)):(p({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),y(!1))},type:"text",required:!0}),r.a.createElement("span",{className:"popup__error ".concat(u.classError),id:"about-error"},u.errorMessage)),r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_user-about ".concat(b.classInput),id:"about",maxLength:"200",minLength:"2",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:_,onChange:function(e){f(e.target.value),e.target.validity.valid?(g({classInput:"",classError:"",errorMessage:""}),y(!0)):(g({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.target.validationMessage}),y(!1))},type:"text",required:!0}),r.a.createElement("span",{className:"popup__error ".concat(b.classError),id:"about-error"},b.errorMessage)))};var z=function(e){var a=r.a.createRef(),t=r.a.useState({classInput:"",classError:"",errorMessage:""}),n=Object(c.a)(t,2),o=n[0],s=n[1],i=r.a.useState(!0),l=Object(c.a)(i,2),u=l[0],p=l[1],m=r.a.useState(!1),d=Object(c.a)(m,2),_=d[0],f=d[1];return r.a.createElement(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:function(){e.onClose(),s({classInput:"",classError:"",errorMessage:""}),p(!1),a.current.value=""},onSubmit:function(t){t.preventDefault(),f(!0),e.onUpdateAvatar({avatar:a.current.value}).catch((function(e){return console.error(e)})).finally((function(){p(!1),f(!1)}))},isDisabled:!u,submitName:_?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input ".concat(o.classInput),id:"link-avatar",ref:a,onChange:function(){var e=a.current;e.validity.valid?(s({classInput:"",classError:"",errorMessage:""}),p(!0)):(s({classInput:"popup__input_error",classError:"popup__error_visible",errorMessage:e.validationMessage}),p(!1))},name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"}),r.a.createElement("span",{className:"popup__error ".concat(o.classError),id:"link-avatar-error"},o.errorMessage)))};var I=function(e){return r.a.createElement(O,{name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,submitName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_new-card",id:"name-card",maxLength:"30",minLength:"2",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text"})),r.a.createElement("label",{className:"popup__form-field"},r.a.createElement("input",{className:"popup__input popup__input_new-card-link",id:"link",name:"src",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"})))},w=t(9),M=t(10),U=new(function(){function e(a){var t=a.baseUrl,n=a.authorization;Object(w.a)(this,e),this._baseUrl=t,this._authorization=n}return Object(M.a)(e,[{key:"_fetch",value:function(e,a){return fetch(this._baseUrl+e,a).then((function(e){return e.ok?e.json():Promise.reject("\u041d\u0443 \u0432\u043e\u0442, \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e (\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,")"))}))}},{key:"getInitialUserInfo",value:function(){return this._fetch("/users/me",{method:"GET",headers:{authorization:this._authorization}})}},{key:"editUserInfo",value:function(e){var a=e.name,t=e.about;return this._fetch("/users/me",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:a,about:t})})}},{key:"editUserAvatar",value:function(e){var a=e.avatar;return this._fetch("/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:a})})}},{key:"getInitialCards",value:function(){return this._fetch("/cards",{method:"GET",headers:{authorization:this._authorization}})}},{key:"postUserCard",value:function(e){return this._fetch("/cards",{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.title,link:e.src})})}},{key:"deleteCard",value:function(e){return this._fetch("/cards/"+e,{method:"DELETE",headers:{authorization:this._authorization}})}},{key:"changeLikeCardStatus",value:function(e,a){return this._fetch("/cards/likes/"+e,{method:a?"PUT":"DELETE",headers:{authorization:this._authorization}})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",authorization:"2ecad59e-1d15-4621-aac6-769c45c3d932"});var A=function(){var e=r.a.useState({name:"",avatar:"",about:"",_id:""}),a=Object(c.a)(e,2),t=a[0],n=a[1],o=r.a.useState([]),s=Object(c.a)(o,2),i=s[0],l=s[1],p=r.a.useState(!1),m=Object(c.a)(p,2),d=m[0],_=m[1],f=r.a.useState(!1),v=Object(c.a)(f,2),E=v[0],C=v[1],N=r.a.useState(!1),k=Object(c.a)(N,2),O=k[0],w=k[1],M=r.a.useState(!1),A=Object(c.a)(M,2),D=A[0],x=A[1],L=r.a.useState({link:"",name:""}),T=Object(c.a)(L,2),P=T[0],Z=T[1],q=r.a.useState(!1),H=Object(c.a)(q,2),J=H[0],K=H[1],R=r.a.useState({}),B=Object(c.a)(R,2),G=B[0],W=B[1];function V(){_(!1),C(!1),w(!1),x(!1),K(!1)}return r.a.useEffect((function(){Promise.all([U.getInitialUserInfo(),U.getInitialCards()]).then((function(e){var a=Object(c.a)(e,2),t=a[0],r=a[1];n(t),l(r)})).catch((function(e){return console.log(e)}))}),[]),r.a.useEffect((function(){var e=function(e){"Escape"===e.key&&V()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),r.a.createElement(h.Provider,{value:t},r.a.createElement(u,null),r.a.createElement(b,{onEditAvatar:function(){_(!0)},onEditProfile:function(){C(!0)},onAddCard:function(){w(!0)},onCardZoom:function(e){K(!0),Z({link:e.link,name:e.name})},onCardDelete:function(e){W(e),x(!0)},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===t._id}));U.changeLikeCardStatus(e._id,!a).then((function(a){var t=i.map((function(t){return t._id===e._id?a:t}));l(t)})).catch((function(e){console.log(e)}))},cards:i}),r.a.createElement(g,null),r.a.createElement(z,{isOpen:d,onClose:V,onUpdateAvatar:function(e){var a=e.avatar;return U.editUserAvatar({avatar:a}).then((function(e){n(e),V()}))}}),r.a.createElement(j,{isOpen:E,onClose:V,onUpdateUser:function(e){var a=e.name,t=e.about;return U.editUserInfo({name:a,about:t}).then((function(e){n(e),V()}))}}),r.a.createElement(I,{isOpen:O,onClose:V}),r.a.createElement(S,{isOpen:D,onClose:V,onCardDelete:function(){U.deleteCard(G._id).then((function(){var e=i.filter((function(e){return e._id!==G._id}));l(e)})).catch((function(e){console.log(e)})),V()}}),r.a.createElement(y,{isOpen:J,onClose:V,image:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.2f8e2189.chunk.js.map