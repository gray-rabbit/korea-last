<script lant="ts">
	import { goto } from '$app/navigation';
	const last_sounds = ['ㅁ', 'ㅂ', 'ㅇ', 'ㄱ', 'ㄴ', 'ㄹ', 'ㄷ'];
</script>

<div class="h-screen w-screen flex flex-col justify-center items-center">
	<div class="text-4xl border-2 border-gray-500 p-4 w-[200px] sm:w-[360px] rounded-xl text-center">
		<p>받침</p>
		<p class="text-2xl">(종성 익히기)</p>
	</div>
	<br />
	<div class="text-4xl flex flex-wrap justify-center">
		{#each last_sounds as last_sound, idx}
			<button
				class="btn btn-circle btn-accent text-4xl mx-2"
				on:click={() => {
					goto('chapter2/' + (idx + 1) + '/1');
				}}>{last_sound}</button
			>
		{/each}
	</div>
</div>
