FROM node:14.2.0-alpine3.10 as ui-builder
RUN mkdir /app

WORKDIR /app
ENV PATH ./app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
COPY . /app
RUN npm run build

FROM nginx
COPY  --from=ui-builder /app/build /usr/share/nginx/html
COPY --from=ui-builder /app/nginx.conf /temp/nginx.conf
RUN envsubst /app < /temp/nginx.conf > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx","-g","daemon off;"]
