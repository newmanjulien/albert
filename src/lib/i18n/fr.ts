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
	metaDescription: 'Un formulaire simple en plusieurs étapes.',
	steps: {
		introduction: {
			title: 'Faisons connaissance',
			description: 'Parlez-nous un peu de vous en quelques étapes simples. Vous pourrez vérifier vos renseignements avant de terminer.'
		},
		'contact-details': {
			title: 'Vos coordonnées',
			description: 'Commençons par quelques renseignements. Ajoutez des détails ou passez à la suite.'
		},
		'additional-details': {
			title: 'Un peu plus sur vous',
			description: 'Ajoutez quelques renseignements ou passez à la suite.'
		},
		review: {
			title: 'Vérifiez vos renseignements',
			description: 'Prenez un moment pour les vérifier avant de terminer.'
		},
		completion: {
			title: 'Tout est terminé',
			description: 'Merci d’avoir pris le temps.'
		}
	},
	fields: {
		name: { label: 'Nom', placeholder: 'Nom' },
		email: { label: 'Courriel', placeholder: 'Courriel' },
		message: { label: 'Message', placeholder: 'Message' },
		company: { label: 'Entreprise', placeholder: 'Entreprise (facultatif)' },
		role: { label: 'Fonction', placeholder: 'Fonction (facultatif)' }
	},
	review: { notProvided: 'Non renseigné' },
	completion: { body: 'Vous pouvez recommencer quand vous le souhaitez.' }
} satisfies Messages;
