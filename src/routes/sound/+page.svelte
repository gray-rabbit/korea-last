<script lang="ts">
	import { onMount } from 'svelte';
	import { synth } from '$lib/speech';
	import * as PIXI from 'pixi.js';

	let basic_korean = ['읔', '은', '을', '르', '믄', '브', '응'];
	let basic_sound = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'];
</script>

<div id="test" />
{#each basic_sound as korean, idx}
	<div>
		<button on:click={() => synth(basic_korean[idx])}>{korean}</button>
	</div>
{/each}
