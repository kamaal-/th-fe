import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_PODCASTS } from "./apollo";

function App() {
  const { loading } = useQuery(GET_PODCASTS);
  return (
    <main role="app">{!loading ? <div>Hi</div> : <div>Loading...</div>}</main>
  );
}

export default App;
