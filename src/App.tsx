import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_PODCASTS } from "./apollo";
import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

function App() {
  const { loading } = useQuery(GET_PODCASTS);
  return (
    <main role="app">
      <div>
        <Input
          role="search"
          className="search__input"
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            console.log(e);
          }}
        />
      </div>
      <div>{!loading ? <div>Hi</div> : <div>Loading...</div>}</div>
    </main>
  );
}

export default App;
