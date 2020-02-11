const stateTemplate = componentName => `// Initial state
export const initialState = {
   isLoading: true
}

// Actions
export const ON_SET_IS_LOADING = '${componentName}/ON_SET_IS_LOADING'
// Action creators

export const onSetIsLoading = value => ({
   type: ON_SET_IS_LOADING,
   payload: value
})
// Reducer
export default (state = initialState, action = {}) => {
   switch (action.type) {
      case ON_SET_IS_LOADING:
         return{...state, isLoading: action.payload}

      default:
         return state
   }
}

// Selectors
export const selectIsLoading = ({page}) => page`

const containerTemplate = (fileName, componentName) => `import { connect } from 'react-redux'
import { ${componentName} } from './${fileName}-view'
import { selectIsLoading } from './${fileName}-state'

const mapStateToProps = state => ({
   state: selectIsLoading(state)
})

const mapActionsToProps = {}

export default connect(
   mapStateToProps,
   mapActionsToProps,
)(${componentName})`

const viewTemplate = componentName => `import React from 'react';

export const ${componentName} = ({isLoading}) => {
  console.log(isLoading)
  return (
    <div>
       Page ${componentName}
    </div>
  );
}`

module.exports = {
   viewTemplate: viewTemplate,
   containerTemplate: containerTemplate,
   stateTemplate: stateTemplate,
}