<script lang="ts">
	import { goto } from '$app/navigation';
	import Feedback from '$lib/components/feedback.svelte';
	let finished = false;
	const koreans = ['걷', '닫', '돋'];
	let current_idx = 0;
	const urls = ['걷다', '닫다', '돋보기'];
	const rest_korean = [' 다', ' 다', ' 보기'];
	let show_feedback = false;
	let positive = false;
	function dragStart(e: DragEvent) {
		if (e.dataTransfer) {
			const el = e.target as HTMLButtonElement;
			e.dataTransfer.setData('text', el.innerHTML);
			e.dataTransfer.dropEffect = 'move';
		}
		// console.log('dragStart');
	}
	function dragend(e: DragEvent) {
		// console.log('dragend');
	}
	function drop(e: DragEvent) {
		e.preventDefault();
		const data = e.dataTransfer?.getData('text') ?? '뷁';
		if (urls[current_idx].includes(data)) {
			positive = true;
			give_positive();
		} else {
			// positive = false;
		}

		// console.log('drop');
	}
	function dragOver(e: DragEvent) {
		e.preventDefault();
		if (e.dataTransfer) {
			e.dataTransfer.dropEffect = 'copy';
		}
		// console.log('dragOver');
	}
	function give_positive() {
		show_feedback = true;
	}

	function feedback_finished() {
		show_feedback = false;
		if (current_idx == urls.length - 1) {
			// console.log('끝남');
			finished = true;
			goto('/chapter2');
		} else {
			current_idx++;
		}
	}
</script>

<div class="pt-4 px-4">
	<div class="badge badge-secondary text-xl">단어찾기</div>
	<div class="border-2 rounded-lg p-2 border-gray-400">
		<p class="text-2xl">그림과 어울리는 단어를 보기에서 찾기</p>
	</div>
</div>
<br />
{#if !finished}
	<div class="border-4 rounded-lg text-center relative bg-green-100 m-2">
		<div class="badge bg-blue-300 absolute bottom-1 left-4">보기</div>
		{#each koreans as korean}
			<button
				class="m-2 rounded-lg border-2 border-gray-600 p-4 text-3xl sm:text-6xl"
				draggable="true"
				on:dragstart={dragStart}
				on:dragend={dragend}>{korean}</button
			>
		{/each}
	</div>

	<div class="">
		<img src={'/images/' + urls[current_idx] + '.png'} class=" max-h-[360px] m-auto" alt="Shoes" />
		<div class="flex flex-row justify-center">
			{#each rest_korean[current_idx] as ch}
				{#if ch == ' '}
					<p
						on:drop={drop}
						on:dragover={dragOver}
						class="text-3xl sm:text-6xl text-center border-2 border-gray-600 p-5 m-1 min-w-[90px]"
					>
						?
					</p>
				{:else}
					<p class="text-3xl sm:text-6xl text-center border-2 border-gray-600 p-5 m-1 min-w-[90px]">
						{ch}
					</p>
				{/if}
			{/each}
		</div>
	</div>
{/if}

{#if show_feedback}
	<Feedback {positive} on:feedback_end={feedback_finished} />
{/if}

<footer class="absolute bottom-1 left-0 w-screen flex justify-center">
	<a href="/chapter2" class="btn btn-error">건너뛰기</a>
</footer>
