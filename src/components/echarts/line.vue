<template>
  <div class="panel line">
    <h2>机器人稳定情况</h2>
    <div
      class="chart"
      ref="line"
    ></div>
    <div class="panel-footer"></div>
  </div>

</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.line);

      // (1)准备数据
      var data = {
        x_data: ["1", "2", "3", "4", "5", "6", "7"],
        reddit: {
          normal: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
        toutiao: {
          normal: [0.9, 0.8, 9.7, 0.8, 0.6, 0.6, 0.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
        twitter: {
          normal: [0.9, 0.8, 5.7, 0.8, 0.6, 8.6, 0.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
        facebook: {
          normal: [0.9, 0.8, 3.7, 0.8, 0.6, 0.6, 4.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
        bilibili: {
          normal: [2.9, 2.8, 2.7, 2.8, 2.6, 2.6, 2.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
        youtobo: {
          normal: [1, 1.8, 1.7, 1.8, 1.6, 1.6, 1.9],
          wrong: [0.9, 0.8, 0.7, 0.8, 0.6, 0.6, 0.9],
        },
      };

      // 2. 指定配置和数据
      var option = {
        color: ["#00f2f1", "#ed3f35","#1E90FF", "	#98FB98","#FFA500", "#A0522D"],
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.x_data,
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(255,255,255,.7)",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(255,255,255,.7)",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "reddit正常情况",
            type: "line",
            // 是否让线条圆滑显示
            smooth: true,
            show:false,
            data: data.reddit.normal,
          },
          {
            name: "toutiao正常情况",
            type: "line",
            smooth: true,
            data: data.toutiao.normal,
          },
          {
            name: "twitter正常情况",
            type: "line",
            smooth: true,
            data: data.twitter.normal,
          },
          {
            name: "facebook正常情况",
            type: "line",
            smooth: true,
            data: data.facebook.normal,
          },
          {
            name: "bilibili正常情况",
            type: "line",
            smooth: true,
            data: data.bilibili.normal,
          },
          {
            name: "youtobo正常情况",
            type: "line",
            smooth: true,
            data: data.bilibili.normal,
          },
        ],
      };
      // 3. 把配置和数据给实例对象
      myChart.setOption(option);

      // 重新把配置好的新数据给实例对象
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>