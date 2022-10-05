import Challenge from '@modules/letsTalk/challenge';
import FindUs from '@modules/letsTalk/find-us';
import Head from 'next/head';

const LetsTalk = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <Head>
        <title>Give us a challenge</title>
        <meta name="keywords" content="Case studies, UX research, design" />
        <meta
          name="description"
          content="We are Umvel. A group of experts that know is not enough to come up with the next big idea. You have to make sure it gets implemented - Understand our impact and the benefits of working with us"
        />
      </Head>
      <Challenge />
      <FindUs />
    </div>
  );
};

export default LetsTalk;
