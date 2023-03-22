// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'Twin Might',
	brandUrl: 'https://example.com',
	brandImage: 'https://place-hold.it/350x150',
	brandTarget: '_self',
	// UI
	appBg: 'white',
	// appContentBg: 'silver',
	appBorderColor: 'grey',
	appBorderRadius: 4,

	// Typography
	fontBase: 'Roboto, "Nunito Sans" , sans-serif',
	fontCode: 'monospace',
});
