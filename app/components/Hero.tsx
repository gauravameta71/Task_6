

import Link from "next/link";
import React from "react";
import Dev from "./Caro";
import Caro from "./Caro";

const TextWithImage = () => {
  return (
    <>
      <img src="/assets/h2.png" alt="" />
      {/* 1 */}
      <div className="flex flex-col lg:flex-row mx-auto p-4 bg-white shadow-lg ">
        {/* Left side - Image Card */}
        <div className="lg:w-1/2 bg-white">
          <img
            src="/assets/h3.jpg"
            alt="Card Image"
            className="w-[500px] h-full object-cover rounded-xl ml-64"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="lg:w-1/2 p-4 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Introducing <br /> 2 & 3 BHK
          </h2>
          <p className="text-black text-5xl">Ultra Luxury Lifespaces</p>
          <p className="mt-4 text-black">IN WALNUT & OAK @ WOODS PLATINA</p>
          <p className="mt-8 text-black text-xl">
            After the grand success of Maple & Ebony Towers, SMGK Group has to
            offer you Ultra Luxury lifespaces in Walnut & Oak Towers @ Woods
            Platina
          </p>
          <p className="mt-4 text-black text-xl">
            br Curated with smart technology features and modern amenities,
            these thoughtfully designed residences make your life Simpler,
            Smarter and Efficient
          </p>
          <p className="mt-4 text-black text-xl">
            n a congested city like Mumbai only a privileged few get the
            opportunity to enjoy Nature and Luxury in one place
          </p>
          <p className="mt-4 text-black text-xl">
            {" "}
            So make the most out of it and get best of both the worlds only at -
            Woods Platina
          </p>

          {/* Button */}
          <div className="flex justify-start mt-8">
            <button className="bg-green-800 text-white py-2 px-4 hover:bg-blue-600">
              Know More
            </button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col lg:flex-row mx-auto p-4 bg-white shadow-lg ">
        {/* Left side - Text Content */}
        {/* Right side - Text Content */}
        <div className="lg:w-1/2 p-4 bg-white ">
          <h2 className="text-2xl pl-[400px] mb-4 text-black">Luxury</h2>
          <p className="text-black pl-[400px] text-2xl mb-4">
            A KING SIZE LIFE OFE
          </p>
          <p className="mt-4 pl-[400px] text-black text-5xl mb-4">
            Urban Indulgences
          </p>
          <p className="text-black text-md mb-4 pl-[400px]">
            AT WOODS PLATINA, YOU HAVE AN EXCLUSIVE ROOFTOP GARDEN WITH A HOST
            OF AMENITIES FOR YOU TO SAVOUR THE HIGH LIFE
          </p>
          <p className="mt-4 ml-[400px] text-black">FEATURES</p>
          <u className="text-black no-underline ">
            <li className="mt-2 ml-[400px]">Exquisite Sky Garden</li>
            <li className="mt-2 ml-[400px]">Jogging Track</li>
            <li className="mt-2 ml-[400px]">Infinity Edge Pool</li>
            <li className="mt-2 ml-[400px]">Children's Play Area</li>
            <li className="mt-2 ml-[400px]">Sit-Out Areas</li>
          </u>
        </div>

        {/* Right side - Image Card */}
        <div className="lg:w-1/2 bg-white">
          <img
            src="/assets/h5.jpg"
            alt="Card Image"
            className="w-[500px] h-full object-cover rounded-xl ml-64"
          />
        </div>
      </div>
      {/* 3 */}
      {/* 2 */}
      <div className="flex flex-col lg:flex-row mx-auto p-4 bg-white shadow-lg ">
        {/* Left side - Image Card */}
        <div className="lg:w-1/2 bg-white">
          <img
            src="/assets/h4.jpg"
            alt="Card Image"
            className="w-[500px] h-full object-cover rounded-xl ml-64"
          />
        </div>

        {/* Right side - Text Content */}
        <div className="lg:w-1/2 p-4 bg-white">
          <h2 className="text-5xl  mb-4 text-black">High Living</h2>
          <p className="text-black text-2xl">A PREVIEW OF YOUR LIFESTYLE</p>
          <p className="mt-4 text-black">FEATURES</p>
          <u className="text-black no-underline">
            <li className="mt-2">Two Fully Automatic High-Speed Lifts</li>
            <li className="mt-2">
              Boom Barrier Systems at Entry / Exit Points
            </li>
            <li className="mt-2">An Integrated Fire Fighting System</li>
            <li className="mt-2">Vertical Garbage Shafts</li>
            <li className="mt-2">Sewerage Treatment Plant</li>
            <li className="mt-2">Generator Backup for Essential Services</li>
            <li className="mt-2">Automated Parking Tower</li>
          </u>
        </div>
      </div>
      <div className="text-black bg-white ">
        <p className="text-black text-bold text-5xl p-8 flex justify-center">
          FLOOR PLAN
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src="/assets/fl.png" alt="Centered Image" />
        </div>
      </div>

      {/* Location */}

      <div className="text-center bg-white">
        <h2 className=" text-black text-4xl font-bold mb-4">Location</h2>
        <p className=" text-black text-xl font-bold mb-4">
          The strategic location of Woods Platina is one of the main reasons why
          the project has immense scope for Value appreciation over time
          Considering the fact that your home will be worth substantially more a
          few years down the line, investing in Woods Platina is a great Idea
          ...
        </p>
        <div className="flex justify-center items-center rounded-lg">
          <img
            src="/assets/h1.jpg"
            alt="Left Image"
            className="w-[650px] h-[600px] object-cover mr-4 rounded-xl"
          />
          <img
            src="/assets/l2.jpg"
            alt="Right Image"
            className="w-[700px] h-[580px] object-cover ml-4 m-6"
          />
        </div>
      </div>
      {/* Details */}
      <div className="bg-gray-300 text-black p-14 flex flex-row flex-wrap gap-[40px] justify-center ">
        {/* 1 */}
        <div className="flex bg-transparent">
          <img src="/assets/train.jpg" alt="" className="bg-transparent" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">2 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Walk from nearest metro station
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex">
          <img src="/assets/building.jpg" alt="" className="bg-transperent" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">8 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Away From Lokhandwala Complex
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex">
          <img src="/assets/metro.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">2 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Walk From The Nearest Railway Station
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex">
          <img src="/assets/road.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">4 Minute</h1>
            <p className="text-black flex flex-col pl-2">Drive To Link Road</p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex">
          <img src="/assets/highway.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2"> Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Drive To Western Express Highway
            </p>
          </div>
        </div>
        {/* 6 */}
        <div className="flex">
          <img src="/assets/ground.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">2 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Walk from 12.5 Acres Veera Desai Sports Complex
            </p>
          </div>
        </div>
        {/* 7 */}
        <div className="flex">
          <img src="/assets/plane.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">20 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Drive To Domestic And International Airports
            </p>
          </div>
        </div>
        {/* 8 */}
        <div className="flex">
          <img src="/assets/hospital.jpg" alt="" />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-black pl-2">15 Minute</h1>
            <p className="text-black flex flex-col pl-2">
              Drive to Kokila Ben Dhirubhai Ambani Hospital
            </p>
          </div>
        </div>
        <div className="text-black text-bold text-xl flex justify-center pt-8">
          <span className=" text-black text-bold">Site Address :</span> Sales
          Experience Centre - Woods Platina, New JVLR Extension Road, Near
          Evershine Embassy, Oshivara, Mmumbai - 400 102
        </div>
      </div>
      {/* other details section  */}

      <div className="bg-green-900 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">About Developer</h1>
        <img
          src="/assets/dlogo.png" // Replace with the actual path to your logo
          alt="Developer Logo"
          className="w-20 h-20 m-6 mt-16"
        />
        <div className="text-center text-white mt-4">
          <p className="mb-2 mt-6 text-lg">
            Our mission towards contributing to a better world began in the year
            2000, when SMGK Group was conceived by our Founder Chairman and
            Group President, Mr. Mohammad Ali Momin
          </p>
          <p className=" text-lg">
            With over four decades of industry experience and above all, a
            strong Conscience, Mr.Momin strongly defined the Ethos of the Group
            - to be agents of Social change
          </p>
          <p>
            What's more, we have set benchmarks in the Indian Real Estate
            Industry by employing the best Environmental practices and ensuring
            use of Smart
          </p>
          <p className="text-bold text-2xl m-8 ">
            Above all, we have Built with Conscience - a Legacy of Trust,
            Quality and Social Responsibility
          </p>

          <p className="text-bold text-4xl flex flex-wrap m-8 pt-8 justify-center gap-10">
            1+ MILLION <br />
            <span className="text-sm"></span> 4+ DECADES{" "}
            <span className="text-sm"></span> 1000+{" "}
            <span className="text-sm"></span>
          </p>
          <p className="flex flex-wrap justify-center gap-40 mt-[-30px] text-center">
            <span className="text-sm">Sq Ft Of Development</span>
            <span className="text-sm">Of Legacy</span>
            <span className="text-sm">Happy Customers</span>
          </p>

          <p className="mt-16 text-sm text-semibold">
            MahaRERA Registration Number WALNUT : P51800048890 | OAK :
            P51800049102 | Ebony : P51800009546 and is available on the website
            https://maharera.mahaonline.gov.in.
          </p>
        </div>
      </div>

      <div>
        <h1 className="pt-8 flex justify-center text-3xl text-bold">
          PROJECT GALLERY
        </h1>
      </div>
      <div className="m-12   flex flex-row  gap-10 justify-center">
        <Caro />
        <Caro />
      </div>
    </>
  );
};

export default TextWithImage;
