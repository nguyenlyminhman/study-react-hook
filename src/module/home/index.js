import React from 'react';

function Home() {
    return (
        <div >
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-5">Hook là một hàm đặc biệt cho phép bạn sử dụng các tính năng của React (mà không cần phải tạo class)!</h1>
                                <a href="#hook" className="btn btn-outline btn-xl js-scroll-trigger">Start Study Now!</a>
                            </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                            <div className="device-container">
                                <div className="device-mockup iphone6_plus portrait white">
                                    <div className="device">
                                        <div className="screen">
                                            {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                            <img src="./react-hook.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="button">
                                            {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* End Navigation */}
            <section className="download bg-primary text-center" id="hook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="section-heading">Discover what all the Hook is about!</h2>
                            <div className="badges">
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-state">useState</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-effect">useEffect</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-context">useContext</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-reducer">useReducer</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-callback">useCallback</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-memo">useMemo</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-ref">useRef</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-imperative-handle">useImperativeHandle</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-layout-effect">useLayoutEffect</a> &nbsp;&nbsp;&nbsp;
                                <a className="badge-link btn btn-outline btn-md js-scroll-trigger" href="/use-debug-value">useDebugValue</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="features" id="features">
  <div className="container">
    <div className="section-heading text-center">
      <h2>Unlimited Features, Unlimited Fun</h2>
      <p className="text-muted">Check out what you can do with this app theme!</p>
      <hr />
    </div>
    <div className="row">
      <div className="col-lg-4 my-auto">
        <div className="device-container">
          <div className="device-mockup iphone6_plus portrait white">
            <div className="device">
              <div className="screen">
                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="button">
                {/* You can hook the "home button" to some JavaScript events or just remove it */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 my-auto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-screen-smartphone text-primary" />
                <h3>Device Mockups</h3>
                <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-camera text-primary" />
                <h3>Flexible Use</h3>
                <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-present text-primary" />
                <h3>Free to Use</h3>
                <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-lock-open text-primary" />
                <h3>Open Source</h3>
                <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Home;