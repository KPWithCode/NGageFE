import { Show, createSignal } from "solid-js";

interface DashboardProps {
  data: string; // Replace "string" with the appropriate type for your data
}

const DashBoard = (props: DashboardProps) => {
  const { data } = props;
  const [selectedCategory, setSelectedCategory] = createSignal("mlb");

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div class="bg-RichBlack h-screen text-Gold w-1/5 py-4 px-6 absolute top-0 bottom-0 left-0 ">
        <ul class="mt-36 flex justify-center">
          <div class="space-y-6">
            <li
              class="text-3xl rounded-md hover:text-black hover:bg-Gold hover:cursor-pointer py-4 px-16 text-center "
              onClick={() => handleCategoryClick("mlb")}
            >
              MLB
            </li>
            <li
              class="text-3xl rounded-md hover:text-black hover:bg-Gold hover:cursor-pointer py-4 px-16 text-center"
              onClick={() => handleCategoryClick("nfl")}
            >
              NFL
            </li>
            <li
              class="text-3xl rounded-md hover:text-black hover:bg-Gold hover:cursor-pointer py-4 px-16 text-center"
              onClick={() => handleCategoryClick("soccer")}
            >
              Soccer
            </li>
            <li
              class="text-3xl rounded-md hover:text-black hover:bg-Gold hover:cursor-pointer py-4 px-16 text-center"
              onClick={() => handleCategoryClick("soccer")}
            >
              Plays of The day
            </li>
          </div>
        </ul>
      </div>

      {/* {selectedCategory() === 'dashboard' && <DashboardContent />}
      {selectedCategory() === 'profile' && <ProfileContent />}
      {selectedCategory() === 'settings' && <SettingsContent />} */}

      <Show when={data}>
        <p> Data received: {data}</p>
      </Show>
    </div>
  );
};

export default DashBoard;
