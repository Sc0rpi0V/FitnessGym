import { Result } from "postcss";
import { reviewsTab } from "../data";

export async function GET(_request: Request, {params}: 
    {params: {id:string}}) {
        const review = reviewsTab.find((review) => review.id === parseInt(params.id));

        return new Response(JSON.stringify(review), {
            headers: { 'Content-Type': 'application/json' }
        });
    } 


export async function PATCH(request: Request, {params}: 
    {params: {id:string}}) {

        const body = await request.json();
        const {text} = body;
        const index = reviewsTab.findIndex(
            review => review.id === parseInt(params.id)
        )

        reviewsTab[index].text = text;

        return new Response(JSON.stringify(reviewsTab[index]));
    }