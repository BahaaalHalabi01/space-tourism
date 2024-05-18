export type SliderProps<T extends Record<string,any>> = {
	showNumber?: boolean;
	getter: () => { current: number };
	setter: (value: number) => void;
	items: Array<{
		id?: number;
    /**@todo fix this later, why are components still classes ?*/
		component?:any;
		img: string;
		props?: T;
	}>;
};
