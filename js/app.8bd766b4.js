(function(e){function n(n){for(var t,o,s=n[0],c=n[1],l=n[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);m&&m(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],t=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(t=!1)}t&&(r.splice(n--,1),e=c(c.s=a[0]))}return e}var t={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{"chunk-18abf34a":"4cb00340","chunk-29460b1d":"60c43ebd","chunk-2d0c031e":"b03bdb66","chunk-46763a27":"bb3cedbf","chunk-4f2e8d52":"e9bf90f5","chunk-6f971c89":"142ac4de","chunk-7a8dacf9":"81c8d28d","chunk-7cc2f876":"68fcb536","chunk-7ffbae07":"fe5498b4","chunk-c30fa626":"954c4c69","chunk-cde99bde":"0f4fa43d",comple:"3fc31337",creditos:"c4cc86e0",glosario:"c4373964",intro:"f5a9b0a5",referencias:"df35d778",tema1:"7bf68b4b",tema2:"9cc43207",tema3:"aa81a3b6",tema4:"967d25db",tema5:"44f50ae8",tema6:"270d2b50"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var n=[],a={"chunk-18abf34a":1,"chunk-29460b1d":1,"chunk-4f2e8d52":1,"chunk-7a8dacf9":1,"chunk-7cc2f876":1,"chunk-7ffbae07":1,"chunk-c30fa626":1,"chunk-cde99bde":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1,tema4:1,tema5:1,tema6:1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var t="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{"chunk-18abf34a":"5c16d5fb","chunk-29460b1d":"4fc86c55","chunk-2d0c031e":"31d6cfe0","chunk-46763a27":"31d6cfe0","chunk-4f2e8d52":"e9dea4cb","chunk-6f971c89":"31d6cfe0","chunk-7a8dacf9":"c0b9870d","chunk-7cc2f876":"c0b9870d","chunk-7ffbae07":"c0b9870d","chunk-c30fa626":"f66e17a1","chunk-cde99bde":"c0b9870d",comple:"5bb818e0",creditos:"d2daddf6",glosario:"9b2d67b9",intro:"175570c5",referencias:"b048c256",tema1:"20e7eb9f",tema2:"9f0009a6",tema3:"9d066c33",tema4:"8aefc25d",tema5:"2e7d578b",tema6:"e64ce26d"}[e]+".css",i=c.p+t,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===t||u===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===t||u===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var t=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete o[e],m.parentNode.removeChild(m),a(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var t=i[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,a){t=i[e]=[n,a]}));n.push(t[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",d.name="ChunkLoadError",d.type=t,d.request=o,a[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,a){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(a,t,function(n){return e[n]}.bind(null,t));return a},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"006a":function(e,n,a){e.exports=a.p+"img/imagen-banner-subp.d346b59a.svg"},"0462":function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[e._m(0)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row align-items-center justify-content-center"},[t("div",{staticClass:"col-auto mb-2 mb-sm-0"},[t("img",{attrs:{src:a("52e5")}})]),t("div",{staticClass:"col-12 col-sm"},[t("p",{staticClass:"mb-0 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")])])])}],i={name:"Footer",props:{allRound:{type:Boolean,default:!1}}},r=i,s=(a("04b1"),a("2877")),c=Object(s["a"])(r,t,o,!1,null,"350fb762",null);n["a"]=c.exports},"04b1":function(e,n,a){"use strict";a("36e0")},"08b9":function(e,n,a){"use strict";a("915b")},"230f":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.fff3e08c.svg"},"24f5":function(e,n,a){},"25aa":function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"creditos"},[e._m(0),a("div",{staticClass:"mb-4"},[a("p",[a("span",{staticClass:"text-bold"},[e._v(e._s(e.creditosData.liderEquipo.nombre))]),a("br"),e._v(e._s(e.creditosData.liderEquipo.cargo))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("p",{staticClass:"creditos__titulo mb-3"},[e._v("CONTENIDO INSTRUCCIONAL")]),a("div",{staticClass:"row"},e._l(e.contenidoInstruccional,(function(n,t){return a("div",{key:"inst-"+t,staticClass:"col-lg-6"},e._l(n,(function(e,n){return a("CreditosItem",{key:"inst-col-"+t+n,attrs:{item:e}})})),1)})),0)]),a("div",{staticClass:"col-lg-4"},[a("p",{staticClass:"creditos__titulo mb-3"},[e._v("DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES ")]),e._l(e.creditosData.desarrolloProducto,(function(e,n){return a("CreditosItem",{key:"desa-"+n,attrs:{item:e}})})),a("p",{staticClass:"creditos__titulo mb-3"},[e._v("GESTORES DE REPOSITORIO")]),e._l(e.creditosData.gestoresRepositorio,(function(e,n){return a("CreditosItem",{key:"repo-"+n,attrs:{item:e}})}))],2)])])},o=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"mb-3"},[a("p",{staticClass:"text-bold"},[e._v("ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES")])])}],i=a("2909"),r=(a("a434"),a("cdd9")),s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("p",{staticClass:"mb-3"},["object"===typeof e.item.nombre?[e._l(e.item.nombre,(function(n){return[a("span",{staticClass:"text-bold"},[e._v(e._s(n))]),a("br")]}))]:e.item.nombre?[a("span",{staticClass:"text-bold"},[e._v(e._s(e.item.nombre))]),a("br")]:e._e(),"object"===typeof e.item.cargo?[e._l(e.item.cargo,(function(n){return[a("span",[e._v(e._s(n))]),a("br")]}))]:e.item.cargo?[a("span",[e._v(e._s(e.item.cargo))]),e.item.centro||e.item.regional?a("br"):e._e()]:e._e(),e.item.centro?[a("span",[e._v(e._s(e.item.centro))]),e.item.regional?a("br"):e._e()]:e._e(),e.item.regional?[a("span",[e._v(e._s(e.item.regional))])]:e._e()],2)},c=[],l={name:"CreditosItem",props:{item:{type:Object,default:function(){return{}}}}},u=l,d=a("2877"),m=Object(d["a"])(u,s,c,!1,null,"2e88dcde",null),f=m.exports,p={name:"CreditosComp",components:{CreditosItem:f},data:function(){return{creditosData:r["b"]}},computed:{contenidoInstruccional:function(){var e=this.creditosData.contenidoInstruccional,n=Math.round(e.length/2),a=Object(i["a"])(e).splice(0,n),t=Object(i["a"])(e).splice(n,e.length);return[a,t]}}},b=p,h=(a("4d3f"),Object(d["a"])(b,t,o,!1,null,"ce32b7bc",null));n["a"]=h.exports},"2ec0":function(e,n,a){"use strict";a("2f1b")},"2f1b":function(e,n,a){},"352c":function(e,n,a){},"36e0":function(e,n,a){},3733:function(e,n,a){"use strict";a("24f5")},"4d3f":function(e,n,a){"use strict";a("c02a")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view"),a("footer")],1)],1),a("BarraAvance")],1)},i=[],r=a("cdd9"),s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("aside",{staticClass:"aside-menu",class:{"aside-menu--open":e.menuOpen}},[a("nav",{staticClass:"aside-menu__content"},[e._m(0),a("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(n,t){return[a("li",{key:"menu-item-"+t,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==n.nombreRuta}},[a("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[n.hasOwnProperty("numero")?a("span",[a("strong",[e._v(e._s(n.numero))])]):e._e(),a("span",[a("strong",[e._v(e._s(n.titulo))])])])],1),n.hasOwnProperty("subMenu")&&n.subMenu.length?e._l(n.subMenu,(function(o,i){return a("li",{key:"submenu-item-"+t+"-"+i,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+o.hash}},[a("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:n.nombreRuta,hash:"#"+o.hash}}},[a("i",{class:o.icono}),a("span",[e._v(e._s(o.numero))]),a("span",[e._v(e._s(o.titulo))])])],1)})):e._e()]}))],2),a("ul",{staticClass:"aside-menu__sec-menu"},e._l(e.subMenuData,(function(n,t){return a("li",{key:"SecMenu-item-"+t,staticClass:"aside-menu__sec-menu__item"},[n.hasOwnProperty("download")?a("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(n.download),target:"_blank"}},[a("i",{class:n.icono}),a("span",[e._v(e._s(n.titulo))])]):a("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:n.nombreRuta}}},[a("i",{class:n.icono}),a("span",[e._v(e._s(n.titulo))])])],1)})),0)])])},c=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"aside-menu__header"},[a("div",{staticClass:"h5"},[e._v("Desarrollo de contenidos")])])}],l=(a("b0c0"),{name:"AsideMenu",data:function(){return{menuData:r["e"]&&r["e"].menu,subMenuData:r["e"]&&r["e"].subMenu}},computed:{menuOpen:function(){return this.$store.getters.isMenuOpen}},watch:{$route:function(e){"inicio"===e.name&&this.toggleMenu(!1)}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}}),u=l,d=(a("2ec0"),a("2877")),m=Object(d["a"])(u,s,c,!1,null,"32945cac",null),f=m.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"header container-fluid"},[t("div",{staticClass:"row align-items-center justify-content-between"},[t("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=e.$route.name?t("div",{staticClass:"header__menu me-5",on:{click:function(n){return e.toggleMenu(!e.menuOpen)}}},[t("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":e.menuOpen}},[t("div",{staticClass:"line-2"}),t("div",{staticClass:"line-1"}),t("div",{staticClass:"line-3"})]),t("span",[e._v("MENÚ")])]):e._e(),t("img",{staticClass:"header__logo me-sm-5",attrs:{src:a("9eb5")}}),e.isInicio?t("div",{staticClass:"d-none d-md-flex align-items-center"},[t("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[e._v("Contenidos")]),t("a",{attrs:{href:"#creditos"}},[e._v("Créditos")])]):t("div",{staticClass:"header__componente-formativo"},[t("span",[e._v(e._s(e.globalData.componenteFormativo))])])]),e.isInicio?t("div",{staticClass:"col-auto"},[t("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[t("span",{staticClass:"me-1"},[e._v("Iniciar")]),t("i",{staticClass:"fas fa-angle-right"})])],1):e._e()])])},b=[],h=(a("7db0"),{data:function(){return{menuData:r["e"].menu}},methods:{},computed:{iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),n=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||n}}}),g={name:"Header",mixins:[h],data:function(){return{globalData:r["c"]}},computed:{isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(e){this.$store.dispatch("toggleMenu",e)}}},_=g,v=(a("5cc8"),Object(d["a"])(_,p,b,!1,null,"3524e9ca",null)),C=v.exports,k=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"barra-avance",class:[e.showBarra?"barra-avance--open":"barra-avance--close"]},[a("router-link",{staticClass:"boton barra-avance__boton--regresar",class:[!e.controlLinks.back.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.back.name,hash:e.controlLinks.back.hash?"#"+e.controlLinks.back.hash:""}}},[a("i",{staticClass:"me-2 fas fa-angle-left",staticStyle:{color:"#111e61"}}),a("span",[e._v("Regresar")])]),a("router-link",{staticClass:"boton",class:[!e.controlLinks.next.name&&"barra-avance__boton--disable"],attrs:{to:{name:e.controlLinks.next.name,hash:e.controlLinks.next.hash?"#"+e.controlLinks.next.hash:""}}},[a("span",{staticClass:"me-2 text-white"},[e._v("Continuar")]),a("i",{staticClass:"fas fa-angle-right text-white"})])],1)},y=[],w=(a("d81d"),a("caad"),a("2532"),{name:"BarraAvance",data:function(){return{menuData:r["e"].menu,cursoSelection:null,idSelecctionArr:[]}},computed:{showBarra:function(){var e=this.controlLinks.next&&this.controlLinks.next.name||this.controlLinks.back&&this.controlLinks.back.name;return!this.menuOpen&&e},controlLinks:function(){var e=this,n=this.menuData.find((function(n){return n.nombreRuta===e.$route.name}));if("introduccion"===this.$route.name){var a=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return{next:{name:a.nombreRuta,hash:""},back:{name:"",hash:""}}}if(n){var t={},o=this.menuData.map((function(e){return e.nombreRuta})).indexOf(this.$route.name),i=this.menuData[o-1],r=i&&i.nombreRuta.includes("tema"),s=i&&i.nombreRuta.includes("introduccion");t.back=r||s?{name:i.nombreRuta,hash:""}:{name:"",hash:""};var c=this.menuData[o+1],l=c&&c.nombreRuta.includes("tema");return t.next=l?{name:c.nombreRuta,hash:""}:{name:"",hash:""},t}return{next:{name:"",hash:""},back:{name:"",hash:""}}},menuOpen:function(){return this.$store.getters.isMenuOpen}}}),O=w,D=(a("3733"),Object(d["a"])(O,k,y,!1,null,"752bc1d2",null)),R=D.exports,E={name:"App",components:{AsideMenu:f,Header:C,BarraAvance:R},data:function(){return{menuOpen:!1,globalData:r["c"]}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},created:function(){document.title=this.globalData.componenteFormativo}},S=E,x=(a("cf25"),Object(d["a"])(S,o,i,!1,null,null,null)),I=x.exports,M=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),A=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",[a("BannerPrincipal"),a("div",{staticClass:"pb-5",attrs:{id:"contenidos"}}),a("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5"},[e._m(0),a("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[a("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(n){return a("router-link",{key:"desarrollo-"+n.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:n.nombreRuta}}},[a("div",{staticClass:"desarrollo-contenidos__item__texto"},[n.hasOwnProperty("numero")?a("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(n.numero))]):a("i",{staticClass:"desarrollo-contenidos__item__icono",class:n.icono}),a("span",[e._v(e._s(n.titulo))])]),a("a",{staticClass:"boton--sm d-none d-md-block"},[a("span",[e._v("Ver más")])])])})),1)])]),a("div",{staticClass:"pb-5",attrs:{id:"creditos"}}),a("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 mb-5"},[e._m(1),a("CreditosComp")],1),a("Footer")],1)},j=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"titulo__template--a mb-4"},[a("span",{staticClass:"h6"},[e._v("Desarrollo"),a("br"),e._v("de contenidos")])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"titulo__template--a mb-4"},[a("span",{staticClass:"h6"},[e._v("Créditos")])])}],P=a("2909"),L=(a("99af"),a("4de4"),function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"banner-principal"},[a("div",{staticClass:"container tarjeta p-4 ps-sm-5 pe-sm-5 pt-sm-5 pb-0",style:{"background-image":"url("+e.globalData.fondoBannerPrincipal+")"}},[a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-lg-7 col-xxl-5 banner-principal__info pb-4 pb-sm-5"},[a("div",{staticClass:"banner-principal__componente"},[a("h1",{staticClass:"mb-0"},[e._v(e._s(e.globalData.componenteFormativo))])]),a("div",{staticClass:"banner-principal__descripcion"},[a("p",{staticClass:"mb-0"},[e._v(e._s(e.globalData.descripcionCurso))])]),a("div",{staticClass:"banner-principal__accion"},[a("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[a("span",{staticClass:"me-1"},[e._v("Iniciar")]),a("i",{staticClass:"fas fa-angle-right"})])],1)]),a("div",{staticClass:"d-none d-lg-block col-lg-5 align-self-center"},[a("img",{attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])}),T=[],q={name:"BannerPrincipal",mixins:[h],data:function(){return{globalData:r["c"]}}},z=q,$=(a("08b9"),Object(d["a"])(z,L,T,!1,null,"6bb76cf4",null)),B=$.exports,N=a("25aa"),G=a("0462"),F={name:"Inicio",components:{BannerPrincipal:B,CreditosComp:N["a"],Footer:G["a"]},data:function(){return{menuPrincipalData:r["e"]}},computed:{desarrolloContenidosData:function(){var e=[].concat(Object(P["a"])(this.menuPrincipalData.menu),Object(P["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},J=F,V=(a("b684"),Object(d["a"])(J,A,j,!1,null,"d8a00f74",null)),U=V.exports,H=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"curso",attrs:{id:"curso"}},[a("router-view")],1)},Q=[],Y={name:"Curso"},K=Y,W=Object(d["a"])(K,H,Q,!1,null,"d1ebcac6",null),Z=W.exports;t["a"].use(M["a"]);var X=new M["a"]({routes:[{path:"/",name:"inicio",component:U},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:Z,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"b14e"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"5b0d"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"5a93"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"07e6"))}},{path:"tema5",name:"tema5",component:function(){return a.e("tema5").then(a.bind(null,"9a8d"))}},{path:"tema6",name:"tema6",component:function(){return a.e("tema6").then(a.bind(null,"a285"))}}]},{path:"/actividad/:index?",name:"actividad"},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"7c1e"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"ef72"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}return{x:0,y:0,behavior:"auto"}}}),ee=X,ne=a("2f62");t["a"].use(ne["a"]);var ae=new ne["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:function(e){return!!e.loading},isMenuOpen:function(e){return e.menuOpen}},mutations:{toggleMenu:function(e,n){e.menuOpen=n},increment:function(e){e.loading++},decrease:function(e){e.loading--}},actions:{toggleMenu:function(e,n){var a=e.commit;a("toggleMenu",n)},increment:function(e){var n=e.commit;n("increment")},decrease:function(e){var n=e.commit;n("decrease")}}});a("becf"),a("7b17"),a("ab8b"),a("a3a0");t["a"].component("AcordionA",(function(){return a.e("chunk-4f2e8d52").then(a.bind(null,"3997"))})),t["a"].component("TabsA",(function(){return a.e("chunk-29460b1d").then(a.bind(null,"67eb"))})),t["a"].component("TabsB",(function(){return a.e("chunk-6f971c89").then(a.bind(null,"fd2f"))})),t["a"].component("TabsC",(function(){return a.e("chunk-46763a27").then(a.bind(null,"58a2"))})),t["a"].component("LineaTiempoA",(function(){return a.e("chunk-2d0c031e").then(a.bind(null,"416a"))})),t["a"].component("LineaTiempoB",(function(){return a.e("chunk-c30fa626").then(a.bind(null,"b269"))})),t["a"].component("PasosA",(function(){return a.e("chunk-18abf34a").then(a.bind(null,"926a"))})),t["a"].component("SlyderA",(function(){return a.e("chunk-7a8dacf9").then(a.bind(null,"b198"))})),t["a"].component("SlyderB",(function(){return a.e("chunk-cde99bde").then(a.bind(null,"aae4"))})),t["a"].component("SlyderC",(function(){return a.e("chunk-7cc2f876").then(a.bind(null,"5dc7"))})),t["a"].component("SlyderD",(function(){return a.e("chunk-7ffbae07").then(a.bind(null,"bedf"))}));a("1276"),a("ac1f");t["a"].mixin({methods:{obtenerLink:function(e){var n=window.location.href,a=n.includes("/index.html#")?"index.html#":"#/",t=n.split(a)[0];return t+e}}}),t["a"].config.productionTip=!1,new t["a"]({router:ee,store:ae,render:function(e){return e(I)}}).$mount("#app")},"5cc8":function(e,n,a){"use strict";a("352c")},7738:function(e,n,a){},"915b":function(e,n,a){},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},a451:function(e,n,a){e.exports=a.p+"img/fondo-banner-subprincipal.5da17b9a.svg"},b684:function(e,n,a){"use strict";a("7738")},bce2:function(e,n,a){e.exports=a.p+"img/banner-principal.fff28f7f.svg"},c02a:function(e,n,a){},cdd9:function(e,n,a){"use strict";a.d(n,"c",(function(){return t})),a.d(n,"e",(function(){return o})),a.d(n,"b",(function(){return i})),a.d(n,"f",(function(){return r})),a.d(n,"d",(function(){return s})),a.d(n,"a",(function(){return c}));var t={componenteFormativo:"Ciberseguridad y seguridad de la información",descripcionCurso:"El manejo de los datos en el entorno mundial juega un papel fundamental en el desarrollo de las actividades cotidianas de empresas y en general del ámbito productivo, económico y social; esto ha generado grandes ventajas dado que la tecnología es la herramienta que soporta la gestión de datos, sin embargo, en la actualidad se ha notado que en las redes, los  datos e infraestructura tecnológica, aplicaciones informáticas y digitales se ha ido aumentando la inseguridad, convirtiéndose en un problema crítico, por tanto la anticipación a este fenómeno es esencial y debe ser comprendido para poder administrar y gestionar los activos de información e infraestructura.",imagenBannerPrincipal:a("bce2"),fondoBannerPrincipal:a("230f"),fondoBannerSubPrincipal:a("a451"),imagenBannerSubPrincipal:a("006a")},o={menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Ciberseguridad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Definición",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Generalidades",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Marcos de referencia",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Seguridad de la información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Generalidades",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Principios",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Políticas de seguridad ",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Estándares y normas de referencia",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Riesgos y mecanismos de valuación",hash:"t_2_5"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Activos de información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Inventario de activos",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Metodologías de valuación de activos",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"La identificación de los activos ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Tipos de activos",hash:"t_4_1"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Actividades para realizar el inventario de activos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Inventario de activos",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Propiedad de los activos",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Clasificación de la Información",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Etiquetado y manipulación de la información",hash:"t_5_4"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Caso de estudio",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},i={liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Henry Eduardo Bastidas Paruma",cargo:"Experto temático",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"},{nombre:"Carlos Andrés Rodríguez",cargo:"Diseñador Instruccional",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"Oscar Absalón Guevara",cargo:"Evaluador Instruccional",centro:"Centro de Gestión Industrial",regional:"Regional Distrito Capital"},{nombre:"María Isabel Román Rueda",cargo:"Revisora de estilo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:["Eulises Orduz Amezquita","José Jaime Luis Tang Pinzón","Maria Camila Ovalle Ospina","Lady Adriana Ariza Luque","Oleg Litvin","Wilson Andres Arenales Cáceres"],cargo:"Diseño web y Producción Audiovisual"},{nombre:["Daniel Ricardo Mutis Gómez","Jhon Jairo Urueta Alvarez","Lizeth Karina Manchego Suarez"],cargo:"Desarrollo Front-End"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},r=[{referencia:"Asale, R. (s.f.). coste | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario ",link:"https://dle.rae.es/coste?m=form"},{referencia:"Asale, R. (s.f.). valuar | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario",link:"https://dle.rae.es/valuar?m=form"},{referencia:"BBC News Mundo. (2016, 15 enero). Qué es el «core», los músculos que te dan estabilidad y evitan lesiones. ",link:"https://www.bbc.com/mundo/noticias/2016/01/160113_deportes_enforma_core_ejercicio_ac#:%7E:text=%22Core%22%20es%20una%20palabra%20en,musculatura%20profunda%20de%20la%20columna."},{referencia:"Calder, A. (2018). NIST Cybersecurity Framework: Una guía de bolsillo. IT Governance Publishing Ltd.NIST Framework for Improving Critical Infrastructure Cybersecurity. ",link:"https://books.apple.com/gb/book/iso27001-iso27002-una-gu%C3%ADa-de-bolsillo/id1274970759 "},{referencia:"Cano, J. (2011). Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global. Sistemas Asociación colombiana de ingenieros de sistemas. 119(4.7).",link:"http://acistente.acis.org.co/typo43/fileadmin/Revista_119/Editorial.pdf "},{referencia:"Caurin, J. (2018, 14 junio). Políticas de seguridad | ¿Qué son las políticas de seguridad? Emprende Pyme.",link:"https://www.emprendepyme.net/politicas-de-seguridad.html"},{referencia:"Comisión Federal de Comercio (s.f). Conceptos básicos de ciberseguridad.",link:"https://www.ftc.gov/es/tips-advice/business-center/small-businesses/cybersecurity/basics-es"},{referencia:"Eterovic, J. E., & Pagliari, G. A. (2011). Metodología de análisis de Riesgos Informáticos. Técnica administrativa.",link:"https://dialnet.unirioja.es/servlet/articulo?codigo=3718552 "},{referencia:"ISO 27001 (2020). Implantando ISO 27001 Paso A Paso - La Planificación Del SGSI.",link:"https://normaiso27001.es/fase-4-planificacion-del-sgsi"},{referencia:"Unión Internacional de Telecomunicación. (2010, noviembre). Ciberentorno",link:"https://www.itu.int/net/itunews/issues/2010/09/pdf/201009_20-es.pdf"},{referencia:"SGSI (2010, 12 mayo). 08 Análisis y valoración de riesgos. Metodologías. YouTube.",link:"https://www.youtube.com/watch?v=g7EPuzN5Awg"},{referencia:"Soriano, M. (2014). Seguridad en redes y seguridad de la información",link:"https://techpedia.fel.cvut.cz/project/modules/improvet/download/C2ES/Seguridad_de_Red_e_Informacion.pdf"},{referencia:"Soto, M. (2019). NIST: Ciberseguridad holística….",link:"https://marvin-soto.medium.com/nist-ciberseguridad-hol%C3%ADstica-ce4b3911dae7 "},{referencia:"Zambrano, S. M. Q., & Valencia, D. G. M. (2017). Seguridad en informática: consideraciones. Dominio de las Ciencias.",link:"https://dialnet.unirioja.es/descarga/articulo/6137824.pdf"}],s=[{termino:"Activo",significado:"el término de activo de información se relaciona con todos esos elementos tecnológicos o relacionados con la tecnología que la organización utiliza para el cumplimiento de sus metas o core del negocio. Según la norma ISO/IEC 27001 se entiende como activo todo aquello que es importante y que la organización valora por lo tanto debe de protegerse"},{termino:"Activo Informático",significado:"todo elemento tecnológico o relacionado con la tecnología necesario para que la organización cumpla con su misión y logre sus objetivos empresariales."},{termino:"Activo Tecnológico",significado:"todo equipo tecnológico o relacionado con la tecnología requerido para que la organización cumpla con su función o misión."},{termino:"Amenaza",significado:"cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas."},{termino:"Confidencialidad",significado:"propiedad que determina que la información sólo esté disponible y sea revelada a individuos, entidades o procesos autorizados"},{termino:"Core",significado:'es una palabra en inglés, cuyo significado es "centro" o "núcleo".'},{termino:"Clasificación de la Información",significado:"se determina que la información pertenece a uno de los niveles de clasificación estipulados en la entidad. Tiene como objetivo asegurar que la información recibe el nivel de protección adecuado."},{termino:"Coste",significado:"conjunto de gastos para la producción de bienes y servicios."},{termino:"Disponibilidad",significado:"propiedad de que la información sea accesible y utilizable por solicitud de una entidad autorizada, cuando ésta así lo requiera."},{termino:"Integridad",significado:"propiedad de salvaguardar la exactitud y estado completo de los activos"},{termino:"Riesgo",significado:"es la posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico. Esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza."},{termino:"Valuar",significado:"determinar o atribuir un valor a una cosa o persona."}],c=[{texto:"SGSI - 08 Análisis y valoración de riesgos. Metodologías. (2010, 12 mayo). [Vídeo]. YouTube. https://www.youtube.com/watch?v=g7EPuzN5Awg",tipo:"Video",link:"https://youtu.be/g7EPuzN5Awg"},{texto:"Comisión Federal de Comercio (s.f). Conceptos básicos de ciberseguridad. ",tipo:"Página web",link:"https://www.ftc.gov/es/tips-advice/business-center/small-businesses/cybersecurity/basics-es"}]},cf25:function(e,n,a){"use strict";a("fea6")},fea6:function(e,n,a){}});
//# sourceMappingURL=app.8bd766b4.js.map