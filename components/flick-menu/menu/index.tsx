import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  open: boolean;
  desktop: boolean;
  children?: ReactNode;
}
const Menu = ({ open, desktop, children }: Props) => {
  const { asPath: currentPath } = useRouter();

  return (
    <nav>
      {children}
      <ul
        id="menu"
        className={classNames(
          styles.nav,
          desktop ? styles.desktop : null,
          open ? styles.open : null
        )}
        role="navigation"
        aria-hidden={open ? 'false' : 'true'}
      >
        <li>
          <Link
            href="/dop"
            className={currentPath === '/dop' ? styles.active : null}
          >
            selected work
          </Link>
        </li>
        <li>
          <Link
            href="/dop/resume"
            className={currentPath === '/dop/resume' ? styles.active : null}
          >
            resumé
          </Link>
        </li>
        <li>
          <Link
            href="/dop/contact"
            className={currentPath === '/dop/contact' ? styles.active : null}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

// Source for accessibility
// ----------------------------------------------------------------
// https://www.a11ymatters.com/pattern/mobile-nav/
// https://a11y-style-guide.com/style-guide/section-navigation.html
// http://web-accessibility.carnegiemuseums.org/code/navigation/
