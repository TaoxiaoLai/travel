<template>
    <div>
        <div class="search">
            <input 
                class="search-input" 
                type="text" 
                placeholder="请输入城市名或拼音"
                v-model="keyWord"
            />
        </div>
        <div class="search-content" v-show="keyWord">
            <ul>
                <li 
                    class="search-item"
                    v-for="item of list"
                    :key="item.id"
                >
                {{item.name}}
                </li>
                <li class="search-item" v-show="hasNoData">没有搜到相关内容</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyWord: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyWord () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    }
}
</script>

<style lang='stylus' scoped>
    .search
        height: .72rem
        padding: 0 .1rem
        background: #00bcd4
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            line-height: .62rem
            padding: 0 .1rem
            color: #666
            text-align: center
            border-radius: .06rem
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute 
        top: 1.62rem
        left: 0
        right: 0
        bottom: 0
        background: #eeeeee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #ffffff
            color: #666
</style>