import React, { useState } from 'react';

function GraduateComponent({ onChange, details }) {
  return (
    <div>
      <label>
        Degree:
        <input name="degree" value={details.degree} onChange={onChange} />
      </label>
      <br />
      <label>
        Year:
        <input name="year" value={details.year} onChange={onChange} />
      </label>
      <br />
      <label>
        Final Year Score:
        <input name="finalYearScore" value={details.finalYearScore} onChange={onChange} />
      </label>
      <br />
      <label>
        University:
        <input name="univ" value={details.univ} onChange={onChange} />
      </label>
    </div>
  );
}

function PGComponent({ onChange, details }) {
  return (
    <div>
      <label>
        Year:
        <input name="pgYear" value={details.pgYear} onChange={onChange} />
      </label>
      <br />
      <label>
        Thesis Subject:
        <input name="thesisSubject" value={details.thesisSubject} onChange={onChange} />
      </label>
    </div>
  );
}

function UnderGradComponent({ onChange, details }) {
  return (
    <div>
      <label>
        SSC:
        <input name="ssc" value={details.ssc} onChange={onChange} />
      </label>
      <br />
      <label>
        HSC:
        <input name="hsc" value={details.hsc} onChange={onChange} />
      </label>
    </div>
  );
}

function UserDetailsForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    education: '',
    // Graduate
    degree: '', year: '', finalYearScore: '', univ: '',
    // PG
    pgYear: '', thesisSubject: '',
    // UnderGrad
    ssc: '', hsc: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <label>
        Name:
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Education Level:
        <select
          name="education"
          value={form.education}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Graduate">Graduate</option>
          <option value="PG">PG</option>
          <option value="UnderGrad">UnderGrad</option>
        </select>
      </label>
      <br />

      {form.education === 'Graduate' && (
        <GraduateComponent onChange={handleChange} details={form} />
      )}

      {form.education === 'PG' && (
        <PGComponent onChange={handleChange} details={form} />
      )}

      {form.education === 'UnderGrad' && (
        <UnderGradComponent onChange={handleChange} details={form} />
      )}
    </form>
  );
}

export default UserDetailsForm;
