export const myApplicationPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`, { credentials: 'included' }).then(res => res.json());
}