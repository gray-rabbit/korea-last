<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	export let positive: boolean = true;
	const positive_urls = [
		'/images/positive/1.png',
		'/images/positive/2.png',
		'/images/positive/3.png'
	];

	const negative_urls = [
		'/images/negative/1.png',
		'/images/negative/2.png',
		'/images/negative/3.png'
	];
	let current_url_idx = 0;
	let current_url = '';
	let positive_sound: HTMLAudioElement | null = null;
	let negative_sound: HTMLAudioElement | null = null;
	const dispatch = createEventDispatcher();
	// let negative_sound = new Audio('/sounds/negative.mp3');
	$: if (positive) {
		current_url_idx = Math.floor(Math.random() * positive_urls.length);
		current_url = positive_urls[current_url_idx];
		if (positive_sound) positive_sound.play();
	} else {
		current_url_idx = Math.floor(Math.random() * negative_urls.length);
		current_url = negative_urls[current_url_idx];
		if (negative_sound) negative_sound.play();
	}
	onMount(() => {
		positive_sound = new Audio('/sounds/positive.mp3');
		negative_sound = new Audio('/sounds/negative.mp3');
		positive_sound.addEventListener('ended', () => {
			console.log('sound ended');
			dispatch('feedback_end');
		});
		negative_sound.addEventListener('ended', () => {
			console.log('sound ended');
			dispatch('feedback_end');
		});
	});
</script>

<dialog
	id="my_modal_1"
	class="modal justify-center bg-gray-700 bg-opacity-20 pb-[10em]"
	open
	use:autoAnimate
>
	<form method="dialog" class="modal-box">
		<img src={current_url} alt="피드백" class="m-auto" />
	</form>
</dialog>
