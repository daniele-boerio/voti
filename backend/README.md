per poter eseguire il backend aprire vs code nella cartella 'BACKEND' ed eseguire i comandi

- installa Node.js

- npm install
- echo 'DATABASE_URL="file:./dev.db"' > .env
- npx prisma generate
- npx prisma migrate deploy
- npx prisma db seed
- npm run dev
