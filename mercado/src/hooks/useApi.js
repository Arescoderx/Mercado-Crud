import { useState, useEffect, useContext } from "react";

const url = import.meta.env.VITE_API_URL || "http://localhost:5000";

import { AuthContext } from "../contexts/UserContext";

export function useVericaLogin() {
  const [usuarios, setUsuarios] = useState([]);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);

        if (!req.ok) {
          throw new Error("Erro na resposta da API");
        }

        const contentType = req.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Resposta não é JSON");
        }

        const users = await req.json();
        setUsuarios(users);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error.message);
      }
    }

    fetchData();
  }, []);

  const verificaLogin = (data) => {
    const userToFind = usuarios.find((user) => user.email === data.email);

    if (userToFind && userToFind.senha === data.senha) {
      login(userToFind);
      console.log("Usuário logado:", userToFind.nome);
      return "Login efetuado com sucesso";
    } else {
      return "Usuário ou senha inválidos";
    }
  };

  return {
    verificaLogin,
  };
}
