import Image from "next/image";
import stacked from "../public/assets/images/svg/stack--on-light.svg";
import brunch from "../public/assets/images/BrunchMenu.png";
import blonde from "../public/assets/images/BlondeAle.png";
import coffee from "../public/assets/images/Coffee.png";

export default function FoodDrink() {
  return (
      <div className="container text-center">
        <h1>Food + Drink</h1>
        <h2 className="u-vr__pt--2">Food</h2>
        <p className="u-vr__py--2">
          Simple is more - that's what we offer at{" "}
          <span className="u-color__gold">Grubbage by A Co</span>. Think of it
          as higher-end bar food. We don't over complicate individual dishes,
          but we also don't cheap out on quality ingredients by sourcing from
          local farms and vendors. We've got plenty of choices on our menu with
          year round staple products and rotating options to keep things fresh.
          We have fire-wood options to add some flare, but will make some killer
          smash burgers to hit the spot just right. Take a look at our sample
          menu
        </p>
        <Image src={brunch} />
        <h2 className="u-vr__pt--2">Beer</h2>
        <p className="u-vr__pb--2">Patiently fermenting - full list of offerings coming soon!</p>
        <Image src={blonde} />
        <h2 className="u-vr__pt--2">Coffee</h2>
        <p className="u-vr__py--2">
          A pathway to great things more often than not involves coffee.
          Aberration Co. always strives to create unique products and
          atmospheres in the taprooms, which coffee felt like a great
          addition... another pathway to a great thing! Through unique blends
          and creative approaches, Aberration Co. roasts its own coffee in
          house. We focus on innovation in the roast and heavy drive behind RTD
          (ready to drink) canned cold brews. Think when you order your favorite
          latte at a coffee house, but now with Aberration Co., you can get
          nearly the same, if not better tasting latte in a can ready to go at
          home.
        </p>
        <Image src={coffee} />
        <p className="u-vr__py--2">
          We believe coffee should be both delicious and sourced with the
          highest quality ingredients. This is why we work directly with farmers
          across the globe, which allows us to know the quality in each roast
          and cup. We invest heavily into training our roasters and baristas
          ensuring consistency from sip to sip.
        </p>
      </div>
  );
}
