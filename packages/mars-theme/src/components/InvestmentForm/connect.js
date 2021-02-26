import { connect } from "react-redux";
import { investmentFormHandler } from "../../store/actions/investmentform";

export function mapStateToProps(state) {
  return {
    investmentFormLoading:state.investmentFormReducer.investmentFormLoading
  };
}

const mapDispatchToProps = {
  investmentFormHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
