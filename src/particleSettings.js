/**
 * Particle.js settings
 */
export default {
	particles: {
		number: {
			value: 10,
			density: {
				enabled: false
			}
		},
		size: {
			value: 50,
			random: true
		},
		opacity: {
			value: 0.4,
			anim: {
				enable: false
			},
			random: true
		},
		move: {
			direction: 'right',
			out_mode: 'out',
			random: true,
			bounce: false
		}
	}
};
