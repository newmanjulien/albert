import type { Messages } from './types';

export const en = {
	common: {
		return: 'Return',
		start: 'Get started',
		continue: 'Continue',
		finish: 'Finish',
		startOver: 'Start over',
		otherLanguage: 'Français',
		switchLanguage: 'Switch to French'
	},
	metaDescription: 'A simple multi-step form.',
	steps: {
		introduction: {
			title: "Let's get to know you",
			description: 'Share a little about yourself in a few simple steps. You can review your details before you finish.'
		},
		'contact-details': {
			title: 'Contact details',
			description: "Let's start with a few details. Add a few more details, or continue as you are."
		},
		'additional-details': {
			title: 'A little more about you',
			description: 'Add a few more details, or continue as you are.'
		},
		review: {
			title: 'Review your details',
			description: 'Take a look before you finish.'
		},
		completion: {
			title: "You're all done",
			description: 'Thanks for taking a moment.'
		}
	},
	fields: {
		name: { label: 'Name', placeholder: 'Name' },
		email: { label: 'Email', placeholder: 'Email' },
		message: { label: 'Message', placeholder: 'Message' },
		company: { label: 'Company', placeholder: 'Company (optional)' },
		role: { label: 'Role', placeholder: 'Role (optional)' }
	},
	review: { notProvided: 'Not provided' },
	completion: { body: "You can start over whenever you're ready." }
} satisfies Messages;
