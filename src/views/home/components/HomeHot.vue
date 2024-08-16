<template>
  <div>
    <HomePanel :title="title" :subTitle="subTitle">
      <ul class="hot-good">
        <li v-for="item in hotGoods" :key="item.id">
          <div class="good-img">
            <img :src="item.picture" :title="item.alt" />
          </div>
          <div class="good-foot">
            <div class="title">{{ item.title }}</div>
          </div>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>
<script setup >
import { getHotAndGoodAPI  } from "@/apis/home";
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";

let title = ref("热门好物"); //主标题
let subTitle = ref("热门好物等你选购~"); //副标题
let hotGoods = ref([]);

// 获取热门好物
async function getHotAndGood() {
  let res = await getHotAndGoodAPI();
  console.log(res);
  hotGoods.value = res.result;
  console.log(hotGoods.value);
}

getHotAndGood();
</script>   
<style scoped lang="scss">
.hot-good {
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