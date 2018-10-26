<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>	
			<router-link tag="li"
				class="item border-bottom" 
				v-for="item of list"
				:key="item.id"
				:to="'/detail/' + item.id"
			>	
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
 	@import '~styles/mixins.styl'
	.title
		font-size:16px;
		margin-top: .2rem;
		line-height: .8rem;
		background-color: #eee;
		text-indent: .2rem;
	.item
		overflow: hidden;
		display: flex;
		height: 1.95rem;
		.item-img
			width: 1.7rem;
			height: 1.7rem;
			padding: .1rem;
		.item-info
			flex:1
			padding: .1rem;
			min-width:0
			.item-title
				ellipsis()
				left: .54rem;
				font-size: .34rem;
				margin: .08rem;
				margin-top: .1rem;
			.item-desc
				ellipsis()
				line-height: .4rem;
				color: #ccc;
				margin: .1rem;
			.item-button
				line-height: .44rem;
				margin-top: .16rem;
				color: #fff;
				background-color: #ff9300;
				padding: 0 .2rem;
				border-radius: .06rem
</style>