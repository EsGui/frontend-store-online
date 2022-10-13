import React from 'react';

function RegisterUser() {
  return (
    <>
      <input type="text" placeholder="Digite nome" />
          <input type="text" placeholder="Digite seu sobrenome" />
          <input type="text" placeholder="url da imagem" />
          <input type="email" placeholder="Digite seu email" />
          <input type="password" placeholder="Digite uma senha" />
          <input type="text" placeholder="Digite seu endereço" />
          <input type="text" placeholder="Digite sua data de nascimento" />
          <input type="text" placeholder="Digite seu número de telefone" />
          <input type="text" placeholder="Digite seu cep" />
          <input type="text" placeholder="Digite seu estado" />
          <input type="text" placeholder="Digite sua cidade" />
          <p>Genero</p>
          <div>
            <input type="radio" name="genero" value="Masculino" />Masculino
            <input type="radio" name="genero" value="Feminino" />Feminino
          </div>
          <button type="button">Cadastrar</button>
    </>
  )
}

export default RegisterUser