// ...existing code...
import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    const dateString = date ? new Date(date).toGMTString() : '';
    return (
        <div className="my-3">
            <div className="card news-card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }> 
                    <span className="badge rounded-pill bg-danger"> {source || 'Unknown'} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top news-img" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>

                    {/* scrollable description area so cards remain uniform */}
                    <div className="news-desc mb-2">
                        <p className="card-text">{description}</p>
                    </div>

                    <div className="mt-auto">
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {dateString}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
// ...existing code...