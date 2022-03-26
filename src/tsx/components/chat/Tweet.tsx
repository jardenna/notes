import { FC } from 'react';

interface TweetProps {
  text: string;
}
const Tweet: FC<TweetProps> = ({ text }) => {
  return (
    <div
      style={{
        margin: '20px',
        border: '1px solid grey',
        width: '600px',
        padding: '20px',
        borderRadius: '3px',
      }}
    >
      <div>{text}</div>
    </div>
  );
};

export default Tweet;
