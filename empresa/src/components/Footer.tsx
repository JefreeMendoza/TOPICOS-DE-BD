
function Footer() {
  return (
<footer className="bg-blue-100 w-100% rounded-lg shadow m-4 p-4 dark:bg-gray-600 !bg-blue-100">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-800">
      2024{"   "}
      <a href="#" className="hover:underline">
        Jefree Mendoza M
      </a>
      . Todos los derechos reservados.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-800 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Sobre mí
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Redes Sociales
        </a>
      </li>
    </ul>
  </div>
</footer>
  )
}

export default Footer