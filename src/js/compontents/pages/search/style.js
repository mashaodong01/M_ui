const style = `
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    #search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
    }
    #search-container .input {
      position: relative;
    }
    #search-container .input input {
      width: 300px;
      height: 40px;
      padding: 0 15px;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      line-height: 32px;
      outline: none;
    }
    #search-container .input .result {
      position: absolute;
      top: 35px;
      z-index: 10;
      display: none;
      width: 100%;
      background-color: #fff;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      border-radius: 0 0 4px 4px;
      border-top: none;
    }
    #search-container .input .result:before {
      content: "";
      position: absolute;
      top: 0;
      left: 10px;
      width: calc(100% - 20px);
      height: 1px;
      background-color: #42b983;
    }
    #search-container .input .result .item {
      display: flex;
      padding: 0 10px;
      list-style: none;
      color: #626675;
      font-size: 16px;
      line-height: 36px;
      cursor: pointer;
    }
    #search-container .input .result .item:hover {
      color: #42b983;
    }
    #search-container .input .result .item span {
      
    }
    #search-container .hnit {
      width: 300px;
      font-size: 16px;
      color: #606266;
      line-height: 32px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    #search-container .hnit .sign {
      color: #42b983;
    }
    
  </style>
`;

export default style;