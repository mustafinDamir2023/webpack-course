import webpack from 'webpack'
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";


export function buildWebpack (options: BuildOptions): webpack.Configuration {
   const {mode, paths } = options
   const isDev = options.mode === 'development'

   return { 
       mode: mode ?? 'development',
       entry: paths.entry,
       output: {
          path: paths.output,
          filename: '[name].[contenthash].js',
          clean: true,
      },
       plugins: buildPlugins(options),
       module: {
        // ts-loader умеет работать с JSX
        // если не использовать тайпскрипт: нужен bable-loader
          rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': false,
        devServer: isDev? buildDevServer(options): undefined 
    }
 }

 