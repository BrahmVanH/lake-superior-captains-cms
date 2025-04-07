export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Amenity = {
  __typename?: 'Amenity';
  amenityName: Scalars['String']['output'];
  amenityType: Scalars['String']['output'];
};

export type AmenityInput = {
  amenityName: Scalars['String']['input'];
  amenityType: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: User;
};

export type Booking = {
  __typename?: 'Booking';
  _id: Scalars['ID']['output'];
  dateValue: Scalars['String']['output'];
  propertyId: Scalars['ID']['output'];
};

export type CreateBookingInput = {
  bookings?: InputMaybe<Array<NewBookingInput>>;
};

export type CreateUserInput = {
  adminCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type LoginUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBooking: Array<Maybe<Booking>>;
  createUser: Auth;
  deleteS3Objects: DeleteS3ObjectResponse;
  loginUser: Auth;
  removeBooking: RemoveBookingResponse;
  removeUser: Auth;
  updatePropertyInfo: Property;
};


export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteS3ObjectsArgs = {
  input: DeleteS3ObjectInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRemoveBookingArgs = {
  input: RemoveBookingInput;
};


export type MutationRemoveUserArgs = {
  input: RemoveUserInput;
};


export type MutationUpdatePropertyInfoArgs = {
  input: UpdatePropertyInput;
};

export type NewBookingInput = {
  dateValue: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID']['output'];
  amenities: Array<Amenity>;
  bookings?: Maybe<Array<Booking>>;
  headerImgKey: Scalars['String']['output'];
  propertyDescription: Scalars['String']['output'];
  propertyName: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAboutPgImg: Scalars['String']['output'];
  getAllUsers?: Maybe<Array<User>>;
  getCottageImgs: CottageImgPack;
  getHideawayImgs: HideawayImgPack;
  getHomePgImgs: HomePgImgPack;
  getPresignedS3Url: Scalars['String']['output'];
  getProperties: Array<Property>;
  getPropertyInfo: Property;
  queryBookingsByProperty?: Maybe<Array<Booking>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};


export type QueryGetPropertyInfoArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryQueryBookingsByPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveBookingInput = {
  bookingIds: Array<Scalars['ID']['input']>;
};

export type RemoveBookingResponse = {
  __typename?: 'RemoveBookingResponse';
  deletedCount: Scalars['Int']['output'];
};

export type RemoveUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Update = {
  amenities?: InputMaybe<Array<AmenityInput>>;
  headerImgKey: Scalars['String']['input'];
  propertyDescription: Scalars['String']['input'];
  propertyName: Scalars['String']['input'];
};

export type UpdatePropertyInput = {
  _id: Scalars['ID']['input'];
  update: Update;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type CottageImgPack = {
  __typename?: 'cottageImgPack';
  galleryArray: Array<ImageObject>;
  headerUrl: Scalars['String']['output'];
};

export type HideawayImgPack = {
  __typename?: 'hideawayImgPack';
  galleryArray: Array<ImageObject>;
  headerUrl: Scalars['String']['output'];
};

export type HomePgImgPack = {
  __typename?: 'homePgImgPack';
  cottageImgUrl: Scalars['String']['output'];
  headerImgUrl: Scalars['String']['output'];
  hideawayImgUrl: Scalars['String']['output'];
};

export type ImageObject = {
  __typename?: 'imageObject';
  imgKey: Scalars['String']['output'];
  original: Scalars['String']['output'];
  originalAlt: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  thumbnailAlt: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Auth', token: string, user: { __typename?: 'User', _id?: string | null, firstName: string, lastName: string, username: string } } };

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'Auth', token: string, user: { __typename?: 'User', _id?: string | null, firstName: string, lastName: string, username: string } } };

export type RemoveUserMutationVariables = Exact<{
  input: RemoveUserInput;
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'Auth', token: string, user: { __typename?: 'User', _id?: string | null, firstName: string, lastName: string, username: string } } };

export type CreateBookingMutationVariables = Exact<{
  input: CreateBookingInput;
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: Array<{ __typename?: 'Booking', dateValue: string, propertyId: string } | null> };

export type RemoveBookingMutationVariables = Exact<{
  input: RemoveBookingInput;
}>;


export type RemoveBookingMutation = { __typename?: 'Mutation', removeBooking: { __typename?: 'RemoveBookingResponse', deletedCount: number } };

export type UpdatePropertyInfoMutationVariables = Exact<{
  input: UpdatePropertyInput;
}>;


export type UpdatePropertyInfoMutation = { __typename?: 'Mutation', updatePropertyInfo: { __typename?: 'Property', _id: string, propertyName: string, propertyDescription: string, headerImgKey: string, amenities: Array<{ __typename?: 'Amenity', amenityName: string, amenityType: string }> } };

export type DeleteS3ObjectsMutationVariables = Exact<{
  input: DeleteS3ObjectInput;
}>;


export type DeleteS3ObjectsMutation = { __typename?: 'Mutation', deleteS3Objects: { __typename?: 'DeleteS3ObjectResponse', status: number, message: string } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', firstName: string, lastName: string, username: string }> | null };

export type QueryBookingsByPropertyQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;


export type QueryBookingsByPropertyQuery = { __typename?: 'Query', queryBookingsByProperty?: Array<{ __typename?: 'Booking', _id: string, dateValue: string, propertyId: string }> | null };

export type GetHomePgImgsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePgImgsQuery = { __typename?: 'Query', getHomePgImgs: { __typename?: 'homePgImgPack', headerImgUrl: string, hideawayImgUrl: string, cottageImgUrl: string } };

export type GetHideawayImgsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHideawayImgsQuery = { __typename?: 'Query', getHideawayImgs: { __typename?: 'hideawayImgPack', headerUrl: string, galleryArray: Array<{ __typename?: 'imageObject', imgKey: string, original: string, thumbnail: string, originalAlt: string, thumbnailAlt: string }> } };

export type GetCottageImgsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCottageImgsQuery = { __typename?: 'Query', getCottageImgs: { __typename?: 'cottageImgPack', headerUrl: string, galleryArray: Array<{ __typename?: 'imageObject', original: string, thumbnail: string, originalAlt: string, thumbnailAlt: string }> } };

export type GetAboutPgImgQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPgImgQuery = { __typename?: 'Query', getAboutPgImg: string };

export type GetPropertyInfoQueryVariables = Exact<{
  _id: Scalars['ID']['input'];
}>;


export type GetPropertyInfoQuery = { __typename?: 'Query', getPropertyInfo: { __typename?: 'Property', _id: string, propertyName: string, propertyDescription: string, headerImgKey: string, amenities: Array<{ __typename?: 'Amenity', amenityName: string, amenityType: string }> } };

export type GetPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertiesQuery = { __typename?: 'Query', getProperties: Array<{ __typename?: 'Property', _id: string, propertyName: string, propertyDescription: string, headerImgKey: string, amenities: Array<{ __typename?: 'Amenity', amenityName: string, amenityType: string }> }> };

export type GetPresignedS3UrlQueryVariables = Exact<{
  imgKey: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  altTag: Scalars['String']['input'];
}>;


export type GetPresignedS3UrlQuery = { __typename?: 'Query', getPresignedS3Url: string };
