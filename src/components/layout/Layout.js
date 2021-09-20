import classes from './Layout.module.css'
import Sidebar from './Sidebar'
import Header from '../../common/Header'
import ProgressBar from './ProgressBar'
import CollapsibleWidget from '../proposedSaleReport/collapsibleWidgets'

const Layout = (props) => {
    const user = JSON.parse(sessionStorage.getItem('user'));

        return (
        <div>
            {/* <div style={{display: 'flex'}}>  */}
            <Header user={user}/>
            <Sidebar />
            <div>
            {/* {props.location.pathname.startsWith('/reports/report-proposed-sale') && <><ProgressBar /> </>} */}
            {/* <CollapsibleWidget /> */}
            <main className={classes.main}>{props.children}</main>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Layout
