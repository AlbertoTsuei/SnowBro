<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin/">後台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/order"
              >訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/article"
              >文章</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">返回前台</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="signout">
        登出
      </button>
    </div>
  </nav>
  <RouterView v-if="checkSuccess"/>
  <ToastMessages />
</template>

<script>
import emitter from '@/libs/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        this.$http.post(`${process.env.VUE_APP_API}/api/user/check`, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入。')
        this.$router.push('/login')
      }
    },
    signout () {
      document.cookie = 'hexToken=;expires=;'
      alert('token 已清除')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
