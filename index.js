const loaderUtils = require("loader-utils");

module.exports = function(content) {
	const options = loaderUtils.getOptions(this);

	var name = (options && options.name)? options.name: null || loaderUtils.interpolateName(this, "[name]", {});

	content = content.replace(':scope', `${name}, [data-is="${name}"]`);

    return content;
};