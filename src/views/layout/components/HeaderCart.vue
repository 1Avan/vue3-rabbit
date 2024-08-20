<template>
  <!-- Badge带徽章的弹出框 -->
  <el-badge :value="cartStore.allCount" class="item" ref="buttonRef">
    <i class="iconfont icon-cart"></i>
  </el-badge>
  <el-popover
    placement="bottom-end"
    ref="popoverRef"
    :virtual-ref="buttonRef"
    trigger="click"
    virtual-triggering
    width="300px"
  >
    <div class="shop-cart">
      <div class="main-content">
        <div class="scroll">
          <ul>
            <li class="goods-item" v-for="item in cartStore.cartList">
              <div class="goods-img">
                <img :src="item.picture" alt="" />
              </div>
              <div class="goods-info">
                <div class="goods-info-title">{{ item.name }}</div>
                <div class="goods-info-specifications">
                  {{ item.attrsText }}
                </div>
              </div>
              <div class="goods-price">
                <div class="goods-one-prece">&yen;{{ item.price }}</div>
                <div class="goods-count">x{{ item.count }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <div class="goods-info">
          <div class="goods-count">共{{ cartStore.allCount }}件商品</div>
          <div class="goods-price">&yen;{{ cartStore.allPrice }}</div>
        </div>
        <el-button @click="router.push('/cartlist')" type="success">去购物车结算</el-button>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
import { computed, ref, unref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const buttonRef = ref();
const popoverRef = ref();
</script>

<style scoped lang="scss">
.shop-cart {
  width: 100%;
  height: 400px;
  //   overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main-content {
    height: 80%;
    .scroll {
      height: 100%;
      overflow: auto;
      ul {
        .goods-item {
          display: flex;
          border-bottom: 1px solid #ccc;
          // box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
          padding: 5px 0;
          .goods-img {
            width: 70px;
            height: 70px;
            flex-shrink: 0; /* 防止被压缩 */
            img {
              width: 100%;
              height: 100%;
            }
          }
          .goods-info {
            flex: 1;
            margin: 0 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            .goods-info-title {
              font-weight: bold;
              margin-bottom: 5px;
            }
            .goods-info-specifications {
              color: #ccc;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .goods-price {
            flex-shrink: 0; /* 防止被压缩 */
            width: 70px;
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            .goods-one-prece {
              color: $priceColor;
              font-size: 500;
            }
            .goods-count {
              color: #ccc;
            }
          }
        }

        .goods-item:last-child {
          border-bottom: none;
          margin-bottom: 20px;
        }
      }
    }
  }
  .footer {
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
}
</style>