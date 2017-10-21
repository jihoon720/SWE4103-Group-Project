import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Thumbnail, Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from '../../main.css';

export function InstructorHome(props) {
  return (
    <body>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            UNB Attendance Service
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/instructor_home">Instructor Home</NavItem>
          <NavItem href="/instructor_home">Other thing</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/">Log out</NavItem>
        </Nav>
      </Navbar>

      <div className={styles.optionsContainer}>
      <Grid>
      
        <Row>
          <Col xs={6} md={3}>
            <Link to={'/create_course'}>
              <Image src={require('../../images/png/Pikachu.png')} rounded />
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Image src={require('../../images/png/Pikachu.png')} rounded />

          </Col>
          <Col xs={6} md={3}>
            <Image src={require('../../images/png/Pikachu.png')} rounded />

          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={require('../../images/png/Pikachu.png')} rounded />

          </Col>
          <Col xs={6} md={3}>
            <Image src={require('../../images/png/Pikachu.png')} rounded />

          </Col>
          <Col xs={6} md={3}>
            <Image src={require('../../images/png/Pikachu.png')} rounded />

          </Col>
        </Row>
      </Grid>
      </div>
      </body>
  );
}

// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}

InstructorHome.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(InstructorHome);
