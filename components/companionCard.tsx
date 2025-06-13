import Image from "next/image"

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    colort:string
}

const CompanionCard = ({
    id,
    name,
    topic,
    subject,
    duration,
    color
}) => {
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark">
                    <Image src="/icons/bookmark.svg" alt="bookmark"
                        width={12.5} height={15}></Image>
                </button>
            </div>
        </article>
    )
}

export default CompanionCard