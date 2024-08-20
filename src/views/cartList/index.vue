<template>
  <div class="xtx-cartlist container">
    <!-- 列表框 -->
    <div class="xtx-cartlist-table">
      <table>
        <thead>
          <tr>
            <th width="120">
              <el-checkbox :model-value="cartStore.isAll" @change="allCheck" />
            </th>
            <th width="400">商品信息</th>
            <th width="220">单价</th>
            <th width="180">数量</th>
            <th width="180">小计</th>
            <th width="140">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartlist" :key="item.id">
            <td width="120">
              <el-checkbox
                :model-value="item.selected"
                @change="(selected) => singleChange(item.skuId, selected)"
              />
            </td>
            <td width="400" class="goods-info">
              <img :src="item.picture" alt="" />
              <div>
                <div>{{ item.name }}</div>
              </div>
            </td>
            <td width="220">&yen;{{ item.price }}</td>
            <td width="180">
              <el-input-number
                v-model="item.count"
                :min="1"
                :max="10"
                @change="handleChange"
              />
            </td>
            <td width="180">&yen;{{ (item.price * item.count).toFixed(2) }}</td>
            <td width="140">
              <el-popconfirm
                title="确认删除吗?"
                confirm-button-text="确认"
                cancel-button-text="取消"
                @confirm="delCart(item.skuId)"
              >
                <template #reference>
                  <el-link type="danger">删除</el-link>
                </template>
              </el-popconfirm>
            </td>
          </tr>
          <tr v-if="cartStore.cartList.length === 0">
            <td colspan="6">
              <div class="cart-none">
                <el-empty description="购物车列表空空如也">
                  <el-button type="primary" @click="router.push('/home')"
                    >随便逛逛</el-button
                  >
                </el-empty>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 底部操作框 -->
    <div class="xtx-cartlist-footer" v-if="cartStore.cartList.length != 0">
      <div class="xtx-cartlist-footer-left">
        共<span>{{ cartStore.allCount }}</span
        >件商品，已选择<span>{{ cartStore.selectedCount }}</span
        >件合计：<span style="color: red"
          >&yen;{{ cartStore.selectedPrice }}</span
        >
      </div>
      <div class="xtx-cartlist-footer-right">
        <el-button type="primary" @click="placeOrder">下单结算</el-button>
      </div>
    </div>
  </div>
</template>
<script setup >
import { useCartStore } from "@/stores/cartStore";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const cartStore = useCartStore();

const cartlist = computed(() => cartStore.cartList);
const allCheck = (selected) => {
  cartStore.allCheck(selected);
};
function handleChange(value) {
  console.log(value);
}

function singleChange(skuId, selected) {
  cartStore.singleCheck(skuId, selected);
}
function delCart(skuId) {
  cartStore.delCart(skuId);
}
function placeOrder() {
  router.push('/checkout')
//   ElMessage({
//     message: "当然下不了单啦哈哈哈~",
//     type: "success",
//   });
}
</script>
<style scoped lang="scss">
.xtx-cartlist {
  .xtx-cartlist-table {
    margin: 20px 0;
    background-color: #fff;
    thead {
      font-size: 16px;
      tr {
        height: 60px;
      }
    }
    tbody {
      font-size: 14px;
      text-align: center;
      tr {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .goods-info {
        display: flex;
        justify-content: left;
        align-items: center;
        img {
          height: 60px;
          width: 60px;
        }
      }
    }
  }

  .xtx-cartlist-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #fff;
    padding: 0 20px;
  }
}
</style>