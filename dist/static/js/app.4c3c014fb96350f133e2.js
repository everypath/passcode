webpackJsonp([1],{"5lN6":function(e,t,o){e.exports=o.p+"static/img/fuda-logo-blue.43a516a.png"},BXD5:function(e,t){},I5MM:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]};var r=o("VU/8")({name:"App"},n,!1,function(e){o("I5MM")},null,null).exports,a=o("/ocq"),l=o("LqYc"),s=o.n(l),c=o("bUlO"),d=o.n(c),u={name:"HelloWorld",components:{QRCode:s.a},data:function(){return{msg:"Welcome to Your Vue.js App",timer:"",currentTime:new Date,downloadButton:!1,configs:{value:"",imagepath:"passqrcode/passqrcode/static/123455.png",filter:"color"},full_name:"",org_name:"",large_word:"",full_name_show:!1,org_name_show:!1,large_word_show:!1}},created:function(){var e=this;e.timer=setInterval(function(){var t=(new Date).getFullYear(),o=e.appendZero((new Date).getMonth()+1),i=e.appendZero((new Date).getDate()),n=e.appendZero((new Date).getHours()),r=e.appendZero((new Date).getMinutes()),a=e.appendZero((new Date).getSeconds());e.currentTime=t+"/"+o+"/"+i+" "+n+":"+r+":"+a,e.currentdate=o+"月"+i+"日",e.currenthour=n+":"+r,e.currentsec=a},1e3)},methods:{RandomRangeNumber:function(e,t){return Math.round(Math.random()*(e-t+1)+t)},RandomString:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",o=t.length,i="",n=0;n<e;n++)i+=t.charAt(Math.floor(Math.random()*o));return i},appendZero:function(e){return e<10?"0"+e:e},qrcode:function(){var e=this.RandomRangeNumber(6e4,1e4)+"";new s.a("qrcode",{width:100,height:100,text:e})},barcode:function(){var e=this.RandomString(7);new d.a("#barcode",e,{format:"CODE39",lineColor:"#000",width:3,displayValue:!1})},inputBoxHideShow:function(){this.full_name_show=!this.full_name_show,this.org_name_show=!this.org_name_show,this.large_word_show=!this.large_word_show}},mounted:function(){this.qrcode(),this.barcode()},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{background:"#0984BD"}},[i("div",{staticStyle:{"text-align":"left",position:"relative",width:"100%",bottom:"2%"}},[i("span",{staticStyle:{position:"relative",display:"inline-block",left:"5%",width:"70%"}},[i("div",{staticStyle:{color:"white","font-size":"120%",position:"relative",top:"0px"}},[e._v("姓名："+e._s(e.full_name))]),e._v(" "),i("br"),e._v(" "),i("div",{staticStyle:{color:"white","font-size":"120%",position:"relative",top:"0px"}},[e._v("部门："+e._s(e.org_name))]),e._v(" "),i("br")]),e._v(" "),i("img",{staticStyle:{width:"25%",height:"25%",position:"relative",bottom:"4px"},attrs:{src:o("5lN6")}})]),e._v(" "),i("div",{staticClass:"qrcanvas"},[i("br"),e._v(" "),i("img",{staticStyle:{width:"95%",position:"relative",left:"3%"},attrs:{id:"barcode"}}),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#1E9243","font-size":"120%",position:"relative",display:"inline-block","font-weight":"bold"}},[e._v(e._s(e.currentdate))]),e._v(" "),i("div",{staticStyle:{color:"#1E9243","font-size":"250%",position:"relative",display:"inline-block","font-weight":"bold"}},[e._v(e._s(e.currentsec))]),e._v(" "),i("div",{staticStyle:{color:"#1E9243","font-size":"120%",position:"relative",display:"inline-block","font-weight":"bold"}},[e._v(e._s(e.currenthour))])]),e._v(" "),i("br"),e._v(" "),i("div",{ref:"qrcode",staticStyle:{display:"inline-block","text-align":"center",position:"relative",left:"27%"},attrs:{id:"qrcode"}}),e._v(" "),i("marquee",[i("div",{staticStyle:{"font-size":"300%",color:"green",position:"relative"}},[e._v(e._s(e.large_word))])]),e._v(" "),i("div",{staticStyle:{position:"relative",width:"85%",color:"#1E9243","text-align":"left",left:"10%","font-size":"80%"}},[e._v("未见异常，允许通行，请主动出示，配合检测，并做好自我防护，出行前请确认。")]),e._v(" "),i("br"),e._v(" "),e._m(0)],1),e._v(" "),i("br"),e._v(" "),i("div",{staticStyle:{position:"relative","font-weight":"bold",left:"30%",border:"1px solid #FFF","border-radius":"5px",width:"40%",color:"white","font-size":"120%","text-align":"center"},on:{click:function(t){return e.inputBoxHideShow()}}},[e._v("每日健康填报")]),e._v(" "),i("br"),e._v(" "),e.full_name_show?i("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{placeholder:"姓名"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}}):e._e(),e._v(" "),e.org_name_show?i("input",{directives:[{name:"model",rawName:"v-model",value:e.org_name,expression:"org_name"}],attrs:{placeholder:"部门"},domProps:{value:e.org_name},on:{input:function(t){t.target.composing||(e.org_name=t.target.value)}}}):e._e(),e._v(" "),e.large_word_show?i("input",{directives:[{name:"model",rawName:"v-model",value:e.large_word,expression:"large_word"}],attrs:{placeholder:"滚动文字"},domProps:{value:e.large_word},on:{input:function(t){t.target.composing||(e.large_word=t.target.value)}}}):e._e(),e._v(" "),i("div",{staticStyle:{"text-align":"center",color:"#0984BD",position:"relative"}},[e._v(e._s(e.currentTime))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"relative",left:"5%"}},[t("img",{staticStyle:{position:"relative",left:"5%",bottom:"8px",width:"6%",height:"6%"},attrs:{src:o("ZMDM")}}),this._v(" "),t("div",{staticStyle:{"font-size":"90%",display:"inline-block","text-align":"left",position:"relative",left:"5%"}},[this._v("一卡通"),t("br"),this._v("适用于所有场景")]),this._v(" "),t("br"),t("br")])}]};var v=o("VU/8")(u,p,!1,function(e){o("BXD5")},"data-v-82ff445c",null).exports;i.a.use(a.a);var _=new a.a({routes:[{path:"/",name:"HelloWorld",component:v}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:r},template:"<App/>"})},ZMDM:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADCElEQVRoQ+2bTWgTQRTH/283tjUixbYKfpZ6seBHbZriwUtvIgVrPetBUC8qFHpSCCwJKHoS9KSCBz1bLVTRuwepbmzwUC+KtSpiGw+l0pTNPtnASqNJm93ZZHc72+u8j/m9N29nMn1DWOXvyJS2q2iqQwAPMuMQEXWAuXk1nYaPERWYeY4IOYAmVKX49HWPNlttHlRpoFfXdsRI1Zj5LIBYwyHEHBpE9MDgopZNaN/+NfUfcFLPnADzIxA2i/n1WZuxAKLTbxKp8ZUzKQPue5e5DJNvEaD4PF1P3DNgQqGRt4dTt22Df4GtzDJ4bL3A2oAWNIGG7UyXgK2aVVmZDv0yrrYuGAtFMrutmi4B92czd5n5vCfrKKBGiOjeZG/qApW2nqLyKYRfY6ehNVTV7KJkNnMRzHecaodSnugSJbPpZ2AcDyWA00kTnlOfnp4lYKdT3TDKM/DVWtJLgTsu1iuaRAVK6mmul/0g2o2Ag5gVL+cUZdjLaAbRlnCGrbPpyfYETnUksLdlK5oU738+L5sGPi79xOM5HU/mdYh8ZYWALdhM5zCOtR1oWDJf5N8j9XnMNbQQ8HB7Alf3DDYM1nZ0bWYCY/O6K79CwA/3nUN3fLsrxyJK07+/48yH+65MCAG/6rlSl5pdi8Sq6aNT19cSqzguBDzZm3Ll1Aul/mzGlZkI2EnYdje3ORH3VPZLIe/KnlCGXXn0WSkC9jkBdXcvlOEtsU11n2A1B7+MRVe+hYCjbclVzN0pRftwjXGLlnSNgSqJRTXsJFqCsqGtYWZGemYcP5YXKoagbUMcWucQYqSWjYcWeLFYwEDu5qr5ntg/gm1N5Q0JEXCNJeL7V7pgGhjI3YDBZsUpKyC8PDiK1thG/5e0VzceM0vzyFc5KrbG4uhq6SiD9e3GQ7o7LeluLaW7l7YKS6r/PNS4EwRKTGhbChRJjZOJgGsMVGjF5GtqkbBtSbLGNOlaD6VrLrU+t1K1D1vA0jWIW9BSPQGwTxFSPfKwoaV6xmNDS/VQa+UheT0+xfsD4EXEIq8HfcMAAAAASUVORK5CYII="}},["NHnr"]);
//# sourceMappingURL=app.4c3c014fb96350f133e2.js.map