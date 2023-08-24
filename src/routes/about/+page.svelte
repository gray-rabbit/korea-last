<script lang="ts">
	import { goto } from '$app/navigation';
	import '../styles.css';
</script>

<svelte:head>
	<title>한글한글 메뉴</title>
	<meta name="description" content="메뉴" />
</svelte:head>

<div class="h-screen w-screen flex flex-col justify-center items-center">
	<div class="text-4xl border-2 border-gray-500 p-4 w-[200px] sm:w-[360px] rounded-xl text-center">
		<p>음절 익히기</p>
		<div class="">
			<button class="btn btn-primary btn-block" on:click={() => goto('/chapter1')}>학습하기</button>
		</div>
	</div>
	<br />
	<div class="text-4xl border-2 border-gray-500 p-4 w-[200px] sm:w-[360px] rounded-xl text-center">
		<p>받침 익히기</p>
		<div class="">
			<button class="btn btn-primary btn-block" on:click={() => goto('/chapter2')}>학습하기</button>
		</div>
	</div>
	<br />
	<div class="text-4xl border-2 border-gray-500 p-4 w-[200px] sm:w-[360px] rounded-xl text-center">
		<p>낱말 읽기 게임</p>
		<div class="">
			<button class="btn btn-primary btn-block" on:click={() => goto('/chapter3')}>학습하기</button>
		</div>
	</div>
	<br />
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
</style>
