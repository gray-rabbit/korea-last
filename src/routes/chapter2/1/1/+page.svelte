<script lang="ts">
	import { onMount } from 'svelte';
	import Textimpact from '$components/textimpact.svelte';
	import { synth } from '$lib/speech';

	function play_element_value_by_slow(e: MouseEvent) {
		const el = e.target as HTMLParagraphElement | HTMLSpanElement;
		const value = el.innerText;
		synth(value, 0.5);
	}
</script>

<div class="pt-4 px-4">
	<div class="badge badge-secondary text-xl">이해하기</div>

	<div class="border-2 rounded-lg p-2 border-gray-400">
		<p class="text-2xl">
			ㅁ(미<Textimpact classstring="text-blue-500">음</Textimpact>)받침에서 <Textimpact
				classstring="text-blue-500">/음/</Textimpact
			> 소리가 나요.
		</p>
	</div>
	<br />
	<p class="text-3xl">'ㅁ'의 소리를 눌러서 확인하세요.</p>
	<div class="border-2 rounded-lg flex w-full justify-center py-5">
		<div class="flex justify-center items-center min-w-[100px] bg-blue-100 rounded-xl">
			<button class="text-9xl hover:bg-gray-200" on:click={play_element_value_by_slow}>ㅁ</button>
		</div>
		<div class="flex flex-col justify-center items-center min-w-[100px]">
			<button
				class="text-2xl border p-2 rounded-xl bg-blue-200"
				on:click={play_element_value_by_slow}>미</button
			>
			<button
				class="text-6xl border p-2 mt-2 rounded-xl bg-blue-300"
				on:click={play_element_value_by_slow}
			>
				음
			</button>
		</div>
	</div>
	<!-- <div class="flex justify-center my-5">
		<button class="btn btn-primary">알겠어요!</button>
	</div> -->
	<br />

	<div class="grid grid-cols-6 text-4xl bg-gray-200 p-2 text-center border-2 border-blue-200">
		<div />
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>가</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>나</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>다</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>라</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>마</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('감', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('남', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('담', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('람', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('맘', 0.5)}>ㅁ</button>
	</div>
	<br />
	<div class="grid grid-cols-6 text-4xl bg-gray-200 p-2 text-center border-2 border-blue-200">
		<div />
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>버</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>서</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>저</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>터</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>퍼</button>
		<button class="btn btn-ghost text-4xl" on:click={play_element_value_by_slow}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('범', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('섬', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('점', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('텀', 0.5)}>ㅁ</button>
		<button class="btn btn-ghost hover:text-4xl" on:click={() => synth('펌', 0.5)}>ㅁ</button>
	</div>
	<div class="flex justify-center my-5">
		<a class="btn btn-primary" href="2">다음으로</a>
	</div>
</div>
