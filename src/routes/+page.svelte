<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>시작화면</title>
	<meta name="description" content="한글종성" />
</svelte:head>
<main class="h-screen flex">
	<div class="w-full overflow-hidden flex flex-1">
		<picture
			class="flex felx-1 overflow-hidden object-cover justify-center items-center"
			on:click={() => goto('about')}
		>
			<source media="(max-width: 799px)" srcset="/images/mobile.png" />
			<source media="(min-width: 800px)" srcset="/images/hd.png" />
			<img src="/images/hd.png" class="" alt="DD" />
		</picture>
	</div>
</main>

<style>
</style>
