import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Course from "../course/Course";
import ItunesService from "../../services/itunes-service";
const _itunesService = new ItunesService();

class Corousel extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      products: [],
      searchString: ""
    };

  }

  loadProductList = async () => {
    let data = this.state.searchString;

    if (!data) {
      return null;
    }

    this.setState({ products: await _itunesService.getProductList(data) });
  }

  onSearchInputChange = async (value) => {
    return value ? this.setState({ searchString: value }) : null;
  }

  render() {
    return (
      <div>
        {this.state.products ? (
          <div>
            <TextField style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search your favorit artist"
              margin="normal"
              onChange={event => this.onSearchInputChange(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={this.loadProductList}>
              Teste!
              </Button>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.products.map(items => (
                <Grid key={items.trackId} item xs={4} sm={4} lg={4} xl={3}>
                  <Course image={items.artworkUrl100} title={items.trackName} songPreview={items.previewUrl} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No sound found!"}
      </div>
    );
  }
}

export default Corousel;
