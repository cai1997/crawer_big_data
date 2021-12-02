<template>
  <div class="home">
    <header>
      <h1>爬虫机器人展示平台</h1>
      <div class="showTime">当前时间：2021年9月<span></span></div>
    </header>
    <section class="mainbox">
      <div class="column">
        <!-- <bar></bar>
            <eline></eline> -->
        <dataRobotOn></dataRobotOn>
        <dataOn></dataOn>
        <dataInfo></dataInfo>
      </div>
      <div class="column">
        <dataBasic :dataStatistic="updateStatistic"></dataBasic>
        <div class="map">
          <china1></china1>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <div class="column">
        <bar1></bar1>
        <line1></line1>
        <pie1></pie1>
      </div>
    </section>
  </div>
</template>

<script>
import bar from "@/components/echarts/bar";
import bar1 from "@/components/echarts/bar1";
import line1 from "@/components/echarts/line";
import pie from "@/components/echarts/pie";
import pie1 from "@/components/echarts/pie1";
import china1 from "@/components/echarts/china";
import dataBasic from "@/components/robotData/data_basic";
import dataRobotOn from "@/components/robotData/data_robotOn";
import dataOn from "@/components/robotData/data_on";
import dataInfo from "@/components/robotData/data_info";
export default {
  name: "",
  data() {
    return {
      updateStatistic: [],
    };
  },
  components: {
    bar,
    bar1,
    pie1,
    pie,
    line1,
    china1,
    dataBasic,
    dataRobotOn,
    dataOn,
    dataInfo,
  },
  methods: {
    // 更新dataBasic图
    updateDataBasic() {
      this.updateStatistic = [
        {
          name: "平台数量",
          value: "7",
        },
        {
          name: "机器人数量",
          value: "450",
        },
        {
          name: "分布位置数量",
          value: "560",
        },
        {
          name: "云主机总量",
          value: "45",
        },
        {
          name: "新闻阅读总量",
          value: "125633",
        },
        {
          name: "日志数量",
          value: "7215",
        },
      ];
    },
  },
  mounted() {
    this.updateDataBasic();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  min-height: 100vh;
  background-color: #06164a;
  header {
    position: relative;
    height: 1.25rem;
    background: url(../static/images/head_bg.png) no-repeat top center;
    background-size: 100% 100%;
    h1 {
      font-size: 0.475rem;
      color: #fff;
      text-align: center;
      line-height: 1rem;
    }
    .showTime {
      position: absolute;
      top: 0;
      right: 0.375rem;
      line-height: 0.9375rem;
      font-size: 0.25rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .mainbox {
    min-width: 1024px;
    // max-width: 1920px;
    display: flex;
    .column {
      flex: 3;
      overflow: hidden;
      &:nth-child(2) {
        flex: 5;
        margin: 0 0.125rem 0.1875rem;
        overflow: hidden;
      }
    }
  }
  .panel {
    position: relative;
    height: 3.875rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: rgba(255, 255, 255, 0.04) url(../static/images/line\(1\).png);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      border-radius: 20%;
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      border-radius: 20%;
    }
    .panel-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        border-radius: 20%;
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        border-radius: 20%;
      }
    }

    h2 {
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      font-size: 0.25rem;
      font-weight: 400;
      a {
        margin: 0 0.1875rem;
        color: #fff;
        text-decoration: underline;
      }
    }
    .chart {
      height: 3rem;
    }
  }
  .no {
    background: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;
    .no-hd {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);
      &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
        top: 0;
        left: 0;
      }
      &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        right: 0;
        bottom: 0;
      }
      ul {
        display: flex;
        li {
          position: relative;
          flex: 1;
          text-align: center;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.875rem;
          color: #ffeb7b;
          padding: 0.05rem 0;
          font-family: electronicFont;
          font-weight: bold;
          &:first-child::after {
            content: "";
            position: absolute;
            height: 50%;
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
            right: 0;
            top: 25%;
          }
        }
      }
    }
    .no-bd ul {
      display: flex;
      li {
        flex: 1;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.225rem;
        color: rgba(255, 255, 255, 0.7);
        padding-top: 0.125rem;
      }
    }
  }
  .map {
    position: relative;
    height: 9.325rem;
    .chart {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      height: 9.325rem;
      width: 100%;
    }
    .map1,
    .map2,
    .map3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6.475rem;
      height: 6.475rem;
      background: url(../static/images/map.png) no-repeat;
      background-size: 100% 100%;
      opacity: 0.3;
    }
    .map2 {
      width: 8.0375rem;
      height: 8.0375rem;
      background-image: url(../static/images/lbx.png);
      opacity: 0.6;
      animation: rotate 15s linear infinite;
      z-index: 2;
    }
    .map3 {
      width: 7.075rem;
      height: 7.075rem;
      background-image: url(../static/images/jt.png);
      animation: rotate1 10s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    @keyframes rotate1 {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 42px !important;
    }
  }
  @media screen and (min-width: 1920) {
    html {
      font-size: 80px !important;
    }
  }
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px; /**/
  }
  .el-table__body-wrapper::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background: #2f90b5;
    border-radius: 10px;
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb:hover {
    background: #2f90b5;
  }
  .el-table {
    font-size: 0.2rem;
    background: black;
  }
  .el-table::before {
    height: 0;
  }
  .el-table td.el-table__cell,
  .el-table th.el-table__cell.is-leaf {
    border-bottom: none;
  }
  .el-table th.el-table__cell,
  .el-table tr,
  .el-table,
  .el-table__expanded-cell {
    background: none;
  }
  .el-table .el-table__cell {
    padding: 8px 0;
  }
  .el-table--enable-row-transition .el-table__body td.el-table__cell {
    color: #2f90b5;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
    background-color: #091123;
  }
}
</style>
