module.exports = {
    publicPath: '/',
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        page1: {
            entry: 'src/pages/page1/main.js',
            template: 'public/index.html',
            filename: 'page1.html',
            title: 'page1',
            chunks: ['chunk-vendors', 'chunk-common', 'page1']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
        page2: {
            // page 的入口
            entry: 'src/pages/page2/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'page2.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'page2',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['page2']
            chunks: ['chunk-vendors', 'chunk-common', 'page2']
        }
    },
    productionSourceMap: false,
    filenameHashing: false,
    css: {
        extract: true
    },
    configureWebpack: {
        plugins: []
    },
    chainWebpack: config => {
        // if (process.env.NODE_ENV === 'production') {
        //     config.output.filename('[name]/[name].[contenthash:8].js').chunkFilename('js/[name].[contenthash:8].js')
        //     config.plugin('extract-css').tap(args => {
        //         args[0].filename = '[name]/[name].[contenthash:8].css'
        //         args[0].chunkFilename = 'css/[name].[contenthash:8].css'
        //         return args
        //     })
        // }
    }
}
