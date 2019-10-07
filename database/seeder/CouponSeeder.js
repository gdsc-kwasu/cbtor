const Coupon = require('../../models/Coupon');

for (let i = 1900; i < 2000; i++) {
    (async () => {
        await Coupon.create({
            pin: String(i).padStart(12, '0'),
            amount: Math.floor((Math.random() * 1000)),
        }, function(err) {
            if (err) throw err;
        })
    })();
}

console.log('Completed seeding coupons');
