let user;

alert(user ?? "Anonymous"); // Anonymous (user not defined)

let user2 = "John";

alert(user2 ?? "Anonymous"); // John (user defined)

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
