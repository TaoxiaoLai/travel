<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
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
</style>