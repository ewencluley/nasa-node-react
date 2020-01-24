const fs = require("fs");
const host = "127.0.0.1";
const port = 3000;
const express = require("express");
const request = require("request");

const API_BASE_URL = `https://api.nasa.gov/mars-photos/api/v1/`;
const CAMERA = "NAVCAM";

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/frontend folder

app.get("/rover/:roverName/photos", function(req, resp){
	request(`${API_BASE_URL}manifests/${req.params.roverName}?api_key=DEMO_KEY`, { json: true }, (err, res, body) => {
		if (err) { return console.log(err); }
		resp.send( processManifest(body));
	});
});

app.get("/rover/:roverName/photo/:sol/", function(req, resp){
	let uri = `${API_BASE_URL}rovers/${req.params.roverName}/photos?sol=${req.params.sol}&camera=${CAMERA}&api_key=DEMO_KEY`;
	console.log(`calling: ${uri}`);
	request(uri, { json: true }, (err, res, body) => {
		if (err) { return console.log(err); }
		resp.send( processPhotos(body));
	});
});

function processManifest(body) {
	let photos = body.photo_manifest.photos
		.map(photo_sol => {
			return {
				sol: photo_sol.sol,
				photos: photo_sol.total_photos,
				cameras: photo_sol.cameras
			}
		}).filter(photo_sol => {
			return photo_sol.cameras.includes(CAMERA);
		});
	return photos;
}

function processPhotos(body) {
	let photos = body.photos
		.map(photo => {
			return {
				img_src: photo.img_src,
				earth_date: photo.earth_date
			}
		});
	return photos;
}

app.listen(port, host);