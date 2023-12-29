import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';
import './style.module.css' ;
const Home = () => {
  return  (
    <>         
    <div className="container">
  <h1 className="level-1 rectangle">CEO</h1>
  <ol className="level-2-wrapper">
    <li>
      <h2 className="level-2 rectangle">Director A</h2>
      <ol className="level-3-wrapper">
        <li>
          <h3 className="level-3 rectangle">Manager A</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 className="level-3 rectangle">Manager B</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <h2 className="level-2 rectangle">Director B</h2>
      <ol className="level-3-wrapper">
        <li>
          <h3 className="level-3 rectangle">Manager C</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
        <li>
          <h3 className="level-3 rectangle">Manager D</h3>
          <ol className="level-4-wrapper">
            <li>
              <h4 className="level-4 rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="level-4 rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
</div>

<footer className="page-footer">
  <span>made by </span>
  <a href="https://georgemartsoukos.com/" target="_blank">
    <img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo" />
  </a>
</footer>
    </>
  );
}

export default Home