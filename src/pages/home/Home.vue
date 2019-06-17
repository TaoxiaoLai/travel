<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
	name : 'Home',
	data () {
		return {
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend 
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			//console.log(res)	//此时返回的res并非就是直接可以用的data数据了，还包括其他别的内容，其res下面的data才是可以直接用的数据
			//res = res.data 如果不写这句，需要下面这么写才能找到数据（可看console.log打印出来的数据结构）
			if(res.data.ret && res.data.data) {
				const data = res.data.data
				this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.getHomeInfo ()
	}

}
</script>

<style></style>