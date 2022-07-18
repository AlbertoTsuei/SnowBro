<template>
    <div id="orderModal" ref="modal" class="modal fade" tabindex="-1"
    aria-labelledby="productModalLabel" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 id="productModalLabel" class="modal-title">
                        訂單內容
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <table class="table">
                                <h3>訂購者資訊</h3>
                                <tbody v-if="tempOrder.user">
                                <tr>
                                    <th>姓名</th>
                                    <td>{{ tempOrder.user.name }}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{{ tempOrder.user.email }}</td>
                                </tr>
                                <tr>
                                    <th>電話</th>
                                    <td>{{ tempOrder.user.tel }}</td>
                                </tr>
                                <tr>
                                    <th>地址</th>
                                    <td>{{ tempOrder.user.address }}</td>
                                </tr>
                                </tbody>
                                <h3>付款資訊</h3>
                                <tfoot>
                                <tr>
                                    <th>訂單金額</th>
                                    <td>{{ $filters.currency(tempOrder.total) }}</td>
                                </tr>
                                <tr>
                                    <th>付款狀態</th>
                                    <td>
                                    <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                                    <span v-else class="text-danger">尚未付款</span>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="col-sm-8">
                            <table class="table">
                                <h3>訂單資訊</h3>
                                <tbody>
                                <tr>
                                    <th>訂單編號</th>
                                    <td>{{ tempOrder.id }}</td>
                                </tr>
                                <tr>
                                    <th>訂單時間</th>
                                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                                </tr>
                                <tr>
                                    <th>付款時間</th>
                                    <td>
                                    <span v-if="tempOrder.paid_date">{{ $filters.date(tempOrder.paid_date) }}</span>
                                    <span v-else>時間有誤</span>
                                    </td>
                                </tr>
                                </tbody>
                                <h3 class="mt-5">訂購清單</h3>
                                <tfoot>
                                <tr v-for="item in tempOrder.products" :key="item.id">
                                    <th>{{ item.product.title }}</th>
                                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                                    <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="OrderCheck"
                            v-model="tempOrder.is_paid"/>
                            <label class="form-check-label" for="OrderCheck">
                                 <span v-if="tempOrder.is_paid">已付款</span>
                                 <span v-else>未付款</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        取消
                    </button>
                    <button type="button" class="btn btn-primary" @click="$emit('update-order', tempOrder)">
                        確認
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: '',
      tempOrder: {}
    }
  },
  props: {
    order: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  emits: ['update-order'],
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
