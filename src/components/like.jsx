import React from "react";

const Like = ({ data, onLike }) => {
  let classes = "fa-heart";
  return data.like ? (
    <i className={`fas ${classes}`} onClick={onLike} />
  ) : (
    <i className={`far ${classes}`} onClick={onLike} />
  );
};

export default Like;
