<script lang="ts">
	import { synth, make_recognizor } from '$lib/speech';
	import { onMount } from 'svelte';
	let koreans = ['고양이', '강아지', '병아리', '닭'];
	let current_idx = 0;
	let modal: HTMLDialogElement;
	function speak() {
		synth(koreans[current_idx]);
	}
	let recog;

	function start_recog() {
		console.log('시작');
		if (recog) recog.start();
	}

	function show_modal() {
		if (modal) modal.showModal();
		else return;
		start_recog();
	}
	function close_modal() {
		if (modal) modal.close();
		else return;
	}
	onMount(() => {
		recog = make_recognizor();
		console.log(recog);
		recog.onresult = (e) => {
			console.log(e);
			close_modal();
		};
	});
</script>

<p class="text-2xl text-red-300">
	글자를 눌러 소리를 들어보세요. 그리고 따라해 봅시다.
	<button on:click={() => synth('글자를 눌러 소리를 들어보세요. 그리고 따라해 봅시다.')}>
		<img src="/images/headphone.png" class="w-5" /></button
	>
</p>
<div class="flex justify-center">
	<img src="/images/cat.jpg" class="object-scale-down max-h-[360px]" alt="Shoes" />
</div>
<div id="ch_container" class="text-center flex justify-center">
	<button class="flex justify-center border-4 rounded-3xl" aria-label="응?">
		{#each koreans[current_idx] as korean}
			<button
				class="text-6xl p-6 sm:text-8xl sm:p-10 border-2"
				on:click|preventDefault={() => synth(korean)}>{korean}</button
			>
		{/each}
	</button>
</div>
<div class="text-center mt-10 grid grid-cols-2 md:grid-cols-6">
	<button class="btn btn-secondary md:col-start-2 md:col-end-4" on:click={speak}
		>한번에 듣기<img src="/images/listen.svg" class="w-10" /></button
	>
	<button class="btn btn-error text-white md:col-start-4 md:col-end-6" on:click={show_modal}
		>말하기<img src="/images/mic.svg" class="w-10" /></button
	>
</div>

<dialog id="my_modal_1" class="modal" bind:this={modal}>
	<form method="dialog" class="modal-box flex flex-col items-center">
		<h3 class="font-bold text-lg">녹음중입니다.</h3>
		<p class="py-4">단어를 말해주세요.</p>
		<img src="/images/mic.svg" class="w-20" alt="마이크" />
		<div class="modal-action">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">Close</button>
		</div>
	</form>
</dialog>

<style>
	.large-font {
		font-size: 100px;
	}
</style>
