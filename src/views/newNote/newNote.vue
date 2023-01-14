<template>
	<div>
		<b-button class="action-button" v-on:click="startScan()">Start</b-button>
		<div class="camera-container text-center">
			<video
				id="camera-view"
				ref="camera">
			</video>

			<!--<canvas 
				id="canvas"
				ref="canvas"
				:height="337"
				:width="450">
			</canvas>-->
			<br/>
			<span>Aproxime o QR code do seu cupom fiscal!</span>

			<b-button class="action-button" v-on:click="stopScan()">Stop</b-button>
		</div>
	</div>
</template>

<script type="application/javascript" scoped src="./newNote.js"></script>
<style lang="scss" scoped src="./newNote.scss"></style>