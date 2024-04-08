import { NavLink } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function SideNavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      <nav
        id="sidenav-1"
        className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          <li className="relative">
            <NavLink
              to="/dashboard"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] mt-2 mb-5 px-6 py-4 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <h1 className="text-zinc-50">
                fit<span className="text-jade-500 italic">Commit</span>
              </h1>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/dashboard"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/progress"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Progress</span>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/progress/new"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>New Entry</span>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/roulette"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Roulette</span>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/favourites"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Favourites</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/community"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span>Community (TBC)</span>
            </NavLink>
          </li> */}

          <li>
            <NavLink
              to="/"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 transition duration-300 ease-linear hover:bg-jade-500 hover:text-zinc-900 focus:bg-jade-500 focus:text-zinc-900 active:bg-jade-500 data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
              data-te-sidenav-link-ref
            >
              <span onClick={handleLogOut}>Log out</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="mt-10  inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        data-te-sidenav-toggle-ref
        data-te-target="#sidenav-1"
        aria-controls="#sidenav-1"
        aria-haspopup="true"
      >
        <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </>
  );
}
