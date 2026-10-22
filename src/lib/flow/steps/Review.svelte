<script lang="ts">
	import type { FormValues, StepProps } from '../types';

	let { data, copy }: StepProps = $props();

	const fields = ['name', 'email', 'message', 'company', 'role'] satisfies (keyof FormValues)[];
</script>

<dl class="divide-y divide-field-border">
	{#each fields as field (field)}
		<div class="py-3 first:pt-0 last:pb-0">
			<dt class="text-[11px] text-ink-muted">{copy.fields[field].label}</dt>
			<dd class="mt-1 whitespace-pre-wrap text-[13px] leading-[1.5] [overflow-wrap:anywhere]">
				{data[field].trim() ? data[field] : copy.review.notProvided}
			</dd>
		</div>
	{/each}
</dl>
