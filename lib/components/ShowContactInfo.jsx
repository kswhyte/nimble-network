
export const ShowContactInfo = ({contactList}) => {
  return(
    <div>
      <span className="company">{contact.company}</span>
      <span className="email1">{contact.email1}</span>
      <span className="email2">{contact.email2}</span>
      <span className="cell">{contact.cell}</span>
      <span className="home">{contact.home}</span>
      <span className="work">{contact.work}</span>
      <span className="google">{contact.google}</span>
      <span className="facebook">{contact.facebook}</span>
      <span className="twitter">{contact.twitter}</span>
      <span className="github">{contact.github}</span>
    </div>
  )
}

module.exports = ShowContactInfo
