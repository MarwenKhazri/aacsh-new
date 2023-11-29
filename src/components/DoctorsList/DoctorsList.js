import '../../index.css';
import DoctorCard from '../DoctorCard/DoctorCard';

function DoctorsList() {

    const doctors = [
        { id: 1, name: 'Dr. Amr Majzoub', image: '/Doctors/Majzoub.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        // { id: 2, name: 'Dr. Atif Fahim Mina', image: '/Doctors/Fahim.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        // { id: 3, name: 'Dr. Noor Sheema Ghazi', image: '/Doctors/Ghazi.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        // { id: 4, name: 'Dr. Salim Taher Sherllalah', image: '/Doctors/Sherllalah.jpeg', speciality: 'Anesthesia', languages: ['English', 'Arabic'] },
        // { id: 5, name: 'Dr. Diyaaldeen Mohammed', image: '/Doctors/Diyaaldeen.jpeg', speciality: 'Bariatric Surgery', languages: ['English', 'Arabic'] },
        // { id: 6, name: 'Dr. Said Hassan', image: '/Doctors/Hassan.jpeg', speciality: 'Bariatric Surgery', languages: ['English', 'Arabic'] },
        // { id: 7, name: 'Dr. Alexander Bader', image: '/Doctors/Bader.jpeg', speciality: 'Cosmetic Gynecology', languages: ['English', 'Arabic'] },
        // { id: 8, name: 'Dr. Ayman Helmi', image: '/Doctors/Helmi.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 9, name: 'Dr. Abdulaziz Alrasheed', image: '/Doctors/Alrasheed.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 10, name: 'Dr. Ahmad Alaslawi', image: '/Doctors/Alaslawi.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 11, name: 'Dr. Ibrahim Ashary', image: '/Doctors/Ashary.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 12, name: 'Dr. Khaled Amer', image: '/Doctors/Amer.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 13, name: 'Dr. Mohan Rangaswamy', image: '/Doctors/Rangaswamy.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        // { id: 14, name: 'Dr. Ahmad Maadarani', image: '/Doctors/Maadarani.jpg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 15, name: 'Dr. Jeehan Abdul Qadir', image: '/Doctors/Qadir.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        { id: 16, name: 'Dr. Mine Burcu Hurbas', image: '/Doctors/Hurbas.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        // { id: 17, name: 'Dr. Inam Faiq', image: '/Doctors/Faiq.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        // { id: 18, name: 'Dr. Marwa Saeed', image: '/Doctors/Saeed.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        // { id: 19, name: 'Dr. Shubhangi Perkar', image: '/Doctors/Perkar.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        // { id: 20, name: 'Dr. Dana Moussa', image: '/Doctors/Moussa.jpeg', speciality: 'Dietetics', languages: ['Arabic', 'English'] },
        // { id: 21, name: 'Dr. Rita Nawar', image: '/Doctors/Nawar.jpeg', speciality: 'Endocrinology', languages: ['Arabic', 'English'] },
        // { id: 22, name: 'Dr. Haddo Abdullah', image: '/Doctors/Abdullah.jpeg', speciality: 'ENT', languages: ['Arabic', 'English'] },
        // { id: 23, name: 'Dr. Yasser Abdallah', image: '/Doctors/Abdallah.jpeg', speciality: 'General Medicine', languages: ['Arabic', 'English'] },
        // { id: 24, name: 'Dr. Alaa Saloum', image: '/Doctors/Saloum.jpeg', speciality: 'Internal Medicine', languages: ['Arabic', 'English'] },
        // { id: 25, name: 'Dr. Sarya Taha', image: '/Doctors/Taha.jpeg', speciality: 'Neurology', languages: ['Arabic', 'English'] },
        // { id: 26, name: 'Dr. Lama Sharbek', image: '/Doctors/Sharbek.jpeg', speciality: 'Ophthalmology', languages: ['Arabic', 'English'] },
        // { id: 27, name: 'Dr. Ahmed Almousa', image: '/Doctors/Almousa.jpg', speciality: 'Orthopedics Surgery', languages: ['Arabic', 'English'] },
         { id: 28, name: 'Dr. Nadia Buhannad', image: '/Doctors/Buhannad.jpeg', speciality: 'Psychology', languages: ['Arabic', 'English'] },
    ];


    return (
        <section id="doctors" className="doctors">
            <div className="container">

                <div className="section-title">
                    <h2 style={{ color: "#69426f" }}>Doctors</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    {doctors.map((doctor) => (

                        <div key={doctor.id} className="col-lg-6">
                            <DoctorCard lang={doctor.languages} name={doctor.name} image={doctor.image} speciality={doctor.speciality} />
                        </div>
                    ))}


                    {/* Repeat the above structure for other doctors */}

                </div>

            </div>
        </section>
    )
}

export default DoctorsList