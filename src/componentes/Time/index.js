import Colaborador from '../Colaborador';
import './Time.css';


// aqui, passamos as propriedades específicas para que em Colaborador possamos chamar apenas os dados que precisamos
const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria };
// isso é um if, o se a primeira expressão é verdadeira, o que está após o && será executado. também pode ser feito usando operador ternário ?(no lugar do &&) e :(depois da segunda expressão, dizendo pque deve acontecer quando a primeira expressão for falsa)
    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                return <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={props.aoDeletar}
                /> })}
            </div>
        </section>
    )
}

export default Time;