//  https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f46672c39eb0493cbdf8f3c09d617f5d
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46672c39eb0493cbdf8f3c09d617f5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.updateNews();
  }

  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
      loading: true
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
      loading: true
    });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center my-4">
            <strong>TOP HEADLINES</strong>
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
