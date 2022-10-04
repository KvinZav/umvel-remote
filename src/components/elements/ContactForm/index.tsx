import React, { FC, FormEvent, useState } from 'react';
import SendIcon from '@elements/SendIcon';
import { useForm } from '@hooks/index';
import { emailValidation, isNotEmptyValidation } from '@utils/validations';
import { post } from '@fetcher/post';
import { environment } from '@environments/index';


const ContactForm: FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'light' }): JSX.Element => {
  const { email, onChangeInput } = useForm({ email: ['', [emailValidation, isNotEmptyValidation]] });
  const [currentResponse, setCurrentResponse] = useState({ error: false, message: '' });
  const [emailSend, setEmailSend] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.error) {
      setCurrentResponse({
        error: true,
        message: 'Your email is incorrect, please check and write again.',
      });
      setError(true);
      return;
    }

    const response = await post(environment.OBJECTS_CONTACT, {
      properties: { email: email.value, comment: 'hello' },
    });

    if (response.error) {
      setCurrentResponse({
        error: false,
        message: 'This email has already been sent, please write other email.',
      });
      setError(false);
      return;
    }
    setCurrentResponse({ error: false, message: 'Your email was successfully sent!' });
    setEmailSend(true);
  };

  const onFocus = () => {
    // clear error message
    setError(false);
    setCurrentResponse({ error: false, message: '' });
  };

  return (
    <form onSubmit={onSubmit} method="post">
      {!emailSend ? (<div className='mt-16'>
        <div className={`flex rounded-full border p-1 justify-between ${theme === 'light' ? 'bg-transparent':'bg-secondary-90'} ${error ? 'border-prisma-red' : 'border-secondary-80'}`}>
          <input
            type="text"
            id="e-mail"
            name="email"
            placeholder="Email"
            className={`rounded-full py-3 px-6 w-5/6 outline-none bg-transparent placeholder-secondary-50 ${error && 'text-prisma-red placeholder-prisma-red'}`}
            onChange={onChangeInput}
            value={email.value}
            onFocus={onFocus}
          />
          <button
            disabled={email.errors.length > 1}
            className={`border rounded-full py-3 px-6 flex justify-center items-center ${error && 'border-prisma-red'}`}
            type="submit"
          >
            <SendIcon fill={error ? '#CE4C4C' : (theme === 'light' ? '#000' : '#fff')} />
          </button>
        </div>
        <p className={`md:block text-xs pt-2 px-6 text-prisma-red`}>{currentResponse.message}</p>
      </div>) :
        <p className={`mt-16 text-xl font-bold text-center lg:text-left ${theme === 'light' ? 'text-primary-black' : 'text-primary-white'}`}>{currentResponse.message}</p>
      }
    </form>
  );
};

export default ContactForm;
