
const sync = async () => {
    await Users.sync();
    await product.sync();
    await Cart.sync();
    await Order.sync();
};
module.exports = sync;