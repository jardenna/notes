import { FC } from 'react';

interface IFigure {
  className?: string;
  src: string;
  alt?: string;
  figcaption?: string;
}
const Figure: FC<IFigure> = ({ className, src, alt, figcaption }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} />
      {figcaption && <figcaption>{figcaption}</figcaption>}
    </figure>
  );
};
export default Figure;

Figure.defaultProps = {
  className: 'figure',
  alt: 'image',
};
