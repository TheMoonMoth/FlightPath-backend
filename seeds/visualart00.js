exports.seed = function(knex, Promise) {
  return knex("visualart")
    .del()
    .then(function() {
      return knex("visualart").insert([
        {
          id: 1,
          title: "The Moon",
          artist: "Nick Gindraux",
          url:
            "https://www.igorstshirts.com/blog/conceptships/2015/nick_gindraux/nick_gindraux_02.jpg",
          tags: [0, 1]
        },
        {
          id: 2,
          title: "Sky Temple",
          artist: "Alyn Spiller",
          url:
            "https://pre00.deviantart.net/52fd/th/pre/i/2017/160/b/9/sky_temple_by_alynspiller-dbc3wzh.jpg",
          tags: [0, 1]
        },
        {
          id: 3,
          title: "The Moon",
          artist: "Classical Gas",
          url:
            "https://3.bp.blogspot.com/-bIBARK6mN5E/Vv69mUXlfjI/AAAAAAAAWBs/HLv1iSG2p1cqOtcgocnWAbyhOzHHF-4hg/s640/destination%2Bmoon%2B3.jpg",
          tags: [0, 1]
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE visualart_id_seq RESTART WITH 4;");
    });
};
