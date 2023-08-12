import React, { Component } from "react";

export class Newsitems extends Component {
 
  render() {
   let  {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display:'flex',
        justifyContent:'flex-end',
        psition:'absolute',
        right:'0'}}>
        <span class=" badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={!imageUrl?"https://st.depositphotos.com/2692701/3172/i/450/depositphotos_31720091-stock-photo-single-evergreen-tree.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-info">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
