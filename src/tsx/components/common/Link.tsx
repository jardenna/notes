import { FC } from 'react';

interface ILink {
  target: string;
  href: string;
  rel: string;
  text: string;
  title?: string;
}
const Link: FC<ILink> = ({ target, href, rel, text, title }) => {
  return (
    <a target={target} href={href} rel={rel} title={title}>
      {text}
    </a>
  );
};
export default Link;
