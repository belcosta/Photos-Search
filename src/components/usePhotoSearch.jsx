//when we create a Hook, it usually starts with "use"
//we don't read anything in Hook

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function usePhotoSearch(query, pageNumber, searchOn) {
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  //this useEffect function will reset the photos and delete the last search and start another one, otherwise it would add the phots from new search after the ones from the last research

  useEffect(() => {
    setPhotos([]);
  }, [query]);
  //useEffect is used to run a function just when a condition is attended
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/collections/?client_id=j9bQjfT_YyUFBte48Ewb8Q58-tYlHNiThtbzHJ8Y6oE&query=${query}&page=${pageNumber}`
      )
      .then((res) => {
        console.log(res.data.results);
        setPhotos([...photos, ...res.data.results]);
        //if the condition inside of parentheses is true, it will change the value of hasMore to true
        setHasMore(res.data.total_pages > pageNumber);
      })
      .catch((err) => {
        console.log(err);
      });
    //ehen the variable inde [] changes -> the function below will run
  }, [pageNumber, searchOn]);

  return [photos, hasMore];
}
