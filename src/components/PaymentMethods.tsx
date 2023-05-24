import {
  useForm,
  StepOptions,
  MethodPaymentOptions,
} from "@contexts/FormContext";

import PagSeguro from "@assets/pagseguro.png";
import MercadoPago from "@assets/mercadopago.png";
import PayPal from "@assets/paypal.png";
import VisaMaster from "@assets/visa-master.png";

export function PaymentMethods() {
  const { setCurrentStep, setMethodPayment } = useForm();

  const handleSelect = () => {
    setCurrentStep({ step: StepOptions.PERSONAL_DETAILS });
    setMethodPayment({ type: MethodPaymentOptions.CREDIT_CARD });
  };

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-method" onClick={handleSelect}>
            <div className="card-body py-4 d-flex align-items-center justify-content-between">
              <img src={VisaMaster} alt="Visa ou Master" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-method disabled">
            <div className="card-body py-4 d-flex align-items-center justify-content-between">
              <img src={PagSeguro} alt="PagSeguro" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-method disabled">
            <div className="card-body py-4 d-flex align-items-center justify-content-between">
              <img src={MercadoPago} alt="Mercado Pago" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card card-method disabled">
            <div className="card-body py-4 d-flex align-items-center justify-content-between">
              <img src={PayPal} alt="PayPal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
