import React from "react";

const ProgramCard = ({ program, handleAddToCart }) => {
  return (
    <div className="bg-secondary shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-4">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-background">
          {program.name}
        </h3>
        <p className="text-background mb-4">{program.description}</p>
      </div>
      <div className="flex flex-col items-center p-6">
        <p className="text-background mb-4">Price: {program.price}$</p>
        <button
          onClick={() => handleAddToCart(program)}
          className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
