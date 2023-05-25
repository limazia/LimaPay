import { CheckCircle } from "@phosphor-icons/react";

import { useForm } from "@contexts/FormContext";
import { getStepDescription, getStepTitle } from "@utils/steps";

interface StepStatus {
  step: string;
  completedFields: string[];
}

export function StepsSidebar() {
  const { currentStep, methodPayment, personalDetails, payment } = useForm();

  const getStatus = (step: string, completedFields: string[]): string => {
    if (
      currentStep.step === step ||
      (step === "PAYMENT" && currentStep.finish)
    ) {
      return "active";
    } else if (step === "PAYMENT_APPROVED") {
      return "";
    } else if (completedFields.every((field) => !!field)) {
      return "completed";
    }

    return "";
  };

  const steps: StepStatus[] = [
    {
      step: "SELECT_METHOD",
      completedFields: [methodPayment.type],
    },
    {
      step: "PERSONAL_DETAILS",
      completedFields: [
        personalDetails.name,
        personalDetails.email,
        personalDetails.cpf,
        personalDetails.birth,
      ],
    },
    {
      step: "PAYMENT",
      completedFields: [
        payment.holder,
        payment.cardNumber,
        payment.expirationDate,
        payment.securityCode,
      ],
    },
    {
      step: "PAYMENT_APPROVED",
      completedFields: [],
    },
  ];

  return (
    <>
      {steps.map((step) => (
        <div className="row mt-4" key={step.step}>
          <div className="d-flex align-items-center justify-content-between steps">
            <div className="d-flex align-items-center">
              <span
                className={`d-flex ${getStatus(
                  step.step,
                  step.completedFields
                )}`}
              >
                <CheckCircle size={24} fill="bold" className="mr-2" />
                <div className="d-flex flex-column">
                  <span className="step-title">{getStepTitle(step.step)}</span>
                  <small className="step-description">
                    {getStepDescription(step.step)}
                  </small>
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
