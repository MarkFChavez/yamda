import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { connect } from "react-redux";

class PaginationStatus extends Component {
  render() {
    if (this.props.selectedCategory === 'upcoming') {
      return null
    }

    return (
      <Grid
        style={{ marginTop: "10px" }}
        container
        spacing={0}
        justify="center"
      >
        {this.props.totalPages ? (
          <Typography component="strong">
            <span>
              PAGE {this.props.currentPage} of {this.props.totalPages}
            </span>
          </Typography>
        ) : (
          <span> ... </span>
        )}
      </Grid>
    );
  }
}

function stateToProps(state) {
  return {
    totalPages: state.totalPages,
    currentPage: state.currentPage,
    selectedCategory: state.selectedCategory
  };
}

export default connect(stateToProps)(PaginationStatus);
