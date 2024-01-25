# Use a imagem Node.js 18 como base
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Instale as dependências e configure o ambiente
RUN apt-get update && \
    apt-get install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

RUN mkdir /var/www/html -p \
    && ln -s /usr/src/app /var/www/html \
    && chown -R www-data:www-data /usr/src/app

# Exponha a porta 3001
EXPOSE 3001

