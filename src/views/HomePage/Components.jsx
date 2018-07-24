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
                <Parallax image={require("assets/img/gray.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand} align="left">
                                    {/*
                                    <h1 className={classes.title}>Rooshi</h1>
                                    <h1 className={classes.superTitle}>Made me</h1>
                                    */}
                                    <Typography className={classes.title} variant="display4" >Rooshi</Typography>
                                    <Typography className={classes.superTitle} variant="display3" >made me</Typography>
                                    {/*<h3 className={classes.subtitle}>A sneak peak of who I am</h3>*/}
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <GridItem md={12} className={classes.textCenter}>
                        <Link to={"/login-page"} className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                View Login Page
                            </Button>
                        </Link>
                    </GridItem>
                </div>
            </div>
        )
    }
}

export default withStyles(componentsStyle)(Components);