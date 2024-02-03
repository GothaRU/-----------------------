
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

// [TODO_WORK] добавить главный класс ГИТ и добавить базовый функционал (какие то основные шаблоны работы с гитом и работа с классами веток и комитов )
// [TODO_WORK] добавить класс ВЕТОК и добавить базовый функционал (добавить,удалить,переменовать,узнать все комиты,узнать список веток)
// [TODO_WORK] добавить класс КОММИТОВ и добавить базовый функционал (переменование,создание,удаление,подробное описание)