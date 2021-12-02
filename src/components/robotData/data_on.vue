<template>
  <div class="panel">
      <h2>平台运行情况</h2>
        <el-table
          :data="tableData"
          height="3rem"
          style="width: 100%">
          <el-table-column
            prop="name"
            align="center"
            label="平台机器人">
          </el-table-column>
          <el-table-column
            prop="succ"
            align="center"
            label="正常运行数量">
            <template slot-scope="scope">
              <span style="color:#67c23a">{{ scope.row.succ }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="fail"
            align="center"
            label="失败数量">
            <template slot-scope="scope">
              <span style="color:#ff4546">{{ scope.row.fail }}</span>
            </template>
          </el-table-column>
        </el-table>
      <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
          
          tableData: [{
            name: 'reddit',
            succ:'10',
            fail: '20',
          },{
            name: 'reddit',
            succ:'10',
            fail: '20',
          },{
            name: 'reddit',
            succ:'10',
            fail: '20',
          },{
            name: 'reddit',
            succ:'10',
            fail: '20',
          },{
            name: 'reddit',
            succ:'10',
            fail: '20',
          }]
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>