// Data fetch.
async function data () {
    const response = await fetch('../data.json');
    const data = response.json();
    return data;
}
/* data().then(datas => {
    // console.log (datas)
}) */

export default data;