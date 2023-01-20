<template>
	<div>
		<b-navbar id="topbar" toggleable="lg" type="dark">
			<b-navbar-brand href="#">
				<img id="logo" src="@/assets/images/logo.svg" alt="Logo">
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item v-on="signUp()">Sign up</b-nav-item>
					<b-nav-item v-on="signIn()">Sign in</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script type="application/javascript" scoped src="./topBar.js"></script>
<style lang="scss" scoped src="./topBar.scss"></style>