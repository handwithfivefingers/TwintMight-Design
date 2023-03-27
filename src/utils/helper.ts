type addPropertyProps = {
	object: { [key: string]: any };
	key: string;
	value: any;
};

const addProperty = (
	object: addPropertyProps['object'],
	key: addPropertyProps['key'],
	value: addPropertyProps['value']
) => {
	let keys: string | string[] = key.split('.');
	while (keys.length > 1) {
		let k: string | any = keys.shift();

		if (!object.hasOwnProperty(k)) {
			object[k] = {};
		}
		object = object[k];
	}
	object[keys[0]] = value;
};

const getDeepObject = (
	object: addPropertyProps['object'],
	arg: string | string[]
) => {
	try {
		const argPath = typeof arg === 'string' ? arg : arg.join('.');
		const getDeep = new Function('object', `return object.${argPath}`);
		return getDeep(object);
	} catch (error) {
		console.log('getDeepObject', error);
	}
};

export { addProperty, getDeepObject };
