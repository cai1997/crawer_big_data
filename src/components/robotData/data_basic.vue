<template>
  <div
    class="panel data-panel"
    style="height: auto; padding: 0.3rem 0.1875rem 0.1rem"
  >
    <ul class="data-list">
      <li v-for="(data, i) in showData" :key="i">
        {{ data.name }}<br />
        <span class="num">{{ data.value }}</span>
      </li>
      <!-- <li>
        平台数量<br />
        <span class="num">7</span>
      </li>
      <li>
        机器人数量<br />
        <span class="num">450</span>
      </li>
      <li>
        爬虫数量<br />
        <span class="num">560</span>
      </li>
      <li>
        分布位置数<br />
        <span class="num">7</span>
      </li>
      <li>
        新闻总量<br />
        <span class="num">125</span>
      </li>
      <li>
        用户总量<br />
        <span class="num">7100</span>
      </li> -->
    </ul>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "dataBasic",
  props: {
    dataStatistic: {
      type: Array,
      required: true,
    },
  },
  watch: {
    dataStatistic: {
      handler(item) {
        this.update(item);
      },
      deep: true,
    },
  },
  data() {
    return {
      showData: [],
    };
  },
  mounted() {},
  methods: {
    update(item) {
      if (item != []) {
        this.showData = item;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.data-list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  li {
    flex: 1;
    min-width: 33%;
    font-size: 0.225rem;
    padding-bottom: 0.2rem;
    .num {
      font-family: electronicFont;
      font-size: 0.3rem;
      display: inline-block;
      margin-top: 0.2rem;
      color: #ffeb7b;
    }
  }
}
</style>