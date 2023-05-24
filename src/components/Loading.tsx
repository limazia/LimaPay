import { useEffect } from "react";
import { toast } from "react-toastify";

import { useForm, StepOptions } from "@contexts/FormContext";

import { Spinner } from "@components/Spinner";

export function Loading() {
  const { currentStep, setCurrentStep } = useForm();

  useEffect(() => {
    if (currentStep.finish) {
      const timer = setTimeout(() => {
        setCurrentStep({ step: StepOptions.PROOF });

        toast.success(<span>🎉 Compra aprovada!</span>);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentStep.finish, setCurrentStep]);

  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Spinner width="5rem" height="5rem" colorClass="black" />
      </div>
    </div>
  );
}
