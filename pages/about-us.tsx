import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import React from 'react';
import useSWR from 'swr';

const AboutUsPage = () => {

  const { data } = useSWR(environment.ABOUT_US, get, {
    revalidateOnFocus: false,
  });

  console.log(data);
  

  return(
    <>
    </>
  )
}

export default AboutUsPage;