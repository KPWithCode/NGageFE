import { A } from "solid-start";
import { For, createSignal } from "solid-js";

const categories = [
  "Dashboard",
  "Soccer",
  "NBA",
  "MLB",
  "NHL",
  "NFL",
  "Settings",
];

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <div
      class={`bg-RichBlack h-screen text-white w-64 py-4 px-6 absolute top-0 bottom-0 left-0 ${
        isOpen() ? "block" : "hidden"
      }`}
    >
        <button
          class="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={onClose
          }
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <ul class="space-y-4">
          <For each={categories}>
            {(category) => (
              <li>
                <A
                  class="block text-gray-300 hover:text-white"
                  href={`/shop/${category.toLowerCase()}`}
                  style={{ "font-family": "Abril-Fatface" }}
                >
                  {category}
                </A>
              </li>
            )}
          </For>
        </ul>
      </div>
  );
};

export default Sidebar;
