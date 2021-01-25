import React from "react";

export default function EachPhoto(props) {
  let description =
    props.photo.cover_photo.alt_description.charAt(0).toUpperCase() +
    props.photo.cover_photo.alt_description.slice(1);
  return (
    <div>
      <div className='card'>
        <img
          className='card-img-top'
          src={props.photo.cover_photo.urls.full}
          alt='Card pic'
        />
        <div className='card-body'>
          <h5 className='card-title'>
            {description ? description : props.photo.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
