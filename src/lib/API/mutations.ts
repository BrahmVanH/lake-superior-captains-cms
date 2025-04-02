import { gql } from 'graphql-request';

export const CREATE_USER = /* GraphQL */  gql`
	mutation CreateUser($input: CreateUserInput!) {
		createUser(input: $input) {
			token
			user {
				_id
				firstName
				lastName
				username
			}
		}
	}
`;

export const LOGIN_USER = /* GraphQL */  gql`
	mutation LoginUser($input: LoginUserInput!) {
		loginUser(input: $input) {
			token
			user {
				_id
				firstName
				lastName
				username
			}
		}
	}
`;

export const DELETE_USER = /* GraphQL */  gql`
	mutation removeUser($input: RemoveUserInput!) {
		removeUser(input: $input) {
			token
			user {
				_id
				firstName
				lastName
				username
			}
		}
	}
`;

export const CREATE_BOOKING = /* GraphQL */  gql`
	mutation CreateBooking($input: CreateBookingInput!) {
		createBooking(input: $input) {
			dateValue
			propertyId
		}
	}
`;

export const DELETE_BOOKING = /* GraphQL */  gql`
	mutation removeBooking($input: RemoveBookingInput!) {
		removeBooking(input: $input) {
			deletedCount
		}
	}
`;

export const UPDATE_PROPERTY_INFO = /* GraphQL */  gql`
	mutation UpdatePropertyInfo($input: UpdatePropertyInput!) {
		updatePropertyInfo(input: $input) {
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
`;

export const DELETE_S3_IMGS = /* GraphQL */  gql`
	mutation DeleteS3Objects($input: DeleteS3ObjectInput!) {
		deleteS3Objects(input: $input) {
			status
			message
		}
	}
`;
