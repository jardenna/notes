import { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Form from '../../components/common/FormElements/Form';
import useFormValidation from '../../hooks/useFormValidation';
import { InputListProps } from '../../interfaces/form';
import { addPost, createPost } from './postSlice';
interface PostsProps {}
const Posts: FC<PostsProps> = () => {
  const posts = useAppSelector(createPost);
  const dispatch = useAppDispatch();
  const initialState = {
    title: '',
  };

  const onSubmit = () => {
    dispatch(addPost(values));
  };

  const { values, handleChange, handleSubmit } = useFormValidation(
    initialState,
    onSubmit
  );
  const { title } = values;
  const inputs: InputListProps[] = [
    {
      name: 'title',
      placeholder: 'title',
      inputIdentifier: 'title',
      label: 'Title',
      isRequired: true,
      value: title,
    },
  ];

  return (
    <>
      <Form
        inputs={inputs}
        onSubmit={handleSubmit}
        btnText="Send"
        onChange={handleChange}
        showResetButton
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </>
  );
};
export default Posts;
