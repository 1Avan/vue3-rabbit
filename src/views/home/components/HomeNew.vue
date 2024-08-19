<template>
  <div>
    <HomePanel :title="title" :subTitle="subTitle">
      <ul class="new-good">
        <li v-for="item in freshGoods" :key="item.id">
          <router-link :to="`/detail/${item.id}`">
                      <div class="good-img">
            <!-- v-img-lazy自定义图片懒加载指令 -->
            <img  alt=""  v-img-lazy="item.picture"/>
          </div>
          <div class="good-foot">
            <div class="title">{{ item.name }}</div>
            <div class="good-price">￥{{ item.price }}</div>
          </div>
          </router-link>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>
<script setup >
import { getFreshAndGoodAPI } from "@/apis/home";
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";

let title = ref("新鲜好物"); //主标题
let subTitle = ref("做新鲜事，买新鲜货"); //副标题
let freshGoods = ref([]);

// 获取新鲜好物
async function getFreshAndGood() {
  let res = await getFreshAndGoodAPI();
  console.log(res);
  freshGoods.value = res.result;
  console.log(freshGoods.value);
}

getFreshAndGood();
</script>   
<style scoped lang="scss">
.new-good {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 406px;
  flex-wrap: wrap;
  li {
    height: 100%;
    width: 306px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover {
      transform: translate3d(-3px, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    img {
      width: 306px;
      height: 306px;
    }
    .good-foot {
      flex: 1;
      background-color: #ccc;
      padding: 20px;
      font-size: 18px;
      .title {
        font-size: 22px;
        text-align: center;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .good-price {
        margin-top: 10px;
        text-align: center;
        font-family: "Courier New", Courier, monospace;
        color: $priceColor;
      }
    }
  }
}
</style>