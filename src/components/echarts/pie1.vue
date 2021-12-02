<template>
    <div class="panel pie1">
        <h2>平台机器人分布</h2>
        <div class="chart" ref="pie1"></div>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            platValue:[
                    { value: 20, name: "facebook" },
                    { value: 26, name: "twitter" },
                    { value: 24, name: "googleNews" },
                    { value: 25, name: "bilibili" },
                    { value: 20, name: "Youtobe" },
                    { value: 25, name: "reddit" },
                    ],
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.init()
        })
    },
    methods:{
        init(){
            // 1. 实例化对象
            var myChart = echarts.init(this.$refs.pie1);
            // 2. 指定配置项和数据
            var option = {
                legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
                },
                tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                // 注意颜色写的位置
                color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
                ],
                series: [
                {
                    name: "点位统计",
                    type: "pie",
                    // 如果radius是百分比则必须加引号
                    radius: ["10%", "70%"],
                    center: ["50%", "42%"],
                    roseType: "radius",
                    data: this.platValue,
                    // 修饰饼形图文字相关的样式 label对象
                    label: {
                    fontSize: 10
                    },
                    // 修饰引导线样式
                    labelLine: {
                    // 连接到图形的线长度
                    length: 10,
                    // 连接到文字的线长度
                    length2: 10
                    }
                }
                ]
            };

            // 3. 配置项和数据给我们的实例化对象
            myChart.setOption(option);
            // 4. 当我们浏览器缩放的时候，图表也等比例缩放
            window.addEventListener("resize", function () {
                // 让我们的图表调用 resize这个方法
                myChart.resize();
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>