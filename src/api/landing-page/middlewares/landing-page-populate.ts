/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
	blocks: {
		on: {
			"blocks.hero": {
				populate: {
					links: true,
					image: {
						fields: ["alternativeText", "url"],
					},
				},
			},
		},
	},
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		console.dir(ctx.query, { depth: null });
		ctx.query.populate = populate;
		strapi.log.info("In landing-page-populate middleware.");

		await next();
	};
};
