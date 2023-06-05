import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_PODCASTS } from "./apollo";

function App() {
  const { loading, data } = useQuery(GET_PODCASTS);
  console.log(data);
  return (
    <main role="app">{!loading ? <div>Hi</div> : <div>Loading...</div>}</main>
  );
}

export default App;
