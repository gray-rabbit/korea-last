<script lang="ts">
	import { make_recognizor } from '$lib/speech';
	import { createEventDispatcher, onMount } from 'svelte';
	export let word: string;
	const dispatch = createEventDispatcher();
	let recog: any;
	let modal: HTMLDialogElement;
	let is_recoging = false;
	onMount(() => {
		recog = make_recognizor();
		recog.onresult = (event: any) => {
			let result = event.results[0][0].transcript;
			dispatch('recog_result', result);
		};
		recog.onend = (event: any) => {
			close_modal();
		};
		// recog.on
	});

	function show_modal() {
		modal.showModal();
		recog.start();
		is_recoging = true;
	}
	function close_modal() {
		modal.close();
		is_recoging = true;
	}

	function abort_recog() {
		recog.abort();
		close_modal();
	}
</script>

<button class="btn btn-ghost bg-gray-200 btn-lg mt-5" on:click={show_modal}
	><img src="/images/mic.svg" alt="mic" /></button
>
<dialog id="my_modal_1" class="modal" bind:this={modal}>
	<form method="dialog" class="modal-box flex flex-col items-center">
		<h3 class="font-bold text-lg">녹음중입니다.</h3>
		<p class="py-4">단어를 말해주세요.</p>
		<img src="/images/mic.svg" class="w-20" alt="마이크" />
		<div class="modal-action">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn btn-danger" on:click={abort_recog}>녹음강제종료</button>
		</div>
	</form>
</dialog>
<div />
