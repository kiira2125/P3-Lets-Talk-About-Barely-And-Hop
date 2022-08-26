import React from 'react';
import {Panel, Well, Col, Grid} from 'react-bootstrap';
import Wrapper from './/.//component/Wrapper';
//import './Footer.css';

const Footer = () => (
    <div>
      <Grid/>
      <Footer>
        <Panel className = 'footerView'>
        <Wrapper>
        <Col xs={0} sm={4} md={6} />
        <Col xs={12} sm={4} md={3} className='footerAuthorContainer'>
            <p className='footerAuthor'>Authors:</p>
            <hr className='footerHR'/>
               <a className='footerAuthor footerAuthorLink' href='https://github.com/DeniseAlvarez' target='_blank' rel='noopener noreferrer'> Denise Alvarez </a><br />
               <a className='footerAuthor footerAuthorLink' href='https://github.com/favalos06s' target='_blank' rel='noopener noreferrer'> Frenando Avalos </a><br />
               <a className='footerAuthor footerAuthorLink' href='https://github.com/kiira2125' target='_blank' rel='noopener noreferrer'> Luna Kiira </a><br />
               <a className='footerAuthor footerAuthorLink' href='https://github.com/RobertRouthier' target='_blank' rel='noopener noreferrer'> Robert Routhier </a><br />
               </Col>
                </Wrapper>
            </Panel>
          <Grid/>
        <Well className='footerWell'>
      <Wrapper>
          <Col xs={12} sm={8} md={9}>
          <p className='footerBottom'>&copy; Lets Talk About Barely and hops 09.22</p>
          </Col>
         </Wrapper>
       </Well>
     </Footer>
    </div>
);

export default Footer;