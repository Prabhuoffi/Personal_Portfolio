import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs.sendForm(
        'service_h4d47bb',
        'template_hp721j8',
        e.target,
        'BPl7ojs25TN0EKZ3Z'
      ).then((result) => {
        setSuccessMsg(
          `Thank you dear ${username}, Your Messages has been sent Successfully!`
        );
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, (error) => {
        setErrMsg("Failed to send message, please try again.");
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-purple-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r shadow-lg flex flex-col gap-8 p-4 lgl:p-8">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
              {errMsg && (
                <p className="py-3 bg-red-500 shadow-md text-center text-white text-base tracking-wide">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-500 text-center text-white text-base tracking-wide">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-black uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${errMsg === "Username is required!" && "outline-red-500"} contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-black uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    name="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${errMsg === "Phone number is required!" && "outline-red-500"} contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${errMsg === "Please give your Email!" && "outline-red-500"} contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Subject
                </p>
                <input
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${errMsg === "Please give your Subject!" && "outline-red-500"} contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${errMsg === "Message is required!" && "outline-red-500"} contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-purple-600 rounded-lg text-base text-black tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-purple-600 border-transparent"
                >
                  Send Message
                </button>
              </div>
    
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
