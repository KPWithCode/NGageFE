import { createSignal } from "solid-js";

interface SubscriptionCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?:string;
}

function SubscriptionCard({
  title,
  price,
  description,
  features,
  recommended
}: SubscriptionCardProps) {
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <div
      class="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform duration-200 hover:scale-105 justify-center "
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // style={{ "z-index": isHovered() ? 1 : 0 }}
    >
      <div>
        <h2 class="flex justify-center text-2xl font-bold pb-4 border-b-2 border-gray-200">
          {title}
        </h2>
        <h3 class="text-md text-RichBlack mt-8 mb-1 font-bold">Ideal for:</h3>
        <p class="text-xs text-RichBlack pb-5 border-b-2 border-gray-200 mb-10">
          {description}
        </p>

        <ul class="list-disc list-inside mb-8 ">
          {features.map((feature) => (
            <p class="py-2">✔️ {feature}</p>
          ))}
        </ul>
        <div>
          <p class="text-3xl font-bold text-RichBlack mb-6">${price}</p>
          <button class="bg-RichBlack hover:bg-Gold text-white hover:text-RichBlack font-bold py-2 px-4 rounded w-full">
            Choose
          </button>
        </div>
      </div>
      {recommended && (
        <div class="absolute top-0 right-0 m-4 flex items-center justify-center">
          <span class="bg-Gold rounded-full text-2xs text-black p-1.5">{recommended}</span>
        </div>
      )}
    </div>
  );
}
export default SubscriptionCard;
