import React, { useState, useEffect } from "react";
import { ref, onValue, push, runTransaction } from "firebase/database";
import { database } from "../../firebase/config";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, title, description, github, demo, skills = [], thumbnail } = project;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [isDesktopView, setIsDesktopView] = useState(false);

  useEffect(() => {
    const likesRef = ref(database, `projects/${id}/likes`);
    const dislikesRef = ref(database, `projects/${id}/dislikes`);
    const commentsRef = ref(database, `projects/${id}/comments`);

    const unsubscribeLikes = onValue(likesRef, (snap) => setLikes(snap.val() || 0));
    const unsubscribeDislikes = onValue(dislikesRef, (snap) => setDislikes(snap.val() || 0));
    const unsubscribeComments = onValue(commentsRef, (snap) => {
      const data = snap.val() || {};
      const sorted = Object.values(data).sort((a, b) => b.timestamp - a.timestamp);
      setComments(sorted);
    });

    return () => {
      unsubscribeLikes();
      unsubscribeDislikes();
      unsubscribeComments();
    };
  }, [id]);

  const handleLike = () => {
    const likesRef = ref(database, `projects/${id}/likes`);
    runTransaction(likesRef, (curr) => (curr || 0) + 1);
  };

  const handleDislike = () => {
    const dislikesRef = ref(database, `projects/${id}/dislikes`);
    runTransaction(dislikesRef, (curr) => (curr || 0) + 1);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() === "") return;
    const commentsRef = ref(database, `projects/${id}/comments`);
    push(commentsRef, { text: commentInput.trim(), timestamp: Date.now() });
    setCommentInput("");
  };

  const handleShare = () => {
    if (navigator.share) navigator.share({ title, url: demo });
    else alert("Share not supported in this browser.");
  };

  const toggleView = () => setIsDesktopView((prev) => !prev);

  return (
    <div className={`project-card ${isDesktopView ? "desktop-view" : ""}`}>
      {/* Thumbnail or Button for Mobile */}
      {!isDesktopView ? (
        <div className="mobile-thumbnail-wrapper">
          {thumbnail && (
            <img src={thumbnail} alt={`${title} thumbnail`} className="project-thumbnail" />
          )}

        </div>
      ) : (
        <iframe
          title="project-demo-iframe"
          src={demo}
          className="project-iframe"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          frameBorder="0"
        />
      )}

      {/* Info Box */}
      <div className="info-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* GitHub, Demo, Toggle */}
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <button onClick={toggleView}>
          {isDesktopView ? "Switch to Mobile View" : "More Details"}
        </button>
      </div>

      {/* Skill Meter */}
      <div className="skill-meter">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <span>{skill.name}</span>
            <div className="bar">
              <div className="fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Show like/dislike/comment only in desktop view */}
      {isDesktopView && (
        <>
          <div className="likes-dislikes">
            <button onClick={handleLike}>
              <span className="material-symbols-outlined">thumb_up</span> {likes}
            </button>
            <button onClick={handleDislike}>
              <span className="material-symbols-outlined">thumb_down</span> {dislikes}
            </button>
            <button onClick={handleShare}>
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>

          <div className="comments-section">
            <input
              type="text"
              value={commentInput}
              placeholder="Add a comment"
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommentSubmit()}
            />
            <button onClick={handleCommentSubmit}>Post</button>
            <ul>
              {comments.slice(0, 2).map((c, i) => <li key={i}>{c.text}</li>)}
              {comments.length > 2 && (
                <li style={{ opacity: 0.6 }}>...and {comments.length - 2} more</li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
