const React = require('react');

const DumberComponent = (prop) => {
  function handleClick(event) {
    alert("You've clicked");
  }
  return (
    <div onClick={prop.handleClick}>"I am just happy"</div>
  )
}

module.exports = DumberComponent;
