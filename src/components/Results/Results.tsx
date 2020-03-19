import React from 'react';

import { Entry } from '../../types';

import { Table } from 'semantic-ui-react';

interface Props {
  results: Entry[];
}

const Results: React.FC<Props> = ({ results }) => {
  return !results.length ? null : (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nadsat</Table.HeaderCell>
          <Table.HeaderCell>English</Table.HeaderCell>
          <Table.HeaderCell>Origin</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {results.map(({ english, nadsat, origin }: Entry) => (
          <Table.Row key={english + nadsat}>
            <Table.Cell>{english}</Table.Cell>
            <Table.Cell>{nadsat}</Table.Cell>
            <Table.Cell>{origin}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Results;
