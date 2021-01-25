const style = ` 
  <style>
    .github-link {
        height: 40px;
    }
    .github-link a {
        position: relative;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        color: #409eff;
        font-size: 14px;
    }

    .github-link:hover a:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background: #409eff;
    }

    .view-item,
    .inputs-item {
        display: flex;
        align-items: center;
        height: 40px;
    }

    .view-item,
    .inputs-item {
        display: flex;
        align-items: center;
        height: 40px;
    }

    .view-item .label,
    .inputs-item .label {
            text-align: right;
            vertical-align: middle;
            font-size: 14px;
            color: #606266;
            line-height: 32px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }

    .view-item .value {
        line-height: 32px;
    }

    .inputs-item input {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 32px;
        line-height: 32px;
        outline: none;
        padding: 0 15px;
        width: 100%;
    }

    .divider {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        background-color: #dcdfe6;
    }
  </style>`;
export default style;