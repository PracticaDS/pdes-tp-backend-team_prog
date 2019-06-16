FROM node:8

# Directory
ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}

WORKDIR ${APP_DIR}

# Install dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# For production 
# RUN npm install --production

# Copy project files
COPY . .

# Expose running port
EXPOSE 8080

# Run the project
CMD ["yarn", "start"]