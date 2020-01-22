import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Full = dynamic({ loader: () => import('../containers/Full') });
const Content = dynamic({ loader: () => import('../containers/Content') });

class HomePage extends Component {
  render() {
    return (
      <div>
        <Full>
          <Head>
            <title>Trang Chủ</title>

            {/* SEO */}
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="keywords" content="Anle | Trang Chủ" />
            <meta name="description" content="Anle | Trang Chủ" />
            <meta name="type" content="website" />
            <meta name="robots" content="INDEX, FOLLOW" />
            <meta name="language" content="Vietnamese" />

            {/* Open Graph data */}
            <meta property="fb:app_id" content="380743335865666" />
            <meta property="og:type" content="news" />
            <meta property="og:url" content="" />
            <meta property="og:title" content="Anle | Trang Chủ" />
            <meta property="og:image" content="" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:description" content="Anle | Trang Chủ" />
            <meta property="og:site_name" content="" />
            <meta property="og:locale" content="vi_VN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="" />
            <meta name="twitter:title" content="Anle | Trang Chủ" />
            <meta name="twitter:description" content="Anle | Trang Chủ" />
            <meta name="twitter:image" content="" />
          </Head>
          <Content />
        </Full>
      </div>
    );
  }
}

export default HomePage;
