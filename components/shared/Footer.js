import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import { authAtom } from "../../jotai/Atoms";
import fb from "../../public/images/fb.png";
import ig from "../../public/images/ig.png";
const Footer = () => {
  const [user] = useAtom(authAtom);
  return (
    <div calssName='text-white' >
    <footer>
      <div className="p-8 w-full text-white bg-slate-700">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Cool stuff
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Random feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Team feature
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Stuff for developers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Another one
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Last time
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Resource name
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Another resource
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Final resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Locations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Privacy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  passHref
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <Image
                src={fb}
                alt="fb"
                className="w-12 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              />

              <Image
                src={ig}
                alt="ig"
                className="w-12 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:w-full px-4 md:w-1/6">
            <strong>FWR</strong>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
              XXX XXX XXX
              <br />
              XXXXXXXX XXX XXXXX
            </address>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
            </p>
          </div>
          {!user ? (
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button
                className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button
                className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Scroll To Top
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
