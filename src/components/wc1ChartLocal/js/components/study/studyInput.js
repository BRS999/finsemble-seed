/* removeIf(umd) */ ;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['componentUI'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('./componentUI'));
	} else {
		factory(root);
	}
})(this, function(_exports) {
	var CIQ = _exports.CIQ;
	/* endRemoveIf(umd) */

	/**
	 * Study input web component `<cq-study-input>`.
	 *
	 * See example in {@link CIQ.WebComponents.cq-study-dialog}.
	 * @namespace WebComponents.cq-study-input
	 */
	// var StudyInput = {
	// 	prototype: Object.create(CIQ.UI.BaseComponent)
	// };

	class StudyInput extends CIQ.UI.BaseComponent {
		constructor() {
			super()
		}
	}

	CIQ.UI.StudyInput = customElements.define("cq-study-input", StudyInput);

	/* removeIf(umd) */
	return _exports;
});
/* endRemoveIf(umd) */