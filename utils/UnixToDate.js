

 const UnixToDate = (unix) => {
    const timestamp = unix
    const milsecs = timestamp * 1000
    const dateObject = new Date(milsecs)
    return dateObject
}

export default UnixToDate