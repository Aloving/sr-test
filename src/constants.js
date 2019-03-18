export const TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
};

export const CONTAINING_OPERATION = 'Containing';
export const EXACTLY_MATCHING_OPERATION = 'Exactly matching';
export const BEGINS_WITH_OPERATION = 'Begins whith';
export const ENDS_WHITH_OPERATION = 'Ends whith';
export const EQUAL_OPERATION = 'Equal';
export const GREATER_THEN_OPERATION = 'Greater than';
export const LESS_THAN_OPERATION = 'Less than';

export const OPERATIONS = {
  [TYPE.TEXT]: [
    CONTAINING_OPERATION,
    EXACTLY_MATCHING_OPERATION,
    BEGINS_WITH_OPERATION,
    ENDS_WHITH_OPERATION,
  ],
  [TYPE.NUMBER]: [EQUAL_OPERATION, GREATER_THEN_OPERATION, LESS_THAN_OPERATION],
};

export const TRANSLATIONS = {
  types: {
    [TYPE.TEXT]: 'Text field',
    [TYPE.NUMBER]: 'Number field',
  },
};
