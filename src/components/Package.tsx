import React from 'react'
import { view, store } from 'react-easy-state';
import { config } from '../config';
import { getJSON } from '../http';

interface ReactRouterProps {
    match: {
        params: { [key: string]: string }
    }
}

interface PackageState {
    packageName?: string
    packageData?: any
}

const Package = view(class Package extends React.Component<ReactRouterProps> {
    state = store<PackageState>({})

    async componentDidMount() {
        const { packageName } = this.props.match.params
        this.state.packageName = packageName;

        const packageData = await getJSON(`${config.apiRoot}/status/${packageName}.json`);
        this.state.packageData = packageData;
    }

    render() {
        if (!this.state.packageData) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>Package {this.state.packageName}!</h1>
                <pre>{JSON.stringify(this.state.packageData, null, '\t')}</pre>
            </div>
        }
    }
})

export { Package }