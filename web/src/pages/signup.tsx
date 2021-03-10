import Header from '../components/Header';

const Home: React.FC = () => {
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
              placeholder="Seu Nome Completo"/>

            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"/>


            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg mb-3 cpf-mask"
                placeholder="CPF"/>

              <input
                type="tel"
                className="form-control ml-2 form-control-lg mb-3"
                placeholder="Telefone"/>
            </div>
            <input
              type="date"
              className="form-control form-control-lg mb-3 col-6"/>
            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
