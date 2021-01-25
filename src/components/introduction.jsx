import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/sky.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          {/* <h1 style="color:grey;">Hi! <br />I'm Sarthak</h1> */}
                          <h1  style={{color:'floralwhite'}}>Hi! <br />I'm Sarthak</h1>
                          <p  style={{color:'floralwhite'}}><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1zwjRE3Qhx4Km13rM28pAA0xTVcsM_Id0/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color:'floralwhite'}}>View CV<i className="icon-download4" style={{color:'floralwhite'}}/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/sky.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color:'floralwhite'}}>Projects I have <br></br> build!</h1>
                          <p style={{color:'floralwhite'}}><a className="btn btn-primary btn-learn" href="https://github.com/sarthakgupte" target="_blank" rel="noopener noreferrer" style={{color:'floralwhite'}}>View Projects <i className="icon-briefcase3" style={{color:'floralwhite'}} /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
