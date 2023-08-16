import './contact.css'
export function Contact() {
  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '400px' }}>
      <div className='heading'>

      <h2>Contact us</h2>
      <div className="underline"></div>
      </div>
      <div className="form-entry">
        <label htmlFor="Name">Name</label>
        <input type="text" name="text" id="text" />
      </div>
      <div className="form-entry">
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-entry">
        <label htmlFor="Name">Message</label>
        <textarea />
      </div>
      <button type="submit" className="btn">Let&apos;s Connect</button>

    </form>
  );
}