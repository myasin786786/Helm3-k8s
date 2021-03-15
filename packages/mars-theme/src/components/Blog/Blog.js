import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import { Row, Col } from "reactstrap";
import { Spinner } from 'reactstrap';
import FeaturedMedia from "../featured-media";

const Blog = ({ state, actions }) => {
    const [loading, setLoading] = useState(true)
    const data = Object.values(state.source.post);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <section className="blogs">
            <div className="aboutbg">
                <div className="container">
                    <Row>
                        <Col lg={2} />
                        <Col lg={8} sm={12}>
                            <div className="about-desc">
                                <div>
                                    <h2>Antlia Blogs</h2>
                                    <p>Through Antlia we give anyone, anywhere easy access to the digital economy, by bringing a 1000x improvement in blockchain speed, scale, cost and user experience. To do this we’ve built a hardcore team of entrepreneurs, engineers and researchers with which we can literally build rockets.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} />
                    </Row>
                </div>
            </div>
            <div className="container">
                {loading ?
                    <div className="loadcontainer">
                        <Spinner className="spinloader" />
                    </div> :
                    data.length === 0 ?
                        <div className="loadcontainer">
                            <h2>No Record Found...</h2>
                        </div>
                        :
                        <>
                            <Row className="top-blogs">
                                <Col lg={8} sm={12}>
                                    {data.reverse().slice(0, 1).map(({ type, id }, index) => {
                                        const item = state.source[type][id];
                                        const date = new Date(item.date).toLocaleDateString();
                                        return (
                                            <div className="blog-box-l img-hover-zoom--slowmo" onClick={() => actions.router.set(item.link)} key={index}>
                                                {state.theme.featured.showOnList && (
                                                    <FeaturedMedia id={item.featured_media} />
                                                )}
                                                <div className="blog-in">
                                                    <div className="blog-content">
                                                        <h2>{item.title.rendered}</h2>
                                                        <div className="likes-date">
                                                            {/* <div className="like-view">
                                    <span className="views"><i className="fa fa-eye"></i><p>{info.fields.views.integerValue}&nbsp;views</p></span>
                                  </div> */}
                                                            <div className="date">
                                                                <p>{date}</p>
                                                            </div>
                                                        </div>
                                                        <p><div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div></p>
                                                        <button className="readmore" onClick={() => actions.router.set(item.link)}>Read more...</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </Col>
                                <Col lg={4} sm={12} className="right-blog">
                                    {data.reverse().slice(1, 3).map(({ type, id }, index) => {
                                        const item = state.source[type][id];
                                        const date = new Date(item.date).toLocaleDateString();
                                        return (
                                            <div key={index} className="blog-box-s img-hover-zoom--slowmo" onClick={() => actions.router.set(item.link)}>
                                                {state.theme.featured.showOnList && (
                                                    <FeaturedMedia id={item.featured_media} />
                                                )}
                                                <div className="blog-in">
                                                    <div className="blog-content">
                                                        <h2>{item.title.rendered}</h2>
                                                        <div className="likes-date">
                                                            {/* <div className="like-view">
                                <span className="views"><i className="fa fa-eye"></i> <p>{info.fields.views.integerValue}&nbsp;views</p></span>
                              </div> */}
                                                            <div className="date">
                                                                <p>{date}</p>
                                                            </div>
                                                        </div>
                                                        <p><div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div></p>
                                                        <button className="readmore" onClick={() => actions.router.set(item.link)}>Read more...</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </Col>
                            </Row>
                            <Row className="blog-list">
                                {data.reverse().slice(3).map(({ type, id }, index) => {
                                    const item = state.source[type][id];
                                    const date = new Date(item.date).toLocaleDateString();
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index}>
                                            <div className="blog-box" onClick={() => actions.router.set(item.link)}>
                                                <div className="num-img">
                                                    {/* <div className="num">
                        <span className="count">{index+1}</span>
                      </div> */}
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
                          <span className="views"><i className="fa fa-eye"></i> <p>{info.fields.views.integerValue}&nbsp;views</p></span>
                        </div> */}
                                                        <div className="date">
                                                            <p>{date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="desc">
                                                        <p><div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div></p>
                                                    </div>
                                                    <button className="readmore" onClick={() => actions.router.set(item.link)}>Read more...</button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }
                                )}
                            </Row>
                        </>
                }
            </div>
        </section>
    );
}

export default connect(Blog);
