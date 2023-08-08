import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import "./home.css";

const Home = () => {
  const [password, setPassword] = useState("");
  const [uzunluk, setUzunluk] = useState(10);
  const karekterler =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'";
  const randomPassword = () => {
    let yeniOlusanSifrem = "";
    for (let i = 0; i < uzunluk; i++) {
      const indeksNumarasi = Math.floor(Math.random() * karekterler.length);
      yeniOlusanSifrem += karekterler[indeksNumarasi];
    }
    setPassword(yeniOlusanSifrem);
  };
  console.log(password);
  return (
    <div className="container bg-info-subtle ">
      <h1 className=" baslik text-center pt-3 text-info fw-normal  display-6">
        RANDOM SIFRE OLUSTURUCU
      </h1>
      <div className="d-flex justify-content-center align-items-center col-auto p-3 mt-5">
        <label htmlFor="inputPassword2" className="visually">
          Password:
        </label>
        <input
          value={password}
          type="text"
          className="form-control w-50"
          id="inputPassword2"
          placeholder="Password"
        />
        <CopyToClipboard text={password}>
          <BiCopy
            size={33}
            style={{ cursor: "pointer" }}
            className="bg-success rounded-2 "
          />
        </CopyToClipboard>
      </div>

      <div className="col-auto mt-3 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary me-4 mb-3"
          onClick={randomPassword}
        >
          New Password
        </button>
        <button
          type="submit"
          className="btn btn-outline-danger mb-3"
          onClick={() => setPassword("")}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Home;
