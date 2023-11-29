import '../../index.css';


function Hero(){
    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1 style={{color : "#69426f"}}>Welcome to AACSH</h1>
          <h2 style={{color : "#69426f"}}>We are a team of talented doctors making people life better</h2>
          <a href="#about" className="btn-get-started scrollto" style={{backgroundColor : "#69426f", textDecoration: "none"}}>
            Get Started
          </a>
        </div>
      </section>
    )
}

export default Hero