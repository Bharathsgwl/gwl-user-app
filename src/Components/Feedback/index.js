import React, { Component } from "react";

import { Card, Button } from "@material-ui/core";
import axios from "axios";

class Feedback extends Component {
  state = {
    result: [],
    rate: [1, 2, 3, 4, 5]
  };

  componentDidMount() {
    axios
      .get("https://pure-wave-01085.herokuapp.com/api/feed_back")
      .then(response => {
        console.log(response);
        this.setquestion(response.data.result);
      })
      .catch(err => console.log(err));
  }

  setquestion = result => {
    this.setState({ result });
    console.log(result, "resultssss");
  };

  handleOnChange = (e, indexi, index1) => {
    console.log("hitting");
    let flag = true;
    const { result } = this.state;

    result.forEach((element, index) => {
      if (index == index1) {
        element.f_ans = e;
        element.index = indexi;
        element.color = "green";
      }
    });

    this.setState({
      ...result,
      result
    });
  };

  handleOnClickSubmit = () => {
    axios
      .post("https://pure-wave-01085.herokuapp.com/api/feed_back_response", {
        result: this.state.result
      })
      .then(response => {
        console.log(response, "candi");
      });
  };

  render() {
    const { result = [] } = this.state;
    const { handleOnChange, handleOnClickSubmit } = this;

    const { rate } = this.state;

    return (
      <div>
        <h2>Feedback Form</h2>

        <br />
        <br />

        {result.map((element, index1) => {
          return (
            <div>
              <br />
              <span>{element.question}</span>

              {rate.map((marks, rateIndex) => {
                let eleColor =
                  element.index >= rateIndex ? element.color : "white";

                return (
                  <span>
                    <input
                      style={{
                        backgroundColor: eleColor,
                        width: "41px",
                        verticalAlign: "middle"
                      }}
                      value={marks}
                      type="image"
                      src="https://img.icons8.com/doodle/48/000000/star--v2.png"
                      onClick={e => {
                        handleOnChange(e.target.value, rateIndex, index1);
                      }}
                    />
                  </span>
                );
              })}
            </div>
          );
        })}
        <br />
        <Button
          color="primary"
          variant="contained"
          onClick={handleOnClickSubmit}
        >
          Submit
        </Button>
      </div>
    );
  }
}
export default Feedback;
