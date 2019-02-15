
// helper function to create fetch call
export default function getDataFromApi(apiAddress) {

    return fetch(apiAddress).then(response => {
        return response.json();
        })
        .catch(error => console.warn(error));
}