import classNames from 'classnames';
import styles from './Burger.module.scss';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger = (props: Props) => {
  const { open, setOpen } = props;

  const burgerClass = classNames(open ? styles.open : null);

  return (
    <button className={styles.wrapper} onClick={() => setOpen(!open)}>
      <div className={burgerClass} />
      <div className={burgerClass} />
      <div className={burgerClass} />
    </button>
  );
};

export default Burger;
