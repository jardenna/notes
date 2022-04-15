import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { createPost } from './postSlice';
interface PostsProps {}
const Posts: FC<PostsProps> = () => {
  const posts = useAppSelector(createPost);
  console.log(posts);

  return <div>Posts</div>;
};
export default Posts;
