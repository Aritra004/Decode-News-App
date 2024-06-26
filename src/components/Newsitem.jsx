import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={
          src
            ? src
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlhff8brZ5tfOk-IoV33l333ywHcEZlvTCuuTyElO4Q&s"
        }
        // style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Our reporters are chasing down the details"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
