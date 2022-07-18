<template>
  <div class="container-fluid">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>訂單時間</th>
          <th>聯絡方式</th>
          <th>訂單內容</th>
          <th>訂單金額</th>
          <th>是否付款</th>
          <th>編輯訂單</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.id"
          :class="{ 'text-secondary': !item.is_paid }"
        >
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量: {{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                @change="updateOrder(item)"
                role="switch"
                :id="item.id"
                v-model="item.is_paid"
              />
              <label class="form-check-label" for="flexSwitchCheckChecked">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                更多
              </button>
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
    <Pagination :pages="pages" @get-pages="getOrders"></Pagination>
  </div>
  <!-- orderModal元件 -->
  <orderModal
    :order="tempOrder"
    @update-order="updateOrder"
    ref="orderModal"
  ></orderModal>
  <!--delProductModal 元件-->
  <delProductModal
    :temp-product="tempOrder"
    @del-item="delOrder"
    ref="delProductModal"
  ></delProductModal>
</template>

<script>
import Pagination from '@/components/PaginationCompo.vue'
import delProductModal from '@/components/delproductModal.vue'
import orderModal from '@/components/OrderModal.vue'

export default {
  data () {
    return {
      orders: {},
      isNew: false,
      tempOrder: {},
      pages: {},
      isLoading: false
    }
  },
  components: {
    delProductModal,
    Pagination,
    orderModal
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      vm.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`)
        .then(res => {
          this.orders = res.data.orders
          this.pages = res.data.pagination
          vm.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤！')
        })
    },
    openModal (isNew, item) {
      if (isNew === 'edit') {
        this.tempOrder = { ...item }
        this.isNew = false
        const orderComponent = this.$refs.orderModal
        orderComponent.openModal()
      } else if (isNew === 'delete') {
        this.tempOrder = { ...item }
        const delComponent = this.$refs.delProductModal
        delComponent.openModal()
      }
    },
    updateOrder (item) {
      this.tempOrder = item
      const tempUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      const orderComponent = this.$refs.orderModal
      this.$http.put(tempUrl, { data: paid }).then((res) => {
        alert(res.data.message)
        orderComponent.hideModal()
        this.getOrders()
      }).catch((err) => {
        alert(err.response)
      })
    },
    delOrder () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`)
        .then((res) => {
          const delComponent = this.$refs.delProductModal
          delComponent.hideModal()
          alert('已刪除該訂單')
          this.getOrders()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
