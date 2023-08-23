import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { VscClose } from "react-icons/vsc";
import arrow from "../../assets/Logo/Arrow 3.png";

export default function VerifyModal({
  open,
  setOpen,
  subModal,
  setSubModal,
  checkOut,
  setCheckOut,
}) {
  return (
    <div>
      <div className=" relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=" W-[860px] pb-10 pt-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-xl">
            <VscClose
              onClick={() => setOpen(false)}
              size="40px"
              className=" absolute top-5 right-5  close_modal cursor-pointer hover:rotate-180 duration-700  origin-center"
            />
            <div className="px-32  ">
              <h2 className="text-[16px] text-[#000000] pb-4 font-semibold">
                Code de Vérification OTP
              </h2>
              <p className="text-[#666666] text-[15px] leading-5 w-[406px] font-medium">
                Veuillez saisir le code de vérification à 7 chiffres que nous
                avons envoyé à votre adresse e-mail pour réinitialiser votre mot
                de passe.
              </p>

              <form action="#" className="pt-12">
                <label
                  htmlFor="address"
                  className="pb-3 block pl-4 font-semibold text-[16px]"
                >
                  Code de Vérification
                </label>
                <div className="w-full flex gap-[20px]">
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                  <input className=" w-[40px] h-[50px] border border-[#CFCFCF] p-5 block rounded-lg" />
                </div>

                <button
                  onClick={() => {
                    setCheckOut(true);
                    setOpen(false);
                  }}
                  className="modal_btn w-full py-4 border rounded-full text-center bg-[var(--gradient-background)] mt-5 block font-semibold text-[16px]"
                >
                  Valider
                </button>
                <button
                  onClick={() => {
                    setSubModal(true);
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
