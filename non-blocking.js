const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time: ${Date.now() - tick}ms`)

const nonblockingCode = () => {
    return Promise.resolve().then(value => {
        let i = 0
        while(i < 10000000000)
            i++
        return 'Big task done...'
    })
}

log('Some statements...')
nonblockingCode().then(log)
log('Some more statements...')