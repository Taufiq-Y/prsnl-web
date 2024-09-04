"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/AnimatedModel";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  const images = [
    { src: require("../../public/data/images.png"), name: "HTML" },
    { src: require("../../public/data/logo-2582747_640.webp"), name: "CSS" },
    {
      src: require("../../public/data/javascript-js-icon-2048x2048-nyxvtvk0.png"),
      name: "JavaScript",
    },
    { src: require("../../public/data/download (1).png"), name: "TypeScript" },
    { src: require("../../public/data/react.svg"), name: "React" },
    { src: require("../../public/data/angular.svg"), name: "Angular" },
    { src: require("../../public/data/vuejs-ar21.svg"), name: "VueJS" },
    { src: require("../../public/data/nodejs.svg"), name: "NodeJS" },
    { src: require("../../public/data/nestjs-icon.svg"), name: "NestJS" },
    { src: require("../../public/data/postman.svg"), name: "Postman" },
    { src: require("../../public/data/graphql.svg"), name: "GraphQL" },
    { src: require("../../public/data/mongodb.svg"), name: "MongoDB" },
    { src: require("../../public/data/postgresql.svg"), name: "PostgreSQL" },
    { src: require("../../public/data/sql.svg"), name: "MSSQL" },
    { src: require("../../public/data/mysql.svg"), name: "MySQL" },
    { src: require("../../public/data/typeorm.svg"), name: "TypeORM" },
    {
      src: require("../../public/data/sequelizejs-ar21.svg"),
      name: "Sequelize",
    },
    { src: require("../../public/data/amazon-aws.svg"), name: "AWS" },
    { src: require("../../public/data/images (1).png"), name: "GCP" },
    { src: require("../../public/data/azure.svg"), name: "Azure" },
    { src: require("../../public/data/nginx.png"), name: "Nginx" },
    { src: require("../../public/data/docker.svg"), name: "Docker" },
    { src: require("../../public/data/jenkins.svg"), name: "Jenkins" },
    { src: require("../../public/data/kubernets.svg"), name: "Kubernetes" },
  ];

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Checkout My Skills
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🧑‍💻
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Skills
            </h4>
            <div className="flex flex-wrap justify-center items-center">
              {images.map((image, idx) => (
                <div
                  key={"images" + idx}
                  className="flex flex-col items-center m-2"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl p-1 bg-white dark:bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
                    style={{
                      rotate: Math.random() * 20 - 10,
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      width="60"
                      height="60"
                      className="rounded-lg object-cover flex items-center justify-center"
                    />
                  </motion.div>
                  <p className="text-center text-sm mt-1">{image.name}</p>
                </div>
              ))}
            </div>
          </ModalContent>
          {/* <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
}
