import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import Results from "./components/Results";
import usePhotoSearch from "./components/usePhotoSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchOn, setSearchOn] = useState(false);

  const [photos, hasMore] = usePhotoSearch(query, pageNumber, searchOn);
  return (
    <div>
      <header>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDWZFBlcr5FmGTFvxsz22J2i73drsBqLLbQ&usqp=CAU'></img>
        <Search query={query} setQuery={setQuery} setSearchOn={setSearchOn} />
      </header>
      <main>
        <Results
          photos={photos}
          hasMore={hasMore}
          setPageNumber={setPageNumber}
        />
      </main>
    </div>
  );
}

export default App;
