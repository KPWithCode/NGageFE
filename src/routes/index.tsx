import { For, createSignal, onCleanup } from "solid-js";
import About from "~/components/About";
import FAQ from "~/components/Faq";
import Subscription from "~/components/Subscription";

export default function Home() {
  const engagement = ["Victory", "Success", "Picks", "Parlays", "Fantasy"];
  const [currentCategory, setCurrentCategory] = createSignal(0);
  let intervalId: number | undefined;

  const scrollToSignup = () => {
    const categoryElement = document.getElementById("subscribe");
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startWordCycling = () => {
    intervalId = setInterval(() => {
      setCurrentCategory(
        (prevCategory) => (prevCategory + 1) % engagement.length
      );
    }, 4000);
  };

  onCleanup(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  startWordCycling();

  return (
    <div>
      <div class="flex-col w-screen h-screen bg-gray-900">
        <div id="Home" class="justify-center pt-44 pl-8 font-bold text-6xl md:text-10xl text-white font-raleway tracking-wider">
          Get Engaged
        </div>
        <div
          class="flex justify-start font-bold text-5xl mt-4 pl-12 text-white tracking-wide"
        >
          Plan Your&nbsp
          <div>
            <For
              each={engagement}
              fallback={
                <div style={{ "font-family": "Abril-Fatface" }}>Loading...</div>
              }
            >
              {(category, index) => (
                <ul
                  class={`${
                    index() === currentCategory() ? "text-Gold" : "hidden"
                  }`}
                >
                  {category}
                </ul>
              )}
            </For>
          </div>
        </div>
        <div class="flex justify-center items-center mt-40">
          <button onClick={scrollToSignup} class="rounded-full px-16 py-7 bg-gray-900 hover:bg-RichBlack text-3xl text-Gold tracking-wider border border-white transition hover:-translate-y-2 duration-500">
            Sign Up
          </button>
        </div>
      </div>
        <div id="subscribe" class="w-screen h-screen bg-brightOrange">
          <Subscription />
        </div>

        <div id="about" class="w-screen h-screen bg-gray-300">
          <About />
        </div>
        <div id="faq" class="w-screen h-screen bg-LamboGreen">
          <FAQ />
        </div>
    </div>
  );
} 
