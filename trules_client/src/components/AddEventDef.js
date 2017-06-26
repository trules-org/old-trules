import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

const AddEventDef = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { name: evt.target.value }
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };
  return (
    <input
      type="text"
      placeholder="New event definition"
      onKeyUp={handleKeyUp}
    />
  );
};

const addEventDefMutation = gql`
  mutation addEventDef($name: String!) {
    addEventDef(name: $name) {
      id
      name
    }
  }
`;
const AddEventDefWithMutation = graphql(
  addEventDefMutation
)(AddEventDef);
export default AddEventDefWithMutation;

