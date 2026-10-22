import type { Component } from 'svelte';
import type { Messages } from '$lib/i18n/types';

export type FlowStepId =
	| 'introduction'
	| 'contact-details'
	| 'additional-details'
	| 'review'
	| 'completion';

export type FormValues = {
	name: string;
	email: string;
	message: string;
	company: string;
	role: string;
};

export type ContentStepProps = {
	copy: Messages;
};

export type StepProps = ContentStepProps & {
	data: FormValues;
	onupdate: (field: keyof FormValues, value: string) => void;
};

export type FlowStep = {
	id: FlowStepId;
	image: string;
	headingAlign?: 'left' | 'center';
	nextAction: 'start' | 'continue' | 'finish' | 'startOver';
} & (
	| { kind: 'form'; component: Component<StepProps> }
	| { kind: 'content'; component?: Component<ContentStepProps> }
);

export function createEmptyValues(): FormValues {
	return { name: '', email: '', message: '', company: '', role: '' };
}
