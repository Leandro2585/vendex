import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomer as setStoreCustomer } from '../store/modules/shop/actions';
import Header from '../components/Header';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    name: '',
    type: 'individual',
    country: 'br',
    email: '',
    documents: [
      {
        type: 'cpf',
        number: '',
      },
    ],
    phone_numbers: [''],
    birthday: '',
  });

  const goToCheckout = () => {
    dispatch(setStoreCustomer(customer));
  };


  return (
    <div class="container-fluid h-100 bg-primary p-0">
      <Header/>
      <div className="row">
        <div className="col-5 text-right my-auto">
          <img src="/background.svg" className="img-fluid" />
        </div>
        <div className="col-7 my-5">
          <div className="box col-10">
            <h2 className="text-center">Falta pouco pra fazer suas compras</h2>
            <br/>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Seu Nome Completo"
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value });
              }}
              />

            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
              />


            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg mb-3 cpf-mask"
                placeholder="CPF"
                onChange={(e) => {
                  setCustomer({ ...customer, documents: [
                    {
                      type: 'cpf',
                      number: e.target.value
                    }
                  ] });
                }}
                />

              <input
                type="tel"
                className="form-control ml-2 form-control-lg mb-3"
                placeholder="Telefone"
                onChange={(e) => {
                  setCustomer({ ...customer, phone_numbers: [e.target.value] });
                }}
                />
            </div>
            <input
              type="date"
              className="form-control form-control-lg mb-3 col-6"
              onChange={(e) => {
                setCustomer({ ...customer, birthday: e.target.value });
              }}
              />
            <button
              onClick={() => goToCheckout()}
              className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
