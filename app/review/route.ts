import { reviewsTab } from "./data";

export async function GET() {
    return new Response(JSON.stringify(reviewsTab), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request: Request) {
    const review = await request.json();

    const newReview = {
        id: reviewsTab.length + 1,
        text: review.text
    }

    reviewsTab.push(newReview)

    return new Response(JSON.stringify(newReview), {
        headers: { 
            'Content-Type': 'application/json'
        },
        status: 200
    });
}