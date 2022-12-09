import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Select, Checkbox } from 'cauldron-react';
import PaletteContainer from '../../containers/PaletteContainer';
import TextInput from '../TextInput';
import { fontSize, fontWeight, groupBy } from './options';
import './index.css';

export default class ResultsForm extends Component {
  render() {
    return (
      <Subscribe to={[PaletteContainer]}>
        {({ updateResultsSettings, state: { results, isWide } }) => (
          <div className={`results ${!isWide ? 'narrow' : ''}`}>
            <h2>Resultados</h2>
            <form className="row" onSubmit={e => e.preventDefault()}>
              <TextInput
                id="results-text-sample"
                labelText="Texto de exemplo"
                inputRef={el => (this.textSample = el)}
                value={results.sample}
                onChange={() => {
                  updateResultsSettings({
                    sample: this.textSample.value
                  });
                }}
              />
              <Select
                label="Tamanho de fonte"
                listId="results-font-size-list"
                selectedId="selected-font-size-option"
                value={15}
                className="font-size-select"
                options={fontSize}
                onSelect={({ value }) => {
                  updateResultsSettings({ fontSize: value });
                }}
              />
              <Select
                label="Peso da fonte"
                listId="results-font-weight-list"
                selectedId="selected-font-weight-option"
                value="normal"
                className="font-weight-select"
                options={fontWeight}
                onSelect={({ value }) => {
                  updateResultsSettings({ fontWeight: value });
                }}
              />
              <Select
                label="Agrupar por"
                listId="results-group-by-list"
                selectedId="selected-group-by-option"
                value="background"
                className="group-by-select"
                options={groupBy}
                onSelect={({ value }) => {
                  updateResultsSettings({ groupBy: value });
                }}
              />
              <Checkbox
                label="Incluir texto preto e branco"
                id="black-and-white-text"
                name="bw-txt"
                onClick={e => {
                  if (!e.target.type || e.target.type !== 'checkbox') {
                    return;
                  }

                  updateResultsSettings({
                    includeBlackAndWhite: e.target.checked
                  });
                }}
              />
            </form>
          </div>
        )}
      </Subscribe>
    );
  }
}
