<template>
    <div class="list" ref="wrapper">  <!--ref可以获取到该dom结构，下面再包一个div是为了符合better-scroll的dom结构-->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button" style="border: .02rem solid #00bcd4">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button" @click="handleandleCityClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
                 v-for="(item, key) of cities" 
                 :key="key" 
                 :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" >
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleandleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'  //安装完better-scroll之后要将其引入
export default {
    name: 'CityList',
    mounted () {    //生命周期钩子函数，会在页面dom结构加载完触发
        this.scroll = new Bscroll(this.$refs.wrapper)   //其会在页面dom结构加载完成之后生成一个scroll对象，这样就能使用Bsroll了
    },
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    watch: {
        letter () {
            //console.log(this.letter)
            if (this.letter) {
                const element = this.$refs[this.letter]     //这样通过ref方法的到的是一个数组，里面存储了指定位置的dom结构
                //console.log(element)
                this.scroll.scrollToElement(element[0])     //better-scroll提供的方法，能滚动到指定的element元素，注意其传入的值必须是element
            }

        }
        /* 简便的写法
        letter () {
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                this.scrollToElement(element)
            }
        }*/
    },
    methods: {
        handleandleCityClick (city) {
            this.$store.dispatch('changeCity',city)     //调用vuex里面的dispatch方法，通过这个方法来调用actions，之后在actions里面用commit方法调用mutations，
                                                        //在mutations里面更改state里面的公用数据，由于此处数据处理十分简单，也可以直接在这里使用commit方法调用mutations，见searc.vue里面的写法
            this.$router.push('/')      //跳转到首页
        }
    }
}
</script>

<style lang='stylus' scoped>
    .border-topbottom 
        &:before
            border-color: #cccccc
        &:after
            border-color: #cccccc
    .border-topbottom 
        &:before
            border-bottom: #cccccc
    .list
        overflow: hidden    
        position: absolute 
        top: 1.62rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eeeeee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list 
            overflow: hidden  
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                .button
                    float: left
                    width: 29% 
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #cccccc
                    border-radius: .06rem 
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem 
</style>
