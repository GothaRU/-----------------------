
console.log('test node')
const { exec } = require('node:child_process');

exec('git config --global user.name', (error, stdout, stderr) => {
    console.log('[error] ',error)
    console.log('[stdout] ',stdout)
    console.log('[stderr] ',stderr)
})

exec('git log', (error, stdout, stderr) => {
    console.log('[error] ',error)
    console.log('[stdout] ',stdout)
    console.log('[stderr] ',stderr)
})

