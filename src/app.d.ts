import type { Locale } from '$lib/i18n/locale';

declare global {
	namespace App {
		interface Locals {
			locale: Locale;
		}
	}
}

export {};
