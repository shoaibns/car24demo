import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="min-w-screen pt-12 bg-[#050b20] text-gray-50">
      {/* Top Section */}
      <div className="top px-12 flex flex-col md:flex-row justify-between">
        <div className="left pb-12">
          <h2 className="text-3xl font-bold">Join Car24</h2>
          <p className="mt-2">Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="right w-1/2">
          <div className="relative w-full ">
            <input
              className="w-full bg-gray-50/10 backdrop-blur-md border py-6 pl-4 pr-20 rounded-full mt-3 text-gray-50 focus:outline-blue-500"
              placeholder="Enter e-mail address"
              type="text"
            />
            <button className="mt-[6px] absolute right-2 top-1/2 -translate-y-1/2 text-gray-950 bg-gray-200 py-5 px-6 rounded-full border border-gray-950 hover:bg-gray-300 leading-none">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle px-12 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Finance
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul classLinkame="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Live Chat
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                How it Works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Our Brands</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Toyota
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Porsche
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Audi
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                BMW
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Ford
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Nisan
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                TATA
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Mahindra
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Wolkswagen
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Vehicle Types</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Sedans
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                SUVs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Hatchbacks
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Electric Cars
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Convertable
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Coupe
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Truck
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Hybrid
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Social Presence</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom py-4 text-center text-gray-500 text-sm border-t border-gray-700 flex justify-between items-center px-12">
        <div>© 2024 Car24. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="#" className="hover:text-blue-400">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
