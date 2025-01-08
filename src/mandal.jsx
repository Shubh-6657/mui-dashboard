import React, { useState } from "react";
import "./mandal.css";

// Mock dynamic JSON data
const projects = [
  { id: 1, name: "UI/UX Designer", GL: 35, JT: 10, HF: 15 },
  { id: 2, name: "Application Developer", GL: 25, JT: 20, HF: 10 },
  { id: 3, name: "Automation Tester", GL: 15, JT: 30, HF: 25 },
];

const candidates = [
  { id: 1, name: "Jill James", description: "I regularly explore design blogs, attend webinars...", messages: { message: "Hi, can you briefly tell me about your experience?", email: "Email content", text: "Text content" } },
];

const Mandal = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [activeTab, setActiveTab] = useState("Message");

  return (
    <div className="mandal-container">
      {/* Project Section */}
      <div className="project-section">
        <h3>Project Name</h3>
        <input type="text" placeholder="Search" className="search-bar" />
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={selectedProject?.id === project.id ? "active" : ""}
            >
              <span>{project.name}</span>
              <div className="tags">
                <span className="gl">GL {project.GL}</span>
                <span className="jt">JT {project.JT}</span>
                <span className="hf">HF {project.HF}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Candidate Section */}
      <div className="candidate-section">
        <h3>Candidates</h3>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="candidate-list">
          {selectedProject &&
            candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`candidate-card ${selectedCandidate?.id === candidate.id ? "active" : ""}`}
                onClick={() => setSelectedCandidate(candidate)}
              >
                <div className="avatar">{candidate.name.charAt(0)}</div>
                <div className="info">
                  <h4>{candidate.name}</h4>
                  <p>{candidate.description}</p>
                </div>
                <span className="badge">3</span>
              </div>
            ))}
        </div>
      </div>

      {/* Message Panel */}
      <div className="message-panel">
        {selectedCandidate ? (
          <>
            <div className="tabs">
              {["Message", "Email", "Text"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === "Message" && <p>{selectedCandidate.messages.message}</p>}
              {activeTab === "Email" && <p>{selectedCandidate.messages.email}</p>}
              {activeTab === "Text" && <p>{selectedCandidate.messages.text}</p>}
            </div>
            <div className="input-container">
              <textarea placeholder="Enter text here"></textarea>
              <button className="send-button">Send</button>
            </div>
          </>
        ) : (
          <p className="no-selection">Select a project and candidate to view messages.</p>
        )}
      </div>
    </div>
  );
};

export default Mandal;
