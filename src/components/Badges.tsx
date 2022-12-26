import { getAllHosts, Host, KRNL_HOST, Social } from "../data/hosts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function getBadge(social: Social) {
    switch (social.platform) {
        case "Instagram":
            return brands("instagram")
        case "Tumblr":
            return brands("tumblr")
        case "Twitter":
            return brands("twitter")
        case "Facebook":
            return brands("facebook")
        case "Twitch":
            return brands("twitch")
        case "YouTube":
            return brands("youtube")
        case "SoundCloud":
            return brands("soundcloud")
        case "Spotify":
            return brands("spotify")
        case "Apple Music":
            return brands("apple")
        case "GitHub":
            return brands("github")
        default:
            console.assert(false, "You fool! You haven't implemented this social type: " + social.platform)
            return solid("question")
    }
}

export default function Badges({ member }: { member: Host }) {
    let buttons = []
    for (const social of member.socials) {
        buttons.push(<a className="tooltip" data-tip={social.platform} href={social.url}>
            <FontAwesomeIcon
                icon={getBadge(social)}
                size="2x"
                key={social.platform}
                className="mx-2 bg-purple-900 p-2 rounded-full text-slate-200 hover:bg-purple-500 hover:text-slate-900 transition duration-500 ease-in-out"
            />
        </a>)
    }

    return (<div>
        {buttons}
    </div>)
}