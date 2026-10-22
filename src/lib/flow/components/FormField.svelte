<script lang="ts">
	type Props = {
		label: string;
		value: string;
		placeholder?: string;
		type?: 'text' | 'email';
		multiline?: boolean;
		oninput: (value: string) => void;
	};

	let { label, value, placeholder = label, type = 'text', multiline = false, oninput }: Props =
		$props();

	const fieldClass =
		'w-full rounded-button-lg border-[0.5px] border-field-border bg-surface px-3 text-[13px] text-ink shadow-[0_1px_3px_rgb(40_37_22/0.06)] outline-none transition-colors placeholder:font-[350] placeholder:text-placeholder hover:bg-field-hover focus:border-accent focus:ring-[1px] focus:ring-inset focus:ring-accent motion-reduce:transition-none';
</script>

<label class="block min-w-0">
	<span class="sr-only">{label}</span>
	{#if multiline}
		<textarea
			{value}
			{placeholder}
			autocomplete="off"
			rows="4"
			oninput={(event) => oninput(event.currentTarget.value)}
			class="{fieldClass} block min-h-28 resize-y py-3 leading-[1.5]"
		></textarea>
	{:else}
		<input
			{value}
			{placeholder}
			{type}
			autocomplete="off"
			oninput={(event) => oninput(event.currentTarget.value)}
			class="{fieldClass} box-border h-10 leading-none"
		/>
	{/if}
</label>
