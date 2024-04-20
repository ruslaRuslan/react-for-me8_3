import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact/";
import ObjectPage from "../pages/ObjectPage";
import GithubMain from "../pages/Github";
import FollowersGithub from "../pages/Github/Followers";
import UserWithReducer from "../pages/UserWithReducer";
import CounterWithReducer from "../components/CounterWithReducer";



const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/context" element={<ObjectPage />} />
        <Route path="/github" element={<GithubMain />} />
        <Route
          path="/github-followers/:username"
          element={<FollowersGithub />}
        />
        <Route path="/users-with-reducer" element={<UserWithReducer />} />
        <Route path="/counter-with-reducer" element={<CounterWithReducer />} />

      </Routes>
    </>
  );
};

export default Routing;    
