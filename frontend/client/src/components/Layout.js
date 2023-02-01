import Navbar from 'components/Navbar';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer';

const Layout = ({ title, content, children }) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={content}/>
        </Helmet>

        <Navbar />
            <div className='container mt-5'>{children}</div>
        <Footer />
    </>
);

export default Layout;