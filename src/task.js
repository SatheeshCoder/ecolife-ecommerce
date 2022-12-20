import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import img1 from "./img/male.png";
import img2 from "./img/female.png";
function task() {
  const [details, setDetail] = useState([]);
  const [onclickedbutton, setOnClickedButton] = useState("initial");
  useEffect(() => {
    intialFunction();
  }, []);

  const intialFunction = () => {
    setDetail([
      {
        name: "satheesh",
        age: "22",
        dob: "6/12/2001",
        gender: "M",
      },
      {
        name: "sabari",
        age: "19",
        dob: "7/9/2009",
        gender: "M",
      },
      {
        name: "mani",
        age: "23",
        dob: "5/6/2003",
        gender: "M",
      },
      {
        name: "sitha",
        age: "17",
        dob: "2/2/2004",
        gender: "F",
      },
      {
        name: "vani",
        age: "24",
        dob: "7/12/2000",
        gender: "F",
      },
    ]);
  };

  // useEffect(() => {}, [details]);
  let Capitalname = (e) => {
    let str = e;
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
    return str2;
  };
  const showMaleDetail = async () => {
    let maleFilter = details.filter((details) => details.gender == "M");
    console.log(maleFilter);
    setDetail(maleFilter);
    setOnClickedButton("Male");
  };
  const showFemaleDetail = async () => {
    let female = details.filter((details) => details.gender == "F");
    console.log(female);
    setDetail(female);
    setOnClickedButton("female");
  };
  const reset = () => {
    intialFunction();
    setOnClickedButton("initial");
  };
  return (
    <>
      {details.map((e, i) => {
        return (
          <>
            {e.gender == "M" ? (
              <img src={img1} alt="malephoto" />
            ) : (
              <img src={img2} alt="femalephoto" width="23%" />
            )}
            <ul>
              <li>name:{Capitalname(e.name)}</li>
              <li>age:{e.age}</li>
              <li>dob:{e.dob}</li>
              <li>gender:{e.gender == "M" ? "male" : "female"}</li>
            </ul>
          </>
        );
      })}
      <>
        {onclickedbutton == "initial" ? (
          <>
            <Button variant="primary" onClick={showMaleDetail}>
              male
            </Button>
            <Button variant="primary" onClick={showFemaleDetail}>
              female
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={reset}>
            reset
          </Button>
        )}
      </>
      <></>
      {/* {onclickedbutton == "initial" && (
        <>
          <Button variant="primary" onClick={showMaleDetail}>
            male
          </Button>
          <Button variant="primary" onClick={showFemaleDetail}>
            female
          </Button>
        </>
      )}
      {onclickedbutton == "Male" && (
        <Button variant="primary" onClick={reset}>
          reset
        </Button>
      )}
      {onclickedbutton == "female" && (
        <Button variant="primary" onClick={reset}>
          reset
        </Button>
      )} */}
    </>
  );
}
export default task;
