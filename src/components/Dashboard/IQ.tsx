import { Show, createSignal,onCleanup } from "solid-js";

// interface DashboardProps {
//   data: string; // Replace "string" with the appropriate type for your data
// }
const IQ = () => {
  // props: DashboardProps
  //   const { data } = props;
  const [currentPage, setCurrentPage] = createSignal(1);
  let interval: any;

  const startRotation = () => {
    interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % 3) + 1);
    }, 3000);
  };

  const stopRotation = () => {
    clearInterval(interval);
  };

  onCleanup(() => {
    clearInterval(interval);
  });
  return (
    <div>
      <div class="bg-RichBlack w-4/5 absolute bottom-0 right-0 h-screen overflow-hidden text-white">
        <div class="mt-36 h-full px-20">
          <div class="grid grid-cols-3 gap-24 w-full h-4/5 relative overflow-y-auto">
            {/* Play with great expected value */}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 1</div>
            {/* Player on 5 day hotstreak */}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 2</div>
            {/* Player on 10 day hotsteak */}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 3</div>
            {/* Round Robin RBIs */}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 4</div>
            {/* Underdog of the day/Player or team */}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 5</div>
            {/* The hitlist 4 - calculates hitters that have great matchups today. Name | Odds*/}
            <div class="bg-gray-700 grayscale rounded-lg shadow-2xl ">Box 6</div>
          </div>
        </div>
      </div>

   
    // </div>
  );
};

export default IQ;
