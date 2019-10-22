'use strict'

const port = process.env.port || process.env.npm_config_port || 8082 // dev port
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        proxy: {
            '/ids': {
                target: 'http://10.206.20.46:8088',
                ws: true,
                changeOrigin: true,
            }
        },
        overlay: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    }
}