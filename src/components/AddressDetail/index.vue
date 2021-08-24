<template>
  <div class="address-detail">
    <div class="title">
      <div class="title-left">
        <span class="title-left-content">
          {{ addressInfo.title }}
        </span>
        <span class="title-left-flags"
          >重要程度:
          <i
            class="el-icon-star-on"
            v-for="item in addressInfo.grade"
            :key="item"
            :style="{ color: randomBk() }"
          ></i>
        </span>
      </div>
      <div class="title-right">展开</div>
    </div>
    <ul>
      <li v-for="item in addressInfo.children" :key="item.address">
        <i class="el-icon-star-on" :style="{ color: randomBk() }"></i>
        <a :href="item.address" target="_blank">{{ item.address }}</a>
        <span class="content" v-show="item.notes">{{ item.notes }}</span>
        <button>复制链接</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IAddressDetail } from "@/components/AddressDetail/types";
import randomBk from "@/assets/js/randomBk";

export default defineComponent({
  name: "address-detail",
  props: {
    addressInfo: {
      type: Object as PropType<IAddressDetail>,
      required: true,
    },
  },
  setup() {
    return {
      randomBk,
    };
  },
});
</script>

<style lang="scss" scoped>
.address-detail {
  padding: 0px 30px 10px 20px;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 3px 3px 3px #ccc;
  width: 100%;
  margin-top: 30px;

  .title {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &-left {
      &-content {
        font-weight: bold;
        font-size: 17px;
        color: #100c2a;
      }

      &-flags {
        margin-left: 15px;
        font-size: 13px;
      }
    }

    &-right {
      font-size: 13px;
      cursor: pointer;
    }
  }

  ul {
    background: #fff;
    margin: 0px;
    padding: 0px 15px;
    width: 100%;

    li {
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      i {
        margin-right: 15px;
      }

      .content {
        font-size: 12px;
        color: #666666;
        margin-left: 20px;
      }

      button {
        border: 1px solid #eeeeee;
        outline: none;
        background: #fff;
        color: #47a1ff;
        font-size: 12px;
        padding: 5px 10px;
        cursor: pointer;
        margin-left: 30px;
      }
    }
  }
}
</style>
