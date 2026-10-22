<script lang="ts">
	import { asset } from '$app/paths';
	import type { Snippet } from 'svelte';

	let {
		children,
		navigation,
		languageControl,
		image,
		images
	}: {
		children: Snippet;
		navigation: Snippet;
		languageControl: Snippet;
		image: string;
		images: string[];
	} = $props();
</script>

<div class="entry-shell">
	<div class="entry-layout">
		<main class="entry-panel">
			<div class="entry-navigation">
				{@render navigation()}
				{@render languageControl()}
			</div>
			<div class="entry-content">
				{@render children()}
			</div>
		</main>

		<div class="entry-image" aria-hidden="true">
			{#each images as imagePath (imagePath)}
				<picture hidden={imagePath !== image}>
					<source media="(min-width: 1024px)" srcset={asset(imagePath)} />
					<img
						src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
						alt=""
						width="1600"
						height="2000"
					/>
				</picture>
			{/each}
		</div>
	</div>
</div>

<style>
	.entry-shell {
		min-height: 100dvh;
		background: var(--color-canvas);
		color: var(--color-ink);
	}

	.entry-layout {
		min-height: 100dvh;
	}

	.entry-panel {
		--panel-inline-padding: 24px;
		position: relative;
		box-sizing: border-box;
		display: flex;
		min-height: 100dvh;
		flex-direction: column;
		padding: 84px var(--panel-inline-padding) 32px;
		background: white;
	}

	.entry-navigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		top: 24px;
		inset-inline: var(--panel-inline-padding);
		margin-inline: auto;
	}

	.entry-navigation,
	.entry-content {
		max-width: 485px;
	}

	.entry-content {
		width: 100%;
		margin: auto;
	}

	.entry-image {
		display: none;
		overflow: hidden;
		background: var(--color-image-placeholder);
	}

	.entry-image img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 640px) {
		.entry-shell {
			padding: 8px;
		}

		.entry-layout,
		.entry-panel {
			min-height: calc(100dvh - 16px);
		}

		.entry-panel {
			border: 1px solid rgb(40 37 22 / 4%);
			border-radius: 12px;
		}
	}

	@media (min-width: 1024px) {
		.entry-layout {
			display: grid;
			grid-template-columns: minmax(0, 50.2%) minmax(0, 1fr);
		}

		.entry-panel {
			--panel-inline-padding: clamp(32px, 4vw, 64px);
			padding: clamp(84px, 8.6vh, 138px) var(--panel-inline-padding) 28px;
		}

		.entry-image {
			position: relative;
			display: block;
			border-radius: 12px;
		}
	}
</style>
