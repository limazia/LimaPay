import { Check, ArrowLeft } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

import { useForm, StepOptions } from "@contexts/FormContext";

export function PayamentForm() {
  const { setCurrentStep, payment, setPayment } = useForm();

  const { holder, cardNumber, expirationDate, securityCode } = payment;

  const handleSubmit = async () => {
    if (validate()) {
      toast.error(<span>🐎 Preencha todos os campos!</span>);

      return;
    }

    setCurrentStep({ step: StepOptions.LOADING, finish: true });
  };

  const handleBackStep = () =>
    setCurrentStep({ step: StepOptions.PERSONAL_DETAILS });

  const validate = () =>
    !holder || !cardNumber || !expirationDate || !securityCode;

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="holder">Nome do titular</label>
              <input
                type="text"
                className="form-control"
                id="holder"
                placeholder="Fulano da Silva"
                value={holder}
                onChange={(e) =>
                  setPayment({ ...payment, holder: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="card">Número do cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                type="text"
                className="form-control"
                id="card"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) =>
                  setPayment({ ...payment, cardNumber: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="expiry">Data de expiração</label>
              <InputMask
                mask="99/99"
                type="text"
                className="form-control"
                id="expiry"
                placeholder="mm/yy"
                value={expirationDate}
                onChange={(e) =>
                  setPayment({
                    ...payment,
                    expirationDate: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <InputMask
                mask="999"
                type="text"
                className="form-control"
                id="cvv"
                placeholder="***"
                value={securityCode}
                onChange={(e) =>
                  setPayment({ ...payment, securityCode: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="btn btn-back ml-0 pl-0"
                onClick={handleBackStep}
              >
                <ArrowLeft size={32} fill="bold" />
              </button>
              <button
                type="submit"
                className="btn btn-pay"
                disabled={validate()}
              >
                <Check size={32} fill="bold" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
