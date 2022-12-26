import { Host, KRNL_HOST, Social } from "../data/hosts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function getImage(social: Social) {
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
        case "Email":
            return solid("envelope")
        default:
            console.assert(false, "You fool! You haven't implemented this social type: " + social.platform)
            return solid("question")
    }
}

export default function SocialButtons({ member }: { member: Host }) {
    let buttons = []
    for (const social of member.socials) {
        buttons.push(<a className="tooltip" data-tip={social.platform} href={social.url} key={social.platform.toString()}>
            <FontAwesomeIcon
                icon={getImage(social)}
                size="2x"
                fixedWidth
                className="mx-2 bg-purple-900 p-2 rounded-full text-slate-200 hover:bg-purple-500 hover:text-cyan-200 transition duration-500 ease-in-out"
            />
        </a>)
    }
    return (<div>
        {buttons}
    </div>)
}

export function KRNLSocialButtons() {
    return (<SocialButtons member={KRNL_HOST} />)
}