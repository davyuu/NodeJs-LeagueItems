var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds111469.mlab.com:11469/league_items');

var itemSchema = new mongoose.Schema({
	_id: Number,
	item_name: String,
	item_total_price: String,
	item_recipe_price: String,
	item_stats: String,
	item_builds_from: Array,
	item_builds_into: Array,
	item_maps: Array,
	item_image_src: String
});

var Item = mongoose.model('Item', itemSchema);

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.send('test');
	});

    // /items?id=3
    app.get('/items', function(req, res) {
        //get data from mongodb and pass to view
        if(req.query.id != null){
            var id = req.query.id;
            Item.findById(id, function(err, item){
                if (err) throw err;
                res.writeHead(200, {
    				'Content-Type': 'application/json'
    			});
    			res.end(JSON.stringify(item));
            });
        }
        else{
            Item.find({}, function(err, items) {
                if (err) throw err;
                res.writeHead(200, {
    				'Content-Type': 'application/json'
    			});
    			res.end(JSON.stringify(items));
            });
        }
    });
}
