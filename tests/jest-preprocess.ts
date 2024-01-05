const babelOptions: { presets: string[] } = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};

export default require("babel-jest").default.createTransformer(babelOptions);
