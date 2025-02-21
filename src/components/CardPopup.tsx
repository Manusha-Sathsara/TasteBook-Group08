import React, { useState, useCallback, useRef, useEffect } from 'react';
import Carousal from './Carousal'; // Import the Carousal component

interface CardPopup {
  triggerElement: React.ReactNode;
  modalTitle?: string;
  modalContent?: React.ReactNode; // Make modalContent optional, as we'll use Carousal OR modalContent now
  imageUrls?: string[];       // Optional imageUrls prop for using the Carousal
  cardTitle?: string;         // Optional cardTitle prop for Carousal alt text
  onClose?: () => void;
}

const BasicModal: React.FC<CardPopup> = ({
  triggerElement,
  modalTitle = "Modal Title",
  modalContent,
  imageUrls,               // Receive imageUrls prop
  cardTitle = "Card Image", // Default cardTitle for Carousal
  onClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target as Node) && triggerRef.current !== event.target && !triggerRef.current?.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  return (
    <div className="relative">
      <div ref={triggerRef} onClick={openModal} className='flex justify-center'>
        {triggerElement}
      </div>

      {isModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-sm shadow-[#00df9a] max-w-xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-center items-center">
              <h5 className="text-xl font-semibold text-center">{modalTitle}</h5>
              {/* <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-4.185-4.187 4.185-4.186-5.742-5.74-4.185 4.187-4.187-4.187-5.739 5.74 4.187 4.185-4.187 4.185 5.739 5.74 4.185-4.188 4.188 4.188z"/></svg>
              </button> */}
            </div>

            {/* Modal Body - Use Carousal OR modalContent */}
            <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
              {imageUrls ? (  // If imageUrls prop is provided, render Carousal
                <Carousal imageUrls={imageUrls} cardTitle={cardTitle} />
              ) : (           // Otherwise, render the generic modalContent
                modalContent
              )}
            </div>

            {/* Modal Footer (Optional) */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-center">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none"
                onClick={closeModal}
              >
                Close
              </button>
              {/* You can add more buttons here if needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicModal;