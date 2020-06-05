import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// Função que pode ser reutilizada para criar uma tarefa
const criaTarefa = () => {
  // Renderiza o componente App. A variável utils guarda as funções de busca (getBy, queryBy, etc)
  const utils = render( <App /> )

  // Encontra o input pelo texto do placeholder
  const input = utils.getByPlaceholderText('Nova tarefa')

  // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
  fireEvent.change(input, {
    target: {
      value: 'tarefa teste'
    }
  })

  // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
  const button = utils.getByText(/Adicionar/)

  // Clica no botão
  fireEvent.click(button)

  // Retorna o objeto com as funções de busca. Os testes que vão usar 
  // essa função precisam de acesso a elas para fazer as verificações
  return utils
}

// Testes sobre a renderização inicial
describe('Renderizacao inicial', () => {

  // Verifica se o input existe na renderização inicial
  test('Input existe na tela', () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText
    } = render( <App /> )

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText('Nova tarefa')

    // Verifica se o input está no document
    expect(input).toBeInTheDocument()
  })

  // Verifica se o botão existe na renderização inicial
  test('Botao existe na tela', () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByText"
    const {
      getByText
    } = render( <App /> )

    // Verifica se existe algo com o texto "Adicionar" no document
    expect(getByText(/Adicionar/)).toBeInTheDocument()
  })
})

describe('Criar uma tarefa', () => {
  test('quando o usuario digita, o texto tem que aparecer', () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText
    } = render( <App /> )

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText('Nova tarefa')

    // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
    fireEvent.change(input, {
      target: {
        value: 'tarefa teste'
      }
    })

    // Verifica se o input possui o "value" de "tarefa teste"
    expect(input).toHaveValue('tarefa teste')
  })

  test('quando o usuario digita e clica em criar tarefa', () => {
    // Renderiza o App, e desestrutura o retorno pegando as funções "getByPlaceholderText" e "getByText"
    const {
      getByPlaceholderText,
      getByText
    } = render( <App /> )

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText('Nova tarefa')

    // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
    fireEvent.change(input, {
      target: {
        value: 'tarefa teste'
      }
    })

    // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
    const button = getByText(/Adicionar/)

    // Clica no botão
    fireEvent.click(button)

    // Procura por "tarefa teste" e verifica se algum elemento foi encontrado
    expect(getByText(/tarefa teste/)).toBeInTheDocument()
  })

  test('quando o usuario digitar duas tarefas, eu espero que tenham dois itens de tarefa', () => {
    // Renderiza o App, e desestrutura o retorno pegando as funções "getByPlaceholderText", "getByText" e "getAllByTestId"
    const {
      getByPlaceholderText,
      getByText,
      getAllByTestId
    } = render(<App />)

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText('Nova tarefa')

    // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
    const button = getByText(/Adicionar/)

    // Adiciona primeira tarefa
    fireEvent.change(input, {
      target: {
        value: 'tarefa teste'
      }
    })
    fireEvent.click(button)


    // Adiciona segunda tarefa
    fireEvent.change(input, {
      target: {
        value: 'tarefa teste 2'
      }
    })
    fireEvent.click(button)

    // Verifica se primeira tarefa foi adicionada
    expect(getByText('tarefa teste')).toBeInTheDocument()

    // Verifica se segunda tarefa foi adicionada
    expect(getByText('tarefa teste 2')).toBeInTheDocument()

    // Verifica se existem 2 tarefas na tela
    expect(getAllByTestId('item-tarefa')).toHaveLength(2)
  })

  test('quando o usuario digita e clica em criar tarefa, o input deve ser limpo', () => {
    // Renderiza o App, e desestrutura o retorno pegando as funções "getByPlaceholderText" e "getByText"
    const {
      getByPlaceholderText,
      getByText
    } = render(<App />)

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText('Nova tarefa')

    // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
    fireEvent.change(input, {
      target: {
        value: 'tarefa teste'
      }
    })

    // Encontra o botão pelo texto "Adicionar". Aqui, usa regex para isso
    const button = getByText(/Adicionar/)

    // Clica no botão
    fireEvent.click(button)

    // Verifica se o input possui o "value" vazio
    expect(input).toHaveValue('')
  })
})

describe('Marcar tarefa como completa', () => {
  test('Quando clicar na tarefa, ela deve ser riscada', () => {
    // Renderiza o App, cria uma tarefa, e desestrutura o retorno pegando as funções "getByTestId"
    const {getByTestId} = criaTarefa()

    // Encontra um item de tarefa
    const tarefa = getByTestId('item-tarefa')

    // Clica no item
    fireEvent.click(tarefa)

    // Verifica se está riscado
    expect(tarefa).toHaveStyle('text-decoration: line-through')
  })

  test('Quando clicar na tarefa, ela deve ser riscada', () => {
    // Renderiza o App, cria uma tarefa, e desestrutura o retorno pegando as funções "getByTestId"
    const {getByTestId} = criaTarefa()

    // Encontra um item de tarefa
    const tarefa = getByTestId('item-tarefa')

    // Clica no item 2 vezes
    fireEvent.click(tarefa)
    fireEvent.click(tarefa)

    // Verifica se não está riscado
    expect(tarefa).toHaveStyle('text-decoration: none')
  })
})
