// SET WINDOW TITLE
export function setDocumentTitle(title) {
    document.title = title;
}

// FORMAT PRICE FOR OUTPUT
export function formatPrix(num, fixNumberTo = false) {
    let number = num;
    if (fixNumberTo) {
        number = fixNumber(num);
    }
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

// FIX NUMBER TO 2 DECIMAL
export function fixNumber(value) {
    return Number(Math.round(parseFloat(value + 'e' + 2)) + 'e-' + 2);
}

// FORMAT DATA TO JSON
export function formatToJson(dataToFormat) {
    let parserXML = new DOMParser();
    let xmlDoc = parserXML.parseFromString(dataToFormat, "text/xml");
    let json = xmlTojson(xmlDoc);
    let data = json.wp_ajax.response.object.response_data;
    let regex = /<!\[CDATA\[(.*)\]\]>/gm;
    return JSON.parse(regex.exec(data)[1]);
}

// Changes XML to JSON
export function xmlTojson(srcDOM) {
    let children = [...srcDOM.children];

    if (!children.length) {
        return srcDOM.innerHTML
    }

    let jsonResult = {};

    for (let child of children) {
        let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

        if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
                jsonResult[child.nodeName] = [xmlTojson(child)];
            } else {
                jsonResult[child.nodeName].push(xmlTojson(child));
            }
        } else {
            jsonResult[child.nodeName] = xmlTojson(child);
        }
    }

    return jsonResult;
}