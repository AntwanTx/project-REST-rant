const db = require('../models')

async function seed() {
    //place = H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //create fake sample comment
    let comment = await db.Comments.create({
        author: 'Fake Fran',
        rant: false,
        stars: 4.5, 
        content: 'Wow, amazing! Highly recommended!'
    })
    // + comment to place's comment array
    place.comments.push(comment.id)

    //save the place
    await place.save()

    process.exit()
}

seed()