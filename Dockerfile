FROM cypress/browsers:node18.12.0-chrome107

WORKDIR /home/test-cypress

COPY . /home/test-cypress

RUN npm install
