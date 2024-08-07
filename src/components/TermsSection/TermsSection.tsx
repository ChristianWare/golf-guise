"use client";

import { useState } from "react";
// import { terms } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TermsSection.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";
import Image, { StaticImageData } from "next/image";
import Img from "../../../public/images/img1.png";
import Diamond from "../../../public/images/diamond.webp";
import Platinum from "../../../public/images/platimun.jpg";
import Gold from "../../../public/images/gold.jpg";
import Silver from "../../../public/images/silver.webp";
import Modal from "../Modal/Modal";

interface PricingDetail {
  term: string;
  price: string;
}

interface Details {
  age: string;
  clubs: string;
  pricing: PricingDetail[];
}

interface DataItem {
  id: number;
  series: string;
  src: StaticImageData; // Next.js specific type for static images
  details: Details;
}

const data: DataItem[] = [
  {
    id: 1,
    series: "Diamond Series",
    src: Diamond,
    details: {
      age: "1 year old",
      clubs: "PING G425 & TaylorMade Stealth2",
      pricing: [
        { term: "Daily Fee", price: "$47.00 - PER DAY" },
        { term: "2 Day Rental", price: "$44.00 - PER DAY" },
        { term: "3 Day Rental", price: "$41.00 - PER DAY" },
        {
          term: "4 Day Rental - EXTRA 10% Discount",
          price: "$34.20 - PER DAY",
        },
        {
          term: "5 Day Rental - EXTRA 10% Discount",
          price: "$31.50 - PER DAY",
        },
        {
          term: "6 Day Rental - EXTRA 10% Discount",
          price: "$28.80 - PER DAY",
        },
        {
          term: "Weekly Rental - EXTRA 10% Discount",
          price: "$26.10 - PER DAY",
        },
        { term: "One time Delivery", price: "$7.00" },
      ],
    },
  },
  {
    id: 2,
    series: "Platinum Series",
    src: Platinum,
    details: {
      age: "2 Years Old",
      clubs: "PING G410 & TaylorMade SIM",
      pricing: [
        { term: "Daily Fee", price: "$42.00 - PER DAY" },
        { term: "2 Day Rental", price: "$39.00 - PER DAY" },
        { term: "3 Day Rental", price: "$36.00 - PER DAY" },
        {
          term: "4 Day Rental - EXTRA 10% Discount",
          price: "$29.70 - PER DAY",
        },
        {
          term: "5 Day Rental - EXTRA 10% Discount",
          price: "$27.00 - PER DAY",
        },
        {
          term: "6 Day Rental - EXTRA 10% Discount",
          price: "$24.30 - PER DAY",
        },
        {
          term: "Weekly Rental - EXTRA 10% Discount",
          price: "$21.60 - PER DAY",
        },
        { term: "One time Delivery", price: "$7.00" },
      ],
    },
  },
  {
    id: 3,
    series: "Gold Series",
    src: Gold,
    details: {
      age: "3.5 YEARS OLD",
      clubs: "PING G400 & TaylorMade M4",
      pricing: [
        { term: "1 Day Rental", price: "$37.00" },
        { term: "2 Day Rental", price: "$34.00 - PER DAY" },
        { term: "3 Day Rental", price: "$31.00 - PER DAY" },
        { term: "4 Day Rental - EXTRA 10% Discount", price: "$25.20" },
        { term: "5 Day Rental - EXTRA 10% Discount", price: "$22.50" },
        { term: "6 Day Rental - EXTRA 10% Discount", price: "$19.80" },
        { term: "Weekly Rental - EXTRA 10% Discount", price: "$17.10" },
        { term: "One time Delivery", price: "$7.00" },
      ],
    },
  },
  {
    id: 4,
    series: "Silver Series",
    src: Silver,
    details: {
      age: "5.5 YEARS OLD",
      clubs: "PING G30",
      pricing: [
        { term: "Daily Fee", price: "$33.00" },
        { term: "2 Day Rental", price: "$30.00 - PER DAY" },
        { term: "3 Day Rental", price: "$27.00 - PER DAY" },
        { term: "4 Day Rental - EXTRA 10% Discount", price: "$21.60" },
        { term: "5 Day Rental - EXTRA 10% Discount", price: "$18.90" },
        { term: "6 Day Rental - EXTRA 10% Discount", price: "$16.20" },
        { term: "Weekly Rental - EXTRA 10% Discount", price: "$13.50" },
        { term: "One time Delivery", price: "$7.00" },
      ],
    },
  },
];

const TermsSection = () => {
  // function shuffleArray(array: number[]) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }

  // const termIndices = terms.map((_, index) => index);
  // shuffleArray(termIndices);

  // const randomIndices = termIndices.slice(0, 4);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<DataItem | null>(null);

  const handleBoxClick = (item: DataItem) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Golf Club Rentals</h2>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <div className={styles.box} onClick={() => handleBoxClick(x)}>
                <h3 className={styles.title}>{x.series}</h3>
                <span className={styles.arrow}>
                  <Arrow width={35} height={35} className={styles.arrow} />
                </span>
              </div>
              <div className={styles.imgContainer}>
                <Image src={x.src} fill alt='' className={styles.img} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            btnType='primary'
            text='Contact for more details'
            href='/contact'
            iconColor='white'
          />
        </div>
      </LayoutWrapper>

      {modalContent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className={styles.modalTitle}>{modalContent.series}</h3>

          <p>{modalContent.details.age}</p>
          <p>{modalContent.details.clubs}</p>
          {modalContent.details.pricing.map((priceDetail, index) => (
            <p key={index}>
              {priceDetail.term}: {priceDetail.price}
            </p>
          ))}
        </Modal>
      )}
    </section>
  );
};
export default TermsSection;
