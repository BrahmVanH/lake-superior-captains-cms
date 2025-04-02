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
