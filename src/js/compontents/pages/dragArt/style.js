const style = `
  <style>
    .drag-art {
      height: 100%;
      background-color: #f5f5f5; 
    }
    .tools {
      height: 60px;
      line-height: 60px;
      background: #fff;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
    }
    .drag-main {
      display: flex;
      justify-content: space-between;
      height: calc(100% - 60px);
    }
    .drag-main .components {
      width: 190px;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
    }
    .drag-main .container {
      width: calc(100% - 410px);
      height: calc(100% - 20px);
      margin: 10px;
      background: #fff;
    }
    .drag-main .configration {
      height: 100%;
      width: 200px;
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
    }
  </style>
`

export default style;