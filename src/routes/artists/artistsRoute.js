const express = require("express")
const { getArtists, getArtist, createArtist } = require("../../controllers/artistsController")
const router = express.Router()

router.route("/").get(getArtists)
router.route("/").post(createArtist)
router.route("/:id").get(getArtist)

/* Simplified Aproach */
// router.route("/").get(getArtists).post(createArtist)
module.exports = router