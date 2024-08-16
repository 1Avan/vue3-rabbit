<template>
  <div class="product-list">
    <div class="product-list-item" v-for="cate in cates" :key="cate.id">
      <HomePanel :title="cate.name">
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-img-lazy="cate.picture" />
            <strong class="label">
              <span>{{ cate.name }}馆</span>
              <span>{{ cate.saleInfo }}</span>
            </strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="good in cate.goods" :key="good.id">
              <!-- <RouterLink to="/" class="goods-item">
                <img v-img-lazy="good.picture" alt="" />
                <p class="name ellipsis">{{ good.name }}</p>
                <p class="desc ellipsis">{{ good.desc }}</p>
                <p class="price">&yen;{{ good.price }}</p>
              </RouterLink> -->
              <GoodItem :good="good"></GoodItem>
            </li>
          </ul>
        </div>
      </HomePanel>
    </div>
  </div>
</template>
<script setup >
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";
import GoodItem from '@/components/GoodItem.vue'
import { getGoodsAPI } from "@/apis/home";
let cates = ref([]);

async function getGoods() {
  const res = await getGoodsAPI();
  cates.value = res.result;
  console.log("商品", res);
}

getGoods();
</script>
<style scoped lang="scss">
.product-list {
  .product-list-item {
    margin-bottom: 20px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
    .box {
      display: flex;

      .cover {
        width: 240px;
        height: 610px;
        margin-right: 10px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .label {
          width: 188px;
          height: 66px;
          display: flex;
          font-size: 18px;
          color: #fff;
          line-height: 66px;
          font-weight: normal;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate3d(0, -50%, 0);

          span {
            text-align: center;

            &:first-child {
              width: 76px;
              background: rgba(0, 0, 0, 0.9);
            }

            &:last-child {
              flex: 1;
              background: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }

      .goods-list {
        width: 990px;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 240px;
          height: 300px;
          margin-right: 10px;
          margin-bottom: 10px;

          &:nth-last-child(-n + 4) {
            margin-bottom: 0;
          }

          &:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>