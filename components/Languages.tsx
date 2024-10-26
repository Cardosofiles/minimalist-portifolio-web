import { CardDemoBack } from "./ui/AnimateCardBack";
import { CardDemoDB } from "./ui/AnimateCardBD";
import { CardDemoFront } from "./ui/AnimateCardFront";

const Languages = () => {
  return (
    <div>
      <h1 className="heading" id="knowledge">
        <span className="text-white">Tecnologias</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Favoritas
        </span>
      </h1>

      <div className="my-20">
        <div className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-16">
            <CardDemoFront />
            <CardDemoBack />
            <CardDemoDB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
