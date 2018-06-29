import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMusicList, updateValueField } from "./providers/CardListAction";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cards from "../../components/cards/Cards";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div>
        {this.props.data.list ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search your favorit artist"
              margin="normal"
              onChange={event =>
                this.props.updateValueField(event.target.value)
              }
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.getMusicList(this.props.data.value)}
            >
              Search!
            </Button>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {console.log(this.props.data.list)}
              {this.props.data.list.map(items => (
                <Grid key={items.trackId} item xs={4} sm={4} lg={4} xl={3}>
                  <Cards
                    image={items.artworkUrl100}
                    title={items.trackName}
                    songPreview={items.previewUrl}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No sound found!"
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({ data: store.state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMusicList, updateValueField }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
