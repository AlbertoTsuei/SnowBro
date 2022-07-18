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
    <!-- 購物流程 -->
    <ul class="cart-intro">
      <li class="cart-card">
        <div class="cardImg cart-now cart-now-border">
          <span class="material-icons"> shopping_cart </span>
        </div>
        <h4 class="cart-now">STEP.1</h4>
        <p class="cart-now">確認選購</p>
      </li>
      <li class="cart-card">
        <div class="cardImg">
          <span class="material-icons"> format_list_bulleted </span>
        </div>
        <h4>STEP.2</h4>
        <p>資料填寫</p>
      </li>
      <li class="cart-card">
        <div class="cardImg">
          <span class="material-icons"> done </span>
        </div>
        <h4>STEP.3</h4>
        <p>預定成功</p>
      </li>
    </ul>
    <!-- 購物車列表 -->
    <div v-if="cartData.total">
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="removeAllCart"
          :disabled="cartData.final_total == 0 || isLoadingitem === 1"
        >
          清空購物車
        </button>
      </div>
      <div></div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts">
            <tr v-for="item in cartData.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                  :disabled="isLoadingitem === item.id"
                >
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group">
                    <select
                      id=""
                      class="form-select"
                      v-model="item.qty"
                      @change="updateCartItem(item)"
                      :disabled="isLoadingitem === item.id"
                    >
                      <option
                        :value="num"
                        v-for="num in 20"
                        :key="`${num}${item.id}`"
                      >
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{
                      item.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td>{{ $filters.currency(item.product.price) }}</td>
              <td class="text-end">
                <small>品項金額：</small>
                {{ $filters.currency(item.total) }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td class="text-end text-success">總計： {{ $filters.currency(cartData.total) }}
              <span v-if="cartData.final_total !== cartData.total" class="text-info">
                <br>優惠價： {{ $filters.currency(cartData.final_total) }}
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input
          type="text"
          class="form-control"
          v-model="coupon_code"
          placeholder="請輸入優惠代碼"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-info"
            type="button"
            @click="addCouponCode"
          >
            輸入優惠代碼
          </button>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-danger btn-lg d-block mx-auto mb-3"
        :disabled="cartData.final_total == 0"
        @click.prevent="goToSheet"
      >
        前往結帳
      </button>
    </div>
    <!-- 購物車無品項 -->
    <div v-else>
      <div class="mt-3 cart-view-banner"></div>
      <h4 class="mt-3 text-info text-center">購物車目前沒有商品</h4>
      <button
        type="button"
        class="btn btn-danger btn-lg d-block mx-auto my-3"
        @click.prevent="goToProducts"
      >
        參觀選購
      </button>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {},
      products: [],
      productId: '',
      isLoadingitem: '',
      isLoading: false,
      fullPage: true,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: '',
      forToastFalse: {
        data: {
          success: 0
        }
      }
    }
  },
  methods: {
    getProducts () {
      const vm = this
      vm.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products
          vm.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      const vm = this
      vm.isLoading = true
      this.isLoadingitem = item.id
      this.$http
        .put(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then((res) => {
          this.getCart()
          this.isLoadingitem = ''
          vm.isLoading = false
          this.$httpMessageState(res, '已更新購物車')
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    removeCartItem (id) {
      const vm = this
      vm.isLoading = true
      this.isLoadingitem = id
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then(() => {
          emitter.emit('get-cart')
          this.getCart()
          this.isLoadingitem = ''
          vm.isLoading = false
          this.$httpMessageState(this.forToastFalse, '已刪除該品項')
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    removeAllCart () {
      const vm = this
      vm.isLoading = true
      this.isLoadingitem = 1
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
        )
        .then(() => {
          this.isLoadingitem = ''
          emitter.emit('get-cart')
          this.getCart()
          vm.isLoading = false
          this.$httpMessageState(this.forToastFalse, '已刪除全部購物車')
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http
        .post(url, { data: coupon })
        .then((res) => {
          this.$httpMessageState(res, '加入優惠券')
          this.getCart()
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          this.$httpMessageState(err.response, '無此優惠券')
        })
    },
    goToSheet () {
      this.$router.push('/cartrecipient')
    },
    goToProducts () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style>
@media (max-width: 767px) {
  .cart li {
    margin-bottom: 20px;
  }
}

.cart-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .cart-intro {
    margin-top: 90px;
    padding-left: 0;
  }
}

.cart-intro li:nth-child(1),
.cart-intro li:nth-child(2) {
  position: relative;
}

.cart-intro li:nth-child(1)::after,
.cart-intro li:nth-child(2)::after {
  content: '';
  position: absolute;
  top: 49px;
  right: -55px;
  border: 10px solid #000000;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

@media (max-width: 767px) {
  .cart-intro li:nth-child(1)::after,
  .cart-intro li:nth-child(2)::after {
    top: 49px;
    right: -35px;
  }
}

.cart-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cart-card .cardImg {
  width: 115px;
  height: 115px;
  border: 3px solid #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

.cart-card .material-icons {
  font-size: 50px;
}

.cart-card h4 {
  font-size: 1.25rem;
  font-weight: bold;
}

@media (max-width: 767px) {
  .cart-card .cardImg {
    width: 75px;
    height: 75px;
  }
}
.cart-card .cart-now {
  color: rgba(220, 113, 6, 0.865);
}

.cart-card .cart-now-border {
  border: 3px solid rgba(220, 113, 6, 0.865);
}

.cart-view-banner {
  position: relative;
  background-image: url('@/photos/cart-view-banner.jpeg');
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 280px;
}
</style>
