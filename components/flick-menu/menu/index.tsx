import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.scss';
import classNames from 'classnames';

interface Props {
  open: boolean;
  desktop: boolean;
}
const Menu = ({ open, desktop }: Props) => {
  const { asPath: currentPath } = useRouter();

  return (
    <nav
      className={classNames(
        styles.nav,
        desktop ? styles.desktop : null,
        open ? styles.open : null
      )}
    >
      <Link
        href="/dop"
        className={currentPath === '/dop' ? styles.active : null}
      >
        selected work
      </Link>
      <Link
        href="/dop/resume"
        className={currentPath === '/dop/resume' ? styles.active : ''}
      >
        resumé
      </Link>
      <Link
        href="/dop/contact"
        className={currentPath === '/dop/contact' ? styles.active : ''}
      >
        contact
      </Link>
    </nav>
  );
};

export default Menu;
