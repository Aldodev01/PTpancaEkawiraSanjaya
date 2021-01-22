import './ContactForm.css'

const ContactForm = ()=>{
  return (
    <section className="form-container">
          <div className="gmaps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.786363153062!2d106.79512931476947!3d-6.29178499544624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e64bbface5%3A0x355071b9662b071a!2sThe%20CEO%20Building%20level%2012!5e0!3m2!1sid!2sid!4v1610509055209!5m2!1sid!2sid" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" ></iframe>
          </div>
          <div className="form-contact">
            <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>

            <form action="" className="form-isi" >
              
              <label htmlFor="nama">NAMA</label>
              <input type="text" name="nama" id="nama" className="nama" placeholder="Your Name"/>

              <label htmlFor="email">EMAIL</label>
              <input type="text" name="email" id="email" className="email" placeholder="Your Email"/>

              <label htmlFor="subject">SUBJECT</label>
              <input type="text" name="subject" id="subject" className="subject" placeholder="Your Subject"/>

              <label htmlFor="pesan">PESAN</label>
              <textarea name="pesan" id="pesan" cols="30" rows="10" placeholder="Message"></textarea>

              <button className="btn-submit">SUBMIT</button>
            </form>
          </div>
        </section>
  )
}

export default ContactForm;