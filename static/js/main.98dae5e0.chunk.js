(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),l=n.n(c),o=n(1);function i(e,t,n,r){return new(n||(n=Promise))(function(a,c){function l(e){try{i(r.next(e))}catch(t){c(t)}}function o(e){try{i(r.throw(e))}catch(t){c(t)}}function i(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(l,o)}i((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,a,c,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){l=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){l.label=c[1];break}if(6===c[0]&&l.label<a[1]){l.label=a[1],a=c;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(c);break}a[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(o){c=[6,o],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}}var s=function(e){return new Promise(function(t){return setTimeout(t,e)})},m=function(e){var t=e.min,n=e.max;return i(void 0,void 0,void 0,function(){var e,r;return u(this,function(a){switch(a.label){case 0:e=Math.random()*(n-t)+t,r=performance.now(),a.label=1;case 1:return performance.now()-r<e?[4,new Promise(function(e){requestAnimationFrame(e)})]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})})},h=function(e){var t=e.words,n=void 0===t?[]:t,a=e.min,c=void 0===a?10:a,l=e.max,o=void 0===l?80:l,h=e.wordDelay,b=void 0===h?2e3:h,p=e.eraseDelay,g=void 0===p?1e3:p,f=Object(r.useState)(0),d=f[0],w=f[1],v=Object(r.useState)(""),y=v[0],E=v[1],F=n[d];return Object(r.useEffect)(function(){i(void 0,void 0,void 0,function(){var e,t;return u(this,function(r){switch(r.label){case 0:e=function(e){return u(this,function(t){switch(t.label){case 0:return[4,m({min:c,max:o})];case 1:return t.sent(),E(function(t){return t+F.charAt(e)}),e!==F.length-1?[3,3]:[4,s(b)];case 2:t.sent(),i(void 0,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:e=0,t.label=1;case 1:return e<F.length?[4,m({min:c,max:o})]:[3,5];case 2:return t.sent(),E(function(e){return e.slice(0,e.length-1)}),e!==F.length-1?[3,4]:[4,s(g)];case 3:t.sent(),w(function(e){return e===n.length-1?0:e+1}),t.label=4;case 4:return e++,[3,1];case 5:return[2]}})}),t.label=3;case 3:return[2]}})},t=0,r.label=1;case 1:return t<F.length?[5,e(t)]:[3,4];case 2:r.sent(),r.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},[d]),y},b=(n(11),function(){var e=Object(r.useState)(10),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(80),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(r.useState)(2e3),b=Object(o.a)(m,2),p=b[0],g=b[1],f=Object(r.useState)(1e3),d=Object(o.a)(f,2),w=d[0],v=d[1],y=h({words:["Hello","World","This is","a hook"],min:n,max:u,wordDelay:p,eraseDelay:w});return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"typewriter"},y," ",a.a.createElement("span",{className:"cursor"})),a.a.createElement("div",{className:"controls"},a.a.createElement("div",{className:"slider"},a.a.createElement("label",null,"Minimum:"),a.a.createElement("input",{type:"range",min:0,max:100,step:10,value:n,style:{background:"linear-gradient(to right, #05F 0%, #05F ".concat(n,"%, rgba(255, 255, 255, 0.3) ").concat(n,"%, rgba(255, 255, 255, 0.3) 100%)")},onChange:function(e){return c(e.target.value)}})),a.a.createElement("div",{className:"slider"},a.a.createElement("label",null,"Maximum:"),a.a.createElement("input",{type:"range",min:0,max:100,step:10,value:u,style:{background:"linear-gradient(to right, #05F 0%, #05F ".concat(u,"%, rgba(255, 255, 255, 0.3) ").concat(u,"%, rgba(255, 255, 255, 0.3) 100%)")},onChange:function(e){return s(e.target.value)}})),a.a.createElement("div",{className:"slider"},a.a.createElement("label",null,"Word delay:"),a.a.createElement("input",{type:"range",min:0,max:1e4,step:1e3,value:p,style:{background:"linear-gradient(to right, #05F 0%, #05F ".concat(p/100,"%, rgba(255, 255, 255, 0.3) ").concat(p/100,"%, rgba(255, 255, 255, 0.3) 100%)")},onChange:function(e){return g(e.target.value)}})),a.a.createElement("div",{className:"slider"},a.a.createElement("label",null,"Erase delay:"),a.a.createElement("input",{type:"range",min:0,max:1e4,step:1e3,value:w,style:{background:"linear-gradient(to right, #05F 0%, #05F ".concat(w/100,"%, rgba(255, 255, 255, 0.3) ").concat(w/100,"%, rgba(255, 255, 255, 0.3) 100%)")},onChange:function(e){return v(e.target.value)}}))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/gielcobben/use-typewriter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"#FFF"},a.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=Checkout%20the%20useTypwriter%20hook%20by%20%40gielcobben%20on%20%40github%20%E2%80%93%20https%3A%2F%2Fgithub.com%2Fgielcobben%2Fuse-typewriter",target:"popup",rel:"noopener noreferrer",onClick:function(e){return e.preventDefault(),window.open("https://twitter.com/intent/tweet?text=Checkout%20the%20useTypwriter%20hook%20by%20%40gielcobben%20on%20%40github%20%E2%80%93%20https%3A%2F%2Fgithub.com%2Fgielcobben%2Fuse-typewriter","popup","width=600,height=250"),!1}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"#FFF"},a.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))))))});l.a.render(a.a.createElement(b,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(12)}},[[3,1,2]]]);
//# sourceMappingURL=main.98dae5e0.chunk.js.map