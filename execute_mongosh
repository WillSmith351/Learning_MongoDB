const { spawn } = require('child_process');

const mongosh = spawn('mongosh', [], { stdio: 'inherit' });

mongosh.on('error', (error) => {
    console.error(`Erreur lors du lancement de mongosh: ${error.message}`);
});
