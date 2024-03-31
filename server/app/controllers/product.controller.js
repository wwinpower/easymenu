const Course = require('../models/product.model.js');
const data = require('./json/products.js');


exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Содержание не может быть пустым"
        });
    }

    const course = new Course({
        title: req.body.title,
        dateStart: req.body.dateStart
    });

    course.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При создании данных произошла ошибка."
        });
    });
};

exports.findByCategoryId = (req, res) => {

    const {categoryId} = req.params;

    const product = data.filter(item => item.categoryId === categoryId);

    res.send(product);

    // Course.find()
    //     .then(courses => {
    //         res.send(data);
    //     }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "При получении данных произошла ошибка."
    //     });
    // });
};

exports.findById = (req, res) => {
    const {productId} = req.params;

    const product = data.find(item => item.id === productId);

    res.send(product);

    // Course.find({id: req.body.id})
    //     .then(courses => {
    //         res.send(courses);
    //     }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "При получении данных произошла ошибка."
    //     });
    // });
};

exports.delete = (req, res) => {
    Course.deleteMany({_id: req.body.id})
        .then(() => {
            Course.find().then(courses => {
                res.send(courses);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "При получении данных произошла ошибка."
                });
            })
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При удалении данных произошла ошибка."
        });
    })
};
