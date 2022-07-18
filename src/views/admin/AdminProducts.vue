<template>
  <div class="container-fluid">
    <div class="text-end mt-4">
      <!-- 透過new來開啟新增產品的modal -->
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <!-- 透過v-for把資料從products中取出 -->
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <!-- 透過edit來開啟編輯產品的modal -->
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <!-- 透過delete來開啟刪除產品的modal -->
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 分頁 -->
  <div class="container mx-auto">
    <Pagination :pages="pages" @get-pages="getProducts"></Pagination>
  </div>
  <!-- productModal元件 -->
  <productModal
    :product="tempProduct"
    :is-new="isNew"
    @update-product="updateProduct"
    ref="productModal"
  ></productModal>
  <!--delProductModal 元件-->
  <delProductModal
    :temp-product="tempProduct"
    @del-item="delProduct"
    ref="delProductModal"
  ></delProductModal>
</template>

<script>
import Pagination from '@/components/PaginationCompo.vue'
import delProductModal from '@/components/delproductModal.vue'
import productModal from '@/components/productModal.vue'

export default {
  data () {
    return {
      temp: {},
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      pages: {},
      isLoading: false,
      forToastFalse: {
        data: {
          success: 0
        }
      }
    }
  },
  components: {
    delProductModal,
    Pagination,
    productModal
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      vm.isLoading = true
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.pages = res.data.pagination
          vm.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        const productComponent = this.$refs.productModal
        productComponent.openModal()
      } else if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        const productComponent = this.$refs.productModal
        productComponent.openModal()
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item }
        const delComponent = this.$refs.delProductModal
        delComponent.openModal()
      }
    },
    updateProduct (item) {
      this.tempProduct = item
      let tempUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        tempUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[http](tempUrl, { data: this.tempProduct }).then((res) => {
        alert(res.data.message)
        productComponent.hideModal()
        this.getProducts()
      }).catch((err) => {
        alert(err.response)
      })
    },
    delProduct () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then((res) => {
          const delComponent = this.$refs.delProductModal
          delComponent.hideModal()
          alert('已刪除該產品')
          this.getProducts()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
