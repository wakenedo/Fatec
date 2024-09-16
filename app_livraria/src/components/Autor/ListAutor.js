import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListAutor = () => {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    const fetchAllAutores = async () => {
      try {
        const res = await axios.get("http://localhost:8081/autor");
        setAutores(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAutores();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/autor/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Lista de Autores</h2>
      <Link to="/addAutor" className="btn btn-success">
        Adicionar novo Autor
      </Link>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {autores.map((autor) => (
            <tr key={autor.id}>
              <td>{autor.id}</td>
              <td>{autor.nome}</td>
              <td>
                <Link to={`/readAutor/${autor.id}`} className="btn btn-info mx-2">
                  Ler
                </Link>
                <Link to={`/updateAutor/${autor.id}`} className="btn btn-warning mx-2">
                  Editar
                </Link>
                <button onClick={() => handleDelete(autor.id)} className="btn btn-danger">
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAutor;
