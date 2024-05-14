import type { SvelteComponent, ComponentProps  } from 'svelte';

export type TabsProps<T extends SvelteComponent> = {
	items: Array<{
		label: string;
		id?: number;
		component?: T;
		img: string;
		props?: ComponentProps<T>;
	}>;
};
