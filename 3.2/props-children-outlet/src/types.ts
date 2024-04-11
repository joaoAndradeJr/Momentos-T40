type PostCard = {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[]; // também podemos tipar usando Array<string>
  publishDate: string;
}

export type PostCardProps = {
  children: PostCard;
};

export type PostListProps = {
  postsList: PostCard[]; // também podemos tipar usando Array<PostCard>
};
