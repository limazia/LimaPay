import { ReactComponent as Mail } from "@assets/mail.svg";

export function PaymentApproved() {
  return (
    <div className="mt-5">
      <div className="row d-flex flex-column align-items-center">
        <h2>🎉 Compra aprovada!</h2>

        <small className="text-center text-muted">
          O comprovante foi enviado para o seu endereço de e-mail.
        </small>

        <div className="mt-5 text-center">
          <Mail width={300} />
        </div>
      </div>
    </div>
  );
}
