import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadLivro = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8081/livro/${id}`)
      .then((res) => {
        setLivro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>Detalhes do Livro</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>ID da Editora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.editoraId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReadLivro;
