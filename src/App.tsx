import "./App.css";
import useRxQuery from "./hooks/useRxQuery";
import { GET_PODCASTS } from "./apollo";
import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import Loader from "./components/atoms/loader/Loader";
import { ClockIcon } from "./components/atoms/icons/";

function App() {
  const { updateSearch, data, loading } = useRxQuery(GET_PODCASTS);
  console.log(data);
  return (
    <main role="app">
      <div>
        <ClockIcon />
        <Loader />
        <Input
          role="search"
          className="search__input"
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            updateSearch(e.target.value);
          }}
        />
      </div>
      <div>{!loading ? <div>{data.length}</div> : <div>Loading...</div>}</div>
    </main>
  );
}

export default App;
