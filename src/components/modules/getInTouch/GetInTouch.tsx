import SendIcon from '@elements/SendIcon';
import { environment } from '@environments/index';
import { post } from '@fetcher/post';
import { useForm } from '@hooks/useForm';
import { emailValidation } from '@utils/validations/email.validation';
import { FormEvent, useState } from 'react';

const errorStyles = {
  input: {borderColor: '#CE4C4C', color: '#CE4C4C'},
  label: {color: '#CE4C4C'},
  divInput: {borderColor: '#CE4C4C'},
  fill: '#CE4C4C'
};

const defaultStyles = {
  input: null,
  label: null,
  divInput: null,
  fill: '#000'
};

export const GetInTouch = () => {
  const { email, onChangeInput } = useForm({ email: ['', emailValidation] });
  const [currentResponse, setCurrentResponse] = useState({ error: false, message: '' });
  const [emailSend, setEmailSend] = useState(false);
  const [formStyles, setFormStyles] = useState(defaultStyles);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.error) {
      setCurrentResponse({
        error: true,
        message: 'Your email is incorrect, please check and write again.',
      });
      setFormStyles(errorStyles);
      return;
    }

    const response = await post(environment.OBJECTS_CONTACT, {
      properties: { email: email.value },
    });

    if (response.error) {
      setCurrentResponse({
        error: false,
        message: 'This email has already been sent, please write other email.',
      });
      setFormStyles(defaultStyles);
      return;
    }
    setCurrentResponse({ error: false, message: 'Your email was successfully sended!' });
    setEmailSend(true);
  };

  return (
    <section className="w-full mt-[104px] md:mt-0 mb-[96px] md:mb-[224px] px-16 lg:grid grid-cols-10 grid-rows-2 lg:px-[20%] lg:gap-x-[32px] items-center">
      <div className="px-[72px] md:px-0" style={{ gridColumn: '1/4', gridRow: '1/3' }}>
        <h3 className="font-bold text-[28px] text-center md:text-[58px]">Get in Touch!</h3>
      </div>
      <div
        className="text-center mb-8 lg:mb-0 lg:text-left"
        style={{ gridColumn: '4/11', gridRow: '1/2' }}
      >
        <p className="text-base md:text-2xl">
          Enter your email address, and we’ll get in touch to plan a coffee.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className={`flex flex-col justify-center`}
        style={{ gridColumn: '4/11', gridRow: '2/3' }}
      >
        {
          !emailSend &&
          <>
            <div className="w-full md:hidden">
              <input
                value={email.value}
                onChange={onChangeInput}
                name="email"
                type="text"
                className="w-full py-4 px-1 border border-[#CCCCCC] outline-none rounded-[50px] text-center"
                placeholder="Email"
                style={formStyles.input}
              />
              <p className="text-xs pt-2 px-6" style={formStyles.label}>{currentResponse.message}</p>
              <button
                className="w-full py-4 px-1 border border-[#000] rounded-[32px] mt-6"
                type="submit"
              >
                Send
              </button>
            </div>
            <div
              className="hidden md:flex rounded-full border border-secondary-20 p-1 justify-between"
              style={formStyles.divInput}>
              <input
                value={email.value}
                onChange={onChangeInput}
                name="email"
                type="text"
                placeholder="Email"
                className="rounded-full py-3 px-6 w-5/6 outline-none bg-transparent"
              />
              <button
                className="border rounded-full py-3 px-6 flex justify-center items-center"
                type="submit"
                style={formStyles.divInput}
              >
                <SendIcon fill={formStyles.fill} />
              </button>
            </div>
            <p className={`hidden md:block text-xs pt-2 px-6`} style={formStyles.label}>{currentResponse.message}</p>
          </>
        }
      {emailSend && <p className="text-xl font-bold text-center lg:text-left">{currentResponse.message}</p>}
      </form>
    </section>
  );
};
