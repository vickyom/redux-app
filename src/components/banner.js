import React from "react";

export default function banner(props) {
  const { bannerImage } = props;
  return <img src={bannerImage} alt="Image" class="card-img-top w-100" />;
}
