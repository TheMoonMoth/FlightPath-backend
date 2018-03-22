
exports.seed = function(knex, Promise) {
  return knex('fiction').del()
    .then(function () {
      return knex("fiction").insert([
        {
          id: 1,
          title: "The Title",
          author: "The Guy",
          body: [
            "That's one small step for [a] man, one giant leap for mankind.",
            "",
            "The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.",
            "",
            "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine",
            "",
            "Across the sea of space, the stars are other suns.",
            "",
            "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.",
            "",
            "The End"
          ],
          tags: [0, 1]
        },
        {
          id: 2,
          title: "Star Traveller",
          author: "Starman",
          body: [
            "That's one small step for [a] man, one giant leap for mankind.",
            "",
            "The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.",
            "",
            "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine",
            "",
            "Across the sea of space, the stars are other suns.",
            "",
            "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.",
            "",
            "The End"
          ],
          tags: [0, 1]
        },
        {
          id: 3,
          title: "Solar Winds",
          author: "Tunlinque",
          body: [
            "That's one small step for [a] man, one giant leap for mankind.",
            "",
            "The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.",
            "",
            "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine",
            "",
            "Across the sea of space, the stars are other suns.",
            "",
            "Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.",
            "",
            "The End"
          ],
          tags: [0, 1]
        }
      ]);
    })
     .then(() => {
      return knex.raw("ALTER SEQUENCE fiction_id_seq RESTART WITH 4;");
    });
};
