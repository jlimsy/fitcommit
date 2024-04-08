import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "../../components/SideNavBar";
import AuthPage from "../AuthPage/AuthPage";
import ProgressPage from "../ProgressPage/ProgressPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import CommunityPage from "../CommunityPage/CommunityPage";
import RoulettePage from "../RoulettePage/RoulettePage";
import EntriesPage from "../EntriesPage/EntriesPage";
import FavouritesPage from "../FavouritesPage/FavouritesPage";

// ========== TO BE DEL ==========  //
import * as usersAPI from "../../utilities/users-api";
import * as usersService from "../../utilities/users-service";
// ========== TO BE DEL ========== //

export default function App() {
  const [user, setUser] = useState(false);
  //to be used in RoulettePage and RouletteInputBar
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleMuscleChange = (muscle) => {
    setSelectedMuscle(muscle);
  };

  // ========== TO BE DEL ==========  //
  const handleClick = async () => {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: "jon@jon",
        password: "jonathanpw",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const token = await response.json();
      localStorage.setItem("token", token.token);
      setUser(getUser());
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  function getToken() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return null;
    }
    return token;
  }

  function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
  }
  // ========== TO BE DEL ========== //

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  // console.log("user", user);
  return (
    <>
      {/* <header>{user?.name}</header> */}
      {user ? (
        <>
          <SideNavBar setUser={setUser} />
          <div className="flex">
            <Routes>
              <Route
                path="/dashboard"
                element={<DashboardPage user={user} />}
              />
              <Route path="/progress" element={<ProgressPage user={user} />} />
              <Route
                path="/progress/new"
                element={<EntriesPage user={user} />}
              />
              <Route
                path="/favourites"
                element={<FavouritesPage user={user} />}
              />
              <Route
                path="/roulette"
                element={
                  <RoulettePage
                    selectedMuscle={selectedMuscle}
                    onMuscleChange={handleMuscleChange}
                    addToFavorites={addToFavorites}
                    user={user}
                  />
                }
              />
              <Route
                path="/community"
                element={<CommunityPage user={user} setUser={setUser} />}
              />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <div className="fixed right-0 bottom-0">
        <button className="bg-jade-300" onClick={handleClick}>
          Tmp button to toggle setUser state
        </button>
      </div>
    </>
  );
}
