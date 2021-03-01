import { userConstants } from "./types";
// import { toast } from "react-toastify";
import { ApiUrl } from "../config";
import axios from "axios";

// export const investmentFormHandler = (userData) => (dispatch) => {
//   dispatch({
//     type: userConstants.INVEST_SUBMIT_LOADING,
//     payload: true,
//   });
  // toast.success("Form submitted successfully");
//   axios
//     .post(InvestmentApiUrl + "rnsadmin/contactAdd", userData)
//     .then((res) => {
//       dispatch({
//         type: userConstants.INVEST_SUBMIT_LOADING,
//         payload: true,
//       });
//       toast.success(res.data.message);
//     })
//     .catch((err) => {
//       dispatch({
//         type: userConstants.INVEST_SUBMIT_LOADING,
//         payload: false,
//       });
//       toast.error(err.response.data.message);
//     });
// };

export const modalHandler = () => (dispatch) => {
  dispatch({
    type: userConstants.TOGGLE_MODAL,
    payload: false,
  });
};


export const investmentFormHandler = (userData,clearState) => (dispatch) => {
  dispatch({
    type: userConstants.INVEST_SUBMIT_LOADING,
    payload: true,
  });
  // toast.success("Form submitted successfully");
  axios
    .post(ApiUrl + "rnsadmin/investmentAdd", userData)
    .then((res) => {
      dispatch({
        type: userConstants.INVEST_SUBMIT_LOADING,
        payload: true,
      });
      clearState();
      toast.success(res.data.message);
    })
    .catch((err) => {
      console.log(err, "errrrrrrrrrrrrrrr")
      dispatch({
        type: userConstants.INVEST_SUBMIT_LOADING,
        payload: false,
      });
      toast.error(err.response.data.message);
    });
};