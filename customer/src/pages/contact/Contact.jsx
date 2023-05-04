import React, { useState } from 'react'
import "./contact.css"

const Contact = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [allValue, setAllValue] = useState([])

  const formSubmit = (e) => {
    e.preventDefault()
    const newValue = {fname, lname, phone, email, subject}
    setAllValue([...allValue, newValue])

    setLname("")
    setFname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <>
      <section className='contact'>
        <div className="container f_flex">
          <div className="main-content">
            <h2 className='mtop'>联系方式</h2>
            <p>请填写下面的表格，我们将很快回复您。</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                      姓 <label>*</label>
                  </span>
                  <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="input">
                    <span>
                      名 <label>*</label>
                  </span>
                  <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="input">
                    <span>
                      电话号码 <label>*</label>
                  </span>
                  <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="input">
                    <span>
                      邮箱地址 <label>*</label>
                  </span>
                  <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                  <span>主题</span>
                  <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
              </div>
              
              <div className="input inputlast">
                  <span>
                    填写信息 <label>*</label>
                  </span>
                  <textarea name="message" value={message} cols='30' rows='10' onChange={(e) => setMessage(e.target.value)} ></textarea>
              </div>

              <button className='primary-btn'>提交</button>
            </form>
          </div>

          <div className="side-content">
            <h3 className='mtop'>办公地址</h3>
            <p>3333 Weslayan Street, Houston TX 77027</p>
            <br />
            <h3>联系我们</h3>
            <span>xzhanguh@gmail.com</span>
            <br />
            <span>832 420 9391</span>
            <br />
            <br />
            <h3>跟随我们</h3>
            <div className="icon">
              <div className="flex_space">
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, subject } = currentValue
          return(
            <div className="sing-box">
              <h1>Send Successfully</h1>
               <h3>
                First Name : <p>{fname}</p>
              </h3>
              <h3>
                Last Name : <p>{lname}</p>
              </h3>
              <h3>
                Phone Number : <p>{phone}</p>
              </h3>
              <h3>
                Email : <p>{email}</p>
              </h3>
              <h3>
                Subject : <p>{subject}</p>
              </h3>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Contact