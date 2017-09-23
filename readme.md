# 想定環境
- vagrant 1.9.3
- centos7.2

# 出来ること
- /src 以下のファイルの更新すると自動コンパイル(主にscssとjs)
- ファイルが更新されるとブラウザが自動リロードされる

# 使用方法
```
npm i -g gulp
npm i -D install
```

## ※ホスト端末がwindowsでsym linkしてる場合
```
npm i -g gulp
npm i -D --no-bin-links --no-optional install
```
