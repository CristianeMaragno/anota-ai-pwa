<template>
	<div>
		<div class="text-center">
			<video 
				id="camera"
				ref="camera"
				autoplay>
			</video>

			<canvas 
				id="canvas"
				ref="canvas">
			</canvas>
			<br/>
			<span>Aproxime o QR code do seu cupom fiscal!</span>
		</div>
	</div>
</template>

<script type="application/javascript" scoped src="./newNote.js"></script>
<style lang="scss" scoped src="./newNote.scss"></style>