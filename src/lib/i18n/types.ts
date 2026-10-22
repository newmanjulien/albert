import type { FlowStepId, FormValues } from '$lib/flow/types';

export type Messages = {
	common: {
		return: string;
		start: string;
		continue: string;
		finish: string;
		startOver: string;
		otherLanguage: string;
		switchLanguage: string;
	};
	metaDescription: string;
	steps: Record<FlowStepId, { title: string; description: string }>;
	fields: Record<keyof FormValues, { label: string; placeholder: string }>;
	review: { notProvided: string };
	completion: { body: string };
};
