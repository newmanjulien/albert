import type { Handle } from '@sveltejs/kit';
import { localeCookieName, resolveLocale } from '$lib/i18n/locale';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.locale = resolveLocale(event.cookies.get(localeCookieName));

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.locale)
	});
};
