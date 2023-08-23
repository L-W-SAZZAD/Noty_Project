import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import facebook from "../../assets/Social Icons/Group 266.png";
import google from "../../assets/Social Icons/Logo.png";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import SubModal from "../SubModal/SubModal";

export default function CheckOutModal({
  open,
  setOpen,
  subOpen,
  setSubOpen,
  complete,
  setComplete,
}) {
  return (
    <div>
      <div className=" relative">
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=" w-[660px] py-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-xl">
            <VscClose
              onClick={() => setOpen(false)}
              size="30px"
              className=" absolute top-5 right-5  close_modal cursor-pointer hover:rotate-180 duration-700  origin-center"
            />
            <div className="px-32 ">
              <h2 className="text-[16px] text-[#000000] pb-4 font-semibold">
                Réinitialisation de Mot de Passe
              </h2>
              <p className="text-[#666666] text-[15px] leading-5 font-medium w-[406px]">
                Veuillez saisir votre nouveau mot de passe ci-dessous pour
                réinitialiser votre compte. Assurez-vous qu'il est sécurisé et
                répond aux exigences de sécurité.
              </p>

              <form action="#">
                <label
                  htmlFor="address"
                  className="pb-3 pt-12 block pl-5 font-semibold text-[15px]"
                >
                  Nouveau Mot de Passe
                </label>
                <div className="w-full pb-6">
                  <input
                    className="w-full py-4 px-6 font-medium text-[15px] border rounded-full"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Entrez votre nouveau mot de passe"
                  />
                </div>
                <label
                  htmlFor="address"
                  className="pb-3 block pl-5 font-semibold text-[15px]"
                >
                  Confirmer Votre Nouveau Mot de Passe
                </label>
                <div className="w-full">
                  <input
                    className="w-full py-4 px-6 font-medium text-[15px] border rounded-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Re-entrez votre nouveau mot de passe"
                  />
                </div>

                <button
                  onClick={() => {
                    setComplete(true);
                    setOpen(false);
                  }}
                  className="modal_btn w-full py-3 border rounded-full text-center bg-[var(--gradient-background)] mt-5 block font-semibold text-[15px]"
                >
                  Réinitialiser le Mot de Passe
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
