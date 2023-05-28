import React from 'react'

const NewsItems = (props) => {
    let {title, description, imageurl, newsUrl, publishedAt, author, name} = props;
    return (
        <div className="card my-3" style={{width: "20rem", height: "33rem", background: "#E5E4E2"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{right: "-15%", zIndex: "11" }}>{name}</span>
            <img src={!imageurl?"https://s.yimg.com/uu/api/res/1.2/FXq_.4L_.Sx4Rct848idzw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/f69f4d30-e792-11ed-bf97-4662c952f1f6.cf.jpg":imageurl} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} {new Date(publishedAt).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm my-3">Read More</a>
         </div>
         </div>
    )
}
export default NewsItems
