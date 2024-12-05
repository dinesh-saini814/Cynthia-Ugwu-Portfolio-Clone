import { motion } from "framer-motion";
import Button from "../button/Button";

const Product = ({ item, mover, count }) => {
  return (
    <div className="w-full py-10 border-t-[1px] border-opacity-50 md:h-[12rem]">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto relative"
      >
        <div className="flex items-center justify-between w-full">
          <motion.div
            className="flex items-center justify-between w-full"
            initial={{ opacity: 0.7, x: 0 }}
            whileHover={{ opacity: 0.2, x: 32 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.h1 className="md:text-[5.7rem] text-[2.1rem] uppercase">
              {item.title}
            </motion.h1>
          </motion.div>
          <h5>{item.date}</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
