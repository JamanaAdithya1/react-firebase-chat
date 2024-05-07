import "./Detail.css"

const Detail = () => {
  return (
    <div className="Detail">
      <div className="user">
        <img src="./avatar.png" alt="" srcset="" />
        <h2>Manoj</h2>
        <p>I am Manoj.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388" alt="" />
                <span>Image Details</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388" alt="" />
                <span>Image Details</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388" alt="" />
                <span>Image Details</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388" alt="" />
                <span>Image Details</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>

  )
}

export default Detail