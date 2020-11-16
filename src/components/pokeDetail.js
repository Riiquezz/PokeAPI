/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { boolHome, cleanInput, showDetails } from '../actions/index';

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    const { setBool, clearInput } = props;
    setBool(true);
    clearInput();
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const { details } = this.props;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    axios.get(pokemonUrl)
      .then(data => {
        details(data, 1)
      });

    axios.get(pokemonSpecies)
      .then(data => {
        details(data, 2)
      });
  }

  bgColor(type) {
    switch (type) {
      case 'fire': {
        return '#FFA756';
      }
      case 'fairy': {
        return '#EBA8C3';
      }
      case 'grass': {
        return '#8BBE8A';
      }
      case 'water': {
        return '#58ABF6';
      }
      case 'bug': {
        return '#8BD674';
      }
      case 'normal': {
        return '#B5B9C4';
      }
      case 'poison': {
        return '#9F6E97';
      }
      case 'electric': {
        return '#F2CB55';
      }
      case 'ground': {
        return '#F78551';
      }
      case 'fighting': {
        return '#EB4971';
      }
      default: return '#696969';
    }
  }

  render() {
    const { listDetails } = this.props
    const long = listDetails.entriesText.length;
    const pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${listDetails.index}.png`;
    return (
      <div id="pokemon-details">
        <div id="top-name" style={{ backgroundColor: this.bgColor(listDetails.color) }}>
          <h2 data-testid="index">
            #
            {listDetails.index}
          </h2>
        </div>
        <div id="details-content">
          <div id="left-side">
            <img src={pokemonImg} alt="" data-testid="img"/>
            <h2 style={{ color: this.bgColor(listDetails.color) }} data-testid="name">
              {listDetails.name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h2>
            <p>
              "
              {listDetails.entriesText[Math.floor(Math.random() * long)]}
              "
            </p>
          </div>
          <div id="right-side">
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Informações</h4>
              <div className="groups">
                <h4>Altura: </h4>
                <div className="map-groups">
                  <p data-testid="height">
                    {listDetails.height}
                    {' '}
                    m
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Peso: </h4>
                <div className="map-groups">
                  <p data-testid="weight">
                    {listDetails.weight}
                    {' '}
                    kg
                  </p>
                </div>
              </div>
              <div className="groups">
                <h4>Tipo: </h4>
                <div className="map-groups">
                  {listDetails.type.map(type =>
                    <p data-testid="type" key={type.type.name}>{type.type.name}</p>
                  )}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="ability">Habilidades: </h4>
                <div className="map-groups">
                  {listDetails.abilities.map(group => 
                    <p key={group.ability.name}>{group.ability.name}</p>)}
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Treinamento</h4>
              <div className="groups">
                <h4>Taxa de captura: </h4>
                <div className="map-groups">
                  <p data-testid="captureRate">{listDetails.captureRate}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Amigável: </h4>
                <div className="map-groups">
                  <p data-testid="basehapiness">{listDetails.baseHappiness}</p>
                </div>
              </div>
              <div className="groups">
                <h4>Experiência base: </h4>
                <div className="map-groups">
                  <p data-testid="basexperience">{listDetails.baseExperience}</p>
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="growthrate">Crescimento: </h4>
                <div className="map-groups">
                  <p>{listDetails.growthRate}</p>
                </div>
              </div>
            </div>
            <div className="pokedex-section">
              <h4 style={{ color: this.bgColor(listDetails.color) }}>Reprodução</h4>
              <div className="groups">
                <h4 data-testid="egggroup">Grupo de ovo: </h4>
                <div className="map-groups">
                  {listDetails.eggGroups.map(group => <p key={group.name}>{group.name}</p>)}
                </div>
              </div>
              <div className="groups">
                <h4 data-testid="genderate">Gênero: </h4>
                <div className="map-groups">
                  <p >{listDetails.genderRate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokeDetails.propTypes = {
  setBool: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  listDetails: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  setBool: bool => dispatch(boolHome(bool)),
  clearInput: () => dispatch(cleanInput()),
  details: (detail, update) => dispatch(showDetails(detail, update))
});

const mapStateToProps = state => ({
  listDetails: state.details,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokeDetails));
