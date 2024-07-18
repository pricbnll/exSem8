export async function getUsers() {
    // console.log('getUsers::deu certo')
    const response = await fetch('http://localhost:3000/users', { method: 'GET' })
    const data = await response.json()
    //  console.log(response) 
    getUsers(response)

    return data
}