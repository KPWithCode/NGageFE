import { A } from "solid-start";
import { For, createSignal } from "solid-js";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);
  const [email, setEmail] = createSignal("statpadanalytics@gmail.com");

  const categories = ["Home", "About", "Subscribe", "FAQ"];
  const categories2 = ["Login"]; 

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen());
  };

  const scrollToCategory = (category: string) => {
    if (category === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const categoryElement = document.getElementById(category.toLowerCase());
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header class="bg-RichBlack w-screen text-white hover:bg-white hover:text-RichBlack transform transition duration-400 fixed z-10">
      <nav class="container flex items-center justify-between py-6 mx-auto">
        <div class="flex items-center">
          <button
            onClick={toggleSideBar}
            class=" focus:outline-none pr-2 -ml-2"
          >
            <svg class="h-7 w-7 -ml-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <a href="/" class="text-2xl font-bold font-raleway">
            Stat
          </a>
            <a
              href="/"
              class="text-2xl pl-1 font-bold text-Gold hover:text-DarkGold font-raleway"
            >
              Pad
            </a>
        </div>

        <div
          class={`${
            sidebarOpen() ? "block" : "hidden"
          } absolute top-0 bottom-0 left-0 z-10`}
        >
          <Sidebar onClose={toggleSideBar} />
        </div>

        <div class="">
          <ul class="flex items-center space-x-10">
            <For
              each={categories}
              fallback={
                <div style={{ "font-family": "Abril-Fatface" }}>Loading...</div>
              }
            >
              {(category) => (
                <li class="uppercase cursor-pointer">
                  <a
                    class="inline-block text-md transition hover:-translate-y-1 duration-200 ease-in-outfont-raleway"
                    onClick={() => scrollToCategory(category)}
                  >
                    {category}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="flex">
          <For
            each={categories2}
            fallback={
              <div style={{ "font-family": "Abril-Fatface" }}>Loading...</div>
            }
          >
            {(cat2) => (
              <ul class="uppercase mx-1 cursor-pointer">
                <A
                  class="inline-block text-sm transition hover:-translate-y-1 duration-200 ease-in-out font-raleway"
                  href={`/${cat2.toLowerCase()}`}
                >
                  {cat2}
                </A>
              </ul>
            )}
          </For>
          <div class="uppercase mx-1 cursor-pointer">
                <A class="inline-block text-sm transition hover:-translate-y-1 duration-200 ease-in-out font-raleway"
                href="https://twitter.com/thestatpad"
                >
                  Contact
                </A>
          </div>

          <A
            class="transition hover:-translate-y-1 duration-200 ease-in-out"
            href=""
            // href={window.location.replace("mailto:company@email.com")}
          >
            <svg
              class="h-6 w-6"
              viewBox="0 2 26 24"
              fill="none"
              style="transform: scaleY(-1)"
            >
              <path
                d="M19 19H5V8H19V19ZM19 19L12 14L5 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </A>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
