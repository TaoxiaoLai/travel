<template>
    <div class="list" ref="wrapper">  <!--ref可以获取到该dom结构，下面再包一个div是为了符合better-scroll的dom结构-->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                    <div class="item border-bottom">
                        北京
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Bscroll from 'better-scroll'  //安装完better-scroll之后要将其引入
export default {
    name: 'CityList'
    /*mounted () {    //生命周期钩子函数，其会在页面dom结构加载完成之后生成一个scroll对象，这样就能使用Bsroll了
        this.scroll = new Bscroll(this.$refs.wrapper)
    }*/
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
