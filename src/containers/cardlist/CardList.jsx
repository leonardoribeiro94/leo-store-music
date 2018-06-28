import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMusicList, updateValueField } from "./providers/CardListAction";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cards from "../../components/cards/Cards";
import ItunesService from "../../services/ItunesService";
const _itunesService = new ItunesService();

class CardList extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log("LEONARDO ", this.props.data.value);
  };

  loadProductList = async () => {
    let data = this.state.searchString;

    if (!data) {
      return null;          
    }

    this.setState({ products: await _itunesService.getProductList(data) });
  }

  onSearchInputChange = (value) => value ? this.props.newValue = value : null;
  

  render() {
    return (
      <div>
        {this.state.products ? (
          <div>
            <TextField style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search your favorit artist"
              margin="normal"
              onChange={event => this.props.updateValueField(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={this.props.getMusicList(this.props.data)}>Search!</Button>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.products.map(items => (
                <Grid key={items.trackId} item xs={4} sm={4} lg={4} xl={3}>
                  <Cards image={items.artworkUrl100} title={items.trackName} songPreview={items.previewUrl} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No sound found!"}
      </div>
    );
  }
}

const mapStateToProps = store => ({ data: store.state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMusicList, updateValueField }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
