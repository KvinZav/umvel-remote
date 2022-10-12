import BasicButton from '@elements/button';
import { useState } from 'react';
import { environment } from '@environments/index';
import { post } from '@fetcher/post';
import { REGEX_ONLY_NUMBERS, REGEX_EMAIL } from '@constants/emailRegexp.constant';

const Challenge = () => {
  const [isTheNameValid, setNameValidity] = useState(true);
  const [isTheEmailValid, setEmailValidity] = useState(true);
  const [isThePhoneValid, setPhoneValidity] = useState(true);
  const [isTheCommentValid, setCommentValidity] = useState(true);
  const [hasTheFormBeenSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstname: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      comment: event.target.comment.value,
    };

    const isTheFormValid = getFormValidationStatus(data);
    markInvalidInputs(data);

    if (isTheFormValid) {
      await post(environment.OBJECTS_CONTACT, {
        properties: data,
      });
      setFormSubmitted(true);
    }
  };

  function markInvalidInputs(data): void {
    const { firstname, email, phone, comment } = data;
    setNameValidity(isTheNameInputValid(firstname));
    setEmailValidity(isTheEmailInputValid(email));
    setPhoneValidity(isThePhoneInputValid(phone));
    setCommentValidity(isTheCommentInputValid(comment));
  }

  function getFormValidationStatus(data): boolean {
    const { firstname, email, phone, comment } = data;
    const isTheFormValid =
      isTheNameInputValid(firstname) &&
      isTheEmailInputValid(email) &&
      isThePhoneInputValid(phone) &&
      isTheCommentInputValid(comment);
    return isTheFormValid;
  }

  function isTheNameInputValid(nameValue: string): boolean {
    return nameValue !== '';
  }

  function isTheEmailInputValid(emailValue: string): boolean {
    return emailValue !== '' && emailValue.length < 80 && REGEX_EMAIL.test(emailValue);
  }

  function isThePhoneInputValid(phoneValue: string): boolean {
    if (phoneValue === '') {
      return true;
    } else {
      return phoneValue.length < 15 && REGEX_ONLY_NUMBERS.test(phoneValue);
    }
  }

  function isTheCommentInputValid(commentValue: string): boolean {
    return commentValue.length < 500;
  }

  return (
    <section className="aspect-square xl:p-20 lg:p-10 md:p-32 px-[72px] pt-7 pb-[132px] md:border-solid md:border-[#e6e6e6] md:border">
      <h1 className="text-m1 font-bold">We’re up for the challenge</h1>
      <p className="text-s2 mt-2 xl:mt-4">
        Provide your details and we’ll get in touch as soon as humanly possible.
      </p>
      <form className="xl:mt-12 lg:mt-10 md:mt-12 mt-10" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            type="text"
            className={
              'text-s2 outline-none w-full pl-0 pr-0 pb-2 h-[32px] border-solid border-b ' +
              (isTheNameValid
                ? 'border-b-[#e6e6e6] placeholder:text-[#000] focus:border-b-[#000]'
                : 'border-b-[#CE4C4C] placeholder:text-[#CE4C4C] focus:border-b-[#CE4C4C] text-[#CE4C4C]')
            }
            placeholder="Name"
            id="name"
            name="name"
          />
          {!isTheNameValid && (
            <p className="text-s4 text-[#CE4C4C] absolute top-[calc(100% + 8px)]">
              This field is mandatory.
            </p>
          )}
        </div>
        <div className="md:flex mt-10 xl:mt-12">
          <div className="relative  md:w-1/2 w-full md:mr-8 mr-0">
            <input
              type="text"
              className={
                'text-s2 outline-none w-full pl-0 pr-0 pb-2 h-[32px] border-solid border-b ' +
                (isTheEmailValid
                  ? 'border-b-[#e6e6e6] placeholder:text-[#000] focus:border-b-[#000]'
                  : 'border-b-[#CE4C4C] placeholder:text-[#CE4C4C] focus:border-b-[#CE4C4C] text-[#CE4C4C]')
              }
              placeholder="Email"
              id="email"
              name="email"
              maxLength={80}
            />
            {!isTheEmailValid && (
              <p className="text-s4 text-[#CE4C4C] absolute top-[calc(100% + 8px)]">
                Your mail is incorrect, please check it again.
              </p>
            )}
          </div>
          <div className="relative md:w-1/2 w-full md:mt-0 mt-10">
            <input
              type="text"
              className={
                'text-s2 outline-none w-full pl-0 pr-0 pb-2 h-[32px] border-solid border-b ' +
                (isThePhoneValid
                  ? 'border-b-[#e6e6e6] placeholder:text-[#000] focus:border-b-[#000]'
                  : 'border-b-[#CE4C4C] placeholder:text-[#CE4C4C] focus:border-b-[#CE4C4C] text-[#CE4C4C]')
              }
              placeholder="Phone (optional)"
              id="phone"
              name="phone"
              maxLength={15}
            />
            {!isThePhoneValid && (
              <p className="text-s4 text-[#CE4C4C] absolute top-[calc(100% + 8px)]">
                Your phone is incorrect, please check it again.
              </p>
            )}
          </div>
        </div>
        <input
          type="text"
          className={
            'text-s2 outline-none w-full mt-10 pl-0 pr-0 pb-2 h-[32px] border-solid border-b ' +
            (isTheCommentValid
              ? 'border-b-[#e6e6e6] placeholder:text-[#000] focus:border-b-[#000]'
              : 'border-b-[#CE4C4C] placeholder:text-[#CE4C4C] focus:border-b-[#CE4C4C] text-[#CE4C4C]')
          }
          placeholder="Tell us about your project, question or comment. (optional)"
          id="comment"
          name="comment"
          maxLength={500}
        />
        {hasTheFormBeenSubmitted ? (
          <p className="text-right text-m5 font-bold lg:mt-10 md:mt-12 mt-10 xl:mt-12">
            Your message was successfully sent!
          </p>
        ) : (
          <div className="lg:mt-10 md:mt-12 mt-10 flex justify-end">
            <BasicButton theme="light">
              <p>Send!</p>
            </BasicButton>
          </div>
        )}
      </form>
    </section>
  );
};

export default Challenge;
