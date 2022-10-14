import React, { FC, FormEvent, useState } from 'react';
import SendIcon from '@elements/SendIcon';
import { useForm } from '@hooks/index';
import { emailValidation, isNotEmptyValidation } from '@utils/validations';
import { post } from '@fetcher/post';
import { environment } from '@environments/index';
import { Send } from '@mui/icons-material'

const classesByStatus = {
  light: {
    default: {
      input: 'bg-primary-white border-secondary-20',
      button: 'bg-primary-white border-primary-black',
      color: '#000000'
    },
    focused: {
      input: 'bg-primary-white border-primary-black',
      button: 'bg-primary-white border-primary-black hover:bg-primary-black hover:text-primary-white',
      color: '#ffffff'
    },
    hover: {
      input: 'bg-primary-white border-secondary-20',
      button: 'bg-primary-white border-primary-black hover:bg-primary-black hover:text-primary-white',
      color: '#000000'
    },
    error: {
      input: 'bg-primary-white border-prisma-red',
      button: 'bg-primary-white border-prisma-red cursor-not-allowed text-prisma-red',
      color: '#CE4C4C'
    }
  },
  dark: {
    default: {
      input: 'bg-secondary-90 border-secondary-80',
      button: 'bg-secondary-90 border-secondary-80',
      color: '#ffffff'
    },
    focused: {
      input: 'bg-secondary-90 border-primary-white',
      button: 'bg-secondary-90 text-primary-white hover:bg-primary-white hover:border-primary-white hover:text-primary-black',
      color: '#000000'
    },
    hover: {
      input: 'bg-secondary-90 border-secondary-80',
      button: 'bg-secondary-90 border-secondary-80 hover:bg-primary-white hover:text-primary-black',
      color: '#ffffff'
    },
    error: {
      input: 'bg-secondary-90 border-prisma-red',
      button: 'bg-secondary-90 border-prisma-red text-prisma-red cursor-not-allowed',
      color: '#CE4C4C'
    }
  }
}

const ContactForm: FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'light' }): JSX.Element => {
  const { email, onChangeInput } = useForm({ email: ['', [emailValidation, isNotEmptyValidation]] });
  const [currentResponse, setCurrentResponse] = useState({ error: false, message: '' });
  const [emailSend, setEmailSend] = useState(false);

  const [currentStatus, setCurrentStatus] = useState<'default' | 'hover' | 'focused' | 'error'>('default')
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.error) {
      setCurrentResponse({
        error: true,
        message: 'Your email is invalid, please check and write again.',
      });
      setCurrentStatus('error');
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
      setCurrentStatus('default');
      return;
    }
    setCurrentResponse({ error: false, message: 'Your email was successfully sent!' });
    setEmailSend(true);
  };

  const handleFocus = () => {
    // clear error message
    setCurrentResponse({ error: false, message: '' });
    setCurrentStatus('focused')
  };

  const handleBlur = () => {
    setCurrentStatus('default')
  }

  const handleHoverIn = () => {
    if(currentStatus !== 'focused' && currentStatus !== 'error') setCurrentStatus('hover')
  }

  const handleHoverOut = () => {
    if(currentStatus !== 'focused' && currentStatus !== 'error') setCurrentStatus('default')
  }

  return (
    <form onSubmit={onSubmit} method="post">
      {!emailSend ? (<div className=''>
        <div
          className={`flex rounded-full border p-1 justify-between ${classesByStatus[theme][currentStatus].input}`}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <input
            type="text"
            id="e-mail"
            name="email"
            placeholder="Email"
            className={`text-s2 rounded-full py-3 px-6 w-5/6 outline-none bg-transparent placeholder-secondary-50 ${currentStatus === 'error' && 'text-prisma-red placeholder-prisma-red'}`}
            onChange={onChangeInput}
            value={email.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            disabled={email.errors.length > 1}
            className={`cursor-pointer border outline-none rounded-full py-3 px-6 flex justify-center items-center ${classesByStatus[theme][currentStatus].button}`}
            type="submit"
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
          >
            <Send />
          </button>
        </div>
        <p className={`md:block text-s4 pt-2 px-6 text-prisma-red h-4`}>{currentResponse.message}</p>
      </div>) :
        <p className={`mt-16 text-m5 font-bold text-center lg:text-left ${theme === 'light' ? 'text-primary-black' : 'text-primary-white'}`}>{currentResponse.message}</p>
      }
    </form>
  );
};

export default ContactForm;
