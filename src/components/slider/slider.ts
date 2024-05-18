import type { ComponentProps, SvelteComponent } from 'svelte';

export type SliderProps<T extends SvelteComponent> = {
	showNumber?: boolean;
	getter: () => { current: number };
	setter: (value: number) => void;
	items: Array<{
		id?: number;
		component?: T;
		img: string;
		props?: ComponentProps<T>;
	}>;
};
