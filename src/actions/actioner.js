
export const getAllUser = () => {

  return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/users').
      then((result) => result.json()).
      then((users)=>{
        dispatch({
          type:"INCREMENT",
          payload: users
        });
      });
  }

}
