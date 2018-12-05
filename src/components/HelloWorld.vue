<template>
  <div class="hello">
    <h1>{{ msg }}sss</h1>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(bar,index) in nav_bar" :key="index" :to="bar.path">
        <span>{{bar.name}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active_icon : icon.normal_icon"
        >
      </van-tabbar-item>
    </van-tabbar>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item info="3">
        <span>自定义</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="chat">标签</van-tabbar-item>
    <van-tabbar-item icon="records">标签</van-tabbar-item>
</van-tabbar> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      active: 0,
      icon: {
        normal_icon: 'http://gdlearn.com/images/icon-img/home.png',
        active_icon: 'http://gdlearn.com/images/icon-img/home_active.png'
      },
      nav_bar:[{
        name:"首页",
        normal_icon:'http://gdlearn.com/images/icon-img/home.png',
        active_icon:'http://gdlearn.com/images/icon-img/home_active.png',
        path:'/'
      },{
        name:"分类",
        normal_icon:'http://gdlearn.com/images/icon-img/cat.png',
        active_icon:'http://gdlearn.com/images/icon-img/cat_active.png',
        path:'/catgory'
      },{
        name:"排行榜",
        normal_icon:'http://gdlearn.com/images/icon-img/rank.png',
        active_icon:'http://gdlearn.com/images/icon-img/rank_active.png',
        path:"/rank"
      },{
        name:"我的",
        normal_icon:'http://gdlearn.com/images/icon-img/mine.png',
        active_icon:'http://gdlearn.com/images/icon-img/mine_active.png',
        path:'/my'
      }]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
