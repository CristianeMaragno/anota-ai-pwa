<template>
	<div class="text-center">
    <div v-for="note in notes" :key="note.id">
			<div>{{ note.place + "  " + note.totalPrice}}</div>
		</div>
	</div>
</template>

<script type="application/javascript" scoped src="./myNotes.js"></script>
<style lang="scss" scoped src="./myNotes.scss"></style>