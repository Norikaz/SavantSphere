import React from 'react';
import './tilegrid.css';
import PropTypes from 'prop-types';
import { tiles } from '../../data/Data';

function Tile(props) {
  return (
    <a href="#link-placeholder" className="tile">
      <img src={props.image} alt={props.alt} />
      <p className="tile-text">{props.title}</p>
    </a>
  );
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function TileGrid() {
  return (
    <div className="tile-grid">
      {tiles.map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </div>
  );
}

export default TileGrid;