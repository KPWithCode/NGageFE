import { createSignal } from "solid-js";
import SubscriptionCard from "./Card";
import { loadStripe } from "@stripe/stripe-js";
import dotenv from "dotenv";

const init = async () => {
  await dotenv.config();
};
const Subscription = () => {
  init();
  const [toggle, setToggle] = createSignal();
  const [isLoading, setLoading] = createSignal();
  const [stripeError, setstripeError] = createSignal();

  let stripePromise: any;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY || "");
    }
    return stripePromise;
  };

  const handleBasic = async () => {
    //   setIsSignedIn(false);
    setLoading(true);
    console.log("handleBasic called");
    try {
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: process.env.BASIC_STRIPE_PRICE_ID,
            quantity: 1,
          },
        ],
        mode: "subscription",
        cancelUrl: window.location.origin,
        successUrl: `${window.location.origin}/about`,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error: any) {
      setstripeError(error.message);
      console.log("handleBasic error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePremium = async () => {
    setLoading(true);
    console.log("handlePremium called");
    try {
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: process.env.PREMIUM_STRIPE_PRICE_ID,
            quantity: 1,
          },
        ],
        mode: "subscription",
        cancelUrl: window.location.origin,
        successUrl: `${window.location.origin}/about`,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error: any) {
      setstripeError(error);
      console.log("handlePremium error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="">
      <div class="text-white pt-32 pl-8 font-bold text-6xl sm:text-9xl font-raleway tracking-wider ">
        Subscribe
      </div>
      <div class="flex justify-center items-center h-auto w-screen mt-4">
        <div class="grid grid-cols-2 gap-16">
          <SubscriptionCard
            onClick={handleBasic}
            title="Basic"
            description="Casual Bettors"
            features={[
              "NBA, MLB, NHL, Big 5 Euro Leagues ⚽",
              "Sports Optimiser",
              "Play of the day",
            ]}
            price="19.99/mo"
          />
          <SubscriptionCard
            onClick={handlePremium}
            title="Premium"
            description="Recreational Bettors & Sharps"
            features={[
              "NHL, MLB, NHL, Big 5 Euro Leagues ⚽",
              "Sports Optimiser",
              "VIP All access plays,",
              "Algo Backed Leans",
              "Picks of the Day",
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
