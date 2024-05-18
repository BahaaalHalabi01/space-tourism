let current = $state(0);

export function getCrew() {
	return {
		get current() {
			return current;
		},
		setCurrent(value: number) {
			current = value;
		}
	};
}
