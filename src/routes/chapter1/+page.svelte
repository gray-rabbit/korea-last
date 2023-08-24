<script lang="ts">
	import { goto } from '$app/navigation';
	import MicRecog from '$lib/components/MicRecog2.svelte';
	import Feedback from '$lib/components/feedback.svelte';
	import { synth, make_recognizor } from '$lib/speech';
	let koreans = ['고양이', '강아지', '병아리', '닭'];
	let current_idx = 0;
	let show_feedback = false;
	let positive = false;
	function speak() {
		synth(koreans[current_idx]);
	}
	function recog_result(e: CustomEvent) {
		const result = e.detail;
		if (koreans[current_idx] == result) {
			console.log('정답');
			positive = true;
		}
		give_feedback();
	}
	function give_feedback() {
		show_feedback = true;
	}
	function feedback_ended_handler() {
		show_feedback = false;
		if (positive) {
			if (current_idx == koreans.length - 1) {
				//모든 단어를 다 맞추었다면?
				goto('/about');
			} else {
				current_idx++;
			}
		}
	}
</script>

<p class="text-2xl text-red-300">
	글자를 눌러 소리를 들어보세요. 그리고 따라해 봅시다.
	<button on:click={() => synth('글자를 눌러 소리를 들어보세요. 그리고 따라해 봅시다.')}>
		<img src="/images/headphone.png" class="w-5" /></button
	>
</p>
<div class="flex justify-center">
	<img
		src={`/images/${koreans[current_idx]}.jpg`}
		class="object-scale-down max-h-[320px]"
		alt="Shoes"
	/>
</div>
<div id="ch_container" class="text-center flex justify-center">
	<button class="flex justify-center border-4 rounded-3xl" aria-label="응?">
		{#each koreans[current_idx] as korean}
			<button
				class="text-6xl p-2 sm:text-8xl sm:p-4 border-2"
				on:click|preventDefault={() => synth(korean)}>{korean}</button
			>
		{/each}
	</button>
</div>
<div class="text-center mt-2 grid grid-cols-2 md:grid-cols-6">
	<button class="btn btn-secondary md:col-start-2 md:col-end-4" on:click={speak}
		>한번에 듣기<img src="/images/listen.svg" class="w-10" /></button
	>
	<MicRecog
		word=""
		on:recog_result={recog_result}
		class_text="btn btn-secondary md:col-start-4 md:col-end-6"
	/>
</div>
{#if show_feedback}
	<Feedback on:feedback_end={feedback_ended_handler} />
{/if}

<style>
	.large-font {
		font-size: 100px;
	}
</style>
