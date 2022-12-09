import React from 'react';
import { Provider } from 'unstated';
import ColorForm from '../ColorForm';
import Palette from '../Palette';
import ResultsForm from '../ResultsForm';
import ColorCombos from '../ColorCombos';
import { Workspace } from 'cauldron-react';

export default function App() {
  return (
    <Provider>
      <Workspace id="main-content" tabIndex={-1}>
        <h1>Acessibilidade em Cores</h1>
        <p>
          A seleção de combinações de cores de alto contraste é fundamental para
          fornecer conteúdo acessível. Os padrões de acessibilidade do conteúdo
          da Web do W3C ou WCAG, sugere que o texto em primeiro plano atenda a
          uma taxa de contraste mínima com relação ao segudno plano. Aderir a
          essas diretrizes permite que todos os usuários, incluindo pessoas com
          deficiência visual, aproveitem seu conteúdo.
        </p>
        <h2>Como usar</h2>
        <p>
          Importe os valores de cor hexadecimal ou RGB que compõem sua paleta
          atual para entender se essas cumprem os requisitos do WCAG. Indique
          quais cores são usadas para texto ou plano de fundo, bem como o
          tamanho e o peso da fonte. Os resultados vão indicar a acessibilidade
          de suas opções de cores. Combinações que excedem uma taxa de contraste
          de 4,5:1 ou superior serão aprovadas. Se em algum caso a taxa de
          contraste não atender às diretrizes, será sugerida uma cor de
          substituição de contraste semelhante e com maior contraste.
        </p>
        <ColorForm />
        <Palette />
        <ResultsForm />
        <ColorCombos />
      </Workspace>
    </Provider>
  );
}
