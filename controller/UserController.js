const path = require('path');

exports.getIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '../resources/view/user/index.html'));
};

exports.getKamar = (req, res) => {
    res.sendFile(path.join(__dirname, '../resources/view/user/kamar/index.html'));
};

// exports.book_list = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book list");
// });

// exports.book_detail = asyncHandler(async (req, res, next) => {
//   res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
// });

// exports.book_create_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book create GET");
// });

// exports.book_create_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book create POST");
// });

// exports.book_delete_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book delete GET");
// });

// exports.book_delete_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book delete POST");
// });

// exports.book_update_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book update GET");
// });

// exports.book_update_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Book update POST");
// });
