import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import { structuredData } from "../store/SEO/Blog/structuredData";
import { Row, Col } from "reactstrap";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  // const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date).toLocaleDateString();

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(state)}
      </script>
      <section className="blogs">
        <div className="aboutbg">
          <div className="container">
            <Row>
              <Col lg={2} />
              <Col lg={8} sm={12}>
                <div className="about-desc">
                  <div>
                    <h2>Antlia Blog Details</h2>
                    <p>Through Antlia we give anyone, anywhere easy access to the digital economy, by bringing a 1000x improvement in blockchain speed, scale, cost and user experience. To do this we’ve built a hardcore team of entrepreneurs, engineers and researchers with which we can literally build rockets.</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} />
            </Row>
          </div>
        </div>
        <div className="container">
          <Row className="blog-details">
            <Col lg={12}>
              <div className="blog-box">
                <h4><div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div></h4>
                <div className="likes-date">
                  <div className="like-view">
                    {/* <span className="likes"><i className="fa fa-heart"></i> <p>1,234</p></span> */}

                    {/* <span className="views"><i className="fa fa-eye"></i>&nbsp;<p>{info.views}&nbsp;views</p></span> */}
                  </div>
                  <div className="date">
                    <p>{date}</p>
                  </div>
                </div>
                <div className="blog-img img-hover-zoom--slowmo">
                  {state.theme.featured.showOnPost && (
                    <FeaturedMedia id={post.featured_media} />
                  )}
                </div>
                <div className="blog-content">
                  <div className="desc">
                    {/* {this.state.contentEditor ? <Editor initialContentState={this.state.contentEditor} readOnly={true} toolbarHidden
                    editorClassName="demo-editor" /> : ""} */}
                    <Content>
                      <Html2React html={post.content.rendered} />
                    </Content>
                  </div>
                  <Link link="/blog">Back to list</Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>

    // <Container>
    //   <div>
    //     <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

    //     {/* Only display author and date on posts */}
    //     {data.isPost && (
    //       <div>
    //         {author && (
    //           <StyledLink link={author.link}>
    //             <Author>
    //               By <b>{author.name}</b>
    //             </Author>
    //           </StyledLink>
    //         )}
    //         <DateWrapper>
    //           {" "}
    //           on <b>{date.toDateString()}</b>
    //         </DateWrapper>
    //       </div>
    //     )}
    //   </div>

    //   {/* Look at the settings to see if we should include the featured image */}
    //   {state.theme.featured.showOnPost && (
    //     <FeaturedMedia id={post.featured_media} />
    //   )}

    //   {/* Render the content using the Html2React component so the HTML is processed
    //    by the processors we included in the libraries.html2react.processors array. */}
    //   <Content>
    //     <Html2React html={post.content.rendered} />
    //   </Content>
    // </Container>
  ) : null;
};

export default connect(Post);

// const Container = styled.div`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
// `;

// const Title = styled.h1`
//   margin: 0;
//   margin-top: 24px;
//   margin-bottom: 8px;
//   color: rgba(12, 17, 43);
// `;

// const StyledLink = styled(Link)`
//   padding: 15px 0;
// `;

// const Author = styled.p`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
//   display: inline;
// `;

// const DateWrapper = styled.p`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
//   display: inline;
// `;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
