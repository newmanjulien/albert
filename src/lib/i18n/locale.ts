export type Locale = 'en' | 'fr';

export const localeCookieName = 'albert-locale';
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function resolveLocale(value: string | undefined): Locale {
	return value === 'fr' ? 'fr' : 'en';
}
