exports.seed = function(knex, Promise) {
  return knex("poetry")
    .del()
    .then(function() {
      return knex("poetry").insert([
        {
          id: 1,
          title: "Moon Rocks",
          author: "Walt W.",
          body: [
            "That's one small",
            "step for man,", 
            "one giant leap for", 
            "mankind.",
            "",
            "I believe", 
            "every human", 
            "has a finite number", 
            "of heartbeats.", 
            "",
            "I don't intend to waste any of mine",
            "",
            "Across the sea of space,", 
            "the stars are",
            "other suns."
          ],
          tags: [0, 1]
        },
        {
          id: 2,
          title: "Surface of a Sun",
          author: "Bernie Crisp",
          body: [
            "Across the sea of space, the stars are other suns.",
            "",
            "Spaceflights cannot be stopped.",
            "",
            "This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human", 
            "", 
            "development."
          ],
          tags: [0, 1]
        },
        {
          id: 3,
          title: "My body is a vacuum",
          author: "Sad guy",
          body: [
            "Across the sea of space, the stars are other suns.",
            "",
            "Spaceflights cannot be stopped.", 
            "",
            "This is not the work", 
            "",
            "of any one man or even a group of men.",
          ],
          tags: [0, 1]
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE poetry_id_seq RESTART WITH 4;");
    });
};
