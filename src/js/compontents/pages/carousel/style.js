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
  .car-btn button {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #ffffff;
    font-size: 20px;
    line-height: 60px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: none;
    outline: none;
  }
  .car-btn button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .car-btn .btn-prev {
    left: 20px;
    top: calc(50% - 30px);
    animation:fade-in 1.5s;
  }
  .car-btn .btn-next {
    right: 20px;
    top: calc(50% - 30px);
    animation:fade-in 1.5s;
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
  @keyframes fade-in {  
    0% {opacity: 0;}
    50% {opacity: 1;}
    100% {opacity: 1;}
  }  
  @keyframes fade-out {  
    0% {opacity: 1;}
    50% {opacity: .5;}
    100% {opacity: 0;}
  } 
</style>
`;
export default style;
