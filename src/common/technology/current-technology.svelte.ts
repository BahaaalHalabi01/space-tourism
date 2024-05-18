let current = $state(0);

export function getTechnology() {
	return {
		get current() {
			return current;
		},
		setCurrent(value: number) {
			current = value;
		}
	};
}
