<template>
  <!-- banner -->
  <div class="banner">
    <h2
      class="banner-text text-info"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      啟程<br/>滑向下一個可能
    </h2>
    <button
      type="button"
      class="banner-btn btn btn-info text-light btn-lg"
      @click.prevent="goToProducts"
    >
      參觀選購
    </button>
  </div>
  <!-- 商品 -->
  <div class="container">
    <h2 class="py-3 mb-5 text-center">滑雪商品</h2>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col" data-aos="flip-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block wear text-center"
        >
          <div class="foggy">
            <div class="home-prodcut-text">Ski Wear</div>
          </div>
        </a>
      </div>
      <div class="col" data-aos="flip-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block board text-center"
        >
          <div class="foggy">
            <div class="home-prodcut-text">Board</div>
          </div>
        </a>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col" data-aos="flip-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block goggles text-center"
        >
          <div class="foggy">
            <div class="home-prodcut-text">Goggles</div>
          </div>
        </a>
      </div>
      <div class="col" data-aos="flip-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block gloves text-center"
        >
          <div class="foggy">
            <div class="home-prodcut-text">Gloves</div>
          </div>
        </a>
      </div>
      <div class="col" data-aos="flip-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block helmet text-center"
        >
          <div class="foggy">
            <div class="home-prodcut-text">Helmet</div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- 推薦 -->
  <div class="container-fluid text-center mt-set py-4 bg-light">
    <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="py-3 my-5">課程好評</h2>
      <div class="recommand-md">
        <swiper
          :modules="modules"
          :slides-per-view="2.5"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
        >
          <swiper-slide>
            <div class="p-2">
              <div class="feedback-lin"></div>
              <div>
                <h5 class="my-2">Carol Lin</h5>
                <div>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                </div>
                <p class="lh-base">
                  過來這麼多年，終於帶著孩子一起上纜車<br />謝謝雪Queen教練細心的指導，大家都玩得很盡興<br />孩子們說每年都要來滑雪～
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-2">
              <div class="feedback-ko"></div>
              <div>
                <h5 class="my-2">Sherry Ko</h5>
                <div>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                  <span class="material-icons">star</span>
                </div>
                <p class="lh-base">
                  終於成功下黑線了！<br />5星好評！！！<br />Snow教練帶我飛～！
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-2">
              <div class="feedback-chen"></div>
              <div>
                <h5 class="my-2">Joyce Chen</h5>
                <div>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                  <span class="material-icons">star</span
                  ><span class="material-icons">star</span>
                  <span class="material-icons">star</span>
                </div>
                <p class="lh-base">
                  感謝雪Queen教練親切友善的指導，讓我克服害怕跌倒的恐懼<br />學會平衡，越來越享受滑雪的樂趣～
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="row row-cols-1 recommand-sm">
        <div class="p-2">
          <div class="feedback-lin"></div>
          <div>
            <h5 class="my-2">Carol Lin</h5>
            <div>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span
              ><span class="material-icons">star</span>
            </div>
            <p class="lh-base">
              過來這麼多年，終於帶著孩子一起上纜車<br />謝謝雪Queen教練細心的指導，大家都玩得很盡興<br />孩子們說每年都要來滑雪～
            </p>
          </div>
        </div>
        <div class="p-2">
          <div class="feedback-ko"></div>
          <div>
            <h5 class="my-2">Sherry Ko</h5>
            <div>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span>
              <span class="material-icons">star</span>
            </div>
            <p class="lh-base">
              終於成功下黑線了！<br />5星好評！！！<br />Snow教練帶我飛～！
            </p>
          </div>
        </div>
        <div class="p-2">
          <div class="feedback-chen"></div>
          <div>
            <h5 class="my-2">Joyce Chen</h5>
            <div>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span>
              <span class="material-icons">star</span
              ><span class="material-icons">star</span>
              <span class="material-icons">star</span>
            </div>
            <p class="lh-base">
              感謝雪Queen教練親切友善的指導，讓我克服害怕跌倒的恐懼<br />學會平衡，越來越享受滑雪的樂趣～
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-info btn-lg text-light my-5"
        @click.prevent="goToCourse"
      >
        加入飛翔行列
      </button>
    </div>
  </div>
    <!-- 訂閱 -->
  <div class="subscribe" data-aos="zoom-in-up" data-aos-duration="1000">
    <div class="container">
      <div class="subscribe-text pt-5">
        <h4 class="py-3 text-white">訂閱！收到最即時資訊</h4>
        <div class="d-flex">
          <input
            class="form-control me-3 w-50"
            type="mail"
            placeholder="請輸入您的email"
            aria-label="email address"
          />
          <button type="button" class="btn btn-secondary w-25">
            訂閱 SnowBo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation, Pagination]
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 300,
          disableOnInteraction: false
        },
        loop: true,
        effect: 'fade'
      }
    }
  },
  methods: {
    goToCourse () {
      this.$router.push('/course')
    },
    goToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>
.banner {
  position: relative;
  background-image: url("@/photos/banner.jpg");
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 800px;
  margin-bottom: 60px;
  background-attachment: fixed;
}
@media (max-width: 767px) {
  .banner {
    min-height: 420px;
  }
}

.banner-text {
  position: absolute;
  font-size: 2rem;
  left: 150px;
  top: 150px;
  font-weight: normal;
  line-height: 3rem;
}
@media (max-width: 767px) {
  .banner-text {
    left: 75px;
    top: 75px;
  }
}
.banner-btn {
  position: absolute;
  left: 200px;
  top: 260px;
}
@media (max-width: 767px) {
  .banner-btn {
    left: 35%;
    top: 50%;
  }
}
.foggy {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  text-align: center;
  color: #fff;
}
.foggy:hover {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s ease;
  z-index: 100;
}
@media (max-width: 767px) {
  .foggy {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.5s ease;
    z-index: 100;
  }
}
.wear {
  position: relative;
  background-image: url("@/photos/wear.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  margin: 0 0 20px 5px;
}
.board {
  position: relative;
  background-image: url("@/photos/board.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  margin: 0 0 20px 5px;
}
.goggles {
  position: relative;
  background-image: url("@/photos/goggles.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  margin: 0 0 20px 5px;
}
.gloves {
  position: relative;
  background-image: url("@/photos/gloves.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  margin: 0 0 20px 5px;
}
.helmet {
  position: relative;
  background-image: url("@/photos/helmet.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  margin: 0 0px 20px 5px;
}
.home-prodcut-text {
  color: #ffffff;
  font: 2em sans-serif;
  line-height: 350px;
}
.feedback-ko {
  background-image: url("@/photos/feedback-ko.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30%;
  min-height: 500px;
}
.feedback-lin {
  background-image: url("@/photos/feedback-lin.jpeg");
  background-position: center center;
  border-radius: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.feedback-chen {
  background-image: url("@/photos/feedback-chen.jpeg");
  background-position: center center;
  border-radius: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.subscribe {
  position: relative;
  background-image: url("@/photos/subscribe.jpg");
  background-position: 100% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  background-attachment: fixed;
}
@media (max-width: 767px) {
  .subscribe {
    display: none;
  }
}
.recommand-md {
  display: block;
}
@media (max-width: 767px) {
  .recommand-md {
    display: none;
  }
}
.recommand-sm {
  display: none;
}
@media (max-width: 767px) {
  .recommand-sm {
    display: block;
  }
}
.subscribe-text {
  margin-left: 320px;
}

.mt-set{
  margin-top: 120px;
}
</style>
