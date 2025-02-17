import React from "react";

export default function IngredientsTable() {
    return (
      <div className="bg-gray-300 p-4 rounded-lg w-auto ingredients-table">
        <div className="bg-green-500 text-white font-bold text-center rounded-md py-1 mb-4">
          Ingredients
        </div>
        <table className="w-full border-collapse text-white">
          <thead>
        <tr>
          <th className="border border-black px-2 py-1 text-left">Ingredient name</th>
          <th className="border border-black px-2 py-1 text-left">Amount / Quantity</th>
        </tr>
          </thead>
          <tbody>
        {[
          { name: "Flour", quantity: "2 cups" },
          { name: "Sugar", quantity: "1 cup" },
          { name: "Butter", quantity: "1/2 cup" },
          { name: "Eggs", quantity: "2" },
          { name: "Milk", quantity: "1 cup" }
        ].map((ingredient, index) => (
          <tr key={index} className="bg-gray-200">
            <td className="border border-black px-2 py-2">{ingredient.name}</td>
            <td className="border border-black px-2 py-2">{ingredient.quantity}</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    );
  }