"use strict";(self.webpackChunkmachine_expo=self.webpackChunkmachine_expo||[]).push([[512],{932:(e,n,r)=>{r.r(n),r.d(n,{default:()=>f});var t=r(387),a=r(60),u=r(560),l=r(772),o=r(120);var c=["id","name","value","onFileSelect","onChange","onDialogOpen","onDialogClose","onTabChange","apiRef","customTabs","validators","tabsCss","locale","localeTranslations","localePluralize","previewUrlCallback","metadataCallback"],i=function(e,n){var r=e.id,u=e.name,i=e.value,f=e.onFileSelect,s=e.onChange,d=e.onDialogOpen,C=e.onDialogClose,p=e.onTabChange,v=e.apiRef,E=e.customTabs,g=e.validators,A=e.tabsCss,L=e.locale,m=e.localeTranslations,b=e.localePluralize,h=e.previewUrlCallback,O=e.metadataCallback,w=(0,t._)(e,c),R=(0,a.useRef)(null),D=(0,a.useRef)(null),U=(0,a.useRef)(null),_=(0,l.u)(f),k=(0,l.u)(s),P=(0,l.u)(d),T=(0,l.u)(C),I=(0,l.u)(p),S=(0,l.u)(O),x=(0,l.u)(h||l.d),y=function(e,n){var r=!0,t=(0,a.useRef)();t.current?r=!!(n&&t.current.deps&&o(n,t.current.deps)):t.current={deps:n,result:e()};var u=r?t.current:{deps:n,result:e()};return t.current=u,u.result}((function(){return w}),[w]);return(0,l.a)(E,n),(0,l.b)((function(){return L&&(window.UPLOADCARE_LOCALE=L),b&&(window.UPLOADCARE_LOCALE_PLURALIZE=b),m&&(window.UPLOADCARE_LOCALE_TRANSLATIONS=m),n.plugin((function(e){e.locale.rebuild({locale:L||null,localeTranslations:m||null,localePluralize:b||null})})),function(){L&&delete window.UPLOADCARE_LOCALE,b&&delete window.UPLOADCARE_LOCALE_PLURALIZE,m&&delete window.UPLOADCARE_LOCALE_TRANSLATIONS}}),[L,m,b]),(0,a.useEffect)((function(){var e=R.current;D.current=n.Widget(e,(0,t.a)((0,t.a)({},y),{},{metadataCallback:y.metadata?void 0:S,previewUrlCallback:x}));var r=e.nextSibling;return U.current&&D.current.value(U.current),function(){n.jQuery(e).removeData("uploadcareWidget"),r&&r.remove()}}),[n,y,S,x]),function(e,n){(0,a.useEffect)((function(){if(null!=n){var r=e.current;return n.forEach((function(e){r.validators.push(e)})),function(){r.validators.length=0}}}),[e,n])}(D,g),(0,a.useEffect)((function(){return D.current.onUploadComplete.add(k),D.current.onChange.add(_),function(){D.current.onUploadComplete.remove(k),D.current.onChange.remove(_)}}),[k,_,n,y]),(0,a.useEffect)((function(){var e,n=function(n){(e=n).done(T).fail(T).progress(I),P(n)};return D.current.onDialogOpen.add(n),function(){D.current.onDialogOpen.remove(n),e&&e.reject()}}),[T,P,I,y]),(0,a.useEffect)((function(){var e=[],n=function(n){e=n?n.files?n.files():[n]:[]};return D.current.onChange.add(n),function(){e.forEach((function(e){return e.cancel()})),D.current.onChange.remove(n)}}),[y]),(0,a.useEffect)((function(){U.current!==i&&D.current.value(i),U.current=i}),[i]),(0,a.useEffect)((function(){n&&A&&"string"===typeof A&&(0===A.indexOf("https://")?n.tabsCss.addUrl(A):n.tabsCss.addStyle(A))}),[n,A]),(0,a.useImperativeHandle)(v,(function(){return{openDialog:function(){return D.current.openDialog()},reloadInfo:function(){return D.current.reloadInfo()},getInput:function(){return D.current.inputElement},value:function(e){return D.current.value(e)}}}),[]),(0,a.useCallback)((function(){return a.createElement("input",{type:"hidden",ref:R,id:r,name:u})}),[r,u])},f=function(e){var n=i(e,u);return a.createElement(n,null)}}}]);
//# sourceMappingURL=ucare-widget-chunk.54c2e814.chunk.js.map