import React from 'react';
import {connect} from 'react-redux';
import {BlockSpinner} from 'components';

export const withLoading = reducerName => {
    const Wrapper = ({WrappedComponent, isLoading, reducerName, ...props}) => (
        <>
            {isLoading && <BlockSpinner />}
            <WrappedComponent {...props} />
        </>
    );

    const mapStateToProps = ({[reducerName]: {isLoading}}) => ({isLoading});
    const WrapperWithStore = connect(mapStateToProps)(Wrapper);

    return WrappedComponent => props => (
        <WrapperWithStore WrappedComponent={WrappedComponent} reducerName={reducerName} {...props} />
    );
};
