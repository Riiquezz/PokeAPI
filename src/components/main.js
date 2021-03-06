import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { boolHome, cleanInput } from '../actions/index';

class Main extends React.Component {
  constructor(props) {
    super(props);
    const { setBoolHome, clearInput } = props;
    setBoolHome(true);
    clearInput();
  }

  render() {
    return (
      <div id="generations">
        <Link to="/generation/1">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" data-testid="image1" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="" data-testid="image2" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="" data-testid="image3" />
          </div>
          <p>Geração 1</p>
        </Link>
        <Link to="/generation/2">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt="" />
          </div>
          <p>Geração 2</p>
        </Link>
        <Link to="/generation/3">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" alt="" />
          </div>
          <p>Geração 3</p>
        </Link>
        <Link to="/generation/4">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png" alt="" />
          </div>
          <p>Geração 4</p>
        </Link>
        <Link to="/generation/5">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png" alt="" />
          </div>
          <p>Geração 5</p>
        </Link>
        <Link to="/generation/6">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png" alt="" />
          </div>
          <p>Geração 6</p>
        </Link>
        <Link to="/generation/7">
          <div id="initialImg">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png" alt="" />
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png" alt="" />
          </div>
          <p>Geração 7</p>
        </Link>
      </div>
    );
  }
}

Main.propTypes = {
  setBoolHome: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setBoolHome: bool => dispatch(boolHome(bool)),
  clearInput: () => dispatch(cleanInput()),
});

export default connect(null, mapDispatchToProps)(Main);
