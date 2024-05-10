import React from "react";
import useCartStore from "../store/useCartStore";
import ProgramCard from "./ProgramCard";

const Programs = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (program) => {
    addToCart(program);
  };

  return (
    <section id="programs" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">
          Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program Card 1 */}
          <ProgramCard
            program={{
              id: 1,
              name: "Program 1 month",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias odit assumenda voluptatem tenetur deserunt.",
              price: 20,
            }}
            handleAddToCart={handleAddToCart}
          />
          {/* Program Card 2 */}
          <ProgramCard
            program={{
              id: 2,
              name: "Program 3 months",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias odit assumenda voluptatem tenetur deserunt.",
              price: 50,
            }}
            handleAddToCart={handleAddToCart}
          />
          {/* Program Card 3 */}
          <ProgramCard
            program={{
              id: 3,
              name: "Program 6 months",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias odit assumenda voluptatem tenetur deserunt.",
              price: 100,
            }}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
