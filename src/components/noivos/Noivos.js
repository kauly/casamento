import React from "react";
import Colors from '../../utils/colors';
import { Container, Row, Col, Card, CardTitle, Section } from 'react-materialize'
import './Noivos.css';
import noivo from '../../img/images.jpeg';
import noiva from '../../img/noiva.jpeg';

const Noivos = () => {
    return (
        <section id="noivos" className="noivos">
            <Container>
                <Row>
                    <Section> 
                        <h2 className="section-header">Os Noivos</h2>    
                    </Section>    
                    <Col l={6} s={12}>
                        <Card horizontal header={<CardTitle image={noivo}></CardTitle>} >
                            <p>O noivo bllalblao foaoso asdas asda asd das</p>
                        </Card>
                    </Col>
                    <Col l={6} s={12}>
                        <Card horizontal header={<CardTitle image={noiva}></CardTitle>} >
                            <p>O noivo bllalblao foaoso asdas asda asd das</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Noivos;