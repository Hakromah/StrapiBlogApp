/**
 * `article-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import article from "../controllers/article";

const populate = {
	// Define your populate structure here if needed in the future
	featuredImage: {
		fields: ["alternativeText", "url"],
	},
	author: {
		populate: {
			image: {
				fields: ["alternativeText", "url"],
			},
			articles: {
				fields: ["documentId", "title"],
			},
		},
	},
	contentTags: true,
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info("In article-populate middleware.");
		ctx.query.populate = populate;
		await next();
	};
};
