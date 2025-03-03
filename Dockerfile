FROM mcr.microsoft.com/playwright:v1.39.0-focal

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY wdio.conf.js ./
COPY configs/ configs/
COPY resources/ resources/
COPY test/features/ test/features/
COPY test/page-objects/ test/page-objects/
COPY test/step-definitions/ test/step-definitions/

CMD ["npx", "wdio", "run", "wdio.conf.js"]
