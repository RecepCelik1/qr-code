"use client"
import React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const QRcodeGenerator = () => {
    const formData = useSelector(state => state.formData);

    return (
        <div className="w-full flex justify-center items-center">
            {formData?.form?.data && (
          <QRCode value={`${formData.form.data}`} />
        )}
        </div>
    );
};

export default QRcodeGenerator;
