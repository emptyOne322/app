export default function tryParseJSON (jsonString){
    try {
        const res = JSON.parse(jsonString);
        if (res && typeof res === "object") {
            return res;
        }
    }
    catch (e) {
      console.log(e);
    }
  }
