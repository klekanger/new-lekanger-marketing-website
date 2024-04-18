import * as queryStore from "@sanity/react-loader";
import { draftMode } from "next/headers";
import { client } from "../lib/client";
import { token } from "../lib/token";

const serverClient = client.withConfig({
	token,
	stega: {
		// Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
		enabled: process.env.VERCEL_ENV === "preview",
	},
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;

export const loadQuery = ((query, params = {}, options = {}) => {
	const {
		perspective = draftMode().isEnabled ? "previewDrafts" : "published",
	} = options;
	// Don't cache by default
	let revalidate: NextFetchRequestConfig["revalidate"] = 0;
	// If `next.tags` is set, and we're not using the CDN, then it's safe to cache
	if (!usingCdn && Array.isArray(options.next?.tags)) {
		revalidate = false;
	} else if (usingCdn) {
		revalidate = 60;
	}
	return queryStore.loadQuery(query, params, {
		...options,
		next: {
			revalidate,
			...(options.next || {}),
		},
		perspective,
	});
}) satisfies typeof queryStore.loadQuery;
