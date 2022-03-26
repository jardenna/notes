import { useRef, useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';

import Tweet from './Tweet';

import EmojiPicker from './EmojiPicker';

function TweetSheet() {
  const [text, setText] = useState('');

  const textAreaRef = useRef() as React.MutableRefObject<any>;
  const [tweets, setTweets] = useState<string[]>([]); // array of object of shape {text: '', images: []}
  const insertAtPos = (value: { native: any }) => {
    const { current: taRef } = textAreaRef;
    let startPos = taRef.selectionStart;
    let endPos = taRef.selectionEnd;
    setText(
      taRef.value.substring(0, startPos) +
        value.native +
        taRef.value.substring(endPos, taRef.value.length)
    );
  };
  const onClickTweet = () => {
    if (text) {
      setTweets([text]);
    }
    setText('');
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '3px solid',
          borderRadius: '5px',
          width: '600px',
          minHeight: '200px',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            border: '1px solid',
            borderRadius: '5px',
            margin: '0px',
          }}
        >
          <textarea
            ref={textAreaRef}
            value={text}
            style={{ flex: 1, border: 'none', minHeight: '150px' }}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              background: 'fbfbfb',
            }}
          ></div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <EmojiPicker onSelect={insertAtPos} />

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <button onClick={onClickTweet} style={{ fontSize: '20px' }}>
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {tweets.map((tweet, index) => (
          <Tweet key={index} text={tweet} />
        ))}
      </div>
    </>
  );
}

export default TweetSheet;
