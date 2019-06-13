<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name : 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',       //通过这个显示下面轮播的小点
                loop: true
            },
            imgList: [
                {                     
                    id: '001',
                    imgUrl: 'https://img1.qunarzz.com/qs/1906/49/868ffd4c5f690b02.jpg'
                },{
                    id: '002',
                    imgUrl: 'https://img1.qunarzz.com/qs/1901/f4/58144f72caf30a02.jpg'
                },{
                    id: '003',
                    imgUrl: 'https://img1.qunarzz.com/qs/1905/92/d0a7f0687efa3f02.jpg'
                }
            ]
        }
    }
}
</script>



<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active         
    background: #fff
.wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 54.488%
    background: #eeeeee
    .swiper-img
        width: 100%
</style>