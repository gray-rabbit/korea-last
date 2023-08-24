<script lang="ts">
	import { goto } from '$app/navigation';
	import MicRecog from '$lib/components/MicRecog.svelte';
	import Feedback from '$lib/components/feedback.svelte';
	import Textimpact from '$lib/components/textimpact.svelte';
	const question_data = [
		{ answer: '염소', wrong: '영소' },
		{ answer: '감자', wrong: '갑자' },
		{ answer: '구름', wrong: '구릉' },
		{ answer: '수첩', wrong: '수철' },
		{ answer: '집게', wrong: '짐게' },
		{ answer: '서랍', wrong: '서랑' },
		{ answer: '강가', wrong: '감가' },
		{ answer: '야구공', wrong: '야구골' },
		{ answer: '늑대', wrong: '늡대' },
		{ answer: '국자', wrong: '굴자' },
		{ answer: '축구공', wrong: '충구겅' },
		{ answer: '책상', wrong: '챙상' },
		{ answer: '기린', wrong: '기링' },
		{ answer: '분수', wrong: '불수' },
		{ answer: '고릴라', wrong: '고를라' },
		{ answer: '갈매기', wrong: '간매기' },
		{ answer: '만두', wrong: '맘두' },
		{ answer: '솔방울', wrong: '송방울' },
		{ answer: '돋보기', wrong: '돈보기' },
		{ answer: '걷다', wrong: '걸다' }
	];
	let current_idx = 0;

	let random_idx = Math.floor(Math.random() * 2);
	$: {
		current_idx;
		random_idx = Math.floor(Math.random() * 2);
		console.log(random_idx);
	}
	let answer = '';
	let positive = false;
	let show_feedback = false;
	function recog_result(e: CustomEvent) {
		console.log(e.detail);
		answer = e.detail;

		if (answer == question_data[current_idx].answer) {
			console.log('맞음');
			positive = true;
		} else {
			positive = false;
		}
		display_feedback();
	}
	function display_feedback() {
		show_feedback = true;
	}

	function feedback_ended_handler() {
		show_feedback = false;
		if (positive) {
			if (current_idx == question_data.length - 1) {
				// current_idx = 0;
				goto('/about');
			} else {
				current_idx++;
			}
		}
	}
</script>

<div class="pt-4 px-4">
	<div class="badge badge-secondary text-xl">확인하기</div>

	<div class="border-2 rounded-lg p-2 border-gray-400">
		<p class="text-2xl">다음의 그림에 알맞은 낱말을 읽어보세요.</p>
	</div>
</div>

<div class="image_displayer">
	<img
		src={`/images/${question_data[current_idx].answer}.png`}
		alt={`${question_data[current_idx].answer}`}
		class="m-auto border-2 p-5 mt-3 rounded-xl border-gray-400 drop-shadow-lg"
	/>
</div>
<br />
<div class="flex justify-center mt-4">
	<div class=" text-5xl">
		{#if random_idx}
			<span
				class="border-2 border-green-200 rounded-xl p-5 px-4"
				class:bg-green-200={answer == question_data[current_idx].answer}
				>{`${question_data[current_idx].answer}`}</span
			>
			<span
				class="border-2 border-green-200 rounded-xl p-5 px-4"
				class:bg-red-200={answer == question_data[current_idx].wrong}
				>{`${question_data[current_idx].wrong}`}</span
			>
		{:else}
			<span
				class="border-2 border-green-200 rounded-xl p-5 px-4"
				class:bg-red-200={answer == question_data[current_idx].wrong}
				>{`${question_data[current_idx].wrong}`}</span
			>
			<span
				class="border-2 border-green-200 rounded-xl p-5 px-4"
				class:bg-green-200={answer == question_data[current_idx].answer}
				>{`${question_data[current_idx].answer}`}</span
			>
		{/if}
	</div>
</div>
<br />
<div class="flex justify-center">
	<MicRecog on:recog_result={recog_result} word="" />
</div>

{#if show_feedback}
	<Feedback {positive} on:feedback_end={feedback_ended_handler} />
{/if}
