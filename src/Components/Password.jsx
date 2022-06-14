import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Data/Char";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { COPY_Fail, COPY_SUCCESS } from "./Data/Message";

const Password = () => {
  const [password, setPassword] = useState("*****");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };
  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleCopyPassword = (e) => {
    if (password === "*****") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2>Generated Password</h2>
          <hr />
          <div className="pass">{password}</div>
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>

            <input
              color="#c850c0"
              size="small"
              type="number"
              className="pw"
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              id="password-stregth"
              name="password-strength"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <Checkbox
              sx={{
                color: "#c850c0",
                "&.Mui-checked": {
                  color: "#c850c0",
                },
              }}
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
              id="uppercase-letters"
              name="uppercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <Checkbox
              sx={{
                color: "#c850c0",
                "&.Mui-checked": {
                  color: "#c850c0",
                },
              }}
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
              id="lowercase-letters"
              name="lowercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <Checkbox
              sx={{
                color: "#c850c0",
                "&.Mui-checked": {
                  color: "#c850c0",
                },
              }}
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              id="include-numbers"
              name="include-numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <Checkbox
              sx={{
                color: "#c850c0",
                "&.Mui-checked": {
                  color: "#c850c0",
                },
              }}
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <Button
            sx={{
              backgroundColor: "#c850c0",
              "&.MuiButton-root:hover": {
                backgroundColor: "#c850c0",
                boxShadow:
                  "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              },
              margin: "10px",
            }}
            variant="contained"
            size="large"
            onClick={handleGeneratePassword}
            className="generator__btn"
          >
            Generate Password
          </Button>

          <Button
            sx={{
              backgroundColor: "#c850c0",
              "&.MuiButton-root:hover": {
                backgroundColor: "#c850c0",
                boxShadow:
                  "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              },
              margin: "10px",
            }}
            variant="contained"
            size="large"
            className="copy__btn"
            onClick={handleCopyPassword}
          >
            Copy to Clipboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Password;
