<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white nav-set">
    <div class="container-fluid nav-z-index">
      <!-- Loading -->
      <vue-loading
        :active="isLoading"
        :is-full-page="fullPage"
        background-color="black"
      >
        <div class="loading-ice"></div>
      </vue-loading>
      <router-link class="navbar-brand" to="/"
        >SnowBro
        <span class="material-icons">snowboarding</span>
      </router-link>
      <button
        class="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a
              class="nav-link"
              @click.prevent="goToProducts"
              href="#"
              role="button"
              aria-expanded="false"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              >產品列表</a
            >
          </li>
          <li class="nav-item me-auto d-block">
            <a
              class="nav-link"
              @click.prevent="goToCourse"
              href="#"
              role="button"
              aria-expanded="false"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              >課程介紹</a
            >
          </li>
        </ul>
        <!-- 後台 -->
        <a type="button" class="nav-link" @click.prevent="signin"
          ><span class="material-icons text-info">account_circle</span></a
        >
        <!-- 下拉式最愛 -->
        <div class="dropdown">
          <a
            @click="getFavorite"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="material-icons text-info">favorite</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end dropdown-width"
            aria-labelledby="dropdownMenuLink"
          >
            <div v-if="Object.values(this.favorite).length != 0">
              <table class="table align-middle zindex-dropdown">
                <thead>
                  <tr>
                    <th>產品名稱</th>
                  </tr>
                </thead>
                <tbody>
                  <div v-for="product in products" :key="product.id">
                    <div v-if="favorite.includes(product.id)">
                      <tr class="d-flex justify-content-between">
                        <router-link :to="`/product/${product.id}`">{{
                          product.title
                        }}</router-link>
                        <td>
                          <button
                            type="button"
                            class="
                              btn btn-outline-danger
                              dropdown-text dropdown-btn
                              ms-2
                            "
                            @click="addToCart(product.id)"
                            :disabled="isLoadingitem === product.id"
                          >
                            加到購物車
                          </button>
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
            <!-- 沒有最愛的話 -->
            <div v-else>
              <div class="container">
                <h5 class="text-center">還沒有心儀的商品嗎～?</h5>
                <button
                  type="button"
                  class="btn btn-info mt-3 mx-auto d-block"
                  @click.prevent="goToProducts"
                >
                  參觀選購
                </button>
              </div>
            </div>
          </ul>
        </div>
        <!-- 購物車 -->
        <div
          class="nav-link nav-cart-height"
          @click.prevent="goToCart"
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
        >
          <div class="d-flex cart-posi">
            <span class="material-icons text-info">shopping_cart</span>
            <div v-if="cartData.carts.length != 0">
              <span class="badge rounded-pill bg-danger badge-posi">{{
                cartData.carts.length
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter.js'

export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false,
      fullPage: true,
      isLoadingitem: ''
    }
  },
  methods: {
    getCart () {
      const vm = this
      vm.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          vm.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    signin () {
      this.$router.push('/login')
    },
    getProducts () {
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then(res => {
          this.products = res.data.products
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      const vm = this
      vm.isLoading = true
      this.isLoadingitem = id
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
    },
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
    },
    goToProducts () {
      this.$router.push('/products')
    },
    goToCourse () {
      this.$router.push('/course')
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
    this.getProducts()
  }
}
</script>

<style>
.dropdown-width {
  min-width: 350px;
}
@media (max-width: 767px) {
  .dropdown-width {
    min-width: 200px;
  }
}
.dropdown-text {
  font-size: 1rem;
}
@media (max-width: 767px) {
  .dropdown-text {
    font-size: 1rem;
  }
}
.dropdown-btn {
  width: 120px;
}
@media (max-width: 767px) {
  .dropdown-btn {
    width: 50px;
  }
}
.nav-cart-height {
  height: 46px;
}
.loading-ice {
  height: 160px;
  width: 160px;
  background: url("@/photos/loading-ice.png");
}

.cart-posi {
  position: relative;
}

.badge-posi {
  position: absolute;
  top: -10px;
  left: 20px;
}

@media (max-width: 767px) {
  .nav-set{
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:1500;
      }
}
</style>
