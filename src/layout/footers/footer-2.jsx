import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import social_data from '@/data/social-data';
import { Email, Location } from '@/svg';
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4" data-bg-color="#F5F5F5" style={{ backgroundColor: `rgb(245, 245, 245)` }}>
          <div className="tp-footer-top pt-95 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-1 mb-50">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-talk mb-20">
                        <span>Got Questions? Call us</span>
                        <h4><a href="tel:91-991-991-2047">+91 991-991-2047</a></h4>
                      </div>
                      <div className="tp-footer-contact">
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <Email />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href="mailto:admin@unboxful.com">admin@unboxful.com</a></p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span>
                              <Location />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p><a href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6972846,-74.1443095,11z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank"> Bengaluru, India <br /> New York, USA</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-2 mb-50">
                    <h4 className="tp-footer-widget-title">My Account</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Returns</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-5">
                  <div className="tp-footer-widget footer-col-4-3 mb-50">
                    <h4 className="tp-footer-widget-title">Infomation</h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="tp-footer-widget footer-col-4-4 mb-50">
                    <h4 className="tp-footer-widget-title">Subcribe.</h4>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-subscribe">
                        <p>Our conversation is just getting started</p>
                        <div className="tp-footer-subscribe-form mb-30">
                          <form action="#">
                            <div className="tp-footer-subscribe-input">
                              <input type="email" placeholder="Enter Your Email" />
                              <button type="submit">Subscribe</button>
                            </div>
                          </form>
                        </div>
                        <div className="tp-footer-social-4 tp-footer-social">
                          <h4 className="tp-footer-social-title-4">Follow Us On</h4>
                          {social_data.map(s => <a href={s.link} key={s.id} target="_blank">
                            <i className={s.icon}></i>
                          </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom">
            <div className="container">
              <div className="tp-footer-bottom-wrapper">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="tp-footer-copyright">
                      <p>© {new Date().getFullYear()} All Rights Reserved  |  Made by
                        <Link href="https://kognitec.com/"> ❇️ Kognitec</Link>.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-footer-payment text-md-end">
                      <p>
                        <Image src={pay} alt="pay" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
