//  https://newsapi.org/v2/top-headlines?country=in&apiKey=f46672c39eb0493cbdf8f3c09d617f5d
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=f46672c39eb0493cbdf8f3c09d617f5d";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>TOP HEADLINES</h1>

          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                        <NewsItem
                        title={element.title ? element.title.slice(0, 50) : ""}
                        description={
                            element.description ? element.description.slice(0, 90) : ""
                        }
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
                        />
                    </div>;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
