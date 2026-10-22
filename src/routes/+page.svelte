<script lang="ts">
	import FormFlow from '$lib/flow/FormFlow.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<FormFlow initialLocale={data.locale} />
