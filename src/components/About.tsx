const About = () => {
  return (
    <div>
      <div class="text-white pt-32 pl-8 font-bold text-6xl sm:text-9xl text-RichBlack font-raleway tracking-wider">
        About
      </div>
      <div>
        <ul class="text-white text-left pt-8 pl-8 font-bold justify-right text-lg sm:text-2xl text-RichBlack font-raleway tracking-wider w-7/12">
          <li>✔️ No Frills!</li>
          <li> ✔️ No Absurd Guarantees!</li>
          <li class="text-left break-words">
          ✔️ Purely a mathematical approach to fantasy & sports betting.
          </li>
        </ul>
        <div class="flex justify-center text-white pt-14 pl-8 font-bold text-2xl md:text4xl text-RichBlack font-raleway tracking-wider break-words text-center">
          AI generated leans and predictive tooling for highlighting increased
          outcomes
        </div>
        <div class="flex justify-center items-center mt-36">
          <button
            // onClick={scrollToSignup}
            class="rounded-full px-16 py-7 bg-RichBlack hover:bg-white text-3xl text-Gold hover:text-RichBlack tracking-wider border border-white transition hover:-translate-y-2 duration-500"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
