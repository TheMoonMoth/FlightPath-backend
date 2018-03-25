
exports.seed = function(knex, Promise) {
  return knex('submissions').del()
    .then(function () {
      return knex("submissions").insert([
        {
          id: 1,
          category: "Fiction",
          title: "A Tale of Escape",
          author: "Kyle Weintraub",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 2,
          category: "Fiction",
          title: "The New Britannica",
          author: "Kyle Weintraub",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 3,
          category: "Fiction",
          title: "One Cozy Ship",
          author: "Kyle Weintraub",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 4,
          category: "Poetry",
          title: "Ze Cozmas",
          author: "Pierre LaRoix",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 5,
          category: "Poetry",
          title: "Martian Cigarette",
          author: "Pierre LaRoix",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 6,
          category: "Poetry",
          title: "Grapes of Jupiter",
          author: "Pierre LaRoix",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 7,
          category: "Art",
          title: "The Gateway",
          author: "Rob Boss",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 8,
          category: "Art",
          title: "Happy Terreforms",
          author: "Rob Boss",
          url: "returns ON submission",
          tags: [10, 9]
        },
        {
          id: 9,
          category: "Art",
          title: "Lonely Planet",
          author: "Rob Boss",
          url: "returns ON submission",
          tags: [10, 9]
        }
      ]);
    });
};
