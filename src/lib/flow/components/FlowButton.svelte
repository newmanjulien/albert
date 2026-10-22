<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		type = 'button',
		onclick
	}: {
		children: Snippet;
		type?: 'button' | 'submit';
		onclick?: () => void;
	} = $props();
</script>

<button
	{type}
	{onclick}
	class="inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-button-lg bg-accent px-3 text-[13px] text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
>
	{@render children()}
</button>
