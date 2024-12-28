import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "motion/react";
function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness:50 , bounceDamping: 10}}
      className="relative flex-shrink-0 w-60 h-72 px-8 py-10 rounded-[45px] text-white bg-zinc-900/90 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm mt-5 leading-tight font-poppins font-semibold ">
        {data.description}
      </p>
      <footer>
        <div className="footer absolute bottom-0 left-0 w-full   ">
          <div className="flex items-center justify-between py-3 px-8 mb-2">
            <h5>{data.filesize}</h5>

            <span className="w-7 h-7 rounded-full bg-zinc-600 flex justify-center items-center">
              {data.close ? (
                <RiCloseLargeFill size="0.7em" color="#fff" />
              ) : (
                <LuDownload size="0.7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpened ? (
            <div
              className={`tag w-full py-4 flex items-center justify-center`}
              style={{ backgroundColor: `${data.tag.tagColor}` }}
            >
              <h3 className="text-sm  font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </footer>
    </motion.div>
  );
}

export default Card;
