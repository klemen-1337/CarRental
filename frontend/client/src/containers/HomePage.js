import Layout from 'components/Layout';

const HomePage = () => {

    return (
        <Layout title='Auth Site | Home' content='Home page'>           
            <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>Smart vehicle management solution system</h1>
                        <div className="d-lg-flex mt-5">
                            <a href="/login" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src="/hero-img.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

         </section>

        </Layout>
    );
}

export default HomePage;