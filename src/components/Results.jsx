import React, { useRef, useCallback } from "react";
import EachPhoto from "./EachPhoto";

export default function Results(props) {
  const { photos, hasMore, setPageNumber } = props;
  //when we rerender the component, everything change, but by using useRef(). This function return one object with property "current" with the value of null
  const observer = useRef();

  //the function inside callback function will happen just when the variable inside of [] changes. Really similar to useEffect BUT IS CONNECT WITH SOME VARIABLE AND STORED INSIDE OF IT.
  //node refers to the <div> which was returned element
  const lastPhotoElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber)=>prevPageNumber+1)
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore]
  );

  let filteredPhotos = photos.filter((item)=> item.cover_photo);

  return (
    <div className="card-columns">
      {filteredPhotos.map((item, index) => {
        if (item.cover_photo) {
          if (index === filteredPhotos.length - 1) {
            return (
              <div ref={lastPhotoElementRef} key={index}>
                <EachPhoto photo={item} />
              </div>
            );
          } else {
            return (
              <div  key={index}>
                <EachPhoto photo={item} />
              </div>
            );
          }
        }
        return null;
      })}
    </div>
  );
}
