import { NavLink, useLocation } from 'react-router';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="px-6 py-2 text-sm font-medium text-gray-500 my-4">
      <ol className="list-reset flex">
        <li>
          <NavLink to={'/'} className="text-primary hover:text-primary/80">Home</NavLink>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center capitalize">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{value}</span>
              ) : (
                <NavLink to={to} className="text-primary hover:text-primary/80">{value}</NavLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
