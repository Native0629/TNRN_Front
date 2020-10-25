import React from 'react'
import RootNavigator from './RootNavigator'
// import { LoadingIndicatorContainer } from './LoadingIndicator'

class NavigatorWrapper extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <RootNavigator />
                {/* <LoadingIndicatorContainer /> */}
            </>
        )
    }
}

export default NavigatorWrapper
