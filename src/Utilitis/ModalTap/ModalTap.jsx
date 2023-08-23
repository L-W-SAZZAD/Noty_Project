import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import facebook from "../../assets/Social Icons/Group 266.png";
import google from "../../assets/Social Icons/Logo.png";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import SubModal from "../SubModal/SubModal";

export default function ModalTap({ open, setOpen, subOpen, setSubOpen }) {
  return (
    <div>
      <div className=" relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=" w-[796px] py-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-xl">
            <VscClose
              onClick={() => setOpen(false)}
              size="40px"
              className=" close_modal absolute top-5 -translate-x-1/2 left-1/2 cursor-pointer hover:rotate-180 duration-700  origin-center "
            />
            <div className="px-32 pt-16 ">
              <h2 className="text-[21px] text-[#000000] pb-4 font-semibold">
                Connectez-vous à votre compte
              </h2>
              <p className="text-[#666666] text-[19px]">
                Accédez à votre espace personnel en quelques clics.
              </p>
              <button className="py-4 px-3 border border-[#CFCFCF] w-full flex items-center mt-[60px] rounded-full">
                <img className=" w-[31px]" src={facebook} alt="" />
                <p className=" flex-1 font-semibold text-[18px]">
                  Continuer avec Facebook
                </p>
              </button>
              <button className="py-4 px-3 border border-[#CFCFCF] w-full flex items-center mt-5 rounded-full">
                <img className=" w-[31px]" src={google} alt="" />
                <p className=" flex-1 font-semibold text-[18px]">
                  Continuer avec Google
                </p>
              </button>
              <div className="flex py-14 items-center gap-2">
                <div className="w-full flex-1 h-[1px] bg-[#CFCFCF]"></div>
                <p className="">Ou bien</p>
                <div className="w-full flex-1 h-[1px] bg-[#CFCFCF]"></div>
              </div>
              <form action="#">
                <label
                  htmlFor="address"
                  className="pb-3 block pl-5 font-semibold text-[16px]"
                >
                  Adresse e-mail
                </label>
                <div className="w-full">
                  <input
                    className="w-full py-4 px-4 border rounded-full"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Entrez votre adresse e-mail"
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <label
                    htmlFor="address"
                    className=" block pl-5 font-semibold text-[16px]"
                  >
                    Mot de passe
                  </label>
                  <Link className="underline text-[15px]">Oublié?</Link>
                </div>
                <div className="w-full">
                  <input
                    className="w-full py-4 px-4 border rounded-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                  />
                </div>
                <div className="flex items-center gap-1 py-4 pl-4">
                  <input
                    className="w-[20px] h-[20px]"
                    type="checkbox"
                    name="check"
                    id="check"
                  />
                  <p className=" font-medium text-[#333333]">
                    Se souvenir de moi
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubOpen(true);
                    setOpen(false);
                  }}
                  className="modal_btn w-full py-4 border rounded-full text-center bg-[var(--gradient-background)] mt-5 block"
                >
                  Se connecter
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
