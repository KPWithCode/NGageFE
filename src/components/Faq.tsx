import { createSignal } from "solid-js";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = createSignal<number | null>(null);

  const handleClick = (index: number) => {
    setActiveQuestion(index === activeQuestion() ? null : index);
  };
  const questions = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, simply click on the 'LOGIN' button on the homepage. You will be prompted to enter your username, password (No email required! 🤓). Once you have created an account, you will be able to log in and start using our services.",
    },
    {
      question: "How do I make a bet?",
      answer:
        "To make a bet, simply select the event you want to bet on and the amount you want to bet. You will then be prompted to enter your payment information. Once you have submitted your bet, it will be placed and you will be able to track its progress.",
    },
    {
      question: "How do I withdraw my winnings?",
      answer:
        "To withdraw your winnings, simply click on the 'Withdraw' button in the 'My Account' section of the website. You will be prompted to enter your withdrawal method and the amount you want to withdraw. Once you have submitted your withdrawal request, it will be processed and you will receive your winnings within a few days.",
    },
  ];

  return (
    <div>
      <div class="flex text-white pt-32 pl-8 font-bold text-6xl md:text-10xl text-RichBlack font-raleway tracking-wider">
        FAQ
      </div>
      <div >
        <div class="justify-center text-align text-white pt-2 pl-8 text-md md:text-2xl text-RichBlack font-raleway tracking-wider w-5/12 font-bold">
          <i class="">
            There no such thing as a sure bet. We don't believe in one size fits
            all solutions. Sports betting is a market & markets need tools.
          </i>
        </div>  
        <div class="flex flex-col mt-4 pl-8 font-bold text-lg md:text-2xl text-RichBlack font-raleway tracking-wider items-center">

          {questions.map((question, index) => (
            <div>
              <button
                class="flex pb-6 w-full justify-center"
                onClick={() => handleClick(index)}
              >
                <div class="underline underline-offset-4">{question.question}</div>
                <div
                  class={`${
                    activeQuestion() === index ? "transition-transform -rotate-0": ""
                  } transform rotate-180`}
                >
                  <div class= {`${
                  activeQuestion() === index ? "text-gray-700" : ""
                }`}>

                  &#9660;
                  </div>
                </div>
              </button>
              {activeQuestion() === index && <div class="flex text-md font-bold items-center pb-3 flex-wrap max-w-xl">{question.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
