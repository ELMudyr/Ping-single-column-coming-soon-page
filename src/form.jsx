import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Track email validity

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("");
      setIsValidEmail(true); // Set email validity to true
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Please provide a valid email address");
      setIsValidEmail(false); // Set email validity to false
    } else {
      setMessage("");
      setIsValidEmail(true); // Set email validity to true
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="relative container lg:flex-row lg:justify-center gap-3 mt-12 m-auto w-[80%] max-w-[600px] flex flex-col">
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          value={email}
          placeholder="Your email address..."
          className={`border lg:w-[80%] border-${
            isValidEmail ? "Secondary-PaleBlue" : "Secondary-LightRed"
          } rounded-full py-3 px-8 outline-none text-Neutral-VeryDarkBlue placeholder-Secondary-PaleBlue`}
        />
        <button
          type="submit"
          onClick={emailValidation}
          id="btn"
          className="lg:w-[30%] rounded-full outline-none hover:opacity-50 focus:outline-none bg-Primary-Blue text-white font-[600]"
        >
          Notify Me
        </button>
        <p
          id="result"
          className="text-Secondary-LightRed left-7 -top-5  text-xs italic  absolute"
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Form;
