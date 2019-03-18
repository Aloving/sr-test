import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import addIcon from './icons/add.svg';

const Controls = ({ addFilter, getData, clearFilters }) => (
  <>
    <div className="condition">
      <img src={addIcon} alt="add" className="condition__add" />
      <Button color="link" onClick={addFilter}>
        Add condition
      </Button>
    </div>
    <div className="btns-group">
      <div className="wrapp-btn">
        <Button color="primary" onClick={getData}>
          Apply
        </Button>
      </div>
      <div className="wrapp-btn">
        <Button outline color="secondary" onClick={clearFilters}>
          Clear Filter
        </Button>
      </div>
    </div>
  </>
);

Controls.propTypes = {
  addFilter: PropTypes.func,
  getData: PropTypes.func,
  clearFilters: PropTypes.func,
};

Controls.defaultProps = {
  addFilter: () => {},
  getData: () => {},
  clearFilters: () => {},
};

export default Controls;
