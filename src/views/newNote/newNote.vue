<template>
	<div>
		<b-button class="action-button" v-on:click="startScan()">Ler QR code</b-button>
		<br/>
		<span v-if="scanActive">Aproxime o QR code do seu cupom fiscal!</span>
		<br/>

		<div class="camera-container text-center">
			<video
				v-if="scanResult === null"
				id="camera-view"
				ref="camera">
			</video>

			<canvas 
				id="canvas-view"
				ref="canvas"
				hidden>
			</canvas>

			{{ response }}
		</div>
	</div>
</template>

<script type="application/javascript" scoped src="./newNote.js"></script>
<style lang="scss" scoped src="./newNote.scss"></style>