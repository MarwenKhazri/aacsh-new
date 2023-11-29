import { Container, Row, Col } from 'react-bootstrap'; // Assuming you are using react-bootstrap


function Privacy()
{
    return(
        <div>
        <Row style={{ marginBottom: "20px", height: "150px", marginTop: "-20px", textAlign: "center" }}>
            <div style={{ textAlign: "center", backgroundColor: "#69426f ", color: "white", height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }}><h1 style={{ fontFamily: "roboto" }}>Our Specialities</h1></div>
        </Row>
        <Container>
            <Row style={{ marginTop: "40px" }}>
           
                    <div style={{ textAlign: "left" }}>
                        <h3 style={{ fontFamily: "roboto", fontWeight: "lighter", color: "#69426f" }}>Privacy policy</h3>
                        <h5 style={{ fontFamily: "roboto", fontWeight: "lighter", color: "black" }}>Notice Personal Information Protection notice, issued in accordance with the UAE Federal Law 45 of 2021 on the Protection of personal data, UAE Federal Law 2 of 2019 on the Use of Information and Communication Technology (ICT) in Health Fields and with Standards issued by Health Authorities</h5>
                        <h5 style={{ fontFamily: "roboto", fontWeight: "Bold", color: "#69426f" }}>1. AIM AND PURPOSE OF THIS NOTICE</h5>
                        <h5 style={{ fontFamily: "roboto", fontWeight: "lighter", color: "black" }}>American Academy of Cosmetic Surgery Hospital values your privacy, and with this Privacy Notice, we inform you about the personal information that we collect and process when interacting with you. By being transparent and informing you, we are also fulfilling our legal notification obligation as we are committed to processing your personal data according to the applicable privacy and data protection laws. This notice applies to all patients, current and former (referred to as “patients”) of American Academy of Cosmetic Surgery Hospital. You should read and retain this notice, with any other privacy notice we may provide you on specific occasions when we are collecting or processing personal information about you, to be aware of how and why we are using your information and what your rights are under data protection laws. Unless otherwise stated, all personal information we request from you is necessary for the purpose of providing you with healthcare services and for the purpose set out in this notice.</h5>
                   
                        <h5 style={{ fontFamily: "roboto", fontWeight: "Bold", color: "#69426f" }}>2. DEFINITION OF TYPES OF PERSONAL INFORMATION</h5>
                        <h5 style={{ fontFamily: "roboto", fontWeight: "lighter", color: "black" }}>Depending on our relationship with you, we might hold different categories of personal information, as per the table set out below: The term “personal information” in this notice refers to information that can identify you as an individual respectively as a natural person. Personal information Personal information is information that enables us to identify you as a natural person such as your full names, address, identification number, date of birth, gender, memberships to societies, etc. Sensitive personal information Sensitive personal information refers to information that directly or indirectly reveals a natural person’s family, racial or ethnic origin, political opinions, religious or philosophical beliefs, health, genetic or biometric data, physical or mental health.</h5>

                        <h5 style={{ fontFamily: "roboto", fontWeight: "Bold", color: "#69426f" }}>3. HOW WE COLLECT YOUR PERSONAL INFORMATION</h5>
                        <h5 style={{ fontFamily: "roboto", fontWeight: "lighter", color: "black" }}>The personal information that we process is information we have obtained from you or on consent by you to collect it from a third party, when becoming a patient at one of our facilities. We also process personal information that is inferred about you, based on information which you provide to us during our interactions, or we receive from a third party. Sensitive personal information about you, as defined above, may be collected and processed to the extent necessary to provide healthcare services and treatment, or to do the necessary administration of American Academy of Cosmetic Surgery Hospital and its facilities, as it relates to the law or your consent. During your stay as inpatient or outpatient in our facilities, we also create new personal information about you, especially when documenting the medical treatment (such as diagnosis, recommendation of treatments, medication etc.). The documentation of information is inherent to the treatment process and required by law. The information forms part of your medical record and is sensitive personal information as defined above. As required by law, our premises are monitored using closed-circuit television cameras in public areas, which records you while at a facility.</h5>
                    </div>

            
            </Row>
        </Container>
    </div>
    )
}

export default Privacy