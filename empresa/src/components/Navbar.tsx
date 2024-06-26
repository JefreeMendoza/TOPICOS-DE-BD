import { useLocation, NavLink } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir el Menu Principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-700 text-white"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-700 text-white"
                aria-current={location.pathname === '/servicios' ? 'page' : undefined}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-900 text-white"
                aria-current={location.pathname === '/proyectos' ? 'page' : undefined}
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clientes"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-700 text-white"
                aria-current={location.pathname === '/clientes' ? 'page' : undefined}
              >
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-700 text-white"
                aria-current={location.pathname === '/blog' ? 'page' : undefined}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className="block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                activeClassName="bg-blue-700 text-white"
                aria-current={location.pathname === '/contacto' ? 'page' : undefined}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

