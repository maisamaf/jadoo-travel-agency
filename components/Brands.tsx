import React from "react";
import Alitalia from "./brands/Alitalia";
import Axon from "./brands/Axon";
import Expedia from "./brands/Expedia";
import JetStar from "./brands/JetStar";
import Qantas from "./brands/Qantas";

import { motion } from "framer-motion";
type Props = {};

export default function Brands({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto my-10">
      <motion.div
        initial={{ y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col flex-wrap items-center justify-center sm:flex-row md:justify-between shrink-0"
      >
        <Axon />
        <JetStar />
        <Expedia />
        <Qantas />
        <Alitalia />
      </motion.div>
    </section>
  );
}
