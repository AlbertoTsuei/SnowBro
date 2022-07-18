<template>
<div class="position-relative">
    <FrontNavbar class="mb-3"/>
    <ToastMessages />
    <RouterView/>
    <FrontFooter class="position-footer"/>
</div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import emitter from '@/libs/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    FrontNavbar,
    FrontFooter,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
.position-relative{
  position: relative;
  min-height: 100%;
  padding-bottom: 250px;
  box-sizing: border-box;
}
.position-footer{
   position: absolute;
    bottom: 0;
    height: 250px;
}
</style>
