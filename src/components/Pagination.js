import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'

class Pagination extends Component {

  render () {
    return (
      <Grid style={{ marginTop: '10px' }} container spacing={0} justify='center'>
        <Grid item>
          <Button raised dense color='default'>
            prev
          </Button>
        </Grid>

        <Grid item>
          <Button raised dense color='default'>
            next
          </Button>
        </Grid>
      </Grid>
    )
  }

}

function stateToProps (state) {
  return { currentPage: state.currentPage, selectedCategory: state.selectedCategory }
}

export default connect(stateToProps)(Pagination)