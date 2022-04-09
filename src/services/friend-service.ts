import {db} from '../connection'

export const getFriends = async () => {
    return await db.query('SELECT * FROM friend')
}

export async function getFriendById(id: number) {
    return await db.any('SELECT * FROM Friend WHERE id = $1', [id])
}

export const saveFriend = async (friend: any) => {
    return await db.one('INSERT INTO Friend(firstname, lastname, email) ' +
        'VALUES ($1, $2, $3, $4, $5)',
        [friend.capital, friend.code, friend.continent, friend.description, friend.nationality])
}

export const updateFriend = async (id:number, friend: any) => {
    return await db.one('UPDATE Friend SET firstname = $1, lastname = $2, email = $3' +
        'WHERE id = $4',
        [friend.firstname, friend.lastname, friend.email, id])
}

export const deleteFriend = async (id:number) => {
    return await db.any('SELECT FROM Friend WHERE id = $1', [id])
}
