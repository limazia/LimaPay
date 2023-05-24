import { useForm } from "contexts/FormContext";

import { ReactComponent as Mail } from "@assets/mail.svg";

export function PaymentProof() {
  const { personalDetails } = useForm();

  const email = personalDetails.email;

  return (
    <div className="mt-5">
      <div className="row d-flex flex-column align-items-center">
        <h2>Verifique seu e-mail</h2>
        <small className="text-center text-muted">
          O comprovante foi enviado para o seu endereço de e-mail.
        </small>

        <div className="mt-5 text-center">
          <Mail width={300} />
        </div>

        <small className="text-center text-muted mt-5">
          Verifique sua caixa de entrada em <b>{email}</b>.
        </small>
      </div>
    </div>
  );
}
