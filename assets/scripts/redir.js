const params = new URLSearchParams(window.location.search);
let site = params.get("site");

const trusted = [
    "youtube.com",
    "youtu.be",
    "discord.com",
    "discord.gg",
    "steamcommunity.com",
    "store.steampowered.com"
    "http://github.com"
    "github.io"
    "filik19.github.io"
    "google.com"
    "microsoft.com"
    "xbox.com"
];

try {
    const url = new URL(site);
    const host = url.hostname;

    if (trusted.some(d => host.endsWith(d))) {
        window.location.href = site;
    } else {
        document.getElementById("warning").style.display = "block";
        document.getElementById("continue").onclick = () => {
            window.location.href = site;
        };
    }
} catch {
    document.body.innerHTML = "url=invalid";
}
