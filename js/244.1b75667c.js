"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[244],{3244:function(t,a,o){o.r(a),o.d(a,{default:function(){return Q}});var e=o(6252),s=o(3577),i=o(9963);const d={class:"container"},c=(0,e._)("div",{class:"loading-ice"},null,-1),r=(0,e._)("h2",{class:"text-center mb-3"},"產品細節",-1),l={class:"row row-cols-1 row-cols-md-2"},n={class:"col mb-3"},p={class:"col"},u={class:"d-flex"},h={key:0},g=(0,e._)("span",{class:"material-icons text-danger"},"favorite",-1),b=[g],v={class:"h6"},m={class:"h5"},f={class:"d-flex mt-3 product-flex"},y={class:"d-flex input-group-sm me-2"},_={class:"input-group-text",id:"basic-addon2"},w=["disabled"],k=(0,e._)("div",null,null,-1),x={class:"accordion my-4",id:"accordionExample","data-aos":"fade-up","data-aos-duration":"1000"},T={class:"accordion-item"},$=(0,e._)("h2",{class:"accordion-header",id:"headingOne"},[(0,e._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 商品描述 ")],-1),C={id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},L={class:"accordion-body bg-light"},P=(0,e.uE)('<div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> 購買須知 </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body lh-lg bg-light"> ・網路商城與實體店面，皆享有完整售後服務與2年保固。<br> ・網路商城內購入商品，全品項免運費。<br> ・每日14:00前下單，皆於當日出貨（休日除外）。<br> ・除雪板外其他商品皆可使用超商門市取貨服務。<br> ・歡迎來實體門市試穿選購。消費滿3000折抵停車1小時。<br> ・購買雪板或固定器可享免費安裝及調整諮詢服務，詳情請至門市洽詢。 </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 退換貨流程 </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body lh-lg bg-light"> ・來電告知門市人員後，將產品寄回本公司，並附上退換貨單<br> ・第一次退換貨運費由雙方共同支付，之後的退換貨由買方獨立支付<br> ・新品如有瑕疵，往返運費由本公司支付。<br> ・網路消費７日鑑賞期。並非試用期。退貨時商品需為新品狀態。如有破損或不可回復的情形將不予以退貨。 </div></div></div>',2),S=(0,e._)("h5",{class:"my-3"},"您可能會喜歡",-1),z={class:"row row-cols-1 row-cols-lg-3","data-aos":"fade-up","data-aos-duration":"1000"},M=["onClick"],q={class:"card h-100"},D={class:"card-body"},O={class:"card-title"},I={class:"card-text text-muted mb-0 card-descrip"},E={class:"d-flex justify-content-between mt-3"},F=["onClick"],j=["onClick"],U={key:0},J=(0,e._)("span",{class:"material-icons text-danger align-middle"},"favorite",-1),N=[J],W={key:1},Z=(0,e._)("span",{class:"material-icons text-dark align-middle"},"favorite",-1),H=[Z],K=["onClick","disabled"];function V(t,a,o,g,J,Z){const V=(0,e.up)("vue-loading"),Y=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e.Wm)(V,{active:J.isLoading,"is-full-page":J.fullPage,"background-color":"black"},{default:(0,e.w5)((()=>[c])),_:1},8,["active","is-full-page"]),r,(0,e._)("div",l,[(0,e._)("div",n,[(0,e._)("div",{style:(0,s.j5)({backgroundImage:`url(${J.product.imageUrl})`}),class:"product-image",onClick:a[0]||(a[0]=t=>Z.toggleFavorite(J.product.id))},null,4)]),(0,e._)("div",p,[(0,e._)("div",u,[(0,e._)("h4",null,(0,s.zw)(J.product.title),1),J.favorite.includes(J.product.id)?((0,e.wg)(),(0,e.iD)("div",h,b)):(0,e.kq)("",!0)]),(0,e._)("p",null,"商品內容："+(0,s.zw)(J.product.content),1),(0,e._)("p",null,"商品分類："+(0,s.zw)(J.product.category),1),(0,e._)("del",v,"原價 "+(0,s.zw)(J.product.origin_price)+" 元",1),(0,e._)("div",m,"現在只要 "+(0,s.zw)(J.product.price)+" 元",1),(0,e._)("div",f,[(0,e._)("div",y,[(0,e.wy)((0,e._)("input",{min:"1",max:"10",type:"number",class:"form-control-sm","onUpdate:modelValue":a[1]||(a[1]=t=>J.product.qty=t),placeholder:"1"},null,512),[[i.nr,J.product.qty]]),(0,e._)("span",_,(0,s.zw)(J.product.unit),1)]),(0,e._)("button",{type:"button",class:"btn btn-outline-danger",onClick:a[2]||(a[2]=t=>Z.addToCart(J.product.id,J.product.qty)),disabled:J.isLoadingitem===J.product.id}," 加到購物車 ",8,w)]),k])]),(0,e._)("div",x,[(0,e._)("div",T,[$,(0,e._)("div",C,[(0,e._)("div",L,(0,s.zw)(J.product.description),1)])]),P]),S,(0,e._)("div",z,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(J.products,(t=>((0,e.wg)(),(0,e.iD)("div",{class:"col mb-3",key:t.id,onClick:a=>Z.goToProduct(t.id)},[(0,e._)("div",q,[(0,e.Wm)(Y,{to:`/product/${t.id}`,style:(0,s.j5)({backgroundImage:`url(${t.imageUrl})`}),class:"recommand-product-image"},null,8,["to","style"]),(0,e._)("div",D,[(0,e._)("h5",O,(0,s.zw)(t.title),1),(0,e._)("p",I,(0,s.zw)(t.description),1),(0,e._)("div",E,[(0,e._)("button",{type:"button",class:"btn btn-outline-info",onClick:(0,i.iM)((a=>Z.goToProduct(t.id)),["prevent"])}," 產品細節 ",8,F),(0,e._)("button",{type:"button",class:"btn btn-outline-info",onClick:(0,i.iM)((a=>Z.toggleFavorite(t.id)),["prevent"])},[J.favorite.includes(t.id)?((0,e.wg)(),(0,e.iD)("div",U,N)):((0,e.wg)(),(0,e.iD)("div",W,H))],8,j),(0,e._)("button",{type:"button",class:"btn btn-outline-danger",onClick:(0,i.iM)((a=>Z.addToCart(t.id)),["prevent"]),disabled:J.isLoadingitem===t.id||t.qty>5}," 加到購物車 ",8,K)])])])],8,M)))),128))])])}var Y=o(4902),A={data(){return{product:[],isLoadingitem:"",qty:"",products:[],id:this.$route.params.id,favorite:JSON.parse(localStorage.getItem("favorite"))||[],isLoading:!1,fullPage:!0,recommand:"",forToastTrue:{data:{success:!0}},forToastFalse:{data:{success:0}}}},methods:{getProduct(){const t=this;t.isLoading=!0;const{id:a}=this.$route.params;this.$http(`https://vue3-course-api.hexschool.io/v2/api/tsuei/product/${a}`).then((a=>{this.product=a.data.product,"滑雪服"===a.data.product.category&&(this.recommand="雪板"),"雪板"===a.data.product.category&&(this.recommand="護目鏡"),"護目鏡"===a.data.product.category&&(this.recommand="手套"),"手套"===a.data.product.category&&(this.recommand="安全帽"),"安全帽"===a.data.product.category&&(this.recommand="滑雪服"),this.$http(`https://vue3-course-api.hexschool.io/v2/api/tsuei/products?category=${this.recommand}`).then((a=>{this.products=a.data.products,t.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")}))}))},addToCart(t,a=1){const o={product_id:t,qty:a};this.isLoadingitem=t;const e=this;e.isLoading=!0,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/tsuei/cart",{data:o}).then((t=>{this.isLoadingitem="",Y.Z.emit("get-cart"),this.getCart(),e.isLoading=!1,this.$httpMessageState(t,"已加入購物車")})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")})),event.stopPropagation()},getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/tsuei/cart").then((t=>{this.cartData=t.data.data})).catch((t=>{this.$httpMessageState(t.response,"錯誤！")}))},toggleFavorite(t){const a=this.favorite.findIndex((a=>a===t));-1===a?(this.favorite.push(t),this.$httpMessageState(this.forToastTrue,"加入最愛")):(this.favorite.splice(a,1),this.$httpMessageState(this.forToastFalse,"移出最愛")),event.stopPropagation()},goToProduct(t){this.$router.push(`/product/${t}`)}},watch:{$route:{handler(){this.id=this.$route.params.Id,this.getProduct()}},favorite:{handler(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted(){this.getProduct()}},B=o(3744);const G=(0,B.Z)(A,[["render",V]]);var Q=G}}]);
//# sourceMappingURL=244.1b75667c.js.map