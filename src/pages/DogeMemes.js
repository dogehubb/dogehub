import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import memesApi from "../api/memesApi";
import { useEffect } from "react";

const spinner = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;
export const DogeMemes = () => {
  function fetchMemes() {
    memesApi
      .get("/memes")
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchMemes();
  });
  return (
    <div style={{ marginTop: 120 }}>
      <ClockLoader color={"white"} css={spinner} />
      <h1 style={{ textAlign: "center" }}>Development in process</h1>
    </div>
  );
};
