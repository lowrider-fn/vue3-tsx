import { RouterLink } from '../Link';
import { Button } from '../Button';

import { LINKS } from './constants';
import c from './styles.module.scss';

import type { HeaderProps } from './interfaces';

export const Header = ({ isAuth, onLogout }: HeaderProps) => (
  <header class={c.header}>
    <nav class={c.inner}>
      <ul class={c.list}>
        {
          LINKS.filter(({ auth, guest }) => (isAuth ? !guest : !auth)).map(({ text, path }, i) => (
            <li class={c.item} key={i}>
              {
                (path && <RouterLink to={path} text={text} />)
                || <Button mode="link-info" onClick={onLogout} text={text} />
              }
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);
