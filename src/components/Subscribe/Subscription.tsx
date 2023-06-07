import { createSignal } from "solid-js";
import SubscriptionCard from "./Card";

const Subscription = () => {
  const [toggle, setToggle] = createSignal();

  return (
    <div class="">
      <div class="text-Gold pt-32 pl-8 font-bold text-6xl sm:text-9xl text-white font-raleway tracking-wider ">
        Subscribe
      </div>
      <div class="flex justify-center items-center h-auto w-screen mt-4">
        <div class="grid grid-cols-2 gap-16">
          <SubscriptionCard
            title="Basic"
            description="Casual Bettors"
            features={[
              "NBA, MLB, NHL, Big 5 Euro League ⚽",
              "Limited Sports Optimiser",
              "Play of the day",
            ]}
            price="14.99/mo"
          />
          <SubscriptionCard
            title="Premium"
            description="Recreational Bettors & Sharps"
            features={[
              "NHL, MLB, NHL, Big 5 Euro League ⚽",
              "Sports Optimiser",
              `VIP All access plays, Algo backed leans, Picks of the Day`,
              
            ]}
            price="29.99/mo"
            recommended="Recommended"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
