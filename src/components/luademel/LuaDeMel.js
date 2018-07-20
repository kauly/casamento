import React from 'react';
import { Container, Section } from 'react-materialize';
import Roteiro from '../roteiro/Roteiro';
import './LuaDeMel.scss';

const LuaDeMel = ({roteiros}) => {
    return (
        <section id="luademel" className="luademel">
            <Section>
                <h1 className="section-header">Lua de Mel</h1>
            </Section>
            <Container>
            
                <div className="grid-container">
                    {
                        roteiros.map((roteiro, n) => <Roteiro roteiro={roteiro} key={n}/>)
                    }
                </div>
                
            </Container>
        </section>    
    );

}

export default LuaDeMel;