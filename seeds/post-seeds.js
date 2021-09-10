const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
        user_id: 1
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;