import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListLivro = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchAllLivros = async () => {
      try {
        const res = await axios.get("http://localhost:8081/livro");
        setLivros(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLivros();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar este livro?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8081/livro/${id}`);
        setLivros(livros.filter((livro) => livro.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Listando Livros</h2>
      <Link to="/addLivro" className="btn btn-success mb-3">Adicionar novo Livro</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.editoraId}</td> {/* Assuming you store Editora by ID */}
              <td>
                <Link to={`/readLivro/${livro.id}`} className="btn btn-success mx-2">
                  Ler
                </Link>
                <Link to={`/updateLivro/${livro.id}`} className="btn btn-info mx-2">
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(livro.id)}
                  className="btn btn-danger"
                >
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

export default ListLivro;
