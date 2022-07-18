<template>
  <div class="container">
    <!-- Loading -->
    <vue-loading
      :active="isLoading"
      :is-full-page="fullPage"
      background-color="black"
    >
      <div class="loading-ice"></div>
    </vue-loading>
    <h2 class="text-center mb-3">產品細節</h2>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-3">
        <div
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
          class="product-image"
          @click="toggleFavorite(product.id)"
        ></div>
      </div>
      <div class="col">
        <div class="d-flex">
          <h4>{{ product.title }}</h4>
          <div v-if="favorite.includes(product.id)">
            <span class="material-icons text-danger">favorite</span>
          </div>
        </div>
        <p>商品內容：{{ product.content }}</p>
        <p>商品分類：{{ product.category }}</p>
        <del class="h6">原價 {{ product.origin_price }} 元</del>
        <div class="h5">現在只要 {{ product.price }} 元</div>
        <div class="d-flex mt-3 product-flex">
          <div class="d-flex input-group-sm me-2">
            <input
              min="1"
              max="10"
              type="number"
              class="form-control-sm"
              v-model="product.qty"
              placeholder="1"
            />
            <span class="input-group-text" id="basic-addon2">{{
              product.unit
            }}</span>
          </div>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="addToCart(product.id, product.qty)"
            :disabled="isLoadingitem === product.id"
          >
            加到購物車
          </button>
        </div>
        <div></div>
      </div>
    </div>
    <!-- Accordion 商品描述  購買說明  退換貨流程 -->
    <div
      class="accordion my-4"
      id="accordionExample"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            商品描述
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body bg-light">
            {{ product.description }}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            購買須知
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body lh-lg bg-light">
            ・網路商城與實體店面，皆享有完整售後服務與2年保固。<br />
            ・網路商城內購入商品，全品項免運費。<br />
            ・每日14:00前下單，皆於當日出貨（休日除外）。<br />
            ・除雪板外其他商品皆可使用超商門市取貨服務。<br />
            ・歡迎來實體門市試穿選購。消費滿3000折抵停車1小時。<br />
            ・購買雪板或固定器可享免費安裝及調整諮詢服務，詳情請至門市洽詢。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            退換貨流程
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body lh-lg bg-light">
            ・來電告知門市人員後，將產品寄回本公司，並附上退換貨單<br />
            ・第一次退換貨運費由雙方共同支付，之後的退換貨由買方獨立支付<br />
            ・新品如有瑕疵，往返運費由本公司支付。<br />
            ・網路消費７日鑑賞期。並非試用期。退貨時商品需為新品狀態。如有破損或不可回復的情形將不予以退貨。
          </div>
        </div>
      </div>
    </div>
    <!-- 您可能會喜歡 -->
    <h5 class="my-3">您可能會喜歡</h5>
    <div
      class="row row-cols-1 row-cols-lg-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="col mb-3" v-for="item in products" :key="item.id" @click="goToProduct(item.id)">
        <div class="card h-100">
          <router-link
            :to="`/product/${item.id}`"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            class="recommand-product-image"
          ></router-link>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p
              class="card-text text-muted mb-0 card-descrip"
            >
              {{ item.description }}
            </p>
            <div class="d-flex justify-content-between mt-3">
              <button
                type="button"
                class="btn btn-outline-info"
                @click.prevent="goToProduct(item.id)"
              >
               產品細節
              </button>
              <button
                type="button"
                class="btn btn-outline-info"
                @click.prevent="toggleFavorite(item.id)"
              >
                <div v-if="favorite.includes(item.id)">
                  <span class="material-icons text-danger align-middle">favorite</span>
                </div>
                <div v-else>
                  <span class="material-icons text-dark align-middle">favorite</span>
                </div>
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click.prevent="addToCart(item.id)"
                :disabled="isLoadingitem === item.id || item.qty > 5"
              >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      product: [],
      isLoadingitem: '',
      qty: '',
      products: [],
      id: this.$route.params.id,
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false,
      fullPage: true,
      recommand: '',
      forToastTrue: {
        data: {
          success: true
        }
      },
      forToastFalse: {
        data: {
          success: 0
        }
      }
    }
  },
  methods: {
    getProduct () {
      const vm = this
      vm.isLoading = true
      const { id } = this.$route.params
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          if (res.data.product.category === '滑雪服') { this.recommand = '雪板' }
          if (res.data.product.category === '雪板') { this.recommand = '護目鏡' }
          if (res.data.product.category === '護目鏡') { this.recommand = '手套' }
          if (res.data.product.category === '手套') { this.recommand = '安全帽' }
          if (res.data.product.category === '安全帽') { this.recommand = '滑雪服' }
          this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${this.recommand}`)
            .then(res => {
              this.products = res.data.products
              vm.isLoading = false
            })
            .catch((err2) => {
              this.$httpMessageState(err2.response, '錯誤！')
            })
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingitem = id
      const vm = this
      vm.isLoading = true
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoadingitem = ''
          emitter.emit('get-cart')
          this.getCart()
          vm.isLoading = false
          this.$httpMessageState(res, '已加入購物車')
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
      event.stopPropagation()
    },
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    toggleFavorite (id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
        this.$httpMessageState(this.forToastTrue, '加入最愛')
      } else {
        this.favorite.splice(favoriteIndex, 1)
        this.$httpMessageState(this.forToastFalse, '移出最愛')
      }
      event.stopPropagation()
    },
    goToProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  watch: {
    $route: {
      handler () {
        this.id = this.$route.params.Id
        this.getProduct()
      }
    },
    favorite: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style>
.product-image {
  height: 300px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.product-image:hover {
  background-size: 105%;
}

.recommand-product-image {
  height: 300px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.recommand-product-image:hover {
  background-size: 105%;
}

.product-flex {
  justify-content: start;
}

@media (max-width: 767px) {
  .product-flex {
    justify-content: space-evenly;
  }
}

.card-descrip{
height: 4.5rem;
overflow: hidden;
}
</style>
