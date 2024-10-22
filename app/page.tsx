"use client";
import dynamic from "next/dynamic";
import { Webform } from "@formio/js";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const Form = dynamic(
  () => import("@formio/react").then((module) => module.Form),
  { ssr: false }
);

const FormBuilder = dynamic(
  () => import("@formio/react").then((module) => module.FormBuilder),
  { ssr: false }
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const formInstance = useRef<Webform | null>(null);
  const [formData, setFormData] = useState<any | null>(null);
  const [formSubmission, setFormSubmission] = useState<any | null>(null);
  const [formKey, setFormKey] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://examples.form.io/example");
        const data = await res.json();
        console.log("init d", data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://unpkg.com/formiojs@latest/dist/formio.full.min.css";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href =
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(link3);

    fetchData();
    setFormSubmission({
      data: {
        firstName: "Jo",
        lastName: "Sm",
      },
    });
    setFormKey(nanoid());
    setIsMounted(true);
  }, []);

  // Avoid rendering until formData is loaded and component is mounted
  if (!isMounted || !formData) return <div>Loading...</div>;

  const handleClick = () => {
    if (!formInstance.current) {
      console.log("Our form isn't quite ready yet.");
      return;
    }
    formInstance.current.getComponent("firstName")?.setValue("John");
    formInstance.current.getComponent("lastName")?.setValue("Smith");
  };

  const handleDataChange = (data: any) => {
    setFormData(data);
    setFormKey(nanoid());
  };

  return (
    <>
      <div className="p-4">
        <FormBuilder form={formData} onChange={handleDataChange} />
        <Form
          key={formKey}
          form={formData}
          submission={formSubmission}
          onChange={(submission: any) => console.log(submission)}
          formReady={(form: any) => {
            formInstance.current = form; // Capture the form instance when it's ready
          }}
          onSubmit={(sub: any) => console.log(sub)}
        />
        <button onClick={handleClick}>Set Names</button>
      </div>
    </>
  );
}
