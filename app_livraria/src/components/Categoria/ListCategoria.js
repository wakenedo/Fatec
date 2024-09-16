import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchAllCategorias = async () => {
      try {
        const res = await axios.get("http://localhost:8081/categoria");
        setCategorias(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCategorias();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/categoria/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Lista de Categorias</h2>
      <Link to="/addCategoria" className="btn btn-success">
        Adicionar nova Categoria
      </Link>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.descricao}</td>
              <td>
                <Link to={`/readCategoria/${categoria.id}`} className="btn btn-info mx-2">
                  Ler
                </Link>
                <Link to={`/updateCategoria/${categoria.id}`} className="btn btn-warning mx-2">
                  Editar
                </Link>
                <button onClick={() => handleDelete(categoria.id)} className="btn btn-danger">
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

export default ListCategoria;
