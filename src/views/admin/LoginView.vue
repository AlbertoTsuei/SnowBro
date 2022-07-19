<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 my-3 font-weight-normal text-center">請先登入</h1>
      <div class="col-8">
        <vue-Form id="form" class="form-signin" v-slot="{ errors }">
          <div class="mb-3">
            <label for="username">Email address</label>
            <vue-Field
              id="username"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入email"
              rules="email|required"
              v-model="user.username"
            ></vue-Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="password">Password</label>
            <vue-Field
              id="password"
              name="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['password'] }"
              placeholder="請輸入密碼"
              rules="required"
              v-model="user.password"
            ></vue-Field>
            <ErrorMessage
              name="password"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            v-on:click="login"
            type="button"
            :disabled="Object.keys(errors).length > 0"
          >
            登入
          </button>
        </vue-Form>
      </div>
    </div>
    <button
      class="btn btn-primary d-block mx-auto my-5"
      @click.prevent="goToHome"
    >
      返回首頁
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires= ${new Date(expired)};`
          this.$router.push('/admin/')
        })
        .catch((err) => {
          alert(err)
        })
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>
