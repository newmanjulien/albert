import { en } from './en';
import { fr } from './fr';
import type { Locale } from './locale';
import type { Messages } from './types';

export const messages = { en, fr } satisfies Record<Locale, Messages>;
