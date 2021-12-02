<template>
  <div>
    <div class="header" :class="(bacHeader||(route!='index'))?'bacHeader':''">
      <div class="center-block">
      	<div class="attar">
      		
      	</div>
        <ul class="guide-list">
          <li>
            <router-link :to="{name:'index'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name:'pub'}">信息发布</router-link>
          </li>
          <li>
            <router-link :to="{name:'product'}" exact>话费卡信息</router-link>
          </li>
          <li>
          	<router-link :to="{name:'product',params:{id:1}}" exact>加油卡信息</router-link>
          </li>
          <li>
          	<router-link :to="{name:'product',params:{id:2}}" exact>购物卡信息</router-link>
          </li>
          <li>
          	<router-link :to="{name:'product',params:{id:3}}" exact>健身卡信息</router-link>
          </li>
          <li>
          	<router-link :to="{name:'product',params:{id:4}}" exact>其他卡信息</router-link>
          </li>
          <!-- <li>
            <a href="">登录｜注册</a>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="container" style="min-height:500px">
      <transition mode='out-in'>
          <router-view/>
	    </transition>
    </div>
    <div class="bottom">
      <div>Copyright © 版权所有 xixixhahah有限公司</div>
      <div>粤ICP备17069227号-3</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
       route:'',
       bacHeader:false
      }
    },
    watch:{
      $route(to,from){
        this.route = this.$route.name
      }
    },
    mounted() {
      this.route = this.$route.name
      window.addEventListener('scroll',this.handleScroll,true)
    },
    methods: {
     handleScroll(){
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      
      this.bacHeader= scrollTop >= 84 ? true : false
    }
    }
  }
</script>
<style lang="less">
  .header{
    height: 84px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .attar{
    	width: 60px;
    	height: 60px;
    	border-radius: 100%;
    	background: #67C23A;
    	float: left;
    	margin-top: 10px;
    }
    .guide-list{
    	padding-left: 24px;
    	overflow: hidden;
      li{
        float: left;
        a{
          display: inline-block;
          line-height: 84px;
          color: #fff;
          padding: 0 30px;
        }
      }
    }
  }
  .bacHeader{
    background: #fff;
    border-bottom: 1px solid #eee;
    .guide-list{
      li{
        a{
          color: #333;
        }
      }
    }
  }
  
  .bottom{
    background: #2a2c37;
    text-align: center;
    padding: 60px 0;
    color: #ccc;
  }
</style>
