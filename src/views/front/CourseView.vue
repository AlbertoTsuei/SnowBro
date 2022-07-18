<template>
  <div class="container mb-set">
    <h2 class="my-4 mb-5">師資陣容</h2>
    <div class="row row-cols-1 row-cols-md-2 mb-5">
      <div class="col" data-aos="fade-up-right" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block teacher-queen text-center"
        >
          <div class="course-foggy">
            <div class="home-prodcut-text">想開始滑雪了嗎？</div>
          </div>
        </a>
      </div>
      <div class="col">
        <h4>單腳雪Queen</h4>
        <ul class="lh-lg">
          <li>雪齡：6年</li>
          <li>教練證照：CASI Level2</li>
          <li>授課內容：幼幼體驗班、新手基礎班</li>
          <li>
            授課風格：親切細膩的教學風格，帶領大家迅速感受雪之國度的魅力！
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-info btn-lg d-block"
            @click.prevent="goToProducts"
          >
            整裝上課
          </button>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 mb-set d-flex flex-row-reverse">
      <div class="col" data-aos="fade-up-left" data-aos-duration="1000">
        <a
          href="#"
          @click.prevent="goToProducts"
          class="d-block teacher-snow text-center"
        >
          <div class="course-foggy">
            <div class="home-prodcut-text">想飛！</div>
          </div>
        </a>
      </div>
      <div class="col">
        <h4>Mr. Snow</h4>
        <ul class="lh-lg">
          <li>雪齡：11年</li>
          <li>教練證照：CASI Level3</li>
          <li>授課內容：中級特訓班、高級雲霄班</li>
          <li>
            授課風格：深信強大的技巧好要大量的練習來養成<br />準備好接受Snow老師的魔鬼訓練了嗎？！
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-info btn-lg d-block"
            @click.prevent="goToProducts"
          >
            整裝上課
          </button>
        </div>
      </div>
    </div>
    <h3 class="my-3">北角岳滑雪場</h3>
    <p>
      位於北海岸的北角岳滑雪場，除有小綿羊連峰壯闊雪景之外，龍峒海峽的美景也盡收眼底。
      台灣特有優質粉雪，最長滑行距離有7000公尺，36條中低高階雪道奧林匹克認證雪道。
      <br />無論初學者到達人，亦有親子廣場家庭親子娛樂皆可滿足。交通方式便利，搭乘高鐵至鼻頭場站即可直接進入。
    </p>
  </div>
  <div class="container-fluid row row-cols-1 row-cols-md-3 mb-5">
    <div class="col court-lift"></div>
    <div class="col court-view"></div>
    <div class="col court-hotspring"></div>
  </div>
  <div class="container mb-set">
    <div class="row row-cols-1 row-cols-md-2 mb-3">
      <div class="col">
        <ul class="lh-lg">
          <li>地址: 新北市瑞芳區鼻頭路</li>
          <li>大眾交通: 搭乘台灣高鐵出鼻頭雪場站即可直接進入</li>
          <li>停車場容納量: 700台</li>
          <li>營業時間: (日間）7:00~17:00 ; (夜間）18:30~21:30</li>
          <li>設施：山頂餐廳、溫泉SPA、滑雪學校</li>
        </ul>
      </div>
      <div class="col map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39611.03218933539!2d121.87320200283811!3d25.09081125655272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439080e6e66b%3A0xa2e488b518a343ed!2z6by76aCt6KeS5q2l6YGT!5e0!3m2!1szh-TW!2stw!4v1647851579482!5m2!1szh-TW!2stw"
          width="600"
          height="350"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
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
.teacher-queen {
  position: relative;
  background-image: url("@/photos/teacher-queen.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
}
.teacher-snow {
  position: relative;
  background-image: url("@/photos/teacher-snow.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
}
.home-prodcut-text {
  position: absolute;
  color: #ffffff;
  font: 2em sans-serif;
  left: 42%;
  top: 42%;
}
.course-foggy {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
}
.course-foggy:hover {
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
.court-lift {
  background-image: url("@/photos/court-lift.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.court-view {
  background-image: url("@/photos/court-view.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.court-hotspring {
  background-image: url("@/photos/court-hotspring.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
@media (max-width: 767px) {
  .map {
    display: none;
  }
}
.mb-set{
  margin-bottom: 100px;
}
</style>
