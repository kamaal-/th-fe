import "./App.sass";
import useRxQuery from "./hooks/useRxQuery";
import { GET_PODCASTS } from "./apollo";
import ContentList from "./components/organism/content-list/ContentList.tsx";
import Search from "./components/molecules/search/Search";

function App() {
  const { updateSearch, data, loading } = useRxQuery(GET_PODCASTS);
  return (
    <main className="container" data-testid={"title"}>
      <Search onChange={updateSearch} />
      <ContentList data={data} loading={loading} />
    </main>
  );
}

export default App;
