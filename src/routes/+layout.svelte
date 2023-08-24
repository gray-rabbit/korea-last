<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<slot />

<style>
	@font-face {
		font-family: CookieRunBold;
		src: url(/fonts/CookieRunBold.ttf);
	}
	body {
		height: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		font-family: 'CookieRunBold';
	}

	.app {
		/* min-height: 100vh; */
	}

	* {
		font-family: 'CookieRunBold';
	}
	.footer {
		background-color: black;
		height: 60px;
	}
</style>
