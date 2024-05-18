let current = $state(0);

export function getDestination() {
	return {
		get current() {
			return current;
		},
		setCurrent(value: number) {
			current = value;
		}
	};
}
