FROM node:16.16.0-buster AS base


FROM base AS dev

# WORKDIR /frontend/
# COPY ./package*.json ./
# RUN npm install


FROM dev AS builder


# FROM nginx:1.22.0 AS prod

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /frontend/dist/ /etc/nginx/html/
# COPY --from=dev /frontend/node_modules ./node_modules/
# COPY ./vite.config.js ./
# COPY ./src/ ./src/
# RUN npm run build


# FROM nginx:1.22.0 AS prod

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /frontend/dist/ /etc/nginx/html/

