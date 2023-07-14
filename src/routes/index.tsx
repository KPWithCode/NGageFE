import { For, createSignal, createEffect, onCleanup } from "solid-js";
import About from "~/components/About";
import FAQ from "~/components/Faq";
import Navbar from "~/components/Navbar";
import Subscription from "~/components/Subscribe/Subscription";
import LoginModal from "~/components/login";
import spinningbasebaball from "~/recources/baseballspin.mp4";

export default function Home() {
  const engagement = ["Victory", "Success", "Picks", "Parlays", "Fantasy"];
  const [currentCategory, setCurrentCategory] = createSignal(0);
  const [showLoginModal, setShowLoginModal] = createSignal(false);

  let intervalId: number | undefined;
  let startY: number | null = null;

  const handleTouchStart = (event: TouchEvent) => {
    startY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - (startY ?? 0);

    if (Math.abs(deltaY) >= 50) {
      if (deltaY > 0 && currentCategory() > 0) {
        setCurrentCategory((prevCategory) => prevCategory - 1);
      } else if (deltaY < 0 && currentCategory() < engagement.length - 1) {
        setCurrentCategory((prevCategory) => prevCategory + 1);
      }
    }

    startY = null;
  };

  const scrollToSignup = () => {
    const categoryElement = document.getElementById("subscribe");
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startWordCycling = () => {
    const intervalId = setInterval(() => {
      setCurrentCategory(
        (prevCategory) => (prevCategory + 1) % engagement.length
      );
    }, 3000);
  };

  onCleanup(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  startWordCycling();

  const handleToggleLoginModal = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowLoginModal(true);
  };

  createEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
      container.style.scrollSnapType = "y mandatory";
      container.style.height = "100vh";
      container.style.overflowY = "scroll";
      container.style.scrollBehavior = "auto";
    }

    onCleanup(() => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    });
  });

  return (
    <div class="bg-RichBlack">
      <Navbar onToggleLoginModal={handleToggleLoginModal} />
      <div class="flex-col w-screen h-screen">
        <div
          id="Home"
          class="justify-center pt-32 pl-8 font-bold text-6xl sm:text-9xl text-white font-raleway tracking-wider snap-always snap-proximity snap-mandatory scroll-smooth"
        >
          Get Engaged
        </div>
        <div class="flex justify-start font-bold text-5xl pt-4 pl-12 text-white tracking-wide">
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
        <div class="flex justify-start w-5/12 font-bold font-poppins text-2xl pt-24 pl-12 text-white tracking-wide text-left">
          A statistics based tool for highlighting the best matchups, leans, and
          projections.
        </div>

        <div class="flex justify-center items-center mt-36">
          <button
            onClick={scrollToSignup}
            class="rounded-full px-16 py-7 bg-RichBlack hover:bg-white text-3xl text-Gold hover:text-RichBlack tracking-wider border border-white transition hover:-translate-y-2 duration-500"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div
        id="container"
        class="snap-y snap-always snap-proximity snap-mandatory scroll-smooth"
      >
        <div
          id="about"
          class="w-screen h-screen snap-start snap-always snap-proximity snap-mandatory scroll-smooth bg-Gold "
        >
          <About />
        </div>
        <div
          id="subscribe"
          class=" w-screen h-screen bg-RichBlack
         snap-start snap-always snap-proximity snap-mandatory scroll-smooth relative"
        >
          <div class="absolute inset-0">
            <video
              autoplay
              muted
              loop
              class="w-full h-full -z-10 top-0 left-0  object-cover"
            >
              <source src={spinningbasebaball} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
          <div class="relative">
            <Subscription />
          </div>
        </div>
        <div
          id="faq"
          class="w-screen h-screen bg-Gold snap-always snap-proximity snap-mandatory snap-start "
        >
          <FAQ />
        </div>
      </div>
      <div class="fixed bottom-0 left-0 right-0 flex justify-center py-2 bg-RichBlack z-10">
        <ul class="flex items-center space-x-4 text-Gold text-sm">
          <li>MLB</li>
          <li>NBA</li>
          <li>Soccer</li>
          <li>NHL</li>
          <li>NFL</li>
        </ul>
      </div>
      {showLoginModal() && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
