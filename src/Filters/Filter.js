import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { TRANSLATIONS, OPERATIONS, TYPE } from '../constants';
import deleteIcon from '../icons/delete.svg';

const Filter = ({
  operation,
  value,
  type,
  onTypeChange,
  id,
  count,
  onValueChange,
  onOperationChange,
  onDeleteFilter,
}) => {
  return (
    <div className="inputs-group">
      <div className="wrapp-input">
        <Input
          type="select"
          name="select"
          onChange={onTypeChange}
          id={`type-${id}`}
        >
          <option value={TYPE.TEXT}>{TRANSLATIONS.types[TYPE.TEXT]}</option>
          <option value={TYPE.NUMBER}>{TRANSLATIONS.types[TYPE.NUMBER]}</option>
        </Input>
      </div>
      <div className="wrapp-input">
        <Input
          type="select"
          name="select"
          id={`operation-${id}`}
          onChange={onOperationChange}
          defaultValue={operation}
        >
          {OPERATIONS[type].map((op, i) => (
            <option key={`${op}${i}`}>{op}</option>
          ))}
        </Input>
      </div>
      {count > 1 ? (
        <div className="wrapp-input wrapp-input--last">
          <Input
            type={type === TYPE.TEXT ? 'text' : 'number'}
            value={value}
            onChange={onValueChange}
            id={`value-${id}`}
            className="form-control--last"
          />
          <img
            src={deleteIcon}
            className="delete-img hidden"
            alt="delete"
            id={`img-${id}`}
            onClick={onDeleteFilter}
          />
        </div>
      ) : (
        <div className="wrapp-input wrapp-input--last">
          <Input
            type={type === TYPE.TEXT ? 'text' : 'number'}
            value={value}
            onChange={onValueChange}
            id={`value-${id}`}
            className="form-control--last"
          />
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  operation: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onTypeChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onOperationChange: PropTypes.func,
  onDeleteFilter: PropTypes.func,
};

Filter.defaultProps = {
  value: '',
  onTypeChange: () => {},
  onValueChange: () => {},
  onOperationChange: () => {},
  onDeleteFilter: () => {},
};

export default Filter;
