import Card from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            Composant Notification
            <h5>Composant Notifications</h5>
            <Link href="/dashboard/archived">Archive</Link>
        </Card>
    )
}