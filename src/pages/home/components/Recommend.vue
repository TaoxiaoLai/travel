<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>   
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
                {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                    title: '北京-丽江6天跟团游',
                    desc: '含往返机票+5晚住宿'
                },{
                    id: '002',
                    imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                    title: '北京-丽江6天跟团游',
                    desc: '含往返机票+5晚住宿'
                },{
                    id: '003',
                    imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                    title: '北京-丽江6天跟团游',
                    desc: '含往返机票+5晚住宿'
                },{
                    id: '004',
                    imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
                    title: '北京-丽江6天跟团游',
                    desc: '含往返机票+5晚住宿'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eeeeee
        text-indent: .2rem
    .item
        display: flex
        overflow: hidden
        height: 1.9rem
        .item-img
            height: 1.7rem
            width: 2.1rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            .item-title
                line-height: .54rem
                font-size: .34rem
                font-weight: bold
            .item-desc
                line-height: .4rem
                font-size: .26rem
                color: #cccccc
            .item-button
                background: #ff9300
                color: #ffffff
                line-height: .44rem
                margin-top: .16rem
                padding: 0 .2rem
                border-radio: .2rem
</style>


