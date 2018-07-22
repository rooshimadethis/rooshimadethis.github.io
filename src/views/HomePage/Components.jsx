import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import componentsStyle from "assets/jss/material/views/components.jsx";


class Components extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    brand={"Material Kit React"}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color={"transparent"}
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                    />
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