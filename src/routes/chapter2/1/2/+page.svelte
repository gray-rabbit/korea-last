<script lang="ts">
	import { synth, make_recognizor } from '$lib/speech';
	import { onMount } from 'svelte';
	import Textimpact from '$components/textimpact.svelte';
	import * as Hangul from 'hangul-js';
	import MicRecog from '$lib/components/MicRecog.svelte';
	import Feedback from '$lib/components/feedback.svelte';
	let recog;
	let current_idx = 8;
	let finished = false;
	let koreans = ['밤', '점', '금', '숨', '햄', '꿈', '점심', '샴푸', '임금님'];
	$: current_word = koreans[current_idx];
	$: temp_word = Hangul.disassemble(current_word);
	function parser(word: string) {
		let a = Hangul.disassemble(word);
		let first = '';
		if (a.length >= 2) {
			first = Hangul.assemble([a[0], a[1]]);
		}

		let second = ' ';
		if (a.length >= 4) {
			second = Hangul.assemble([a[2], a[3]]);
		} else if (a.length == 3) {
			second = a[2];
		}
		return [first, second];
	}

	function recog_result(e: CustomEvent) {
		console.log(e.detail);
		const result = e.detail;
		if (result == current_word) {
			console.log('맞음');
			positive = true;
			// current_idx++;
			// current_word = koreans[current_idx];
		} else {
			console.log('틀림');
			positive = false;
		}
		give_positive();
	}

	let show_feedback = false;
	let positive = false;
	function give_positive() {
		show_feedback = true;
	}
	function feedback_ended_handler() {
		show_feedback = false;
		if (positive) {
			if (current_idx == koreans.length - 1) {
				// current_idx = 0;
				//모든 단어를 다 맞추었다면?
				finished = true;
			} else {
				current_idx++;
			}
		}
	}
</script>

<div class="pt-4 px-4">
	<div class="badge badge-secondary text-xl">읽기</div>
	<div class="border-2 rounded-lg p-2 border-gray-400">
		<p class="text-2xl">다음에 나타나는 단어들을 읽어 보세요.</p>
	</div>
	<br />
	<br />
	<br />
	{#if finished === false}
		<div class="flex-1 flex flex-col justify-center items-center">
			<button class="flex">
				{#each current_word as ch}
					<div class="bg-blue-100 rounded-lg text-8xl p-2 min-w-[200px] text-center">
						{#each parser(ch) as ch2, idx}
							<p class:text-red-400={idx} class="text-black m-8 my-0">{ch2}</p>
						{/each}
						<!-- <p class="text-black m-8 mb-0">바</p>
                <p class="text-green-500 m-8 mt-0">ㅁ</p> -->
					</div>
				{/each}
			</button>

			<MicRecog word={current_word} on:recog_result={recog_result} />
		</div>
	{/if}
</div>
{#if show_feedback}
	<Feedback positive={true} on:feedback_end={feedback_ended_handler} />
{/if}
