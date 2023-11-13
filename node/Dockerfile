FROM node:18

WORKDIR /usr/src/app

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

RUN mkdir /var/www/html -p \
    && ln -s /usr/src/app /var/www/html \
    && chown -R www-data:www-data /usr/src/app

EXPOSE 3001
