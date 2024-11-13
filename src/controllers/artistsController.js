//@desc Get All Artists
//@route GET /api/v1/artists
//@access public
const getArtists = (req, res) => {
    res.status(200).json({
        message: "Get All Artists from Controller"
    })
}

//@desc Get One Artist
//@route GET /api/v1/artists/:id
//@access public
const getArtist = (req, res) => {
    res.status(200).json({
        message: `Get One Artist from Controller ${req.params.id}`
    })
}

//@desc Create Artist
//@route POST /api/v1/artists
//@access public
const createArtist = (req, res) => {
    console.log("Saving new Artist", req.body);

    const {name, surname, nickname, email} = req.body

    if(!name || !surname || !nickname, !email) {
        res.status(400)
        throw new Error("All Fields are mandatory!")
    }

    res.status(201).json({
        message: "Adding new Artist: " + req.body.name
    })
}

module.exports = {getArtists, getArtist, createArtist}