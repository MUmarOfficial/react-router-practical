import { NavLink, useLocation } from 'react-router';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <div className="text-sm breadcrumbs mb-6 text-base-content/70">
      <ul>
        <li>
          <NavLink to={'/'} className="hover:text-primary transition-colors">Home</NavLink>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="capitalize">
              {isLast ? (
                <span className="text-base-content font-medium opacity-100">{value}</span>
              ) : (
                <NavLink to={to} className="hover:text-primary transition-colors">{value}</NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
