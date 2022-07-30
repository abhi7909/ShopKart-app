import bcrypt from 'bcryptjs';

const users= [
    {
        name: 'Admin',
        email: 'admin@99340gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jon',
        email: 'Jon@99340gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane',
        email: 'Jane@99340gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;