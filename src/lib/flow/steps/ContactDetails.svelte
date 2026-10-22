<script lang="ts">
	import FormField from '../components/FormField.svelte';
	import type { StepProps } from '../types';

	let { data, copy, onupdate }: StepProps = $props();
</script>

<div class="flex flex-col gap-3">
	<FormField
		label={copy.fields.name.label}
		placeholder={copy.fields.name.placeholder}
		value={data.name}
		oninput={(value) => onupdate('name', value)}
	/>
	<FormField
		label={copy.fields.email.label}
		placeholder={copy.fields.email.placeholder}
		type="email"
		value={data.email}
		oninput={(value) => onupdate('email', value)}
	/>
	<FormField
		label={copy.fields.message.label}
		placeholder={copy.fields.message.placeholder}
		multiline
		value={data.message}
		oninput={(value) => onupdate('message', value)}
	/>
</div>
