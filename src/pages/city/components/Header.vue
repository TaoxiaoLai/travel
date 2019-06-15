<template>
    <div class="header">
        城市选择
        <router-link to='/'>
            <img src="@/assets/icon/arrow_left.png" class="header-back" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
    .header
        position: relative
        overflow: hidden
        height: .90rem
        line-height: .90rem
        background: #00bcd4
        text-align: center
        color: #ffffff
        font-size: .32rem
        .header-back
            position: absolute
            top: .20rem
            left: 0
            width: .50rem
            height: .50rem
</style>