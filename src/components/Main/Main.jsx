import React, { useContext } from 'react';
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from '../../Context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, formData, setFormData } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData to onSent for processing the response based on user input
    onSent(formData);
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>pathGPT</p>
        <img src={assets.user_icon} alt='user-icon' />
      </div>

      <div className='main-container'>
        {!showResult ? (
          <>
            <div className='greet'>
              <p><span>Enter the input</span></p>
              <p>To get your desired </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Desired Skills:</label>
                <input
                  type="text"
                  name="desiredSkills"
                  value={formData.desiredSkills}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Education:</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Technologies Known:</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Level of Coding:</label>
                <select name="codingLevel" value={formData.codingLevel} onChange={handleChange}>
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label>Any Other Project:</label>
                <textarea
                  name="otherProjects"
                  value={formData.otherProjects}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt='user-icon' />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt='gemini-icon' />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='main-bottom'>
        <p className='bottom-info'>
          pathGPT is powered by Gemini, it may display inaccurate information so check its responses.
        </p>
      </div>
    </div>
  );
};

export default Main;

