import '../../index.css';


function Specialities() {

  const featuresData = [


    {
      imgSrc: 'images/services/Endocrinology.jpg',
      alt: 'Dentistry',
      icon: 'FaFlask',
      title: 'Endocrinology',
    },
    {
      imgSrc: 'images/services/ENT.jpg',
      alt: 'Dentistry',
      icon: 'FaHeadSideCough',
      title: 'ENT',
    },
    {
      imgSrc: 'images/services/dermatology.jpg',
      alt: 'Dentistry',
      icon: 'FaRegSun',
      title: 'Dermatology & Antiaging',
    },

    {
      imgSrc: 'images/services/Anesthesia.jpg',
      alt: 'Dentistry',
      icon: 'FaSyringe',
      title: 'Anesthesia',
    },
    {
      imgSrc: 'images/services/Bariatric.jpg',
      alt: 'Dentistry',
      icon: 'FaWeight',
      title: 'Bariatric Surgery',
    },
    {
      imgSrc: 'images/services/gynecology.jpg',
      alt: 'Dentistry',
      icon: 'FaVenus',
      title: 'cosmetic gynecology',
    },

    {
      imgSrc: 'images/services/Dietetics.png',
      alt: 'Dietetics',
      icon: 'FaUtensils',
      title: 'Dietetics',
    },
    {
      imgSrc: 'images/services/orthopedics.jpg',
      alt: 'Dentistry',
      icon: 'FaBone',
      title: 'Orthopedics Surgery',
    },

    {
      imgSrc: 'images/services/obstetrics_gynaecology.jpg',
      alt: 'Dentistry',
      icon: 'FaFemale',
      title: 'Obstetrics & Gynecology',
    },

    {
      imgSrc: 'images/services/physiotherapy.jpg',
      alt: 'Dentistry',
      icon: 'FaRunning',
      title: 'Physiotherapy',
    },
    {
      imgSrc: 'images/services/Psychology.jpg',
      alt: 'Dentistry',
      icon: 'FaYinYang',
      title: 'Psychology',
    },


    {
      imgSrc: 'images/services/opthalmology.jpg',
      alt: 'opthalmology',
      icon: 'FaRegEye',
      title: 'Opthalmology',
    },


    // Add more features as needed
  ];

  return (
    <section id="departments" className="departments" style={{ marginTop: "100px" }}>
      <div className="container">

        <div className="section-title">
          <h2 style={{ color: "#69426f" }}>Specialities</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column" style={{ listStyleType: "none" }}>
              {featuresData.map((feature, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={`nav-link ${index === 0 ? 'active show' : ''}`}
                    data-bs-toggle="tab"
                    href={`#tab-${index + 1}`}
                  >
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              {featuresData.map((feature, index) => (
                <div key={index} className={`tab-pane ${index === 0 ? 'active show' : ''}`} id={`tab-${index + 1}`}>
                  <div className="row gy-4">
                    <img src={feature.imgSrc} alt={feature.alt} className="img-fluid"/>
                    <h3>{feature.title}</h3>
                    <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>{/* Your content goes here */}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Specialities