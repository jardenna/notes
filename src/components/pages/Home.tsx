import { FC } from 'react';
import Posts from '../../features/posts/Posts';

interface HomeProps {
  id: string;
}
const Home: FC<HomeProps> = ({ id }) => {
  return (
    <article>
      <section>
        <Posts />
      </section>
    </article>
  );
};

export default Home;
