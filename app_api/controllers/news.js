const mongoose = require('mongoose');
const Model = mongoose.model('news');

// GET: /news - list all news
const newsList = async(req, res) => {
    Model
        .find({}) // returns all
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({"message": "news not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                let latestNews = []
                let vacationTips = []
                let mainStories = []
                for (i = 0; i < news.length; i++) {
                    if (news[i].tag == "latestNews") {
                        latestNews.push(news[i]);
                    } else if (news[i].tag == "vacationTips"){
                        vacationTips.push(news[i]);
                    } else if (news[i].tag == "mainStory"){
                        mainStories.push(news[i]);
                    }
                }
                news = {
                    latestNews,
                    vacationTips,
                    mainStories,
                }
                return res
                    .status(200)
                    .json(news);
            }
        });
};

// GET: /news/:newsCode - returns a single article
const newsFindCode = async(req, res) => {
    Model
        .find({'code': req.params.newsCode})
        .exec((err, news) => {
            if (!news) {
                return res
                    .status(404)
                    .json({"message": "article not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(news)
            }
        });
};

module.exports = {
    newsList,
    newsFindCode
};