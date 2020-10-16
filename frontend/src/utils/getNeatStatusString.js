

export default function getNeatStatusString(status){
    let neatStatus =status.slice(0,1) + status.slice(1).toLowerCase();
    return neatStatus.replace("_"," ")
}