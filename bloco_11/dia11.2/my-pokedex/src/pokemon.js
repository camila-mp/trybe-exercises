import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon
    console.log(this.props)
    return (
      <section className="pokemon">
        <p>{ `Nome: ${name}` }</p>
        <p>{ `Tipo: ${type}` }</p>
        <p>{ `Peso médio: ${averageWeight.value}${averageWeight.measurementUnit}`  }</p>
        <img src={image} alt={id}></img>
      </section>
    )
  }
}
  
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
  