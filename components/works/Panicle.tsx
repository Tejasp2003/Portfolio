import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx';
import { motion } from "framer-motion";

const Panicle = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            SDE Intern Frontend{" "}
            <span className="text-textGreen tracking-wide">@Panicle Tech</span>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">May 2023 - November 2023</p>
          <ul className="mt-6 flex flex-col">
            <li className="text-base text-textDark flex gap-2 ">
              <span className="text-textGreen mt-1">
                <RxDoubleArrowRight />{" "}
              </span>{" "}
              Led the development of user-centric interfaces using React, Next.js, and Tailwind CSS, enhancing user experience and interface responsiveness across multiple projects.
            </li>
            <li className="text-base text-textDark flex gap-2 ">
              <span className="text-textGreen mt-1">
                <RxDoubleArrowRight />{" "}
              </span>
              Collaborated in cross-functional teams, integrating frontend with backend APIs using Axios, and ensuring seamless data handling and application performance.
            </li>
            <li className="text-base text-textDark flex gap-2 ">
              <span className="text-textGreen mt-1">
                <RxDoubleArrowRight />{" "}
              </span>{" "}
              Pioneered responsive design implementations, improving application accessibility and compatibility across various devices and browsers.
            </li>
            <li className="text-base text-textDark flex gap-2 ">
              <span className="text-textGreen mt-1">
                <RxDoubleArrowRight />{" "}
              </span>{" "}
              Contributed to the optimization of web applications, focusing on speed, scalability, and the development of reusable code and libraries. 
            </li>
          </ul>
        </motion.div>
      );
}

export default Panicle







