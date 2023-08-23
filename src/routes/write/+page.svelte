<script lang="ts">
	import type { CUDA_PATH_V11_0 } from '$env/static/private';
	import * as PIXI from 'pixi.js';
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';
	let app: PIXI.Application<PIXI.ICanvas> | null = null;
	let canvas: HTMLDivElement | null = null;
	onMount(() => {
		app = new PIXI.Application({ width: 1024, height: 256 });
		if (!canvas || !app) return;
		canvas.appendChild(app.view);
		PIXI.Assets.load('https://pixijs.com/assets/bg_grass.jpg').then((grassTexture) => {
			const grass = new PIXI.Sprite(grassTexture);
			const container = new PIXI.Container();
			if (!app) return;
			app?.stage.addChild(grass);
			grass.width = 1024;
			grass.height = 256;
			const style = new PIXI.TextStyle({
				fontFamily: 'CookieRunBold',
				fill: ['#ffffff', '#00ff99'],
				dropShadow: true,
				dropShadowColor: '#0000ff',
				fontSize: 100,
				fontWeight: 'bold'
			});
			const richText = new PIXI.Text('abc', style);
			container.addChild(richText);

			const circle = new PIXI.Graphics();
			circle.beginFill(0x9966ff);
			circle.drawCircle(0, 0, 32);
			circle.endFill();
			container.mask = richText;
			grass.mask = container;
			container.addChild(circle);
			app.stage.addChild(container);
			let drawing = false;
			app.stage.eventMode = 'static';
			app.stage.hitArea = app.screen;
			app.stage.on('pointerdown', (e) => {
				drawing = true;
			});
			app.stage.on('pointerup', (e) => {
				drawing = false;
			});
			app.stage.on('pointermove', (e) => {
				if (drawing == false) return;
				const circle = new PIXI.Graphics();
				circle.beginFill(0x9966ff);
				circle.drawCircle(e.global.x, e.global.y, 32);
				circle.endFill();
				container.addChild(circle);
			});
		});
	});
	let drawing = false;
</script>

<div id="container" bind:this={canvas} />
<p>안녕하세요?</p>
