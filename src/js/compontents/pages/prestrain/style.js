const style = `
<style>
  .prestrain-img {
    display: flex;
  }
  .prestrain-img .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 350px;
    height: 600px;
    padding: 10px;
    border: 1px solid #42b983;
    border-radius: 5px;
  }
  .prestrain-img .container img {
    width: 100%;
    height: 100%;
  }
  .annotation {
    margin-left: 40px;
  }
  .annotation .scheme {
    width: 400px;
    font-size: 16px;
    color: #606266;
    line-height: 32px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .annotation .scheme p {
    margin: 0;
    padding: 0;
  }
  .annotation .scheme .language-js {
    line-height: 1.4;
    padding: 1.25rem 1.5rem;
    margin: .85rem 0;
    background-color: #282c34;
    border-radius: 6px;
    overflow: auto;
  }
  .annotation .scheme .sign {
    color: #42b983;
  }
</style>
`;
export default style;
