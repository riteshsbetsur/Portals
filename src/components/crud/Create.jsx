import React, { useState } from "react";

const Create = () => {
  const [courses, setCourses] = useState([]);
  let [emp, setEmp] = useState({
    name: "",
    gender: "",
    skills: [],
  });
  const { name, gender } = emp;

  const handleChange = e => {
    setEmp({ ...emp, [e.target.name]: e.target.value, skills: courses });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, gender, courses);
  };


  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={name}
            />
          </div>
          <div
            className="form-group"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            Female
          </div>
          <div
            className="form-group"
            name="skills"
            value={courses}
            onChange={e => {
              setCourses([...courses, e.target.value]);
            }}
          >
            <input type="checkbox" name="skills" value="html" />
            HTML
            <input type="checkbox" name="skills" value="css" />
            css
            <input type="checkbox" name="skills" value="MUi" />
            MUi
            <input type="checkbox" name="skills" value="JS" />
            JS
            <input type="checkbox" name="skills" value="React JS" />
            React JS
            <input type="checkbox" name="skills" value="Tailwind CSS" />
            Tailwind CSS
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Create;
