(function(t){function e(e){for(var a,o,s=e[0],A=e[1],c=e[2],u=0,l=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in A)Object.prototype.hasOwnProperty.call(A,a)&&(t[a]=A[a]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=A(A.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return A.p+"js/"+({}[t]||t)+"."+{"chunk-50466992":"4f9af52e","chunk-9b9f8578":"d31739a4","chunk-44c66b03":"34f681da","chunk-63cf6802":"cb6e2263"}[t]+".js"}function A(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.e=function(t){var e=[],n={"chunk-50466992":1,"chunk-9b9f8578":1,"chunk-44c66b03":1,"chunk-63cf6802":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-50466992":"38c6ac59","chunk-9b9f8578":"79a69ce7","chunk-44c66b03":"0c0e0d9c","chunk-63cf6802":"785f5e76"}[t]+".css",r=A.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,A.nc&&u.setAttribute("nonce",A.nc),u.src=s(t);var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},A.m=t,A.c=a,A.d=function(t,e,n){A.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},A.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},A.t=function(t,e){if(1&e&&(t=A(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)A.d(n,a,function(e){return t[e]}.bind(null,a));return n},A.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return A.d(e,"a",e),e},A.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},A.p="",A.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06b9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAShJREFUSIntleFNwzAQhb/rBNkARggTNGzACNmgjAAb0AnabNANCBO03SBMgJng8SMOcoybQjEgVXySlfj55Jezzhc4NywlSqqBi0weDmhSJrfKz+OHjCS1wDxTNu/Mcm/4bzTwCiz9iGmAe+A50p+8vp/cWVIbVEsd6GE1rgO9DPQu0AtJblg4llF36ruZudGad577UUQZbSVd+rEN9BdJlY9fRXdmkTgBIakL5lVklI0Z+VrNJH9a3u43jEpgnQr8JkuTpEBwwBVQAJV/fpYCWATzhr68d2a2iY0Gsw3j+5GiMbNRjPoLvvLTazNrw8VTqVLukurkuoI28UXKQ6mqb0ujYzdJN/RFUNH/8Pb+6KZwZvZwJObgV9xJ2sVfkh353vWjJmfFG8xLIGcuMSQ3AAAAAElFTkSuQmCC"},"12b8":function(t,e,n){},"304b":function(t,e,n){"use strict";var a=n("9828"),o=n.n(a);o.a},5143:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAsBJREFUaIHtmE1W01AUx3/3JYfOpDrqOVByJQuwrsCyAuvMmbADXQG4AtkBugLZAXUFlAVUX0XPcUZ0xjk0zwGh9CO0TUpbov3N8j7y/v/kvpv7AitW/N/IuM6wqg0nPFuUmDTEcdY+t8d39t/VEVZ1F8PRfGRlJGavfW4/pnWlGgir2sDweb6qMhLzKu1NmLSxTqjNX1E27tKUaqBI+FOO+9Lu2PpclQwRBtoEXkwaN62BVLSiik+AUMYRcUXH/rL2vueMI5cB3dCa8TkShuLSgzDQ4+4l74ZFaUXVK/EBaAzP2Q60FV+xZ3/aVlYtmfeAVlSNz8mI+FsapsTpyEIlWgyLTxCoGZ8Trahm1ZPZgFmjIVAeN0agrJva2zO6qXWB9UlzzFq6wbF6sk5ggvgZyXzvuaRRB2c4or6GyMHZPNbKtYkddMTRdNCKY1o4onEbMOkb2DO6oTWEsjHUBGpOyJWmMxv4+t0eAAd5Fuunz3BzlvvkS6NJLjem99RUhF4GcaACAxnFgRXopVbnsCTXcUwz7/dgKgMOgu0t3Zfr1zzxVadViImhninpG+R53HxDAJruOjyDsbV+wlQGBBSZPWympC4Z9kPhi7l0A8LLBeuYzB2avOGG7S09EOH1/BVlQ6DyeL0sF7+j5lD7LVpRNSVOJ5UKy8JBFF/yvD9bDYSQV+LooYqH63rJKw2e03shFFZ1F+Ht4mVlRp88Kncu/kQtSEJIVcvG8e0hP/1+HESx8NRaGxkAL+awKOIhCaWYQwDRTa17HifLFpWHbpcd3xPUOd4vW0wePCHzCW7FfSNhoIWM/xt8piiPHzL/aDVaIPy0FCrC/kCD45PrOw4uguQQ9WZARprWtMlhoK7/uttlx/6wMx2+s5L2gW137IjewofQysCyKbyB1N8qI7v9arEZ6GZNZ4pZZK5YsUj+AhJixjPzEaAYAAAAAElFTkSuQmCC"},5150:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAApNJREFUaIHNmd112zAMhb/05L0cQRtEG8QjeIN4hG4QbZBkAqcT2J3AygT1BtYGUSdwHwhWqqxQJKi/ew6OLEskLwgIJMA7xkMGPAJbwMh9Js8qkRo4Ar/k9ypggD1wjZQXabsocuCTePJOPqWPRWCAywDBELmwkCXeFWS/kveZuWNIc50+V1JZ4ZtSARdpxoKRPqOhVWCjbDd6n/fKwbLO/U9sfK9FSuB7Yp+Tosb6bkV/GNy03on5DmbDVQj6Zi0jPlJF407TSAZ7A34EvGuwVurz8TPWilvgWcNH+w1A+F7GfROl5x1VBAJ9FFoNUhQYM2qo+9Iq8Cdl0B5k0mc0tAqciY/zPhjpMxopCuSMY4UMeECpgBY5NpSGhNEhFNLX7HlBRfpe3uUU1SiMIrHDzlyR0IebffU6kIoSvfmdG/oWuMmRYVfa2NzW5dJD+6lZkNMosQt4f0dDfrGEvoscGwavwIn+jdtGnl1pwvBqkGEjyiv/Vxv2Iu3qRUFT+Foc7Vk90BB7xYZGR7qS/5yiB/zWmhw5DfFuVvVCv3vk8qyvmnH6os3oyAgvI7bXhyKwzZ6JXMtgM6aYWlA7x41t98yIZZunSAJt2Ypoi11PKcQN/X4eI0eRlD5OKK3hIsUa5BBLXmv2KSVklf+H3ysg3JVLKHm3S1yj3Cx6fSlllKlmRhC3MU5domeyhdLT7saNuhZonyxOCV9Y9FU7bvh1S4tzbXEP2C31EfjAknaL3lDMz2nl0Esp4MbSpqJHd9N1odUcPnswyNFlVmuUoOKXwR8JlpKSyD1RQfwx0RRSk1ABNKJIOz2cSyqa/HkUbLF57ZTfyFnGCM6TtWdkyCA5zRmYm6nHgXYfcq2xhN1VVaH7C5dgo5vzsyPmAAAAAElFTkSuQmCC"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loading"),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("div",{staticClass:"loading"}):t._e()},s=[],A={computed:{isLoading:function(){return this.$store.state.isLoading}}},c=A,u=(n("7411"),n("2877")),l=Object(u["a"])(c,i,s,!1,null,"0c8f48e8",null),f=l.exports,g={components:{Loading:f}},m=g,d=(n("5c0b"),Object(u["a"])(m,o,r,!1,null,null,null)),h=d.exports,p=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-relative"},[a("div",{staticClass:"home-page pt-md"},[a("HomeNavbar"),a("main",{staticClass:"px-lg"},[a("div",[a("img",{staticClass:"logo d-block mx-auto mb-xl",attrs:{src:n("5fcc"),width:"300px",height:"auto",alt:"logo"}}),a("div",{staticClass:"room-intro px-md"},[a("h3",{staticClass:"title"},[t._v("客房介紹")]),a("div",{staticClass:"d-flex flex-wrap justify-content-between"},t._l(t.rooms,(function(e){return a("div",{key:e.id,staticClass:"room-img"},[a("img",{attrs:{src:e.imageUrl,alt:"room"}}),a("div",{staticClass:"more"},[a("h3",[t._v(t._s(e.name))]),a("p",[t._v(t._s("$"+e.normalDayPrice+"~$"+e.holidayPrice))]),a("router-link",{attrs:{to:"/room/"+e.id}},[t._v("more ➜")])],1)])})),0)])])])],1),a("div",{staticClass:"leaves-bg"}),t._m(0),a("Footer")],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ornament"},[a("div",{staticClass:"brand"},[a("span",[t._v("訂")]),a("span",[t._v("房")])]),a("div",{staticClass:"lantern"},[a("img",{attrs:{src:n("c47f"),alt:"tel",width:"20ox",height:"20px"}})]),a("div",{staticClass:"lantern"},[a("img",{attrs:{src:n("06b9"),alt:"message",width:"20ox",height:"20px"}})])])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"home-navbar"},[a("ul",{staticClass:"d-flex justify-content-center"},[t._m(0),a("li",[a("img",{attrs:{src:n("5143"),width:"48px",height:"48px",alt:"link-icon"}}),a("router-link",{staticClass:"room-intro",attrs:{to:"/"}},[t._v("客房介紹")])],1),t._m(1),t._m(2),t._m(3)])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("5150"),width:"48px",height:"48px",alt:"link-icon"}}),a("a",[t._v("關於我們")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("9190"),width:"48px",height:"48px",alt:"link-icon"}}),a("a",[t._v("住宿服務")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("e6d3"),width:"48px",height:"48px",alt:"link-icon"}}),a("a",[t._v("交通指引")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("65b1"),width:"48px",height:"48px",alt:"link-icon"}}),a("a",[t._v("最新消息")])])}],k=(n("99f2"),{}),B=Object(u["a"])(k,C,w,!1,null,"58e23532",null),x=B.exports,N=n("fd2d"),R={components:{HomeNavbar:x,Footer:N["a"]},computed:{rooms:function(){return this.$store.state.rooms}},methods:{getRooms:function(){this.$store.dispatch("getRooms")}},created:function(){this.getRooms()}},y=R,E=(n("304b"),Object(u["a"])(y,v,b,!1,null,"271551ae",null)),I=E.exports;a["a"].use(p["a"]);var O=[{path:"/",name:"Home",component:I},{path:"/room/:id",component:function(){return Promise.all([n.e("chunk-9b9f8578"),n.e("chunk-63cf6802")]).then(n.bind(null,"3ab1"))}},{path:"/reservation/:id",component:function(){return Promise.all([n.e("chunk-9b9f8578"),n.e("chunk-44c66b03")]).then(n.bind(null,"2b83"))}},{path:"/reservation/:id/result",component:function(){return n.e("chunk-50466992").then(n.bind(null,"4241"))}}],S=new p["a"]({routes:O,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),D=S,j=(n("b0c0"),n("2f62")),G=n("bc3a"),U=n.n(G);a["a"].use(j["a"]);var F={Authorization:"Bearer tTbi8Es6qw4Mm4aIpVArVsDm13jEhBPscofeWsI2ah5T9XW8KK2BNheL2U7L",accept:"application/json","Content-Type":"application/json"},L=new j["a"].Store({state:{isLoading:!1,rooms:[],curRoom:{},checkDate:{checkin:"",checkout:""},reservationData:{roomId:"",roomNum:1,adultNum:0,childNum:0,totalPrice:0,date:[],guestInfo:{firstName:"",lastName:"",name:"",gender:"",tel:"",email:"",breakfast:!1,rentCar:!1}},reservationResult:{success:!1,data:{}}},mutations:{LOADING:function(t,e){t.isLoading=e},setRooms:function(t,e){t.rooms=e},setCurRoom:function(t,e){t.curRoom=e},setCheckDate:function(t,e){t.checkDate=e,console.log("checkDate: ",t.checkDate)},setReservationData:function(t,e){t.reservationData=Object.assign(t.reservationData,e),console.log("reservationData: ",t.reservationData)},setReservationResult:function(t,e){t.reservationResult=e,D.push("/reservation/".concat(t.reservationData.roomId,"/result"))}},actions:{updateLoading:function(t,e){0==e?setTimeout((function(){t.commit("LOADING",e)}),700):t.commit("LOADING",e)},getRooms:function(t,e){t.commit("LOADING",!0),U()({method:"get",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",headers:F}).then((function(e){t.commit("setRooms",e.data.items)})).catch((function(t){console.error(t)})).finally((function(){t.dispatch("updateLoading",!1)}))},getCurRoom:function(t,e){t.commit("LOADING",!0),U()({methods:"get",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(e),headers:F}).then((function(e){console.log("current room: ",e.data.room[0]),t.commit("setCurRoom",e.data.room[0])})).catch((function(t){console.error(t)})).finally((function(){t.commit("LOADING",!1)}))},bookRoom:function(t,e){var n=e.guestInfo;U()({method:"post",url:"https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(e.roomId),headers:F,data:{name:n.name,tel:n.tel,date:e.date}}).then((function(e){if(e.data.success){var n={success:!0,data:e.data};console.log("booking result: ",n),t.commit("setReservationResult",n)}})).catch((function(e){var n={success:!1,data:e.response.data};console.log("booking result: ",n);var a=n.data.message;"您所提供的訂房時間(date)不得大於 90 天。"==a?n.data.message="訂房時間不得大於 90 天":"您所提供的訂房時間(date)不得小於或等於今天。"==a?n.data.message="訂房時間不得小於或等於今天":"您所提供的訂房時間(date)已有訂房。"==a&&(n.data.message="您所提供的訂房時間已有訂房"),console.log(n),t.commit("setReservationResult",n)}))}}});a["a"].config.productionTip=!1,new a["a"]({router:D,store:L,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"5fcc":function(t,e,n){t.exports=n.p+"img/home_logo.bd75286b.png"},"65b1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAwlJREFUaIHVmduV2kAMhr8kDbgEl0AJTgW7HYTHvIUOwlYAHZBUsHSwvOZpSQXQgZ0KyMOMsBg8F3wZWJ2jA7bH9i/Nr5E0/sIw+QF8Bwrg7433fgMWQAn8GYijlyyBk9IaWFlAPintmNq5dzkp0g4pOkBofQOe1Pgne843vrbPzCau98fQbLMQ835fzTYLvyYAL7qeGnw5IXjR0CIwWF4zGPA6NugZ8BM4ZAAverDvnA0BvcoMOmTMKtWY+YOADhkz94GfPQDAVD3PxmdlQNZMOFDOWLUBxzsA6SterEfuS40lhuOhMUFHb+9sAMST5VYD1hQC2IesG1l+A1+BF3WuIk7lXehiRT5v65JhZ88tnOMurSIGTgL2iOH2ugNIYbXBFIoQLhijMmapvMV49UC79O1pAxbaCrQC3u1/X79Rx8CPkcwaC0ooUlgDpEgr1RgwdBHqyG+IysFqNdT2pdJEPF0CGy5nVMqAOW0wCl00t4vAe9584Bc9gTf2VzxadjhC8ktNWwYs1a9c095t8L9zgSN928SSdt2WllAC8oTxrnhWjHhX4+CSLu/qXKiovGo/+zYqQomdc1wpb5aY2l47aKPe7cZdajV8bnxS1v4j8Gyt1tlaPPasXq6fu0kwfkibWnGDxZqfC1qauBSRY3ct31vQcl8dMTBFDxAOFq3uvk1pQUnykUVAVgmZWR0HMGylc7WBePXnBo5wWmRpz+ng1fzHXpuirz53Z3pqU27YWk+6SUVoI7MyYzhNfJ6/ai1ntGk+yDlaetTOg/SSOiZVtO4JNPjuKtOlbtCeMEtaidlunwK06JbE1jeUlaWhSI2dsfQq+8YktANdYj5Q5ALfa+c6Z3MTU28T8ylixOkWiycUL063J3bl38hA+kgQQ8yAnE2+T4IYYgY0IwLpK8Fdio8wA4MMeITtxkEYdIF2D22IZN7YMgomaUkzs6c7LiouK9QUeaF7l63A1DqyT5QtDm8pLbwfKe4tsbK8wczmQ4tMfxf43h/tcotrxIcCL1JgNrvWTPj56j9njy+SelKEKgAAAABJRU5ErkJggg=="},"67c0":function(t,e,n){},7411:function(t,e,n){"use strict";var a=n("12b8"),o=n.n(a);o.a},"7bb7":function(t,e,n){"use strict";var a=n("67c0"),o=n.n(a);o.a},9190:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAndJREFUaIHtmb9uE0EQxn+BtEj3BrkK0SAsIUqk0KWLyxRIhAqJhjwBkDdwOrq4oKDDbxA/ABKOqFLFokrnQ1QU6CjGq+yd97y3d/vHFvmkke7W3tlvZmd3Z+fgDmlxP/J4GfAGOAB+ATeRx++N70CpyTAtHTfsUyVfAtO+Su/1VfA/IQNmVGfgOCmjlngFnLMa/yWwAC6AD0CeiqAJGUJqgRCdA2PgmlUjdLlA1kpSDLklXiBhore1ka+IE6LjnOoOkyEGtCVeD69BKvLjZVtX8tGNMJEf9iQfzYgTbbDZsi3HLeZtck2gNVEnqjw19kheySiEATpRNYApZfAlXs+KvEF5CO/X15cXjAyKs4DklVTWQp9k7lB7VllljPTYyxj18FFeCRk+xjDqOgP6vnyJpAwATzrqc0FlDB8GzBvaQ6Eyho8LjTq8ouYtCj4MUDOQJHvc7dhvangugNN+dNyx4/Dfp8CzUERi4D3ht0hn2fqqhMsa+M0WVtI2Hi6LGGSrPERSiQHmrTNb/lYAL7g9J5JiiFwbXW9ZJxa9+0gFYoGHItcu8BgpRJ0BL3Evh5SI5ydrCOXAO1ZrRJOuxD8B34A/NYWfaX8xnyDeXpdOHCPeNvWfWfo2YmepwIQr4AgpCdpQrzLr7zniiKZU4xT42GKMRjR59S+SK4U6hDp7va0BJfAISdZ8Ei/o6XEXA46QcPBFfornyoItlRjg4SsK8j3sNbJtzi3/dYItlRgAX7R3/fqYA3uW/pfIDjXS+nnHuim/QbxWkOjG1Qa2uH3IBpMHuwEH6ajZ0eY+sNHery/in8CPmlzFJuWKt8Bz4EFqInfYRvwDzrX/kfvVJhsAAAAASUVORK5CYII="},9828:function(t,e,n){},"99f2":function(t,e,n){"use strict";var a=n("d587"),o=n.n(a);o.a},"9c0c":function(t,e,n){},c47f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAjtJREFUSImdlj9oFEEUh38TBRHBrLXNEVJYiFxhUGxyNmKlJ5aCnpWVEFFL8QrBTkREUIRcIaRTFK0EPcFOIQEFrcxpo2JxJyRqIX4WM+ONk93ZSR4Mdzv73vvm/dm3a5QpQFvSUUkNSQO3RpIeGmMGdfYTkbMp4BZwH5iMdFuSPkp64X4PSjotaRlYBE7lnvgw8IuxLGTaNYAuMHLAZkp5F7DKWpmO9JrALDBb4qMArju7ThlkM/CmBAJwI9BrldxfBi4DRaDXcdF1YtCZCgguyrhWYco6wBIwDB0DbWffCg1eJkAAFytzvjaK+WCv6w5Q+I2VGtCryPi5W/PhibH1GwFzwd4A6OaCnkTO2i6Cno/Cn5pxHZtBpENv/CwB+Q3MJFLWwNboQbDXA3rB9QhoCzifAJ3IqE9B0GUuaoIoLRjYCfwpgXyqgwSwOWAxqk3b/e8CfX/jXkVEuzNBDYDguo9rAmzdhn7WXZAdkLHcBTbVgfxQZfzgxr6KCaf4RdLZEh/7JN2pAzk5Z4zxgCW3vHz/TxN4VJHCq5mwPHEdNKiA9YAtCVuDHbhFlU5ssIfySQ72NTBVYXfT6awCl4CtObAj2Ie1TFaIXnLAtRK9r8BJwNTBDiUiAzuMjwNXEjo+C9N1sL3AtxpHOXJ7IgUyxryWNCPpfW2+0/I2SwvYjp3SG5HPwLZ1HQvbvv11QH4ABzaSAg/cDzymujMB3hF8EaVbrx44KftReUzSDkk/JX2Q9FT2w/LfoP0L7HGs7OA54FAAAAAASUVORK5CYII="},c6b3:function(t,e){t.exports="data:image/png;base64,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"},d587:function(t,e,n){},e6d3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAjtJREFUaIHtme1t2zAQQF/a/C9HcDbQBm03yAbWBskI3qDeIOkETSdINqg7gd0JrA2SHxJBWj1S5FG2ZEAPIGQIOvruyPugBAsLC1fNzRnmXAHr7rrq7h2AHfC7+z1LvgGvwPvAeO2enRU/GFa8P54m0VTgiXzl7fg1gb4nbNArP8pKlASx3fMS/4AXXMCugBr4Enj+O/BWoIuKUMBuASM8b4DngMyfC+h7QhVQZJsguw3IVmfRNMCjoEBOfj8I8inG/8cnjRBwL9x7zpB/Ee6pVkBrgEROEEoGqBjTgEkY04CcLTBawGoNkAJ2nSH/INzbaRTRGiDt94o2Ow3xiOtSfVQGaDGEW4M6IlcHZBrk4ndWQlXVtsxr4Gs31sRbbVUNKGVF67nSZm4S71vuExQcGlJRvCih3iZlbCbQVyQWD6GR03qokZo2KeMY2jSYqryfMkOZyY6U1CxigOPA5EdcVU01YocL2lBb3v8PVZCnHhd9IyrimanBFbEqwUGDsRI6Uhpgj7P8J/E92+C2Reyo6R8dK+KerXHtSQPcddckfO9r8rSUmXKLleF0NZMzVn/va1Kd4fTUdUC3j31HHlOF/KxQUiX9eWL9UYz+KiTNs6fM+z4N5e9C/e24H3q4n5OltjcH/wVvyRxS7RHxvX+RSpmIX+mDqzC298ckaRXm6n1LdBXm7H2LuAq2Eu9xSr8xoza3xwb3ceRAW50Hu8E5j/oz7UeGyY50hZhb4C/t+/xr5Fr1XlhYsHwAJhCnZcZ0rGMAAAAASUVORK5CYII="},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer py-md px-lg"},[a("div",{staticClass:"d-flex align-items-center"},[a("img",{staticClass:"QRcode mr-lg",attrs:{src:n("c6b3"),alt:"QRcode",width:"50px",height:"50px"}}),a("div",{staticClass:"mr-lg"},[a("p",{staticClass:"mb-xs"},[t._v("Tel: 02-24884712")]),a("p",[t._v("Fax: 02-84884712")])]),a("div",[a("p",{staticClass:"mb-xs"},[t._v("Email： reloading.hotel@gmail.com")]),a("p",[t._v("Add： 新北市小山區五月鄉三雲裡5號之1")])]),a("ul",{staticClass:"d-flex language-select"},[a("li",{staticClass:"active"},[t._v("繁體中文")]),a("li",[t._v("简体中文")]),a("li",[t._v("日本語")]),a("li",[t._v("English")]),a("li",[t._v("한국어")])])])])}],r=(n("7bb7"),n("2877")),i={},s=Object(r["a"])(i,a,o,!1,null,"2183f09e",null);e["a"]=s.exports}});
//# sourceMappingURL=app.aa53d552.js.map