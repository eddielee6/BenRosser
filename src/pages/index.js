import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import benimg from '../assets/images/ben.jpg';
import speakimg from '../assets/images/speak.jpg';
import pcimg from '../assets/images/pc.jpg';
import faimg from '../assets/images/fa.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About Ben
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Ben Rosser</h2>
            <p className="text-white-50">
              Having served 10 years in the police force, Ben founded an award winning organisation named The Pythian Club. Offering a variety of real opportunities to our young community in the East Midlands. 
              <br /><br />
              At 23 he joined Nottinghamshire Police. His goal, to support the community and be a positive influence to people living in Nottingham. 
              <br /><br />
              He was proud to serve the people of Nottingham, however during the 10 years service he saw that policing was changing due to government cuts, from being proactive to reactive. This disillusioned him, so he took it upon himself to start up a youth/community club to get back to being proactive. It was a risk but he passionate about supporting and engaging with young people directly. This resulted in forming The Pythian Club back in 2014.
            </p>
            <img src={benimg} alt="Benjamin Rosser" className="benimg" />
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={speakimg} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Motivational Speaking</h4>
              <p className="text-black-50 mb-0">
                Ben Rosser is a world class public speaker, traveling across the UK to deliver important life changing messages to those who need it.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={faimg} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Education</h4>
                  <p className="mb-0 text-white-50">
                    Working alongside universities and organisations such as the FA Ben has delivered motivational talks inspirating hundreads of young people to fulfil their potential.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={pcimg} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Community</h4>
                  <p className="mb-0 text-white-50">
                    During Ben's 10 years in the Police Force and subsequent years with The Pythian Club he has motivated and changed the lives of countless people, providing invaluable support to the community.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
