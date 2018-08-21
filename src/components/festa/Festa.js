import React from "react";
import { Container, Card, CardTitle, Section, Tabs, Tab, Row, Col } from "react-materialize";
import casaConceito from '../../img/casaConceito.jpg';
import casaConceito3 from '../../img/casaConceito3.jpg';
import './Festa.scss';
import Map from '../maps/MapContainer';
import Rsvp from '../rsvp/Rsvp';

const Festa = () => {
    return (
        <section id="festa" className="festa">
            <Container>
                <Section> 
                    <h1 className="section-header">Festa</h1>    
                </Section>                
                    <Tabs className='large  z-depth-4 back'>
                        <Tab title="Local" active>
                            <Card   className='large back'
                                    header={<CardTitle image={ casaConceito3 }>Casa Conceito</CardTitle>}
                                    actions={[]}>
                            
                                A Casa Conceito Cacupé é um espaço de características singulares que lhe conferem uma 
                                marca de ambiente diferenciado e sofisticado. Perfeito para a realização de um grande sonho. 
                                Localizada no bairro de Cacupé, banhada pelas águas calmas da baía norte. 
                                A praia mistura a modernidade e o turismo com as tradições dos moradores nativos, 
                                que vivem da pesca artesanal e do cultivo de ostras.
                            
                            </Card>
                        </Tab>
                        <Tab title="Como Chegar">
                        <Card className='large back'>
                          <Row>
                            <Col s={12} l={6} className='festa-map'>
                              <Map />
                            </Col>
                            <Col s={12} l={6}>
                             
                                Os convidados, preferencialmente, deverão ter os seus carros alocados no Estacionamento localizado na Estrada Haroldo 
                                Soares Glavan, 1760, Cacupé – Vivá Residence - Próximo ao SESC. Deste local os convidados serão transferidos para a 
                                Casa Conceito através dos próprios organizadores do evento (TRANSFER).<br />
                                Latitude: -27.540605<br/>
                                Longitude: -48.522963
                             
                            </Col>
                          </Row>
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