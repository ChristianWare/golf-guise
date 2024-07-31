"use client";

import toast from "react-hot-toast";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Image from "next/image";
import Img from '../../../public/images/img1.png'

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   setLoading(true);
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   }).then((res) => res.json());

  //   if (response.messageId) {
  //     toast.success("Thanks! We will be in touch soon 😀");
  //   } else {
  //     toast.error("Please try again sometime");
  //   }

  //   reset();
  //   setLoading(false);
  // };

  return (
    <LayoutWrapper>
          <div className={styles.left}>
            <h2 className={styles.heading}>Drop us a line</h2>
          </div>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.right}>
            {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.form}> */}
            <form className={styles.form}>
              <div className={styles.namesContainer}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    id='firstName'
                    type='text'
                    placeholder='First Name'
                    // {...register("firstName", { required: true })}
                  />
                  {/* {errors.firstName && (
                      <span className={styles.error}>
                        *** First Name is required
                      </span>
                    )} */}
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    id='lastName'
                    type='text'
                    placeholder='Last Name'

                    // {...register("lastName", { required: true })}
                  />
                  {/* {errors.lastName && (
                      <span className={styles.error}>
                        *** Last Name is required
                      </span>
                    )} */}
                </div>
              </div>
              <div className={styles.everythingElse}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='email'>Email</label>
                  <input
                    id='senderEmail'
                    type='email'
                    // {...register("email", {
                    //   required: true,
                    //   pattern: {
                    //     value: /\S+@\S+\.\S+/,
                    //     message: "Entered value does not match email format",
                    //   },
                    // })}
                    placeholder='So we can respond. We won&#39;t send you spam.'
                    maxLength={500}
                  />
                  {/* {errors.email && (
                      <span className={styles.error}>
                        *** Email is required
                      </span>
                    )} */}
                </div>

                <div className={styles.labelInputBox}>
                  <label htmlFor='message'>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id='message'
                    maxLength={5000}
                    // {...register("message", { required: true })}
                    placeholder='No solicitations, please.'
                  />
                  {/* {errors.message && (
                      <span className={styles.error}>
                        *** Message is required
                      </span>
                    )} */}
                </div>
              </div>
              <div className={styles.btnBtnContainer}>
                <div className={styles.btnContainer}>
                  <button className={styles.btn}>
                    {loading ? "Sending..." : "Submit"}
                    {/* <Arrow2 className={styles.icon2} /> */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          <div className={styles.imgContainer}>
            <Image src={Img} alt='' fill className={styles.img} />
          </div>
      </div>
    </LayoutWrapper>
  );
};
export default ContactForm;
