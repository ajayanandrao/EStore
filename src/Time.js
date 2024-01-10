import { parseISO, formatDistanceToNow } from "date-fns";

import React from 'react'

const Time = ({ timestamp }) => {
    let timeAgo = ""

    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <div>

            {timeAgo === "less than a minute ago" ? "just now" : timeAgo}

        </div>
    )
}

export default Time