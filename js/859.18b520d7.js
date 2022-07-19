"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[859],{8484:function(t,a,e){e.d(a,{Z:function(){return h}});var s=e(6252),o=e(3577);const n={class:"toast-container position-fixed pe-3 top-10 end-0",style:{"z-index":"1500"}},i={class:"toast-header"},r={class:"me-auto"},l=["onClick"],c={key:0,class:"toast-body"};function d(t,a,e,d,g,u){return(0,s.wg)(),(0,s.iD)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.messages,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:(0,o.C_)(["toast show",`toast${a}`]),role:"alert"},[(0,s._)("div",i,[(0,s._)("span",{class:(0,o.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,s._)("strong",r,(0,o.zw)(t.title),1),(0,s._)("button",{type:"button",class:"btn-close",onClick:t=>u.clearToast(a),"aria-label":"Close"},null,8,l)]),t.content?((0,s.wg)(),(0,s.iD)("div",c,(0,o.zw)(t.content),1)):(0,s.kq)("",!0)],2)))),128))])}var g={data(){return{messages:[]}},inject:["emitter"],methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),6e3)},clearToast(t){this.messages.splice(t,1)}},mounted(){this.emitter.on("push-message",(t=>{const{style:a="success",title:e,content:s}=t;this.messages.push({style:a,title:e,content:s}),this.toastShow()}))}},u=e(3744);const p=(0,u.Z)(g,[["render",d]]);var h=p},6859:function(t,a,e){e.r(a),e.d(a,{default:function(){return et}});var s=e(6252);const o={class:"position-relative"};function n(t,a,e,n,i,r){const l=(0,s.up)("FrontNavbar"),c=(0,s.up)("ToastMessages"),d=(0,s.up)("RouterView"),g=(0,s.up)("FrontFooter");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(l,{class:"mb-3"}),(0,s.Wm)(c),(0,s.Wm)(d),(0,s.Wm)(g,{class:"position-footer"})])}var i=e(9963),r=e(3577);const l={class:"navbar navbar-expand-lg navbar-light bg-white nav-set"},c={class:"container-fluid nav-z-index"},d=(0,s._)("div",{class:"loading-ice"},null,-1),g=(0,s.Uk)("SnowBro "),u=(0,s._)("span",{class:"material-icons"},"snowboarding",-1),p=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarScroll"},v={class:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},b={class:"nav-item"},f={class:"nav-item me-auto d-block"},m=(0,s._)("span",{class:"material-icons text-info"},"account_circle",-1),w=[m],k={class:"dropdown"},_=(0,s._)("span",{class:"material-icons text-info"},"favorite",-1),x=[_],y={class:"dropdown-menu dropdown-menu-end dropdown-width","aria-labelledby":"dropdownMenuLink"},C={key:0},S={class:"table align-middle zindex-dropdown"},T=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"產品名稱")])],-1),D={key:0},M={class:"d-flex justify-content-between"},$=["onClick","disabled"],L={key:1},F={class:"container"},P=(0,s._)("h5",{class:"text-center"},"還沒有心儀的商品嗎～?",-1),Z={class:"d-flex cart-posi"},z=(0,s._)("span",{class:"material-icons text-info"},"shopping_cart",-1),W={key:0},j={class:"badge rounded-pill bg-danger badge-posi"};function q(t,a,e,o,n,m){const _=(0,s.up)("vue-loading"),q=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",l,[(0,s._)("div",c,[(0,s.Wm)(_,{active:n.isLoading,"is-full-page":n.fullPage,"background-color":"black"},{default:(0,s.w5)((()=>[d])),_:1},8,["active","is-full-page"]),(0,s.Wm)(q,{class:"navbar-brand",to:"/"},{default:(0,s.w5)((()=>[g,u])),_:1}),p,(0,s._)("div",h,[(0,s._)("ul",v,[(0,s._)("li",b,[(0,s._)("a",{class:"nav-link",onClick:a[0]||(a[0]=(0,i.iM)(((...t)=>m.goToProducts&&m.goToProducts(...t)),["prevent"])),href:"#",role:"button","aria-expanded":"false","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll"},"產品列表")]),(0,s._)("li",f,[(0,s._)("a",{class:"nav-link",onClick:a[1]||(a[1]=(0,i.iM)(((...t)=>m.goToCourse&&m.goToCourse(...t)),["prevent"])),href:"#",role:"button","aria-expanded":"false","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll"},"課程介紹")])]),(0,s._)("a",{type:"button",class:"nav-link",onClick:a[2]||(a[2]=(0,i.iM)(((...t)=>m.signin&&m.signin(...t)),["prevent"]))},w),(0,s._)("div",k,[(0,s._)("a",{onClick:a[3]||(a[3]=(...t)=>m.getFavorite&&m.getFavorite(...t)),class:"nav-link dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},x),(0,s._)("ul",y,[0!=Object.values(this.favorite).length?((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("table",S,[T,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},[n.favorite.includes(t.id)?((0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("tr",M,[(0,s.Wm)(q,{to:`/product/${t.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(t.title),1)])),_:2},1032,["to"]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger dropdown-text dropdown-btn ms-2",onClick:a=>m.addToCart(t.id),disabled:n.isLoadingitem===t.id}," 加到購物車 ",8,$)])])])):(0,s.kq)("",!0)])))),128))])])])):((0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("div",F,[P,(0,s._)("button",{type:"button",class:"btn btn-info mt-3 mx-auto d-block",onClick:a[4]||(a[4]=(0,i.iM)(((...t)=>m.goToProducts&&m.goToProducts(...t)),["prevent"]))}," 參觀選購 ")])]))])]),(0,s._)("div",{class:"nav-link nav-cart-height",onClick:a[5]||(a[5]=(0,i.iM)(((...t)=>m.goToCart&&m.goToCart(...t)),["prevent"])),href:"#",role:"button","aria-expanded":"false","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll"},[(0,s._)("div",Z,[z,0!=n.cartData.carts.length?((0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("span",j,(0,r.zw)(n.cartData.carts.length),1)])):(0,s.kq)("",!0)])])])])])}var I=e(4902),N={data(){return{cartData:{carts:[]},products:[],favorite:JSON.parse(localStorage.getItem("favorite"))||[],isLoading:!1,fullPage:!0,isLoadingitem:""}},methods:{getCart(){const t=this;t.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/v2/api/tsuei/cart").then((a=>{this.cartData=a.data.data,t.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")}))},signin(){this.$router.push("/login")},getProducts(){this.$http("https://vue3-course-api.hexschool.io/v2/api/tsuei/products").then((t=>{this.products=t.data.products})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")}))},addToCart(t,a=1){const e={product_id:t,qty:a},s=this;s.isLoading=!0,this.isLoadingitem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/tsuei/cart",{data:e}).then((t=>{this.isLoadingitem="",I.Z.emit("get-cart"),this.getCart(),s.isLoading=!1,this.$httpMessageState(t,"已加入購物車")})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")}))},getFavorite(){this.favorite=JSON.parse(localStorage.getItem("favorite"))||[]},goToProducts(){this.$router.push("/products")},goToCourse(){this.$router.push("/course")},goToCart(){this.$router.push("/cart")}},mounted(){this.getCart(),I.Z.on("get-cart",(()=>{this.getCart()})),this.getProducts()}},O=e(3744);const B=(0,O.Z)(N,[["render",q]]);var H=B,J=e(1599),K=e(6625),U=e(1107);const Y={class:"container-fliud text-center py-3 mt-4 bg-dark text-white w-100 lh-lg"},A=(0,s.uE)('<div class="d-flex justify-content-center my-2"><a href="#" class="d-block social-media-fb"><img src="'+J+'" alt="facebook"></a><a href="#" class="d-block mx-4 social-media-ig"><img src="'+K+'" alt="IG"></a><a href="#" class="d-block social-media-line"><img src="'+U+'" alt="line"></a></div><a href="mailto:snowbrod@snowbro.com" class="d-block">Mail: snowbrod@snowbro.com</a><a href="tel:+886912345678" class="d-block">Tel: 0912345678</a><h6 class="lh-lg">本站為個人練習作品<br>內容純屬虛構，歡迎交流～<br>© SnowBro Inc. All rights reserved.</h6>',4),E=[A];function G(t,a){return(0,s.wg)(),(0,s.iD)("div",Y,E)}const R={},V=(0,O.Z)(R,[["render",G]]);var Q=V,X=e(8484),tt={components:{FrontNavbar:H,FrontFooter:Q,ToastMessages:X.Z},provide(){return{emitter:I.Z}}};const at=(0,O.Z)(tt,[["render",n]]);var et=at},1599:function(t,a,e){t.exports=e.p+"img/facebook.676c5fc7.svg"},6625:function(t,a,e){t.exports=e.p+"img/ig.f5df8743.svg"},1107:function(t,a,e){t.exports=e.p+"img/line.941e52df.svg"}}]);
//# sourceMappingURL=859.18b520d7.js.map