import React, { Component } from "react";

import Resume from "../../assests/files/Navneeth's_Resume.pdf";

export default class Coder extends Component {
  render() {
    const check = { cursor: "pointer" };
    const communicationPage = (
      <>
        <div className="menu">
          <ul className="menu__inner">
            <li className="menu__item">
              <a
                href="https://www.linkedin.com/in/navneeth-nagaraj-9ab90471"
                className="menu__link"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://www.instagram.com/navneethraj1007/"
                className="menu__link"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://twitter.com/Navneeth_gamer"
                className="menu__link"
              >
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://www.facebook.com/Navneethraj1007"
                className="menu__link"
              >
                <i className="fa fa-facebook-square" />
              </a>
            </li>
          </ul>
        </div>
        <div className="menu menu--code" style={{ display: "none" }}>
          <ul className="menu__inner">
            <li className="menu__item">
              <a
                href={Resume}
                download="Navneeth's_Resume.pdf"
                className="menu__link"
                data-switch
              >
                Resume
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://navneethraj1007.blogspot.com/"
                className="menu__link"
                data-switch
              >
                Experiments
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://github.com/NavneethRaj/promowebsite"
                className="menu__link"
                data-switch
              >
                Current Projects
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://github.com/NavneethRaj"
                className="menu__link"
                data-switch
              >
                &gt; Find me on GitHub
              </a>
            </li>
          </ul>
        </div>
      </>
    );

    return (
      <div>
        <main>
          <div
            className="pieces"
            style={{
              backgroundImage: "url(img/manblack.jpg)"
            }}
            data-img-alt="url(img/manalt.jpg)"
            data-img-code="url(img/manblackcode.jpg)"
          />
          <div className="overlay overlay--hidden" />
          <div className="content">
            <div className="content__inner">
              <div className="content__top">
                <h2 className="title">
                  <span
                    className="title__inner mode mode--design"
                    data-switch
                    data-glitch
                  >
                    Navneeth
                  </span>
                </h2>
                <div className="controls">
                  <button
                    className="btn btn--menu mode mode--design"
                    data-switch
                  />
                </div>
              </div>
              {communicationPage}
              <div className="content__bottom">
                <div className="switch mode mode--design">
                  <span
                    className="switch__item switch__item--current"
                    style={check}
                  >
                    Extrovert
                  </span>
                  <span
                    className="switch__item mode mode--design"
                    style={check}
                    data-switch
                    data-glitch
                  >
                    Introvert
                  </span>
                </div>
                <div className="link-wrap">
                  <a
                    href="mailto:navneeth@live.in"
                    className="contact-link mode mode--design"
                    data-switch
                    data-glitch
                  >
                    Work with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="loading" />
        </main>
      </div>
    );
  }
}
