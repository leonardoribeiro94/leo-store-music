import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


class Course extends React.Component {
     
    render() {
        return (
            <div>
                {this.props.image ? (
                    <Card>
                        <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                            image={this.props.image}
                            title={this.props.title} />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography component="p">
                                {this.props.trackName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <audio controls={"controls"}>
                                  <source src={this.props.songPreview} controls/>
                            </audio>

                        </CardActions>
                    </Card>
                ) : null}
            </div>
        );
    };
}

export default Course;