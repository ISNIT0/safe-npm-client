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
    versionsData?: any
}

const Package = view(class Package extends React.Component<ReactRouterProps> {
    state = store<PackageState>({})

    async componentDidMount() {
        const { packageName } = this.props.match.params
        this.state.packageName = packageName;

        const packageData = await getJSON<any[]>(`${config.apiRoot}/status/${packageName}.json`);
        this.state.packageData = packageData;

        const versionsData = (await Promise.all(
            packageData.map(({ version }) => getJSON<any[]>(`${config.apiRoot}/status/${packageName}/${version}.json`))
        ))
            .reduce(flatten, [])
            .sort((a, b) => a.date < b.date ? 1 : -1);
        this.state.versionsData = versionsData;
    }

    render() {
        if (!this.state.versionsData) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>Package {this.state.packageName}!</h1>
                <pre>{JSON.stringify(this.state.packageData, null, '\t')}</pre>
                <pre>{JSON.stringify(this.state.versionsData, null, '\t')}</pre>
            </div>
        }
    }
})

export { Package }



function flatten(acc: any[], arr: any[]) {
    return acc.concat(arr);
}