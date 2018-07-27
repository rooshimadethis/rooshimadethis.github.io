import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Typography from '@material-ui/core/Typography';
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import componentsStyle from "assets/jss/material/views/components.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";


class Components extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    rightLinks={<HeaderLinks />}
                    fixed
                    color={"transparent"}
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax
                    image={require("assets/img/cubes.jpg")}
                    blur={10}
                    bgImageAlt="the cat"
                    strength={200}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand} >
                                    <Typography className={classes.title} variant="display4" >Rooshi-made</Typography>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <Grid item xs={12}>

                            <Grid container justify={"center"}>
                                <Grid item xs={3} sm={3}>
                                    <Typography variant="display1" >Who I am</Typography>

                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="display1" >What I've done</Typography>

                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="display1" >What I think</Typography>

                                </Grid>
                            </Grid>

                        </Grid>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <GridItem md={12} className={classes.textCenter}>
                        <Link to={"/login-page"} className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br /><br /> <br />
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br /><br /> <br />
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br /><br /> <br />
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br /><br /> <br />
                                 <br /> <br />
                                 <br /> <br />
                                 <br /> <br />

                            </Button>
                        </Link>
                    </GridItem>
                </div>
            </div>
        )
    }
}

export default withStyles(componentsStyle)(Components);