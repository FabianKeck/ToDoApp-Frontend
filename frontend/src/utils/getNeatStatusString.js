

export default function getNeatStatusString(status){
    return status.slice(0,1) + status.slice(1).toLowerCase();
}