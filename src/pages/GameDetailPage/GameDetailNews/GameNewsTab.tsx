// Internal dependencies
import GamenautAnnouncements from "./GamenautAnnouncements";
import GamenautEvents from "./GamenautEvents";
import GamenautNews from "./GamenautNews";

export default function GameNewsTab () {
    return (
        <>
            <GamenautNews />
            <GamenautEvents />
            <GamenautAnnouncements />
        </>
    )
}