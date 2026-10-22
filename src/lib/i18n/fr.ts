import type { Messages } from './types';

export const fr = {
	common: {
		return: 'Retour',
		start: 'Commencer',
		continue: 'Continuer',
		finish: 'Terminer',
		startOver: 'Recommencer',
		otherLanguage: 'English',
		switchLanguage: 'Passer à l’anglais'
	},
	metaDescription: 'Lorem ipsum dolor sit amet.',
	steps: {
		introduction: {
			title: 'Lorem ipsum dolor sit amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		'contact-details': {
			title: 'Lorem ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.'
		},
		'additional-details': {
			title: 'Lorem ipsum dolor sit amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		review: {
			title: 'Lorem ipsum dolor sit',
			description: 'Lorem ipsum dolor sit amet.'
		},
		completion: {
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet.'
		}
	},
	fields: {
		name: { label: 'Lorem', placeholder: 'Lorem' },
		email: { label: 'Ipsum', placeholder: 'Ipsum' },
		message: { label: 'Dolor', placeholder: 'Dolor' },
		company: { label: 'Sit amet', placeholder: 'Sit amet (consectetur)' },
		role: { label: 'Adipiscing', placeholder: 'Adipiscing (elit)' }
	},
	review: { notProvided: 'Lorem ipsum' },
	completion: { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
} satisfies Messages;
