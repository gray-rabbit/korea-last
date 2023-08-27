<script lang="ts">
	import { onMount } from 'svelte';
	import Textimpact from '$components/textimpact.svelte';
	import { synth } from '$lib/speech';
	const datas = ['가', '나', '다', '라', '마', 'ㅇ', '강', '낭', '당', '랑', '망'];
	const datas2 = ['버', '서', '저', '터', '퍼', 'ㅇ', '벙', '성', '정', '텅', '펑'];
	function play_element_value_by_slow(e: MouseEvent) {
		const el = e.target as HTMLParagraphElement | HTMLSpanElement;
		let value = el.dataset.text ?? '';
		synth(value, 0.5);
	}
</script>

<div class="pt-4 px-4">
	<div class="badge badge-secondary text-xl">이해하기</div>

	<div class="border-2 rounded-lg p-2 border-gray-400">
		<p class="text-2xl">
			ㅇ(이<Textimpact classstring="text-blue-500">응</Textimpact>)받침에서 <Textimpact
				classstring="text-blue-500">/응/</Textimpact
			> 소리가 나요.
		</p>
	</div>
	<br />
	<p class="text-3xl">'ㅇ'의 소리를 눌러서 확인하세요.</p>
	<div class="border-2 rounded-lg flex w-full justify-center py-5">
		<div class="flex justify-center items-center min-w-[100px] bg-blue-100 rounded-xl">
			<button
				data-text="ㅇ"
				class="text-9xl hover:bg-gray-200"
				on:click={play_element_value_by_slow}>ㅇ</button
			>
		</div>
		<div class="flex flex-col justify-center items-center min-w-[100px]">
			<button
				class="text-2xl border p-2 rounded-xl bg-blue-200"
				data-text="이"
				on:click={play_element_value_by_slow}>이</button
			>
			<button
				class="text-6xl border p-2 mt-2 rounded-xl bg-blue-300"
				data-text="응"
				on:click={play_element_value_by_slow}
			>
				응
			</button>
		</div>
	</div>
	<!-- <div class="flex justify-center my-5">
		<button class="btn btn-primary">알겠어요!</button>
	</div> -->
	<br />

	<div class="grid grid-cols-6 text-4xl bg-gray-200 p-2 text-center border-2 border-blue-200">
		<div />
		{#each datas as data, idx}
			{#if idx > 5}
				<button
					class="btn btn-ghost hover:text-4xl"
					class:hover:4-xl={idx > 4}
					data-text={data}
					on:click={play_element_value_by_slow}>ㅇ</button
				>
			{:else}
				<button
					class="btn btn-ghost text-4xl"
					class:hover:4-xl={idx > 4}
					data-text={data}
					on:click={play_element_value_by_slow}>{data}</button
				>
			{/if}
		{/each}
	</div>
	<br />
	<div class="grid grid-cols-6 text-4xl bg-gray-200 p-2 text-center border-2 border-blue-200">
		<div />
		{#each datas2 as data, idx}
			{#if idx > 5}
				<button
					class="btn btn-ghost hover:text-4xl"
					class:hover:4-xl={idx > 4}
					data-text={data}
					on:click={play_element_value_by_slow}>ㅇ</button
				>
			{:else}
				<button
					class="btn btn-ghost text-4xl"
					class:hover:4-xl={idx > 4}
					data-text={data}
					on:click={play_element_value_by_slow}>{data}</button
				>
			{/if}
		{/each}
	</div>
	<div class="flex justify-center my-5">
		<a class="btn btn-primary" href="2">다음으로</a>
	</div>
</div>
