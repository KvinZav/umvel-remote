import React, { FC } from 'react';
import SendIcon from '@elements/SendIcon';

const ContactForm: FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'light' }): JSX.Element => {
  return (
    <form action="/send-data-here" method="post">
      <div className="flex rounded-full border border-secondary-20 p-1 justify-between ">
        <input
          type="email"
          id="e-mail"
          name="e-mail"
          placeholder="Email"
          className="rounded-full py-3 px-6 w-5/6 outline-none bg-transparent"
        />
        <button
          className="border rounded-full py-3 px-6 flex justify-center items-center"
          type="submit"
        >
          <SendIcon fill={theme === 'light' ? '#000' : '#fff'} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
