export default function HobbyLinks(){
    let hobbyLinks = [
    "https://www.dickssportinggoods.com/f/roller-blades",
    "https://www.cfl.ca/",
    "https://www.vegascreativesoftware.com/us/vegas-pro/"];

    return(
        <div>
            <a href = {hobbyLinks[0]}>Inline Skating</a><br/>
            <a href = {hobbyLinks[1]}>Watching Canadian Football</a><br/>
            <a href = {hobbyLinks[2]}>Video Editing</a>
        </div>
    );
}