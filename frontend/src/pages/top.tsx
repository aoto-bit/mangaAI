import { Link, Outlet, useNavigate } from "react-router-dom"

import Cover1 from "../manga/Give_My_Regards_to_Black_Jack/cover1.png"

import "../css/top.css"

const Top: React.FunctionComponent = () => {

  let navigate = useNavigate();

  return (
    <div >
      <div className="book-container">
        <div className="book-cover">
          <img src={Cover1} />
        </div>
        <div>
          <div className="book-info">
            <p className="book-title">ブラックジャックによろしく</p>
            <p className="book-author">佐藤 秀峰</p>
            <p className="book-publisher">出版社:</p>
          </div>
          <p className="book-description">永禄大学付属病院の研修医・斉藤英二郎。月収はわずか3万8千円――。生活のためには他の病院でのアルバイトは欠かすことができない。</p>
          <button onClick={() => navigate("/cover1")}>これを読む</button>
          {/* <button onClick={() => navigate("/")}>これを読む</button> */}
        </div>
      </div>
      <Link to="/"><p>To Top Page</p></Link>
      <Outlet />
    </div>
  )
}

export default Top