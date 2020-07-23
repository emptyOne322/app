export default function ParseJSON (jsonString){
  if(jsonString !== null) {
    return JSON.parse(jsonString);
  }
  return []
}
