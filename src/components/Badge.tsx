import React from 'react';
import { view, store } from 'react-easy-state';

interface BadgeProps {
    grade:any,
    height?:any,
    width?:any,
}

interface BadgeState {
    height?:any,
    width?:any,
}

const state = store<BadgeState>({})

class Badge extends React.Component<BadgeProps>{
    componentDidMount() {
        (window as any).state = state
        
    }
    render(){
        if(this.props.height != undefined){
            state.height = this.props.height     
        }
        if(this.props.height === undefined){
            state.height = '18'
        } 
        if(this.props.width != undefined){
            state.width = this.props.width     
        }
        if(this.props.width === undefined){
            state.width = '15'
        }
        if(this.props.grade == 'A'){
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                        <path d="M14.648 3.46528C14.648 3.46528 13.1538 3.36377 12.3728 2.61156C11.556 1.82517 11.4508 0.385214 11.4508 0.385214C11.4508 0.385214 9.42057 0 7.35458 0C5.32463 0 3.25832 0.385214 3.25832 0.385214C3.25832 0.385214 3.12055 1.83332 2.3454 2.57992C1.52332 3.37226 0.0611956 3.46528 0.0611956 3.46528C0.0611956 3.46528 -0.0956274 6.28612 0.128306 8.73642C0.34862 11.1456 0.913595 13.5292 3.00912 15.3357C4.72209 16.8121 7.28658 17.9903 7.28658 17.9903C7.28658 17.9903 9.29965 17.0659 10.758 16.0558C12.3604 14.9459 13.8679 13.4275 14.3292 10.5381C14.8171 7.48318 14.648 3.46528 14.648 3.46528ZM10.1706 14.8403C9.20136 15.5116 7.93685 16.1372 7.47549 16.358L8.78499 16.6818L12.7637 13.6019L14.3292 5.69241L10.4388 1.17443L4.09923 1.46205L0.935451 4.15846L1.38476 8.93459C1.3797 8.88313 1.37462 8.83175 1.36987 8.78029C1.18439 6.75211 1.31422 4.41599 1.31422 4.41599C1.31422 4.41599 2.52482 4.33874 3.2054 3.68329C3.84716 3.06465 3.96137 1.86627 3.96137 1.86627C3.96137 1.86627 5.67214 1.54752 7.35271 1.54752C7.39393 1.54752 7.43516 1.54786 7.47638 1.54819V8.93536L13.2881 8.9455C13.2477 9.39715 13.1953 9.84598 13.1273 10.2721C12.7454 12.6642 11.4972 13.9213 10.1706 14.8403Z" fill="black"/>
                    </mask>
                    <g mask="url(#mask0)">
                        <rect x="-1.00781" y="-0.93457" width="8.34088" height="19.6298" fill="#E0AE14"/>
                        <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#F2C94C"/>
                    </g>
                    <path d="M9.08471 11.0078H5.56176L4.94653 13H2.19994L6.11108 2.33594H8.52807L12.4685 13H9.70727L9.08471 11.0078ZM6.17699 9.02295H8.46947L7.31957 5.32422L6.17699 9.02295Z" fill="white"/>
                </svg>
            )
        }
        else if(this.props.grade == 'B'){
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                <path d="M14.648 3.46528C14.648 3.46528 13.1538 3.36377 12.3728 2.61156C11.556 1.82517 11.4508 0.385214 11.4508 0.385214C11.4508 0.385214 9.42057 0 7.35457 0C5.32463 0 3.25832 0.385214 3.25832 0.385214C3.25832 0.385214 3.12055 1.83332 2.3454 2.57992C1.52332 3.37226 0.0611956 3.46528 0.0611956 3.46528C0.0611956 3.46528 -0.0956274 6.28612 0.128306 8.73642C0.34862 11.1456 0.913595 13.5292 3.00912 15.3357C4.72209 16.8121 7.28658 17.9903 7.28658 17.9903C7.28658 17.9903 9.29965 17.0659 10.758 16.0558C12.3604 14.9459 13.8679 13.4275 14.3292 10.5381C14.8171 7.48318 14.648 3.46528 14.648 3.46528ZM10.1706 14.8403C9.20136 15.5116 7.93685 16.1372 7.47549 16.3579L8.78498 16.6818L12.7637 13.6019L14.3292 5.69241L10.4388 1.17443L4.09923 1.46205L0.935451 4.15846L1.38476 8.93459C1.3797 8.88313 1.37462 8.83174 1.36987 8.78028C1.18439 6.75211 1.31422 4.41599 1.31422 4.41599C1.31422 4.41599 2.52482 4.33874 3.2054 3.68329C3.84716 3.06465 3.96137 1.86627 3.96137 1.86627C3.96137 1.86627 5.67214 1.54752 7.35271 1.54752C7.39393 1.54752 7.43516 1.54786 7.47638 1.54819V8.93536L13.2881 8.9455C13.2477 9.39715 13.1953 9.84598 13.1273 10.2721C12.7454 12.6642 11.4972 13.9213 10.1706 14.8403Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="-1.00586" y="-0.93457" width="8.34088" height="19.6298" fill="#93CFAC"/>
                <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#6FCF97"/>
                </g>
                <path d="M3.83666 13V3.75781H7.15649C8.34561 3.75781 9.2491 3.97575 9.86694 4.41162C10.489 4.84749 10.8 5.48014 10.8 6.30957C10.8 6.78776 10.69 7.19613 10.47 7.53467C10.2499 7.87321 9.92618 8.12288 9.49877 8.28369C9.98119 8.41064 10.3515 8.64762 10.6096 8.99463C10.8677 9.34163 10.9968 9.76481 10.9968 10.2642C10.9968 11.1698 10.7091 11.8511 10.1335 12.3081C9.56225 12.7609 8.71378 12.9915 7.58813 13H3.83666ZM6.06469 9.0708V11.2861H7.52465C7.92667 11.2861 8.23559 11.1951 8.45141 11.0132C8.66723 10.827 8.77514 10.5667 8.77514 10.2324C8.77514 9.46224 8.39216 9.07503 7.62621 9.0708H6.06469ZM6.06469 7.61084H7.22631C7.71296 7.60661 8.05997 7.51774 8.26733 7.34424C8.47468 7.17074 8.57836 6.91471 8.57836 6.57617C8.57836 6.18685 8.46622 5.90755 8.24194 5.73828C8.01765 5.56478 7.65583 5.47803 7.15649 5.47803H6.06469V7.61084Z" fill="white"/>
                </svg>
            )
        }
        else if(this.props.grade == 'C'){
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                <path d="M14.648 3.46528C14.648 3.46528 13.1538 3.36377 12.3728 2.61156C11.556 1.82517 11.4508 0.385214 11.4508 0.385214C11.4508 0.385214 9.42057 0 7.35457 0C5.32463 0 3.25832 0.385214 3.25832 0.385214C3.25832 0.385214 3.12055 1.83332 2.3454 2.57992C1.52332 3.37226 0.0611956 3.46528 0.0611956 3.46528C0.0611956 3.46528 -0.0956274 6.28612 0.128306 8.73642C0.34862 11.1456 0.913595 13.5292 3.00912 15.3357C4.72209 16.8121 7.28658 17.9903 7.28658 17.9903C7.28658 17.9903 9.29965 17.0659 10.758 16.0558C12.3604 14.9459 13.8679 13.4275 14.3292 10.5381C14.8171 7.48318 14.648 3.46528 14.648 3.46528ZM10.1706 14.8403C9.20136 15.5116 7.93685 16.1372 7.47549 16.3579L8.78498 16.6818L12.7637 13.6019L14.3292 5.69241L10.4388 1.17443L4.09923 1.46205L0.935451 4.15846L1.38476 8.93459C1.3797 8.88313 1.37462 8.83174 1.36987 8.78028C1.18439 6.75211 1.31422 4.41599 1.31422 4.41599C1.31422 4.41599 2.52482 4.33874 3.2054 3.68329C3.84716 3.06465 3.96137 1.86627 3.96137 1.86627C3.96137 1.86627 5.67214 1.54752 7.35271 1.54752C7.39393 1.54752 7.43516 1.54786 7.47638 1.54819V8.93536L13.2881 8.9455C13.2477 9.39715 13.1953 9.84598 13.1273 10.2721C12.7454 12.6642 11.4972 13.9213 10.1706 14.8403Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="-1.00586" y="-0.93457" width="8.34088" height="19.6298" fill="#82D3ED"/>
                <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#56CCF2"/>
                </g>
                <path d="M11.2444 9.87061C11.2148 10.5138 11.0413 11.083 10.7239 11.5781C10.4065 12.069 9.96003 12.4499 9.38451 12.7207C8.81322 12.9915 8.15942 13.127 7.42309 13.127C6.20857 13.127 5.25219 12.7313 4.55395 11.9399C3.8557 11.1486 3.50658 10.0314 3.50658 8.58838V8.13135C3.50658 7.22575 3.66316 6.43441 3.97631 5.75732C4.29369 5.07601 4.74861 4.55127 5.34106 4.18311C5.9335 3.81071 6.61905 3.62451 7.3977 3.62451C8.51912 3.62451 9.42048 3.92074 10.1018 4.51318C10.7831 5.1014 11.1703 5.9139 11.2634 6.95068H9.04174C9.02481 6.38786 8.88305 5.98372 8.61645 5.73828C8.34985 5.49284 7.9436 5.37012 7.3977 5.37012C6.84333 5.37012 6.43708 5.57747 6.17895 5.99219C5.92081 6.4069 5.78539 7.06917 5.7727 7.979V8.63281C5.7727 9.61882 5.89542 10.3234 6.14086 10.7466C6.39054 11.1698 6.81794 11.3813 7.42309 11.3813C7.93513 11.3813 8.32657 11.2607 8.5974 11.0195C8.86824 10.7783 9.01212 10.3953 9.02904 9.87061H11.2444Z" fill="white"/>
                </svg>
            )
        }
        else if(this.props.grade == 'D'){
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                <path d="M14.648 3.46528C14.648 3.46528 13.1538 3.36377 12.3728 2.61156C11.556 1.82517 11.4508 0.385214 11.4508 0.385214C11.4508 0.385214 9.42057 0 7.35457 0C5.32463 0 3.25832 0.385214 3.25832 0.385214C3.25832 0.385214 3.12055 1.83332 2.3454 2.57992C1.52332 3.37226 0.0611956 3.46528 0.0611956 3.46528C0.0611956 3.46528 -0.0956274 6.28612 0.128306 8.73642C0.34862 11.1456 0.913595 13.5292 3.00912 15.3357C4.72209 16.8121 7.28658 17.9903 7.28658 17.9903C7.28658 17.9903 9.29965 17.0659 10.758 16.0558C12.3604 14.9459 13.8679 13.4275 14.3292 10.5381C14.8171 7.48318 14.648 3.46528 14.648 3.46528ZM10.1706 14.8403C9.20136 15.5116 7.93685 16.1372 7.47549 16.3579L8.78498 16.6818L12.7637 13.6019L14.3292 5.69241L10.4388 1.17443L4.09923 1.46205L0.935451 4.15846L1.38476 8.93459C1.3797 8.88313 1.37462 8.83174 1.36987 8.78028C1.18439 6.75211 1.31422 4.41599 1.31422 4.41599C1.31422 4.41599 2.52482 4.33874 3.2054 3.68329C3.84716 3.06465 3.96137 1.86627 3.96137 1.86627C3.96137 1.86627 5.67214 1.54752 7.35271 1.54752C7.39393 1.54752 7.43516 1.54786 7.47638 1.54819V8.93536L13.2881 8.9455C13.2477 9.39715 13.1953 9.84598 13.1273 10.2721C12.7454 12.6642 11.4972 13.9213 10.1706 14.8403Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="-1.00586" y="-0.93457" width="8.34088" height="19.6298" fill="#EDB380"/>
                <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#F2994A"/>
                </g>
                <path d="M3.83031 13V3.75781H6.80736C7.6241 3.75781 8.35831 3.94401 9.01 4.31641C9.66169 4.68457 10.1695 5.20719 10.5334 5.88428C10.9016 6.55713 11.0878 7.3125 11.092 8.15039V8.57568C11.092 9.42204 10.9122 10.1816 10.5525 10.8545C10.197 11.5231 9.69343 12.0479 9.04174 12.4287C8.39428 12.8053 7.67065 12.9958 6.87084 13H3.83031ZM6.05834 5.47803V11.2861H6.83276C7.47175 11.2861 7.96264 11.0597 8.30541 10.6069C8.64819 10.1499 8.81957 9.47282 8.81957 8.57568V8.17578C8.81957 7.28288 8.64819 6.61003 8.30541 6.15723C7.96264 5.70443 7.46329 5.47803 6.80736 5.47803H6.05834Z" fill="white"/>
                </svg>    
            )
        }
        else if(this.props.grade == 'F'){
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                <path d="M14.646 3.46528C14.646 3.46528 13.1518 3.36377 12.3708 2.61156C11.554 1.82517 11.4489 0.385214 11.4489 0.385214C11.4489 0.385214 9.41862 0 7.35262 0C5.32267 0 3.25636 0.385214 3.25636 0.385214C3.25636 0.385214 3.1186 1.83332 2.34345 2.57992C1.52137 3.37226 0.0592425 3.46528 0.0592425 3.46528C0.0592425 3.46528 -0.0975805 6.28612 0.126353 8.73642C0.346667 11.1456 0.911642 13.5292 3.00717 15.3357C4.72014 16.8121 7.28462 17.9903 7.28462 17.9903C7.28462 17.9903 9.2977 17.0659 10.7561 16.0558C12.3585 14.9459 13.8659 13.4275 14.3273 10.5381C14.8152 7.48318 14.646 3.46528 14.646 3.46528ZM10.1686 14.8403C9.19941 15.5116 7.9349 16.1372 7.47354 16.3579L8.78303 16.6818L12.7617 13.6019L14.3273 5.69241L10.4368 1.17443L4.09728 1.46205L0.933498 4.15846L1.38281 8.93459C1.37775 8.88313 1.37267 8.83174 1.36792 8.78028C1.18243 6.75211 1.31227 4.41599 1.31227 4.41599C1.31227 4.41599 2.52287 4.33874 3.20344 3.68329C3.84521 3.06465 3.95942 1.86627 3.95942 1.86627C3.95942 1.86627 5.67019 1.54752 7.35075 1.54752C7.39198 1.54752 7.4332 1.54786 7.47443 1.54819V8.93536L13.2862 8.9455C13.2457 9.39715 13.1934 9.84598 13.1254 10.2721C12.7435 12.6642 11.4953 13.9213 10.1686 14.8403Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="-1.00781" y="-0.93457" width="8.34088" height="19.6298" fill="#EB4646"/>
                <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#EB1F26"/>
                </g>
                <path d="M10.2986 9.31836H6.7058V13H4.47778V3.75781H10.6604V5.47803H6.7058V7.60449H10.2986V9.31836Z" fill="white"/>
                </svg>    
            )
        }
        else if(this.props.grade == null){
            return(
                <></>    
            )
        }
        else{
            return(
                <svg width={state.width} height={state.height} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="18">
                <path d="M14.648 3.46528C14.648 3.46528 13.1538 3.36377 12.3728 2.61156C11.556 1.82517 11.4508 0.385214 11.4508 0.385214C11.4508 0.385214 9.42057 0 7.35457 0C5.32463 0 3.25832 0.385214 3.25832 0.385214C3.25832 0.385214 3.12055 1.83332 2.3454 2.57992C1.52332 3.37226 0.0611956 3.46528 0.0611956 3.46528C0.0611956 3.46528 -0.0956274 6.28612 0.128306 8.73642C0.34862 11.1456 0.913595 13.5292 3.00912 15.3357C4.72209 16.8121 7.28658 17.9903 7.28658 17.9903C7.28658 17.9903 9.29965 17.0659 10.758 16.0558C12.3604 14.9459 13.8679 13.4275 14.3292 10.5381C14.8171 7.48318 14.648 3.46528 14.648 3.46528ZM10.1706 14.8403C9.20136 15.5116 7.93685 16.1372 7.47549 16.3579L8.78498 16.6818L12.7637 13.6019L14.3292 5.69241L10.4388 1.17443L4.09923 1.46205L0.935451 4.15846L1.38476 8.93459C1.3797 8.88313 1.37462 8.83174 1.36987 8.78028C1.18439 6.75211 1.31422 4.41599 1.31422 4.41599C1.31422 4.41599 2.52482 4.33874 3.2054 3.68329C3.84716 3.06465 3.96137 1.86627 3.96137 1.86627C3.96137 1.86627 5.67214 1.54752 7.35271 1.54752C7.39393 1.54752 7.43516 1.54786 7.47638 1.54819V8.93536L13.2881 8.9455C13.2477 9.39715 13.1953 9.84598 13.1273 10.2721C12.7454 12.6642 11.4972 13.9213 10.1706 14.8403Z" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="-1.00586" y="-0.93457" width="8.34088" height="19.6298" fill="#A3A3A3"/>
                <rect x="7.33398" y="-0.814941" width="8.34088" height="19.6298" fill="#BDBDBD"/>
                </g>
                <path d="M6.03051 10.6235C6.03051 9.91064 6.11108 9.34912 6.27221 8.93896C6.43334 8.52393 6.69457 8.16504 7.0559 7.8623C7.41723 7.55957 7.69067 7.28369 7.87621 7.03467C8.06664 6.78076 8.16186 6.50244 8.16186 6.19971C8.16186 5.4624 7.84447 5.09375 7.20971 5.09375C6.91674 5.09375 6.67992 5.20117 6.49926 5.41602C6.3186 5.63086 6.22338 5.92139 6.21361 6.2876H3.73803C3.74779 5.31104 4.05541 4.55176 4.66088 4.00977C5.26635 3.46289 6.11596 3.18945 7.20971 3.18945C8.29858 3.18945 9.14086 3.44092 9.73656 3.94385C10.3372 4.44678 10.6374 5.16211 10.6374 6.08984C10.6374 6.49512 10.5569 6.86377 10.3957 7.1958C10.2346 7.52783 9.97582 7.86719 9.61938 8.21387L8.77709 8.99756C8.53783 9.22705 8.37182 9.46387 8.27904 9.70801C8.18627 9.94727 8.135 10.2524 8.12524 10.6235H6.03051ZM5.73022 12.8501C5.73022 12.4888 5.85961 12.1934 6.1184 11.9639C6.38207 11.7295 6.70922 11.6123 7.09985 11.6123C7.49047 11.6123 7.81518 11.7295 8.07397 11.9639C8.33764 12.1934 8.46947 12.4888 8.46947 12.8501C8.46947 13.2114 8.33764 13.5093 8.07397 13.7437C7.81518 13.9731 7.49047 14.0879 7.09985 14.0879C6.70922 14.0879 6.38207 13.9731 6.1184 13.7437C5.85961 13.5093 5.73022 13.2114 5.73022 12.8501Z" fill="white"/>
                </svg>
            )
        }
    }
}

export default view(Badge)