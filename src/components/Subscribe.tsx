import React, { useState, useRef, useEffect } from "react";

const Subscribe: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="w-full">
      <input
        className="bg-slate-300 bg-opacity-10 py-2 px-4 rounded-full w-full"
        placeholder="Search"
        type="text"
      />
      <div className="p-4 border-[1px] border-gray-600 rounded-xl my-6">
        <h2 className="font-bold text-lg">Subscribe to Premium</h2>
        <p className="py-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button
          onClick={openPopup}
          className="bg-blue-500 hover:bg-blue-600 transition duration-300 py-1 px-4 rounded-full cursor-pointer font-bold"
        >
          Subscribe
        </button>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={closePopup}
            />
            <div
              ref={popupRef}
              className="bg-black w-96 rounded-lg py-8 px-6 text-center relative border-[1px] border-gray-500 shadow-white custom-shadow z-50"
            >
              <h2 className="text-3xl font-semibold mb-4">
                Upgrade to Premium
              </h2>
              <p className="text-gray-400">
                Enjoy an enhanced experience, exclusive creator tools, top-tier
                verification and security. (For organizations,
                <a className="text-white cursor-pointer underline">
                  sign up here
                </a>
                )
              </p>
              <button
                onClick={closePopup}
                className="absolute top-2 right-4 text-xl text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
