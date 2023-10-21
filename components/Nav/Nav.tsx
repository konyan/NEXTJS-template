import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div>
      <header id="masthead" className="site-header" role="banner">
        <nav
          id="primary-navigation"
          className="site-navigation primary-navigation"
          role="navigation"
        >
          <div className="layout-medium">
            <h1 className="site-title">
              <a href="index.html" rel="home">
                <Image src="/next.svg" alt="logo" fill />
                <span className="screen-reader-text">Haley Dust</span>
              </a>
            </h1>
            <h1 className="site-title">
              <a href="../index.html" rel="home">
                Haley Dust
              </a>
            </h1>

            <a className="menu-toggle">
              <span className="lines"></span>
            </a>

            <div className="nav-menu">
              <ul>
                <li>
                  <a href="index.html">HOME</a>
                  <ul>
                    <li>
                      <a href="blog-bold-with-sidebar.html">Blog Bold</a>
                      <ul>
                        <li>
                          <a href="blog-bold.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-irregular-with-sidebar.html">
                        Blog Irregular
                      </a>
                      <ul>
                        <li>
                          <a href="blog-irregular.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-creative-with-sidebar.html">
                        Blog Creative
                      </a>

                      <ul>
                        <li>
                          <a href="blog-creative.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-waterfall-with-sidebar.html">
                        Blog Waterfall
                      </a>

                      <ul>
                        <li>
                          <a href="blog-waterfall.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-regular-with-sidebar.html">Blog Regular</a>

                      <ul>
                        <li>
                          <a href="blog-regular.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-grid-with-sidebar.html">Blog Grid</a>

                      <ul>
                        <li>
                          <a href="blog-grid.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-list-with-sidebar.html">Blog List</a>

                      <ul>
                        <li>
                          <a href="blog-list.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-creative-first-full-with-sidebar.html">
                        1st Full + Creative
                      </a>

                      <ul>
                        <li>
                          <a href="blog-creative-first-full.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-irregular-first-full-with-sidebar.html">
                        1st Full + Irregular
                      </a>

                      <ul>
                        <li>
                          <a href="blog-irregular-first-full.html">
                            Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-grid-first-full-with-sidebar.html">
                        1st Full + Grid
                      </a>

                      <ul>
                        <li>
                          <a href="blog-grid-first-full.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-list-first-full-with-sidebar.html">
                        1st Full + List
                      </a>

                      <ul>
                        <li>
                          <a href="blog-list-first-full.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="typo.html">Features</a>

                  <ul>
                    <li>
                      <a href="blog-list-first-full-with-sidebar.html">
                        Header Styles
                      </a>

                      <ul>
                        <li>
                          <a href="index.html">Default</a>
                        </li>
                        <li>
                          <a href="blog-regular-with-sidebar.html">
                            classNameic Light
                          </a>
                        </li>
                        <li>
                          <a href="blog-regular.html">classNameic Dark</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-single.html">Single Post</a>

                      <ul>
                        <li>
                          <a href="blog-single.html">Standart Post</a>
                        </li>
                        <li>
                          <a href="blog-single-with-sidebar.html">
                            Post with sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-classNameic.html">
                            classNameic Post
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-video.html">Video Post</a>
                        </li>
                        <li>
                          <a href="blog-single-audio.html">Audio Post</a>
                        </li>
                        <li>
                          <a href="blog-single-gallery.html">Gallery Post</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="resume.html">Resume</a>
                    </li>
                    <li>
                      <a href="typo.html">Typography</a>
                    </li>
                    <li>
                      <a href="shortcodes.html">Shortcodes</a>
                    </li>
                    <li>
                      <a href="page-full.html">Page Full Width</a>
                    </li>
                    <li>
                      <a href="#">Others</a>

                      <ul>
                        <li>
                          <a href="grid.html">Grid</a>
                        </li>
                        <li>
                          <a href="form-elements.html">Forms</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="cat-archives.html">ADVENTURE</a>
                </li>
                <li>
                  <a href="cat-archives.html">LIFE</a>
                </li>
                <li>
                  <a href="about.html">ABOUT ME</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>

            <a className="search-toggle toggle-link"></a>

            <div className="search-container">
              <div className="search-box" role="search">
                <form method="get" className="search-form" action="#">
                  <label>
                    Search Here
                    <input
                      type="search"
                      id="search-field"
                      placeholder="type and hit enter"
                      name="s"
                    />
                  </label>
                  <input
                    type="submit"
                    className="search-submit"
                    value="Search"
                  />
                </form>
              </div>
            </div>
            <div className="social-container">
              <Link className="social-link facebook" href="#"></Link>
              <Link className="social-link twitter" href="#"></Link>
              <Link className="social-link vine" href="#"></Link>
              <Link className="social-link dribbble" href="#"></Link>
              <Link className="social-link instagram" href="#"></Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
