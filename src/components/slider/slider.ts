import type { ComponentProps, SvelteComponent } from 'svelte';

export type SliderProps<T extends SvelteComponent> = {
	items: Array<{
		id?: number;
		component?: T;
		img: string;
		props?: ComponentProps<T>;
	}>;
};
