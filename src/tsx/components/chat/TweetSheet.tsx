import { useRef, useState } from 'react';

import Picker from 'emoji-picker-react';

import Tweet from './Tweet';

function TweetSheet() {
  const [text, setText] = useState('');

  const onEmojiClick = (event: any, emojiObject: { emoji: string }) => {
    const { current } = textAreaRef;
    const startPos = current.selectionStart;
    const endPos = current.selectionEnd;

    //&#x1F600

    const inputText =
      current.value.substring(0, startPos) +
      emojiObject.emoji +
      current.value.substring(endPos, current.value.length);

    setText(inputText);
  };

  const textAreaRef = useRef() as React.MutableRefObject<any>;
  const [tweets, setTweets] = useState<string[]>([]);

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
          <Picker
            onEmojiClick={onEmojiClick}
            groupVisibility={{
              flags: false,
              recently_used: false,
            }}
          />
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
              <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f600.png" />
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
