<template>
	<div class="header">
		<div class="header-left">
			<img src="@/assets/icon/arrow_left.png" class="icon-back">
		</div>
		<div class="header-input">
      <img src="@/assets/icon/search.png" class="icon-search">
			输入城市/景点/游玩主题
		</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <img src="@/assets/icon/arrow_down.png" class="icon-down">
      </div>
    </router-link>
	</div>
</template>

<script>
export default {
name : 'HomeHeader',
props: {
  city: String
}
}
</script>

<style lang="stylus" scoped>
.header
    display: flex
    line-height: .90rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
      .icon-back
        width: .60rem
        height: .60rem
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .icon-search
        width: .50rem
        height: .50rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .icon-down
        width: .50rem
        height: .50rem
        margin-left: -.04rem
        font-size: .24rem
</style>