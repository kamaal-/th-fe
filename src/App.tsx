import "./App.css";
import useRxQuery from "./hooks/useRxQuery";
import { GET_PODCASTS } from "./apollo";
import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import Loader from "./components/atoms/loader/Loader";
import ContentList from "./components/organism/content-list/ContentList.tsx";

function App() {
  const { updateSearch, data, loading } = useRxQuery(GET_PODCASTS);
  return (
    <main role="app">
      <div>
        <Input
          role="search"
          className="search__input"
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            updateSearch(e.target.value);
          }}
        />
      </div>
      <div>
        {!loading ? <ContentList data={data} loading={loading} /> : <Loader />}
      </div>
    </main>
  );
}

export default App;
