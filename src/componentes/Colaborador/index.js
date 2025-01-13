import "./Colaborador.css";

// aqui, podemos chamar apenas as propriendades que vamos usar, pois onde o Colaborador está sendo chamado elas foram especificadas. Essa é uma forma alternativa ao props
const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}

export default Colaborador;