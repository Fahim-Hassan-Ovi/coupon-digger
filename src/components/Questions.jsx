
const Questions = () => {
    return (
        <div className="space-y-8 my-10"> 
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is Coupon Digger</div>
                <div className="collapse-content">
                    <p> Coupon Digger is an online platform that helps users find and collect the latest discount coupons, promo codes, and deals from various brands and online stores.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are the coupons on Coupon Digger always valid?</div>
                <div className="collapse-content">
                    <p>We do our best to keep our coupons updated, but some offers may expire.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How often are new coupons added?</div>
                <div className="collapse-content">
                    <p>We update our database daily to provide the latest and best deals from popular brands.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;