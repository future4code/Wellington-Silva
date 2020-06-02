import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe('Linha de código', () => {
   
   /* Adicionando um post a lista */
    test('...', ()=>{
      const {getByText, getByPlaceholderText} = render (<App></App>)
      const input = getByPlaceholderText('Novo post')

      fireEvent.change(input, {
          target: {
              value: 'post teste'
          }
      })

      const button = getByText(/Adicionar/)
      fireEvent.click(button)
      expect(input).toHaveValue('post teste')
   })

   /*curtir um post da lista */
   test('...', ()=>{
       const {getByTestId} = render(<App/>)
       const button = getByTestId(/toggleLike/)

       fireEvent.click(button)
       expect(button).toHaveTextContent(toggleLike)
   })
})
