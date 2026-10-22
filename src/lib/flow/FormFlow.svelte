<script lang="ts">
	import { tick } from 'svelte';
	import ArrowLeftIcon from 'phosphor-svelte/lib/ArrowLeftIcon';
	import GlobeIcon from 'phosphor-svelte/lib/GlobeIcon';
	import { messages } from '$lib/i18n';
	import { localeCookieName, localeCookieMaxAge, type Locale } from '$lib/i18n/locale';
	import SplitShell from './SplitShell.svelte';
	import FlowButton from './components/FlowButton.svelte';
	import { steps } from './steps';
	import { createEmptyValues, type FlowStep, type FormValues } from './types';

	let { initialLocale }: { initialLocale: Locale } = $props();

	const images = [...new Set(steps.map((step) => step.image))];
	const returnUrl = 'https://example.com';
	let data = $state(createEmptyValues());
	let currentIndex = $state(0);
	let selectedLocale = $state<Locale | null>(null);
	let locale = $derived(selectedLocale ?? initialLocale);
	let otherLocale: Locale = $derived(locale === 'en' ? 'fr' : 'en');
	let copy = $derived(messages[locale]);
	let heading: HTMLHeadingElement;
	let step: FlowStep = $derived(steps[currentIndex]);
	let stepCopy = $derived(copy.steps[step.id]);

	$effect(() => {
		document.documentElement.lang = locale;
	});

	function switchLanguage() {
		selectedLocale = otherLocale;
		const secure = window.location.protocol === 'https:' ? '; Secure' : '';
		document.cookie = `${localeCookieName}=${selectedLocale}; Path=/; Max-Age=${localeCookieMaxAge}; SameSite=Lax${secure}`;
	}

	function updateField(field: keyof FormValues, value: string) {
		data[field] = value;
	}

	async function goTo(index: number) {
		currentIndex = Math.max(0, Math.min(index, steps.length - 1));
		await tick();
		heading.focus();
	}

	function handlePrimaryAction() {
		if (step.nextAction === 'startOver') {
			data = createEmptyValues();
			void goTo(0);
		} else {
			void goTo(currentIndex + 1);
		}
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		handlePrimaryAction();
	}
</script>

<svelte:head>
	<title>{stepCopy.title} · Lorem ipsum</title>
	<meta name="description" content={copy.metaDescription} />
</svelte:head>

{#snippet returnLabel()}
	<ArrowLeftIcon size={15.2} weight="regular" aria-hidden="true" />
	<span>{copy.common.return}</span>
{/snippet}

<SplitShell {images} image={step.image}>
	{#snippet navigation()}
		{#if currentIndex === 0}
			<a class="text-control" href={returnUrl}>{@render returnLabel()}</a>
		{:else}
			<button class="text-control" type="button" onclick={() => goTo(currentIndex - 1)}>
				{@render returnLabel()}
			</button>
		{/if}
	{/snippet}
	{#snippet languageControl()}
		<button
			class="text-control"
			type="button"
			title={copy.common.switchLanguage}
			aria-label={copy.common.switchLanguage}
			onclick={switchLanguage}
		>
			<GlobeIcon size={15.2} weight="regular" aria-hidden="true" />
			<span lang={otherLocale}>{copy.common.otherLanguage}</span>
		</button>
	{/snippet}

	<div class={step.headingAlign === 'center' ? 'text-center' : 'text-left'}>
		<h1
			bind:this={heading}
			tabindex="-1"
			class="m-0 text-[28.5px] font-[450] leading-[1.08] tracking-[-0.02em] outline-none sm:text-[clamp(26.6px,1.7575vw,34.2px)]"
		>
			{stepCopy.title}
		</h1>
		<p class="mt-3.5 text-sm font-[350] leading-[1.45] text-ink-muted">
			{stepCopy.description}
		</p>
	</div>

	{#if step.kind === 'form'}
		<form
			onsubmit={handleSubmit}
			novalidate
			autocomplete="off"
			class="mt-[clamp(30px,4.5vh,58px)]"
		>
			{#key step.id}
				<step.component {data} {copy} onupdate={updateField} />
			{/key}

			<div class="mt-9">
				<FlowButton type="submit">{copy.common[step.nextAction]}</FlowButton>
			</div>
		</form>
	{:else}
		{#if step.component}
			<div class="mt-[clamp(30px,4.5vh,58px)]">
				{#key step.id}
					<step.component {copy} />
				{/key}
			</div>
		{/if}
		<div class="mt-9">
			<FlowButton onclick={handlePrimaryAction}>{copy.common[step.nextAction]}</FlowButton>
		</div>
	{/if}
</SplitShell>

<style>
	.text-control {
		display: flex;
		align-items: center;
		gap: 7.6px;
		width: fit-content;
		min-height: 36px;
		padding: 0;
		border: 0;
		background: transparent;
		color: var(--color-ink-muted);
		font-size: 13.3px;
		font-weight: 400;
		line-height: 19px;
		text-decoration: none;
		cursor: pointer;
	}

	.text-control:hover {
		color: var(--color-ink);
	}

	.text-control:focus-visible {
		border-radius: 4px;
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}
</style>
