import api from "@/api";



const getSpecialList = () => {
  return async function(dispatch) {
    dispatch({ type: "request" });

    let result = await api.specialList();
    if(result.code == 200) {
        dispatch({ type: 'SPECIAL_LIST' , data: result.data});
    }

  };
};

export default {
  getSpecialList
};
