import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Content } from './styles.js'

export default function Header() {
    return (<Wrapper>
        <Content>
            <Link to="/">
                <h2>Lista dos Personagens | </h2>
            </Link>
            <Link to="/contato">
                <h2>| Contato</h2>
            </Link>
        </Content>
    </Wrapper>
    )
}
