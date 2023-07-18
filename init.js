const fs = require('fs');

fs.copyFileSync('.env.sample', '.env');

fs.mkdirSync('tmp/pgdata', { recursive: true });
fs.mkdirSync('pgadmin-data', { recursive: true });
