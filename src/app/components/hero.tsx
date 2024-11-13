import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center px-8 py-12 bg-white">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left ml-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight font-serif">
          IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
        </h1>
        <p className="text-xl text-[#9c8d6d] mb-6 font-serif">
          An example of intricate workmanship and detail, elegant <br />necklaces and long and short chains form a part of our <br />desirable collection.
        </p>
        <button className="px-10 py-2.5 bg-[#8f8061] text-white font-semibold rounded-full hover:bg-[#9c8a6a] transition">
          Explore Now
        </button>
      </div>

      {/* Image Content */}
      <div className="lg:w-1/2  lg:mt-0 flex justify-center lg:justify-end mr-16">
        <div className=" mt-10 relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] overflow-hidden border-[1px] border-[#d2c3a1] p-[6px] shadow-lg custom-rounded">
          <Image
            src="/img.png" 
            alt="Jewelry model"
            layout="fill"
            objectFit="cover"
            className="custom-rounded border border-[#d2c3a1] shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
