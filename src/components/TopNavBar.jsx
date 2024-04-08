import { NavLink } from "react-router-dom";

export default function TopNavBar(user, setUser) {
  return (
    <nav className=" bg-zinc-900">
      <div className="max-w-screen-xl bg-zinc-900 flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="self-center text-2xl font-semibold whitespace-nowrap">
          fit<span className="italic text-jade-500">Commit</span>
        </p>

        <div className="sm:block sm:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
