module.exports = (func, callback = console.log) => {
    if (!func) {
        return (_func, _callback) => {
            let ts = (new Date).getTime()

            _func(() => {
                _callback((new Date).getTime() - ts)
            })
        }
    }

    let ts = (new Date).getTime()
    
    func()
    callback((new Date).getTime() - ts)
}