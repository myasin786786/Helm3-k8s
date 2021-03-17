import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import { Row, Col, Spinner } from "reactstrap";
import FeaturedMedia from "../featured-media";

const Events = ({ state, actions }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getPostsFromCategory = ({ post }, categoryId) => Object.keys(post).map(postId => post[postId])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));
  const blogs = () => {
    setData([])
    if (Object.keys(state.source.category).length !== 0) {
      Object.keys(state.source.category).reduce(() => {
        const posts = getPostsFromCategory(state.source, 3)
        setData(posts.reverse())
        setLoading(false);
      })
    }
  }
  useEffect(() => {
    blogs()
  }, [data])
  return (
    <section className="blogbg event" id="events">
      <div className="blog-top">
        <div className="aboutbg">
          <div className="container">
            <Row>
              <Col lg={2} />
              <Col lg={8} sm={12}>
                <div className="about-desc">
                  <div>
                    <h2>Antlia Events</h2>
                    <p>Through Antlia we give anyone, anywhere easy access to the digital economy, by bringing a 1000x improvement in blockchain speed, scale, cost and user experience. To do this we’ve built a hardcore team of entrepreneurs, engineers and researchers with which we can literally build rockets.</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} />
            </Row>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="event-list">
          {loading ?
            <div className="loadcontainer">
              <Spinner className="spinloader" />
            </div> :
            data.length === 0 ?
              <div className="loadcontainer">
                <h2>No Record Found...</h2>
              </div>
              :
              <Row>
                {data.map(({ type, id }, index) => {
                  const item = state.source[type][id];
                  const date = new Date(item.date).toLocaleDateString();
                  return (
                    <Col lg={4} md={6} sm={12}>
                      <div className="blog-box" key={index} onClick={() => actions.router.set(item.link)} spy={true} smooth={true} duration={500}>
                        <div className="blog-image">
                          <div className="blog-img img-hover-zoom--slowmo">
                            {state.theme.featured.showOnList && (
                              <FeaturedMedia id={item.featured_media} />
                            )}
                          </div>
                        </div>
                        <div className="blog-content">
                          <h4>{item.title.rendered}</h4>
                          <div className="likes-date">
                            {/* <div className="like-view">
                                <span className="views"><i className="fa fa-eye"></i> <p>{info.data.views}&nbsp;views</p></span>
                              </div> */}
                            <div className="date">
                              <p>{date}</p>
                            </div>
                          </div>
                          <p className="desc"><div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div></p>
                        </div>
                        <div className="blog-footer">
                          <div className="moreblog">
                            <button
                              onClick={() => actions.router.set(item.link)}
                              className="blogbtn"
                            >
                              Read More
                              </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                }
                )}
              </Row>
          }
        </div>
      </div>
    </section>
  );
}

export default connect(Events);
