exports.seed = function(knex, Promise) {
  return knex("featured")
    .del()
    .then(function() {
      return knex("featured").insert([
        {
          id: 1,
          title: "Time Lord Mace Windu",
          author: "Tilda Swinshin",
          body: [
            "Ipsum Blaster malcom bantha alderaan dantooine palpatine boomer frack, grievous inara. Hypercube firefly jelly babies sullust sarlacc. Serenity firefly biodamper, antilles AT-AT landspeeder sullust jedi. Galmonging FTL inara biodamper sullust R2-D2 reavers the empire strikes back, tardis apollo. Return of the jedi krypter mace windu serenity, sitrep fodder jango fett sith wash.",
            "",
            "Cantina R2-D2 inara antilles, greedo han solo river dooku jedi. Wyrwulf rassilon nethersphere ackbar mace windu greedo warpstar paradox machine. River carbonite alderaan jabba tatooine, husker vader. Hypercube river jethrik, wash vader the ‘verse jar jar darth greedo ewok jedi mind trick grievous. Dagobah mace windu validium inara return of the jedi droid vader wyrwulf gaius. Tatooine jango fett ice gun skywalker nethersphere.",
            "",
            "A new hope maul dalek doctor who cantina lando. Sullust nerf herder protocol droid biodamper force. Sarlacc endor hutt taanab. Coruscant droid FTL wash frack blaster. Hutt vader the empire strikes back, crazy ivan jabba morpho yoda.",
            "",
            "Alderaan antilles inara, ice gun battlestar saffron ackbar grand moff tarkin AT-AT starbuck. Biodamper obi-wan sitrep jelly babies, tardis galmonging doctor who. Bazoolium coruscant exterminate, R2-D2 sullust sitrep jelly babies crazy ivan rassilon wyrwulf sith jethrik. Grand moff tarkin antilles fodder, dantooine skywalker frak dagobah doctor who. Sitrep endor felgercarb bothan. Serenity nerf herder tylium ore blaster. R2-D2 frak nethersphere hoth starbuck sitrep dynatrope jedi mind trick coruscant AT-AT everlasting matches sith FTL youngling.",
            "",
            "Alderaan antilles inara, ice gun battlestar saffron ackbar grand moff tarkin AT-AT starbuck. Biodamper obi-wan sitrep jelly babies, tardis galmonging doctor who. Bazoolium coruscant exterminate, R2-D2 sullust sitrep jelly babies crazy ivan rassilon wyrwulf sith jethrik. Grand moff tarkin antilles fodder, dantooine skywalker frak dagobah doctor who. Sitrep endor felgercarb bothan. Serenity nerf herder tylium ore blaster. R2-D2 frak nethersphere hoth starbuck sitrep dynatrope jedi mind trick coruscant AT-AT everlasting matches sith FTL youngling.",
            "",
            "Time lord mace windu bantha, jango fett dalek yoda krypter. AT-AT pegasus luke, grand moff tarkin hoth galmonging ackbar wedge ice gun nethersphere R2-D2 gaius. Frak jawa psychic paper cylon gorram blaster vader. Dantooine sullust dalek hypercube nethersphere chewbacca psychic paper serenity wookie jawa. Palpatine nerf herder validium, alderaan dooku speeder pegasus x-wing.",
            "",
            "Rassilon gaius tylium ore, grievous dantooine the ‘verse speeder ord mantell exterminate han solo antilles AT-AT battlestar. Apollo tardis krypter, tie fighter light saber bantha dooku galactica bazoolium jelly babies river a new hope jethrik. Everlasting matches frack saffron dynatrope jar jar exterminate grand moff tarkin ackbar. Everlasting matches endor validium carbonite speeder, C-3PO grievous paradox machine mace windu boba fett. Light saber maul starbuck darth leia taanab tylium ore jayne palpatine yavin tie fighter han solo. Husker time lord felgercarb coruscant the ‘verse wedge yavin.",
            "",
            "Bazoolium cloud city the empire strikes back dantooine nanogenes alderaan. Firefly starbuck wyrwulf river jango fett sullust. Validium vader R2-D2 galactica, tatooine youngling krypter obi-wan x-wing psychic paper luke serenity. Padawan malcom cylon dynatrope maul return of the jedi. River jayne exterminate force bazoolium nanogenes speeder."
          ]
        },
        {
          id: 2,
          title: "Padawan Malcom",
          author: "DaShawn",
          body: [
            "Bazoolium cloud city the empire strikes back dantooine nanogenes alderaan. Firefly starbuck wyrwulf river jango fett sullust. Validium vader R2-D2 galactica, tatooine youngling krypter obi-wan x-wing psychic paper luke serenity. Padawan malcom cylon dynatrope maul return of the jedi. River jayne exterminate force bazoolium nanogenes speeder.",
            "",
            "Bazoolium cloud city the empire strikes back dantooine nanogenes alderaan. Firefly starbuck wyrwulf river jango fett sullust. Validium vader R2-D2 galactica, tatooine youngling krypter obi-wan x-wing psychic paper luke serenity. Padawan malcom cylon dynatrope maul return of the jedi. River jayne exterminate force bazoolium nanogenes speeder.",
            "",
            "Bazoolium cloud city the empire strikes back dantooine nanogenes alderaan. Firefly starbuck wyrwulf river jango fett sullust. Validium vader R2-D2 galactica, tatooine youngling krypter obi-wan x-wing psychic paper luke serenity. Padawan malcom cylon dynatrope maul return of the jedi. River jayne exterminate force bazoolium nanogenes speeder."
          ]
        },
        {
          id: 3,
          title: "Jethrik",
          author: "Grand Moff",
          body: ["Alderaan antilles inara, ice gun battlestar saffron ackbar grand moff tarkin AT-AT starbuck. Biodamper obi-wan sitrep jelly babies, tardis galmonging doctor who. Bazoolium coruscant exterminate, R2-D2 sullust sitrep jelly babies crazy ivan rassilon wyrwulf sith jethrik. Grand moff tarkin antilles fodder, dantooine skywalker frak dagobah doctor who. Sitrep endor felgercarb bothan. Serenity nerf herder tylium ore blaster. R2-D2 frak nethersphere hoth starbuck sitrep dynatrope jedi mind trick coruscant AT-AT everlasting matches sith FTL youngling."]
        }
      ]);
    });
};
