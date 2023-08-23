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
	let current_url_idx = 0;
	let current_url = '';
	let positive_sound: HTMLAudioElement | null = null;
	const dispatch = createEventDispatcher();
	// let negative_sound = new Audio('/sounds/negative.mp3');
	$: if (positive) {
		console.log('positive');
		current_url_idx = Math.floor(Math.random() * positive_urls.length);
		current_url = positive_urls[current_url_idx];
		if (positive_sound) positive_sound.play();
	}
	onMount(() => {
		positive_sound = new Audio('/sounds/positive.mp3');
		positive_sound.addEventListener('ended', () => {
			console.log('sound ended');
			dispatch('feedback_end');
		});
	});
</script>

<dialog id="my_modal_1" class="modal" open use:autoAnimate>
	<form method="dialog" class="modal-box">
		<img src={current_url} alt="피드백" class="m-auto" />
		<div class="modal-action text-center flex justify-center">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">닫기</button>
		</div>
	</form>
</dialog>
