import React from "react";
import useCartStore from "../store/useCartStore";

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
          <div className="bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-4">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Program 1 month
              </h3>
              <p className="text-background mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias
                odit assumenda voluptatem tenetur deserunt.
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <p className="text-background mb-4">Price: 20$</p>
              <button
                onClick={() =>
                  handleAddToCart({ id: 1, name: "Program 1 month", price: 20 })
                }
                className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg"
              >
                Book
              </button>
            </div>
          </div>
          {/* Program Card 2 */}
          <div className="bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-4">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Program 3 months
              </h3>
              <p className="text-background mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                asperiores quis quaerat tempora velit nam.
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <p className="text-background mb-4">Price: 50$</p>
              <button
                onClick={() =>
                  handleAddToCart({
                    id: 2,
                    name: "Program 3 months",
                    price: 50,
                  })
                }
                className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg"
              >
                Book
              </button>
            </div>
          </div>
          {/* Program Card 3 */}
          <div className="bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-4">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Program 6 months
              </h3>
              <p className="text-background mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                nobis optio, eligendi natus asperiores sunt!
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <p className="text-background mb-4">Price: 100$</p>
              <button
                onClick={() =>
                  handleAddToCart({ id: 3, name: "Program 6 months", price: 100 })
                }
                className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
