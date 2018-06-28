import React from "react";
import Colors from '../../utils/colors';
import { Container, Card, CardTitle, Row, Col, Section, Tabs, Tab } from "react-materialize";
import casaConceito from '../../img/casaConceito.jpg';
import './Festa.css';
import Map from '../maps/Maps';
import Rsvp from '../rsvp/Rsvp';

const Festa = () => {
    return (
        <section id="festa" className="festa">
            <Container>
                <Section> 
                    <h2 className="section-header">A Festa</h2>    
                </Section>                
                        <Tabs className='large tabs-fixed-width'>
                            <Tab title="Local" active>
                                <Card   className='large'
                                        header={<CardTitle image={ casaConceito }>Casa Conceito</CardTitle>}
                                        actions={[]}>
                                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                </Card>
                            </Tab>
                            <Tab title="Como Chegar"  className="center-map">
                                <Card className='large'>
                                <Map /> 
                                </Card>
                            </Tab>
                            <Tab title="Confirme sua Presença">
                                <Card className='large'>
                                    <Rsvp />
                                </Card>
                            </Tab>
                        </Tabs>
                   
            </Container>
        </section>

    );
}

export default Festa;