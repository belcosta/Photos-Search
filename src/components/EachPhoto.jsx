import React from "react";

export default function EachPhoto(props) {
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
            {props.photo.cover_photo.alt_description.charAt(0).toUpperCase() +
              props.photo.cover_photo.alt_description.slice(1) ||
              props.photo.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
