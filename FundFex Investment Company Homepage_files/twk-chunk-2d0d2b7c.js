(window.tawkJsonp=window.tawkJsonp||[]).push([["chunk-2d0d2b7c"],{"5a60":function(t,e,n){"use strict";var r=n("2b0e"),o=n("f0b0");function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=r.a.component("i-frame",{props:{width:{type:String,default:null},height:{type:String,default:null},cssLink:{type:String,default:null},styleObject:{type:[Object,Array]},classString:{type:String,default:""}},data:function(){return{id:o.Helper.generateUUID()}},render:function(t){return t("iframe",{on:{load:this.renderChildren},attrs:{src:"about:blank",frameborder:"0",scrolling:"no",width:this.width,height:this.height,style:Object.entries(this.styleObject).map((function(t){var e=a(t,2);return e[0]+e[1]})).join(" "),id:this.id,class:this.classString,title:"chat widget"}})},beforeUpdate:function(){this.iApp&&(this.iApp.children=Object.freeze(this.$slots.default))},methods:{renderChildren:function(){var t=this.$slots.default,e=this.$el.contentDocument.documentElement,n=this.$el.contentDocument.body,o=this.$el.contentDocument.head,a=document.createElement("div"),i=document.createElement("link"),s=document.createElement("link"),c=document.createElement("link"),l=new r.a({name:"iApp",data:{children:Object.freeze(t)},render:function(t){return t("div",{attrs:{style:"width: 100%; height: 100%;"}},this.children)},store:this.$store,mounted:function(){this.children.length&&this.children[0]&&this.children[0].context&&"function"==typeof this.children[0].context.loaded&&this.children[0].context.loaded()}});i.href=this.cssLink,i.rel="stylesheet",c.href="".concat("https://embed.tawk.to/_s/v4/app/60b739727c0","/css/chunk-vendors.css"),c.rel="stylesheet",s.href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext",n.appendChild(a),n.classList.add("font-lato"),this.$store.getters["widget/isRTL"]&&n.classList.add("tawk-rtl"),this.$store.getters["browserData/mobileBrowserName"]&&(e.classList.add("tawk-mobile"),n.classList.add("tawk-mobile"));var d=document.createElement("meta");d["http-equiv"]="Content-Type",d.content="text/html; charset=utf-8";var h=document.createElement("meta");h.name="viewport",h.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",o.appendChild(d),o.appendChild(h);var m=document.createElement("style"),u=":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;' +\n\t\t\t\t}");u+=".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"]," !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"]," !important;\n\t\t\t}"),u+=".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"]," !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"]," !important;\n\t\t\t}"),this.$store.getters["browserData/isIE"]&&this.$store.getters["browserData/version"]<=11&&(u+=".tawk-custom-color-inverse {\n\t\t\t\t\tbackground-color: ".concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-color {\n\t\t\t\t\tborder-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-left {\n\t\t\t\t\tborder-left: 5px solid ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-color {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color-inverse {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-image .tawk-image {\n\t\t\t\t\tmax-height: 250px;\n\t\t\t\t}\n\t\t\t\t.tawk-timeago {\n\t\t\t\t\tfont-size: .75rem !important;\n\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t}\n\t\t\t\t.tawk-main-panel .tawk-chat-panel {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-tooltip-hover  {\n\t\t\t\t\tmax-width: 120px;\n\t\t\t\t}\n\t\t\t\t.card-container:first-child::before {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-form-wrapper .tawk-input:-ms-input-placeholder,\n\t\t\t\t.tawk-form-wrapper .tawk-textarea:-ms-input-placeholder {\n\t\t\t\t\topacity: 1 !important;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content {\n\t\t\t\t\t-ms-flex-grow:1;\n\t\t\t\t\t-ms-flex: 1;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-left {\n\t\t\t\t\tflex: 0 0 50%;\n\t\t\t\t\tmax-width: 50%;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right {\n\t\t\t\t\tflex: 0 0 40%;\n\t\t\t\t\tmax-width: 40%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right .tawk-timeago {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tword-wrap: break-word;\n\t\t\t\t\tword-break: all;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}")),this.$store.getters["browserData/isIE"]&&this.$store.getters["browserData/version"]<=10&&(u+="\n\t\t\t\t\t.tawk-custom-flex-1 {\n\t\t\t\t\t\tflex: 0 0 auto !important;\n\t\t\t\t\t}\n\t\t\t\t\t.tawk-input, .tawk-select, .tawk-textarea, .tawk-chatinput-editor, .tawk-form-label {\n\t\t\t\t\t\tfont-size: .812rem !important;\n\t\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t\t}\n\t\t\t\t"),m.appendChild(document.createTextNode(u)),o.appendChild(s),o.appendChild(c),o.appendChild(i),i.onload=function(){l.$mount(a)},o.appendChild(m),this.iApp=l}}}),c=n("2877"),l=Object(c.a)(s,void 0,void 0,!1,null,null,null);e.a=l.exports}}]);