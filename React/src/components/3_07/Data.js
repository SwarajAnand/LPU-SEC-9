const users = [];

for (let i = 1; i <= 200; i++) {
  users.push({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`
  });
}

export default users;