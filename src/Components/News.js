import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const fetchNewsData = async () => {
    props.setprogress(20);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKEY}&page=${page}`
      );
      const data = await response.json();
      const updatedArticles = articles.concat(data.articles);
      props.setprogress(50);
      setArticles(updatedArticles);
      setTotalResults(data.totalResults);
      setLoading(false);
      document.title = `News Updates-${capitalize(props.category)}`
      props.setprogress(100);
    } catch (error) {
       document.write("Your connection is unstable.") 
      // console.log('Error:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    fetchNewsData();
  };
  return (
    <div className='container' style={{marginTop: "45px"}}> 
      <h1 className="text-center py-4"> 𝐷𝑎𝑖𝑙𝑦 𝑈𝑝𝑑𝑎𝑡𝑒𝑠 𝑓𝑟𝑜𝑚 {capitalize(props.category)}</h1>
      <InfiniteScroll dataLength={articles.length} next={fetchData} hasMore={articles.length !== totalResults}  loader={loading && <Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((e, index) => (
              <div className="col md-4" style={{background: "#8653d6"}} key={index}>
                <NewsItems title={e.title ? e.title.slice(0, 40) : ''} description={e.description ? e.description.slice(0, 100) : ''} imageurl={e.urlToImage}  newsUrl={e.url}  publishedAt={e.publishedAt} author={e.author} name={e.source.name}/>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {loading && !articles.length && <Spinner />}
    </div>
  );
};
export default News;