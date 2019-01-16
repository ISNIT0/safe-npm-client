import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { view, store } from 'react-easy-state';
import { config } from '../config';
import { getJSON } from '../http';
import Header from './Header';
import VersionCard from './VersionCard';
import './Package.css';
import PopUp from './popUp'

interface ReactRouterProps {
    match: {
        params: { [key: string]: string }
    }
}

interface PackageState {
    packageName?: string
    packageData?: any
    versionsData?: any
    versionsCardData?: any
    pageURL?:any
    packageNotFound?:boolean
}

const state = store<PackageState>({})

const Package = view(class Package extends React.Component<ReactRouterProps> {

    async componentDidMount() {
        (window as any).state = state
        state.packageNotFound = false
        this.updatePackage()    
    }

    async updatePackage(){
        console.log('starting change')
        const { packageName } = this.props.match.params

        state.packageName = packageName;

        try{
            const packageData = await getJSON<any[]>(`${config.apiRoot}/status/${packageName}.json`)

            const versionsData = (await Promise.all(
                packageData.map(({ version }) => getJSON<any[]>(`${config.apiRoot}/status/${packageName}/${version}.json`))
            ))
                .reduce(flatten, [])
                .sort((a, b) => a.date < b.date ? 1 : -1);
            state.versionsData = versionsData;

            state.versionsCardData = await Promise.all(
                packageData.map((element) => {
                    return getJSON<any[]>(`${config.apiRoot}/status/${packageName}/${element.version}.json`)
                        .then((result) => {
                            return {
                                ...element,
                                detail: result
                            }
                        });
                })
            );
        }
        catch{
            console.log('We failed')
            state.packageNotFound = true
            console.log(state.packageNotFound)
        }
    }

    render() {
        if(state.pageURL != window.location.href){
            state.pageURL = window.location.href;
            this.updatePackage()
        }
        if (!state.versionsData) {
            return(
                <> 
                    <h1>Loading...</h1>
                    {state.packageNotFound == true &&
                        <>
                        <Redirect to='/packageFailed/404'></Redirect>
                        </>
                    }
                </>
            )
        } else {
            return <div>
                {state.packageNotFound == true &&
                    <Redirect to='/packageFailed/404'></Redirect>
                }
                {state.versionsCardData != undefined &&
                    <Header title={state.packageName} package={true} version={state.versionsCardData[0].version} grade={state.versionsCardData[0].grade}></Header>
                }
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',height:'82vh',overflowY:'scroll'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '90%',paddingTop:'10px'}}>
                        {state.versionsCardData != undefined &&
                            state.versionsCardData.map((entity: any, index: number) =>
                                <div className={(index % 2 == 0 ? 'pull-left' : 'pull-right')} style={{width:'40vw'}}>
                                    <div className={(index % 2 == 0 ? 'pull-right' : 'pull-left')}>
                                        <VersionCard version={entity.version} grade={entity.grade} detail={entity.detail} alignment={(index % 2 == 0 ? 'left' : 'right')}></VersionCard>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <Link to="/about/" style={{position:'fixed',right:'50vw',bottom:'10px',textAlign:'center'}}>About</Link>
                </div>
            </div>
        }
    }
})

export { Package }

function flatten(acc: any[], arr: any[]) {
    return acc.concat(arr);
}