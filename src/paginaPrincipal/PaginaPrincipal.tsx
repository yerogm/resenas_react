import React, { useEffect, useState } from "react";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export interface ListaModel {
    comentario: string;
    id: string;
    // estrellas: string;
}

const PaginaPrincipal = () => {
    // const listaResenas: ListaResenas[] = [
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    //     {
    //         comentario:
    //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime veritatis ducimus suscipit sunt porro vero cumque enim, cum optio! Nulla distinctio dolor possimus enim animi repudiandae aliquid impedit accusamus?",
    //         estrellas: "",
    //         id: "",
    //     },
    // ];
    const [primeraEstrella, setPrimeraEstrella] = useState("#dbdbdb");
    const [segundaEstrella, setSegundaEstrella] = useState("#dbdbdb");
    const [tercerEstrella, setTercerEstrella] = useState("#dbdbdb");
    const [cuartaEstrella, setCuartaEstrella] = useState("#dbdbdb");
    const [quintaEstrella, setQuintaEstrella] = useState("#dbdbdb");

    const [valueInput, setValueInput] = useState<string>("");
    const [listaValores, setListaValores] = useState<ListaModel[]>([
        {
            comentario: valueInput,
            id: "",
        },
    ]);
    // const [valorIngresado, setValorIngresado] = useState<ListaModel>({
    //     comentario: valueInput,
    //     id: "",
    // });

    const guardarResena = () => {
        const nuevoElemento: ListaModel = {
            comentario: valueInput,
            id: "",
        };

        setListaValores([...listaValores, nuevoElemento]);
        console.log("estos son los valores", listaValores);

        localStorage.setItem("resena", JSON.stringify(nuevoElemento));
        setValueInput("");
    };

    useEffect(() => {
        const storedResena = localStorage.getItem("resena");
        if (storedResena) {
            const resena: ListaModel = JSON.parse(storedResena);
            setListaValores([resena]);
        }
    }, []);

    // const resenaEnviada = prompt("envia una resena");

    // localStorage.setItem("resena", JSON.stringify(resenaEnviada));

    // console.log(localStorage.getItem("resena"));
    const unaEstrella = () => {
        for (let i = 0; i < 2; i++) {
            setPrimeraEstrella("yellow");
        }
    };
    const dosEstrellas = () => {
        for (let i = 0; i < 2; i++) {
            setSegundaEstrella("yellow");
        }
    };
    const tresEstrellas = () => {
        for (let i = 0; i < 2; i++) {
            setTercerEstrella("yellow");
        }
    };
    const cuatroEstrellas = () => {
        for (let i = 0; i < 2; i++) {
            setCuartaEstrella("yellow");
        }
    };
    const cincoEstrellas = () => {
        for (let i = 0; i < 2; i++) {
            setQuintaEstrella("yellow");
        }
    };

    return (
        <div>
            <div className="resena">
                <input
                    type="text"
                    value={valueInput}
                    placeholder="Escribir Comentario"
                    onChange={(e) => setValueInput(e.target.value)}
                    // onChange={(e) => setValorIngresado(...valorIngresado, item.comentario, e.target.value)}
                />
                <button onClick={guardarResena}>Enviar</button>
            </div>
            <div className="contenedorComentarios">
                {listaValores.map((item) => (
                    <div className="comentario">
                        <div className="user">
                            <FontAwesomeIcon icon={faUser} />
                            <span>User</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faStar}
                                onClick={() => unaEstrella()}
                                style={{ color: primeraEstrella }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                onClick={() => dosEstrellas()}
                                style={{ color: segundaEstrella }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                onClick={() => tresEstrellas()}
                                style={{ color: tercerEstrella }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                onClick={() => cuatroEstrellas()}
                                style={{ color: cuartaEstrella }}
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                onClick={() => cincoEstrellas()}
                                style={{ color: quintaEstrella }}
                            />
                        </div>
                        <span>{item.comentario}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaginaPrincipal;
