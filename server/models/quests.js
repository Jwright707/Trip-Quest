// export const quest = {
//     id: '34300835732321530447673206707498306934859497509820544160359264568',
//     image: 'QmZaF9pNFGPthEJPvJV1J9C8J118mrQodt9xuSJxyRq4i9',
//     intro: `<p>A few months ago, Rasheed was on a geocache hike and he was abducted
//   by aliens. Rasheed escaped, but not without being tested with
//   radioactive materials beforehand! Rasheed made it back to Earth
//   safely, but now his beard has grown quite a bit! It glows green when
//   he is sleeping, and he occasionally sleepwalks. Sometimes, he will
//   sleepwalk all the way across the state of California!
//   </p>
//   <p>
//   Whenever he sleepwalks, aliens will arrive at his last known location;
//   they still need to do more tests and want to abduct him again!
//   </p>
//   <p>Click the "Quest Log" below to view your first quest to Save Rasheed.</p>`,
//     name: 'Save Rasheed - Spatial 2018',
//     createdAt: '1537896650125',
//     checkinButton: 'Blast Em!',
//     checkinCompletion: 'Threat Eliminated',
//     tokens: [
//       {
//         name: 'Default Token',  
//         image: 'QmSCxy5dg7ckFDT9FPbPn7whJc6ZnfVZ8S5v7oyM9fdLV3',
//         isDefault: true,
//       },
//       {
//         name: 'Normal Token',
//         image: 'Qmf3zPM8x3bhtgUcHH2s1KmKX1VqLTFtYBjQQM798KyZcR',
//         startIndex: 30,
//         endIndex: 300,
//       },
//       {
//         name: 'Hat Token',
//         image: 'Qmc1Ptq3TC2kZa4Mywau8kCpLe6VJVzpgrusFvzKo2SF15',
//         startIndex: 10,
//         endIndex: 30,
//       },
//       {
//         name: 'Shwag Token',
//         image: 'QmWXL1GkzQ4nPKg3M5UsN67DoDwNv97RkdzVb21D6kvhRv',
//         startIndex: 0,
//         endIndex: 9,
//       },
//     ],
//     description:
//       'Save Rasheed (and his beerd) whilest he battles ALIENS and sleep walks through San Diego!',
//     decentralized: false,
//     inOrderCompletion: false,
//     checkins: [
//       {
//         name: 'Broadway Pier',
//         id: 'poi.2362169',
//         description:
//           'If you “peer” into the distance, you think you can see some more UFOs over the water… better move fast if you want to find Rasheed!',
//         hint: 'Take a stroll down the boardwalk',
//         image: 'QmXAgZMDo9JdTkG6L3t7aKGgV2eNEFUSvx5cm38wEYLUzD',
//         quadkeys: [
//           '0230132212123123023',
//           '0230132212123123201',
//           '0230132212123123023',
//         ],
//       },
//       {
//         name: 'Unconditional Surrender Statue',
//         id: 'poi.2364557',
//         description:
//           'You must not surrender to the aliens - Rasheed is unconditionally counting on you!',
//         hint: 'Better go in 60/40',
//         image: 'QmSp7wpJBaTFibcKqQ8HPgExx7nWr9ZmLEaBbvsfLjRXKd',
//         quadkeys: ['0230132212123300111'],
//       },
//       {
//         name: 'Star of India',
//         id: 'poi.2361903',
//         description:
//           'Built in 1863, this restored iron-hulled windjammer is now a secret-hideout "museum" for the XYO Network that occasionally sails across the stars and delivers crazy location data!!',
//         hint: 'Stand near star',
//         image: 'QmZsz4BJ4RPr7ZdnUUfZa34EFwDcrVdFHjh91yosd7zXYF',
//         quadkeys: [
//           '0230132212123121023',
//           '0230132212123121201',
//           '0230132212123121210',
//           '0230132212123121032',
//         ],
//       },
//       {
//         name: 'Waterfront Park Fountain',
//         id: 'poi.2364970',
//         description:
//           'It looks like there’s wet footprints along the concrete… Is Rasheed sleepbathing now too?!',
//         hint: 'Jump in to wake up!',
//         image: 'QmPP7bS1JmAF8b6JJ6MWX17oZkdtqBnPtQj3gaHcRDT4dP',
//         quadkeys: [
//           '0230132212123121012',
//           '0230132212123121010',
//           '0230132212123121011',
//           '0230132212123121013',
//         ],
//       },
//       {
//         name: 'Santa Fe Depot',
//         id: 'poi.2360370',
//         description:
//           'Did you know that Rasheed once wandered onto the train and ended up all the way in La Jolla? Luckily, he swung by the local pancake place and got himself some breakfast before heading back home.',
//         hint: 'Look at it from across the street to get that picture.',
//         image: 'QmZ6M2EYpyG54oFgjvHfP91j5gZs7Vuo9Gn12noA7p7TZA',
//         quadkeys: [
//           '0230132212123123131',
//           '0230132212123123113',
//           '0230132212123132002',
//           '0230132212123132020',
//         ],
//       },
//     ],
//     hash: 'Q',
//   }
// going off of this model

const mongoose = require('mongoose');

const questSchema = mongoose.Schema({
    image: { type: String, required: true },
    intro: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    tokens: {
        type: [{
            name: { type: String, required: true },
            image: { type: String, required: true },
            default: { type: Boolean, required: true, default: false }
        }],
        validate: [arrayLimit, '{PATH} requires at least one element']
    },
    description: { type: String, required: true },
    decentralized: { type: Boolean, required: true, default: false },
    inOrderCompletion: { type: Boolean, required: true, default: false },
    checkins: {
        type: [{
            name: { type: String, required: true },
            id:  { type: String, required: false },
            description: { type: String, required: true },
            hint: { type: String, required: true },
            image: { type: String, required: true },
            quadkeys: { type: [Number], required: true }
        }],
        validate: [arrayLimit, '{PATH} requires at least one element']
    },
    hash: { type: String, required: true }
});

function arrayLimit(val) {
    return val.length > 0;
}

module.exports = mongoose.model("Quest", questSchema);