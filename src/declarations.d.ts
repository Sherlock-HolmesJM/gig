export const d = 3;

declare global {
	interface Window {
		theme: {
			darker: string;
			dark: string;
			light: string;
			lighter: string;
			lightest: string;
		};
	}
}
