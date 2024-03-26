import {
  ADD_NOTIFICATIONS,
  CANCEL_BOOK,
  DELETE_PROPS,
  GET_FAVORITE,
  SET_BOOKINGS,
  SET_FAVORITE,
  SET_PROPS,
  SET_USER,
  SIGN_OUT,
  UPDATE_PROPS,
} from "../action/user";

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    myprops: [],
    myfav: [],
    mybooks: [],
    mynoti:[]
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: {
          id: action.userData.uid,
          email: action.userData.email,
          name: action.userData.fullName,
          myprops: action.userData.properties,
          myfav: action.userData.favorites,
          mybooks: action.userData.bookings,
          mynoti:action.userData.notifications
        },
      };
    case UPDATE_PROPS:
      const oldmypropsData = [...state.user.myprops];
      const newProps = oldmypropsData.filter(data=>data.id!==action.props.id);
      newProps.push(action.props)

      return{
        user:{
          ...state.user,
          myprops:newProps
        }
      }

      case DELETE_PROPS:
        const oldmypropsarr = [...state.user.myprops];
        const newPropsArr = oldmypropsarr.filter(data=>data.id!==action.propsId);
       
  
        return{
          user:{
            ...state.user,
            myprops:newPropsArr
          }
        }

    case SET_FAVORITE:
      const oldFav = [...state.user.myfav];
      const newFav = oldFav.push(action.props);

      return {
        user: {
          ...state.user,
          myfav: newFav,
        },
      };

    case SET_BOOKINGS:
      const oldmybooks = [...state.user.mybooks];
    
      oldmybooks.push(action.props)
      return {
        user: {
          ...state.user,
          mybooks: oldmybooks,
        },
      };

    case SET_PROPS:
      const oldmyprops = [...state.user.myprops];
      oldmyprops.push(action.props);
     
      return {
        user: {
          ...state.user,
          myprops: oldmyprops,
        },
      };

    case CANCEL_BOOK:
      return{
        user: {
          ...state.user,
          mybooks:action.books
        }
      }

    case GET_FAVORITE:
      return {
        user: {
          ...state.user,
        },
      };

    case ADD_NOTIFICATIONS:
      const old_notificaitons = [...state.user.mynoti];
    
      old_notificaitons.push(action.notification)
      return{
        user:{
          ...state.user,
          mynoti:old_notificaitons
        }
      }
    case SIGN_OUT:
      return {
        user: {
          id: null,
          email: null,
          name: null,
          myprops: [],
          myfav: [],
          mybooks: [],
        },
      };
    default:
      return state;
  }
};
