import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import Results from "./components/Results";
import usePhotoSearch from "./components/usePhotoSearch";
import Camera from "./components/images/camera.png";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchOn, setSearchOn] = useState(false);

  const [photos, hasMore] = usePhotoSearch(query, pageNumber, searchOn);
  return (
    <div>
      <header>
        <img src={Camera} alt='draw of camera' width='304' height='240'></img>
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
