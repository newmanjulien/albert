# Albert

A standalone multi-step form prototype using Svelte 5, SvelteKit, TypeScript, Vite, and Tailwind CSS. The layout and controls follow the login screen in `oceans-agreed`.

## Run locally

Use Node.js 22.12.0 or later and npm:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. No environment variables or backend setup are needed.

```sh
npm run check
npm run build
npm run preview
```

The project uses the same Vercel adapter as the source project. It has not been deployed.

## Flow

Introduction → contact details → additional details → review → completion. The introduction shares the form's layout, with a centered title and description and a Get started button. Introduction and completion are content screens, rendered without a form. Empty and malformed entries are allowed. Return appears near the top of the white panel on every screen, aligned with the form's left edge. On the first screen, it links to the placeholder `https://example.com`; change `returnUrl` in `src/lib/flow/FormFlow.svelte` to set the destination. On later screens, it returns to the previous step and preserves the entered values. Start over clears them and returns to the introduction. Refresh starts a fresh flow.

Values live only in the `FormFlow.svelte` component's memory. Form submissions are prevented, and there is no authentication, API, database, analytics, logging of values, or storage of form data. Autocomplete is disabled on the form and its fields.

## Languages

The form supports English and French. The language button names the language it switches to. Switching updates all interface text, accessible labels, page metadata, and the document language while preserving the current step and entered values. Start over clears the values and keeps the selected language.

English is the default. An explicit choice is remembered for one year in the `albert-locale` cookie, which contains only `en` or `fr`. The server reads it for the initial page render, so refreshing opens a fresh form in the selected language without an English flash. Unsupported cookie values fall back to English.

Interface copy lives in `src/lib/i18n/en.ts` and `fr.ts`. Both dictionaries are checked against the shared `Messages` type; field labels are reused on the review screen. Form field keys, step IDs, values, navigation, and images are independent of language. No translation library or localized routes are needed.

## Add or change a screen

1. For screens with body content, create a component in `src/lib/flow/steps/`. Form screens receive data, translated `copy`, and `onupdate(field, value)` through `StepProps` in `src/lib/flow/types.ts`. Content screens receive only translated `copy` through `ContentStepProps`; screens with just a title, description, and button need no component.
2. Add its stable ID to `FlowStepId`, and its ID, `kind` (`form` or `content`), local image path, and `nextAction` to the ordered registry in `src/lib/flow/steps.ts`. Form screens require a component; content screens can optionally have one. Use `headingAlign: 'center'` to center its title and description; headings otherwise align left. Add its title and description to both language dictionaries. The `startOver` action clears the values and returns to the introduction. Screens after the first get Return navigation to the previous step automatically.
3. For new fields, extend `FormValues` and `createEmptyValues()` in `types.ts`, add their labels and placeholders to both dictionaries, and add the fields to the review screen as needed.

`FormFlow.svelte` owns data and navigation; `SplitShell.svelte` owns the responsive layout. On desktop, each screen uses a locally bundled image in a separate rounded panel to the right of the form. Images are centered and cropped to cover that panel. Desktop images load once at startup so moving between screens does not request more images. Images are hidden below 1024px and are not downloaded on a mobile-sized initial visit. Image filenames and their original names are in `static/images/README.md`.
