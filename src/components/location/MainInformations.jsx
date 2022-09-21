function MainInformations() {
  return (
    <div className="mainInformations">
      <div className="titleLocalisation">
        <h2>{JSONFiltered.title}</h2>
        <p>{JSONFiltered.location}</p>
      </div>
      <div className="seller">
        <p>{JSONFiltered.host.name}</p>
        <img
          src={JSONFiltered.host.picture}
          alt="vendeur"
          className="imageSeller"
        />
      </div>
    </div>
  )
}

export default MainInformations
