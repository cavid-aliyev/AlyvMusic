import { Container } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/NavBar'

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px 0'}}></Container>
            {children}
        </>
    )
}

export default MainLayout
