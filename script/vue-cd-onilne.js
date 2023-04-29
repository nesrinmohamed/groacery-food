Vue.directive("tap", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.on("tap", binding.value);
		}
	}
});

Vue.directive("press", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.get("press").set({ event: 'press', pointer: 1, threshold: 5, time: 500 });
			mc.on("press", binding.value);
		}
	}
});

Vue.directive("pan", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
			mc.on("pan", binding.value);
		}
	}
});

Vue.directive("panend", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.on("panend", binding.value);
		}
	}
});


