const style = `
<style>
   .page-nav {
        display: flex;
        width: 800px;
        height: 400px;
        border: 1px #ccc solid;
        margin: 50px;
   }
   .page-nav .list {
       width: 300px;
       border-right: 1px #ccc solid;
   }
   .page-nav .list .nav-item {
       display: flex;
       justify-content: center;
       align-items: center;
       flex: 1;
       height: calc(100% / 9 - 1px);
       border-bottom: 1px #ccc solid;
       cursor: pointer;
   }
   .page-nav .list .nav-item.active {
       background: #ccc;
       color: #fff;
   }
   .page-nav .list .nav-item:last-child {
        border-bottom: none;
   }
   .page-nav .content {
        width: 100%;
        height: 100%;
   }
   .page-nav .content .content-item {
       display: none;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: 100%;
       font-size: 50px;
   }
   .page-nav .content .content-item.active {
       display: flex;
   }
</style>
`;
export default style;