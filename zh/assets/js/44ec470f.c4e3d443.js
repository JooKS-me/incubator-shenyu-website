"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3777],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},41456:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],u={title:"\u7ebf\u7a0b\u6a21\u578b",keywords:["soul"],description:"\u7ebf\u7a0b\u6a21\u578b"},a=void 0,c={unversionedId:"developer-guide/thread",id:"version-2.3.0/developer-guide/thread",isDocsHomePage:!1,title:"\u7ebf\u7a0b\u6a21\u578b",description:"\u7ebf\u7a0b\u6a21\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/developer-guide/thread.md",sourceDirName:"developer-guide",slug:"/developer-guide/thread",permalink:"/zh/docs/2.3.0/developer-guide/thread",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0/developer-guide/thread.md",version:"2.3.0",frontMatter:{title:"\u7ebf\u7a0b\u6a21\u578b",keywords:["soul"],description:"\u7ebf\u7a0b\u6a21\u578b"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Soul\u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/2.3.0/developer-guide/soul-optimize"},next:{title:"\u6587\u6863\u4e0b\u8f7d",permalink:"/zh/docs/2.3.0/doc-download"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"io\u4e0ework\u7ebf\u7a0b",id:"io\u4e0ework\u7ebf\u7a0b",children:[]},{value:"\u4e1a\u52a1\u7ebf\u7a0b",id:"\u4e1a\u52a1\u7ebf\u7a0b",children:[]},{value:"\u5207\u6362\u7c7b\u578b",id:"\u5207\u6362\u7c7b\u578b",children:[]}],d={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdsoul\u7684\u7ebf\u7a0b\u6a21\u578b\uff0c\u4ee5\u53ca\u5404\u79cd\u573a\u666f\u7684\u4f7f\u7528\u3002")),(0,i.kt)("h2",{id:"io\u4e0ework\u7ebf\u7a0b"},"io\u4e0ework\u7ebf\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"soul\u5185\u7f6e\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"li"},"spring-webflux")," \u800c\u5176\u5e95\u5c42\u662f\u4f7f\u7528\u7684netty\uff0c\u8fd9\u4e00\u5757\u4e3b\u8981\u662f\u4f7f\u7528\u7684netty\u7ebf\u7a0b\u6a21\u578b\u3002")),(0,i.kt)("h2",{id:"\u4e1a\u52a1\u7ebf\u7a0b"},"\u4e1a\u52a1\u7ebf\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u8c03\u5ea6\u7ebf\u7a0b\u6765\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u56fa\u5b9a\u7684\u7ebf\u7a0b\u6c60\u6765\u6267\u884c\uff0c\u5176\u7ebf\u7a0b\u6570\u4e3a cpu * 2 + 1\u3002")),(0,i.kt)("h2",{id:"\u5207\u6362\u7c7b\u578b"},"\u5207\u6362\u7c7b\u578b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactor.core.scheduler.Schedulers"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"-Dsoul.scheduler.type=fixed")," \u8fd9\u4e2a\u662f\u9ed8\u8ba4\u3002 \u8bbe\u7f6e\u5176\u4ed6\u7684\u503c \u5c31\u4f1a\u4f7f\u7528\u5f39\u6027\u7ebf\u7a0b\u6c60\u6765\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"Schedulers.elastic()"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"-Dsoul.work.threads = xx")," \u6765\u6307\u5b9a\u7ebf\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu * 2 + 1"),"\uff0c\u6700\u5c0f\u4e3a16\u4e2a\u7ebf\u7a0b\u3002")))}s.isMDXComponent=!0}}]);