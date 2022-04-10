import { FC } from 'react';

interface IMenuBurger {
  onClick: () => void;
}
const MenuBurger: FC<IMenuBurger> = ({ onClick }) => {
  return (
    <div className="menu-btn-wrapper" onClick={onClick}>
      <span className="menu-btn">
        <span className="menu-btn-burger" />
      </span>
    </div>
  );
};

export default MenuBurger;
