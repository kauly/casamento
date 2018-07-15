import React from "react";
import { Container, Card, CardTitle, Section, Tabs, Tab } from "react-materialize";
import casaConceito from '../../img/casaConceito.jpg';
import './Festa.scss';
import Map from '../maps/Maps';
import Rsvp from '../rsvp/Rsvp';

const Festa = () => {
    return (
        <section id="festa" className="festa">
            <Container>
                <Section> 
                    <h2 className="section-header">Festa</h2>    
                </Section>                
                    <Tabs className='large tabs-fixed-width z-depth-4 back'>
                        <Tab title="Local" active>
                            <Card   className='large back'
                                    header={<CardTitle image={ casaConceito }>Casa Conceito</CardTitle>}
                                    actions={[]}>
                                I am a very simple card. I am good at containing small bits of information. 
                                I am convenient because I require little markup to use effectively.
                            </Card>
                        </Tab>
                        <Tab title="Como Chegar">
                            <Card className='large back'>
                                <Map /> 
                            </Card>
                        </Tab>
                        <Tab title="Confirme sua Presença">
                            <Card className='large back'>
                                <Rsvp />
                            </Card>
                        </Tab>
                    </Tabs>
            </Container>
        </section>

    );
}

export default Festa;