import { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data =>
                setReviews(data))
    }, []);
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Some Of Our Customers Feedback
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-indigo-50 p-6 rounded-lg shadow-md text-left"
                            >
                                <div className="flex justify-center mb-3">
                                    {/* Star Ratings */}
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <span key={i} className="text-yellow-500 text-xl">★</span>
                                        ))}
                                </div>
                                <p className="text-gray-700">{review.review}</p>
                                <p className="mt-4 font-semibold text-gray-900">
                                    {review.name}
                                </p>
                                <p className="mt-4 font-semibold text-gray-900">
                                    {review.location}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;