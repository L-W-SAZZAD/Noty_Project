import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { VscClose } from "react-icons/vsc";
import arrow from "../../assets/Logo/Arrow 3.png";

export default function SubModal({
  open,
  setOpen,
  subOpen,
  setSubOpen,
  verify,
  setVerify,
}) {
  return (
    <div>
      <div className=" relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=" w-[760px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-xl">
            <VscClose
              onClick={() => setOpen(false)}
              size="35px"
              className="close_modal absolute top-5 right-5 cursor-pointer hover:rotate-180 duration-700  origin-center"
            />
            <div className="px-32 pb-10 pt-20 ">
              <h2 className="text-[18px] text-[#000000]  font-semibold pb-3">
                Besoin d'aide pour récupérer votre compte ?
              </h2>
              <p className="text-[#666666] text-[15px] leading-6 font-medium w-[406px] pb-10">
                Entrez votre adresse e-mail pour recevoir un code de
                vérification unique (OTP) et réinitialiser votre mot de passe.
              </p>

              <form action="#" className="">
                <label
                  htmlFor="address"
                  className="pb-3 block pl-5 font-semibold text-[16px]"
                >
                  Adresse e-mail
                </label>
                <div className="w-full pb-5">
                  <input
                    className="w-full py-4 px-6 font-medium text-[15px] border rounded-full"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Entrez votre adresse e-mail"
                  />
                </div>

                <button
                  onClick={() => {
                    setVerify(true);
                    setOpen(false);
                    setSubOpen(false);
                  }}
                  className="modal_btn w-full py-4 border rounded-full text-center bg-[var(--gradient-background)] mt-5 block font-semibold text-[16px]"
                >
                  Envoyer le code
                </button>
                <button
                  onClick={() => {
                    setSubOpen(true);
                    setOpen(false);
                  }}
                  className=" font-semibold w-full py-4 border rounded-full text-center bg-[var(--gradient-background)] mt-5 flex justify-center items-center gap-10 text-[16px]"
                >
                  <img className="w-[30px]" src={arrow} alt="" />
                  Retour à la page de connexion
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
