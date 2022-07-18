<template>
  <div class="container">
    <h2 class="text-center mb-3">產品列表</h2>
    <!-- Loading -->
    <vue-loading
      :active="isLoading"
      :is-full-page="fullPage"
      background-color="black"
    >
      <div class="loading-ice"></div>
    </vue-loading>
    <div class="row">
      <!-- 篩選 -->
      <div class="d-block col-12 col-lg-3">
        <div class="list-group my-3">
          <div class="row row-cols-2 row-cols-md-1">
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getProducts()"
              >
                全部商品
              </button>
            </div>
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getCategory('滑雪服')"
              >
                滑雪服
              </button>
            </div>
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getCategory('雪板')"
              >
                雪板
              </button>
            </div>
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getCategory('護目鏡')"
              >
                護目鏡
              </button>
            </div>
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getCategory('手套')"
              >
                手套
              </button>
            </div>
            <div class="col d-flex justify-content-center">
              <button
                type="button"
                class="
                  btn btn-primary
                  list-group-item list-group-item-action
                  cart-btn
                "
                @click="getCategory('安全帽')"
              >
                安全帽
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 產品呈現 -->
      <div class="col-12 col-lg-9">
        <div
          class="row row-cols-1 row-cols-lg-3"
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        >
          <div class="col mb-3" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
            <div class="card h-100">
              <router-link
                :to="`/product/${product.id}`"
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                class="product-image"
              ></router-link>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p
                  class="card-text text-muted mb-0 card-descrip"
                >
                  {{ product.description }}
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
                    @click.prevent="toggleFavorite(product.id)"
                  >
                    <div v-if="favorite.includes(product.id)">
                      <span class="material-icons text-danger align-middle">favorite</span>
                    </div>
                    <div v-else>
                      <span class="material-icons text-dark align-middle">favorite</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click.prevent="addToCart(product.id)"
                    :disabled="isLoadingitem === product.id || product.qty > 5"
                  >
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分頁 -->
        <div v-if="isNotOption">
          <div class="mb-3">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: !pages.has_pre }">
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Previous"
                    @click.prevent="getProducts(pages.current_page - 1)"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li
                  class="page-item"
                  :class="{ active: page === pages.current_page }"
                  v-for="page in pages.total_pages"
                  :key="page + 'page'"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click.prevent="getProducts(page)"
                    >{{ page }}</a
                  >
                </li>
                <li class="page-item" :class="{ disabled: !pages.has_next }">
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Next"
                    @click.prevent="getProducts(pages.current_page + 1)"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
      products: [],
      isLoadingitem: '',
      pages: {},
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false,
      fullPage: true,
      isNotOption: true,
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
    getProducts (page = 1) {
      const vm = this
      vm.isLoading = true
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.pages = res.data.pagination
          vm.isLoading = false
          this.isNotOption = true
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    getCategory (category) {
      const vm = this
      vm.isLoading = true
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`)
        .then(res => {
          this.products = res.data.products
          this.isNotOption = false
          vm.isLoading = false
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
    favorite: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style>
.loading-ice {
  height: 160px;
  width: 160px;
  background: url("@/photos/loading-ice.png");
}
.product-image {
  height: 300px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.product-image:hover {
  background-size: cover;
  background-size: 105%;
}
.cart-btn {
  width: 50%;
}
@media (max-width: 767px) {
  .cart-btn {
    width: 100%;
  }
}
.card-descrip{
height: 4.5rem;
overflow: hidden;
}
</style>
