<script>
	import { goto } from '$app/navigation';
</script>

<div id="container_main" class="min-h-screen flex flex-col">
	<div class="navbar bg-base-200 drop-shadow-lg">
		<div class="flex-1 md:block">
			<p class="btn btn-ghost normal-case text-xl flex-none" on:click={() => goto('/about')}>
				처음으로
			</p>
		</div>
		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					/></svg
				>
			</button>
		</div>
	</div>
	<main class="flex-1 flex flex-col">
		<slot />
	</main>
	<div class="footer" />
</div>

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
