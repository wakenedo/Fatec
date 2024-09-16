import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListEditoras = () => {
  const [editoras, setEditoras] = useState([]);
  //Listar Editoras
  useEffect(() => {
    const fetchAllEditoras = async () => {
      try {
        const res = await axios.get("http://localhost:8081/editora");
        setEditoras(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllEditoras();
  }, []);
  console.log(editoras);
  //Deletar Editoras
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/editora/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">
        Listando Editoras
      </h2>
      <div className="row">
        <div className="col-md-12">
          <p>
            <Link to="/addEditora" className="btn btn-success">
              Adicionar nova Editora
            </Link>
          </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Data Cadastro</th>
                <th>Data Alteração</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {editoras.map((editora) => {
                return (
                  <tr>
                    <td>{editora.id}</td>
                    <td>{editora.descricao} </td>
                    <td>{editora.createdAt} </td>
                    <td>{editora.updatedAt} </td>
                    <td>
                      <Link
                        to={`/readEditora/${editora.id}`}
                        className="btn btn-success mx-2"
                      >
                        Ler
                      </Link>
                      <Link
                        to={`/updateEditora/${editora.id}`}
                        className="btn btn-info mx-2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(editora.id)}
                        className="btn btn-danger"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListEditoras;
