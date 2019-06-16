<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item of letters" 
            :key="item" 
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false
        }
    },
    computed: {
        letters () {
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            //console.log(e)
            const startY = this.$refs['A'][0].offsetTop    //计算出了从A至搜索框底端的距离 
            //console.log(e.touches)
            const touchY = e.touches[0].clientY - 81       //计算出了当前触摸元素到搜索框底部的距离 
            const index = Math.floor((touchY - startY) / 20)    //计算出是第几个字母
            if(index >= 0 && index < this.letters.length){
                this.$emit('change', this.letters[index])
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang='stylus' scoped>
    .list
        position: fixed
        top: 1.58rem
        right: .15rem
        bottom: 0
        width: .3rem
        display: flex
        flex-direction: column
        justify-content: center
        .item
            line-height: .4rem
            text-align: center
            color: #00bcd4        
</style>