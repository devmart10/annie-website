import React from 'react';
import { NextSeo } from 'next-seo';

const Seo = () => {
  return (
    <NextSeo
      title='Soul-Centered Services'
      description='Soul-Centered Services is a conscious and kind tutoring, nannying, and singing lessons service. Emphasizing a positive learning environment, Soul-Centered Services focuses on assisting you and/or your child in developing a growth mindset and skills to fulfill any goal.'
      canonical='https://soul-centered.now.sh/'
      openGraph={{
        url: 'https://soul-centered.now.sh/',
        type: 'website',
        locale: 'en_IE',
        title: 'Soul-Centered Services',
        description:
          'Soul-Centered Services is a conscious and kind tutoring, nannying, and singing lessons service. Emphasizing a positive learning environment, Soul-Centered Services focuses on assisting you and/or your child in developing a growth mindset and skills to fulfill any goal.',
        site_name: 'Soul-Centered Services',
      }}
      // twitter={{
      //   handle: '@devmart10',
      //   site: '@devmart10',
      //   cardType: 'summary_large_image',
      // }}
    />
  );
};

export default Seo;
