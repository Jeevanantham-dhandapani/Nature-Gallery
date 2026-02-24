import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails

  const onChangeImage = () => {
    changeImage(id)
  }

  const changeStyle = isActive ? '' : 'not-active-img'

  return (
    <li>
      <button type="button" onClick={onChangeImage} className="thumb-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${changeStyle}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
