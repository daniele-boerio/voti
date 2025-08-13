per poter eseguire il frontend aprire vs code nella cartella 'FRONTEND' ed eseguire i comandi:
'npm install'
'npm run dev -- --host'

per poter eseguire il backend aprire vs code nella cartella 'BACKEND' ed eseguire i comandi:
'npx ts-node-dev src/index.ts --respawn --transpile-only'

per modificare i seed del database e rimontarli eseguire:
'npx prisma db seed'

per modificare lo schema del db eseguire:
'npx prisma migrate dev --name ...'
