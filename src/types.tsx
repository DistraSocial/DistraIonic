

export type distraError = {
  errorCode: string;
  errorMessage: string;
  userMessage: string;
};

export type Profile = {
  userName: string;
  userAddress: string;
  userPicture: string;
  userBackground: string;
  bio?: string;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
  following?: string[];
  followers?: string[];
  posts?: PostRef[];
};

export type ProfileRef = {
  userName: string;
  userAddress: string;
};

export type Post = {
  postAddress: string;
  replyTo?: PostRef;
  userName: string;
  userAddress: string;
  userPicture: string;
  createdAt: Date;
  updatedAt: Date;
  mediaText: string;
  tags?: string[];
  reactions?: Reaction[];
  replies?: PostRef[];
};

export type PostRef = {
  postAddress: string;
};

export type Reaction = {
  emoji: string;
  count: string;
};