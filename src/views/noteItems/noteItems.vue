<template>
	<div class="text-center">
		<div v-for="item in items" :key="item.id">
			<div>{{ item.itemName + "  " + item.totalPrice}}</div>
		</div>
	</div>
</template>

<script type="application/javascript" scoped src="./noteItems.js"></script>
<style lang="scss" scoped src="./noteItems.scss"></style>