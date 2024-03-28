export const SET_USER = "SET_USER";
export const SET_FAVORITE = "SET_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";
export const SET_BOOKINGS = "SET_BOOKINGS";
export const CANCEL_BOOK = "CANCEL_BOOK";
export const SET_PROPS = "SET_PROPS";
export const UPDATE_PROPS = "UPDATE_PROPS"
export const DELETE_PROPS = "DELETE_PROPS"
export const ADD_NOTIFICATIONS = "ADD_NOTIFICATIONS"
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
export const SIGN_OUT = "SIGN_OUT"

export const get_fav = () => {
  return {
    type: GET_FAVORITE,
  };
};

export const set_book = (props) => {
  console.log(props);
  if (!props) {
    console.log("err");
    return;
  }

  return {
    type: SET_BOOKINGS,
    props,
  };
};

export const cancel_book = (books) => {
  console.log(books);
  if (!books) {
    console.log("err");
    return;
  }

  return {
    type: CANCEL_BOOK,
    books,
  };
};


export const update_props = (props) => {
  if (!props) {
    return;
  }
  console.log("action",props);
 
  return {
    type: UPDATE_PROPS,
    props,
  };
}

export const delete_props = (propsId) => {
  if (!propsId) {
    return;
  }

 
  return {
    type: DELETE_PROPS,
    propsId,
  };
}


export const set_props = (props) => {
    if (!props) {
      return;
    }
    console.log("action",props);
   
    return {
      type: SET_PROPS,
      props,
    };
  };


export const set_user = (userData) => {
  if (!userData) {
    return;
  }

  return {
    type: SET_USER,
    userData
  };
};

export const set_fav = (props) => {
  if (!props) {
    return;
  }

  return {
    type: SET_FAVORITE,
    props,
  };
};


export const add_notifications = (notification) => {
  return{
    type:ADD_NOTIFICATIONS,
    notification
  }
}

export const remove_notifications = (nid) => {
  return{
    type:REMOVE_NOTIFICATION,
    nid
  }
}

export const signOutUser = () => {
  return{
    type:SIGN_OUT
  }
}