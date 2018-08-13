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
                <Parallax large image={require("assets/img/darkpaper.png")} >
                    <div align={"center"} className={classes.container}>
                        <GridContainer className={classes.centered}>
                            <GridItem align={"center"} xs={12} sm={12} md={10}>
                                <Typography variant={"display4"}  className={classes.title} gutterBottom>Rooshi-Made</Typography>
                                <br />
                            </GridItem>
                            <GridItem>
                                <GridContainer className={classes.centered} >
                                    <GridItem  xs={12} sm={12} md={10}>
                                        <Button
                                            color="danger"
                                            size="lg"
                                        >
                                            <i className="far fa-smile" />Who am I?
                                        </Button>
                                    </GridItem>
                                    <GridItem  xs={12} sm={12} md={10}>
                                        <Link to={"/projects"} className={classes.link}>

                                            <Button
                                                color="danger"
                                                size="lg"
                                            >
                                                <i className="far fa-gem" />See my Work
                                            </Button>
                                        </Link>

                                    </GridItem>
                                    <GridItem  xs={12} sm={12} md={10}>
                                        <Link to={"/blog"} className={classes.link}>
                                            <Button
                                                color="danger"
                                                size="lg"
                                            >
                                                <i className="far fa-comment" />Read my stuff
                                            </Button>
                                        </Link>

                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
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