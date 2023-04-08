const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed time: ${Date.now() - tick}ms`)

const blockingCode = () => {
    let i = 0
    while(i < 10000000000)
        i++;
    
    return 'Big task done...'
}

log('Some statements...')
log(blockingCode())
log('Some more statements...')