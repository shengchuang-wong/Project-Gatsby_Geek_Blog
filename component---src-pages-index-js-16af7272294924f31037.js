(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,7,8,9,10],{"+FWb":function(e,t,n){e.exports=n.p+"static/soul-land-tang-san-9dc4afb012b365dba15fe6d16a6fe4e6.jpg"},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";n("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&m())}function m(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=d,a.addListener=d,a.once=d,a.off=d,a.removeListener=d,a.removeAllListeners=d,a.emit=d,a.prependListener=d,a.prependOnceListener=d,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},AphP:function(e,t,n){"use strict";var r=n("XKFU"),a=n("S/j/"),o=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),n=o(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},CgaS:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("VRzm"),n("Btvt");var r=n("xTJ+"),a=n("MLWZ"),o=n("9rSQ"),i=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},GooF:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("mxmt"),i=n.n(o),s=n("ZZB8"),c=n.n(s);t.default=function(e){var t=e.targetRef,n=e.teamRef;return a.a.createElement("div",{ref:t,className:c.a.hero},a.a.createElement("div",{className:c.a.overlay}),a.a.createElement("div",{className:c.a.background}),a.a.createElement("picture",{className:c.a.siteLogo},a.a.createElement("img",{src:i.a,alt:"logo"})),a.a.createElement("div",{className:c.a.heroInnerContainer},a.a.createElement("h1",{className:c.a.header},"What's up!"),a.a.createElement("p",{className:c.a.description},"Hello! My name is Sheng Chuang, and I am a passionate full stack engineer who currently locating at 1.3521° N, 103.8198° E."),a.a.createElement("button",{type:"button",className:c.a.button,onClick:function(){return window.scrollTo({top:n.current.offsetTop,left:0,behavior:"smooth"})}},"More informations")))}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("xTJ+"),a=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n("tQ2B"):"undefined"!=typeof XMLHttpRequest&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";n("V+eJ"),n("jqX0"),n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo");var r=n("xTJ+");function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,t,n){"use strict";n("f3/d"),n("AphP"),e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";n("OG14"),n("pIFo");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,s=n("quPj"),c=n("C/va"),u=r.RegExp,l=u,f=u.prototype,p=/a/g,m=/a/g,h=new u(p)!==p;if(n("nh4g")&&(!h||n("eeVq")((function(){return m[n("K0xU")("match")]=!1,u(p)!=p||u(m)==m||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=s(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(h?new l(r&&!o?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&o?c.call(e):t),n?this:f,u)};for(var d=function(e){e in u||o(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=i(l),v=0;g.length>v;)d(g[v++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},Pv7o:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("pyOm"),i=n.n(o);t.default=function(e){var t=e.targetRef;return a.a.createElement("div",{ref:t,className:i.a.container},a.a.createElement("h2",null,"My Journey"),a.a.createElement("div",{className:i.a.timelineContainer},a.a.createElement("span",{className:i.a.timeline}),a.a.createElement("div",{className:i.a.storyContainer},a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"April 2019 - Present"),a.a.createElement("h3",{className:i.a.title},"Frontend Engineer in Yolo Technology"),a.a.createElement("p",{className:i.a.description})),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"November 2018 - March 2019"),a.a.createElement("h3",{className:i.a.title},"Software Engineer in SEEK, Group Development"),a.a.createElement("p",{className:i.a.description},"Built job employment platform for multiple countries, and taking full responsible for the products itself, involved in front end and backend development, writing test cases, dev ops, analytics, monitoring, maintenance and provide support for local market team.")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"September 2018"),a.a.createElement("h3",{className:i.a.title},"Awarded Medallion of Excellence in 12th ASEAN Skills Competition"),a.a.createElement("p",{className:i.a.description},"Web Design and Development category. The ASEAN Skills Competition (ASC) is the biggest vocational education skills excellence event in the ASEAN (The Association of Southeast Asian Nations – ASEAN) region that truly reflects global industry. ")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"October 2018"),a.a.createElement("h3",{className:i.a.title},"Completed Degree in Internet Technology"),a.a.createElement("p",{className:i.a.description},a.a.createElement("ul",{style:{listStylePosition:"inside"}},a.a.createElement("li",null,"Graduated with First Class Honour"),a.a.createElement("li",null,"CGPA 3.9349"),a.a.createElement("li",null,"Awarded book prize as the top graduate")))),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"February 2018 - June 2018"),a.a.createElement("h3",{className:i.a.title},"Internship in SEEK, Group Development"),a.a.createElement("p",{className:i.a.description},"Working as Software Engineer Intern")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"November 2017"),a.a.createElement("h3",{className:i.a.title},"My first CHAMPION title"),a.a.createElement("p",{className:i.a.description},"Awarded Gold Medal in WorldSkills Malaysia Belia 2017, Web Design category. Its the biggest professional skills competition in the nation.")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"2016"),a.a.createElement("h3",{className:i.a.title},"Bachelor Degree in Internet Technology"),a.a.createElement("p",{className:i.a.description},"Move to Kuala Lumpur, Malaysia to further proceed my study career")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"2016"),a.a.createElement("h3",{className:i.a.title},"Completed Diploma in Internet Technology"),a.a.createElement("p",{className:i.a.description},"Graduated with First Class Honour (CGPA: 3.79)")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"2014"),a.a.createElement("h3",{className:i.a.title},"Diploma in Internet Technology"),a.a.createElement("p",{className:i.a.description},"Build my base in software engineering world")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"Somewhere in 2012"),a.a.createElement("h3",{className:i.a.title},"Exploration Started !"),a.a.createElement("p",{className:i.a.description},"Start to pickup HTML, CSS, Javascript, and PHP at my own pace during high school")),a.a.createElement("span",{className:i.a.story},a.a.createElement("span",{className:i.a.date},"1996"),a.a.createElement("h3",{className:i.a.title},"Bump Bump Born"),a.a.createElement("p",{className:i.a.description})))))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("28wL"),n("nHs0")),i=n("GooF"),s=n("Pv7o"),c=n("utbx");t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],u=Object(r.useState)(!1),l=u[0],f=u[1],p=Object(r.useState)(!1),m=p[0],h=p[1],d=[{source:Object(r.useRef)(null),target:Object(r.useRef)(null),isActive:t,label:"Start here"},{source:Object(r.useRef)(null),target:Object(r.useRef)(null),isActive:l,label:"My Journey"},{source:Object(r.useRef)(null),target:Object(r.useRef)(null),isActive:m,label:"Me & Contact"}];Object(r.useEffect)((function(){return g(),document.addEventListener("scroll",g),function(){return document.removeEventListener("scroll",g)}}));var g=function(e){d[0].target.current.getBoundingClientRect().top;var t=d[1].target.current.getBoundingClientRect().top,r=d[2].target.current.getBoundingClientRect().top,a=document.documentElement;a.scrollTop+window.innerHeight===a.offsetHeight||r<=0?(v(),h(!0)):t<=0?(v(),f(!0)):(v(),n(!0))},v=function(){n(!1),f(!1),h(!1)};return a.a.createElement(o.default,{pageIndicator:d},a.a.createElement(i.default,{targetRef:d[0].target,teamRef:d[1].target}),a.a.createElement(s.default,{targetRef:d[1].target}),a.a.createElement(c.default,{targetRef:d[2].target}))}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},TJOF:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("Z2Ku"),n("L9s1"),n("rE2o"),n("ioFf"),n("rGqo"),n("q1tI")),i=n.n(o),s=n("vDqi"),c=n.n(s),u=n("TSYQ"),l=n.n(u),f=n("pYOs"),p=n.n(f),m=function(e,t){void 0===t&&(t=[]);var n={},r=t,a=Array.isArray(r),o=0;for(r=a?r:r[Symbol.iterator]();;){var i;if(a){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var s=i,c=e.get(s);[void 0,null,"",{},[]].includes(c)||(n[s]=c)}return n};t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],r=Object(o.useState)(!1),s=r[0],u=r[1];return i.a.createElement("form",{id:"contactUsForm",onSubmit:function(e){var t,r,o;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),n(!0),t=m(new FormData(e.target),["name","email","companyName","phoneNumber","message"]),i.prev=3,r=e.target,o=c.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),i.next=8,a.a.awrap(o.post("https://frdmcjj3g5.execute-api.us-east-1.amazonaws.com/dev/send-contact-us-email",t));case 8:n(!1),u(!0),setTimeout((function(){u(!1)}),2e3),document.getElementById(r.getAttribute("id")).reset(),i.next=17;break;case 14:i.prev=14,i.t0=i.catch(3),console.log("error",i.t0.message);case 17:case"end":return i.stop()}}),null,null,[[3,14]])},className:p.a.contactUs},i.a.createElement("input",{name:"name",autoComplete:"off",type:"text",className:p.a.inputField,required:!0,placeholder:"Name*"}),i.a.createElement("input",{name:"email",autoComplete:"off",type:"email",className:p.a.inputField,required:!0,placeholder:"Email*"}),i.a.createElement("input",{name:"companyName",autoComplete:"off",type:"text",className:p.a.inputField,placeholder:"Company Name"}),i.a.createElement("input",{name:"phoneNumber",autoComplete:"off",type:"tel",className:p.a.inputField,placeholder:"Phone Number"}),i.a.createElement("textarea",{required:!0,name:"message",className:p.a.textareaField,minLength:"20",maxLength:"2000",placeholder:"Your message here*... 20 characters Min."}),i.a.createElement("button",{className:l()([p.a.submitButton,t?p.a.loading:"",s?p.a.done:""]),type:"submit"}))}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UnBK:function(e,t,n){"use strict";n("VRzm"),n("Btvt"),n("8+KV");var r=n("xTJ+"),a=n("xAGQ"),o=n("Lmem"),i=n("JEQr"),s=n("2SVd"),c=n("5oMp");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},V70f:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),s=n("vn34"),c=n.n(s);t.default=function(e){var t=e.indicatorRefs;return a.a.createElement("div",{className:c.a.fixedScreen},a.a.createElement("div",{className:c.a.pageIndicator},t&&t.map((function(e,t){return a.a.createElement("span",{key:t,className:c.a.indicatorContainer},a.a.createElement("span",{className:c.a.pageIndicatorLabel},e.label),a.a.createElement("span",{ref:e.source,onClick:function(){return t=e.target,void window.scrollTo({top:t.current.offsetTop,left:0,behavior:"smooth"});var t},className:i()([c.a.pageIndicatorList,e.isActive?c.a.active:""])}))}))))}},endd:function(e,t,n){"use strict";function r(e){this.message=e}n("a1Th"),n("h7Nl"),n("Btvt"),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";n("eM6i"),n("Oyvg"),n("SRfc");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";n("VRzm"),n("Btvt");var r=n("endd");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},jqX0:function(e,t,n){var r=n("XKFU"),a=n("jtBr");r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},jtBr:function(e,t,n){"use strict";var r=n("eeVq"),a=Date.prototype.getTime,o=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(n>99?n:"0"+i(n))+"Z"}:o},ls82:function(e,t,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new C(r||[]);return o._invoke=function(e,t,n){var r=l;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?m:f,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=c;var l="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function d(){}function g(){}function v(){}var y={};y[o]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(R([])));w&&w!==n&&r.call(w,o)&&(y=w);var N=v.prototype=d.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e){var t;this._invoke=function(n,a){function o(){return new Promise((function(t,o){!function t(n,a,o,i){var s=u(e[n],e,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,i)}))}i(s.arg)}(n,a,t,o)}))}return t=t?t.then(o,o):o()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=N.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},b(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,n,r,a){var o=new x(c(t,n,r,a));return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(N),N[s]="Generator",N[o]=function(){return this},N.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},mxmt:function(e,t,n){e.exports=n.p+"static/logo-f475e2d047ef9173ceb63555ac813fab.svg"},nHs0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("V70f");t.default=function(e){var t=e.children,n=e.pageIndicator;return a.a.createElement("div",{className:"layout"},a.a.createElement(o.default,{indicatorRefs:n}),t)}},o0o1:function(e,t,n){e.exports=n("ls82")},tQ2B:function(e,t,n){"use strict";n("8+KV"),n("V+eJ"),n("VRzm"),n("Btvt");var r=n("xTJ+"),a=n("Rn+g"),o=n("MLWZ"),i=n("w0Vi"),s=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,u){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+h)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};a(t,u,r),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var d=n("eqyj"),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?d.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},utbx:function(e,t,n){"use strict";n.r(t);n("f3/d");var r=n("q1tI"),a=n.n(r),o=n("+FWb"),i=n.n(o),s=n("TJOF"),c=n("WRS/"),u=n.n(c);t.default=function(e){var t=e.targetRef;return a.a.createElement("div",{ref:t,className:u.a.team},a.a.createElement("div",{className:u.a.left},a.a.createElement("div",{id:"stars-group-1"}),a.a.createElement("div",{id:"stars-group-2"}),a.a.createElement("div",{id:"stars-group-3"}),a.a.createElement("div",{id:"stars-group-4"}),a.a.createElement("div",{id:"stars-group-5"}),a.a.createElement("div",{id:"stars-group-6"}),a.a.createElement("div",null,a.a.createElement("h2",{className:u.a.title},"Meet the Team"),a.a.createElement("p",{className:u.a.description},"The site is created to share awesome technology blog post"),a.a.createElement("figure",{className:u.a.founder},a.a.createElement("img",{className:u.a.picture,src:i.a,alt:"founder"}),a.a.createElement("figcaption",null,a.a.createElement("h3",{className:u.a.name},"Sheng Chuang"),a.a.createElement("span",{className:u.a.position},"full stack engineer ",a.a.createElement("span",{className:u.a.emoji},"👨‍💻")),a.a.createElement("p",{className:u.a.description},"Love full stack engineering"))))),a.a.createElement("div",{className:u.a.right},a.a.createElement("div",null,a.a.createElement("h2",{className:u.a.title},"Get in Touch"),a.a.createElement("p",{className:u.a.description},"Please let me know if you have any questions!"),a.a.createElement("p",{className:u.a.description},"Contact me via ",a.a.createElement("b",null,"Email"),":",a.a.createElement("a",{href:"mailto:foundragon@gmail.com",className:u.a.email}," foundragon@gmail.com")),a.a.createElement(s.default,null))))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("KKXr"),n("8+KV");var r=n("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("HSsa"),a=n("x86X"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";n("VRzm"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3");var r=n("xTJ+"),a=n("HSsa"),o=n("CgaS"),i=n("SntB");function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-16af7272294924f31037.js.map