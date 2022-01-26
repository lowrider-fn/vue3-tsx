(function(e){function t(t){for(var a,r,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-9ac75552":"75a83e0c","chunk-ea093af8":"593634d0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-9ac75552":1,"chunk-ea093af8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-9ac75552":"9c4e0959","chunk-ea093af8":"4ad57543"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],b.parentNode.removeChild(b),n(o)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-tsx/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a,r=n("5502"),c=n("1da1"),o=(n("96cf"),n("d257")),s={state:{isAuth:!1},mutations:{LOGIN:function(e){e.isAuth=!0},LOGOUT:function(e){e.isAuth=!1}},actions:{login:function(e,t){var n=e.commit;o["b"].setData("auth",t),n("LOGIN")},checkLogin:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,o["b"].getData("auth")&&n("LOGIN");case 2:case"end":return t.stop()}}),t)})))()},logout:function(e){var t=e.commit;o["b"].clear(),t("LOGOUT")}},getters:{IS_AUTH:function(e){return e.isAuth}}};(function(e){e["login"]="login",e["password"]="password"})(a||(a={}));n("a434"),n("4e82");var i,l=n("5a0c"),u=n.n(l),d=(n("d3b7"),n("159b"),function(e,t,n){e.forEach((function(e,a){e.id===n&&t(a)}))}),b=n("d7cd"),f={state:{news:[]},mutations:{SAVE_NEWS:function(e,t){e.news=t}},actions:{getNews:function(e){var t=e.commit,n=o["b"].getData("news");t("SAVE_NEWS",n||b),n||o["b"].setData("news",b)},deleteNews:function(e,t){var n=e.state.news,a=function(e){n.splice(e,1),o["b"].setData("news",n)};d(n,a,t.id),e.dispatch("getNews")},addNews:function(e,t){var n=e.state.news;n.push(t),o["b"].setData("news",n)},updateNews:function(e,t){var n=e.state.news,a=function(e){n.splice(e,1,t),o["b"].setData("news",n)};d(n,a,t.id),e.dispatch("getNews")}},getters:{NEWS:function(e){return e.news.sort((function(e,t){return u()(t.date).valueOf()-u()(e.date).valueOf()}))}}};n("a4d3"),n("e01a"),n("b0c0");(function(e){e["date"]="date",e["description"]="description",e["id"]="id",e["name"]="name",e["title"]="title",e["url"]="url",e["urlToImage"]="urlToImage"})(i||(i={}));var p=[],h=Object(r["a"])({plugins:p,modules:{auth:s,news:f}}),m=function(){return h}},"077a":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("7a23"),r=n("92f8"),c=n("5287"),o=n.n(c),s=function(e){var t=e.mode,n=void 0===t?"info":t,c=e.type,s=void 0===c?"button":c,i=e.text,l=e.onClick;return Object(a["d"])("button",{class:o.a[n],type:s,onClick:l},[Object(a["d"])(r["a"],{type:"small",weight:"bold",value:i},null)])}},"1b12":function(e,t,n){e.exports={scroll:"styles-scroll-9d64c56edfa81695990365f14e354b7a",text:"styles-text-03d692ab43bf641a309ff7787bdaa79a",h1:"styles-h1-9ad7fe4bad810a072bd4d3fc15396e88",h2:"styles-h2-cfdbc242a768072d4771fda30d5cdce5",h3:"styles-h3-475a8b426304e4281de330b7a1fd7032",regular:"styles-regular-293eaf9a67278caefb9c115187308759",small:"styles-small-267ecb6542bcbdf4cbe9f8da8ef14a47",ellipsis:"styles-ellipsis-d008f94b0cb8b3c12c49dbad8d411897",bold:"styles-bold-5740cf80d30f1e8f9a642bab08f6a28f",light:"styles-light-66e012e8e98d604861de6b2550435482",medium:"styles-medium-51d594d4c96bd81162951bba2b196ccd"}},"24a0":function(e,t,n){e.exports={scroll:"styles-scroll-7309826e7a55e104f832ae8f3aeaaa9f",controls:"styles-controls-815bea93dc8de6c1d1434d6f085ca27e"}},"375c":function(e,t,n){e.exports={scroll:"styles-scroll-f7c6aea93bbcb3729b2aa3a005f215bb",item:"styles-item-21442a676ad68a3bf14bbe897d47c165",date:"styles-date-ee4f6a28661f565f9d6af637d278ce7b",img:"styles-img-1500332804447b133ec27c8474044686",description:"styles-description-396297355e2b6574c080e57a7c39e146",controls:"styles-controls-cbbb38ccccc3b6f7323c7e8d8cc1d717"}},5287:function(e,t,n){e.exports={scroll:"styles-scroll-5214935b1b63d01700f6350306c6d3c1",button:"styles-button-d0484b0360a2b432281dac5adea91e42",btn:"styles-btn-1b9468ac3abd8c5dd6d60c7047374d93",info:"styles-info-491d5b4f050af78c6db220577ff8319f",danger:"styles-danger-393fe4de0170eb1c48cab323996899c2",success:"styles-success-f23740bd6b2920879bc86daaf6738ea1",link:"styles-link-778592d6447c970db77c5728917b6d88","link-warn":"styles-link-warn-5664a3aa47be1a84aca53b1593b0650c","link-danger":"styles-link-danger-67162ce3c932a0c50a2a1fd444a4d314","link-success":"styles-link-success-863f4620d4b7476ccb7be5cd6104c28c","link-info":"styles-link-info-375a16a7ff45019cd3fb5518ad61d3d4"}},"59a8":function(e,t,n){e.exports={scroll:"styles-scroll-17a19c2177cc7fa599615bc1d6a0a1ad",modal:"styles-modal-efd8d62a8358ae0d595128af11133947",mask:"styles-mask-1dd00a9b426be18dc3a863b76ae80149",title:"styles-title-1731cfa6b61a8de7ae2bc58c9ef0aac7"}},6382:function(e,t,n){e.exports={scroll:"styles-scroll-f0a750296d1e7f0bab29ac13c0e55999",news:"styles-news-1b1c459618604f38b377e967f7498583",control:"styles-control-bf3ad22c01846cda3e4f33a51ac813e0"}},"74ae":function(e,t,n){e.exports={scroll:"styles-scroll-ae189e2d72684bff5e5dff30195adb52",field:"styles-field-f348e76870a75be4e30e9c2fda5d4017",label:"styles-label-b8246381f12a5dcd3c959e58e4d169ac","field-area":"styles-field-area-f25a38dc46687aa4063833c86beb262a",input:"styles-input-4a7deea8779004e080cbb2e1f868f384",textarea:"styles-textarea-5bf064c971f6e7ed49506005ba7bd454"}},7996:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n("ade3"),r=n("5530"),c=n("3835"),o=n("ee7b"),s=function(e){var t=Object(o["a"])(e),n=Object(c["a"])(t,2),s=n[0],i=n[1],l=function(e,t){i(Object(r["a"])(Object(r["a"])({},s.value),Object(a["a"])({},t,e)))};return{form:s,setForm:i,setFormField:l}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o["a"])(e),n=Object(c["a"])(t,2),a=n[0],r=n[1],s=function(){return r(!1)},i=function(){return r(!0)},l=function(){return r(!a.value)};return{isShow:a,toggleShowing:l,handleClose:s,handleOpen:i,setIsShow:r}}},"92f8":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("ade3"),r=n("7a23"),c=n("d257"),o=n("1b12"),s=n.n(o),i=function(e){var t,n=e.type,o=void 0===n?"regular":n,i=e.tag,l=void 0===i?"p":i,u=e.weight,d=e.value,b=e.ellipsis,f=e.margin,p=e.className;return Object(r["g"])(l,{class:Object(c["c"])(s.a[o],(t={},Object(a["a"])(t,s.a.ellipsis,Boolean(b)),Object(a["a"])(t,s.a[String(u)],Boolean(u)),t),p),style:{margin:f}},d)}},"9f5a":function(e,t,n){e.exports={scroll:"styles-scroll-9390383bda2f0f02051c47fb9afc0b3a",buttons:"styles-buttons-b90c9535165711e2de9de9b03cb36c81"}},a0c5:function(e,t,n){e.exports={scroll:"styles-scroll-c5bd0bd70da8fdc3719cacc705adc0ce",link:"styles-link-ad9d70753ad80abf18a2b840aa58bc04",routerLink:"styles-routerLink-ef58adb2ad85880830b78449a77154b1"}},a8da:function(e,t,n){},abd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("7a23"),r=(n("b0c0"),n("ec26")),c=n("92f8"),o=n("74ae"),s=n.n(o),i=function(e){var t=e.type,n=void 0===t?"text":t,o=e.tag,i=void 0===o?"input":o,l=e.value,u=e.name,d=e.placeholder,b=e.label,f=e.onChange,p=Object(r["a"])(),h=function(e){return f(e.target.value,u)};return Object(a["d"])("div",{class:s.a.field},[Object(a["d"])("label",{class:s.a.label,for:p},[Object(a["d"])(c["a"],{type:"small",value:b},null)]),Object(a["g"])(i,{id:p,placeholder:d,value:l,type:n,class:s.a[i],onChange:h})])}},afbc:function(e,t,n){"use strict";var a=n("f139");n.d(t,"a",(function(){return a["a"]}))},b972:function(e,t,n){e.exports={scroll:"styles-scroll-50d90faf5099cb70b10dc3e31c173205",form:"styles-form-172d90d24bf012a8281f5cd8463fb8c0",style:"styles-style-b60ca9f3d90d6b413b0d00bdab2c2d69"}},c948:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("7a23"),r=n("b972"),c=n.n(r),o=function(e){var t=e.hasStyles,n=e.slot,r=e.onSend,o=function(e){e.preventDefault(),r()};return Object(a["d"])("form",{onSubmit:o,class:t&&c.a.style||c.a.form},[n.default()])}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("7a23"),c=n("6c02"),o=(n("d81d"),n("4de4"),n("d3b7"),n("9911"),n("92f8")),s=n("a0c5"),i=n.n(s),l=function(e){var t=e.to,n=e.text;return Object(r["d"])("a",{class:i.a.link,href:t,target:"_blank"},[Object(r["d"])(o["a"],{type:"small",weight:"bold",value:n},null)])},u=function(e){var t=e.to,n=e.text;return Object(r["d"])(c["a"],{class:i.a.routerLink,to:t},{default:function(){return[Object(r["d"])(o["a"],{type:"small",weight:"bold",value:n},null)]}})},d=n("077a"),b=n("f139"),f=[{path:b["a"].Main,text:"Что нового"},{path:b["a"].NewsEditing,text:"Редактировать",auth:!0},{path:b["a"].Auth,text:"Авторизоваться",guest:!0},{text:"Выйти",auth:!0}],p=n("cfad"),h=n.n(p),m=function(e){var t=e.isAuth,n=e.onLogout;return Object(r["d"])("header",{class:h.a.header},[Object(r["d"])("nav",{class:h.a.inner},[Object(r["d"])("ul",{class:h.a.list},[f.filter((function(e){var n=e.auth,a=e.guest;return t?!a:!n})).map((function(e,t){var a=e.text,c=e.path;return Object(r["d"])("li",{class:h.a.item,key:t},[c&&Object(r["d"])(u,{to:c,text:a},null)||Object(r["d"])(d["a"],{text:a,mode:"link-info",onClick:n},null)])}))])])])},g=n("0613"),v=n("afbc"),w=n("f843"),j=n.n(w),y=Object(r["e"])((function(){var e=Object(g["d"])(),t=e.getters,n=e.dispatch,a=Object(c["f"])(),o=a.push,s=Object(c["e"])(),i=function(){n("logout"),o({path:v["a"].Auth})};return Object(r["l"])((function(){n("checkLogin")})),function(){return Object(r["d"])(r["a"],null,[Object(r["d"])(m,{isAuth:t.IS_AUTH,onLogout:i},null),Object(r["d"])("main",{class:j.a.main},[Object(r["d"])("div",{class:j.a.inner},[Object(r["d"])(c["b"],{key:s.fullPath},null)])])])}})),O=(n("3ca3"),n("ddb0"),n("3835")),x=n("7996"),_=n("ee7b"),k=n("6382"),T=n.n(k),S=n("ade3"),A=(n("b0c0"),n("a4d3"),n("e01a"),a={},Object(S["a"])(a,g["b"].name,""),Object(S["a"])(a,g["b"].id,""),Object(S["a"])(a,g["b"].title,""),Object(S["a"])(a,g["b"].description,""),Object(S["a"])(a,g["b"].url,""),Object(S["a"])(a,g["b"].urlToImage,""),Object(S["a"])(a,g["b"].date,""),a),I=n("d257"),C=n("375c"),N=n.n(C),M=function(e){var t=e.hasAuthRoute,n=e.news,a=e.onDelete,c=e.onEdit;return Object(r["d"])("div",{class:N.a.item},[Object(r["d"])(o["a"],{tag:"h2",type:"h2",value:n.title,margin:"0 0 1.2rem"},null),Object(r["d"])(o["a"],{className:N.a.date,type:"small",value:Object(I["d"])(n.date).format(I["a"])},null),Object(r["d"])("div",{class:N.a.description},[Object(r["d"])(o["a"],{value:n.description,margin:"0 0 1.5rem"},null),Object(r["d"])(l,{to:n.url,text:"Читать подробнее ".concat(n.name)},null)]),Object(r["d"])("img",{class:N.a.img,src:n.urlToImage,alt:n.name},null),t&&Object(r["d"])("div",{class:N.a.controls},[Object(r["d"])(d["a"],{text:"Редактировать",mode:"link-warn",onClick:function(){return c(n)}},null),Object(r["d"])(d["a"],{text:"Удалить",mode:"link-danger",onClick:function(){return a(n)}},null)])])},E=n("59a8"),D=n.n(E),L=function(e){var t=e.title,n=e.onClose,a=e.slot,c=Object(r["q"])(null),s=function(e){(null===c||void 0===c?void 0:c.value)===e.target&&n()};return Object(r["d"])("div",{ref:c,class:D.a.mask,onMousedown:s},[Object(r["d"])("div",{class:D.a.modal},[Object(r["d"])(o["a"],{tag:"h3",type:"h3",value:t,className:D.a.title},null),a.default()])])},R=n("9f5a"),P=n.n(R),Z=function(e){var t=e.onClose,n=e.onConfirm;return Object(r["d"])(L,{title:"Вы уверенны в удалении?",onClose:t,slot:{default:function(){return Object(r["d"])("div",{class:P.a.buttons},[Object(r["d"])(d["a"],{mode:"danger",text:"Удалить",onClick:n},null),Object(r["d"])(d["a"],{mode:"success",text:"Отмена",onClick:t},null)])}}},null)},W=n("ec26"),V=n("abd8"),F=n("c948"),H=n("24a0"),z=n.n(H),q=function(e){var t=e.isEdit,n=e.data,a=e.onSend,c=e.onClose,o=Object(x["a"])(n),s=o.form,i=o.setFormField,l=function(){i(Object(I["d"])().toISOString(),g["b"].date),t||i(Object(W["a"])(),g["b"].id),a(s.value)};return Object(r["d"])(L,{title:t?"Редактирование новости":"Создание новости",onClose:c,slot:{default:function(){return Object(r["d"])(F["a"],{onSend:l,slot:{default:function(){return Object(r["d"])(r["a"],null,[Object(r["d"])(V["a"],{name:g["b"].name,label:"Введите источник",value:s.value.name,placeholder:"Введите источник",onChange:i},null),Object(r["d"])(V["a"],{name:g["b"].title,tag:"textarea",label:"Введите заголовок",value:s.value.title,placeholder:"Введите заголовок",onChange:i},null),Object(r["d"])(V["a"],{name:g["b"].description,tag:"textarea",label:"Описание",value:s.value.description,placeholder:"Введите описание",onChange:i},null),Object(r["d"])(V["a"],{name:g["b"].url,label:"Ссылка на новость",value:s.value.url,placeholder:"Ввыедите ссылку ",onChange:i},null),Object(r["d"])(V["a"],{name:g["b"].urlToImage,label:"Путь до картинки",value:s.value.urlToImage,placeholder:"Введите путь",onChange:i},null),Object(r["d"])("div",{class:z.a.controls},[Object(r["d"])(d["a"],{mode:"info",type:"submit",text:"Сохранить"},null),Object(r["d"])(d["a"],{mode:"danger",text:"Отмена",onClick:c},null)])])}}},null)}}},null)},B=Object(r["e"])((function(){var e=Object(g["d"])(),t=e.getters,n=e.dispatch,a=Object(c["e"])(),s=a.meta,i=Object(_["a"])(A),l=Object(O["a"])(i,2),u=l[0],b=l[1],f=Object(x["b"])(),p=f.isShow,h=f.toggleShowing,m=Object(x["b"])(),v=m.isShow,w=m.toggleShowing,j=Object(x["b"])(),y=j.isShow,k=j.setIsShow;Object(r["l"])((function(){n("getNews")}));var S=function(e){var t=Boolean(null===e||void 0===e?void 0:e.id);k(t),b(t&&e||A),w()},I=function(){n("deleteNews",u.value),h()},C=function(e){b(e),h()},N=function(e){n(y.value?"updateNews":"addNews",e),w()};return function(){return Object(r["d"])("div",{class:T.a.news},[Object(r["d"])("div",{class:T.a.control},[Object(r["d"])(o["a"],{tag:"h1",type:"h1",value:s.title},null),s.auth&&Object(r["d"])(d["a"],{mode:"success",text:"Создать",onClick:S},null)]),t.NEWS.map((function(e,t){return Object(r["d"])(M,{key:t,news:e,hasAuthRoute:s.auth,onDelete:C,onEdit:S},null)})),s.auth&&(p.value&&Object(r["d"])(Z,{onClose:h,onConfirm:I},null)||v.value&&Object(r["d"])(q,{isEdit:y.value,data:u.value,onClose:w,onSend:N},null))])}})),G=function(){return n.e("chunk-9ac75552").then(n.bind(null,"7fe7"))},J=function(){return n.e("chunk-ea093af8").then(n.bind(null,"4d12"))},U=[{path:b["a"].Main,component:B,meta:{title:"Новости"}},{path:b["a"].Auth,component:J,meta:{guest:!0,title:"Авторизация"}},{path:b["a"].NewsEditing,component:B,meta:{auth:!0,title:"Редактирование"}},{path:b["a"].NotFound,component:G,meta:{title:"Страница не найдена"}}],Y=Object(c["c"])({history:Object(c["d"])("/vue3-tsx/"),routes:U});Y.beforeEach((function(e,t,n){var a=e.matched,r=Object(g["d"])().getters.IS_AUTH;!r&&a.some((function(e){var t=e.meta;return t.auth}))?n(b["a"].Auth):r&&a.some((function(e){var t=e.meta;return t.guest}))?n(b["a"].NewsEditing):n()})),Y.afterEach((function(e){document.title=e.meta.title}));n("a8da"),n("f561");Object(r["c"])(y).use(g["c"]).use(Y).mount("#app")},cfad:function(e,t,n){e.exports={scroll:"styles-scroll-e9f66847c66371bbb84bbee679c4b4e1",header:"styles-header-46b01e4f08dee8d6bb88074dc1f47c74",inner:"styles-inner-afed347965384e9e0dd02af3258bff97",list:"styles-list-06c3fb7f486d78dea47162d54c8df9d9"}},d257:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o.a})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return y}));var a=n("3835"),r=(n("a15b"),n("d81d"),n("4fad"),n("99af"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=Object.entries(t).map((function(e){var t=Object(a["a"])(e,2),n=t[0],r=t[1];return r&&n||""})).join(" ");return"".concat(e," ").concat(r," ").concat(n)}),c=n("5a0c"),o=n.n(c),s=(n("276b"),n("f906")),i=n.n(s),l=n("c4a1"),u=n.n(l),d=n("83dc"),b=n.n(d),f=n("8bdc"),p=n.n(f);o.a.extend(p.a),o.a.locale("ru"),o.a.extend(i.a),o.a.extend(u.a),o.a.extend(b.a);var h="DD MMMM YYYY  HH:mm";function m(e){if("string"===typeof e)try{return JSON.parse(e)}catch(t){return null}return null}var g=n("d4ec"),v=n("bee2"),w=n("ade3"),j=(n("e9c4"),function(){function e(){Object(g["a"])(this,e),Object(w["a"])(this,"storage",void 0),this.storage=window.localStorage}return Object(v["a"])(e,[{key:"setData",value:function(e,t){this.storage.setItem(e,JSON.stringify(t))}},{key:"getData",value:function(e){var t=this.storage.getItem(e);return m(t)}},{key:"deleteData",value:function(e){this.storage.removeItem(e)}},{key:"clear",value:function(){this.storage.clear()}}]),e}()),y=new j},d7cd:function(e){e.exports=JSON.parse('[{"id":"lenta","name":"Lenta","author":null,"title":"Порошенко рассказал о «формуле Лаврова» по Донбассу - Lenta.ru","description":"Бывший президент Украины Петр Порошенко заявил, что никакой «формулы Штайнмайера» не существует, но есть так называемая формула министра иностранных дел России Сергея Лаврова. Порошенко добавил, что ознакомиться с этим документом ему предложил Владимир Путин,…","url":"https://lenta.ru/news/2019/09/22/formula_lavrova/","urlToImage":"https://icdn.lenta.ru/images/2019/09/22/14/20190922143037306/detail_ef093a5576b440b9d6dca52c810fd973.jpg","date":"2019-09-22T11:33:00Z","content":", « » , . «5 », «-».\\r\\n , - , , . « , , [ ] », - .\\r\\n, . , , « », . « : \\", . , , \\". \\" , , \\"», , , « ».\\r\\n, « » , . , .\\r\\n« » , - , . , ."},{"id":"jhgjhgjgh","name":"Sportbox.ru","author":null,"title":"Российские гимнастки завоевали бронзу ЧМ в упражнениях с мячами - news.Sportbox.ru","description":"Сборная России заняла третье место в групповых упражнения с пятью мячами на чемпионате мира в Баку.","url":"https://news.sportbox.ru/Vidy_sporta/hud_gimnastika/spbnews_NI1081503_Rossijskije_gimnastki_zavojevali_bronzu_ChM_v_uprazhnenijah_s_machami","urlToImage":"https://s-cdn.sportbox.ru/images/shares/1200x600/node/21/1081503.jpg","date":"2019-09-22T11:28:25Z","content":"© « » 2007 2019.16 \\r\\n «www.sportbox.ru»     ,   ().\\r\\n № 77-72613  04.04.2018\\r\\n — www.sportbox.ru\\r\\n () «www.sportbox.ru»: « »\\r\\n «www.sportbox.ru»: ..\\r\\n «www.sportbox.ru»: +7 (495) 653 8419\\r\\n «www.sportbox.ru»: editor@sportbox.ru"},{"id":"wrewrwe","name":"Ria.ru","author":"","title":"Полиция Гонконга применила слезоточивый газ для разгона протестующих - РИА Новости","description":"Полиция Гонконга применила слезоточивый газ для разгона антиправительственных протестующих, сообщает издание RTHK. РИА Новости, 22.09.2019","url":"https://ria.ru/20190922/1558974895.html","urlToImage":"https://cdn25.img.ria.ru/images/sharing/article/1558974895.jpg?15576015291569150289","date":"2019-09-22T11:04:59Z","content":"https://ria.ru/20190922/1558974895.html\\r\\nhttps://cdn25.img.ria.ru/images/155760/15/1557601532_0:0:2734:1538_1036x0_80_0_0_de85d6a9b5a4b659f3fb1c2cb1e500e8.jpg.webp\\r\\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png\\r\\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png… [+29 chars]"},{"id":"rbc","name":"RBC","author":null,"title":"СМИ сообщили об освобождении захваченных у Камеруна российских моряков - РБК","description":"Пираты освободили моряков, в том числе россиян, которых захватили у берегов Камеруна. Об этом сообщает РИА Новости со ссылкой на источник в компании-работодателе. По данным собеседника, моряков ...","url":"https://www.rbc.ru/rbcfreenews/5d8745c19a7947f2f5c36584","urlToImage":"https://s0.rbk.ru/v6_top_pics/media/img/9/09/755691484984099.jpg","date":"2019-09-22T10:34:00Z","content":", , . « » -.\\r\\n , . , . , .\\r\\n - .\\r\\n «» . , , . MC-Schiffahrt ."},{"id":"hgfhgfhfhgf","name":"Ria.ru","author":"","title":"Синоптики рассказали, когда в Москву вернется ясная погода - РИА Новости","description":"Научный руководитель Гидрометцентра Роман Вильфанд рассказал, какая погода ожидает москвичей на следующей неделе. РИА Новости, 22.09.2019","url":"https://ria.ru/20190922/1558974315.html","urlToImage":"https://cdn25.img.ria.ru/images/sharing/article/1558974315.jpg?15321779431569152553","date":"2019-09-22T10:15:09Z","content":"https://ria.ru/20190922/1558974315.html\\r\\nhttps://cdn25.img.ria.ru/images/153217/79/1532177944_0:179:3324:2048_1036x0_80_0_0_6f47d89e8454818df736348538e05b13.jpg.webp\\r\\nhttps://cdn22.img.ria.ru/i/export/ria/logo.png\\r\\nhttps://cdn22.img.ria.ru/i/export/ria/logo.p… [+1 chars]"},{"id":"erwewrewr","name":"Aif.ru","author":null,"title":"Пилот, посадивший А321 в кукурузном поле, вернулся к полетам - Аргументы и факты","description":"Дамир Юсупов на этой неделе вернулся к работе в небе","url":"https://aif.ru/society/ptransport/komandir_posadivshiy_a321_v_kukuruznom_pole_vernulsya_k_poletam","urlToImage":"https://images.aif.ru/018/036/b1ab86097604ac91243d92426a3abb65.jpg","date":"2019-09-22T10:02:57Z","content":", 22 - -.   Airbus 321 . - « ».\\r\\n, . , , .\\r\\nAirbus A321, , 15    .  , . .\\r\\n 321 .\\r\\n « » . ."},{"id":"ewqewqeq","name":"Championat.com","author":"Чемпионат","title":"Семак поздравил Сутормина с дублем в ворота «Рубина» - Чемпионат","description":"Главный тренер «Зенита» Сергей Семак поздравил полузащитника петербургской команды Алексея Сутормина с дублем в ворота «Рубина» (5:0) в матче 10-го тура Российской Премьер-Лиги.  «Поздравляю команду и болельщиков с яркой победой, а Лёшу Сутормина — с дебютным…","url":"https://www.championat.com/football/news-3855959-semak-pozdravil-sutormina-s-dublem-v-vorota-rubina.html","urlToImage":"https://img.championat.com/news2/social/c/97/3855959.jpg","date":"2019-09-22T09:39:15Z","content":"«» «» (5:0) 10- -. \\r\\n« , «», «». \\r\\n, «» «», «». .\\r\\n«», 23 , . «» (10) 10- . - «»."},{"id":"vcxvcx","name":"Vesti.ru","author":"Вести.Ru","title":"Пушков отреагировал на шумиху вокруг разговора Трампа и Зеленского - Вести.Ru","description":"Российский сенатор Алексей Пушков считает, что в споре Дональда Трампа и Джозефа Байдена Киев выбрал сторону действующего президента США.","url":"https://www.vesti.ru/doc.html?id=3191702","urlToImage":"https://cdn-st1.rtr-vesti.ru/p/xw_1529515.jpg","date":"2019-09-22T09:17:00Z","content":"© 2019 \\".\\". : \\" \\" (). 77-72266 24.01.2018. , . : .. : info@vesti.ru, : +7(495)232-63-33. 16 .\\r\\n, , . , , ()."},{"id":"rewrwew","name":"Sportbox.ru","author":null,"title":"Марио Фернандес: «Российский футбол сделал огромный шаг вперед» - news.Sportbox.ru","description":"Защитник сборной России и ЦСКА Марио Фернандес рассказал о своей жизни в России и о том, как страна изменилась после ЧМ-2018.","url":"https://news.sportbox.ru/Vidy_sporta/Futbol/Russia/premier_league/spbnews_NI1081435_Mario_Fernandes_Rossijskij_futbol_sdelal_ogromnyj_shag_vpered","urlToImage":"https://s-cdn.sportbox.ru/images/shares/1200x600/node/01/1081435.jpg","date":"2019-09-22T09:05:30Z","content":", -2018. \\r\\n    ,           . - ,    ?\\r\\n    ,   , .  .    , ,       .  ,       . ?  ,   - ,   ,   ,   ,    , .     .        ,  -.  ,  .\\r\\n   -2018?   ,  ? , ,   ,   ,             \\r\\n , ,    . .    , .    , . ,    , , --, ,   ! ,  ,   ,   .   .\\r\\n29-    2012 .  20… [+9 chars]"},{"id":"iuyiuyiyu","name":"Rsport.ria.ru","author":"","title":"В ОКР назвали слухами сообщения об угрозе отстранения РФ от Олимпиады-2020 - Спорт РИА Новости","description":"Пресс-секретарь Олимпийского комитета России Константин Выборнов назвал слухами информацию о том, что России грозит отстранение от Олимпиады-2020 в Токио. Спорт РИА Новости, 22.09.2019","url":"https://rsport.ria.ru/20190922/1558973121.html","urlToImage":"https://cdn22.img.ria.ru/images/sharing/article/1558973121.jpg?15250272891569152573","date":"2019-09-22T08:45:26Z","content":"https://rsport.ria.ru/20190922/1558973121.html\\r\\nhttps://cdn25.img.ria.ru/images/152502/72/1525027293_740:738:3069:2048_1036x0_80_0_0_0f5d45e3273b1072c43e35fd2418594f.jpg.webp\\r\\nhttps://cdn22.img.ria.ru/i/export/rsport/logo.png\\r\\nhttps://cdn22.img.ria.ru/i/expor… [+60 chars]"},{"id":"sadsf","name":"Versiya.info","author":null,"title":"«Все думают, будто у меня всегда открыт капот»: Владелец рассказал о недостатках и «косяках» LADA Vesta SW - Версия.Инфо","description":"Всего за 2 месяца эксплуатации водитель абсолютно новой &laquo;Весты&raquo; столкнулся с возмутительно длинным списком из недочетов. Владелец LADA Vesta SW Алексей Анюков поделился отзывом на свой автомобиль на авторском одноименном канале. Он уточнил, что пр…","url":"https://versiya.info/avto/125752","urlToImage":"https://versiya.info/uploads/posts/2019-09/1569138485_10-1.jpg","date":"2019-09-22T08:21:20Z","content":"2 «» .\\r\\nLADA Vesta SW . , « » 2019 106- 1.6. 6500 , – .\\r\\n LADA Vesta SW : , , , , « », 0,5 , .\\r\\n . « , », – « » , . , , LADA Vesta SW.\\r\\n «» 106- , , , . KIA Rio, 123 ..\\r\\n , , – . , .\\r\\n «» Vesta SW: , , , , , «» . « , », – .\\r\\n« » 100 /, , , , «» .\\r\\n, , . « , ,… [+17 chars]"},{"id":"bvcbcv","name":"3dnews.ru","author":null,"title":"Huawei планирует разблокировать загрузчик в смартфонах серии Mate 30 - 3DNews","description":"Во время запуска новых флагманов серии Mate 30, который прошёл на этой неделе в Мюнхене, директор потребительского подразделения Huawei Ричард Ю (Richard Yu) ответил на вопросы журналистов, касающихся в том числе и разблокировки загрузчика.","url":"https://3dnews.ru/994444","urlToImage":"https://3dnews.ru/assets/external/illustrations/2019/09/21/994444/sm.14.800.jpg","date":"2019-09-22T08:02:20Z","content":"Mate 30, , Huawei (Richard Yu) , .\\r\\n Mate 30 Google, , Play Services. Huawei . , .\\r\\n« , . , . », — , .\\r\\n , . , , . , , Mate 30, Google. , Mate 30 Mate 30 Pro ."},{"id":"ytryrtytr","name":"Gazeta.ru","author":null,"title":"В партии Зеленского указали на разные ценности ЕС и Украины - Газета.Ru","description":"В партии «Слуга народа» призвали Украину перенять у стран Евросоюза основы децентрализации, организации судебной системы, структуры правоохранительной сферы, но не перенимать чуждые украинцам европейские ценности. Ранее президент Эстонии Керсти Кальюлайд заяв…","url":"https://www.gazeta.ru/politics/2019/09/22_a_12667885.shtml","urlToImage":"https://img.gazeta.ru/files3/915/12667915/123-pic905-895x505-65006.jpg","date":"2019-09-22T07:27:23Z","content":null},{"id":"iuiuy","name":"Interfax.ru","author":null,"title":"Отравившийся в Эймсбери британец захотел отсудить у России почти $1,25 млн - Интерфакс","description":"Британец Чарльз Роули, отравившийся летом 2018 года в Эймсбери, как считает Скотленд-ярд, нервнопаралитическим веществом, планирует отсудить у России 1 млн фунтов стерлингов ($1,25 млн), пишет в воскресенье газета Daily Mirror со ссылкой на заявление его адво…","url":"https://www.interfax.ru/world/677415","urlToImage":"https://www.interfax.ru/aspimg/677415.png","date":"2019-09-22T07:19:00Z","content":". 22 . INTERFAX.RU - , 2018 , -, , 1 ($1,25 ), Daily Mirror .\\r\\n\\" , . , , \\", - .\\r\\n , , \\"\\". . .\\r\\n30 2018 . . \\"\\", , 2018 , .\\r\\n .\\r\\n , , .\\r\\n . , \\" \\". , , , \\" ; , , , \\"."},{"id":"rt","name":"RT","author":"RT на Русском","title":"Шойгу назвал число военных баз США в мире - RT на русском","description":"Российский министр обороны Сергей Шойгу заявил, что США имеют по всему миру 170 военных баз. По его мнению, Россия может эффективно противостоять Соединённым Штатам благодаря отечественной промышленности и новым разработкам.","url":"https://russian.rt.com/world/news/670495-shoigu-bazi-ssha","urlToImage":"https://cdni.rt.com/russian/images/2019.09/article/5d8717a2ae5ac97b523e5919.png","date":"2019-09-22T07:11:00Z","content":null},{"id":"oiuoiu","name":"Mail.ru","author":"Здоровье Mail.ru","title":"В какое время суток лучше не лечиться. И не заболевать - Здоровье Mail.ru","description":"Внутренние часы нашего организма управляют не только тем, в какое время суток нам хочется спать.","url":"https://health.mail.ru/news/v_kakoe_vremya_sutok_luchshe_ne_lechitsya_i_ne/","urlToImage":"https://health.mail.ru/sharepic/33/370680/?1569054062","date":"2019-09-22T07:00:50Z","content":", . , . , .\\r\\n . . , , 12 . , , .\\r\\n .\\r\\n , : , , .\\r\\n , ( ), , .\\r\\n« , », , - (). .\\r\\n , , , , . , .\\r\\n , , .\\r\\n« , , , . , , ».\\r\\n, , . .\\r\\n .\\r\\n , , , .\\r\\n , , , .\\r\\n« , , », , ().\\r\\n« , , , . », .\\r\\n , (, , ), .\\r\\n , , , 11 , , .\\r\\n , .\\r\\n , , . , , - .\\r\\n« , », , , .\\r\\n , (… [+542 chars]"},{"id":"bvcvcbc","name":"Amur.info","author":null,"title":"Амурчане активно покупают новые айфоны через интернет / ИА - ИА Амур.инфо","description":"Амурская область оказалась в топе отдаленных регионов по востребованности новых iPhone. Амурчане предпочитают покупать новинку через интернет.","url":"https://www.amur.info/news/2019/09/22/160266","urlToImage":"//img.amur.info/res/news/160266/500x_/ea449d7c4769a899ff6ebfa851d3bf4b.jpg","date":"2019-09-22T06:52:35Z","content":"- iPhone , . , – - , 2019 iPhone – , . « , iPhone – », – - -.\\r\\n10 Apple – iPhone 11, iPhone 11 Pro iPhone 11 Pro Max. 18 , 20 .\\r\\n 54 – . – iPhone 11 Max – 124 ."},{"id":"rbbvcbvcc","name":"RBC","author":null,"title":"WSJ узнала о предупреждении Эр-Рияду от хуситов о новых атаках Ирана - РБК","description":"По данным газеты, предупреждение о подготовке Ирана к новым ударам йеменские хуситы направили США и Саудовской Аравии. На Западе к их заявлениям давно относятся скептически, но Эр-Рияд предпринял меры по усилению безопасности","url":"https://www.rbc.ru/politics/22/09/2019/5d87103b9a7947e4dd87fc0b","urlToImage":"https://s0.rbk.ru/v6_top_pics/media/img/4/06/755691348390064.jpg","date":"2019-09-22T06:47:00Z","content":"- , . The Wall Street Journal , . , , , .\\r\\n , « » , .\\r\\n , , , . WSJ , - .\\r\\n , - . - ."}]')},ee7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("7a23");function r(e){var t=Object(a["r"])(e),n=function(e){t.value=e};return[Object(a["p"])(t),n]}},f139:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e["Auth"]="/login",e["Main"]="/",e["NewsEditing"]="/news-editing",e["NotFound"]="/:pathMatch(.*)*"}(a||(a={}))},f561:function(e,t,n){e.exports={scroll:"normalize-scroll-cd161e7e4c46b38c8443ec584bc73203"}},f843:function(e,t,n){e.exports={scroll:"styles-scroll-782a7a8261a2daa0f20021d9dccd645e",main:"styles-main-450f94c8d914e177934af0b25d13c645",inner:"styles-inner-41c11205e50330a86216736a8ad2bb2c"}}});
//# sourceMappingURL=app.01f9f2b1.js.map