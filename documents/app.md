# app additional info

## Table of contents:
- [dependencies](#dependencies)
- [dev-dependencies](#dev-dependencies)
- [scripts](#Scripts)


## dependencies:
    "body-parser": "^1.19.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "method-override": "^3.0.0",
    "mongoose": "^6.2.8"
## dev-dependencies:
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/jasmine": "^4.0.0",
    "@types/method-override": "0.0.32",
    "@types/prettier": "^2.4.4",
    "@types/supertest": "^2.0.12",
    "@types/typescript": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^5.16.0",
    "@typescript-eslint/parser": "^5.16.0",
    "eslint": "^8.12.0",
    "eslint-config-google": "^0.14.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-promise": "^5.2.0",
    "jasmine": "^4.0.2",
    "jasmine-spec-reporter": "^7.0.0",
    "prettier": "^2.6.1",
    "supertest": "^6.2.2",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"

## Scripts:
    "start": "node .",
    "lint": "eslint ./src/**/* ./dist/**/* --fix",
    "build-and-lint": "npx tsc && npm run lint",
    "jasmine": "jasmine",
    "build-and-run": "npm run build-and-lint && node ./dist/models/student.js",
    "build-and-test": "npm run build-and-lint && npm run jasmine",
    "nodemon": "nodemon ./dist/models/student.js",
    "ts-watch": "tsc -w"