import Nav from './Nav'
import Footer from './Footer'


const Layout = (props) =>{

    return(
    <div>
        <h1>Items APP</h1>
        <Nav/>

        {props.children}

        <Footer/>
    </div>
    )
    
}

export default Layout;