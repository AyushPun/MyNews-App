import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://cdn.vox-cdn.com/thumbor/kxX8dibqgW-5AeplBq7LUqaQn9Q=/0x78:4000x2172/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22560470/Elements_7x_Dining_Winter_4000x2250px.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="Error"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-outline-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
