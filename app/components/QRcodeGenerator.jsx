"use client"
import React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const QRcodeGenerator = () => {
    const formData = useSelector(state => state.formData);
    console.log(formData);

    const isPhoneNumber = (data) => {

        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(data);
    };

    const handleQRCodeValue = (data) => {
        
        if (isPhoneNumber(data?.field === "phoneNumber")) {

            return `tel:${data}`;
        } else if (data?.field === "sms") {

            const encodedText = encodeURIComponent("fakola");
            return `sms:${"05011401502"}?body=${encodedText}`;        
        } else {

            return data;
        }
    };

    const phoneNumber = "0555XXXXXXX"; // Hedef telefon numarası
    const message = "Merhaba!";

    return (
        <div className="w-full flex justify-center items-center">
            {formData?.form?.data && (
      <QRCode value={`sms:${phoneNumber}?body=${encodeURIComponent(message)}`} />            )}
        </div>
    );
};

export default QRcodeGenerator;
