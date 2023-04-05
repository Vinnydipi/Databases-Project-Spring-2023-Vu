import React, { useState } from "react";
import axios from "axios";

const CreateRSO = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [members, setMembers] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRSO = { name, description, category, members };
    axios
      .post("/api/rsos", newRSO)
      .then((res) => {
        console.log(res.data);
        // handle successful creation of RSO
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data);
      });
  };

  return (
    <div>
      <h1>Create RSO</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <span>{errors.category}</span>}
        </div>
        <div>
          <label htmlFor="members">Members:</label>
          <textarea
            id="members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
          {errors.members && <span>{errors.members}</span>}
        </div>
        <button type="submit">Create RSO</button>
      </form>
    </div>
  );
};

export default CreateRSO;