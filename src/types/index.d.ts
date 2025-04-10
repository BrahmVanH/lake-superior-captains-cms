import type { ImageObject } from '@/lib/__generated__/types';

export enum PropertyNames {
	HIDEAWAY = "Captain's Hideaway",
	COTTAGE = "Captain's Cottage",
}

type GraphQLData = { [key: string]: any; [index: number]: never };

export interface GraphQLResponse<T extends GraphQLData> {
	data: T;
	errors?: Array<{ message: string }>;
}

export interface GalImg extends ImageObject {
	isSelected?: boolean;
}
