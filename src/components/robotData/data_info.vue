<template>
  <div class="panel">
    <h2>机器人数据情况</h2>
    <el-table
      :data="tableData"
      height="3rem"
      style="width: 100%"
    >
      <el-table-column
        prop="robotID"
        align="center"
        label="机器人ID"
      >
      </el-table-column>
      <el-table-column
        prop="newsNum"
        align="center"
        label="新闻阅读量"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="actionNum"
        align="center"
        label="动作次数"
      >
      </el-table-column>
      <el-table-column
        prop="blogNum"
        align="center"
        label="日志数量"
      >
      </el-table-column>
      <el-table-column
        prop="dateTime"
        align="center"
        label="运行天数"
      >
      </el-table-column>
    </el-table>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          robotID: "reddit",
          newsNum: "10",
          actionNum: "20",
          blogNum: "reddit",
          dateTime: "10",
        },
        {
          robotID: "reddit",
          newsNum: "10",
          actionNum: "20",
          blogNum: "reddit",
          dateTime: "10",
        },
        {
          robotID: "reddit",
          newsNum: "10",
          actionNum: "20",
          blogNum: "reddit",
          dateTime: "10",
        },
        {
          robotID: "reddit",
          newsNum: "10",
          actionNum: "20",
          blogNum: "reddit",
          dateTime: "10",
        },
        {
          robotID: "reddit",
          newsNum: "10",
          actionNum: "20",
          blogNum: "reddit",
          dateTime: "10",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>