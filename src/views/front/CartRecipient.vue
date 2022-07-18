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
        <div class="cardImg">
          <span class="material-icons"> shopping_cart </span>
        </div>
        <h4>STEP.1</h4>
        <p>確認選購</p>
      </li>
      <li class="cart-card">
        <div class="cardImg cart-now cart-now-border">
          <span class="material-icons"> format_list_bulleted </span>
        </div>
        <h4 class="cart-now">STEP.2</h4>
        <p class="cart-now">資料填寫</p>
      </li>
      <li class="cart-card">
        <div class="cardImg">
          <span class="material-icons"> done </span>
        </div>
        <h4>STEP.3</h4>
        <p>預定成功</p>
      </li>
    </ul>
    <!-- 訂購商品列表 -->
    <h2 class="text-center mt-3">訂單內容</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>品名</th>
          <th>數量/單位</th>
          <th>單價</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            {{ item.product.title }}
          </td>
          <td>{{ item.qty }} {{ item.product.unit }}</td>
          <td>{{ $filters.currency(item.product.price) }}</td>
          <td class="text-end">
            <small>品項金額:</small>
            {{ $filters.currency(item.total) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
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
    <!-- 資料填寫 -->
    <h2 class="text-center">資料填寫</h2>
    <div class="my-3 row justify-content-center">
      <vue-Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="sendOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label"
            >Email <span class="text-danger">*</span></label
          >
          <vue-Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></vue-Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label"
            >收件人姓名 <span class="text-danger">*</span></label
          >
          <vue-Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></vue-Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label"
            >收件人電話 <span class="text-danger">*</span></label
          >
          <vue-Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></vue-Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label"
            >收件人地址 <span class="text-danger">*</span></label
          >
          <vue-Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></vue-Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-danger btn-lg"
            :disabled="
              Object.keys(errors).length > 0 || cartData.final_total == 0
            "
          >
            送出訂單
          </button>
        </div>
      </vue-Form>
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
      isLoading: false,
      fullPage: true,
      isLoadingitem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
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
      const vm = this
      vm.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartData = res.data.data
          vm.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    sendOrder () {
      this.isLoadingitem = 1
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then(() => {
          this.isLoadingitem = ''
          emitter.emit('get-cart')
          this.getCart()
          alert('訂單已送出！')
          this.$refs.form.resetForm()
          this.$router.push('/cartfinish')
        }).catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
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
  content: "";
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
</style>
