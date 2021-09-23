//import classes from './Layout.module.css'
import Sidebar from './Sidebar'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
// import ProgressBar from './ProgressBar'
// import CollapsibleWidget from '../proposedSaleReport/collapsibleWidgets'

const Layout = (props) => {
    const user = JSON.parse(sessionStorage.getItem('user'));

        return (
        <div>
            <Header user={user}/>
            <Sidebar />
            {/* <div>
            <main className={classes.main}>{props.children}</main>
            </div> */}
            <div className="container" style={{minHeight: '70vh'}}>
            <main>{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
