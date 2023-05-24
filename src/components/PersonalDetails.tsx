import { FormEvent } from "react";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

import { useForm, StepOptions } from "@contexts/FormContext";

import { SectionTitle } from "@components/SectionTitle";

export function PersonalDetails() {
  const { setCurrentStep, personalDetails, setPersonalDetails } = useForm();

  const { name, email, cpf, birth } = personalDetails;

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();

    if (validate()) {
      toast.error(<span>🐎 Preencha todos os campos!</span>);
      return;
    }

    setCurrentStep({ step: StepOptions.PAYMENT });
  };

  const handleBackStep = () =>
    setCurrentStep({ step: StepOptions.SELECT_METHOD });

  const validate = () => !name || !email || !cpf || !birth;

  return (
    <>
      <SectionTitle title="Informações pessoais" />
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Fulano da Silva"
                  value={name}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="exemplo@dominio.com"
                  value={email}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <InputMask
                  mask="999.999.999-99"
                  type="text"
                  className="form-control"
                  id="cpf"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      cpf: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="birth">Data de nascimento</label>
                <InputMask
                  mask="99/99/9999"
                  type="text"
                  className="form-control"
                  id="birth"
                  placeholder="dd/mm/aaaa"
                  value={birth}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      birth: e.target.value,
                    })
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
                  <ArrowRight size={32} fill="bold" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
