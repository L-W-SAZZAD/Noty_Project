import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { VscClose } from "react-icons/vsc";
import arrow from "../../assets/Logo/Arrow 3.png";
import completeLogo from "../../assets/Logo/bbbcc63f-011b-4dd3-bad0-e19625de2de3 1.png";

export default function CompletedModal({
  open,
  setOpen,
  subModal,
  setSubModal,
  checkOut,
  setCheckOut,
  setClose,
}) {
  return (
    <div>
      <div className=" relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=" w-[754px] pb-10 pt-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-xl">
            <VscClose
              onClick={() => setOpen(false)}
              size="40px"
              className=" absolute top-5 right-5  close_modal cursor-pointer hover:rotate-180 duration-700  origin-center"
            />
            <div className="px-36 ">
              <div className="text-center pb-3">
                <img
                  className="w-[190px] h-[190px] block object-cover mx-auto"
                  src={completeLogo}
                  alt=""
                />
              </div>
              <h2 className="text-[18px] text-[#000000] pb-4 font-semibold pt-10 pl-7">
                Votre mot de passe a été réinitialisé avec succès.
              </h2>
              <p className="text-[#666666] text-[15px] leading-5 pt-3  font-medium pb-10 pl-7 w-[406px]">
                Vous pouvez désormais accéder à votre compte en utilisant votre
                nouveau mot de passe. N'hésitez pas à nous contacter si vous
                avez besoin d'aide supplémentaire. Merci pour votre confiance !
              </p>

              <div className=" pb-10">
                <button
                  onClick={() => {
                    setCheckOut(true);
                    setOpen(false);
                  }}
                  className="modal_btn w-[456px] py-4 border rounded-full text-center bg-[var(--gradient-background)] mt-5 block font-semibold text-[17px] "
                >
                  Se connecter
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
