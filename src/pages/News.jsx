import React, { useState, useEffect } from 'react';
import '../css/News.css';
import NavBar from "../Components/NavBar.jsx";

const apiKey = "7d3de20fe2bc4e13ad4217a1bef85aca"

function News () {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
    async function fetchNews() {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      const data = await response.json();
      setNews(data.articles.slice(0, 12));
    };
  }, []);

  return (
    <>
    <NavBar/>
    <div className='news-background'>
      <div className="article-container">
        <div className="article-grid">
          {news.map((article) => (
              <div key={article.title} className="article">
              <h3 style={{ fontSize: '1.5rem' }}>{article.title}</h3>
              <img src={article.urlToImage} alt={article.title} />
              <p style={{ fontSize: '1rem' }}>
                  {article.description}{' '}
                  <span className="link">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                      (Read more)
                  </a>
                  </span>
              </p>
              </div>
          ))}
          </div>
      </div>
    </div>
    </>
  );
};

export default News;
