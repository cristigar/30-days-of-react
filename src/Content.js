import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <div className="content">
      <div className="line" />
      <div className="item">
        <div className="avatar">
          <img
            alt='Doug'
            src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            title="Doug"
          />
        </div>
        <span className="time">An hour ago</span>
        <p>Ate lunch</p>
        <div className="commentCount">
          <span className="commentText">2</span>
          <FontAwesomeIcon icon={Icons.faComment} className="commentIcon" />
        </div>
      </div>
    </div>
  );
};

export default Content;
