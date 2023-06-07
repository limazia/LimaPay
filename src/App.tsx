import { Link } from "react-router-dom";

import { useForm } from "@contexts/FormContext";
import { getStepDescription, getStepTitle } from "@utils/steps";

import { StepsSidebar } from "@components/StepsSidebar";
import { PaymentMethods } from "@components/PaymentMethods";
import { PersonalDetails } from "@components/PersonalDetails";
import { PayamentForm } from "@components/PayamentForm";
import { PaymentApproved } from "@components/PaymentApproved";
import { Loading } from "@components/Loading";
import { AnimatedComponent } from "@components/AnimatedComponent";
import { SectionTitle } from "@components/SectionTitle";
import { Logo } from "@components/Logo";

export function App() {
  const { currentStep } = useForm();

  const components = {
    SELECT_METHOD: <PaymentMethods />,
    PERSONAL_DETAILS: <PersonalDetails />,
    PAYMENT: <PayamentForm />,
    PAYMENT_APPROVED: <PaymentApproved />,
    LOADING: <Loading />,
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 bg-white payment-container px-0 d-flex flex-column justify-content-between">
          <div className="ml-5">
            <header className="mt-5">
              <nav className="navbar navbar-expand-lg navbar-light py-3 px-0">
                <div className="container px-0">
                  <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center"
                  >
                    <Logo />
                  </Link>
                </div>
              </nav>
            </header>

            <div className="d-flex align-items-center mt-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7">
                    <StepsSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item d-flex flex-column">
              <h6 className="mb-0">Assinatura Premium</h6>
              <small className="text-muted">30 dias</small>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (BRL)</span>
              <strong>R$ 49.99</strong>
            </li>
          </ul>
        </div>

        <div className="col-md-8 payment-container">
          <div className="d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-xl-12 mx-auto">
                  <AnimatedComponent>
                    <>
                      {currentStep.step !== "PAYMENT_APPROVED" && (
                        <SectionTitle
                          title={getStepTitle(currentStep.step)}
                          subtitle={getStepDescription(currentStep.step)}
                        />
                      )}
                      {components[currentStep.step] ?? <Loading />}ss
                    </>
                  </AnimatedComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
