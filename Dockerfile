FROM node:11-alpine

# Directory
ARG APP_DIR=app/back

RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# For production 

# Copy project files
COPY . .

# Expose running port
EXPOSE 3001

# Run the project
CMD ["yarn", "start"]
