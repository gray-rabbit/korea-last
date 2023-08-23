<script lang="ts">
	import { onMount } from 'svelte';
	let synth: null | SpeechSynthesis = null;
	onMount(() => {
		if ('speechSynthesis' in window) {
			synth = window.speechSynthesis;
		}
	});
</script>
