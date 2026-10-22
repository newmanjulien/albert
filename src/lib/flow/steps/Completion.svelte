<script lang="ts">
	import type { ContentStepProps } from '../types';

	let { copy }: ContentStepProps = $props();
</script>

<p class="text-center text-sm leading-[1.6] text-ink-muted">
	{copy.completion.body}
</p>
