import {
  ReactNode,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

type ProviderProps = {
  children: ReactNode;
};

export enum StepOptions {
  SELECT_METHOD = "SELECT_METHOD",
  PERSONAL_DETAILS = "PERSONAL_DETAILS",
  PAYMENT = "PAYMENT",
  PROOF = "PROOF",
  LOADING = "LOADING",
}

export enum MethodPaymentOptions {
  CREDIT_CARD = "creditcard",
  PAYPAL = "paypal",
  BITCOIN = "bitcoin",
  MARCOLAPAY = "marcolapay",
}

interface Step {
  step: StepOptions;
  finish?: boolean;
}

interface MethodPayment {
  type: MethodPaymentOptions;
}

interface PersonalDetails {
  name: string;
  email: string;
  cpf: string;
  birth: string;
}

interface Payment {
  holder: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
}

interface FormContextType {
  currentStep: Step;
  setCurrentStep: (value: Step) => void;
  methodPayment: MethodPayment;
  setMethodPayment: (value: MethodPayment) => void;
  personalDetails: PersonalDetails;
  setPersonalDetails: (value: PersonalDetails) => void;
  payment: Payment;
  setPayment: (value: Payment) => void;
}

export const STEP_INITIAL_STATE: Step = {
  step: StepOptions.SELECT_METHOD,
  finish: false,
};

export const METHOD_INITIAL_STATE: MethodPayment = {
  type: MethodPaymentOptions.CREDIT_CARD,
};

export const PERSONAL_INITIAL_STATE: PersonalDetails = {
  name: "",
  email: "",
  cpf: "",
  birth: "",
};

export const PAYMENT_INITIAL_STATE: Payment = {
  holder: "",
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export function FormProvider({ children }: ProviderProps) {
  const location = useLocation();

  const [currentStep, setCurrentStep] = useState<Step>(STEP_INITIAL_STATE);
  const [methodPayment, setMethodPayment] =
    useState<MethodPayment>(METHOD_INITIAL_STATE);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    PERSONAL_INITIAL_STATE
  );
  const [payment, setPayment] = useState<Payment>(PAYMENT_INITIAL_STATE);

  useEffect(() => {
    setCurrentStep(STEP_INITIAL_STATE);
    setMethodPayment(METHOD_INITIAL_STATE);
    setPersonalDetails(PERSONAL_INITIAL_STATE);
    setPayment(PAYMENT_INITIAL_STATE);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        methodPayment,
        setMethodPayment,
        personalDetails,
        setPersonalDetails,
        payment,
        setPayment,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }

  return context;
};
