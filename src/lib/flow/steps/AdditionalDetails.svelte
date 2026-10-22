<script lang="ts">
	import FormField from '../components/FormField.svelte';
	import type { StepProps } from '../types';

	let { data, copy, onupdate }: StepProps = $props();
</script>

<div class="flex flex-col gap-3">
	<FormField
		label={copy.fields.company.label}
		placeholder={copy.fields.company.placeholder}
		value={data.company}
		oninput={(value) => onupdate('company', value)}
	/>
	<FormField
		label={copy.fields.role.label}
		placeholder={copy.fields.role.placeholder}
		value={data.role}
		oninput={(value) => onupdate('role', value)}
	/>
</div>
