import { gql } from 'graphql-request';

export const GET_ALL_USERS = /* GraphQL */  gql`
	query GetAllUsers {
		getAllUsers {
			firstName
			lastName
			username
		}
	}
`);

export const QUERY_BOOKINGS_BY_PROPERTY = /* GraphQL */  gql`
	query QueryBookingsByProperty($propertyId: ID!) {
		queryBookingsByProperty(propertyId: $propertyId) {
			_id
			dateValue
			propertyId
		}
	}
`);

export const GET_HOME_IMGS = /* GraphQL */  gql`
	query GetHomePgImgs {
		getHomePgImgs {
			headerImgUrl
			hideawayImgUrl
			cottageImgUrl
		}
	}
`);

export const GET_HIDEAWAY_IMGS = /* GraphQL */  gql`
	query GetHideawayImgs {
		getHideawayImgs {
			headerUrl
			galleryArray {
				imgKey
				original
				thumbnail
				originalAlt
				thumbnailAlt
			}
		}
	}
`);

export const GET_COTTAGE_IMGS = /* GraphQL */  gql`
	query GetCottageImgs {
		getCottageImgs {
			headerUrl
			galleryArray {
				original
				thumbnail
				originalAlt
				thumbnailAlt
			}
		}
	}
`);

export const GET_ABOUT_IMGS = /* GraphQL */  gql`
	query GetAboutPgImg {
		getAboutPgImg
	}
`);

export const GET_PROPERTY_INFO = /* GraphQL */  gql`
	query GetPropertyInfo($_id: ID!) {
		getPropertyInfo(_id: $_id) {
			_id
			propertyName
			propertyDescription
			amenities {
				amenityName
				amenityType
			}
			headerImgKey
		}
	}
`);

export const GET_PROPERTIES = /* GraphQL */  gql`
	query GetProperties {
		getProperties {
			_id
			propertyName
			propertyDescription
			amenities {
				amenityName
				amenityType
			}
			headerImgKey
		}
	}
`);

export const GET_PRESEIGNED_URL = /* GraphQL */  gql`
	query GetPresignedS3Url($imgKey: String!, $commandType: String!, $altTag: String!) {
		getPresignedS3Url(imgKey: $imgKey, commandType: $commandType, altTag: $altTag)
	}
`);
