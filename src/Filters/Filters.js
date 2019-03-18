import React, { Component } from 'react';
import Filter from './Filter';
import Controls from '../Controls';
// import { EQUAL_OPERATION, CONTAINING_OPERATION, TYPE } from '../constants';

import useFilters from './Filters.hooks';

// class Filters extends Component {
//   static DEFAULT_NUMBER_OPERATION = EQUAL_OPERATION;

//   constructor(props) {
//     super(props);

//     this.state = {
//       filters: [
//         {
//           type: TYPE.TEXT,
//           operation: Filters.DEFAULT_TEXT_OPERATION,
//           value: '',
//           id: +Date.now(),
//         },
//       ],
//     };
//   }

//   setType = (type, id) => {
//     const { filters } = this.state;

//     const newFilters = filters.map((item) => {
//       if (item.id === +id) {
//         return {
//           ...item,
//           type,
//           value: '',
//           operation:
//             type === TYPE.TEXT
//               ? Filters.DEFAULT_TEXT_OPERATION
//               : Filters.DEFAULT_NUMBER_OPERATION,
//         };
//       }

//       return item;
//     });

//     this.setState({ filters: newFilters });
//   };

//   setValue = (value, id) => {
//     const { filters } = this.state;
//     const newFilters = filters.map((item) => {
//       if (item.id === +id) {
//         return {
//           ...item,
//           value,
//         };
//       }

//       return item;
//     });

//     this.setState({ filters: newFilters });
//   };

//   setOperation = (operation, id) => {
//     const { filters } = this.state;
//     const newFilters = filters.map((item) => {
//       if (item.id === +id) {
//         return {
//           ...item,
//           operation,
//         };
//       }

//       return item;
//     });

//     this.setState({ filters: newFilters });
//   };

//   getNewFilter = () => {
//     const newFilter = {
//       type: TYPE.TEXT,
//       operation: Filters.DEFAULT_TEXT_OPERATION,
//       value: '',
//       id: +Date.now(),
//     };
//     return newFilter;
//   };

//   addFilter = () => {
//     const { filters } = this.state;
//     if (filters.length === 10) return;
//     const newFilter = {
//       type: TYPE.TEXT,
//       operation: Filters.DEFAULT_TEXT_OPERATION,
//       value: '',
//       id: +Date.now(),
//     };

//     const newFilters = [...filters, newFilter];

//     this.setState({ filters: newFilters });
//   };

//   clearFilters = () => {
//     this.setState({
//       filters: [this.getNewFilter()],
//     });
//   };

//   getData = () => {
//     const { filters } = this.state;

//     const newFilters = filters.reduce(
//       (res, cur) => {
//         const { type, id, ...restData } = cur;

//         if (type === TYPE.TEXT) {
//           res.text.push(restData);
//         }

//         if (type === TYPE.NUMBER) {
//           res.number.push(restData);
//         }

//         return res;
//       },
//       { number: [], text: [] }
//     );

//     console.log(newFilters);
//   };

//   deleteFilter = (id) => {
//     const { filters } = this.state;
//     const newFilterts = filters.filter((item) => item.id !== +id);

//     this.setState({ filters: newFilterts });
//   };

//   render() {
//     const { filters } = this.state;
//     return (
//       <>
//         <div className="list">
//           {filters.map(({ id, type, operation, value: newValue }) => (
//             <Filter
//               id={id}
//               key={id}
//               type={type}
//               operation={operation}
//               value={newValue}
//               count={filters.length}
//               onTypeChange={({ target: { value } }) => {
//                 this.setType(value, id);
//               }}
//               onValueChange={({ target: { value } }) => {
//                 this.setValue(value, id);
//               }}
//               onOperationChange={({ target: { value } }) => {
//                 this.setOperation(value, id);
//               }}
//               onDeleteFilter={() => this.deleteFilter(id)}
//             />
//           ))}
//         </div>
//         <Controls
//           addFilter={this.addFilter}
//           getData={this.getData}
//           clearFilters={this.clearFilters}
//         />
//       </>
//     );
//   }
// }

const Filters = () => {
  const { filters, addNewFilter } = useFilters();

  return (
    <>
      <div className="list">
        {filters.map(({ id, type, operation, value: newValue }) => (
          <Filter
            id={id}
            key={id}
            type={type}
            operation={operation}
            value={newValue}
            count={filters.length}
            onTypeChange={({ target: { value } }) => {
              this.setType(value, id);
            }}
            onValueChange={({ target: { value } }) => {
              this.setValue(value, id);
            }}
            onOperationChange={({ target: { value } }) => {
              this.setOperation(value, id);
            }}
            onDeleteFilter={() => this.deleteFilter(id)}
          />
        ))}
      </div>
      <Controls
        addFilter={addNewFilter}
      // getData={this.getData}
      // clearFilters={this.clearFilters}
      />
    </>
  );
};

export default Filters;
