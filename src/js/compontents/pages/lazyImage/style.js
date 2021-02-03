const style = `
<style>
  .lazy-img {
    display: flex;
  }
  .lazy-img .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 350px;
    height: 600px;
    padding: 10px;
    overflow-y: scroll;
    border: 1px solid #42b983;
    border-radius: 5px;
  }
  .lazy-img .container::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }
  .lazy-img .container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgb(225, 243, 216);
  }
  .lazy-img .container::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #fff;
  }
  .lazy-img .container .item {
    width: calc(50% - 5px);
    height: 250px;
    margin-bottom: 10px;
  }
  .lazy-img .container .item img {
    width: 100%;
    height: 100%;
  }
  .annotation {
    margin-left: 50px;
  }
  .annotation .scheme {
    width: 400px;
    font-size: 14px;
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