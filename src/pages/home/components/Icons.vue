<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img" :src='item.imgUrl' />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>    
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [
                {
                    id: '001',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/8B/8E/Cii-T1fuHgqIbV1HAAAGO81OjDUAAC57AP_-acAAAZZ433.png',
                    desc: '热门景点'
                },{
                    id: '002',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/72/Cii-T1fM1fSIf608AAARsQcj6XAAACDvAP_7PUAABHJ478.png',
                    desc: '出境游'
                },
                 {
                    id: '003',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-TlfM1fSILR6tAAAN7rFnmEIAACDvQP1yEgAAA4G919.png',
                    desc: '一日游'
                },{
                    id: '004',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-TlfM1feIO4NtAAANXZtSasUAACDvQP3KJwAAA11506.png',
                    desc: '跟团游'
                },
                 {
                    id: '005',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-TlfM1fWId8pmAAAPgnq7CXYAACDvQP2cuYAAA-a853.png',
                    desc: '火车票'
                },{
                    id: '006',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-T1fM1feIQaPwAAAOxRfNfDUAACDvQP3eIMAAA7d173.png',
                    desc: '渡轮游'
                },
                 {
                    id: '007',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/6D/Cii-TFfM1fiIC4QPAAAL3IKBvskAACDtAP_88UAAAw7658.png',
                    desc: '热门酒店'
                },{
                    id: '008',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-T1fM1faIXvvxAAAN_4O8GF0AACDvQP24DwAAA4X706.png',
                    desc: '攻略'
                },
                 {
                    id: '009',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-T1fM1fWIc1fpAAANQfAWPYAAACDvQP2VKMAAA1Z827.png',
                    desc: '超级巴士'
                },{
                    id: '010',
                    imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/59/73/Cii-TFfM1faICPe-AAAOq5_xazwAACDvQP2s_UAAA7D296.png',
                    desc: '租车·接送'
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    .icons >>> .swiper-container
        width: 100%
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .img
                display: block
                margin: 0 auto 
                height: 100%
        .icon-desc
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: #333
</style>

