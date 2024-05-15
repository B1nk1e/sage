/**
 * Build configuration for bud.js
 * @param {import('@roots/bud').Bud} bud
 */
export default async bud => {
	bud
		.use(['@roots/bud-sass'])
		.setPath('@src', 'web/app/themes/sage/resources/assets')
		.setPath('@dist', 'web/app/themes/sage/public')
		.setPublicPath('/web/app/themes/sage/public')

		.alias({
			'@component': bud.path('@src/scripts/component'),
			'@element': bud.path('@src/scripts/element'),
			'@route': bud.path('@src/scripts/route'),
			'@util': bud.path('@src/scripts/util'),
			'@fonts': bud.path('@src/fonts'),
		})

		.entry({
			app: ['scripts/app.js', 'styles/app.scss'],
			styleguide: ['scripts/app.js', 'styles/styleguide.scss'],
		})
		.assets(['images'])

		.setUrl('http://localhost:3000')
		.setProxyUrl('http://PROJECTNAAM.test')
		.watch(['resources/views', 'resources/assets/styles', 'app'])

		.when(bud.isDevelopment, bud => bud.devtool())
		.when(bud.isProduction, bud => bud.devtool(false))

		.splitChunks();
};
