# 1. ベースとなるWordPressイメージを指定
FROM wordpress:6.7.1-php8.2-apache

# 2. ユーザをrootにする
USER root

#3. インストール可能なパッケージを更新、node.jsをインストール
# Node.js 18.x の記述がある部分を 20.x に変更します
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs