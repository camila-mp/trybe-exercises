import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Digimon from './Digimon';

describe('Teste da aplicação toda', () => {
  it('Verificando se botão com texto search digimon existe', async () => {
    render(<App />);
    const searchBtn = screen.getByText(/search digimon/i);
    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn.type).toBe('button');
  });
  it('Verificando se input de digimon existe', () => {
    render(<App />);
    const digimonInput = screen.getByTestId('input');
    expect(digimonInput.type).toBe('text');
  })
  it('verifica comportamento da aplicação quando é feita busca por digimon', async () => {
    const fetchResponse = [{
      name: 'Agumon',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
    }]

    global.fetch = jest.fn( async () => 
      ({
        json: async () => fetchResponse,
      }))
    render(<App />, <Digimon />);
    const searchBtn = screen.getByTestId('buttonSearch');
    const digimonInput = screen.getByTestId('input');
    fireEvent.change(digimonInput, { target: { value: 'agumon' } });
    fireEvent.click(searchBtn);
    await screen.findByText('Agumon');
    expect(screen.getByTestId('digimonName')).toBeInTheDocument();
    expect(screen.getByAltText('Agumon')).toBeInTheDocument();
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/agumon');
    expect(global.fetch).toBeCalledTimes(1);
  })
});