<template>
  <div class="container">
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
        <div class="cardImg">
          <span class="material-icons"> format_list_bulleted </span>
        </div>
        <h4>STEP.2</h4>
        <p>資料填寫</p>
      </li>
      <li class="cart-card">
        <div class="cardImg cart-now cart-now-border">
          <span class="material-icons"> done </span>
        </div>
        <h4 class="cart-now">STEP.3</h4>
        <p class="cart-now">預定成功</p>
      </li>
    </ul>
  </div>
  <!--  -->
  <div class="container">
    <div class="cart-finish-banner"></div>
  </div>
  <div class="container">
    <h1 class="text-center text-danger mt-3">訂單已完成</h1>
    <h2 class="text-center">感謝您的惠顧，歡迎再度光臨～！</h2>
    <button
      type="button"
      class="btn btn-danger btn-lg d-block mx-auto my-3"
      @click.prevent="goToProducts"
    >
      繼續購物
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToProducts () {
      this.$router.push('/products')
    }
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

.cart-finish-banner {
  position: relative;
  background-image: url("@/photos/cart-finish-banner.jpeg");
  background-position: 50% 40%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
}
</style>
