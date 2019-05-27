import React from 'react'
import Link from 'next/link'
import Head from '../components/head'

const Home = () => (
  <div>
    <Head
      title="Simon du Preez"
      description="Full stack developer from New Zealand"
      url="https://sdup.nz"
    />

    <div className="hero">
      <h2 className="title">Hi, I'm Simon 👋</h2>
      <p className="description">
        I'm a full stack developer in New Zealand!
      </p>

      <p className="description">Message me at <span><a href="mailto: me@sdup.nz">me@sdup.nz</a></span></p>

      <div className="row">
        <a href="https://blog.sdup.nz">blog.sdup.nz</a>
        <p>
          Take a look at my blog!
        </p>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Home
