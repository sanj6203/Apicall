import { useEffect, useState } from "react";
import "./App.css";
import RandomUser from "./Components/RandomUser";
import { randomUser } from "./Api/ApiCall";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    randomUser().then((data) => setUserData(data.results[0]));
  }, []);

  const refresh = () => {
    randomUser().then((data) => setUserData(data.results[0]));
  };

  return (
    <>
      <h1>Random User</h1>
      {userData && <RandomUser data={userData} />}
      <button onClick={refresh}>Get New User</button>
    </>
  );
}

export default App;
