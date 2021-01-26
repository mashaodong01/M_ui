const style = `
<style>
  .box {
    height: 400px;
    width: 600px;
    position: relative;
    overflow: hidden;
  }
  .imgC {
    height: 100%;
    width: 4200px;
    position: relative;
  }
  .imgC .itemImg {
    float: left;
  }
  .imgC .itemImg.active {
    opacity: 1;
    z-index: 1;
  }
  .imgC .itemImg.active.opacity {
    animation: fade-in;
    animation-duration: 0.5s
  }
  .imgC .itemImg.other.opacity {
    animation: fade-out;
    animation-duration: 0.5s
  }
  .imgC .itemImg,
  .imgC .itemImg img {
    height: 100%;
    width: 600px;
  }
  
  .car-btn button {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    width: 30px;
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    line-height: 60px;
    justify-content: center;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
  }
  .car-btn button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .car-btn .btn-prev {
    left: 0;
    top: calc(50% - 30px);
  }
  .car-btn .btn-next {
    right: 0;
    top: calc(50% - 30px);
  }
  .car-indicator {
    height: 20px;
    position: absolute;
    z-index: 3;
    bottom: 10px;
    display: flex;
    left: 50px;
    display: flex;
    align-items: center;
  }
  
  .car-indicator .indicator-item {
    display: block;
    height: 6px;
    width: 6px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .car-indicator .active {
    background-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }  
  @keyframes fade-in {  
    0% {opacity: 0;}
    50% {opacity: .5;}
    100% {opacity: 1;}
  }  
  @keyframes fade-out {  
    0% {opacity: 1;}
    50% {opacity: .5;}
    100% {opacity: 0;}
  } 
</style>
`
export default style;