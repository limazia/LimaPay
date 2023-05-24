import { CheckCircle } from "@phosphor-icons/react";

import { useForm } from "@contexts/FormContext";

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
    } else if (step === "PROOF") {
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
      step: "PROOF",
      completedFields: [],
    },
  ];

  const getStepTitle = (step: string): string => {
    switch (step) {
      case "SELECT_METHOD":
        return "Formas de pagamento";
      case "PERSONAL_DETAILS":
        return "Informações pessoais";
      case "PAYMENT":
        return "Pagamento";
      case "PROOF":
        return "Comprovante";
      default:
        return "";
    }
  };

  const getStepDescription = (step: string): string => {
    switch (step) {
      case "SELECT_METHOD":
        return "Selecione um método de pagamento";
      case "PERSONAL_DETAILS":
        return "Preencha seus dados pessoais";
      case "PAYMENT":
        return "Efetue o pagamento";
      case "PROOF":
        return "Receba o comprovante de pagamento";
      default:
        return "";
    }
  };

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
