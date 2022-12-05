import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const registerfunction = async () => {
    try {
      if (email.trim() === "") return alert("Email is empty");
      if (name.trim() === "") return alert("name is empty");
      if (phonenumber.trim() === "") return alert("phone number is empty");
      if (address.trim() === "") return alert("address is empty");
      const response = await axios.post("/api/register", {
        email,
        name,
        phonenumber,
        address,
      });
      console.log(response);
      if (response.data.success === true) {
        return alert("User successfully submitted");
      } else alert("Server issue");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone Number
          </label>
          <input
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Addresss
          </label>
          <input
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          onClick={() => registerfunction()}
          type="button"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
