export const getStepTitle = (step: string): string => {
  switch (step) {
    case "SELECT_METHOD":
      return "Formas de pagamento";
    case "PERSONAL_DETAILS":
      return "Informações pessoais";
    case "PAYMENT":
      return "Pagamento";
    case "PAYMENT_APPROVED":
      return "Comprovante";
    default:
      return "";
  }
};

export const getStepDescription = (step: string): string => {
  switch (step) {
    case "SELECT_METHOD":
      return "Selecione um método de pagamento";
    case "PERSONAL_DETAILS":
      return "Preencha seus dados pessoais";
    case "PAYMENT":
      return "Efetue o pagamento";
    case "PAYMENT_APPROVED":
      return "Receba o comprovante de pagamento";
    default:
      return "";
  }
};
