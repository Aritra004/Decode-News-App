import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category, country }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3de33cc8127049838acdf7dd8be9a31d`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category, country]);
  return (
    <div>
      <h2 className="text-center">
        {category.toUpperCase()} <span className="badge bg-danger"> News</span>
      </h2>
      {article &&
        article.map((news, index) => {
          return (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
    </div>
  );
};

export default Newsboard;
