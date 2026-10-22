import ContactDetails from './steps/ContactDetails.svelte';
import AdditionalDetails from './steps/AdditionalDetails.svelte';
import Review from './steps/Review.svelte';
import Completion from './steps/Completion.svelte';
import type { FlowStep } from './types';

export const steps = [
	{
		id: 'introduction',
		kind: 'content',
		headingAlign: 'center',
		image: '/images/coffee-farmer-portrait.webp',
		nextAction: 'start'
	},
	{
		id: 'contact-details',
		kind: 'form',
		component: ContactDetails,
		image: '/images/coffee-farmer-portrait.webp',
		nextAction: 'continue'
	},
	{
		id: 'additional-details',
		kind: 'form',
		component: AdditionalDetails,
		image: '/images/coffee-sorting-team.webp',
		nextAction: 'continue'
	},
	{
		id: 'review',
		kind: 'form',
		component: Review,
		image: '/images/gisheke-coffee-drying.webp',
		nextAction: 'finish'
	},
	{
		id: 'completion',
		kind: 'content',
		component: Completion,
		image: '/images/rwanda-coffee-hills.webp',
		nextAction: 'startOver'
	}
] satisfies FlowStep[];
