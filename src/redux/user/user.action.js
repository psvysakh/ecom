import {userActionType} from '../user/user.type';
export const setCurrentUser=(user)=>(
            {
            type:userActionType.SET_CURRENT_USER,
            payload:user
            }
    )