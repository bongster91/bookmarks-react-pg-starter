import { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  return <article>
    <h3>{true ? <span>⭐️</span> : null} bookmark.name</h3>
    <h5>
        <span>
          <a href={bookmark.url}>bookmark.name</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; bookmark.url
      </h5>
      <h6>bookmark.category</h6>
      <p>bookmark.description</p>
      <div className="showNavigation">
      <div>
        <Link to={`/bookmarks`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/bookmarks/id/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  </article>;
}

export default withRouter(BookmarkDetails);
