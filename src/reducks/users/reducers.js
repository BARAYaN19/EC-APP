
import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) =>{
  switch (action.type) {
    case Actions.SIGN_IN:
      return{
        ...state,
        ...action.payload
      }
      case Actions.SIGN_OUT:
        return{
          ...action.payload
        };

    default:
      return state
  }
}

//Reducerの書き方
//　import * as Actions それからinitialStateをインポートする！

//第一引数（）内は二つ。　initialStateとstate名、action 

//switi分で書く　format 
// export const 関数名　= (state= initialState.state名,action) => {
//     switch (action.type) {
//       case Action.関数名大文字:
//         return{
//           ...state,
//           ...action.payload
//         }
//       default:
//         return state
//     }
// }