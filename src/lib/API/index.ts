import type { GraphQLData, GraphQLResponse } from '@/types';
import { GET_COTTAGE_IMGS, GET_HIDEAWAY_IMGS } from './queries';

export enum PropertyNames {
	HIDEAWAY = "Captain's Hideaway",
	COTTAGE = "Captain's Cottage",
}

export async function graphQLFetch<T extends GraphQLData>(query: string, variables = {}): Promise<T> {
	try {
		const res = await fetch(`http://localhost:4000/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		});
		if (res) {
			console.log('res', res);
		}

		if (!res.ok) {
			console.log('GQL Fetch response not okay: ', res.statusText);
			throw new Error(`${res.status}: ${res.statusText}`);
		}

		const graphQLRes: GraphQLResponse<T> = await res.json();
		if (graphQLRes.errors) {
			throw new Error(graphQLRes.errors.map((e) => e.message).join('\n'));
		}

		return graphQLRes.data;
	} catch (e: any) {
		console.error('Error while making graphql fetch: ', e);
		throw new Error(e);
	}
}

export async function fetchPropertyImgs<T extends GraphQLData>(propertyName: PropertyNames) {
	const { HIDEAWAY, COTTAGE } = PropertyNames;

	try {
		if (propertyName === HIDEAWAY) {
			const res = await graphQLFetch(GET_HIDEAWAY_IMGS);
			if (res) {
				console.log('res', res);
			}

			if (!res.getHideawayImgs) {
				console.log('GQL Fetch response for hideaway images not okay: ', res.statusText);
				throw new Error(`${res.status}: ${res.statusText}`);
			}

			return res.getHideawayImgs.galleryArray;
		} else if (propertyName === COTTAGE) {
			console.log('get_cottage_images query: ', GET_COTTAGE_IMGS);
			const res = await graphQLFetch(GET_COTTAGE_IMGS);

			if (res) {
				console.log('res', res);
			}

			if (!res.getCottageImgs) {
				console.log('GQL Fetch response for cottage images not okay: ', res.statusText);
				throw new Error(`${res.status}: ${res.statusText}`);
			}

			return res.getCottageImgs.galleryArray;
		}
	} catch (e) {
		console.error('Error fetching property images for dashboard: ', e);
		throw new Error(`Error fetching property images for dashboard: ${e}`);
	}
}
