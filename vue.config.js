module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
	    config.module.rule('md')
	      .test(/\.md/)
	      .use('html-loader')
	      .loader('html-loader')
	      .end()
	      .use('markdown-loader')
	      .loader('markdown-loader')
	      .options({
	      	
	      })
	       config
	      .plugin('html')
	      .tap(args => {
	        args[0].title= '爬虫机器人展示平台'
	        return args
	      })
	  }
}