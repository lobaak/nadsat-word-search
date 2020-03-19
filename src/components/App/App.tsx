import React, { useReducer, useEffect } from 'react';
import { Input, InputOnChangeData, Form } from 'semantic-ui-react';
import axios from 'axios';

import { matchesWord } from '../../utils';
import { ActionTypes, Entry } from '../../types';
import { appReducer, initAppState } from '../../state/appReducer';
import Results from '../Results/Results';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initAppState);
  const { loading, entries, value, results } = state;

  useEffect(() => {
    const fetchEntries = async () => {
      dispatch({ type: ActionTypes.toggleLoading });

      axios.get('./data.json').then(res => {
        dispatch({ type: ActionTypes.setEntries, payload: res.data.entries });
        dispatch({ type: ActionTypes.setResults, payload: res.data.entries });
        dispatch({ type: ActionTypes.toggleLoading });
      });
    };

    fetchEntries();
  }, []);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ): Promise<void> => {
    dispatch({ type: ActionTypes.toggleLoading });

    const filteredResults = entries.filter(({ english, nadsat }: Entry) => {
      return matchesWord(english, value) || matchesWord(nadsat, value);
    });

    dispatch({ type: ActionTypes.setResults, payload: filteredResults });
    dispatch({ type: ActionTypes.setValue, payload: value });
    dispatch({ type: ActionTypes.toggleLoading });
  };

  return (
    <>
      <Form>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={handleChange}
          loading={loading}
          value={value}
        />
      </Form>
      <Results results={results} />
    </>
  );
};

export default App;
