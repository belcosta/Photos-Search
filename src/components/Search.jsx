import React from "react";
import axios from "axios";

export default function Search(props) {
  // const [input, setInput] = useState("");
  const getValue = (e) => {
    props.setQuery(e.target.value);
  };

  const fetchPhotos = (input) => {
    axios
      .get(
        `https://api.unsplash.com/search/collections/?client_id=j9bQjfT_YyUFBte48Ewb8Q58-tYlHNiThtbzHJ8Y6oE&query=${input}`
      )
      .then((res) => {
        props.setPhotos(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='search'>
      <input
        placeholder='Search for a pic here..'
        value={props.query}
        //dont use parentesis
        onInput={getValue}
      />
      <button
        onClick={() => {
          //in this way we just change the previous value to the opposite value,
          props.setSearchOn((prevSearchOn) => !prevSearchOn);
          //this second approach is also possible, but I should import also the searchOn variable.
          // props.setSearchOn(!searchOn);
        }}
      >
        SEARCH
      </button>
    </div>
  );
}
