import {createStore} from 'redux'

const dummyReducer =()=> {
    return 100;
}
 const rootStore = createStore(dummyReducer)


 export default rootStore