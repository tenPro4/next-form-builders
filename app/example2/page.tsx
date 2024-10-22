"use client";

import React, { useEffect } from "react";
import FormBuilder, { FormBuilderPostData, TaskData } from "react-form-builder2";
import 'react-form-builder2/dist/app.css';

const url = "/api/formdata";
const saveUrl = "/api/formdata";
const postUrl = "/api/form";
const defaultData = {
    "task_data": [
        {
            "id": "05DF1C90-0659-41C2-B920-118CB12E098A",
            "element": "Label",
            "text": "Label",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder text...",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        },
        {
            "id": "9F520FCB-820E-4586-BF10-4018C1D25A26",
            "element": "Header",
            "text": "Header Text",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder text...",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        },
        {
            "id": "47090FEB-A9D9-4B60-AEA8-F972CB0AAF02",
            "element": "Label",
            "text": "Label",
            "static": true,
            "required": false,
            "bold": false,
            "italic": false,
            "content": "Placeholder text...",
            "canHavePageBreakBefore": true,
            "canHaveAlternateForm": true,
            "canHaveDisplayHorizontal": true,
            "canHaveOptionCorrect": true,
            "canHaveOptionValue": true,
            "canPopulateFromApi": true
        }
    ]
} as FormBuilderPostData

const page = () => {
  useEffect(() => {
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href =
      "https://use.fontawesome.com/releases/v5.13.0/css/all.css";
    document.head.appendChild(link3);
  }, []);

  const handleDataLoad = async (): Promise<FormBuilderPostData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(defaultData); // Resolve the promise with the formatted data
      }, 1000);
    });
  };

  return (
    <>
      <FormBuilder.ReactFormBuilder onLoad={handleDataLoad} onPost={(data:any) => console.log('update',data)}/>
    </>
  );
};

export default page;
