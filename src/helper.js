async function getData () {
    const response = await fetch('./result_played.csv')
    const data = await response.text()
    console.log(data)
}
module.exports = {
    getData
}