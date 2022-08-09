import { NavRoute } from './Nav.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Nav = () => {
  return (
    <div>
      {navItems.map(({ href, text }) => (
        <NavRoute to={href} key={text}>
          {text}
        </NavRoute>
      ))}
    </div>
  );
};
