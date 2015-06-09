# Bayes Spam
针对中文，使用朴素贝叶斯对语句进行学习、分类。主要使用了 [bayes](https://github.com/ttezel/bayes) 和 [nodejieba](https://github.com/yanyiwu/nodejieba) 两个库。

## Structure
- `index.js` -- 通过学习结果来判定句子的类别。句子硬编码在里面了。
- `learn.js` -- 用来 learning 的。程序会分别从 `positive` 和 `negative` 两个文件中分别读入句子，分类名就是这个文件的名字。
- `posotive` -- 存储积极的句子。
- `negative` -- 存储不积极的句子，就是小广告啊之类的。
- `classifier` -- 存储了学习完成之后的结果，`index.js` 可以直接调用，不必每次都重新学习。

## Run
- `npm install`
- `node learn.js`
- `node index.js`

## Others
初学 Node.js，写的不对的地方还望指出，感谢~！
