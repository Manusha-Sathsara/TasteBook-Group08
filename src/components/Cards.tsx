import React from "react";
import CardPopup from "./CardPopup";
export default function Example() {
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-center">
        <h1 className="font-bold content-center mt-5 mb-3 flex justify-center">
          Explore our wide range of recipes from around the world !
        </h1>
      </div>
      <div className="grid 
      gap-2 md:grid-cols-3 p-3 items-center justify-center

      ">
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className=" bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3 max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-md shadow-sm shadow-green-500 overflow-hidden p-2">
         <CardPopup
         triggerElement={<img src="images/italian.jpg"
        className="sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
        object-cover cursor-zoom-in rounded-md shadow-[#00df9a]  mt-3
         hover:shadow-lg transition-shadow duration-300"
         ></img>}
         modalTitle="----------------More Details----------------"
         imageUrls={[ // Provide an array of image URLs
           "images/indian.jpg",
           "images/french.jpg",
           "images/italian.jpg",
         ]}
         />
          <div className="p-4 ">
            <h3 className="font-bold text-xl mb-2  flex justify-center items-center">Responsive Card Title</h3>
            <p className="text-gray-700 text-base  flex justify-center items-center">
              This card is designed to be responsive! Watch how its width adapts
              as you resize your browser window.
            </p>
            <div className="mt-4 flex justify-center items-center">
              <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
               Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
