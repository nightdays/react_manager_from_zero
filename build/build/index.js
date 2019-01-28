let webpack = require('webpack');
let config = require('../../webpack.config');

let exe = webpack(config);

exe.run((err,state)=>{


    if(err) {
        console.log(err)
        return;
    }

    let hasError = false;
    let hasWarnings = false;

    const info = state.toJson();

    if(state.hasErrors()) {
        console.error("错误: " + info.errors);
        hasError = true;
    }

    if(state.hasWarnings()) {
        console.warn('警告: ' + info.warnings);
        hasWarnings = true;
    }

    if(hasError) {
        console.error('编译失败');
    }else {
        console.info('编译成功 ' + ( hasWarnings?'但有警告':'') );
    }
})
