<template>
	<div>
		<div class="title">周末去哪儿~~</div>
		<ul>	
			<li 
				class="item border-bottom" 
				v-for="item of list"
				:key="item.id"
			>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>	
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
 	@import '~styles/mixins.styl'
	.title
		font-size: 16px;
		line-height: .8rem;
		background-color: #eee;
		text-indent: .2rem;
	.item-img-wrapper
		height: 0;
		overflow: hidden;
		padding-bottom: 37.09%;
		.item-img
			width: 100%;
	.item-info
		padding: .1rem;
		.item-title
			ellipsis()
			left: .54rem;
			font-size: .34rem;
			margin: .08rem;
		.item-desc
			ellipsis()
			line-height: .4rem;
			color: #ccc;
			margin: .1rem;
</style>