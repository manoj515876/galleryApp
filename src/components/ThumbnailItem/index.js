import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage, isActive} = props
  const {thumbnailAltText, thumbnailUrl, id} = imageDetails
  const isActiveImg = isActive ? '' : 'active'
  const onClickImg = () => {
    onChangeImage(id)
  }

  return (
    <li className="list-card">
      <button className="list-button" type="button" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`img ${isActiveImg}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
